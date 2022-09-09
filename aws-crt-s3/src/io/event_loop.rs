use crate::common::allocator::Allocator;
use aws_crt_s3_sys::*;
use std::ptr::NonNull;

pub struct EventLoopGroup {
    pub(crate) inner: NonNull<aws_event_loop_group>,
}

impl EventLoopGroup {
    pub fn new_default(allocator: &mut Allocator, max_threads: u16) -> Option<Self> {
        let inner =
            unsafe { aws_event_loop_group_new_default(allocator.inner.as_ptr(), max_threads, std::ptr::null()) };

        Some(Self {
            inner: NonNull::new(inner)?,
        })
    }
}

impl Clone for EventLoopGroup {
    fn clone(&self) -> Self {
        let inner = unsafe { NonNull::new_unchecked(aws_event_loop_group_acquire(self.inner.as_ptr())) };

        Self { inner }
    }
}

impl Drop for EventLoopGroup {
    fn drop(&mut self) {
        unsafe {
            aws_event_loop_group_release(self.inner.as_ptr());
        }
    }
}
