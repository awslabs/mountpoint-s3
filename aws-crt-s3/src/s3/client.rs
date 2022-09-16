//! A client for high-throughput access to Amazon S3

use crate::auth::credentials::CredentialsProvider;
use crate::auth::signing_config::{SigningConfig, SigningConfigInner};
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::http::request_response::Message;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::s3::s3_library_init;
use crate::{PtrExt, StringExt};
use aws_crt_s3_sys::*;
use std::fmt::Debug;
use std::marker::PhantomPinned;
use std::pin::Pin;
use std::ptr::NonNull;
use std::sync::Arc;

/// A client for high-throughput access to Amazon S3
#[derive(Debug)]
pub struct Client {
    /// A pointer to the underlying `aws_s3_client`
    // TODO: make only visible to this crate
    pub inner: NonNull<aws_s3_client>,

    // We need to hold onto the signing config for as long as the client exists
    // The signing config itself references some bytes owned by the user (e.g., region string).
    signing_config: SigningConfig,
}

/// Options for creating a new [Client]
#[derive(Debug)]
pub struct ClientConfig<'a> {
    /// The maximum number of active connections to S3, or `None` to use the default
    pub max_active_connections_override: Option<u32>,
    /// The target aggregate throughput for this client to S3, or `None` to use the default. The
    /// client uses this setting to decide how many concurrent connections to make to S3.
    pub throughput_target_gbps: Option<f64>,
    /// The part size to use for each concurrent request to S3, or `None` to use the default
    pub part_size: Option<usize>,
    /// The [ClientBootstrap] to use to create connections to S3
    pub client_bootstrap: &'a mut ClientBootstrap,
    /// The configuration for signing API requests to S3
    pub signing_config: &'a SigningConfig,
}

/// Callback for when part of the response body is received. Given (range_start, data).
type BodyCallback = Box<dyn FnMut(u64, &[u8]) + Send>;

/// Callback for when the request is finished. Given (error_code, optional_error_body).
type FinishCallback = Box<dyn FnOnce(i32, Option<&[u8]>) + Send>;

/// Options for meta requests to S3. This is not a public interface, since clients should always
/// be using the [MetaRequestOptions] wrapper, which pins this struct behind a pointer.
struct MetaRequestOptionsInner {
    /// Inner struct to pass to CRT functions.
    inner: aws_s3_meta_request_options,

    /// Owned copy of the message, if provided.
    message: Option<Message>,

    /// Owned signing config, if provided.
    signing_config: Option<SigningConfig>,

    /// Body callback, if provided.
    on_body: Option<BodyCallback>,

    /// Finish callback, if provided (and not already called, since it's FnOnce).
    on_finish: Option<FinishCallback>,

    /// Pin this struct because inner.user_data will be a pointer to this object.
    _pinned: PhantomPinned,
}

impl MetaRequestOptionsInner {
    /// Convert from user_data in a callback to a reference to this struct.
    /// Safety: don't use except in a MetaRequest callback.
    unsafe fn from_user_data_ptr<'a>(user_data: *mut libc::c_void) -> &'a mut Self {
        (user_data as *mut Self).as_mut().unwrap()
    }

    /// Convert from user_data in a callback to an owned Box holding this struct, so it will be
    /// freed when dropped.
    /// Safety: don't use except in the shutdown callback, once we are certain not to be called back again.
    unsafe fn from_user_data_ptr_owned(user_data: *mut libc::c_void) -> Box<Self> {
        Box::from_raw(user_data as *mut Self)
    }
}

impl Debug for MetaRequestOptionsInner {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("MetaRequestOptionsInner")
            .field("inner", &self.inner)
            .field("message", &self.message)
            .field("signing_config", &self.signing_config)
            .finish()
    }
}

/// Options for a meta request to S3.
// Implementation details: this wraps the innner struct in a pinned box to enforce we don't move out of it.
#[derive(Debug)]
pub struct MetaRequestOptions(Pin<Box<MetaRequestOptionsInner>>);

