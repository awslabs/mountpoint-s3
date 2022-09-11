//! Utilities for creating channels to communicate with endpoints

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::event_loop::EventLoopGroup;
use crate::io::host_resolver::HostResolver;
use crate::io::io_library_init;
use crate::PtrExt as _;
use aws_crt_s3_sys::*;
use std::ptr::NonNull;

/// An object that handles the creation and setup of channels to communicate with an endpoint
#[derive(Debug)]
pub struct ClientBootstrap {
    pub(crate) inner: NonNull<aws_client_bootstrap>,
}

/// Options for creating a [ClientBootstrap]
#[derive(Debug)]
pub struct ClientBootstrapOptions<'a> {
    /// The [EventLoopGroup] to create connections on
    pub event_loop_group: &'a mut EventLoopGroup,
    /// The [HostResolver] to use to resolve endpoints
    pub host_resolver: &'a mut HostResolver,
}

impl ClientBootstrap {
    /// Create a [ClientBootstrap] with the given options
    pub fn new(allocator: &mut Allocator, options: &ClientBootstrapOptions) -> Result<Self, Error> {
        io_library_init(allocator);

        let inner_options = aws_client_bootstrap_options {
            event_loop_group: options.event_loop_group.inner.as_ptr(),
            host_resolver: options.host_resolver.inner.as_ptr(),
            ..Default::default()
        };

        // Safety: `event_loop_group` and `host_resolver` are reference counted pointers, so they
        // will survive even if their Rust versions are dropped
        let inner = unsafe { aws_client_bootstrap_new(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()? };

        Ok(Self { inner })
    }
}

impl Clone for ClientBootstrap {
    fn clone(&self) -> Self {
        let inner = unsafe { NonNull::new_unchecked(aws_client_bootstrap_acquire(self.inner.as_ptr())) };

        Self { inner }
    }
}

impl Drop for ClientBootstrap {
    fn drop(&mut self) {
        unsafe {
            aws_client_bootstrap_release(self.inner.as_ptr());
        }
    }
}
