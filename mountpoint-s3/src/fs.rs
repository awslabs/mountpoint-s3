//! FUSE file system types and operations, not tied to the _fuser_ library bindings.

use bytes::Bytes;
use mountpoint_s3_crt::checksums::crc32c::{Crc32c, Hasher};
use nix::unistd::{getgid, getuid};
use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::str::FromStr;
use std::time::{Duration, UNIX_EPOCH};
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{debug, error, trace, Level};

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
    handle: AsyncMutex<ReaddirHandle>,
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

    fn rewind_offset(&self) {
        self.offset.store(0, Ordering::SeqCst);
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
    state: AsyncMutex<FileHandleState<Client, Prefetcher>>,
}

enum FileHandleState<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch,
{
    /// The file handle has been assigned as a read handle
    Read(Prefetcher::PrefetchResult<Client>),
    /// The file handle has been assigned as a write handle
    Write(UploadState<Client>),
}

impl<Client, Prefetcher> std::fmt::Debug for FileHandleState<Client, Prefetcher>
where
    Client: ObjectClient + Send + Sync + 'static + std::fmt::Debug,
    Prefetcher: Prefetch,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            FileHandleState::Read(_) => f.debug_struct("Read").finish(),
            FileHandleState::Write(arg0) => f.debug_tuple("Write").field(arg0).finish(),
        }
    }
}

