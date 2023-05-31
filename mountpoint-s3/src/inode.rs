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

use std::collections::{HashMap, HashSet};
use std::ffi::{OsStr, OsString};
use std::os::unix::prelude::OsStrExt;
use std::time::{Duration, Instant};

use fuser::FileType;
use futures::{select_biased, FutureExt};
use mountpoint_s3_client::{HeadObjectError, HeadObjectResult, ObjectClient, ObjectClientError};
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{debug, error, trace, warn};

use crate::fs::CacheConfig;
use crate::prefix::Prefix;
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::RwLockReadGuard;
use crate::sync::RwLockWriteGuard;
use crate::sync::{Arc, RwLock};

mod readdir;
pub use readdir::ReaddirHandle;

pub type InodeNo = u64;

pub const ROOT_INODE_NO: InodeNo = 1;

// 200 years seems long enough
const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

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
    cache_config: CacheConfig,
}

impl Superblock {
    /// Create a new Superblock that targets the given bucket/prefix
    pub fn new(bucket: &str, prefix: &Prefix, cache_config: CacheConfig) -> Self {
        let mount_time = OffsetDateTime::now_utc();

        let root = InodeInner {
            ino: ROOT_INODE_NO,
            parent: ROOT_INODE_NO,
            name: String::new(),
            full_key: prefix.to_string(),
            kind: InodeKind::Directory,
            sync: RwLock::new(InodeState {
                // The root inode never expires because there's no remote to consult for its
                // metadata, and it always exists.
                stat: InodeStat::for_directory(mount_time, NEVER_EXPIRE_TTL),
                write_status: WriteStatus::Remote,
                kind_data: InodeKindData::default_for(InodeKind::Directory),
            }),
        };
        let root = Inode { inner: Arc::new(root) };

        let mut inodes = HashMap::new();
        inodes.insert(ROOT_INODE_NO, root);

        let inner = SuperblockInner {
            bucket: bucket.to_owned(),
            inodes: RwLock::new(inodes),
            next_ino: AtomicU64::new(2),
            mount_time,
            cache_config,
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

        let name = name
            .to_str()
            .ok_or_else(|| InodeError::InvalidFileName(name.to_owned()))?;

        // This should be impossible, but just to be safe, explicitly reject lookups to files that
        // end with '/', since they could be shadowed by directories.
        if name.ends_with('/') {
            return Err(InodeError::InvalidFileName(name.into()));
        }

        // TODO use caches. if we already know about this name, we just need to revalidate the stat
        // cache and then read it.
        let remote = self.remote_lookup(client, parent_ino, name).await?;
        self.inner.update_from_remote(parent_ino, name, remote)
    }

    /// Lookup an inode in the parent directory with the given name
    /// on the remote client.
    async fn remote_lookup<OC: ObjectClient>(
        &self,
        client: &OC,
        parent_ino: InodeNo,
        name: &str,
    ) -> Result<Option<RemoteLookup>, InodeError> {
        let parent = self.inner.get(parent_ino)?;
        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent_ino));
        }
        let mut full_path = parent.full_key().to_owned();
        assert!(full_path.is_empty() || full_path.ends_with('/'));
        full_path.push_str(name);

        let mut full_path_suffixed = full_path.clone();
        full_path_suffixed.push('/');

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
        let mut file_lookup = client.head_object(&self.inner.bucket, &full_path).fuse();
        let mut dir_lookup = client
            .list_objects(&self.inner.bucket, None, "/", 1, &full_path_suffixed)
            .fuse();

        let mut file_state = None;

        for _ in 0..2 {
            select_biased! {
                result = file_lookup => {
                    match result {
                        Ok(HeadObjectResult { object, .. }) => {
                            let stat = InodeStat::for_file(object.size as usize, object.last_modified, Some(object.etag.clone()), self.inner.cache_config.file_ttl);
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
                        .map(|prefix| prefix.starts_with(&full_path_suffixed))
                        .unwrap_or(false)
                    {
                        true
                    } else if result
                        .objects
                        .get(0)
                        .map(|object| object.key.starts_with(&full_path_suffixed))
                        .unwrap_or(false)
                    {
                        if result.objects[0].key == full_path_suffixed {
                            trace!(
                                parent = ?parent_ino,
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
                        trace!(parent = ?parent_ino, ?name, "lookup ListObjects found a directory");
                        let stat = InodeStat::for_directory(self.inner.mount_time, self.inner.cache_config.dir_ttl);
                        return Ok(Some(RemoteLookup { kind: InodeKind::Directory, stat }));
                    }
                }
            }
        }

        // If we reach here, the ListObjects didn't find a shadowing directory, so we know we either
        // have a valid file, or both requests failed to find the object so the file must not exist remotely
        if let Some(mut stat) = file_state {
            trace!(parent = ?parent_ino, ?name, "found a regular file");
            // Update the validity of the stat in case the racing ListObjects took a long time
            stat.update_validity(self.inner.cache_config.file_ttl);
            Ok(Some(RemoteLookup {
                kind: InodeKind::File,
                stat,
            }))
        } else {
            trace!(parent = ?parent_ino, ?name, "not found");
            Ok(None)
        }
    }

    /// Retrieve the attributes for an inode
    pub async fn getattr<OC: ObjectClient>(
        &self,
        client: &OC,
        ino: InodeNo,
        force_revalidate: bool,
    ) -> Result<LookedUp, InodeError> {
        let inode = self.inner.get(ino)?;

        if !force_revalidate {
            let sync = inode.get_inode_state()?;
            if sync.stat.is_valid() {
                let stat = sync.stat.clone();
                drop(sync);
                return Ok(LookedUp { inode, stat });
            }
        }

        self.lookup(client, inode.parent(), inode.name().as_ref()).await
    }

    /// Create a new write handle to be used for state transition
    pub async fn write<OC: ObjectClient>(
        &self,
        _client: &OC,
        ino: InodeNo,
        parent_ino: InodeNo,
    ) -> Result<WriteHandle, InodeError> {
        trace!(?ino, parent=?parent_ino, "write");

        let handle = WriteHandle {
            inner: self.inner.clone(),
            ino,
            parent_ino,
        };
        handle.start_writing()?;
        Ok(handle)
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
        assert!(dir_key.is_empty() || dir_key.ends_with('/'));

        ReaddirHandle::new(self.inner.clone(), dir_ino, parent_ino, dir_key.to_string(), page_size)
    }

    /// Create a new regular file or directory inode ready to be opened in write-only mode
    pub async fn create<OC: ObjectClient>(
        &self,
        client: &OC,
        dir: InodeNo,
        name: &OsStr,
        kind: InodeKind,
    ) -> Result<LookedUp, InodeError> {
        trace!(parent=?dir, ?name, "create");

        let existing = self.lookup(client, dir, name).await;
        match existing {
            Ok(lookup) => return Err(InodeError::FileAlreadyExists(lookup.inode.ino())),
            Err(InodeError::FileDoesNotExist) => (),
            Err(e) => return Err(e),
        }

        // Should be impossible to fail since [lookup] does this check, but let's be sure
        let name = name
            .to_str()
            .ok_or_else(|| InodeError::InvalidFileName(name.to_owned()))?;

        let parent_inode = self.inner.get(dir)?;
        let mut parent_state = parent_inode.get_mut_inode_state()?;

        // Check again for the child now that the parent is locked, since we might have lost to a
        // racing lookup. (It would be nice to lock the parent and *then* lookup, but we'd have to
        // hold that lock across the remote API calls).
        let InodeKindData::Directory { children, .. } = &mut parent_state.kind_data else {
            return Err(InodeError::NotADirectory(dir));
        };
        if let Some(inode) = children.get(name) {
            return Err(InodeError::FileAlreadyExists(inode.ino()));
        }

        // Local inode stats never expire, because they can't be looked up remotely
        let stat = match kind {
            // Objects don't have an ETag until they are uploaded to S3
            InodeKind::File => InodeStat::for_file(0, OffsetDateTime::now_utc(), None, NEVER_EXPIRE_TTL),
            InodeKind::Directory => InodeStat::for_directory(self.inner.mount_time, NEVER_EXPIRE_TTL),
        };

        let state = InodeState {
            stat: stat.clone(),
            kind_data: InodeKindData::default_for(kind),
            write_status: WriteStatus::LocalUnopened,
        };
        let inode = self
            .inner
            .create_inode_locked(&parent_inode, &mut parent_state, name, kind, state, true)?;

        Ok(LookedUp { inode, stat })
    }

    /// Remove local-only empty directory, i.e., the ones created by mkdir.
    /// It does not affect empty directories represented remotely with directory markers.  
    pub async fn rmdir<OC: ObjectClient>(
        &self,
        client: &OC,
        parent_ino: InodeNo,
        name: &OsStr,
    ) -> Result<(), InodeError> {
        let LookedUp { inode, .. } = self.lookup(client, parent_ino, name).await?;

        if inode.kind() == InodeKind::File {
            return Err(InodeError::NotADirectory(inode.ino()));
        }

        let parent = self.inner.get(parent_ino)?;
        let mut parent_state = parent.get_mut_inode_state()?;
        let mut inode_state = inode.get_mut_inode_state()?;

        match &inode_state.write_status {
            WriteStatus::LocalOpen => unreachable!("A directory cannot be in Local open state"),
            WriteStatus::Remote => {
                return Err(InodeError::CannotRemoveRemoteDirectory(inode.ino()));
            }
            WriteStatus::LocalUnopened => match &mut inode_state.kind_data {
                InodeKindData::File {} => unreachable!("Already checked that inode is a directory"),
                InodeKindData::Directory {
                    writing_children,
                    deleted,
                    ..
                } => {
                    if !writing_children.is_empty() {
                        return Err(InodeError::DirectoryNotEmpty(inode.ino()));
                    }
                    *deleted = true;
                }
            },
        }

        match &mut parent_state.kind_data {
            InodeKindData::File {} => {
                debug_assert!(false, "inodes never change kind");
                return Err(InodeError::NotADirectory(parent.ino()));
            }
            InodeKindData::Directory {
                children,
                writing_children,
                ..
            } => {
                let removed = writing_children.remove(&inode.ino());
                debug_assert!(
                    removed,
                    "should be able to remove the directory from its parents writing children as it was local"
                );
                children.remove(inode.name());
            }
        }

        Ok(())
    }

    /// Unlink the entry described by `parent_ino` and `name`.
    ///
    /// If the entry exists, delete it from S3 and the superblock.
    ///
    /// We know that the Linux Kernel's VFS will lock both the parent and child,
    /// so we can safely ignore concurrent operations within the same Mountpoint process to the file and its parent.
    /// See: https://www.kernel.org/doc/html/next/filesystems/directory-locking.html
    pub async fn unlink<OC: ObjectClient>(
        &self,
        client: &OC,
        parent_ino: InodeNo,
        name: &OsStr,
    ) -> Result<(), InodeError> {
        let parent = self.inner.get(parent_ino)?;
        let LookedUp { inode, .. } = self.lookup(client, parent_ino, name).await?;

        if inode.kind() == InodeKind::Directory {
            return Err(InodeError::IsDirectory(inode.ino()));
        }

        let write_status = {
            let inode_state = inode.get_inode_state()?;
            inode_state.write_status
        };

        match write_status {
            WriteStatus::LocalUnopened | WriteStatus::LocalOpen => {
                // In the future, we may permit `unlink` and cancel any in-flight uploads.
                error!(
                    parent = parent_ino,
                    ?name,
                    "unlink called on local file, unlink not supported until write is complete",
                );
                return Err(InodeError::UnlinkNotPermittedWhileWriting(inode.ino()));
            }
            WriteStatus::Remote => {
                let (bucket, s3_key) = (self.inner.bucket.as_str(), inode.full_key());
                debug!(parent=?parent_ino, ?name, "unlink on remote file will delete key {}", s3_key);
                let delete_obj_result = client.delete_object(bucket, s3_key).await;

                match delete_obj_result {
                    Ok(_res) => (),
                    Err(e) => {
                        error!(
                            parent=parent_ino,
                            ?name,
                            s3_key,
                            error=?e,
                            "unlink failed when trying to perform S3 DeleteObject call, not unlinking from parent inode",
                        );
                        Err(InodeError::ClientError(e.into()))?;
                    }
                };
            }
        }

        let mut parent_state = parent.get_mut_inode_state()?;
        match &mut parent_state.kind_data {
            InodeKindData::File { .. } => {
                debug_assert!(false, "inodes never change kind");
                return Err(InodeError::NotADirectory(parent.ino()));
            }
            InodeKindData::Directory { children, .. } => {
                // We want to remove the original child.
                // We assume that the VFS will hold a lock on the parent and child.
                // However, we don't hold this lock over remote calls as we don't want to move to async locks right now.
                // Instead, we will panic when our assumption appears broken.
                let removed_inode = children
                    .remove(inode.name())
                    .expect("parent should contain child assuming VFS does not permit concurrent op on parent");
                assert_eq!(
                    removed_inode.ino(),
                    inode.ino(),
                    "child ino number shouldn't change assuming VFS does not permit concurrent op on parent",
                );
            }
        };

        // TODO: When inode lookup/ref counting is implemented, decrement here to eventually remove from superblock.

        Ok(())
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

    /// Update the inode with the given name in a parent directory with the remote data.
    /// It may update or delete an existing inode, or insert a new one.
    pub fn update_from_remote(
        &self,
        parent_ino: InodeNo,
        name: &str,
        remote: Option<RemoteLookup>,
    ) -> Result<LookedUp, InodeError> {
        let parent = self.get(parent_ino)?;

        // TODO what if a file was overwritten by a directory on the server side?
        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent_ino));
        }

        // Fast path: try with only a read lock on the directory first.
        {
            let parent_state = parent.get_inode_state()?;
            match Self::try_update_child(&parent_state, name, &remote)? {
                UpdateStatus::Neither => return Err(InodeError::FileDoesNotExist),
                UpdateStatus::Updated(lookedup) => return Ok(lookedup),
                _ => {} // Fallback, we need a write lock to update the parent.
            }
        }

        // If the fast path failed, take the write lock. We first have to try the update again, as
        // a racing writer might have beat us to the lock after our fast path attempt.
        let mut parent_state = parent.get_mut_inode_state()?;
        match Self::try_update_child(&parent_state, name, &remote)? {
            UpdateStatus::Neither => Err(InodeError::FileDoesNotExist),
            UpdateStatus::Updated(lookedup) => Ok(lookedup),
            UpdateStatus::LocalOnly(inode) => {
                match &mut parent_state.kind_data {
                    InodeKindData::File {} => unreachable!("we know parent is a directory"),
                    InodeKindData::Directory {
                        children,
                        writing_children,
                        ..
                    } => {
                        if writing_children.contains(&inode.ino()) {
                            // Return the local inode.
                            let stat = inode.get_inode_state()?.stat.clone();
                            Ok(LookedUp { inode, stat })
                        } else {
                            // Remove from children.
                            // TODO: also handle inode in [Self::inodes].
                            children.remove(name);
                            Err(InodeError::FileDoesNotExist)
                        }
                    }
                }
            }
            UpdateStatus::RemoteKey(RemoteLookup { stat, kind }) => {
                let state = InodeState {
                    stat: stat.clone(),
                    kind_data: InodeKindData::default_for(kind),
                    write_status: WriteStatus::Remote,
                };
                self.create_inode_locked(&parent, &mut parent_state, name, kind, state, false)
                    .map(|inode| LookedUp { inode, stat })
            }
        }
    }

    /// Try to update the inode for the given name in the parent directory and
    /// return an [UpdateStatus].
    /// Don't use this directly -- use [SuperblockInner::update_from_remote] instead.
    fn try_update_child(
        parent_state: &InodeState,
        name: &str,
        remote: &Option<RemoteLookup>,
    ) -> Result<UpdateStatus, InodeError> {
        let inode = match &parent_state.kind_data {
            InodeKindData::File { .. } => unreachable!("we know parent is a directory"),
            InodeKindData::Directory { children, .. } => children.get(name),
        };
        match (remote, inode) {
            (None, None) => Ok(UpdateStatus::Neither),
            (None, Some(inode)) => Ok(UpdateStatus::LocalOnly(inode.clone())),
            (Some(remote), None) => Ok(UpdateStatus::RemoteKey(remote.clone())),
            (
                Some(
                    remote @ RemoteLookup {
                        kind: remote_kind,
                        stat,
                    },
                ),
                Some(existing_inode),
            ) => {
                let mut inode_state = existing_inode.get_mut_inode_state()?;
                match (existing_inode.kind(), remote_kind) {
                    // If the kind has changed, we need a new inode.
                    (InodeKind::File, InodeKind::Directory) | (InodeKind::Directory, InodeKind::File) => {
                        warn!(
                            parent=?existing_inode.parent(),
                            name=?existing_inode.name(),
                            ino=?existing_inode.ino(),
                            "inode changed from {:?} to {:?}, will recreate it",
                            existing_inode.kind(),
                            remote_kind,
                        );
                        Ok(UpdateStatus::RemoteKey(remote.clone()))
                    }
                    // Otherwise, we'll just update this inode in place.
                    (InodeKind::File, InodeKind::File) | (InodeKind::Directory, InodeKind::Directory) => {
                        trace!(parent=?existing_inode.parent(), name=?existing_inode.name(), ino=?existing_inode.ino(), "updating inode in place");
                        inode_state.stat = stat.clone();
                        Ok(UpdateStatus::Updated(LookedUp {
                            inode: existing_inode.clone(),
                            stat: stat.clone(),
                        }))
                    }
                }
            }
        }
    }

    /// Create a new inode in the parent directory, which is already write-locked.
    ///
    /// Don't use this directly unless you need to do inode creation without re-acquiring the parent
    /// write lock. Prefer [SuperblockInner::update_from_remote] instead.
    fn create_inode_locked(
        &self,
        parent: &Inode,
        parent_locked: &mut InodeState,
        name: &str,
        kind: InodeKind,
        state: InodeState,
        is_new_file: bool,
    ) -> Result<Inode, InodeError> {
        if !valid_inode_name(name) {
            let kind = if kind == InodeKind::Directory {
                "directory"
            } else {
                "file"
            };
            warn!(?name, "invalid file name; {} will not be available", kind);
            return Err(InodeError::InvalidFileName(OsString::from(name)));
        }

        let next_ino = self.next_ino.fetch_add(1, Ordering::SeqCst);

        let mut full_key = parent.full_key().to_owned();
        assert!(full_key.is_empty() || full_key.ends_with('/'));
        full_key.push_str(name);
        if kind == InodeKind::Directory {
            full_key.push('/');
        }

        trace!(parent=?parent.ino(), ?name, ?kind, new_ino=?next_ino, ?full_key, "creating new inode");

        let inode = InodeInner {
            ino: next_ino,
            parent: parent.ino(),
            name: name.to_owned(),
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
            InodeKindData::Directory {
                children,
                writing_children,
                ..
            } => {
                children.insert(name.to_owned(), inode.clone());
                if is_new_file {
                    writing_children.insert(next_ino);
                }
            }
        }

        let previous = self.inodes.write().unwrap().insert(next_ino, inode.clone());
        assert!(previous.is_none(), "inode numbers are never reused");

        Ok(inode)
    }
}

