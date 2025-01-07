//! FUSE file system types and operations, not tied to the _fuser_ library bindings.

use bytes::Bytes;
use futures::task::Spawn;

use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::time::{Duration, UNIX_EPOCH};
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{debug, trace, Level};

use fuser::consts::FOPEN_DIRECT_IO;
use fuser::{FileAttr, KernelConfig};
use mountpoint_s3_client::types::ChecksumAlgorithm;
use mountpoint_s3_client::ObjectClient;

use crate::logging;
use crate::mem_limiter::MemoryLimiter;
use crate::prefetch::{Prefetch, PrefetchResult};
use crate::prefix::Prefix;
use crate::superblock::{InodeError, InodeKind, LookedUp, ReaddirHandle, Superblock, SuperblockConfig};
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, AsyncMutex, AsyncRwLock};
use crate::upload::Uploader;

pub use crate::superblock::InodeNo;

mod config;
pub use config::{CacheConfig, S3FilesystemConfig};

#[macro_use]
mod error;
pub use error::{Error, ToErrno};

pub mod error_metadata;
use error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT};

mod flags;
pub use flags::OpenFlags;

mod handles;
use handles::{DirHandle, FileHandle, FileHandleState};

mod sse;
pub use sse::{ServerSideEncryption, SseCorruptedError};

mod time_to_live;
pub use time_to_live::TimeToLive;

pub const FUSE_ROOT_INODE: InodeNo = 1u64;

#[derive(Debug)]
pub struct S3Filesystem<Client, Prefetcher>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    config: S3FilesystemConfig,
    client: Client,
    mem_limiter: Arc<MemoryLimiter<Client>>,
    superblock: Superblock,
    prefetcher: Prefetcher,
    uploader: Uploader<Client>,
    bucket: String,
    #[allow(unused)]
    prefix: Prefix,
    next_handle: AtomicU64,
    dir_handles: AsyncRwLock<HashMap<u64, Arc<DirHandle>>>,
    file_handles: AsyncRwLock<HashMap<u64, Arc<FileHandle<Client, Prefetcher>>>>,
}

/// Reply to a `lookup` call
#[derive(Debug)]
pub struct Entry {
    pub ttl: Duration,
    pub attr: FileAttr,
    pub generation: u64,
}

/// Reply to a `getattr` call
#[derive(Debug)]
pub struct Attr {
    pub ttl: Duration,
    pub attr: FileAttr,
}

/// Reply to a `open` or `opendir` call
#[derive(Debug)]
pub struct Opened {
    pub fh: u64,
    pub flags: u32,
}

/// Reply to a `readdir` or `readdirplus` call
pub trait DirectoryReplier {
    /// Add a new dentry to the reply. Returns true if the buffer was full and so the entry was not
    /// added.
    fn add(&mut self, entry: DirectoryEntry) -> bool;
}

#[derive(Debug, Clone)]
pub struct DirectoryEntry {
    pub ino: u64,
    pub offset: i64,
    pub name: OsString,
    pub attr: FileAttr,
    pub generation: u64,
    pub ttl: Duration,
    lookup: LookedUp,
}

/// Reply to a 'statfs' call
#[derive(Debug)]
pub struct StatFs {
    /// Total number of blocks
    pub total_blocks: u64,
    /// Number of free blocks
    pub free_blocks: u64,
    /// Number of free blocks available to unprivileged user
    pub available_blocks: u64,
    /// Number of inodes in file system
    pub total_inodes: u64,
    /// Available inodes
    pub free_inodes: u64,
    /// Optimal transfer block size
    pub block_size: u32,
    /// Maximum name length
    pub maximum_name_length: u32,
    /// Fragement size
    pub fragment_size: u32,
}

impl Default for StatFs {
    fn default() -> Self {
        // Default values copied from Fuser (https://github.com/cberner/fuser/blob/e18bd9bf9071ecd8be62993726e06ff11d6ec709/src/lib.rs#L695-L698)
        Self {
            total_blocks: 0,
            free_blocks: 0,
            available_blocks: 0,
            total_inodes: 0,
            free_inodes: 0,
            block_size: 512,
            maximum_name_length: 255,
            fragment_size: 0,
        }
    }
}

