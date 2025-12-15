//! Metablock trait and related types for generic filesystem implementations

use async_trait::async_trait;
use mountpoint_s3_client::types::ETag;
use std::ffi::{OsStr, OsString};
use time::OffsetDateTime;

// Import core types from submodules
mod error;
mod expiry;
mod lookup;
mod path;
mod pending_upload;
mod stat;

// Re-export all the core types
pub use error::{InodeError, InodeErrorInfo};
pub use expiry::{Expiry, NEVER_EXPIRE_TTL};
pub use lookup::{InodeInformation, Lookup};
pub use path::{S3Location, ValidKey, ValidKeyError, ValidName};
pub use pending_upload::PendingUploadHook;
pub use stat::{InodeKind, InodeNo, InodeStat};

use crate::fs::OpenFlags;

pub const ROOT_INODE_NO: InodeNo = crate::fs::FUSE_ROOT_INODE;

/// A trait for a generic implementation of a structure managing a filesystem backed by S3.
///
/// In general, an implementation may implement a subset of the operations and respond with
/// `InodeError::UnsupportedOperations` for the unsupported ones.
/// However, minimally `lookup`, `getattr` and the three readdir functions should be implemented
/// to have a minimally viable file system view.
/// To allow reading from files, additionally `start_reading` and `finish_reading` must be implemented.
/// For writing, it is required to implement `start_writing`, `inc_file_size` and `finish_writing`.
#[async_trait]
pub trait Metablock: Send + Sync {
    /// Lookup an inode in the parent directory with the given name.
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<Lookup, InodeError>;

    /// Retrieve the attributes for an inode
    async fn getattr(&self, ino: InodeNo, force_revalidate: bool) -> Result<Lookup, InodeError>;

    /// Set the attributes for an inode
    async fn setattr(
        &self,
        ino: InodeNo,
        atime: Option<OffsetDateTime>,
        mtime: Option<OffsetDateTime>,
    ) -> Result<Lookup, InodeError>;

    /// Create a new regular file or directory inode ready to be opened in write-only mode
    async fn create(&self, dir: InodeNo, name: &OsStr, kind: InodeKind) -> Result<Lookup, InodeError>;

    /// The kernel tells us when it removes a reference to an [InodeNo] from its internal caches via a forget call.
    /// The kernel may forget a number of references (`n`) in one forget message to our FUSE implementation.
    async fn forget(&self, ino: InodeNo, n: u64);

    /// Open a new file handle for the given inode in read or write mode depending on flags and inode state.
    async fn open_handle(
        &self,
        ino: InodeNo,
        fh: u64,
        write_mode: &WriteMode,
        flags: OpenFlags,
    ) -> Result<NewHandle, InodeError>;

    /// Increase the size of a file open for writing.
    /// Parameter `len` refers to the additional
    /// Returns the new size after the increase.
    async fn inc_file_size(&self, ino: InodeNo, len: usize) -> Result<usize, InodeError>;

    /// Called when the filesystem has finished writing to the inode referenced by `ino`.
    /// Allows the implementor to make necessary adjustments / update its internal structure.
    async fn finish_writing(&self, ino: InodeNo, etag: Option<ETag>, fh: u64) -> Result<Lookup, InodeError>;

    /// Finish reading from the inode (referenced by `ino`)
    async fn finish_reading(&self, ino: InodeNo, fh: u64) -> Result<(), InodeError>;

    /// Called when the filesystem has called `flush` on a read handle for the inode referenced by `ino`.
    /// Allows the implementor to make necessary adjustments / update its internal structure.
    async fn flush_reader(&self, ino: InodeNo, fh: u64) -> Result<bool, InodeError>;

    /// Called when the filesystem has called `flush` on a write handle for the inode referenced by `ino`.
    /// Allows the implementor to make necessary adjustments / update its internal structure.
    async fn flush_writer(
        &self,
        ino: InodeNo,
        fh: u64,
        pending_upload_hook: PendingUploadHook,
    ) -> Result<Option<PendingUploadHook>, InodeError>;

    /// Called when the filesystem has released a write handle for the inode referenced by `ino`.
    /// Allows the implementor to make necessary adjustments / update its internal structure.
    async fn release_writer(
        &self,
        ino: InodeNo,
        fh: u64,
        pending_upload_hook: PendingUploadHook,
        location: &S3Location,
    ) -> Result<(), InodeError>;

