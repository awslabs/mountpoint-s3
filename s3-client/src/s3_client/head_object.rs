use crate::object_client::{HeadObjectResult, ObjectInfo};
use crate::s3_client::S3RequestError;
use crate::S3Client;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Header, Headers, HeadersError, Message};
use aws_crt_s3::s3::client::MetaRequestOptions;
use aws_crt_s3_sys::aws_s3_meta_request_type;
use futures::channel::oneshot;
use std::ffi::OsString;
use std::str::FromStr;
use std::sync::{Arc, Mutex};
use thiserror::Error;
use time::format_description::well_known::Rfc2822;
use time::OffsetDateTime;
use tracing::{error, trace};

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum HeadObjectError {
    #[error("Error parsing response: {0}")]
    ParseError(#[from] ParseError),
}

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ParseError {
    #[error("Header response error: {0}")]
    Header(#[from] HeadersError),

    #[error("Header string was not valid: {0:?}")]
    Invalid(OsString),

    #[error("Failed to parse field {1} as OffsetDateTime: {0:?}")]
    OffsetDateTime(#[source] time::error::Parse, String),

    #[error("Failed to parse field {1} as an int: {0:?}")]
    Int(#[source] std::num::ParseIntError, String),
}

fn get_field(headers: &Headers, name: &str) -> Result<String, ParseError> {
    let header = headers.get(name)?;
    let value = header.value();
    if let Some(s) = value.to_str() {
        Ok(s.to_string())
    } else {
        Err(ParseError::Invalid(value.clone()))
    }
}

impl HeadObjectResult {
    fn parse_from_hdr(bucket: String, key: String, headers: &Headers) -> Result<Self, ParseError> {
        let last_modified = OffsetDateTime::parse(&get_field(headers, "Last-Modified")?, &Rfc2822)
            .map_err(|e| ParseError::OffsetDateTime(e, "LastModified".into()))?;
        let size = u64::from_str(&get_field(headers, "Content-Length")?)
            .map_err(|e| ParseError::Int(e, "ContentLength".into()))?;
        let etag = get_field(headers, "Etag")?;
        let object = ObjectInfo {
            key,
            size,
            last_modified,
            storage_class: None, // head_object responses do not contain storage class
            etag,
        };
        Ok(HeadObjectResult { bucket, object })
    }
}

impl S3Client {
    pub async fn head_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> Result<HeadObjectResult, S3RequestError<HeadObjectError>> {
        let request = {
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default())?;
            message.set_request_method("HEAD")?;
            message.add_header(&Header::new("Host", &endpoint))?;
            message.add_header(&Header::new("user-agent", "aws-s3-crt-rust"))?;

            // Don't URI encode the key, since "/" needs to be preserved
            message.set_request_path(format!("/{key}"))?;

            let bucket = bucket.to_string();

            // We use this header to stash the response from the head_object during the on_headers
            // callback, and send it back on the oneshot when we finish.
            let header: Arc<Mutex<Option<Result<HeadObjectResult, ParseError>>>> = Default::default();
            let header1 = header.clone();

            let (tx, rx) = oneshot::channel::<Result<HeadObjectResult, S3RequestError<HeadObjectError>>>();

            let key = key.to_string();
            let mut options = MetaRequestOptions::new();
            options
                .message(message)
                .on_headers(move |headers, status| {
                    trace!(status = status, "HeadObject headers received",);

                    let mut header = header1.lock().unwrap();
                    *header = Some(HeadObjectResult::parse_from_hdr(
                        bucket.to_string(),
                        key.clone(),
                        headers,
                    ));
                })
                .on_finish(move |result| {
                    trace!("HeadObject finished");

                    let result = if !result.is_err() {
                        header
                            .lock()
                            .unwrap()
                            .take()
                            .unwrap()
                            .map_err(|e| S3RequestError::ServiceError(e.into()))
                    } else {
                        Err(S3RequestError::ResponseError(result))
                    };
                    let _ = tx.send(result);
                })
                .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

            let request = self
                .s3_client
                .make_meta_request(options)
                .map(|_| ()) // Discard the MetaRequest since it's not Send
                .map_err(S3RequestError::ConstructionFailure);

            async {
                request?;

                rx.await
                    .unwrap_or_else(|err| Err(S3RequestError::InternalError(Box::new(err))))
            }
        };

        request.await
    }
}
