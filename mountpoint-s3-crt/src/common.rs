//! Core primitives for the AWS Common Runtime

use std::sync::Once;

use mountpoint_s3_crt_sys::*;

use crate::common::allocator::Allocator;

pub mod allocator;
pub mod byte_buf;
pub mod error;
pub mod logging;
pub mod rust_log_adapter;
pub mod string;
pub mod task_scheduler;
pub mod thread;
pub mod uri;

static COMMON_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-common library using the given allocator.
fn common_library_init(allocator: &Allocator) {
    COMMON_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_common_library_init(allocator.inner.as_ptr());
        }
    });
}
