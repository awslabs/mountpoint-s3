//! AWS credentials providers

use crate::auth::auth_library_init;
use crate::auth::crt_credentials::CrtCredentials;
use crate::auth::delegate::DelegateProvider;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::event_loop::EventLoopGroup;
use crate::{CrtError as _, ToAwsByteCursor};
use mountpoint_s3_crt_sys::{
    aws_credentials_provider, aws_credentials_provider_acquire, aws_credentials_provider_cached_options,
    aws_credentials_provider_chain_default_options, aws_credentials_provider_new_anonymous,
    aws_credentials_provider_new_cached, aws_credentials_provider_new_chain_default,
    aws_credentials_provider_new_profile, aws_credentials_provider_new_static,
    aws_credentials_provider_profile_options, aws_credentials_provider_release,
    aws_credentials_provider_static_options,
};
use std::fmt::Debug;
use std::future::Future;
use std::ptr::NonNull;
use std::sync::Arc;

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
            .field("session_token", &self.session_token.map(|_| "** redacted **"))
            .finish()
    }
}

/// A credentials provider is an object that has an asynchronous query function for retrieving AWS
/// credentials
#[derive(Debug)]
pub struct CredentialsProvider {
    pub(crate) inner: NonNull<aws_credentials_provider>,
    on_delegate_callback: Option<Arc<DelegateProvider>>,
}

// SAFETY: aws_credentials_provider is thread-safe.
unsafe impl Send for CredentialsProvider {}
// SAFETY: aws_credentials_provider is thread-safe.
unsafe impl Sync for CredentialsProvider {}

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

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
    }

    /// Creates the anonymous credential provider.
    /// Anonynous credentials provider gives you anonymous credentials which can be used to skip the signing process.
    pub fn new_anonymous(allocator: &Allocator) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: allocator is a valid aws_allocator and shutdown_options is optional
        let inner = unsafe {
            aws_credentials_provider_new_anonymous(allocator.inner.as_ptr(), std::ptr::null_mut()).ok_or_last_error()?
        };

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
    }

    /// Creates the profile credential provider.
    pub fn new_profile(allocator: &Allocator, options: CredentialsProviderProfileOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: aws_credentials_provider_new_profile makes a copy of bootstrap
        // and contents of profile_name_override.
        // SAFETY: aws_credentials_provider_new_cached increments the reference counter of
        // profile_provider.
        let inner = unsafe {
            let inner_options = aws_credentials_provider_profile_options {
                bootstrap: options.bootstrap.inner.as_ptr(),
                profile_name_override: options.profile_name_override.as_aws_byte_cursor(),
                ..Default::default()
            };

            let profile_provider =
                aws_credentials_provider_new_profile(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?;

            let inner_options = aws_credentials_provider_cached_options {
                source: profile_provider.as_ptr(),
                refresh_time_in_milliseconds: 900_000, // Same as `aws_credentials_provider_new_chain_default`, 15 minutes
                ..Default::default()
            };

            let cached_provider =
                aws_credentials_provider_new_cached(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?;

            // transfer ownership
            aws_credentials_provider_release(profile_provider.as_ptr());

            cached_provider
        };

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
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

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
    }

    /// Creates a delegate credential provider which uses the credentials returned by the callback.
    /// The callback is ran in `event_loop_group`.
    pub fn new_delegate<F, Fut>(
        allocator: &Allocator,
        event_loop_group: EventLoopGroup,
        delegate: F,
    ) -> Result<Self, Error>
    where
        F: Fn() -> Fut + Send + Sync + 'static,
        Fut: Future<Output = Option<CrtCredentials>> + Send,
    {
        auth_library_init(allocator);

        let (inner, on_delegate_callback) = DelegateProvider::new(allocator, event_loop_group, delegate)?;

        Ok(Self {
            inner,
            on_delegate_callback: Some(on_delegate_callback),
        })
    }
}

impl Clone for CredentialsProvider {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_credentials_provider` for as long as `self` exists
        unsafe {
            aws_credentials_provider_acquire(self.inner.as_ptr());
        }

        Self {
            inner: self.inner,
            on_delegate_callback: self.on_delegate_callback.clone(),
        }
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
