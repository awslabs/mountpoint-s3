use std::{
    fs::File,
    io,
    os::{
        fd::{AsFd, BorrowedFd},
        unix::prelude::AsRawFd,
    },
    sync::Arc,
};

use libc::{c_int, c_void, size_t};

use crate::reply::ReplySender;

/// A raw communication channel to the FUSE kernel driver
#[derive(Debug)]
pub struct Channel(Arc<File>);

impl AsFd for Channel {
    fn as_fd(&self) -> BorrowedFd<'_> {
        self.0.as_fd()
    }
}

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel.
    pub(crate) fn new(device: Arc<File>) -> Self {
        Self(device)
    }

    /// Create a worker channel by opening a new /dev/fuse file descriptor and
    /// associating it with the session using FUSE_DEV_IOC_CLONE ioctl.
    /// This allows multiple threads to read from separate file descriptors
    /// without contention.
    pub fn clone_channel(&self) -> io::Result<Self> {
        use std::fs::OpenOptions;
        use std::os::unix::io::AsRawFd;
        //use nix::sys::ioctl::ioctl_read;
        use nix::ioctl_read;
        use nix::Result as NixResult;

        // Open a new /dev/fuse file
        let worker_file = OpenOptions::new()
            .read(true)
            .write(true)
            .open("/dev/fuse")?;

        // Get the raw file descriptors
        let worker_fd = worker_file.as_raw_fd();
        let mut session_fd = self.0.as_raw_fd();

        // Define the FUSE_DEV_IOC_CLONE ioctl using nix's ioctl_read! macro
        ioctl_read!(fuse_dev_ioc_clone, 229, 0, libc::c_int);

        // Associate the worker fd with the session fd using FUSE_DEV_IOC_CLONE
        let result: NixResult<libc::c_int> = unsafe {
            let val = &mut session_fd as *mut libc::c_int;
            fuse_dev_ioc_clone(worker_fd, val)
        };

        // Convert nix::Error to io::Error if the ioctl fails
        if let Err(err) = result {
            return Err(io::Error::new(io::ErrorKind::Other, err));
        }

        Ok(Self(Arc::new(worker_file)))
    }

    /// Receives data up to the capacity of the given buffer (can block).
    pub fn receive(&self, buffer: &mut [u8]) -> io::Result<usize> {
        let rc = unsafe {
            libc::read(
                self.0.as_raw_fd(),
                buffer.as_ptr() as *mut c_void,
                buffer.len() as size_t,
            )
        };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            Ok(rc as usize)
        }
    }

    /// Returns a sender object for this channel. The sender object can be
    /// used to send to the channel. Multiple sender objects can be used
    /// and they can safely be sent to other threads.
    pub fn sender(&self) -> ChannelSender {
        // Since write/writev syscalls are threadsafe, we can simply create
        // a sender by using the same file and use it in other threads.
        ChannelSender(self.0.clone())
    }
}

#[derive(Clone, Debug)]
pub struct ChannelSender(Arc<File>);

impl ReplySender for ChannelSender {
    fn send(&self, bufs: &[io::IoSlice<'_>]) -> io::Result<()> {
        let rc = unsafe {
            libc::writev(
                self.0.as_raw_fd(),
                bufs.as_ptr() as *const libc::iovec,
                bufs.len() as c_int,
            )
        };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            debug_assert_eq!(bufs.iter().map(|b| b.len()).sum::<usize>(), rc as usize);
            Ok(())
        }
    }
}
