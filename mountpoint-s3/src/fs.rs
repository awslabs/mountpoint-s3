//! FUSE file system types and operations, not tied to the _fuser_ library bindings.

use futures::task::Spawn;
use nix::unistd::{getgid, getuid};
use std::collections::HashMap;
use std::ffi::OsStr;
use std::str::FromStr;
use std::time::{Duration, UNIX_EPOCH};
use time::OffsetDateTime;
use tracing::{debug, error, trace};

use fuser::{FileAttr, KernelConfig};
use mountpoint_s3_client::{ETag, GetObjectError, ObjectClient, ObjectClientError};

use crate::inode::{Inode, InodeError, InodeKind, LookedUp, ReaddirHandle, Superblock, WriteHandle};
use crate::prefetch::{PrefetchGetObject, PrefetchReadError, Prefetcher, PrefetcherConfig};
use crate::prefix::Prefix;
use crate::sync::atomic::{AtomicI64, AtomicU64, Ordering};
use crate::sync::{Arc, AsyncMutex, AsyncRwLock};
use crate::upload::{UploadRequest, Uploader};

pub use crate::inode::InodeNo;

#[macro_use]
mod error;
pub use error::{Error, ToErrno};

pub const FUSE_ROOT_INODE: InodeNo = 1u64;

#[derive(Debug)]
struct DirHandle {
    #[allow(unused)]
    ino: InodeNo,
    handle: ReaddirHandle,
    offset: AtomicI64,
}

impl DirHandle {
    fn offset(&self) -> i64 {
        self.offset.load(Ordering::SeqCst)
    }

    fn next_offset(&self) {
        self.offset.fetch_add(1, Ordering::SeqCst);
    }
}

#[derive(Debug)]
struct FileHandle<Client: ObjectClient, Runtime> {
    inode: Inode,
    full_key: String,
    object_size: u64,
    typ: FileHandleType<Client, Runtime>,
}

#[derive(Debug)]
enum FileHandleType<Client: ObjectClient, Runtime> {
    Read {
        request: AsyncMutex<Option<PrefetchGetObject<Client, Runtime>>>,
        etag: ETag,
    },
    Write(AsyncMutex<UploadState<Client>>),
}

impl<Client: ObjectClient, Runtime> FileHandleType<Client, Runtime> {
    async fn new_write_handle(
        lookup: &LookedUp,
        ino: InodeNo,
        flags: i32,
        fs: &S3Filesystem<Client, Runtime>,
    ) -> Result<FileHandleType<Client, Runtime>, Error> {
        // We can't support O_SYNC writes because they require the data to go to stable storage
        // at `write` time, but we only commit a PUT at `close` time.
        if flags & (libc::O_SYNC | libc::O_DSYNC) != 0 {
            return Err(err!(libc::EINVAL, "O_SYNC and O_DSYNC are not supported"));
        }

        let handle = match fs.superblock.write(&fs.client, ino, lookup.inode.parent()).await {
            Ok(handle) => handle,
            Err(e) => {
                return Err(e.into());
            }
        };
        let key = lookup.inode.full_key();
        let handle = match fs.uploader.put(&fs.bucket, key).await {
            Err(e) => {
                return Err(err!(libc::EIO, source:e, "put failed to start"));
            }
            Ok(request) => FileHandleType::Write(UploadState::InProgress { request, handle }.into()),
        };
        metrics::increment_gauge!("fs.current_handles", 1.0, "type" => "write");
        Ok(handle)
    }

    async fn new_read_handle(lookup: &LookedUp) -> Result<FileHandleType<Client, Runtime>, Error> {
        if !lookup.stat.is_readable {
            return Err(err!(
                libc::EACCES,
                "objects in flexible retrieval storage classes are not accessible",
            ));
        }
        lookup.inode.start_reading()?;
        let handle = FileHandleType::Read {
            request: Default::default(),
            etag: match &lookup.stat.etag {
                None => return Err(err!(libc::EBADF, "no E-Tag for inode {}", lookup.inode.ino())),
                Some(etag) => ETag::from_str(etag).expect("E-Tag should be set"),
            },
        };
        metrics::increment_gauge!("fs.current_handles", 1.0, "type" => "read");
        Ok(handle)
    }
}

#[derive(Debug)]
enum UploadState<Client: ObjectClient> {
    InProgress {
        request: UploadRequest<Client>,
        handle: WriteHandle,
    },
    Completed,
    // Remember the failure reason to respond to retries
    Failed(libc::c_int),
}

