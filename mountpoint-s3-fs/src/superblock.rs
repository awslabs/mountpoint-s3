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
//! file or directory). [Inode]s always refer to a unique object; if the object changes (either
//! because the object itself was mutated, or it changed types between file and directory), the
//! inode must be recreated.
//!
//! In addition to this "permanent" state, an [Inode] also has some cached state called [InodeStat].
//! Cached state is subject to an expiry time, and must be refreshed before use if it has expired.
//! Some cached state is dependent on the inode kind; that state is hidden behind a [InodeStatKind]
//! enum.

use std::collections::{HashMap, HashSet};
use std::ffi::{OsStr, OsString};
use std::fmt::Debug;
use std::time::Duration;

use anyhow::anyhow;
use async_trait::async_trait;
use std::time::UNIX_EPOCH;

use crate::fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT};
use crate::fs::DirHandle;
use crate::fs::DirectoryEntry;
use crate::fs::DirectoryReplier;
use crate::fs::{CacheConfig, FUSE_ROOT_INODE};
use crate::logging;
#[cfg(feature = "manifest")]
use crate::manifest::{Manifest, ManifestEntry, ManifestError};
use crate::mountspace::{Mountspace, MountspaceDirectoryReplier};
use crate::prefix::Prefix;
use crate::s3::S3Personality;
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, RwLock};
use fuser::FileAttr;
use futures::{select_biased, FutureExt};
use mountpoint_s3_client::error::{HeadObjectError, ObjectClientError};
use mountpoint_s3_client::error_metadata::ProvideErrorMetadata;
use mountpoint_s3_client::types::{ETag, HeadObjectParams, HeadObjectResult};
use mountpoint_s3_client::ObjectClient;
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{debug, error, trace, warn};

use std::sync::Mutex;

mod expiry;
use expiry::Expiry;

mod inode;
pub use inode::{Inode, InodeKind, InodeNo, WriteMode};
use inode::{InodeErrorInfo, InodeKindData, InodeStat, InodeState, WriteStatus};

mod negative_cache;
use negative_cache::NegativeCache;

pub mod path;
use path::{ValidKey, ValidName};
use std::fmt;
mod readdir;
use crate::err;
pub use readdir::ReaddirHandle;
/// Superblock is the root object of the file system
pub struct Superblock<OC: ObjectClient + Send + Sync> {
    inner: Arc<SuperblockInner<OC>>,
}
impl<OC: ObjectClient + Send + Sync> fmt::Debug for Superblock<OC> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> Result<(), fmt::Error> {
        Ok(())
    }
}

struct SuperblockInner<OC: ObjectClient + Send + Sync> {
    bucket: String,
    prefix: Prefix,
    inodes: RwLock<InodeMap>,
    negative_cache: NegativeCache,
    next_ino: AtomicU64,
    mount_time: OffsetDateTime,
    config: SuperblockConfig,
    client: Arc<OC>,
    read_dir_handles: RwLock<HashMap<u64, Arc<ReaddirHandle>>>,
    dir_handles: RwLock<HashMap<u64, Arc<DirHandle>>>,
    next_dir_handle_id: AtomicU64,
}
impl<OC: ObjectClient + Send + Sync> fmt::Debug for SuperblockInner<OC> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> Result<(), fmt::Error> {
        Ok(())
    }
}

/// Configuration for superblock operations
#[derive(Debug, Clone, Default)]
pub struct SuperblockConfig {
    pub cache_config: CacheConfig,
    pub s3_personality: S3Personality,
    #[cfg(feature = "manifest")]
    pub manifest: Option<Manifest>,
}

impl<OC: ObjectClient + Send + Sync> Superblock<OC> {
    pub fn new(client: OC, bucket: &str, prefix: &Prefix, config: SuperblockConfig) -> Self {
        let mount_time = OffsetDateTime::now_utc();
        let root = Inode::new_root(prefix, mount_time);

        let mut inodes = InodeMap::default();
        inodes.insert(root.ino(), root);

        let negative_cache = NegativeCache::new(
            config.cache_config.negative_cache_size,
            config.cache_config.negative_cache_ttl,
        );

        let inner = SuperblockInner {
            bucket: bucket.to_owned(),
            prefix: prefix.clone(),
            inodes: RwLock::new(inodes),
            negative_cache,
            next_ino: AtomicU64::new(2),
            mount_time,
            config,
            client: Arc::new(client),
            next_dir_handle_id: AtomicU64::new(1),
            read_dir_handles: Default::default(),
            dir_handles: Default::default(),
        };
        Self { inner: Arc::new(inner) }
    }

    fn make_attr(&self, lookup: &LookedUp) -> FileAttr {
        /// From man stat(2): `st_blocks`: "This field indicates the number of blocks allocated to
        /// the file, in 512-byte units."
        const STAT_BLOCK_SIZE: u64 = 512;
        /// From man stat(2): `st_blksize`: "This field gives the "preferred" block size for
        /// efficient filesystem I/O."
        const PREFERRED_IO_BLOCK_SIZE: u32 = 4096;

        // We don't implement hard links, and don't want to have to list a directory to count its
        // hard links, so we just assume one link for files (itself) and two links for directories
        // (itself + the "." link).
        let (perm, nlink) = match lookup.inode.kind() {
            InodeKind::File => {
                if lookup.stat.is_readable {
                    (493, 1)
                } else {
                    (0o000, 1)
                }
            }
            InodeKind::Directory => (493, 2),
        };

        FileAttr {
            ino: lookup.inode.ino(),
            size: lookup.stat.size as u64,
            blocks: (lookup.stat.size as u64).div_ceil(STAT_BLOCK_SIZE),
            atime: lookup.stat.atime.into(),
            mtime: lookup.stat.mtime.into(),
            ctime: lookup.stat.ctime.into(),
            crtime: UNIX_EPOCH,
            kind: lookup.inode.kind().into(),
            perm,
            nlink,
            uid: 1000,
            gid: 1001,
            rdev: 0,
            flags: 0,
            blksize: PREFERRED_IO_BLOCK_SIZE,
        }
    }
}

#[async_trait]
impl<OC: ObjectClient + Send + Sync> Mountspace for Superblock<OC> {
    /// Create a new Superblock that targets the given bucket/prefix

    /// The kernel tells us when it removes a reference to an [InodeNo] from its internal caches via a forget call.
    /// The kernel may forget a number of references (`n`) in one forget message to our FUSE implementation.
    /// If the lookup count reaches zero, it is safe for the [Superblock] to delete the [Inode].
    fn forget(&self, ino: InodeNo, n: u64) {
        let inode = {
            if let Some(inode) = self.inner.inodes.read().unwrap().get(&ino).cloned() {
                inode
            } else {
                debug_assert!(
                    false,
                    "forget should not be called on inode already removed from superblock"
                );
                error!("forget called on inode {ino} already removed from the superblock");
                return;
            }
        };

        logging::record_name(inode.name());
        let new_lookup_count = inode.dec_lookup_count(n);
        if new_lookup_count == 0 {
            // Safe to remove, kernel no longer has a reference to it.
            trace!(ino, "removing inode from superblock");
            let Some(inode) = self.inner.inodes.write().unwrap().remove(&ino) else {
                error!("forget called on inode {ino} already removed from the superblock");
                return;
            };

            let parent = {
                if let Some(parent) = self.inner.inodes.read().unwrap().get(&inode.parent()).cloned() {
                    parent
                } else {
                    // Should be impossible for this to fail (VFS inodes reference their parent, so
                    // children need to be freed first), but let's not crash in a `forget` function...
                    debug_assert!(false, "children should be forgotten before parents");
                    return;
                }
            };
            let mut parent_state = parent.get_mut_inode_state_no_check();
            let InodeKindData::Directory {
                children,
                writing_children,
                ..
            } = &mut parent_state.kind_data
            else {
                unreachable!("parent is always a directory");
            };
            if let Some(child) = children.get(inode.name()) {
                // Don't accidentally remove a newer inode (e.g. remote shadowing local)
                if child.ino() == ino {
                    children.remove(inode.name());
                }
            }
            writing_children.remove(&ino);

            if let Ok(state) = inode.get_inode_state() {
                metrics::counter!("metadata_cache.inode_forgotten_before_expiry")
                    .increment(state.stat.is_valid().into());
            };
        }
    }

    /// Lookup an inode in the parent directory with the given name and
    /// increments its lookup count.
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<LookedUp, InodeError> {
        trace!(parent=?parent_ino, ?name, "lookup");
        let lookup = self
            .inner
            .lookup_by_name(parent_ino, name, self.inner.config.cache_config.serve_lookup_from_cache)
            .await?;
        self.inner.remember(&lookup.inode);
        Ok(lookup)
    }

