/*!
 * FUSE userspace library implementation (as of libosxfuse-2.5.5).
 *
 * This is an improved rewrite of the FUSE userspace library (lowlevel
 * interface) to fully take advantage of Rust's architecture. The only thing
 * we rely on in the real libfuse are mount and unmount calls which are
 * needed to establish a fd to talk to the kernel driver.
 */

use std::{cast, io, libc, os, ptr, str, sys, task, util, vec};
use std::libc::{c_void, c_char, ssize_t};
use std::libc::read;
use glue::*;
use todo::{iovec, writev};
use self::native::*;

// Re-export types that are required to implement public traits
pub use std::libc::{c_int, mode_t, dev_t, size_t, off_t};
pub use std::libc::consts::os::posix88::*;
pub use self::native::{fuse_attr, fuse_kstatfs, fuse_file_lock, fuse_entry_out, fuse_attr_out};
pub use self::native::{fuse_setattr_in, fuse_open_out, fuse_write_out, fuse_statfs_out};
pub use self::native::{fuse_getxattr_out, fuse_lk_out, fuse_bmap_out};
pub use self::native::consts::*;

mod native;

// --------------------------------------------------------------------------

/// Filesystem trait.
///
/// This trait must be implemented to provide a userspace filesystem via FUSE.
/// These methods corrospond to fuse_lowlevel_ops in libfuse. Reasonable default
/// implementations are provided here to get a mountable filesystem that does
/// nothing.
pub trait Filesystem {
	/// Initialize filesystem
	/// Called before any other filesystem method.
	fn init (&mut self) -> Result<(), c_int>																					{ Ok(()) }
	/// Clean up filesystem
	/// Called on filesystem exit.
	fn destroy (&mut self)																										{ }
	/// Look up a directory entry by name and get its attributes.
	fn lookup (&mut self, _parent: u64, _name: &str) -> Result<~fuse_entry_out, c_int>											{ Err(ENOSYS) }
	/// Forget about an inode
	/// The nlookup parameter indicates the number of lookups previously performed on
	/// this inode. If the filesystem implements inode lifetimes, it is recommended that
	/// inodes acquire a single reference on each lookup, and lose nlookup references on
	/// each forget. The filesystem may ignore forget calls, if the inodes don't need to
	/// have a limited lifetime. On unmount it is not guaranteed, that all referenced
	/// inodes will receive a forget message.
	fn forget (&mut self, _ino: u64, _nlookup: uint)																			{ }
	/// Get file attributes
	fn getattr (&mut self, _ino: u64) -> Result<~fuse_attr_out, c_int>															{ Err(ENOSYS) }
	/// Set file attributes
	/// In the 'attr' argument only members indicated by the 'valid' bitmask contain
	/// valid values. Other members contain undefined values.
	fn setattr (&mut self, _ino: u64, _attr: &fuse_setattr_in) -> Result<~fuse_attr_out, c_int>									{ Err(ENOSYS) }
	/// Read symbolic link
	fn readlink (&mut self, _ino: u64) -> Result<~str, c_int>																	{ Err(ENOSYS) }
	/// Create file node
	/// Create a regular file, character device, block device, fifo or socket node.
	fn mknod (&mut self, _parent: u64, _name: &str, _mode: mode_t, _rdev: dev_t) -> Result<~fuse_entry_out, c_int>				{ Err(ENOSYS) }
	/// Create a directory
	fn mkdir (&mut self, _parent: u64, _name: &str, _mode: mode_t) -> Result<~fuse_entry_out, c_int>							{ Err(ENOSYS) }
	/// Remove a file
	fn unlink (&mut self, _parent: u64, _name: &str) -> Result<(), c_int>														{ Err(ENOSYS) }
	/// Remove a directory
	fn rmdir (&mut self, _parent: u64, _name: &str) -> Result<(), c_int>														{ Err(ENOSYS) }
	/// Create a symbolic link
	fn symlink (&mut self, _parent: u64, _name: &str, _link: &str) -> Result<~fuse_entry_out, c_int>							{ Err(ENOSYS) }
	/// Rename a file
	fn rename (&mut self, _parent: u64, _name: &str, _newparent: u64, _newname: &str) -> Result<(), c_int>						{ Err(ENOSYS) }
	/// Create a hard link
	fn link (&mut self, _ino: u64, _newparent: u64, _newname: &str) -> Result<~fuse_entry_out, c_int>							{ Err(ENOSYS) }
	/// Open a file
	/// Open flags (with the exception of O_CREAT, O_EXCL, O_NOCTTY and O_TRUNC) are
	/// available in flags. Filesystem may store an arbitrary file handle (pointer, index,
	/// etc) in fh, and use this in other all other file operations (read, write, flush,
	/// release, fsync). Filesystem may also implement stateless file I/O and not store
	/// anything in fh. There are also some flags (direct_io, keep_cache) which the
	/// filesystem may set, to change the way the file is opened. See fuse_file_info
	/// structure in <fuse_common.h> for more details.
	fn open (&mut self, _ino: u64, _flags: uint) -> Result<~fuse_open_out, c_int>												{ Ok(~fuse_open_out { fh: 0, open_flags: 0, padding: 0 }) }
	/// Read data
	/// Read should send exactly the number of bytes requested except on EOF or error,
	/// otherwise the rest of the data will be substituted with zeroes. An exception to
	/// this is when the file has been opened in 'direct_io' mode, in which case the
	/// return value of the read system call will reflect the return value of this
	/// operation. fh will contain the value set by the open method, or will be undefined
	/// if the open method didn't set any value.
	fn read (&mut self, _ino: u64, _fh: u64, _offset: off_t, _size: size_t) -> Result<~[u8], c_int>								{ Err(ENOSYS) }
	/// Write data
	/// Write should return exactly the number of bytes requested except on error. An
	/// exception to this is when the file has been opened in 'direct_io' mode, in
	/// which case the return value of the write system call will reflect the return
	/// value of this operation. fh will contain the value set by the open method, or
	/// will be undefined if the open method didn't set any value.
	fn write (&mut self, _ino: u64, _fh: u64, _offset: off_t, _data: &[u8], _flags: uint) -> Result<size_t, c_int>				{ Err(ENOSYS) }
	/// Flush method
	/// This is called on each close() of the opened file. Since file descriptors can
	/// be duplicated (dup, dup2, fork), for one open call there may be many flush
	/// calls. Filesystems shouldn't assume that flush will always be called after some
	/// writes, or that if will be called at all. fh will contain the value set by the
	/// open method, or will be undefined if the open method didn't set any value.
	/// NOTE: the name of the method is misleading, since (unlike fsync) the filesystem
	/// is not forced to flush pending writes. One reason to flush data, is if the
	/// filesystem wants to return write errors. If the filesystem supports file locking
	/// operations (setlk, getlk) it should remove all locks belonging to 'lock_owner'.
	fn flush (&mut self, _ino: u64, _fh: u64, _lock_owner: u64) -> Result<(), c_int>											{ Err(ENOSYS) }
	/// Release an open file
	/// Release is called when there are no more references to an open file: all file
	/// descriptors are closed and all memory mappings are unmapped. For every open
	/// call there will be exactly one release call. The filesystem may reply with an
	/// error, but error values are not returned to close() or munmap() which triggered
	/// the release. fh will contain the value set by the open method, or will be undefined
	/// if the open method didn't set any value. flags will contain the same flags as for
	/// open.
	fn release (&mut self, _ino: u64, _fh: u64, _flags: uint, _lock_owner: u64, _flush: bool) -> Result<(), c_int>				{ Ok(()) }
	/// Synchronize file contents
	/// If the datasync parameter is non-zero, then only the user data should be flushed,
	/// not the meta data.
	fn fsync (&mut self, _ino: u64, _fh: u64, _datasync: bool) -> Result<(), c_int>												{ Err(ENOSYS) }
	/// Open a directory
	/// Filesystem may store an arbitrary file handle (pointer, index, etc) in fh, and
	/// use this in other all other directory stream operations (readdir, releasedir,
	/// fsyncdir). Filesystem may also implement stateless directory I/O and not store
	/// anything in fh, though that makes it impossible to implement standard conforming
	/// directory stream operations in case the contents of the directory can change
	/// between opendir and releasedir.
	fn opendir (&mut self, _ino: u64, _flags: uint) -> Result<~fuse_open_out, c_int>											{ Ok(~fuse_open_out { fh: 0, open_flags: 0, padding: 0 }) }
	/// Read directory
	/// Send a buffer filled using buffer.fill(), with size not exceeding the
	/// requested size. Send an empty buffer on end of stream. fh will contain the
	/// value set by the opendir method, or will be undefined if the opendir method
	/// didn't set any value.
	fn readdir (&mut self, _ino: u64, _fh: u64, _offset: off_t, _buffer: ~DirBuffer) -> Result<~DirBuffer, c_int>				{ Err(ENOSYS) }
	/// Release an open directory
	/// For every opendir call there will be exactly one releasedir call. fh will
	/// contain the value set by the opendir method, or will be undefined if the
	/// opendir method didn't set any value.
	fn releasedir (&mut self, _ino: u64, _fh: u64, _flags: uint) -> Result<(), c_int>											{ Ok(()) }
	/// Synchronize directory contents
	/// If the datasync parameter is set, then only the directory contents should
	/// be flushed, not the meta data. fh will contain the value set by the opendir
	/// method, or will be undefined if the opendir method didn't set any value.
	fn fsyncdir (&mut self, _ino: u64, _fh: u64, _datasync: bool) -> Result<(), c_int>											{ Err(ENOSYS) }
	/// Get file system statistics
	fn statfs (&mut self, _ino: u64) -> Result<~fuse_statfs_out, c_int>															{ Ok(~fuse_statfs_out { st: fuse_kstatfs { blocks: 0, bfree: 0, bavail: 0, files: 0, ffree: 0, bsize: 512, namelen: 255, frsize: 0, padding: 0, spare: [0, ..6] }}) }
	/// Set an extended attribute
	fn setxattr (&mut self, _ino: u64, _name: &str, _value: &[u8], _flags: uint, _position: off_t) -> Result<(), c_int>			{ Err(ENOSYS) }
	/// Get an extended attribute
	fn getxattr (&mut self, _ino: u64, _name: &str) -> Result<~[u8], c_int>														{ Err(ENOSYS) }
	/// List extended attribute names
	fn listxattr (&mut self, _ino: u64) -> Result<~[&str], c_int>																{ Err(ENOSYS) }
	/// Remove an extended attribute
	fn removexattr (&mut self, _ino: u64, _name: &str) -> Result<(), c_int>														{ Err(ENOSYS) }
	/// Check file access permissions
	/// This will be called for the access() system call. If the 'default_permissions'
	/// mount option is given, this method is not called. This method is not called
	/// under Linux kernel versions 2.4.x
	fn access (&mut self, _ino: u64, _mask: uint) -> Result<(), c_int>															{ Err(ENOSYS) }
	/// Create and open a file
	/// If the file does not exist, first create it with the specified mode, and then
	/// open it. Open flags (with the exception of O_NOCTTY) are available in flags.
	/// Filesystem may store an arbitrary file handle (pointer, index, etc) in fh,
	/// and use this in other all other file operations (read, write, flush, release,
	/// fsync). There are also some flags (direct_io, keep_cache) which the
	/// filesystem may set, to change the way the file is opened. See fuse_file_info
	/// structure in <fuse_common.h> for more details. If this method is not
	/// implemented or under Linux kernel versions earlier than 2.6.15, the mknod()
	/// and open() methods will be called instead.
	fn create (&mut self, _parent: u64, _name: &str, _mode: mode_t, _flags: uint) -> Result<(~fuse_entry_out,~fuse_open_out), c_int>	{ Err(ENOSYS) }
	/// Test for a POSIX file lock
	fn getlk (&mut self, _ino: u64, _fh: u64, _lock_owner: u64, _lock: &fuse_file_lock) -> Result<~fuse_file_lock, c_int>				{ Err(ENOSYS) }
	/// Acquire, modify or release a POSIX file lock
	/// For POSIX threads (NPTL) there's a 1-1 relation between pid and owner, but
	/// otherwise this is not always the case.  For checking lock ownership,
	/// 'fi->owner' must be used. The l_pid field in 'struct flock' should only be
	/// used to fill in this field in getlk(). Note: if the locking methods are not
	/// implemented, the kernel will still allow file locking to work locally.
	/// Hence these are only interesting for network filesystems and similar.
	fn setlk (&mut self, _ino: u64, _fh: u64, _lock_owner: u64, _lock: &fuse_file_lock, _sleep: int) -> Result<(), c_int>		{ Err(ENOSYS) }
	/// Map block index within file to block index within device
	/// Note: This makes sense only for block device backed filesystems mounted
	/// with the 'blkdev' option
	fn bmap (&mut self, _ino: u64, _blocksize: size_t, _idx: u64) -> Result<~fuse_bmap_out, c_int>								{ Err(ENOSYS) }
	/// OS X only: Rename the volume. Set fuse_init_out.flags during init to
	/// FUSE_VOL_RENAME to enable
	#[cfg(target_os = "macos")]
	fn setvolname (&mut self, _name: &str) -> Result<(), c_int>																	{ Err(ENOSYS) }
	/// OS X only (undocumented)
	#[cfg(target_os = "macos")]
	fn exchange (&mut self, _parent: u64, _name: &str, _newparent: u64, _newname: &str, _options: uint) -> Result<(), c_int>	{ Err(ENOSYS) }
	/// OS X only: Query extended times (bkuptime and crtime). Set fuse_init_out.flags
	/// during init to FUSE_XTIMES to enable
	#[cfg(target_os = "macos")]
	fn getxtimes (&mut self, _ino: u64) -> Result<~fuse_getxtimes_out, c_int>													{ Err(ENOSYS) }
}

