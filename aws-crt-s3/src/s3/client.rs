//! A client for high-throughput access to Amazon S3

use crate::auth::credentials::CredentialsProvider;
use crate::auth::signing_config::{SigningConfig, SigningConfigInner};
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::http::request_response::{Headers, Message};
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::s3::s3_library_init;
use crate::{aws_byte_cursor_as_slice, CrtError, ResultExt, StringExt};
use aws_crt_s3_sys::*;
use std::ffi::{OsStr, OsString};
use std::fmt::Debug;
use std::marker::PhantomPinned;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::ptr::NonNull;
use std::sync::Arc;

/// A client for high-throughput access to Amazon S3
#[derive(Debug)]
pub struct Client {
    /// A pointer to the underlying `aws_s3_client`
    inner: NonNull<aws_s3_client>,

    /// Hold on to an owned copy of the configuration so that it doesn't get dropped while the
    /// client still exists. This is because the client config holds ownership of some strings
    /// (like the region) that could still be used while the client exists.
    config: ClientConfig,
}

/// Options for creating a new [Client]. Follows the builder pattern.
#[derive(Debug, Default)]
pub struct ClientConfig {
    /// The struct we can pass into the CRT's functions.
    inner: aws_s3_client_config,

    /// The [ClientBootstrap] to use to create connections to S3
    client_bootstrap: Option<ClientBootstrap>,

    /// The [SigningConfig] configuration for signing API requests to S3
    signing_config: Option<SigningConfig>,
}

impl ClientConfig {
    /// Create a new [ClientConfig] with default options.
    pub fn new() -> Self {
        Default::default()
    }

    /// Signing options to be used for each request. Leave out to not sign requests.
    pub fn signing_config(&mut self, signing_config: SigningConfig) -> &mut Self {
        self.signing_config = Some(signing_config);
        // Safety: Cast the signing config to mut pointer since we know creating the client won't modify it.
        self.inner.signing_config = self.signing_config.as_ref().unwrap().to_inner_ptr() as *mut aws_signing_config_aws;
        self
    }

    /// Client bootstrap used for common staples such as event loop group, host resolver, etc.
    pub fn client_bootstrap(&mut self, client_bootstrap: ClientBootstrap) -> &mut Self {
        self.client_bootstrap = Some(client_bootstrap);
        self.inner.client_bootstrap = self.client_bootstrap.as_ref().unwrap().inner.as_ptr();
        self
    }

    /// Size of parts the files will be downloaded or uploaded in.
    pub fn part_size(&mut self, part_size: usize) -> &mut Self {
        self.inner.part_size = part_size;
        self
    }

    /// If the part size needs to be adjusted for service limits, this is the maximum size it will be adjusted to.
    pub fn max_part_size(&mut self, max_part_size: usize) -> &mut Self {
        self.inner.max_part_size = max_part_size;
        self
    }

    /// Throughput target in Gbps that we are trying to reach.
    pub fn throughput_target_gbps(&mut self, throughput_target_gbps: f64) -> &mut Self {
        self.inner.throughput_target_gbps = throughput_target_gbps;
        self
    }

    /// When set, this will cap the number of active connections. Otherwise, the client will
    /// determine this value based on throughput_target_gbps. (Recommended)
    pub fn max_active_connections_override(&mut self, max_active_connections_override: u32) -> &mut Self {
        self.inner.max_active_connections_override = max_active_connections_override;
        self
    }
}

/// Callback for when part of the response body is received. Given (range_start, data).
type BodyCallback = Box<dyn FnMut(u64, &[u8]) + Send>;

