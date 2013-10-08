/*!
 * Helper for sending out a number of arbitrary data structures to a file
 * descriptor in one write call without copying the data.
 */

// TODO: Need to find a more Rust-like solution for this, especially because
// writev may block (though it doesn't when writing to the FUSE kernel driver)

use std::{cast, ptr, sys, vec};
use std::libc::{c_int, c_void, mode_t, off_t, size_t, ssize_t, S_IFMT};
use native::fuse_dirent;

/// Iovec data structure for readv and writev calls.
#[deriving(Clone)]
pub struct iovec {
	iov_base: *c_void,
	iov_len: size_t,
}

#[nolink]
extern {
	/// Read data from fd into multiple buffers
	pub fn readv (fd: c_int, iov: *mut iovec, iovcnt: c_int) -> ssize_t;
	/// Write data from multiple buffers to fd
	pub fn writev (fd: c_int, iov: *iovec, iovcnt: c_int) -> ssize_t;
}

/// Trait for types that can be sent as a reply to the FUSE kernel driver
pub trait Sendable {
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		// Generally send a memory copy of a type (this works for all
		// structs, i.e. fuse_*_out)
		f([iovec {
			iov_base: ptr::to_unsafe_ptr(self) as *c_void,
			iov_len: sys::size_of::<Self>() as size_t,
		}])
	}
}

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
	fn as_iovecs<T> (&self, f: &fn(&[iovec]) -> T) -> T {
		// Send a buffer by sending its data vector
		self.data.as_iovecs(f)
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
		data.as_iovecs(|iovs| {
			assert!(iovs.len() == 1, "sendable struct should be represented as a single iovec");
			assert!(iovs[0].iov_len == 4, "sendable struct should be represented by an iovec with the length of the size of the struct");
			assert!(unsafe { *(iovs[0].iov_base as *[u8, ..4]) } == [0x6f, 0xde, 0x4d, 0x01], "sendable struct should be represented by an iovec with the byte representation of the struct");
		});
	}

	#[test]
	fn test_sendable_owned_struct () {
		let data = ~test_data_t { p1: 111, p2: 222, p3: 333 };
		data.as_iovecs(|iovs| {
			assert!(iovs.len() == 1, "sendable owned struct should be represented as a single iovec");
			assert!(iovs[0].iov_len == 4, "sendable owned struct should be represented by an iovec with the length of the size of the owned struct");
			assert!(unsafe { *(iovs[0].iov_base as *[u8, ..4]) } == [0x6f, 0xde, 0x4d, 0x01], "sendable owned struct should be represented by an iovec with the byte representation of the owned struct");
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

	#[test]
	fn test_sendable_dirbuffer () {
		let mut buf = DirBuffer::new(128);
		buf.fill(111, 222, S_IFREG as mode_t, "hello");
		buf.fill(444, 555, S_IFREG as mode_t, "world.rs");
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
}
