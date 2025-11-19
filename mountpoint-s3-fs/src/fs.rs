//! FUSE file system types and operations, not tied to the _fuser_ library bindings.

use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::time::{Duration, UNIX_EPOCH};

use bytes::Bytes;
use fuser::consts::FOPEN_DIRECT_IO;
use fuser::{FileAttr, KernelConfig};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::types::ChecksumAlgorithm;
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{Level, debug, trace};

use crate::async_util::Runtime;
use crate::logging;
use crate::mem_limiter::MemoryLimiter;
use crate::memory::PagedPool;
use crate::metablock::{AddDirEntry, AddDirEntryResult, CompletionHook, InodeInformation, Metablock, ReadWriteMode};
pub use crate::metablock::{InodeError, InodeKind, InodeNo};
use crate::prefetch::{Prefetcher, PrefetcherBuilder};
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, AsyncMutex, AsyncRwLock};
use crate::upload::{Uploader, UploaderConfig};

mod config;
pub use config::{CacheConfig, S3FilesystemConfig};

#[macro_use]
mod error;
pub use error::{Error, ToErrno};

pub mod error_metadata;
use error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT};

mod flags;
pub use flags::{OpenFlags, RenameFlags};

mod handles;
pub use handles::{FileHandle, FileHandleState};

mod sse;
pub use sse::{ServerSideEncryption, SseCorruptedError};

mod time_to_live;
pub use time_to_live::TimeToLive;

pub const FUSE_ROOT_INODE: InodeNo = 1u64;

pub struct S3Filesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    config: S3FilesystemConfig,
    metablock: Arc<dyn Metablock>,
    prefetcher: Prefetcher<Client>,
    uploader: Uploader<Client>,
    next_handle: AtomicU64,
    file_handles: AsyncRwLock<HashMap<u64, Arc<FileHandle<Client>>>>,
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

