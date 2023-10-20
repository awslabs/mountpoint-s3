use std::sync::{Arc, Mutex};
use std::time::Instant;

use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest, PutObjectResult};
use crate::s3_crt_client::{emit_throughput_metric, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::http::request_response::Header;
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::{ChecksumConfig, MetaRequestType, UploadReview};
use tracing::error;

use super::{S3CrtClientInner, S3HttpRequest};

impl S3CrtClient {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<S3PutObjectRequest, PutObjectError, S3RequestError> {
        let span = request_span!(self.inner, "put_object", bucket, key);
        let mut message = self
            .inner
            .new_request_template("PUT", bucket)
            .map_err(S3RequestError::construction_failure)?;

        let key = format!("/{}", key);
        message
            .set_request_path(&key)
            .map_err(S3RequestError::construction_failure)?;

        if params.trailing_checksums {
            let checksum_config = ChecksumConfig::trailing_crc32c();
            message.set_checksum_config(Some(checksum_config));
        }

        let (body_async_stream, writer) = async_stream::new_stream(&self.inner.allocator);
        message.set_body_stream(Some(body_async_stream));

        let review_callback = ReviewCallbackBox::default();
        let callback = review_callback.clone();

        if let Some(storage_class) = params.storage_class.to_owned() {
            message
                .set_header(&Header::new("x-amz-storage-class", storage_class))
                .map_err(S3RequestError::construction_failure)?;
        }

        if let Some(kms_key) = params.kms_key.to_owned() {
            match kms_key {
                crate::object_client::KmsKeys::SseKms => {
                    message
                        .set_header(&Header::new("x-amz-server-side-encryption", "aws:kms"))
                        .map_err(S3RequestError::construction_failure)?;
                },
                crate::object_client::KmsKeys::DsseKms => {
                    message
                        .set_header(&Header::new("x-amz-server-side-encryption", "aws:kms:dsse"))
                        .map_err(S3RequestError::construction_failure)?;
                },
            }
        }

        // Although, key_id can only be set when kms_key is provided, but that is already ensured in command line arguments
        if let Some(key_id) = params.key_id.to_owned() {
            message
                .set_header(&Header::new("x-amz-server-side-encryption-aws-kms-key-id", key_id))
                .map_err(S3RequestError::construction_failure)?;
        }

        let mut options = S3CrtClientInner::new_meta_request_options(message, MetaRequestType::PutObject);
        options.on_upload_review(move |review| callback.invoke(review));
        let body = self
            .inner
            .make_simple_http_request_from_options(options, span, |_| None)?;

        Ok(S3PutObjectRequest {
            body,
            writer,
            review_callback,
            start_time: Instant::now(),
            total_bytes: 0,
        })
    }
}

type ReviewCallback = dyn FnOnce(UploadReview) -> bool + Send;

/// Holder for the upload review callback.
/// Used to set the callback when initiating the PutObject request on the CRT client,
/// but redirects to the actual callback the user can specify at completion time.
#[derive(Clone, Default)]
struct ReviewCallbackBox {
    callback: Arc<Mutex<Option<Box<ReviewCallback>>>>,
}

impl std::fmt::Debug for ReviewCallbackBox {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("ReviewCallbackBox").finish()
    }
}

impl ReviewCallbackBox {
    fn set(&mut self, callback: impl FnOnce(UploadReview) -> bool + Send + 'static) {
        let previous = self.callback.lock().unwrap().replace(Box::new(callback));
        assert!(previous.is_none(), "review callback set twice");
    }

    fn invoke(self, review: UploadReview) -> bool {
        let mut callback = self.callback.lock().unwrap();
        let Some(callback) = callback.take() else {
            error!("review callback was either never set or invoked twice");
            return false;
        };

        (callback)(review)
    }
}

/// An in-progress streaming PutObject request to S3.
///
/// You can write to or complete the upload using the [`PutObjectRequest`] implementation on this
/// object.
#[derive(Debug)]
pub struct S3PutObjectRequest {
    body: S3HttpRequest<Vec<u8>, PutObjectError>,
    writer: AsyncStreamWriter,
    review_callback: ReviewCallbackBox,
    start_time: Instant,
    total_bytes: u64,
}

#[cfg_attr(not(docs_rs), async_trait)]
impl PutObjectRequest for S3PutObjectRequest {
    type ClientError = S3RequestError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        self.total_bytes += slice.len() as u64;
        self.writer
            .write(slice)
            .await
            .map_err(|e| S3RequestError::InternalError(Box::new(e)).into())
    }

    async fn complete(self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.review_and_complete(|_| true).await
    }

    async fn review_and_complete(
        mut self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.review_callback.set(review_callback);
        let body = {
            self.writer
                .complete()
                .await
                .map_err(|e| S3RequestError::InternalError(Box::new(e)))?;
            self.body
        };

        let result = body.await;

        let elapsed = self.start_time.elapsed();
        emit_throughput_metric(self.total_bytes, elapsed, "put_object");

        result.map(|_| PutObjectResult {})
    }
}
