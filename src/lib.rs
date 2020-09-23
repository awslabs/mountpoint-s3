//! FUSE userspace library implementation
//!
//! This is an improved rewrite of the FUSE userspace library (lowlevel interface) to fully take
//! advantage of Rust's architecture. The only thing we rely on in the real libfuse are mount
//! and unmount calls which are needed to establish a fd to talk to the kernel driver.

#![warn(missing_docs, missing_debug_implementations, rust_2018_idioms)]

use libc::{c_int, ENOSYS};
use std::convert::AsRef;
use std::ffi::OsStr;
use std::io;
use std::path::Path;
use std::time::SystemTime;

pub use crate::fuse_abi::consts;
pub use crate::fuse_abi::FUSE_ROOT_ID;
#[cfg(target_os = "macos")]
pub use reply::ReplyXTimes;
pub use reply::ReplyXattr;
pub use reply::{Reply, ReplyAttr, ReplyData, ReplyEmpty, ReplyEntry, ReplyOpen};
pub use reply::{ReplyBmap, ReplyCreate, ReplyDirectory, ReplyLock, ReplyStatfs, ReplyWrite};
pub use request::Request;
pub use session::{BackgroundSession, Session};

mod channel;
mod fuse_abi;
mod fuse_sys;
mod ll;
mod reply;
mod request;
mod session;

/// File types
#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq)]
pub enum FileType {
    /// Named pipe (S_IFIFO)
    NamedPipe,
    /// Character device (S_IFCHR)
    CharDevice,
    /// Block device (S_IFBLK)
    BlockDevice,
    /// Directory (S_IFDIR)
    Directory,
    /// Regular file (S_IFREG)
    RegularFile,
    /// Symbolic link (S_IFLNK)
    Symlink,
    /// Unix domain socket (S_IFSOCK)
    Socket,
}

/// File attributes
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
pub struct FileAttr {
    /// Inode number
    pub ino: u64,
    /// Size in bytes
    pub size: u64,
    /// Size in blocks
    pub blocks: u64,
    /// Time of last access
    pub atime: SystemTime,
    /// Time of last modification
    pub mtime: SystemTime,
    /// Time of last change
    pub ctime: SystemTime,
    /// Time of creation (macOS only)
    pub crtime: SystemTime,
    /// Kind of file (directory, file, pipe, etc)
    pub kind: FileType,
    /// Permissions
    pub perm: u16,
    /// Number of hard links
    pub nlink: u32,
    /// User id
    pub uid: u32,
    /// Group id
    pub gid: u32,
    /// Rdev
    pub rdev: u32,
    /// Block size
    pub blksize: u32,
    /// Padding
    pub padding: u32,
    /// Flags (macOS only, see chflags(2))
    pub flags: u32,
}

/// Filesystem trait.
///
/// This trait must be implemented to provide a userspace filesystem via FUSE.
/// These methods correspond to fuse_lowlevel_ops in libfuse. Reasonable default
/// implementations are provided here to get a mountable filesystem that does
/// nothing.
#[allow(clippy::too_many_arguments)]
pub trait Filesystem {
    /// Initialize filesystem.
    /// Called before any other filesystem method.
    fn init(&mut self, _req: &Request<'_>) -> Result<(), c_int> {
        Ok(())
    }