    /// Retrieve the attributes for an inode
    async fn getattr(&self, ino: InodeNo, force_revalidate: bool) -> Result<LookedUp, InodeError> {
        let inode = self.inner.get(ino)?;
        logging::record_name(inode.name());

        if !force_revalidate {
            let sync = inode.get_inode_state()?;
            if sync.stat.is_valid() {
                let stat = sync.stat.clone();
                drop(sync);
                return Ok(LookedUp { inode, stat });
            }
        }

        let lookup = self
            .inner
            .lookup_by_name(inode.parent(), inode.name().as_ref(), false)
            .await?;
        if lookup.inode.ino() != ino {
            Err(InodeError::StaleInode {
                remote_key: self.full_key_for_inode(lookup.inode.ino()).into(),
                old_inode: inode.err(),
                new_inode: lookup.inode.err(),
            })
        } else {
            Ok(lookup)
        }
    }

    /// Set the attributes for an inode
    async fn setattr(
        &self,
        ino: InodeNo,
        atime: Option<OffsetDateTime>,
        mtime: Option<OffsetDateTime>,
    ) -> Result<LookedUp, InodeError> {
        let inode = self.inner.get(ino)?;
        logging::record_name(inode.name());
        let mut sync = inode.get_mut_inode_state()?;

        if sync.write_status == WriteStatus::Remote {
            return Err(InodeError::SetAttrNotPermittedOnRemoteInode(inode.err()));
        }

        let validity = match inode.kind() {
            InodeKind::File => self.inner.config.cache_config.file_ttl,
            InodeKind::Directory => self.inner.config.cache_config.dir_ttl,
        };

        // Resetting the InodeStat expiry because the new InodeStat should have new validity
        sync.stat.update_validity(validity);

        if let Some(t) = atime {
            sync.stat.atime = t;
        }
        if let Some(t) = mtime {
            sync.stat.mtime = t;
        };

        let stat = sync.stat.clone();
        drop(sync);
        Ok(LookedUp { inode, stat })
    }

    /// Prepare an inode to start writing.
    async fn start_writing(&self, ino: InodeNo, mode: &WriteMode, is_truncate: bool) -> Result<(), InodeError> {
        trace!(?ino, "write");
        let inode = self.inner.get(ino)?;
        let mut state = inode.get_mut_inode_state()?;
        if state.reader_count > 0 {
            return Err(InodeError::InodeNotWritableWhileReading(inode.err()));
        }
        match state.write_status {
            WriteStatus::LocalUnopened => {
                state.write_status = WriteStatus::LocalOpen;
                state.stat.size = 0;
            }
            WriteStatus::LocalOpen => return Err(InodeError::InodeAlreadyWriting(inode.err())),
            WriteStatus::Remote => {
                if !mode.is_inode_writable(is_truncate) {
                    return Err(InodeError::InodeNotWritable(inode.err()));
                }

                if is_truncate {
                    state.stat.size = 0;
                }

                state.write_status = WriteStatus::LocalOpen;
            }
        }
        drop(state);
        Ok(())
    }

    /// Increase the size of a file open for writing.
    fn inc_file_size(&self, ino: InodeNo, len: usize) -> Result<usize, InodeError> {
        let inode = self.inner.get(ino)?;
        let mut state = inode.get_mut_inode_state()?;
        if !matches!(state.write_status, WriteStatus::LocalOpen) {
            debug!(?inode, "Error trying to increase file size on write");
            return Err(InodeError::InodeInvalidWriteStatus(inode.err()));
        }
        state.stat.size += len;
        Ok(state.stat.size)
    }

    /// Update status of the inode and of containing "local" directories.
    fn finish_writing(&self, ino: InodeNo, etag: Option<ETag>) -> Result<(), InodeError> {
        let inode = self.inner.get(ino)?;

        // Collect ancestor inodes that may need updating,
        // from parent to first remote ancestor.
        let ancestors = {
            let mut ancestors = Vec::new();
            let mut ancestor_ino = inode.parent();
            let mut visited = HashSet::new();
            loop {
                assert!(visited.insert(ancestor_ino), "cycle detected in inode ancestors");
                let ancestor = self.inner.get(ancestor_ino)?;
                ancestors.push(ancestor.clone());
                if ancestor.ino() == FUSE_ROOT_INODE || ancestor.get_inode_state()?.write_status == WriteStatus::Remote
                {
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
                state.stat.etag = etag.map(|e| e.into_inner().into_boxed_str());

                // Invalidate the inode's stats so we refresh them from S3 when next queried
                state.stat.update_validity(Duration::from_secs(0));

                // Walk up the ancestors from parent to first remote ancestor to transition
                // the inode and all "local" containing directories to "remote".
                let children_inos = std::iter::once(inode.ino()).chain(ancestors.iter().map(|ancestor| ancestor.ino()));
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
            _ => Err(InodeError::InodeInvalidWriteStatus(inode.err())),
        }
    }

    /// Prepare an inode to start reading.
    async fn start_reading(&self, ino: InodeNo) -> Result<(), InodeError> {
        trace!(?ino, "read");

        let inode = self.inner.get(ino)?;
        let mut state = inode.get_mut_inode_state()?;
        if state.write_status != WriteStatus::Remote {
            return Err(InodeError::InodeNotReadableWhileWriting(inode.err()));
        }
        state.reader_count += 1;
        drop(state);
        Ok(())
    }

    /// Update status of the inode to reflect the read being finished
    fn finish_reading(&self, ino: InodeNo) -> Result<(), InodeError> {
        let inode = self.inner.get(ino)?;

        // Decrease reader count for the inode
        let mut state = inode.get_mut_inode_state()?;
        state.reader_count -= 1;
        Ok(())
    }

    /// Start a readdir stream for the given directory inode
    ///
    /// Doesn't currently do any IO, so doesn't need to be async, but reserving it for future use.
    async fn new_readdir_handle(&self, dir_ino: InodeNo, page_size: usize) -> Result<u64, InodeError> {
        trace!(dir=?dir_ino, "readdir");

        let dir = self.inner.get(dir_ino)?;
        logging::record_name(dir.name());
        if dir.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(dir.err()));
        }
        let parent_ino = dir.parent();

        let dir_key = self.full_key_for_inode(dir.ino());
        assert_eq!(dir_key.kind(), InodeKind::Directory);
        let handle = ReaddirHandle::new(self.inner.clone(), dir_ino, parent_ino, dir_key.into(), page_size)?;
        let handle_id = self.inner.next_dir_handle_id.fetch_add(1, Ordering::SeqCst);
        let dirhandle = DirHandle::new(handle.parent(), handle_id);
        self.inner
            .read_dir_handles
            .write()
            .unwrap()
            .insert(handle_id, Arc::new(handle));

        self.inner
            .dir_handles
            .write()
            .unwrap()
            .insert(handle_id, Arc::new(dirhandle));
        trace!("Added handle with id: {}", handle_id);
        Ok(handle_id)
    }

    fn remember_from_handle(&self, readdir_handle: u64, entry: &LookedUp) {
        self.inner.remember(&entry.inode);
    }

    async fn read_next_from_handle(&self, readdir_handle: u64) -> Result<Option<LookedUp>, InodeError> {
        let handle = self
            .inner
            .read_dir_handles
            .read()
            .unwrap()
            .get(&readdir_handle)
            .unwrap()
            .clone();

        handle.next(self.inner.clone(), &self.inner.client).await
    }

    fn get_handle_parent(&self, readdir_handle: u64) -> u64 {
        self.inner
            .read_dir_handles
            .read()
            .unwrap()
            .get(&readdir_handle)
            .unwrap()
            .parent()
    }

