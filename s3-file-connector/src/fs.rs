use futures::task::Spawn;
use nix::unistd::{getgid, getuid};
use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::os::unix::prelude::OsStrExt;
use std::time::{Duration, UNIX_EPOCH};
use tracing::{debug, error, trace};

use fuser::{FileAttr, KernelConfig};
use s3_client::{ObjectClient, PutObjectParams};

use crate::inode::{Inode, InodeError, InodeKind, LookedUp, ReaddirHandle, Superblock};
use crate::prefetch::{PrefetchGetObject, PrefetchReadError, Prefetcher};
use crate::sync::atomic::{AtomicI64, AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

pub use crate::inode::InodeNo;

pub const FUSE_ROOT_INODE: InodeNo = 1u64;

const BLOCK_SIZE: u64 = 4096;

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
    full_key: OsString,
    object_size: u64,
    typ: FileHandleType<Client, Runtime>,
}

#[derive(Debug)]
enum FileHandleType<Client: ObjectClient, Runtime> {
    Read {
        request: Mutex<Option<PrefetchGetObject<Client, Runtime>>>,
    },
    Write {
        parts: Mutex<Vec<Box<[u8]>>>,
    },
}

#[derive(Debug)]
pub struct S3FilesystemConfig {
    /// Stat time to live in kernel cache
    pub stat_ttl: Duration,
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
}

impl Default for S3FilesystemConfig {
    fn default() -> Self {
        let uid = getuid().into();
        let gid = getgid().into();
        Self {
            // We'd like to use 0 here but FUSE behaves badly when the TTL is exactly 0 -- it
            // repeatedly `lookup`s the same inode within the same `readdir` request. So we apply a
            // very small TTL, enough to debounce the FUSE requests while being much much smaller
            // than S3 ListObjects latency.
            stat_ttl: Duration::from_millis(1),
            readdir_size: 100,
            uid,
            gid,
            dir_mode: 0o755,
            file_mode: 0o644,
        }
    }
}

#[derive(Debug)]
pub struct S3Filesystem<Client: ObjectClient, Runtime> {
    config: S3FilesystemConfig,
    client: Arc<Client>,
    superblock: Superblock,
    prefetcher: Prefetcher<Client, Runtime>,
    bucket: String,
    #[allow(unused)]
    prefix: String,
    next_handle: AtomicU64,
    dir_handles: RwLock<HashMap<u64, Arc<DirHandle>>>,
    file_handles: RwLock<HashMap<u64, FileHandle<Client, Runtime>>>,
}

