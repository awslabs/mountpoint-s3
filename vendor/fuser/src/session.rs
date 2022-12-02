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
use std::sync::{Arc, Mutex};
use std::thread::{self, JoinHandle};
use std::{io, ops::DerefMut};

use crate::request::{Request, FuseRequestBuffer};
use crate::Filesystem;
use crate::MountOption;
use crate::{channel::Channel, mnt::Mount};

/// The max size of write requests from the kernel. The absolute minimum is 4k,
/// FUSE recommends at least 128k, max 16M. The FUSE default is 16M on macOS
/// and 128k on other systems.
pub const MAX_WRITE_SIZE: usize = 16 * 1024 * 1024;

#[derive(Debug, Eq, PartialEq)]
pub(crate) enum SessionACL {
    All,
    RootAndOwner,
    Owner,
}

/// The session data structure
#[derive(Debug)]
pub struct Session<FS: Filesystem + Send + Sync> {
    /// Filesystem operation implementations
    pub(crate) filesystem: FS,
    /// Communication channel to the kernel driver
    ch: Channel,
    /// Handle to the mount.  Dropping this unmounts.
    mount: Option<Mount>,
    /// Mount point
    mountpoint: PathBuf,
    /// Whether to restrict access to owner, root + owner, or unrestricted
    /// Used to implement allow_root and auto_unmount
    pub(crate) allowed: SessionACL,
    /// User that launched the fuser process
    pub(crate) session_owner: u32,
    /// FUSE protocol major version
    pub(crate) proto_major: std::sync::atomic::AtomicU32,
    /// FUSE protocol minor version
    pub(crate) proto_minor: std::sync::atomic::AtomicU32,
    /// True if the filesystem is initialized (init operation done)
    pub(crate) initialized: std::sync::atomic::AtomicBool,
    /// True if the filesystem was destroyed (destroy operation done)
    pub(crate) destroyed: std::sync::atomic::AtomicBool,
    /// Max number of threads
    max_threads: i32,
    /// Max number of idle threads
    max_idle_threads: i32,
    /// Current number of 
    total_threads: std::sync::atomic::AtomicI32,
    /// Current number of 
    avail_threads: std::sync::atomic::AtomicI32,    
    /// Thread guard of the background session
    guards: Arc<Mutex<Vec<JoinHandle<io::Result<()>>>>>,
}