impl<Client: ObjectClient> UploadState<Client> {
    async fn write(&mut self, offset: i64, data: &[u8], key: &str) -> Result<u32, Error> {
        let upload = self.get_upload_in_progress(key)?;
        match upload.write(offset, data).await {
            Ok(len) => Ok(len as u32),
            Err(e) => {
                // Abort the request.
                match std::mem::replace(self, Self::Failed(e.to_errno())) {
                    UploadState::InProgress { handle, .. } => {
                        if let Err(err) = handle.finish_writing() {
                            // Log the issue but still return the write error.
                            error!(?err, "error updating the inode status");
                        }
                    }
                    Self::Failed(_) | Self::Completed => unreachable!("checked by get_upload_in_progress"),
                };
                Err(e.into())
            }
        }
    }

    async fn complete(&mut self, key: &str) -> Result<(), Error> {
        // Check that the upload is still in progress.
        _ = self.get_upload_in_progress(key)?;
        let (upload, handle) = match std::mem::replace(self, Self::Completed) {
            Self::InProgress { request, handle } => (request, handle),
            Self::Failed(_) | Self::Completed => unreachable!("checked by get_upload_in_progress"),
        };
        let result = Self::complete_upload(upload, key, handle).await;
        if let Err(e) = &result {
            *self = Self::Failed(e.to_errno());
        }
        result
    }

    async fn complete_if_in_progress(self, key: &str) -> Result<(), Error> {
        match self {
            Self::InProgress { request, handle } => Self::complete_upload(request, key, handle).await,
            Self::Failed(_) | Self::Completed => Ok(()),
        }
    }

    async fn complete_upload(upload: UploadRequest<Client>, key: &str, handle: WriteHandle) -> Result<(), Error> {
        let size = upload.size();
        let put_result = match upload.complete().await {
            Ok(_) => {
                debug!(key, size, "put succeeded");
                Ok(())
            }
            Err(e) => Err(err!(libc::EIO, source:e, "put failed")),
        };
        if let Err(err) = handle.finish_writing() {
            // Log the issue but still return put_result.
            error!(?err, "error updating the inode status");
        }
        put_result
    }

    fn get_upload_in_progress(&mut self, key: &str) -> Result<&mut UploadRequest<Client>, Error> {
        match self {
            Self::InProgress { request, .. } => Ok(request),
            Self::Completed => Err(err!(libc::EIO, "upload already completed for key {:?}", key)),
            Self::Failed(e) => Err(err!(*e, "upload already aborted for key {:?}", key)),
        }
    }
}

#[derive(Debug, Clone)]
pub struct CacheConfig {
    /// How long the kernel will cache metadata for files
    pub file_ttl: Duration,
    /// How long the kernel will cache metadata for directories
    pub dir_ttl: Duration,
}

impl Default for CacheConfig {
    fn default() -> Self {
        // We want to do as little caching as possible, but Linux filesystems behave badly when the
        // TTL is exactly zero. For example, results from `readdir` will expire immediately, and so
        // the kernel will immediately re-lookup every entry returned from `readdir`. So we apply
        // small non-zero TTLs. The goal is to be small enough that the impact on consistency is
        // minimal, but large enough that a single cache miss doesn't cause a cascading effect where
        // every other cache entry expires by the time that cache miss is serviced. We also apply a
        // longer TTL for directories, which are both less likely to change on the S3 side and
        // checked more often (for directory permissions checks).
        let file_ttl = Duration::from_millis(100);
        let dir_ttl = Duration::from_millis(1000);

        Self { file_ttl, dir_ttl }
    }
}

#[derive(Debug)]
pub struct S3FilesystemConfig {
    /// Kernel cache config
    pub cache_config: CacheConfig,
    /// Readdir page size
    pub readdir_size: usize,
    /// User id
    pub uid: u32,
    /// Group id
    pub gid: u32,
    /// Directory permissions
    pub dir_mode: u16,
    /// File permissions
    pub file_mode: u16,
    /// Prefetcher configuration
    pub prefetcher_config: PrefetcherConfig,
    /// Allow delete
    pub allow_delete: bool,
    /// Storage class to be used for new object uploads
    pub storage_class: Option<String>,
}

impl Default for S3FilesystemConfig {
    fn default() -> Self {
        let uid = getuid().into();
        let gid = getgid().into();

        Self {
            cache_config: Default::default(),
            readdir_size: 100,
            uid,
            gid,
            dir_mode: 0o755,
            file_mode: 0o644,
            prefetcher_config: PrefetcherConfig::default(),
            allow_delete: false,
            storage_class: None,
        }
    }
}

