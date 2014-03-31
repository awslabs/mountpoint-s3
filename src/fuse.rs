//!
//! FUSE native interface declarations (as of libosxfuse-2.5.5).
//!

#![allow(non_camel_case_types, missing_doc)]

use std::libc::{c_int, c_char};

// Link with libosxfuse on OS X
#[cfg(target_os = "macos")]
#[link(name = "osxfuse")]
extern "system" { }

// Link with libfuse on Linux
#[cfg(target_os = "linux")]
#[link(name = "fuse")]
extern "system" { }

//
// FUSE arguments (see fuse_opt.h for details)
//

pub struct fuse_args {
	argc: c_int,
	argv: **c_char,
	allocated: c_int,
}

//
// FUSE common (see fuse_common_compat.h for details)
//

extern "system" {
	pub fn fuse_mount_compat25 (mountpoint: *c_char, args: *fuse_args) -> c_int;
	#[cfg(not(target_os = "macos"))]
	pub fn fuse_unmount_compat22 (mountpoint: *c_char);
}

//
// FUSE kernel (see fuse_kernel.h for details)
//

pub static FUSE_KERNEL_VERSION: u32 = 7;
pub static FUSE_KERNEL_MINOR_VERSION: u32 = 8;
pub static FUSE_ROOT_ID: u64 = 1;

#[deriving(Default)]
pub struct fuse_attr {
	ino: u64,
	size: u64,
	blocks: u64,
	atime: i64,
	mtime: i64,
	ctime: i64,
	#[cfg(target_os = "macos")]
	crtime: i64,			// OS X only
	atimensec: i32,
	mtimensec: i32,
	ctimensec: i32,
	#[cfg(target_os = "macos")]
	crtimensec: i32,		// OS X only
	mode: u32,
	nlink: u32,
	uid: u32,
	gid: u32,
	rdev: u32,
	#[cfg(target_os = "macos")]
	flags: u32,				// OS X only, see chflags(2)
}

pub struct fuse_kstatfs {
	blocks: u64,			// Total blocks (in units of frsize)
	bfree: u64,				// Free blocks
	bavail: u64,			// Free blocks for unprivileged users
	files: u64,				// Total inodes
	ffree: u64,				// Free inodes
	bsize: u32,				// Filesystem block size
	namelen: u32,			// Maximum filename length
	frsize: u32,			// Fundamental file system block size
	padding: u32,
	spare: [u32, ..6],
}

pub struct fuse_file_lock {
	start: u64,
	end: u64,
	typ: u32,
	pid: u32,
}

pub mod consts {
	// Bitmasks for fuse_setattr_in.valid
	pub static FATTR_MODE: u32				= 1 << 0;
	pub static FATTR_UID: u32				= 1 << 1;
	pub static FATTR_GID: u32				= 1 << 2;
	pub static FATTR_SIZE: u32				= 1 << 3;
	pub static FATTR_ATIME: u32				= 1 << 4;
	pub static FATTR_MTIME: u32				= 1 << 5;
	pub static FATTR_FH: u32				= 1 << 6;
	#[cfg(target_os = "macos")]
	pub static FATTR_CRTIME: u32			= 1 << 28;	// OS X only
	#[cfg(target_os = "macos")]
	pub static FATTR_CHGTIME: u32			= 1 << 29;	// OS X only
	#[cfg(target_os = "macos")]
	pub static FATTR_BKUPTIME: u32			= 1 << 30;	// OS X only
	#[cfg(target_os = "macos")]
	pub static FATTR_FLAGS: u32				= 1 << 31;	// OS X only

	// Flags returned by the open request
	pub static FOPEN_DIRECT_IO: u32			= 1 << 0;	// bypass page cache for this open file
	pub static FOPEN_KEEP_CACHE: u32		= 1 << 1;	// don't invalidate the data cache on open
	#[cfg(target_os = "macos")]
	pub static FOPEN_PURGE_ATTR: u32		= 1 << 30;	// OS X only
	#[cfg(target_os = "macos")]
	pub static FOPEN_PURGE_UBC: u32			= 1 << 31;	// OS X only

	// Init request/reply flags
	pub static FUSE_ASYNC_READ: u32			= 1 << 0;
	pub static FUSE_POSIX_LOCKS: u32		= 1 << 1;
	pub static FUSE_FILE_OPS: u32			= 1 << 2;
	pub static FUSE_ATOMIC_O_TRUNC: u32		= 1 << 3;
	pub static FUSE_EXPORT_SUPPORT: u32		= 1 << 4;
	pub static FUSE_BIG_WRITES: u32			= 1 << 5;
	pub static FUSE_DONT_MASK: u32			= 1 << 6;
	#[cfg(target_os = "macos")]
	pub static FUSE_CASE_INSENSITIVE: u32	= 1 << 29;	// OS X only
	#[cfg(target_os = "macos")]
	pub static FUSE_VOL_RENAME: u32			= 1 << 30;	// OS X only
	#[cfg(target_os = "macos")]
	pub static FUSE_XTIMES: u32				= 1 << 31;	// OS X only

	// Release flags
	pub static FUSE_RELEASE_FLUSH: u32		= 1 << 0;
}

