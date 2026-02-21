//! Core types for the metablock module
use std::time::Duration;

use time::OffsetDateTime;

use super::Expiry;

pub type InodeNo = u64;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum InodeKind {
    File,
    Directory,
}

impl InodeKind {
    pub fn as_str(&self) -> &'static str {
        match self {
            InodeKind::File => "file",
            InodeKind::Directory => "directory",
        }
    }
}

impl From<InodeKind> for fuser::FileType {
    fn from(kind: InodeKind) -> Self {
        match kind {
            InodeKind::File => fuser::FileType::RegularFile,
            InodeKind::Directory => fuser::FileType::Directory,
        }
    }
}

#[derive(Debug, Clone)]
pub struct InodeStat {
    /// Time this stat becomes invalid and needs to be refreshed
    pub expiry: Expiry,

    /// Size in bytes
    pub size: usize,

    /// Time of last file content modification
    pub mtime: OffsetDateTime,
    /// Time of last file metadata (or content) change
    pub ctime: OffsetDateTime,
    /// Time of last access
    pub atime: OffsetDateTime,
    /// Etag for the file (object)
    pub etag: Option<Box<str>>,
    /// Inodes corresponding to S3 objects with GLACIER or DEEP_ARCHIVE storage classes
    /// are only readable after restoration. For objects with other storage classes
    /// this field should be always `true`.
    pub is_readable: bool,
    /// Version ID of the object, if versioning is enabled
    pub version_id: Option<Box<str>>,
}

impl InodeStat {
    pub fn is_valid(&self) -> bool {
        !self.expiry.is_expired()
    }

    pub fn update_validity(&mut self, validity: Duration) {
        self.expiry = Expiry::from_now(validity);
    }

    /// Objects in flexible retrieval storage classes can't be accessed via GetObject unless they are
    /// restored, and so we override their permissions to 000 and reject reads to them. We also warn
    /// the first time we see an object like this, because FUSE enforces the 000 permissions on our
    /// behalf so we might not see an attempted `open` call.
    fn is_readable(
        storage_class: Option<&str>,
        restore_status: Option<mountpoint_s3_client::types::RestoreStatus>,
    ) -> bool {
        use crate::sync::atomic::{AtomicBool, Ordering};
        use std::time::SystemTime;

        static HAS_SENT_WARNING: AtomicBool = AtomicBool::new(false);
        match storage_class {
            Some("GLACIER") | Some("DEEP_ARCHIVE") => {
                let restored = matches!(restore_status, Some(mountpoint_s3_client::types::RestoreStatus::Restored { expiry }) if expiry > SystemTime::now());
                if !restored && !HAS_SENT_WARNING.swap(true, Ordering::SeqCst) {
                    tracing::warn!(
                        "objects in the GLACIER and DEEP_ARCHIVE storage classes are only accessible if restored"
                    );
                }
                restored
            }
            _ => true,
        }
    }

    /// Initialize an [InodeStat] for a file, given some metadata.
    pub fn for_file(
        size: usize,
        datetime: OffsetDateTime,
        etag: Option<Box<str>>,
        storage_class: Option<&str>,
        restore_status: Option<mountpoint_s3_client::types::RestoreStatus>,
        validity: Duration,
        version_id: Option<Box<str>>,
    ) -> InodeStat {
        let is_readable = Self::is_readable(storage_class, restore_status);
        InodeStat {
            expiry: Expiry::from_now(validity),
            size,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            etag,
            is_readable,
            version_id,
        }
    }

    /// Initialize an [InodeStat] for a directory, given some metadata.
    pub fn for_directory(datetime: OffsetDateTime, validity: Duration) -> InodeStat {
        InodeStat {
            expiry: Expiry::from_now(validity),
            size: 0,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            etag: None,
            is_readable: true,
            version_id: None,
        }
    }
}
