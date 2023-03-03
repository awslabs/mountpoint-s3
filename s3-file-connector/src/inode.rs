//! [Inode] management
//!
//! # Superblock
//!
//! The [Superblock] is the entry point for a file system. It manages a set of [Inode]s and their
//! caches. The [Superblock] is a partial view of the actual file system, which is stored remotely
//! in an ObjectClient, and the [Superblock] coordinates sending requests to the ObjectClient to (a)
//! discover [Inode]s it doesn't already know about and (b) refresh the stats of [Inode]s when they
//! are expired.
//!
//! # [Inode] management and assumptions
//!
//! We allocate a new [Inode] the first time we find out about a new file/directory. Each [Inode]
//! has an [InodeNo], and knows its parent [InodeNo], its own name, and its kind (currently only
//! file or directory). We assume that [Inode]s never change their kind; if this happens, we
//! reallocate the inode.
//!
//! In addition to this "permanent" state, an [Inode] also has some cached state called [InodeStat].
//! Cached state is subject to an expiry time, and must be refreshed before use if it has expired.
//! Some cached state is dependent on the inode kind; that state is hidden behind a [InodeStatKind]
//! enum.

use std::collections::{HashMap, VecDeque};
use std::ffi::{OsStr, OsString};
use std::os::unix::prelude::OsStrExt;
use std::time::Instant;

use fuser::FileType;
use futures::{select_biased, FutureExt};
use s3_client::{HeadObjectError, HeadObjectResult, ObjectClient, ObjectClientError};
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{error, trace, warn};

use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

pub type InodeNo = u64;

pub const ROOT_INODE_NO: InodeNo = 1;

pub fn valid_inode_name<T: AsRef<OsStr>>(name: T) -> bool {
    let name = name.as_ref();
    // Names cannot be empty
    !name.is_empty() &&
    // "." and ".." are reserved names (presented by the filesystem layer)
    name != "." &&
    name != ".." &&
    // The delimiter / can never appear in a name
    !name.as_bytes().contains(&b'/') &&
    // NUL is invalid in POSIX names
    !name.as_bytes().contains(&b'\0')
}

/// Superblock is the root object of the file system
#[derive(Debug)]
pub struct Superblock {
    inner: Arc<SuperblockInner>,
}

#[derive(Debug)]
struct SuperblockInner {
    bucket: String,
    inodes: RwLock<HashMap<InodeNo, Inode>>,
    next_ino: AtomicU64,
    mount_time: OffsetDateTime,
}

impl Superblock {
    /// Create a new Superblock that targets the given bucket/prefix
    pub fn new(bucket: String, prefix: OsString) -> Self {
        assert!(prefix.is_empty() || prefix.to_str().unwrap().ends_with('/'));

        let mount_time = OffsetDateTime::now_utc();
        let root = InodeInner {
            ino: ROOT_INODE_NO,
            parent: ROOT_INODE_NO,
            name: OsString::new(),
            full_key: prefix,
            kind: InodeKind::Directory,
            sync: RwLock::new(InodeState {
                stat: InodeStat::for_directory(mount_time, Instant::now()), // TODO expiry
                write_status: WriteStatus::Remote,
                kind_data: InodeKindData::Directory {
                    children: Default::default(),
                },
            }),
        };
        let root = Inode { inner: Arc::new(root) };

        let mut inodes = HashMap::new();
        inodes.insert(ROOT_INODE_NO, root);

        let inner = SuperblockInner {
            bucket,
            inodes: RwLock::new(inodes),
            next_ino: AtomicU64::new(2),
            mount_time,
        };
        Self { inner: Arc::new(inner) }
    }

