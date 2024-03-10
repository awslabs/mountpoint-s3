// Translated from libfuse's example/notify_{inval_inode,store_retrieve}.c:
//    Copyright (C) 2016 Nikolaus Rath <Nikolaus@rath.org>
//
// Translated to Rust/fuser by Zev Weiss <zev@bewilderbeest.net>
//
// Due to the above provenance, unlike the rest of fuser this file is
// licensed under the terms of the GNU GPLv2.

use std::{
    convert::TryInto,
    ffi::OsStr,
    sync::{
        atomic::{AtomicU64, Ordering::SeqCst},
        Arc, Mutex,
    },
    thread,
    time::{Duration, SystemTime, UNIX_EPOCH},
};

use libc::{EACCES, EINVAL, EISDIR, ENOBUFS, ENOENT, ENOTDIR};

use clap::Parser;

use fuser::{
    consts, FileAttr, FileType, Filesystem, MountOption, ReplyAttr, ReplyData, ReplyDirectory,
    ReplyEntry, ReplyOpen, Request, FUSE_ROOT_ID,
};

struct ClockFS<'a> {
    file_contents: Arc<Mutex<String>>,
    lookup_cnt: &'a AtomicU64,
}

impl<'a> ClockFS<'a> {
    const FILE_INO: u64 = 2;
    const FILE_NAME: &'static str = "current_time";

    fn stat(&self, ino: u64) -> Option<FileAttr> {
        let (kind, perm, size) = match ino {
            FUSE_ROOT_ID => (FileType::Directory, 0o755, 0),
            Self::FILE_INO => (
                FileType::RegularFile,
                0o444,
                self.file_contents.lock().unwrap().len(),
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

impl<'a> Filesystem for ClockFS<'a> {
    fn lookup(&mut self, _req: &Request, parent: u64, name: &OsStr, reply: ReplyEntry) {
        if parent != FUSE_ROOT_ID || name != AsRef::<OsStr>::as_ref(&Self::FILE_NAME) {
            reply.error(ENOENT);
            return;
        }

        self.lookup_cnt.fetch_add(1, SeqCst);
        reply.entry(&Duration::MAX, &self.stat(ClockFS::FILE_INO).unwrap(), 0);
    }

    fn forget(&mut self, _req: &Request, ino: u64, nlookup: u64) {
        if ino == ClockFS::FILE_INO {
            let prev = self.lookup_cnt.fetch_sub(nlookup, SeqCst);
            assert!(prev >= nlookup);
        } else {
            assert!(ino == FUSE_ROOT_ID);
        }
    }

    fn getattr(&mut self, _req: &Request, ino: u64, reply: ReplyAttr) {
        match self.stat(ino) {
            Some(a) => reply.attr(&Duration::MAX, &a),
            None => reply.error(ENOENT),
        }
    }

    fn readdir(
        &mut self,
        _req: &Request,
        ino: u64,
        _fh: u64,
        offset: i64,
        mut reply: ReplyDirectory,
    ) {
        if ino != FUSE_ROOT_ID {
            reply.error(ENOTDIR);
            return;
        }

        if offset == 0
            && reply.add(
                ClockFS::FILE_INO,
                offset + 1,
                FileType::RegularFile,
                Self::FILE_NAME,
            )
        {
            reply.error(ENOBUFS);
        } else {
            reply.ok();
        }
    }

    fn open(&mut self, _req: &Request, ino: u64, flags: i32, reply: ReplyOpen) {
        if ino == FUSE_ROOT_ID {
            reply.error(EISDIR);
        } else if flags & libc::O_ACCMODE != libc::O_RDONLY {
            reply.error(EACCES);
        } else if ino != Self::FILE_INO {
            eprintln!("Got open for nonexistent inode {}", ino);
            reply.error(ENOENT);
        } else {
            reply.opened(ino, consts::FOPEN_KEEP_CACHE);
        }
    }

    fn read(
        &mut self,
        _req: &Request,
        ino: u64,
        _fh: u64,
        offset: i64,
        size: u32,
        _flags: i32,
        _lock_owner: Option<u64>,
        reply: ReplyData,
    ) {
        assert!(ino == Self::FILE_INO);
        if offset < 0 {
            reply.error(EINVAL);
            return;
        }
        let file = self.file_contents.lock().unwrap();
        let filedata = file.as_bytes();
        let dlen = filedata.len().try_into().unwrap();
        let Ok(start) = offset.min(dlen).try_into() else {
            reply.error(EINVAL);
            return;
        };
        let Ok(end) = (offset + size as i64).min(dlen).try_into() else {
            reply.error(EINVAL);
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
    /// Mount demo filesystem at given path
    mount_point: String,

    /// Update interval for filesystem contents
    #[clap(short, long, default_value_t = 1.0)]
    update_interval: f32,

    /// Disable kernel notifications
    #[clap(short, long)]
    no_notify: bool,

    /// Use notify_store() instead of notify_inval_inode()
    #[clap(short = 's', long)]
    notify_store: bool,
}

fn main() {
    let opts = Options::parse();
    let options = vec![MountOption::RO, MountOption::FSName("clock".to_string())];
    let fdata = Arc::new(Mutex::new(now_string()));
    let lookup_cnt = Box::leak(Box::new(AtomicU64::new(0)));
    let fs = ClockFS {
        file_contents: fdata.clone(),
        lookup_cnt,
    };

    let session = fuser::Session::new(fs, opts.mount_point, &options).unwrap();
    let notifier = session.notifier();
    let _bg = session.spawn().unwrap();

    loop {
        let mut s = fdata.lock().unwrap();
        let olddata = std::mem::replace(&mut *s, now_string());
        drop(s);
        if !opts.no_notify && lookup_cnt.load(SeqCst) != 0 {
            if opts.notify_store {
                if let Err(e) =
                    notifier.store(ClockFS::FILE_INO, 0, fdata.lock().unwrap().as_bytes())
                {
                    eprintln!("Warning: failed to update kernel cache: {}", e);
                }
            } else if let Err(e) =
                notifier.inval_inode(ClockFS::FILE_INO, 0, olddata.len().try_into().unwrap())
            {
                eprintln!("Warning: failed to invalidate inode: {}", e);
            }
        }
        thread::sleep(Duration::from_secs_f32(opts.update_interval));
    }
}