    fn readd_to_handle(&self, readdir_handle: u64, entry: LookedUp) -> () {
        self.inner
            .read_dir_handles
            .read()
            .unwrap()
            .get(&readdir_handle)
            .unwrap()
            .readd(entry);
    }

    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        is_readdirplus: bool,
        mut reply: MountspaceDirectoryReplier<'a>,
    ) -> Result<MountspaceDirectoryReplier<'a>, InodeError> {
        let dir_handle = {
            let dir_handles = self.inner.dir_handles.read().unwrap();
            dir_handles.get(&fh).cloned().ok_or(InodeError::NoSuchDirHandle)
        }?;

        // special case where we need to rewind and restart the streaming but only when it is not the first time we see offset 0
        if offset == 0 && dir_handle.offset() != 0 {
            let new_handle = self.new_readdir_handle(parent, 1000).await?;
            dir_handle.set_handleNo(new_handle);
            dir_handle.rewind_offset();
            // drop any cached entries, as new response may be unordered and cache would be stale
            *dir_handle.last_response.lock().await = None;
        }

        let readdir_handle: u64 = dir_handle.handleNo();

        // If offset is 0 we've already restarted the request and do not use cache, otherwise we're using the same request
        // and it is safe to repeat the response. We do not repeat the response if negative offset was provided.
        if offset != dir_handle.offset() && offset > 0 {
            // POSIX allows seeking an open directory. That's a pain for us since we are streaming
            // the directory entries and don't want to keep them all in memory. But one common case
            // we've seen (https://github.com/awslabs/mountpoint-s3/issues/477) is applications that
            // request offset 0 twice in a row. So we remember the last response and, if repeated,
            // we return it again. Last response may also be used partially, if an interrupt occured
            // (https://github.com/awslabs/mountpoint-s3/issues/955), which caused entries from it to
            // be only partially fetched by kernel.

            let last_response = dir_handle.last_response.lock().await;
            if let Some((last_offset, entries)) = last_response.as_ref() {
                let offset = offset as usize;
                let last_offset = *last_offset as usize;
                if (last_offset..last_offset + entries.len()).contains(&offset) {
                    trace!(offset, "repeating readdir response");
                    for entry in entries[offset - last_offset..].iter() {
                        if reply.add(entry.clone()) {
                            break;
                        }
                        // We are returning this result a second time, so the contract is that we
                        // must remember it again, except that readdirplus specifies that . and ..
                        // are never incremented.
                        if is_readdirplus && entry.name != "." && entry.name != ".." {
                            self.remember_from_handle(readdir_handle, &entry.lookup);
                            //readdir_handle.remember(&entry.lookup);
                        }
                    }
                    return Ok(reply);
                }
            }
            /* err!(
                libc::EINVAL,
                "out-of-order readdir, expected={}, actual={}",
                dir_handle.offset(),
                offset
            ) */
            return Err(InodeError::OutOfOrderReadDir);
            //unreachable!("This should not be reached");
        }

        /// Wrap a replier to duplicate the entries and store them in `dir_handle.last_response` so
        /// we can re-use them if the directory handle rewinds
        struct Reply<'a> {
            reply: MountspaceDirectoryReplier<'a>,
            entries: Vec<DirectoryEntry>,
        }

        impl<'a> Reply<'a> {
            async fn finish(self, offset: i64, dir_handle: &DirHandle) -> MountspaceDirectoryReplier<'a> {
                *dir_handle.last_response.lock().await = Some((offset, self.entries));
                self.reply
            }
        }

        impl DirectoryReplier for Reply<'_> {
            fn add(&mut self, entry: DirectoryEntry) -> bool {
                let result = self.reply.add(entry.clone());
                if !result {
                    self.entries.push(entry);
                }
                result
            }
        }

        let mut reply = Reply { reply, entries: vec![] };

        if dir_handle.offset() < 1 {
            let lookup = self.getattr(parent, false).await?;
            let attr = self.make_attr(&lookup);
            let entry = DirectoryEntry {
                ino: parent,
                offset: dir_handle.offset() + 1,
                name: ".".into(),
                attr,
                generation: 0,
                ttl: lookup.validity(),
                lookup,
            };
            if reply.add(entry) {
                return Ok(reply.finish(offset, &dir_handle).await);
            }
            dir_handle.next_offset();
        }
        if dir_handle.offset() < 2 {
            let handle_parent = self.get_handle_parent(readdir_handle);
            let lookup = self.getattr(handle_parent, false).await?;
            let attr = self.make_attr(&lookup);
            let entry = DirectoryEntry {
                ino: handle_parent,
                offset: dir_handle.offset() + 1,
                name: "..".into(),
                attr,
                generation: 0,
                ttl: lookup.validity(),
                lookup,
            };
            if reply.add(entry) {
                return Ok(reply.finish(offset, &dir_handle).await);
            }
            dir_handle.next_offset();
        }

        loop {
            let next = match self.read_next_from_handle(readdir_handle).await? {
                None => {
                    return Ok(reply.finish(offset, &dir_handle).await);
                }
                Some(next) => next,
            };
            trace!(next_inode = ?next.inode, "new inode yielded by readdir handle");

            let attr = self.make_attr(&next);
            let entry = DirectoryEntry {
                ino: attr.ino,
                offset: dir_handle.offset() + 1,
                name: next.inode.name().into(),
                attr,
                generation: 0,
                ttl: next.validity(),
                lookup: next.clone(),
            };

            if reply.add(entry) {
                self.readd_to_handle(readdir_handle, next);
                //readdir_handle.readd(next);
                return Ok(reply.finish(offset, &dir_handle).await);
            }
            if is_readdirplus {
                self.remember_from_handle(readdir_handle, &next);
                //readdir_handle.remember(&next);
            }
            dir_handle.next_offset();
        }
    }

    /// Create a new regular file or directory inode ready to be opened in write-only mode
    async fn create(&self, dir: InodeNo, name: &OsStr, kind: InodeKind) -> Result<LookedUp, InodeError> {
        trace!(parent=?dir, ?name, "create");

        let existing = self
            .inner
            .lookup_by_name(dir, name, self.inner.config.cache_config.serve_lookup_from_cache)
            .await;
        match existing {
            Ok(lookup) => return Err(InodeError::FileAlreadyExists(lookup.inode.err())),
            Err(InodeError::FileDoesNotExist(_, _)) => (),
            Err(e) => return Err(e),
        }

        // Should be impossible to fail since [lookup] does this check, but let's be sure
        let name: ValidName = name.try_into()?;

        // Put inode creation in a block so we don't hold the lock on the parent state longer than needed.
        let lookup = {
            let parent_inode = self.inner.get(dir)?;
            let mut parent_state = parent_inode.get_mut_inode_state()?;

            // Check again for the child now that the parent is locked, since we might have lost to a
            // racing lookup. (It would be nice to lock the parent and *then* lookup, but we'd have to
            // hold that lock across the remote API calls).
            let InodeKindData::Directory { children, .. } = &mut parent_state.kind_data else {
                return Err(InodeError::NotADirectory(parent_inode.err()));
            };
            if let Some(inode) = children.get(name.as_ref()) {
                return Err(InodeError::FileAlreadyExists(inode.err()));
            }

            let stat = match kind {
                // Objects don't have an ETag until they are uploaded to S3
                InodeKind::File => InodeStat::for_file(
                    0,
                    OffsetDateTime::now_utc(),
                    None,
                    None,
                    None,
                    self.inner.config.cache_config.file_ttl,
                ),
                InodeKind::Directory => {
                    InodeStat::for_directory(self.inner.mount_time, self.inner.config.cache_config.dir_ttl)
                }
            };

            let state = InodeState::new(&stat, kind, WriteStatus::LocalUnopened);
            let inode = self
                .inner
                .create_inode_locked(&parent_inode, &mut parent_state, name, kind, state, true)?;
            LookedUp { inode, stat }
        };

        self.inner.remember(&lookup.inode);
        Ok(lookup)
    }

    /// Remove local-only empty directory, i.e., the ones created by mkdir.
    /// It does not affect empty directories represented remotely with directory markers.
    async fn rmdir(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), InodeError> {
        let LookedUp { inode, .. } = self
            .inner
            .lookup_by_name(parent_ino, name, self.inner.config.cache_config.serve_lookup_from_cache)
            .await?;

        if inode.kind() == InodeKind::File {
            return Err(InodeError::NotADirectory(inode.err()));
        }

        let parent = self.inner.get(parent_ino)?;
        let mut parent_state = parent.get_mut_inode_state()?;
        let mut inode_state = inode.get_mut_inode_state()?;

        match &inode_state.write_status {
            WriteStatus::LocalOpen => unreachable!("A directory cannot be in Local open state"),
            WriteStatus::Remote => {
                return Err(InodeError::CannotRemoveRemoteDirectory(inode.err()));
            }
            WriteStatus::LocalUnopened => match &mut inode_state.kind_data {
                InodeKindData::File {} => unreachable!("Already checked that inode is a directory"),
                InodeKindData::Directory {
                    writing_children,
                    deleted,
                    ..
                } => {
                    if !writing_children.is_empty() {
                        return Err(InodeError::DirectoryNotEmpty(inode.err()));
                    }
                    *deleted = true;
                }
            },
        }

        match &mut parent_state.kind_data {
            InodeKindData::File {} => {
                debug_assert!(false, "inodes never change kind");
                return Err(InodeError::NotADirectory(parent.err()));
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
    async fn unlink(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), InodeError> {
        let parent = self.inner.get(parent_ino)?;
        let LookedUp { inode, .. } = self
            .inner
            .lookup_by_name(parent_ino, name, self.inner.config.cache_config.serve_lookup_from_cache)
            .await?;

        if inode.kind() == InodeKind::Directory {
            return Err(InodeError::IsDirectory(inode.err()));
        }

        let write_status = {
            let inode_state = inode.get_inode_state()?;
            inode_state.write_status
        };

        match write_status {
            WriteStatus::LocalUnopened | WriteStatus::LocalOpen => {
                // In the future, we may permit `unlink` and cancel any in-flight uploads.
                warn!(
                    parent = parent_ino,
                    ?name,
                    "unlink on local file not allowed until write is complete",
                );
                return Err(InodeError::UnlinkNotPermittedWhileWriting(inode.err()));
            }
            WriteStatus::Remote => {
                let bucket = self.inner.bucket.as_str();
                let s3_key = self.full_key_for_inode(inode.ino());
                debug!(parent=?parent_ino, ?name, "unlink on remote file will delete key {}", s3_key);
                let delete_obj_result = self.inner.client.delete_object(bucket, &s3_key).await;

                match delete_obj_result {
                    Ok(_res) => (),
                    Err(e) => {
                        error!(
                            inode=%inode.err(),
                            error=?e,
                            "DeleteObject failed for unlink",
                        );
                        Err(InodeError::client_error(e, "DeleteObject failed", bucket, &s3_key))?;
                    }
                };
            }
        }

        let mut parent_state = parent.get_mut_inode_state()?;
        match &mut parent_state.kind_data {
            InodeKindData::File { .. } => {
                debug_assert!(false, "inodes never change kind");
                return Err(InodeError::NotADirectory(parent.err()));
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

        Ok(())
    }

    fn full_key_for_inode(&self, inode: InodeNo) -> ValidKey {
        self.inner.full_key_for_inode(&self.inner.get(inode).unwrap())
    }
}

impl<OC: ObjectClient + Send + Sync> SuperblockInner<OC> {
    /// Retrieve the inode for the given number if it exists.
    ///
    /// The expiry of its stat field is not checked.
    /// This may return error on no entry existing or if the Inode is corrupted.
    pub fn get(&self, ino: InodeNo) -> Result<Inode, InodeError> {
        let inode = self
            .inodes
            .read()
            .unwrap()
            .get(&ino)
            .cloned()
            .ok_or(InodeError::InodeDoesNotExist(ino))?;
        inode.verify_inode(ino, &self.prefix)?;
        Ok(inode)
    }

    fn full_key_for_inode(&self, inode: &Inode) -> ValidKey {
        inode.valid_key().full_key(&self.prefix)
    }

    /// Increase the lookup count of the given inode and
    /// ensure it is registered with this superblock.
    pub fn remember(&self, inode: &Inode) -> u64 {
        let lookup_count = inode.inc_lookup_count();
        if lookup_count == 1 {
            let previous = self.inodes.write().unwrap().insert(inode.ino(), inode.clone());
            assert!(previous.is_none(), "inode numbers are never reused");
        }
        lookup_count
    }

    /// Lookup an inode in the parent directory with the given name.
    ///
    /// Updates the parent inode to be in sync with the client, but does
    /// not add new inodes to the superblock. The caller is responsible
    /// for calling [`remember()`] if that is required.
    pub async fn lookup_by_name(
        &self,
        parent_ino: InodeNo,
        name: &OsStr,
        allow_cache: bool,
    ) -> Result<LookedUp, InodeError> {
        let name: ValidName = name.try_into()?;

        let lookup = if allow_cache {
            self.cache_lookup(parent_ino, &name)
        } else {
            None
        };

        let lookup = match lookup {
            Some(lookup) => lookup?,
            None => {
                #[cfg(feature = "manifest")]
                let remote = if let Some(manifest) = &self.config.manifest {
                    self.manifest_lookup(manifest, parent_ino, &name)?
                } else {
                    self.remote_lookup(parent_ino, name).await?
                };
                #[cfg(not(feature = "manifest"))]
                let remote = self.remote_lookup(parent_ino, name).await?;
                self.update_from_remote(parent_ino, name, remote)?
            }
        };

        lookup.inode.verify_child(parent_ino, name.as_ref(), &self.prefix)?;
        Ok(lookup)
    }

    /// Lookup an [Inode] against known directory entries in the parent,
    /// verifying any returned entry has not expired.
    /// If no record for the given `name` is found, returns [None].
    /// If an entry is found in the negative cache, returns [Some(Err(InodeError::FileDoesNotExist))].
    fn cache_lookup(&self, parent_ino: InodeNo, name: &str) -> Option<Result<LookedUp, InodeError>> {
        fn do_cache_lookup<O: ObjectClient + Send + Sync>(
            superblock: &SuperblockInner<O>,
            parent: Inode,
            name: &str,
        ) -> Option<Result<LookedUp, InodeError>> {
            match &parent.get_inode_state().ok()?.kind_data {
                InodeKindData::File { .. } => unreachable!("parent should be a directory!"),
                InodeKindData::Directory { children, .. } => {
                    if let Some(inode) = children.get(name) {
                        let inode_stat = &inode.get_inode_state().ok()?.stat;
                        if inode_stat.is_valid() {
                            let lookup = LookedUp {
                                inode: inode.clone(),
                                stat: inode_stat.clone(),
                            };
                            return Some(Ok(lookup));
                        }
                    }
                }
            };

            if superblock.negative_cache.contains(parent.ino(), name) {
                return Some(Err(InodeError::FileDoesNotExist(name.to_owned(), parent.err())));
            }

            None
        }

        let lookup = self
            .get(parent_ino)
            .ok()
            .and_then(|parent| do_cache_lookup(self, parent, name));

        match &lookup {
            Some(lookup) => trace!("lookup returned from cache: {:?}", lookup),
            None => trace!("no lookup available from cache"),
        }
        metrics::counter!("metadata_cache.cache_hit").increment(lookup.is_some().into());

        lookup
    }

    /// Lookup in the [Manifest] and convert the entry to [RemoteLookup]
    #[cfg(feature = "manifest")]
    fn manifest_lookup(
        &self,
        manifest: &Manifest,
        parent_ino: InodeNo,
        name: &str,
    ) -> Result<Option<RemoteLookup>, InodeError> {
        let parent = self.get(parent_ino)?;
        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent.err()));
        }

        let parent_full_path = self.full_key_for_inode(&parent);
        let Some(manifest_entry) = manifest.manifest_lookup(parent_full_path.to_string(), name)? else {
            return Ok(None);
        };

        let remote_lookup = match manifest_entry {
            ManifestEntry::File { etag, size, .. } => RemoteLookup {
                kind: InodeKind::File,
                stat: InodeStat::for_file(
                    size,
                    self.mount_time,
                    Some(etag.as_str().into()),
                    // Intentionally leaving `storage_class` and `restore_status` empty,
                    // which may result in EIO errors on read for GLACIER | DEEP_ARCHIVE objects
                    None,
                    None,
                    self.config.cache_config.file_ttl,
                ),
            },
            ManifestEntry::Directory { .. } => RemoteLookup {
                kind: InodeKind::Directory,
                stat: InodeStat::for_directory(self.mount_time, self.config.cache_config.dir_ttl),
            },
        };
        Ok(Some(remote_lookup))
    }

    /// Lookup an inode in the parent directory with the given name
    /// on the remote client.
    async fn remote_lookup(
        &self,
        parent_ino: InodeNo,
        name: ValidName<'_>,
    ) -> Result<Option<RemoteLookup>, InodeError> {
        let parent = self.get(parent_ino)?;
        let full_path: String = self
            .full_key_for_inode(&parent)
            .new_child(name, InodeKind::Directory)
            .map_err(|_| InodeError::NotADirectory(parent.err()))?
            .into();

        let object_key = &full_path[..(full_path.len() - 1)];
        let directory_prefix = &full_path[..];

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
        let head_object_params = HeadObjectParams::new();
        let mut file_lookup = self
            .client
            .head_object(&self.bucket, object_key, &head_object_params)
            .fuse();
        let mut dir_lookup = self
            .client
            .list_objects(&self.bucket, None, "/", 1, directory_prefix)
            .fuse();

        let mut file_state = None;

        for _ in 0..2 {
            select_biased! {
                result = file_lookup => {
                    match result {
                        Ok(HeadObjectResult { size, last_modified, restore_status, etag, storage_class, .. }) => {
                            let stat = InodeStat::for_file(size as usize, last_modified, Some(etag.into_inner().into_boxed_str()), storage_class.as_deref(), restore_status, self.config.cache_config.file_ttl);
                            file_state = Some(stat);
                        }
                        // If the object is not found, might be a directory, so keep going
                        Err(ObjectClientError::ServiceError(HeadObjectError::NotFound)) => {},
                        Err(e) => return Err(InodeError::client_error(e, "HeadObject failed", &self.bucket, object_key)),
                    }
                }

                result = dir_lookup => {
                    let result = result.map_err(|e| InodeError::client_error(e, "ListObjectsV2 failed", &self.bucket, object_key))?;

                    let found_directory = if result
                        .common_prefixes
                        .first()
                        .map(|prefix| prefix.starts_with(directory_prefix))
                        .unwrap_or(false)
                    {
                        true
                    } else if result
                        .objects
                        .first()
                        .map(|object| object.key.starts_with(directory_prefix))
                        .unwrap_or(false)
                    {
                        if result.objects[0].key == directory_prefix {
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
                                    directory_prefix
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
                        let stat = InodeStat::for_directory(self.mount_time, self.config.cache_config.dir_ttl);
                        return Ok(Some(RemoteLookup { kind: InodeKind::Directory, stat }));
                    }
                }
            }
        }

        // If we reach here, the ListObjects didn't find a shadowing directory, so we know we either
        // have a valid file, or both requests failed to find the object so the file must not exist remotely
        if let Some(mut stat) = file_state {
            trace!(parent = ?parent_ino, ?name, etag =? stat.etag, "found a regular file in S3");
            // Update the validity of the stat in case the racing ListObjects took a long time
            stat.update_validity(self.config.cache_config.file_ttl);
            Ok(Some(RemoteLookup {
                kind: InodeKind::File,
                stat,
            }))
        } else {
            trace!(parent = ?parent_ino, ?name, "not found");
            Ok(None)
        }
    }

    /// Update the inode with the given name in a parent directory with the remote data.
    /// It may update or delete an existing inode, or insert a new one.
    pub fn update_from_remote(
        &self,
        parent_ino: InodeNo,
        name: ValidName,
        remote: Option<RemoteLookup>,
    ) -> Result<LookedUp, InodeError> {
        let parent = self.get(parent_ino)?;

        // Should be impossible since all callers check this already, but let's be safe
        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent.err()));
        }

        if self.config.cache_config.use_negative_cache {
            match &remote {
                // Remove negative cache entry.
                Some(_) => self.negative_cache.remove(parent_ino, &name),
                // Insert or update TTL of negative cache entry.
                None => self.negative_cache.insert(parent_ino, &name),
            }
        }

        // Fast path: try with only a read lock on the directory first.
        if let Some(looked_up) = Self::try_update_fast_path(&parent, &name, &remote)? {
            return Ok(looked_up);
        }

        self.update_slow_path(parent, name, remote)
    }

    /// Try to update the inode for the given name in the parent directory with only a read lock on
    /// the parent.
    fn try_update_fast_path(
        parent: &Inode,
        name: &str,
        remote: &Option<RemoteLookup>,
    ) -> Result<Option<LookedUp>, InodeError> {
        let parent_state = parent.get_inode_state()?;
        let inode = match &parent_state.kind_data {
            InodeKindData::File { .. } => unreachable!("we know parent is a directory"),
            InodeKindData::Directory { children, .. } => children.get(name),
        };
        match (remote, inode) {
            (None, None) => Err(InodeError::FileDoesNotExist(name.to_owned(), parent.err())),
            (Some(remote), Some(existing_inode)) => {
                let mut existing_state = existing_inode.get_mut_inode_state()?;
                let existing_is_remote = existing_state.write_status == WriteStatus::Remote;
                if remote.kind == existing_inode.kind()
                    && existing_is_remote
                    && existing_state.stat.etag == remote.stat.etag
                {
                    trace!(parent=?existing_inode.parent(), name=?existing_inode.name(), ino=?existing_inode.ino(), "updating inode in place");
                    existing_state.stat = remote.stat.clone();
                    Ok(Some(LookedUp {
                        inode: existing_inode.clone(),
                        stat: remote.stat.clone(),
                    }))
                } else {
                    Ok(None)
                }
            }
            _ => Ok(None),
        }
    }

    /// Update or create the inode for the given name in the parent directory with a write lock on
    /// the parent. This method still needs to handle the cases handled by [try_update_fast_path]
    /// because an intervening writer might have modified the inode we're updating.
    fn update_slow_path(
        &self,
        parent: Inode,
        name: ValidName,
        remote: Option<RemoteLookup>,
    ) -> Result<LookedUp, InodeError> {
        let mut parent_state = parent.get_mut_inode_state()?;
        let inode = match &parent_state.kind_data {
            InodeKindData::File { .. } => unreachable!("we know parent is a directory"),
            InodeKindData::Directory { children, .. } => children.get(name.as_ref()).cloned(),
        };
        match (remote, inode) {
            (None, None) => Err(InodeError::FileDoesNotExist(name.to_string(), parent.err())),
            (None, Some(existing_inode)) => {
                let InodeKindData::Directory {
                    children,
                    writing_children,
                    ..
                } = &mut parent_state.kind_data
                else {
                    unreachable!("we know parent is a directory");
                };
                if writing_children.contains(&existing_inode.ino()) {
                    let mut sync = existing_inode.get_mut_inode_state()?;

                    let validity = match existing_inode.kind() {
                        InodeKind::File => self.config.cache_config.file_ttl,
                        InodeKind::Directory => self.config.cache_config.dir_ttl,
                    };
                    sync.stat.update_validity(validity);
                    let stat = sync.stat.clone();
                    drop(sync);

                    Ok(LookedUp {
                        inode: existing_inode,
                        stat,
                    })
                } else {
                    // This existing inode is local-only (because `remote` is None), but is not
                    // being written. It must have previously existed but been removed on the remote
                    // side.
                    children.remove(name.as_ref());
                    Err(InodeError::FileDoesNotExist(name.to_string(), parent.err()))
                }
            }
            (Some(remote), None) => {
                let state = InodeState::new(&remote.stat, remote.kind, WriteStatus::Remote);
                self.create_inode_locked(&parent, &mut parent_state, name, remote.kind, state, false)
                    .map(|inode| LookedUp {
                        inode,
                        stat: remote.stat,
                    })
            }
            (Some(remote), Some(existing_inode)) => {
                // We need to reconcile the existing state with the state we just got from the
                // remote. Our goal here is for the behavior to be as unsurprising as possible while
                // being consistent with our stated semantics about implicit directories and how
                // directories shadow files.
                let mut existing_state = existing_inode.get_mut_inode_state()?;
                let existing_is_remote = existing_state.write_status == WriteStatus::Remote;

                // Remote files are always shadowed by existing local files/directories, so do
                // nothing and return the existing inode.
                if remote.kind == InodeKind::File && !existing_is_remote {
                    return Ok(LookedUp {
                        inode: existing_inode.clone(),
                        stat: existing_state.stat.clone(),
                    });
                }

                // Try to update in place if we can. The fast path does this too, but here we can
                // also handle the case of a local directory becoming remote, which requires
                // updating the parent.
                let same_kind = remote.kind == existing_inode.kind();
                let same_etag = existing_state.stat.etag == remote.stat.etag;
                if same_kind && same_etag && (existing_is_remote || remote.kind == InodeKind::Directory) {
                    trace!(parent=?existing_inode.parent(), name=?existing_inode.name(), ino=?existing_inode.ino(), "updating inode in place (slow path)");
                    existing_state.stat = remote.stat.clone();
                    if remote.kind == InodeKind::Directory && !existing_is_remote {
                        trace!(parent=?existing_inode.parent(), name=?existing_inode.name(), ino=?existing_inode.ino(), "local directory has become remote");
                        existing_state.write_status = WriteStatus::Remote;
                        let InodeKindData::Directory { writing_children, .. } = &mut parent_state.kind_data else {
                            unreachable!("we know parent is a directory");
                        };
                        writing_children.remove(&existing_inode.ino());
                    }
                    return Ok(LookedUp {
                        inode: existing_inode.clone(),
                        stat: remote.stat,
                    });
                }

                trace!(
                    ino=?existing_inode.ino(),
                    same_kind,
                    same_etag,
                    existing_is_remote,
                    remote_is_dir = remote.kind == InodeKind::Directory,
                    "inode could not be updated in place",
                );

                // Otherwise, create a fresh inode, possibly merging the existing contents. Note
                // that [create_inode_locked] takes care of unlinking the existing inode from its
                // parent if necessary.
                debug!(
                    parent=?existing_inode.parent(),
                    name=?existing_inode.name(),
                    ino=?existing_inode.ino(),
                    "inode needs to be recreated",
                );
                let state = InodeState::new(&remote.stat, remote.kind, WriteStatus::Remote);
                let new_inode =
                    self.create_inode_locked(&parent, &mut parent_state, name, remote.kind, state, false)?;
                Ok(LookedUp {
                    inode: new_inode,
                    stat: remote.stat,
                })
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
        name: ValidName,
        kind: InodeKind,
        state: InodeState,
        is_new_file: bool,
    ) -> Result<Inode, InodeError> {
        let key = parent
            .valid_key()
            .new_child(name, kind)
            .map_err(|_| InodeError::NotADirectory(parent.err()))?;
        let next_ino = self.next_ino.fetch_add(1, Ordering::SeqCst);
        let inode = Inode::new(next_ino, parent.ino(), key, &self.prefix, state);
        trace!(parent=?inode.parent(), name=?inode.name(), kind=?inode.kind(), new_ino=?inode.ino(), key=?inode.key(), "created new inode");

        match &mut parent_locked.kind_data {
            InodeKindData::File {} => {
                debug_assert!(false, "inodes never change kind");
                return Err(InodeError::NotADirectory(parent.err()));
            }
            InodeKindData::Directory {
                children,
                writing_children,
                ..
            } => {
                let existing_inode = children.insert(name.as_ref().into(), inode.clone());
                if is_new_file {
                    writing_children.insert(next_ino);
                }
                if let Some(existing_inode) = existing_inode {
                    writing_children.remove(&existing_inode.ino());
                }
            }
        }

        Ok(inode)
    }
}

/// Data from a remote object.
#[derive(Debug, Clone)]
pub struct RemoteLookup {
    kind: InodeKind,
    stat: InodeStat,
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
        self.stat.expiry.remaining_ttl()
    }
}

