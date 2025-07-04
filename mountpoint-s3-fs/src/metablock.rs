use crate::s3::config::S3Path;
use crate::superblock::InodeErrorInfo;
use crate::superblock::path::ValidKey;
use crate::superblock::{InodeError, InodeKind, InodeNo, InodeStat};
use crate::sync::Arc;
use std::ffi::OsString;
use std::fmt::Debug;
use std::time::Duration;

/// Describes a location of a file or directory in S3
#[derive(Debug, Clone)]
pub struct S3Location {
    pub path: Arc<S3Path>,
    pub partial_key: ValidKey,
}

impl S3Location {
    pub fn new(path: Arc<S3Path>, partial_key: ValidKey) -> Self {
        Self { path, partial_key }
    }

    /// Get the bucket name
    pub fn bucket_name(&self) -> &str {
        &self.path.bucket_name
    }

    /// Get the full key
    pub fn full_key(&self) -> ValidKey {
        self.partial_key.full_key(&self.path.prefix)
    }

    pub fn name(&self) -> &str {
        self.partial_key.name()
    }
}

/// Basic information the filesystem needs about an inode.
/// Does not include the location in S3, see [`Lookup`] for that.
#[derive(Debug, Clone)]
pub struct InodeInformation {
    ino: InodeNo,
    stat: InodeStat,
    kind: InodeKind,
    is_remote: bool,
}

impl InodeInformation {
    pub fn new(ino: InodeNo, stat: InodeStat, kind: InodeKind, is_remote: bool) -> Self {
        InodeInformation {
            ino,
            stat,
            kind,
            is_remote,
        }
    }

    pub fn kind(&self) -> InodeKind {
        self.kind
    }

    pub fn stat(&self) -> &InodeStat {
        &self.stat
    }

    pub fn ino(&self) -> InodeNo {
        self.ino
    }

    pub fn is_remote(&self) -> bool {
        self.is_remote
    }

    pub fn validity(&self) -> Duration {
        self.stat.expiry.remaining_ttl()
    }
}

/// Information about an inode that is returned to the
/// filesystem as a result operations like lookup.
///
/// Combines InodeInformation with an S3Location, that is `None` for
/// "synthetic" inodes that do not have a mapped key in S3.
#[derive(Debug, Clone)]
pub struct Lookup {
    information: InodeInformation,
    location: Option<S3Location>,
}

impl Lookup {
    /// Creates a new Lookup instance
    pub fn new(ino: InodeNo, stat: InodeStat, kind: InodeKind, is_remote: bool, location: Option<S3Location>) -> Self {
        Self {
            information: InodeInformation::new(ino, stat, kind, is_remote),
            location,
        }
    }

    pub fn new_from_info_and_loc(information: InodeInformation, location: Option<S3Location>) -> Self {
        Self { information, location }
    }

    pub fn kind(&self) -> InodeKind {
        self.information.kind()
    }

    pub fn stat(&self) -> &InodeStat {
        self.information.stat()
    }

    pub fn ino(&self) -> InodeNo {
        self.information.ino()
    }

    pub fn is_remote(&self) -> bool {
        self.information.is_remote()
    }

    /// How much longer this lookup will be valid for
    pub fn validity(&self) -> Duration {
        self.information.validity()
    }

    /// The location this lookup is associated with in S3
    pub fn s3_location(&self) -> Result<&S3Location, InodeError> {
        self.location
            .as_ref()
            .ok_or(InodeError::OperationNotSupportedOnSyntheticInode { ino: self.ino() })
    }

    pub fn try_into_s3_location(mut self) -> Result<S3Location, InodeError> {
        // This method needs to consume self as otherwise the Lookup is left
        // without the location and would be incorrectly considered synthetic.
        self.location
            .take()
            .ok_or(InodeError::OperationNotSupportedOnSyntheticInode { ino: self.ino() })
    }

    pub fn inode_err(&self) -> InodeErrorInfo {
        let (key, bucket) = match &self.location {
            Some(location) => (location.full_key().to_string(), location.bucket_name().to_string()),
            None => ("SYNTHETIC".to_string(), "SYNTHETIC".to_string()),
        };
        InodeErrorInfo {
            ino: self.ino(),
            key: key.into(),
            bucket: Some(bucket.into()),
        }
    }
}

impl From<Lookup> for InodeInformation {
    fn from(looked_up: Lookup) -> Self {
        looked_up.information
    }
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
