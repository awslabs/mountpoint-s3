use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams};
use crate::{ObjectClientError, PutObjectRequest, PutObjectResult, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::MetaRequestType;
use tracing::debug;

use super::S3HttpRequest;

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

#[derive(Debug)]
pub struct S3PutObjectRequest {
    body: S3HttpRequest<Vec<u8>, PutObjectError>,
    writer: AsyncStreamWriter,
}

impl S3PutObjectRequest {
    fn new(body: S3HttpRequest<Vec<u8>, PutObjectError>, writer: AsyncStreamWriter) -> Self {
        Self { body, writer }
    }
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
        body.await?;
        Ok(PutObjectResult {})
    }
}