impl<Client> S3Filesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn new(
        client: Client,
        prefetch_builder: PrefetcherBuilder<Client>,
        pool: PagedPool,
        runtime: Runtime,
        metablock: impl Metablock + 'static,
        config: S3FilesystemConfig,
    ) -> Self {
        trace!(?config, "new filesystem");

        let mem_limiter = Arc::new(MemoryLimiter::new(pool.clone(), config.mem_limit));
        let prefetcher = prefetch_builder.build(runtime.clone(), mem_limiter.clone(), config.prefetcher_config);
        let uploader = Uploader::new(
            client.clone(),
            runtime,
            pool,
            mem_limiter,
            UploaderConfig::new(client.write_part_size())
                .storage_class(config.storage_class.to_owned())
                .server_side_encryption(config.server_side_encryption.clone())
                .default_checksum_algorithm(config.use_upload_checksums.then_some(ChecksumAlgorithm::Crc32c)),
        );

        Self {
            config,
            metablock: Arc::new(metablock),
            prefetcher,
            uploader,
            next_handle: AtomicU64::new(1),
            file_handles: AsyncRwLock::new(HashMap::new()),
        }
    }

    fn next_handle(&self) -> u64 {
        self.next_handle.fetch_add(1, Ordering::SeqCst)
    }

    /// Helper to return the u16 value in an environment variable, or panic.  Useful for unstable overrides.
    fn parse_env_var_to_u16(var_name: &str, var_value: std::ffi::OsString) -> u16 {
        var_value
            .to_string_lossy()
            .parse::<u16>()
            .unwrap_or_else(|_| panic!("Invalid value for environment variable {var_name}. Must be positive integer."))
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
                .unwrap_or_else(|_| panic!("Unable to set FUSE max_background configuration to {max_background}"));
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
                .unwrap_or_else(|_| panic!("unable to set FUSE congestion_threshold to {congestion_threshold}"));
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

    fn make_attr(&self, lookup: &InodeInformation) -> FileAttr {
        /// From man stat(2): `st_blocks`: "This field indicates the number of blocks allocated to
        /// the file, in 512-byte units."
        const STAT_BLOCK_SIZE: u64 = 512;
        /// From man stat(2): `st_blksize`: "This field gives the "preferred" block size for
        /// efficient filesystem I/O."
        const PREFERRED_IO_BLOCK_SIZE: u32 = 4096;

        // We don't implement hard links, and don't want to have to list a directory to count its
        // hard links, so we just assume one link for files (itself) and two links for directories
        // (itself + the "." link).
        let (perm, nlink) = match lookup.kind() {
            InodeKind::File => {
                if lookup.stat().is_readable {
                    (self.config.file_mode, 1)
                } else {
                    (0o000, 1)
                }
            }
            InodeKind::Directory => (self.config.dir_mode, 2),
        };

        FileAttr {
            ino: lookup.ino(),
            size: lookup.stat().size as u64,
            blocks: (lookup.stat().size as u64).div_ceil(STAT_BLOCK_SIZE),
            atime: lookup.stat().atime.into(),
            mtime: lookup.stat().mtime.into(),
            ctime: lookup.stat().ctime.into(),
            crtime: UNIX_EPOCH,
            kind: lookup.kind().into(),
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
            .metablock
            .lookup(parent, name)
            .await
            .map_err(|err| match err {
                InodeError::FileDoesNotExist(_, _) => {
                    // Lookup returning ENOENT is common case, and we dont want to warn in case `FileDoesNotExist` within ENOENT
                    err!(libc::ENOENT, source: err, Level::DEBUG, metadata: ErrorMetadata{error_code: Some(MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT.to_string()), ..Default::default()}, "file does not exist")
                }
                _ => err.into(),
            })?;
        let ttl = lookup.validity();
        let attr = self.make_attr(&lookup.into());
        Ok(Entry {
            ttl,
            attr,
            generation: 0,
        })
    }

    pub async fn getattr(&self, ino: InodeNo) -> Result<Attr, Error> {
        trace!("fs:getattr with ino {:?}", ino);

        let lookup = self.metablock.getattr(ino, false).await?;
        let ttl = lookup.validity();
        let attr = self.make_attr(&lookup.into());

        Ok(Attr { ttl, attr })
    }

    pub async fn setattr(
        &self,
        ino: InodeNo,
        atime: Option<OffsetDateTime>,
        mtime: Option<OffsetDateTime>,
        size: Option<u64>,
        _flags: Option<u32>,
    ) -> Result<Attr, Error> {
        tracing::debug!(
            "fs:setattr with ino {:?} flags {:?} atime {:?} mtime {:?} size {:?}",
            ino,
            _flags,
            atime,
            mtime,
            size
        );
        let setattr_result = self.metablock.setattr(ino, atime, mtime).await;
        let lookup = match (setattr_result, size) {
            (Ok(lookup), _) => lookup,
            (Err(InodeError::SetAttrNotPermittedOnRemoteInode(_)), Some(0)) if !self.config.allow_overwrite => {
                // We want to provide better feedback to users to prompt them to opt-in to file overwrites if it looks like what the application needs.
                // Instead of complex logic to match `setattr` truncation only, we just check for the error and if the size was set in the request.
                // If so, we assume its probably a truncation.
                return Err(err!(
                    libc::EPERM,
                    "file overwrite is disabled by default, you need to remount with --allow-overwrite flag and open the file in truncate mode (O_TRUNC) to overwrite it"
                ));
            }
            (Err(e), _) => return Err(e.into()),
        };
        let ttl = lookup.validity();
        let attr = self.make_attr(&lookup.into());

        Ok(Attr { ttl, attr })
    }

    pub async fn forget(&self, ino: InodeNo, n: u64) {
        trace!("fs:forget with ino {:?} n {:?}", ino, n);
        self.metablock.forget(ino, n).await;
    }

    pub async fn open(&self, ino: InodeNo, flags: OpenFlags, pid: u32) -> Result<Opened, Error> {
        trace!("open with ino {:?} flags {} pid {:?}", ino, flags, pid);

        // We can't support O_SYNC writes because they require the data to go to stable storage
        // at `write` time, but we only commit a PUT at `close` time.
        if flags.intersects(OpenFlags::O_SYNC | OpenFlags::O_DSYNC) {
            return Err(err!(libc::EINVAL, "O_SYNC and O_DSYNC are not supported"));
        }

        let fh = self.next_handle(); // TODO: can we delay obtaining the next handle until we know we are creating a new file handle?
        let write_mode = self.config.write_mode();
        let new_handle = self.metablock.open_handle(ino, fh, &write_mode, flags).await?;
        let state = FileHandleState::new(&new_handle, flags, self).await?;
        let handle = FileHandle {
            ino,
            location: new_handle.lookup.try_into_s3_location()?,
            open_pid: pid,
            state: AsyncMutex::new(state),
        };
        debug!(fh, ino, "new file handle created");
        self.file_handles.write().await.insert(fh, Arc::new(handle));

        let reply_flags = if flags.direct_io() { FOPEN_DIRECT_IO } else { 0 };
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
            ino, fh, offset, size
        );

        if option_env!("MOUNTPOINT_BUILD_STUB_FS_HANDLER").is_some() {
            // This compile-time configuration allows us to return simply zeroes to FUSE,
            // allowing us to remove Mountpoint's logic from the loop and compare performance
            // with and without the rest of Mountpoint's logic (such as file handle interaction, prefetcher, etc.).
            return Ok(vec![0u8; size as usize].into());
        }

        let handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(handle.file_name());

        let mut state = handle.state.lock().await;
        let (request, flushed) = match &mut *state {
            FileHandleState::Read { request, flushed } => (request, flushed),
            FileHandleState::Write { .. } => return Err(err!(libc::EBADF, "file handle is not open for reads")),
        };

        if *flushed {
            if !self.metablock.validate_handle(ino, fh, ReadWriteMode::Read).await? {
                return Err(err!(
                    libc::EBADF,
                    "file handle has been invalidated by a newer handle opened"
                ));
            }
            *flushed = false;
        }
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

        let lookup = self.metablock.create(parent, name, InodeKind::File).await?;
        debug!(ino = lookup.ino(), "new inode created");
        let ttl = lookup.validity();
        let attr = self.make_attr(&lookup.into());
        Ok(Entry {
            ttl,
            attr,
            generation: 0,
        })
    }

    pub async fn mkdir(&self, parent: InodeNo, name: &OsStr, _mode: libc::mode_t, _umask: u32) -> Result<Entry, Error> {
        let lookup = self.metablock.create(parent, name, InodeKind::Directory).await?;
        let ttl = lookup.validity();
        let attr = self.make_attr(&lookup.into());
        Ok(Entry {
            ttl,
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
            ino, fh, offset, len
        );

        let handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(handle.file_name());

        let len = {
            let mut state = handle.state.lock().await;
            let (request, flushed) = match &mut *state {
                FileHandleState::Read { .. } => return Err(err!(libc::EBADF, "file handle is not open for writes")),
                FileHandleState::Write { state, flushed } => (state, flushed),
            };

            if *flushed {
                if !self.metablock.validate_handle(ino, fh, ReadWriteMode::Write).await? {
                    return Err(err!(
                        libc::EBADF,
                        "file handle has been invalidated by a newer handle opened"
                    ));
                }
                *flushed = false;
            }

            request.write(self, &handle, offset, data).await?
        };
        Ok(len)
    }

    /// Creates a new ReaddirHandle for the provided parent and default page size
    async fn readdir_handle(&self, parent: InodeNo) -> Result<u64, InodeError> {
        self.metablock.new_readdir_handle(parent).await
    }

    pub async fn opendir(&self, parent: InodeNo, _flags: i32) -> Result<Opened, Error> {
        trace!("fs:opendir with parent {:?} flags {:#b}", parent, _flags);

        let readdir_handle = self.readdir_handle(parent).await?;
        trace!(fh = readdir_handle, "Opened new directory handle");
        Ok(Opened {
            fh: readdir_handle,
            flags: 0,
        })
    }

    pub async fn readdir<R: DirectoryReplier + Send + Sync>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        reply: R,
    ) -> Result<(), Error> {
        trace!("fs:readdir with ino {:?} fh {:?} offset {:?}", parent, fh, offset);
        self.readdir_impl(parent, fh, offset, false, reply).await
    }

    pub async fn readdirplus<R: DirectoryReplier + Send + Sync>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        reply: R,
    ) -> Result<(), Error> {
        trace!("fs:readdirplus with ino {:?} fh {:?} offset {:?}", parent, fh, offset);
        self.readdir_impl(parent, fh, offset, true, reply).await
    }

    async fn readdir_impl<R: DirectoryReplier + Send + Sync>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        is_readdirplus: bool,
        mut reply: R,
    ) -> Result<(), Error> {
        let adder: AddDirEntry = Box::new(move |information, name, offset, generation| {
            if reply.add(DirectoryEntry {
                ino: information.ino(),
                offset,
                name,
                attr: self.make_attr(&information),
                generation,
                ttl: information.validity(),
            }) {
                AddDirEntryResult::ReplyBufferFull
            } else {
                AddDirEntryResult::EntryAdded
            }
        });

        self.metablock
            .readdir(parent, fh, offset, is_readdirplus, adder)
            .await?;
        Ok(())
    }

    pub async fn fsync(&self, ino: InodeNo, fh: u64, _datasync: bool) -> Result<(), Error> {
        let file_handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(file_handle.file_name());
        let mut state = file_handle.state.lock().await;
        let (write_state, flushed) = match &mut *state {
            FileHandleState::Read { flushed, .. } => {
                *flushed = self.metablock.flush_reader(ino, fh).await?;
                return Ok(());
            }
            FileHandleState::Write { state, flushed } => (state, flushed),
        };
        let handle_flushed = write_state.commit(self, file_handle.clone(), fh).await.map_err(|e|
            // According to the `fsync` man page we should return ENOSPC instead of EFBIG if it's a
            // space-related failure.
            if e.to_errno() == libc::EFBIG { err!(libc::ENOSPC, source:e, "object too big") } else { e }
        )?;

        *flushed = handle_flushed;
        Ok(())
    }

    pub async fn flush(&self, ino: InodeNo, fh: u64, _lock_owner: u64, pid: u32) -> Result<(), Error> {
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
        logging::record_name(file_handle.file_name());
        let mut state = file_handle.state.lock().await;
        match &mut *state {
            FileHandleState::Read { flushed, .. } => {
                *flushed = self.metablock.flush_reader(ino, fh).await?;
            }
            FileHandleState::Write { state, flushed } => {
                let handle_flushed = state
                    .complete(self, file_handle.clone(), pid, file_handle.open_pid, fh)
                    .await?;
                *flushed = handle_flushed;
            }
        }
        Ok(())
    }

    /// Release a file handle.
    ///
    /// Note that errors won't actually be seen by the user because `release` is async,
    /// but we'll still be returned here and logged by [`S3FuseFilesystem`].           
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
        logging::record_name(file_handle.file_name());

        match &*file_handle.state.lock().await {
            FileHandleState::Read { .. } => {
                metrics::gauge!("fs.current_handles", "type" => "read").decrement(1.0);
                self.metablock.finish_reading(file_handle.ino, fh).await?;
                return Ok(());
            }
            FileHandleState::Write { .. } => {}
        };

        let completion_hook = CompletionHook::new(self.metablock.clone(), file_handle.clone());
        let complete_result = self.metablock.flush_writer(ino, fh, completion_hook, true).await;

        metrics::gauge!("fs.current_handles", "type" => "write").decrement(1.0);

        if complete_result? {
            debug!(key = %file_handle.location, "upload completed async after file was closed");
        }
        Ok(())
    }

    pub async fn rmdir(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), Error> {
        self.metablock.rmdir(parent_ino, name).await?;
        Ok(())
    }

    pub async fn releasedir(&self, _ino: InodeNo, fh: u64, _flags: i32) -> Result<(), Error> {
        self.metablock.releasedir(fh).await?;
        Ok(())
    }

    pub async fn unlink(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), Error> {
        if !self.config.allow_delete {
            return Err(err!(
                libc::EPERM,
                "Deletes are disabled. Use '--allow-delete' mount option to enable it."
            ));
        }
        Ok(self.metablock.unlink(parent_ino, name).await?)
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

    pub async fn rename(
        &self,
        old_parent_ino: InodeNo,
        old_name: &OsStr,
        new_parent_ino: InodeNo,
        new_name: &OsStr,
        flags: RenameFlags,
    ) -> Result<(), Error> {
        trace!(
            old_parent_ino,
            ?old_name,
            new_parent_ino,
            ?new_name,
            "fs:rename with flags {:#b}",
            flags,
        );

        let overwrites_allowed: bool;
        #[cfg(target_os = "linux")]
        {
            if flags.contains(RenameFlags::RENAME_EXCHANGE) {
                return Err(err!(libc::EINVAL, "flag RENAME_EXCHANGE is not supported"));
            }
            if flags.contains(RenameFlags::RENAME_WHITEOUT) {
                return Err(err!(libc::EINVAL, "flag RENAME_WHITEOUT is not supported"));
            }
            // Allow overwriting rename if a) allow_overwrites is set [tested before] and b) the RENAME_NOREPLACE flag is not set
            overwrites_allowed = self.config.allow_overwrite && !flags.contains(RenameFlags::RENAME_NOREPLACE);
        }
        #[cfg(not(target_os = "linux"))]
        {
            overwrites_allowed = self.config.allow_overwrite;
        }

        self.metablock
            .rename(old_parent_ino, old_name, new_parent_ino, new_name, overwrites_allowed)
            .await?;
        tracing::trace!("rename complete");
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use crate::prefetch::Prefetcher;
    use crate::s3::{Bucket, S3Path};
    use crate::{Superblock, SuperblockConfig};

    use fuser::FileType;
    use futures::executor::ThreadPool;
    use mountpoint_s3_client::mock_client::{MockClient, MockObject};
    use mountpoint_s3_client::types::ETag;

    #[tokio::test]
    async fn test_open_with_corrupted_sse() {
        let bucket = Bucket::new("bucket").unwrap();
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket.to_string())
                .enable_backpressure(true)
                .initial_read_window_size(1024 * 1024)
                .build(),
        );
        // Create "dir1" in the client to avoid creating it locally
        client.add_object("dir1/file1.bin", MockObject::constant(0xa1, 15, ETag::for_tests()));

        let runtime = Runtime::new(ThreadPool::builder().pool_size(1).create().unwrap());
        let pool = PagedPool::new_with_candidate_sizes([32]);
        let prefetcher_builder = Prefetcher::default_builder(client.clone());
        let server_side_encryption =
            ServerSideEncryption::new(Some("aws:kms".to_owned()), Some("some_key_alias".to_owned()));
        let fs_config = S3FilesystemConfig {
            server_side_encryption,
            ..Default::default()
        };
        let superblock = Superblock::new(
            client.clone(),
            S3Path::new(bucket, Default::default()),
            SuperblockConfig {
                cache_config: fs_config.cache_config.clone(),
                s3_personality: fs_config.s3_personality,
            },
        );
        let mut fs = S3Filesystem::new(client, prefetcher_builder, pool, runtime, superblock, fs_config);

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
        assert_eq!(
            format!("{err}"),
            "put failed to start: SSE settings corrupted: Checksum mismatch. expected: Crc32c(752912206), actual: Crc32c(1265531471)"
        );
    }
}