/// A wrapper around a `HashMap<InodeNo, Inode>`` that just takes care of metrics when inodes are
/// added or removed.
#[derive(Debug, Default)]
struct InodeMap {
    map: HashMap<InodeNo, Inode>,
}

impl InodeMap {
    fn get(&self, ino: &InodeNo) -> Option<&Inode> {
        self.map.get(ino)
    }

    fn insert(&mut self, ino: InodeNo, inode: Inode) -> Option<Inode> {
        metrics::gauge!("fs.inodes").increment(1.0);
        metrics::gauge!("fs.inode_kinds", "kind" => inode.kind().as_str()).increment(1.0);
        self.map.insert(ino, inode).inspect(Self::remove_metrics)
    }

    fn remove(&mut self, ino: &InodeNo) -> Option<Inode> {
        self.map.remove(ino).inspect(Self::remove_metrics)
    }

    fn remove_metrics(inode: &Inode) {
        metrics::gauge!("fs.inodes").decrement(1.0);
        metrics::gauge!("fs.inode_kinds", "kind" => inode.kind().as_str()).decrement(1.0);
    }
}

#[derive(Debug, Error)]
pub enum InodeError {
    /// Avoid constructing this directly, but use `InodeError::client_error` instead
    #[error("error from ObjectClient")]
    ClientError {
        source: anyhow::Error,
        metadata: Box<ErrorMetadata>,
    },
    #[error("file {0:?} does not exist in parent inode {1}")]
    FileDoesNotExist(String, InodeErrorInfo),
    #[error("inode {0} does not exist")]
    InodeDoesNotExist(InodeNo),
    #[error("invalid file name {0:?}")]
    InvalidFileName(OsString),
    #[error("inode {0} is not a directory")]
    NotADirectory(InodeErrorInfo),
    #[error("inode {0} is a directory")]
    IsDirectory(InodeErrorInfo),
    #[error("file already exists at inode {0}")]
    FileAlreadyExists(InodeErrorInfo),
    #[error("inode {0} is not writable")]
    InodeNotWritable(InodeErrorInfo),
    #[error("Invalid state of inode {0} to be written. Aborting the write.")]
    InodeInvalidWriteStatus(InodeErrorInfo),
    #[error("inode {0} is already being written")]
    InodeAlreadyWriting(InodeErrorInfo),
    #[error("inode {0} is not readable while being written")]
    InodeNotReadableWhileWriting(InodeErrorInfo),
    #[error("inode {0} is not writable while being read")]
    InodeNotWritableWhileReading(InodeErrorInfo),
    #[error("remote directory cannot be removed at inode {0}")]
    CannotRemoveRemoteDirectory(InodeErrorInfo),
    #[error("non-empty directory cannot be removed at inode {0}")]
    DirectoryNotEmpty(InodeErrorInfo),
    #[error("inode {0} cannot be unlinked while being written")]
    UnlinkNotPermittedWhileWriting(InodeErrorInfo),
    #[error("corrupted metadata for inode {0}")]
    CorruptedMetadata(InodeErrorInfo),
    #[error("inode {0} is a remote inode and its attributes cannot be modified")]
    SetAttrNotPermittedOnRemoteInode(InodeErrorInfo),
    #[error("inode {old_inode} for remote key {remote_key:?} is stale, replaced by inode {new_inode}")]
    StaleInode {
        remote_key: String,
        old_inode: InodeErrorInfo,
        new_inode: InodeErrorInfo,
    },
    #[cfg(feature = "manifest")]
    #[error("manifest error")]
    ManifestError(#[from] ManifestError),
    #[error("OOO ReadDir")]
    OutOfOrderReadDir,
    #[error("DearHandle not found")]
    NoSuchDirHandle,
}

impl InodeError {
    /// Constructs InodeError::ClientError enriching metadata with error_code, bucket and key.
    ///
    /// Detailed information about an error is gathered in different frames of the call stack.
    /// To make it manageable the idea is to enrich metadata with error_code, bucket and key
    /// on the construction of mountpoint crate's errors, i.e. InodeError, PrefetchReadError
    /// and UploadPutError.
    fn client_error<E>(err: E, context: &'static str, bucket: &str, key: &str) -> Self
    where
        E: ProvideErrorMetadata + std::error::Error + Send + Sync + 'static,
    {
        let metadata = ErrorMetadata {
            client_error_meta: err.meta(),
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(bucket.to_string()),
            s3_object_key: Some(key.to_string()),
        };
        let metadata = Box::new(metadata);
        InodeError::ClientError {
            source: anyhow!(err).context(context),
            metadata,
        }
    }
}

impl InodeError {
    pub fn meta(&self) -> ErrorMetadata {
        match self {
            Self::ClientError { source: _, metadata } => (**metadata).clone(),
            _ => Default::default(),
        }
    }
}

#[cfg(test)]
mod tests {
    use std::str::FromStr;

