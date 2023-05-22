//! AWS credentials providers

use std::fmt::Debug;
use std::ptr::NonNull;

use mountpoint_s3_crt_sys::{
    aws_credentials_provider, aws_credentials_provider_acquire, aws_credentials_provider_chain_default_options,
    aws_credentials_provider_new_chain_default, aws_credentials_provider_new_profile,
    aws_credentials_provider_new_static, aws_credentials_provider_profile_options, aws_credentials_provider_release,
    aws_credentials_provider_static_options,
};

use crate::auth::auth_library_init;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::{CrtError as _, StringExt as _};

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
    pub profile_name_override: &'a str,
}

/// Options for creating a static credentials provider
pub struct CredentialsProviderStaticOptions<'a> {
    /// AWS access key ID
    pub access_key_id: &'a str,
    /// AWS secret access key
    pub secret_access_key: &'a str,
    /// AWS session token (only required for some credentials sources, e.g. STS)
    pub session_token: Option<&'a str>,
}

impl Debug for CredentialsProviderStaticOptions<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CredentialsProviderStaticOptions")
            .field("access_key_id", &"** redacted **")
            .field("secret_access_key", &"** redacted **")
            .field("sesssion_token", &self.session_token.map(|_| "** redacted **"))
            .finish()
    }
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
        options: CredentialsProviderChainDefaultOptions,
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
    pub fn new_profile(allocator: &Allocator, options: CredentialsProviderProfileOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: aws_credentials_provider_new_profile makes a copy of bootstrap
        // and contents of profile_name_override.
        let inner = unsafe {
            let inner_options = aws_credentials_provider_profile_options {
                bootstrap: options.bootstrap.inner.as_ptr(),
                profile_name_override: options.profile_name_override.as_aws_byte_cursor(),
                ..Default::default()
            };

            aws_credentials_provider_new_profile(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }

    /// Creates a static credential provider that always returns the given credentials
    pub fn new_static(allocator: &Allocator, options: CredentialsProviderStaticOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: aws_credentials_provider_new_static makes a copy of the strings
        let inner = unsafe {
            let inner_options = aws_credentials_provider_static_options {
                access_key_id: options.access_key_id.as_aws_byte_cursor(),
                secret_access_key: options.secret_access_key.as_aws_byte_cursor(),
                session_token: options
                    .session_token
                    .map(|t| t.as_aws_byte_cursor())
                    .unwrap_or_default(),
                ..Default::default()
            };

            aws_credentials_provider_new_static(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }
}

impl Clone for CredentialsProvider {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_credentials_provider` for as long as `self` exists
        unsafe {
            aws_credentials_provider_acquire(self.inner.as_ptr());
        }

        Self { inner: self.inner }
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
