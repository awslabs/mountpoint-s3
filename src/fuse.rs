//!
//! FUSE native interface declarations (as of libosxfuse-2.5.5).
//!

#![allow(non_camel_case_types, missing_docs, dead_code)]

use libc::{c_int, c_char};

//
// FUSE arguments (see fuse_opt.h for details)
//

#[repr(C)]
pub struct fuse_args {
    pub argc: c_int,
    pub argv: *const *const c_char,
    pub allocated: c_int,
}

//
// FUSE common (see fuse_common_compat.h for details)
//

extern "system" {
    pub fn fuse_mount_compat25 (mountpoint: *const c_char, args: *const fuse_args) -> c_int;
    pub fn fuse_unmount_compat22 (mountpoint: *const c_char);
}

//
// FUSE kernel (see fuse_kernel.h for details)
//

pub const FUSE_KERNEL_VERSION: u32 = 7;
pub const FUSE_KERNEL_MINOR_VERSION: u32 = 8;
pub const FUSE_ROOT_ID: u64 = 1;

#[repr(C)]
pub struct fuse_attr {
    pub ino: u64,
    pub size: u64,
    pub blocks: u64,
    pub atime: i64,
    pub mtime: i64,
    pub ctime: i64,
    #[cfg(target_os = "macos")]
    pub crtime: i64,            // OS X only
    pub atimensec: i32,
    pub mtimensec: i32,
    pub ctimensec: i32,
    #[cfg(target_os = "macos")]
    pub crtimensec: i32,        // OS X only
    pub mode: u32,
    pub nlink: u32,
    pub uid: u32,
    pub gid: u32,
    pub rdev: u32,
    #[cfg(target_os = "macos")]
    pub flags: u32,             // OS X only, see chflags(2)
}

#[repr(C)]
pub struct fuse_kstatfs {
    pub blocks: u64,            // Total blocks (in units of frsize)
    pub bfree: u64,             // Free blocks
    pub bavail: u64,            // Free blocks for unprivileged users
    pub files: u64,             // Total inodes
    pub ffree: u64,             // Free inodes
    pub bsize: u32,             // Filesystem block size
    pub namelen: u32,           // Maximum filename length
    pub frsize: u32,            // Fundamental file system block size
    pub padding: u32,
    pub spare: [u32; 6],
}

#[repr(C)]
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
    pub const FATTR_CRTIME: u32             = 1 << 28;  // OS X only
    #[cfg(target_os = "macos")]
    pub const FATTR_CHGTIME: u32            = 1 << 29;  // OS X only
    #[cfg(target_os = "macos")]
    pub const FATTR_BKUPTIME: u32           = 1 << 30;  // OS X only
    #[cfg(target_os = "macos")]
    pub const FATTR_FLAGS: u32              = 1 << 31;  // OS X only

    // Flags returned by the open request
    pub const FOPEN_DIRECT_IO: u32          = 1 << 0;   // bypass page cache for this open file
    pub const FOPEN_KEEP_CACHE: u32         = 1 << 1;   // don't invalidate the data cache on open
    #[cfg(target_os = "macos")]
    pub const FOPEN_PURGE_ATTR: u32         = 1 << 30;  // OS X only
    #[cfg(target_os = "macos")]
    pub const FOPEN_PURGE_UBC: u32          = 1 << 31;  // OS X only

    // Init request/reply flags
    pub const FUSE_ASYNC_READ: u32          = 1 << 0;
    pub const FUSE_POSIX_LOCKS: u32         = 1 << 1;
    pub const FUSE_FILE_OPS: u32            = 1 << 2;
    pub const FUSE_ATOMIC_O_TRUNC: u32      = 1 << 3;
    pub const FUSE_EXPORT_SUPPORT: u32      = 1 << 4;
    pub const FUSE_BIG_WRITES: u32          = 1 << 5;
    pub const FUSE_DONT_MASK: u32           = 1 << 6;
    #[cfg(target_os = "macos")]
    pub const FUSE_CASE_INSENSITIVE: u32    = 1 << 29;  // OS X only
    #[cfg(target_os = "macos")]
    pub const FUSE_VOL_RENAME: u32          = 1 << 30;  // OS X only
    #[cfg(target_os = "macos")]
    pub const FUSE_XTIMES: u32              = 1 << 31;  // OS X only

    // Release flags
    pub const FUSE_RELEASE_FLUSH: u32       = 1 << 0;
}

#[repr(C)]
#[derive(FromPrimitive)]
pub enum fuse_opcode {
    FUSE_LOOKUP = 1,
    FUSE_FORGET = 2,            // no reply
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
    FUSE_SETVOLNAME = 61,       // OS X only
    #[cfg(target_os = "macos")]
    FUSE_GETXTIMES = 62,        // OS X only
    #[cfg(target_os = "macos")]
    FUSE_EXCHANGE = 63,         // OS X only
}

