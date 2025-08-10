// This example requires fuse 7.40 or later. Run with:
//
//   cargo run --example passthrough --features abi-7-40 /tmp/foobar

use clap::{Arg, ArgAction, Command, crate_version};
use fuser::{
    BackingId, FileAttr, FileType, Filesystem, KernelConfig, MountOption, ReplyAttr,
    ReplyDirectory, ReplyEmpty, ReplyEntry, ReplyOpen, Request, consts,
};
use libc::ENOENT;
use std::collections::HashMap;
use std::ffi::{OsStr, c_int};
use std::fs::File;
use std::rc::{Rc, Weak};
use std::time::{Duration, UNIX_EPOCH};

const TTL: Duration = Duration::from_secs(1); // 1 second

/// BackingCache is an example of how a filesystem might manage BackingId objects for fd
/// passthrough.  The idea is to avoid creating more than one BackingId object per file at a time.
///
/// We do this by keeping a weak "by inode" hash table mapping inode numbers to BackingId.  If a
/// BackingId already exists, we use it.  Otherwise, we create it.  This is not enough to keep the
/// BackingId alive, though.  For each Filesystem::open() request we allocate a fresh 'fh'
/// (monotonically increasing u64, next_fh, never recycled) and use that to keep a *strong*
/// reference on the BackingId for that open.  We drop it from the table on Filesystem::release(),
/// which means the BackingId will be dropped in the kernel when the last user of it closes.
///
/// In this way, if a request to open a file comes in and the file is already open, we'll reuse the
/// BackingId, but as soon as all references are closed, the BackingId will be dropped.
///
/// It's left as an exercise to the reader to implement an active cleanup of the by_inode table, if
/// desired, but our little example filesystem only contains one file. :)
#[derive(Debug, Default)]
struct BackingCache {
    by_handle: HashMap<u64, Rc<BackingId>>,
    by_inode: HashMap<u64, Weak<BackingId>>,
    next_fh: u64,
}

impl BackingCache {
    fn next_fh(&mut self) -> u64 {
        self.next_fh += 1;
        self.next_fh
    }

    /// Gets the existing BackingId for `ino` if it exists, or calls `callback` to create it.
    ///
    /// Returns a unique file handle and the BackingID (possibly shared, possibly new).  The
    /// returned file handle should be `put()` when you're done with it.
    fn get_or(
        &mut self,
        ino: u64,
        callback: impl Fn() -> std::io::Result<BackingId>,
    ) -> std::io::Result<(u64, Rc<BackingId>)> {
        let fh = self.next_fh();

        let id = if let Some(id) = self.by_inode.get(&ino).and_then(Weak::upgrade) {
            eprintln!("HIT! reusing {id:?}");
            id
        } else {
            let id = Rc::new(callback()?);
            self.by_inode.insert(ino, Rc::downgrade(&id));
            eprintln!("MISS! new {id:?}");
            id
        };

        self.by_handle.insert(fh, Rc::clone(&id));
        Ok((fh, id))
    }

    /// Releases a file handle previously obtained from `get_or()`.  If this was a last user of a
    /// particular BackingId then it will be dropped.
    fn put(&mut self, fh: u64) {
        eprintln!("Put fh {fh}");
        match self.by_handle.remove(&fh) {
            None => eprintln!("ERROR: Put fh {fh} but it wasn't found in cache!!\n"),
            Some(id) => eprintln!("Put fh {fh}, was {id:?}\n"),
        }
    }
}

#[derive(Debug)]
struct PassthroughFs {
    root_attr: FileAttr,
    passthrough_file_attr: FileAttr,
    backing_cache: BackingCache,
}

