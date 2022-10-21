use crate::{S3Client, S3RequestError};
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestResult;
use thiserror::Error;
use tracing::debug;

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum HeadBucketError {
    #[error("Wrong region: should be {0}")]
    IncorrectRegion(String),

    #[error("Permission denied")]
    PermissionDenied(MetaRequestResult),
}

impl S3Client {
    pub async fn head_bucket(&self, bucket: &str) -> Result<(), S3RequestError<HeadBucketError>> {
        let body = {
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default()).unwrap();
            message.set_request_method("HEAD").unwrap();
            message.add_header(&Header::new("Host", &endpoint)).unwrap();
            message
                .add_header(&Header::new("user-agent", "aws-s3-crt-rust"))
                .unwrap();
            message.set_request_path("/").unwrap();

            let span = request_span!(self, "head_bucket");
            span.in_scope(|| debug!(?bucket, region = self.region, "new request"));

            self.make_simple_http_request(message, span)?
        };

        body.await.map(|_| ()).map_err(|err| match err {
            S3RequestError::ResponseError(request_result) => match request_result.response_status {
                301 => try_parse_redirect(&request_result)
                    .map(S3RequestError::ServiceError)
                    .unwrap_or(S3RequestError::ResponseError(request_result)),
                // S3 returns 400 for invalid or expired STS tokens
                400 | 403 => S3RequestError::ServiceError(HeadBucketError::PermissionDenied(request_result)),
                _ => S3RequestError::ResponseError(request_result),
            },
            err => err,
        })
    }
}

fn try_parse_redirect(request_result: &MetaRequestResult) -> Option<HeadBucketError> {
    // Try to parse the correct region out of the headers
    let error_response_headers = request_result.error_response_headers.as_ref()?;
    let region_header = error_response_headers.get("x-amz-bucket-region").ok()?;
    let region = region_header.value().to_owned().into_string().ok()?;
    Some(HeadBucketError::IncorrectRegion(region))
}
