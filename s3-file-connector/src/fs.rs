use async_trait::async_trait;
use std::collections::HashMap;
use std::ffi::OsStr;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex, RwLock};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tracing::{error, trace};

use fuser::{
    FileAttr, FileType, Filesystem, KernelConfig, ReplyAttr, ReplyData, ReplyDirectory, ReplyEmpty, ReplyEntry,
    ReplyOpen, Request,
};
use s3_client::{ObjectClient, StreamingGetManager, StreamingGetObject};

// FIXME Use newtype here? Will add a bunch of .into()s...
type Inode = u64;

const ROOT_INODE: Inode = 1u64;
const DIR_PERMISSIONS: u16 = 0o755;
const FILE_PERMISSIONS: u16 = 0o644;
const UID: u32 = 501;
const GID: u32 = 20;

const TTL_ZERO: Duration = Duration::from_secs(0);

const ROOT_DIR_ATTR: FileAttr = FileAttr {
    ino: ROOT_INODE,
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
    children: Vec<Inode>,
}

#[derive(Debug)]
struct FileHandle<Client: ObjectClient> {
    #[allow(unused)]
    ino: Inode,
    full_key: String,
    object_size: u64,
    request: Mutex<Option<StreamingGetObject<Client>>>,
}

type DirectoryMap = Arc<RwLock<HashMap<String, Inode>>>;

pub struct S3Filesystem<Client: ObjectClient> {
    client: Arc<Client>,
    streaming_get_manager: StreamingGetManager<Client>,
    bucket: String,
    next_handle: AtomicU64,
    next_inode: AtomicU64,
    inode_info: RwLock<HashMap<Inode, InodeInfo>>,
    dir_handles: RwLock<HashMap<u64, DirHandle>>,
    dir_entries: RwLock<HashMap<Inode, DirectoryMap>>,
    file_handles: RwLock<HashMap<u64, FileHandle<Client>>>,
}

