//! Rust bindings for the AWS Common Runtime authentication library.

use std::sync::Once;

use mountpoint_s3_crt_sys::aws_auth_library_init;

use crate::common::allocator::Allocator;

pub mod credentials;
pub mod signing_config;

static AUTH_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-auth library using the given allocator.
fn auth_library_init(allocator: &Allocator) {
    AUTH_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_auth_library_init(allocator.inner.as_ptr());
        }
    });
}