/// Mount the given filesystem to the given mountpoint
pub fn mount<FS: Filesystem> (filesystem: ~FS, mountpoint: &Path, options: &[~str]) {
	let mut se = Session::mount(filesystem, mountpoint, options);
	se.run();
}

// --------------------------------------------------------------------------

/// Maximum write size. FUSE recommends at least 128k, max 16M. Default on OS X is 16M.
static MAX_WRITE_SIZE: u32 = 16*1024*1024;

/// We support async reads and our filesystems are usually case-insensitive
static INIT_FLAGS: u32 = FUSE_ASYNC_READ | FUSE_CASE_INSENSITIVE;

// --------------------------------------------------------------------------

/// An iterator that can be used to fetch typed arguments from a byte vector
struct ArgumentIterator<'self> {
	priv data: &'self [u8],
	priv pos: uint,
}

impl<'self> ArgumentIterator<'self> {
	/// Create a new argument iterator for the given byte vector
	fn new (data: &'self [u8]) -> ArgumentIterator<'self> {
		ArgumentIterator { data: data, pos: 0 }
	}

	/// Fetch a typed argument
	fn fetch<T> (&mut self) -> &'self T {
		do self.data.as_imm_buf |dataptr, _| {
			let value = unsafe { cast::transmute(dataptr.offset(self.pos as int)) };
			self.pos += sys::size_of::<T>();
			assert!(self.pos <= self.data.len(), "trying to get argument behind data");
			value
		}
	}

