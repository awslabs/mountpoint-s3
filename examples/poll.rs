// Translated from libfuse's example/poll.c:
//    Copyright (C) 2008       SUSE Linux Products GmbH
//    Copyright (C) 2008       Tejun Heo <teheo@suse.de>
//
// Translated to Rust/fuser by Zev Weiss <zev@bewilderbeest.net>
//
// Due to the above provenance, unlike the rest of fuser this file is
// licensed under the terms of the GNU GPLv2.

use std::{
    convert::TryInto,
    ffi::OsStr,
    os::unix::ffi::OsStrExt,
    sync::{
        atomic::{AtomicU64, Ordering::SeqCst},
        Arc, Mutex,
    },
    thread,
    time::{Duration, UNIX_EPOCH},
};

use libc::{EACCES, EBADF, EBUSY, EINVAL, ENOENT, ENOTDIR};

use fuser::{
    consts::{FOPEN_DIRECT_IO, FOPEN_NONSEEKABLE, FUSE_POLL_SCHEDULE_NOTIFY},
    FileAttr, FileType, MountOption, Request, FUSE_ROOT_ID,
};

const NUMFILES: u8 = 16;
const MAXBYTES: u64 = 10;

struct FSelData {
    bytecnt: [u64; NUMFILES as usize],
    open_mask: u16,
    notify_mask: u16,
    poll_handles: [u64; NUMFILES as usize],
}

struct FSelFS {
    data: Arc<Mutex<FSelData>>,
}

impl FSelData {
    fn idx_to_ino(idx: u8) -> u64 {
        let idx: u64 = idx.into();
        FUSE_ROOT_ID + idx + 1
    }

    fn ino_to_idx(ino: u64) -> u8 {
        (ino - (FUSE_ROOT_ID + 1))
            .try_into()
            .expect("out-of-range inode number")
    }

    fn filestat(&self, idx: u8) -> FileAttr {
        assert!(idx < NUMFILES);
        FileAttr {
            ino: Self::idx_to_ino(idx),
            size: self.bytecnt[idx as usize],
            blocks: 0,
            atime: UNIX_EPOCH,
            mtime: UNIX_EPOCH,
            ctime: UNIX_EPOCH,
            crtime: UNIX_EPOCH,
            kind: FileType::RegularFile,
            perm: 0o444,
            nlink: 1,
            uid: 0,
            gid: 0,
            rdev: 0,
            flags: 0,
            blksize: 0,
        }
    }
}

impl FSelFS {
    fn get_data(&self) -> std::sync::MutexGuard<'_, FSelData> {
        self.data.lock().unwrap()
    }
}

impl fuser::Filesystem for FSelFS {
    fn lookup(&mut self, _req: &Request, parent: u64, name: &OsStr, reply: fuser::ReplyEntry) {
        if parent != FUSE_ROOT_ID || name.len() != 1 {
            reply.error(ENOENT);
            return;
        }

        let name = name.as_bytes();

        let idx = match name[0] {
            b'0'..=b'9' => name[0] - b'0',
            b'A'..=b'F' => name[0] - b'A' + 10,
            _ => {
                reply.error(ENOENT);
                return;
            }
        };

        reply.entry(&Duration::ZERO, &self.get_data().filestat(idx), 0);
    }

    fn getattr(&mut self, _req: &Request, ino: u64, reply: fuser::ReplyAttr) {
        if ino == FUSE_ROOT_ID {
            let a = FileAttr {
                ino: FUSE_ROOT_ID,
                size: 0,
                blocks: 0,
                atime: UNIX_EPOCH,
                mtime: UNIX_EPOCH,
                ctime: UNIX_EPOCH,
                crtime: UNIX_EPOCH,
                kind: FileType::Directory,
                perm: 0o555,
                nlink: 2,
                uid: 0,
                gid: 0,
                rdev: 0,
                flags: 0,
                blksize: 0,
            };
            reply.attr(&Duration::ZERO, &a);
            return;
        }
        let idx = FSelData::ino_to_idx(ino);
        if idx < NUMFILES {
            reply.attr(&Duration::ZERO, &self.get_data().filestat(idx));
        } else {
            reply.error(ENOENT);
        }
    }

    fn readdir(
        &mut self,
        _req: &Request,
        ino: u64,
        _fh: u64,
        offset: i64,
        mut reply: fuser::ReplyDirectory,
    ) {
        if ino != FUSE_ROOT_ID {
            reply.error(ENOTDIR);
            return;
        }

        let Ok(offset): Result<u8, _> = offset.try_into() else {
            reply.error(EINVAL);
            return;
        };

        for idx in offset..NUMFILES {
            let ascii = match idx {
                0..=9 => [b'0' + idx],
                10..=16 => [b'A' + idx - 10],
                _ => panic!(),
            };
            let name = OsStr::from_bytes(&ascii);
            if reply.add(
                FSelData::idx_to_ino(idx),
                (idx + 1).into(),
                FileType::RegularFile,
                name,
            ) {
                break;
            }
        }

        reply.ok();
    }