    use mountpoint_s3_client::{
        mock_client::{MockClient, MockClientConfig, MockObject},
        types::ETag,
    };
    use test_case::test_case;
    use time::{Duration, OffsetDateTime};

    use crate::fs::{TimeToLive, ToErrno, FUSE_ROOT_INODE};

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
            ..Default::default()
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
        let superblock = Superblock::new(client.clone(), bucket, &prefix, Default::default());

        // Try it twice to test the inode reuse path too
        for _ in 0..2 {
            let dir0 = superblock
                .lookup(FUSE_ROOT_INODE, &OsString::from("dir0"))
                .await
                .expect("should exist");
            assert_inode_stat!(dir0, InodeKind::Directory, ts, 0);
            assert_eq!(
                superblock.full_key_for_inode(dir0.inode.ino()).to_string(),
                format!("{prefix}dir0/")
            );

            let dir1 = superblock
                .lookup(FUSE_ROOT_INODE, &OsString::from("dir1"))
                .await
                .expect("should exist");
            assert_inode_stat!(dir1, InodeKind::Directory, ts, 0);
            assert_eq!(
                superblock.full_key_for_inode(dir1.inode.ino()).to_string(),
                format!("{prefix}dir1/")
            );

            let sdir0 = superblock
                .lookup(dir0.inode.ino(), &OsString::from("sdir0"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir0, InodeKind::Directory, ts, 0);
            assert_eq!(
                superblock.full_key_for_inode(sdir0.inode.ino()).to_string(),
                format!("{prefix}dir0/sdir0/")
            );

            let sdir1 = superblock
                .lookup(dir0.inode.ino(), &OsString::from("sdir1"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir1, InodeKind::Directory, ts, 0);
            assert_eq!(
                superblock.full_key_for_inode(sdir1.inode.ino()).to_string(),
                format!("{prefix}dir0/sdir1/")
            );

            let sdir2 = superblock
                .lookup(dir1.inode.ino(), &OsString::from("sdir2"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir2, InodeKind::Directory, ts, 0);
            assert_eq!(
                superblock.full_key_for_inode(sdir2.inode.ino()).to_string(),
                format!("{prefix}dir1/sdir2/")
            );

            let sdir3 = superblock
                .lookup(dir1.inode.ino(), &OsString::from("sdir3"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir3, InodeKind::Directory, ts, 0);
            assert_eq!(
                superblock.full_key_for_inode(sdir3.inode.ino()).to_string(),
                format!("{prefix}dir1/sdir3/")
            );

            for (dir, sdir, ino, n) in &[
                (0, 0, sdir0.inode.ino(), 3),
                (0, 1, sdir1.inode.ino(), 2),
                (1, 2, sdir2.inode.ino(), 3),
                (1, 3, sdir3.inode.ino(), 2),
            ] {
                for i in 0..*n {
                    let file = superblock
                        .lookup(*ino, &OsString::from(format!("file{i}.txt")))
                        .await
                        .expect("inode should exist");
                    // Grab last modified time according to mock S3
                    let full_key = superblock.full_key_for_inode(file.inode.ino());
                    let modified_time = client
                        .head_object(bucket, &full_key, &HeadObjectParams::new())
                        .await
                        .expect("object should exist")
                        .last_modified;
                    assert_inode_stat!(file, InodeKind::File, modified_time, object_size);
                    assert_eq!(full_key.to_string(), format!("{prefix}dir{dir}/sdir{sdir}/file{i}.txt"));
                }
            }
        }
    }

    #[test_case(true; "cached")]
    #[test_case(false; "not cached")]
    #[tokio::test]
    async fn test_lookup_with_caching(cached: bool) {
        let bucket = "test_bucket";
        let prefix = "prefix/";
        let client_config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));

        let keys = &[
            format!("{prefix}file0.txt"),
            format!("{prefix}sdir0/file0.txt"),
            format!("{prefix}sdir0/file1.txt"),
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
        let ttl = if cached {
            std::time::Duration::from_secs(60 * 60 * 24 * 7) // 7 days should be enough
        } else {
            std::time::Duration::ZERO
        };
        let superblock = Superblock::new(
            client.clone(),
            bucket,
            &prefix,
            SuperblockConfig {
                cache_config: CacheConfig::new(TimeToLive::Duration(ttl)),
                s3_personality: S3Personality::Standard,
                ..Default::default()
            },
        );

        let entries = ["file0.txt", "sdir0"];
        for entry in entries {
            _ = superblock
                .lookup(FUSE_ROOT_INODE, entry.as_ref())
                .await
                .expect("should exist");
        }

        for key in keys {
            client.remove_object(key);
        }

        for entry in entries {
            let lookup = superblock.lookup(FUSE_ROOT_INODE, entry.as_ref()).await;
            if cached {
                lookup.expect("inode should still be served from cache");
            } else {
                lookup.expect_err("entry should have expired, and not be found in S3");
            }
        }
    }

    #[test_case(true; "cached")]
    #[test_case(false; "not cached")]
    #[tokio::test]
    async fn test_negative_lookup_with_caching(cached: bool) {
        let bucket = "test_bucket";
        let prefix = "prefix/";
        let client_config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));

        let prefix = Prefix::new(prefix).expect("valid prefix");
        let ttl = if cached {
            std::time::Duration::from_secs(60 * 60 * 24 * 7) // 7 days should be enough
        } else {
            std::time::Duration::ZERO
        };
        let superblock = Superblock::new(
            client.clone(),
            bucket,
            &prefix,
            SuperblockConfig {
                cache_config: CacheConfig::new(TimeToLive::Duration(ttl)),
                s3_personality: S3Personality::Standard,
                ..Default::default()
            },
        );

        let entries = ["file0.txt", "sdir0"];
        for entry in entries {
            _ = superblock
                .lookup(FUSE_ROOT_INODE, entry.as_ref())
                .await
                .expect_err("should not exist");
        }

        let keys = &[
            format!("{prefix}file0.txt"),
            format!("{prefix}sdir0/file0.txt"),
            format!("{prefix}sdir0/file1.txt"),
        ];

        let object_size = 30;
        let mut last_modified = OffsetDateTime::UNIX_EPOCH;
        for key in keys {
            let mut obj = MockObject::constant(0xaa, object_size, ETag::for_tests());
            last_modified += Duration::days(1);
            obj.set_last_modified(last_modified);
            client.add_object(key, obj);
        }

        for entry in entries {
            let lookup = superblock.lookup(FUSE_ROOT_INODE, entry.as_ref()).await;
            if cached {
                lookup.expect_err("negative entry should still be valid in the cache, so the new key should not have been looked up in S3");
            } else {
                lookup.expect("new object should have been looked up in S3");
            }
        }
    }

