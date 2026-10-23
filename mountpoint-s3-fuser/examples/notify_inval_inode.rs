// Translated from libfuse's example/notify_{inval_inode,store_retrieve}.c:
//    Copyright (C) 2016 Nikolaus Rath <Nikolaus@rath.org>
//
// Translated to Rust/fuser by Zev Weiss <zev@bewilderbeest.net>
//
// Due to the above provenance, unlike the rest of fuser this file is
// licensed under the terms of the GNU GPLv2.

mod common;

use std::convert::TryInto;
use std::ffi::OsStr;
use std::sync::Arc;
use std::sync::atomic::AtomicU64;
use std::sync::atomic::Ordering::SeqCst;
use std::thread;
use std::time::Duration;
use std::time::SystemTime;
use std::time::UNIX_EPOCH;

use clap::Parser;
use fuser::Errno;
use fuser::FileAttr;
use fuser::FileHandle;
use fuser::FileType;
use fuser::Filesystem;
use fuser::FopenFlags;
use fuser::INodeNo;
use fuser::LockOwner;
use fuser::MountOption;
use fuser::OpenAccMode;
use fuser::OpenFlags;
use fuser::ReplyAttr;
use fuser::ReplyData;
use fuser::ReplyDirectory;
use fuser::ReplyEntry;
use fuser::ReplyOpen;
use fuser::Request;
use parking_lot::Mutex;

use crate::common::args::CommonArgs;

struct ClockFS {
    file_contents: Arc<Mutex<String>>,
    lookup_cnt: &'static AtomicU64,
}

impl ClockFS {
    const FILE_INO: u64 = 2;
    const FILE_NAME: &'static str = "current_time";

    fn stat(&self, ino: INodeNo) -> Option<FileAttr> {
        let (kind, perm, size) = match ino.0 {
            1 => (FileType::Directory, 0o755, 0),
            Self::FILE_INO => (
                FileType::RegularFile,
                0o444,
                self.file_contents.lock().len(),
            ),
            _ => return None,
        };
        let now = SystemTime::now();
        Some(FileAttr {
            ino,
            size: size.try_into().unwrap(),
            blocks: 0,
            atime: now,
            mtime: now,
            ctime: now,
            crtime: now,
            kind,
            perm,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: 0,
            flags: 0,
            blksize: 0,
        })
    }
}

impl Filesystem for ClockFS {
    fn lookup(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEntry) {
        if parent != INodeNo::ROOT || name != AsRef::<OsStr>::as_ref(&Self::FILE_NAME) {
            reply.error(Errno::ENOENT);
            return;
        }

        self.lookup_cnt.fetch_add(1, SeqCst);
        reply.entry(
            &Duration::MAX,
            &self.stat(INodeNo(ClockFS::FILE_INO)).unwrap(),
            fuser::Generation(0),
        );
    }

    fn forget(&self, _req: &Request, ino: INodeNo, _nlookup: u64) {
        if ino == INodeNo(ClockFS::FILE_INO) {
            let prev = self.lookup_cnt.fetch_sub(_nlookup, SeqCst);
            assert!(prev >= _nlookup);
        } else {
            assert!(ino == INodeNo::ROOT);
        }
    }

    fn getattr(&self, _req: &Request, ino: INodeNo, _fh: Option<FileHandle>, reply: ReplyAttr) {
        match self.stat(ino) {
            Some(a) => reply.attr(&Duration::MAX, &a),
            None => reply.error(Errno::ENOENT),
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
        if ino != INodeNo::ROOT {
            reply.error(Errno::ENOTDIR);
            return;
        }

        if offset == 0
            && reply.add(
                INodeNo(ClockFS::FILE_INO),
                offset + 1,
                FileType::RegularFile,
                Self::FILE_NAME,
            )
        {
            reply.error(Errno::ENOBUFS);
        } else {
            reply.ok();
        }
    }

    fn open(&self, _req: &Request, ino: INodeNo, flags: OpenFlags, reply: ReplyOpen) {
        if ino == INodeNo::ROOT {
            reply.error(Errno::EISDIR);
        } else if flags.acc_mode() != OpenAccMode::O_RDONLY {
            reply.error(Errno::EACCES);
        } else if ino.0 != Self::FILE_INO {
            eprintln!("Got open for nonexistent inode {ino}");
            reply.error(Errno::ENOENT);
        } else {
            // TODO: we are supposed to pass file handle here, not ino.
            reply.opened(FileHandle(ino.0), FopenFlags::FOPEN_KEEP_CACHE);
        }
    }

    fn read(
        &self,
        _req: &Request,
        ino: INodeNo,
        _fh: FileHandle,
        offset: u64,
        size: u32,
        _flags: OpenFlags,
        _lock_owner: Option<LockOwner>,
        reply: ReplyData,
    ) {
        assert!(ino == INodeNo(Self::FILE_INO));
        let file = self.file_contents.lock();
        let filedata = file.as_bytes();
        let dlen = filedata.len().try_into().unwrap();
        let Ok(start) = offset.min(dlen).try_into() else {
            reply.error(Errno::EINVAL);
            return;
        };
        let Ok(end) = (offset + u64::from(size)).min(dlen).try_into() else {
            reply.error(Errno::EINVAL);
            return;
        };
        eprintln!("read returning {} bytes at offset {}", end - start, offset);
        reply.data(&filedata[start..end]);
    }
}

fn now_string() -> String {
    let Ok(d) = SystemTime::now().duration_since(UNIX_EPOCH) else {
        panic!("Pre-epoch SystemTime");
    };
    format!("The current time is {}\n", d.as_secs())
}

#[derive(Parser)]
struct Options {
    #[clap(flatten)]
    common_args: CommonArgs,

    /// Update interval for filesystem contents
    #[clap(short, long, default_value_t = 1.0)]
    update_interval: f32,

    /// Disable kernel notifications
    #[clap(short, long)]
    no_notify: bool,

    /// Use `notify_store()` instead of `notify_inval_inode()`
    #[clap(short = 's', long)]
    notify_store: bool,
}

fn main() {
    let opts = Options::parse();
    let mut cfg = opts.common_args.config();
    cfg.mount_options
        .extend([MountOption::RO, MountOption::FSName("clock".to_string())]);
    let fdata = Arc::new(Mutex::new(now_string()));
    let lookup_cnt = Box::leak(Box::new(AtomicU64::new(0)));
    let fs = ClockFS {
        file_contents: fdata.clone(),
        lookup_cnt,
    };

    let session = fuser::Session::new(fs, opts.common_args.mount_point, &cfg).unwrap();
    let notifier = session.notifier();
    let _bg = session.spawn().unwrap();

    loop {
        let mut s = fdata.lock();
        let olddata = std::mem::replace(&mut *s, now_string());
        drop(s);
        if !opts.no_notify && lookup_cnt.load(SeqCst) != 0 {
            if opts.notify_store {
                if let Err(e) =
                    notifier.store(INodeNo(ClockFS::FILE_INO), 0, fdata.lock().as_bytes())
                {
                    eprintln!("Warning: failed to update kernel cache: {e}");
                }
            } else if let Err(e) = notifier.inval_inode(
                INodeNo(ClockFS::FILE_INO),
                0,
                olddata.len().try_into().unwrap(),
            ) {
                eprintln!("Warning: failed to invalidate inode: {e}");
            }
        }
        thread::sleep(Duration::from_secs_f32(opts.update_interval));
    }
}