#[deriving(FromPrimitive)]
pub enum fuse_opcode {
	FUSE_LOOKUP = 1,
	FUSE_FORGET = 2,			// no reply
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
	FUSE_SETVOLNAME = 61,		// OS X only
	FUSE_GETXTIMES = 62,		// OS X only
	FUSE_EXCHANGE = 63,			// OS X only
}

pub struct fuse_entry_out {
	nodeid: u64,
	generation: u64,
	entry_valid: i64,
	attr_valid: i64,
	entry_valid_nsec: i32,
	attr_valid_nsec: i32,
	attr: fuse_attr,
}

pub struct fuse_forget_in {
	nlookup: u64,
}

pub struct fuse_attr_out {
	attr_valid: i64,
	attr_valid_nsec: i32,
	dummy: u32,
	attr: fuse_attr,
}

#[cfg(target_os = "macos")]
pub struct fuse_getxtimes_out {	// OS X only
	bkuptime: i64,
	crtime: i64,
	bkuptimensec: i32,
	crtimensec: i32,
}

pub struct fuse_mknod_in {
	mode: u32,
	rdev: u32,
}

pub struct fuse_mkdir_in {
	mode: u32,
	padding: u32,
}

pub struct fuse_rename_in {
	newdir: u64,
}

#[cfg(target_os = "macos")]
pub struct fuse_exchange_in {	// OS X only
	olddir: u64,
	newdir: u64,
	options: u64,
}

pub struct fuse_link_in {
	oldnodeid: u64,
}

pub struct fuse_setattr_in {
	valid: u32,
	padding: u32,
	fh: u64,
	size: u64,
	unused1: u64,
	atime: i64,
	mtime: i64,
	unused2: u64,
	atimensec: i32,
	mtimensec: i32,
	unused3: u32,
	mode: u32,
	unused4: u32,
	uid: u32,
	gid: u32,
	unused5: u32,
	#[cfg(target_os = "macos")]
	bkuptime: i64,			// OS X only
	#[cfg(target_os = "macos")]
	chgtime: i64,			// OS X only
	#[cfg(target_os = "macos")]
	crtime: i64,			// OS X only
	#[cfg(target_os = "macos")]
	bkuptimensec: i32,		// OS X only
	#[cfg(target_os = "macos")]
	chgtimensec: i32,		// OS X only
	#[cfg(target_os = "macos")]
	crtimensec: i32,		// OS X only
	#[cfg(target_os = "macos")]
	flags: u32,				// OS X only
}

pub struct fuse_open_in {
	flags: u32,
	mode: u32,
}

pub struct fuse_open_out {
	fh: u64,
	open_flags: u32,
	padding: u32,
}

pub struct fuse_release_in {
	fh: u64,
	flags: u32,
	release_flags: u32,
	lock_owner: u64,
}

pub struct fuse_flush_in {
	fh: u64,
	unused: u32,
	padding: u32,
	lock_owner: u64,
}

pub struct fuse_read_in {
	fh: u64,
	offset: u64,
	size: u32,
	padding: u32,
}

pub struct fuse_write_in {
	fh: u64,
	offset: u64,
	size: u32,
	write_flags: u32,
}

pub struct fuse_write_out {
	size: u32,
	padding: u32,
}

pub struct fuse_statfs_out {
	st: fuse_kstatfs,
}

pub struct fuse_fsync_in {
	fh: u64,
	fsync_flags: u32,
	padding: u32,
}

pub struct fuse_setxattr_in {
	size: u32,
	flags: u32,
	#[cfg(target_os = "macos")]
	position: u32,			// OS X only
	#[cfg(target_os = "macos")]
	padding: u32,			// OS X only
}

pub struct fuse_getxattr_in {
	size: u32,
	padding: u32,
	#[cfg(target_os = "macos")]
	position: u32,			// OS X only
	#[cfg(target_os = "macos")]
	padding2: u32,			// OS X only
}

pub struct fuse_getxattr_out {
	size: u32,
	padding: u32,
}

pub struct fuse_lk_in {
	fh: u64,
	owner: u64,
	lk: fuse_file_lock,
}

pub struct fuse_lk_out {
	lk: fuse_file_lock,
}

pub struct fuse_access_in {
	mask: u32,
	padding: u32,
}

pub struct fuse_init_in {
	major: u32,
	minor: u32,
	max_readahead: u32,
	flags: u32,
}

pub struct fuse_init_out {
	major: u32,
	minor: u32,
	max_readahead: u32,
	flags: u32,
	unused: u32,
	max_write: u32,
}

pub struct fuse_interrupt_in {
	unique: u64,
}

pub struct fuse_bmap_in {
	block: u64,
	blocksize: u32,
	padding: u32,
}

pub struct fuse_bmap_out {
	block: u64,
}

pub struct fuse_in_header {
	len: u32,
	opcode: u32,
	unique: u64,
	nodeid: u64,
	uid: u32,
	gid: u32,
	pid: u32,
	padding: u32,
}

pub struct fuse_out_header {
	len: u32,
	error: i32,
	unique: u64,
}

pub struct fuse_dirent {
	ino: u64,
	off: u64,
	namelen: u32,
	typ: u32,
	// followed by name of namelen bytes
}
