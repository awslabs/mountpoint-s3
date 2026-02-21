use std::str::FromStr;
use std::sync::LazyLock;

use mountpoint_s3_crt::http::request_response::{Header, Headers, HeadersError};
use mountpoint_s3_crt::s3::client::MetaRequestResult;
use regex::Regex;
use thiserror::Error;
use time::OffsetDateTime;
use time::format_description::well_known::Rfc2822;

use crate::object_client::{HeadObjectError, HeadObjectParams, HeadObjectResult, ObjectClientResult, RestoreStatus};

use super::{ChecksumMode, QueryFragment, S3CrtClient, S3Operation, S3RequestError, parse_checksum};

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

/// Regex for determining if a restore is ongoing.
///
/// Example: `ongoing-request="true"`
static RESTORE_IN_PROGRESS_RE: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r#"^ongoing-request="(?<ongoing>[^"]*)"$"#).unwrap());

/// Regex for determining a restore is complete.
///
/// Example: `ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT"`
static RESTORE_DONE_RE: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r#"^ongoing-request="[^"]*",\s*expiry-date="(?<expiry>[^"]*)"$"#).unwrap());

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

    /// Parse from HeadObject headers
    fn parse_from_hdr(headers: &Headers) -> Result<Self, ParseError> {
        let last_modified = OffsetDateTime::parse(&headers.get_as_string("Last-Modified")?, &Rfc2822)
            .map_err(|e| ParseError::OffsetDateTime(e, "LastModified".into()))?;
        let size = u64::from_str(&headers.get_as_string("Content-Length")?)
            .map_err(|e| ParseError::Int(e, "ContentLength".into()))?;
        let etag = headers.get_as_string("Etag")?;
        let storage_class = headers.get_as_optional_string("x-amz-storage-class")?;
        let restore_status = Self::parse_restore_status(headers)?;
        let sse_type = headers.get_as_optional_string("x-amz-server-side-encryption")?;
        let sse_kms_key_id = headers.get_as_optional_string("x-amz-server-side-encryption-aws-kms-key-id")?;
        let version_id = headers.get_as_optional_string("x-amz-version-id")?;
        let checksum = parse_checksum(headers)?;
        let result = HeadObjectResult {
            size,
            last_modified,
            storage_class,
            restore_status,
            etag: etag.into(),
            checksum,
            sse_type,
            sse_kms_key_id,
            version_id,
        };
        Ok(result)
    }
}

impl S3CrtClient {
    pub(super) async fn head_object(
        &self,
        bucket: &str,
        key: &str,
        version: Option<&str>,
        params: &HeadObjectParams,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, S3RequestError> {
        let request = {
            let mut message = self
                .inner
                .new_request_template("HEAD", bucket)
                .map_err(S3RequestError::construction_failure)?;

            let query = if let Some(version) = version {
                QueryFragment::Query(&[("versionId", version)])
            } else {
                Default::default()
            };

            message
                .set_request_path_and_query(format!("/{key}"), query)
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

            self.inner.meta_request_with_headers_payload(
                message.into_options(S3Operation::HeadObject),
                span,
                parse_head_object_error,
            )?
        };

        let headers = request.await?;
        HeadObjectResult::parse_from_hdr(&headers).map_err(|e| S3RequestError::internal_failure(e).into())
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
    fn test_parse_restore_empty() {
        let headers = Headers::new(&Allocator::default()).unwrap();
        let restore_status = HeadObjectResult::parse_restore_status(&headers).expect("failed to parse headers");
        assert!(restore_status.is_none());
    }
}