impl MetaRequestOptions {
    /// Create a new default options struct. It follows the builder pattern so clients can use
    /// methods to set various options.
    pub fn new() -> Self {
        // Create the default options, binding the callbacks to our predefined callback shims.
        // Set user_data to null first, since we need to create the Box first to find out what
        // the address of the inner struct is.
        let options = Box::new(MetaRequestOptionsInner {
            inner: aws_s3_meta_request_options {
                finish_callback: Some(meta_request_finish),
                shutdown_callback: Some(meta_request_shutdown),
                body_callback: Some(meta_request_receive_body),
                user_data: std::ptr::null_mut(), // Set to null until the Box is made.
                ..Default::default()
            },
            message: None,
            signing_config: None,
            on_body: None,
            on_finish: None,
            _pinned: Default::default(),
        });

        // Pin the options in-place. This is because it's about to become self-referential.
        let mut options = Box::into_pin(options);

        // Now set the user_data to a self-referential pointer to the options struct.
        unsafe {
            // Safety: We're setting up the struct to be self-referential, and we're not moving out
            // of the struct, so the unchecked deref of the pinned pointer is okay.
            let options = Pin::get_unchecked_mut(Pin::as_mut(&mut options));
            options.inner.user_data = options as *mut MetaRequestOptionsInner as *mut libc::c_void;
        }

        Self(options)
    }

    /// Set the message of the request.
    pub fn message(&mut self, message: Message) -> &mut Self {
        // Safety: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.message = Some(message);
        options.inner.message = options.message.as_mut().unwrap().inner.as_ptr();
        self
    }

    /// Set the signing config used for this message. Not public because we copy it from the client
    /// when making a request.
    fn signing_config(&mut self, signing_config: SigningConfig) -> &mut Self {
        // Safety: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.signing_config = Some(signing_config);
        options.inner.signing_config =
            options.signing_config.as_mut().unwrap().to_inner_ptr() as *mut aws_signing_config_aws;
        self
    }

    /// Provide a callback to run when the request completes.
    pub fn on_finish(&mut self, callback: impl FnOnce(i32, Option<&[u8]>) + Send + 'static) -> &mut Self {
        // Safety: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_finish = Some(Box::new(callback));
        self
    }

    /// Provide a callback to run when the request's body arrives.
    pub fn on_body(&mut self, callback: impl FnMut(u64, &[u8]) + Send + 'static) -> &mut Self {
        // Safety: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_body = Some(Box::new(callback));
        self
    }

    /// Set the type of this request
    /// TODO: wrap aws_s3_meta_request_type
    pub fn request_type(&mut self, request_type: aws_s3_meta_request_type) -> &mut Self {
        // Safety: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.inner.type_ = request_type;
        self
    }
}

impl Default for MetaRequestOptions {
    fn default() -> Self {
        Self::new()
    }
}

/// Safety: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_receive_body(
    _request: *mut aws_s3_meta_request,
    body: *const aws_byte_cursor,
    range_start: u64,
    user_data: *mut libc::c_void,
) -> i32 {
    // Safety: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    if let Some(callback) = user_data.on_body.as_mut() {
        let slice: &[u8] = std::slice::from_raw_parts((*body).ptr, (*body).len);
        callback(range_start, slice);
    }

    AWS_OP_SUCCESS
}

/// Safety: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_finish(
    _request: *mut aws_s3_meta_request,
    result: *const aws_s3_meta_request_result,
    user_data: *mut libc::c_void,
) {
    let result = result.as_ref().expect("result cannot be NULL");

    // Safety: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    // TODO: a better way to send errors to the callback.
    let error_code: i32 = result.error_code;
    let error_body: Option<&[u8]> = result
        .error_response_body
        .as_ref()
        .map(|error_body| std::slice::from_raw_parts(error_body.buffer, error_body.len));

    if let Some(callback) = user_data.on_finish.take() {
        callback(error_code, error_body);
    }
}