    /// Called by filesystem's read/write methods to attempt re-activation of a deactivated file
    /// handle for the inode referenced by `ino`.
    /// Allows the implementor to make necessary adjustments / update its internal structure.
    async fn try_reactivate_handle(&self, ino: InodeNo, fh: u64, mode: ReadWriteMode) -> Result<bool, InodeError>;

    /// Start a readdir stream for the given directory referenced inode (`dir_ino`)
    ///
    /// Returns a number with which this stream can be accessed in `readdir` and `releasedir`.
    async fn new_readdir_handle(&self, dir_ino: InodeNo) -> Result<u64, InodeError>;

    /// Reads entries from the readdir stream, for the directory `parent`, referred to by `fh` starting at offset `offset`.
    ///
    /// Entries shall be passed to `add` as described in its documentation.
    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        is_readdirplus: bool,
        mut add: AddDirEntry<'a>,
    ) -> Result<(), InodeError>;

    /// Closes the readdir handle.
    async fn releasedir(&self, fh: u64) -> Result<(), InodeError>;

    /// Rename inode described by source parent and name to instead be linked under the given destination and name.
    /// If the parameter `allow_overwrite` is set to false, renames where the destination would be replaced shall fail with `InodeError::RenameDestinationExists`.
    async fn rename(
        &self,
        src_parent_ino: InodeNo,
        src_name: &OsStr,
        dst_parent_ino: InodeNo,
        dst_name: &OsStr,
        allow_overwrite: bool,
    ) -> Result<(), InodeError>;

    /// Remove a directory given by name and parent directory.
    async fn rmdir(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), InodeError>;

    /// Unlink the entry described by `parent_ino` and `name`.
    async fn unlink(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), InodeError>;
}

/// Callback to the file system which adds directory entries to the reply buffer.
///
/// # Parameters (in order)
///
/// * `information` - Contains metadata about the inode
/// * `name` - The name of the directory entry
/// * `offset` - Position of this entry
/// * `generation` - Generation number[^1]
///
/// # Returns
///
/// - [AddDirEntryResult::EntryAdded] if the entry was added, or
/// - [AddDirEntryResult::ReplyBufferFull] if the reply buffer was full.
///
///
/// [^1]: The generation number is used to ensure uniqueness of inode/generation pairs.
///     If the file system were exported over NFS, these pairs would need to be unique.
///     For more information, see the [libfuse documentation](https://github.com/libfuse/libfuse/blob/fc1c8da0cf8a18d222cb1feed0057ba44ea4d18f/include/fuse_lowlevel.h#L70).
pub type AddDirEntry<'r> = Box<dyn FnMut(InodeInformation, OsString, i64, u64) -> AddDirEntryResult + Send + Sync + 'r>;

/// Result of a call to `AddDirEntry`.
#[derive(Debug, PartialEq, Eq)]
pub enum AddDirEntryResult {
    /// The entry was added successfully.
    EntryAdded,
    /// The entry was not added because the reply buffer was full.
    ReplyBufferFull,
}

#[derive(Debug, Default)]
pub struct WriteMode {
    /// Allow overwrite
    pub allow_overwrite: bool,
    /// Enable incremental uploads
    pub incremental_upload: bool,
}

impl WriteMode {
    pub fn is_inode_writable(&self, is_truncate: bool) -> bool {
        if self.incremental_upload || (self.allow_overwrite && is_truncate) {
            true
        } else {
            if is_truncate {
                tracing::warn!(
                    "file overwrite is disabled by default, you need to remount with --allow-overwrite flag to enable it"
                );
            } else {
                tracing::warn!(
                    "modifying an existing file is disabled by default, you need to remount with the --allow-overwrite or the --incremental-upload flag to enable it"
                );
            }
            false
        }
    }
}

#[derive(Debug, Clone, Copy)]
pub enum ReadWriteMode {
    Read,
    Write,
}

/// A metablock-level abstraction on a file, providing the user with the latest metadata in the
/// linked inode and the mode in which they're allowed to access the existing data for the file
/// backed by a corresponding S3 object
#[derive(Debug)]
pub struct NewHandle {
    pub lookup: Lookup,
    pub mode: ReadWriteMode,
}

impl NewHandle {
    pub fn read(lookup: Lookup) -> Self {
        Self {
            lookup,
            mode: ReadWriteMode::Read,
        }
    }

    pub fn write(lookup: Lookup) -> Self {
        Self {
            lookup,
            mode: ReadWriteMode::Write,
        }
    }
}
