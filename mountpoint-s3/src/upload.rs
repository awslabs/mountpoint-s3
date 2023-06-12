use std::{fmt::Debug, sync::Arc};

use mountpoint_s3_client::{
    ObjectClient, ObjectClientError, ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest,
    PutObjectResult,
};

use thiserror::Error;

type PutRequestError<Client> = ObjectClientError<PutObjectError, <Client as ObjectClient>::ClientError>;

/// An [Uploader] creates and manages streaming PutObject requests.
#[derive(Debug)]
pub struct Uploader<Client> {
    inner: Arc<UploaderInner<Client>>,
}

#[derive(Debug)]
struct UploaderInner<Client> {
    client: Arc<Client>,
}

impl<Client> Uploader<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    /// Create a new [Uploader] that will make requests to the given client.
    pub fn new(client: Arc<Client>) -> Self {
        let inner = UploaderInner { client };
        Self { inner: Arc::new(inner) }
    }

    /// Start a new put request to the specified object.
    pub async fn put(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<UploadRequest<Client>, PutObjectError, Client::ClientError> {
        UploadRequest::new(Arc::clone(&self.inner), bucket, key).await
    }
}

#[derive(Debug, Error)]
pub enum UploadWriteError<E: std::error::Error> {
    #[error("put request failed")]
    PutRequestFailed(#[from] E),

    #[error("out of order write; expected offset {1} but got {0}")]
    OutOfOrderWrite(u64, u64),
}

/// Manages the upload of an object to S3.
///
/// Wraps a PutObject request and enforces sequential writes.
pub struct UploadRequest<Client: ObjectClient> {
    bucket: String,
    key: String,
    next_request_offset: u64,
    request: Client::PutObjectRequest,
}

impl<Client> UploadRequest<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    async fn new(
        inner: Arc<UploaderInner<Client>>,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<Self, PutObjectError, Client::ClientError> {
        let request = inner
            .client
            .put_object(bucket, key, &PutObjectParams::default())
            .await?;

        Ok(Self {
            bucket: bucket.to_owned(),
            key: key.to_owned(),
            next_request_offset: 0,
            request,
        })
    }

    pub fn size(&self) -> u64 {
        self.next_request_offset
    }

    pub async fn write(&mut self, offset: i64, data: &[u8]) -> Result<(), UploadWriteError<PutRequestError<Client>>> {
        let next_offset = self.next_request_offset;
        if offset != next_offset as i64 {
            return Err(UploadWriteError::OutOfOrderWrite(offset as u64, next_offset));
        }

        self.request.write(data).await?;
        self.next_request_offset += data.len() as u64;
        Ok(())
    }

    pub async fn complete(self) -> Result<PutObjectResult, PutRequestError<Client>> {
        self.request.complete().await
    }
}

impl<Client> Debug for UploadRequest<Client>
where
    Client: ObjectClient,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("UploadRequest")
            .field("bucket", &self.bucket)
            .field("key", &self.key)
            .field("next_request_offset", &self.next_request_offset)
            .finish()
    }
}
