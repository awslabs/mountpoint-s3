// Translated from libfuse's example/notify_inval_entry.c:
//    Copyright (C) 2008       SUSE Linux Products GmbH
//    Copyright (C) 2008       Tejun Heo <teheo@suse.de>
//
// Translated to Rust/fuser by Zev Weiss <zev@bewilderbeest.net>
//
// Due to the above provenance, unlike the rest of fuser this file is
// licensed under the terms of the GNU GPLv2.

mod common;

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
use fuser::INodeNo;
use fuser::MountOption;
use fuser::ReplyAttr;
use fuser::ReplyDirectory;
use fuser::ReplyEntry;
use fuser::Request;
use parking_lot::Mutex;

use crate::common::args::CommonArgs;

struct ClockFS {
    file_name: Arc<Mutex<String>>,
    lookup_cnt: &'static AtomicU64,
    timeout: Duration,
}

impl ClockFS {
    const FILE_INO: u64 = 2;

    fn get_filename(&self) -> String {
        let n = self.file_name.lock();
        n.clone()
    }

    fn stat(ino: INodeNo) -> Option<FileAttr> {
        let (kind, perm) = match ino.0 {
            1 => (FileType::Directory, 0o755),
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

impl Filesystem for ClockFS {
    fn lookup(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEntry) {
        if parent != INodeNo::ROOT || name != AsRef::<OsStr>::as_ref(&self.get_filename()) {
            reply.error(Errno::ENOENT);
            return;
        }

        self.lookup_cnt.fetch_add(1, SeqCst);
        reply.entry(
            &self.timeout,
            &ClockFS::stat(INodeNo(ClockFS::FILE_INO)).unwrap(),
            fuser::Generation(0),
        );
    }

    fn forget(&self, _req: &Request, ino: INodeNo, _nlookup: u64) {
        if ino.0 == ClockFS::FILE_INO {
            let prev = self.lookup_cnt.fetch_sub(_nlookup, SeqCst);
            assert!(prev >= _nlookup);
        } else {
            assert!(ino == INodeNo::ROOT);
        }
    }

    fn getattr(&self, _req: &Request, ino: INodeNo, _fh: Option<FileHandle>, reply: ReplyAttr) {
        match ClockFS::stat(ino) {
            Some(a) => reply.attr(&self.timeout, &a),
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
                self.get_filename(),
            )
        {
            reply.error(Errno::ENOBUFS);
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
    #[clap(flatten)]
    common_args: CommonArgs,

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
    let mut cfg = opts.common_args.config();
    cfg.mount_options
        .extend([MountOption::RO, MountOption::FSName("clock".to_string())]);
    let fname = Arc::new(Mutex::new(now_filename()));
    let lookup_cnt = Box::leak(Box::new(AtomicU64::new(0)));
    let fs = ClockFS {
        file_name: fname.clone(),
        lookup_cnt,
        timeout: Duration::from_secs_f32(opts.timeout),
    };

    let session = fuser::Session::new(fs, opts.common_args.mount_point, &cfg).unwrap();
    let notifier = session.notifier();
    let _bg = session.spawn().unwrap();

    loop {
        let mut fname = fname.lock();
        let oldname = std::mem::replace(&mut *fname, now_filename());
        drop(fname);
        if !opts.no_notify && lookup_cnt.load(SeqCst) != 0 {
            if opts.only_expire {
                // fuser::notify_expire_entry(_SOME_HANDLE_, INodeNo::ROOT, &oldname);
            } else if let Err(e) = notifier.inval_entry(INodeNo::ROOT, oldname.as_ref()) {
                eprintln!("Warning: failed to invalidate entry '{oldname}': {e}");
            }
        }
        thread::sleep(Duration::from_secs_f32(opts.update_interval));
    }
}