    /// Lookup an inode in the parent directory with the given name
    pub async fn lookup<OC: ObjectClient>(
        &self,
        client: &OC,
        parent_ino: InodeNo,
        name: &OsStr,
    ) -> Result<LookedUp, InodeError> {
        trace!(parent=?parent_ino, ?name, "lookup");

        // This should be impossible, but just to be safe, explicitly reject lookups to files that
        // end with '/', since they could be shadowed by directories.
        if name.to_str().unwrap().ends_with('/') {
            return Err(InodeError::InvalidFileName(name.into()));
        }

        // TODO use caches. if we already know about this name, we just need to revalidate the stat
        // cache and then read it.

        let parent = self.inner.get(parent_ino)?;
        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent_ino));
        }
        let mut full_path = parent.full_key().to_owned();
        assert!(full_path.is_empty() || full_path.to_str().unwrap().ends_with('/'));
        full_path.push(name);

        let mut full_path_suffixed = full_path.clone();
        full_path_suffixed.push("/");

        // We need to try two requests here, one to find an object with the given name, and one to
        // discover a possible shadowing (implicit) directory with the same name. There's a few
        // different cases we need to consider here:
        //   (1) Consider this namespace with two keys:
        //           a
        //           a/b
        //       Here we need to make a choice about whether to make `a` visible as a file or as a
        //       directory. We choose to make it a directory. If we lookup("a") and only do a
        //       HeadObject for `a`, we'd see the object `a`, but we need to shadow that object with
        //       a directory. Doing the concurrent ListObjects lets us find out that `a` needs to be
        //       a directory and so we should suppress the file lookup. Note that this means we
        //       can't respond to the `lookup` call until both the Head and List calls complete.
        //   (2) Consider this namespace with two keys, similar to (1):
        //           a
        //           a/
        //       This has the same problem as (1), except that we also need to warn the user that
        //       the key `a/` will be inaccessible.
        //   (3) Consider this namespace with two keys:
        //           dir-1/foo
        //           dir/ bar
        //       Here we need to be careful how we issue the ListObjects call. If we don't append a
        //       "/" to the prefix in the request, the first common prefix we'll get back will be
        //       "dir-1/", because that precedes "dir/" in lexicographic order. Doing the
        //       ListObjects with "/" appended makes sure we always observe the correct prefix.
        let mut file_lookup = client
            .head_object(&self.inner.bucket, full_path.to_str().unwrap())
            .fuse();
        let mut dir_lookup = client
            .list_objects(&self.inner.bucket, None, "/", 1, full_path_suffixed.to_str().unwrap())
            .fuse();

        let mut file_state = None;

        for _ in 0..2 {
            select_biased! {
                result = file_lookup => {
                    match result {
                        Ok(HeadObjectResult { object, .. }) => {
                            let last_modified = object.last_modified;
                            let stat = InodeStat::for_file(object.size as usize, last_modified, Instant::now());
                            file_state = Some(stat);
                        }
                        // If the object is not found, might be a directory, so keep going
                        Err(ObjectClientError::ServiceError(HeadObjectError::NotFound)) => {},
                        Err(e) => return Err(InodeError::ClientError(e.into())),
                    }
                }

                result = dir_lookup => {
                    let result = result.map_err(|e| InodeError::ClientError(e.into()))?;

                    let found_directory = if result
                        .common_prefixes
                        .get(0)
                        .map(|prefix| prefix.starts_with(full_path_suffixed.to_str().unwrap()))
                        .unwrap_or(false)
                    {
                        true
                    } else if result
                        .objects
                        .get(0)
                        .map(|object| object.key.starts_with(full_path_suffixed.to_str().unwrap()))
                        .unwrap_or(false)
                    {
                        if result.objects[0].key == full_path_suffixed.to_str().unwrap() {
                            trace!(
                                ?parent,
                                ?name,
                                size = result.objects[0].size,
                                "found a directory that shadows this name"
                            );
                            // The S3 Console creates zero-sized keys for explicit directories, so
                            // let's not warn about those cases.
                            if result.objects[0].size > 0 {
                                warn!(
                                    "key {:?} is not a valid filename (ends in `/`); will be hidden and unavailable",
                                    full_path_suffixed
                                );
                            }
                        }
                        true
                    } else {
                        false
                    };

                    // We don't have to wait for the HeadObject to complete because in our
                    // semantics, directories always shadow files.
                    if found_directory {
                        trace!(?parent, ?name, "lookup ListObjects found a directory");
                        let stat = InodeStat::for_directory(self.inner.mount_time, Instant::now());
                        let kind_data = InodeKindData::Directory { children: Default::default() };
                        let inode =
                            self.inner.update_or_insert(parent_ino, name, stat.clone(), InodeKind::Directory, kind_data)?;
                        return Ok(LookedUp { inode, stat });
                    }
                }
            }
        }

        // If we reach here, the ListObjects didn't find a shadowing directory, so we know we either
        // have a valid file, or both requests failed to find the object so it must not exist
        if let Some(stat) = file_state {
            trace!(?parent, ?name, "found a regular file");
            let kind_data = InodeKindData::File {};
            let inode = self
                .inner
                .update_or_insert(parent_ino, name, stat.clone(), InodeKind::File, kind_data)?;
            Ok(LookedUp { inode, stat })
        } else {
            Err(InodeError::FileDoesNotExist)
        }
    }

    /// Retrieve the attributes for an inode
    pub async fn getattr<OC: ObjectClient>(&self, _client: &OC, ino: InodeNo) -> Result<LookedUp, InodeError> {
        let inode = self.inner.get(ino)?;

        // TODO revalidate if expired
        let stat = inode.inner.sync.read().unwrap().stat.clone();

        Ok(LookedUp { inode, stat })
    }

    /// Start a readdir stream for the given directory inode
    ///
    /// Doesn't currently do any IO, so doesn't need to be async, but reserving it for future use.
    pub async fn readdir<OC: ObjectClient>(
        &self,
        _client: &OC,
        dir_ino: InodeNo,
        page_size: usize,
    ) -> Result<ReaddirHandle, InodeError> {
        trace!(dir=?dir_ino, "readdir");

        let dir = self.inner.get(dir_ino)?;
        if dir.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(dir_ino));
        }
        let parent_ino = dir.parent();

        let dir_key = dir.full_key();
        assert!(dir_key.is_empty() || dir_key.to_str().unwrap().ends_with('/'));

        Ok(ReaddirHandle {
            inner: self.inner.clone(),
            dir_ino,
            parent_ino,
            full_path: dir_key.to_str().unwrap().to_string(),
            page_size,
            results: Default::default(),
            next_continuation_token: Mutex::new(ReaddirStreamState::NotStarted),
        })
    }

    /// Create a new regular file inode ready to be opened in write-only mode
    pub async fn create<OC: ObjectClient>(
        &self,
        client: &OC,
        dir: InodeNo,
        name: &OsStr,
    ) -> Result<LookedUp, InodeError> {
        let existing = self.lookup(client, dir, name).await;
        match existing {
            Ok(lookup) => return Err(InodeError::FileAlreadyExists(lookup.inode.ino())),
            Err(InodeError::FileDoesNotExist) => (),
            Err(e) => return Err(e),
        }

        let parent_inode = self.inner.get(dir)?;
        let mut parent_state = parent_inode.inner.sync.write().unwrap();

        // Check again for the child now that the parent is locked, since we might have lost to a
        // racing lookup. (It would be nice to lock the parent and *then* lookup, but we'd have to
        // hold that lock across the remote API calls).
        let InodeKindData::Directory { children } = &mut parent_state.kind_data else {
            return Err(InodeError::NotADirectory(dir));
        };
        if let Some(inode) = children.get(name) {
            return Err(InodeError::FileAlreadyExists(inode.ino()));
        }

        let expiry = Instant::now(); // TODO local inode stats never expire?
        let stat = InodeStat::for_file(0, OffsetDateTime::now_utc(), expiry);
        let kind = InodeKind::File;
        let state = InodeState {
            stat: stat.clone(),
            kind_data: InodeKindData::File {},
            write_status: WriteStatus::LocalUnopened,
        };

        let inode = self
            .inner
            .create_inode_locked(&parent_inode, &mut parent_state, name, kind, state)?;

        Ok(LookedUp { inode, stat })
    }
}

