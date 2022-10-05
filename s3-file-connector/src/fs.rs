use std::collections::HashMap;
use std::ffi::OsStr;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex, RwLock};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tracing::{error, trace};

use fuser::{FileAttr, FileType, KernelConfig};
use s3_client::{ObjectClient, Prefetcher, PrefetchingGetRequest};

// FIXME Use newtype here? Will add a bunch of .into()s...
pub type Inode = u64;

pub const FUSE_ROOT_INODE: Inode = 1u64;

const DIR_PERMISSIONS: u16 = 0o755;
const FILE_PERMISSIONS: u16 = 0o644;
const UID: u32 = 501;
const GID: u32 = 20;

const ROOT_DIR_ATTR: FileAttr = FileAttr {
    ino: FUSE_ROOT_INODE,
    size: 0,
    blocks: 0,
    atime: UNIX_EPOCH, // 1970-01-01 00:00:00
    mtime: UNIX_EPOCH,
    ctime: UNIX_EPOCH,
    crtime: UNIX_EPOCH,
    kind: FileType::Directory,
    perm: DIR_PERMISSIONS,
    nlink: 2,
    uid: UID,
    gid: GID,
    rdev: 0,
    flags: 0,
    blksize: 512,
};

#[derive(Clone, Debug)]
struct InodeInfo {
    name: String,
    parent: Inode,
    mtime: SystemTime,
    kind: FileType,
    size: u64,
}

impl InodeInfo {
    fn new(name: String, parent: Inode, mtime: SystemTime, kind: FileType, size: u64) -> Self {
        Self {
            name,
            parent,
            mtime,
            kind,
            size,
        }
    }
}

const BLOCK_SIZE: u64 = 4096;

#[derive(Clone, Debug)]
struct DirHandle {
    ino: Inode,
    prefix: String,
    // offset is 0 before the first readdir call, and always positive afterwards (since
    // every directory always reports at least two children)
    offset: usize,
    continuation_token: Option<String>,
}

#[derive(Debug)]
struct FileHandle<Client: ObjectClient> {
    #[allow(unused)]
    ino: Inode,
    full_key: String,
    object_size: u64,
    request: Mutex<Option<PrefetchingGetRequest<Client>>>,
}

type DirectoryMap = Arc<RwLock<HashMap<String, Inode>>>;

pub struct S3FilesystemConfig {
    pub ttl_zero: Duration,
    pub readdir_size: usize,
}

impl Default for S3FilesystemConfig {
    fn default() -> Self {
        Self {
            ttl_zero: Duration::from_secs(0),
            readdir_size: 100,
        }
    }
}

pub struct S3Filesystem<Client: ObjectClient> {
    config: S3FilesystemConfig,
    client: Arc<Client>,
    streaming_get_manager: Prefetcher<Client>,
    bucket: String,
    prefix: String,
    next_handle: AtomicU64,
    next_inode: AtomicU64,
    inode_info: RwLock<HashMap<Inode, InodeInfo>>,
    dir_handles: RwLock<HashMap<u64, DirHandle>>,
    dir_entries: RwLock<HashMap<Inode, DirectoryMap>>,
    file_handles: RwLock<HashMap<u64, FileHandle<Client>>>,
}

