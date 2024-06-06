/// Additional data fetched from S3 response, which caused an error
#[derive(Default, Debug, Clone, PartialEq)]
pub struct ClientErrorMetadata {
    /// http code of the response, e.g. 403
    pub http_code: Option<i32>,
    /// error code from the response xml body, e.g. "AccessDenied"
    pub s3_error_code: Option<String>,
    /// error message from the response xml body, e.g. "Access Denied"
    pub s3_error_message: Option<String>,
}

/// Allows using metadata of errors in generic implementations without knowing the exact type of an error,
/// which as of today may be s3_crt_client::S3RequestError / mock_client::MockClientError / GetObjectError and etc.
pub trait ProvideErrorMetadata {
    fn meta(&self) -> &ClientErrorMetadata;
}

impl ClientErrorMetadata {
    /// Empty error metadata
    pub const EMPTY: Self = Self {
        http_code: None,
        s3_error_code: None,
        s3_error_message: None,
    };
}