impl<Client, Prefetcher> FileHandleState<Client, Prefetcher>
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
    ) -> Result<FileHandleState<Client, Prefetcher>, Error> {
        let is_truncate = flags & libc::O_TRUNC != 0;
        let handle = fs
            .superblock
            .write(
                &fs.client,
                ino,
                lookup.inode.parent(),
                pid,
                fs.config.allow_overwrite,
                is_truncate,
            )
            .await
            .start_writing()?;
        let key = lookup.inode.full_key();
        let handle = match fs.uploader.put(&fs.bucket, key).await {
            Err(e) => {
                return Err(err!(libc::EIO, source:e, "put failed to start"));
            }
            Ok(request) => FileHandleState::Write(UploadState::InProgress { request, handle }),
        };
        metrics::gauge!("fs.current_handles", "type" => "write").increment(1.0);
        Ok(handle)
    }

    async fn new_read_handle(
        lookup: &LookedUp,
        fs: &S3Filesystem<Client, Prefetcher>,
    ) -> Result<FileHandleState<Client, Prefetcher>, Error> {
        if !lookup.stat.is_readable {
            return Err(err!(
                libc::EACCES,
                "objects in flexible retrieval storage classes are not accessible",
            ));
        }
        lookup.inode.start_reading()?;
        let full_key = lookup.inode.full_key().to_owned();
        let object_size = lookup.stat.size as u64;
        let etag = match &lookup.stat.etag {
            None => return Err(err!(libc::EBADF, "no E-Tag for inode {}", lookup.inode.ino())),
            Some(etag) => ETag::from_str(etag).expect("E-Tag should be set"),
        };
        let request = fs
            .prefetcher
            .prefetch(fs.client.clone(), &fs.bucket, &full_key, object_size, etag.clone());
        let handle = FileHandleState::Read(request);
        metrics::gauge!("fs.current_handles", "type" => "read").increment(1.0);
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
        let (request_size, open_pid) = match self {
            Self::InProgress { request, handle } => (request.size(), handle.pid()),
            Self::Completed => return Ok(()),
            Self::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", key)),
        };

        if ignore_if_empty && request_size == 0 {
            trace!(key, "not completing upload because file is empty");
            return Ok(());
        }
        if let Some(pid) = pid {
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
    /// Maximum number of negative entries to cache.
    pub negative_cache_size: usize,
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

        // We want the negative cache to be effective but need to limit its memory usage. This value
        // results in a maximum memory usage of ~20MB (assuming average file name length of 37 bytes)
        // and should be large enough for many workloads. The metrics in
        // `metadata_cache.negative_cache`, in particular `entries_evicted_before_expiry`, can be
        // monitored to verify if this limit needs reviewing.
        let negative_cache_size = 100_000;

        Self {
            serve_lookup_from_cache: false,
            file_ttl,
            dir_ttl,
            negative_cache_size,
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
    /// Allow overwrite
    pub allow_overwrite: bool,
    /// Storage class to be used for new object uploads
    pub storage_class: Option<String>,
    /// S3 personality (for different S3 semantics)
    pub s3_personality: S3Personality,
    /// Server side encryption configuration to be used when creating new S3 object
    pub server_side_encryption: ServerSideEncryption,
    /// Use additional checksums for uploads
    pub use_upload_checksums: bool,
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
            allow_overwrite: false,
            storage_class: None,
            s3_personality: S3Personality::Standard,
            server_side_encryption: Default::default(),
            use_upload_checksums: true,
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

/// Server-side encryption configuration for newly created objects
#[derive(Debug, Clone)]
pub struct ServerSideEncryption {
    sse_type: Option<String>,
    sse_kms_key_id: Option<String>,
    checksum: Crc32c,
}

impl Default for ServerSideEncryption {
    fn default() -> Self {
        Self {
            sse_type: Default::default(),
            sse_kms_key_id: Default::default(),
            checksum: Crc32c::new(0),
        }
    }
}

impl ServerSideEncryption {
    /// Construct SSE settings from raw values provided via CLI
    pub fn new(sse_type: Option<String>, sse_kms_key_id: Option<String>) -> Self {
        let checksum = Self::compute_checksum(sse_type.as_deref(), sse_kms_key_id.as_deref());
        Self {
            sse_type,
            sse_kms_key_id,
            checksum,
        }
    }

    /// Computes the checksum of SSE settings by combining two strings containing the type and the key
    /// Note, that this implementation yields the same result for Some("") and None, but we may safely
    /// assume that it will never be called with an empty string as one of its parameters.
    fn compute_checksum(sse_type: Option<&str>, sse_kms_key_id: Option<&str>) -> Crc32c {
        let mut hasher: Hasher = Hasher::new();
        if let Some(maybe_sse_type) = sse_type {
            hasher.update(maybe_sse_type.as_bytes());
        }
        if let Some(maybe_sse_kms_key_id) = sse_kms_key_id {
            hasher.update(maybe_sse_kms_key_id.as_bytes());
        }
        hasher.finalize()
    }

    fn validate(&self) -> Result<(), SseCorruptedError> {
        let computed = Self::compute_checksum(self.sse_type.as_deref(), self.sse_kms_key_id.as_deref());
        if computed == self.checksum {
            Ok(())
        } else {
            Err(SseCorruptedError::ChecksumMismatch(self.checksum, computed))
        }
    }

    /// Checks that SSE settings still match the checksum and returns the string representations of:
    /// 1. the SSE type as it is expected by S3 API;
    /// 2. and AWS KMS Key ID, if provided.
    pub fn into_inner(self) -> Result<(Option<String>, Option<String>), SseCorruptedError> {
        self.validate()?;
        Ok((self.sse_type, self.sse_kms_key_id))
    }

    /// Checks that values provided as arguments to this function match the values stored in the object.
    /// S3 will return some values for sse type and key even if they were not set on our side.
    /// We want to check only the values which we set.
    pub fn verify_response(
        &self,
        sse_type: Option<&str>,
        sse_kms_key_id: Option<&str>,
    ) -> Result<(), SseCorruptedError> {
        self.validate()?; // validate in-memory values, as we are using them to decide whether to skip the response check or not
        if self.sse_type.is_some() && self.sse_type.as_deref() != sse_type {
            return Err(SseCorruptedError::TypeMismatch(
                self.sse_type.as_ref().unwrap().clone(),
                sse_type.map(str::to_string),
            ));
        }
        if self.sse_kms_key_id.is_some() && self.sse_kms_key_id.as_deref() != sse_kms_key_id {
            return Err(SseCorruptedError::KeyMismatch(
                self.sse_kms_key_id.as_ref().unwrap().clone(),
                sse_kms_key_id.map(str::to_string),
            ));
        }
        Ok(())
    }

    #[cfg(test)]
    pub fn corrupt_data(&mut self, sse_type: Option<String>, sse_kms_key_id: Option<String>) {
        self.sse_type = sse_type;
        self.sse_kms_key_id = sse_kms_key_id;
    }
}

#[derive(Debug, Error)]
pub enum SseCorruptedError {
    #[error("Checksum mismatch. expected: {0:?}, actual: {1:?}")]
    ChecksumMismatch(Crc32c, Crc32c),
    #[error("SSE type mismatch. expected: {0:?}, actual: {1:?}")]
    TypeMismatch(String, Option<String>),
    #[error("SSE KMS key ID mismatch. expected: {0:?}, actual: {1:?}")]
    KeyMismatch(String, Option<String>),
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

        let uploader = Uploader::new(
            client.clone(),
            config.storage_class.to_owned(),
            config.server_side_encryption.clone(),
            config.use_upload_checksums,
        );

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

        let lookup = self
            .superblock
            .lookup(&self.client, parent, name)
            .await
            .map_err(|err| match err {
                InodeError::FileDoesNotExist(_, _) => {
                    // Lookup returning ENOENT is common case, and we dont want to warn in case `FileDoesNotExist` within ENOENT
                    err!(libc::ENOENT, source: err, Level::DEBUG, "file does not exist")
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

        let inode = lookup.inode.clone();
        let full_key = lookup.inode.full_key().to_owned();
        let remote_file = lookup.inode.is_remote()?;

        // Open with O_APPEND is ok for new files because it's same as creating a new one.
        // but we can't support it on existing files and we should explicitly say we don't allow that.
        if remote_file && (flags & libc::O_APPEND != 0) {
            return Err(err!(libc::EINVAL, "O_APPEND is not supported on existing files"));
        }

        // We can't support O_SYNC writes because they require the data to go to stable storage
        // at `write` time, but we only commit a PUT at `close` time.
        if flags & (libc::O_SYNC | libc::O_DSYNC) != 0 {
            return Err(err!(libc::EINVAL, "O_SYNC and O_DSYNC are not supported"));
        }

        let state = if flags & libc::O_RDWR != 0 {
            let is_truncate = flags & libc::O_TRUNC != 0;
            if !remote_file || (self.config.allow_overwrite && is_truncate) {
                // If the file is new or opened in truncate mode, we know it must be a write handle.
                debug!("fs:open choosing write handle for O_RDWR");
                FileHandleState::new_write_handle(&lookup, lookup.inode.ino(), flags, pid, self).await?
            } else {
                // Otherwise, it must be a read handle.
                debug!("fs:open choosing read handle for O_RDWR");
                FileHandleState::new_read_handle(&lookup, self).await?
            }
        } else if flags & libc::O_WRONLY != 0 {
            FileHandleState::new_write_handle(&lookup, lookup.inode.ino(), flags, pid, self).await?
        } else {
            FileHandleState::new_read_handle(&lookup, self).await?
        };

        let fh = self.next_handle();
        let handle = FileHandle {
            inode,
            full_key,
            state: AsyncMutex::new(state),
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
        let mut state = handle.state.lock().await;
        let request = match &mut *state {
            FileHandleState::Read(request) => request,
            FileHandleState::Write(_) => return Err(err!(libc::EBADF, "file handle is not open for reads")),
        };

        match request.read(offset as u64, size as usize).await {
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
            let mut state = handle.state.lock().await;
            let request = match &mut *state {
                FileHandleState::Read { .. } => return Err(err!(libc::EBADF, "file handle is not open for writes")),
                FileHandleState::Write(request) => request,
            };

            request.write(offset, data, &handle.full_key).await?
        };
        handle.inode.inc_file_size(len as usize);
        Ok(len)
    }

    /// Creates a new ReaddirHandle for the provided parent and default page size
    async fn readdir_handle(&self, parent: InodeNo) -> Result<ReaddirHandle, InodeError> {
        self.superblock.readdir(&self.client, parent, 1000).await
    }

    pub async fn opendir(&self, parent: InodeNo, _flags: i32) -> Result<Opened, Error> {
        trace!("fs:opendir with parent {:?} flags {:#b}", parent, _flags);

        let inode_handle = self.readdir_handle(parent).await?;

        let fh = self.next_handle();
        let handle = DirHandle {
            ino: parent,
            handle: AsyncMutex::new(inode_handle),
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

        // special case where we need to rewind and restart the streaming but only when it is not the first time we see offset 0
        if offset == 0 && dir_handle.offset() != 0 {
            let new_handle = self.readdir_handle(parent).await?;
            *dir_handle.handle.lock().await = new_handle;
            dir_handle.rewind_offset();
        }

        let readdir_handle = dir_handle.handle.lock().await;

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

    async fn complete_upload(
        &self,
        request: &mut UploadState<Client>,
        full_key: &str,
        ignore_if_empty: bool,
        pid: Option<u32>,
    ) -> Result<(), Error> {
        match request.complete(full_key, ignore_if_empty, pid).await {
            // According to the `fsync` man page we should return ENOSPC instead of EFBIG if it's a
            // space-related failure.
            Err(e) if e.to_errno() == libc::EFBIG => Err(err!(libc::ENOSPC, source:e, "object too big")),
            ret => ret,
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
        let request = match &mut *state {
            FileHandleState::Read { .. } => return Ok(()),
            FileHandleState::Write(request) => request,
        };
        self.complete_upload(request, &file_handle.full_key, false, None).await
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
            FileHandleState::Write(request) => {
                self.complete_upload(request, &file_handle.full_key, true, Some(pid))
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

        let request = match file_handle.state.into_inner() {
            FileHandleState::Read { .. } => {
                // TODO make sure we cancel the inflight PrefetchingGetRequest. is just dropping enough?
                metrics::gauge!("fs.current_handles", "type" => "read").decrement(1.0);
                file_handle.inode.finish_reading()?;
                return Ok(());
            }
            FileHandleState::Write(request) => request,
        };

        let result = request.complete_if_in_progress(&file_handle.full_key).await;
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
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::prefetch::default_prefetch;
    use fuser::FileType;
    use futures::executor::ThreadPool;
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockObject};
    use test_case::test_case;

    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kmr"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), Some("some_key_ali`s"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), None, Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), None)]
    #[test_case(Some("aws:kms"), None, Some("aws:kmr"), None)]
    #[test_case(None, None, Some("garbage"), None)]
    fn test_sse_corrupted_on_into_inner(
        sse_type: Option<&str>,
        key_id: Option<&str>,
        sse_type_corrupted: Option<&str>,
        key_id_corrupted: Option<&str>,
    ) {
        let mut sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        sse.sse_type = sse_type_corrupted.map(String::from);
        sse.sse_kms_key_id = key_id_corrupted.map(String::from);
        sse.into_inner()
            .expect_err("into_inner() should produce an error when values do no match the checksum");
    }

    #[test_case(Some("aws:kms"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), None)]
    #[test_case(None, None)]
    fn test_sse_into_inner_ok(sse_type: Option<&str>, key_id: Option<&str>) {
        let sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        let (returned_sse_type, returned_key_id) = sse
            .into_inner()
            .expect("into_inner() should return values when they match the checksum");
        assert_eq!(sse_type, returned_sse_type.as_deref());
        assert_eq!(key_id, returned_key_id.as_deref());
    }

    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kmr"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), Some("some_key_ali`s"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), None, Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), None)]
    fn test_sse_response_corrupted_on_verify_response(
        sse_type: Option<&str>,
        key_id: Option<&str>,
        sse_type_corrupted: Option<&str>,
        key_id_corrupted: Option<&str>,
    ) {
        let sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        sse.verify_response(sse_type_corrupted, key_id_corrupted)
            .expect_err("verify_response() should produce an error when response values do no match the checksum");
    }

    #[test_case(Some("aws:kms"), Some("some_key_alias"), Some("aws:kms"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), None, Some("aws:kms"), Some("some_key_alias"))]
    #[test_case(None, None, Some("aws:kms"), Some("some_key_alias"))]
    fn test_sse_verify_response_ok(
        sse_type: Option<&str>,
        key_id: Option<&str>,
        sse_type_response: Option<&str>,
        key_id_response: Option<&str>,
    ) {
        let sse = ServerSideEncryption::new(sse_type.map(String::from), key_id.map(String::from));
        sse.verify_response(sse_type_response, key_id_response)
            .expect("verify_response() should return Ok(()) when values match the checksum")
    }

    #[tokio::test]
    async fn test_open_with_corrupted_sse() {
        let bucket = "bucket";
        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            ..Default::default()
        }));
        // Create "dir1" in the client to avoid creating it locally
        client.add_object("dir1/file1.bin", MockObject::constant(0xa1, 15, ETag::for_tests()));

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = default_prefetch(runtime, Default::default());
        let server_side_encryption =
            ServerSideEncryption::new(Some("aws:kms".to_owned()), Some("some_key_alias".to_owned()));
        let fs_config = S3FilesystemConfig {
            server_side_encryption,
            ..Default::default()
        };
        let mut fs = S3Filesystem::new(client, prefetcher, bucket, &Default::default(), fs_config);

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
        fs.open(dentry.attr.ino, libc::S_IFREG as i32 | libc::O_WRONLY, 0)
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
            .open(dentry.attr.ino, libc::S_IFREG as i32 | libc::O_WRONLY, 0)
            .await
            .expect_err("open after the corruption should fail");
        assert_eq!(err.errno, libc::EIO);
        assert_eq!(format!("{}", err), "put failed to start: SSE settings corrupted: Checksum mismatch. expected: Crc32c(752912206), actual: Crc32c(1265531471)");
    }
}
