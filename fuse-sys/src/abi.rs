//! FUSE kernel interface
//!
//! Types and definitions used for communication between the kernel driver and the userspace
//! part (this crate) of a FUSE filesystem. Since the kernel driver may be installed
//! independently, the ABI interface is versioned and capabilities are exchanged during the
//! initialization (mounting) of a filesystem.
//!
//! OSXFUSE (macOS): https://github.com/osxfuse/fuse/blob/master/include/fuse_kernel.h
//! - supports ABI 7.8 in OSXFUSE 2.x
//! - supports ABI 7.19 since OSXFUSE 3.0.0
//!
//! libfuse (Linux/BSD): https://github.com/libfuse/libfuse/blob/master/include/fuse_kernel.h
//! - supports ABI 7.8 since FUSE 2.6.0
//! - supports ABI 7.12 since FUSE 2.8.0
//! - supports ABI 7.18 since FUSE 2.9.0
//! - supports ABI 7.19 since FUSE 2.9.1
//! - supports ABI 7.26 since FUSE 3.0.0
//!
//! Items without a version annotation are valid with ABI 7.8 and later

// TODO: We currently target ABI 7.8, which is very conservative and missing many newer
// features. We still need to figure out a way to support different ABI version without hazzle.
pub const FUSE_KERNEL_VERSION: u32 = 7;
pub const FUSE_KERNEL_MINOR_VERSION: u32 = 8;

pub const FUSE_ROOT_ID: u64 = 1;

