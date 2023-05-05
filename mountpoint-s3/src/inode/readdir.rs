use std::collections::VecDeque;
use std::time::Instant;

use mountpoint_s3_client::ObjectClient;
use tracing::{error, trace, warn};

use crate::sync::{Arc, Mutex, RwLock};

use super::{
    valid_inode_name, InodeError, InodeKind, InodeKindData, InodeNo, InodeStat, LookedUp, RemoteLookup, SuperblockInner,
};

/// Handle for an inflight directory listing
#[derive(Debug)]
pub struct ReaddirHandle {
    inner: Arc<SuperblockInner>,
    dir_ino: InodeNo,
    parent_ino: InodeNo,
    full_path: String,
    page_size: usize,
    remote_results: RwLock<VecDeque<LookedUp>>,
    local_results: RwLock<VecDeque<LookedUp>>,
    next_continuation_token: Mutex<ReaddirStreamState>,
}

#[derive(Debug, PartialEq, Eq)]
enum ReaddirStreamState {
    NotStarted,
    /// Continuation token for the next call
    Continued(String),
    Finished,
}

impl ReaddirStreamState {
    fn take(&mut self) -> Option<String> {
        let old_state = std::mem::replace(self, ReaddirStreamState::Finished);
        if let ReaddirStreamState::Continued(s) = old_state {
            Some(s)
        } else {
            None
        }
    }
}

impl ReaddirHandle {
    pub(super) fn new(
        inner: Arc<SuperblockInner>,
        dir_ino: InodeNo,
        parent_ino: InodeNo,
        full_path: String,
        page_size: usize,
    ) -> Self {
        Self {
            inner,
            dir_ino,
            parent_ino,
            full_path,
            page_size,
            remote_results: Default::default(),
            local_results: Default::default(),
            next_continuation_token: Mutex::new(ReaddirStreamState::NotStarted),
        }
    }