impl<Client, Runtime> S3Filesystem<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync,
{
    pub fn new(client: Client, runtime: Runtime, bucket: &str, prefix: &str, config: S3FilesystemConfig) -> Self {
        // TODO is this required?
        assert!(
            prefix.is_empty() || prefix.ends_with('/'),
            "prefix must be empty or end with `/`"
        );

        let superblock = Superblock::new(bucket.to_string(), OsString::from(prefix));

        let client = Arc::new(client);

        let prefetcher = Prefetcher::new(client.clone(), runtime, Default::default());

        Self {
            config,
            client,
            superblock,
            prefetcher,
            bucket: bucket.to_string(),
            prefix: prefix.to_string(),
            next_handle: AtomicU64::new(1),
            dir_handles: RwLock::new(HashMap::new()),
            file_handles: RwLock::new(HashMap::new()),
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
    /// Add a new dentry to the reply. Returns true if the buffer was full.
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
    fn error(self, error: libc::c_int) -> Self::Replied;
}

impl<Client, Runtime> S3Filesystem<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync,
{
    pub async fn init(&self, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        let _ = config.set_max_readahead(0);
        let _ = config.add_capabilities(fuser::consts::FUSE_DO_READDIRPLUS);
        Ok(())
    }

    fn make_attr(&self, lookup: &LookedUp) -> FileAttr {
        let (perm, nlink, blksize) = match lookup.inode.kind() {
            InodeKind::File => (self.config.file_mode, 1, BLOCK_SIZE as u32),
            InodeKind::Directory => (self.config.dir_mode, 2, 512),
        };

        FileAttr {
            ino: lookup.inode.ino(),
            size: lookup.stat.size as u64,
            blocks: lookup.stat.size as u64 / BLOCK_SIZE,
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
            blksize,
        }
    }

    pub async fn lookup(&self, parent: InodeNo, name: &OsStr) -> Result<Entry, libc::c_int> {
        trace!("fs:lookup with parent {:?} name {:?}", parent, name);

        let lookup = self.superblock.lookup(&self.client, parent, name).await?;
        let attr = self.make_attr(&lookup);

        Ok(Entry {
            ttl: self.config.stat_ttl,
            attr,
            generation: 0,
        })
    }

    pub async fn getattr(&self, ino: InodeNo) -> Result<Attr, libc::c_int> {
        trace!("fs:getattr with ino {:?}", ino);

        let lookup = self.superblock.getattr(&self.client, ino).await?;
        let attr = self.make_attr(&lookup);

        Ok(Attr {
            ttl: self.config.stat_ttl,
            attr,
        })
    }

    pub async fn open(&self, ino: InodeNo, flags: i32) -> Result<Opened, libc::c_int> {
        trace!("fs:open with ino {:?} flags {:?}", ino, flags);

        let lookup = self.superblock.getattr(&self.client, ino).await?;

        match lookup.inode.kind() {
            InodeKind::Directory => return Err(libc::EISDIR),
            InodeKind::File => (),
        }

        let handle_type = if flags & libc::O_RDWR != 0 {
            error!("O_RDWR is unsupported");
            return Err(libc::EINVAL);
        } else if flags & libc::O_WRONLY != 0 {
            // We can't support O_SYNC writes because they require the data to go to stable storage
            // at `write` time, but we only commit a PUT at `close` time.
            if flags & (libc::O_SYNC | libc::O_DSYNC) != 0 {
                error!("O_SYNC and O_DSYNC are unsupported");
                return Err(libc::EINVAL);
            }

            lookup.inode.start_writing()?;
            FileHandleType::Write {
                parts: Default::default(),
            }
        } else {
            lookup.inode.start_reading()?;
            FileHandleType::Read {
                request: Default::default(),
            }
        };

        let full_key = lookup.inode.full_key().to_owned();

        let fh = self.next_handle();
        let handle = FileHandle {
            inode: lookup.inode,
            full_key,
            object_size: lookup.stat.size as u64,
            typ: handle_type,
        };
        self.file_handles.write().unwrap().insert(fh, handle);

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

        let file_handles = self.file_handles.read().unwrap();
        let Some(handle) = file_handles.get(&fh) else {
            return reply.error(libc::EBADF);
        };
        let mut request = match &handle.typ {
            FileHandleType::Write { .. } => return reply.error(libc::EBADF),
            FileHandleType::Read { request } => request.lock().unwrap(),
        };

        if request.is_none() {
            let key = std::str::from_utf8(handle.full_key.as_bytes()).unwrap();
            *request = Some(self.prefetcher.get(&self.bucket, key, handle.object_size));
        }

        match request.as_mut().unwrap().read(offset as u64, size as usize) {
            Ok(body) => reply.data(&body),
            Err(PrefetchReadError::TimedOut) => reply.error(libc::ETIMEDOUT),
            Err(PrefetchReadError::GetRequestFailed(_)) => reply.error(libc::EIO),
        }
    }

    pub async fn mknod(
        &self,
        parent: InodeNo,
        name: &OsStr,
        mode: libc::mode_t,
        _umask: u32,
        _rdev: u32,
    ) -> Result<Entry, libc::c_int> {
        if mode & libc::S_IFMT != libc::S_IFREG {
            error!(
                ?parent,
                ?name,
                "invalid mknod type {}; only regular files are supported",
                mode & libc::S_IFMT
            );
            return Err(libc::EINVAL);
        }

        let lookup = self.superblock.create(&self.client, parent, name).await?;
        let attr = self.make_attr(&lookup);

        Ok(Entry {
            ttl: self.config.stat_ttl,
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
    ) -> Result<u32, libc::c_int> {
        const MAX_OBJECT_SIZE: usize = 5 * 1024 * 1024 * 1024;

        trace!(
            "fs:write with ino {:?} fh {:?} offset {:?} size {:?}",
            ino,
            fh,
            offset,
            data.len()
        );

        let file_handles = self.file_handles.read().unwrap();
        let Some(handle) = file_handles.get(&fh) else {
            return Err(libc::EBADF);
        };
        let mut request = match &handle.typ {
            FileHandleType::Write { parts } => parts.lock().unwrap(),
            FileHandleType::Read { .. } => return Err(libc::EBADF),
        };

        let next_offset = request.iter().map(|p| p.len()).sum::<usize>();
        if offset != next_offset as i64 {
            error!("out of order write; expected offset {next_offset} but got {offset}");
            return Err(libc::EINVAL);
        }

        // If we'd go over the size limit, fail the entire write rather than short-writing
        if next_offset + data.len() > MAX_OBJECT_SIZE {
            error!("object too large");
            return Err(libc::EFBIG);
        }

        let len = data.len();
        // TODO wrap this in the `Part` machinery and validate it on PUT (and checksum)
        request.push(data.into());
        Ok(len as u32)
    }

    pub async fn opendir(&self, parent: InodeNo, _flags: i32) -> Result<Opened, libc::c_int> {
        trace!("fs:opendir with parent {:?} flags {:?}", parent, _flags);

        let inode_handle = self.superblock.readdir(&self.client, parent, 1000).await?;

        let fh = self.next_handle();
        let handle = DirHandle {
            ino: parent,
            handle: inode_handle,
            offset: AtomicI64::new(0),
        };

        let mut dir_handles = self.dir_handles.write().unwrap();
        dir_handles.insert(fh, Arc::new(handle));

        Ok(Opened { fh, flags: 0 })
    }

    pub async fn readdir<R: DirectoryReplier>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        mut reply: R,
    ) -> Result<R, libc::c_int> {
        trace!("fs:readdir with ino {:?} fh {:?} offset {:?}", parent, fh, offset);

        let handle = {
            let dir_handles = self.dir_handles.read().unwrap();
            dir_handles.get(&fh).cloned().ok_or(libc::EBADF)?
        };

        if offset != handle.offset() {
            error!(
                expected = handle.offset(),
                actual = offset,
                "fs:readdir: offset mismatch"
            );
            return Err(libc::EINVAL);
        }

        if handle.offset() < 1 {
            // TODO these can probably just be bare `get`, we don't care about directory stat
            let lookup = self.superblock.getattr(&self.client, parent).await?;
            let attr = self.make_attr(&lookup);
            if reply.add(parent, handle.offset() + 1, ".", attr, 0u64, self.config.stat_ttl) {
                return Ok(reply);
            }
            handle.next_offset();
        }
        if handle.offset() < 2 {
            let lookup = self.superblock.getattr(&self.client, handle.handle.parent()).await?;
            let attr = self.make_attr(&lookup);
            if reply.add(
                handle.handle.parent(),
                handle.offset() + 1,
                "..",
                attr,
                0u64,
                self.config.stat_ttl,
            ) {
                return Ok(reply);
            }
            handle.next_offset();
        }

        loop {
            let next = match handle.handle.next(&self.client).await? {
                None => return Ok(reply),
                Some(next) => next,
            };

            let attr = self.make_attr(&next);
            if reply.add(
                attr.ino,
                handle.offset() + 1,
                next.inode.name(),
                attr,
                0u64,
                self.config.stat_ttl,
            ) {
                handle.handle.readd(next);
                return Ok(reply);
            }
            handle.next_offset();
        }
    }

    pub async fn release(
        &self,
        _ino: InodeNo,
        fh: u64,
        _flags: i32,
        _lock_owner: Option<u64>,
        _flush: bool,
    ) -> Result<(), libc::c_int> {
        let handle = {
            let mut file_handles = self.file_handles.write().unwrap();
            file_handles.remove(&fh).ok_or(libc::EBADF)?
        };

        match handle.typ {
            FileHandleType::Write { parts } => {
                // TODO how do we make sure we didn't already handle this via `flush`?
                let parts = parts.into_inner().unwrap();
                let size = parts.iter().map(|part| part.len()).sum::<usize>();
                let stream = futures::stream::iter(parts);
                let Ok(key) = std::str::from_utf8(handle.full_key.as_bytes()) else {
                    error!("invalid utf8 key {:?}", handle.full_key);
                    return Err(libc::EINVAL);
                };

                let put = self
                    .client
                    .put_object(&self.bucket, key, &PutObjectParams::default(), stream)
                    .await;
                let result = match put {
                    Ok(_result) => {
                        debug!(key, size, "put succeeded");
                        Ok(())
                    }
                    Err(e) => {
                        error!(key, size, "put failed, object was not uploaded: {e:?}");
                        // This won't actually be seen by the user because `release` is async, but
                        // it's the right thing to do.
                        Err(libc::EIO)
                    }
                };

                handle.inode.finish_writing(size)?;

                result
            }
            FileHandleType::Read { request: _ } => {
                // TODO make sure we cancel the inflight PrefetchingGetRequest. is just dropping enough?
                handle.inode.finish_reading()?;
                Ok(())
            }
        }
    }
}

impl From<InodeError> for i32 {
    fn from(err: InodeError) -> Self {
        match err {
            InodeError::ClientError(_) => libc::EIO,
            InodeError::FileDoesNotExist => libc::ENOENT,
            InodeError::InodeDoesNotExist(_) => libc::ENOENT,
            InodeError::InvalidFileName(_) => libc::EINVAL,
            InodeError::NotADirectory(_) => libc::ENOTDIR,
            InodeError::ShadowedByDirectory(_, _) => libc::ENOENT,
            InodeError::FileAlreadyExists(_) => libc::EEXIST,
            // Not obvious what these two cases should be -- EINVAL would also be reasonable, or
            // EROFS for not-writable -- but we'll treat it like a sealed file
            InodeError::InodeNotWritable(_) => libc::EPERM,
            InodeError::InodeNotReadableWhileWriting(_) => libc::EPERM,
        }
    }
}
