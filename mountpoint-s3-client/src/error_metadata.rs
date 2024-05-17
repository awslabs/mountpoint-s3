#[derive(Debug, Clone)]
pub struct ErrorMetadata {
    pub http_code: Option<i32>,
    pub s3_error_code: Option<String>,
}

pub trait ProvideErrorMetadata {
    fn meta(&self) -> &ErrorMetadata;
}

/// Empty error metadata
pub const EMPTY_ERROR_METADATA: ErrorMetadata = ErrorMetadata {
    http_code: None,
    s3_error_code: None,
};
