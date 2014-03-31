//!
//! A reply is passed to filesystem operation implementations and must
//! be used to send back the result of an operation.
//! The reply can optionally be sent to another task to asynchronously
//! work on an operation and provide the result later. Also it allows
//! replying with a block of data without cloning the data.
//! A reply *must always* be used (by calling either ok() or error()
//! exactly once).
//!

use std::{mem, slice};
use std::libc::{c_int, EIO};
use fuse::fuse_out_header;
use sendable::{Sendable, DirBuffer};

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
}

impl Reply for ReplyDirectory {
	fn new (unique: u64, sender: proc:Send(&[&[u8]])) -> ReplyDirectory {
		ReplyDirectory { reply: Reply::new(unique, sender) }
	}
}

impl ReplyDirectory {
	/// Reply to a request with the given data
	pub fn ok (mut self, buffer: &DirBuffer) {
		buffer.as_bytegroups(|bytes| {
			self.reply.send(0, bytes);
		});
	}

	/// Reply to a request with the given error code
	pub fn error (self, err: c_int) {
		self.reply.error(err);
	}
}


#[cfg(test)]
mod test {
	use super::as_bytes;
	use super::{Reply, ReplyRaw, ReplyEmpty, ReplyData};

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
}
