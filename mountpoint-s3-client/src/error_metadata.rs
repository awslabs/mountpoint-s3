#[derive(Default, Debug, Clone, PartialEq)]
pub struct ErrorMetadata {
    pub http_code: Option<i32>,
    pub s3_error_code: Option<String>,
    pub error_code: Option<String>,
    pub s3_bucket_name: Option<String>,
    pub s3_object_key: Option<String>,
}

pub trait ProvideErrorMetadata {
    fn meta(&self) -> &ErrorMetadata;
}

impl ErrorMetadata {
    /// Empty error metadata
    pub const EMPTY: Self = Self {
        http_code: None,
        s3_error_code: None,
        error_code: None,
        s3_bucket_name: None,
        s3_object_key: None,
    };
}

pub const MOUNTPOINT_ERROR_CLIENT: &str = "error.client";
pub const MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT: &str = "error.fs.lookup_nonexistent";
pub const MOUNTPOINT_ERROR_INTERNAL: &str = "error.internal";
