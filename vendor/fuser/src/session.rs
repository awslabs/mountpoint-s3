//! Filesystem session
//!
//! A session runs a filesystem implementation while it is being mounted to a specific mount
//! point. A session begins by mounting the filesystem and ends by unmounting it. While the
//! filesystem is mounted, the session loop receives, dispatches and replies to kernel requests
//! for filesystem operations under its mount point.

use libc::{EAGAIN, EINTR, ENODEV, ENOENT};
use log::{info, warn};
use std::fmt;
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU32, AtomicBool, Ordering};
use std::sync::{Arc, Mutex};
use std::thread::{self, JoinHandle};
use std::{io, ops::DerefMut};

use crate::ll::fuse_abi as abi;
use crate::request::Request;
use crate::Filesystem;
use crate::MountOption;
use crate::{channel::Channel, mnt::Mount};

/// The max size of write requests from the kernel. The absolute minimum is 4k,
/// FUSE recommends at least 128k, max 16M. The FUSE default is 16M on macOS
/// and 128k on other systems.
pub const MAX_WRITE_SIZE: usize = 16 * 1024 * 1024;

/// Size of the buffer for reading a request from the kernel. Since the kernel may send
/// up to MAX_WRITE_SIZE bytes in a write request, we use that value plus some extra space.
const BUFFER_SIZE: usize = MAX_WRITE_SIZE + 4096;

#[derive(Debug, Eq, PartialEq)]
pub(crate) enum SessionACL {
    All,
    RootAndOwner,
    Owner,
}

/// The session data structure
#[derive(Debug)]
pub struct Session<FS: Filesystem> {
    /// Filesystem operation implementations
    pub(crate) filesystem: FS,
    /// Communication channel to the kernel driver
    ch: Channel,
    /// Handle to the mount.  Dropping this unmounts.
    mount: Arc<Mutex<Option<Mount>>>,
    /// Mount point
    mountpoint: PathBuf,
    /// Whether to restrict access to owner, root + owner, or unrestricted
    /// Used to implement allow_root and auto_unmount
    pub(crate) allowed: SessionACL,
    /// User that launched the fuser process
    pub(crate) session_owner: u32,
    /// FUSE protocol major version
    pub(crate) proto_major: AtomicU32,
    /// FUSE protocol minor version
    pub(crate) proto_minor: AtomicU32,
    /// True if the filesystem is initialized (init operation done)
    pub(crate) initialized: AtomicBool,
    /// True if the filesystem was destroyed (destroy operation done)
    pub(crate) destroyed: AtomicBool,
}

impl<FS: Filesystem> Session<FS> {
    /// Create a new session by mounting the given filesystem to the given mountpoint
    pub fn new(
        filesystem: FS,
        mountpoint: &Path,
        options: &[MountOption],
    ) -> io::Result<Session<FS>> {
        info!("Mounting {}", mountpoint.display());
        // If AutoUnmount is requested, but not AllowRoot or AllowOther we enforce the ACL
        // ourself and implicitly set AllowOther because fusermount needs allow_root or allow_other
        // to handle the auto_unmount option
        let (file, mount) = if options.contains(&MountOption::AutoUnmount)
            && !(options.contains(&MountOption::AllowRoot)
                || options.contains(&MountOption::AllowOther))
        {
            warn!("Given auto_unmount without allow_root or allow_other; adding allow_other, with userspace permission handling");
            let mut modified_options = options.to_vec();
            modified_options.push(MountOption::AllowOther);
            Mount::new(mountpoint, &modified_options)?
        } else {
            Mount::new(mountpoint, options)?
        };

        let ch = Channel::new(file);
        let allowed = if options.contains(&MountOption::AllowRoot) {
            SessionACL::RootAndOwner
        } else if options.contains(&MountOption::AllowOther) {
            SessionACL::All
        } else {
            SessionACL::Owner
        };

        Ok(Session {
            filesystem,
            ch,
            mount: Arc::new(Mutex::new(Some(mount))),
            mountpoint: mountpoint.to_owned(),
            allowed,
            session_owner: unsafe { libc::geteuid() },
            proto_major: AtomicU32::new(0),
            proto_minor: AtomicU32::new(0),
            initialized: AtomicBool::new(false),
            destroyed: AtomicBool::new(false),
        })
    }

    /// Return path of the mounted filesystem
    pub fn mountpoint(&self) -> &Path {
        &self.mountpoint
    }

    /// Run the session loop that receives kernel requests and dispatches them to method
    /// calls into the filesystem.
    pub fn run(&self) -> io::Result<()> {
        self.run_with_callbacks(|_| {}, |_| {})
    }

    /// Run the session loop that receives kernel requests and dispatches them to method
    /// calls into the filesystem.
    /// This version also notifies callers of kernel requests before and after they
    /// are dispatched to the filesystem.
    pub fn run_with_callbacks<FA, FB>(&self, mut before_dispatch: FB, mut after_dispatch: FA) -> io::Result<()> 
    where 
        FB: FnMut(&Request<'_>),
        FA: FnMut(&Request<'_>),
    {
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
                    Some(req) => {
                        before_dispatch(&req);
                        req.dispatch(self);
                        after_dispatch(&req);
                    },
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
        drop(std::mem::take(&mut *self.mount.lock().unwrap()));
    }

    /// Returns a thread-safe object that can be used to unmount the Filesystem
    pub fn unmount_callable(&mut self) -> SessionUnmounter {
        SessionUnmounter {
            mount: self.mount.clone(),
        }
    }
}

#[derive(Debug)]
/// A thread-safe object that can be used to unmount a Filesystem
pub struct SessionUnmounter {
    mount: Arc<Mutex<Option<Mount>>>,
}

impl SessionUnmounter {
    /// Unmount the filesystem
    pub fn unmount(&mut self) -> io::Result<()> {
        drop(std::mem::take(&mut *self.mount.lock().unwrap()));
        Ok(())
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
        if !self.destroyed.swap(true, Ordering::SeqCst) {
            self.filesystem.destroy();
        }
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
    _mount: Mount,
}

impl BackgroundSession {
    /// Create a new background session for the given session by running its
    /// session loop in a background thread. If the returned handle is dropped,
    /// the filesystem is unmounted and the given session ends.
    pub fn new<FS: Filesystem + Send + 'static>(se: Session<FS>) -> io::Result<BackgroundSession> {
        let mountpoint = se.mountpoint().to_path_buf();
        // Take the fuse_session, so that we can unmount it
        let mount = std::mem::take(&mut *se.mount.lock().unwrap());
        let mount = mount.ok_or_else(|| io::Error::from_raw_os_error(libc::ENODEV))?;
        let guard = thread::spawn(move || {
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
