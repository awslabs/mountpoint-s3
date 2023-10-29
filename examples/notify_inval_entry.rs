// Translated from libfuse's example/notify_inval_entry.c:
//    Copyright (C) 2008       SUSE Linux Products GmbH
//    Copyright (C) 2008       Tejun Heo <teheo@suse.de>
//
// Translated to Rust/fuser by Zev Weiss <zev@bewilderbeest.net>
//
// Due to the above provenance, unlike the rest of fuser this file is
// licensed under the terms of the GNU GPLv2.

use std::{
    ffi::OsStr,
    sync::{
        atomic::{AtomicU64, Ordering::SeqCst},
        Arc, Mutex,
    },
    thread,
    time::{Duration, SystemTime, UNIX_EPOCH},
};

use libc::{ENOBUFS, ENOENT, ENOTDIR};

use clap::Parser;

use fuser::{
    FileAttr, FileType, Filesystem, MountOption, ReplyAttr, ReplyDirectory, ReplyEntry, Request,
    FUSE_ROOT_ID,
};

struct ClockFS<'a> {
    file_name: Arc<Mutex<String>>,
    lookup_cnt: &'a AtomicU64,
    timeout: Duration,
}

impl<'a> ClockFS<'a> {
    const FILE_INO: u64 = 2;

    fn get_filename(&self) -> String {
        let n = self.file_name.lock().unwrap();
        n.clone()
    }

    fn stat(ino: u64) -> Option<FileAttr> {
        let (kind, perm) = match ino {
            FUSE_ROOT_ID => (FileType::Directory, 0o755),
            Self::FILE_INO => (FileType::RegularFile, 0o000),
            _ => return None,
        };
        let now = SystemTime::now();
        Some(FileAttr {
            ino,
            size: 0,
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
        if parent != FUSE_ROOT_ID || name != AsRef::<OsStr>::as_ref(&self.get_filename()) {
            reply.error(ENOENT);
            return;
        }

        self.lookup_cnt.fetch_add(1, SeqCst);
        reply.entry(&self.timeout, &ClockFS::stat(ClockFS::FILE_INO).unwrap(), 0);
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
        match ClockFS::stat(ino) {
            Some(a) => reply.attr(&self.timeout, &a),
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
                &self.get_filename(),
            )
        {
            reply.error(ENOBUFS);
        } else {
            reply.ok();
        }
    }
}

fn now_filename() -> String {
    let Ok(d) = SystemTime::now().duration_since(UNIX_EPOCH) else {
        panic!("Pre-epoch SystemTime");
    };
    format!("Time_is_{}", d.as_secs())
}

#[derive(Parser)]
struct Options {
    /// Mount demo filesystem at given path
    mount_point: String,

    /// Timeout for kernel caches
    #[clap(short, long, default_value_t = 5.0)]
    timeout: f32,

    /// Update interval for filesystem contents
    #[clap(short, long, default_value_t = 1.0)]
    update_interval: f32,

    /// Disable kernel notifications
    #[clap(short, long)]
    no_notify: bool,

    /// Expire entries instead of invalidating them
    #[clap(short, long)]
    only_expire: bool,
}

fn main() {
    let opts = Options::parse();
    let options = vec![MountOption::RO, MountOption::FSName("clock".to_string())];
    let fname = Arc::new(Mutex::new(now_filename()));
    let lookup_cnt = Box::leak(Box::new(AtomicU64::new(0)));
    let fs = ClockFS {
        file_name: fname.clone(),
        lookup_cnt,
        timeout: Duration::from_secs_f32(opts.timeout),
    };

    let session = fuser::Session::new(fs, opts.mount_point.as_ref(), &options).unwrap();
    let notifier = session.notifier();
    let _bg = session.spawn().unwrap();

    loop {
        let mut fname = fname.lock().unwrap();
        let oldname = std::mem::replace(&mut *fname, now_filename());
        drop(fname);
        if !opts.no_notify && lookup_cnt.load(SeqCst) != 0 {
            if opts.only_expire {
                // fuser::notify_expire_entry(_SOME_HANDLE_, FUSE_ROOT_ID, &oldname);
            } else if let Err(e) = notifier.inval_entry(FUSE_ROOT_ID, oldname.as_ref()) {
                eprintln!("Warning: failed to invalidate entry '{}': {}", oldname, e);
            }
        }
        thread::sleep(Duration::from_secs_f32(opts.update_interval));
    }
}