    fn open(&mut self, _req: &Request, ino: u64, flags: i32, reply: fuser::ReplyOpen) {
        let idx = FSelData::ino_to_idx(ino);
        if idx >= NUMFILES {
            reply.error(ENOENT);
            return;
        }

        if (flags & libc::O_ACCMODE) != libc::O_RDONLY {
            reply.error(EACCES);
            return;
        }

        {
            let mut d = self.get_data();

            if d.open_mask & (1 << idx) != 0 {
                reply.error(EBUSY);
                return;
            }

            d.open_mask |= 1 << idx;
        }

        reply.opened(idx.into(), FOPEN_DIRECT_IO | FOPEN_NONSEEKABLE);
    }

    fn release(
        &mut self,
        _req: &Request,
        _ino: u64,
        fh: u64,
        _flags: i32,
        _lock_owner: Option<u64>,
        _flush: bool,
        reply: fuser::ReplyEmpty,
    ) {
        let idx = fh;
        if idx >= NUMFILES.into() {
            reply.error(EBADF);
            return;
        }
        self.get_data().open_mask &= !(1 << idx);
        reply.ok();
    }

    fn read(
        &mut self,
        _req: &Request,
        _ino: u64,
        fh: u64,
        _offset: i64,
        size: u32,
        _flags: i32,
        _lock_owner: Option<u64>,
        reply: fuser::ReplyData,
    ) {
        let Ok(idx): Result<u8, _> = fh.try_into() else {
            reply.error(EINVAL);
            return;
        };
        if idx >= NUMFILES {
            reply.error(EBADF);
            return;
        }
        let cnt = &mut self.get_data().bytecnt[idx as usize];
        let size = (*cnt).min(size.into());
        println!("READ   {:X} transferred={} cnt={}", idx, size, *cnt);
        *cnt -= size;
        let elt = match idx {
            0..=9 => b'0' + idx,
            10..=16 => b'A' + idx - 10,
            _ => panic!(),
        };
        let data = vec![elt; size.try_into().unwrap()];
        reply.data(data.as_slice());
    }

    fn poll(
        &mut self,
        _req: &Request,
        _ino: u64,
        fh: u64,
        kh: u64,
        _events: u32,
        flags: u32,
        reply: fuser::ReplyPoll,
    ) {
        static POLLED_ZERO: AtomicU64 = AtomicU64::new(0);
        let Ok(idx): Result<u8, _> = fh.try_into() else {
            reply.error(EINVAL);
            return;
        };
        if idx >= NUMFILES {
            reply.error(EBADF);
            return;
        }

        let revents = {
            let mut d = self.get_data();

            if flags & FUSE_POLL_SCHEDULE_NOTIFY != 0 {
                d.notify_mask |= 1 << idx;
                d.poll_handles[idx as usize] = kh;
            }

            let nbytes = d.bytecnt[idx as usize];
            if nbytes != 0 {
                println!(
                    "POLL   {:X} cnt={} polled_zero={}",
                    idx,
                    nbytes,
                    POLLED_ZERO.swap(0, SeqCst)
                );
                libc::POLLIN.try_into().unwrap()
            } else {
                POLLED_ZERO.fetch_add(1, SeqCst);
                0
            }
        };

        reply.poll(revents);
    }
}

fn producer(data: &Mutex<FSelData>, notifier: &fuser::Notifier) {
    let mut idx: u8 = 0;
    let mut nr = 1;
    loop {
        {
            let mut d = data.lock().unwrap();
            let mut t = idx;

            for _ in 0..nr {
                let tidx = t as usize;
                if d.bytecnt[tidx] != MAXBYTES {
                    d.bytecnt[tidx] += 1;
                    if d.notify_mask & (1 << t) != 0 {
                        println!("NOTIFY {:X}", t);
                        if let Err(e) = notifier.poll(d.poll_handles[tidx]) {
                            eprintln!("poll notification failed: {}", e);
                        }
                        d.notify_mask &= !(1 << t);
                    }
                }

                t = (t + NUMFILES / nr) % NUMFILES;
            }

            idx = (idx + 1) % NUMFILES;
            if idx == 0 {
                nr = (nr * 2) % 7;
            }
        }
        thread::sleep(Duration::from_millis(250));
    }
}

fn main() {
    let options = vec![MountOption::RO, MountOption::FSName("fsel".to_string())];
    let data = Arc::new(Mutex::new(FSelData {
        bytecnt: [0; NUMFILES as usize],
        open_mask: 0,
        notify_mask: 0,
        poll_handles: [0; NUMFILES as usize],
    }));
    let fs = FSelFS { data: data.clone() };

    let mntpt = std::env::args().nth(1).unwrap();
    let session = fuser::Session::new(fs, mntpt, &options).unwrap();
    let bg = session.spawn().unwrap();

    producer(&data, &bg.notifier());
}
