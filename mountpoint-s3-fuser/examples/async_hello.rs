mod common;

use std::ffi::OsStr;
use std::time::Duration;
use std::time::UNIX_EPOCH;

use clap::Parser;
use fuser::Errno;
use fuser::FileAttr;
use fuser::FileHandle;
use fuser::FileType;
use fuser::INodeNo;
use fuser::LockOwner;
use fuser::MountOption;
use fuser::OpenFlags;
use fuser::experimental;
use fuser::experimental::AsyncFilesystem;
use fuser::experimental::DirEntListBuilder;
use fuser::experimental::GetAttrResponse;
use fuser::experimental::LookupResponse;
use fuser::experimental::RequestContext;
use fuser::experimental::TokioAdapter;

use crate::common::args::CommonArgs;

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

struct HelloFS;

#[async_trait::async_trait]
impl AsyncFilesystem for HelloFS {
    async fn lookup(
        &self,
        _context: &RequestContext,
        parent: INodeNo,
        name: &OsStr,
    ) -> experimental::Result<LookupResponse> {
        if parent == INodeNo::ROOT && name.to_str() == Some("hello.txt") {
            Ok(LookupResponse::new(
                TTL,
                HELLO_TXT_ATTR,
                fuser::Generation(0),
            ))
        } else {
            Err(Errno::ENOENT)
        }
    }

    async fn getattr(
        &self,
        _context: &RequestContext,
        ino: INodeNo,
        _file_handle: Option<FileHandle>,
    ) -> experimental::Result<GetAttrResponse> {
        match ino.0 {
            1 => Ok(GetAttrResponse::new(TTL, HELLO_DIR_ATTR)),
            2 => Ok(GetAttrResponse::new(TTL, HELLO_TXT_ATTR)),
            _ => Err(Errno::ENOENT),
        }
    }

    async fn read(
        &self,
        _context: &RequestContext,
        ino: INodeNo,
        _file_handle: FileHandle,
        offset: u64,
        _size: u32,
        _flags: OpenFlags,
        _lock: Option<LockOwner>,
        out_data: &mut Vec<u8>,
    ) -> experimental::Result<()> {
        if ino.0 == 2 {
            out_data.extend_from_slice(&HELLO_TXT_CONTENT.as_bytes()[offset as usize..]);
            Ok(())
        } else {
            Err(Errno::ENOENT)
        }
    }

    async fn readdir(
        &self,
        _context: &RequestContext,
        ino: INodeNo,
        _file_handle: FileHandle,
        offset: u64,
        mut builder: DirEntListBuilder<'_>,
    ) -> experimental::Result<()> {
        if ino != INodeNo::ROOT {
            return Err(Errno::ENOENT);
        }

        let entries = vec![
            (1, FileType::Directory, "."),
            (1, FileType::Directory, ".."),
            (2, FileType::RegularFile, "hello.txt"),
        ];

        for (i, entry) in entries.into_iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            if builder.add(INodeNo(entry.0), (i + 1) as u64, entry.1, entry.2) {
                break;
            }
        }
        Ok(())
    }
}

fn main() {
    let args = Args::parse();
    env_logger::init();

    let mut cfg = args.common_args.config();
    cfg.mount_options
        .extend([MountOption::RO, MountOption::FSName("hello".to_string())]);
    fuser::mount2(
        TokioAdapter::new(HelloFS),
        &args.common_args.mount_point,
        &cfg,
    )
    .unwrap();
}
