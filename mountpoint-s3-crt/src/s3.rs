//! High-throughput primitives for working with Amazon S3

use std::sync::Once;

use mountpoint_s3_crt_sys::aws_s3_library_init;

use crate::common::allocator::Allocator;

pub mod client;
mod endpoint_resolver;

static S3_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-io library using the given allocator.
fn s3_library_init(allocator: &Allocator) {
    S3_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_s3_library_init(allocator.inner.as_ptr());
        }
    });
}
