use crate::{S3Client, S3ClientError};
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestResult;
use thiserror::Error;
use tracing::error;

#[derive(Error, Debug)]
#[allow(clippy::enum_variant_names)]
pub enum HeadBucketError {
    #[error("Wrong region: should be {0}")]
    IncorrectRegion(String),

    #[error("S3 Client error: {0}")]
    S3Client(#[from] S3ClientError),

    #[error("Permissions error: {0:?}")]
    PermissionDenied(MetaRequestResult),
}

impl S3Client {
    pub async fn head_bucket(&self, bucket: &str) -> Result<(), HeadBucketError> {
        let body = {
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default()).unwrap();
            message.set_request_method("HEAD").unwrap();
            message.add_header(&Header::new("Host", &endpoint)).unwrap();
            message
                .add_header(&Header::new("user-agent", "aws-s3-crt-rust"))
                .unwrap();
            message.set_request_path("/").unwrap();

            self.make_http_request(message)
        };

        body.await.map(|_| ()).map_err(|err| match err {
            S3ClientError::Http(request_result) => match request_result.response_status {
                301 => try_parse_redirect(&request_result)
                    .unwrap_or(HeadBucketError::S3Client(S3ClientError::Http(request_result))),
                400 | 403 => HeadBucketError::PermissionDenied(request_result),
                _ => HeadBucketError::S3Client(S3ClientError::Http(request_result)),
            },
            err => HeadBucketError::S3Client(err),
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