impl<Client: ObjectClient + Send + Sync + 'static> S3Filesystem<Client> {
    pub fn new(
        client: Client,
        bucket: &str,
        prefix: &str,
        config: S3FilesystemConfig,
        throughput_target_gbps: f64,
    ) -> Self {
        // TODO is this required?
        assert!(
            prefix.is_empty() || prefix.ends_with('/'),
            "prefix must be empty or end with `/`"
        );

        let mut inode_info = HashMap::new();
        inode_info.insert(
            FUSE_ROOT_INODE,
            InodeInfo::new(
                "".into(),
                FUSE_ROOT_INODE,
                UNIX_EPOCH,
                FileType::Directory,
                1u64, // FIXME
            ),
        );

        let root_entries = HashMap::new();

        let mut dir_entries = HashMap::new();
        dir_entries.insert(FUSE_ROOT_INODE, Arc::new(RwLock::new(root_entries)));

        let client = Arc::new(client);

        let streaming_get_manager = Prefetcher::new(client.clone(), throughput_target_gbps);

        Self {
            config,
            client,
            streaming_get_manager,
            bucket: bucket.to_string(),
            prefix: prefix.to_string(),
            next_handle: AtomicU64::new(1),
            next_inode: AtomicU64::new(FUSE_ROOT_INODE + 1), // next Inode to allocate
            inode_info: RwLock::new(inode_info),
            dir_handles: RwLock::new(HashMap::new()),
            dir_entries: RwLock::new(dir_entries),
            file_handles: RwLock::new(HashMap::new()),
        }
    }

    fn path_from_root(&self, mut ino: Inode, dir: bool) -> Option<String> {
        if ino == FUSE_ROOT_INODE {
            Some(self.prefix.clone())
        } else {
            let inode_info = self.inode_info.read().unwrap();
            let mut path = if dir { vec!["".into()] } else { vec![] }; // because we want the path to end in a /
            while ino != FUSE_ROOT_INODE {
                // FIXME Check that only the first one can return None?
                let info = inode_info.get(&ino)?;
                path.push(info.name.clone());
                ino = info.parent;
            }
            drop(inode_info);
            path.reverse();
            let path = path.join("/");
            Some(format!("{}{}", self.prefix, path))
        }
    }

    fn try_open(&self, ino: Inode) -> Option<u64> {
        let inode_info = self.inode_info.read().unwrap();
        let inode = inode_info.get(&ino)?;
        if inode.kind != FileType::RegularFile {
            return None;
        }
        let size = inode.size;
        // TODO refactor inode_info so we don't have to drop this lock
        drop(inode_info);
        let full_path = self.path_from_root(ino, false)?;
        // TODO separate dir and file handles?
        let fh = self.next_handle();
        let mut file_handles = self.file_handles.write().unwrap();
        file_handles.insert(
            fh,
            FileHandle {
                ino,
                full_key: full_path,
                object_size: size,
                request: Mutex::new(None),
            },
        );
        Some(fh)
    }

    fn next_inode(&self) -> u64 {
        // FIXME
        self.next_inode.fetch_add(1, Ordering::SeqCst)
    }

    fn next_handle(&self) -> u64 {
        // FIXME
        self.next_handle.fetch_add(1, Ordering::SeqCst)
    }
}

fn make_attr(ino: Inode, inode_info: &InodeInfo) -> FileAttr {
    let (perm, nlink, blksize) = match inode_info.kind {
        FileType::RegularFile => (FILE_PERMISSIONS, 1, BLOCK_SIZE as u32),
        FileType::Directory => (DIR_PERMISSIONS, 2, 512),
        _ => unreachable!(),
    };
    FileAttr {
        ino,
        size: inode_info.size,
        blocks: inode_info.size / BLOCK_SIZE,
        atime: UNIX_EPOCH,
        mtime: inode_info.mtime,
        ctime: UNIX_EPOCH,
        crtime: UNIX_EPOCH,
        kind: inode_info.kind,
        perm,
        nlink,
        uid: UID,
        gid: GID,
        rdev: 0,
        flags: 0,
        blksize,
    }
}

/// Reply to a `lookup` call
pub struct Entry {
    pub ttl: Duration,
    pub attr: FileAttr,
    pub generation: u64,
}

/// Reply to a `getattr` call
pub struct Attr {
    pub ttl: Duration,
    pub attr: FileAttr,
}

/// Reply to a `open` or `opendir` call
pub struct Opened {
    pub fh: u64,
    pub flags: u32,
}

/// Reply to a `readdir` call
pub trait DirectoryReplier {
    /// Add a new dentry to the reply, and return whether there was space for it.
    fn add<T: AsRef<OsStr>>(&mut self, ino: u64, offset: i64, kind: FileType, name: T) -> bool;
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

impl<Client: ObjectClient + Send + Sync + 'static> S3Filesystem<Client> {
    pub async fn init(&self, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        let _ = config.set_max_readahead(0);
        Ok(())
    }

