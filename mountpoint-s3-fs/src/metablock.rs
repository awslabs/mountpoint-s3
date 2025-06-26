use crate::s3::config::S3Path;
use crate::superblock::path::ValidKey;
use crate::superblock::InodeErrorInfo;
use crate::superblock::{InodeError, InodeKind, InodeNo, InodeStat};
use crate::sync::Arc;
use std::time::Duration;

pub trait AttibuteInformationProvider {
    fn kind(&self) -> InodeKind;
    fn stat(&self) -> &InodeStat;
    fn ino(&self) -> InodeNo;
    fn is_remote(&self) -> bool;
}

/// Describes a location of a file or directory in S3
#[derive(Debug)]
pub struct S3Location {
    pub path: Arc<S3Path>,
    pub partial_key: ValidKey,
}

impl S3Location {
    pub fn new(path: Arc<S3Path>, partial_key: ValidKey) -> Self {
        Self { path, partial_key }
    }

    /// Get the bucket name as a string slice
    pub fn bucket_name(&self) -> &str {
        &self.path.bucket_name
    }

    /// Get the full key
    pub fn full_key(&self) -> ValidKey {
        // Constructs the full key
        self.partial_key.full_key(&self.path.prefix)
    }

    /// Get key except prefix
    pub fn partial_key(&self) -> &ValidKey {
        // Constructs the full key
        &self.partial_key
    }

    pub fn name(&self) -> &str {
        self.partial_key.name()
    }
}

/// A generic response to a kernel's lookup request
///
#[derive(Debug)]
pub struct LookedUp {
    /// The number this inode is associated with in the implementation
    ino: InodeNo,
    pub stat: InodeStat,
    kind: InodeKind,
    /// Boolean inidcating whether this inode is remote
    is_remote: bool,
    /// The location this inode is mapped to in S3
    pub location: Option<S3Location>,
}

impl LookedUp {
    /// Creates a new LookedUp instance
    pub fn new(ino: InodeNo, stat: InodeStat, kind: InodeKind, is_remote: bool, location: Option<S3Location>) -> Self {
        Self {
            ino,
            stat,
            kind,
            is_remote,
            location,
        }
    }

    /// How much longer this lookup will be valid for
    pub fn validity(&self) -> Duration {
        self.stat.expiry.remaining_ttl()
    }

    /// The location this lookup is associated with in S3
    pub fn s3_location(&self) -> Result<&S3Location, InodeError> {
        self.location.as_ref().ok_or(InodeError::VirtualFileNotAccessible)
    }

    pub fn try_into_s3_location(mut self) -> Result<S3Location, InodeError> {
        //
        self.location.take().ok_or(InodeError::VirtualFileNotAccessible)
    }

    pub fn inode_err(&self) -> InodeErrorInfo {
        InodeErrorInfo(self.ino, self.location.as_ref().unwrap().full_key().to_string())
    }
}

impl AttibuteInformationProvider for LookedUp {
    fn kind(&self) -> InodeKind {
        self.kind
    }

    fn ino(&self) -> InodeNo {
        self.ino
    }

    fn stat(&self) -> &InodeStat {
        &self.stat
    }

    fn is_remote(&self) -> bool {
        self.is_remote
    }
}
