//! Implementation of the HTTP/1.1 HTTP/2 specifications.

use std::sync::Once;

use mountpoint_s3_crt_sys::*;

use crate::common::allocator::Allocator;

pub mod request_response;

static HTTP_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-http library using the given allocator.
fn http_library_init(allocator: &Allocator) {
    HTTP_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_http_library_init(allocator.inner.as_ptr());
        }
    });
}
