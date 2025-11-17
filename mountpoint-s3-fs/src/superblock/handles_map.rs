use std::collections::HashMap;
use std::collections::hash_map::Entry;

use crate::metablock::InodeNo;
use crate::sync::RwLock;

use super::InodeLockedForWriting;

/// Tracks currently open readers and writers (file handles) for Inodes.
/// Ensures that the Inodes are locked for writing while performing any operation.
#[derive(Debug, Default)]
pub struct InodeHandleMap {
    handles: RwLock<HashMap<InodeNo, InodeHandles>>,
}

#[derive(Debug, Default)]
struct InodeHandles {
    readers: HashMap<u64, ReaderState>,
    writer: Option<u64>,
}

#[derive(Debug, PartialEq, Eq)]
enum ReaderState {
    Active,
    Flushed,
}

impl InodeHandles {
    fn is_empty(&self) -> bool {
        self.readers.is_empty() && self.writer.is_none()
    }
}

impl InodeHandleMap {
    /// Add a new active reader. Will fail if there is an existing writer,
    /// unless invoked with `remove_writer` set to `true`.
    pub fn try_add_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64, remove_writer: bool) -> bool {
        let mut handles = self.handles.write().unwrap();
        let entry = handles.entry(locked_inode.ino).or_default();
        if !remove_writer && entry.writer.is_some() {
            return false;
        }
        entry.writer = None;
        entry.readers.insert(fh, ReaderState::Active);
        true
    }

    /// Set an existing reader to [ReaderState::Flushed].
    pub fn flush_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        if let Some(entry) = handles.get_mut(&locked_inode.ino)
            && let Some(reader) = entry.readers.get_mut(&fh)
        {
            *reader = ReaderState::Flushed;
        }
    }

    /// Set an existing reader to [ReaderState::Active].
    ///
    /// Return `false` if the reader did not exist.
    pub fn try_activate_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        if let Some(entry) = handles.get_mut(&locked_inode.ino)
            && let Some(reader) = entry.readers.get_mut(&fh)
        {
            *reader = ReaderState::Active;
            return true;
        }
        false
    }

    /// Remove an existing reader.
    pub fn remove_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino) {
            entry.get_mut().readers.remove(&fh);
            if entry.get().is_empty() {
                entry.remove();
            }
        }
    }

    /// Set the current writer and removes [ReaderState::Flushed] readers.
    ///
    /// Return `false` if there are active readers.
    pub fn try_set_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        let entry = handles.entry(locked_inode.ino).or_default();
        if entry.readers.iter().any(|(_, state)| *state == ReaderState::Active) {
            return false;
        }
        entry.writer = Some(fh);
        entry.readers.clear();
        true
    }

    /// Check whether `fh` is the current writer.
    pub fn is_current_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let handles = self.handles.read().unwrap();
        handles.get(&locked_inode.ino).is_some_and(|e| e.writer == Some(fh))
    }

    /// Remove the current writer.
    pub fn remove_writer(&self, locked_inode: &InodeLockedForWriting<'_>) {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino) {
            entry.get_mut().writer = None;
            if entry.get().is_empty() {
                entry.remove();
            }
        }
    }
}
