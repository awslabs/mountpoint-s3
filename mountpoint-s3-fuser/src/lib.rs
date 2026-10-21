//! FUSE userspace library implementation
//!
//! This is an improved rewrite of the FUSE userspace library (lowlevel interface) to fully take
//! advantage of Rust's architecture. The only thing we rely on in the real libfuse are mount
//! and unmount calls which are needed to establish a fd to talk to the kernel driver.

#![warn(
    missing_docs,
    missing_debug_implementations,
    rust_2018_idioms,
    unreachable_pub
)]

use std::cmp::max;
use std::cmp::min;
use std::convert::AsRef;
use std::ffi::OsStr;
use std::io;
use std::os::unix::fs::FileTypeExt;
use std::path::Path;
use std::time::Duration;
use std::time::SystemTime;

use log::warn;
#[cfg(target_os = "macos")]
pub use reply::ReplyXTimes;
#[cfg(feature = "serializable")]
use serde::Deserialize;
#[cfg(feature = "serializable")]
use serde::Serialize;

pub use crate::access_flags::AccessFlags;
pub use crate::bsd_file_flags::BsdFileFlags;
use crate::forget_one::ForgetOne;
pub use crate::ll::Errno;
pub use crate::ll::Generation;
pub use crate::ll::RequestId;
pub use crate::ll::TimeOrNow;
pub use crate::ll::flags::copy_file_range_flags::CopyFileRangeFlags;
pub use crate::ll::flags::fopen_flags::FopenFlags;
pub use crate::ll::flags::init_flags::InitFlags;
pub use crate::ll::flags::ioctl_flags::IoctlFlags;
pub use crate::ll::flags::poll_flags::PollFlags;
pub use crate::ll::flags::write_flags::WriteFlags;
pub use crate::ll::fuse_abi::consts;
pub use crate::ll::request::FileHandle;
pub use crate::ll::request::INodeNo;
pub use crate::ll::request::LockOwner;
pub use crate::ll::request::Version;
pub use crate::mnt::mount_options::Config;
pub use crate::mnt::mount_options::MountOption;
use crate::mnt::mount_options::check_option_conflicts;
pub use crate::notify::Notifier;
pub use crate::notify::PollHandle;
pub use crate::notify::PollNotifier;
pub use crate::open_flags::OpenAccMode;
pub use crate::open_flags::OpenFlags;
pub use crate::passthrough::BackingId;
pub use crate::poll_events::PollEvents;
pub use crate::rename_flags::RenameFlags;
pub use crate::reply::ReplyAttr;
pub use crate::reply::ReplyBmap;
pub use crate::reply::ReplyCreate;
pub use crate::reply::ReplyData;
pub use crate::reply::ReplyDirectory;
pub use crate::reply::ReplyDirectoryPlus;
pub use crate::reply::ReplyEmpty;
pub use crate::reply::ReplyEntry;
pub use crate::reply::ReplyIoctl;
pub use crate::reply::ReplyLock;
pub use crate::reply::ReplyLseek;
pub use crate::reply::ReplyOpen;
pub use crate::reply::ReplyPoll;
pub use crate::reply::ReplyStatfs;
pub use crate::reply::ReplyWrite;
pub use crate::reply::ReplyXattr;
pub use crate::request_param::Request;
pub use crate::session::BackgroundSession;
use crate::session::MAX_WRITE_SIZE;
pub use crate::session::Session;
pub use crate::session::SessionACL;
pub use crate::session::SessionUnmounter;

mod access_flags;
mod bsd_file_flags;
mod channel;
mod dev_fuse;
/// Experimental APIs
#[cfg(feature = "experimental")]
pub mod experimental;
mod forget_one;
mod ll;
mod mnt;
mod notify;
mod open_flags;
mod passthrough;
mod poll_events;
mod read_buf;
mod rename_flags;
mod reply;
mod request;
mod request_param;
mod session;
mod time;

/// We generally support async reads
#[cfg(not(target_os = "macos"))]
const INIT_FLAGS: InitFlags = InitFlags::FUSE_ASYNC_READ.union(InitFlags::FUSE_BIG_WRITES);
// TODO: Add FUSE_EXPORT_SUPPORT

/// On macOS, we additionally support case insensitiveness, volume renames and xtimes
/// TODO: we should eventually let the filesystem implementation decide which flags to set
#[cfg(target_os = "macos")]
const INIT_FLAGS: InitFlags = InitFlags::FUSE_ASYNC_READ
    .union(InitFlags::FUSE_CASE_INSENSITIVE)
    .union(InitFlags::FUSE_VOL_RENAME)
    .union(InitFlags::FUSE_XTIMES);
