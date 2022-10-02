use crate::S3Client;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::{MetaRequestOptions, MetaRequestResult};
use aws_crt_s3_sys::aws_s3_meta_request_type;
use futures::channel::oneshot;
use thiserror::Error;
use tracing::{error, trace};

#[derive(Error, Debug)]
#[allow(clippy::enum_variant_names)]
pub enum HeadBucketError {
    #[error("Wrong region: should be {0}")]
    IncorrectRegion(String),

    #[error("CRT error: {0:?}")]
    CRTError(#[from] Error),

    #[error("HTTP error ({0}): code = {1}, response = {2}")]
    HTTPError(#[source] Error, i32, String),

    #[error("Permissions error (HTTP {1}, response = {2})")]
    PermissionDenied(#[source] Error, i32, String),

    #[error("The future was canceled: {0:?}")]
    CanceledError(#[from] oneshot::Canceled),
}

impl S3Client {
    pub async fn head_bucket(&self, bucket: &str) -> Result<(), HeadBucketError> {
        let (tx, rx) = oneshot::channel::<Result<(), HeadBucketError>>();

        // Scope everything except the channel before the first .await so that the Future is Send.
        // (Since message, options, etc. are not).
        {
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default()).unwrap();
            message.set_request_method("HEAD").unwrap();
            message.add_header(&Header::new("Host", &endpoint)).unwrap();
            message
                .add_header(&Header::new("user-agent", "aws-s3-crt-rust"))
                .unwrap();
            message.set_request_path("/").unwrap();

            let mut options = MetaRequestOptions::new();
            options
                .message(message)
                .on_finish(move |request_result| {
                    trace!(?request_result, "HeadBucket finished");

                    let result = if request_result.error_code == 0 {
                        Ok(())
                    } else {
                        // Try to parse the region if we can, otherwise fall back to our HTTP error
                        // handling code.
                        if let Some(err) = (request_result.response_status == 301)
                            .then(|| try_parse_redirect(&request_result))
                            .flatten()
                        {
                            Err(err)
                        } else {
                            // Turn the error response body into String, using Debug to produce some message
                            // if it's not valid UTF-8.
                            let error_response_body = request_result
                                .error_response_body
                                .unwrap_or_else(|| "<no body>".into())
                                .into_string()
                                .unwrap_or_else(|e| format!("Response not valid UTF-8: {:?}", e));

                            let crt_error: Error = request_result.error_code.into();

                            error!(
                                ?crt_error,
                                http_code = request_result.response_status,
                                response = error_response_body,
                                "HeadBucket error"
                            );

                            let err_type = match request_result.response_status {
                                // S3 returns 400 Bad Request for an invalid/expired STS token
                                400 | 403 => HeadBucketError::PermissionDenied,
                                _ => HeadBucketError::HTTPError,
                            };

                            Err(err_type(crt_error, request_result.response_status, error_response_body))
                        }
                    };

                    let _ = tx.send(result);
                })
                .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

            self.s3_client.make_meta_request(options)?;
        }

        rx.await?
    }
}

fn try_parse_redirect(request_result: &MetaRequestResult) -> Option<HeadBucketError> {
    // Try to parse the correct region out of the headers
    let error_response_headers = request_result.error_response_headers.as_ref()?;
    let region_header = error_response_headers.get("x-amz-bucket-region").ok()?;
    let region = region_header.value().to_owned().into_string().ok()?;
    Some(HeadBucketError::IncorrectRegion(region))
}
