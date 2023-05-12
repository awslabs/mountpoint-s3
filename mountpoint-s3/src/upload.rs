use std::sync::Arc;

use mountpoint_s3_client::{
    ObjectClient, ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest, PutObjectResult,
};

use tracing::error;

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

/// A PutObject request to upload objects to S3.
#[derive(Debug)]
pub struct UploadRequest<Client: ObjectClient> {
    _bucket: String,
    _key: String,
    next_request_offset: u64,
    request: Option<Client::PutObjectRequest>,
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
            request: Some(request),
        })
    }

    pub fn size(&self) -> u64 {
        self.next_request_offset
    }

    pub async fn push(&mut self, offset: i64, data: &[u8]) -> Result<(), i32> {
        let next_offset = self.next_request_offset;
        if offset != next_offset as i64 {
            error!("out of order write; expected offset {next_offset} but got {offset}");
            return Err(libc::EINVAL);
        }

        let Some(request) = &mut self.request else {
            return Err(libc::EIO);
        };

        let result = request.write(data).await;
        match result {
            Ok(()) => {
                self.next_request_offset += data.len() as u64;
                Ok(())
            }
            Err(_) => Err(libc::EIO),
        }
    }

    pub async fn complete(&mut self) -> Result<PutObjectResult, i32> {
        let Some(request) = self.request.take() else {
            return Err(libc::EIO);
        };

        request.complete().await.map_err(|_| libc::EIO)
    }
}
