//! Filesystem session
//!
//! A session runs a filesystem implementation while it is being mounted to a specific mount
//! point. A session begins by mounting the filesystem and ends by unmounting it. While the
//! filesystem is mounted, the session loop receives, dispatches and replies to kernel requests
//! for filesystem operations under its mount point.

use libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use log::info;
#[cfg(feature = "libfuse")]
use std::ffi::OsStr;
use std::fmt;
use std::path::{Path, PathBuf};
use std::thread::{self, JoinHandle};
use std::{io, ops::DerefMut};

use crate::channel::{self, Channel};
use crate::ll::fuse_abi as abi;
use crate::request::Request;
use crate::Filesystem;
#[cfg(not(feature = "libfuse"))]
use crate::MountOption;

/// The max size of write requests from the kernel. The absolute minimum is 4k,
/// FUSE recommends at least 128k, max 16M. The FUSE default is 16M on macOS
/// and 128k on other systems.
pub const MAX_WRITE_SIZE: usize = 16 * 1024 * 1024;

/// Size of the buffer for reading a request from the kernel. Since the kernel may send
/// up to MAX_WRITE_SIZE bytes in a write request, we use that value plus some extra space.
pub(in crate) const BUFFER_SIZE: usize = MAX_WRITE_SIZE + 4096;

/// The session data structure
#[derive(Debug)]
pub struct Session<FS: Filesystem> {
    /// Filesystem operation implementations
    pub filesystem: FS,
    /// Communication channel to the kernel driver
    ch: Channel,
    /// Handle to the mount.  Dropping this unmounts.
    mount: Option<super::channel::Mount>,
    /// Mount point
    mountpoint: PathBuf,
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
    #[cfg(feature = "libfuse")]
    pub fn new(filesystem: FS, mountpoint: &Path, options: &[&OsStr]) -> io::Result<Session<FS>> {
        info!("Mounting {}", mountpoint.display());
        let (ch, mount) = Channel::new(mountpoint, options)?;
        Ok(Session {
            filesystem,
            ch,
            mount: Some(mount),
            mountpoint: mountpoint.to_owned(),
            proto_major: 0,
            proto_minor: 0,
            initialized: false,
            destroyed: false,
        })
    }

    /// Create a new session by mounting the given filesystem to the given mountpoint
    #[cfg(not(feature = "libfuse"))]
    pub fn new2(
        filesystem: FS,
        mountpoint: &Path,
        options: &[MountOption],
    ) -> io::Result<Session<FS>> {
        info!("Mounting {}", mountpoint.display());
        let (ch, mount) = Channel::new2(mountpoint, options)?;
        Ok(Session {
            filesystem,
            ch,
            mount: Some(mount),
            mountpoint: mountpoint.to_owned(),
            proto_major: 0,
            proto_minor: 0,
            initialized: false,
            destroyed: false,
        })
    }

    /// Return path of the mounted filesystem
    pub fn mountpoint(&self) -> &Path {
        &self.mountpoint
    }

    /// Run the session loop that receives kernel requests and dispatches them to method
    /// calls into the filesystem. This read-dispatch-loop is non-concurrent to prevent
    /// having multiple buffers (which take up much memory), but the filesystem methods
    /// may run concurrent by spawning threads.
    pub fn run(&mut self) -> io::Result<()> {
        // Buffer for receiving requests from the kernel. Only one is allocated and
        // it is reused immediately after dispatching to conserve memory and allocations.
        let mut buffer = vec![0; BUFFER_SIZE];
        let buf = aligned_sub_buf(
            buffer.deref_mut(),
            std::mem::align_of::<abi::fuse_in_header>(),
        );
        loop {
            // Read the next request from the given channel to kernel driver
            // The kernel driver makes sure that we get exactly one request per read
            match self.ch.receive(buf) {
                Ok(size) => match Request::new(self.ch.sender(), &buf[..size]) {
                    // Dispatch request
                    Some(req) => req.dispatch(self),
                    // Quit loop on illegal request
                    None => break,
                },
                Err(err) => match err.raw_os_error() {
                    // Operation interrupted. Accordingly to FUSE, this is safe to retry
                    Some(ENOENT) => continue,
                    // Interrupted system call, retry
                    Some(EINTR) => continue,
                    // Explicitly try again
                    Some(EAGAIN) => continue,
                    // Filesystem was unmounted, quit the loop
                    Some(ENODEV) => break,
                    // Unhandled error
                    _ => return Err(err),
                },
            }
        }
        Ok(())
    }
    /// Unmount the filesystem
    pub fn unmount(&mut self) {
        drop(std::mem::take(&mut self.mount));
    }
}

fn aligned_sub_buf(buf: &mut [u8], alignment: usize) -> &mut [u8] {
    let off = alignment - (buf.as_ptr() as usize) % alignment;
    if off == alignment {
        buf
    } else {
        &mut buf[off..]
    }
}

impl<FS: 'static + Filesystem + Send> Session<FS> {
    /// Run the session loop in a background thread
    pub fn spawn(self) -> io::Result<BackgroundSession> {
        BackgroundSession::new(self)
    }
}

impl<FS: Filesystem> Drop for Session<FS> {
    fn drop(&mut self) {
        info!("Unmounted {}", self.mountpoint().display());
    }
}

/// The background session data structure
pub struct BackgroundSession {
    /// Path of the mounted filesystem
    pub mountpoint: PathBuf,
    /// Thread guard of the background session
    pub guard: JoinHandle<io::Result<()>>,
    /// Ensures the filesystem is unmounted when the session ends
    _mount: channel::Mount,
}

impl BackgroundSession {
    /// Create a new background session for the given session by running its
    /// session loop in a background thread. If the returned handle is dropped,
    /// the filesystem is unmounted and the given session ends.
    pub fn new<FS: Filesystem + Send + 'static>(
        mut se: Session<FS>,
    ) -> io::Result<BackgroundSession> {
        let mountpoint = se.mountpoint().to_path_buf();
        // Take the fuse_session, so that we can unmount it
        let mount = std::mem::take(&mut se.mount);
        let mount = mount.ok_or_else(|| io::Error::from_raw_os_error(libc::ENODEV))?;
        let guard = thread::spawn(move || {
            let mut se = se;
            se.run()
        });
        Ok(BackgroundSession {
            mountpoint,
            guard,
            _mount: mount,
        })
    }
    /// Unmount the filesystem and join the background thread.
    pub fn join(self) {
        let Self {
            mountpoint: _,
            guard,
            _mount,
        } = self;
        drop(_mount);
        guard.join().unwrap().unwrap();
    }
}

// replace with #[derive(Debug)] if Debug ever gets implemented for
// thread_scoped::JoinGuard
impl<'a> fmt::Debug for BackgroundSession {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> Result<(), fmt::Error> {
        write!(
            f,
            "BackgroundSession {{ mountpoint: {:?}, guard: JoinGuard<()> }}",
            self.mountpoint
        )
    }
}