#[repr(C)]
#[derive(Debug)]
pub struct fuse_attr {
    pub ino: u64,
    pub size: u64,
    pub blocks: u64,
    pub atime: i64,
    pub mtime: i64,
    pub ctime: i64,
    #[cfg(target_os = "macos")]
    pub crtime: i64,
    pub atimensec: i32,
    pub mtimensec: i32,
    pub ctimensec: i32,
    #[cfg(target_os = "macos")]
    pub crtimensec: i32,
    pub mode: u32,
    pub nlink: u32,
    pub uid: u32,
    pub gid: u32,
    pub rdev: u32,
    #[cfg(target_os = "macos")]
    pub flags: u32,                                     // see chflags(2)
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_kstatfs {
    pub blocks: u64,                                    // Total blocks (in units of frsize)
    pub bfree: u64,                                     // Free blocks
    pub bavail: u64,                                    // Free blocks for unprivileged users
    pub files: u64,                                     // Total inodes
    pub ffree: u64,                                     // Free inodes
    pub bsize: u32,                                     // Filesystem block size
    pub namelen: u32,                                   // Maximum filename length
    pub frsize: u32,                                    // Fundamental file system block size
    pub padding: u32,
    pub spare: [u32; 6],
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_file_lock {
    pub start: u64,
    pub end: u64,
    pub typ: u32,
    pub pid: u32,
}

pub mod consts {
    // Bitmasks for fuse_setattr_in.valid
    pub const FATTR_MODE: u32               = 1 << 0;
    pub const FATTR_UID: u32                = 1 << 1;
    pub const FATTR_GID: u32                = 1 << 2;
    pub const FATTR_SIZE: u32               = 1 << 3;
    pub const FATTR_ATIME: u32              = 1 << 4;
    pub const FATTR_MTIME: u32              = 1 << 5;
    pub const FATTR_FH: u32                 = 1 << 6;
    #[cfg(target_os = "macos")]
    pub const FATTR_CRTIME: u32             = 1 << 28;
    #[cfg(target_os = "macos")]
    pub const FATTR_CHGTIME: u32            = 1 << 29;
    #[cfg(target_os = "macos")]
    pub const FATTR_BKUPTIME: u32           = 1 << 30;
    #[cfg(target_os = "macos")]
    pub const FATTR_FLAGS: u32              = 1 << 31;

    // Flags returned by the open request
    pub const FOPEN_DIRECT_IO: u32          = 1 << 0;   // bypass page cache for this open file
    pub const FOPEN_KEEP_CACHE: u32         = 1 << 1;   // don't invalidate the data cache on open
    #[cfg(target_os = "macos")]
    pub const FOPEN_PURGE_ATTR: u32         = 1 << 30;
    #[cfg(target_os = "macos")]
    pub const FOPEN_PURGE_UBC: u32          = 1 << 31;

    // Init request/reply flags
    pub const FUSE_ASYNC_READ: u32          = 1 << 0;
    pub const FUSE_POSIX_LOCKS: u32         = 1 << 1;
    #[cfg(target_os = "macos")]
    pub const FUSE_CASE_INSENSITIVE: u32    = 1 << 29;
    #[cfg(target_os = "macos")]
    pub const FUSE_VOL_RENAME: u32          = 1 << 30;
    #[cfg(target_os = "macos")]
    pub const FUSE_XTIMES: u32              = 1 << 31;

    // Release flags
    pub const FUSE_RELEASE_FLUSH: u32       = 1 << 0;

    // The read buffer is required to be at least 8k, but may be much larger
    pub const FUSE_MIN_READ_BUFFER: usize   = 8192;
}

#[repr(C)]
#[derive(Debug)]
#[allow(non_camel_case_types)]
pub enum fuse_opcode {
    FUSE_LOOKUP = 1,
    FUSE_FORGET = 2,                                    // no reply
    FUSE_GETATTR = 3,
    FUSE_SETATTR = 4,
    FUSE_READLINK = 5,
    FUSE_SYMLINK = 6,
    FUSE_MKNOD = 8,
    FUSE_MKDIR = 9,
    FUSE_UNLINK = 10,
    FUSE_RMDIR = 11,
    FUSE_RENAME = 12,
    FUSE_LINK = 13,
    FUSE_OPEN = 14,
    FUSE_READ = 15,
    FUSE_WRITE = 16,
    FUSE_STATFS = 17,
    FUSE_RELEASE = 18,
    FUSE_FSYNC = 20,
    FUSE_SETXATTR = 21,
    FUSE_GETXATTR = 22,
    FUSE_LISTXATTR = 23,
    FUSE_REMOVEXATTR = 24,
    FUSE_FLUSH = 25,
    FUSE_INIT = 26,
    FUSE_OPENDIR = 27,
    FUSE_READDIR = 28,
    FUSE_RELEASEDIR = 29,
    FUSE_FSYNCDIR = 30,
    FUSE_GETLK = 31,
    FUSE_SETLK = 32,
    FUSE_SETLKW = 33,
    FUSE_ACCESS = 34,
    FUSE_CREATE = 35,
    FUSE_INTERRUPT = 36,
    FUSE_BMAP = 37,
    FUSE_DESTROY = 38,
    #[cfg(target_os = "macos")]
    FUSE_SETVOLNAME = 61,
    #[cfg(target_os = "macos")]
    FUSE_GETXTIMES = 62,
    #[cfg(target_os = "macos")]
    FUSE_EXCHANGE = 63,
}

// FIXME: Hopefully Rust will once have a more convenient way of converting primitive to enum
impl fuse_opcode {
    pub fn from_u32(n: u32) -> Option<Self> {
        match n {
            1 => Some(fuse_opcode::FUSE_LOOKUP),
            2 => Some(fuse_opcode::FUSE_FORGET),
            3 => Some(fuse_opcode::FUSE_GETATTR),
            4 => Some(fuse_opcode::FUSE_SETATTR),
            5 => Some(fuse_opcode::FUSE_READLINK),
            6 => Some(fuse_opcode::FUSE_SYMLINK),
            8 => Some(fuse_opcode::FUSE_MKNOD),
            9 => Some(fuse_opcode::FUSE_MKDIR),
            10 => Some(fuse_opcode::FUSE_UNLINK),
            11 => Some(fuse_opcode::FUSE_RMDIR),
            12 => Some(fuse_opcode::FUSE_RENAME),
            13 => Some(fuse_opcode::FUSE_LINK),
            14 => Some(fuse_opcode::FUSE_OPEN),
            15 => Some(fuse_opcode::FUSE_READ),
            16 => Some(fuse_opcode::FUSE_WRITE),
            17 => Some(fuse_opcode::FUSE_STATFS),
            18 => Some(fuse_opcode::FUSE_RELEASE),
            20 => Some(fuse_opcode::FUSE_FSYNC),
            21 => Some(fuse_opcode::FUSE_SETXATTR),
            22 => Some(fuse_opcode::FUSE_GETXATTR),
            23 => Some(fuse_opcode::FUSE_LISTXATTR),
            24 => Some(fuse_opcode::FUSE_REMOVEXATTR),
            25 => Some(fuse_opcode::FUSE_FLUSH),
            26 => Some(fuse_opcode::FUSE_INIT),
            27 => Some(fuse_opcode::FUSE_OPENDIR),
            28 => Some(fuse_opcode::FUSE_READDIR),
            29 => Some(fuse_opcode::FUSE_RELEASEDIR),
            30 => Some(fuse_opcode::FUSE_FSYNCDIR),
            31 => Some(fuse_opcode::FUSE_GETLK),
            32 => Some(fuse_opcode::FUSE_SETLK),
            33 => Some(fuse_opcode::FUSE_SETLKW),
            34 => Some(fuse_opcode::FUSE_ACCESS),
            35 => Some(fuse_opcode::FUSE_CREATE),
            36 => Some(fuse_opcode::FUSE_INTERRUPT),
            37 => Some(fuse_opcode::FUSE_BMAP),
            38 => Some(fuse_opcode::FUSE_DESTROY),
            #[cfg(target_os = "macos")]
            61 => Some(fuse_opcode::FUSE_SETVOLNAME),
            #[cfg(target_os = "macos")]
            62 => Some(fuse_opcode::FUSE_GETXTIMES),
            #[cfg(target_os = "macos")]
            63 => Some(fuse_opcode::FUSE_EXCHANGE),
            _ => None,
        }
    }
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_entry_out {
    pub nodeid: u64,
    pub generation: u64,
    pub entry_valid: i64,
    pub attr_valid: i64,
    pub entry_valid_nsec: i32,
    pub attr_valid_nsec: i32,
    pub attr: fuse_attr,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_forget_in {
    pub nlookup: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_attr_out {
    pub attr_valid: i64,
    pub attr_valid_nsec: i32,
    pub dummy: u32,
    pub attr: fuse_attr,
}

#[cfg(target_os = "macos")]
#[repr(C)]
#[derive(Debug)]
pub struct fuse_getxtimes_out {
    pub bkuptime: i64,
    pub crtime: i64,
    pub bkuptimensec: i32,
    pub crtimensec: i32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_mknod_in {
    pub mode: u32,
    pub rdev: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_mkdir_in {
    pub mode: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_rename_in {
    pub newdir: u64,
}

#[cfg(target_os = "macos")]
#[repr(C)]
#[derive(Debug)]
pub struct fuse_exchange_in {
    pub olddir: u64,
    pub newdir: u64,
    pub options: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_link_in {
    pub oldnodeid: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_setattr_in {
    pub valid: u32,
    pub padding: u32,
    pub fh: u64,
    pub size: u64,
    pub unused1: u64,
    pub atime: i64,
    pub mtime: i64,
    pub unused2: u64,
    pub atimensec: i32,
    pub mtimensec: i32,
    pub unused3: u32,
    pub mode: u32,
    pub unused4: u32,
    pub uid: u32,
    pub gid: u32,
    pub unused5: u32,
    #[cfg(target_os = "macos")]
    pub bkuptime: i64,
    #[cfg(target_os = "macos")]
    pub chgtime: i64,
    #[cfg(target_os = "macos")]
    pub crtime: i64,
    #[cfg(target_os = "macos")]
    pub bkuptimensec: i32,
    #[cfg(target_os = "macos")]
    pub chgtimensec: i32,
    #[cfg(target_os = "macos")]
    pub crtimensec: i32,
    #[cfg(target_os = "macos")]
    pub flags: u32,                                     // see chflags(2)
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_open_in {
    pub flags: u32,
    pub mode: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_open_out {
    pub fh: u64,
    pub open_flags: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_release_in {
    pub fh: u64,
    pub flags: u32,
    pub release_flags: u32,
    pub lock_owner: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_flush_in {
    pub fh: u64,
    pub unused: u32,
    pub padding: u32,
    pub lock_owner: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_read_in {
    pub fh: u64,
    pub offset: i64,
    pub size: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_write_in {
    pub fh: u64,
    pub offset: i64,
    pub size: u32,
    pub write_flags: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_write_out {
    pub size: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_statfs_out {
    pub st: fuse_kstatfs,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_fsync_in {
    pub fh: u64,
    pub fsync_flags: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_setxattr_in {
    pub size: u32,
    pub flags: u32,
    #[cfg(target_os = "macos")]
    pub position: u32,
    #[cfg(target_os = "macos")]
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_getxattr_in {
    pub size: u32,
    pub padding: u32,
    #[cfg(target_os = "macos")]
    pub position: u32,
    #[cfg(target_os = "macos")]
    pub padding2: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_getxattr_out {
    pub size: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_lk_in {
    pub fh: u64,
    pub owner: u64,
    pub lk: fuse_file_lock,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_lk_out {
    pub lk: fuse_file_lock,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_access_in {
    pub mask: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_init_in {
    pub major: u32,
    pub minor: u32,
    pub max_readahead: u32,
    pub flags: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_init_out {
    pub major: u32,
    pub minor: u32,
    pub max_readahead: u32,
    pub flags: u32,
    pub unused: u32,
    pub max_write: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_interrupt_in {
    pub unique: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_bmap_in {
    pub block: u64,
    pub blocksize: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_bmap_out {
    pub block: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_in_header {
    pub len: u32,
    pub opcode: u32,
    pub unique: u64,
    pub nodeid: u64,
    pub uid: u32,
    pub gid: u32,
    pub pid: u32,
    pub padding: u32,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_out_header {
    pub len: u32,
    pub error: i32,
    pub unique: u64,
}

#[repr(C)]
#[derive(Debug)]
pub struct fuse_dirent {
    pub ino: u64,
    pub off: i64,
    pub namelen: u32,
    pub typ: u32,
    // followed by name of namelen bytes
}
