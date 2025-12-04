use anyhow::anyhow;
use mountpoint_s3_client::error_metadata::ProvideErrorMetadata;
use std::ffi::OsString;
use thiserror::Error;

use crate::fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT};
#[cfg(feature = "manifest")]
use crate::manifest::ManifestError;
use crate::metablock::S3Location;
use crate::sync::Arc;
use crate::upload::UploadError;

use super::InodeNo;

#[derive(Debug, Error, Clone)]
pub enum InodeError {
    /// Avoid constructing this directly, but use `InodeError::client_error` instead
    #[error("error from ObjectClient")]
    ClientError {
        source: Arc<anyhow::Error>,
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
    ManifestError(#[source] Arc<ManifestError>),
    #[error("operation not supported on virtual inode {ino}")]
    OperationNotSupportedOnSyntheticInode { ino: InodeNo },
    #[error("out-of-order readdir, expected offset {expected} but got {actual} on dir handle {fh}")]
    OutOfOrderReadDir { expected: i64, actual: i64, fh: u64 },
    #[error("invalid directory handle {fh}")]
    NoSuchDirHandle { fh: u64 },
    #[error("objects in flexible retrieval storage classes are not accessible")]
    FlexibleRetrievalObjectNotAccessible(InodeErrorInfo),
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
            source: Arc::new(anyhow!(err).context(context)),
            metadata,
        }
    }

    pub fn upload_error<E>(err: UploadError<E>, key: S3Location) -> Self
    where
        E: ProvideErrorMetadata + std::error::Error + Send + Sync + 'static,
    {
        let metadata = ErrorMetadata {
            client_error_meta: err.meta(),
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(key.bucket_name().to_string()),
            s3_object_key: Some(key.full_key().to_string()),
        };
        let metadata = Box::new(metadata);
        InodeError::ClientError {
            source: Arc::new(anyhow!(err)),
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

#[cfg(feature = "manifest")]
impl From<ManifestError> for InodeError {
    fn from(value: ManifestError) -> Self {
        Self::ManifestError(Arc::new(value))
    }
}

/// A wrapper that prints useful customer-facing error messages for inodes by including the object
/// key and bucket rather than just the inode number.
#[derive(Debug, Clone)]
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
