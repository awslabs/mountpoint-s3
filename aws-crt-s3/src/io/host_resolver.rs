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
    pub(crate) inner: NonNull<aws_host_resolver>,
}

unsafe impl Send for HostResolver {}
unsafe impl Sync for HostResolver {}

impl HostResolver {
    /// Create a new [HostResolver] with the default behavior
    pub fn new_default(allocator: &mut Allocator, options: &HostResolverDefaultOptions) -> Result<Self, Error> {
        io_library_init(allocator);

        let mut inner_options = aws_host_resolver_default_options {
            el_group: options.event_loop_group.inner.as_ptr(),
            max_entries: options.max_entries,
            ..Default::default()
        };

        let inner =
            unsafe { aws_host_resolver_new_default(allocator.inner.as_ptr(), &mut inner_options).ok_or_last_error()? };

        Ok(Self { inner })
    }
}

impl Clone for HostResolver {
    fn clone(&self) -> Self {
        let inner = unsafe { NonNull::new_unchecked(aws_host_resolver_acquire(self.inner.as_ptr())) };

        Self { inner }
    }
}

impl Drop for HostResolver {
    fn drop(&mut self) {
        unsafe {
            aws_host_resolver_release(self.inner.as_ptr());
        }
    }
}