#[derive(Debug)]
pub struct S3Filesystem<Client: ObjectClient, Runtime> {
    config: S3FilesystemConfig,
    client: Arc<Client>,
    superblock: Superblock,
    prefetcher: Prefetcher<Client, Runtime>,
    uploader: Uploader<Client>,
    bucket: String,
    #[allow(unused)]
    prefix: Prefix,
    next_handle: AtomicU64,
    dir_handles: AsyncRwLock<HashMap<u64, Arc<DirHandle>>>,
    file_handles: AsyncRwLock<HashMap<u64, Arc<FileHandle<Client, Runtime>>>>,
}

impl<Client, Runtime> S3Filesystem<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync,
{
    pub fn new(client: Client, runtime: Runtime, bucket: &str, prefix: &Prefix, config: S3FilesystemConfig) -> Self {
        let superblock = Superblock::new(bucket, prefix, config.cache_config.clone());

        let client = Arc::new(client);

        let prefetcher = Prefetcher::new(client.clone(), runtime, config.prefetcher_config);
        let uploader = Uploader::new(client.clone(), config.storage_class.to_owned());

        Self {
            config,
            client,
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
    fn add<T: AsRef<OsStr>>(
        &mut self,
        ino: u64,
        offset: i64,
        name: T,
        attr: FileAttr,
        generation: u64,
        ttl: Duration,
    ) -> bool;
}

/// Reply to a `read` call. This is funky because we want the reply to happen with only a borrow of
/// the bytes. But that borrow probably comes from some lock in this module or below, and we don't
/// want to have to shoehorn that lifetime into the layer above us. So instead we have this trait
/// that forces the `read` method to invoke exactly one of the reply methods. The idea is that the
/// [Replied] type should be private and unconstructable by this module.
pub trait ReadReplier {
    type Replied;
    /// Reply with a data payload
    fn data(self, data: &[u8]) -> Self::Replied;
    /// Reply with an error
    fn error(self, error: Error) -> Self::Replied;
}

impl<Client, Runtime> S3Filesystem<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync,
{
    pub async fn init(&self, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        let _ = config.add_capabilities(fuser::consts::FUSE_DO_READDIRPLUS);
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
            blocks: (lookup.stat.size as u64 + STAT_BLOCK_SIZE - 1) / STAT_BLOCK_SIZE,
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

        let lookup = self.superblock.lookup(&self.client, parent, name).await?;
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
        _flags: Option<u32>,
    ) -> Result<Attr, Error> {
        tracing::info!(
            "fs:setattr with ino {:?} flags {:?} atime {:?} mtime {:?}",
            ino,
            _flags,
            atime,
            mtime
        );
        let lookup = self.superblock.setattr(&self.client, ino, atime, mtime).await?;
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

    pub async fn open(&self, ino: InodeNo, flags: i32) -> Result<Opened, Error> {
        trace!("fs:open with ino {:?} flags {:?}", ino, flags);

        let lookup = self.superblock.getattr(&self.client, ino, true).await?;

        match lookup.inode.kind() {
            InodeKind::Directory => return Err(InodeError::IsDirectory(lookup.inode.err()).into()),
            InodeKind::File => (),
        }

        let handle_type = if flags & libc::O_RDWR != 0 {
            let remote_file = lookup.inode.is_remote()?;
            if remote_file {
                trace!("fs:open choosing read handle for O_RDWR");
                FileHandleType::new_read_handle(&lookup).await?
            } else {
                trace!("fs:open choosing write handle for O_RDWR");
                FileHandleType::new_write_handle(&lookup, ino, flags, self).await?
            }
        } else if flags & libc::O_WRONLY != 0 {
            FileHandleType::new_write_handle(&lookup, ino, flags, self).await?
        } else {
            FileHandleType::new_read_handle(&lookup).await?
        };

        let full_key = lookup.inode.full_key().to_owned();

        let fh = self.next_handle();
        let handle = FileHandle {
            inode: lookup.inode,
            full_key,
            object_size: lookup.stat.size as u64,
            typ: handle_type,
        };
        self.file_handles.write().await.insert(fh, Arc::new(handle));

        Ok(Opened { fh, flags: 0 })
    }

    #[allow(clippy::too_many_arguments)] // We don't get to choose this interface
    pub async fn read<R: ReadReplier>(
        &self,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        size: u32,
        _flags: i32,
        _lock: Option<u64>,
        reply: R,
    ) -> R::Replied {
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
                None => return reply.error(err!(libc::EBADF, "invalid file handle")),
            }
        };
        let file_etag: ETag;
        let mut request = match &handle.typ {
            FileHandleType::Write { .. } => return reply.error(err!(libc::EBADF, "file handle is not open for reads")),
            FileHandleType::Read { request, etag } => {
                file_etag = etag.clone();
                request.lock().await
            }
        };

        if request.is_none() {
            *request = Some(
                self.prefetcher
                    .get(&self.bucket, &handle.full_key, handle.object_size, file_etag),
            );
        }

        match request.as_mut().unwrap().read(offset as u64, size as usize).await {
            Ok(checksummed_bytes) => match checksummed_bytes.into_bytes() {
                Ok(bytes) => reply.data(&bytes),
                Err(e) => reply.error(err!(libc::EIO, source:e, "integrity error")),
            },
            Err(PrefetchReadError::GetRequestFailed(ObjectClientError::ServiceError(
                GetObjectError::PreconditionFailed,
            ))) => reply.error(err!(libc::ESTALE, "object was mutated remotely")),
            Err(PrefetchReadError::Integrity(e)) => reply.error(err!(libc::EIO, source:e, "integrity error")),
            Err(e @ PrefetchReadError::GetRequestFailed(_))
            | Err(e @ PrefetchReadError::GetRequestTerminatedUnexpectedly) => {
                reply.error(err!(libc::EIO, source:e, "get request failed"))
            }
        }
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

        let len = {
            let mut request = match &handle.typ {
                FileHandleType::Write(request) => request.lock().await,
                FileHandleType::Read { .. } => return Err(err!(libc::EBADF, "file handle is not open for writes")),
            };
            request.write(offset, data, &handle.full_key).await?
        };
        handle.inode.inc_file_size(len as usize);
        Ok(len)
    }

    pub async fn opendir(&self, parent: InodeNo, _flags: i32) -> Result<Opened, Error> {
        trace!("fs:opendir with parent {:?} flags {:?}", parent, _flags);

        let inode_handle = self.superblock.readdir(&self.client, parent, 1000).await?;

        let fh = self.next_handle();
        let handle = DirHandle {
            ino: parent,
            handle: inode_handle,
            offset: AtomicI64::new(0),
        };

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

        if offset != dir_handle.offset() {
            return Err(err!(
                libc::EINVAL,
                "offset mismatch, expected={}, actual={}",
                dir_handle.offset(),
                offset
            ));
        }

        if dir_handle.offset() < 1 {
            let lookup = self.superblock.getattr(&self.client, parent, false).await?;
            let attr = self.make_attr(&lookup);
            if reply.add(parent, dir_handle.offset() + 1, ".", attr, 0u64, lookup.validity()) {
                return Ok(reply);
            }
            dir_handle.next_offset();
        }
        if dir_handle.offset() < 2 {
            let lookup = self
                .superblock
                .getattr(&self.client, dir_handle.handle.parent(), false)
                .await?;
            let attr = self.make_attr(&lookup);
            if reply.add(
                dir_handle.handle.parent(),
                dir_handle.offset() + 1,
                "..",
                attr,
                0u64,
                lookup.validity(),
            ) {
                return Ok(reply);
            }
            dir_handle.next_offset();
        }

        loop {
            let next = match dir_handle.handle.next(&self.client).await? {
                None => return Ok(reply),
                Some(next) => next,
            };

            let attr = self.make_attr(&next);
            if reply.add(
                attr.ino,
                dir_handle.offset() + 1,
                next.inode.name(),
                attr,
                0u64,
                next.validity(),
            ) {
                dir_handle.handle.readd(next);
                return Ok(reply);
            }
            if is_readdirplus {
                dir_handle.handle.remember(&next);
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
        let mut request = match &file_handle.typ {
            FileHandleType::Write(request) => request.lock().await,
            FileHandleType::Read { .. } => return Ok(()),
        };
        match request.complete(&file_handle.full_key).await {
            // According to the `fsync` man page we should return ENOSPC instead of EFBIG if it's a
            // space-related failure.
            Err(e) if e.to_errno() == libc::EFBIG => Err(err!(libc::ENOSPC, source:e, "object too big")),
            ret => ret,
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

        match file_handle.typ {
            FileHandleType::Write(request) => {
                let result = request
                    .into_inner()
                    .complete_if_in_progress(&file_handle.full_key)
                    .await;
                metrics::decrement_gauge!("fs.current_handles", 1.0, "type" => "write");
                // Errors won't actually be seen by the user because `release` is async,
                // but it's the right thing to do.
                result
            }
            FileHandleType::Read { request: _, etag: _ } => {
                // TODO make sure we cancel the inflight PrefetchingGetRequest. is just dropping enough?
                file_handle.inode.finish_reading()?;
                metrics::decrement_gauge!("fs.current_handles", 1.0, "type" => "read");
                Ok(())
            }
        }
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
            return Err(err!(libc::EPERM, "deletes are disabled"));
        }
        Ok(self.superblock.unlink(&self.client, parent_ino, name).await?)
    }
}
