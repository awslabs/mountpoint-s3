/*!
 * Helper to compose arbitrary data structures into packets of binary data.
 */

use std::{cast, ptr, sys, vec};
use std::libc::{mode_t, off_t, S_IFMT};
use native::{fuse_entry_out, fuse_attr_out, fuse_open_out};
use native::{fuse_write_out, fuse_statfs_out, fuse_getxattr_out, fuse_lk_out};
use native::{fuse_init_out, fuse_bmap_out, fuse_out_header, fuse_dirent};
#[cfg(target_os = "macos")]
use native::{fuse_getxtimes_out};

/// Trait for types that can be sent as a reply to the FUSE kernel driver
pub trait Sendable {
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		// Generally send a memory copy of a type (this works for all
		// structs, i.e. fuse_*_out)
		unsafe {
			let ptr = ptr::to_unsafe_ptr(self);
			let len = sys::size_of::<Self>();
			do vec::raw::buf_as_slice(ptr as *u8, len) |bytes| {
				f([bytes])
			}
		}
	}
}

// Implemente sendable trait for fuse_*_out data types
impl Sendable for fuse_entry_out { }
impl Sendable for fuse_attr_out { }
impl Sendable for fuse_open_out { }
impl Sendable for fuse_write_out { }
impl Sendable for fuse_statfs_out { }
impl Sendable for fuse_getxattr_out { }
impl Sendable for fuse_lk_out { }
impl Sendable for fuse_init_out { }
impl Sendable for fuse_bmap_out { }
impl Sendable for fuse_out_header { }
#[cfg(target_os = "macos")]
impl Sendable for fuse_getxtimes_out { }

impl<S: Sendable> Sendable for ~S {
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		(**self).as_bytegroups(f)
	}
}

impl Sendable for () {
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		// A unit value has nothing to send
		f([])
	}
}

impl<'self> Sendable for &'self [u8] {
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		f([*self])
	}
}

impl Sendable for ~[u8] {
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		f([self.as_slice()])
	}
}

impl Sendable for ~str {
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		// Sending a string uses its byte-representation (without trailing NUL)
		f([self.as_bytes()])
	}
}

/// Buffer for replying with a list of directory entries
pub struct DirBuffer {
	priv data: ~[u8],
}

impl DirBuffer {
	/// Create a new dir buffer of the given size
	pub fn new (size: uint) -> ~DirBuffer {
		~DirBuffer { data: vec::with_capacity(size) }
	}

	/// Add an entry to the dir buffer. Returns true if the buffer is full.
	/// A transparent offset value can be provided for each entry. The
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
				(*pdirent).typ = (mode as u32 & S_IFMT as u32) >> 12;
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
	fn as_bytegroups<T> (&self, f: &fn(&[&[u8]]) -> T) -> T {
		// Send a dirbuffer by sending its data vector
		self.data.as_bytegroups(f)
	}
}


#[cfg(test)]
mod test {
	use super::{Sendable, DirBuffer};
	use std::libc::{mode_t, S_IFREG};

	struct test_data_t { p1: u8, p2: u8, p3: u16 }
	impl Sendable for test_data_t {}

	#[test]
	fn test_sendable_struct () {
		let data = test_data_t { p1: 111, p2: 222, p3: 333 };
		data.as_bytegroups(|bytes| {
			assert!(bytes.len() == 1, "sendable struct should be represented as a single bytes slice");
			assert!(bytes[0] == [0x6f, 0xde, 0x4d, 0x01], "sendable struct should be represented by a bytes slice with the byte representation of the struct");
		});
	}

	#[test]
	fn test_sendable_owned_struct () {
		let data = ~test_data_t { p1: 111, p2: 222, p3: 333 };
		data.as_bytegroups(|bytes| {
			assert!(bytes.len() == 1, "sendable owned struct should be represented as a single bytes slice");
			assert!(bytes[0] == [0x6f, 0xde, 0x4d, 0x01], "sendable owned struct should be represented by a bytes slice with the byte representation of the owned struct");
		});
	}

	#[test]
	fn test_sendable_null () {
		let data = ();
		data.as_bytegroups(|bytes| {
			assert!(bytes.len() == 0, "sendable empty element should be represented by no bytes slice at all");
		});
	}

	#[test]
	fn test_sendable_buffer () {
		let data: ~[u8] = ~[11, 22, 33, 44, 55];
		data.as_bytegroups(|bytes| {
			assert!(bytes.len() == 1, "sendabled buffer should be represented as a single bytes slice");
			assert!(bytes[0] == data, "sendable buffer should be represented by a bytes slice with the contents of the buffer");
		});
	}

	#[test]
	fn test_sendable_string () {
		let data = ~"hello";
		let expected = [104, 101, 108, 108, 111];	// no trailing NUL
		data.as_bytegroups(|bytes| {
			assert!(bytes.len() == 1, "sendable string should be represented as a single bytes slice");
			assert!(bytes[0] == expected, "sendable string should be represented by a bytes slice with the contents of the string");
		});
	}

	#[test]
	fn test_sendable_dirbuffer () {
		let mut buf = DirBuffer::new(128);
		buf.fill(111, 222, S_IFREG as mode_t, "hello");
		buf.fill(444, 555, S_IFREG as mode_t, "world.rs");
		let expected = [
			111, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 8, 0, 0, 0, 104, 101, 108, 108, 111,  0,   0,   0,
			188, 1, 0, 0, 0, 0, 0, 0,  43, 2, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 119, 111, 114, 108, 100, 46, 114, 115,
		];
		buf.as_bytegroups(|bytes| {
			assert!(bytes.len() == 1, "sendable dirbuffer should be represented as a single bytes slice");
			assert!(bytes[0] == expected, "sendable dirbuffer should be reply_error by a bytes slice with the contents of the dirbuffer");
		});
	}
}
