// Copyright 2013 Andreas Neuhaus and the Mira project group.
// This file may not be used in any way (copied, modified, distributed)
// without explicit permission of the copyright owner. All rights reserved.

/*!
 * Stuff that's missing in Rust and hopefully will appear some time.
 */

use std::libc::{c_void, c_int, size_t, ssize_t};
use std::libc::{S_IFREG, S_IFCHR};

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

/// Fstat mode for symbolic links
pub static S_IFLNK: c_int = S_IFREG + S_IFCHR;
