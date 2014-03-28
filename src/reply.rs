//!
//! A reply is passed to filesystem operation implementations and must
//! be used to send back the result of an operation.
//! The reply can optionally be sent to another task to asynchronously
//! work on an operation and provide the result later. Also it allows
//! replying with a block of data without cloning the data.
//! A reply *must always* be used (by calling either ok() or error()
//! exactly once).
//!

use std::{cast, mem, ptr, slice};
use std::io::{FileType, TypeFile, TypeDirectory, TypeNamedPipe, TypeBlockSpecial, TypeSymlink, TypeUnknown};
use std::libc::{c_int, EIO};
use std::libc::{S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFLNK};
use fuse::{fuse_out_header, fuse_dirent};

/// Generic reply trait
pub trait Reply {
	/// Create a new reply for the given request
	fn new (unique: u64, sender: proc:Send(&[&[u8]])) -> Self;
}

/// Serialize an arbitrary type to bytes (memory copy, useful for fuse_*_out types)
fn as_bytes<T: Copy, U> (data: &T, f: |&[&[u8]]| -> U) -> U {
	let len = mem::size_of::<T>();
	match len {
		0 => f([]),
		len => unsafe { slice::raw::buf_as_slice(data as *T as *u8, len, |bytes| f([bytes]) ) },
	}
}

///
/// Raw reply
///
pub struct ReplyRaw<T> {
	/// Unique id of the request to reply to
	unique: u64,
	/// Proc to call for sending the reply
	sender: Option<proc:Send(&[&[u8]])>,
}

impl<T: Copy> Reply for ReplyRaw<T> {
	fn new (unique: u64, sender: proc:Send(&[&[u8]])) -> ReplyRaw<T> {
		ReplyRaw { unique: unique, sender: Some(sender) }
	}
}

impl<T: Copy> ReplyRaw<T> {
	/// Reply to a request with the given error code and data. Must be called
	/// only once (the `ok` and `error` methods ensure this by consuming `self`)
	fn send (&mut self, err: c_int, bytes: &[&[u8]]) {
		assert!(self.sender.is_some());
		let len = bytes.iter().fold(0, |l, b| { l +  b.len()});
		let header = fuse_out_header {
			len: (mem::size_of::<fuse_out_header>() + len) as u32,
			error: -err,
			unique: self.unique,
		};
		as_bytes(&header, |headerbytes| {
			let sender = self.sender.take_unwrap();
			sender(headerbytes + bytes);
		});
	}

	/// Reply to a request with the given type
	pub fn ok (mut self, data: &T) {
		as_bytes(data, |bytes| {
			self.send(0, bytes);
		})
	}

	/// Reply to a request with the given error code
	pub fn error (mut self, err: c_int) {
		self.send(err, []);
	}
}

#[unsafe_destructor]
impl<T: Copy> Drop for ReplyRaw<T> {
	fn drop (&mut self) {
		if self.sender.is_some() {
			warn!("Reply not sent for operation {:u}, replying with I/O error", self.unique);
			self.send(EIO, []);
		}
	}
}

///
/// Empty reply
///
pub struct ReplyEmpty {
	reply: ReplyRaw<()>,
}

impl Reply for ReplyEmpty {
	fn new (unique: u64, sender: proc:Send(&[&[u8]])) -> ReplyEmpty {
		ReplyEmpty { reply: Reply::new(unique, sender) }
	}
}

impl ReplyEmpty {
	/// Reply to a request with nothing
	pub fn ok (mut self) {
		self.reply.send(0, []);
	}

	/// Reply to a request with the given error code
	pub fn error (self, err: c_int) {
		self.reply.error(err);
	}
}

///
/// Data reply
///
pub struct ReplyData {
	reply: ReplyRaw<()>,
}

impl Reply for ReplyData {
	fn new (unique: u64, sender: proc:Send(&[&[u8]])) -> ReplyData {
		ReplyData { reply: Reply::new(unique, sender) }
	}
}

impl ReplyData {
	/// Reply to a request with the given data
	pub fn ok (mut self, data: &[u8]) {
		self.reply.send(0, [data]);
	}

	/// Reply to a request with the given error code
	pub fn error (self, err: c_int) {
		self.reply.error(err);
	}
}

///
/// Directory reply
///
pub struct ReplyDirectory {
	reply: ReplyRaw<()>,
	size: uint,
	data: Vec<u8>,
}

impl Reply for ReplyDirectory {
	fn new (unique: u64, sender: proc:Send(&[&[u8]])) -> ReplyDirectory {
		ReplyDirectory { reply: Reply::new(unique, sender), size: 0, data: Vec::with_capacity(4096) }
	}
}