    /// Clean up filesystem.
    /// Called on filesystem exit.
    fn destroy(&mut self, _req: &Request<'_>) {}

    /// Look up a directory entry by name and get its attributes.
    fn lookup(&mut self, _req: &Request<'_>, _parent: u64, _name: &OsStr, reply: ReplyEntry) {
        reply.error(ENOSYS);
    }

    /// Forget about an inode.
    /// The nlookup parameter indicates the number of lookups previously performed on
    /// this inode. If the filesystem implements inode lifetimes, it is recommended that
    /// inodes acquire a single reference on each lookup, and lose nlookup references on
    /// each forget. The filesystem may ignore forget calls, if the inodes don't need to
    /// have a limited lifetime. On unmount it is not guaranteed, that all referenced
    /// inodes will receive a forget message.
    fn forget(&mut self, _req: &Request<'_>, _ino: u64, _nlookup: u64) {}

    /// Get file attributes.
    fn getattr(&mut self, _req: &Request<'_>, _ino: u64, reply: ReplyAttr) {
        reply.error(ENOSYS);
    }

    /// Set file attributes.
    fn setattr(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _mode: Option<u32>,
        _uid: Option<u32>,
        _gid: Option<u32>,
        _size: Option<u64>,
        _atime: Option<SystemTime>,
        _atime_now: bool,
        _mtime: Option<SystemTime>,
        _mtime_now: bool,
        _fh: Option<u64>,
        _crtime: Option<SystemTime>,
        _chgtime: Option<SystemTime>,
        _bkuptime: Option<SystemTime>,
        _flags: Option<u32>,
        reply: ReplyAttr,
    ) {
        reply.error(ENOSYS);
    }

    /// Read symbolic link.
    fn readlink(&mut self, _req: &Request<'_>, _ino: u64, reply: ReplyData) {
        reply.error(ENOSYS);
    }

    /// Create file node.
    /// Create a regular file, character device, block device, fifo or socket node.
    fn mknod(
        &mut self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _mode: u32,
        _rdev: u32,
        reply: ReplyEntry,
    ) {
        reply.error(ENOSYS);
    }

    /// Create a directory.
    fn mkdir(
        &mut self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _mode: u32,
        reply: ReplyEntry,
    ) {
        reply.error(ENOSYS);
    }

    /// Remove a file.
    fn unlink(&mut self, _req: &Request<'_>, _parent: u64, _name: &OsStr, reply: ReplyEmpty) {
        reply.error(ENOSYS);
    }

    /// Remove a directory.
    fn rmdir(&mut self, _req: &Request<'_>, _parent: u64, _name: &OsStr, reply: ReplyEmpty) {
        reply.error(ENOSYS);
    }

    /// Create a symbolic link.
    fn symlink(
        &mut self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _link: &Path,
        reply: ReplyEntry,
    ) {
        reply.error(ENOSYS);
    }

    /// Rename a file.
    fn rename(
        &mut self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _newparent: u64,
        _newname: &OsStr,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// Create a hard link.
    fn link(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _newparent: u64,
        _newname: &OsStr,
        reply: ReplyEntry,
    ) {
        reply.error(ENOSYS);
    }

    /// Open a file.
    /// Open flags (with the exception of O_CREAT, O_EXCL, O_NOCTTY and O_TRUNC) are
    /// available in flags. Filesystem may store an arbitrary file handle (pointer, index,
    /// etc) in fh, and use this in other all other file operations (read, write, flush,
    /// release, fsync). Filesystem may also implement stateless file I/O and not store
    /// anything in fh. There are also some flags (direct_io, keep_cache) which the
    /// filesystem may set, to change the way the file is opened. See fuse_file_info
    /// structure in <fuse_common.h> for more details.
    fn open(&mut self, _req: &Request<'_>, _ino: u64, _flags: u32, reply: ReplyOpen) {
        reply.opened(0, 0);
    }

    /// Read data.
    /// Read should send exactly the number of bytes requested except on EOF or error,
    /// otherwise the rest of the data will be substituted with zeroes. An exception to
    /// this is when the file has been opened in 'direct_io' mode, in which case the
    /// return value of the read system call will reflect the return value of this
    /// operation. fh will contain the value set by the open method, or will be undefined
    /// if the open method didn't set any value.
    fn read(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _offset: i64,
        _size: u32,
        reply: ReplyData,
    ) {
        reply.error(ENOSYS);
    }

    /// Write data.
    /// Write should return exactly the number of bytes requested except on error. An
    /// exception to this is when the file has been opened in 'direct_io' mode, in
    /// which case the return value of the write system call will reflect the return
    /// value of this operation. fh will contain the value set by the open method, or
    /// will be undefined if the open method didn't set any value.
    fn write(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _offset: i64,
        _data: &[u8],
        _flags: u32,
        reply: ReplyWrite,
    ) {
        reply.error(ENOSYS);
    }

    /// Flush method.
    /// This is called on each close() of the opened file. Since file descriptors can
    /// be duplicated (dup, dup2, fork), for one open call there may be many flush
    /// calls. Filesystems shouldn't assume that flush will always be called after some
    /// writes, or that if will be called at all. fh will contain the value set by the
    /// open method, or will be undefined if the open method didn't set any value.
    /// NOTE: the name of the method is misleading, since (unlike fsync) the filesystem
    /// is not forced to flush pending writes. One reason to flush data, is if the
    /// filesystem wants to return write errors. If the filesystem supports file locking
    /// operations (setlk, getlk) it should remove all locks belonging to 'lock_owner'.
    fn flush(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _lock_owner: u64,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// Release an open file.
    /// Release is called when there are no more references to an open file: all file
    /// descriptors are closed and all memory mappings are unmapped. For every open
    /// call there will be exactly one release call. The filesystem may reply with an
    /// error, but error values are not returned to close() or munmap() which triggered
    /// the release. fh will contain the value set by the open method, or will be undefined
    /// if the open method didn't set any value. flags will contain the same flags as for
    /// open.
    fn release(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _flags: u32,
        _lock_owner: u64,
        _flush: bool,
        reply: ReplyEmpty,
    ) {
        reply.ok();
    }

    /// Synchronize file contents.
    /// If the datasync parameter is non-zero, then only the user data should be flushed,
    /// not the meta data.
    fn fsync(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _datasync: bool,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// Open a directory.
    /// Filesystem may store an arbitrary file handle (pointer, index, etc) in fh, and
    /// use this in other all other directory stream operations (readdir, releasedir,
    /// fsyncdir). Filesystem may also implement stateless directory I/O and not store
    /// anything in fh, though that makes it impossible to implement standard conforming
    /// directory stream operations in case the contents of the directory can change
    /// between opendir and releasedir.
    fn opendir(&mut self, _req: &Request<'_>, _ino: u64, _flags: u32, reply: ReplyOpen) {
        reply.opened(0, 0);
    }

    /// Read directory.
    /// Send a buffer filled using buffer.fill(), with size not exceeding the
    /// requested size. Send an empty buffer on end of stream. fh will contain the
    /// value set by the opendir method, or will be undefined if the opendir method
    /// didn't set any value.
    fn readdir(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _offset: i64,
        reply: ReplyDirectory,
    ) {
        reply.error(ENOSYS);
    }

    /// Release an open directory.
    /// For every opendir call there will be exactly one releasedir call. fh will
    /// contain the value set by the opendir method, or will be undefined if the
    /// opendir method didn't set any value.
    fn releasedir(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _flags: u32,
        reply: ReplyEmpty,
    ) {
        reply.ok();
    }

    /// Synchronize directory contents.
    /// If the datasync parameter is set, then only the directory contents should
    /// be flushed, not the meta data. fh will contain the value set by the opendir
    /// method, or will be undefined if the opendir method didn't set any value.
    fn fsyncdir(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _datasync: bool,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// Get file system statistics.
    fn statfs(&mut self, _req: &Request<'_>, _ino: u64, reply: ReplyStatfs) {
        reply.statfs(0, 0, 0, 0, 0, 512, 255, 0);
    }

    /// Set an extended attribute.
    fn setxattr(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _name: &OsStr,
        _value: &[u8],
        _flags: u32,
        _position: u32,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// Get an extended attribute.
    /// If `size` is 0, the size of the value should be sent with `reply.size()`.
    /// If `size` is not 0, and the value fits, send it with `reply.data()`, or
    /// `reply.error(ERANGE)` if it doesn't.
    fn getxattr(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _name: &OsStr,
        _size: u32,
        reply: ReplyXattr,
    ) {
        reply.error(ENOSYS);
    }

    /// List extended attribute names.
    /// If `size` is 0, the size of the value should be sent with `reply.size()`.
    /// If `size` is not 0, and the value fits, send it with `reply.data()`, or
    /// `reply.error(ERANGE)` if it doesn't.
    fn listxattr(&mut self, _req: &Request<'_>, _ino: u64, _size: u32, reply: ReplyXattr) {
        reply.error(ENOSYS);
    }

    /// Remove an extended attribute.
    fn removexattr(&mut self, _req: &Request<'_>, _ino: u64, _name: &OsStr, reply: ReplyEmpty) {
        reply.error(ENOSYS);
    }

    /// Check file access permissions.
    /// This will be called for the access() system call. If the 'default_permissions'
    /// mount option is given, this method is not called. This method is not called
    /// under Linux kernel versions 2.4.x
    fn access(&mut self, _req: &Request<'_>, _ino: u64, _mask: u32, reply: ReplyEmpty) {
        reply.error(ENOSYS);
    }

    /// Create and open a file.
    /// If the file does not exist, first create it with the specified mode, and then
    /// open it. Open flags (with the exception of O_NOCTTY) are available in flags.
    /// Filesystem may store an arbitrary file handle (pointer, index, etc) in fh,
    /// and use this in other all other file operations (read, write, flush, release,
    /// fsync). There are also some flags (direct_io, keep_cache) which the
    /// filesystem may set, to change the way the file is opened. See fuse_file_info
    /// structure in <fuse_common.h> for more details. If this method is not
    /// implemented or under Linux kernel versions earlier than 2.6.15, the mknod()
    /// and open() methods will be called instead.
    fn create(
        &mut self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _mode: u32,
        _flags: u32,
        reply: ReplyCreate,
    ) {
        reply.error(ENOSYS);
    }

    /// Test for a POSIX file lock.
    fn getlk(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _lock_owner: u64,
        _start: u64,
        _end: u64,
        _typ: u32,
        _pid: u32,
        reply: ReplyLock,
    ) {
        reply.error(ENOSYS);
    }

    /// Acquire, modify or release a POSIX file lock.
    /// For POSIX threads (NPTL) there's a 1-1 relation between pid and owner, but
    /// otherwise this is not always the case.  For checking lock ownership,
    /// 'fi->owner' must be used. The l_pid field in 'struct flock' should only be
    /// used to fill in this field in getlk(). Note: if the locking methods are not
    /// implemented, the kernel will still allow file locking to work locally.
    /// Hence these are only interesting for network filesystems and similar.
    fn setlk(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _lock_owner: u64,
        _start: u64,
        _end: u64,
        _typ: u32,
        _pid: u32,
        _sleep: bool,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// Map block index within file to block index within device.
    /// Note: This makes sense only for block device backed filesystems mounted
    /// with the 'blkdev' option
    fn bmap(
        &mut self,
        _req: &Request<'_>,
        _ino: u64,
        _blocksize: u32,
        _idx: u64,
        reply: ReplyBmap,
    ) {
        reply.error(ENOSYS);
    }

    /// macOS only: Rename the volume. Set fuse_init_out.flags during init to
    /// FUSE_VOL_RENAME to enable
    #[cfg(target_os = "macos")]
    fn setvolname(&mut self, _req: &Request<'_>, _name: &OsStr, reply: ReplyEmpty) {
        reply.error(ENOSYS);
    }

    /// macOS only (undocumented)
    #[cfg(target_os = "macos")]
    fn exchange(
        &mut self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _newparent: u64,
        _newname: &OsStr,
        _options: u64,
        reply: ReplyEmpty,
    ) {
        reply.error(ENOSYS);
    }

    /// macOS only: Query extended times (bkuptime and crtime). Set fuse_init_out.flags
    /// during init to FUSE_XTIMES to enable
    #[cfg(target_os = "macos")]
    fn getxtimes(&mut self, _req: &Request<'_>, _ino: u64, reply: ReplyXTimes) {
        reply.error(ENOSYS);
    }
}

/// Mount the given filesystem to the given mountpoint. This function will
/// not return until the filesystem is unmounted.
///
/// Note that you need to lead each option with a separate `"-o"` string. See
/// `examples/hello.rs`.
pub fn mount<FS: Filesystem, P: AsRef<Path>>(
    filesystem: FS,
    mountpoint: P,
    options: &[&OsStr],
) -> io::Result<()> {
    Session::new(filesystem, mountpoint.as_ref(), options).and_then(|mut se| se.run())
}

/// Mount the given filesystem to the given mountpoint. This function spawns
/// a background thread to handle filesystem operations while being mounted
/// and therefore returns immediately. The returned handle should be stored
/// to reference the mounted filesystem. If it's dropped, the filesystem will
/// be unmounted.
pub unsafe fn spawn_mount<'a, FS: Filesystem + Send + 'a, P: AsRef<Path>>(
    filesystem: FS,
    mountpoint: P,
    options: &[&OsStr],
) -> io::Result<BackgroundSession<'a>> {
    Session::new(filesystem, mountpoint.as_ref(), options).and_then(|se| se.spawn())
}
