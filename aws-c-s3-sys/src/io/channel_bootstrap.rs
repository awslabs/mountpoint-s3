use crate::common::allocator::Allocator;
use crate::generated::*;
use crate::io::event_loop::EventLoopGroup;
use crate::io::host_resolver::HostResolver;
use std::ptr::NonNull;

pub struct ClientBootstrap {
    pub(crate) inner: NonNull<aws_client_bootstrap>,
}

pub struct ClientBootstrapOptions<'a> {
    pub event_loop_group: &'a mut EventLoopGroup,
    pub host_resolver: &'a mut HostResolver,
}

impl ClientBootstrap {
    pub fn new(allocator: &mut Allocator, options: &ClientBootstrapOptions) -> Option<Self> {
        let inner_options = aws_client_bootstrap_options {
            event_loop_group: options.event_loop_group.inner.as_ptr(),
            host_resolver: options.host_resolver.inner.as_ptr(),
            ..Default::default()
        };

        let inner = unsafe { aws_client_bootstrap_new(allocator.inner.as_ptr(), &inner_options) };

        Some(Self {
            inner: NonNull::new(inner)?,
        })
    }
}
