/*!
 * A session is established with the kernel driver while a userspace
 * filesystem is mounted. The session connects to the kernel driver and
 * runs a loop that receives, dispatches and replies kernel requests.
 */

use std::{os, ptr, vec};
use std::libc::{c_char, c_int};
use std::libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use channel::Channel;
use Filesystem;
use native::{fuse_args, fuse_mount_compat25, fuse_unmount_compat22};
use request::Request;

/// The session data structure
pub struct Session<FS> {
	filesystem: ~FS,
	mountpoint: ~str,
	priv ch: Option<Channel>,
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
			ch: None,
			proto_major: 0,
			proto_minor: 0,
			initialized: false,
			destroyed: false,
		};
		do se.mountpoint.with_c_str |mnt| {
			do with_fuse_args(options) |args| {
				let fd = unsafe { fuse_mount_compat25(mnt, args) };
				if fd < 0 { fail2!("Mounting FUSE failed. {:s}", os::last_os_error()); }
				se.ch = Some(Channel::new(fd));
			}
		}
		se
	}

	/// Run the session loop that receives, dispatches and replies to kernel requests
	pub fn run (&mut self) {
		let mut req = Request::new();
		loop {
			match req.read(self.ch.unwrap()) {
				Err(ENOENT) => loop,			// Operation interrupted. Accordingly to FUSE, this is safe to retry
				Err(EINTR) => loop,				// Interrupted system call, retry
				Err(EAGAIN) => loop,			// Explicitly try again
				Err(ENODEV) => break,			// Filesystem was unmounted, quit the loop
				Err(err) => fail2!("Lost connection to FUSE device. Error {:i}", err),
				Ok(_) => req.dispatch(self),
			}
		}
	}
}

#[unsafe_destructor]
impl<FS: Filesystem> Drop for Session<FS> {
	#[fixed_stack_segment]
	fn drop (&mut self) {
		info2!("Unmounting {:s}", self.mountpoint);
		// Close kernel channel before unnmounting to prevent sync unmount deadlock
		if self.ch.is_some() { self.ch.unwrap().close(); }
		do self.mountpoint.with_c_str |mnt| {
			unsafe { fuse_unmount_compat22(mnt) };
		}
	}
}