	/// Fetch a (zero-terminated) string
	fn fetch_str (&mut self) -> &'self str {
		do self.data.as_imm_buf |dataptr, _| {
			// FIXME: this fails if data contains non-utf8 garbage (c_str_to_static_slice asserts an utf8 string)
			let text = unsafe { str::raw::c_str_to_static_slice(dataptr.offset(self.pos as int) as *c_char) };
			self.pos += text.len() + 1;
			assert!(self.pos <= self.data.len(), "trying to get argument behind data");
			text
		}
	}

	/// Fetch a slice of the remaining data
	fn fetch_data (&mut self) -> &'self [u8] {
		let bytes = self.data.tailn(self.pos);
		self.pos = self.data.len();
		bytes
	}
}


#[cfg(test)]
static test_data: [u8, ..12] = [0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61, 0x7a, 0x00];

#[cfg(test)]
struct test_argument_t { p1: u8, p2: u8, p3: u16 }

#[test]
fn test_argument_type () {
	let mut it = ArgumentIterator::new(test_data);
	let arg: &test_argument_t = it.fetch();
	assert!(arg.p1 == 0x66, "argument iterator should fetch typed argument from data");
	assert!(arg.p2 == 0x6f, "argument iterator should fetch typed argument from data");
	assert!(arg.p3 == 0x006f, "argument iterator should fetch typed argument from data");
	let arg: &test_argument_t = it.fetch();
	assert!(arg.p1 == 0x62, "argument iterator should fetch typed argument from data");
	assert!(arg.p2 == 0x61, "argument iterator should fetch typed argument from data");
	assert!(arg.p3 == 0x0072, "argument iterator should fetch typed argument from data");
}

#[test]
fn test_argument_string () {
	let mut it = ArgumentIterator::new(test_data);
	let arg = it.fetch_str();
	assert!(arg == "foo", "argument iterator should fetch string from data");
	let arg = it.fetch_str();
	assert!(arg == "bar", "argument iterator should fetch string from data");
}

#[test]
fn test_argument_data () {
	let mut it = ArgumentIterator::new(test_data);
	it.fetch_str();
	it.fetch_str();
	let arg = it.fetch_data();
	assert!(arg == [0x62, 0x61, 0x7a, 0x00], "argument iterator should fetch data from data");
}

