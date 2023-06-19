use std::sync::Arc;

use crate::object_client::{ObjectClientResult, PutObjectError, PutObjectParams};
use crate::{ObjectClientError, PutObjectRequest, PutObjectResult, S3CrtClient, S3RequestError};
use async_trait::async_trait;
use mountpoint_s3_crt::http::request_response::Header;
use mountpoint_s3_crt::io::async_stream::{self, AsyncStreamWriter};
use mountpoint_s3_crt::s3::client::MetaRequestType;
use tracing::{debug, Span};

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
    span: Span,
    bucket: String,
    key: String,
    params: PutObjectParams,
    /// Delay the request after the first write: empty requests need special handling.
    inner: Option<S3PutRequest>,
}

impl S3PutObjectRequest {
    fn new(client: Arc<S3CrtClientInner>, bucket: String, key: String, params: PutObjectParams) -> Self {
        let span = request_span!(client, "put_object");
        span.in_scope(|| debug!(?bucket, ?key, ?params, "create request"));
        Self {
            client,
            span,
            bucket,
            key,
            params,
            inner: None,
        }
    }

    /// Make a PutObject meta-request.
    /// To upload an empty object, set `is_empty` to `true` and drop the
    /// returned [AsyncStreamWriter] without completing it.
    fn make_request(&self, is_empty: bool) -> Result<S3PutRequest, S3RequestError> {
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

        if is_empty {
            message
                .add_header(&Header::new("Content-Length", 0.to_string()))
                .map_err(S3RequestError::construction_failure)?;
        }

        self.span
            .in_scope(|| debug!(bucket=?self.bucket, ?key, params=?self.params, "make request"));
        let body =
            self.client
                .make_simple_http_request(message, MetaRequestType::PutObject, self.span.clone(), |result| {
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
            None => self.inner.insert(self.make_request(false)?),
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
                // set Content-Length=0 on the meta request.
                let (body, writer) = self.make_request(true)?;
                // We drop the writer without calling `complete()` on it, since the CRT will not
                // try to read from the stream when Content-Length==0.
                drop(writer);
                body
            }
        };

        body.await.map(|_| PutObjectResult {})
    }
}
