/*!
 * A session is established with the kernel driver while a userspace
 * filesystem is mounted. The session connects to the kernel driver and
 * runs a loop that receives, dispatches and replies kernel requests.
 */

use std::{libc, os, ptr, task, vec};
use std::io::fd_t;
use std::libc::{c_char, c_int};
use std::libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use glue::{SignalHandler, wait_for_fd};
use Filesystem;
use native::{fuse_args, fuse_mount_compat25, fuse_unmount_compat22};
use request::Request;

/// The session data structure
pub struct Session<FS> {
	filesystem: ~FS,
	mountpoint: ~str,
	priv fd: Option<fd_t>,
	exited: bool,
	proto_major: uint,
	proto_minor: uint,
	initialized: bool,
	destroyed: bool,
}

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
fn with_fuse_args<T> (options: &[~str], f: &fn(&fuse_args) -> T) -> T {
	let argptrs = ~["progname".with_c_str(|s| s)] +
		options.map(|arg| { arg.with_c_str(|s| s) }) +
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
	pub fn mount (filesystem: ~FS, mountpoint: &Path, options: &[~str]) -> ~Session<FS> {
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
	pub fn run (&mut self) {
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
	pub fn exit (&mut self) {
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
