use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::event_loop::EventLoopGroup;
use crate::PtrExt as _;
use aws_crt_s3_sys::*;
use std::ptr::NonNull;

pub struct HostResolverDefaultOptions<'a> {
    pub max_entries: usize,
    pub event_loop_group: &'a mut EventLoopGroup,
}

pub struct HostResolver {
    pub(crate) inner: NonNull<aws_host_resolver>,
}

impl HostResolver {
    pub fn new_default(allocator: &mut Allocator, options: &HostResolverDefaultOptions) -> Result<Self, Error> {
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
