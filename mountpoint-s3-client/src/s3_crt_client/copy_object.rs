use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;
use tracing::trace;
use mountpoint_s3_crt::{http::request_response::Header, s3::client::MetaRequestResult};
use crate::endpoint_config::EndpointError;
use crate::object_client::{CopyObjectError, CopyObjectParams, CopyObjectResult, ObjectClientResult};
use crate::s3_crt_client::{ConstructionError, S3CrtClient, S3CrtClientInner, S3Operation, S3RequestError};

impl From<EndpointError> for S3RequestError {
    fn from(error: EndpointError) -> Self {
        S3RequestError::ConstructionFailure(ConstructionError::InvalidEndpoint(error))
    }
}

impl S3CrtClient {
    /// Create and begin a new CopyObject request.
    pub(super) async fn copy_object(
        &self,
        source_bucket: &str,
        source_key: &str,
        destination_bucket: &str,
        destination_key: &str,
        _params: &CopyObjectParams,
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
                    format!("/{source_bucket}/{source_key}"),
                ))
                .map_err(S3RequestError::construction_failure)?;

            let span = request_span!(
                self.inner,
                "copy_object",
                source_bucket,
                source_key,
                destination_bucket,
                destination_key
            );

            let mut options = S3CrtClientInner::new_meta_request_options(message, S3Operation::CopyObject);
            let endpoint = self.inner.endpoint_config.resolve_for_bucket(source_bucket)
                .map_err(|e| S3RequestError::from(e))?;
            let uri = endpoint.uri()
                .map_err(|e| S3RequestError::from(e))?;
            let hostname = uri.host_name().to_str().unwrap();
            let path_prefix = uri.path().to_os_string().into_string().unwrap();
            let port = uri.host_port();
            let hostname_header = if port > 0 {
                format!("{}:{}", hostname, port)
            } else {
                hostname.to_string()
            };
            let source_uri = format!("{hostname_header}{path_prefix}/{source_key}");
            trace!(source_uri, "resolved source uri");
            options.copy_source_uri(&source_uri);
            self.inner.make_simple_http_request_from_options(options, span, |_| {}, parse_copy_object_error, |_, _| ())?
        };

        let _body = request.await?;

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
}
