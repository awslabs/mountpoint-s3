use std::{fmt::Debug, sync::Arc};

use mountpoint_s3_client::checksums::crc32c_from_base64;
use mountpoint_s3_client::error::{ObjectClientError, PutObjectError};
use mountpoint_s3_client::types::{PutObjectParams, PutObjectResult, PutObjectTrailingChecksums, UploadReview};
use mountpoint_s3_client::{ObjectClient, PutObjectRequest};

use mountpoint_s3_crt::checksums::crc32c::{Crc32c, Hasher};
use thiserror::Error;
use tracing::error;

use crate::checksums::combine_checksums;
use crate::fs::{ServerSideEncryption, SseCorruptedError};

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

impl<Client: ObjectClient> Uploader<Client> {
    /// Create a new [Uploader] that will make requests to the given client.
    pub fn new(
        client: Arc<Client>,
        storage_class: Option<String>,
        server_side_encryption: ServerSideEncryption,
        use_additional_checksums: bool,
    ) -> Self {
        let inner = UploaderInner {
            client,
            storage_class,
            server_side_encryption,
            use_additional_checksums,
        };
        Self { inner: Arc::new(inner) }
    }

    /// Start a new put request to the specified object.
    pub async fn put(
        &self,
        bucket: &str,
        key: &str,
    ) -> Result<UploadRequest<Client>, UploadPutError<PutObjectError, Client::ClientError>> {
        UploadRequest::new(Arc::clone(&self.inner), bucket, key).await
    }

    #[cfg(test)]
    pub fn corrupt_sse(&mut self, sse_type: Option<String>, sse_kms_key_id: Option<String>) {
        std::sync::Arc::get_mut(&mut self.inner)
            .unwrap()
            .server_side_encryption
            .corrupt_data(sse_type, sse_kms_key_id)
    }
}