/// Data from a remote object.
#[derive(Debug, Clone)]
pub struct RemoteLookup {
    kind: InodeKind,
    stat: InodeStat,
}

/// Result of a call to [SuperblockInner::try_update_child].
#[derive(Debug)]
enum UpdateStatus {
    /// Key not found on remote, but local inode exists.
    LocalOnly(Inode),

    /// New key on remote, no local inode.
    RemoteKey(RemoteLookup),

    /// Local inode already up to date with remote.
    /// [LookedUp] contains the inode and its updated `stat`.
    Updated(LookedUp),

    /// No remote key, no local inode.
    Neither,
}

/// Result of a call to [Superblock::lookup] or [Superblock::getattr]. `stat` is a copy of the
/// inode's `stat` field that has already had its expiry checked and so is guaranteed to be valid
/// until `stat.expiry`.
#[derive(Debug, Clone)]
pub struct LookedUp {
    pub inode: Inode,
    pub stat: InodeStat,
}

impl LookedUp {
    /// How much longer this lookup will be valid for
    pub fn validity(&self) -> Duration {
        self.stat.expiry.saturating_duration_since(Instant::now())
    }
}

/// Handle for a file writing that we use to interact with [Superblock]
#[derive(Debug)]
pub struct WriteHandle {
    inner: Arc<SuperblockInner>,
    ino: InodeNo,
    parent_ino: InodeNo,
}