    pub async fn lookup(&self, parent: Inode, name: &OsStr) -> Result<Entry, libc::c_int> {
        trace!("fs:lookup with parent {:?} name {:?}", parent, name);

        let dir_entries = {
            let dir_entries = self.dir_entries.read().unwrap();
            if let Some(entries) = dir_entries.get(&parent) {
                Arc::clone(entries)
            } else {
                return Err(libc::ENOENT);
            }
        };

        // parent dir could appear be empty when we know it's a directory but haven't looked it up yet
        let ino = {
            let dir_entries = dir_entries.read().unwrap();
            dir_entries.get(name.to_str().unwrap()).copied()
        };

        // call LIST API to see if parent is really empty or not
        if ino.is_none() {
            // borrow this part from opendir
            let prefix = match self.path_from_root(parent, true) {
                Some(path) => path,
                None => {
                    return Err(libc::ENOENT);
                }
            };

            // FIXME continuation tokens and max-keys
            let result = match self.client.list_objects(&self.bucket, None, "/", 100, &prefix).await {
                Ok(result) => result,
                Err(err) => {
                    error!(?err, "ListObjectsV2 failed");
                    return Err(libc::ENOENT);
                }
            };

            // FIXME
            //   For now we're going to issue a LIST on every opendir to keep it simple and not
            //   try and cache directory entries. This means children will get allocated fresh
            //   inode numbers on each opendir.
            let mut new_map = HashMap::new();
            let mut inode_info = self.inode_info.write().unwrap();
            let mut new_inodes = Vec::new();

            for object in result.objects {
                let name = object.key;

                if name.ends_with('/') {
                    // FIXME Handle explicit directories
                    continue;
                }

                // FIXME This doesn't handle keys with trailing or consecutive slashes.
                let name = name.split('/').last().unwrap().to_owned();

                // FIXME Fix S3Client's list_objects_v2 to also return object mtime
                // FIXME and return that here
                let mtime = UNIX_EPOCH;
                let info = InodeInfo::new(name.clone(), parent, mtime, FileType::RegularFile, object.size);
                let ino = self.next_inode();
                inode_info.insert(ino, info);
                new_inodes.push(ino);

                new_map.insert(name, ino);
            }

            let mut dir_entries = self.dir_entries.write().unwrap();
            for dir in result.common_prefixes {
                let mut name = dir;

                assert_eq!(name.pop(), Some('/'));

                // FIXME This doesn't handle keys with trailing or consecutive slashes.
                let name = name.split('/').last().unwrap().to_owned();

                // FIXME Fix S3Client's list_objects_v2 to also return object mtime
                // FIXME and return that here
                let mtime = UNIX_EPOCH;
                let info = InodeInfo::new(name.clone(), parent, mtime, FileType::Directory, 1);
                let ino = self.next_inode();
                inode_info.insert(ino, info);
                new_inodes.push(ino);

                new_map.insert(name, ino);

                // add an empty dir_entry for every directory found
                // the values will be updated when someone try to lookup its children
                dir_entries.insert(ino, Arc::new(RwLock::new(HashMap::new())));
            }

            drop(inode_info);
            let _old_map = dir_entries.insert(parent, Arc::new(RwLock::new(new_map)));
        }

        let dir_entries = {
            let dir_entries = self.dir_entries.read().unwrap();
            if let Some(entries) = dir_entries.get(&parent) {
                Arc::clone(entries)
            } else {
                return Err(libc::ENOENT);
            }
        };

        let ino = {
            let dir_entries = dir_entries.read().unwrap();
            match dir_entries.get(name.to_str().unwrap()) {
                Some(ino) => *ino,
                None => {
                    return Err(libc::ENOENT);
                }
            }
        };

        let inode_info = self.inode_info.read().unwrap();
        let info = inode_info.get(&ino).unwrap();

        Ok(Entry {
            ttl: self.config.ttl_zero,
            attr: make_attr(ino, info),
            generation: 0,
        })
    }

    pub async fn getattr(&self, ino: Inode) -> Result<Attr, libc::c_int> {
        trace!("fs:getattr with ino {:?}", ino);

        if ino == FUSE_ROOT_INODE {
            return Ok(Attr {
                ttl: self.config.ttl_zero,
                attr: ROOT_DIR_ATTR,
            });
        }

        match self.inode_info.read().unwrap().get(&ino) {
            Some(inode_info) => Ok(Attr {
                ttl: self.config.ttl_zero,
                attr: make_attr(ino, inode_info),
            }),
            None => Err(libc::ENOENT),
        }
    }

    pub async fn open(&self, ino: Inode, _flags: i32) -> Result<Opened, libc::c_int> {
        trace!("fs:open with ino {:?} flags {:?}", ino, _flags);

        if let Some(fh) = self.try_open(ino) {
            Ok(Opened { fh, flags: 0 })
        } else {
            Err(libc::ENOENT)
        }
    }

    #[allow(clippy::too_many_arguments)]
    pub async fn read<R: ReadReplier>(
        &self,
        ino: Inode,
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
        if let Some(handle) = file_handles.get(&fh) {
            let mut request = handle.request.lock().unwrap();
            if request.is_none() {
                *request = Some(
                    self.streaming_get_manager
                        .get(&self.bucket, &handle.full_key, handle.object_size),
                );
            }
            let body = request.as_mut().unwrap().read(offset as u64, size as usize);
            reply.data(&body)
        } else {
            reply.error(libc::ENOENT)
        }
    }

    pub async fn opendir(&self, parent: Inode, _flags: i32) -> Result<Opened, libc::c_int> {
        trace!("fs:opendir with parent {:?} flags {:?}", parent, _flags);

        let prefix = match self.path_from_root(parent, true) {
            Some(path) => path,
            None => {
                return Err(libc::ENOENT);
            }
        };

        // Allocate a handle
        let fh = self.next_handle();
        let handle = DirHandle {
            prefix,
            offset: 0,
            continuation_token: None,
            ino: parent,
        };

        let mut dir_handles = self.dir_handles.write().unwrap();
        dir_handles.insert(fh, handle);
        Ok(Opened { fh, flags: 0 })
    }