#[derive(Debug, Error, Clone)]
pub enum UploadWriteError<E: std::error::Error> {
    #[error("put request failed")]
    PutRequestFailed(#[from] E),

    #[error("out of order write is NOT supported by Mountpoint, aborting the upload; expected offset {expected_offset:?} but got {write_offset:?}")]
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
    hasher: Hasher,
    request: Client::PutObjectRequest,
    maximum_upload_size: Option<usize>,
    sse: ServerSideEncryption,
}

impl<Client: ObjectClient> UploadRequest<Client> {
    async fn new(
        inner: Arc<UploaderInner<Client>>,
        bucket: &str,
        key: &str,
    ) -> Result<UploadRequest<Client>, UploadPutError<PutObjectError, Client::ClientError>> {
        let mut params = PutObjectParams::new();

        if inner.use_additional_checksums {
            params = params.trailing_checksums(PutObjectTrailingChecksums::Enabled);
        } else {
            params = params.trailing_checksums(PutObjectTrailingChecksums::ReviewOnly);
        }

        if let Some(storage_class) = &inner.storage_class {
            params = params.storage_class(storage_class.clone());
        }
        // If we have detected corruption of SSE settings, we return an error, which will currently be reported as
        // `libc::EIO` on `open()`. MP won't be able to open files for write from this point, but this is a relatively
        // low-risk error as data can not be uploaded with wrong SSE settings yet. Thus there is no strong reason for
        // MP to crash and it may continue serving read's.
        let (sse_type, key_id) = inner.server_side_encryption.clone().into_inner()?;
        params = params.server_side_encryption(sse_type);
        params = params.ssekms_key_id(key_id);

        let request = inner.client.put_object(bucket, key, &params).await?;
        let maximum_upload_size = inner
            .client
            .write_part_size()
            .map(|ps| ps.saturating_mul(MAX_S3_MULTIPART_UPLOAD_PARTS));

        Ok(Self {
            bucket: bucket.to_owned(),
            key: key.to_owned(),
            next_request_offset: 0,
            hasher: Hasher::new(),
            request,
            maximum_upload_size,
            sse: inner.server_side_encryption.clone(),
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

        self.hasher.update(data);
        self.request.write(data).await?;
        self.next_request_offset += data.len() as u64;
        Ok(data.len())
    }

    pub async fn complete(self) -> Result<PutObjectResult, PutRequestError<Client>> {
        let size = self.size();
        let checksum = self.hasher.finalize();
        let result = self
            .request
            .review_and_complete(move |review| verify_checksums(review, size, checksum))
            .await?;
        if let Err(err) = self
            .sse
            .verify_response(result.sse_type.as_deref(), result.sse_kms_key_id.as_deref())
        {
            error!(key=?self.key, error=?err, "SSE settings were corrupted after the upload completion");
            // Reaching this point is very unlikely and means that SSE settings were corrupted in transit or on S3 side, this may be a sign of a bug
            // in CRT code or S3. Thus, we terminate Mountpoint to send the most noticeable signal to customer about the issue. We prefer exiting
            // instead of returning an error because:
            // 1. this error would only be reported on `flush` which many applications ignore and
            // 2. the reported error is severe as the object was already uploaded to S3.
            std::process::exit(1);
        }
        Ok(result)
    }
}

impl<Client: ObjectClient> Debug for UploadRequest<Client> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("UploadRequest")
            .field("bucket", &self.bucket)
            .field("key", &self.key)
            .field("next_request_offset", &self.next_request_offset)
            .field("hasher", &self.hasher)
            .finish()
    }
}

fn verify_checksums(review: UploadReview, expected_size: u64, expected_checksum: Crc32c) -> bool {
    let mut uploaded_size = 0u64;
    let mut uploaded_checksum = Crc32c::new(0);
    for (i, part) in review.parts.iter().enumerate() {
        uploaded_size += part.size;

        let Some(checksum) = &part.checksum else {
            error!(part_number = i + 1, "missing part checksum");
            return false;
        };
        let checksum = match crc32c_from_base64(checksum) {
            Ok(checksum) => checksum,
            Err(error) => {
                error!(part_number = i + 1, ?error, "error decoding part checksum");
                return false;
            }
        };

        uploaded_checksum = combine_checksums(uploaded_checksum, checksum, part.size as usize);
    }

    if uploaded_size != expected_size {
        error!(
            uploaded_size,
            expected_size, "Total uploaded size differs from expected size"
        );
        return false;
    }

    if uploaded_checksum != expected_checksum {
        error!(
            ?uploaded_checksum,
            ?expected_checksum,
            "Combined checksum of all uploaded parts differs from expected checksum"
        );
        return false;
    }

    true
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
            ..Default::default()
        }));
        let uploader = Uploader::new(client.clone(), None, ServerSideEncryption::default(), true);
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
        let storage_class = "INTELLIGENT_TIERING";

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
            ..Default::default()
        }));
        let uploader = Uploader::new(
            client.clone(),
            Some(storage_class.to_owned()),
            ServerSideEncryption::default(),
            true,
        );

        let mut request = uploader.put(bucket, key).await.unwrap();

        let data = b"foo";
        let mut offset = 0;
        offset += request.write(offset, data).await.unwrap() as i64;

        request
            .write(0, data)
            .await
            .expect_err("out of order write should fail");

        offset += request
            .write(offset, data)
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
            ..Default::default()
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

        let uploader = Uploader::new(failure_client.clone(), None, ServerSideEncryption::default(), true);

        // First request fails on first write.
        {
            let mut request = uploader.put(bucket, key).await.unwrap();

            let data = b"foo";
            request.write(0, data).await.expect_err("first write should fail");
        }
        assert!(!client.is_upload_in_progress(key));
        assert!(!client.contains_key(key));

        // Second request fails on complete (after one write).
        {
            let mut request = uploader.put(bucket, key).await.unwrap();

            let data = b"foo";
            _ = request.write(0, data).await.unwrap();

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
            ..Default::default()
        }));
        let uploader = Uploader::new(client.clone(), None, ServerSideEncryption::default(), true);
        let mut request = uploader.put(bucket, key).await.unwrap();

        let successful_writes = PART_SIZE * MAX_S3_MULTIPART_UPLOAD_PARTS / write_size;
        let data = vec![0xaa; write_size];
        for i in 0..successful_writes {
            let offset = i * write_size;
            request.write(offset as i64, &data).await.expect("object should fit");
        }

        let offset = successful_writes * write_size;
        request
            .write(offset as i64, &data)
            .await
            .expect_err("object should be too big");

        drop(request);

        assert!(!client.contains_key(key));
        assert!(!client.is_upload_in_progress(key));
    }

    #[test_case(Some("aws:kmr"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_ali`s"))]
    #[test_case(None, Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), None)]
    #[tokio::test]
    async fn put_with_corrupted_sse_test(sse_type_corrupted: Option<&str>, key_id_corrupted: Option<&str>) {
        let client = Arc::new(MockClient::new(Default::default()));
        let mut uploader = Uploader::new(
            client,
            None,
            ServerSideEncryption::new(Some("aws:kms".to_string()), Some("some_key_alias".to_string())),
            true,
        );
        std::sync::Arc::<UploaderInner<MockClient>>::get_mut(&mut uploader.inner)
            .unwrap()
            .server_side_encryption
            .corrupt_data(sse_type_corrupted.map(String::from), key_id_corrupted.map(String::from));
        let err = uploader
            .put("bucket", "hello")
            .await
            .expect_err("sse checksum must be checked");
        assert!(matches!(
            err,
            UploadPutError::SseCorruptedError(SseCorruptedError::ChecksumMismatch(_, _))
        ));
    }

    #[tokio::test]
    async fn put_with_good_sse_test() {
        let bucket = "bucket";
        let name = "hello";
        let key = name;

        let client = Arc::new(MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 32,
            ..Default::default()
        }));
        let uploader = Uploader::new(
            client,
            None,
            ServerSideEncryption::new(Some("aws:kms".to_string()), Some("some_key".to_string())),
            true,
        );
        uploader.put(bucket, key).await.expect("put with sse should succeed");
    }
}