    /*#[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_readdir(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
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
        let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                &["dir0", "dir1"]
            );
            assert_inode_stat!(entries[0], InodeKind::Directory, ts, 0);
            assert_inode_stat!(entries[1], InodeKind::Directory, ts, 0);

            dir_handle.remember(&entries[0]);
            let dir0_inode = entries[0].inode.ino();
            let dir_handle = superblock.readdir(dir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                &["file0.txt", "sdir0", "sdir1"]
            );

            assert_inode_stat!(entries[0], InodeKind::File, last_modified, 30);
            assert_inode_stat!(entries[1], InodeKind::Directory, ts, 0);
            assert_inode_stat!(entries[2], InodeKind::Directory, ts, 0);

            dir_handle.remember(&entries[1]);
            let sdir0_inode = entries[1].inode.ino();
            let dir_handle = superblock.readdir(sdir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
                &["file0.txt", "file1.txt", "file2.txt"]
            );
            for entry in entries {
                assert_inode_stat!(entry, InodeKind::File, last_modified, 30);
            }
        }
    }*/
    /*
        #[test_case(""; "unprefixed")]
        #[test_case("test_prefix/"; "prefixed")]
        #[tokio::test]
        async fn test_readdir_no_remote_keys(prefix: &str) {
            let client_config = MockClientConfig {
                bucket: "test_bucket".to_string(),
                part_size: 1024 * 1024,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));

            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

            let mut expected_list = Vec::new();

            // Create local keys
            for i in 0..5 {
                let filename = format!("file{i}.txt");
                let new_inode = superblock
                    .create(FUSE_ROOT_INODE, filename.as_ref(), InodeKind::File)
                    .await
                    .unwrap();
                superblock
                    .start_writing(new_inode.inode.ino(), &WriteMode::default(), false)
                    .await
                    .expect("should be able to start writing");
                expected_list.push(filename);
            }

            // Try it all twice to test inode reuse
            for _ in 0..2 {
                let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
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
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));

            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

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
                    .create(FUSE_ROOT_INODE, filename.as_ref(), InodeKind::File)
                    .await
                    .unwrap();
                superblock
                    .start_writing(new_inode.inode.ino(), &WriteMode::default(), false)
                    .await
                    .expect("should be able to start writing");
                expected_list.push(filename);
            }

            // Try it all twice to test inode reuse
            for _ in 0..2 {
                let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
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
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

            // Create local directory
            let dirname = "local_dir";
            superblock
                .create(FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
                .await
                .unwrap();

            let lookedup = superblock
                .lookup(FUSE_ROOT_INODE, dirname.as_ref())
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

            let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
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
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

            // Create local directory
            let dirname = "local_dir";
            let LookedUp { inode, .. } = superblock
                .create(FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
                .await
                .expect("Should be able to create directory");

            superblock
                .rmdir(FUSE_ROOT_INODE, dirname.as_ref())
                .await
                .expect("rmdir on empty local directory should succeed");

            superblock
                .lookup(FUSE_ROOT_INODE, dirname.as_ref())
                .await
                .expect_err("should not do lookup on removed directory");

            superblock
                .readdir(inode.ino(), 2)
                .await
                .expect_err("should not do readdir on removed directory");

            superblock
                .getattr(inode.ino(), false)
                .await
                .expect_err("should not do getattr on removed directory");
        }

        #[test_case("", true; "unprefixed ordered")]
        #[test_case("test_prefix/", true; "prefixed ordered")]
        #[test_case("", false; "unprefixed unordered")]
        #[test_case("test_prefix/", false; "prefixed unordered")]
        #[tokio::test]
        async fn test_readdir_unordered(prefix: &str, ordered: bool) {
            let client_config = MockClientConfig {
                bucket: "test_bucket".to_string(),
                part_size: 1024 * 1024,
                unordered_list_seed: (!ordered).then_some(123456),
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));

            let prefix = Prefix::new(prefix).expect("valid prefix");
            let s3_personality = if ordered {
                S3Personality::Standard
            } else {
                S3Personality::ExpressOneZone
            };
            let superblock = Superblock::new(
                client.clone(),
                "test_bucket",
                &prefix,
                SuperblockConfig {
                    s3_personality,
                    ..Default::default()
                },
            );

            // Here are the remote/local cases we want to test:
            // - `dir1`: directory in the remote bucket, no conflicting local node
            // - `dir2`: directory in the remote bucket, conflicting local directory
            // - `dir3`: directory in the remote bucket, conflicting local file
            // - `dir4`: directory in the remote bucket, conflicting remote file
            // - `dm1`: directory marker in the remote bucket, no conflicting local node
            // - `dm2`: directory marker in the remote bucket, conflicting local directory
            // - `dm3`: directory marker in the remote bucket, conflicting local file
            // - `dm4`: directory marker in the remote bucket, conflicting remote file
            // - `file1`: file in the remote bucket, no conflicting local node
            // - `file2`: file in the remote bucket, conflicting local directory
            // - `file3`: file in the remote bucket, conflicting local file
            // Then to check ordering:
            // - `aaa` and `zzz`: local files only

            // Open some local keys
            for filename in ["aaa", "dir3", "dm3", "file3", "zzz"] {
                let new_inode = superblock
                    .create(FUSE_ROOT_INODE, filename.as_ref(), InodeKind::File)
                    .await
                    .unwrap();
                superblock
                    .start_writing(new_inode.inode.ino(), &WriteMode::default(), false)
                    .await
                    .expect("should be able to start writing");
            }

            // Create some local directories
            for dirname in ["dir2", "dm2", "file2"] {
                let _new_inode = superblock
                    .create(FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
                    .await
                    .unwrap();
            }

            // Now create remote state so that we can test shadowing
            let keys = &[
                format!("{prefix}dir1/file.txt"),
                format!("{prefix}dir2/file.txt"),
                format!("{prefix}dir3/file.txt"),
                format!("{prefix}dir4/file.txt"),
                format!("{prefix}dir4"),
                format!("{prefix}dm1/"),
                format!("{prefix}dm2/"),
                format!("{prefix}dm3/"),
                format!("{prefix}dm4/"),
                format!("{prefix}dm4"),
                format!("{prefix}file1"),
                format!("{prefix}file2"),
                format!("{prefix}file3"),
            ];

            let last_modified = OffsetDateTime::UNIX_EPOCH + Duration::days(30);
            for key in keys {
                let mut obj = MockObject::constant(0xaa, 30, ETag::for_tests());
                obj.set_last_modified(last_modified);
                client.add_object(key, obj);
            }

            // And now walk the root directory to check it contains the right stuff
            let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 20).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            let entries: Vec<_> = entries.iter().map(|l| (l.inode.name(), l.inode.kind())).collect();

            let expected_entries = [
                ("aaa", InodeKind::File),
                ("dir1", InodeKind::Directory),
                ("dir2", InodeKind::Directory),
                ("dir3", InodeKind::Directory),
                ("dir4", InodeKind::Directory),
                ("dm1", InodeKind::Directory),
                ("dm2", InodeKind::Directory),
                ("dm3", InodeKind::Directory),
                ("dm4", InodeKind::Directory),
                ("file1", InodeKind::File),
                ("file2", InodeKind::Directory), // local directory shadows remote file
                ("file3", InodeKind::File),
                ("zzz", InodeKind::File),
            ];

            for entry in expected_entries {
                assert!(entries.contains(&entry), "missing entry {entry:?}");
            }

            if ordered {
                assert_eq!(entries, expected_entries);
            }
        }

        #[test_case(""; "unprefixed")]
        #[test_case("test_prefix/"; "prefixed")]
        #[tokio::test]
        async fn test_rmdir_delete_status(prefix: &str) {
            let client_config = MockClientConfig {
                bucket: "test_bucket".to_string(),
                part_size: 1024 * 1024,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

            // Create local directory
            let dirname = "local_dir";
            let LookedUp { inode, .. } = superblock
                .create(FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
                .await
                .expect("Should be able to create directory");

            superblock
                .rmdir(FUSE_ROOT_INODE, dirname.as_ref())
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
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

            // Create local directory
            let dirname = "local_dir";
            superblock
                .create(FUSE_ROOT_INODE, dirname.as_ref(), InodeKind::Directory)
                .await
                .expect("Should be able to create directory");

            let dirname_to_stay = "staying_local_dir";
            superblock
                .create(FUSE_ROOT_INODE, dirname_to_stay.as_ref(), InodeKind::Directory)
                .await
                .expect("Should be able to create directory");

            superblock
                .rmdir(FUSE_ROOT_INODE, dirname.as_ref())
                .await
                .expect("rmdir on empty local directory should succeed");

            // removed directory should not appear in readdir of parent
            let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
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
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let prefix = Prefix::new(prefix).expect("valid prefix");
            let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

            let file_name = "file.txt";
            let file_key = format!("{prefix}{file_name}");
            client.add_object(file_key.as_ref(), MockObject::constant(0xaa, 30, ETag::for_tests()));
            let parent_ino = FUSE_ROOT_INODE;

            superblock
                .lookup(parent_ino, file_name.as_ref())
                .await
                .expect("file should exist");

            superblock
                .unlink(parent_ino, file_name.as_ref())
                .await
                .expect("file delete should succeed as it exists");

            let err: i32 = superblock
                .lookup(parent_ino, file_name.as_ref())
                .await
                .expect_err("lookup should no longer find deleted file")
                .to_errno();
            assert_eq!(libc::ENOENT, err, "lookup should return no existing entry error");
        }
    */
    #[tokio::test]
    async fn test_finish_writing_convert_parent_local_dirs_to_remote() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        let superblock = Superblock::new(client.clone(), "test_bucket", &Default::default(), Default::default());

