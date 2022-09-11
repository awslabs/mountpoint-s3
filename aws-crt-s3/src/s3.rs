use std::sync::Once;

use aws_crt_s3_sys::aws_s3_library_init;

use crate::common::allocator::Allocator;

pub mod client;
pub mod list_objects;
pub mod paginator;

static S3_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-io library using the given allocator.
fn s3_library_init(allocator: &mut Allocator) {
    S3_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_s3_library_init(allocator.inner.as_mut());
        }
    });
}