    pub async fn next<OC: ObjectClient>(&self, client: &OC) -> Result<Option<LookedUp>, InodeError> {
        // We will start fetching new results when number of items in the remote results queue is empty
        while self.remote_results.read().unwrap().is_empty() {
            let continuation_token = {
                let mut next_token = self.next_continuation_token.lock().unwrap();

                // populate local results before the first stream
                if *next_token == ReaddirStreamState::NotStarted {
                    let inode = self.inner.get(self.dir_ino)?;
                    let kind_data = &inode.inner.sync.read().unwrap().kind_data;
                    let local_files = match kind_data {
                        InodeKindData::File { .. } => unreachable!("we know this is a directory"),
                        InodeKindData::Directory {
                            children: _,
                            writing_children,
                        } => writing_children.iter().map(|ino| {
                            let inode = self.inner.get(*ino)?;
                            let stat = inode.inner.sync.read().unwrap().stat.clone();
                            Ok(LookedUp { inode, stat })
                        }),
                    };

                    match local_files.collect::<Result<Vec<_>, _>>() {
                        Ok(mut new_results) => {
                            new_results.sort_by(|left, right| left.inode.name().cmp(right.inode.name()));
                            self.local_results.write().unwrap().extend(new_results);
                        }
                        Err(e) => {
                            error!(error=?e, "readdir failed");
                            return Err(e);
                        }
                    }
                }

                if *next_token == ReaddirStreamState::Finished {
                    trace!(self=?self as *const _, "readdir finished");
                    return Ok(self.compare_and_get_next());
                }
                next_token.take()
            };

            trace!(self=?self as *const _, ?continuation_token, "continuing readdir");

            let result = client
                .list_objects(
                    self.inner.bucket.as_str(),
                    continuation_token.as_deref(),
                    "/",
                    self.page_size,
                    self.full_path.as_str(),
                )
                .await
                .map_err(|e| InodeError::ClientError(anyhow::Error::new(e)))?;

            *self.next_continuation_token.lock().unwrap() = match result.next_continuation_token {
                Some(token) => ReaddirStreamState::Continued(token),
                None => ReaddirStreamState::Finished,
            };

            let prefixes = result
                .common_prefixes
                .iter()
                .map(|prefix| &prefix[self.full_path.len()..prefix.len() - 1])
                .filter(|name| valid_inode_name(name))
                .map(|name| {
                    let stat = InodeStat::for_directory(self.inner.mount_time, Instant::now());
                    self.inner.update_from_remote(
                        self.dir_ino,
                        name,
                        Some(RemoteLookup {
                            kind: InodeKind::Directory,
                            stat,
                        }),
                    )
                });
            let objects = result
                .objects
                .iter()
                .map(|object| (&object.key[self.full_path.len()..], object))
                // Hide keys that end with '/', since they can be confused with directories
                .filter(|(name, _object)| valid_inode_name(name))
                .flat_map(|(name, object)| {
                    let last_modified = object.last_modified;
                    let stat = InodeStat::for_file(
                        object.size as usize,
                        last_modified,
                        Instant::now(),
                        Some(object.etag.clone()),
                    );
                    let result = self.inner.update_from_remote(
                        self.dir_ino,
                        name,
                        Some(RemoteLookup {
                            kind: InodeKind::File,
                            stat,
                        }),
                    );
                    // Skip over keys that are shadowed by a directory. We can do this here because
                    // common prefixes are iterated first, and the `sort_by` below is stable.
                    match result {
                        Err(InodeError::ShadowedByDirectory(_, _)) => {
                            warn!(
                                "key {:?} is shadowed by a directory with the same name and will be unavailable",
                                object.key
                            );
                            None
                        }
                        _ => Some(result),
                    }
                });

            // TODO would be nice to do this as a merge sort but the Result makes it messy
            match prefixes.chain(objects).collect::<Result<Vec<_>, _>>() {
                Ok(mut new_results) => {
                    new_results.sort_by(|left, right| left.inode.name().cmp(right.inode.name()));
                    self.remote_results.write().unwrap().extend(new_results);
                }
                Err(e) => {
                    error!(error=?e, "readdir failed");
                    return Err(e);
                }
            }
        }

        Ok(self.compare_and_get_next())
    }

    /// Re-add an entry to the front of the queue if the consumer wasn't able to use it
    pub fn readd(&self, entry: LookedUp) {
        self.remote_results.write().unwrap().push_front(entry);
    }

    pub fn parent(&self) -> InodeNo {
        self.parent_ino
    }

    fn compare_and_get_next(&self) -> Option<LookedUp> {
        let mut local_locked = self.local_results.write().unwrap();
        let mut remote_locked = self.remote_results.write().unwrap();
        match (local_locked.front(), remote_locked.front()) {
            (None, None) => None,
            (None, Some(_)) => remote_locked.pop_front(),
            (Some(_), None) => local_locked.pop_front(),
            (Some(local_lookup), Some(remote_lookup)) => {
                let ordering = local_lookup.inode.name().cmp(remote_lookup.inode.name());
                // compare the inodes at the front of both queues by their names and return the one that has less ordering.
                // in case both inodes have the same name we will prioritise the one from the remote queue,
                // return it as a result and remove the one in the local queue.
                match ordering {
                    std::cmp::Ordering::Less => local_locked.pop_front(),
                    std::cmp::Ordering::Equal => {
                        let _ = local_locked.pop_front();
                        remote_locked.pop_front()
                    }
                    std::cmp::Ordering::Greater => remote_locked.pop_front(),
                }
            }
        }
    }

    #[cfg(test)]
    pub(super) async fn collect<OC: ObjectClient>(&self, client: &OC) -> Result<Vec<LookedUp>, InodeError> {
        let mut result = vec![];
        while let Some(entry) = self.next(client).await? {
            result.push(entry);
        }
        Ok(result)
    }
}
