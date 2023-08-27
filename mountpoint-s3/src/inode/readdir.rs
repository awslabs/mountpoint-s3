//! Utilities for implementing the `readdir` operation on a directory inode.
//!
//! `readdir` is conceptually simple ("just call ListObjectsV2") but has some subtleties that make
//! it complicated:
//!
//! 1. It's possible for a directory to contain both a subdirectory and a file of the same name, in
//!    which case we need to implement shadowing in the right way.
//! 2. A directory can also contain local files/subdirectories, which we want to have appear in the
//!    readdir stream, but be shadowed by remote files/subdirectories.
//! 3. ListObjectsV2 returns common prefixes including the trailing '/', which messes up ordering
//!    of entries in the readdir stream. For example, `a-/` < `a/`, but `a-` > `a` in lexicographic
//!    order, so we need to re-sort the common prefixes rather than just streaming them directly.
//! 4. We want to do large ListObjectsV2 calls (i.e. with a large page size), but `readdir` calls
//!    typically are much smaller, so we need to hold onto ListObjectsV2 results for a while. But we
//!    don't want them to expire while we're holding onto them.
//! 5. FUSE's `readdir` design makes it hard to know in advance exactly how many entries we'll be
//!    able to return in a single request (fixed-size buffer but names are variable size), so we
//!    need to be able to "peek" the next entry in the stream in case it won't fit.
//!
//! This module tries to decouple each of these requirements by building a hierarchy of iterators
//! to implement the `readdir` stream:
//!
//! * [ReaddirHandle] is the top-level iterator, and the only public struct in this module. Its
//!   results can be directly returned to `readdir`. It takes results from [ReaddirIter] and creates
//!   inodes for them, achieving point 4. It also has a [ReaddirHandle::readd] method to handle
//!   point 5.
//! * [ReaddirIter] is an iterator over [ReaddirEntry]s, which are entries that may not yet have
//!   inodes created for them. [ReaddirIter] merges together two streams, [RemoteIter] and
//!   [LocalIter], to handle point 2. While merging, [ReaddirIter] also deduplicates the entries it
//!   returns to handle point 1.
//! * [RemoteIter] is an iterator over [ReaddirEntry]s returned by paginated calls to ListObjectsV2.
//!   Rather than directly streaming the entries out of the list call, it collects them in memory
//!   and re-sorts them to handle point 3.
//! * [LocalIter] is an iterator over [ReaddirEntry]s that are local children of the directory.
//!   These children are listed only once, at the start of the readdir operation, and so are a
//!   snapshot in time of the directory.

use std::cmp::Ordering;
use std::collections::VecDeque;

use mountpoint_s3_client::{ObjectClient, ObjectInfo};
use tracing::{error, trace, warn};

use crate::sync::{Arc, AsyncMutex, Mutex};

use super::{
    valid_inode_name, InodeError, InodeKind, InodeKindData, InodeNo, InodeStat, LookedUp, RemoteLookup, SuperblockInner,
};

/// Handle for an inflight directory listing
#[derive(Debug)]
pub struct ReaddirHandle {
    inner: Arc<SuperblockInner>,
    dir_ino: InodeNo,
    parent_ino: InodeNo,
    iter: AsyncMutex<ReaddirIter>,
    readded: Mutex<Option<LookedUp>>,
}

