/*!
 * A session is established with the kernel driver while a userspace
 * filesystem is mounted. The session connects to the kernel driver and
 * runs a loop that receives, dispatches and replies kernel requests.
 */

use std::libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use channel::Channel;
use Filesystem;
use request::Request;

/// The session data structure
pub struct Session<FS> {
	filesystem: ~FS,
	mountpoint: ~str,
	ch: Channel,
	proto_major: uint,
	proto_minor: uint,
	initialized: bool,
	destroyed: bool,
}

impl<FS: Filesystem> Session<FS> {
	/// Mount the given filesystem to the given mountpoint
	pub fn mount (filesystem: ~FS, mountpoint: ~str, options: &[~str]) -> Session<FS> {
		info2!("Mounting {:s}", mountpoint);
		let ch = Channel::mount(mountpoint, options).expect("unable to mount filesystem");
		Session {
			filesystem: filesystem,
			mountpoint: mountpoint,
			ch: ch,
			proto_major: 0,
			proto_minor: 0,
			initialized: false,
			destroyed: false,
		}
	}

	/// Run the session loop that receives, dispatches and replies to kernel requests
	pub fn run (&mut self) {
		let mut req = Request::new();
		loop {
			match req.read(self) {
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
		self.ch.close();
		Channel::unmount(self.mountpoint);
	}
}
