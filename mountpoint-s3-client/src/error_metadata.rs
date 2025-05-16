use std::os::unix::ffi::OsStrExt;

use mountpoint_s3_crt::s3::client::MetaRequestResult;

/// Additional data fetched from S3 response, which caused an error
#[derive(Default, Debug, Clone, PartialEq, Eq)]
pub struct ClientErrorMetadata {
    /// http code of the response, e.g. 403
    pub http_code: Option<i32>,
    /// error code from the response xml body, e.g. "AccessDenied"
    pub error_code: Option<String>,
    /// error message from the response xml body, e.g. "Access Denied"
    pub error_message: Option<String>,
}

/// Allows using metadata of errors in generic implementations without knowing the exact type of an error,
/// which as of today may be s3_crt_client::S3RequestError / mock_client::MockClientError / GetObjectError and etc.
pub trait ProvideErrorMetadata {
    fn meta(&self) -> ClientErrorMetadata;
}

impl ClientErrorMetadata {
    pub fn from_meta_request_result(result: &MetaRequestResult) -> Self {
        let http_code = if result.response_status >= 100 {
            Some(result.response_status)
        } else {
            None
        };

        let no_body_result = Self {
            http_code,
            ..Default::default()
        };
        let Some(body) = result.error_response_body.as_ref() else {
            return no_body_result;
        };
        let Some(root) = xmltree::Element::parse(body.as_bytes()).ok() else {
            return no_body_result;
        };

        let error_code = root
            .get_child("Code")
            .and_then(|raw| raw.get_text())
            .map(|field_str| field_str.to_string());
        let error_message = root
            .get_child("Message")
            .and_then(|raw| raw.get_text())
            .map(|field_str| field_str.to_string());

        Self {
            http_code,
            error_code,
            error_message,
        }
    }
}
