use super::path::S3Location;
use super::{InodeError, InodeErrorInfo, InodeKind, InodeNo, InodeStat};

use std::time::Duration;

/// Information about an inode that is returned to the
/// filesystem as a result operations like lookup.
/// Combines InodeInformation with an S3Location, that is `None` for
/// "synthetic" inodes that do not have a mapped key in S3.
#[derive(Debug, Clone)]
pub struct Lookup {
    information: InodeInformation,
    location: Option<S3Location>,
}

impl Lookup {
    /// Creates a new Lookup instance
    pub fn new(ino: InodeNo, stat: InodeStat, kind: InodeKind, location: Option<S3Location>) -> Self {
        Self::new_from_info_and_loc(InodeInformation::new(ino, stat, kind), location)
    }

    pub fn new_from_info_and_loc(information: InodeInformation, location: Option<S3Location>) -> Self {
        debug_assert!(
            location
                .as_ref()
                .is_none_or(|location| location.partial_key.kind() == information.kind()),
            "wrong kind for ino {}",
            information.ino(),
        );
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
            Some(location) => (
                location.full_key().to_string(),
                Some(location.bucket_name().to_string()),
            ),
            None => ("SYNTHETIC".to_string(), Some("SYNTHETIC".to_string())),
        };
        InodeErrorInfo {
            ino: self.ino(),
            key: key.into(),
            bucket: bucket.map(|b| b.into()),
        }
    }
}

/// Basic information the filesystem needs about an inode.
/// Does not include the location in S3, see [`Lookup`] for that.
#[derive(Debug, Clone)]
pub struct InodeInformation {
    ino: InodeNo,
    stat: InodeStat,
    kind: InodeKind,
}

impl InodeInformation {
    pub fn new(ino: InodeNo, stat: InodeStat, kind: InodeKind) -> Self {
        InodeInformation { ino, stat, kind }
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

    pub fn validity(&self) -> Duration {
        self.stat.expiry.remaining_ttl()
    }
}

impl From<Lookup> for InodeInformation {
    fn from(looked_up: Lookup) -> Self {
        looked_up.information
    }
}