impl WriteHandle {
    /// Check the status on the inode and set it to writing state if it's writable
    pub fn start_writing(&self) -> Result<(), InodeError> {
        let inode = self.inner.get(self.ino)?;
        let mut state = inode.get_mut_inode_state()?;
        match state.write_status {
            WriteStatus::LocalUnopened => {
                state.write_status = WriteStatus::LocalOpen;
                Ok(())
            }
            WriteStatus::LocalOpen => {
                error!(inode=?self.ino, "inode is already being written");
                Err(InodeError::InodeNotWritable(self.ino))
            }
            WriteStatus::Remote => {
                error!(inode=?self.ino, "inode already exists");
                Err(InodeError::InodeNotWritable(self.ino))
            }
        }
    }

    /// Update status of the inode and of containing "local" directories.
    pub fn finish_writing(self) -> Result<(), InodeError> {
        let inode = self.inner.get(self.ino)?;

        // Collect ancestor inodes that may need updating,
        // from parent to first remote ancestor.
        let ancestors = {
            let mut ancestors = Vec::new();
            let mut ancestor_ino = self.parent_ino;
            let mut visited = HashSet::new();
            loop {
                assert!(visited.insert(ancestor_ino), "cycle detected in inode ancestors");
                let ancestor = self.inner.get(ancestor_ino)?;
                ancestors.push(ancestor.clone());
                if ancestor.ino() == ROOT_INODE_NO || ancestor.get_inode_state()?.write_status == WriteStatus::Remote {
                    break;
                }
                ancestor_ino = ancestor.parent();
            }
            ancestors
        };

        // Acquire locks on ancestors in descending order to avoid deadlocks.
        let mut ancestors_states = ancestors
            .iter()
            .rev()
            .map(|inode| inode.get_mut_inode_state())
            .collect::<Result<Vec<_>, _>>()?;

        let mut state = inode.get_mut_inode_state()?;
        match state.write_status {
            WriteStatus::LocalOpen => {
                state.write_status = WriteStatus::Remote;

                // Invalidate the inode's stats so we refresh them from S3 when next queried
                state.stat.update_validity(Duration::from_secs(0));

                // Walk up the ancestors from parent to first remote ancestor to transition
                // the inode and all "local" containing directories to "remote".
                let children_inos = std::iter::once(self.ino).chain(ancestors.iter().map(|ancestor| ancestor.ino()));
                for (ancestor_state, child_ino) in ancestors_states.iter_mut().rev().zip(children_inos) {
                    match &mut ancestor_state.kind_data {
                        InodeKindData::File { .. } => unreachable!("we know the ancestor is a directory"),
                        InodeKindData::Directory { writing_children, .. } => {
                            writing_children.remove(&child_ino);
                        }
                    }
                    ancestor_state.write_status = WriteStatus::Remote;
                }

                Ok(())
            }
            _ => Err(InodeError::InodeNotWritable(inode.ino())),
        }
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
    name: String,
    // TODO deduplicate keys by string interning or something -- many keys will have common prefixes
    full_key: String,
    kind: InodeKind,

    /// Mutable inode state. This lock should also be held to serialize operations on an inode (like
    /// creating a new child).
    ///
    /// When taking a lock across multiple [Inode]s,
    /// we must always acquire the locks in the following order to avoid deadlock:
    ///
    /// - Any ancestors in descending order, if they need to be locked.
    /// - Otherwise, ascending order by [InodeNo].
    ///   This reflects similar behavior in the Kernel's VFS named 'inode pointer order',
    ///   described in https://www.kernel.org/doc/html/next/filesystems/directory-locking.html
    sync: RwLock<InodeState>,
}

impl Inode {
    pub fn ino(&self) -> InodeNo {
        self.inner.ino
    }