impl SuperblockInner {
    /// Retrieve the inode for the given number if it exists
    pub fn get(&self, ino: InodeNo) -> Result<Inode, InodeError> {
        self.inodes
            .read()
            .unwrap()
            .get(&ino)
            .cloned()
            .ok_or(InodeError::InodeDoesNotExist(ino))
    }

    /// Find the inode with the given name in a parent directory and update its `stat`. If the inode
    /// does not exist, create it if possible.
    pub fn update_or_insert(
        &self,
        parent_ino: InodeNo,
        name: &OsStr,
        stat: InodeStat,
        kind: InodeKind,
        kind_data: InodeKindData,
    ) -> Result<Inode, InodeError> {
        let parent = {
            let inodes = self.inodes.read().unwrap();
            inodes
                .get(&parent_ino)
                .cloned()
                .ok_or(InodeError::InodeDoesNotExist(parent_ino))?
        };

        // TODO what if a file was overwritten by a directory on the server side?
        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent_ino));
        }

        // Fast path: try with only a read lock on the directory first
        {
            let parent_state = parent.inner.sync.read().unwrap();
            if let Some(inode) = Self::update_if_present(parent_ino, &parent_state, name, kind, &stat)? {
                return Ok(inode);
            }
        }

        // If the fast path failed, take the write lock. We first have to try the update again, as
        // a racing writer might have beat us to the lock after our fast path attempt.
        let mut parent_state = parent.inner.sync.write().unwrap();
        if let Some(inode) = Self::update_if_present(parent_ino, &parent_state, name, kind, &stat)? {
            return Ok(inode);
        }

        let state = InodeState {
            stat,
            kind_data,
            write_status: WriteStatus::Remote,
        };
        self.create_inode_locked(&parent, &mut parent_state, name, kind, state)
    }

    /// Update the inode for the given name in the parent directory and return `Ok(Some(inode))`
    /// if the update succeeds. If the inode should be (re)created, returns `Ok(None)`.
    ///
    /// Don't use this directly -- use [SuperblockInner::update_or_insert] instead.
    fn update_if_present(
        parent_ino: InodeNo,
        parent_state: &InodeState,
        name: &OsStr,
        kind: InodeKind,
        stat: &InodeStat,
    ) -> Result<Option<Inode>, InodeError> {
        match &parent_state.kind_data {
            InodeKindData::File { .. } => unreachable!("we know parent is a directory"),
            InodeKindData::Directory { children } => {
                let Some(inode) = children.get(name).cloned() else {
                        return Ok(None);
                    };

                let mut inode_state = inode.inner.sync.write().unwrap();

                // In our semantics, directories shadow files of the same name. So if the inode
                // already exists but the kind has changed, we need to decide what to do.
                match (inode.kind(), kind) {
                    // If the inode is currently a directory but we're asking to create a file,
                    // fail the update, as the directory shadows the file.
                    // TODO what if the directory is gone on the remote?
                    (InodeKind::Directory, InodeKind::File) => Err(InodeError::ShadowedByDirectory(
                        inode.full_key().to_owned(),
                        inode.ino(),
                    )),
                    // If the inode is currently a file but we're asking to update a directory,
                    // overwrite it, since directories shadow files.
                    (InodeKind::File, InodeKind::Directory) => {
                        warn!(parent=?parent_ino, ?name, ino=?inode.ino(), "inode changed from file to directory, will recreate it");
                        Ok(None)
                    }
                    // Otherwise, we'll just update this inode in place.
                    (InodeKind::File, InodeKind::File) | (InodeKind::Directory, InodeKind::Directory) => {
                        inode_state.stat = stat.clone();
                        Ok(Some(inode.clone()))
                    }
                }
            }
        }
    }

    /// Create a new inode in the parent directory, which is already write-locked.
    ///
    /// Don't use this directly unless you need to do inode creation without re-acquiring the parent
    /// write lock. Prefer [SuperblockInner::update_or_insert] instead.
    fn create_inode_locked(
        &self,
        parent: &Inode,
        parent_locked: &mut InodeState,
        name: &OsStr,
        kind: InodeKind,
        state: InodeState,
    ) -> Result<Inode, InodeError> {
        if !valid_inode_name(name) {
            let kind = if kind == InodeKind::Directory {
                "directory"
            } else {
                "file"
            };
            warn!(?name, "invalid file name; {} will not be available", kind);
            return Err(InodeError::InvalidFileName(name.to_os_string()));
        }

        let next_ino = self.next_ino.fetch_add(1, Ordering::SeqCst);

        let mut full_key = parent.full_key().to_owned();
        assert!(full_key.is_empty() || full_key.to_str().unwrap().ends_with('/'));
        full_key.push(name);
        if kind == InodeKind::Directory {
            full_key.push("/");
        }

        trace!(?parent, ?name, ?kind, new_ino=?next_ino, ?full_key, "creating new inode");

        let inode = InodeInner {
            ino: next_ino,
            parent: parent.ino(),
            name: name.to_os_string(),
            full_key,
            kind,
            sync: RwLock::new(state),
        };
        let inode = Inode { inner: Arc::new(inode) };

        match &mut parent_locked.kind_data {
            InodeKindData::File {} => {
                debug_assert!(false, "inodes never change kind");
                return Err(InodeError::NotADirectory(parent.ino()));
            }
            InodeKindData::Directory { children } => {
                children.insert(name.to_os_string(), inode.clone());
            }
        }

        let previous = self.inodes.write().unwrap().insert(next_ino, inode.clone());
        assert!(previous.is_none(), "inode numbers are never reused");

        Ok(inode)
    }
}

