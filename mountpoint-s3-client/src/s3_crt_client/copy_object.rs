use std::ffi::OsString;
use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;

use mountpoint_s3_crt::{http::request_response::Header, s3::client::MetaRequestResult};
use tracing::trace;

use crate::object_client::{
    CopyObjectError, CopyObjectMetadataDirective, CopyObjectParams, CopyObjectResult, ObjectClientResult,
};

use super::{S3CrtClient, S3Operation, S3RequestError, URLENCODE_PATH_FRAGMENT, write_encoded_fragment};

fn encoded_copy_source(source_bucket: &str, source_key: &str) -> OsString {
    let mut source = OsString::from("/");
    write_encoded_fragment(&mut source, source_bucket, URLENCODE_PATH_FRAGMENT);
    source.push("/");
    write_encoded_fragment(&mut source, source_key, URLENCODE_PATH_FRAGMENT);
    source
}

impl S3CrtClient {
    /// Create and begin a new CopyObject request.
    pub(super) async fn copy_object(
        &self,
        source_bucket: &str,
        source_key: &str,
        destination_bucket: &str,
        destination_key: &str,
        params: &CopyObjectParams,
    ) -> ObjectClientResult<CopyObjectResult, CopyObjectError, S3RequestError> {
        let request = {
            let mut message = self
                .inner
                .new_request_template("PUT", destination_bucket)
                .map_err(S3RequestError::construction_failure)?;
            message
                .set_request_path(format!("/{destination_key}"))
                .map_err(S3RequestError::construction_failure)?;
            message
                .set_header(&Header::new(
                    "x-amz-copy-source",
                    encoded_copy_source(source_bucket, source_key),
                ))
                .map_err(S3RequestError::construction_failure)?;
            if params.metadata_directive != CopyObjectMetadataDirective::Copy {
                message
                    .set_header(&Header::new(
                        "x-amz-metadata-directive",
                        params.metadata_directive.as_header_value(),
                    ))
                    .map_err(S3RequestError::construction_failure)?;
            }
            for (name, value) in &params.object_metadata {
                message
                    .set_header(&Header::new(format!("x-amz-meta-{name}"), value))
                    .map_err(S3RequestError::construction_failure)?;
            }
            for (name, value) in &params.custom_headers {
                message
                    .inner
                    .add_header(&Header::new(name, value))
                    .map_err(S3RequestError::construction_failure)?;
            }

            let span = request_span!(
                self.inner,
                "copy_object",
                source_bucket,
                source_key,
                destination_bucket,
                destination_key
            );

            let mut options = message.into_options(S3Operation::CopyObject);
            // This meta request type performs multipart copies for objects too large for a single CopyObject call.
            let uri = self
                .inner
                .endpoint_config
                .resolve_for_bucket(source_bucket)
                .map_err(S3RequestError::construction_failure)?
                .uri()
                .map_err(S3RequestError::construction_failure)?;
            let mut source_uri = uri.as_os_str().to_owned();
            source_uri.push("/");
            write_encoded_fragment(&mut source_uri, source_key, URLENCODE_PATH_FRAGMENT);
            let source_uri = source_uri.to_string_lossy().into_owned();
            trace!(source_uri, "resolved source uri");
            options.copy_source_uri(source_uri);
            self.inner
                .meta_request_without_payload(options, span, parse_copy_object_error)?
        };

        request.await?;

        Ok(CopyObjectResult {})
    }
}
fn parse_copy_object_error(result: &MetaRequestResult) -> Option<CopyObjectError> {
    match result.response_status {
        403 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;

            match error_str.deref() {
                "ObjectNotInActiveTierError" => Some(CopyObjectError::ObjectNotInActiveTierError),
                _ => None,
            }
        }
        404 => Some(CopyObjectError::NotFound),
        412 => Some(CopyObjectError::PreconditionFailed),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::ffi::{OsStr, OsString};

    fn make_result(response_status: i32, body: impl Into<OsString>) -> MetaRequestResult {
        MetaRequestResult {
            response_status,
            crt_error: 1i32.into(),
            error_response_headers: None,
            error_response_body: Some(body.into()),
        }
    }
    #[test]
    fn parse_403_object_not_in_active_tier_error() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>ObjectNotInActiveTierError</Code><Message>The source object of the COPY action is not in the active tier and is only stored in Amazon S3 Glacier</Message><BucketName>test-bucket</BucketName><RequestId>BHCQ0FTYY0HKMV43</RequestId><HostId>ntCK1jQfPxY7sSNL/GB13RttgJLjSETfIuOiuRnwImO0dQP2ttj2Qqpn5S/jSLt3Ql0TgHWuYF0=</HostId></Error>"#;
        let result = make_result(403, OsStr::from_bytes(&body[..]));
        let result = parse_copy_object_error(&result);
        assert_eq!(result, Some(CopyObjectError::ObjectNotInActiveTierError));
    }
    #[test]
    fn parse_404_error() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code></Code><Message></Message><BucketName>test-bucket</BucketName><RequestId>BHCQ0FTYY0HKMV43</RequestId><HostId>ntCK1jQfPxY7sSNL/GB13RttgJLjSETfIuOiuRnwImO0dQP2ttj2Qqpn5S/jSLt3Ql0TgHWuYF0=</HostId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_copy_object_error(&result);
        assert_eq!(result, Some(CopyObjectError::NotFound));
    }

    #[test]
    fn parse_412_error() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>PreconditionFailed</Code></Error>"#;
        let result = make_result(412, OsStr::from_bytes(&body[..]));
        let result = parse_copy_object_error(&result);
        assert_eq!(result, Some(CopyObjectError::PreconditionFailed));
    }

    #[test]
    fn encoded_copy_source_encodes_special_characters() {
        let encoded = encoded_copy_source("test-bucket", "dir/a b#c?.txt");
        assert_eq!(encoded.to_string_lossy(), "/test-bucket/dir/a%20b%23c%3F.txt");
    }
}