/// Callback for when the request is finished. Given (error_code, optional_error_body).
type FinishCallback = Box<dyn FnOnce(MetaRequestResult) + Send>;

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
    pub fn on_finish(&mut self, callback: impl FnOnce(MetaRequestResult) + Send + 'static) -> &mut Self {
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
        let slice: &[u8] = aws_byte_cursor_as_slice(&*body);
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

    if let Some(callback) = user_data.on_finish.take() {
        callback(MetaRequestResult::from_crt_result(result));
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

impl Drop for MetaRequest {
    fn drop(&mut self) {
        // Safety: we will no longer use the pointer after this MetaRequest is dropped, so it's safe
        // to give up our refcount on it now.
        unsafe {
            aws_s3_meta_request_release(self.inner.as_ptr());
        }
    }
}

impl Client {
    /// Create a new S3 [Client].
    pub fn new(allocator: &mut Allocator, config: ClientConfig) -> Result<Self, Error> {
        s3_library_init(allocator);

        let inner = unsafe { aws_s3_client_new(allocator.inner.as_ptr(), &config.inner).ok_or_last_error()? };

        Ok(Self { inner, config })
    }

    /// Make a meta request to S3 using this [Client]. A meta request is an HTTP request that
    /// the CRT might internally split up into multiple requests for performance.
    pub fn make_meta_request(&self, mut options: MetaRequestOptions) -> Result<MetaRequest, Error> {
        unsafe {
            // Safety: The inner struct pointed to by MetaRequestOptions will live as long as the
            // request does, since we only drop it in the shutdown callback. That struct owns everything
            // related to the request, like the message, signing config, etc.

            // The client holds a copy of the signing config, copy it again for this request.
            if let Some(signing_config) = self.config.signing_config.as_ref() {
                options.signing_config(signing_config.clone());
            }

            // Unpin the options (we won't move out of it, nor will the callbacks).
            let options = Pin::into_inner_unchecked(options.0);

            // Leak the options since it's the user_data pointer in the callback. It will be dropped
            // later on once the shutdown callback is invoked.
            let options = Box::leak(options);

            // Make the request on this client.
            // TODO: do we need to clone the client into the options struct? Or will the CRT internally
            // increment the refcount for us?
            let inner = aws_s3_client_make_meta_request(self.inner.as_ptr(), &options.inner)
                .ok_or_last_error()
                // Drop the options Box if we failed to make the meta request.
                // Assumption: CRT won't call shutdown callback if make_meta_request returns null.
                .on_err(|| std::mem::drop(Box::from_raw(options)))?;

            Ok(MetaRequest { inner })
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

/// The result of a meta request using an S3 [Client].
#[derive(Debug)]
pub struct MetaRequestResult {
    /// Response status of the failed request or of the entire meta request.
    pub response_status: i32,

    /// Final error code of the meta request.
    pub crt_error: Error,

    /// Error HTTP body, if present
    pub error_response_headers: Option<Headers>,

    /// Error HTTP response, if present
    pub error_response_body: Option<OsString>,
}

impl MetaRequestResult {
    /// Returns whether this HTTP request result represents an error.
    pub fn is_err(&self) -> bool {
        match self.crt_error {
            Error::CRTError(val) => val != AWS_OP_SUCCESS,
            _ => true,
        }
    }

    /// Convert the CRT's meta request result struct into a safe, owned result.
    /// Safety: This copies from the raw pointer inside of the request result, so only
    /// call on results given to us from the CRT.
    unsafe fn from_crt_result(inner: &aws_s3_meta_request_result) -> Self {
        let error_response_headers = inner
            .error_response_headers
            .as_ref()
            .map(|headers| Headers::from_crt(NonNull::from(headers)));

        let error_response_body: Option<OsString> = inner.error_response_body.as_ref().map(|byte_buf| {
            assert!(!byte_buf.buffer.is_null(), "error_response_body.buffer is null");
            let slice: &[u8] = std::slice::from_raw_parts(byte_buf.buffer, byte_buf.len);
            OsStr::from_bytes(slice).to_owned()
        });

        Self {
            response_status: inner.response_status,
            crt_error: inner.error_code.into(),
            error_response_headers,
            error_response_body,
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
