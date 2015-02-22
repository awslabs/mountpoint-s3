//!
//! A session runs a filesystem implementation while it is being mounted
//! to a specific mount point. A session begins by mounting the filesystem
//! and ends by unmounting it. While the filesystem is mounted, the session
//! loop receives, dispatches and replies to kernel requests for filesystem
//! operations under its mount point.
//!

use std::io;
use std::ffi::OsStr;
use std::path::{PathBuf, Path};
use std::thread::{Builder, JoinGuard};
use libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use channel;
use channel::Channel;
use Filesystem;
use request::{request, dispatch};

/// The max size of write requests from the kernel. The absolute minimum is 4k,
/// FUSE recommends at least 128k, max 16M. The FUSE default is 16M on OS X
/// and 128k on other systems.
pub const MAX_WRITE_SIZE: usize = 16*1024*1024;

/// Size of the buffer for reading a request from the kernel. Since the kernel may send
/// up to MAX_WRITE_SIZE bytes in a write request, we use that value plus some extra space.
const BUFFER_SIZE: usize = MAX_WRITE_SIZE + 4096;

/// The session data structure
pub struct Session<FS> {
    /// Filesystem operation implementations
    pub filesystem: FS,
    /// Communication channel to the kernel driver
    ch: Channel,
    /// FUSE protocol major version
    pub proto_major: u32,
    /// FUSE protocol minor version
    pub proto_minor: u32,
    /// True if the filesystem is initialized (init operation done)
    pub initialized: bool,
    /// True if the filesystem was destroyed (destroy operation done)
    pub destroyed: bool,
}

impl<FS: Filesystem> Session<FS> {
    /// Create a new session by mounting the given filesystem to the given mountpoint
    pub fn new (filesystem: FS, mountpoint: &Path, options: &[&OsStr]) -> Session<FS> {
        info!("Mounting {}", mountpoint.display());
        let ch = match Channel::new(mountpoint, options) {
            Ok(ch) => ch,
            Err(err) => panic!("Unable to mount filesystem. Error {}", err),
        };
        Session {
            filesystem: filesystem,
            ch: ch,
            proto_major: 0,
            proto_minor: 0,
            initialized: false,
            destroyed: false,
        }
    }

    /// Return path of the mounted filesystem
    pub fn mountpoint (&self) -> &Path {
        &self.ch.mountpoint()
    }

    /// Run the session loop that receives kernel requests and dispatches them to method
    /// calls into the filesystem. This read-dispatch-loop is non-concurrent to prevent
    /// having multiple buffers (which take up much memory), but the filesystem methods
    /// may run concurrent by spawning threads.
    pub fn run (&mut self) {
        // Buffer for receiving requests from the kernel. Only one is allocated and
        // it is reused immediately after dispatching to conserve memory and allocations.
        let mut buffer: Vec<u8> = Vec::with_capacity(BUFFER_SIZE);
        loop {
            // Read the next request from the given channel to kernel driver
            // The kernel driver makes sure that we get exactly one request per read
            match self.ch.receive(&mut buffer) {
                Err(ENOENT) => continue,                // Operation interrupted. Accordingly to FUSE, this is safe to retry
                Err(EINTR) => continue,                 // Interrupted system call, retry
                Err(EAGAIN) => continue,                // Explicitly try again
                Err(ENODEV) => break,                   // Filesystem was unmounted, quit the loop
                Err(err) => panic!("Lost connection to FUSE device. Error {}", err),
                Ok(()) => match request(self.ch.sender(), &buffer) {
                    None => break,                      // Illegal request, quit the loop
                    Some(req) => dispatch(&req, self),
                },
            }
        }
    }
}

impl<FS: Filesystem+Send+'static> Session<FS> {
    /// Run the session loop in a background thread
    pub fn spawn<'a> (self) -> io::Result<BackgroundSession<'a>> {
        BackgroundSession::new(self)
    }
}

#[unsafe_destructor]
impl<FS: Filesystem> Drop for Session<FS> {
    fn drop (&mut self) {
        info!("Unmounted {}", self.mountpoint().display());
        // The actual unmounting takes place because self.ch is dropped here
    }
}

/// The background session data structure
pub struct BackgroundSession<'a> {
    /// Path of the mounted filesystem
    pub mountpoint: PathBuf,
    /// Thread guard of the background session
    pub guard: JoinGuard<'a ()>,
}

impl<'a> BackgroundSession<'a> {
    /// Create a new background session for the given session by running its
    /// session loop in a background thread. If the returned handle is dropped,
    /// the filesystem is unmounted and the given session ends.
    pub fn new<FS: Filesystem+Send+'static> (se: Session<FS>) -> io::Result<BackgroundSession<'a>> {
        let mountpoint = se.mountpoint().to_path_buf();
        let builder = Builder::new().name(format!("FUSE {}", mountpoint.display()));
        let guard = try!(builder.scoped(move || {
            let mut se = se;
            se.run();
        }));
        Ok(BackgroundSession { mountpoint: mountpoint, guard: guard })
    }
}

#[unsafe_destructor]
impl<'a> Drop for BackgroundSession<'a> {
    fn drop (&mut self) {
        info!("Unmounting {}", self.mountpoint.display());
        // Unmounting the filesystem will eventually end the session loop,
        // drop the session and hence end the background thread.
        channel::unmount(&self.mountpoint);
    }
}