        let nested_dirs = (0..5).map(|i| format!("level{i}")).collect::<Vec<_>>();
        let leaf_dir_ino = {
            let mut parent_dir_ino = FUSE_ROOT_INODE;
            for dirname in &nested_dirs {
                let dir_lookedup = superblock
                    .create(parent_dir_ino, dirname.as_ref(), InodeKind::Directory)
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
            .create(leaf_dir_ino, filename.as_ref(), InodeKind::File)
            .await
            .unwrap();

        superblock
            .start_writing(new_inode.inode.ino(), &WriteMode::default(), false)
            .await
            .expect("should be able to start writing");

        // Invoke [finish_writing], without actually adding the
        // object to the client
        superblock.finish_writing(new_inode.inode.ino(), None).unwrap();

        // All nested dirs disappear
        let dirname = nested_dirs.first().unwrap();
        let lookedup = superblock.lookup(FUSE_ROOT_INODE, dirname.as_ref()).await;
        assert!(matches!(lookedup, Err(InodeError::FileDoesNotExist(_, _))));
    }

    #[tokio::test]
    async fn test_inode_reuse() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        client.add_object("dir1/file1.txt", MockObject::constant(0xaa, 30, ETag::for_tests()));

        let superblock = Superblock::new(client.clone(), "test_bucket", &Default::default(), Default::default());

        for _ in 0..2 {
            let dir1_1 = superblock.lookup(FUSE_ROOT_INODE, "dir1".as_ref()).await.unwrap();
            let dir1_2 = superblock.lookup(FUSE_ROOT_INODE, "dir1".as_ref()).await.unwrap();
            assert_eq!(dir1_1.inode.ino(), dir1_2.inode.ino());

            let file1_1 = superblock
                .lookup(dir1_1.inode.ino(), "file1.txt".as_ref())
                .await
                .unwrap();
            let file1_2 = superblock
                .lookup(dir1_1.inode.ino(), "file1.txt".as_ref())
                .await
                .unwrap();
            assert_eq!(file1_1.inode.ino(), file1_2.inode.ino());
        }
    }
    /*
    #[test_case(""; "no subdirectory")]
    #[test_case("subdir/"; "with subdirectory")]
    #[tokio::test]
    async fn test_lookup_directory_overlap(subdir: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
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

        let superblock = Superblock::new(client.clone(), "test_bucket", &Default::default(), Default::default());

        let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
            &["dir", "dir-1"]
        );

        let dir = superblock.lookup(FUSE_ROOT_INODE, "dir".as_ref()).await.unwrap();
        assert_eq!(superblock.full_key_for_inode(&dir.inode).as_ref(), "dir/");
    }*/