impl ReaddirHandle {
    pub(super) fn new(
        inner: Arc<SuperblockInner>,
        dir_ino: InodeNo,
        parent_ino: InodeNo,
        full_path: String,
        page_size: usize,
    ) -> Result<Self, InodeError> {
        let local_entries = {
            let inode = inner.get(dir_ino)?;
            let kind_data = &inode.get_inode_state()?.kind_data;
            let local_files = match kind_data {
                InodeKindData::File { .. } => return Err(InodeError::NotADirectory(inode.err())),
                InodeKindData::Directory { writing_children, .. } => writing_children.iter().map(|ino| {
                    let inode = inner.get(*ino)?;
                    let stat = inode.get_inode_state()?.stat.clone();
                    Ok(ReaddirEntry::LocalInode {
                        lookup: LookedUp { inode, stat },
                    })
                }),
            };

            match local_files.collect::<Result<Vec<_>, _>>() {
                Ok(mut new_results) => {
                    new_results.sort();
                    new_results
                }
                Err(e) => {
                    error!(error=?e, "readdir failed listing local files");
                    return Err(e);
                }
            }
        };

        let iter = ReaddirIter::new(&inner.bucket, &full_path, page_size, local_entries.into());

        Ok(Self {
            inner,
            dir_ino,
            parent_ino,
            iter: AsyncMutex::new(iter),
            readded: Default::default(),
        })
    }

    /// Return the next inode for the directory stream. If the stream is finished, returns
    /// `Ok(None)`. Does not increment the lookup count of the returned inodes: the caller
    /// is responsible for calling [`remember()`] if required.
    pub async fn next<OC: ObjectClient>(&self, client: &OC) -> Result<Option<LookedUp>, InodeError> {
        if let Some(readded) = self.readded.lock().unwrap().take() {
            return Ok(Some(readded));
        }

        // Loop because the next entry from the [ReaddirIter] may be hidden from the file system,
        // if it has an invalid name.
        loop {
            let next = {
                let mut iter = self.iter.lock().await;
                iter.next(client).await?
            };

            if let Some(next) = next {
                // Short-circuit the update if we know it'll fail because the name is invalid
                if !valid_inode_name(next.name()) {
                    warn!("{} has an invalid name and will be unavailable", next.description());
                } else {
                    let lookup = self.instantiate_remote_inode(next)?;
                    return Ok(Some(lookup));
                }
            } else {
                return Ok(None);
            }
        }
    }

    /// Re-add an entry to the front of the queue if the consumer wasn't able to use it
    pub fn readd(&self, entry: LookedUp) {
        let old = self.readded.lock().unwrap().replace(entry);
        assert!(old.is_none(), "cannot readd more than one entry");
    }

    /// Increase the lookup count of the looked up inode and
    /// ensure it is registered with the superblock.
    pub fn remember(&self, entry: &LookedUp) {
        self.inner.remember(&entry.inode);
    }

    /// Return the inode number of the parent directory of this directory handle
    pub fn parent(&self) -> InodeNo {
        self.parent_ino
    }

