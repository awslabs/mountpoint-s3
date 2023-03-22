//! A client for retrieve ec2 instance metadata.

use crate::auth::auth_library_init;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::retry_strategy::RetryStrategy;
use crate::{CrtError, ResultExt};
use mountpoint_s3_crt_sys::{
    aws_byte_buf, aws_imds_client, aws_imds_client_get_instance_type, aws_imds_client_new, aws_imds_client_options,
};
use std::ptr::NonNull;

/// A client for instance metadata query.
#[derive(Debug)]
pub struct ImdsClient {
    /// A pointer to the underlying `aws_imds_client`
    inner: NonNull<aws_imds_client>,
}

///Configurations for creating a new [ImdsClient].
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

impl ImdsClient {
    /// Create a new [ImdsClient]
    pub fn new(allocator: &Allocator, config: ImdsClientConfig) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: `config` is moved into the [ImdsClient] on success, so `config.inner` (and the values
        // inside) are guaranteed to live at least as long as this [Client] does. `allocator` is
        // guaranteed to be a valid allocator because of the type-safe wrapper.
        let inner = unsafe { aws_imds_client_new(allocator.inner.as_ptr(), &config.inner).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// get ec2 instance type for running machine.
    pub fn get_instance_type<F>(&self, callback: F) -> Result<(), Error>
    where
        F: FnOnce(Result<&str, Error>) + 'static,
    {
        let callback_closure: OnGetResrouce = Box::new(callback);
        let callback_wrapper: Box<ImdsClientGetResourceCallback> =
            Box::new(ImdsClientGetResourceCallback(Box::new(callback_closure)));
        let callback_wrapper: &mut ImdsClientGetResourceCallback = Box::leak(callback_wrapper);
        // callback_wrapper is safe so the raw pointer referring to that is safe as well.
        let callback_wrapper: *mut libc::c_void =
            callback_wrapper as *mut ImdsClientGetResourceCallback as *mut libc::c_void;
        let get_resource_callback_fn_ptr: Option<unsafe extern "C" fn(*const aws_byte_buf, i32, *mut libc::c_void)> =
            Some(imds_client_get_resource_callback);

        // Safety: move the reference where the data store in memory out of box potential leaks memory,
        // however, the binding callback function will drop it once the corresponding crt function finished the execution.
        // See `extern "C" fn imds_client_get_resource_callback`.
        unsafe {
            let result = aws_imds_client_get_instance_type(self.inner.as_ptr(), get_resource_callback_fn_ptr, callback_wrapper);
        }

        Ok(())

}
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

/// Callback trait for when finished getting ec2 instance type. Given()
/// The actual log comes from rust closure, CRT's callback can then execute it accordingly.
type OnGetResrouce = Box<dyn FnOnce(Result<&str, Error>)>;
struct ImdsClientGetResourceCallback(OnGetResrouce);

/// Rust binding for CRT's callback function `aws_imds_client_on_get_resource_callback_fn`.
unsafe extern "C" fn imds_client_get_resource_callback(
    resource: *const aws_byte_buf,
    _error_code: i32,
    user_data: *mut libc::c_void,
) {
    let resource: aws_byte_buf = *resource;
    let resource: String = String::from_raw_parts(resource.buffer, resource.len, resource.capacity);

    let user_data: *mut ImdsClientGetResourceCallback = user_data as *mut ImdsClientGetResourceCallback;
    let user_data: Box<ImdsClientGetResourceCallback> = Box::from_raw(user_data);
    let user_data: OnGetResrouce = user_data.0;

    user_data(Ok(resource.as_ref()))
}