impl<FS: Filesystem + Send + Sync> Session<FS> {
    /// Create a new session by mounting the given filesystem to the given mountpoint
    pub fn new(
        filesystem: FS,
        mountpoint: &Path,
        options: &[MountOption],
        max_threads: i32,
        max_idle_threads: i32,
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
            mount: Some(mount),
            mountpoint: mountpoint.to_owned(),
            allowed,
            session_owner: unsafe { libc::geteuid() },
            proto_major: std::sync::atomic::AtomicU32::new(0),
            proto_minor: std::sync::atomic::AtomicU32::new(0),
            initialized: std::sync::atomic::AtomicBool::new(false),
            destroyed: std::sync::atomic::AtomicBool::new(false),
            max_threads,
            max_idle_threads,
            total_threads: std::sync::atomic::AtomicI32::new(1),
            avail_threads: std::sync::atomic::AtomicI32::new(1),
            guards: Arc::new(Mutex::new(vec![])),
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
    pub fn run(self: Arc<Self>) -> io::Result<()>
    where
        FS: 'static,
    {
        #[cfg(target_os = "linux")]
        info!("new session thread with TID {}", unsafe { libc::syscall(libc::SYS_gettid) as libc::pid_t });
        let session = &*self;
        loop {
            // Read the next request from the given channel to kernel driver
            // The kernel driver makes sure that we get exactly one request per read
            let mut buffer = FuseRequestBuffer::allocate();
            match self.ch.receive(buffer.deref_mut()) {
                // TODO figure out the alignment stuff here ... need to chop `buffer` down to `size` + whatever padding came off the front
                Ok(size) => match Request::new(self.ch.sender(), buffer, size) {
                    // Dispatch request
                    Some(req) => futures::executor::block_on(async move { req.dispatch(session).await }),
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

    /// Running session loop that spins more threads up to max_threads
    pub fn run_mt(self: Arc<Self>) -> io::Result<()>
    where
        FS: 'static,
    {
        #[cfg(target_os = "linux")]
        info!("new session thread with TID {}", unsafe { libc::syscall(libc::SYS_gettid) as libc::pid_t });
        
        let session = &*self;
        loop {
            // Read the next request from the given channel to kernel driver
            // The kernel driver makes sure that we get exactly one request per read
            let mut buffer = FuseRequestBuffer::allocate();
            match self.ch.receive(buffer.deref_mut()) {
                // TODO figure out the alignment stuff here ... need to chop `buffer` down to `size` + whatever padding came off the front
                Ok(size) => match Request::new(self.ch.sender(), buffer, size) {
                    // Dispatch request
                    Some(req) => {
                        let is_forget = req.is_forget();
                        let avail_threads = &session.avail_threads;
                        let total_threads = &session.total_threads;
                        let max_threads = session.max_threads;

                        if !is_forget { 
                            avail_threads.fetch_sub(1, std::sync::atomic::Ordering::SeqCst);
                        }

                        if avail_threads.load(std::sync::atomic::Ordering::Relaxed) == 0 && 
                            total_threads.load(std::sync::atomic::Ordering::Relaxed) < max_threads {
                            let se = self.clone();
                            let guard = thread::spawn(move || {
                                se.run_mt()
                            });
                            session.guards.lock().unwrap().push(guard);
                            total_threads.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
                            avail_threads.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
                        }

                        futures::executor::block_on(async move { req.dispatch(session).await });
                        if !is_forget {
                            avail_threads.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
                        }

                        let max_idle_threads = session.max_idle_threads;
                        if max_idle_threads != -1 && max_idle_threads < total_threads.load(std::sync::atomic::Ordering::Relaxed) {
                            // Exit current thread when number of idle threads is more than allowed
                            break;
                        }
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

        // reduce total number of threads
        session.avail_threads.fetch_sub(1, std::sync::atomic::Ordering::SeqCst);
        session.total_threads.fetch_sub(1, std::sync::atomic::Ordering::SeqCst);

        #[cfg(target_os = "linux")]
        info!("finished thread with TID {}, threads left {}", 
            unsafe { libc::syscall(libc::SYS_gettid) as libc::pid_t }, 
            session.total_threads.load(std::sync::atomic::Ordering::Relaxed));
        Ok(())
    }

    /// Unmount the filesystem
    pub fn unmount(&mut self) {
        drop(std::mem::take(&mut self.mount));
    }

    /// Join all working threads
    pub fn join(&mut self) {
        let _ = self.guards.lock()
            .unwrap()
            .drain(..)
            .try_for_each(|it| { it.join().unwrap() });
    }
}

impl<FS: 'static + Filesystem + Send + Sync> Session<FS> {
    /// Run the session loop in a background thread
    pub fn spawn(self) -> io::Result<BackgroundSession> {
        BackgroundSession::new(self)
    }
}

impl<FS: Filesystem + Send + Sync> Drop for Session<FS> {
    fn drop(&mut self) {
        if !self.destroyed.load(std::sync::atomic::Ordering::SeqCst) {
            self.filesystem.destroy();
            self.destroyed
                .store(true, std::sync::atomic::Ordering::SeqCst);
        }
        info!("Unmounted {}", self.mountpoint().display());
    }
}

/// The background session data structure
pub struct BackgroundSession {
    /// Path of the mounted filesystem
    pub mountpoint: PathBuf,
    /// Ensures the filesystem is unmounted when the session ends
    _mount: Mount,
}

impl BackgroundSession {
    /// Create a new background session for the given session by running its
    /// session loop in a background thread. If the returned handle is dropped,
    /// the filesystem is unmounted and the given session ends.
    pub fn new<FS: Filesystem + Send + Sync + 'static>(
        mut se: Session<FS>,
    ) -> io::Result<BackgroundSession> {
        let mountpoint = se.mountpoint().to_path_buf();
        // Take the fuse_session, so that we can unmount it
        let mount = std::mem::take(&mut se.mount);
        let mount = mount.ok_or_else(|| io::Error::from_raw_os_error(libc::ENODEV))?;
        let se = Arc::new(se);

        let background_session = BackgroundSession {
            mountpoint,
            _mount: mount,
        };

        let session = Arc::clone(&se);
        let guard = thread::spawn(move || session.run_mt());
        se.guards.lock().unwrap().push(guard);
        Ok(background_session)
    }

    /// Unmount the filesystem and join the background thread.
    pub async fn join(self) {
        let Self {
            mountpoint: _,
            _mount,
        } = self;
        drop(_mount);
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
