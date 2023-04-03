//! A client for retrieving ec2 instance metadata.

use crate::auth::auth_library_init;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::retry_strategy::RetryStrategy;
use crate::CrtError;
use mountpoint_s3_crt_sys::{
    aws_byte_buf, aws_imds_client, aws_imds_client_get_instance_type, aws_imds_client_new, aws_imds_client_options,
    aws_imds_client_release,
};
use std::ptr::NonNull;

/// A client for instance metadata query.
#[derive(Debug)]
pub struct ImdsClient {
    /// A pointer to the underlying `aws_imds_client`
    inner: NonNull<aws_imds_client>,
}

/// Configurations for creating a new [ImdsClient].
#[derive(Debug, Default)]
pub struct ImdsClientConfig {
    /// The structure that can pass into the CRT's functions.
    inner: aws_imds_client_options,

    /// The [ClientBootstrap] to use to create connection to IMDS.
    client_bootstrap: Option<ClientBootstrap>,

    /// The [RetryStrategy] to use to reschedule failed requests to IMDS. This is reference counted,
    /// so we only need to hold onto it until this [ImdsClientConfig] is consumed, at which point the
    /// client will take ownership.
    retry_strategy: Option<RetryStrategy>,
}

impl ImdsClientConfig {
    /// Create a new [ImdsClientConfig] with default options.
    pub fn new() -> Self {
        Default::default()
    }

    /// Client bootstrap used for common staples such as event loop group, host resolver, etc.
    pub fn client_bootstrap(&mut self, client_bootstrap: ClientBootstrap) -> &mut Self {
        self.inner.bootstrap = client_bootstrap.inner.as_ptr();
        self.client_bootstrap = Some(client_bootstrap);
        self
    }

    /// Retry strategy used to reschedule failed requests
    pub fn retry_strategy(&mut self, retry_strategy: RetryStrategy) -> &mut Self {
        self.inner.retry_strategy = retry_strategy.inner.as_ptr();
        self.retry_strategy = Some(retry_strategy);
        self
    }
}

impl ImdsClient {
    /// Create a new [ImdsClient]
    pub fn new(allocator: &Allocator, config: ImdsClientConfig) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: `aws_imds_client_new` copies what it needs out of `config`, so it's safe to pass only
        // a reference and to drop it after this method completes.
        let inner = unsafe { aws_imds_client_new(allocator.inner.as_ptr(), &config.inner).ok_or_last_error()? };
        Ok(Self { inner })
    }

    /// Get the EC2 instance type.
    pub fn get_instance_type<F>(&self, callback: F) -> Result<(), Error>
    where
        F: FnOnce(Result<String, Error>) + 'static,
    {
        let callback_wrapper = Box::new(ImdsClientGetResourceCallback(Box::new(callback)));
        let callback_raw_ptr = Box::into_raw(callback_wrapper) as *mut libc::c_void;
        let get_resource_callback_fn_ptr: Option<unsafe extern "C" fn(*const aws_byte_buf, i32, *mut libc::c_void)> =
            Some(imds_client_get_resource_callback);

        // SAFETY: `self.inner` is a valid `aws_imds_client`. `get_resource_callback_fn_ptr` is leaked by [Box::into_raw]
        // and so will live until the `imds_client_get_resource_callback` function is invoked.
        unsafe {
            aws_imds_client_get_instance_type(self.inner.as_ptr(), get_resource_callback_fn_ptr, callback_raw_ptr)
                .ok_or_last_error()
        }
    }
}

impl Drop for ImdsClient {
    fn drop(&mut self) {
        // SAFETY: `self.inner` always points to a valid underlying `aws_imds_client`.
        unsafe { aws_imds_client_release(self.inner.as_ptr()) };
    }
}

type OnGetResource = Box<dyn FnOnce(Result<String, Error>)>;
struct ImdsClientGetResourceCallback(OnGetResource);

/// Rust binding for CRT's callback function `aws_imds_client_on_get_resource_callback_fn`.
unsafe extern "C" fn imds_client_get_resource_callback(
    resource: *const aws_byte_buf,
    error_code: i32,
    user_data: *mut libc::c_void,
) {
    // SAFETY: `user_data` is a raw pointer to a `Box<ImdsClientGetResourceCallback>` created and leaked at query time.
    // This function will be executed at most once, so the Box is still valid right now.
    let callback = Box::from_raw(user_data as *mut ImdsClientGetResourceCallback).0;

    let result = if 0 != error_code {
        Err(error_code.into())
    } else {
        // SAFETY: The CRT guarantees `resource` is a valid `*const aws_byte_buf` if the IMDS query succeeded.
        let resource = std::slice::from_raw_parts((*resource).buffer, (*resource).len).to_vec();
        Ok(String::from_utf8(resource).expect("resource response should be encoded with utf8."))
    };

    callback(result)
}
