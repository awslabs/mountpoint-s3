use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams};
use crate::{ObjectClientError, S3CrtClient, S3RequestError};
use mountpoint_s3_crt::io::async_stream;
use mountpoint_s3_crt::s3::client::MetaRequestType;
use tracing::debug;

use super::S3PutObjectRequest;

impl S3CrtClient {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<S3PutObjectRequest, PutObjectError, S3RequestError> {
        let mut message = self
            .new_request_template("PUT", bucket)
            .map_err(S3RequestError::construction_failure)?;

        let key = format!("/{key}");
        message
            .set_request_path(&key)
            .map_err(S3RequestError::construction_failure)?;

        let (body_async_stream, writer) = async_stream::new_stream(&self.allocator);
        message.set_body_stream(Some(body_async_stream));

        let span = request_span!(self, "put_object");
        span.in_scope(|| debug!(?bucket, ?key, ?params, "new request"));

        let body = self.make_simple_http_request(message, MetaRequestType::PutObject, span, |result| {
            ObjectClientError::ClientError(S3RequestError::ResponseError(result))
        })?;

        Ok(S3PutObjectRequest::new(body, writer))
    }
}
