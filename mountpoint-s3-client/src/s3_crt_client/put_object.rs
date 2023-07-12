use std::sync::{Arc, Mutex};

use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams};
use crate::{ObjectClientError, PutObjectRequest, PutObjectResult, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::{ChecksumConfig, MetaRequestType, UploadReview};
use tracing::debug;

use super::{S3CrtClientInner, S3HttpRequest};

impl S3CrtClient {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<S3PutObjectRequest, PutObjectError, S3RequestError> {
        let span = request_span!(self.inner, "put_object");
        span.in_scope(|| debug!(?bucket, ?key, ?params, "create request"));
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

        span.in_scope(|| debug!(?bucket, ?key, ?params, "make request"));

        let review_callback = ReviewCallbackBox::default();
        let callback = review_callback.clone();

        let mut options = S3CrtClientInner::new_meta_request_options(message, MetaRequestType::PutObject);
        options.on_upload_review(move |review| callback.invoke(review));
        let body = self
            .inner
            .make_simple_http_request_from_options(options, span, |result| {
                ObjectClientError::ClientError(S3RequestError::ResponseError(result))
            })?;

        Ok(S3PutObjectRequest {
            body,
            writer,
            review_callback,
        })
    }
}

type ReviewCallback = dyn FnOnce(UploadReview) -> bool + Send;

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
        let _ = self.callback.lock().unwrap().insert(Box::new(callback));
    }

    fn invoke(self, review: UploadReview) -> Result<(), i32> {
        let mut callback = self.callback.lock().unwrap();
        if let Some(callback) = callback.take() {
            if (callback)(review) {
                Ok(())
            } else {
                Err(UploadReview::FAILURE)
            }
        } else {
            Ok(())
        }
    }
}

#[derive(Debug)]
pub struct S3PutObjectRequest {
    body: S3HttpRequest<Vec<u8>, PutObjectError>,
    writer: AsyncStreamWriter,
    review_callback: ReviewCallbackBox,
}

#[async_trait]
impl PutObjectRequest for S3PutObjectRequest {
    type ClientError = S3RequestError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        self.writer
            .write(slice)
            .await
            .map_err(|e| S3RequestError::InternalError(Box::new(e)).into())
    }

    async fn complete(mut self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        let body = {
            self.writer
                .complete()
                .await
                .map_err(|e| S3RequestError::InternalError(Box::new(e)))?;
            self.body
        };

        body.await.map(|_| PutObjectResult {})
    }

    async fn review_and_complete(
        mut self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.review_callback.set(review_callback);
        self.complete().await
    }
}
