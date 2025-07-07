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
mod stat;

// Re-export all the core types
pub use error::{InodeError, InodeErrorInfo};
pub use expiry::Expiry;
pub use lookup::{InodeInformation, Lookup};
pub use path::{S3Location, ValidKey, ValidName};
pub use stat::{InodeKind, InodeNo, InodeStat};

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

    /// Start writing to an inode.
    async fn start_writing(&self, ino: InodeNo, mode: &WriteMode, is_truncate: bool) -> Result<(), InodeError>;

    /// Increase the size of a file open for writing.
    /// Parameter `len` refers to the additional
    /// Returns the new size after the increase.
    async fn inc_file_size(&self, ino: InodeNo, len: usize) -> Result<usize, InodeError>;

    /// Called when the filesystem has finished writing to the inode refernced by `ino`.
    /// Allows the implementor to make necessary adjustments / update its internal structure.
    async fn finish_writing(&self, ino: InodeNo, etag: Option<ETag>) -> Result<(), InodeError>;

    /// Prepare an inode (referenced by `ino`) to start reading.
    async fn start_reading(&self, ino: InodeNo) -> Result<(), InodeError>;

    /// Finish reading from the inode (referenced by `ino`)
    async fn finish_reading(&self, ino: InodeNo) -> Result<(), InodeError>;

    /// Start a readdir stream for the given directory referenced inode (`dir_ino`)
    ///
    /// Returns a number with which this stream can be accessed in `readdir` and `releasedir`.
    async fn new_readdir_handle(&self, dir_ino: InodeNo) -> Result<u64, InodeError>;

    /// Reads entries from the readdir stream, for the directory `parent`, referred to by `fh` starting at offset `offset`.
    ///
    /// Entries shall be passed onto the `replier` as described in its documentation.
    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        is_readdirplus: bool,
        mut replier: TryAddDirEntry<'a>,
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

/// A callback function used to pass information to the filesystem.
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
/// Returns `true` if the entry was successfully used
///
///
/// [^1]: The generation number is used to ensure uniqueness of inode/generation pairs.
///     If the file system were exported over NFS, these pairs would need to be unique.
///     For more information, see the [libfuse documentation](https://github.com/libfuse/libfuse/blob/fc1c8da0cf8a18d222cb1feed0057ba44ea4d18f/include/fuse_lowlevel.h#L70).
pub type TryAddDirEntry<'r> = Box<dyn FnMut(InodeInformation, OsString, i64, u64) -> bool + Send + Sync + 'r>;

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
