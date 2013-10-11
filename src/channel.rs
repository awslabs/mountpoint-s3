/*!
 * Communication channel to the FUSE kernel driver.
 */

use std::{os, vec};
use std::io::fd_t;
use std::libc::{c_int, c_void, size_t};
use native::{fuse_args, fuse_mount_compat25, fuse_unmount_compat22};

pub struct Channel {
	priv fd: fd_t,
}

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
fn with_fuse_args<T> (options: &[&str], f: &fn(&fuse_args) -> T) -> T {
	do "rust-fuse".with_c_str |progname| {
		let args = options.map(|arg| arg.to_c_str());
		let argptrs = [progname] + args.map(|arg| arg.with_ref(|s| s));
		do argptrs.as_imm_buf |argv, argc| {
			f(&fuse_args { argc: argc as i32, argv: argv, allocated: 0 })
		}
	}
}

// Libc provides iovec based I/O using readv and writev functions
mod libc {
	use std::libc::{c_int, c_void, size_t, ssize_t};

	/// Iovec data structure for readv and writev calls.
	pub struct iovec {
		iov_base: *c_void,
		iov_len: size_t,
	}

	extern {
		/// Read data from fd into multiple buffers
		pub fn readv (fd: c_int, iov: *mut iovec, iovcnt: c_int) -> ssize_t;
		/// Write data from multiple buffers to fd
		pub fn writev (fd: c_int, iov: *iovec, iovcnt: c_int) -> ssize_t;
	}
}

impl Channel {
	/// Creates a new communication channel to the kernel driver by
	/// mounting the given mountpoint
	#[fixed_stack_segment]
	pub fn mount (mountpoint: &str, options: &[&str]) -> Result<Channel, c_int> {
		do mountpoint.with_c_str |mnt| {
			do with_fuse_args(options) |args| {
				let fd = unsafe { fuse_mount_compat25(mnt, args) };
				if fd < 0 { Err(os::errno() as c_int) } else { Ok(Channel { fd: fd }) }
			}
		}
	}

	/// Unmount a given mountpoint
	#[fixed_stack_segment]
	pub fn unmount (mountpoint: &str) {
		do mountpoint.with_c_str |mnt| {
			unsafe { fuse_unmount_compat22(mnt); }
		}
	}

	/// Closes the communication channel to the kernel driver
	#[fixed_stack_segment]
	pub fn close (&mut self) {
		// TODO: send ioctl FUSEDEVIOCSETDAEMONDEAD on OS X before closing the fd
		unsafe { ::std::libc::close(self.fd); }
		self.fd = -1;
	}

	/// Receives data up to the capacity of the given buffer
	#[fixed_stack_segment]
	pub fn receive (&self, buffer: &mut ~[u8]) -> Result<(), c_int> {
		buffer.clear();
		let capacity = buffer.capacity();
		let rc = do buffer.as_mut_buf |ptr, _| {
			// FIXME: This read can block the whole scheduler (and therefore multiple other tasks)
			unsafe { ::std::libc::read(self.fd, ptr as *mut c_void, capacity as size_t) }
		};
		if rc >= 0 { unsafe { vec::raw::set_len(buffer, rc as uint); } }
		if rc < 0 { Err(os::errno() as c_int) } else { Ok(()) }
	}

	/// Send all data in the slice of slice of bytes in a single write
	#[fixed_stack_segment]
	pub fn send (&self, buffer: &[&[u8]]) -> Result<(), c_int> {
		let iovecs = do buffer.map |d| {
			do d.as_imm_buf |bufptr, buflen| {
				libc::iovec { iov_base: bufptr as *c_void, iov_len: buflen as size_t }
			}
		};
		let rc = do iovecs.as_imm_buf |iovptr, iovcnt| {
			// FIXME: This write can block the whole scheduler (and therefore multiple other tasks)
			unsafe { libc::writev(self.fd, iovptr, iovcnt as c_int) }
		};
		if rc < 0 { Err(os::errno() as c_int) } else { Ok(()) }
	}
}


#[cfg(test)]
mod test {
	use super::with_fuse_args;
	use std::vec;

	#[test]
	fn test_with_fuse_args () {
		do with_fuse_args(["foo", "bar"]) |args| {
			unsafe {
				assert!(args.argc == 3);
				do vec::raw::buf_as_slice(*args.argv.offset(0) as *u8, 10) |bytes| { assert!(bytes == bytes!("rust-fuse\0") ); }
				do vec::raw::buf_as_slice(*args.argv.offset(1) as *u8, 4) |bytes| { assert!(bytes == bytes!("foo\0")); }
				do vec::raw::buf_as_slice(*args.argv.offset(2) as *u8, 4) |bytes| { assert!(bytes == bytes!("bar\0")); }
			}
		}
	}
}
