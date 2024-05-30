use crate::fs::Error;
use mountpoint_s3_client::error_metadata::{
    ProvideErrorMetadata, MOUNTPOINT_ERROR_INTERNAL, MOUNTPOINT_ERROR_UNSUPPORTED,
};
use tracing::event;

pub fn log_fs_error_event(error: &Error, fuse_operation: &str, fuse_request_id: u64) {
    let error_code = match &error.meta().error_code {
        Some(error_code) => error_code,
        None => MOUNTPOINT_ERROR_INTERNAL,
    };
    event!(
        ::tracing::Level::ERROR,
        operation = fuse_operation,
        fuse_request_id = fuse_request_id,
        error_code = error_code,
        errno = error.errno,
        internal_message = format!("{:#}", error),
        s3_object_key = error.meta().s3_object_key,
        s3_bucket_name = error.meta().s3_bucket_name,
        s3_error_http_status = error.meta().http_code,
        s3_error_code = error.meta().s3_error_code,
        s3_error_message = error.meta().s3_error_message,
        version = "1",
    );
}

pub fn log_unsupported_event(fuse_operation: &str, fuse_request_id: u64) {
    event!(
        ::tracing::Level::ERROR,
        operation = fuse_operation,
        fuse_request_id = fuse_request_id,
        error_code = MOUNTPOINT_ERROR_UNSUPPORTED,
        version = "1",
    );
}
