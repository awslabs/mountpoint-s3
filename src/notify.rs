use std::io;

#[allow(unused)]
use std::{convert::TryInto, ffi::OsStr};

use crate::{
    channel::ChannelSender,
    ll::{fuse_abi::fuse_notify_code as notify_code, notify::Notification},

    // What we're sending here aren't really replies, but they
    // move in the same direction (userspace->kernel), so we can
    // reuse ReplySender for it.
    reply::ReplySender,
};

/// A handle by which the application can send notifications to the server
#[derive(Debug)]
pub struct Notifier(ChannelSender);

impl Notifier {
    pub(crate) fn new(cs: ChannelSender) -> Self {
        Self(cs)
    }

    /// Notify poll clients of I/O readiness
    #[cfg(feature = "abi-7-11")]
    pub fn poll(&self, kh: u64) -> io::Result<()> {
        let notif = Notification::new_poll(kh);
        self.send(notify_code::FUSE_POLL, &notif)
    }

    /// Invalidate the kernel cache for a given directory entry
    #[cfg(feature = "abi-7-12")]
    pub fn inval_entry(&self, parent: u64, name: &OsStr) -> io::Result<()> {
        let notif = Notification::new_inval_entry(parent, name).map_err(Self::too_big_err)?;
        self.send_inval(notify_code::FUSE_NOTIFY_INVAL_ENTRY, &notif)
    }

    /// Invalidate the kernel cache for a given inode (metadata and
    /// data in the given range)
    #[cfg(feature = "abi-7-12")]
    pub fn inval_inode(&self, ino: u64, offset: i64, len: i64) -> io::Result<()> {
        let notif = Notification::new_inval_inode(ino, offset, len);
        self.send_inval(notify_code::FUSE_NOTIFY_INVAL_INODE, &notif)
    }

    /// Update the kernel's cached copy of a given inode's data
    #[cfg(feature = "abi-7-15")]
    pub fn store(&self, ino: u64, offset: u64, data: &[u8]) -> io::Result<()> {
        let notif = Notification::new_store(ino, offset, data).map_err(Self::too_big_err)?;
        // Not strictly an invalidate, but the inode we're operating
        // on may have been evicted anyway, so treat is as such
        self.send_inval(notify_code::FUSE_NOTIFY_STORE, &notif)
    }

    /// Invalidate the kernel cache for a given directory entry and inform
    /// inotify watchers of a file deletion.
    #[cfg(feature = "abi-7-18")]
    pub fn delete(&self, parent: u64, child: u64, name: &OsStr) -> io::Result<()> {
        let notif = Notification::new_delete(parent, child, name).map_err(Self::too_big_err)?;
        self.send_inval(notify_code::FUSE_NOTIFY_DELETE, &notif)
    }

    #[allow(unused)]
    fn send_inval(&self, code: notify_code, notification: &Notification<'_>) -> io::Result<()> {
        match self.send(code, notification) {
            // ENOENT is harmless for an invalidation (the
            // kernel may have already dropped the cached
            // entry on its own anyway), so ignore it.
            Err(e) if e.kind() == io::ErrorKind::NotFound => Ok(()),
            x => x,
        }
    }

    fn send(&self, code: notify_code, notification: &Notification<'_>) -> io::Result<()> {
        notification
            .with_iovec(code, |iov| self.0.send(iov))
            .map_err(Self::too_big_err)?
    }

    /// Create an error for indicating when a notification message
    /// would exceed the capacity that its length descriptor field is
    /// capable of encoding.
    fn too_big_err(tfie: std::num::TryFromIntError) -> io::Error {
        io::Error::new(io::ErrorKind::Other, format!("Data too large: {}", tfie))
    }
}
