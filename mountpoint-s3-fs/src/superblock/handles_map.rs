use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};

use crate::metablock::InodeNo;
use crate::sync::RwLock;

use super::InodeLockedForWriting;

/// Stores the number of readers (if they are > 0) for Inodes.
/// Ensures that the Inodes are locked for writing while performing these operations.
#[derive(Debug, Default)]
pub struct InodeHandleMap {
    /// Current file handles for this inode
    handles: RwLock<HashMap<InodeNo, InodeHandles>>,
}

#[derive(Debug, Default)]
struct InodeHandles {
    active_readers: HashSet<u64>,
    flushed_readers: HashSet<u64>,
    writer: Option<u64>,
}

impl InodeHandles {
    fn is_empty(&self) -> bool {
        self.active_readers.is_empty() && self.flushed_readers.is_empty() && self.writer.is_none()
    }
}

impl InodeHandleMap {
    pub fn has_active_readers(&self, locked_inode: &InodeLockedForWriting<'_>) -> bool {
        let handles = self.handles.read().unwrap();
        handles
            .get(&locked_inode.ino)
            .is_some_and(|handles| !handles.active_readers.is_empty() || !handles.flushed_readers.is_empty())
    }

    pub fn add_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        handles.entry(locked_inode.ino).or_default().active_readers.insert(fh);
    }

    pub fn remove_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino) {
            entry.get_mut().active_readers.remove(&fh);
            entry.get_mut().flushed_readers.remove(&fh);
            if entry.get().is_empty() {
                entry.remove();
            }
        }
    }

    pub fn remove_writer(&self, locked_inode: &InodeLockedForWriting<'_>) {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino) {
            entry.get_mut().writer = None;
            if entry.get().is_empty() {
                entry.remove();
            }
        }
    }

    pub fn set_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        let entry = handles.entry(locked_inode.ino).or_default();
        entry.writer = Some(fh);
        entry.flushed_readers.clear(); // todo mansi also flush active_readers? should it ever happen?
    }

    pub fn flush_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino)
            && entry.get_mut().active_readers.remove(&fh)
        {
            entry.get_mut().flushed_readers.insert(fh);
        }
    }

    pub fn is_handle_valid(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let handles = self.handles.read().unwrap();
        if let Some(inode_handles) = handles.get(&locked_inode.ino) {
            return inode_handles.active_readers.contains(&fh)
                || inode_handles.flushed_readers.contains(&fh)
                || inode_handles.writer == Some(fh);
        }
        false
    }

    pub fn activate_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino)
            && entry.get_mut().flushed_readers.remove(&fh)
        {
            entry.get_mut().active_readers.insert(fh);
        }
    }
}
