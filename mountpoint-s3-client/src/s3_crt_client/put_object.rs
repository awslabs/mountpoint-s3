use std::ops::Deref as _;
use std::os::unix::ffi::OsStrExt as _;
use std::sync::{Arc, Mutex};
use std::time::Instant;

use async_trait::async_trait;
use futures::FutureExt;
use futures::channel::oneshot::{self, Receiver};
use mountpoint_s3_crt::http::request_response::{Header, Headers, HeadersError};
use mountpoint_s3_crt::io::stream::InputStream;
use mountpoint_s3_crt::s3::client::{ChecksumAlgorithm, ChecksumConfig, MetaRequestResult, RequestType, UploadReview};
use thiserror::Error;
use tracing::error;
use xmltree::Element;

use crate::object_client::{
    ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest, PutObjectResult, PutObjectSingleParams,
};

use super::{
    ETag, PutObjectTrailingChecksums, S3CrtClient, S3Message, S3MetaRequest, S3Operation, S3RequestError,
    emit_throughput_metric,
};

const ETAG_HEADER_NAME: &str = "ETag";
const SSE_TYPE_HEADER_NAME: &str = "x-amz-server-side-encryption";
const SSE_KEY_ID_HEADER_NAME: &str = "x-amz-server-side-encryption-aws-kms-key-id";

impl S3CrtClient {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<S3PutObjectRequest, PutObjectError, S3RequestError> {
        let review_callback = ReviewCallbackBox::default();
        let (on_headers, response_headers) = response_headers_handler();
        let (tx, rx) = oneshot::channel::<ObjectClientResult<(), PutObjectError, S3RequestError>>();
        // Before the first write, we need to await for the multi-part upload to be created, so we can report errors.
        let (mpu_created_sender, mpu_created) = oneshot::channel();
        let meta_request = {
            let span = request_span!(self.inner, "put_object", bucket, key);
            let mut message = self.new_put_request(
                bucket,
                key,
                params.storage_class.as_deref(),
                params.server_side_encryption.as_deref(),
                params.ssekms_key_id.as_deref(),
            )?;

            let checksum_config = match params.trailing_checksums {
                PutObjectTrailingChecksums::Enabled(ChecksumAlgorithm::Crc32c) => Some(ChecksumConfig::trailing_crc32c()),
                PutObjectTrailingChecksums::Enabled(ChecksumAlgorithm::Sha256) => Some(ChecksumConfig::trailing_sha256()),
                PutObjectTrailingChecksums::ReviewOnly(ChecksumAlgorithm::Crc32c) => Some(ChecksumConfig::upload_review_crc32c()),
                PutObjectTrailingChecksums::ReviewOnly(ChecksumAlgorithm::Sha256) => Some(ChecksumConfig::upload_review_sha256()),
                PutObjectTrailingChecksums::Enabled(unsupported) | PutObjectTrailingChecksums::ReviewOnly(unsupported) => {
                    return Err(S3RequestError::construction_failure(format!("unsupported checksum algorithm: {:?}", unsupported)));
                }
                PutObjectTrailingChecksums::Disabled => None,
            };
            message.set_checksum_config(checksum_config);

            for (name, value) in &params.object_metadata {
                message
                    .set_header(&Header::new(format!("x-amz-meta-{name}"), value))
                    .map_err(S3RequestError::construction_failure)?
            }
            for (name, value) in &params.custom_headers {
                message
                    .inner
                    .add_header(&Header::new(name, value))
                    .map_err(S3RequestError::construction_failure)?;
            }

            let callback = review_callback.clone();

            let mut options = message.into_options(S3Operation::PutObject);
            options.send_using_async_writes(true);
            options.on_upload_review(move |review| callback.invoke(review));
            options.part_size(self.inner.write_part_size as u64);

            let on_mpu_created_sender = Arc::new(Mutex::new(Some(mpu_created_sender)));
            let on_failure_sender = on_mpu_created_sender.clone();
            self.inner.meta_request_with_callbacks(
                options,
                span,
                move |metrics| {
                    if metrics.request_type() == RequestType::CreateMultipartUpload && !metrics.error().is_err() {
                        // Send signal on a successful CreateMultipartUpload request
                        if let Some(sender) = on_mpu_created_sender.lock().unwrap().take() {
                            _ = sender.send(Ok(()));
                        }
                    }
                },
                on_headers,
                |_, _| {},
                |_| None,
                move |result| {
                    if let Some(sender) = on_failure_sender.lock().unwrap().take() {
                        // If the MPU was not created, the request must have failed.
                        _ = sender.send(result.and_then(|_| {
                            Err(
                                S3RequestError::internal_failure(S3PutObjectRequestError::CreateMultipartUploadFailed)
                                    .into(),
                            )
                        }));
                    } else {
                        _ = tx.send(result);
                    }
                },
            )?
        };