impl PassthroughFs {
    fn new() -> Self {
        let uid = unsafe { libc::getuid() };
        let gid = unsafe { libc::getgid() };

        let root_attr = FileAttr {
            ino: 1,
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

        let passthrough_file_attr = FileAttr {
            ino: 2,
            size: 123456,
            blocks: 1,
            atime: UNIX_EPOCH, // 1970-01-01 00:00:00
            mtime: UNIX_EPOCH,
            ctime: UNIX_EPOCH,
            crtime: UNIX_EPOCH,
            kind: FileType::RegularFile,
            perm: 0o644,
            nlink: 1,
            uid: 333,
            gid: 333,
            rdev: 0,
            flags: 0,
            blksize: 512,
        };

        Self {
            root_attr,
            passthrough_file_attr,
            backing_cache: Default::default(),
        }
    }
}

impl Filesystem for PassthroughFs {
    fn init(
        &mut self,
        _req: &Request,
        config: &mut KernelConfig,
    ) -> std::result::Result<(), c_int> {
        config.add_capabilities(consts::FUSE_PASSTHROUGH).unwrap();
        config.set_max_stack_depth(2).unwrap();
        Ok(())
    }

    fn lookup(&mut self, _req: &Request, parent: u64, name: &OsStr, reply: ReplyEntry) {
        if parent == 1 && name.to_str() == Some("passthrough") {
            reply.entry(&TTL, &self.passthrough_file_attr, 0);
        } else {
            reply.error(ENOENT);
        }
    }

    fn getattr(&mut self, _req: &Request, ino: u64, _fh: Option<u64>, reply: ReplyAttr) {
        match ino {
            1 => reply.attr(&TTL, &self.root_attr),
            2 => reply.attr(&TTL, &self.passthrough_file_attr),
            _ => reply.error(ENOENT),
        }
    }

    fn open(&mut self, _req: &Request, ino: u64, _flags: i32, reply: ReplyOpen) {
        if ino != 2 {
            reply.error(ENOENT);
            return;
        }

        let (fh, id) = self
            .backing_cache
            .get_or(ino, || {
                let file = File::open("/etc/os-release")?;
                reply.open_backing(file)
            })
            .unwrap();

        eprintln!("  -> opened_passthrough({fh:?}, 0, {id:?});\n");
        reply.opened_passthrough(fh, 0, &id);
    }

    fn release(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        fh: u64,
        _flags: i32,
        _lock_owner: Option<u64>,
        _flush: bool,
        reply: ReplyEmpty,
    ) {
        self.backing_cache.put(fh);
        reply.ok();
    }

    fn readdir(
        &mut self,
        _req: &Request,
        ino: u64,
        _fh: u64,
        offset: i64,
        mut reply: ReplyDirectory,
    ) {
        if ino != 1 {
            reply.error(ENOENT);
            return;
        }

        let entries = vec![
            (1, FileType::Directory, "."),
            (1, FileType::Directory, ".."),
            (2, FileType::RegularFile, "passthrough"),
        ];

        for (i, entry) in entries.into_iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            if reply.add(entry.0, (i + 1) as i64, entry.1, entry.2) {
                break;
            }
        }
        reply.ok();
    }
}

fn main() {
    let matches = Command::new("hello")
        .version(crate_version!())
        .author("Allison Karlitskaya")
        .arg(
            Arg::new("MOUNT_POINT")
                .required(true)
                .index(1)
                .help("Act as a client, and mount FUSE at given path"),
        )
        .arg(
            Arg::new("auto_unmount")
                .long("auto_unmount")
                .action(ArgAction::SetTrue)
                .help("Automatically unmount on process exit"),
        )
        .arg(
            Arg::new("allow-root")
                .long("allow-root")
                .action(ArgAction::SetTrue)
                .help("Allow root user to access filesystem"),
        )
        .get_matches();

    env_logger::init();

    let mountpoint = matches.get_one::<String>("MOUNT_POINT").unwrap();
    let mut options = vec![MountOption::FSName("passthrough".to_string())];
    if matches.get_flag("auto_unmount") {
        options.push(MountOption::AutoUnmount);
    }
    if matches.get_flag("allow-root") {
        options.push(MountOption::AllowRoot);
    }

    let fs = PassthroughFs::new();
    fuser::mount2(fs, mountpoint, &options).unwrap();
}
