use std::sync::{Arc, Mutex};
use std::time::Instant;

use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams, PutObjectRequest, PutObjectResult};
use crate::s3_crt_client::{emit_throughput_metric, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::http::request_response::{Header, Headers};
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::{ChecksumConfig, MetaRequestType, UploadReview};
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
        let response_headers: Arc<Mutex<Option<Headers>>> = Default::default();
        let response_headers_writer = response_headers.clone();
        let on_headers = move |headers: &Headers, _: i32| {
            *response_headers_writer.lock().unwrap() = Some(headers.clone());
        };
        let mut options = S3CrtClientInner::new_meta_request_options(message, MetaRequestType::PutObject);
        options.on_upload_review(move |review| callback.invoke(review));
        let body = self
            .inner
            .make_simple_http_request_from_options(options, span, |_| None, on_headers)?;

        Ok(S3PutObjectRequest {
            body,
            writer,
            review_callback,
            start_time: Instant::now(),
            total_bytes: 0,
            response_headers,
            server_side_encryption: params.server_side_encryption.clone(),
            ssekms_key_id: params.ssekms_key_id.clone(),
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
    // Headers of the CompleteMultipartUpload response, available after the request was finished
    response_headers: Arc<Mutex<Option<Headers>>>,
    // Server-side encryption type which is expected to be found in response_headers
    server_side_encryption: Option<String>,
    /// Server-side encryption KMS key ID which is expected to be found in response_headers
    ssekms_key_id: Option<String>,
}

/// If non empty `server_side_encryption` or `ssekms_key_id` were used, this function checks headers
/// of the CompleteMultipartUpload response to contain the expected values
fn check_response_headers(response_headers: &Headers, expected_sse: Option<&str>, expected_key_id: Option<&str>) {
    if let Some(sse_type) = expected_sse {
        assert!(
            response_headers.get(SSE_TYPE_HEADER_NAME).is_ok_and(|header| {
                header
                    .value()
                    .to_str()
                    .is_some_and(|actual_value| actual_value == sse_type)
            }),
            "SSE type provided in CompleteMultipartUpload response does not match the requested value"
        );
    }
    if let Some(sse_key_id) = expected_key_id {
        assert!(
            response_headers.get(SSE_KEY_ID_HEADER_NAME).is_ok_and(|header| {
                header
                    .value()
                    .to_str()
                    .is_some_and(|actual_value| actual_value == sse_key_id)
            }),
            "SSE KMS key ID provided in CompleteMultipartUpload response does not match the requested value"
        );
    }
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

    /// Note: this function will panic if an SSE was requested to be applied to the object
    /// and we failed to check that this actually happened. This may be caused by a bug in
    /// CRT code or HTTP headers being corrupted in transit between us and the S3 server.
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

        let _ = body.await?;

        let elapsed = self.start_time.elapsed();
        emit_throughput_metric(self.total_bytes, elapsed, "put_object");

        let locked_value = self
            .response_headers
            .lock()
            .expect("must be able to acquire headers lock");
        let response_headers = locked_value
            .as_ref()
            .expect("PUT response headers must be available at this point");
        check_response_headers(
            response_headers,
            self.server_side_encryption.as_deref(),
            self.ssekms_key_id.as_deref(),
        );
        Ok(PutObjectResult {})
    }
}

#[cfg(test)]
mod tests {
    use super::{check_response_headers, Header, Headers, SSE_KEY_ID_HEADER_NAME, SSE_TYPE_HEADER_NAME};
    use mountpoint_s3_crt::common::allocator::Allocator;
    use test_case::test_case;

    #[test_case(Some("sse:kms"), Some("some_key_alias"))]
    #[test_case(Some("sse:kms:dsse"), Some("some_key_alias"))]
    #[test_case(Some("sse:kms"), None)]
    #[test_case(None, None)]
    fn test_check_headers_ok(sse_type: Option<&str>, sse_kms_key_id: Option<&str>) {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        if let Some(sse_type) = sse_type {
            let header = Header::new(SSE_TYPE_HEADER_NAME, sse_type);
            headers.add_header(&header).unwrap();
        }
        if let Some(sse_kms_key_id) = sse_kms_key_id {
            let header = Header::new(SSE_KEY_ID_HEADER_NAME, sse_kms_key_id);
            headers.add_header(&header).unwrap();
        }
        check_response_headers(&headers, sse_type, sse_kms_key_id);
    }

    #[test]
    #[should_panic(
        expected = "SSE type provided in CompleteMultipartUpload response does not match the requested value"
    )]
    fn test_check_headers_bad_sse_type() {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let header = Header::new(SSE_TYPE_HEADER_NAME, "wrong");
        headers.add_header(&header).unwrap();
        let header = Header::new(SSE_KEY_ID_HEADER_NAME, "some_key_alias");
        headers.add_header(&header).unwrap();
        check_response_headers(&headers, Some("sse:kms"), Some("some_key_alias"));
    }

    #[test]
    #[should_panic(
        expected = "SSE KMS key ID provided in CompleteMultipartUpload response does not match the requested value"
    )]
    fn test_check_headers_bad_sse_key() {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let header = Header::new(SSE_TYPE_HEADER_NAME, "sse:kms");
        headers.add_header(&header).unwrap();
        check_response_headers(&headers, Some("sse:kms"), Some("some_key_alias"));
    }
}
