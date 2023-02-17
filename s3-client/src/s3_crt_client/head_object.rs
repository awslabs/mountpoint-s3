use std::ffi::OsString;
use std::str::FromStr;
use std::sync::{Arc, Mutex};

use aws_crt_s3::http::request_response::{Headers, HeadersError};
use aws_crt_s3::s3::client::{MetaRequestResult, MetaRequestType};
use thiserror::Error;
use time::format_description::well_known::Rfc2822;
use time::OffsetDateTime;
use tracing::{debug, error};

use crate::object_client::{HeadObjectError, HeadObjectResult, ObjectClientError, ObjectClientResult, ObjectInfo};
use crate::s3_crt_client::S3RequestError;
use crate::S3CrtClient;

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

impl S3CrtClient {
    pub async fn head_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, S3RequestError> {
        let request = {
            let mut message = self
                .new_request_template("HEAD", bucket)
                .map_err(S3RequestError::construction_failure)?;

            let key = key.to_string();
            message
                .set_request_path(format!("/{key}"))
                .map_err(S3RequestError::construction_failure)?;

            let bucket = bucket.to_owned();

            // We use this header to stash the response from the head_object during the on_headers
            // callback, and send it back on the oneshot when we finish.
            let header: Arc<Mutex<Option<Result<HeadObjectResult, ParseError>>>> = Default::default();
            let header1 = header.clone();

            let span = request_span!(self, "head_object");
            span.in_scope(|| debug!(?bucket, ?key, "new request"));

            self.make_meta_request(
                message,
                MetaRequestType::Default,
                span,
                move |headers, _status| {
                    let mut header = header1.lock().unwrap();
                    *header = Some(HeadObjectResult::parse_from_hdr(
                        bucket.to_string(),
                        key.to_string(),
                        headers,
                    ));
                },
                |_, _| (),
                move |result| {
                    if result.is_err() {
                        let parsed = parse_head_object_error(&result);
                        Err(parsed
                            .map(ObjectClientError::ServiceError)
                            .unwrap_or(ObjectClientError::ClientError(S3RequestError::ResponseError(result))))
                    } else {
                        header
                            .lock()
                            .unwrap()
                            .take()
                            .unwrap()
                            .map_err(|e| ObjectClientError::ClientError(S3RequestError::InternalError(Box::new(e))))
                    }
                },
            )?
        };

        request.await
    }
}

fn parse_head_object_error(result: &MetaRequestResult) -> Option<HeadObjectError> {
    match result.response_status {
        404 => Some(HeadObjectError::NotFound),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use std::ffi::OsString;

    use super::*;

    fn make_result(response_status: i32, body: impl Into<OsString>) -> MetaRequestResult {
        MetaRequestResult {
            response_status,
            crt_error: 1i32.into(),
            error_response_headers: None,
            error_response_body: Some(body.into()),
        }
    }

    #[test]
    fn parse_404() {
        let result = make_result(404, "");
        let result = parse_head_object_error(&result);
        assert_eq!(result, Some(HeadObjectError::NotFound));
    }

    #[test]
    fn parse_403() {
        let result = make_result(403, "");
        let result = parse_head_object_error(&result);
        assert_eq!(result, None);
    }
}
