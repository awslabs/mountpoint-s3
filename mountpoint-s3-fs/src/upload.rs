use std::fmt::Debug;

use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::error::{HeadObjectError, ObjectClientError, PutObjectError};
use mountpoint_s3_client::types::{ChecksumAlgorithm, ETag};

use thiserror::Error;
use tracing::error;

use crate::async_util::Runtime;
use crate::fs::{ServerSideEncryption, SseCorruptedError};
use crate::mem_limiter::MemoryLimiter;
use crate::sync::Arc;

mod atomic;
pub use atomic::UploadRequest;
use atomic::UploadRequestParams;

mod hasher;
pub use hasher::ChecksumHasherError;

mod incremental;
use incremental::AppendUploadQueueParams;
pub use incremental::AppendUploadRequest;

/// An [Uploader] creates and manages streaming PutObject requests.
#[derive(Debug)]
pub struct Uploader<Client: ObjectClient> {
    client: Client,
    runtime: Runtime,
    mem_limiter: Arc<MemoryLimiter>,
    storage_class: Option<String>,
    server_side_encryption: ServerSideEncryption,
    buffer_size: usize,
    /// Default checksum algorithm, if any, to be used for new S3 objects.
    ///
    /// Only [ChecksumAlgorithm::Crc32c] is supported for multi-part uploads.
    /// For existing objects, Mountpoint will instead append using the existing checksum algorithm on the object.
    default_checksum_algorithm: Option<ChecksumAlgorithm>,
}

#[derive(Debug, Error)]
pub enum UploadError<E> {
    #[error(
        "out-of-order write is NOT supported by Mountpoint, aborting the upload; expected offset {expected_offset:?} but got {write_offset:?}"
    )]
    OutOfOrderWrite { write_offset: u64, expected_offset: u64 },

    #[error("put request failed")]
    PutRequestFailed(#[from] ObjectClientError<PutObjectError, E>),

    #[error("upload was already terminated because of previous failures")]
    UploadAlreadyTerminated,

    #[error("SSE settings corrupted")]
    SseCorruptedError(#[from] SseCorruptedError),

    #[error("error computing checksums")]
    ChecksumComputationFailed(#[from] ChecksumHasherError),

    #[error("head object request failed")]
    HeadObjectFailed(#[from] ObjectClientError<HeadObjectError, E>),

    #[error("object exceeded maximum upload size of {maximum_size} bytes")]
    ObjectTooBig { maximum_size: usize },
}

#[derive(Debug)]
pub struct UploaderConfig {
    storage_class: Option<String>,
    server_side_encryption: ServerSideEncryption,
    buffer_size: usize,
    default_checksum_algorithm: Option<ChecksumAlgorithm>,
}

impl UploaderConfig {
    pub fn new(buffer_size: usize) -> Self {
        Self {
            storage_class: None,
            server_side_encryption: Default::default(),
            buffer_size,
            default_checksum_algorithm: None,
        }
    }

    pub fn storage_class(mut self, storage_class: Option<String>) -> Self {
        self.storage_class = storage_class;
        self
    }

    pub fn server_side_encryption(mut self, server_side_encryption: ServerSideEncryption) -> Self {
        self.server_side_encryption = server_side_encryption;
        self
    }

    pub fn default_checksum_algorithm(mut self, default_checksum_algorithm: Option<ChecksumAlgorithm>) -> Self {
        self.default_checksum_algorithm = default_checksum_algorithm;
        self
    }
}

impl<Client> Uploader<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// Create a new [Uploader] that will make requests to the given client.
    pub fn new(client: Client, runtime: Runtime, mem_limiter: Arc<MemoryLimiter>, config: UploaderConfig) -> Self {
        Self {
            client,
            runtime,
            mem_limiter,
            storage_class: config.storage_class,
            server_side_encryption: config.server_side_encryption,
            buffer_size: config.buffer_size,
            default_checksum_algorithm: config.default_checksum_algorithm,
        }
    }

    /// Start a new atomic upload.
    pub fn start_atomic_upload(
        &self,
        bucket: String,
        key: String,
    ) -> Result<UploadRequest<Client>, UploadError<Client::ClientError>> {
        let params = UploadRequestParams {
            bucket,
            key,
            server_side_encryption: self.server_side_encryption.clone(),
            default_checksum_algorithm: self.default_checksum_algorithm.clone(),
            storage_class: self.storage_class.clone(),
        };
        UploadRequest::new(&self.runtime, self.client.clone(), params)
    }

    /// Start a new incremental upload.
    pub fn start_incremental_upload(
        &self,
        bucket: String,
        key: String,
        initial_offset: u64,
        initial_etag: Option<ETag>,
    ) -> AppendUploadRequest<Client> {
        let params = AppendUploadQueueParams {
            bucket,
            key,
            initial_offset,
            initial_etag,
            server_side_encryption: self.server_side_encryption.clone(),
            default_checksum_algorithm: self.default_checksum_algorithm.clone(),
            capacity: MAX_BYTES_IN_QUEUE / self.buffer_size,
        };
        AppendUploadRequest::new(
            &self.runtime,
            self.client.clone(),
            self.buffer_size,
            self.mem_limiter.clone(),
            params,
        )
    }

    #[cfg(test)]
    pub fn corrupt_sse(&mut self, sse_type: Option<String>, sse_kms_key_id: Option<String>) {
        self.server_side_encryption.corrupt_data(sse_type, sse_kms_key_id)
    }
}

/// Maximum number of bytes an `AppendUploadQueue` can take.
///
/// We use this limit to prevent a single pipeline from consuming all memory.
/// The limit may slow down writes eventually, but the overall upload throughput
/// is already capped by a single PutObject request.
const MAX_BYTES_IN_QUEUE: usize = 2 * 1024 * 1024 * 1024;
