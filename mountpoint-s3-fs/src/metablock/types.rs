//! Core types for the metablock module

use crate::fs::ToErrno;
use crate::fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT};
use anyhow::anyhow;
use mountpoint_s3_client::error_metadata::ProvideErrorMetadata;
use std::ffi::OsString;
use std::time::Duration;
use thiserror::Error;
use time::OffsetDateTime;

use super::Expiry;

#[cfg(feature = "manifest")]
use crate::manifest::ManifestError;

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
        }
    }
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

/// A wrapper that prints useful customer-facing error messages for inodes by including the object
/// key and bucket rather than just the inode number.
#[derive(Debug)]
pub struct InodeErrorInfo {
    pub ino: InodeNo,
    pub key: Box<str>,
    pub bucket: Option<Box<str>>,
}

impl std::fmt::Display for InodeErrorInfo {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        if let Some(bucket) = &self.bucket {
            write!(f, "{} (bucket {:?}, full key {:?})", self.ino, bucket, self.key)
        } else {
            write!(f, "{} (partial key {:?})", self.ino, self.key)
        }
    }
}

#[derive(Debug, Error)]
pub enum InodeError {
    /// Avoid constructing this directly, but use `InodeError::client_error` instead
    #[error("error from ObjectClient")]
    ClientError {
        source: anyhow::Error,
        metadata: Box<ErrorMetadata>,
    },
    #[error("file {0:?} does not exist in parent inode {1}")]
    FileDoesNotExist(String, InodeErrorInfo),
    #[error("inode {0} does not exist")]
    InodeDoesNotExist(InodeNo),
    #[error("invalid file name {0:?}")]
    InvalidFileName(OsString),
    #[error("inode {0} is not a directory")]
    NotADirectory(InodeErrorInfo),
    #[error("inode {0} is a directory")]
    IsDirectory(InodeErrorInfo),
    #[error("file already exists at inode {0}")]
    FileAlreadyExists(InodeErrorInfo),
    #[error("inode {0} is not writable")]
    InodeNotWritable(InodeErrorInfo),
    #[error("Invalid state of inode {0} to be written. Aborting the write.")]
    InodeInvalidWriteStatus(InodeErrorInfo),
    #[error("inode {0} is already being written")]
    InodeAlreadyWriting(InodeErrorInfo),
    #[error("inode {0} is not readable while being written")]
    InodeNotReadableWhileWriting(InodeErrorInfo),
    #[error("inode {0} is not writable while being read")]
    InodeNotWritableWhileReading(InodeErrorInfo),
    #[error("remote directory cannot be removed at inode {0}")]
    CannotRemoveRemoteDirectory(InodeErrorInfo),
    #[error("non-empty directory cannot be removed at inode {0}")]
    DirectoryNotEmpty(InodeErrorInfo),
    #[error("inode {0} cannot be unlinked while being written")]
    UnlinkNotPermittedWhileWriting(InodeErrorInfo),
    #[error("inode {0} is a directory and cannot be renamed")]
    CannotRenameDirectory(InodeErrorInfo),
    #[error("inode {0} cannot be renamed while being written")]
    RenameNotPermittedWhileWriting(InodeErrorInfo),
    #[error("rename destination {dest_key:?} already exists, cannot rename inode {src_inode}")]
    RenameDestinationExists {
        dest_key: String,
        src_inode: InodeErrorInfo,
    },
    #[error("rename is not supported on this bucket")]
    RenameNotSupported(),
    #[error("S3 key {0:?} was too long")]
    NameTooLong(String),
    #[error("corrupted metadata for inode {0}")]
    CorruptedMetadata(InodeErrorInfo),
    #[error("inode {0} is a remote inode and its attributes cannot be modified")]
    SetAttrNotPermittedOnRemoteInode(InodeErrorInfo),
    #[error("inode {old_inode} for remote key {remote_key:?} is stale, replaced by inode {new_inode}")]
    StaleInode {
        remote_key: String,
        old_inode: InodeErrorInfo,
        new_inode: InodeErrorInfo,
    },
    #[cfg(feature = "manifest")]
    #[error("manifest error")]
    ManifestError(#[from] ManifestError),
    #[error("operation not supported on virtual inode {ino}")]
    OperationNotSupportedOnSyntheticInode { ino: InodeNo },
    #[error("out-of-order readdir, expected offset {expected} but got {actual} on dir handle {fh}")]
    OutOfOrderReadDir { expected: i64, actual: i64, fh: u64 },
    #[error("invalid directory handle {fh}")]
    NoSuchDirHandle { fh: u64 },
}

impl InodeError {
    /// Constructs InodeError::ClientError enriching metadata with error_code, bucket and key.
    ///
    /// Detailed information about an error is gathered in different frames of the call stack.
    /// To make it manageable the idea is to enrich metadata with error_code, bucket and key
    /// on the construction of mountpoint crate's errors, i.e. InodeError, PrefetchReadError
    /// and UploadPutError.
    pub fn client_error<E>(err: E, context: &'static str, bucket: &str, key: &str) -> Self
    where
        E: ProvideErrorMetadata + std::error::Error + Send + Sync + 'static,
    {
        let metadata = ErrorMetadata {
            client_error_meta: err.meta(),
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(bucket.to_string()),
            s3_object_key: Some(key.to_string()),
        };
        let metadata = Box::new(metadata);
        InodeError::ClientError {
            source: anyhow!(err).context(context),
            metadata,
        }
    }
}

impl InodeError {
    pub fn meta(&self) -> ErrorMetadata {
        match self {
            Self::ClientError { source: _, metadata } => (**metadata).clone(),
            _ => Default::default(),
        }
    }
}

impl ToErrno for InodeError {
    fn to_errno(&self) -> i32 {
        match self {
            InodeError::ClientError { .. } => libc::EIO,
            InodeError::FileDoesNotExist(_, _) => libc::ENOENT,
            InodeError::InodeDoesNotExist(_) => libc::ENOENT,
            InodeError::InvalidFileName(_) => libc::EINVAL,
            InodeError::NotADirectory(_) => libc::ENOTDIR,
            InodeError::IsDirectory(_) => libc::EISDIR,
            InodeError::FileAlreadyExists(_) => libc::EEXIST,
            InodeError::InodeNotWritable(_) => libc::EACCES,
            InodeError::InodeInvalidWriteStatus(_) => libc::EIO,
            InodeError::InodeAlreadyWriting(_) => libc::EBUSY,
            InodeError::InodeNotReadableWhileWriting(_) => libc::EBUSY,
            InodeError::InodeNotWritableWhileReading(_) => libc::EBUSY,
            InodeError::CannotRemoveRemoteDirectory(_) => libc::EPERM,
            InodeError::DirectoryNotEmpty(_) => libc::ENOTEMPTY,
            InodeError::UnlinkNotPermittedWhileWriting(_) => libc::EBUSY,
            InodeError::CannotRenameDirectory(_) => libc::EPERM,
            InodeError::RenameNotPermittedWhileWriting(_) => libc::EBUSY,
            InodeError::RenameDestinationExists { .. } => libc::EEXIST,
            InodeError::RenameNotSupported() => libc::ENOTSUP,
            InodeError::NameTooLong(_) => libc::ENAMETOOLONG,
            InodeError::CorruptedMetadata(_) => libc::EIO,
            InodeError::SetAttrNotPermittedOnRemoteInode(_) => libc::EPERM,
            InodeError::StaleInode { .. } => libc::ESTALE,
            #[cfg(feature = "manifest")]
            InodeError::ManifestError(_) => libc::EIO,
            InodeError::OperationNotSupportedOnSyntheticInode { .. } => libc::ENOTSUP,
            InodeError::OutOfOrderReadDir { .. } => libc::EIO,
            InodeError::NoSuchDirHandle { .. } => libc::EBADF,
        }
    }
}