#[test]
fn test_argument_mixed () {
	let mut it = ArgumentIterator::new(test_data);
	let arg: &test_argument_t = it.fetch();
	assert!(arg.p1 == 0x66, "argument iterator should fetch typed argument from data");
	assert!(arg.p2 == 0x6f, "argument iterator should fetch typed argument from data");
	assert!(arg.p3 == 0x006f, "argument iterator should fetch typed argument from data");
	let arg = it.fetch_str();
	assert!(arg == "bar", "argument iterator should fetch string from data");
	let arg = it.fetch_data();
	assert!(arg == [0x62, 0x61, 0x7a, 0x00], "argument iterator should fetch data from data");
}

// --------------------------------------------------------------------------

/// Trait for types that can be sent as a reply to the FUSE kernel driver
trait Sendable {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		// Generally send a memory copy of a type (this works for all
		// structs, i.e. fuse_*_out)
		f([iovec {
			iov_base: ptr::to_unsafe_ptr(self) as *c_void,
			iov_len: sys::size_of::<Self>() as size_t,
		}])
	}
}

impl Sendable for fuse_entry_out { }
impl Sendable for fuse_attr_out { }
#[cfg(target_os = "macos")]
impl Sendable for fuse_getxtimes_out { }
impl Sendable for fuse_open_out { }
impl Sendable for fuse_write_out { }
impl Sendable for fuse_statfs_out { }
impl Sendable for fuse_getxattr_out { }
impl Sendable for fuse_lk_out { }
impl Sendable for fuse_init_out { }
impl Sendable for fuse_bmap_out { }

impl<S: Sendable> Sendable for ~S {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		(**self).as_iovecs(f)
	}
}

impl Sendable for () {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		// A unit value has nothing to send
		f([])
	}
}

impl<'self> Sendable for &'self [u8] {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		// Send the contents of byte-vector
		do self.as_imm_buf |bufptr, buflen| {
			f([iovec {
				iov_base: bufptr as *c_void,
				iov_len: buflen as size_t,
			}])
		}
	}
}

impl Sendable for ~[u8] {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		self.as_slice().as_iovecs(f)
	}
}

impl Sendable for ~str {
	// Sending a string uses its byte-representation (without trailing NUL)
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		self.as_bytes().as_iovecs(f)
	}
}


#[test]
fn test_sendable_struct () {
	let data = fuse_init_out { major: 111, minor: 222, max_readahead: 333, flags: 444, unused: 555, max_write: 666 };
	let bytes = [111, 0, 0, 0, 222, 0, 0, 0, 77, 1, 0, 0, 188, 1, 0, 0, 43, 2, 0, 0, 154, 2, 0, 0];
	data.as_iovecs(|iovs| {
		assert!(iovs.len() == 1, "sendable struct should be represented as a single iovec");
		assert!(iovs[0].iov_len == 24, "sendable struct shoule be represented by an iovec with the length of the size of the struct");
		assert!(unsafe { *(iovs[0].iov_base as *[u8, ..24]) } == bytes, "sendable struct should be represented by an iovec with the byte representation of the struct");
	});
}

#[test]
fn test_sendable_owned_struct () {
	let data = ~fuse_init_out { major: 111, minor: 222, max_readahead: 333, flags: 444, unused: 555, max_write: 666 };
	let bytes = [111, 0, 0, 0, 222, 0, 0, 0, 77, 1, 0, 0, 188, 1, 0, 0, 43, 2, 0, 0, 154, 2, 0, 0];
	data.as_iovecs(|iovs| {
		assert!(iovs.len() == 1, "sendable owned struct should be represented as a single iovec");
		assert!(iovs[0].iov_len == 24, "sendable owned struct should be represented by an iovec with the length of the size of the owned struct");
		assert!(unsafe { *(iovs[0].iov_base as *[u8, ..24]) } == bytes, "sendable owned struct should be represented by an iovec with the byte representation of the owned struct");
	});
}

#[test]
fn test_sendable_null () {
	let data = ();
	data.as_iovecs(|iovs| {
		assert!(iovs.len() == 0, "sendable empty element should be represented by no iovec at all");
	});
}

#[test]
fn test_sendable_buffer () {
	let data: ~[u8] = ~[11, 22, 33, 44, 55];
	data.as_iovecs(|iovs| {
		assert!(iovs.len() == 1, "sendabled buffer should be represented as a single iovec");
		assert!(iovs[0].iov_len == 5, "sendable buffer should be represented by an iovec with the length of the buffer");
		assert!(unsafe { *(iovs[0].iov_base as *[u8, ..5]) } == data, "sendable buffer should be represented by an iovec with the contents of the buffer");
	});
}

#[test]
fn test_sendable_string () {
	let data = ~"hello";
	let bytes = [104, 101, 108, 108, 111];	// no trailing NUL
	data.as_iovecs(|iovs| {
		assert!(iovs.len() == 1, "sendable string should be represented as a single iovec");
		assert!(iovs[0].iov_len == 5, "sendable string should be represented by an iovec with the length of the string");
		assert!(unsafe { *(iovs[0].iov_base as *[u8, ..5]) } == bytes, "sendable string should be represented by an iovec with the contents of the string");
	});
}

// --------------------------------------------------------------------------

/// Buffer for replying with the contents of a directory (e.g. in readdir operations)
struct DirBuffer {
	priv data: ~[u8],
}

impl DirBuffer {
	/// Create a new dir buffer of the given size
	fn new (size: uint) -> ~DirBuffer {
		~DirBuffer { data: vec::with_capacity(size) }
	}

