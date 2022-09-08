use crate::common::allocator::Allocator;
use crate::generated::*;
use crate::io::event_loop::EventLoopGroup;
use std::ptr::NonNull;

pub struct HostResolverDefaultOptions<'a> {
    pub max_entries: usize,
    pub event_loop_group: &'a mut EventLoopGroup,
}

pub struct HostResolver {
    pub(crate) inner: NonNull<aws_host_resolver>,
}

impl HostResolver {
    pub fn new_default(allocator: &mut Allocator, options: &HostResolverDefaultOptions) -> Option<Self> {
        let mut inner_options = aws_host_resolver_default_options {
            el_group: options.event_loop_group.inner.as_ptr(),
            max_entries: options.max_entries,
            ..Default::default()
        };

        let inner = unsafe { aws_host_resolver_new_default(allocator.inner.as_ptr(), &mut inner_options) };

        Some(Self {
            inner: NonNull::new(inner)?,
        })
    }
}

impl Drop for HostResolver {
    fn drop(&mut self) {
        unsafe {
            aws_host_resolver_release(self.inner.as_ptr());
        }
    }
}
