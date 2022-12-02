//! A client for high-throughput access to Amazon S3

use crate::auth::credentials::CredentialsProvider;
use crate::auth::signing_config::{SigningConfig, SigningConfigInner};
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::http::request_response::{Headers, Message};
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::retry_strategy::RetryStrategy;
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

// SAFETY: We assume that the CRT allows making requests using the same client from multiple threads.
unsafe impl Send for Client {}
// SAFETY: We assume that the CRT allows making requests using the same client from multiple threads.
unsafe impl Sync for Client {}

/// Options for creating a new [Client]. Follows the builder pattern.
#[derive(Debug, Default)]
pub struct ClientConfig {
    /// The struct we can pass into the CRT's functions.
    inner: aws_s3_client_config,

    /// The [ClientBootstrap] to use to create connections to S3
    client_bootstrap: Option<ClientBootstrap>,

    /// The [SigningConfig] configuration for signing API requests to S3
    signing_config: Option<SigningConfig>,

    /// The [RetryStrategy] to use to reschedule failed requests to S3. This is reference counted,
    /// so we only need to hold onto it until this [ClientConfig] is consumed, at which point the
    /// client will take ownership.
    retry_strategy: Option<RetryStrategy>,
}

impl ClientConfig {
    /// Create a new [ClientConfig] with default options.
    pub fn new() -> Self {
        Default::default()
    }

    /// Signing options to be used for each request. Leave out to not sign requests.
    pub fn signing_config(&mut self, signing_config: SigningConfig) -> &mut Self {
        // Safety: Cast the signing config to mut pointer since we know creating the client won't modify it.
        self.inner.signing_config = signing_config.to_inner_ptr() as *mut aws_signing_config_aws;
        self.signing_config = Some(signing_config);
        self
    }

    /// Client bootstrap used for common staples such as event loop group, host resolver, etc.
    pub fn client_bootstrap(&mut self, client_bootstrap: ClientBootstrap) -> &mut Self {
        self.inner.client_bootstrap = client_bootstrap.inner.as_ptr();
        self.client_bootstrap = Some(client_bootstrap);
        self
    }

    /// Retry strategy used to reschedule failed requests
    pub fn retry_strategy(&mut self, retry_strategy: RetryStrategy) -> &mut Self {
        self.inner.retry_strategy = retry_strategy.inner.as_ptr();
        self.retry_strategy = Some(retry_strategy);
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

/// Callback for when headers are received as part of a successful HTTP request. Given (headers, response_status).
type HeadersCallback = Box<dyn FnMut(&Headers, i32) + Send>;

/// Callback for when part of the response body is received. Given (range_start, data).
type BodyCallback = Box<dyn FnMut(u64, &[u8]) + Send>;

/// Callback for when the request is finished. Given (error_code, optional_error_body).
type FinishCallback = Box<dyn FnOnce(MetaRequestResult) + Send>;

/// Options for meta requests to S3. This is not a public interface, since clients should always
/// be using the [MetaRequestOptions] wrapper, which pins this struct behind a pointer.
struct MetaRequestOptionsInner<'a> {
    /// Inner struct to pass to CRT functions.
    inner: aws_s3_meta_request_options,

    /// Owned copy of the message, if provided.
    message: Option<Message<'a>>,

    /// Owned signing config, if provided.
    signing_config: Option<SigningConfig>,

    /// Headers callback, if provided.
    on_headers: Option<HeadersCallback>,

    /// Body callback, if provided.
    on_body: Option<BodyCallback>,

    /// Finish callback, if provided (and not already called, since it's FnOnce).
    on_finish: Option<FinishCallback>,

    /// Pin this struct because inner.user_data will be a pointer to this object.
    _pinned: PhantomPinned,
}

impl<'a> MetaRequestOptionsInner<'a> {
    /// Convert from user_data in a callback to a reference to this struct. Safety: Don't use except
    /// in a MetaRequest callback. The lifetime 'a of the returned [MetaRequestOptionsInner] is
    /// unconstrained, so make sure that the lifetime of the returned reference does not outlive it.
    unsafe fn from_user_data_ptr(user_data: *mut libc::c_void) -> &'a mut Self {
        (user_data as *mut Self).as_mut().unwrap()
    }