    /// Create or update an inode for the given ReaddirEntry.
    fn instantiate_remote_inode(&self, entry: ReaddirEntry) -> Result<LookedUp, InodeError> {
        let remote_lookup = match &entry {
            // If we made it this far with a local inode, we know there's nothing on the remote with
            // the same name, because [LocalInode] is last in the ordering and so otherwise would
            // have been deduplicated by now.
            ReaddirEntry::LocalInode { .. } => None,
            ReaddirEntry::RemotePrefix { .. } => {
                let stat = InodeStat::for_directory(self.inner.mount_time, self.inner.cache_config.dir_ttl);
                Some(RemoteLookup {
                    stat,
                    kind: InodeKind::Directory,
                })
            }
            ReaddirEntry::RemoteObject { object_info, .. } => {
                let stat = InodeStat::for_file(
                    object_info.size as usize,
                    object_info.last_modified,
                    Some(object_info.etag.clone()),
                    object_info.storage_class.clone(),
                    object_info.restore_status,
                    self.inner.cache_config.file_ttl,
                );
                Some(RemoteLookup {
                    stat,
                    kind: InodeKind::File,
                })
            }
        };
        self.inner.update_from_remote(self.dir_ino, entry.name(), remote_lookup)
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

/// A single entry in a readdir stream. Remote entries have not yet been converted to inodes -- that
/// should be done lazily by the consumer of the entry.
#[derive(Debug)]
enum ReaddirEntry {
    RemotePrefix { name: String },
    RemoteObject { name: String, object_info: ObjectInfo },
    LocalInode { lookup: LookedUp },
}

// This looks a little silly but makes the [Ord] implementation for [ReaddirEntry] a bunch clearer
#[derive(Debug, Clone, Copy, PartialOrd, Ord, PartialEq, Eq)]
enum ReaddirEntryKind {
    RemotePrefix,
    RemoteObject,
    LocalInode,
}

impl ReaddirEntry {
    fn name(&self) -> &str {
        match self {
            Self::RemotePrefix { name } => name,
            Self::RemoteObject { name, .. } => name,
            Self::LocalInode { lookup } => lookup.inode.name(),
        }
    }

    fn kind(&self) -> ReaddirEntryKind {
        match self {
            Self::RemotePrefix { .. } => ReaddirEntryKind::RemotePrefix,
            Self::RemoteObject { .. } => ReaddirEntryKind::RemoteObject,
            Self::LocalInode { .. } => ReaddirEntryKind::LocalInode,
        }
    }

    /// How to describe this entry in an error message
    fn description(&self) -> String {
        match self {
            Self::RemotePrefix { name } => {
                format!("directory '{name}'")
            }
            Self::RemoteObject { name, object_info } => {
                format!("file '{}' (full key {:?})", name, object_info.key)
            }
            Self::LocalInode { lookup } => {
                let kind = match lookup.inode.kind() {
                    InodeKind::Directory => "directory",
                    InodeKind::File => "file",
                };
                format!("local {} '{}'", kind, lookup.inode.name())
            }
        }
    }
}

impl PartialEq for ReaddirEntry {
    fn eq(&self, other: &Self) -> bool {
        self.name() == other.name() && self.kind() == other.kind()
    }
}

impl Eq for ReaddirEntry {}

impl PartialOrd for ReaddirEntry {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}

// We sort readdir entries by name, and then by kind. So if two entries have the same name, a remote
// directory sorts before a remote object, which sorts before a local entry.
impl Ord for ReaddirEntry {
    fn cmp(&self, other: &Self) -> Ordering {
        self.name()
            .cmp(other.name())
            .then_with(|| self.kind().cmp(&other.kind()))
    }
}

/// An iterator over [ReaddirEntry]s for a directory. This merges iterators of remote and local
/// [ReaddirEntry]s, returning them in name order, and filtering out entries that are shadowed by
/// other entries of the same name.
#[derive(Debug)]
struct ReaddirIter {
    remote: RemoteIter,
    local: LocalIter,
    next_remote: Option<ReaddirEntry>,
    next_local: Option<ReaddirEntry>,
    last_name: Option<String>,
}

impl ReaddirIter {
    fn new(bucket: &str, full_path: &str, page_size: usize, local_entries: VecDeque<ReaddirEntry>) -> Self {
        Self {
            remote: RemoteIter::new(bucket, full_path, page_size),
            local: LocalIter::new(local_entries),
            next_remote: None,
            next_local: None,
            last_name: None,
        }
    }

    /// Return the next [ReaddirEntry] for the directory stream. If the stream is finished, returns
    /// `Ok(None)`.
    async fn next(&mut self, client: &impl ObjectClient) -> Result<Option<ReaddirEntry>, InodeError> {
        // The only reason to go around this loop more than once is if the next entry to return is
        // a duplicate, in which case it's skipped.
        loop {
            // First refill the peeks at the next entries on each iterator
            if self.next_remote.is_none() {
                self.next_remote = self.remote.next(client).await?;
            }
            if self.next_local.is_none() {
                self.next_local = self.local.next();
            }

            // Merge-sort the two iterators, preferring the remote iterator if the two entries are
            // equal (i.e. have the same name)
            let next = match (&self.next_remote, &self.next_local) {
                (Some(remote), Some(local)) => {
                    if remote <= local {
                        self.next_remote.take()
                    } else {
                        self.next_local.take()
                    }
                }
                (Some(_), None) => self.next_remote.take(),
                (None, _) => self.next_local.take(),
            };

            // Deduplicate the entry we want to return
            match next {
                Some(entry) => {
                    if self.last_name.as_deref() == Some(entry.name()) {
                        warn!(
                            "{} is shadowed by another entry with the same name and will be unavailable",
                            entry.description(),
                        );
                    } else {
                        self.last_name = Some(entry.name().to_owned());
                        return Ok(Some(entry));
                    }
                }
                None => return Ok(None),
            }
        }
    }
}

#[derive(Debug, PartialEq, Eq)]
enum RemoteIterState {
    /// Next ListObjects call should use this continuation token
    InProgress(Option<String>),
    /// No more ListObjects calls to make
    Finished,
}

/// An iterator over [ReaddirEntry]s returned by paginated ListObjects calls to S3. This iterator
/// handles combining directories (common prefixes) and files (objects) into a single stream,
/// and re-sorting that stream to account for common prefixes not being in lexicographic order (see
/// the module comment).
#[derive(Debug)]
struct RemoteIter {
    entries: VecDeque<ReaddirEntry>,
    bucket: String,
    full_path: String,
    page_size: usize,
    state: RemoteIterState,
}

impl RemoteIter {
    fn new(bucket: &str, full_path: &str, page_size: usize) -> Self {
        Self {
            entries: VecDeque::new(),
            bucket: bucket.to_owned(),
            full_path: full_path.to_owned(),
            page_size,
            state: RemoteIterState::InProgress(None),
        }
    }

    async fn next(&mut self, client: &impl ObjectClient) -> Result<Option<ReaddirEntry>, InodeError> {
        if self.entries.is_empty() {
            let continuation_token = match &mut self.state {
                RemoteIterState::Finished => {
                    trace!(self=?self as *const _, prefix=?self.full_path, "remote iter finished");
                    return Ok(None);
                }
                RemoteIterState::InProgress(token) => token.take(),
            };

            trace!(self=?self as *const _, prefix=?self.full_path, ?continuation_token, "continuing remote iter");

            let result = client
                .list_objects(
                    &self.bucket,
                    continuation_token.as_deref(),
                    "/",
                    self.page_size,
                    self.full_path.as_str(),
                )
                .await
                .map_err(|e| InodeError::ClientError(anyhow::Error::new(e)))?;

            self.state = match result.next_continuation_token {
                Some(token) => RemoteIterState::InProgress(Some(token)),
                None => RemoteIterState::Finished,
            };

            let prefixes = result
                .common_prefixes
                .into_iter()
                .map(|prefix| ReaddirEntry::RemotePrefix {
                    name: prefix[self.full_path.len()..prefix.len() - 1].to_owned(),
                });

            let objects = result
                .objects
                .into_iter()
                .map(|object_info| ReaddirEntry::RemoteObject {
                    name: object_info.key[self.full_path.len()..].to_owned(),
                    object_info,
                });

            // ListObjectsV2 results are sorted, so ideally we'd just merge-sort the two streams.
            // But `prefixes` isn't quite in sorted order any more because we trimmed off the
            // trailing `/` from the names. There's still probably a less naive way to do this sort,
            // but this should be good enough.
            let mut new_entries = prefixes.chain(objects).collect::<Vec<_>>();
            new_entries.sort();

            self.entries.extend(new_entries);
        }

        Ok(self.entries.pop_front())
    }
}

/// An iterator over local [ReaddirEntry]s listed from a directory at the start of a [ReaddirHandle]
#[derive(Debug)]
struct LocalIter {
    entries: VecDeque<ReaddirEntry>,
}

impl LocalIter {
    fn new(entries: VecDeque<ReaddirEntry>) -> Self {
        Self { entries }
    }

    fn next(&mut self) -> Option<ReaddirEntry> {
        self.entries.pop_front()
    }
}
