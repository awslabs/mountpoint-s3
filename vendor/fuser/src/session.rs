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
use std::sync::Arc;
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
}

impl<FS: Filesystem + Send + Sync> Session<FS> {
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
            mount: Some(mount),
            mountpoint: mountpoint.to_owned(),
            allowed,
            session_owner: unsafe { libc::geteuid() },
            proto_major: std::sync::atomic::AtomicU32::new(0),
            proto_minor: std::sync::atomic::AtomicU32::new(0),
            initialized: std::sync::atomic::AtomicBool::new(false),
            destroyed: std::sync::atomic::AtomicBool::new(false),
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
        let session = self;
        let buffer_pool = BufferPool::new();
        loop {
            // Read the next request from the given channel to kernel driver
            // The kernel driver makes sure that we get exactly one request per read
            let mut buffer = buffer_pool.allocate();
            let buf = aligned_sub_buf_mut(
                buffer.deref_mut(),
                std::mem::align_of::<abi::fuse_in_header>(),
            );
            match session.ch.receive(buf) {
                // TODO figure out the alignment stuff here ... need to chop `buffer` down to `size` + whatever padding came off the front
                Ok(_size) => match Request::new(session.ch.sender(), buffer) {
                    // Dispatch request
                    Some(req) => {
                        let session = std::sync::Arc::clone(&session);
                        futures::executor::block_on(async move { req.dispatch(&*session).await });
                    }
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

struct BufferPool {
    recv: crossbeam::channel::Receiver<Vec<u8>>,
    send: crossbeam::channel::Sender<Vec<u8>>,
}

impl BufferPool {
    fn new() -> Self {
        let (send, recv) = crossbeam::channel::unbounded();
        Self { recv, send }
    }

    fn allocate(&self) -> BufferPoolToken {
        let buf = match self.recv.try_recv() {
            Ok(buf) => buf,
            Err(crossbeam::channel::TryRecvError::Empty) => vec![0; BUFFER_SIZE],
            Err(crossbeam::channel::TryRecvError::Disconnected) => unreachable!(),
        };

        BufferPoolToken {
            data: Some(buf),
            returner: self.send.clone(),
        }
    }
}

#[derive(Debug)]
pub(crate) struct BufferPoolToken {
    data: Option<Vec<u8>>,
    returner: crossbeam::channel::Sender<Vec<u8>>,
}

impl std::ops::Deref for BufferPoolToken {
    type Target = [u8];

    fn deref(&self) -> &Self::Target {
        &self.data.as_ref().unwrap()[..]
    }
}

impl std::ops::DerefMut for BufferPoolToken {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.data.as_mut().unwrap()[..]
    }
}

impl Drop for BufferPoolToken {
    fn drop(&mut self) {
        let buf = self.data.take().unwrap();
        let _ = self.returner.send(buf);
    }
}

pub(crate) fn aligned_sub_buf(buf: &[u8], alignment: usize) -> &[u8] {
    let off = alignment - (buf.as_ptr() as usize) % alignment;
    if off == alignment {
        buf
    } else {
        &buf[off..]
    }
}

pub(crate) fn aligned_sub_buf_mut(buf: &mut [u8], alignment: usize) -> &mut [u8] {
    let off = alignment - (buf.as_ptr() as usize) % alignment;
    if off == alignment {
        buf
    } else {
        &mut buf[off..]
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
    /// Thread guard of the background session
    pub guards: Vec<JoinHandle<io::Result<()>>>,
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
        let guard = thread::spawn(move || se.run());
        Ok(BackgroundSession {
            mountpoint,
            guards: vec![guard],
            _mount: mount,
        })
    }

    /// Like `new` but multithreaded
    pub fn new_multi_thread<FS: Filesystem + Send + Sync + 'static>(
        mut se: Session<FS>,
        thread_count: usize,
    ) -> io::Result<BackgroundSession> {
        assert!(thread_count >= 1);
        let mountpoint = se.mountpoint().to_path_buf();
        // Take the fuse_session, so that we can unmount it
        let mount = std::mem::take(&mut se.mount);
        let mount = mount.ok_or_else(|| io::Error::from_raw_os_error(libc::ENODEV))?;
        let se = Arc::new(se);
        let guards = (0..thread_count)
            .map(|_| {
                let se = Arc::clone(&se);
                thread::spawn(move || se.run())
            })
            .collect();
        Ok(BackgroundSession {
            mountpoint,
            guards,
            _mount: mount,
        })
    }

    /// Unmount the filesystem and join the background thread.
    pub async fn join(self) {
        let Self {
            mountpoint: _,
            guards,
            _mount,
        } = self;
        drop(_mount);
        for guard in guards {
            guard.join().unwrap().unwrap();
        }
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