	/// Add an entry to the dir buffer. Returns true if the buffer is full.
	/// An transparent offset value can be provided for each entry. The
	/// kernel uses these value to request more entries in further readdir
	/// calls
	pub fn fill (&mut self, ino: u64, off: off_t, mode: mode_t, name: &str) -> bool {
		let entlen = sys::size_of::<fuse_dirent>() + name.len();
		let entsize = (entlen + sys::size_of::<u64>() - 1) & !(sys::size_of::<u64>() - 1);	// 64bit align
		let padlen = entsize - entlen;
		if self.data.len() + entsize > self.data.capacity() { return true; }
		unsafe {
			do self.data.as_mut_buf |bufptr, buflen| {
				let p = bufptr.offset(buflen as int);
				let pdirent: *mut fuse_dirent = cast::transmute(p);
				(*pdirent).ino = ino;
				(*pdirent).off = off as u64;
				(*pdirent).namelen = name.len() as u32;
				(*pdirent).typ = (mode as u32 & libc::S_IFMT as u32) >> 12;
				let p = p.offset(sys::size_of_val(&*pdirent) as int);
				do name.as_imm_buf |nameptr, namelen| {
					ptr::copy_memory(p, nameptr, namelen);
				}
				let p = p.offset(name.len() as int);
				ptr::zero_memory(p, padlen);
			}
			let newlen = self.data.len() + entsize;
			vec::raw::set_len(&mut self.data, newlen);
		}
		false
	}

	/// Returns the size of the data that has been filled into the buffer
	pub fn len (&self) -> uint {
		self.data.len()
	}
}

impl Sendable for DirBuffer {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		// Send a buffer by sending its data vector
		self.data.as_iovecs(f)
	}
}


#[test]
fn test_dirbuffer_sendable () {
	let mut buf = DirBuffer::new(128);
	buf.fill(111, 222, libc::S_IFREG as mode_t, "hello");
	buf.fill(444, 555, libc::S_IFREG as mode_t, "world.rs");
	let bytes = [
		111, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 8, 0, 0, 0, 104, 101, 108, 108, 111,  0,   0,   0,
		188, 1, 0, 0, 0, 0, 0, 0,  43, 2, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 119, 111, 114, 108, 100, 46, 114, 115,
	];
	buf.as_iovecs(|iovs| {
		assert!(iovs.len() == 1, "sendable dirbuffer should be represented by a single iovec");
		assert!(iovs[0].iov_len == 64, "sendable dirbuffer should be represented by an iovec with the length of the dirbuffer");
		assert!(unsafe { *(iovs[0].iov_base as *[u8, ..64]) } == bytes, "sendable dirbuffer should be reply_error by an iovec with the contents of the dirbuffer");
	});
}

// --------------------------------------------------------------------------

/// A request represents information about an operation the kernel driver
/// wants us to perform.
struct Request {
	priv data: ~[u8],
	priv fd: Option<io::fd_t>,
}

impl Request {
	/// Create a new request
	fn new () -> ~Request {
		~Request {
			data: vec::with_capacity(MAX_WRITE_SIZE as uint + 4096),
			fd: None,
		}
	}

	/// Read the next request from the given fd (channel to kernel driver)
	#[fixed_stack_segment]
	fn read (&mut self, fd: io::fd_t) -> Result<(), c_int> {
		assert!(self.data.capacity() >= MAX_WRITE_SIZE as uint + 4096);
		let capacity = self.data.capacity();
		self.data.clear();
		self.fd = Some(fd);
		let res = do self.data.as_mut_buf |dataptr, _| {
			// The kernel driver makes sure that we get exactly one request per read.
			unsafe { read(fd, dataptr as *mut c_void, capacity as size_t) }
		};
		if res < 0 {
			Err(os::errno() as c_int)
		} else if res < sys::size_of::<fuse_in_header>() as ssize_t {
			error!("Short read on FUSE device");
			Err(EIO)
		} else {
			unsafe { vec::raw::set_len(&mut self.data, res as uint); }
			Ok(())
		}
	}

