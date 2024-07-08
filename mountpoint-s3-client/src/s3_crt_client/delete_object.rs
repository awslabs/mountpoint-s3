use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;

use mountpoint_s3_crt::s3::client::{MetaRequestResult, MetaRequestType};

use crate::object_client::{DeleteObjectError, DeleteObjectResult, ObjectClientResult};
use crate::s3_crt_client::{S3CrtClient, S3RequestError};

impl S3CrtClient {
    /// Create and begin a new DeleteObject request.
    pub(super) async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, S3RequestError> {
        let span = request_span!(self.inner, "delete_object", bucket, key);

        // Scope the endpoint, message, etc. since otherwise rustc thinks we use Message across the await.
        let request = {
            let mut message = self
                .inner
                .new_request_template("DELETE", bucket)
                .map_err(S3RequestError::construction_failure)?;
            message
                .set_request_path(format!("/{key}"))
                .map_err(S3RequestError::construction_failure)?;

            self.inner
                .make_simple_http_request(message, "DeleteObject", span, parse_delete_object_error)?
        };

        let _body = request.await?;

        Ok(DeleteObjectResult {})
    }
}

fn parse_delete_object_error(result: &MetaRequestResult) -> Option<DeleteObjectError> {
    match result.response_status {
        404 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;

            // Note: Delete for non-existent key is considered a success - not "NoSuchKey".
            match error_str.deref() {
                "NoSuchBucket" => Some(DeleteObjectError::NoSuchBucket),
                _ => None,
            }
        }
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use std::ffi::{OsStr, OsString};

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
    fn parse_404_no_such_bucket() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message><BucketName>djonesoa-nosuchbucket</BucketName><RequestId>BHCQ0FTYY0HKMV43</RequestId><HostId>ntCK1jQfPxY7sSNL/GB13RttgJLjSETfIuOiuRnwImO0dQP2ttj2Qqpn5S/jSLt3Ql0TgHWuYF0=</HostId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_delete_object_error(&result);
        assert_eq!(result, Some(DeleteObjectError::NoSuchBucket));
    }
}
