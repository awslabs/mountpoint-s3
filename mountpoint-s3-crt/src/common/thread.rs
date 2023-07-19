//! Utilities for managing threads

use mountpoint_s3_crt_sys::aws_thread_id_t;

/// Identifier for a running thread
///
/// This is an opaque object that identifies a thread (like [std::thread::ThreadId] but without the
/// uniqueness guarantee). Its actual value cannot be accessed because the underlying representation
/// varies across platforms, but it implements [Eq] and [Hash] for comparison purposes.
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub struct ThreadId(aws_thread_id_t);

impl From<aws_thread_id_t> for ThreadId {
    fn from(value: aws_thread_id_t) -> Self {
        Self(value)
    }
}