/// Safety: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_shutdown(user_data: *mut libc::c_void) {
    // Take back ownership of the user data so it will be freed when dropped.
    // Safety: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr_owned(user_data);

    // Safety: at this point, we shouldn't receieve any more callbacks for this request.
    std::mem::drop(user_data);
}

/// An in-progress request to S3.
/// TODO: implement cancel, etc.
#[derive(Debug)]
pub struct MetaRequest {
    #[allow(unused)]
    inner: NonNull<aws_s3_meta_request>,
}

impl Client {
    /// Create a new S3 [Client].
    pub fn new(allocator: &mut Allocator, config: &ClientConfig) -> Result<Self, Error> {
        s3_library_init(allocator);

        let signing_config = config.signing_config.clone();

        // Get the inner pointer out of the signing config. Cast it to a mut pointer (even though we
        // don't have a mut reference) because aws_s3_client_new doesn't modify the config: it
        // creates a cached copy of it internally.
        let signing_config_ptr = signing_config.to_inner_ptr() as *mut aws_signing_config_aws;

        let inner_config = aws_s3_client_config {
            max_active_connections_override: config.max_active_connections_override.unwrap_or(0),
            throughput_target_gbps: config.throughput_target_gbps.unwrap_or(0.0),
            client_bootstrap: config.client_bootstrap.inner.as_ptr(),
            part_size: config.part_size.unwrap_or(0),
            signing_config: signing_config_ptr,
            ..Default::default()
        };

        let inner = unsafe { aws_s3_client_new(allocator.inner.as_ptr(), &inner_config).ok_or_last_error()? };

        Ok(Self { inner, signing_config })
    }

    /// Make a meta request to S3 using this [Client]. A meta request is an HTTP request that
    /// the CRT might internally split up into multiple requests for performance.
    pub fn make_meta_request(&self, mut options: MetaRequestOptions) -> Result<MetaRequest, Error> {
        unsafe {
            // Safety: The inner struct pointed to by MetaRequestOptions will live as long as the
            // request does, since we only drop it in the shutdown callback. That struct owns everything
            // related to the request, like the message, signing config, etc.

            // The client holds a copy of the signing config, copy it again for this request.
            options.signing_config(self.signing_config.clone());

            // Unpin the options (we won't move out of it, nor will the callbacks).
            let options = Pin::into_inner_unchecked(options.0);

            // Leak the options since it's the user_data pointer in the callback. It will be dropped
            // later on once the shutdown callback is invoked.
            let options = Box::leak(options);

            // Make the request on this client.
            // TODO: do we need to clone the client into the options struct? Or will the CRT internally
            // increment the refcount for us?
            let inner = aws_s3_client_make_meta_request(self.inner.as_ptr(), &options.inner).ok_or_last_error()?;

            Ok(MetaRequest { inner })
        }
    }
}

impl Clone for Client {
    fn clone(&self) -> Self {
        unsafe {
            aws_s3_client_acquire(self.inner.as_ptr());
        }

        Self {
            inner: self.inner,
            signing_config: self.signing_config.clone(),
        }
    }
}

impl Drop for Client {
    fn drop(&mut self) {
        unsafe {
            aws_s3_client_release(self.inner.as_ptr());
        }
    }
}

/// Create a new [SigningConfig] with the default configuration for signing S3 requests to a region
/// using the given [CredentialsProvider]
pub fn init_default_signing_config(region: &str, credentials_provider: &mut CredentialsProvider) -> SigningConfig {
    let mut signing_config = Box::new(SigningConfigInner {
        inner: Default::default(),
        region: region.to_owned().into(),
        _pinned: Default::default(),
    });

    // Safety: we copied the region to an OsString in the SigningConfig so the bytes will
    // live as long as the inner aws_signing_config_aws does.
    unsafe {
        let region_cursor = signing_config.region.as_aws_byte_cursor();

        aws_s3_init_default_signing_config(
            &mut signing_config.inner,
            region_cursor,
            credentials_provider.inner.as_ptr(),
        );
    }
    signing_config.inner.flags.set_use_double_uri_encode(false as u32);

    SigningConfig(Arc::new(Box::into_pin(signing_config)))
}
