use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams};
use crate::{ObjectClientError, PutObjectRequest, PutObjectResult, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::{ChecksumConfig, MetaRequestType};
use tracing::debug;

use super::S3HttpRequest;

impl S3CrtClient {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<S3PutObjectRequest, PutObjectError, S3RequestError> {
        let span = request_span!(self.inner, "put_object");
        span.in_scope(|| debug!(?bucket, ?key, ?params, "create request"));
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

        span.in_scope(|| debug!(?bucket, ?key, ?params, "make request"));
        let body = self
            .inner
            .make_simple_http_request(message, MetaRequestType::PutObject, span, |result| {
                ObjectClientError::ClientError(S3RequestError::ResponseError(result))
            })?;

        Ok(S3PutObjectRequest { body, writer })
    }
}

#[derive(Debug)]
pub struct S3PutObjectRequest {
    body: S3HttpRequest<Vec<u8>, PutObjectError>,
    writer: AsyncStreamWriter,
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

        body.await.map(|_| PutObjectResult {})
    }
}
