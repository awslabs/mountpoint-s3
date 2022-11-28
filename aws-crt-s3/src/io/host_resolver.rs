//! An asychronous DNS resolver

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::event_loop::EventLoopGroup;
use crate::io::io_library_init;
use crate::CrtError as _;
use aws_crt_s3_sys::*;
use std::ptr::NonNull;

/// Options for creating a [HostResolver]
#[derive(Debug)]
pub struct HostResolverDefaultOptions<'a> {
    /// The maximum number of host entries the resolver can hold on to
    pub max_entries: usize,
    /// The [EventLoopGroup] that this resolver will spawn resolution tasks onto
    pub event_loop_group: &'a mut EventLoopGroup,
}

/// A [HostResolver] is a tool for doing async DNS resolution and caching the results, including
/// pooling multiple resolutions for a single hostname to enable load balancing and fanout.
#[derive(Debug)]
pub struct HostResolver {
    // The inner aws_host_resolver pointer.
    pub(crate) inner: NonNull<aws_host_resolver>,
}

impl HostResolver {
    /// Create a new [HostResolver] with the default behavior
    pub fn new_default(allocator: &Allocator, options: &HostResolverDefaultOptions) -> Result<Self, Error> {
        io_library_init(allocator);

        let mut inner_options = aws_host_resolver_default_options {
            el_group: options.event_loop_group.inner.as_ptr(),
            max_entries: options.max_entries,
            ..Default::default()
        };

        let inner =
            // SAFETY: aws_host_resolver_new_default makes acquires a reference to the inner event loop group.
            unsafe { aws_host_resolver_new_default(allocator.inner.as_ptr(), &mut inner_options).ok_or_last_error()? };

        Ok(Self { inner })
    }
}

impl Clone for HostResolver {
    fn clone(&self) -> Self {
        // SAFETY: self.inner is a valid aws_host_resolver and aws_host_resolver_acquire increments
        // the reference count for it (and always returns a copy of the input, which is non-null).
        let inner = unsafe { NonNull::new_unchecked(aws_host_resolver_acquire(self.inner.as_ptr())) };

        Self { inner }
    }
}

impl Drop for HostResolver {
    fn drop(&mut self) {
        // SAFETY: self.inner is a valid aws_host_resolver, and we're dropping a reference to it
        // so it's safe to call release (which will decrement the refcnt).
        unsafe {
            aws_host_resolver_release(self.inner.as_ptr());
        }
    }
}