impl<Client: ObjectClient + Send + Sync + 'static> S3Filesystem<Client> {
    pub fn new(client: Client, bucket: &str, throughput_target_gbps: f64) -> Self {
        let mut inode_info = HashMap::new();
        inode_info.insert(
            ROOT_INODE,
            InodeInfo::new(
                "".into(),
                ROOT_INODE,
                UNIX_EPOCH,
                FileType::Directory,
                1u64, // FIXME
            ),
        );

        let mut root_entries = HashMap::new();
        root_entries.insert(".".into(), ROOT_INODE);
        root_entries.insert("..".into(), ROOT_INODE);

        let mut dir_entries = HashMap::new();
        dir_entries.insert(ROOT_INODE, Arc::new(RwLock::new(root_entries)));

        let client = Arc::new(client);

        let streaming_get_manager = StreamingGetManager::new(client.clone(), throughput_target_gbps);

        Self {
            client,
            streaming_get_manager,
            bucket: bucket.to_string(),
            next_handle: AtomicU64::new(1),
            next_inode: AtomicU64::new(ROOT_INODE + 1), // next Inode to allocate
            inode_info: RwLock::new(inode_info),
            dir_handles: RwLock::new(HashMap::new()),
            dir_entries: RwLock::new(dir_entries),
            file_handles: RwLock::new(HashMap::new()),
        }
    }

    fn path_from_root(&self, mut ino: Inode, dir: bool) -> Option<String> {
        if ino == ROOT_INODE {
            Some("".into())
        } else {
            let inode_info = self.inode_info.read().unwrap();
            let mut path = if dir { vec!["".into()] } else { vec![] }; // because we want the path to end in a /
            while ino != ROOT_INODE {
                // FIXME Check that only the first one can return None?
                let info = inode_info.get(&ino)?;
                path.push(info.name.clone());
                ino = info.parent;
            }
            drop(inode_info);
            path.reverse();
            Some(path.join("/"))
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

#[async_trait]
impl<Client: ObjectClient + Send + Sync + 'static> Filesystem for S3Filesystem<Client> {
    async fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        let _ = config.set_max_readahead(0);
        Ok(())
    }

    async fn lookup(&self, _req: &Request<'_>, parent: Inode, name: &OsStr, reply: ReplyEntry) {
        trace!("fs:lookup with parent {:?} name {:?}", parent, name);

        let dir_entries = {
            let dir_entries = self.dir_entries.read().unwrap();
            if let Some(entries) = dir_entries.get(&parent) {
                Arc::clone(entries)
            } else {
                reply.error(libc::ENOENT);
                return;
            }
        };

        let ino = {
            let dir_entries = dir_entries.read().unwrap();
            match dir_entries.get(name.to_str().unwrap()) {
                Some(ino) => *ino,
                None => {
                    reply.error(libc::ENOENT);
                    return;
                }
            }
        };

        let inode_info = self.inode_info.read().unwrap();
        let info = inode_info.get(&ino).unwrap();
        reply.entry(&TTL_ZERO, &make_attr(ino, info), 0);
    }

    async fn getattr(&self, _req: &Request<'_>, ino: Inode, reply: ReplyAttr) {
        trace!("fs:getattr with ino {:?}", ino);

        if ino == ROOT_INODE {
            reply.attr(&TTL_ZERO, &ROOT_DIR_ATTR);
            return;
        }

        match self.inode_info.read().unwrap().get(&ino) {
            Some(inode_info) => reply.attr(&TTL_ZERO, &make_attr(ino, inode_info)),
            None => reply.error(libc::ENOENT),
        }
    }

    async fn open(&self, _req: &Request<'_>, ino: Inode, _flags: i32, reply: ReplyOpen) {
        trace!("fs:open with ino {:?} flags {:?}", ino, _flags);

        if let Some(fh) = self.try_open(ino) {
            reply.opened(fh, 0);
        } else {
            reply.error(libc::ENOENT);
        }
    }

    async fn read(
        &self,
        _req: &Request<'_>,
        ino: Inode,
        fh: u64,
        offset: i64,
        size: u32,
        _flags: i32,
        _lock: Option<u64>,
        reply: ReplyData,
    ) {
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
            reply.data(&body);
        } else {
            reply.error(libc::ENOENT);
        }
    }

    async fn opendir(&self, _req: &Request<'_>, parent: Inode, _flags: i32, reply: ReplyOpen) {
        trace!("fs:opendir with parent {:?} flags {:?}", parent, _flags);

        let prefix = match self.path_from_root(parent, true) {
            Some(path) => path,
            None => {
                reply.error(libc::ENOENT);
                return;
            }
        };

        // FIXME continuation tokens and max-keys
        let result = match self.client.list_objects(&self.bucket, None, "/", 100, &prefix).await {
            Ok(result) => result,
            Err(err) => {
                error!(?err, "ListObjectsV2 failed");
                reply.error(libc::EIO);
                return;
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
        let _old_map = dir_entries.insert(parent, Arc::new(RwLock::new(new_map)));
        drop(dir_entries);

        // FIXME We could garbage collect old inodes from the inode table as below
        //  but that would break any concurrent filesystem calls that were accessing the previous inode
        /*
        if let Some(old_map) = old_map {
            let mut inode_info = self.inode_info.write().unwrap();
            for (_, ino) in old_map.write().unwrap().drain() {
                if ino != ROOT_INODE { // Because / has entries for . and ..
                    assert!(inode_info.remove(&ino).is_some());
                }
            }
        }
        */

        // Allocate a handle
        let fh = self.next_handle();
        let handle = DirHandle { children: new_inodes };

        let mut dir_handles = self.dir_handles.write().unwrap();
        dir_handles.insert(fh, handle);
        reply.opened(fh, 0);
    }

    async fn readdir(&self, _req: &Request<'_>, ino: Inode, fh: u64, offset: i64, mut reply: ReplyDirectory) {
        trace!("fs:readdir with ino {:?} fh {:?} offset {:?}", ino, fh, offset);

        let dir_handles = self.dir_handles.read().unwrap();
        let handle = match dir_handles.get(&fh) {
            Some(handle) => handle.clone(),
            None => {
                reply.error(libc::EBADF);
                return;
            }
        };

        if (offset as usize) >= handle.children.len() {
            reply.ok();
            return;
        }

        let inode_info = self.inode_info.read().unwrap();
        for (i, ino) in handle.children.iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            let inode_info = inode_info.get(ino).unwrap();
            // TODO handle reply being full
            let _ = reply.add(*ino, (i + 3) as i64, inode_info.kind, inode_info.name.clone());
        }

        reply.ok();
    }

    async fn release(
        &self,
        _req: &Request<'_>,
        _ino: u64,
        fh: u64,
        _flags: i32,
        _lock_owner: Option<u64>,
        _flush: bool,
        reply: ReplyEmpty,
    ) {
        // TODO how do we cancel an inflight StreamingGetRequest?
        let mut file_handles = self.file_handles.write().unwrap();
        let existed = file_handles.remove(&fh).is_some();
        assert!(existed, "releasing a file handle that doesn't exist?");
        reply.ok();
    }
}