#[repr(C)]
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
pub struct fuse_forget_in {
    pub nlookup: u64,
}

#[repr(C)]
pub struct fuse_attr_out {
    pub attr_valid: i64,
    pub attr_valid_nsec: i32,
    pub dummy: u32,
    pub attr: fuse_attr,
}

#[cfg(target_os = "macos")]
#[repr(C)]
pub struct fuse_getxtimes_out { // OS X only
    pub bkuptime: i64,
    pub crtime: i64,
    pub bkuptimensec: i32,
    pub crtimensec: i32,
}

#[repr(C)]
pub struct fuse_mknod_in {
    pub mode: u32,
    pub rdev: u32,
}

#[repr(C)]
pub struct fuse_mkdir_in {
    pub mode: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_rename_in {
    pub newdir: u64,
}

#[cfg(target_os = "macos")]
#[repr(C)]
pub struct fuse_exchange_in {   // OS X only
    pub olddir: u64,
    pub newdir: u64,
    pub options: u64,
}

#[repr(C)]
pub struct fuse_link_in {
    pub oldnodeid: u64,
}

#[repr(C)]
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
    pub bkuptime: i64,          // OS X only
    #[cfg(target_os = "macos")]
    pub chgtime: i64,           // OS X only
    #[cfg(target_os = "macos")]
    pub crtime: i64,            // OS X only
    #[cfg(target_os = "macos")]
    pub bkuptimensec: i32,      // OS X only
    #[cfg(target_os = "macos")]
    pub chgtimensec: i32,       // OS X only
    #[cfg(target_os = "macos")]
    pub crtimensec: i32,        // OS X only
    #[cfg(target_os = "macos")]
    pub flags: u32,             // OS X only
}

#[repr(C)]
pub struct fuse_open_in {
    pub flags: u32,
    pub mode: u32,
}

#[repr(C)]
pub struct fuse_open_out {
    pub fh: u64,
    pub open_flags: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_release_in {
    pub fh: u64,
    pub flags: u32,
    pub release_flags: u32,
    pub lock_owner: u64,
}

#[repr(C)]
pub struct fuse_flush_in {
    pub fh: u64,
    pub unused: u32,
    pub padding: u32,
    pub lock_owner: u64,
}

#[repr(C)]
pub struct fuse_read_in {
    pub fh: u64,
    pub offset: u64,
    pub size: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_write_in {
    pub fh: u64,
    pub offset: u64,
    pub size: u32,
    pub write_flags: u32,
}

#[repr(C)]
pub struct fuse_write_out {
    pub size: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_statfs_out {
    pub st: fuse_kstatfs,
}

#[repr(C)]
pub struct fuse_fsync_in {
    pub fh: u64,
    pub fsync_flags: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_setxattr_in {
    pub size: u32,
    pub flags: u32,
    #[cfg(target_os = "macos")]
    pub position: u32,          // OS X only
    #[cfg(target_os = "macos")]
    pub padding: u32,           // OS X only
}

#[repr(C)]
pub struct fuse_getxattr_in {
    pub size: u32,
    pub padding: u32,
    #[cfg(target_os = "macos")]
    pub position: u32,          // OS X only
    #[cfg(target_os = "macos")]
    pub padding2: u32,          // OS X only
}

#[repr(C)]
pub struct fuse_getxattr_out {
    pub size: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_lk_in {
    pub fh: u64,
    pub owner: u64,
    pub lk: fuse_file_lock,
}

#[repr(C)]
pub struct fuse_lk_out {
    pub lk: fuse_file_lock,
}

#[repr(C)]
pub struct fuse_access_in {
    pub mask: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_init_in {
    pub major: u32,
    pub minor: u32,
    pub max_readahead: u32,
    pub flags: u32,
}

#[repr(C)]
pub struct fuse_init_out {
    pub major: u32,
    pub minor: u32,
    pub max_readahead: u32,
    pub flags: u32,
    pub unused: u32,
    pub max_write: u32,
}

#[repr(C)]
pub struct fuse_interrupt_in {
    pub unique: u64,
}

#[repr(C)]
pub struct fuse_bmap_in {
    pub block: u64,
    pub blocksize: u32,
    pub padding: u32,
}

#[repr(C)]
pub struct fuse_bmap_out {
    pub block: u64,
}

#[repr(C)]
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
pub struct fuse_out_header {
    pub len: u32,
    pub error: i32,
    pub unique: u64,
}

#[repr(C)]
pub struct fuse_dirent {
    pub ino: u64,
    pub off: u64,
    pub namelen: u32,
    pub typ: u32,
    // followed by name of namelen bytes
}
