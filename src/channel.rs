//!
//! Raw communication channel to the FUSE kernel driver.
//!

use std::os;
use std::libc::{c_int, c_void, size_t};
use fuse::{fuse_args, fuse_mount_compat25, fuse_unmount_compat22};

// Libc provides iovec based I/O using readv and writev functions
#[allow(dead_code)]
mod libc {
	use std::libc::{c_int, c_void, size_t, ssize_t};

	/// Iovec data structure for readv and writev calls.
	pub struct iovec {
		iov_base: *c_void,
		iov_len: size_t,
	}

	extern "system" {
		/// Read data from fd into multiple buffers
		pub fn readv (fd: c_int, iov: *mut iovec, iovcnt: c_int) -> ssize_t;
		/// Write data from multiple buffers to fd
		pub fn writev (fd: c_int, iov: *iovec, iovcnt: c_int) -> ssize_t;
	}
}

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
fn with_fuse_args<T> (options: &[&[u8]], f: |&fuse_args| -> T) -> T {
	"rust-fuse".with_c_str(|progname| {
		let args = options.map(|arg| arg.to_c_str());
		let argptrs = [progname] + args.map(|arg| arg.with_ref(|s| s));
		f(&fuse_args { argc: argptrs.len() as i32, argv: argptrs.as_ptr(), allocated: 0 })
	})
}

/// A raw communication channel to the FUSE kernel driver
pub struct Channel {
	priv mountpoint: Path,
	priv fd: c_int,
}

impl Channel {
	/// Create a new communication channel to the kernel driver by mounting the
	/// given path. The kernel driver will delegate filesystem operations of
	/// the given path to the channel. If the channel is dropped, the path is
	/// unmounted.
	pub fn new (mountpoint: &Path, options: &[&[u8]]) -> Result<Channel, c_int> {
		mountpoint.with_c_str(|mnt| {
			with_fuse_args(options, |args| {
				let fd = unsafe { fuse_mount_compat25(mnt, args) };
				if fd < 0 {
					Err(os::errno() as c_int)
				} else {
					Ok(Channel { mountpoint: mountpoint.clone(), fd: fd })
				}
			})
		})
	}

	/// Receives data up to the capacity of the given buffer.
	/// Note: Can block natively, so it should be called from a separate thread
	pub fn receive (&self, buffer: &mut ~[u8]) -> Result<(), c_int> {
		buffer.clear();
		let rc = unsafe { ::std::libc::read(self.fd, buffer.as_ptr() as *mut c_void, buffer.capacity() as size_t) };
		if rc >= 0 {
			unsafe { buffer.set_len(rc as uint); }
		}
		if rc < 0 {
			Err(os::errno() as c_int)
		} else {
			Ok(())
		}
	}

	/// Send all data in the slice of slice of bytes in a single write.
	/// Note: Can block natively, so it should be called from a separate thread
	pub fn send (&self, buffer: &[&[u8]]) -> Result<(), c_int> {
		let iovecs = buffer.map(|d| {
			libc::iovec { iov_base: d.as_ptr() as *c_void, iov_len: d.len() as size_t }
		});
		let rc = unsafe { libc::writev(self.fd, iovecs.as_ptr(), iovecs.len() as c_int) };
		if rc < 0 {
			Err(os::errno() as c_int)
		} else {
			Ok(())
		}
	}
}

impl Drop for Channel {
	fn drop (&mut self) {
		// TODO: send ioctl FUSEDEVIOCSETDAEMONDEAD on OS X before closing the fd
		// Close the communication channel to the kernel driver
		// (closing it before unnmount prevents sync unmount deadlock)
		unsafe { ::std::libc::close(self.fd); }
		// Unmount this channel's mount point
		unmount(&self.mountpoint);
	}
}

/// Unmount an arbitrary mount point
pub fn unmount (mountpoint: &Path) {
	mountpoint.with_c_str(|mnt| {
		unsafe { fuse_unmount_compat22(mnt); }
	});
}


#[cfg(test)]
mod test {
	use super::with_fuse_args;
	use std::vec;

	#[test]
	fn fuse_args () {
		with_fuse_args([bytes!("foo"), bytes!("bar")], |args| {
			unsafe {
				assert!(args.argc == 3);
				vec::raw::buf_as_slice(*args.argv.offset(0) as *u8, 10, |bytes| { assert!(bytes == bytes!("rust-fuse\0") ); });
				vec::raw::buf_as_slice(*args.argv.offset(1) as *u8,  4, |bytes| { assert!(bytes == bytes!("foo\0")); });
				vec::raw::buf_as_slice(*args.argv.offset(2) as *u8,  4, |bytes| { assert!(bytes == bytes!("bar\0")); });
			}
		});
	}
}
