use std::sync::Arc;

use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams};
use crate::{ObjectClientError, PutObjectRequest, PutObjectResult, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::http::request_response::Header;
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::MetaRequestType;
use tracing::debug;

use super::{S3CrtClientInner, S3HttpRequest};

impl S3CrtClient {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<S3PutObjectRequest, PutObjectError, S3RequestError> {
        Ok(S3PutObjectRequest::new(
            self.inner.clone(),
            bucket.to_owned(),
            key.to_owned(),
            params.to_owned(),
        ))
    }
}

type S3PutRequest = (S3HttpRequest<Vec<u8>, PutObjectError>, AsyncStreamWriter);

#[derive(Debug)]
pub struct S3PutObjectRequest {
    client: Arc<S3CrtClientInner>,
    bucket: String,
    key: String,
    params: PutObjectParams,
    inner: Option<S3PutRequest>,
}

impl S3PutObjectRequest {
    fn new(client: Arc<S3CrtClientInner>, bucket: String, key: String, params: PutObjectParams) -> Self {
        Self {
            client,
            bucket,
            key,
            params,
            inner: Default::default(),
        }
    }

    fn make_request(&self, content_length: Option<usize>) -> Result<S3PutRequest, S3RequestError> {
        let mut message = self
            .client
            .new_request_template("PUT", &self.bucket)
            .map_err(S3RequestError::construction_failure)?;

        let key = format!("/{}", self.key);
        message
            .set_request_path(&key)
            .map_err(S3RequestError::construction_failure)?;

        let (body_async_stream, writer) = async_stream::new_stream(&self.client.allocator);
        message.set_body_stream(Some(body_async_stream));

        if let Some(len) = content_length {
            message
                .add_header(&Header::new("Content-Length", len.to_string()))
                .map_err(S3RequestError::construction_failure)?;
        }

        let span = request_span!(self.client, "put_object");
        span.in_scope(|| debug!(bucket=?self.bucket, ?key, params=?self.params, "new request"));

        let body = self
            .client
            .make_simple_http_request(message, MetaRequestType::PutObject, span, |result| {
                ObjectClientError::ClientError(S3RequestError::ResponseError(result))
            })?;
        Ok((body, writer))
    }
}

#[async_trait]
impl PutObjectRequest for S3PutObjectRequest {
    type ClientError = S3RequestError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        let (_, writer) = match &mut self.inner {
            Some(inner) => inner,
            None => self.inner.insert(self.make_request(None)?),
        };

        writer
            .write(slice)
            .await
            .map_err(|e| S3RequestError::InternalError(Box::new(e)).into())
    }

    async fn complete(mut self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        let body = match self.inner {
            Some((body, writer)) => {
                writer
                    .complete()
                    .await
                    .map_err(|e| S3RequestError::InternalError(Box::new(e)))?;
                body
            }
            None => {
                // If the request has not started yet, this is an empty object and we need to
                // set Content-Length=0 on the meta request and immediately drop the writer.
                let (body, writer) = self.make_request(Some(0))?;
                drop(writer);
                body
            }
        };

        _ = body.await?;
        Ok(PutObjectResult {})
    }
}
