use mountpoint_s3_client::error_metadata::ClientErrorMetadata;

/// Additional data about an error to be reported in the event log when operation fails.
/// This includes info fetched from S3 response and info provided with the request.
#[derive(Default, Debug, Clone, PartialEq)]
pub struct ErrorMetadata {
    /// Additional data fetched from S3 response, which caused an error
    pub client_error_meta: ClientErrorMetadata,
    /// A code identifying the error, assigned in mountpoint-s3 crate, e.g. "error.client"
    pub error_code: Option<String>,
    /// Bucket with which the fuse operation was associated
    pub s3_bucket_name: Option<String>,
    /// Key with which the fuse operation was associated
    pub s3_object_key: Option<String>,
}

impl ErrorMetadata {
    /// Empty error metadata
    pub const EMPTY: Self = Self {
        client_error_meta: ClientErrorMetadata {
            http_code: None,
            s3_error_code: None,
            s3_error_message: None,
        },
        error_code: None,
        s3_bucket_name: None,
        s3_object_key: None,
    };
}

/// A code identifying the error reported to the event log. As of today, users who deploy Mountpoint as an infrastructural component
/// are interested in errors which *may be fixed by users of this infrastructure* (e.g. a forbidden error). Next, it is vital
/// to be able to distinguish fuse operation errors which *may be tolerated by a workload* (e.g. a non-existent object). Other errors
/// may be reported as "error.internal" with further investigation involving debug log access.
///
/// NOTE: the event log API is not stable and is subject to breaking changes
pub const MOUNTPOINT_ERROR_CLIENT: &str = "error.client";
pub const MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT: &str = "error.fs.lookup_nonexistent";
pub const MOUNTPOINT_ERROR_INTERNAL: &str = "error.internal";
