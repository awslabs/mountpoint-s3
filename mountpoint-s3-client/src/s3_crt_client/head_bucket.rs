use thiserror::Error;

use crate::object_client::ObjectClientResult;

use super::{S3CrtClient, S3Operation, S3RequestError};

/// Errors returned by a [`head_bucket`](S3CrtClient::head_bucket) request.
#[derive(Error, Debug)]
#[non_exhaustive]
pub enum HeadBucketError {
    #[error("The bucket did not exist")]
    NoSuchBucket,
}

impl S3CrtClient {
    pub async fn head_bucket(&self, bucket: &str) -> ObjectClientResult<(), HeadBucketError, S3RequestError> {
        let request = {
            let mut message = self
                .inner
                .new_request_template("HEAD", bucket)
                .map_err(S3RequestError::construction_failure)?;

            message
                .set_request_path("/")
                .map_err(S3RequestError::construction_failure)?;

            let span = request_span!(self.inner, "head_bucket");

            self.inner.meta_request_without_payload(
                message.into_options(S3Operation::HeadBucket),
                span,
                |request_result| match request_result.response_status {
                    404 => Some(HeadBucketError::NoSuchBucket),
                    _ => None,
                },
            )?
        };

        request.await?;
        Ok(())
    }
}
