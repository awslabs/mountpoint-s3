/*!
 * A session is established with the kernel driver while a userspace
 * filesystem is mounted. The session connects to the kernel driver and
 * runs a loop that receives, dispatches and replies kernel requests.
 */

use std::cell::Cell;
use std::task;
use std::libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use channel::Channel;
use Filesystem;
use request::Request;

/// The session data structure
pub struct Session<FS> {
	filesystem: FS,
	mountpoint: Path,
	ch: Channel,
	proto_major: uint,
	proto_minor: uint,
	initialized: bool,
	destroyed: bool,
}

impl<FS: Filesystem+Send> Session<FS> {
	/// Mount the given filesystem to the given mountpoint
	pub fn mount (filesystem: FS, mountpoint: &Path, options: &[&[u8]]) -> Session<FS> {
		info!("Mounting {}", mountpoint.display());
		let ch = Channel::mount(mountpoint, options).expect("unable to mount filesystem");
		Session {
			filesystem: filesystem,
			mountpoint: mountpoint.clone(),
			ch: ch,
			proto_major: 0,
			proto_minor: 0,
			initialized: false,
			destroyed: false,
		}
	}

	/// Run the session loop that receives, dispatches and replies to kernel requests.
	/// Make sure to run it on a new single threaded scheduler since the I/O in the
	/// session loop can block.
	pub fn run (&mut self) {
		let mut req = Request::new();
		loop {
			match req.read(self) {
				Err(ENOENT) => continue,		// Operation interrupted. Accordingly to FUSE, this is safe to retry
				Err(EINTR) => continue,			// Interrupted system call, retry
				Err(EAGAIN) => continue,		// Explicitly try again
				Err(ENODEV) => break,			// Filesystem was unmounted, quit the loop
				Err(err) => fail!("Lost connection to FUSE device. Error {:i}", err),
				Ok(_) => req.dispatch(self),
			}
		}
	}

	/// Start the session loop in a background task
	pub fn start (self) -> BackgroundSession {
		BackgroundSession::start(self)
	}
}

#[unsafe_destructor]
impl<FS: Filesystem+Send> Drop for Session<FS> {
	fn drop (&mut self) {
		info!("Unmounting {}", self.mountpoint.display());
		self.ch.close();		// Close channel before unnmount to prevent sync unmount deadlock
		Channel::unmount(&self.mountpoint);
	}
}

/// The background session data structure
pub struct BackgroundSession {
	mountpoint: Path,
}

impl BackgroundSession {
	/// Start the session loop of the given session in a background task
	pub fn start<FS: Filesystem+Send> (se: Session<FS>) -> BackgroundSession {
		let mountpoint = se.mountpoint.clone();
		let se = Cell::new(se);
		// The background task is started using a a new single threaded
		// scheduler since I/O in the session loop can block
		do task::spawn_sched(task::SingleThreaded) {
			se.take().run();
		}
		BackgroundSession { mountpoint: mountpoint }
	}

	/// End the session by unmounting the filesystem (which will
	/// eventually end the session loop)
	pub fn unmount (&self) {
		info!("Unmounting {}", self.mountpoint.display());
		Channel::unmount(&self.mountpoint);
	}
}
