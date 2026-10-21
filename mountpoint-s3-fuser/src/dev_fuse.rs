use std::fs::File;
use std::fs::OpenOptions;
use std::io;
use std::os::fd::AsFd;
use std::os::fd::AsRawFd;
use std::os::fd::BorrowedFd;

/// A newtype for `File` that represents the `/dev/fuse` device.
#[derive(Debug)]
pub(crate) struct DevFuse(pub(crate) File);

impl AsRawFd for DevFuse {
    fn as_raw_fd(&self) -> std::os::unix::io::RawFd {
        self.0.as_raw_fd()
    }
}

impl AsFd for DevFuse {
    fn as_fd(&self) -> BorrowedFd<'_> {
        self.0.as_fd()
    }
}

impl DevFuse {
    pub(crate) const PATH: &'static str = "/dev/fuse";

    #[allow(dead_code)] // Not used with every feature.
    pub(crate) fn open() -> io::Result<Self> {
        OpenOptions::new()
            .read(true)
            .write(true)
            .open(Self::PATH)
            .map(Self)
    }
}
