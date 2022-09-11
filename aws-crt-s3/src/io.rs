//! IO and TLS primitives for the AWS Common Runtime

use std::sync::Once;

use aws_crt_s3_sys::aws_io_library_init;

use crate::common::allocator::Allocator;

pub mod channel_bootstrap;
pub mod event_loop;
pub mod host_resolver;

static IO_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-io library using the given allocator.
fn io_library_init(allocator: &mut Allocator) {
    IO_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_io_library_init(allocator.inner.as_mut());
        }
    });
}