        // Wait for CreateMultipartUpload to complete, or return error.
        mpu_created.await.unwrap()?;

        let request = S3MetaRequest {
            receiver: rx.fuse(),
            meta_request,
        };
        Ok(S3PutObjectRequest {
            request,
            review_callback,
            start_time: Instant::now(),
            total_bytes: 0,
            response_headers,
            state: S3PutObjectRequestState::Idle,
        })
    }

    pub(super) async fn put_object_single<'a>(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send + 'a,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, S3RequestError> {
        let span = request_span!(self.inner, "put_object_single", bucket, key);
        let start_time = Instant::now();

        let slice = contents.as_ref();
        let content_length = slice.len();
        let request = {
            let mut message = self.new_put_request(
                bucket,
                key,
                params.storage_class.as_deref(),
                params.server_side_encryption.as_deref(),
                params.ssekms_key_id.as_deref(),
            )?;
            message
                .set_content_length_header(content_length)
                .map_err(S3RequestError::construction_failure)?;
            if let Some(checksum) = &params.checksum {
                message
                    .set_checksum_header(checksum)
                    .map_err(S3RequestError::construction_failure)?;
            }
            if let Some(offset) = params.write_offset_bytes {
                message
                    .set_header(&Header::new("x-amz-write-offset-bytes", offset.to_string()))
                    .map_err(S3RequestError::construction_failure)?;
            }
            if let Some(etag) = &params.if_match {
                message
                    .set_header(&Header::new("If-Match", etag.as_str()))
                    .map_err(S3RequestError::construction_failure)?;
            }
            for (name, value) in &params.object_metadata {
                message
                    .set_header(&Header::new(format!("x-amz-meta-{name}"), value))
                    .map_err(S3RequestError::construction_failure)?;
            }
            for (name, value) in &params.custom_headers {
                message
                    .inner
                    .add_header(&Header::new(name, value))
                    .map_err(S3RequestError::construction_failure)?;
            }

            let body_input_stream =
                InputStream::new_from_slice(&self.inner.allocator, slice).map_err(S3RequestError::CrtError)?;
            message.set_body_stream(Some(body_input_stream));

            self.inner.meta_request_with_headers_payload(
                message.into_options(S3Operation::PutObjectSingle),
                span,
                parse_put_object_single_error,
            )?
        };

        let headers = request.await?;

        let elapsed = start_time.elapsed();
        emit_throughput_metric(content_length as u64, elapsed, "put_object_single");

        Ok(extract_result(headers)?)
    }

    fn new_put_request(
        &self,
        bucket: &str,
        key: &str,
        storage_class: Option<&str>,
        server_side_encryption: Option<&str>,
        ssekms_key_id: Option<&str>,
    ) -> Result<S3Message<'_>, S3RequestError> {
        let mut message = self
            .inner
            .new_request_template("PUT", bucket)
            .map_err(S3RequestError::construction_failure)?;

        let key = format!("/{key}");
        message
            .set_request_path(&key)
            .map_err(S3RequestError::construction_failure)?;

        if let Some(storage_class) = storage_class {
            message
                .set_header(&Header::new("x-amz-storage-class", storage_class))
                .map_err(S3RequestError::construction_failure)?;
        }

        if let Some(sse) = server_side_encryption {
            message
                .set_header(&Header::new(SSE_TYPE_HEADER_NAME, sse))
                .map_err(S3RequestError::construction_failure)?;
        }
        if let Some(key_id) = ssekms_key_id {
            message
                .set_header(&Header::new(SSE_KEY_ID_HEADER_NAME, key_id))
                .map_err(S3RequestError::construction_failure)?;
        }

        Ok(message)
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
        f.debug_struct("ReviewCallbackBox").finish_non_exhaustive()
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
    request: S3MetaRequest<(), PutObjectError>,
    review_callback: ReviewCallbackBox,
    start_time: Instant,
    total_bytes: u64,
    /// Future for the headers of the CompleteMultipartUpload response.
    /// Guaranteed to be available after the request finishes successfully.
    response_headers: Receiver<Headers>,
    state: S3PutObjectRequestState,
}

/// Internal state for a [S3PutObjectRequest].
#[derive(Debug)]
enum S3PutObjectRequestState {
    /// A write operation is in progress or was interrupted before completion.
    PendingWrite,
    /// Idle state between write calls.
    Idle,
}

/// Internal errors for a [S3PutObjectRequest].
#[derive(Debug, Error)]
enum S3PutObjectRequestError {
    #[error("A previous write operation did not complete successfully")]
    PreviousWriteFailed,
    #[error("The CreateMultiPartUpload request did not succeed")]
    CreateMultipartUploadFailed,
}

fn get_etag(response_headers: &Headers) -> Result<ETag, HeadersError> {
    Ok(response_headers.get_as_string(ETAG_HEADER_NAME)?.into())
}

