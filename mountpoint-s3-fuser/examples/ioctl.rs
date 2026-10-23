// This example requires fuse 7.11 or later. Run with:
//
//   cargo run --example ioctl /tmp/foobar

mod common;

use std::ffi::OsStr;
use std::time::Duration;
use std::time::UNIX_EPOCH;

use clap::Parser;
use fuser::Errno;
use fuser::FileAttr;
use fuser::FileHandle;
use fuser::FileType;
use fuser::Filesystem;
use fuser::INodeNo;
use fuser::IoctlFlags;
use fuser::LockOwner;
use fuser::OpenFlags;
use fuser::ReplyAttr;
use fuser::ReplyData;
use fuser::ReplyDirectory;
use fuser::ReplyEntry;
use fuser::ReplyIoctl;
use fuser::Request;
use log::debug;
use parking_lot::Mutex;

use crate::common::args::CommonArgs;

#[derive(Parser)]
#[command(version, author = "Colin Marc")]
struct Args {
    #[clap(flatten)]
    common_args: CommonArgs,
}

const TTL: Duration = Duration::from_secs(1); // 1 second

const FIOC_GET_SIZE: u64 = nix::request_code_read!('E', 0, size_of::<usize>());
const FIOC_SET_SIZE: u64 = nix::request_code_write!('E', 1, size_of::<usize>());

struct FiocFS {
    content: Mutex<Vec<u8>>,
    root_attr: FileAttr,
    fioc_file_attr: FileAttr,
}

impl FiocFS {
    fn new() -> Self {
        let uid = nix::unistd::getuid().into();
        let gid = nix::unistd::getgid().into();

        let root_attr = FileAttr {
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
            uid,
            gid,
            rdev: 0,
            flags: 0,
            blksize: 512,
        };

        let fioc_file_attr = FileAttr {
            ino: INodeNo(2),
            size: 0,
            blocks: 1,
            atime: UNIX_EPOCH, // 1970-01-01 00:00:00
            mtime: UNIX_EPOCH,
            ctime: UNIX_EPOCH,
            crtime: UNIX_EPOCH,
            kind: FileType::RegularFile,
            perm: 0o644,
            nlink: 1,
            uid,
            gid,
            rdev: 0,
            flags: 0,
            blksize: 512,
        };

        Self {
            content: Mutex::new(vec![]),
            root_attr,
            fioc_file_attr,
        }
    }
}

impl Filesystem for FiocFS {
    fn lookup(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEntry) {
        if parent == INodeNo::ROOT && name.to_str() == Some("fioc") {
            reply.entry(&TTL, &self.fioc_file_attr, fuser::Generation(0));
        } else {
            reply.error(Errno::ENOENT);
        }
    }

    fn getattr(&self, _req: &Request, ino: INodeNo, _fh: Option<FileHandle>, reply: ReplyAttr) {
        match ino.0 {
            1 => reply.attr(&TTL, &self.root_attr),
            2 => reply.attr(&TTL, &self.fioc_file_attr),
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
        if ino == INodeNo(2) {
            let content = self.content.lock();
            reply.data(&content[offset as usize..]);
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
        if ino != INodeNo::ROOT {
            reply.error(Errno::ENOENT);
            return;
        }

        let entries = vec![
            (1, FileType::Directory, "."),
            (1, FileType::Directory, ".."),
            (2, FileType::RegularFile, "fioc"),
        ];

        for (i, entry) in entries.into_iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            if reply.add(INodeNo(entry.0), (i + 1) as u64, entry.1, entry.2) {
                break;
            }
        }
        reply.ok();
    }

    fn ioctl(
        &self,
        _req: &Request,
        ino: INodeNo,
        _fh: FileHandle,
        _flags: IoctlFlags,
        cmd: u32,
        in_data: &[u8],
        _out_size: u32,
        reply: ReplyIoctl,
    ) {
        if ino != INodeNo(2) {
            reply.error(Errno::EINVAL);
            return;
        }

        match cmd.into() {
            FIOC_GET_SIZE => {
                let content = self.content.lock();
                let size_bytes = content.len().to_ne_bytes();
                reply.ioctl(0, &size_bytes);
            }
            FIOC_SET_SIZE => {
                let new_size = usize::from_ne_bytes(in_data.try_into().unwrap());
                *self.content.lock() = vec![0_u8; new_size];
                reply.ioctl(0, &[]);
            }
            _ => {
                debug!("unknown ioctl: {cmd}");
                reply.error(Errno::EINVAL);
            }
        }
    }
}

fn main() {
    let args = Args::parse();
    env_logger::init();

    let cfg = args.common_args.config();
    let fs = FiocFS::new();
    fuser::mount2(fs, &args.common_args.mount_point, &cfg).unwrap();
}
