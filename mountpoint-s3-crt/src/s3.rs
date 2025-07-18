//! High-throughput primitives for working with Amazon S3

use std::sync::Once;

use mountpoint_s3_crt_sys::aws_s3_library_init;

pub use mountpoint_s3_crt_sys::aws_s3_errors as ErrorCode;

use crate::common::allocator::Allocator;

pub mod buffer;
pub mod client;
pub mod endpoint_resolver;
pub mod pool;

static S3_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-io library using the given allocator.
pub fn s3_library_init(allocator: &Allocator) {
    S3_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_s3_library_init(allocator.inner.as_ptr());
        }
    });
}