    pub fn parent(&self) -> InodeNo {
        self.inner.parent
    }

    pub fn name(&self) -> &str {
        &self.inner.name
    }

    pub fn kind(&self) -> InodeKind {
        self.inner.kind
    }

    pub fn full_key(&self) -> &str {
        &self.inner.full_key
    }

    pub fn start_reading(&self) -> Result<(), InodeError> {
        let state = self.get_inode_state()?;
        match state.write_status {
            WriteStatus::Remote => Ok(()),
            _ => Err(InodeError::InodeNotReadableWhileWriting(self.ino())),
        }
    }

    pub fn finish_reading(&self) -> Result<(), InodeError> {
        // Currently a no-op, but this is where you'd e.g. update atime
        Ok(())
    }

    /// return Inode State with read lock after checking whether the directory inode is deleted or not.
    fn get_inode_state(&self) -> Result<RwLockReadGuard<InodeState>, InodeError> {
        let inode_state = self.inner.sync.read().unwrap();
        match &inode_state.kind_data {
            InodeKindData::Directory { deleted, .. } if *deleted => Err(InodeError::InodeDoesNotExist(self.ino())),
            _ => Ok(inode_state),
        }
    }

    /// return Inode State with write lock after checking whether the directory inode is deleted or not.
    fn get_mut_inode_state(&self) -> Result<RwLockWriteGuard<InodeState>, InodeError> {
        let inode_state = self.inner.sync.write().unwrap();
        match &inode_state.kind_data {
            InodeKindData::Directory { deleted, .. } if *deleted => Err(InodeError::InodeDoesNotExist(self.ino())),
            _ => Ok(inode_state),
        }
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
        /// Mapping from child names to [Inode]s.
        ///
        /// How should this field be used?:
        /// - **Many operations should maintain** this list.
        /// - **Only `mknod` and `mkdir` should read** this list, for checking if a file already exists.
        children: HashMap<String, Inode>,

        /// A set of inode numbers that have been opened for write but not completed yet.
        /// This should be a subset of the [children](Self::Directory::children) field.
        writing_children: HashSet<InodeNo>,

        /// True if this directory has been deleted (`rmdir`) from its parent
        deleted: bool,
    },
}

impl InodeKindData {
    fn default_for(kind: InodeKind) -> Self {
        match kind {
            InodeKind::File => Self::File {},
            InodeKind::Directory => Self::Directory {
                children: Default::default(),
                writing_children: Default::default(),
                deleted: false,
            },
        }
    }
}

#[derive(Debug, Clone)]
pub struct InodeStat {
    /// Time this stat becomes invalid and needs to be refreshed
    expiry: Instant,

