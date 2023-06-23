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
    pub async fn put<Handle>(
        &self,
        bucket: &str,
        key: &str,
        handle: Handle,
    ) -> ObjectClientResult<UploadRequest<Client, Handle>, PutObjectError, Client::ClientError> {
        UploadRequest::new(Arc::clone(&self.inner), bucket, key, handle).await
    }
}

#[derive(Debug, Error)]
pub enum UploadError<E: std::error::Error> {
    #[error("put request failed")]
    PutRequestFailed(#[from] E),

    #[error("out of order write; expected offset {expected_offset:?} but got {write_offset:?}")]
    OutOfOrderWrite { write_offset: u64, expected_offset: u64 },

    #[error("put request had already completed")]
    PutRequestAlreadyCompleted,

    #[error("put request had previously failed")]
    PutRequestPreviouslyFailed,
}

/// Manages the upload of an object to S3.
///
/// Handles the lifecycle of a PutObject request,
/// invalidates it on errors, and enforces sequential writes.
#[derive(Debug)]
pub struct UploadRequest<Client: ObjectClient, Handle> {
    next_request_offset: u64,
    state: UploadRequestState<Client, Handle>,
}

enum UploadRequestState<Client: ObjectClient, Handle> {
    InProgress {
        request: Client::PutObjectRequest,
        handle: Handle,
    },
    Completed,
    Failed,
}

impl<Client, Handle> UploadRequest<Client, Handle>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    async fn new(
        inner: Arc<UploaderInner<Client>>,
        bucket: &str,
        key: &str,
        handle: Handle,
    ) -> ObjectClientResult<Self, PutObjectError, Client::ClientError> {
        let request = inner
            .client
            .put_object(bucket, key, &PutObjectParams::default())
            .await?;

        Ok(Self {
            next_request_offset: 0,
            state: UploadRequestState::InProgress { request, handle },
        })
    }

    pub fn size(&self) -> u64 {
        self.next_request_offset
    }

    pub fn is_in_progress(&self) -> bool {
        matches!(self.state, UploadRequestState::InProgress { .. })
    }

    pub async fn write(&mut self, offset: i64, data: &[u8]) -> Result<usize, UploadError<PutRequestError<Client>>> {
        let next_offset = self.next_request_offset;
        if offset != next_offset as i64 {
            return Err(UploadError::OutOfOrderWrite {
                write_offset: offset as u64,
                expected_offset: next_offset,
            });
        }

        let request = match &mut self.state {
            UploadRequestState::InProgress { request, .. } => request,
            UploadRequestState::Completed => return Err(UploadError::PutRequestAlreadyCompleted),
            UploadRequestState::Failed => return Err(UploadError::PutRequestPreviouslyFailed),
        };

        match request.write(data).await {
            Ok(()) => {
                self.next_request_offset += data.len() as u64;
                Ok(data.len())
            }
            Err(e) => {
                self.state = UploadRequestState::Failed;
                Err(e.into())
            }
        }
    }

    pub async fn complete(&mut self) -> Result<PutObjectResult, UploadError<PutRequestError<Client>>> {
        let (request, handle) = match std::mem::replace(&mut self.state, UploadRequestState::Completed) {
            UploadRequestState::InProgress { request, handle } => (request, handle),
            UploadRequestState::Completed => return Err(UploadError::PutRequestAlreadyCompleted),
            UploadRequestState::Failed => {
                self.state = UploadRequestState::Failed;
                return Err(UploadError::PutRequestPreviouslyFailed);
            }
        };

        let put = request.complete().await;
        drop(handle);
        match put {
            Ok(result) => Ok(result),
            Err(e) => {
                self.state = UploadRequestState::Failed;
                Err(e.into())
            }
        }
    }
}

impl<Client: ObjectClient, Handle> Debug for UploadRequestState<Client, Handle> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let case = match self {
            UploadRequestState::InProgress { .. } => "InProgress",
            UploadRequestState::Completed => "Completed",
            UploadRequestState::Failed => "Failed",
        };
        f.write_str(case)
    }
}

#[cfg(test)]
mod tests {
    use std::{collections::HashMap, sync::Mutex};

    use super::*;
    use mountpoint_s3_client::{
        failure_client::countdown_failure_client,
        mock_client::{MockClient, MockClientConfig, MockClientError},
    };

    struct Handle(Arc<Mutex<bool>>);
    impl Drop for Handle {
        fn drop(&mut self) {
            *self.0.lock().unwrap() = true;
        }
    }

    #[tokio::test]
    async fn complete_handle_test() {
        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
        }));
        let uploader = Uploader::new(client.clone());

        let dropped = Arc::new(Mutex::new(false));
        let handle = Handle(dropped.clone());
        let mut request = uploader.put(bucket, key, handle).await.unwrap();

        assert!(!client.contains_key(key));
        assert!(client.is_upload_in_progress(key));
        assert!(!*dropped.lock().unwrap());
        assert!(request.is_in_progress());

        request.complete().await.unwrap();

        assert!(client.contains_key(key));
        assert!(!client.is_upload_in_progress(key));
        assert!(*dropped.lock().unwrap());
        assert!(!request.is_in_progress());
    }

    #[tokio::test]
    async fn write_order_test() {
        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
        }));
        let uploader = Uploader::new(client.clone());

        let mut request = uploader.put(bucket, key, true).await.unwrap();

        let data = "foo";
        let mut offset = 0;
        offset += request.write(offset, data.as_bytes()).await.unwrap() as i64;

        request
            .write(0, data.as_bytes())
            .await
            .expect_err("out of order write should fail");

        offset += request
            .write(offset, data.as_bytes())
            .await
            .expect("subsequent in order write should succeed") as i64;

        request.complete().await.unwrap();

        assert!(client.contains_key(key));
        assert!(!request.is_in_progress());

        assert_eq!(offset, request.size() as i64);
    }

    #[tokio::test]
    async fn write_error_test() {
        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
        }));

        let mut put_failures = HashMap::new();
        put_failures.insert(1, Ok((2, MockClientError("error".to_owned().into()))));

        let failure_client = Arc::new(countdown_failure_client(
            client.clone(),
            HashMap::new(),
            HashMap::new(),
            HashMap::new(),
            put_failures,
        ));

        let uploader = Uploader::new(failure_client.clone());

        let dropped = Arc::new(Mutex::new(false));
        let handle = Handle(dropped.clone());
        let mut request = uploader.put(bucket, key, handle).await.unwrap();

        let data = "foo";
        let mut offset = 0;
        offset += request.write(offset, data.as_bytes()).await.unwrap() as i64;

        request
            .write(offset, data.as_bytes())
            .await
            .expect_err("second write should fail");

        assert!(!client.contains_key(key));
        assert!(!request.is_in_progress());

        request
            .write(offset, data.as_bytes())
            .await
            .expect_err("subsequent writes should fail");

        request
            .complete()
            .await
            .expect_err("complete after failure should fail");

        assert!(!client.contains_key(key));
        assert!(!request.is_in_progress());
        assert!(*dropped.lock().unwrap());
    }
}
