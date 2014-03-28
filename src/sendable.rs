//!
//! Helper to compose arbitrary data structures into packets of binary data.
//!

use std::{cast, mem, ptr, slice};
use std::io::{FileType, TypeFile, TypeDirectory, TypeNamedPipe, TypeBlockSpecial, TypeSymlink, TypeUnknown};
use std::libc::{S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFLNK};
use fuse::fuse_dirent;

/// Trait for types that can be sent as a reply to the FUSE kernel driver
pub trait Sendable {
	/// Returns the byte representation of a type
	fn as_bytegroups<T> (&self, f: |&[&[u8]]| -> T) -> T {
		// Generally send a memory copy of a type (this works for all
		// structs, i.e. fuse_*_out)
		unsafe {
			let len = mem::size_of::<Self>();
			slice::raw::buf_as_slice(self as *Self as *u8, len, |bytes| {
				f([bytes])
			})
		}
	}
}

/// Buffer for replying with a list of directory entries
pub struct DirBuffer {
	data: Vec<u8>,
}

impl DirBuffer {
	/// Create a new dir buffer of the given size
	pub fn new (size: uint) -> DirBuffer {
		DirBuffer { data: Vec::with_capacity(size) }
	}

	/// Add an entry to the dir buffer. Returns true if the buffer is full.
	/// A transparent offset value can be provided for each entry. The
	/// kernel uses these value to request the next entries in further
	/// readdir calls
	pub fn fill (&mut self, ino: u64, offset: u64, typ: FileType, name: &PosixPath) -> bool {
		let name = name.as_vec();
		let entlen = mem::size_of::<fuse_dirent>() + name.len();
		let entsize = (entlen + mem::size_of::<u64>() - 1) & !(mem::size_of::<u64>() - 1);	// 64bit align
		let padlen = entsize - entlen;
		if self.data.len() + entsize > self.data.capacity() { return true; }
		unsafe {
			let p = self.data.as_mut_ptr().offset(self.data.len() as int);
			let pdirent: *mut fuse_dirent = cast::transmute(p);
			(*pdirent).ino = ino;
			(*pdirent).off = offset;
			(*pdirent).namelen = name.len() as u32;
			(*pdirent).typ = match typ {
				TypeFile => S_IFREG, TypeDirectory => S_IFDIR, TypeNamedPipe => S_IFCHR,
				TypeBlockSpecial => S_IFBLK, TypeSymlink => S_IFLNK, TypeUnknown => 0,
			} as u32 >> 12;
			let p = p.offset(mem::size_of_val(&*pdirent) as int);
			ptr::copy_memory(p, name.as_ptr(), name.len());
			let p = p.offset(name.len() as int);
			ptr::zero_memory(p, padlen);
			let newlen = self.data.len() + entsize;
			self.data.set_len(newlen);
		}
		false
	}

	/// Returns the size of the data that has been filled into the buffer
	pub fn len (&self) -> uint {
		self.data.len()
	}
}

impl Sendable for DirBuffer {
	fn as_bytegroups<T> (&self, f: |&[&[u8]]| -> T) -> T {
		// Send a dirbuffer by sending its data vector
		f([self.data.as_slice()])
	}
}


#[cfg(test)]
mod test {
	use std::io::{TypeFile, TypeDirectory};
	use super::{Sendable, DirBuffer};

	#[test]
	fn sendable_dirbuffer () {
		let mut buf = DirBuffer::new(128);
		buf.fill(111, 222, TypeDirectory, &PosixPath::new("hello"));
		buf.fill(444, 555, TypeFile, &PosixPath::new("world.rs"));
		let expected = [
			111, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 104, 101, 108, 108, 111,  0,   0,   0,
			188, 1, 0, 0, 0, 0, 0, 0,  43, 2, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 119, 111, 114, 108, 100, 46, 114, 115,
		];
		buf.as_bytegroups(|bytes| {
			assert!(bytes.len() == 1, "sendable dirbuffer should be represented as a single bytes slice");
			assert!(bytes[0] == expected, "sendable dirbuffer should be represented by a bytes slice with the contents of the dirbuffer");
		});
	}
}