	/// Dispatch request to the given filesystem.
	/// This parses a previously read request, calls the appropriate
	/// filesystem operation method and sends back the returned reply
	/// to the kernel
	fn dispatch<FS: Filesystem> (&self, se: &mut Session<FS>) {
		// Every request begins with a fuse_in_header struct followed by arbitrary
		// data depending on which opcode it contains
		assert!(self.data.len() >= sys::size_of::<fuse_in_header>());
		let mut data = ArgumentIterator::new(self.data);
		let header: &fuse_in_header = data.fetch();
		// FIXME: Ugly (and unsafe) way of conversion to enum. Fix this, once Rust can convert
		// integers to enums somehow. See https://github.com/mozilla/rust/issues/3868
		let opcode: fuse_opcode = unsafe { cast::transmute(header.opcode as uint) };
		match opcode {
			// Filesystem initialization
			FUSE_INIT => {
				let arg: &fuse_init_in = data.fetch();
				debug2!("INIT({:u})   kernel: ABI {:u}.{:u}, flags {:#x}, max readahead {:u}", header.unique, arg.major, arg.minor, arg.flags, arg.max_readahead);
				// We don't support ABI versions before 7.6
				if arg.major < 7 || (arg.major < 7 && arg.minor < 6) {
					error2!("Unsupported FUSE ABI version {:u}.{:u}", arg.major, arg.minor);
					self.reply_error(EPROTO);
					return;
				}
				// Remember ABI version supported by kernel
				se.proto_major = arg.major as uint;
				se.proto_minor = arg.minor as uint;
				// Call filesystem init method and give it a chance to return an error
				let res = se.filesystem.init();
				if res.is_err() {
					self.reply_error(res.unwrap_err());
					return;
				}
				// Reply with our desired version and settings. If the kernel supports a
				// larger major version, it'll re-send a matching init message. If it
				// supports only lower major versions, we replied with an error above.
				let reply = fuse_init_out {
					major: FUSE_KERNEL_VERSION,
					minor: FUSE_KERNEL_MINOR_VERSION,
					max_readahead: arg.max_readahead,
					flags: INIT_FLAGS,
					unused: 0,
					max_write: MAX_WRITE_SIZE,
				};
				debug2!("INIT({:u}) response: ABI {:u}.{:u}, flags {:#x}, max readahead {:u}, max write {:u}", header.unique, reply.major, reply.minor, reply.flags, reply.max_readahead, reply.max_write);
				se.initialized = true;
				self.reply(Ok(reply));
			},
			// Any operation is invalid before initialization
			_ if !se.initialized => {
				warn2!("Ignoring FUSE operation {:u} before init", header.opcode);
				self.reply_error(EIO);
			},
			// Filesystem destroyed
			FUSE_DESTROY => {
				debug2!("DESTROY({:u})", header.unique);
				se.filesystem.destroy();
				se.destroyed = true;
				self.reply(Ok(()));
			}
			// Any operation is invalid after destroy
			_ if se.destroyed => {
				warn2!("Ignoring FUSE operation {:u} after destroy", header.opcode);
				self.reply_error(EIO);
			}

			// TODO: FUSE_INTERRUPT,

			FUSE_LOOKUP => {
				let name = data.fetch_str();
				debug2!("LOOKUP({:u}) parent {:#018x}, name {:s}", header.unique, header.nodeid, name);
				self.reply(se.filesystem.lookup(header.nodeid, name));
			},
			FUSE_FORGET => {
				let arg: &fuse_forget_in = data.fetch();
				debug2!("FORGET({:u}) ino {:#018x}, nlookup {:u}", header.unique, header.nodeid, arg.nlookup);
				se.filesystem.forget(header.nodeid, arg.nlookup as uint);	// no reply
			},
			FUSE_GETATTR => {
				debug2!("GETATTR({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(se.filesystem.getattr(header.nodeid));
			},
			FUSE_SETATTR => {
				let arg: &fuse_setattr_in = data.fetch();
				debug2!("SETATTR({:u}) ino {:#018x}, valid {:#x}", header.unique, header.nodeid, arg.valid);
				self.reply(se.filesystem.setattr(header.nodeid, arg));
			},
			FUSE_READLINK => {
				debug2!("READLINK({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(se.filesystem.readlink(header.nodeid));
			},
			FUSE_MKNOD => {
				let arg: &fuse_mknod_in = data.fetch();
				let name = data.fetch_str();
				debug2!("MKNOD({:u}) parent {:#018x}, name {:s}, mode {:#05o}, rdev {:u}", header.unique, header.nodeid, name, arg.mode, arg.rdev);
				self.reply(se.filesystem.mknod(header.nodeid, name, arg.mode as mode_t, arg.rdev as dev_t));
			},
			FUSE_MKDIR => {
				let arg: &fuse_mkdir_in = data.fetch();
				let name = data.fetch_str();
				debug2!("MKDIR({:u}) parent {:#018x}, name {:s}, mode {:#05o}", header.unique, header.nodeid, name, arg.mode);
				self.reply(se.filesystem.mkdir(header.nodeid, name, arg.mode as mode_t));
			},
			FUSE_UNLINK => {
				let name = data.fetch_str();
				debug2!("UNLINK({:u}) parent {:#018x}, name {:s}", header.unique, header.nodeid, name);
				self.reply(se.filesystem.unlink(header.nodeid, name));
			},
			FUSE_RMDIR => {
				let name = data.fetch_str();
				debug2!("RMDIR({:u}) parent {:#018x}, name {:s}", header.unique, header.nodeid, name);
				self.reply(se.filesystem.rmdir(header.nodeid, name));
			},
			FUSE_SYMLINK => {
				let name = data.fetch_str();
				let link = data.fetch_str();
				debug2!("SYMLINK({:u}) parent {:#018x}, name {:s}, link {:s}", header.unique, header.nodeid, name, link);
				self.reply(se.filesystem.symlink(header.nodeid, name, link));
			},
			FUSE_RENAME => {
				let arg: &fuse_rename_in = data.fetch();
				let name = data.fetch_str();
				let newname = data.fetch_str();
				debug2!("RENAME({:u}) parent {:#018x}, name {:s}, newparent {:#018x}, newname {:s}", header.unique, header.nodeid, name, arg.newdir, newname);
				self.reply(se.filesystem.rename(header.nodeid, name, arg.newdir, newname));
			},
			FUSE_LINK => {
				let arg: &fuse_link_in = data.fetch();
				let newname = data.fetch_str();
				debug2!("LINK({:u}) ino {:#018x}, newparent {:#018x}, newname {:s}", header.unique, arg.oldnodeid, header.nodeid, newname);
				self.reply(se.filesystem.link(arg.oldnodeid, header.nodeid, newname));
			},
			FUSE_OPEN => {
				let arg: &fuse_open_in = data.fetch();
				debug2!("OPEN({:u}) ino {:#018x}, flags {:#x}, mode {:#x}", header.unique, header.nodeid, arg.flags, arg.mode);
				self.reply(se.filesystem.open(header.nodeid, arg.flags as uint));
			},
			FUSE_READ => {
				let arg: &fuse_read_in = data.fetch();
				debug2!("READ({:u}) ino {:#018x}, fh {:u}, offset {:u}, size {:u}", header.unique, header.nodeid, arg.fh, arg.offset, arg.size);
				self.reply(se.filesystem.read(header.nodeid, arg.fh, arg.offset as off_t, arg.size as size_t));
			},
			FUSE_WRITE => {
				let arg: &fuse_write_in = data.fetch();
				let data = data.fetch_data();
				assert!(data.len() == arg.size as uint);
				debug2!("WRITE({:u}) ino {:#018x}, fh {:u}, offset {:u}, size {:u}, flags {:#x}", header.unique, header.nodeid, arg.fh, arg.offset, arg.size, arg.write_flags);
				self.reply(se.filesystem.write(header.nodeid, arg.fh, arg.offset as off_t, data, arg.write_flags as uint).and_then(|written| {
					Ok(~fuse_write_out { size: written as u32, padding: 0 })
				}));
			},
			FUSE_FLUSH => {
				let arg: &fuse_flush_in = data.fetch();
				debug2!("FLUSH({:u}) ino {:#018x}, fh {:u}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.lock_owner);
				self.reply(se.filesystem.flush(header.nodeid, arg.fh, arg.lock_owner));
			},
			FUSE_RELEASE => {
				let arg: &fuse_release_in = data.fetch();
				let flush = match arg.release_flags & FUSE_RELEASE_FLUSH { 0 => false, _ => true };
				debug2!("RELEASE({:u}) ino {:#018x}, fh {:u}, flags {:#x}, release flags {:#x}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner);
				self.reply(se.filesystem.release(header.nodeid, arg.fh, arg.flags as uint, arg.lock_owner, flush));
			},
			FUSE_FSYNC => {
				let arg: &fuse_fsync_in = data.fetch();
				let datasync = match arg.fsync_flags & 1 { 0 => false, _ => true };
				debug2!("FSYNC({:u}) ino {:#018x}, fh {:u}, flags {:#x}", header.unique, header.nodeid, arg.fh, arg.fsync_flags);
				self.reply(se.filesystem.fsync(header.nodeid, arg.fh, datasync));
			},
			FUSE_OPENDIR => {
				let arg: &fuse_open_in = data.fetch();
				debug2!("OPENDIR({:u}) ino {:#018x}, flags {:#x}, mode {:#x}", header.unique, header.nodeid, arg.flags, arg.mode);
				self.reply(se.filesystem.opendir(header.nodeid, arg.flags as uint));
			},
			FUSE_READDIR => {
				let arg: &fuse_read_in = data.fetch();
				debug2!("READDIR({:u}) ino {:#018x}, fh {:u}, offset {:u}, size {:u}", header.unique, header.nodeid, arg.fh, arg.offset, arg.size);
				self.reply(se.filesystem.readdir(header.nodeid, arg.fh, arg.offset as off_t, DirBuffer::new(arg.size as uint)));
			},
			FUSE_RELEASEDIR => {
				let arg: &fuse_release_in = data.fetch();
				debug2!("RELEASEDIR({:u}) ino {:#018x}, fh {:u}, flags {:#x}, release flags {:#x}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner);
				self.reply(se.filesystem.releasedir(header.nodeid, arg.fh, arg.flags as uint));
			},
			FUSE_FSYNCDIR => {
				let arg: &fuse_fsync_in = data.fetch();
				let datasync = match arg.fsync_flags & 1 { 0 => false, _ => true };
				debug2!("FSYNCDIR({:u}) ino {:#018x}, fh {:u}, flags {:#x}", header.unique, header.nodeid, arg.fh, arg.fsync_flags);
				self.reply(se.filesystem.fsyncdir(header.nodeid, arg.fh, datasync));
			},
			FUSE_STATFS => {
				debug2!("STATFS({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(se.filesystem.statfs(header.nodeid));
			},
			FUSE_SETXATTR => {
				let arg: &fuse_setxattr_in = data.fetch();
				let name = data.fetch_str();
				let value = data.fetch_data();
				assert!(value.len() == arg.size as uint);
				// FIXME: arg.position exists on OS X only, use 0 on other OS
				debug2!("SETXATTR({:u}) ino {:#018x}, name {:s}, size {:u}, flags {:#x}", header.unique, header.nodeid, name, arg.size, arg.flags);
				self.reply(se.filesystem.setxattr(header.nodeid, name, value, arg.flags as uint, arg.position as off_t));
			},
			FUSE_GETXATTR => {
				let arg: &fuse_getxattr_in = data.fetch();
				let name = data.fetch_str();
				debug2!("GETXATTR({:u}) ino {:#018x}, name {:s}, size {:u}", header.unique, header.nodeid, name, arg.size);
				match se.filesystem.getxattr(header.nodeid, name) {
					// If arg.size is zero, the size of the value should be sent with fuse_getxattr_out
					Ok(ref value) if arg.size == 0 => self.reply(Ok(fuse_getxattr_out { size: value.len() as u32, padding: 0 })),
					// If arg.size is non-zero, send the value if it fits, or ERANGE otherwise
					Ok(ref value) if value.len() > arg.size as uint => self.reply_error(ERANGE),
					Ok(value) => self.reply(Ok(value)),
					Err(err) => self.reply_error(err),
				}
			},
			FUSE_LISTXATTR => {
				let arg: &fuse_getxattr_in = data.fetch();
				debug2!("LISTXATTR({:u}) ino {:#018x}, size {:u}", header.unique, header.nodeid, arg.size);
				match se.filesystem.listxattr(header.nodeid) {
					// TODO: If arg.size is zero, the size of the attribute list should be sent with fuse_getxattr_out
					// TODO: If arg.size is non-zero, send the attribute list if it fits, or ERANGE otherwise
					Ok(_) => self.reply_error(ENOSYS),
					Err(err) => self.reply_error(err),
				}
			},
			FUSE_REMOVEXATTR => {
				let name = data.fetch_str();
				debug2!("REMOVEXATTR({:u}) ino {:#018x}, name {:s}", header.unique, header.nodeid, name);
				self.reply(se.filesystem.removexattr(header.nodeid, name));
			},
			FUSE_ACCESS => {
				let arg: &fuse_access_in = data.fetch();
				debug2!("ACCESS({:u}) ino {:#018x}, mask {:#05o}", header.unique, header.nodeid, arg.mask);
				self.reply(se.filesystem.access(header.nodeid, arg.mask as uint));
			},
			// TODO: FUSE_CREATE,
			// TODO: FUSE_GETLK,
			// TODO: FUSE_SETLK,
			// TODO: FUSE_SETLKW,
			FUSE_BMAP => {
				let arg: &fuse_bmap_in = data.fetch();
				debug2!("BMAP({:u}) ino {:#018x}, blocksize {:u}, ids {:u}", header.unique, header.nodeid, arg.blocksize, arg.block);
				self.reply(se.filesystem.bmap(header.nodeid, arg.blocksize as size_t, arg.block));
			},
			FUSE_SETVOLNAME => {			// OS X only
				let name = data.fetch_str();
				debug2!("SETVOLNAME({:u}) name {:s}", header.unique, name);
				self.reply(se.filesystem.setvolname(name));
			},
			FUSE_EXCHANGE => {				// OS X only
				let arg: &fuse_exchange_in = data.fetch();
				let oldname = data.fetch_str();
				let newname = data.fetch_str();
				debug2!("EXCHANGE({:u}) parent {:#018x}, name {:s}, newparent {:#018x}, newname {:s}, options {:#x}", header.unique, arg.olddir, oldname, arg.newdir, newname, arg.options);
				self.reply(se.filesystem.exchange(arg.olddir, oldname, arg.newdir, newname, arg.options as uint));
			},
			FUSE_GETXTIMES => {				// OS X only
				debug2!("GETXTIMES({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(se.filesystem.getxtimes(header.nodeid));
			},

			_ => {
				warn2!("Ignoring unsupported FUSE operation {:u}", header.opcode)
				self.reply_error(ENOSYS);
			},
		}
	}

	/// Reply to a request with the given error code and data
	#[fixed_stack_segment]
	fn send<T: Sendable> (&self, err: c_int, data: &T) {
		let header: &fuse_in_header = ArgumentIterator::new(self.data).fetch();
		do data.as_iovecs |data_iovs| {
			let len = data_iovs.iter().fold(0u32, |l, iov| { l + iov.iov_len as u32 });
			let header = fuse_out_header {
				len: sys::size_of::<fuse_out_header>() as u32 + len,
				error: err as i32,
				unique: header.unique,
			};
			let iov = ~[iovec {
				iov_base: ptr::to_unsafe_ptr(&header) as *c_void,
				iov_len: sys::size_of_val(&header) as size_t,
			}] + data_iovs;
			do iov.as_imm_buf |iovptr, iovlen| {
				unsafe { writev(self.fd.unwrap(), iovptr, iovlen as c_int); }
			}
		}
	}

	/// Reply to a request with the given data or error code
	fn reply<T: Sendable> (&self, result: Result<T, c_int>) {
		match result {
			Ok(reply) => self.send(0, &reply),
			Err(err) => self.send(-err, &()),
		}
	}

	/// Reply to a request with the given error code
	fn reply_error (&self, err: c_int) {
		self.send(-err, &());
	}
}

// --------------------------------------------------------------------------

/// A session is established with the kernel driver while a userspace
/// filesystem is mounted. The session connects to the kernel driver and
/// runs a loop that receives, dispatches and replies kernel requests
struct Session<FS> {
	filesystem: ~FS,
	mountpoint: ~str,
	priv fd: Option<io::fd_t>,
	exited: bool,
	proto_major: uint,
	proto_minor: uint,
	initialized: bool,
	destroyed: bool,
}

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
fn with_fuse_args<T> (options: &[~str], f: &fn(&fuse_args) -> T) -> T {
	let argptrs = ~["mira".with_c_str(util::id)] +
		options.map(|arg| { arg.with_c_str(util::id) }) +
		~[ptr::null::<c_char>()];
	let args = fuse_args {
		argc: options.len() as c_int - 1,
		argv: vec::raw::to_ptr(argptrs),
		allocated: 0,
	};
	f(&args)
}

impl<FS: Filesystem> Session<FS> {
	/// Mount the given filesystem to the given mountpoint
	#[fixed_stack_segment]
	fn mount (filesystem: ~FS, mountpoint: &Path, options: &[~str]) -> ~Session<FS> {
		info2!("Mounting {:s}", mountpoint.to_str());
		let mut se = ~Session {
			filesystem: filesystem,
			mountpoint: mountpoint.to_str(),
			fd: None,
			exited: false,
			proto_major: 0,
			proto_minor: 0,
			initialized: false,
			destroyed: false,
		};
		do se.mountpoint.with_c_str |mnt| {
			do with_fuse_args(options) |args| {
				let fd = unsafe { fuse_mount_compat25(mnt, args) };
				if fd < 0 { fail2!("Mounting FUSE failed. {:s}", os::last_os_error()); }
				se.fd = Some(fd);
			}
		}
		se
	}

	/// Run the session loop that receives, dispatches and replies to kernel requests
	#[fixed_stack_segment]
	fn run (&mut self) {
		let sh = SignalHandler::new();
		let mut req = Request::new();
		while !self.exited && !sh.signalled() {
			if unsafe { wait_for_fd(self.fd.unwrap(), 1000) } > 0 {
				match req.read(self.fd.unwrap()) {
					Err(ENOENT) => loop,			// Operation interrupted. Accordingly to FUSE, this is safe to retry
					Err(EINTR) => loop,				// Interrupted system call, retry
					Err(EAGAIN) => loop,			// Explicitly try again
					Err(ENODEV) => break,			// Filesystem was unmounted, quit the loop
					Err(err) => fail2!("Lost connection to FUSE device. Error {:i}", err),
					Ok(_) => req.dispatch(self),
				}
			}
			// Yield control to the task scheduler from time to time
			task::deschedule();
		}
	}

	/// Tell a running session loop to exit
	fn exit (&mut self) {
		self.exited = true;
	}
}

#[unsafe_destructor]
impl<FS: Filesystem> Drop for Session<FS> {
	#[fixed_stack_segment]
	fn drop (&mut self) {
		info2!("Unmounting {:s}", self.mountpoint);
		// Close kernel channel before unnmounting to prevent sync unmount deadlock
		if self.fd.is_some() { unsafe { libc::close(self.fd.unwrap()) }; }
		// TODO: send ioctl FUSEDEVIOCSETDAEMONDEAD on OS X
		do self.mountpoint.with_c_str |mnt| {
			unsafe { fuse_unmount_compat22(mnt) };
		}
	}
}