    /// Convert from user_data in a callback to an owned Box holding this struct, so it will be
    /// freed when dropped.
    /// Safety: don't use except in the shutdown callback, once we are certain not to be called back again.
    unsafe fn from_user_data_ptr_owned(user_data: *mut libc::c_void) -> Box<Self> {
        Box::from_raw(user_data as *mut Self)
    }
}

impl<'a> Debug for MetaRequestOptionsInner<'a> {
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
pub struct MetaRequestOptions<'a>(Pin<Box<MetaRequestOptionsInner<'a>>>);

impl<'a> MetaRequestOptions<'a> {
    /// Create a new default options struct. It follows the builder pattern so clients can use
    /// methods to set various options.
    pub fn new() -> Self {
        // Create the default options, binding the callbacks to our predefined callback shims.
        // Set user_data to null first, since we need to create the Box first to find out what
        // the address of the inner struct is.
        let options = Box::new(MetaRequestOptionsInner {
            inner: aws_s3_meta_request_options {
                headers_callback: Some(meta_request_headers_callback),
                body_callback: Some(meta_request_receive_body_callback),
                finish_callback: Some(meta_request_finish_callback),
                shutdown_callback: Some(meta_request_shutdown_callback),
                user_data: std::ptr::null_mut(), // Set to null until the Box is made.
                ..Default::default()
            },
            message: None,
            signing_config: None,
            on_headers: None,
            on_body: None,
            on_finish: None,
            _pinned: Default::default(),
        });

        // Pin the options in-place. This is because it's about to become self-referential.
        let mut options = Box::into_pin(options);

        // Now set the user_data to a self-referential pointer to the options struct.
        // SAFETY: We're setting up the struct to be self-referential, and we're not moving out
        // of the struct, so the unchecked deref of the pinned pointer is okay.
        unsafe {
            let options = Pin::get_unchecked_mut(Pin::as_mut(&mut options));
            options.inner.user_data = options as *mut MetaRequestOptionsInner as *mut libc::c_void;
        }

        Self(options)
    }

    /// Set the message of the request.
    pub fn message(&mut self, message: Message<'a>) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.message = Some(message);
        options.inner.message = options.message.as_mut().unwrap().inner.as_ptr();
        self
    }

    /// Set the signing config used for this message. Not public because we copy it from the client
    /// when making a request.
    fn signing_config(&mut self, signing_config: SigningConfig) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.signing_config = Some(signing_config);
        options.inner.signing_config =
            options.signing_config.as_mut().unwrap().to_inner_ptr() as *mut aws_signing_config_aws;
        self
    }

    /// Provide a callback to run when the request's headers arrive. Given (headers, response_status)
    pub fn on_headers(&mut self, callback: impl FnMut(&Headers, i32) + Send + 'static) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_headers = Some(Box::new(callback));
        self
    }

    /// Provide a callback to run when the request's body arrives.
    pub fn on_body(&mut self, callback: impl FnMut(u64, &[u8]) + Send + 'static) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_body = Some(Box::new(callback));
        self
    }

    /// Provide a callback to run when the request completes.
    pub fn on_finish(&mut self, callback: impl FnOnce(MetaRequestResult) + Send + 'static) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_finish = Some(Box::new(callback));
        self
    }

    /// Set the type of this request
    pub fn request_type(&mut self, request_type: MetaRequestType) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.inner.type_ = request_type.into();
        self
    }
}

impl<'a> Default for MetaRequestOptions<'a> {
    fn default() -> Self {
        Self::new()
    }
}

/// What transformation to apply to a single [MetaRequest] to transform it into a collection of
/// requests to S3.
#[derive(Debug)]
pub enum MetaRequestType {
    /// Send the request as-is (no transformation)
    Default,
    /// Split the GetObject request into a series of ranged requests executed in parallel
    GetObject,
    /// Split the PutObject request into multi-part uploads executed in parallel
    PutObject,
    /// Perform a multi-part copy using multiple UploadPartCopy requests executed in parallel
    CopyObject,
}

impl From<MetaRequestType> for aws_s3_meta_request_type {
    fn from(typ: MetaRequestType) -> Self {
        match typ {
            MetaRequestType::Default => aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT,
            MetaRequestType::GetObject => aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_GET_OBJECT,
            MetaRequestType::PutObject => aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_PUT_OBJECT,
            MetaRequestType::CopyObject => aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_COPY_OBJECT,
        }
    }
}

