use async_trait::async_trait;
use std::collections::HashMap;
use std::ffi::OsStr;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex, RwLock};
use std::time::{Duration, UNIX_EPOCH};

use fuser::{
    FileAttr, FileType, Filesystem, KernelConfig, ReplyAttr, ReplyData, ReplyDirectory, ReplyEntry, ReplyOpen, Request,
};
use s3_client::{S3Client, StreamingGetObject};

const ROOT_INODE: u64 = 1;
const FILE_INODE: u64 = 2;

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
    perm: 0o755,
    nlink: 2,
    uid: 501,
    gid: 20,
    rdev: 0,
    flags: 0,
    blksize: 512,
};

const BLOCK_SIZE: u64 = 4096;

pub struct S3Filesystem {
    client: Arc<S3Client>,
    bucket: String,
    key: String,
    size: usize,
    inflight_reads: RwLock<HashMap<u64, Mutex<StreamingGetObject>>>,
    next_handle: AtomicU64,
}

impl S3Filesystem {
    pub fn new(client: S3Client, bucket: &str, key: &str, size: usize) -> Self {
        Self {
            client: Arc::new(client),
            bucket: bucket.to_string(),
            key: key.to_string(),
            size,
            inflight_reads: Default::default(),
            next_handle: AtomicU64::new(1),
        }
    }
}

fn make_benchmark_file_attr(ino: u64, size: usize) -> FileAttr {
    FileAttr {
        ino,
        size: size as u64,
        blocks: (size as u64) / BLOCK_SIZE,
        atime: UNIX_EPOCH, // 1970-01-01 00:00:00
        mtime: UNIX_EPOCH,
        ctime: UNIX_EPOCH,
        crtime: UNIX_EPOCH,
        kind: FileType::RegularFile,
        perm: 0o644,
        nlink: 1,
        uid: 501,
        gid: 20,
        rdev: 0,
        flags: 0,
        blksize: BLOCK_SIZE as u32,
    }
}

#[async_trait]
impl Filesystem for S3Filesystem {
    async fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        let _ = config.set_max_readahead(0);
        Ok(())
    }

    async fn lookup(&self, _req: &Request<'_>, parent: u64, name: &OsStr, reply: ReplyEntry) {
        if parent == 1 {
            if name.to_str().map(|s| s == self.key).unwrap_or(false) {
                reply.entry(&TTL_ZERO, &make_benchmark_file_attr(FILE_INODE, self.size), 0);
            } else {
                reply.error(libc::ENOENT);
            }
        } else {
            reply.error(libc::ENOENT);
        }
    }

    async fn getattr(&self, _req: &Request<'_>, ino: u64, reply: ReplyAttr) {
        if ino == ROOT_INODE {
            reply.attr(&TTL_ZERO, &ROOT_DIR_ATTR);
        } else if ino == FILE_INODE {
            reply.attr(&TTL_ZERO, &make_benchmark_file_attr(FILE_INODE, self.size));
        } else {
            reply.error(libc::ENOENT);
        }
    }

    async fn open(&self, _req: &Request<'_>, _ino: u64, _flags: i32, reply: ReplyOpen) {
        let fh = self.next_handle.fetch_add(1, Ordering::SeqCst);
        reply.opened(fh, 0);
    }

    async fn read(
        &self,
        _req: &Request<'_>,
        ino: u64,
        fh: u64,
        offset: i64,
        size: u32,
        _flags: i32,
        _lock: Option<u64>,
        reply: ReplyData,
    ) {
        if ino == FILE_INODE {
            let mut inflight_reads = self.inflight_reads.read().unwrap();
            if !inflight_reads.contains_key(&fh) {
                drop(inflight_reads);
                let mut inflight_reads_mut = self.inflight_reads.write().unwrap();
                println!("{} {} {}", &self.bucket, &self.key, self.size as u64);
                let request =
                    StreamingGetObject::new(Arc::clone(&self.client), &self.bucket, &self.key, self.size as u64);
                inflight_reads_mut.insert(fh, Mutex::new(request));
                drop(inflight_reads_mut);
                inflight_reads = self.inflight_reads.read().unwrap();
            }
            let mut inflight_read = inflight_reads.get(&fh).unwrap().lock().unwrap();
            let body = inflight_read.read(offset as u64, size as usize);
            reply.data(&body);
        } else {
            reply.error(libc::ENOENT);
        }
    }

    async fn readdir(&self, _req: &Request<'_>, ino: u64, _fh: u64, offset: i64, mut reply: ReplyDirectory) {
        if ino != 1 {
            reply.error(libc::ENOENT);
            return;
        }

        let mut entries = vec![(1, FileType::Directory, "."), (1, FileType::Directory, "..")];

        entries.push((FILE_INODE, FileType::RegularFile, &self.key));

        for (i, entry) in entries.into_iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            if reply.add(entry.0 as u64, (i + 1) as i64, entry.1, entry.2) {
                break;
            }
        }
        reply.ok();
    }
}
