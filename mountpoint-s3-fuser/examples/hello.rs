mod common;

use std::cell::Cell;
use std::ffi::OsStr;
use std::sync::atomic::AtomicU64;
use std::sync::atomic::AtomicUsize;
use std::sync::atomic::Ordering;
use std::time::Duration;
use std::time::UNIX_EPOCH;

use clap::Parser;
use fuser::Errno;
use fuser::FileAttr;
use fuser::FileHandle;
use fuser::FileType;
use fuser::Filesystem;
use fuser::INodeNo;
use fuser::LockOwner;
use fuser::MountOption;
use fuser::OpenFlags;
use fuser::ReplyAttr;
use fuser::ReplyData;
use fuser::ReplyDirectory;
use fuser::ReplyEntry;
use fuser::Request;

use crate::common::args::CommonArgs;

thread_local! {
    static THREAD_INDEX: Cell<Option<usize>> = const { Cell::new(None) };
}

#[derive(Parser)]
#[command(version, author = "Christopher Berner")]
struct Args {
    #[clap(flatten)]
    common_args: CommonArgs,
}

const TTL: Duration = Duration::from_secs(1); // 1 second

const HELLO_DIR_ATTR: FileAttr = FileAttr {
    ino: INodeNo::ROOT,
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

const HELLO_TXT_CONTENT: &str = "Hello World!\n";

const HELLO_TXT_ATTR: FileAttr = FileAttr {
    ino: INodeNo(2),
    size: 13,
    blocks: 1,
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
    blksize: 512,
};

const STATS_PER_THREAD_ATTR: FileAttr = FileAttr {
    ino: INodeNo(3),
    size: 0, // Dynamic content, size will be determined at read time
    blocks: 0,
    atime: UNIX_EPOCH,
    mtime: UNIX_EPOCH,
    ctime: UNIX_EPOCH,
    crtime: UNIX_EPOCH,
    kind: FileType::RegularFile,
    perm: 0o444,
    nlink: 1,
    uid: 501,
    gid: 20,
    rdev: 0,
    flags: 0,
    blksize: 512,
};

struct HelloFS {
    reads_per_thread: Vec<AtomicU64>,
    next_thread_index: AtomicUsize,
}

impl HelloFS {
    fn stats_content(&self) -> String {
        let mut content = String::new();
        for count in &self.reads_per_thread {
            content.push_str(&format!("{}\n", count.load(Ordering::Relaxed)));
        }
        content
    }
}

impl Filesystem for HelloFS {
    fn lookup(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEntry) {
        if u64::from(parent) == 1 && name.to_str() == Some("hello.txt") {
            reply.entry(&TTL, &HELLO_TXT_ATTR, fuser::Generation(0));
        } else if u64::from(parent) == 1 && name.to_str() == Some("stats-per-thread") {
            let content = self.stats_content();
            let mut attr = STATS_PER_THREAD_ATTR;
            attr.size = content.len() as u64;
            // Must use zero TTL, otherwise previous size is cached.
            reply.entry(&Duration::ZERO, &attr, fuser::Generation(0));
        } else {
            reply.error(Errno::ENOENT);
        }
    }

    fn getattr(&self, _req: &Request, ino: INodeNo, _fh: Option<FileHandle>, reply: ReplyAttr) {
        match u64::from(ino) {
            1 => reply.attr(&TTL, &HELLO_DIR_ATTR),
            2 => reply.attr(&TTL, &HELLO_TXT_ATTR),
            3 => {
                let content = self.stats_content();
                let mut attr = STATS_PER_THREAD_ATTR;
                attr.size = content.len() as u64;
                // Must use zero TTL, otherwise previous size is cached.
                reply.attr(&Duration::ZERO, &attr);
            }
            _ => reply.error(Errno::ENOENT),
        }
    }

    fn read(
        &self,
        _req: &Request,
        ino: INodeNo,
        _fh: FileHandle,
        offset: u64,
        _size: u32,
        _flags: OpenFlags,
        _lock_owner: Option<LockOwner>,
        reply: ReplyData,
    ) {
        let thread_idx = THREAD_INDEX.with(|idx| match idx.get() {
            Some(i) => i,
            None => {
                let new_idx = self.next_thread_index.fetch_add(1, Ordering::SeqCst);
                idx.set(Some(new_idx));
                new_idx
            }
        });
        if thread_idx < self.reads_per_thread.len() {
            self.reads_per_thread[thread_idx].fetch_add(1, Ordering::Relaxed);
        }
        if u64::from(ino) == 2 {
            reply.data(&HELLO_TXT_CONTENT.as_bytes()[offset as usize..]);
        } else if u64::from(ino) == 3 {
            let content = self.stats_content();
            let bytes = content.as_bytes();
            if offset as usize >= bytes.len() {
                reply.data(&[]);
            } else {
                reply.data(&bytes[offset as usize..]);
            }
        } else {
            reply.error(Errno::ENOENT);
        }
    }

    fn readdir(
        &self,
        _req: &Request,
        ino: INodeNo,
        _fh: FileHandle,
        offset: u64,
        mut reply: ReplyDirectory,
    ) {
        if u64::from(ino) != 1 {
            reply.error(Errno::ENOENT);
            return;
        }

        let entries = vec![
            (1, FileType::Directory, "."),
            (1, FileType::Directory, ".."),
            (2, FileType::RegularFile, "hello.txt"),
            (3, FileType::RegularFile, "stats-per-thread"),
        ];

        for (i, entry) in entries.into_iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            if reply.add(INodeNo(entry.0), (i + 1) as u64, entry.1, entry.2) {
                break;
            }
        }
        reply.ok();
    }
}

fn main() {
    let args = Args::parse();
    env_logger::init();

    let mut cfg = args.common_args.config();
    cfg.mount_options
        .extend([MountOption::RO, MountOption::FSName("hello".to_string())]);
    let fs = HelloFS {
        reads_per_thread: (0..args.common_args.n_threads)
            .map(|_| AtomicU64::new(0))
            .collect(),
        next_thread_index: AtomicUsize::new(0),
    };
    fuser::mount2(fs, &args.common_args.mount_point, &cfg).unwrap();
}