/// SAFETY: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_headers_callback(
    _request: *mut aws_s3_meta_request,
    headers: *const aws_http_headers,
    response_status: i32,
    user_data: *mut libc::c_void,
) -> i32 {
    // SAFETY: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    if let Some(callback) = user_data.on_headers.as_mut() {
        let headers = NonNull::new(headers as *mut aws_http_headers).expect("Got headers == NULL in request callback");
        let headers = Headers::from_crt(headers);
        callback(&headers, response_status);
    }

    AWS_OP_SUCCESS
}

/// SAFETY: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_receive_body_callback(
    _request: *mut aws_s3_meta_request,
    body: *const aws_byte_cursor,
    range_start: u64,
    user_data: *mut libc::c_void,
) -> i32 {
    // SAFETY: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    if let Some(callback) = user_data.on_body.as_mut() {
        let slice: &[u8] = aws_byte_cursor_as_slice(&*body);
        callback(range_start, slice);
    }

    AWS_OP_SUCCESS
}

/// SAFETY: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_finish_callback(
    _request: *mut aws_s3_meta_request,
    result: *const aws_s3_meta_request_result,
    user_data: *mut libc::c_void,
) {
    let result = result.as_ref().expect("result cannot be NULL");

    // SAFETY: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    // take ownership of the callback, since it can only be called once.
    if let Some(callback) = user_data.on_finish.take() {
        callback(MetaRequestResult::from_crt_result(result));
    }
}

/// Safety: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_shutdown_callback(user_data: *mut libc::c_void) {
    // Take back ownership of the user data so it will be freed when dropped.
    // SAFETY: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr_owned(user_data);

    // SAFETY: at this point, we shouldn't receieve any more callbacks for this request.
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
        // SAFETY: we will no longer use the pointer after this MetaRequest is dropped, so it's safe
        // to give up our refcount on it now.
        unsafe {
            aws_s3_meta_request_release(self.inner.as_ptr());
        }
    }
}

/// Client metrics which represent current workload of a client.
/// Overall, num_requests_tracked_requests shows total number of requests being processed by the client at a time.
/// It can be broken down into these numbers by states of the client.
///     (1) num_requests_being_prepared: this is the first state when CRT receives requests and begins preparing them.
///     (2) request_queue_size: prepared requests are added into the request_queue, waiting to be assigned to connections.
///     (3) num_total_network_io: requests are removed from the request_queue and sent over the network.
///         We can also see number of requests by their meta request types.
///         (3.1) num_auto_default_network_io
///         (3.2) num_auto_ranged_get_network_io
///         (3.3) num_auto_ranged_put_network_io
///         (3.4) num_auto_ranged_copy_network_io
///     (4) num_requests_stream_queued_waiting: responses from the server are added into meta request priority queue, waiting to be streamed.
///     (5) num_requests_streaming: responses are removed from the queue and streamed back to the callers.
#[derive(Debug, Default)]
#[non_exhaustive]
pub struct ClientMetrics {
    /// Number of overall requests currently being processed by the client.
    pub num_requests_tracked_requests: u32,

    /// Number of requests currently being prepared.
    pub num_requests_being_prepared: u32,

    /// Number of requests in the request_queue linked_list.
    pub request_queue_size: u32,

    /// Number of requests being sent/received over network for meta request type DEFAULT.
    pub num_auto_default_network_io: u32,

    /// Number of requests being sent/received over network for meta request type GET.
    pub num_auto_ranged_get_network_io: u32,

    /// Number of requests being sent/received over network for meta request type PUT.
    pub num_auto_ranged_put_network_io: u32,

    /// Number of requests being sent/received over network for meta request type COPY.
    pub num_auto_ranged_copy_network_io: u32,

    /// Number of requests sitting in their meta request priority queue, waiting to be streamed.
    pub num_requests_stream_queued_waiting: u32,

    /// Number of requests currently scheduled to be streamed or are actively being streamed.
    pub num_requests_streaming: u32,
}

impl ClientMetrics {
    /// Total number of requests being sent/received over network.
    pub fn num_total_network_io(&self) -> u32 {
        self.num_auto_default_network_io
            + self.num_auto_ranged_get_network_io
            + self.num_auto_ranged_put_network_io
            + self.num_auto_ranged_copy_network_io
    }
}