    /*  #[tokio::test]
    async fn test_invalid_names() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
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

        let superblock = Superblock::new(client.clone(), "test_bucket", &Default::default(), Default::default());
        let dir_handle = superblock.readdir(FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
            &["dir1"]
        );

        dir_handle.remember(&entries[0]);
        let dir1_ino = entries[0].inode.ino();
        let dir_handle = superblock.readdir(dir1_ino, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| entry.inode.name()).collect::<Vec<_>>(),
            &["a"]
        );

        // Neither of these keys should exist in the directory
        for key in ["/", "."] {
            let lookup = superblock.lookup(dir1_ino, key.as_ref()).await;
            assert!(matches!(lookup, Err(InodeError::InvalidFileName(_))));
        }
    } */

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_setattr(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        let prefix = Prefix::new(prefix).expect("valid prefix");
        let superblock = Superblock::new(client.clone(), "test_bucket", &prefix, Default::default());

        // Create a new file
        let filename = "newfile.txt";
        let new_inode = superblock
            .create(FUSE_ROOT_INODE, filename.as_ref(), InodeKind::File)
            .await
            .unwrap();

        superblock
            .start_writing(new_inode.inode.ino(), &WriteMode::default(), false)
            .await
            .expect("should be able to start writing");

        let atime = OffsetDateTime::UNIX_EPOCH + Duration::days(90);
        let mtime = OffsetDateTime::UNIX_EPOCH + Duration::days(60);

        // Call setattr and verify the stat
        let lookup = superblock
            .setattr(new_inode.inode.ino(), Some(atime), Some(mtime))
            .await
            .expect("setattr should be successful");
        let stat = lookup.stat;
        assert_eq!(stat.atime, atime);
        assert_eq!(stat.mtime, mtime);

        let lookup = superblock
            .getattr(new_inode.inode.ino(), false)
            .await
            .expect("getattr should be successful");
        let stat = lookup.stat;
        assert_eq!(stat.atime, atime);
        assert_eq!(stat.mtime, mtime);

        // Invoke [finish_writing] to make the file remote
        superblock
            .finish_writing(new_inode.inode.ino(), Some(ETag::for_tests()))
            .unwrap();

        // Should get an error back when calling setattr
        let result = superblock
            .setattr(new_inode.inode.ino(), Some(atime), Some(mtime))
            .await;
        assert!(matches!(result, Err(InodeError::SetAttrNotPermittedOnRemoteInode(_))));
    }

    #[test]
    fn test_inodestat_constructors() {
        let ts = OffsetDateTime::UNIX_EPOCH + Duration::days(90);
        let file_inodestat = InodeStat::for_file(128, ts, None, None, None, Default::default());
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