impl ReplyDirectory {
	/// Changes the max size of the directory buffer
	pub fn sized (mut self, size: uint) -> ReplyDirectory {
		self.size = size;
		self.data.reserve(size);
		self
	}

	/// Add an entry to the directory reply buffer. Returns true if the buffer is full.
	/// A transparent offset value can be provided for each entry. The kernel uses these
	/// value to request the next entries in further readdir calls
	pub fn add (&mut self, ino: u64, offset: u64, kind: FileType, name: &PosixPath) -> bool {
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
			(*pdirent).typ = match kind {
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

	/// Reply to a request with the filled directory buffer
	pub fn ok (mut self) {
		self.reply.send(0, [self.data.as_slice()]);
	}

	/// Reply to a request with the given error code
	pub fn error (self, err: c_int) {
		self.reply.error(err);
	}
}


#[cfg(test)]
mod test {
	use std::io::{TypeFile, TypeDirectory};
	use super::as_bytes;
	use super::{Reply, ReplyRaw, ReplyEmpty, ReplyData, ReplyDirectory};

	#[test]
	fn serialize_empty () {
		let data = ();
		as_bytes(&data, |bytes| {
			assert!(bytes == []);
		});
	}

	#[test]
	fn serialize_slice () {
		let data: [u8, ..4] = [0x12, 0x34, 0x56, 0x78];
		as_bytes(&data, |bytes| {
			assert!(bytes == [&[0x12, 0x34, 0x56, 0x78]]);
		});
	}

	#[test]
	fn serialize_struct () {
		struct Data { a: u8, b: u8, c: u16 }
		let data = Data { a: 0x12, b: 0x34, c: 0x5678 };
		as_bytes(&data, |bytes| {
			assert!(bytes == [&[0x12, 0x34, 0x78, 0x56]]);
		});
	}

	#[test]
	fn reply_raw () {
		struct Data { a: u8, b: u8, c: u16 }
		let data = Data { a: 0x12, b: 0x34, c: 0x5678 };
		let reply: ReplyRaw<Data> = Reply::new(0xdeadbeef, proc(bytes) {
			assert!(bytes == [
				&[0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0xef, 0xbe, 0xad, 0xde, 0x00, 0x00, 0x00, 0x00],
				&[0x12, 0x34, 0x78, 0x56],
			]);
		});
		reply.ok(&data);
	}

	#[test]
	fn reply_error () {
		struct Data { a: u8, b: u8, c: u16 }
		let reply: ReplyRaw<Data> = Reply::new(0xdeadbeef, proc(bytes) {
			assert!(bytes == [
				&[0x10, 0x00, 0x00, 0x00, 0xbe, 0xff, 0xff, 0xff,  0xef, 0xbe, 0xad, 0xde, 0x00, 0x00, 0x00, 0x00],
			]);
		});
		reply.error(66);
	}

	#[test]
	fn reply_empty () {
		let reply: ReplyEmpty = Reply::new(0xdeadbeef, proc(bytes) {
			assert!(bytes == [
				&[0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0xef, 0xbe, 0xad, 0xde, 0x00, 0x00, 0x00, 0x00],
			]);
		});
		reply.ok();
	}

	#[test]
	fn reply_data () {
		let reply: ReplyData = Reply::new(0xdeadbeef, proc(bytes) {
			assert!(bytes == [
				&[0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0xef, 0xbe, 0xad, 0xde, 0x00, 0x00, 0x00, 0x00],
				&[0xde, 0xad, 0xbe, 0xef],
			]);
		});
		reply.ok([0xde, 0xad, 0xbe, 0xef]);
	}

	#[test]
	fn reply_directory () {
		let mut reply: ReplyDirectory = Reply::new(0xdeadbeef, proc(bytes) {
			assert!(bytes == [
				&[0x50, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0xef, 0xbe, 0xad, 0xde, 0x00, 0x00, 0x00, 0x00],
				&[0xbb, 0xaa, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
				  0x05, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00,  0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x00 ,0x00, 0x00,
				  0xdd, 0xcc, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
				  0x08, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00,  0x77, 0x6f, 0x72, 0x6c, 0x64, 0x2e, 0x72, 0x73],
			]);
		});
		reply.add(0xaabb, 1, TypeDirectory, &PosixPath::new("hello"));
		reply.add(0xccdd, 2, TypeFile, &PosixPath::new("world.rs"));
		reply.ok();
	}
}