// TODO: Add FUSE_EXPORT_SUPPORT and FUSE_BIG_WRITES (requires ABI 7.10)

fn default_init_flags(capabilities: InitFlags) -> InitFlags {
    let mut flags = INIT_FLAGS;
    if capabilities.contains(InitFlags::FUSE_MAX_PAGES) {
        flags |= InitFlags::FUSE_MAX_PAGES;
    }
    flags
}

/// File types
#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq)]
#[cfg_attr(feature = "serializable", derive(Serialize, Deserialize))]
pub enum FileType {
    /// Named pipe (`S_IFIFO`)
    NamedPipe,
    /// Character device (`S_IFCHR`)
    CharDevice,
    /// Block device (`S_IFBLK`)
    BlockDevice,
    /// Directory (`S_IFDIR`)
    Directory,
    /// Regular file (`S_IFREG`)
    RegularFile,
    /// Symbolic link (`S_IFLNK`)
    Symlink,
    /// Unix domain socket (`S_IFSOCK`)
    Socket,
}

impl FileType {
    /// Convert std `FileType` to fuser `FileType`.
    pub fn from_std(file_type: std::fs::FileType) -> Option<Self> {
        if file_type.is_file() {
            Some(FileType::RegularFile)
        } else if file_type.is_dir() {
            Some(FileType::Directory)
        } else if file_type.is_symlink() {
            Some(FileType::Symlink)
        } else if file_type.is_fifo() {
            Some(FileType::NamedPipe)
        } else if file_type.is_socket() {
            Some(FileType::Socket)
        } else if file_type.is_char_device() {
            Some(FileType::CharDevice)
        } else if file_type.is_block_device() {
            Some(FileType::BlockDevice)
        } else {
            None
        }
    }
}

/// File attributes
#[derive(Clone, Copy, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serializable", derive(Serialize, Deserialize))]
pub struct FileAttr {
    /// Inode number
    pub ino: INodeNo,
    /// Size in bytes
    pub size: u64,
    /// Allocated size in 512-byte blocks. May be smaller than the actual file size
    /// if the file is compressed, for example.
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
    /// Block size to be reported by `stat()`. If unsure, set to 4096.
    pub blksize: u32,
    /// Flags (macOS only, see chflags(2))
    pub flags: u32,
}

/// Configuration of the fuse kernel module connection
#[derive(Debug)]
pub struct KernelConfig {
    capabilities: InitFlags,
    requested: InitFlags,
    max_readahead: u32,
    max_max_readahead: u32,
    max_background: u16,
    congestion_threshold: Option<u16>,
    max_write: u32,
    time_gran: Duration,
    max_stack_depth: u32,
    kernel_abi: Version,
}

impl KernelConfig {
    fn new(capabilities: InitFlags, max_readahead: u32, kernel_abi: Version) -> Self {
        Self {
            capabilities,
            requested: default_init_flags(capabilities),
            max_readahead,
            max_max_readahead: max_readahead,
            max_background: 16,
            congestion_threshold: None,
            // use a max write size that fits into the session's buffer
            max_write: MAX_WRITE_SIZE as u32,
            // 1ns means nano-second granularity.
            time_gran: Duration::new(0, 1),
            max_stack_depth: 0,
            kernel_abi,
        }
    }

    /// Set the maximum stacking depth of the filesystem
    ///
    /// This has to be at least 1 to support passthrough to backing files.  Setting this to 0 (the
    /// default) effectively disables support for passthrough.
    ///
    /// With `max_stack_depth` > 1, the backing files can be on a stacked fs (e.g. overlayfs)
    /// themselves and with `max_stack_depth` == 1, this FUSE filesystem can be stacked as the
    /// underlying fs of a stacked fs (e.g. overlayfs).
    ///
    /// The kernel currently has a hard maximum value of 2.  Anything higher won't work.
    ///
    /// On success, returns the previous value.  
    /// # Errors
    /// If argument is too large, returns the nearest value which will succeed.
    pub fn set_max_stack_depth(&mut self, value: u32) -> Result<u32, u32> {
        // https://lore.kernel.org/linux-fsdevel/CAOYeF9V_n93OEF_uf0Gwtd=+da0ReX8N2aaT6RfEJ9DPvs8O2w@mail.gmail.com/
        const FILESYSTEM_MAX_STACK_DEPTH: u32 = 2;

        if value > FILESYSTEM_MAX_STACK_DEPTH {
            return Err(FILESYSTEM_MAX_STACK_DEPTH);
        }

        let previous = self.max_stack_depth;
        self.max_stack_depth = value;
        Ok(previous)
    }