impl<Client, Prefetcher> S3Filesystem<Client, Prefetcher>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    pub fn new(
        client: Client,
        prefetcher: Prefetcher,
        runtime: impl Spawn + Send + Sync + 'static,
        bucket: &str,
        prefix: &Prefix,
        config: S3FilesystemConfig,
    ) -> Self {
        trace!(?bucket, ?prefix, ?config, "new filesystem");

        let superblock_config = SuperblockConfig {
            cache_config: config.cache_config.clone(),
            s3_personality: config.s3_personality,
        };
        let superblock = Superblock::new(bucket, prefix, superblock_config);
        let mem_limiter = Arc::new(MemoryLimiter::new(client.clone(), config.mem_limit));
        let uploader = Uploader::new(
            client.clone(),
            runtime,
            mem_limiter.clone(),
            config.storage_class.to_owned(),
            config.server_side_encryption.clone(),
            client.write_part_size().unwrap(),
            config.use_upload_checksums.then_some(ChecksumAlgorithm::Crc32c),
        );

        Self {
            config,
            client,
            mem_limiter,
            superblock,
            prefetcher,
            uploader,
            bucket: bucket.to_string(),
            prefix: prefix.clone(),
            next_handle: AtomicU64::new(1),
            dir_handles: AsyncRwLock::new(HashMap::new()),
            file_handles: AsyncRwLock::new(HashMap::new()),
        }
    }

    fn next_handle(&self) -> u64 {
        self.next_handle.fetch_add(1, Ordering::SeqCst)
    }

    /// Helper to return the u16 value in an environment variable, or panic.  Useful for unstable overrides.
    fn parse_env_var_to_u16(var_name: &str, var_value: std::ffi::OsString) -> u16 {
        var_value.to_string_lossy().parse::<u16>().unwrap_or_else(|_| {
            panic!(
                "Invalid value for environment variable {}. Must be positive integer.",
                var_name
            )
        })
    }

    pub async fn init(&self, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        const ENV_VAR_KEY_MAX_BACKGROUND: &str = "UNSTABLE_MOUNTPOINT_MAX_BACKGROUND";
        const ENV_VAR_KEY_CONGESTION_THRESHOLD: &str = "UNSTABLE_MOUNTPOINT_CONGESTION_THRESHOLD";
        let _ = config.add_capabilities(fuser::consts::FUSE_DO_READDIRPLUS);
        // Set max_background FUSE parameter to 64 by default, or override with environment variable.
        // NOTE: Support for this environment variable may be removed in future without notice.
        if let Some(user_max_background) = std::env::var_os(ENV_VAR_KEY_MAX_BACKGROUND) {
            let max_background = Self::parse_env_var_to_u16(ENV_VAR_KEY_MAX_BACKGROUND, user_max_background);
            let old = config
                .set_max_background(max_background)
                .unwrap_or_else(|_| panic!("Unable to set FUSE max_background configuration to {}", max_background));
            tracing::warn!(
                "Successfully overridden FUSE max_background configuration to {} (was {}) from unstable environment variable.",
                max_background,
                old
            );
        } else {
            const DEFAULT_MAX_BACKGROUND: u16 = 64;
            let max_background_result = config.set_max_background(DEFAULT_MAX_BACKGROUND);
            if max_background_result.is_err() {
                tracing::warn!(
                    "failed to set FUSE max_background to {}, using Kernel default",
                    DEFAULT_MAX_BACKGROUND
                );
            }
        }

        // Override FUSE congestion threshold if environment variable is present.
        // NOTE: Support for this environment variable may be removed in future without notice.
        if let Some(user_congestion_threshold) = std::env::var_os(ENV_VAR_KEY_CONGESTION_THRESHOLD) {
            let congestion_threshold =
                Self::parse_env_var_to_u16(ENV_VAR_KEY_CONGESTION_THRESHOLD, user_congestion_threshold);
            let old = config
                .set_congestion_threshold(congestion_threshold)
                .unwrap_or_else(|_| panic!("unable to set FUSE congestion_threshold to {}", congestion_threshold));
            tracing::warn!(
                "Successfully overridden FUSE congestion_threshold configuration to {} (was {}) from unstable environment variable.",
                congestion_threshold,
                old
            );
        }

        if self.config.allow_overwrite {
            // Overwrites require FUSE_ATOMIC_O_TRUNC capability on the host, so we will panic if the
            // host doesn't support it.
            //
            // This should makes it clear to users that they cannot enable overwrite on their host
            // rather than silently disable it and let users find out later when their writes fail.
            config
                .add_capabilities(fuser::consts::FUSE_ATOMIC_O_TRUNC)
                .expect("The host must support FUSE_ATOMIC_O_TRUNC capability in order to allow overwrites");
        }
        Ok(())
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
                    (self.config.file_mode, 1)
                } else {
                    (0o000, 1)
                }
            }
            InodeKind::Directory => (self.config.dir_mode, 2),
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
            uid: self.config.uid,
            gid: self.config.gid,
            rdev: 0,
            flags: 0,
            blksize: PREFERRED_IO_BLOCK_SIZE,
        }
    }

    pub async fn lookup(&self, parent: InodeNo, name: &OsStr) -> Result<Entry, Error> {
        trace!("fs:lookup with parent {:?} name {:?}", parent, name);

        let lookup = self
            .superblock
            .lookup(&self.client, parent, name)
            .await
            .map_err(|err| match err {
                InodeError::FileDoesNotExist(_, _) => {
                    // Lookup returning ENOENT is common case, and we dont want to warn in case `FileDoesNotExist` within ENOENT
                    err!(libc::ENOENT, source: err, Level::DEBUG, metadata: ErrorMetadata{error_code: Some(MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT.to_string()), ..Default::default()}, "file does not exist")
                }
                _ => err.into(),
            })?;
        let attr = self.make_attr(&lookup);
        Ok(Entry {
            ttl: lookup.validity(),
            attr,
            generation: 0,
        })
    }

    pub async fn getattr(&self, ino: InodeNo) -> Result<Attr, Error> {
        trace!("fs:getattr with ino {:?}", ino);

        let lookup = self.superblock.getattr(&self.client, ino, false).await?;
        let attr = self.make_attr(&lookup);

        Ok(Attr {
            ttl: lookup.validity(),
            attr,
        })
    }

    pub async fn setattr(
        &self,
        ino: InodeNo,
        atime: Option<OffsetDateTime>,
        mtime: Option<OffsetDateTime>,
        size: Option<u64>,
        _flags: Option<u32>,
    ) -> Result<Attr, Error> {
        tracing::info!(
            "fs:setattr with ino {:?} flags {:?} atime {:?} mtime {:?} size {:?}",
            ino,
            _flags,
            atime,
            mtime,
            size
        );
        let setattr_result = self.superblock.setattr(&self.client, ino, atime, mtime).await;
        let lookup = match (setattr_result, size) {
            (Ok(lookup), _) => lookup,
            (Err(InodeError::SetAttrNotPermittedOnRemoteInode(_)), Some(0)) if !self.config.allow_overwrite => {
                // We want to provide better feedback to users to prompt them to opt-in to file overwrites if it looks like what the application needs.
                // Instead of complex logic to match `setattr` truncation only, we just check for the error and if the size was set in the request.
                // If so, we assume its probably a truncation.
                return Err(
                    err!(libc::EPERM, "file overwrite is disabled by default, you need to remount with --allow-overwrite flag and open the file in truncate mode (O_TRUNC) to overwrite it"));
            }
            (Err(e), _) => return Err(e.into()),
        };
        let attr = self.make_attr(&lookup);

        Ok(Attr {
            ttl: lookup.validity(),
            attr,
        })
    }

    pub async fn forget(&self, ino: InodeNo, n: u64) {
        trace!("fs:forget with ino {:?} n {:?}", ino, n);
        self.superblock.forget(ino, n);
    }

    pub async fn open(&self, ino: InodeNo, flags: OpenFlags, pid: u32) -> Result<Opened, Error> {
        trace!("fs:open with ino {:?} flags {} pid {:?}", ino, flags, pid);

        #[cfg(not(target_os = "linux"))]
        let direct_io = false;
        #[cfg(target_os = "linux")]
        let direct_io = flags.contains(OpenFlags::O_DIRECT);

        // We can't support O_SYNC writes because they require the data to go to stable storage
        // at `write` time, but we only commit a PUT at `close` time.
        if flags.intersects(OpenFlags::O_SYNC | OpenFlags::O_DSYNC) {
            return Err(err!(libc::EINVAL, "O_SYNC and O_DSYNC are not supported"));
        }

        let force_revalidate = !self.config.cache_config.serve_lookup_from_cache || direct_io;
        let lookup = self.superblock.getattr(&self.client, ino, force_revalidate).await?;

        match lookup.inode.kind() {
            InodeKind::Directory => return Err(InodeError::IsDirectory(lookup.inode.err()).into()),
            InodeKind::File => (),
        }

        let state = if flags.contains(OpenFlags::O_RDWR) {
            if !lookup.inode.is_remote()?
                || (self.config.allow_overwrite && flags.contains(OpenFlags::O_TRUNC))
                || (self.config.incremental_upload && flags.contains(OpenFlags::O_APPEND))
            {
                // If the file is new or if it was opened in truncate or in append mode,
                // we know it must be a write handle.
                debug!("fs:open choosing write handle for O_RDWR");
                FileHandleState::new_write_handle(&lookup, lookup.inode.ino(), flags, self).await?
            } else {
                // Otherwise, it must be a read handle.
                debug!("fs:open choosing read handle for O_RDWR");
                FileHandleState::new_read_handle(&lookup, self).await?
            }
        } else if flags.contains(OpenFlags::O_WRONLY) {
            FileHandleState::new_write_handle(&lookup, lookup.inode.ino(), flags, self).await?
        } else {
            FileHandleState::new_read_handle(&lookup, self).await?
        };

        let inode = lookup.inode.clone();
        let full_key = lookup.inode.full_key().to_owned();
        let handle = FileHandle {
            inode,
            full_key,
            open_pid: pid,
            state: AsyncMutex::new(state),
        };
        let fh = self.next_handle();
        debug!(fh, ino, "new file handle created");
        self.file_handles.write().await.insert(fh, Arc::new(handle));

        let reply_flags = if direct_io { FOPEN_DIRECT_IO } else { 0 };

        Ok(Opened { fh, flags: reply_flags })
    }

    #[allow(clippy::too_many_arguments)] // We don't get to choose this interface
    pub async fn read(
        &self,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        size: u32,
        _flags: i32,
        _lock: Option<u64>,
    ) -> Result<Bytes, Error> {
        trace!(
            "fs:read with ino {:?} fh {:?} offset {:?} size {:?}",
            ino,
            fh,
            offset,
            size
        );

        let handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(handle.inode.name());
        let mut state = handle.state.lock().await;
        let request = match &mut *state {
            FileHandleState::Read { request, .. } => request,
            FileHandleState::Write(_) => return Err(err!(libc::EBADF, "file handle is not open for reads")),
        };

        request
            .read(offset as u64, size as usize)
            .await?
            .into_bytes()
            .map_err(|e| err!(libc::EIO, source:e, "integrity error"))
    }

    pub async fn mknod(
        &self,
        parent: InodeNo,
        name: &OsStr,
        mode: libc::mode_t,
        _umask: u32,
        _rdev: u32,
    ) -> Result<Entry, Error> {
        if mode & libc::S_IFMT != libc::S_IFREG {
            return Err(err!(
                libc::EINVAL,
                "invalid mknod type {}; only regular files are supported",
                mode & libc::S_IFMT
            ));
        }

        let lookup = self
            .superblock
            .create(&self.client, parent, name, InodeKind::File)
            .await?;
        debug!(ino = lookup.inode.ino(), "new inode created");
        let attr = self.make_attr(&lookup);
        Ok(Entry {
            ttl: lookup.validity(),
            attr,
            generation: 0,
        })
    }

    pub async fn mkdir(&self, parent: InodeNo, name: &OsStr, _mode: libc::mode_t, _umask: u32) -> Result<Entry, Error> {
        let lookup = self
            .superblock
            .create(&self.client, parent, name, InodeKind::Directory)
            .await?;
        let attr = self.make_attr(&lookup);
        Ok(Entry {
            ttl: lookup.validity(),
            attr,
            generation: 0,
        })
    }

    #[allow(clippy::too_many_arguments)] // We don't get to choose this interface
    pub async fn write(
        &self,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        data: &[u8],
        _write_flags: u32,
        _flags: i32,
        _lock_owner: Option<u64>,
    ) -> Result<u32, Error> {
        let len = data.len();
        trace!(
            "fs:write with ino {:?} fh {:?} offset {:?} size {:?}",
            ino,
            fh,
            offset,
            len
        );

        let handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(handle.inode.name());

        let len = {
            let mut state = handle.state.lock().await;
            let request = match &mut *state {
                FileHandleState::Read { .. } => return Err(err!(libc::EBADF, "file handle is not open for writes")),
                FileHandleState::Write(request) => request,
            };

            request.write(offset, data, &handle.full_key).await?
        };
        Ok(len)
    }

    /// Creates a new ReaddirHandle for the provided parent and default page size
    async fn readdir_handle(&self, parent: InodeNo) -> Result<ReaddirHandle, InodeError> {
        self.superblock.readdir(&self.client, parent, 1000).await
    }

    pub async fn opendir(&self, parent: InodeNo, _flags: i32) -> Result<Opened, Error> {
        trace!("fs:opendir with parent {:?} flags {:#b}", parent, _flags);

        let readdir_handle = self.readdir_handle(parent).await?;
        let handle = DirHandle::new(parent, readdir_handle);
        let fh = self.next_handle();
        let mut dir_handles = self.dir_handles.write().await;
        dir_handles.insert(fh, Arc::new(handle));

        Ok(Opened { fh, flags: 0 })
    }

    pub async fn readdir<R: DirectoryReplier>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        reply: R,
    ) -> Result<R, Error> {
        trace!("fs:readdir with ino {:?} fh {:?} offset {:?}", parent, fh, offset);
        self.readdir_impl(parent, fh, offset, false, reply).await
    }

    pub async fn readdirplus<R: DirectoryReplier>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        reply: R,
    ) -> Result<R, Error> {
        trace!("fs:readdirplus with ino {:?} fh {:?} offset {:?}", parent, fh, offset);
        self.readdir_impl(parent, fh, offset, true, reply).await
    }

    async fn readdir_impl<R: DirectoryReplier>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        is_readdirplus: bool,
        mut reply: R,
    ) -> Result<R, Error> {
        let dir_handle = {
            let dir_handles = self.dir_handles.read().await;
            dir_handles
                .get(&fh)
                .cloned()
                .ok_or_else(|| err!(libc::EBADF, "invalid directory handle"))?
        };

        // special case where we need to rewind and restart the streaming but only when it is not the first time we see offset 0
        if offset == 0 && dir_handle.offset() != 0 {
            let new_handle = self.readdir_handle(parent).await?;
            *dir_handle.handle.lock().await = new_handle;
            dir_handle.rewind_offset();
            // drop any cached entries, as new response may be unordered and cache would be stale
            *dir_handle.last_response.lock().await = None;
        }

        let readdir_handle = dir_handle.handle.lock().await;

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
                            readdir_handle.remember(&entry.lookup);
                        }
                    }
                    return Ok(reply);
                }
            }

            return Err(err!(
                libc::EINVAL,
                "out-of-order readdir, expected={}, actual={}",
                dir_handle.offset(),
                offset
            ));
        }

        /// Wrap a replier to duplicate the entries and store them in `dir_handle.last_response` so
        /// we can re-use them if the directory handle rewinds
        struct Reply<R: DirectoryReplier> {
            reply: R,
            entries: Vec<DirectoryEntry>,
        }

        impl<R: DirectoryReplier> Reply<R> {
            async fn finish(self, offset: i64, dir_handle: &DirHandle) -> R {
                *dir_handle.last_response.lock().await = Some((offset, self.entries));
                self.reply
            }
        }

        impl<R: DirectoryReplier> DirectoryReplier for Reply<R> {
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
            let lookup = self.superblock.getattr(&self.client, parent, false).await?;
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
            let lookup = self
                .superblock
                .getattr(&self.client, readdir_handle.parent(), false)
                .await?;
            let attr = self.make_attr(&lookup);
            let entry = DirectoryEntry {
                ino: readdir_handle.parent(),
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
            let next = match readdir_handle.next(&self.client).await? {
                None => return Ok(reply.finish(offset, &dir_handle).await),
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
                readdir_handle.readd(next);
                return Ok(reply.finish(offset, &dir_handle).await);
            }
            if is_readdirplus {
                readdir_handle.remember(&next);
            }
            dir_handle.next_offset();
        }
    }

    pub async fn fsync(&self, _ino: InodeNo, fh: u64, _datasync: bool) -> Result<(), Error> {
        let file_handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(file_handle.inode.name());
        let mut state = file_handle.state.lock().await;
        let write_state = match &mut *state {
            FileHandleState::Read { .. } => return Ok(()),
            FileHandleState::Write(write_state) => write_state,
        };
        match write_state.commit(&file_handle.full_key, self).await {
            // According to the `fsync` man page we should return ENOSPC instead of EFBIG if it's a
            // space-related failure.
            Err(e) if e.to_errno() == libc::EFBIG => Err(err!(libc::ENOSPC, source:e, "object too big")),
            ret => ret,
        }
    }

    pub async fn flush(&self, _ino: InodeNo, fh: u64, _lock_owner: u64, pid: u32) -> Result<(), Error> {
        // We generally want to complete the upload when users close a file descriptor (and flush
        // is invoked), so that we can notify them of the outcome. However, since different file
        // descriptors can point to the same file handle, flush can be invoked multiple times on
        // a file handle and will fail once the object has been uploaded.
        // While we cannot avoid this issue in the general case, we want to support common usage
        // patterns, in particular:
        // * commands like `touch` and `dd` duplicate a file descriptor immediately after open,
        //   close (flush) the original one, and then start writing on the duplicate. We support
        //   these cases by only completing the upload on flush when some bytes have been written.
        // * a `fork` on a process with open file descriptors will duplicate them for the child
        //   process. In many cases, the child will then immediately close (flush) the duplicated
        //   file descriptors. We will not complete the upload if we can detect that the process
        //   invoking flush is different from the one that originally opened the file.
        let file_handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(file_handle.inode.name());
        let mut state = file_handle.state.lock().await;
        match &mut *state {
            FileHandleState::Read { .. } => Ok(()),
            FileHandleState::Write(write_state) => {
                write_state
                    .complete(&file_handle.full_key, pid, file_handle.open_pid, self)
                    .await
            }
        }
    }

    pub async fn release(
        &self,
        ino: InodeNo,
        fh: u64,
        _flags: i32,
        _lock_owner: Option<u64>,
        _flush: bool,
    ) -> Result<(), Error> {
        trace!("fs:release with ino {:?} fh {:?}", ino, fh);
        let file_handle = {
            let mut file_handles = self.file_handles.write().await;
            file_handles
                .remove(&fh)
                .ok_or_else(|| err!(libc::EBADF, "invalid file handle"))?
        };
        logging::record_name(file_handle.inode.name());

        // Unwrap the atomic reference to have full ownership.
        // The kernel should make a release call when there is no more references to the file handle,
        // if that's not the case we will add it back to the hash table and return an error to the kernel.
        let file_handle = match Arc::try_unwrap(file_handle) {
            Ok(handle) => handle,
            Err(handle) => {
                self.file_handles.write().await.insert(fh, handle);
                return Err(err!(libc::EINVAL, "unable to unwrap file handle reference"));
            }
        };

        let write_state = match file_handle.state.into_inner() {
            FileHandleState::Read { handle, .. } => {
                metrics::gauge!("fs.current_handles", "type" => "read").decrement(1.0);
                handle.finish()?;
                return Ok(());
            }
            FileHandleState::Write(write_state) => write_state,
        };

        let result = write_state.complete_if_in_progress(&file_handle.full_key).await;
        metrics::gauge!("fs.current_handles", "type" => "write").decrement(1.0);
        // Errors won't actually be seen by the user because `release` is async,
        // but it's the right thing to do.
        result
    }

    pub async fn rmdir(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), Error> {
        self.superblock.rmdir(&self.client, parent_ino, name).await?;
        Ok(())
    }

    pub async fn releasedir(&self, _ino: InodeNo, fh: u64, _flags: i32) -> Result<(), Error> {
        let mut dir_handles = self.dir_handles.write().await;
        dir_handles
            .remove(&fh)
            .map(|_| ())
            .ok_or_else(|| err!(libc::EBADF, "invalid directory handle"))
    }

    pub async fn unlink(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), Error> {
        if !self.config.allow_delete {
            return Err(err!(
                libc::EPERM,
                "Deletes are disabled. Use '--allow-delete' mount option to enable it."
            ));
        }
        Ok(self.superblock.unlink(&self.client, parent_ino, name).await?)
    }

    pub async fn statfs(&self, _ino: InodeNo) -> Result<StatFs, Error> {
        const FREE_BLOCKS: u64 = u64::MAX / 1024;
        const FREE_INODES: u64 = u64::MAX / 1024;

        let reply = StatFs {
            free_blocks: FREE_BLOCKS,
            available_blocks: FREE_BLOCKS,
            free_inodes: FREE_INODES,
            total_blocks: FREE_BLOCKS,
            total_inodes: FREE_INODES,
            ..Default::default()
        };
        Ok(reply)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use crate::prefetch::default_prefetch;

    use fuser::FileType;
    use futures::executor::ThreadPool;
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockObject};
    use mountpoint_s3_client::types::ETag;

    #[tokio::test]
    async fn test_open_with_corrupted_sse() {
        let bucket = "bucket";
        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            enable_backpressure: true,
            initial_read_window_size: 1024 * 1024,
            ..Default::default()
        }));
        // Create "dir1" in the client to avoid creating it locally
        client.add_object("dir1/file1.bin", MockObject::constant(0xa1, 15, ETag::for_tests()));

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = default_prefetch(runtime.clone(), Default::default());
        let server_side_encryption =
            ServerSideEncryption::new(Some("aws:kms".to_owned()), Some("some_key_alias".to_owned()));
        let fs_config = S3FilesystemConfig {
            server_side_encryption,
            ..Default::default()
        };
        let mut fs = S3Filesystem::new(client, prefetcher, runtime, bucket, &Default::default(), fs_config);

        // Lookup inode of the dir1 directory
        let entry = fs.lookup(FUSE_ROOT_INODE, "dir1".as_ref()).await.unwrap();
        assert_eq!(entry.attr.kind, FileType::Directory);
        let dir_ino = entry.attr.ino;

        // Open a file for write in "dir1" before corruption
        let dentry = fs
            .mknod(dir_ino, "file2.bin".as_ref(), libc::S_IFREG | libc::S_IRWXU, 0, 0)
            .await
            .unwrap();
        assert_eq!(dentry.attr.size, 0);
        fs.open(dentry.attr.ino, OpenFlags::O_WRONLY, 0)
            .await
            .expect("open before the corruption should succeed");

        // Open a file for write in "dir1" after corruption
        fs.uploader
            .corrupt_sse(Some("aws:kmr".to_owned()), Some("some_key_alias".to_owned()));
        let dentry = fs
            .mknod(dir_ino, "file3.bin".as_ref(), libc::S_IFREG | libc::S_IRWXU, 0, 0)
            .await
            .unwrap();
        assert_eq!(dentry.attr.size, 0);
        let err = fs
            .open(dentry.attr.ino, OpenFlags::O_WRONLY, 0)
            .await
            .expect_err("open after the corruption should fail");
        assert_eq!(err.errno, libc::EIO);
        assert_eq!(format!("{}", err), "put failed to start: SSE settings corrupted: Checksum mismatch. expected: Crc32c(752912206), actual: Crc32c(1265531471)");
    }
}