/// Result of a call to [Superblock::lookup] or [Superblock::getattr]. `stat` is a copy of the
/// inode's `stat` field that has already had its expiry checked and so is guaranteed to be valid.
#[derive(Debug, Clone)]
pub struct LookedUp {
    pub inode: Inode,
    pub stat: InodeStat,
}

/// Handle for an inflight directory listing
#[derive(Debug)]
pub struct ReaddirHandle {
    inner: Arc<SuperblockInner>,
    dir_ino: InodeNo,
    parent_ino: InodeNo,
    full_path: String,
    page_size: usize,
    results: RwLock<VecDeque<LookedUp>>,
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
    pub async fn next<OC: ObjectClient>(&self, client: &OC) -> Result<Option<LookedUp>, InodeError> {
        while self.results.read().unwrap().is_empty() {
            let continuation_token = {
                let mut next_token = self.next_continuation_token.lock().unwrap();
                if *next_token == ReaddirStreamState::Finished {
                    trace!(self=?self as *const _, "readdir finished");
                    return Ok(None);
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
                .into_iter()
                .map(|prefix| OsString::from(&prefix[self.full_path.len()..prefix.len() - 1]))
                .filter(|name| valid_inode_name(name))
                .map(|name| {
                    let stat = InodeStat::for_directory(self.inner.mount_time, Instant::now());
                    let stat_clone = stat.clone();
                    let kind_data = InodeKindData::Directory {
                        children: Default::default(),
                    };

                    self.inner
                        .update_or_insert(
                            self.dir_ino,
                            name.as_os_str(),
                            stat_clone,
                            InodeKind::Directory,
                            kind_data,
                        )
                        .map(|inode| LookedUp { inode, stat })
                });
            let objects = result
                .objects
                .into_iter()
                .map(|object| (OsString::from(&object.key[self.full_path.len()..]), object))
                // Hide keys that end with '/', since they can be confused with directories
                .filter(|(name, _object)| valid_inode_name(name))
                .flat_map(|(name, object)| {
                    let last_modified = object.last_modified;
                    let stat = InodeStat::for_file(object.size as usize, last_modified, Instant::now());
                    let stat_clone = stat.clone();
                    let kind_data = InodeKindData::File {};

                    let result = self
                        .inner
                        .update_or_insert(self.dir_ino, name.as_os_str(), stat_clone, InodeKind::File, kind_data)
                        .map(|inode| LookedUp { inode, stat });
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
                    self.results.write().unwrap().extend(new_results);
                }
                Err(e) => {
                    error!(error=?e, "readdir failed");
                    return Err(e);
                }
            }
        }

        Ok(self.results.write().unwrap().pop_front())
    }

    /// Re-add an entry to the front of the queue if the consumer wasn't able to use it
    pub fn readd(&self, entry: LookedUp) {
        self.results.write().unwrap().push_front(entry);
    }

    pub fn parent(&self) -> InodeNo {
        self.parent_ino
    }

    #[cfg(test)]
    async fn collect<OC: ObjectClient>(&self, client: &OC) -> Result<Vec<LookedUp>, InodeError> {
        let mut result = vec![];
        while let Some(entry) = self.next(client).await? {
            result.push(entry);
        }
        Ok(result)
    }
}

#[derive(Debug, Clone)]
pub struct Inode {
    inner: Arc<InodeInner>,
}

#[derive(Debug)]
struct InodeInner {
    // Immutable inode state -- any changes to these requires a new inode
    ino: InodeNo,
    parent: InodeNo,
    name: OsString,
    // TODO deduplicate keys by string interning or something -- many keys will have common prefixes
    full_key: OsString,
    kind: InodeKind,

    // Mutable inode state. This lock should also be used to serialize operations on an inode (like
    // creating a new child).
    sync: RwLock<InodeState>,
}

impl Inode {
    pub fn ino(&self) -> InodeNo {
        self.inner.ino
    }

    pub fn parent(&self) -> InodeNo {
        self.inner.parent
    }

    pub fn name(&self) -> &OsStr {
        &self.inner.name
    }

    pub fn kind(&self) -> InodeKind {
        self.inner.kind
    }

    pub fn full_key(&self) -> &OsStr {
        &self.inner.full_key
    }

    pub fn start_writing(&self) -> Result<(), InodeError> {
        let mut state = self.inner.sync.write().unwrap();
        match state.write_status {
            WriteStatus::LocalUnopened => {
                state.write_status = WriteStatus::LocalOpen;
                Ok(())
            }
            WriteStatus::LocalOpen => {
                error!(inode=?self.ino(), "inode is already being written");
                Err(InodeError::InodeNotWritable(self.ino()))
            }
            WriteStatus::Remote => {
                error!(inode=?self.ino(), "inode already exists");
                Err(InodeError::InodeNotWritable(self.ino()))
            }
        }
    }

    pub fn finish_writing(&self, new_size: usize) -> Result<(), InodeError> {
        let mut state = self.inner.sync.write().unwrap();
        match state.write_status {
            WriteStatus::LocalOpen => {
                state.write_status = WriteStatus::Remote;
                state.stat.size = new_size;
                // TODO force the file to be revalidated the next time it's `stat`ed?
                Ok(())
            }
            _ => Err(InodeError::InodeNotWritable(self.ino())),
        }
    }

    pub fn start_reading(&self) -> Result<(), InodeError> {
        let state = self.inner.sync.read().unwrap();
        match state.write_status {
            WriteStatus::Remote => Ok(()),
            _ => Err(InodeError::InodeNotReadableWhileWriting(self.ino())),
        }
    }

    pub fn finish_reading(&self) -> Result<(), InodeError> {
        // Currently a no-op, but this is where you'd e.g. update atime
        Ok(())
    }
}

#[derive(Debug)]
struct InodeState {
    stat: InodeStat,
    write_status: WriteStatus,
    kind_data: InodeKindData,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum InodeKind {
    File,
    Directory,
}

impl From<InodeKind> for FileType {
    fn from(kind: InodeKind) -> Self {
        match kind {
            InodeKind::File => FileType::RegularFile,
            InodeKind::Directory => FileType::Directory,
        }
    }
}

#[derive(Debug)]
enum InodeKindData {
    File {},
    Directory {
        /// Mapping from child names to inodes
        children: HashMap<OsString, Inode>,
    },
}

#[derive(Debug, Clone)]
pub struct InodeStat {
    #[allow(unused)] // TODO revalidate
    expiry: Instant,

    /// Size in bytes
    pub size: usize,

    /// Time of last file content modification
    pub mtime: OffsetDateTime,
    /// Time of last file metadata (or content) change
    pub ctime: OffsetDateTime,
    /// Time of last access
    pub atime: OffsetDateTime,
}

/// Inode write status (local vs remote)
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WriteStatus {
    /// Local inode created but not yet opened
    LocalUnopened,
    /// Local inode already opened
    LocalOpen,
    /// Remote inode
    Remote,
}

impl InodeStat {
    /// Initialize an [InodeStat] for a file, given some metadata.
    fn for_file(size: usize, datetime: OffsetDateTime, expiry: Instant) -> InodeStat {
        InodeStat {
            expiry,
            size,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
        }
    }

    /// Initialize an [InodeStat] for a directory, given some metadata.
    fn for_directory(datetime: OffsetDateTime, expiry: Instant) -> InodeStat {
        InodeStat {
            expiry,
            size: 0,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
        }
    }
}

#[derive(Debug, Error)]
pub enum InodeError {
    #[error("error from ObjectClient")]
    ClientError(#[source] anyhow::Error),
    #[error("file does not exist")]
    FileDoesNotExist,
    #[error("inode {0} does not exist")]
    InodeDoesNotExist(InodeNo),
    #[error("invalid file name {0:?}")]
    InvalidFileName(OsString),
    #[error("file {0:?} is shadowed by a directory with inode {1}")]
    ShadowedByDirectory(OsString, InodeNo),
    #[error("inode {0} is not a directory")]
    NotADirectory(InodeNo),
    #[error("file already exists at inode {0}")]
    FileAlreadyExists(InodeNo),
    #[error("inode {0} is not writable")]
    InodeNotWritable(InodeNo),
    #[error("inode {0} is not readable while being written")]
    InodeNotReadableWhileWriting(InodeNo),
}

#[cfg(test)]
mod tests {
    use s3_client::mock_client::{MockClient, MockClientConfig, MockObject};
    use test_case::test_case;
    use time::{Duration, OffsetDateTime};

    use crate::fs::FUSE_ROOT_INODE;

    use super::*;

    /// Check an Inode's stat matches a series of fields.
    macro_rules! assert_inode_stat {
        ($lookup:expr, $kind:expr, $datetime:expr, $size:expr) => {
            assert_eq!($lookup.inode.kind(), $kind);
            assert!($lookup.stat.atime >= $datetime && $lookup.stat.atime < $datetime + Duration::seconds(5));
            assert!($lookup.stat.ctime >= $datetime && $lookup.stat.ctime < $datetime + Duration::seconds(5));
            assert!($lookup.stat.mtime >= $datetime && $lookup.stat.mtime < $datetime + Duration::seconds(5));
            assert_eq!($lookup.stat.size, $size);
        };
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_lookup(prefix: &str) {
        let bucket = "test_bucket";
        let client_config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let keys = &[
            format!("{prefix}dir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file1.txt"),
            format!("{prefix}dir0/sdir0/file2.txt"),
            format!("{prefix}dir0/sdir1/file0.txt"),
            format!("{prefix}dir0/sdir1/file1.txt"),
            format!("{prefix}dir1/sdir2/file0.txt"),
            format!("{prefix}dir1/sdir2/file1.txt"),
            format!("{prefix}dir1/sdir2/file2.txt"),
            format!("{prefix}dir1/sdir3/file0.txt"),
            format!("{prefix}dir1/sdir3/file1.txt"),
        ];

        let object_size = 30;
        let mut last_modified = OffsetDateTime::UNIX_EPOCH;
        for key in keys {
            let mut obj = MockObject::constant(0xaa, object_size);
            last_modified += Duration::days(1);
            obj.set_last_modified(last_modified);
            client.add_object(key, obj);
        }

        let ts = OffsetDateTime::now_utc();
        let superblock = Superblock::new(bucket.to_string(), OsString::from(prefix));

        // Try it twice to test the inode reuse path too
        for _ in 0..2 {
            let dir0 = superblock
                .lookup(&client, FUSE_ROOT_INODE, &OsString::from("dir0"))
                .await
                .expect("should exist");
            assert_inode_stat!(dir0, InodeKind::Directory, ts, 0);
            assert_eq!(dir0.inode.full_key(), OsString::from(format!("{prefix}dir0/")));

            let dir1 = superblock
                .lookup(&client, FUSE_ROOT_INODE, &OsString::from("dir1"))
                .await
                .expect("should exist");
            assert_inode_stat!(dir1, InodeKind::Directory, ts, 0);
            assert_eq!(dir1.inode.full_key(), OsString::from(format!("{prefix}dir1/")));

            let sdir0 = superblock
                .lookup(&client, dir0.inode.ino(), &OsString::from("sdir0"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir0, InodeKind::Directory, ts, 0);
            assert_eq!(sdir0.inode.full_key(), OsString::from(format!("{prefix}dir0/sdir0/")));

            let sdir1 = superblock
                .lookup(&client, dir0.inode.ino(), &OsString::from("sdir1"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir1, InodeKind::Directory, ts, 0);
            assert_eq!(sdir1.inode.full_key(), OsString::from(format!("{prefix}dir0/sdir1/")));

            let sdir2 = superblock
                .lookup(&client, dir1.inode.ino(), &OsString::from("sdir2"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir2, InodeKind::Directory, ts, 0);
            assert_eq!(sdir2.inode.full_key(), OsString::from(format!("{prefix}dir1/sdir2/")));

            let sdir3 = superblock
                .lookup(&client, dir1.inode.ino(), &OsString::from("sdir3"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir3, InodeKind::Directory, ts, 0);
            assert_eq!(sdir3.inode.full_key(), OsString::from(format!("{prefix}dir1/sdir3/")));

            for (dir, sdir, ino, n) in &[
                (0, 0, sdir0.inode.ino(), 3),
                (0, 1, sdir1.inode.ino(), 2),
                (1, 2, sdir2.inode.ino(), 3),
                (1, 3, sdir3.inode.ino(), 2),
            ] {
                for i in 0..*n {
                    let file = superblock
                        .lookup(&client, *ino, &OsString::from(format!("file{i}.txt")))
                        .await
                        .expect("inode should exist");
                    // Grab last modified time according to mock S3
                    let modified_time = client
                        .head_object(bucket, file.inode.full_key().to_str().unwrap())
                        .await
                        .expect("object should exist")
                        .object
                        .last_modified;
                    assert_inode_stat!(file, InodeKind::File, modified_time, object_size);
                    assert_eq!(
                        file.inode.full_key(),
                        OsString::from(format!("{prefix}dir{dir}/sdir{sdir}/file{i}.txt"))
                    );
                }
            }
        }
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_readdir(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let keys = &[
            format!("{prefix}dir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file1.txt"),
            format!("{prefix}dir0/sdir0/file2.txt"),
            format!("{prefix}dir0/sdir1/file0.txt"),
            format!("{prefix}dir0/sdir1/file1.txt"),
            format!("{prefix}dir1/sdir2/file0.txt"),
            format!("{prefix}dir1/sdir2/file1.txt"),
            format!("{prefix}dir1/sdir2/file2.txt"),
            format!("{prefix}dir1/sdir3/file0.txt"),
            format!("{prefix}dir1/sdir3/file1.txt"),
        ];

        let last_modified = OffsetDateTime::UNIX_EPOCH + Duration::days(30);
        for key in keys {
            let mut obj = MockObject::constant(0xaa, 30);
            obj.set_last_modified(last_modified);
            client.add_object(key, obj);
        }

        let ts = OffsetDateTime::now_utc();
        let superblock = Superblock::new("test_bucket".to_string(), OsString::from(prefix));

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries
                    .iter()
                    .map(|entry| entry.inode.name().to_str().unwrap().to_string())
                    .collect::<Vec<_>>(),
                &["dir0", "dir1"]
            );
            assert_inode_stat!(entries[0], InodeKind::Directory, ts, 0);
            assert_inode_stat!(entries[1], InodeKind::Directory, ts, 0);

            let dir0_inode = entries[0].inode.ino();
            let dir_handle = superblock.readdir(&client, dir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries
                    .iter()
                    .map(|entry| entry.inode.name().to_str().unwrap().to_string())
                    .collect::<Vec<_>>(),
                &["file0.txt", "sdir0", "sdir1"]
            );

            assert_inode_stat!(entries[0], InodeKind::File, last_modified, 30);
            assert_inode_stat!(entries[1], InodeKind::Directory, ts, 0);
            assert_inode_stat!(entries[2], InodeKind::Directory, ts, 0);

            let sdir0_inode = entries[1].inode.ino();
            let dir_handle = superblock.readdir(&client, sdir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries
                    .iter()
                    .map(|entry| entry.inode.name().to_str().unwrap().to_string())
                    .collect::<Vec<_>>(),
                &["file0.txt", "file1.txt", "file2.txt"]
            );
            for entry in entries {
                assert_inode_stat!(entry, InodeKind::File, last_modified, 30);
            }
        }
    }

    #[tokio::test]
    async fn test_inode_reuse() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        client.add_object("dir1/file1.txt", MockObject::constant(0xaa, 30));

        let superblock = Superblock::new("test_bucket".to_string(), OsString::new());

        for _ in 0..2 {
            let dir1_1 = superblock
                .lookup(&client, FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
                .await
                .unwrap();
            let dir1_2 = superblock
                .lookup(&client, FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
                .await
                .unwrap();
            assert_eq!(dir1_1.inode.ino(), dir1_2.inode.ino());

            let file1_1 = superblock
                .lookup(&client, dir1_1.inode.ino(), OsStr::from_bytes("file1.txt".as_bytes()))
                .await
                .unwrap();
            let file1_2 = superblock
                .lookup(&client, dir1_1.inode.ino(), OsStr::from_bytes("file1.txt".as_bytes()))
                .await
                .unwrap();
            assert_eq!(file1_1.inode.ino(), file1_2.inode.ino());
        }
    }

    #[test_case(""; "no subdirectory")]
    #[test_case("subdir/"; "with subdirectory")]
    #[tokio::test]
    async fn test_lookup_directory_overlap(subdir: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        // In this test the `/` delimiter comes back to bite us. `dir-1/` comes before `dir/` in
        // lexicographical order (- is ASCII 0x2d, / is ASCII 0x2f), so `dir-1` will be the first
        // common prefix when we do ListObjects with prefix = 'dir'. But `dir` comes before `dir-1`
        // in lexicographical order, so `dir` will be the first common prefix when we do ListObjects
        // with prefix = ''.
        client.add_object(&format!("dir/{subdir}file1.txt"), MockObject::constant(0xaa, 30));
        client.add_object(&format!("dir-1/{subdir}file1.txt"), MockObject::constant(0xaa, 30));

        let superblock = Superblock::new("test_bucket".to_string(), OsString::new());

        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries
                .iter()
                .map(|entry| entry.inode.name().to_str().unwrap().to_string())
                .collect::<Vec<_>>(),
            &["dir", "dir-1"]
        );

        let dir = superblock
            .lookup(&client, FUSE_ROOT_INODE, OsStr::from_bytes("dir".as_bytes()))
            .await
            .unwrap();
        assert_eq!(dir.inode.full_key(), OsString::from("dir/"));
    }

    #[tokio::test]
    async fn test_invalid_names() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        // The only valid key here is "dir1/a", so we should see a directory called "dir1" and a
        // file inside it called "a".
        client.add_object("dir1/", MockObject::constant(0xaa, 30));
        client.add_object("dir1//", MockObject::constant(0xaa, 30));
        client.add_object("dir1/a", MockObject::constant(0xaa, 30));
        client.add_object("dir1/.", MockObject::constant(0xaa, 30));
        client.add_object("dir1/./a", MockObject::constant(0xaa, 30));

        let superblock = Superblock::new("test_bucket".to_string(), OsString::new());
        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries
                .iter()
                .map(|entry| entry.inode.name().to_str().unwrap().to_string())
                .collect::<Vec<_>>(),
            &["dir1"]
        );

        let dir1_ino = entries[0].inode.ino();
        let dir_handle = superblock.readdir(&client, dir1_ino, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries
                .iter()
                .map(|entry| entry.inode.name().to_str().unwrap().to_string())
                .collect::<Vec<_>>(),
            &["a"]
        );

        // Neither of these keys should exist in the directory
        for key in ["/", "."] {
            let lookup = superblock
                .lookup(&client, dir1_ino, OsStr::from_bytes(key.as_bytes()))
                .await;
            assert!(matches!(lookup, Err(InodeError::InvalidFileName(_))));
        }
    }

    #[test]
    fn test_inodestat_constructors() {
        let ts = OffsetDateTime::UNIX_EPOCH + Duration::days(90);
        let file_inodestat = InodeStat::for_file(128, ts, Instant::now());
        assert_eq!(file_inodestat.size, 128);
        assert_eq!(file_inodestat.atime, ts);
        assert_eq!(file_inodestat.ctime, ts);
        assert_eq!(file_inodestat.mtime, ts);

        let ts = OffsetDateTime::UNIX_EPOCH + Duration::days(180);
        let file_inodestat = InodeStat::for_directory(ts, Instant::now());
        assert_eq!(file_inodestat.size, 0);
        assert_eq!(file_inodestat.atime, ts);
        assert_eq!(file_inodestat.ctime, ts);
        assert_eq!(file_inodestat.mtime, ts);
    }
}
