//! FUSE file system types and operations, not tied to the _fuser_ library bindings.

use bytes::Bytes;
use nix::unistd::{getgid, getuid};
use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::str::FromStr;
use std::time::{Duration, UNIX_EPOCH};
use time::OffsetDateTime;
use tracing::{debug, error, trace};

use fuser::consts::FOPEN_DIRECT_IO;
use fuser::{FileAttr, KernelConfig};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::ObjectClient;

use crate::inode::{Inode, InodeError, InodeKind, LookedUp, ReaddirHandle, Superblock, SuperblockConfig, WriteHandle};
use crate::logging;
use crate::prefetch::{Prefetch, PrefetchReadError, PrefetchResult};
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
    last_response: AsyncMutex<Option<(i64, Vec<DirectoryEntry>)>>,
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
struct FileHandle<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    inode: Inode,
    full_key: String,
    object_size: u64,
    typ: FileHandleType<Client, Prefetcher>,
}

enum FileHandleType<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    Read {
        request: AsyncMutex<Option<Prefetcher::PrefetchResult<Client>>>,
        etag: ETag,
    },
    Write(AsyncMutex<UploadState<Client>>),
}

impl<Client, Prefetcher> std::fmt::Debug for FileHandleType<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static + std::fmt::Debug,
    Prefetcher: Prefetch,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Read { request: _, etag } => f.debug_struct("Read").field("etag", etag).finish(),
            Self::Write(arg0) => f.debug_tuple("Write").field(arg0).finish(),
        }
    }
}