    pub async fn readdir<R: DirectoryReplier>(
        &self,
        parent: Inode,
        fh: u64,
        offset: i64,
        mut reply: R,
    ) -> Result<R, libc::c_int> {
        trace!("fs:readdir with ino {:?} fh {:?} offset {:?}", parent, fh, offset);

        let mut handle = {
            let dir_handles = self.dir_handles.read().unwrap();
            match dir_handles.get(&fh) {
                Some(handle) => handle.clone(),
                None => {
                    return Err(libc::EBADF);
                }
            }
        };

        assert_eq!(offset as usize, handle.offset);

        // We are done if this is not the first readdir call (offset == 0) and the last list_v2
        // call returned an empty continuation token
        if handle.offset > 0 && handle.continuation_token.is_none() {
            return Ok(reply);
        }

        let result = match self
            .client
            .list_objects(
                &self.bucket,
                handle.continuation_token.as_deref(),
                "/",
                self.config.readdir_size,
                &handle.prefix,
            )
            .await
        {
            Ok(result) => result,
            Err(err) => {
                error!(?err, "ListObjectsV2 failed");
                return Err(libc::EIO);
            }
        };

        // FIXME
        //   For now we're going to issue a LIST on every opendir/readdir sequence and not
        //   try and cache directory entries. This means children will get allocated fresh
        //   inode numbers on each opendir.
        let mut new_map = HashMap::new();
        let mut inode_info = self.inode_info.write().unwrap();
        let mut new_inodes = Vec::new();

        // If this is the first call after opendir (handle.offset is None), add entries for "." and ".."
        if handle.offset == 0 {
            let _ = reply.add(handle.ino, 1, FileType::Directory, ".");

            match inode_info.get(&handle.ino) {
                Some(inode) => {
                    let _ = reply.add(inode.parent, 2, FileType::Directory, "..");
                }
                None => {
                    error!(ino = handle.ino, "readdir for non-existent inode");
                    return Err(libc::EBADF);
                }
            }

            handle.offset = 2;
        }

        for object in result.objects {
            let name = object.key;

            if name.ends_with('/') {
                // FIXME Handle explicit directories
                continue;
            }

            // FIXME This doesn't handle keys with trailing or consecutive slashes.
            let name = name.split('/').last().unwrap().to_owned();

            // FIXME Fix S3Client's list_objects_v2 to also return object mtime
            // FIXME and return that here
            let mtime = UNIX_EPOCH;
            let info = InodeInfo::new(name.clone(), parent, mtime, FileType::RegularFile, object.size);
            let ino = self.next_inode();
            inode_info.insert(ino, info);
            new_inodes.push(ino);

            new_map.insert(name, ino);
        }

        for dir in result.common_prefixes {
            let mut name = dir;

            assert_eq!(name.pop(), Some('/'));

            // FIXME This doesn't handle keys with trailing or consecutive slashes.
            let name = name.split('/').last().unwrap().to_owned();

            // FIXME Fix S3Client's list_objects_v2 to also return object mtime
            // FIXME and return that here
            let mtime = UNIX_EPOCH;
            let info = InodeInfo::new(name.clone(), parent, mtime, FileType::Directory, 1);
            let ino = self.next_inode();
            inode_info.insert(ino, info);
            new_inodes.push(ino);

            new_map.insert(name, ino);
        }

        drop(inode_info);

        let mut dir_entries = self.dir_entries.write().unwrap();
        let _ = dir_entries.insert(parent, Arc::new(RwLock::new(new_map)));
        drop(dir_entries);

        let inode_info = self.inode_info.read().unwrap();
        for ino in new_inodes.iter() {
            // i + 1 means the index of the next entry
            let inode_info = inode_info.get(ino).unwrap();
            // TODO handle reply being full
            handle.offset += 1;
            let _ = reply.add(*ino, handle.offset as i64, inode_info.kind, inode_info.name.clone());
        }
        handle.continuation_token = result.next_continuation_token;

        let mut dir_handles = self.dir_handles.write().unwrap();
        dir_handles.insert(fh, handle);

        Ok(reply)
    }

    pub async fn release(
        &self,
        _ino: u64,
        fh: u64,
        _flags: i32,
        _lock_owner: Option<u64>,
        _flush: bool,
    ) -> Result<(), libc::c_int> {
        // TODO how do we cancel an inflight StreamingGetRequest?
        let mut file_handles = self.file_handles.write().unwrap();
        let existed = file_handles.remove(&fh).is_some();
        assert!(existed, "releasing a file handle that doesn't exist?");
        Ok(())
    }
}
