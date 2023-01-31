//! AWS credentials providers

use crate::auth::auth_library_init;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::CrtError as _;
use aws_config::default_provider::credentials::DefaultCredentialsChain;
use aws_credential_types::provider::ProvideCredentials;
use aws_crt_s3_sys::*;
use std::{
    ffi::CString,
    ptr::{self, NonNull},
    time::SystemTime,
};

/// Options for creating a default credentials provider
#[derive(Debug)]
pub struct CredentialsProviderChainDefaultOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
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

    /// Creates delegate credentials provider
    pub fn new_delegate_creds_provider(allocator: &Allocator) -> Result<Self, Error> {
        auth_library_init(allocator);

        let mut inner_options = aws_credentials_provider_delegate_options {
            get_credentials: Some(get_credentials_fn),
            ..Default::default()
        };

        let inner_options = NonNull::new(&mut inner_options).unwrap();

        // SAFETY: `get_credentials_fn` is a valid callback function in `inner_options`.
        let inner = unsafe {
            aws_credentials_provider_new_delegate(allocator.inner.as_ptr(), inner_options.as_ptr())
                .ok_or_last_error()?
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

unsafe extern "C" fn get_credentials_fn(
    _delegate_user_data: *mut ::libc::c_void,
    callback: aws_on_get_credentials_callback_fn,
    callback_user_data: *mut ::libc::c_void,
) -> ::libc::c_int {
    let callback = callback.unwrap();

    let allocator = Allocator::default();

    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();
    let credentials_chain = runtime.block_on(DefaultCredentialsChain::builder().build());
    let creds = runtime.block_on(credentials_chain.provide_credentials()).unwrap();

    let access_key_id = creds.access_key_id();
    let secret_access_key = creds.secret_access_key();
    let session_token = creds.session_token();
    let expiry = creds.expiry();

    let c_str = CString::new(access_key_id).unwrap();
    let access_key_id = aws_string_new_from_c_str(allocator.inner.as_ptr(), c_str.as_ptr());

    let c_str = CString::new(secret_access_key).unwrap();
    let secret_access_key = aws_string_new_from_c_str(allocator.inner.as_ptr(), c_str.as_ptr());

    let c_str = session_token.map(|t| CString::new(t).unwrap());
    let session_token = c_str
        .map(|cs| aws_string_new_from_c_str(allocator.inner.as_ptr(), cs.as_ptr()))
        .unwrap_or(ptr::null_mut());

    let duration = expiry.map(|e| e.duration_since(SystemTime::now()).unwrap());
    let duration_seconds = duration.map(|d| d.as_secs()).unwrap_or(u64::MAX);

    let creds = aws_credentials_new_from_string(
        allocator.inner.as_ptr(),
        access_key_id,
        secret_access_key,
        session_token,
        duration_seconds,
    );
    callback(creds, 0, callback_user_data);

    AWS_OP_SUCCESS
}
