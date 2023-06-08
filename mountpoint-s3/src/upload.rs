use std::sync::Arc;

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

/// A PutObject request to upload objects to S3.
#[derive(Debug)]
pub struct UploadRequest<Client: ObjectClient> {
    _bucket: String,
    _key: String,
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
            _bucket: bucket.to_owned(),
            _key: key.to_owned(),
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
