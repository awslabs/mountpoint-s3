use std::fmt::Display;
use std::fmt::Formatter;

bitflags::bitflags! {
    /// Ioctl flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct IoctlFlags: u32 {
        /// 32bit compat ioctl on 64bit machine.
        const FUSE_IOCTL_COMPAT = 1 << 0;
        /// Not restricted to well-formed ioctls, retry allowed.
        const FUSE_IOCTL_UNRESTRICTED = 1 << 1;
        /// Retry with new iovecs.
        const FUSE_IOCTL_RETRY = 1 << 2;
        /// 32bit ioctl.
        const FUSE_IOCTL_32BIT = 1 << 3;
        /// Is a directory.
        const FUSE_IOCTL_DIR = 1 << 4;
        /// x32 compat ioctl on 64bit machine (64bit time_t).
        const FUSE_IOCTL_COMPAT_X32 = 1 << 5;
    }
}

impl Display for IoctlFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}
