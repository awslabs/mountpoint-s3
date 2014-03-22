//!
//! A reply is passed to filesystem operation implementations and must
//! be used to send back the result of an operation.
//! The reply can optionally be sent to another task to asynchronously
//! work on an operation and provide the result later. Also it allows
//! replying with a block of data without cloning the data.
//! A reply *must always* be used (by calling either ok() or error()
//! exactly once).
//!

use std::mem;
use std::libc::{c_int, EIO};
use channel::ChannelSender;
use fuse::fuse_out_header;
use sendable::Sendable;

/// Create a new reply for the given request
pub fn reply<T: Sendable> (ch: ChannelSender, unique: u64) -> Reply<T> {
	Reply::new(ch, unique)
}

/// Reply data structure
pub struct Reply<T> {
	/// Channel sender for sending the reply
	priv ch: ChannelSender,
	/// Unique id of the request to reply to
	priv unique: u64,
	/// Flag whether the reply was sent
	priv replied: bool,
}

impl<T: Sendable> Reply<T> {
	/// Create a new reply for the given request
	fn new (ch: ChannelSender, unique: u64) -> Reply<T> {
		Reply { ch: ch, unique: unique, replied: false }
	}

	/// Reply to a request with the given error code and data
	fn send<T: Sendable> (&mut self, err: c_int, data: &T) {
		if self.replied {
			warn!("Ignoring duplicate reply for operation {:u}", self.unique);
			return;
		}
		data.as_bytegroups(|databytes| {
			let datalen = databytes.iter().fold(0, |l, b| { l +  b.len()});
			let outheader = fuse_out_header {
				len: mem::size_of::<fuse_out_header>() as u32 + datalen as u32,
				error: err,
				unique: self.unique,
			};
			outheader.as_bytegroups(|headbytes| {
				let _ = self.ch.send(headbytes + databytes);
				self.replied = true;
			});
		});
	}

	/// Reply to a request with the given data
	pub fn ok (mut self, data: &T) {
		self.send(0, data);
	}

	/// Reply to a request with the given error code
	pub fn error (mut self, err: c_int) {
		self.send(-err, &());
	}
}

#[unsafe_destructor]
impl<T: Sendable> Drop for Reply<T> {
	fn drop (&mut self) {
		if !self.replied {
			warn!("Reply not sent for operation {:u}, replying with I/O error", self.unique);
			self.send(-EIO, &());
		}
	}
}