    /// Size in bytes
    pub size: usize,

    /// Time of last file content modification
    pub mtime: OffsetDateTime,
    /// Time of last file metadata (or content) change
    pub ctime: OffsetDateTime,
    /// Time of last access
    pub atime: OffsetDateTime,
    /// Etag for the file (object)
    pub etag: Option<String>,
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
    fn is_valid(&self) -> bool {
        self.expiry >= Instant::now()
    }

    /// Initialize an [InodeStat] for a file, given some metadata.
    fn for_file(size: usize, datetime: OffsetDateTime, etag: Option<String>, validity: Duration) -> InodeStat {
        let expiry = Instant::now()
            .checked_add(validity)
            .expect("64-bit time shouldn't overflow");
        InodeStat {
            expiry,
            size,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            etag,
        }
    }

    /// Initialize an [InodeStat] for a directory, given some metadata.
    fn for_directory(datetime: OffsetDateTime, validity: Duration) -> InodeStat {
        let expiry = Instant::now()
            .checked_add(validity)
            .expect("64-bit time shouldn't overflow");
        InodeStat {
            expiry,
            size: 0,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            etag: None,
        }
    }

    fn update_validity(&mut self, validity: Duration) {
        self.expiry = Instant::now()
            .checked_add(validity)
            .expect("64-bit time shouldn't overflow");
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
    #[error("inode {0} is not a directory")]
    NotADirectory(InodeNo),
    #[error("inode {0} is a directory")]
    IsDirectory(InodeNo),
    #[error("file already exists at inode {0}")]
    FileAlreadyExists(InodeNo),
    #[error("inode {0} is not writable")]
    InodeNotWritable(InodeNo),
    #[error("inode {0} is not readable while being written")]
    InodeNotReadableWhileWriting(InodeNo),
    #[error("remote directory cannot be removed at inode {0}")]
    CannotRemoveRemoteDirectory(InodeNo),
    #[error("non-empty directory cannot be removed at inode {0}")]
    DirectoryNotEmpty(InodeNo),
    #[error("inode {0} cannot be unlinked while being written")]
    UnlinkNotPermittedWhileWriting(InodeNo),
}

#[cfg(test)]
mod tests {
    use std::str::FromStr;

