use aws_crt_s3_sys::*;
use std::ptr::NonNull;
use std::sync::Once;

pub mod allocator;
pub mod error;
pub mod task_scheduler;

static COMMON_LIBRARY_INIT: Once = Once::new();

/// Set up the aws-c-common library using the given allocator.
unsafe fn common_library_init(allocator: NonNull<aws_allocator>) {
    COMMON_LIBRARY_INIT.call_once(|| {
        aws_common_library_init(allocator.as_ptr());
    });
}