fn parse_put_object_single_error(result: &MetaRequestResult) -> Option<PutObjectError> {
    match result.response_status {
        400 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;
            match error_str.deref() {
                "InvalidWriteOffset" => Some(PutObjectError::InvalidWriteOffset),
                "BadDigest" => Some(PutObjectError::BadChecksum),
                "InvalidArgument" => {
                    parse_if_error_message_starts_with("Request body cannot be empty", &root, PutObjectError::EmptyBody)
                }
                "InvalidRequest" => parse_if_error_message_starts_with(
                    "Checksum Type mismatch",
                    &root,
                    PutObjectError::InvalidChecksumType,
                ),
                _ => None,
            }
        }
        404 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;
            match error_str.deref() {
                "NoSuchKey" => Some(PutObjectError::NoSuchKey),
                _ => None,
            }
        }
        412 => Some(PutObjectError::PreconditionFailed),
        501 => Some(PutObjectError::NotImplemented),
        _ => None,
    }
}

fn parse_if_error_message_starts_with<E: std::error::Error>(prefix: &str, element: &Element, error: E) -> Option<E> {
    let error_message = element.get_child("Message")?.get_text();
    if let Some(error_message) = error_message
        && error_message.starts_with(prefix)
    {
        return Some(error);
    }
    None
}

fn extract_result(response_headers: Headers) -> Result<PutObjectResult, S3RequestError> {
    fn extract_result_headers_err(response_headers: Headers) -> Result<PutObjectResult, HeadersError> {
        Ok(PutObjectResult {
            etag: get_etag(&response_headers)?,
            sse_type: response_headers.get_as_optional_string(SSE_TYPE_HEADER_NAME)?,
            sse_kms_key_id: response_headers.get_as_optional_string(SSE_KEY_ID_HEADER_NAME)?,
        })
    }
    extract_result_headers_err(response_headers).map_err(|e| S3RequestError::InternalError(Box::new(e)))
}

/// Creates `on_headers` callback that will send the response headers to the matching `Receiver`.
fn response_headers_handler() -> (impl FnMut(&Headers, i32), Receiver<Headers>) {
    let (response_headers_sender, response_headers) = oneshot::channel();
    // The callback signature (`FnMut`) allows for it to be invoked multiple times,
    // but for PUT requests it will only be called once on CompleteMultipartUpload.
    // Wrapping the `oneshot::Sender` in an `Option` allows it to be consumed
    // on the first (and only!) invocation.
    let mut response_headers_sender = Some(response_headers_sender);
    let on_headers = move |headers: &Headers, _: i32| {
        if let Some(sender) = response_headers_sender.take() {
            let _ = sender.send(headers.clone());
        }
    };
    (on_headers, response_headers)
}

#[cfg_attr(not(docsrs), async_trait)]
impl PutObjectRequest for S3PutObjectRequest {
    type ClientError = S3RequestError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        // Writing to the meta request may require multiple calls. Set the internal
        // state to `PendingWrite` until we are done.
        match std::mem::replace(&mut self.state, S3PutObjectRequestState::PendingWrite) {
            S3PutObjectRequestState::PendingWrite => {
                // Fail if a previous write was not completed.
                return Err(S3RequestError::internal_failure(S3PutObjectRequestError::PreviousWriteFailed).into());
            }
            S3PutObjectRequestState::Idle => {}
        }

        let meta_request = &mut self.request.meta_request;
        let mut slice = slice;
        while !slice.is_empty() {
            // Write will fail if the request has already finished (because of an error).
            let remaining = meta_request
                .write(slice, false)
                .await
                .map_err(S3RequestError::CrtError)?;
            self.total_bytes += (slice.len() - remaining.len()) as u64;
            slice = remaining;
        }
        // Write completed with no errors, we can reset to `Idle`.
        self.state = S3PutObjectRequestState::Idle;
        Ok(())
    }

    async fn complete(self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.review_and_complete(|_| true).await
    }

    async fn review_and_complete(
        mut self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        if matches!(self.state, S3PutObjectRequestState::PendingWrite) {
            // Fail if a previous write was not completed.
            return Err(S3RequestError::internal_failure(S3PutObjectRequestError::PreviousWriteFailed).into());
        }

        self.review_callback.set(review_callback);

        // Write will fail if the request has already finished (because of an error).
        _ = self
            .request
            .meta_request
            .write(&[], true)
            .await
            .map_err(S3RequestError::CrtError)?;

        // Now wait for the request to finish.
        self.request.await?;

        let elapsed = self.start_time.elapsed();
        emit_throughput_metric(self.total_bytes, elapsed, "put_object");

        Ok(extract_result(self.response_headers.await.expect(
            "headers should be available since the request completed successfully",
        ))?)
    }
}

impl S3PutObjectRequest {
    /// The number of bytes written to this request so far.
    // TODO: consider exposing on the `PutObjectRequest` trait.
    pub fn bytes_written(&self) -> u64 {
        self.total_bytes
    }
}
