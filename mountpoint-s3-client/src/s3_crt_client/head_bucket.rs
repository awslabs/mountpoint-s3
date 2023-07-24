use crate::object_client::{ObjectClientError, ObjectClientResult};
use crate::{S3CrtClient, S3RequestError};
use mountpoint_s3_crt::s3::client::{MetaRequestResult, MetaRequestType};
use thiserror::Error;

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum HeadBucketError {
    #[error("Wrong region: should be {0}")]
    IncorrectRegion(String),

    #[error("The bucket did not exist")]
    NoSuchBucket,

    #[error("Permission denied")]
    PermissionDenied(MetaRequestResult),
}

impl S3CrtClient {
    pub async fn head_bucket(&self, bucket: &str) -> ObjectClientResult<(), HeadBucketError, S3RequestError> {
        let body = {
            let mut message = self
                .inner
                .new_request_template("HEAD", bucket)
                .map_err(S3RequestError::construction_failure)?;

            message
                .set_request_path("/")
                .map_err(S3RequestError::construction_failure)?;

            let span = request_span!(self.inner, "head_bucket", bucket);

            self.inner
                .make_simple_http_request(message, MetaRequestType::Default, span, |request_result| {
                    match request_result.response_status {
                        // S3 returns 400 for invalid or expired STS tokens
                        // TODO: Multiregion accesspoints, transfer acceleration endpoints gives 400 for incorrect region which needs to be redirected.
                        301 => try_parse_redirect(&request_result)
                            .map(ObjectClientError::ServiceError)
                            .unwrap_or(ObjectClientError::ClientError(S3RequestError::ResponseError(
                                request_result,
                            ))),
                        400 | 403 => ObjectClientError::ServiceError(HeadBucketError::PermissionDenied(request_result)),
                        404 => ObjectClientError::ServiceError(HeadBucketError::NoSuchBucket),
                        _ => ObjectClientError::ClientError(S3RequestError::ResponseError(request_result)),
                    }
                })?
        };

        body.await.map(|_body| ())
    }
}

fn try_parse_redirect(request_result: &MetaRequestResult) -> Option<HeadBucketError> {
    // Try to parse the correct region out of the headers
    let error_response_headers = request_result.error_response_headers.as_ref()?;
    let region_header = error_response_headers.get("x-amz-bucket-region").ok()?;
    let region = region_header.value().to_owned().into_string().ok()?;
    Some(HeadBucketError::IncorrectRegion(region))
}