impl Client {
    /// Create a new S3 [Client].
    pub fn new(allocator: &Allocator, config: ClientConfig) -> Result<Self, Error> {
        s3_library_init(allocator);

        // SAFETY: `config` is moved into the [Client] on success, so `config.inner` (and the values
        // inside) are guaranteed to live at least as long as this [Client] does. `allocator` is
        // guaranteed to be a valid allocator because of the type-safe wrapper.
        let inner = unsafe { aws_s3_client_new(allocator.inner.as_ptr(), &config.inner).ok_or_last_error()? };

        Ok(Self { inner, config })
    }

    /// Make a meta request to S3 using this [Client]. A meta request is an HTTP request that
    /// the CRT might internally split up into multiple requests for performance.
    pub fn make_meta_request(&self, mut options: MetaRequestOptions) -> Result<MetaRequest, Error> {
        // SAFETY: The inner struct pointed to by MetaRequestOptions will live as long as the
        // request does, since we only drop it in the shutdown callback. That struct owns everything
        // related to the request, like the message, signing config, etc.
        unsafe {
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

    /// Poll [ClientMetrics] from underlying CRT client.
    pub fn poll_client_metrics(&self) -> ClientMetrics {
        // SAFETY: aws_s3_client is guaranteed to be initialized and dereferencable as long as Client lives
        let client = unsafe { self.inner.as_ref() };
        let stats = client.stats;

        let num_requests_tracked_requests = stats.num_requests_in_flight.value as u32;

        let num_auto_ranged_get_network_io =
            Client::get_num_requests_network_io(client, aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_GET_OBJECT);

        let num_auto_ranged_put_network_io =
            Client::get_num_requests_network_io(client, aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_PUT_OBJECT);

        let num_auto_default_network_io =
            Client::get_num_requests_network_io(client, aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

        let num_auto_ranged_copy_network_io =
            Client::get_num_requests_network_io(client, aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_COPY_OBJECT);

        let num_requests_stream_queued_waiting = stats.num_requests_stream_queued_waiting.value as u32;

        let num_requests_streaming = stats.num_requests_streaming.value as u32;

        let num_requests_being_prepared = client.threaded_data.num_requests_being_prepared;

        let request_queue_size = client.threaded_data.request_queue_size;

        ClientMetrics {
            num_requests_tracked_requests,
            num_requests_being_prepared,
            request_queue_size,
            num_auto_default_network_io,
            num_auto_ranged_get_network_io,
            num_auto_ranged_put_network_io,
            num_auto_ranged_copy_network_io,
            num_requests_stream_queued_waiting,
            num_requests_streaming,
        }
    }

    fn get_num_requests_network_io(client: &aws_s3_client, meta_request_type: aws_s3_meta_request_type) -> u32 {
        let mut num_requests_network_io: u32 = 0;
        if meta_request_type == aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_MAX {
            let max_req_type = aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_MAX as usize;
            for i in 0..max_req_type {
                num_requests_network_io += client.stats.num_requests_network_io[i].value as u32;
            }
        } else {
            let meta_request_type = meta_request_type as usize;
            num_requests_network_io = client.stats.num_requests_network_io[meta_request_type].value as u32
        }
        num_requests_network_io
    }
}

impl Drop for Client {
    fn drop(&mut self) {
        // SAFETY: `self.inner` points to a valid s3_client, and when this [Client] is dropped, it's
        // safe to decrement the reference counter by one.
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

    /// Error HTTP body, if present.
    pub error_response_headers: Option<Headers>,

    /// Error HTTP response, if present.
    pub error_response_body: Option<OsString>,
}

impl MetaRequestResult {
    /// Returns whether this HTTP request result represents an error.
    pub fn is_err(&self) -> bool {
        self.crt_error.is_err()
    }

    /// Convert the CRT's meta request result struct into a safe, owned result.
    /// SAFETY: This copies from the raw pointer inside of the request result, so only call on
    /// results given to us from the CRT.
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

    // SAFETY: we copied the region into the signing_config (`region.to_owned()` above), so the byte
    // cursor we create here will point to bytes that are valid as long as this SigningConfig is.
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
