use std::str::FromStr;
use std::sync::{Arc, Mutex};

use lazy_static::lazy_static;
use mountpoint_s3_crt::http::request_response::{Header, Headers, HeadersError};
use mountpoint_s3_crt::s3::client::MetaRequestResult;
use regex::Regex;
use thiserror::Error;
use time::format_description::well_known::Rfc2822;
use time::OffsetDateTime;
use tracing::error;

use crate::object_client::{
    Checksum, HeadObjectError, HeadObjectParams, HeadObjectResult, ObjectClientError, ObjectClientResult, RestoreStatus,
};
use crate::s3_crt_client::{S3CrtClient, S3Operation, S3RequestError};

use super::ChecksumMode;

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ParseError {
    #[error("Header response error: {0}")]
    Header(#[from] HeadersError),

    #[error("Failed to parse field {1} as OffsetDateTime: {0:?}")]
    OffsetDateTime(#[source] time::error::Parse, String),

    #[error("Failed to parse field {1} as an int: {0:?}")]
    Int(#[source] std::num::ParseIntError, String),

    #[error("Header x-amz-restore is invalid: {0:?}")]
    InvalidRestore(String),
}

lazy_static! {
    // Example: ongoing-request="true"
    static ref RESTORE_IN_PROGRESS_RE: Regex = Regex::new(r#"^ongoing-request="(?<ongoing>[^"]*)"$"#).unwrap();

    // Example: ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT"
    static ref RESTORE_DONE_RE: Regex =
        Regex::new(r#"^ongoing-request="[^"]*",\s*expiry-date="(?<expiry>[^"]*)"$"#).unwrap();
}

impl HeadObjectResult {
    fn parse_restore_status(headers: &Headers) -> Result<Option<RestoreStatus>, ParseError> {
        let Some(header) = headers.get_as_optional_string("x-amz-restore")? else {
            return Ok(None);
        };

        if let Some(caps) = RESTORE_IN_PROGRESS_RE.captures(&header) {
            let ongoing = bool::from_str(&caps["ongoing"]).map_err(|_| ParseError::InvalidRestore(header.clone()))?;
            return if ongoing {
                Ok(Some(RestoreStatus::InProgress))
            } else {
                Err(ParseError::InvalidRestore(header.clone()))
            };
        };

        let Some(caps) = RESTORE_DONE_RE.captures(&header) else {
            return Err(ParseError::InvalidRestore(header));
        };
        let expiry = OffsetDateTime::parse(&caps["expiry"], &Rfc2822)
            .map_err(|e| ParseError::OffsetDateTime(e, "x-amz-restore::expiry".into()))?;
        Ok(Some(RestoreStatus::Restored { expiry: expiry.into() }))
    }

    fn parse_checksum(headers: &Headers) -> Result<Checksum, ParseError> {
        let checksum_crc32 = headers.get_as_optional_string("x-amz-checksum-crc32")?;
        let checksum_crc32c = headers.get_as_optional_string("x-amz-checksum-crc32c")?;
        let checksum_sha1 = headers.get_as_optional_string("x-amz-checksum-sha1")?;
        let checksum_sha256 = headers.get_as_optional_string("x-amz-checksum-sha256")?;

        Ok(Checksum {
            checksum_crc32,
            checksum_crc32c,
            checksum_sha1,
            checksum_sha256,
        })
    }

    /// Parse from HeadObject headers
    fn parse_from_hdr(headers: &Headers) -> Result<Self, ParseError> {
        let last_modified = OffsetDateTime::parse(&headers.get_as_string("Last-Modified")?, &Rfc2822)
            .map_err(|e| ParseError::OffsetDateTime(e, "LastModified".into()))?;
        let size = u64::from_str(&headers.get_as_string("Content-Length")?)
            .map_err(|e| ParseError::Int(e, "ContentLength".into()))?;
        let etag = headers.get_as_string("Etag")?;
        let storage_class = headers.get_as_optional_string("x-amz-storage-class")?;
        let restore_status = Self::parse_restore_status(headers)?;
        let checksum = Self::parse_checksum(headers)?;
        let result = HeadObjectResult {
            size,
            last_modified,
            storage_class,
            restore_status,
            etag: etag.into(),
            checksum,
        };
        Ok(result)
    }
}

impl S3CrtClient {
    pub(super) async fn head_object(
        &self,
        bucket: &str,
        key: &str,
        params: &HeadObjectParams,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, S3RequestError> {
        // Stash the response from the head_object in this lock during the on_headers
        // callback, and pull them out once the request is done.
        let header: Arc<Mutex<Option<Result<HeadObjectResult, ParseError>>>> = Default::default();
        let header1 = header.clone();

        let request = {
            let mut message = self
                .inner
                .new_request_template("HEAD", bucket)
                .map_err(S3RequestError::construction_failure)?;

            let key = key.to_string();
            message
                .set_request_path(format!("/{key}"))
                .map_err(S3RequestError::construction_failure)?;

            let bucket = bucket.to_owned();

            match params.checksum_mode {
                Some(ChecksumMode::Enabled) => {
                    message
                        .set_header(&Header::new("x-amz-checksum-mode", "ENABLED"))
                        .map_err(S3RequestError::construction_failure)?;
                }
                None => {
                    // No-op. Leaving this branch so new variants will cause compilation to fail.
                }
            }

            let span = request_span!(self.inner, "head_object", bucket, key);

            self.inner.make_meta_request(
                message,
                S3Operation::HeadObject,
                span,
                move |headers, _status| {
                    let mut header = header1.lock().unwrap();
                    *header = Some(HeadObjectResult::parse_from_hdr(headers));
                },
                |_, _| (),
                move |result| {
                    if result.is_err() {
                        Err(parse_head_object_error(result).map(ObjectClientError::ServiceError))
                    } else {
                        Ok(())
                    }
                },
            )?
        };

        request.await?;

        let headers = header.lock().unwrap().take().unwrap();
        headers.map_err(|e| ObjectClientError::ClientError(S3RequestError::InternalError(Box::new(e))))
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

    use mountpoint_s3_crt::common::allocator::Allocator;
    use mountpoint_s3_crt::http::request_response::Header;

    use super::*;

    use test_case::test_case;

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

    #[test_case(r#"ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT""#; "from documentation")]
    #[test_case(r#"ongoing-request="false",expiry-date="Fri, 21 Dec 2012 00:00:00 GMT""#; "no whitespace")]
    #[test_case("ongoing-request=\"false\",   \t   \t  expiry-date=\"Fri, 21 Dec 2012 00:00:00 GMT\""; "lots of whitespaces")]
    fn test_parse_restore_status_done(value: &str) {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let header = Header::new("x-amz-restore", value.to_owned());
        headers.add_header(&header).unwrap();
        let restore_status = HeadObjectResult::parse_restore_status(&headers).expect("failed to parse headers");
        match restore_status {
            Some(RestoreStatus::Restored { expiry }) => assert_eq!(
                OffsetDateTime::format(expiry.into(), &Rfc2822).unwrap(),
                "Fri, 21 Dec 2012 00:00:00 +0000"
            ),
            _ => panic!("unexpected restore_status"),
        };
    }

    #[test_case(r#"ongoing-request="false", expiry-date="not a date""#; "not a date")]
    #[test_case(r#"ongoing-request="false""#; "done without expiry")]
    fn test_parse_restore_status_invalid(value: &str) {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let header = Header::new("x-amz-restore", value.to_owned());
        headers.add_header(&header).unwrap();
        assert!(HeadObjectResult::parse_restore_status(&headers).is_err());
    }

    #[test_case(r#"ongoing-request="true""#; "from documentation")]
    fn test_parse_restore_in_progress(value: &str) {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let header = Header::new("x-amz-restore", value.to_owned());
        headers.add_header(&header).unwrap();
        let restore_status = HeadObjectResult::parse_restore_status(&headers).expect("failed to parse headers");
        let Some(RestoreStatus::InProgress) = restore_status else {
            panic!("unexpected restore_status");
        };
    }

    #[test]
    fn test_checksum_sha256() {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let value = "QwzjTQIHJO11oZbfwq1nx3dy0Wk=";
        let header = Header::new("x-amz-checksum-sha256", value.to_owned());
        headers.add_header(&header).unwrap();

        let checksum = HeadObjectResult::parse_checksum(&headers).expect("failed to parse headers");
        assert_eq!(checksum.checksum_crc32, None, "other checksums shouldn't be set");
        assert_eq!(checksum.checksum_crc32c, None, "other checksums shouldn't be set");
        assert_eq!(checksum.checksum_sha1, None, "other checksums shouldn't be set");
        assert_eq!(
            checksum.checksum_sha256,
            Some(value.to_owned()),
            "sha256 header should match"
        );
    }

    #[test]
    fn test_parse_restore_empty() {
        let headers = Headers::new(&Allocator::default()).unwrap();
        let restore_status = HeadObjectResult::parse_restore_status(&headers).expect("failed to parse headers");
        assert!(restore_status.is_none());
    }
}
