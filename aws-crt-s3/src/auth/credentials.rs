use crate::common::allocator::Allocator;
use crate::io::channel_bootstrap::ClientBootstrap;
use aws_c_s3_sys::*;
use std::ptr::NonNull;

pub struct CredentialsProviderChainDefaultOptions<'a> {
    pub bootstrap: &'a mut ClientBootstrap,
}

pub struct CredentialsProvider {
    pub(crate) inner: NonNull<aws_credentials_provider>,
}

impl CredentialsProvider {
    pub fn new_chain_default(
        allocator: &mut Allocator,
        options: &CredentialsProviderChainDefaultOptions,
    ) -> Option<Self> {
        let inner_options = aws_credentials_provider_chain_default_options {
            bootstrap: options.bootstrap.inner.as_ptr(),
            ..Default::default()
        };

        let inner = unsafe { aws_credentials_provider_new_chain_default(allocator.inner.as_ptr(), &inner_options) };

        Some(Self {
            inner: NonNull::new(inner)?,
        })
    }
}

impl Drop for CredentialsProvider {
    fn drop(&mut self) {
        unsafe {
            aws_credentials_provider_release(self.inner.as_ptr());
        }
    }
}