    /// Set the timestamp granularity
    ///
    /// Must be a power of 10 nanoseconds. i.e. 1s, 0.1s, 0.01s, 1ms, 0.1ms...etc
    ///
    /// On success returns the previous value.  
    /// # Errors
    /// If the argument does not match any valid granularity, returns the nearest value which will succeed.
    pub fn set_time_granularity(&mut self, value: Duration) -> Result<Duration, Duration> {
        if value.as_nanos() == 0 {
            return Err(Duration::new(0, 1));
        }
        if value.as_secs() > 1 || (value.as_secs() == 1 && value.subsec_nanos() > 0) {
            return Err(Duration::new(1, 0));
        }
        let mut power_of_10 = 1;
        while power_of_10 < value.as_nanos() {
            if value.as_nanos() < power_of_10 * 10 {
                // value must not be a power of ten, since power_of_10 < value < power_of_10 * 10
                return Err(Duration::new(0, power_of_10 as u32));
            }
            power_of_10 *= 10;
        }
        let previous = self.time_gran;
        self.time_gran = value;
        Ok(previous)
    }

    /// Set the maximum write size for a single request
    ///
    /// On success returns the previous value.
    /// # Errors
    /// If the argument is too large, returns the nearest value which will succeed.
    pub fn set_max_write(&mut self, value: u32) -> Result<u32, u32> {
        if value == 0 {
            return Err(1);
        }
        if value > MAX_WRITE_SIZE as u32 {
            return Err(MAX_WRITE_SIZE as u32);
        }
        let previous = self.max_write;
        self.max_write = value;
        Ok(previous)
    }

    /// Set the maximum readahead size
    ///
    /// On success returns the previous value.
    /// # Errors
    /// If the argument is too large, returns the nearest value which will succeed.
    pub fn set_max_readahead(&mut self, value: u32) -> Result<u32, u32> {
        if value == 0 {
            return Err(1);
        }
        if value > self.max_max_readahead {
            return Err(self.max_max_readahead);
        }
        let previous = self.max_readahead;
        self.max_readahead = value;
        Ok(previous)
    }

    /// Query kernel capabilities.
    pub fn capabilities(&self) -> InitFlags {
        self.capabilities & !InitFlags::FUSE_INIT_EXT
    }

    /// Kernel ABI version.
    pub fn kernel_abi(&self) -> Version {
        self.kernel_abi
    }

    /// Add a set of capabilities.
    ///
    /// # Errors
    /// When the argument includes capabilities not supported by the kernel, returns the bits of the capabilities not supported.
    pub fn add_capabilities(&mut self, capabilities_to_add: InitFlags) -> Result<(), InitFlags> {
        if !self.capabilities.contains(capabilities_to_add) {
            let unsupported = capabilities_to_add & !self.capabilities;
            return Err(unsupported);
        }
        self.requested |= capabilities_to_add;
        Ok(())
    }

    /// Set the maximum number of pending background requests. Such as readahead requests.
    ///
    /// On success returns the previous value.
    /// # Errors
    /// If the argument is too small, returns the nearest value which will succeed.
    pub fn set_max_background(&mut self, value: u16) -> Result<u16, u16> {
        if value == 0 {
            return Err(1);
        }
        let previous = self.max_background;
        self.max_background = value;
        Ok(previous)
    }

    /// Set the threshold of background requests at which the kernel will consider the filesystem
    /// request queue congested. (it may then switch to sleeping instead of spin-waiting, for example)
    ///
    /// On success returns the previous value.
    /// # Errors
    /// If the argument is too small, returns the nearest value which will succeed.
    pub fn set_congestion_threshold(&mut self, value: u16) -> Result<u16, u16> {
        if value == 0 {
            return Err(1);
        }
        let previous = self.congestion_threshold();
        self.congestion_threshold = Some(value);
        Ok(previous)
    }

    fn congestion_threshold(&self) -> u16 {
        match self.congestion_threshold {
            // Default to a threshold of 3/4 of the max background threads
            None => (u32::from(self.max_background) * 3 / 4) as u16,
            Some(value) => min(value, self.max_background),
        }
    }

    fn max_pages(&self) -> u16 {
        ((max(self.max_write, self.max_readahead) - 1) / page_size::get() as u32) as u16 + 1
    }
}

