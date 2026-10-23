use std::fmt::Display;
use std::fmt::Formatter;

use bitflags::bitflags;

bitflags! {
    /// Poll events for use with fuse poll operations.
    ///
    /// These correspond to the standard poll(2) events from libc.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct PollEvents: u32 {
        /// There is data to read.
        const POLLIN = libc::POLLIN as u32;
        /// There is some exceptional condition on the file descriptor.
        const POLLPRI = libc::POLLPRI as u32;
        /// Writing is now possible.
        const POLLOUT = libc::POLLOUT as u32;
        /// Error condition.
        const POLLERR = libc::POLLERR as u32;
        /// Hang up.
        const POLLHUP = libc::POLLHUP as u32;
        /// Invalid request: fd not open.
        const POLLNVAL = libc::POLLNVAL as u32;
        /// Normal data may be read.
        const POLLRDNORM = libc::POLLRDNORM as u32;
        /// Priority data may be read.
        const POLLRDBAND = libc::POLLRDBAND as u32;
        /// Normal data may be written.
        const POLLWRNORM = libc::POLLWRNORM as u32;
        /// Priority data may be written.
        const POLLWRBAND = libc::POLLWRBAND as u32;
    }
}

impl Display for PollEvents {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}
