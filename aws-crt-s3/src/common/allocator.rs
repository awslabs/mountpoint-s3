//! Common memory allocation interfaces for the CRT

use aws_crt_s3_sys::*;
use std::ptr::NonNull;

/// An allocator for use by the CRT
#[derive(Debug)]
pub struct Allocator {
    /// Pointer to the underlying `aws_allocator`
    // TODO: make only visible to this crate
    pub inner: NonNull<aws_allocator>,

    /// Whether we got this allocator from Allocator::traced.
    traced: bool,
}

// Safety: the allocator is global and shared across the entire program, so it must be safe to
// share them across threads.
unsafe impl Send for Allocator {}
unsafe impl Sync for Allocator {}

impl Allocator {
    /// The default allocator is a singleton, so this always returns the same allocator
    pub fn default() -> Self {
        let inner = unsafe { aws_default_allocator() };

        let inner = NonNull::new(inner).expect("CRT default allocator is never null");

        Self { inner, traced: false }
    }

    /// Wraps an allocator and tracks all external allocations. If aws_mem_trace_dump() is called
    /// and there are still allocations active, they will be reported to the aws_logger at TRACE level.
    /// Returns the tracer allocator, which should be used for all allocations that should be tracked.
    /// NB: an implementation detail of this function is there is only one traced allocator. Multiple
    /// calls to traced() will overwrite the inner allocator with the last one used in a .traced() call.
    pub fn traced(&self) -> Self {
        unsafe {
            let inner = aws_mem_tracer_new(
                self.inner.as_ptr(),
                std::ptr::null_mut(),
                aws_mem_trace_level::AWS_MEMTRACE_BYTES,
                8,
            );
            let inner = NonNull::new(inner).expect("Failed to create traced allocator");

            Self { inner, traced: true }
        }
    }

    /// If there are outstanding allocations, dumps them to log, along with any information gathered
    /// based on the trace level set when aws_mem_trace() was called.
    /// Should be passed the tracer allocator returned from aws_mem_trace().
    /// Should only be called on tracer allocators obtained from Allocator::traced.
    pub fn tracer_dump(&self) {
        assert!(self.traced, "cannot call on non-traced allocator");
        unsafe {
            aws_mem_tracer_dump(self.inner.as_ptr());
        }
    }

    /// Returns the current number of bytes in outstanding allocations.
    /// Should only be called on tracer allocators obtained from Allocator::traced.
    pub fn tracer_bytes(&self) -> usize {
        assert!(self.traced, "cannot call on non-traced allocator");
        unsafe { aws_mem_tracer_bytes(self.inner.as_ptr()) }
    }

    /// Returns the current number of outstanding allocations
    /// Should only be called on tracer allocators obtained from Allocator::traced.
    pub fn tracer_count(&self) -> usize {
        assert!(self.traced, "cannot call on non-traced allocator");
        unsafe { aws_mem_tracer_count(self.inner.as_ptr()) }
    }
}

impl Default for Allocator {
    fn default() -> Self {
        Self::default()
    }
}
