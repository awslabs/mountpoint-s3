/// Methods for logging events in a structured format to a file, utilizing `tracing`'s logging facade.
/// Logging backend is configured to emit json-formatted logs for this module separately.
///
/// The output format is `\n`-separated `json`'s, where each `json` describes a single event. Currently,
/// only errors occurring on fuse operations are logged as events. For each failed fuse operation an event
/// will be present in the log. On contrary, errors occurring before the mount won't be logged.
///
/// Fields `error_code`, `s3_error_http_status` and `s3_error_code` may be used to detect specific
/// failure conditions, for instance, errors caused by throttling or a lack of permissions. Fields
/// `s3_object_key` and `s3_error_message` may be used to provide further diagnostics to the user.
///
/// Note that most of the fields are optional and may not be present in the event. Only `operation`,
/// `error_code`, `timestamp` amd `version` will be present in all events. The field `error_code`
/// is assigned to errors by Mountpoint itself and may be used for a rough classification of those.
/// See [`mountpoint-s3::fs::error_metadata`] for the list of possible values.
///
/// As an example, the following rule may be used to detect permission errors:
/// `s3_error_http_status == 403 || (s3_error_http_status == 400 && s3_error_code in {"AccessDenied"})`
///
/// And the following rule for throttling errors:
/// `s3_error_http_status == 503`
///
/// Note that running Mountpoint with `MOUNTPOINT_LOG=off` turns off the event log.
use crate::fs::error_metadata::{MOUNTPOINT_ERROR_INTERNAL, MOUNTPOINT_ERROR_UNSUPPORTED};
use crate::fs::Error;
use tracing::event;

/// Logs a failed fuse operation. The field `error_code` is set to `MOUNTPOINT_ERROR_INTERNAL` if it
/// is missing in the input `fs::Error`.
pub fn log_fuse_error_event(error: &Error, fuse_operation: &str, fuse_request_id: u64) {
    let error_code = match &error.meta().error_code {
        Some(error_code) => error_code,
        None => MOUNTPOINT_ERROR_INTERNAL,
    };
    event!(
        ::tracing::Level::TRACE,
        operation = fuse_operation,
        fuse_request_id = fuse_request_id,
        error_code = error_code,
        errno = error.errno,
        internal_message = format!("{:#}", error),
        s3_object_key = error.meta().s3_object_key,
        s3_bucket_name = error.meta().s3_bucket_name,
        s3_error_http_status = error.meta().client_error_meta.http_code,
        s3_error_code = error.meta().client_error_meta.error_code,
        s3_error_message = error.meta().client_error_meta.error_message,
        version = "1",
    );
}

/// Logs a failed unsupported fuse operation.
pub fn log_unsupported_event(errno: i32, fuse_operation: &str, fuse_request_id: u64) {
    event!(
        ::tracing::Level::TRACE,
        operation = fuse_operation,
        fuse_request_id = fuse_request_id,
        error_code = MOUNTPOINT_ERROR_UNSUPPORTED,
        errno = errno,
        version = "1",
    );
}
