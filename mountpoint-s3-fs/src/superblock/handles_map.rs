use crate::metablock::InodeNo;
use crate::sync::RwLock;
use std::collections::HashMap;
use std::collections::hash_map::Entry;

use super::InodeLockedForWriting;

/// Tracks currently open readers and writers (file handles) for Inodes.
/// Ensures that the Inodes are locked for writing while performing any operation.
#[derive(Debug, Default)]
pub struct InodeHandleMap {
    handles: RwLock<HashMap<InodeNo, InodeHandles>>,
}

#[derive(Debug, Default)]
struct InodeHandles {
    readers: HashMap<u64, HandleState>,
    writer: Option<(u64, HandleState)>,
}

#[derive(Debug, PartialEq, Eq)]
enum HandleState {
    Active,
    Inactive,
}

impl InodeHandles {
    fn is_empty(&self) -> bool {
        self.readers.is_empty() && self.writer.is_none()
    }
}

impl InodeHandleMap {
    /// Add a new active reader. Will fail if there is an active writer.
    pub fn try_add_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        let entry = handles.entry(locked_inode.ino).or_default();
        if entry
            .writer
            .as_ref()
            .is_some_and(|(_, state)| *state == HandleState::Active)
        {
            return false;
        }
        entry.writer = None;
        entry.readers.insert(fh, HandleState::Active);
        true
    }

    /// Set an existing reader to inactive.
    pub fn deactivate_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) {
        let mut handles = self.handles.write().unwrap();
        if let Some(entry) = handles.get_mut(&locked_inode.ino)
            && let Some(reader) = entry.readers.get_mut(&fh)
        {
            *reader = HandleState::Inactive;
        }
    }

    /// Set an existing reader to active.
    ///
    /// Return `false` if the reader did not exist.
    pub fn try_activate_reader(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        if let Some(entry) = handles.get_mut(&locked_inode.ino)
            && let Some(reader) = entry.readers.get_mut(&fh)
        {
            *reader = HandleState::Active;
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

    /// Set the current writer and removes inactive readers.
    pub fn set_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> Result<(), SetWriterError> {
        let mut handles = self.handles.write().unwrap();
        let entry = handles.entry(locked_inode.ino).or_default();
        if entry.readers.iter().any(|(_, state)| *state == HandleState::Active) {
            return Err(SetWriterError::ActiveReaders);
        }
        if entry
            .writer
            .as_ref()
            .is_some_and(|(_, state)| *state == HandleState::Active)
        {
            return Err(SetWriterError::ActiveWriter);
        }
        entry.writer = Some((fh, HandleState::Active));
        entry.readers.clear();
        Ok(())
    }

    /// Set the current writer to active.
    ///
    /// Return `false` if `fh` is not the current writer.
    pub fn try_activate_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        if let Some(entry) = handles.get_mut(&locked_inode.ino)
            && let Some((writer, state)) = &mut entry.writer
            && fh == *writer
        {
            *state = HandleState::Active;
            return true;
        }
        false
    }

    /// Set the current writer to inactive.
    ///
    /// Return `false` if `fh` is not the current writer.
    pub fn try_deactivate_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        if let Some(entry) = handles.get_mut(&locked_inode.ino)
            && let Some((writer, state)) = &mut entry.writer
            && fh == *writer
        {
            *state = HandleState::Inactive;
            return true;
        }
        false
    }

    /// Remove the current writer.
    pub fn try_remove_writer(&self, locked_inode: &InodeLockedForWriting<'_>, fh: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        if let Entry::Occupied(mut entry) = handles.entry(locked_inode.ino)
            && let Some((writer, _)) = &entry.get().writer
            && fh == *writer
        {
            entry.get_mut().writer = None;
            if entry.get().is_empty() {
                entry.remove();
            }
            return true;
        }
        false
    }

    pub fn remove_inode(&self, ino: u64) -> bool {
        let mut handles = self.handles.write().unwrap();
        handles.remove(&ino).is_some()
    }
}

#[derive(Debug)]
pub enum SetWriterError {
    ActiveWriter,
    ActiveReaders,
}