    use mountpoint_s3_client::{
        mock_client::{MockClient, MockClientConfig, MockObject},
        ETag,
    };
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
            let mut obj = MockObject::constant(0xaa, object_size, ETag::for_tests());
            last_modified += Duration::days(1);
            obj.set_last_modified(last_modified);
            client.add_object(key, obj);
        }

        let prefix = Prefix::new(prefix).expect("valid prefix");
        let ts = OffsetDateTime::now_utc();
        let superblock = Superblock::new(bucket, &prefix, Default::default());

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
                        .head_object(bucket, file.inode.full_key())
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
            let mut obj = MockObject::constant(0xaa, 30, ETag::for_tests());
            obj.set_last_modified(last_modified);
            client.add_object(key, obj);
        }

        let prefix = Prefix::new(prefix).expect("valid prefix");
        let ts = OffsetDateTime::now_utc();
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                &["dir0", "dir1"]
            );
            assert_inode_stat!(entries[0], InodeKind::Directory, ts, 0);
            assert_inode_stat!(entries[1], InodeKind::Directory, ts, 0);

            let dir0_inode = entries[0].inode.ino();
            let dir_handle = superblock.readdir(&client, dir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                &["file0.txt", "sdir0", "sdir1"]
            );

            assert_inode_stat!(entries[0], InodeKind::File, last_modified, 30);
            assert_inode_stat!(entries[1], InodeKind::Directory, ts, 0);
            assert_inode_stat!(entries[2], InodeKind::Directory, ts, 0);

            let sdir0_inode = entries[1].inode.ino();
            let dir_handle = superblock.readdir(&client, sdir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                &["file0.txt", "file1.txt", "file2.txt"]
            );
            for entry in entries {
                assert_inode_stat!(entry, InodeKind::File, last_modified, 30);
            }
        }
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_readdir_no_remote_keys(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        let mut expected_list = Vec::new();

        // Create local keys
        for i in 0..5 {
            let filename = format!("file{i}.txt");
            let new_inode = superblock
                .create(
                    &client,
                    FUSE_ROOT_INODE,
                    OsStr::from_bytes(filename.as_bytes()),
                    InodeKind::File,
                )
                .await
                .unwrap();
            superblock
                .write(&client, new_inode.inode.ino(), FUSE_ROOT_INODE)
                .await
                .unwrap();
            expected_list.push(filename);
        }

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                expected_list
            );
        }
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_readdir_local_keys_after_remote_keys(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        let mut expected_list = Vec::new();

        let remote_filenames = ["file0.txt", "file1.txt", "file2.txt"];

        let last_modified = OffsetDateTime::UNIX_EPOCH + Duration::days(30);
        for filename in remote_filenames {
            let mut obj = MockObject::constant(0xaa, 30, ETag::for_tests());
            obj.set_last_modified(last_modified);
            let key = format!("{prefix}{filename}");
            client.add_object(&key, obj);
            expected_list.push(filename.to_owned());
        }

        // Create local keys
        for i in 0..5 {
            let filename = format!("newfile{i}.txt");
            let new_inode = superblock
                .create(
                    &client,
                    FUSE_ROOT_INODE,
                    OsStr::from_bytes(filename.as_bytes()),
                    InodeKind::File,
                )
                .await
                .unwrap();
            superblock
                .write(&client, new_inode.inode.ino(), FUSE_ROOT_INODE)
                .await
                .unwrap();
            expected_list.push(filename);
        }

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                expected_list
            );
        }
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_create_local_dir(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        // Create local directory
        let dirname = "local_dir";
        superblock
            .create(&client, FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
            .await
            .unwrap();

        let lookedup = superblock
            .lookup(&client, FUSE_ROOT_INODE, dirname.as_ref())
            .await
            .expect("lookup should succeed on local dirs");
        assert_eq!(
            lookedup
                .inode
                .get_inode_state()
                .expect("should get Inode state with read lock")
                .write_status,
            WriteStatus::LocalUnopened
        );

        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
            vec![dirname]
        );

        // Check that local directories are not present in the client
        let prefix = format!("{prefix}{dirname}");
        assert!(!client.contains_prefix(&prefix));
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_readdir_lookup_after_rmdir(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        // Create local directory
        let dirname = "local_dir";
        let LookedUp { inode, .. } = superblock
            .create(&client, FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
            .await
            .expect("Should be able to create directory");

        superblock
            .rmdir(&client, FUSE_ROOT_INODE, dirname.as_ref())
            .await
            .expect("rmdir on empty local directory should succeed");

        superblock
            .lookup(&client, FUSE_ROOT_INODE, dirname.as_ref())
            .await
            .expect_err("should not do lookup on removed directory");

        superblock
            .readdir(&client, inode.ino(), 2)
            .await
            .expect_err("should not do readdir on removed directory");

        superblock
            .getattr(&client, inode.ino(), false)
            .await
            .expect_err("should not do getattr on removed directory");
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_rmdir_delete_status(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        // Create local directory
        let dirname = "local_dir";
        let LookedUp { inode, .. } = superblock
            .create(&client, FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
            .await
            .expect("Should be able to create directory");

        superblock
            .rmdir(&client, FUSE_ROOT_INODE, dirname.as_ref())
            .await
            .expect("rmdir on empty local directory should succeed");

        let parent = superblock.inner.get(FUSE_ROOT_INODE).unwrap();
        let parent_state = parent
            .get_inode_state()
            .expect("should get parent state with read lock");
        match &parent_state.kind_data {
            InodeKindData::File {} => unreachable!("Parent can only be a Directory"),
            InodeKindData::Directory {
                children,
                writing_children,
                ..
            } => {
                assert!(writing_children.get(&inode.ino()).is_none());
                assert!(children.get(inode.name()).is_none());
            }
        }

        inode
            .get_inode_state()
            .expect_err("Should not be able to get deleted Inode");
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_parent_readdir_after_rmdir(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        // Create local directory
        let dirname = "local_dir";
        superblock
            .create(&client, FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
            .await
            .expect("Should be able to create directory");

        let dirname_to_stay = "staying_local_dir";
        superblock
            .create(&client, FUSE_ROOT_INODE, dirname_to_stay.as_ref(), InodeKind::Directory)
            .await
            .expect("Should be able to create directory");

        superblock
            .rmdir(&client, FUSE_ROOT_INODE, dirname.as_ref())
            .await
            .expect("rmdir on empty local directory should succeed");

        // removed directory should not appear in readdir of parent
        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
            &[dirname_to_stay]
        );
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_lookup_after_unlink(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new("test_bucket", &prefix, Default::default());

        let file_name = "file.txt";
        let file_key = format!("{prefix}{file_name}");
        client.add_object(file_key.as_ref(), MockObject::constant(0xaa, 30, ETag::for_tests()));
        let parent_ino = FUSE_ROOT_INODE;

        superblock
            .lookup(&client, parent_ino, file_name.as_ref())
            .await
            .expect("file should exist");

        superblock
            .unlink(&client, parent_ino, file_name.as_ref())
            .await
            .expect("file delete should succeed as it exists");

        let err: i32 = superblock
            .lookup(&client, parent_ino, file_name.as_ref())
            .await
            .expect_err("lookup should no longer find deleted file")
            .into();
        assert_eq!(libc::ENOENT, err, "lookup should return no existing entry error");
    }

    #[tokio::test]
    async fn test_finish_writing_convert_parent_local_dirs_to_remote() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

        let nested_dirs = (0..5).map(|i| format!("level{i}")).collect::<Vec<_>>();
        let leaf_dir_ino = {
            let mut parent_dir_ino = FUSE_ROOT_INODE;
            for dirname in &nested_dirs {
                let dir_lookedup = superblock
                    .create(&client, parent_dir_ino, dirname.as_ref(), InodeKind::Directory)
                    .await
                    .unwrap();

                assert_eq!(
                    dir_lookedup
                        .inode
                        .get_inode_state()
                        .expect("should get inode state with read lock")
                        .write_status,
                    WriteStatus::LocalUnopened
                );

                parent_dir_ino = dir_lookedup.inode.ino();
            }
            parent_dir_ino
        };

        // Create object under leaf dir
        let filename = "newfile.txt";
        let new_inode = superblock
            .create(
                &client,
                leaf_dir_ino,
                OsStr::from_bytes(filename.as_bytes()),
                InodeKind::File,
            )
            .await
            .unwrap();

        let writehandle = superblock
            .write(&client, new_inode.inode.ino(), leaf_dir_ino)
            .await
            .unwrap();

        // Invoke [finish_writing], without actually adding the
        // object to the client
        writehandle.finish_writing().unwrap();

        // All nested dirs disappear
        let dirname = nested_dirs.first().unwrap();
        let lookedup = superblock.lookup(&client, FUSE_ROOT_INODE, dirname.as_ref()).await;
        assert!(matches!(lookedup, Err(InodeError::FileDoesNotExist)));
    }

    #[tokio::test]
    async fn test_inode_reuse() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        client.add_object("dir1/file1.txt", MockObject::constant(0xaa, 30, ETag::for_tests()));

        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

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
        client.add_object(
            &format!("dir/{subdir}file1.txt"),
            MockObject::constant(0xaa, 30, ETag::for_tests()),
        );
        client.add_object(
            &format!("dir-1/{subdir}file1.txt"),
            MockObject::constant(0xaa, 30, ETag::for_tests()),
        );

        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
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
        client.add_object(
            "dir1/",
            MockObject::constant(0xaa, 30, ETag::from_str("test_etag_1").unwrap()),
        );
        client.add_object(
            "dir1//",
            MockObject::constant(0xaa, 30, ETag::from_str("test_etag_2").unwrap()),
        );
        client.add_object(
            "dir1/a",
            MockObject::constant(0xaa, 30, ETag::from_str("test_etag_3").unwrap()),
        );
        client.add_object(
            "dir1/.",
            MockObject::constant(0xaa, 30, ETag::from_str("test_etag_4").unwrap()),
        );
        client.add_object(
            "dir1/./a",
            MockObject::constant(0xaa, 30, ETag::from_str("test_etag_5").unwrap()),
        );

        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());
        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
            &["dir1"]
        );

        let dir1_ino = entries[0].inode.ino();
        let dir_handle = superblock.readdir(&client, dir1_ino, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
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
        let file_inodestat = InodeStat::for_file(128, ts, None, Default::default());
        assert_eq!(file_inodestat.size, 128);
        assert_eq!(file_inodestat.atime, ts);
        assert_eq!(file_inodestat.ctime, ts);
        assert_eq!(file_inodestat.mtime, ts);

        let ts = OffsetDateTime::UNIX_EPOCH + Duration::days(180);
        let file_inodestat = InodeStat::for_directory(ts, Default::default());
        assert_eq!(file_inodestat.size, 0);
        assert_eq!(file_inodestat.atime, ts);
        assert_eq!(file_inodestat.ctime, ts);
        assert_eq!(file_inodestat.mtime, ts);
    }
}
