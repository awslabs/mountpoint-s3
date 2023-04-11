//! AWS credentials providers

use mountpoint_s3_crt_sys::{
    aws_credentials_provider, aws_credentials_provider_chain_default_options,
    aws_credentials_provider_new_chain_default, aws_credentials_provider_new_profile,
    aws_credentials_provider_profile_options, aws_credentials_provider_release,
};

use crate::auth::auth_library_init;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::{CrtError as _, StringExt};
use std::ptr::NonNull;

/// Options for creating a default credentials provider
#[derive(Debug)]
pub struct CredentialsProviderChainDefaultOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
}

/// Options for creating a profile credentials provider
#[derive(Debug)]
pub struct CredentialsProviderProfileOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
    /// The name of profile to use.
    pub profile_name_override: Option<&'a str>,
}

/// A credentials provider is an object that has an asynchronous query function for retrieving AWS
/// credentials
#[derive(Debug)]
pub struct CredentialsProvider {
    pub(crate) inner: NonNull<aws_credentials_provider>,
}

impl CredentialsProvider {
    /// Creates the default credential provider chain as used by most AWS SDKs
    pub fn new_chain_default(
        allocator: &Allocator,
        options: &CredentialsProviderChainDefaultOptions,
    ) -> Result<Self, Error> {
        auth_library_init(allocator);

        let inner_options = aws_credentials_provider_chain_default_options {
            bootstrap: options.bootstrap.inner.as_ptr(),
            ..Default::default()
        };

        // SAFETY: aws_credentials_provider_new_chain_default makes a copy of the bootstrap options.
        let inner = unsafe {
            aws_credentials_provider_new_chain_default(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }

    /// Creates the profile credential provider.
    pub fn new_profile(allocator: &Allocator, options: &CredentialsProviderProfileOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: CredentialProvider does not modify contents of profile_name_override,
        // aws_credentials_provider_new_profile makes a copy of the contents of profile_name_override.
        let inner = unsafe {
            let inner_options = aws_credentials_provider_profile_options {
                profile_name_override: options.profile_name_override.unwrap().as_aws_byte_cursor(),
                ..Default::default()
            };

            aws_credentials_provider_new_profile(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }
}

impl Drop for CredentialsProvider {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_credentials_provider` and we're in drop so it's safe
        // to decrement the reference count.
        unsafe {
            aws_credentials_provider_release(self.inner.as_ptr());
        }
    }
}
