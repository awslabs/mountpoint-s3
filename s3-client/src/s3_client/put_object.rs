use crate::object_client::{PutObjectParams, PutObjectResult};
use crate::{S3Client, S3RequestError};
use aws_crt_s3::http::request_response::Header;
use aws_crt_s3::io::stream::InputStream;
use aws_crt_s3::s3::client::MetaRequestType;
use futures::{Stream, StreamExt};
use thiserror::Error;
use tracing::debug;

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum PutObjectError {}

impl S3Client {
    pub(super) async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
        contents: impl Stream<Item = impl AsRef<[u8]> + Send> + Send,
    ) -> Result<PutObjectResult, S3RequestError<PutObjectError>> {
        let mut buffer = vec![];

        // Accumulate the stream contents into a buffer.
        // TODO: Support streaming the data to the CRT.
        contents
            .for_each(|b| {
                buffer.extend_from_slice(b.as_ref());
                std::future::ready(())
            })
            .await;

        let body = {
            let mut message = self
                .new_request_template("PUT", bucket)
                .map_err(S3RequestError::ConstructionFailure)?;

            message
                .add_header(&Header::new("Content-Length", buffer.len().to_string()))
                .map_err(S3RequestError::ConstructionFailure)?;

            let key = format!("/{key}");
            message
                .set_request_path(&key)
                .map_err(S3RequestError::ConstructionFailure)?;

            let body_input_stream = InputStream::new_from_slice(&self.allocator, &buffer)?;
            message.set_body_stream(Some(body_input_stream));

            let span = request_span!(self, "put_object");
            span.in_scope(|| debug!(?bucket, ?key, ?params, "new request"));

            self.make_simple_http_request(message, MetaRequestType::PutObject, span)?
        };

        body.await?;

        Ok(PutObjectResult {})
    }
}
