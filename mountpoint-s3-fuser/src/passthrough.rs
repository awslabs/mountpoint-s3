use std::fs::File;
use std::os::fd::{AsFd, AsRawFd};
use std::sync::{Arc, Weak};

#[repr(C)]
struct fuse_backing_map {
    fd: u32,
    flags: u32,
    padding: u64,
}

const FUSE_DEV_IOC_MAGIC: u8 = 229;
const FUSE_DEV_IOC_BACKING_OPEN: u8 = 1;
const FUSE_DEV_IOC_BACKING_CLOSE: u8 = 2;

nix::ioctl_write_ptr!(
    fuse_dev_ioc_backing_open,
    FUSE_DEV_IOC_MAGIC,
    FUSE_DEV_IOC_BACKING_OPEN,
    fuse_backing_map
);

nix::ioctl_write_ptr!(
    fuse_dev_ioc_backing_close,
    FUSE_DEV_IOC_MAGIC,
    FUSE_DEV_IOC_BACKING_CLOSE,
    u32
);

/// A reference to a previously opened fd intended to be used for passthrough
///
/// You can create these via `ReplyOpen::open_backing()` and send them via
/// `ReplyOpen::opened_passthrough()`.
///
/// When working with backing IDs you need to ensure that they live "long enough".  A good practice
/// is to create them in the Filesystem::open() impl, store them in the struct of your Filesystem
/// impl, then drop them in the Filesystem::release() impl.  Dropping them immediately after
/// sending them in the Filesystem::open() impl can lead to the kernel returning EIO when userspace
/// attempts to access the file.
///
/// This is implemented as a safe wrapper around the backing_id field of the fuse_backing_map
/// struct used by the ioctls involved in fd passthrough.  It is created by performing a
/// FUSE_DEV_IOC_BACKING_OPEN ioctl on an fd and has a Drop trait impl which makes a matching
/// FUSE_DEV_IOC_BACKING_CLOSE call.  It holds a weak reference on the fuse channel to allow it to
/// make that call (if the channel hasn't already been closed).
#[derive(Debug)]
pub struct BackingId {
    channel: Weak<File>,
    /// The backing_id field passed to and from the kernel
    pub(crate) backing_id: u32,
}

impl BackingId {
    pub(crate) fn create(channel: &Arc<File>, fd: impl AsFd) -> std::io::Result<Self> {
        let map = fuse_backing_map {
            fd: fd.as_fd().as_raw_fd() as u32,
            flags: 0,
            padding: 0,
        };
        let id = unsafe { fuse_dev_ioc_backing_open(channel.as_raw_fd(), &map) }?;
        Ok(Self {
            channel: Arc::downgrade(channel),
            backing_id: id as u32,
        })
    }
}

impl Drop for BackingId {
    fn drop(&mut self) {
        if let Some(ch) = self.channel.upgrade() {
            let _ = unsafe { fuse_dev_ioc_backing_close(ch.as_raw_fd(), &self.backing_id) };
        }
    }
}
