use std::{fmt::Debug, sync::Arc};

use mountpoint_s3_client::{
    ObjectClient, ObjectClientError, ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest,
    PutObjectResult,
};

use thiserror::Error;

type PutRequestError<Client> = ObjectClientError<PutObjectError, <Client as ObjectClient>::ClientError>;

const MAX_S3_MULTIPART_UPLOAD_PARTS: usize = 10000;

/// An [Uploader] creates and manages streaming PutObject requests.
#[derive(Debug)]
pub struct Uploader<Client> {
    inner: Arc<UploaderInner<Client>>,
}

#[derive(Debug)]
struct UploaderInner<Client> {
    client: Arc<Client>,
}

impl<Client: ObjectClient> Uploader<Client> {
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

#[derive(Debug, Error, Clone)]
pub enum UploadWriteError<E: std::error::Error> {
    #[error("put request failed")]
    PutRequestFailed(#[from] E),

    #[error("out of order write; expected offset {expected_offset:?} but got {write_offset:?}")]
    OutOfOrderWrite { write_offset: u64, expected_offset: u64 },

    #[error("object exceeded maximum upload size of {maximum_size} bytes")]
    ObjectTooBig { maximum_size: usize },
}

/// Manages the upload of an object to S3.
///
/// Wraps a PutObject request and enforces sequential writes.
pub struct UploadRequest<Client: ObjectClient> {
    bucket: String,
    key: String,
    next_request_offset: u64,
    request: Client::PutObjectRequest,
    maximum_upload_size: Option<usize>,
}

impl<Client: ObjectClient> UploadRequest<Client> {
    async fn new(
        inner: Arc<UploaderInner<Client>>,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<Self, PutObjectError, Client::ClientError> {
        let params = PutObjectParams::new().trailing_checksums(true);
        let request = inner.client.put_object(bucket, key, &params).await?;
        let maximum_upload_size = inner.client.part_size().map(|ps| ps * MAX_S3_MULTIPART_UPLOAD_PARTS);

        Ok(Self {
            bucket: bucket.to_owned(),
            key: key.to_owned(),
            next_request_offset: 0,
            request,
            maximum_upload_size,
        })
    }

    pub fn size(&self) -> u64 {
        self.next_request_offset
    }

    pub async fn write(
        &mut self,
        offset: i64,
        data: &[u8],
    ) -> Result<usize, UploadWriteError<PutRequestError<Client>>> {
        let next_offset = self.next_request_offset;
        if offset != next_offset as i64 {
            return Err(UploadWriteError::OutOfOrderWrite {
                write_offset: offset as u64,
                expected_offset: next_offset,
            });
        }
        if let Some(maximum_size) = self.maximum_upload_size {
            if next_offset + data.len() as u64 > maximum_size as u64 {
                return Err(UploadWriteError::ObjectTooBig { maximum_size });
            }
        }

        self.request.write(data).await?;
        self.next_request_offset += data.len() as u64;
        Ok(data.len())
    }

    pub async fn complete(self) -> Result<PutObjectResult, PutRequestError<Client>> {
        self.request.complete().await
    }
}

impl<Client: ObjectClient> Debug for UploadRequest<Client> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("UploadRequest")
            .field("bucket", &self.bucket)
            .field("key", &self.key)
            .field("next_request_offset", &self.next_request_offset)
            .finish()
    }
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use super::*;
    use mountpoint_s3_client::{
        failure_client::countdown_failure_client,
        mock_client::{MockClient, MockClientConfig, MockClientError},
    };
    use test_case::test_case;

    #[tokio::test]
    async fn complete_test() {
        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
        }));
        let uploader = Uploader::new(client.clone());
        let request = uploader.put(bucket, key).await.unwrap();

        assert!(!client.contains_key(key));
        assert!(client.is_upload_in_progress(key));

        request.complete().await.unwrap();

        assert!(client.contains_key(key));
        assert!(!client.is_upload_in_progress(key));
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

        let mut request = uploader.put(bucket, key).await.unwrap();

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

        let size = request.size();
        assert_eq!(offset, size as i64);

        request.complete().await.unwrap();
        assert!(client.contains_key(key));
    }

    #[tokio::test]
    async fn failure_test() {
        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
        }));

        let mut put_failures = HashMap::new();
        put_failures.insert(1, Ok((1, MockClientError("error".to_owned().into()))));
        put_failures.insert(2, Ok((2, MockClientError("error".to_owned().into()))));

        let failure_client = Arc::new(countdown_failure_client(
            client.clone(),
            HashMap::new(),
            HashMap::new(),
            HashMap::new(),
            put_failures,
        ));

        let uploader = Uploader::new(failure_client.clone());

        // First request fails on first write.
        {
            let mut request = uploader.put(bucket, key).await.unwrap();

            let data = "foo";
            request
                .write(0, data.as_bytes())
                .await
                .expect_err("first write should fail");
        }
        assert!(!client.is_upload_in_progress(key));
        assert!(!client.contains_key(key));

        // Second request fails on complete (after one write).
        {
            let mut request = uploader.put(bucket, key).await.unwrap();

            let data = "foo";
            _ = request.write(0, data.as_bytes()).await.unwrap();

            request.complete().await.expect_err("complete should fail");
        }
        assert!(!client.is_upload_in_progress(key));
        assert!(!client.contains_key(key));
    }

    #[test_case(8000; "divisible by max size")]
    #[test_case(7000; "not divisible by max size")]
    #[test_case(320001; "single write too big")]
    #[tokio::test]
    async fn maximum_size_test(write_size: usize) {
        const PART_SIZE: usize = 32;

        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: PART_SIZE,
        }));
        let uploader = Uploader::new(client.clone());
        let mut request = uploader.put(bucket, key).await.unwrap();

        let successful_writes = PART_SIZE * MAX_S3_MULTIPART_UPLOAD_PARTS / write_size;
        let data = vec![0xaa; write_size];
        for i in 0..successful_writes {
            let offset = i * write_size;
            request
                .write(offset as i64, &data[..])
                .await
                .expect("object should fit");
        }

        let offset = successful_writes * write_size;
        request
            .write(offset as i64, &data[..])
            .await
            .expect_err("object should be too big");

        drop(request);

        assert!(!client.contains_key(key));
        assert!(!client.is_upload_in_progress(key));
    }
}
