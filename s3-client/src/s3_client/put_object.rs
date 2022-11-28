use crate::object_client::{PutObjectParams, PutObjectResult};
use crate::{S3Client, S3RequestError};
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::io::stream::InputStream;
use aws_crt_s3::s3::client::MetaRequestType;
use futures::{Stream, StreamExt};
use std::ops::Deref;
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
        _params: &PutObjectParams,
        contents: impl Stream<Item = impl Deref<Target = [u8]> + Send> + Send,
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
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default())?;
            message.set_request_method("PUT")?;
            message.add_header(&Header::new("Host", &endpoint))?;
            message.add_header(&Header::new("Content-Length", &buffer.len().to_string()))?;
            message.add_header(&Header::new("accept", "application/xml"))?;
            message.add_header(&Header::new("user-agent", "aws-s3-crt-rust"))?;

            let key = format!("/{}", key);
            message.set_request_path(&key)?;

            let body_input_stream = InputStream::new_from_slice(&mut Allocator::default(), &buffer)?;
            message.set_body_stream(Some(body_input_stream));

            let span = request_span!(self, "put_object");
            span.in_scope(|| debug!(?bucket, ?key, "new request"));

            self.make_simple_http_request(message, MetaRequestType::PutObject, span)?
        };

        body.await?;

        Ok(PutObjectResult {})
    }
}