impl<Client, Prefetcher> FileHandleType<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync,
    Prefetcher: Prefetch,
{
    async fn new_write_handle(
        lookup: &LookedUp,
        ino: InodeNo,
        flags: i32,
        pid: u32,
        fs: &S3Filesystem<Client, Prefetcher>,
    ) -> Result<FileHandleType<Client, Prefetcher>, Error> {
        // We can't support O_SYNC writes because they require the data to go to stable storage
        // at `write` time, but we only commit a PUT at `close` time.
        if flags & (libc::O_SYNC | libc::O_DSYNC) != 0 {
            return Err(err!(libc::EINVAL, "O_SYNC and O_DSYNC are not supported"));
        }

        let handle = match fs.superblock.write(&fs.client, ino, lookup.inode.parent(), pid).await {
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

    async fn new_read_handle(lookup: &LookedUp) -> Result<FileHandleType<Client, Prefetcher>, Error> {
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
        let upload = match self {
            Self::InProgress { request, .. } => request,
            Self::Completed => return Err(err!(libc::EIO, "upload already completed for key {:?}", key)),
            Self::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", key)),
        };

        match upload.write(offset, data).await {
            Ok(len) => Ok(len as u32),
            Err(e) => {
                // Abort the request.
                match std::mem::replace(self, Self::Failed(e.to_errno())) {
                    UploadState::InProgress { handle, .. } => {
                        if let Err(err) = handle.finish_writing() {
                            // Log the issue but still return the write error.
                            error!(?err, ?key, "error updating the inode status");
                        }
                    }
                    Self::Failed(_) | Self::Completed => unreachable!("checked above"),
                };
                Err(e.into())
            }
        }
    }

    async fn complete(&mut self, key: &str, ignore_if_empty: bool, pid: Option<u32>) -> Result<(), Error> {
        match self {
            Self::InProgress { request, handle } => {
                if ignore_if_empty && request.size() == 0 {
                    trace!(key, "not completing upload because file is empty");
                    return Ok(());
                }
                if let Some(pid) = pid {
                    let open_pid = handle.pid();
                    if !are_from_same_process(open_pid, pid) {
                        trace!(
                            key,
                            pid,
                            open_pid,
                            "not completing upload because current pid differs from pid at open"
                        );
                        return Ok(());
                    }
                }
            }
            Self::Completed => return Ok(()),
            Self::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", key)),
        };

        let (upload, handle) = match std::mem::replace(self, Self::Completed) {
            Self::InProgress { request, handle } => (request, handle),
            Self::Failed(_) | Self::Completed => unreachable!("checked above"),
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
            error!(?err, ?key, "error updating the inode status");
        }
        put_result
    }
}

/// Get the thread-group id (tgid) from a process id (pid).
/// Despite the names, the process id is actually the thread id
/// and the thread-group id is the parent process id.
/// Returns `None` if unable to find or parse the task status.
/// Not supported on macOS.
fn get_tgid(pid: u32) -> Option<u32> {
    if cfg!(not(target_os = "macos")) {
        use std::fs::File;
        use std::io::{BufRead, BufReader};

        let path = format!("/proc/{}/task/{}/status", pid, pid);
        let file = File::open(path).ok()?;
        for line in BufReader::new(file).lines() {
            let line = line.ok()?;
            if line.starts_with("Tgid:") {
                return line["Tgid: ".len()..].trim().parse::<u32>().ok();
            }
        }
    }

    None
}

/// Check whether two pids correspond to the same process.
fn are_from_same_process(pid1: u32, pid2: u32) -> bool {
    if pid1 == pid2 {
        return true;
    }
    let Some(tgid1) = get_tgid(pid1) else {
        return false;
    };
    let Some(tgid2) = get_tgid(pid2) else {
        return false;
    };
    tgid1 == tgid2
}

#[derive(Debug, Clone)]
pub struct CacheConfig {
    /// Should the file system serve lookup requests including open from cached entries,
    /// or instead check S3 even when a valid cached entry may be available?
    ///
    /// Even when disabled, some operations such as `getattr` are allowed to be served from cache
    /// with a short TTL since Linux filesystems behave badly when the TTL is zero.
    /// For example, results from `readdir` would expire immediately, and the kernel would
    /// immediately `getattr` every entry returned from `readdir`.
    pub serve_lookup_from_cache: bool,
    /// How long the kernel will cache metadata for files
    pub file_ttl: Duration,
    /// How long the kernel will cache metadata for directories
    pub dir_ttl: Duration,
}

impl Default for CacheConfig {
    fn default() -> Self {
        // We want to do as little caching as possible by default,
        // but Linux filesystems behave badly when the TTL is exactly zero.
        // For example, results from `readdir` will expire immediately, and so
        // the kernel will immediately re-lookup every entry returned from `readdir`. So we apply
        // small non-zero TTLs. The goal is to be small enough that the impact on consistency is
        // minimal, but large enough that a single cache miss doesn't cause a cascading effect where
        // every other cache entry expires by the time that cache miss is serviced. We also apply a
        // longer TTL for directories, which are both less likely to change on the S3 side and
        // checked more often (for directory permissions checks).
        let file_ttl = Duration::from_millis(100);
        let dir_ttl = Duration::from_millis(1000);

        Self {
            serve_lookup_from_cache: false,
            file_ttl,
            dir_ttl,
        }
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
    /// Allow delete
    pub allow_delete: bool,
    /// Storage class to be used for new object uploads
    pub storage_class: Option<String>,
    /// S3 personality (for different S3 semantics)
    pub s3_personality: S3Personality,
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
            allow_delete: false,
            storage_class: None,
            s3_personality: S3Personality::Standard,
        }
    }
}

/// The type of S3 we're talking to. S3 Standard and S3 Express One Zone have slightly different
/// semantics around ListObjects (ordered versus unordered) that this enum captures.
///
/// This enum intentionally doesn't implement PartialEq/Eq. You shouldn't test it directly. Instead,
/// use its methods like `is_list_ordered` to check the actual behavior you're looking for.
#[derive(Debug, Clone, Copy, Default)]
pub enum S3Personality {
    #[default]
    Standard,
    ExpressOneZone,
}

impl S3Personality {
    pub fn is_list_ordered(self) -> bool {
        match self {
            Self::Standard => true,
            Self::ExpressOneZone => false,
        }
    }
}

#[derive(Debug)]
pub struct S3Filesystem<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    config: S3FilesystemConfig,
    client: Arc<Client>,
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

impl<Client, Prefetcher> S3Filesystem<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    pub fn new(
        client: Client,
        prefetcher: Prefetcher,
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

        let client = Arc::new(client);

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

impl<Client, Prefetcher> S3Filesystem<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch,
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

    pub async fn open(&self, ino: InodeNo, flags: i32, pid: u32) -> Result<Opened, Error> {
        trace!("fs:open with ino {:?} flags {:#b} pid {:?}", ino, flags, pid);

        #[cfg(not(target_os = "linux"))]
        let direct_io = false;
        #[cfg(target_os = "linux")]
        let direct_io = flags & libc::O_DIRECT != 0;

        let force_revalidate = !self.config.cache_config.serve_lookup_from_cache || direct_io;
        let lookup = self.superblock.getattr(&self.client, ino, force_revalidate).await?;

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
                FileHandleType::new_write_handle(&lookup, ino, flags, pid, self).await?
            }
        } else if flags & libc::O_WRONLY != 0 {
            FileHandleType::new_write_handle(&lookup, ino, flags, pid, self).await?
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
        let file_etag: ETag;
        let mut request = match &handle.typ {
            FileHandleType::Write { .. } => return Err(err!(libc::EBADF, "file handle is not open for reads")),
            FileHandleType::Read { request, etag } => {
                file_etag = etag.clone();
                request.lock().await
            }
        };

        if request.is_none() {
            *request = Some(self.prefetcher.prefetch(
                self.client.clone(),
                &self.bucket,
                &handle.full_key,
                handle.object_size,
                file_etag,
            ));
        }

        match request.as_mut().unwrap().read(offset as u64, size as usize).await {
            Ok(checksummed_bytes) => checksummed_bytes
                .into_bytes()
                .map_err(|e| err!(libc::EIO, source:e, "integrity error")),
            Err(PrefetchReadError::GetRequestFailed(ObjectClientError::ServiceError(
                GetObjectError::PreconditionFailed,
            ))) => Err(err!(libc::ESTALE, "object was mutated remotely")),
            Err(PrefetchReadError::Integrity(e)) => Err(err!(libc::EIO, source:e, "integrity error")),
            Err(e @ PrefetchReadError::GetRequestFailed(_))
            | Err(e @ PrefetchReadError::GetRequestTerminatedUnexpectedly)
            | Err(e @ PrefetchReadError::GetRequestReturnedWrongOffset { .. }) => {
                Err(err!(libc::EIO, source:e, "get request failed"))
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
        logging::record_name(handle.inode.name());

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
        trace!("fs:opendir with parent {:?} flags {:#b}", parent, _flags);

        let inode_handle = self.superblock.readdir(&self.client, parent, 1000).await?;

        let fh = self.next_handle();
        let handle = DirHandle {
            ino: parent,
            handle: inode_handle,
            offset: AtomicI64::new(0),
            last_response: AsyncMutex::new(None),
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
            // POSIX allows seeking an open directory. That's a pain for us since we are streaming
            // the directory entries and don't want to keep them all in memory. But one common case
            // we've seen (https://github.com/awslabs/mountpoint-s3/issues/477) is applications that
            // request offset 0 twice in a row. So we remember the last response and, if repeated,
            // we return it again.
            let last_response = dir_handle.last_response.lock().await;
            if let Some((last_offset, entries)) = last_response.as_ref() {
                if offset == *last_offset {
                    trace!(offset, "repeating readdir response");
                    for entry in entries {
                        if reply.add(entry.clone()) {
                            break;
                        }
                        // We are returning this result a second time, so the contract is that we
                        // must remember it again, except that readdirplus specifies that . and ..
                        // are never incremented.
                        if is_readdirplus && entry.name != "." && entry.name != ".." {
                            dir_handle.handle.remember(&entry.lookup);
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
                .getattr(&self.client, dir_handle.handle.parent(), false)
                .await?;
            let attr = self.make_attr(&lookup);
            let entry = DirectoryEntry {
                ino: dir_handle.handle.parent(),
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
            let next = match dir_handle.handle.next(&self.client).await? {
                None => return Ok(reply.finish(offset, &dir_handle).await),
                Some(next) => next,
            };

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
                dir_handle.handle.readd(next);
                return Ok(reply.finish(offset, &dir_handle).await);
            }
            if is_readdirplus {
                dir_handle.handle.remember(&next);
            }
            dir_handle.next_offset();
        }
    }

    async fn complete_upload(&self, fh: u64, ignore_if_empty: bool, pid: Option<u32>) -> Result<(), Error> {
        let file_handle = {
            let file_handles = self.file_handles.read().await;
            match file_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => return Err(err!(libc::EBADF, "invalid file handle")),
            }
        };
        logging::record_name(file_handle.inode.name());
        let mut request = match &file_handle.typ {
            FileHandleType::Write(request) => request.lock().await,
            FileHandleType::Read { .. } => return Ok(()),
        };
        match request.complete(&file_handle.full_key, ignore_if_empty, pid).await {
            // According to the `fsync` man page we should return ENOSPC instead of EFBIG if it's a
            // space-related failure.
            Err(e) if e.to_errno() == libc::EFBIG => Err(err!(libc::ENOSPC, source:e, "object too big")),
            ret => ret,
        }
    }

    pub async fn fsync(&self, _ino: InodeNo, fh: u64, _datasync: bool) -> Result<(), Error> {
        self.complete_upload(fh, false, None).await
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
        self.complete_upload(fh, true, Some(pid)).await
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