/// Filesystem trait.
///
/// This trait must be implemented to provide a userspace filesystem via FUSE.
/// These methods correspond to `fuse_lowlevel_ops` in libfuse. Reasonable default
/// implementations are provided here to get a mountable filesystem that does
/// nothing.
#[allow(clippy::too_many_arguments)]
pub trait Filesystem: Send + Sync + 'static {
    /// Initialize filesystem.
    /// Called before any other filesystem method.
    /// The kernel module connection can be configured using the `KernelConfig` object
    fn init(&mut self, _req: &Request, _config: &mut KernelConfig) -> io::Result<()> {
        Ok(())
    }

    /// Clean up filesystem.
    /// Called on filesystem exit.
    fn destroy(&mut self) {}

    /// Look up a directory entry by name and get its attributes.
    fn lookup(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEntry) {
        warn!("[Not Implemented] lookup(parent: {parent:#x?}, name {name:?})");
        reply.error(Errno::ENOSYS);
    }

    /// Forget about an inode.
    /// The nlookup parameter indicates the number of lookups previously performed on
    /// this inode. If the filesystem implements inode lifetimes, it is recommended that
    /// inodes acquire a single reference on each lookup, and lose nlookup references on
    /// each forget. The filesystem may ignore forget calls, if the inodes don't need to
    /// have a limited lifetime. On unmount it is not guaranteed, that all referenced
    /// inodes will receive a forget message.
    fn forget(&self, _req: &Request, _ino: INodeNo, _nlookup: u64) {}

    /// Like [`forget`](Self::forget), but take multiple forget requests at once for performance. The default
    /// implementation will fallback to `forget`.
    fn batch_forget(&self, req: &Request, nodes: &[ForgetOne]) {
        for node in nodes {
            self.forget(req, node.nodeid(), node.nlookup());
        }
    }

    /// Get file attributes.
    fn getattr(&self, _req: &Request, ino: INodeNo, fh: Option<FileHandle>, reply: ReplyAttr) {
        warn!("[Not Implemented] getattr(ino: {ino:#x?}, fh: {fh:#x?})");
        reply.error(Errno::ENOSYS);
    }

    /// Set file attributes.
    fn setattr(
        &self,
        _req: &Request,
        ino: INodeNo,
        mode: Option<u32>,
        uid: Option<u32>,
        gid: Option<u32>,
        size: Option<u64>,
        _atime: Option<TimeOrNow>,
        _mtime: Option<TimeOrNow>,
        _ctime: Option<SystemTime>,
        fh: Option<FileHandle>,
        _crtime: Option<SystemTime>,
        _chgtime: Option<SystemTime>,
        _bkuptime: Option<SystemTime>,
        flags: Option<BsdFileFlags>,
        reply: ReplyAttr,
    ) {
        warn!(
            "[Not Implemented] setattr(ino: {ino:#x?}, mode: {mode:?}, uid: {uid:?}, \
            gid: {gid:?}, size: {size:?}, fh: {fh:?}, flags: {flags:?})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Read symbolic link.
    fn readlink(&self, _req: &Request, ino: INodeNo, reply: ReplyData) {
        warn!("[Not Implemented] readlink(ino: {ino:#x?})");
        reply.error(Errno::ENOSYS);
    }

    /// Create file node.
    /// Create a regular file, character device, block device, fifo or socket node.
    fn mknod(
        &self,
        _req: &Request,
        parent: INodeNo,
        name: &OsStr,
        mode: u32,
        umask: u32,
        rdev: u32,
        reply: ReplyEntry,
    ) {
        warn!(
            "[Not Implemented] mknod(parent: {parent:#x?}, name: {name:?}, \
            mode: {mode}, umask: {umask:#x?}, rdev: {rdev})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Create a directory.
    fn mkdir(
        &self,
        _req: &Request,
        parent: INodeNo,
        name: &OsStr,
        mode: u32,
        umask: u32,
        reply: ReplyEntry,
    ) {
        warn!(
            "[Not Implemented] mkdir(parent: {parent:#x?}, name: {name:?}, mode: {mode}, umask: {umask:#x?})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Remove a file.
    fn unlink(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEmpty) {
        warn!("[Not Implemented] unlink(parent: {parent:#x?}, name: {name:?})",);
        reply.error(Errno::ENOSYS);
    }

    /// Remove a directory.
    fn rmdir(&self, _req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEmpty) {
        warn!("[Not Implemented] rmdir(parent: {parent:#x?}, name: {name:?})",);
        reply.error(Errno::ENOSYS);
    }

    /// Create a symbolic link.
    fn symlink(
        &self,
        _req: &Request,
        parent: INodeNo,
        link_name: &OsStr,
        target: &Path,
        reply: ReplyEntry,
    ) {
        warn!(
            "[Not Implemented] symlink(parent: {parent:#x?}, link_name: {link_name:?}, target: {target:?})",
        );
        reply.error(Errno::EPERM);
    }

    /// Rename a file.
    fn rename(
        &self,
        _req: &Request,
        parent: INodeNo,
        name: &OsStr,
        newparent: INodeNo,
        newname: &OsStr,
        flags: RenameFlags,
        reply: ReplyEmpty,
    ) {
        warn!(
            "[Not Implemented] rename(parent: {parent:#x?}, name: {name:?}, \
            newparent: {newparent:#x?}, newname: {newname:?}, flags: {flags})",
        );
        reply.error(Errno::ENOSYS);
    }

    /// Create a hard link.
    fn link(
        &self,
        _req: &Request,
        ino: INodeNo,
        newparent: INodeNo,
        newname: &OsStr,
        reply: ReplyEntry,
    ) {
        warn!(
            "[Not Implemented] link(ino: {ino:#x?}, newparent: {newparent:#x?}, newname: {newname:?})"
        );
        reply.error(Errno::EPERM);
    }

    /// Open a file.
    /// Open flags (with the exception of `O_CREAT`, `O_EXCL`, `O_NOCTTY` and `O_TRUNC`) are
    /// available in flags. Filesystem may store an arbitrary file handle (pointer, index,
    /// etc) in fh, and use this in other all other file operations (read, write, flush,
    /// release, fsync). Filesystem may also implement stateless file I/O and not store
    /// anything in fh. There are also some flags (`direct_io`, `keep_cache`) which the
    /// filesystem may set, to change the way the file is opened. See `fuse_file_info`
    /// structure in <`fuse_common.h`> for more details.
    fn open(&self, _req: &Request, _ino: INodeNo, _flags: OpenFlags, reply: ReplyOpen) {
        reply.opened(FileHandle(0), FopenFlags::empty());
    }

    /// Read data.
    /// Read should send exactly the number of bytes requested except on EOF or error,
    /// otherwise the rest of the data will be substituted with zeroes. An exception to
    /// this is when the file has been opened in `direct_io` mode, in which case the
    /// return value of the read system call will reflect the return value of this
    /// operation. fh will contain the value set by the open method, or will be undefined
    /// if the open method didn't set any value.
    ///
    /// flags: these are the file flags, such as `O_SYNC`. Only supported with ABI >= 7.9
    /// `lock_owner`: only supported with ABI >= 7.9
    fn read(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        size: u32,
        flags: OpenFlags,
        lock_owner: Option<LockOwner>,
        reply: ReplyData,
    ) {
        warn!(
            "[Not Implemented] read(ino: {ino:#x?}, fh: {fh}, offset: {offset}, \
            size: {size}, flags: {flags:#x?}, lock_owner: {lock_owner:?})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Write data.
    /// Write should return exactly the number of bytes requested except on error. An
    /// exception to this is when the file has been opened in `direct_io` mode, in
    /// which case the return value of the write system call will reflect the return
    /// value of this operation. fh will contain the value set by the open method, or
    /// will be undefined if the open method didn't set any value.
    ///
    /// `write_flags`: will contain `FUSE_WRITE_CACHE`, if this write is from the page cache. If set,
    /// the pid, uid, gid, and fh may not match the value that would have been sent if write cachin
    /// is disabled
    /// flags: these are the file flags, such as `O_SYNC`. Only supported with ABI >= 7.9
    /// `lock_owner`: only supported with ABI >= 7.9
    fn write(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        data: &[u8],
        write_flags: WriteFlags,
        flags: OpenFlags,
        lock_owner: Option<LockOwner>,
        reply: ReplyWrite,
    ) {
        warn!(
            "[Not Implemented] write(ino: {ino:#x?}, fh: {fh}, offset: {offset}, \
            data.len(): {}, write_flags: {write_flags:#x?}, flags: {flags:#x?}, \
            lock_owner: {lock_owner:?})",
            data.len()
        );
        reply.error(Errno::ENOSYS);
    }

    /// Flush method.
    /// This is called on each `close()` of the opened file. Since file descriptors can
    /// be duplicated (dup, dup2, fork), for one open call there may be many flush
    /// calls. Filesystems shouldn't assume that flush will always be called after some
    /// writes, or that if will be called at all. fh will contain the value set by the
    /// open method, or will be undefined if the open method didn't set any value.
    /// NOTE: the name of the method is misleading, since (unlike fsync) the filesystem
    /// is not forced to flush pending writes. One reason to flush data, is if the
    /// filesystem wants to return write errors. If the filesystem supports file locking
    /// operations (`setlk`, `getlk`) it should remove all locks belonging to `lock_owner`.
    fn flush(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        lock_owner: LockOwner,
        reply: ReplyEmpty,
    ) {
        warn!("[Not Implemented] flush(ino: {ino:#x?}, fh: {fh}, lock_owner: {lock_owner:?})");
        reply.error(Errno::ENOSYS);
    }

    /// Release an open file.
    /// Release is called when there are no more references to an open file: all file
    /// descriptors are closed and all memory mappings are unmapped. For every open
    /// call there will be exactly one release call. The filesystem may reply with an
    /// error, but error values are not returned to `close()` or `munmap()` which triggered
    /// the release. fh will contain the value set by the open method, or will be undefined
    /// if the open method didn't set any value. flags will contain the same flags as for
    /// open.
    fn release(
        &self,
        _req: &Request,
        _ino: INodeNo,
        _fh: FileHandle,
        _flags: OpenFlags,
        _lock_owner: Option<LockOwner>,
        _flush: bool,
        reply: ReplyEmpty,
    ) {
        reply.ok();
    }

    /// Synchronize file contents.
    /// If the datasync parameter is non-zero, then only the user data should be flushed,
    /// not the meta data.
    fn fsync(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        datasync: bool,
        reply: ReplyEmpty,
    ) {
        warn!("[Not Implemented] fsync(ino: {ino:#x?}, fh: {fh}, datasync: {datasync})");
        reply.error(Errno::ENOSYS);
    }

    /// Open a directory.
    /// Filesystem may store an arbitrary file handle (pointer, index, etc) in fh, and
    /// use this in other all other directory stream operations (readdir, releasedir,
    /// fsyncdir). Filesystem may also implement stateless directory I/O and not store
    /// anything in fh, though that makes it impossible to implement standard conforming
    /// directory stream operations in case the contents of the directory can change
    /// between opendir and releasedir.
    fn opendir(&self, _req: &Request, _ino: INodeNo, _flags: OpenFlags, reply: ReplyOpen) {
        reply.opened(FileHandle(0), FopenFlags::empty());
    }

    /// Read directory.
    /// Send a buffer filled using `buffer.fill()`, with size not exceeding the
    /// requested size. Send an empty buffer on end of stream. fh will contain the
    /// value set by the opendir method, or will be undefined if the opendir method
    /// didn't set any value.
    fn readdir(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        reply: ReplyDirectory,
    ) {
        warn!("[Not Implemented] readdir(ino: {ino:#x?}, fh: {fh}, offset: {offset})");
        reply.error(Errno::ENOSYS);
    }

    /// Read directory.
    /// Send a buffer filled using `buffer.fill()`, with size not exceeding the
    /// requested size. Send an empty buffer on end of stream. fh will contain the
    /// value set by the opendir method, or will be undefined if the opendir method
    /// didn't set any value.
    fn readdirplus(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        reply: ReplyDirectoryPlus,
    ) {
        warn!("[Not Implemented] readdirplus(ino: {ino:#x?}, fh: {fh}, offset: {offset})");
        reply.error(Errno::ENOSYS);
    }

    /// Release an open directory.
    /// For every opendir call there will be exactly one releasedir call. fh will
    /// contain the value set by the opendir method, or will be undefined if the
    /// opendir method didn't set any value.
    fn releasedir(
        &self,
        _req: &Request,
        _ino: INodeNo,
        _fh: FileHandle,
        _flags: OpenFlags,
        reply: ReplyEmpty,
    ) {
        reply.ok();
    }

    /// Synchronize directory contents.
    /// If the datasync parameter is set, then only the directory contents should
    /// be flushed, not the meta data. fh will contain the value set by the opendir
    /// method, or will be undefined if the opendir method didn't set any value.
    fn fsyncdir(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        datasync: bool,
        reply: ReplyEmpty,
    ) {
        warn!("[Not Implemented] fsyncdir(ino: {ino:#x?}, fh: {fh}, datasync: {datasync})");
        reply.error(Errno::ENOSYS);
    }

    /// Get file system statistics.
    fn statfs(&self, _req: &Request, _ino: INodeNo, reply: ReplyStatfs) {
        reply.statfs(0, 0, 0, 0, 0, 512, 255, 0);
    }

    /// Set an extended attribute.
    fn setxattr(
        &self,
        _req: &Request,
        ino: INodeNo,
        name: &OsStr,
        _value: &[u8],
        flags: i32,
        position: u32,
        reply: ReplyEmpty,
    ) {
        warn!(
            "[Not Implemented] setxattr(ino: {ino:#x?}, name: {name:?}, \
            flags: {flags:#x?}, position: {position})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Get an extended attribute.
    /// If `size` is 0, the size of the value should be sent with `reply.size()`.
    /// If `size` is not 0, and the value fits, send it with `reply.data()`, or
    /// `reply.error(ERANGE)` if it doesn't.
    fn getxattr(&self, _req: &Request, ino: INodeNo, name: &OsStr, size: u32, reply: ReplyXattr) {
        warn!("[Not Implemented] getxattr(ino: {ino:#x?}, name: {name:?}, size: {size})");
        reply.error(Errno::ENOSYS);
    }

    /// List extended attribute names.
    /// If `size` is 0, the size of the value should be sent with `reply.size()`.
    /// If `size` is not 0, and the value fits, send it with `reply.data()`, or
    /// `reply.error(ERANGE)` if it doesn't.
    fn listxattr(&self, _req: &Request, ino: INodeNo, size: u32, reply: ReplyXattr) {
        warn!("[Not Implemented] listxattr(ino: {ino:#x?}, size: {size})");
        reply.error(Errno::ENOSYS);
    }

    /// Remove an extended attribute.
    fn removexattr(&self, _req: &Request, ino: INodeNo, name: &OsStr, reply: ReplyEmpty) {
        warn!("[Not Implemented] removexattr(ino: {ino:#x?}, name: {name:?})");
        reply.error(Errno::ENOSYS);
    }

    /// Check file access permissions.
    /// This will be called for the `access()` system call. If the `default_permissions`
    /// mount option is given, this method is not called. This method is not called
    /// under Linux kernel versions 2.4.x
    fn access(&self, _req: &Request, ino: INodeNo, mask: AccessFlags, reply: ReplyEmpty) {
        warn!("[Not Implemented] access(ino: {ino:#x?}, mask: {mask})");
        reply.error(Errno::ENOSYS);
    }

    /// Create and open a file.
    /// If the file does not exist, first create it with the specified mode, and then
    /// open it. You can use any open flags in the flags parameter except `O_NOCTTY`.
    /// The filesystem can store any type of file handle (such as a pointer or index)
    /// in fh, which can then be used across all subsequent file operations including
    /// read, write, flush, release, and fsync. Additionally, the filesystem may set
    /// certain flags like `direct_io` and `keep_cache` to change the way the file is
    /// opened. See `fuse_file_info` structure in <`fuse_common.h`> for more details. If
    /// this method is not implemented or under Linux kernel versions earlier than
    /// 2.6.15, the `mknod()` and `open()` methods will be called instead.
    fn create(
        &self,
        _req: &Request,
        parent: INodeNo,
        name: &OsStr,
        mode: u32,
        umask: u32,
        flags: i32,
        reply: ReplyCreate,
    ) {
        warn!(
            "[Not Implemented] create(parent: {parent:#x?}, name: {name:?}, mode: {mode}, \
            umask: {umask:#x?}, flags: {flags:#x?})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Test for a POSIX file lock.
    fn getlk(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        lock_owner: LockOwner,
        start: u64,
        end: u64,
        typ: i32,
        pid: u32,
        reply: ReplyLock,
    ) {
        warn!(
            "[Not Implemented] getlk(ino: {ino:#x?}, fh: {fh}, lock_owner: {lock_owner}, \
            start: {start}, end: {end}, typ: {typ}, pid: {pid})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Acquire, modify or release a POSIX file lock.
    /// For POSIX threads (NPTL) there's a 1-1 relation between pid and owner, but
    /// otherwise this is not always the case.  For checking lock ownership,
    /// 'fi->owner' must be used. The `l_pid` field in 'struct flock' should only be
    /// used to fill in this field in `getlk()`. Note: if the locking methods are not
    /// implemented, the kernel will still allow file locking to work locally.
    /// Hence these are only interesting for network filesystems and similar.
    fn setlk(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        lock_owner: LockOwner,
        start: u64,
        end: u64,
        typ: i32,
        pid: u32,
        sleep: bool,
        reply: ReplyEmpty,
    ) {
        warn!(
            "[Not Implemented] setlk(ino: {ino:#x?}, fh: {fh}, lock_owner: {lock_owner}, \
            start: {start}, end: {end}, typ: {typ}, pid: {pid}, sleep: {sleep})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Map block index within file to block index within device.
    /// Note: This makes sense only for block device backed filesystems mounted
    /// with the 'blkdev' option
    fn bmap(&self, _req: &Request, ino: INodeNo, blocksize: u32, idx: u64, reply: ReplyBmap) {
        warn!("[Not Implemented] bmap(ino: {ino:#x?}, blocksize: {blocksize}, idx: {idx})",);
        reply.error(Errno::ENOSYS);
    }

    /// control device
    fn ioctl(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        flags: IoctlFlags,
        cmd: u32,
        in_data: &[u8],
        out_size: u32,
        reply: ReplyIoctl,
    ) {
        warn!(
            "[Not Implemented] ioctl(ino: {ino:#x?}, fh: {fh}, flags: {flags}, \
            cmd: {cmd}, in_data.len(): {}, out_size: {out_size})",
            in_data.len()
        );
        reply.error(Errno::ENOSYS);
    }

    /// Poll for events
    fn poll(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        ph: PollNotifier,
        events: PollEvents,
        flags: PollFlags,
        reply: ReplyPoll,
    ) {
        warn!(
            "[Not Implemented] poll(ino: {ino:#x?}, fh: {fh}, \
            ph: {ph:?}, events: {events}, flags: {flags})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Preallocate or deallocate space to a file
    fn fallocate(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        length: u64,
        mode: i32,
        reply: ReplyEmpty,
    ) {
        warn!(
            "[Not Implemented] fallocate(ino: {ino:#x?}, fh: {fh}, \
            offset: {offset}, length: {length}, mode: {mode})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Reposition read/write file offset
    fn lseek(
        &self,
        _req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: i64,
        whence: i32,
        reply: ReplyLseek,
    ) {
        warn!(
            "[Not Implemented] lseek(ino: {ino:#x?}, fh: {fh}, \
            offset: {offset}, whence: {whence})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// Copy the specified range from the source inode to the destination inode
    fn copy_file_range(
        &self,
        _req: &Request,
        ino_in: INodeNo,
        fh_in: FileHandle,
        offset_in: u64,
        ino_out: INodeNo,
        fh_out: FileHandle,
        offset_out: u64,
        len: u64,
        flags: CopyFileRangeFlags,
        reply: ReplyWrite,
    ) {
        warn!(
            "[Not Implemented] copy_file_range(ino_in: {ino_in:#x?}, fh_in: {fh_in}, \
            offset_in: {offset_in}, ino_out: {ino_out:#x?}, fh_out: {fh_out}, \
            offset_out: {offset_out}, len: {len}, flags: {flags:?})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// macOS only: Rename the volume. Set `fuse_init_out.flags` during init to
    /// `FUSE_VOL_RENAME` to enable
    #[cfg(target_os = "macos")]
    fn setvolname(&self, _req: &Request, name: &OsStr, reply: ReplyEmpty) {
        warn!("[Not Implemented] setvolname(name: {name:?})");
        reply.error(Errno::ENOSYS);
    }

    /// macOS only (undocumented)
    #[cfg(target_os = "macos")]
    fn exchange(
        &self,
        _req: &Request,
        parent: INodeNo,
        name: &OsStr,
        newparent: INodeNo,
        newname: &OsStr,
        options: u64,
        reply: ReplyEmpty,
    ) {
        warn!(
            "[Not Implemented] exchange(parent: {parent:#x?}, name: {name:?}, \
            newparent: {newparent:#x?}, newname: {newname:?}, options: {options})"
        );
        reply.error(Errno::ENOSYS);
    }

    /// macOS only: Query extended times (`bkuptime` and `crtime`). Set `fuse_init_out.flags`
    /// during init to `FUSE_XTIMES` to enable
    #[cfg(target_os = "macos")]
    fn getxtimes(&self, _req: &Request, ino: INodeNo, reply: ReplyXTimes) {
        warn!("[Not Implemented] getxtimes(ino: {ino:#x?})");
        reply.error(Errno::ENOSYS);
    }
}

/// Mount the given filesystem to the given mountpoint. This function will
/// not return until the filesystem is unmounted.
///
/// NOTE: This will eventually replace `mount()`, once the API is stable
/// # Errors
/// Returns an error if the options are incorrect, or if the fuse device can't be mounted,
/// and any final error when the session comes to an end.
pub fn mount2<FS: Filesystem, P: AsRef<Path>>(
    filesystem: FS,
    mountpoint: P,
    options: &Config,
) -> io::Result<()> {
    check_option_conflicts(options)?;
    Session::new(filesystem, mountpoint.as_ref(), options).and_then(|se| se.run())
}

/// Mount the given filesystem to the given mountpoint. This function spawns
/// a background thread to handle filesystem operations while being mounted
/// and therefore returns immediately. The returned handle should be stored
/// to reference the mounted filesystem. If it's dropped, the filesystem will
/// be unmounted.
///
/// NOTE: This is the corresponding function to mount2.
/// # Errors
/// Returns an error if the options are incorrect, or if the fuse device can't be mounted.
pub fn spawn_mount2<'a, FS: Filesystem + Send + 'static + 'a, P: AsRef<Path>>(
    filesystem: FS,
    mountpoint: P,
    options: &Config,
) -> io::Result<BackgroundSession> {
    check_option_conflicts(options)?;
    Session::new(filesystem, mountpoint.as_ref(), options).and_then(session::Session::spawn)
}
