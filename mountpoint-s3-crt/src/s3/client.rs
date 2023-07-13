//! A client for high-throughput access to Amazon S3

use crate::auth::credentials::CredentialsProvider;
use crate::auth::signing_config::{SigningConfig, SigningConfigInner};
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::uri::Uri;
use crate::http::request_response::{Headers, Message};
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::retry_strategy::RetryStrategy;
use crate::s3::s3_library_init;
use crate::{aws_byte_cursor_as_slice, CrtError, ResultExt, ToAwsByteCursor};
use mountpoint_s3_crt_sys::*;
use std::ffi::{OsStr, OsString};
use std::fmt::Debug;
use std::marker::PhantomPinned;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::ptr::NonNull;
use std::sync::Arc;
use std::time::Duration;

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
        self.inner.part_size = part_size as u64;
        self
    }

    /// If the part size needs to be adjusted for service limits, this is the maximum size it will be adjusted to.
    pub fn max_part_size(&mut self, max_part_size: usize) -> &mut Self {
        self.inner.max_part_size = max_part_size as u64;
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

/// Callback for telemetry received as part of a successful meta request.
type TelemetryCallback = Box<dyn Fn(&RequestMetrics) + Send>;

/// Callback for when headers are received as part of a successful HTTP request. Given (headers, response_status).
type HeadersCallback = Box<dyn FnMut(&Headers, i32) + Send>;

/// Callback for when part of the response body is received. Given (range_start, data).
type BodyCallback = Box<dyn FnMut(u64, &[u8]) + Send>;

/// Callback for reviewing an upload before it completes.
type UploadReviewCallback = Box<dyn FnOnce(UploadReview) -> bool + Send>;

/// Callback for when the request is finished. Given (error_code, optional_error_body).
type FinishCallback = Box<dyn FnOnce(MetaRequestResult) + Send>;

/// Options for meta requests to S3. This is not a public interface, since clients should always
/// be using the [MetaRequestOptions] wrapper, which pins this struct behind a pointer.
struct MetaRequestOptionsInner {
    /// Inner struct to pass to CRT functions.
    inner: aws_s3_meta_request_options,

    /// Owned copy of the message, if provided.
    message: Option<Message>,

    /// Owned copy of the endpoint URI, if provided
    endpoint: Option<Uri>,

    /// Owned signing config, if provided.
    signing_config: Option<SigningConfig>,

    /// Owned checksum config, if provided.
    checksum_config: Option<ChecksumConfig>,

    /// Telemetry callback, if provided
    on_telemetry: Option<TelemetryCallback>,

    /// Headers callback, if provided.
    on_headers: Option<HeadersCallback>,

    /// Body callback, if provided.
    on_body: Option<BodyCallback>,

    /// Upload review callback, if provided (and not already called, since it's FnOnce).
    on_upload_review: Option<UploadReviewCallback>,

    /// Finish callback, if provided (and not already called, since it's FnOnce).
    on_finish: Option<FinishCallback>,

    /// Pin this struct because inner.user_data will be a pointer to this object.
    _pinned: PhantomPinned,
}

impl<'a> MetaRequestOptionsInner {
    /// Convert from user_data in a callback to a reference to this struct.
    ///
    /// ## Safety
    ///
    /// Don't use except in a MetaRequest callback. The lifetime 'a of the returned
    /// [MetaRequestOptionsInner] is unconstrained, so the caller must make sure that the lifetime
    /// of the returned reference does not outlive the [MetaRequestOptionsInner].
    unsafe fn from_user_data_ptr(user_data: *mut libc::c_void) -> &'a mut Self {
        (user_data as *mut Self).as_mut().unwrap()
    }

    /// Convert from user_data in a callback to an owned Box holding this struct, so it will be
    /// freed when dropped.
    ///
    /// ## Safety
    ///
    /// Don't use except in the shutdown callback, once we are certain not to be called back again.
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
                telemetry_callback: Some(meta_request_telemetry_callback),
                headers_callback: Some(meta_request_headers_callback),
                body_callback: Some(meta_request_receive_body_callback),
                finish_callback: Some(meta_request_finish_callback),
                shutdown_callback: Some(meta_request_shutdown_callback),
                upload_review_callback: Some(meta_request_upload_review_callback),
                user_data: std::ptr::null_mut(), // Set to null until the Box is made.
                ..Default::default()
            },
            message: None,
            endpoint: None,
            signing_config: None,
            checksum_config: None,
            on_telemetry: None,
            on_headers: None,
            on_body: None,
            on_upload_review: None,
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
    pub fn message(&mut self, message: Message) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.message = Some(message);
        options.inner.message = options.message.as_mut().unwrap().inner.as_ptr();

        if let Some(send_async_stream) = options.message.as_mut().unwrap().body_stream() {
            options.inner.send_async_stream = send_async_stream.as_inner_ptr();
        }

        self
    }

    /// Set the endpoint of the request. If set, the host portion of the endpoint URI must match the
    /// "Host" header in the `message`.
    pub fn endpoint(&mut self, endpoint: Uri) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.endpoint = Some(endpoint);
        options.inner.endpoint = options.endpoint.as_mut().unwrap().to_inner_ptr() as *mut aws_uri;
        self
    }

    /// Set the checksum config used for this message.
    pub fn checksum_config(&mut self, checksum_config: ChecksumConfig) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.checksum_config = Some(checksum_config);
        options.inner.checksum_config =
            options.checksum_config.as_mut().unwrap().to_inner_ptr() as *mut aws_s3_checksum_config;
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

    /// Provide a callback to run when telemetry for individual requests made by this meta request
    /// arrives. The callback is invoked once for each request made, after the request completes
    /// (including failures). This callback may be invoked concurrently by multiple threads for
    /// different requests.
    pub fn on_telemetry(&mut self, callback: impl Fn(&RequestMetrics) + Send + 'static) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_telemetry = Some(Box::new(callback));
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

    /// Provide a callback to run when the upload request is ready to complete.
    pub fn on_upload_review(&mut self, callback: impl FnOnce(UploadReview) -> bool + Send + 'static) -> &mut Self {
        // SAFETY: we aren't moving out of the struct.
        let options = unsafe { Pin::get_unchecked_mut(Pin::as_mut(&mut self.0)) };
        options.on_upload_review = Some(Box::new(callback));
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

impl Default for MetaRequestOptions {
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
unsafe extern "C" fn meta_request_telemetry_callback(
    _request: *mut aws_s3_meta_request,
    metrics: *mut aws_s3_request_metrics,
    user_data: *mut libc::c_void,
) {
    // SAFETY: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    if let Some(callback) = user_data.on_telemetry.as_ref() {
        let metrics = NonNull::new(metrics as *mut aws_s3_request_metrics).expect("request metrics is never null");
        let metrics = RequestMetrics { inner: metrics };
        // The docs say "`metrics` is only valid for the duration of the callback", so we need to
        // pass a reference here.
        callback(&metrics);
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
        let headers = NonNull::new(headers as *mut aws_http_headers).expect("request headers is never null");
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

/// Safety: Don't call this function directly, only called by the CRT as a callback.
unsafe extern "C" fn meta_request_upload_review_callback(
    _request: *mut aws_s3_meta_request,
    upload_review: *const aws_s3_upload_review,
    user_data: *mut libc::c_void,
) -> i32 {
    // SAFETY: user_data always will be a MetaRequestOptionsInner since that's what we set it to
    // in MetaRequestOptions::new.
    let user_data = MetaRequestOptionsInner::from_user_data_ptr(user_data);

    let Some(callback) = user_data.on_upload_review.take() else {
        return AWS_OP_SUCCESS;
    };

    let upload_review = upload_review
        .as_ref()
        .expect("CRT should provide a valid upload_review");
    if callback(UploadReview::new(upload_review)) {
        AWS_OP_SUCCESS
    } else {
        aws_raise_error(aws_s3_errors::AWS_ERROR_S3_CANCELED as i32)
    }
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
        // SAFETY: The `aws_s3_client` in `self.inner` is guaranteed to be initialized and
        // dereferencable as long as Client lives. The `aws_atomic_load_int` calls are safe because
        // they're always `int`s, whose lifetime belongs to the stats struct.
        unsafe {
            let client = self.inner.as_ref();
            let stats = client.stats;

            let num_requests_tracked_requests = aws_atomic_load_int(&stats.num_requests_in_flight) as u32;

            let num_auto_ranged_get_network_io = Client::get_num_requests_network_io(
                client,
                aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_GET_OBJECT,
            );

            let num_auto_ranged_put_network_io = Client::get_num_requests_network_io(
                client,
                aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_PUT_OBJECT,
            );

            let num_auto_default_network_io =
                Client::get_num_requests_network_io(client, aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

            let num_auto_ranged_copy_network_io = Client::get_num_requests_network_io(
                client,
                aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_COPY_OBJECT,
            );

            let num_requests_stream_queued_waiting =
                aws_atomic_load_int(&stats.num_requests_stream_queued_waiting) as u32;

            let num_requests_streaming = aws_atomic_load_int(&stats.num_requests_streaming) as u32;

            // These are "threaded data" and so technically we don't know that it's safe to read them
            // here, but it's just metrics data so we're not too concerned.
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
    }

    fn get_num_requests_network_io(client: &aws_s3_client, meta_request_type: aws_s3_meta_request_type) -> u32 {
        let mut num_requests_network_io: u32 = 0;
        if meta_request_type == aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_MAX {
            let max_req_type = aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_MAX as usize;
            for i in 0..max_req_type {
                // SAFETY: these atomics are known to be integers, and `client` is valid
                let n = unsafe { aws_atomic_load_int(&client.stats.num_requests_network_io[i]) } as u32;
                num_requests_network_io += n;
            }
        } else {
            let meta_request_type = meta_request_type as usize;
            // SAFETY: these atomics are known to be integers, and `client` is valid
            let n = unsafe { aws_atomic_load_int(&client.stats.num_requests_network_io[meta_request_type]) } as u32;
            num_requests_network_io = n;
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

/// Metrics for an individual request
#[derive(Debug)]
pub struct RequestMetrics {
    inner: NonNull<aws_s3_request_metrics>,
}

impl RequestMetrics {
    /// Return the type of this request
    pub fn request_type(&self) -> RequestType {
        let mut out: aws_s3_request_type = aws_s3_request_type::AWS_S3_REQUEST_TYPE_MAX;
        // SAFETY: `inner` is a valid aws_s3_request_metrics
        unsafe { aws_s3_request_metrics_get_request_type(self.inner.as_ptr(), &mut out) };
        out.into()
    }

    /// Return the request ID for this request, or None if unavailable (e.g. the request failed
    /// before sending).
    pub fn request_id(&self) -> Option<String> {
        let mut out: *const aws_string = std::ptr::null();
        // SAFETY: `inner` is a valid aws_s3_request_metrics
        unsafe {
            aws_s3_request_metrics_get_request_id(self.inner.as_ptr(), &mut out)
                .ok_or_last_error()
                .ok()?
        };
        assert!(!out.is_null(), "request ID should be available if call succeeded");
        // SAFETY: `out` is now a valid pointer to an aws_string, and we'll copy the bytes
        // out of it so it won't live beyond this function call
        unsafe {
            let byte_cursor = aws_byte_cursor_from_string(out);
            let os_str = OsStr::from_bytes(aws_byte_cursor_as_slice(&byte_cursor));
            Some(os_str.to_string_lossy().into_owned())
        }
    }

    /// Return the response status code for this request, or None if unavailable (e.g. the
    /// request failed before sending).
    pub fn status_code(&self) -> Option<i32> {
        let mut out: i32 = 0;
        // SAFETY: `inner` is a valid aws_s3_request_metrics
        unsafe {
            aws_s3_request_metrics_get_response_status_code(self.inner.as_ptr(), &mut out)
                .ok_or_last_error()
                .ok()?
        };
        Some(out)
    }

    /// Return the response headers for this request, or None if unavailable (e.g. the request
    /// failed before sending).
    pub fn response_headers(&self) -> Option<Headers> {
        let mut out: *mut aws_http_headers = std::ptr::null_mut();
        // SAFETY: `inner` is a valid aws_s3_request_metrics
        unsafe {
            aws_s3_request_metrics_get_response_headers(self.inner.as_ptr(), &mut out)
                .ok_or_last_error()
                .ok()?
        };
        assert!(!out.is_null(), "headers should be available if call succeeded");
        // SAFETY: `out` is now a valid pointer to an aws_http_headers, and [Headers::from_crt]
        // will acquire a reference to keep it alive after this function call, so it's safe to
        // return the owned version here.
        unsafe { Some(Headers::from_crt(NonNull::new_unchecked(out))) }
    }

    /// Return the total duration for this request
    pub fn total_duration(&self) -> Duration {
        let mut out: u64 = 0;
        // SAFETY: `inner` is a valid aws_s3_request_metrics
        unsafe { aws_s3_request_metrics_get_total_duration_ns(self.inner.as_ptr(), &mut out) };
        Duration::from_nanos(out)
    }

    /// Return the first-byte latency for this request (time first byte received - time last byte
    /// sent), or None if unavailable (e.g. the request failed before sending).
    pub fn time_to_first_byte(&self) -> Option<Duration> {
        let mut send_end: u64 = 0;
        let mut receive_start: u64 = 0;
        // SAFETY: `inner` is a valid aws_s3_request_metrics
        unsafe {
            aws_s3_request_metrics_get_send_end_timestamp_ns(self.inner.as_ptr(), &mut send_end)
                .ok_or_last_error()
                .ok()?;
            aws_s3_request_metrics_get_receive_start_timestamp_ns(self.inner.as_ptr(), &mut receive_start)
                .ok_or_last_error()
                .ok()?;
        };
        Some(Duration::from_nanos(receive_start.saturating_sub(send_end)))
    }
}

/// The type of an S3 request reported by [RequestMetrics]. A single meta request might perform
/// multiple requests to various S3 APIs; this type can be used to distinguish them.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RequestType {
    /// Same as the original HTTP request passed to [Client::make_meta_request]
    Default,
    /// HeadObject: https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html
    HeadObject,
    /// GetObject: https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
    GetObject,
    /// ListParts: https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
    ListParts,
    /// CreateMultipartUpload: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html
    CreateMultipartUpload,
    /// UploadPart: https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html
    UploadPart,
    /// AbortMultipartUpload: https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
    AbortMultipartUpload,
    /// CompleteMultipartUpload: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html
    CompleteMultipartUpload,
    /// UploadPartCopy: https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html
    UploadPartCopy,
}

impl From<aws_s3_request_type> for RequestType {
    fn from(value: aws_s3_request_type) -> Self {
        use aws_s3_request_type::*;
        match value {
            AWS_S3_REQUEST_TYPE_DEFAULT => RequestType::Default,
            AWS_S3_REQUEST_TYPE_HEAD_OBJECT => RequestType::HeadObject,
            AWS_S3_REQUEST_TYPE_GET_OBJECT => RequestType::GetObject,
            AWS_S3_REQUEST_TYPE_LIST_PARTS => RequestType::ListParts,
            AWS_S3_REQUEST_TYPE_CREATE_MULTIPART_UPLOAD => RequestType::CreateMultipartUpload,
            AWS_S3_REQUEST_TYPE_UPLOAD_PART => RequestType::UploadPart,
            AWS_S3_REQUEST_TYPE_ABORT_MULTIPART_UPLOAD => RequestType::AbortMultipartUpload,
            AWS_S3_REQUEST_TYPE_COMPLETE_MULTIPART_UPLOAD => RequestType::CompleteMultipartUpload,
            AWS_S3_REQUEST_TYPE_UPLOAD_PART_COPY => RequestType::UploadPartCopy,
            _ => panic!("unknown request type {:?}", value),
        }
    }
}

/// Create a new [SigningConfig] with the default configuration for signing S3 requests to a region
/// using the given [CredentialsProvider]
pub fn init_default_signing_config(region: &str, credentials_provider: CredentialsProvider) -> SigningConfig {
    let mut signing_config = Box::new(SigningConfigInner {
        inner: Default::default(),
        region: region.to_owned().into(),
        credentials_provider,
        _pinned: Default::default(),
    });

    let credentials_provider = signing_config.credentials_provider.inner.as_ptr();
    // SAFETY: we copied the region into the signing_config (`region.to_owned()` above), so the byte
    // cursor we create here will point to bytes that are valid as long as this SigningConfig is.
    // singing_config owns `credential_provider` that is valid as long as this SingingConfig is.
    unsafe {
        let region_cursor = signing_config.region.as_aws_byte_cursor();

        aws_s3_init_default_signing_config(&mut signing_config.inner, region_cursor, credentials_provider);
    }
    signing_config.inner.flags.set_use_double_uri_encode(false as u32);

    SigningConfig(Arc::new(Box::into_pin(signing_config)))
}

/// The checksum configuration.
#[derive(Debug, Clone, Default)]
pub struct ChecksumConfig {
    /// The struct we can pass into the CRT's functions.
    inner: aws_s3_checksum_config,
}

impl ChecksumConfig {
    /// Create a [ChecksumConfig] enabling Crc32c trailing checksums in PUT requests.
    pub fn trailing_crc32c() -> Self {
        Self {
            inner: aws_s3_checksum_config {
                location: aws_s3_checksum_location::AWS_SCL_TRAILER,
                checksum_algorithm: aws_s3_checksum_algorithm::AWS_SCA_CRC32C,
                ..Default::default()
            },
        }
    }

    /// Get out the inner pointer to the checksum config
    pub(crate) fn to_inner_ptr(&self) -> *const aws_s3_checksum_config {
        &self.inner
    }
}

/// Checksum algorithm.
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum ChecksumAlgorithm {
    /// Crc32c checksum.
    Crc32c,
    /// Crc32 checksum.
    Crc32,
    /// Sha1 checksum.
    Sha1,
    /// Sha256 checksum.
    Sha256,
}

impl ChecksumAlgorithm {
    fn from_aws_s3_checksum_algorithm(algorithm: aws_s3_checksum_algorithm) -> Option<Self> {
        match algorithm {
            aws_s3_checksum_algorithm::AWS_SCA_NONE => None,
            aws_s3_checksum_algorithm::AWS_SCA_CRC32C => Some(ChecksumAlgorithm::Crc32c),
            aws_s3_checksum_algorithm::AWS_SCA_CRC32 => Some(ChecksumAlgorithm::Crc32),
            aws_s3_checksum_algorithm::AWS_SCA_SHA1 => Some(ChecksumAlgorithm::Sha1),
            aws_s3_checksum_algorithm::AWS_SCA_SHA256 => Some(ChecksumAlgorithm::Sha256),
            _ => unreachable!("unknown aws_s3_checksum_algorithm"),
        }
    }
}

/// Info for the caller to review before an upload completes.
#[derive(Debug)]
pub struct UploadReview {
    /// Info about each part uploaded.
    pub parts: Vec<UploadReviewPart>,
    /// The checksum algorithm used.
    pub checksum_algorithm: Option<ChecksumAlgorithm>,
}

impl UploadReview {
    fn new(review: &aws_s3_upload_review) -> Self {
        let checksum_algorithm = ChecksumAlgorithm::from_aws_s3_checksum_algorithm(review.checksum_algorithm);
        let count = review.part_count;
        let mut parts = Vec::new();
        for i in 0..count {
            // SAFETY: `part_array` is an array of length `count`.
            let part = unsafe { &*review.part_array.add(i) };
            parts.push(UploadReviewPart::new(part));
        }
        Self {
            parts,
            checksum_algorithm,
        }
    }
}

/// Info about a single part, for the caller to review before the upload completes.
#[derive(Debug)]
pub struct UploadReviewPart {
    /// Size in bytes of this part.
    pub size: u64,

    /// Checksum string (usually base64-encoded), if computed.
    pub checksum: Option<String>,
}

impl UploadReviewPart {
    fn new(part: &aws_s3_upload_part_review) -> Self {
        // SAFETY: `part.checksum` is a valid aws_byte_cursor. The returned slice is only used in current scope.
        let slice = unsafe { aws_byte_cursor_as_slice(&part.checksum) };
        let checksum = if slice.is_empty() {
            None
        } else {
            let str = std::str::from_utf8(slice).expect("Checksum should be a valid UTF-8 string.");
            Some(str.to_owned())
        };
        let size = part.size;
        Self { size, checksum }
    }
}
