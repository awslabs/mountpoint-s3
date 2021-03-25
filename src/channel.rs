use std::{fs::File, io, os::unix::prelude::AsRawFd, sync::Arc};

use libc::{c_int, c_void, size_t};

use crate::reply::ReplySender;

/// A raw communication channel to the FUSE kernel driver
#[derive(Debug)]
pub struct Channel(Arc<File>);

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel.
    pub(crate) fn new(device: Arc<File>) -> Self {
        Self(device)
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
