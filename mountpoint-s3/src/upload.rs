use std::fmt::Debug;
use std::future::Future;

use futures::future::RemoteHandle;
use futures::task::{Spawn, SpawnError, SpawnExt};

use mountpoint_s3_client::error::{HeadObjectError, ObjectClientError, PutObjectError};
use mountpoint_s3_client::types::{ChecksumAlgorithm, ETag};
use mountpoint_s3_client::ObjectClient;

use thiserror::Error;
use tracing::error;

use crate::fs::{ServerSideEncryption, SseCorruptedError};
use crate::mem_limiter::MemoryLimiter;
use crate::sync::Arc;

mod atomic;
pub use atomic::UploadRequest;

mod hasher;
pub use hasher::ChecksumHasherError;

mod incremental;
use incremental::AppendUploadQueueParams;
pub use incremental::AppendUploadRequest;

/// An [Uploader] creates and manages streaming PutObject requests.
#[derive(Debug)]
pub struct Uploader<Client> {
    client: Client,
    storage_class: Option<String>,
    server_side_encryption: ServerSideEncryption,
    use_additional_checksums: bool,
}

#[derive(Debug, Error)]
pub enum UploadPutError<S, C> {
    #[error("put request creation failed")]
    ClientError(#[from] ObjectClientError<S, C>),
    #[error("SSE settings corrupted")]
    SseCorruptedError(#[from] SseCorruptedError),
}

#[derive(Debug, Error, Clone)]
pub enum UploadWriteError<E: std::error::Error> {
    #[error("put request failed")]
    PutRequestFailed(#[from] E),

    #[error("out-of-order write is NOT supported by Mountpoint, aborting the upload; expected offset {expected_offset:?} but got {write_offset:?}")]
    OutOfOrderWrite { write_offset: u64, expected_offset: u64 },

    #[error("object exceeded maximum upload size of {maximum_size} bytes")]
    ObjectTooBig { maximum_size: usize },
}

impl<Client: ObjectClient> Uploader<Client> {
    /// Create a new [Uploader] that will make requests to the given client.
    pub fn new(
        client: Client,
        storage_class: Option<String>,
        server_side_encryption: ServerSideEncryption,
        use_additional_checksums: bool,
    ) -> Self {
        Self {
            client,
            storage_class,
            server_side_encryption,
            use_additional_checksums,
        }
    }

    /// Start a new put request to the specified object.
    pub async fn put(
        &self,
        bucket: &str,
        key: &str,
    ) -> Result<UploadRequest<Client>, UploadPutError<PutObjectError, Client::ClientError>> {
        UploadRequest::new(self, bucket, key).await
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

/// An [AppendUploader] creates and manages streaming PutObject requests using the Append API.
#[derive(Debug)]
pub struct AppendUploader<Client: ObjectClient> {
    client: Client,
    runtime: BoxRuntime,
    mem_limiter: Arc<MemoryLimiter<Client>>,
    buffer_size: usize,
    server_side_encryption: ServerSideEncryption,
    checksum_algorithm: Option<ChecksumAlgorithm>,
}

#[derive(Debug, Error)]
pub enum AppendUploadError<E> {
    #[error("out-of-order write is NOT supported by Mountpoint, aborting the upload; expected offset {expected_offset:?} but got {write_offset:?}")]
    OutOfOrderWrite { write_offset: u64, expected_offset: u64 },

    #[error("put request failed")]
    PutRequestFailed(#[source] ObjectClientError<PutObjectError, E>),

    #[error("upload was already terminated because of previous failures")]
    UploadAlreadyTerminated,

    #[error("SSE settings corrupted")]
    SseCorruptedError(#[from] SseCorruptedError),

    #[error("error computing checksums")]
    ChecksumComputationFailed(#[from] ChecksumHasherError),

    #[error("head object request failed")]
    HeadObjectFailed(#[from] ObjectClientError<HeadObjectError, E>),
}

impl<Client> AppendUploader<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn new(
        client: Client,
        runtime: impl Spawn + Sync + Send + 'static,
        mem_limiter: Arc<MemoryLimiter<Client>>,
        buffer_size: usize,
        server_side_encryption: ServerSideEncryption,
        checksum_algorithm: Option<ChecksumAlgorithm>,
    ) -> Self {
        Self {
            client,
            runtime: runtime.into(),
            mem_limiter,
            buffer_size,
            server_side_encryption,
            checksum_algorithm,
        }
    }

    /// Start a new appendable upload to the specified object.
    pub fn start_upload(
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
            checksum_algorithm: self.checksum_algorithm.clone(),
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
}

struct BoxRuntime(Box<dyn Spawn + Send + Sync>);
impl BoxRuntime {
    fn spawn_with_handle<Fut>(&self, future: Fut) -> Result<RemoteHandle<Fut::Output>, SpawnError>
    where
        Fut: Future + Send + 'static,
        Fut::Output: Send,
    {
        self.0.spawn_with_handle(future)
    }
}

impl Debug for BoxRuntime {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_tuple("BoxRuntime").field(&"dyn").finish()
    }
}

impl<Runtime> From<Runtime> for BoxRuntime
where
    Runtime: Spawn + Sync + Send + 'static,
{
    fn from(value: Runtime) -> Self {
        BoxRuntime(Box::new(value))
    }
}
