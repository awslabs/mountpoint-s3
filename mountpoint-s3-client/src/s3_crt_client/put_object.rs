use std::sync::{Arc, Mutex};
use std::time::Instant;

use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest, PutObjectResult};
use crate::s3_crt_client::{emit_throughput_metric, PutObjectTrailingChecksums, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use futures::channel::oneshot;
use mountpoint_s3_crt::http::request_response::{Header, Headers};
use mountpoint_s3_crt::s3::client::{ChecksumConfig, MetaRequestType, RequestType, UploadReview};
use tracing::error;

use super::{S3CrtClientInner, S3HttpRequest};

const SSE_TYPE_HEADER_NAME: &str = "x-amz-server-side-encryption";
const SSE_KEY_ID_HEADER_NAME: &str = "x-amz-server-side-encryption-aws-kms-key-id";

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

        let checksum_config = match params.trailing_checksums {
            PutObjectTrailingChecksums::Enabled => Some(ChecksumConfig::trailing_crc32c()),
            PutObjectTrailingChecksums::ReviewOnly => Some(ChecksumConfig::upload_review_crc32c()),
            PutObjectTrailingChecksums::Disabled => None,
        };
        message.set_checksum_config(checksum_config);

        let review_callback = ReviewCallbackBox::default();
        let callback = review_callback.clone();

        if let Some(storage_class) = params.storage_class.to_owned() {
            message
                .set_header(&Header::new("x-amz-storage-class", storage_class))
                .map_err(S3RequestError::construction_failure)?;
        }
        if let Some(sse) = params.server_side_encryption.as_ref() {
            message
                .set_header(&Header::new(SSE_TYPE_HEADER_NAME, sse))
                .map_err(S3RequestError::construction_failure)?;
        }
        if let Some(key_id) = params.ssekms_key_id.as_ref() {
            message
                .set_header(&Header::new(SSE_KEY_ID_HEADER_NAME, key_id))
                .map_err(S3RequestError::construction_failure)?;
        }
        // Variable `response_headers` will be accessed from different threads: from CRT thread which executes `on_headers` callback
        // and from our thread which executes `review_and_complete`. Callback `on_headers` is guaranteed to finish before this
        // variable is accessed in `review_and_complete` (see `S3HttpRequest::poll` implementation).
        let response_headers: Arc<Mutex<Option<Headers>>> = Default::default();
        let response_headers_writer = response_headers.clone();
        let on_headers = move |headers: &Headers, _: i32| {
            *response_headers_writer.lock().unwrap() = Some(headers.clone());
        };
        let mut options = S3CrtClientInner::new_meta_request_options(message, MetaRequestType::PutObject);
        options.send_using_async_writes(true);
        options.on_upload_review(move |review| callback.invoke(review));

        // Before the first write, we need to await for the multi-part upload to be created, so we can report errors.
        // To do so, we need to detect one of two events (whichever comes first):
        // * a CreateMultipartUpload request completes successfully (potentially after a number of retries),
        // * the meta-request fails.
        let (mpu_created_sender, mpu_created) = oneshot::channel();
        let on_mpu_created_sender = Arc::new(Mutex::new(Some(mpu_created_sender)));
        let on_error_sender = on_mpu_created_sender.clone();

        let body = self.inner.make_simple_http_request_from_options(
            options,
            span,
            move |metrics| {
                if metrics.request_type() == RequestType::CreateMultipartUpload && !metrics.error().is_err() {
                    // Signal that a CreateMultipartUpload completed successfully (unless the meta-request had already failed).
                    if let Some(sender) = on_mpu_created_sender.lock().unwrap().take() {
                        _ = sender.send(Ok(()));
                    }
                }
            },
            move |result| {
                // Signal that the meta-request failed (unless a CreateMultipartUpload had already completed successfully).
                if let Some(sender) = on_error_sender.lock().unwrap().take() {
                    _ = sender.send(Err(result.crt_error.into()));
                }
                None
            },
            on_headers,
        )?;

        Ok(S3PutObjectRequest {
            body,
            review_callback,
            start_time: Instant::now(),
            total_bytes: 0,
            response_headers,
            pending_create_mpu: Some(mpu_created),
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
    review_callback: ReviewCallbackBox,
    start_time: Instant,
    total_bytes: u64,
    /// Headers of the CompleteMultipartUpload response, available after the request was finished
    response_headers: Arc<Mutex<Option<Headers>>>,
    /// Signal indicating that CreateMultipartUpload completed successfully, or that the MPU failed.
    /// Set to [None] once awaited on the first write, meaning the MPU was already created or failed.
    pending_create_mpu: Option<oneshot::Receiver<Result<(), S3RequestError>>>,
}

fn try_get_header_value(headers: &Headers, key: &str) -> Option<String> {
    headers.get(key).ok()?.value().clone().into_string().ok()
}

#[cfg_attr(not(docs_rs), async_trait)]
impl PutObjectRequest for S3PutObjectRequest {
    type ClientError = S3RequestError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        // On first write, check the pending CreateMultipartUpload.
        if let Some(create_mpu) = self.pending_create_mpu.take() {
            // Wait for CreateMultipartUpload to complete successfully, or the MPU to fail.
            create_mpu.await.unwrap()?;
        }

        let meta_request = &mut self.body.meta_request;
        let mut slice = slice;
        while !slice.is_empty() {
            // Write will fail if the request has already finished (because of an error).
            let remaining = meta_request
                .write(slice, false)
                .await
                .map_err(S3RequestError::CrtError)?;
            self.total_bytes += slice.len() as u64;
            slice = remaining;
        }
        Ok(())
    }

    async fn complete(self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.review_and_complete(|_| true).await
    }

    async fn review_and_complete(
        mut self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.review_callback.set(review_callback);

        // Write will fail if the request has already finished (because of an error).
        _ = self
            .body
            .meta_request
            .write(&[], true)
            .await
            .map_err(S3RequestError::CrtError)?;

        // Now wait for the request to finish.
        let _ = self.body.await?;

        let elapsed = self.start_time.elapsed();
        emit_throughput_metric(self.total_bytes, elapsed, "put_object");

        let response_headers = self
            .response_headers
            .lock()
            .expect("must be able to acquire headers lock")
            .take()
            .expect("PUT response headers must be available at this point");
        Ok(PutObjectResult {
            sse_type: try_get_header_value(&response_headers, SSE_TYPE_HEADER_NAME),
            sse_kms_key_id: try_get_header_value(&response_headers, SSE_KEY_ID_HEADER_NAME),
        })
    }
}
