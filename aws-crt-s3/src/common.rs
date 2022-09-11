use aws_crt_s3_sys::*;
use std::sync::Once;

use crate::common::allocator::Allocator;

pub mod allocator;
pub mod error;
pub mod logging;
pub mod rust_log_adapter;
pub mod task_scheduler;

static COMMON_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-common library using the given allocator.
fn common_library_init(allocator: &mut Allocator) {
    COMMON_LIBRARY_INIT.call_once(|| {
        // Safety: the CRT ensures this call happens only once.
        unsafe {
            aws_common_library_init(allocator.inner.as_ptr());
        }
    });
}
