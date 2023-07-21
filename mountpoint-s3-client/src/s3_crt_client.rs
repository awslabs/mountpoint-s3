use std::ffi::{OsStr, OsString};
use std::future::Future;
use std::ops::Range;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};
use std::time::{Duration, Instant};

use mountpoint_s3_crt::auth::credentials::{
    CredentialsProvider, CredentialsProviderChainDefaultOptions, CredentialsProviderProfileOptions,
};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::uri::Uri;
use mountpoint_s3_crt::http::request_response::{Header, Headers, Message};
use mountpoint_s3_crt::io::async_stream::AsyncInputStream;
use mountpoint_s3_crt::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use mountpoint_s3_crt::io::event_loop::EventLoopGroup;
use mountpoint_s3_crt::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use mountpoint_s3_crt::io::retry_strategy::{ExponentialBackoffJitterMode, RetryStrategy, StandardRetryOptions};
use mountpoint_s3_crt::s3::client::{
    init_default_signing_config, ChecksumConfig, Client, ClientConfig, MetaRequestOptions, MetaRequestResult,
    MetaRequestType, RequestType,
};

use async_trait::async_trait;
use futures::channel::oneshot;
use mountpoint_s3_crt::s3::endpoint_resolver::{RequestContext, ResolverError, RuleEngine};
use percent_encoding::{percent_encode, AsciiSet, NON_ALPHANUMERIC};
use pin_project::pin_project;
use thiserror::Error;
use tracing::{error, trace, Span};

use crate::build_info;
use crate::object_client::*;
use crate::s3_crt_client::get_object::S3GetObjectRequest;
use crate::s3_crt_client::put_object::S3PutObjectRequest;

macro_rules! request_span {
    ($self:expr, $method:expr, $($field:tt)*) => {{
        let counter = $self.next_request_counter();
        let span = tracing::debug_span!($method, id = counter, $($field)*);
        span.in_scope(|| tracing::debug!("new request"));
        span
    }};
    ($self:expr, $method:expr) => { request_span!($self, $method,) };
}

pub(crate) mod delete_object;
pub(crate) mod get_object;
pub(crate) mod get_object_attributes;
pub(crate) mod head_bucket;

pub(crate) mod head_object;
pub(crate) mod list_objects;
pub(crate) mod put_object;

/// `tracing` doesn't allow dynamic levels but we want to dynamically choose the log level for
/// requests based on their response status. https://github.com/tokio-rs/tracing/issues/372
macro_rules! event {
    ($level:expr, $($args:tt)*) => {
        match $level {
            ::tracing::Level::ERROR => ::tracing::event!(::tracing::Level::ERROR, $($args)*),
            ::tracing::Level::WARN => ::tracing::event!(::tracing::Level::WARN, $($args)*),
            ::tracing::Level::INFO => ::tracing::event!(::tracing::Level::INFO, $($args)*),
            ::tracing::Level::DEBUG => ::tracing::event!(::tracing::Level::DEBUG, $($args)*),
            ::tracing::Level::TRACE => ::tracing::event!(::tracing::Level::TRACE, $($args)*),
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum AddressingStyle {
    /// Use virtual addressing if possible, but fall back to path addressing if necessary
    #[default]
    Automatic,
    /// Always use virtual addressing
    Virtual,
    /// Always use path addressing
    Path,
}

#[derive(Debug, Clone)]
pub struct EndpointConfig {
    region: String,
    use_fips: bool,
    use_accelerate: bool,
    use_dual_stack: bool,
    endpoint: Option<Uri>,
    addressing_style: AddressingStyle,
}

impl EndpointConfig {
    /// Create a new endpoint configuration for a given region
    pub fn new(region: &str) -> Self {
        Self {
            region: region.to_owned(),
            use_fips: false,
            use_accelerate: false,
            use_dual_stack: false,
            endpoint: None,
            addressing_style: AddressingStyle::Automatic,
        }
    }

    /// Set region for a given endpoint config
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn region(mut self, region: &str) -> Self {
        self.region = region.to_owned();
        self
    }

    /// use FIPS config for S3
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn use_fips(mut self, fips: bool) -> Self {
        self.use_fips = fips;
        self
    }

    /// use Transfer Acceleration config for S3
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn use_accelerate(mut self, accelerate: bool) -> Self {
        self.use_accelerate = accelerate;
        self
    }

    /// use dual stack config for S3
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn use_dual_stack(mut self, dual_stack: bool) -> Self {
        self.use_dual_stack = dual_stack;
        self
    }

    /// Set predefined url for endpoint configuration
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn endpoint(mut self, endpoint: Uri) -> Self {
        self.endpoint = Some(endpoint);
        self
    }

    /// Set addressing style for endpoint configuration
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn addressing_style(mut self, addressing_style: AddressingStyle) -> Self {
        self.addressing_style = addressing_style;
        self
    }

    pub fn resolve_for_bucket(&self, bucket: &str) -> Result<Uri, EndpointError> {
        let allocator = Allocator::default();
        let mut endpoint_request_context = RequestContext::new(&allocator).unwrap();
        let endpoint_rule_engine = RuleEngine::new(&allocator).unwrap();

        endpoint_request_context
            .add_string(&allocator, "Region", &self.region)
            .unwrap();
        endpoint_request_context
            .add_string(&allocator, "Bucket", bucket)
            .unwrap();
        if let Some(endpoint_uri) = &self.endpoint {
            endpoint_request_context
                .add_string(&allocator, "Endpoint", endpoint_uri.as_os_str())
                .unwrap()
        };
        if self.use_fips {
            endpoint_request_context
                .add_boolean(&allocator, "UseFIPS", true)
                .unwrap()
        };
        if self.use_dual_stack {
            endpoint_request_context
                .add_boolean(&allocator, "UseDualStack", true)
                .unwrap()
        };
        if self.use_accelerate {
            endpoint_request_context
                .add_boolean(&allocator, "Accelerate", true)
                .unwrap()
        };
        if self.addressing_style == AddressingStyle::Path {
            endpoint_request_context
                .add_boolean(&allocator, "ForcePathStyle", true)
                .unwrap()
        };

        let resolved_endpoint = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .map_err(EndpointError::UnresolvedEndpoint)?;
        let endpoint_uri = resolved_endpoint.get_url();
        Uri::new_from_str(&allocator, endpoint_uri)
            .map_err(|e| EndpointError::InvalidUri(InvalidUriError::CouldNotParse(e)))
    }
}

#[derive(Debug, Error)]
pub enum EndpointError {
    #[error("invalid URI")]
    InvalidUri(#[from] InvalidUriError),
    #[error("endpoint could not be resolved")]
    UnresolvedEndpoint(#[from] ResolverError),
}

#[derive(Debug, Error)]
pub enum InvalidUriError {
    #[error("URI could not be parsed")]
    CouldNotParse(#[from] mountpoint_s3_crt::common::error::Error),
}

#[derive(Debug, Clone)]
pub struct S3ClientConfig {
    auth_config: S3ClientAuthConfig,
    throughput_target_gbps: f64,
    part_size: usize,
    endpoint_config: EndpointConfig,
    user_agent_prefix: Option<String>,
    request_payer: Option<String>,
    bucket_owner: Option<String>,
}

impl Default for S3ClientConfig {
    fn default() -> Self {
        Self {
            auth_config: Default::default(),
            throughput_target_gbps: 10.0,
            part_size: 8 * 1024 * 1024,
            endpoint_config: EndpointConfig::new("us-east-1"),
            user_agent_prefix: None,
            request_payer: None,
            bucket_owner: None,
        }
    }
}

impl S3ClientConfig {
    pub fn new() -> Self {
        Self::default()
    }

    /// Set the configuration for authenticating to S3
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn auth_config(mut self, auth_config: S3ClientAuthConfig) -> Self {
        self.auth_config = auth_config;
        self
    }

    /// Set the part size for multi-part operations to S3 (both PUT and GET)
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn part_size(mut self, part_size: usize) -> Self {
        self.part_size = part_size;
        self
    }

    /// Set the target throughput in Gbps for the S3 client
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn throughput_target_gbps(mut self, throughput_target_gbps: f64) -> Self {
        self.throughput_target_gbps = throughput_target_gbps;
        self
    }

    /// Set the endpoint configuration for endpoint resolution
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn endpoint_config(mut self, endpoint_config: EndpointConfig) -> Self {
        self.endpoint_config = endpoint_config;
        self
    }

    /// Set a prefix to prepend to the User-agent HTTP header for S3 requests
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn user_agent_prefix(mut self, user_agent_prefix: &str) -> Self {
        self.user_agent_prefix = Some(user_agent_prefix.to_owned());
        self
    }

    /// Set a value for the request payer HTTP header for S3 requests
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn request_payer(mut self, request_payer: &str) -> Self {
        self.request_payer = Some(request_payer.to_owned());
        self
    }

    /// Set an expected bucket owner value
    #[must_use = "S3ClientConfig follows a builder pattern"]
    pub fn bucket_owner(mut self, bucket_owner: &str) -> Self {
        self.bucket_owner = Some(bucket_owner.to_owned());
        self
    }
}

#[derive(Debug, Clone, Default)]
pub enum S3ClientAuthConfig {
    /// The default AWS credentials resolution chain, similar to the AWS CLI
    #[default]
    Default,
    /// Do not sign requests at all
    NoSigning,
    /// Explicitly load the given profile name from the AWS CLI configuration file
    Profile(String),
    /// Use a custom credentials provider
    Provider(CredentialsProvider),
}

#[derive(Debug, Clone)]
pub struct S3CrtClient {
    inner: Arc<S3CrtClientInner>,
}

impl S3CrtClient {
    pub fn new(config: S3ClientConfig) -> Result<Self, NewClientError> {
        Ok(Self {
            inner: Arc::new(S3CrtClientInner::new(config)?),
        })
    }

    pub fn event_loop_group(&self) -> EventLoopGroup {
        self.inner.event_loop_group.clone()
    }
}

#[derive(Debug)]
struct S3CrtClientInner {
    s3_client: Client,
    event_loop_group: EventLoopGroup,
    endpoint_config: EndpointConfig,
    allocator: Allocator,
    next_request_counter: AtomicU64,
    /// user_agent_header will be passed into CRT which add additional information "CRTS3NativeClient/0.1.x".
    /// Here it will add the user agent prefix and s3 client information.
    user_agent_header: String,
    request_payer: Option<String>,
    part_size: usize,
    bucket_owner: Option<String>,
}

impl S3CrtClientInner {
    fn new(config: S3ClientConfig) -> Result<Self, NewClientError> {
        let allocator = Allocator::default();

        let mut event_loop_group = EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

        let resolver_options = HostResolverDefaultOptions {
            max_entries: 8,
            event_loop_group: &mut event_loop_group,
        };

        let mut host_resolver = HostResolver::new_default(&allocator, &resolver_options).unwrap();

        let bootstrap_options = ClientBootstrapOptions {
            event_loop_group: &mut event_loop_group,
            host_resolver: &mut host_resolver,
        };

        let mut client_bootstrap = ClientBootstrap::new(&allocator, &bootstrap_options).unwrap();

        let mut client_config = ClientConfig::new();

        let mut retry_strategy_options = StandardRetryOptions::default(&mut event_loop_group);
        // Match the SDK "legacy" retry strategies
        retry_strategy_options.backoff_retry_options.max_retries = 3;
        retry_strategy_options.backoff_retry_options.backoff_scale_factor = Duration::from_millis(500);
        retry_strategy_options.backoff_retry_options.jitter_mode = ExponentialBackoffJitterMode::Full;
        let retry_strategy = RetryStrategy::standard(&allocator, &retry_strategy_options).unwrap();

        trace!("constructing client with auth config {:?}", config.auth_config);
        let credentials_provider = match config.auth_config {
            S3ClientAuthConfig::Default => {
                let credentials_chain_default_options = CredentialsProviderChainDefaultOptions {
                    bootstrap: &mut client_bootstrap,
                };
                Some(
                    CredentialsProvider::new_chain_default(&allocator, credentials_chain_default_options)
                        .map_err(NewClientError::ProviderFailure)?,
                )
            }
            S3ClientAuthConfig::NoSigning => None,
            S3ClientAuthConfig::Profile(profile_name) => {
                let credentials_profile_options = CredentialsProviderProfileOptions {
                    bootstrap: &mut client_bootstrap,
                    profile_name_override: &profile_name,
                };
                Some(
                    CredentialsProvider::new_profile(&allocator, credentials_profile_options)
                        .map_err(NewClientError::ProviderFailure)?,
                )
            }
            S3ClientAuthConfig::Provider(provider) => Some(provider),
        };

        let endpoint_config = config.endpoint_config;

        if let Some(credentials_provider) = credentials_provider {
            let signing_config = init_default_signing_config(&endpoint_config.region, credentials_provider);
            client_config.signing_config(signing_config);
        }

        client_config
            .client_bootstrap(client_bootstrap)
            .retry_strategy(retry_strategy);

        client_config.throughput_target_gbps(config.throughput_target_gbps);

        if !(5 * 1024 * 1024..=5 * 1024 * 1024 * 1024).contains(&config.part_size) {
            return Err(NewClientError::InvalidConfiguration(
                "part size must be at between 5MiB and 5GiB".into(),
            ));
        }
        client_config.part_size(config.part_size);

        let client_agent = format!("mountpoint-s3-client/{}", build_info::FULL_VERSION);
        let user_agent_header = match config.user_agent_prefix {
            Some(prefix) => format!("{prefix} {client_agent}"),
            None => client_agent,
        };

        let s3_client = Client::new(&allocator, client_config).unwrap();

        Ok(Self {
            allocator,
            s3_client,
            event_loop_group,
            endpoint_config,
            next_request_counter: AtomicU64::new(0),
            user_agent_header,
            request_payer: config.request_payer,
            part_size: config.part_size,
            bucket_owner: config.bucket_owner,
        })
    }

    /// Create a new HTTP request template for the given HTTP method and S3 bucket name.
    /// Pre-populates common headers used across all requests. Sets the "accept" header assuming the
    /// response should be XML; this header should be overwritten for requests like GET that return
    /// object data.
    fn new_request_template(&self, method: &str, bucket: &str) -> Result<S3Message, ConstructionError> {
        let uri = self.endpoint_config.resolve_for_bucket(bucket)?;
        let hostname = uri.host_name().to_str().unwrap();
        let path_prefix = uri.path().to_os_string().into_string().unwrap();
        let port = uri.host_port();
        let hostname_header = if port > 0 {
            format!("{}:{}", hostname, port)
        } else {
            hostname.to_string()
        };

        let mut message = Message::new_request(&self.allocator)?;
        message.set_request_method(method)?;
        message.add_header(&Header::new("Host", hostname_header))?;
        message.add_header(&Header::new("accept", "application/xml"))?;
        message.add_header(&Header::new("User-Agent", &self.user_agent_header))?;

        if let Some(ref payer) = self.request_payer {
            message.add_header(&Header::new("x-amz-request-payer", payer))?;
        }

        if let Some(ref owner) = self.bucket_owner {
            message.add_header(&Header::new("x-amz-expected-bucket-owner", owner))?;
        }

        Ok(S3Message {
            inner: message,
            uri,
            path_prefix,
            checksum_config: None,
        })
    }

    fn new_meta_request_options(message: S3Message, meta_request_type: MetaRequestType) -> MetaRequestOptions {
        let mut options = MetaRequestOptions::new();
        if let Some(checksum_config) = message.checksum_config {
            options.checksum_config(checksum_config);
        }
        options
            .message(message.inner)
            .endpoint(message.uri)
            .request_type(meta_request_type);
        options
    }

    /// Make an HTTP request using this S3 client that invokes the given callbacks as the request
    /// makes progress. The `on_finish` callback is invoked on both successful and failed requests;
    /// it should call `.is_err()` on the [MetaRequestResult] to decide whether the request
    /// succeeded.
    fn make_meta_request<T: Send + 'static, E: Send + 'static>(
        &self,
        message: S3Message,
        meta_request_type: MetaRequestType,
        request_span: Span,
        on_headers: impl FnMut(&Headers, i32) + Send + 'static,
        on_body: impl FnMut(u64, &[u8]) + Send + 'static,
        on_finish: impl FnOnce(MetaRequestResult) -> ObjectClientResult<T, E, S3RequestError> + Send + 'static,
    ) -> Result<S3HttpRequest<T, E>, S3RequestError> {
        let options = Self::new_meta_request_options(message, meta_request_type);
        self.make_meta_request_from_options(options, request_span, on_headers, on_body, on_finish)
    }

    /// Make an HTTP request using this S3 client that invokes the given callbacks as the request
    /// makes progress. The `on_finish` callback is invoked on both successful and failed requests;
    /// it should call `.is_err()` on the [MetaRequestResult] to decide whether the request
    /// succeeded.
    #[allow(clippy::too_many_arguments)] // TODO: review
    fn make_meta_request_from_options<T: Send + 'static, E: Send + 'static>(
        &self,
        mut options: MetaRequestOptions,
        request_span: Span,
        mut on_headers: impl FnMut(&Headers, i32) + Send + 'static,
        mut on_body: impl FnMut(u64, &[u8]) + Send + 'static,
        on_finish: impl FnOnce(MetaRequestResult) -> ObjectClientResult<T, E, S3RequestError> + Send + 'static,
    ) -> Result<S3HttpRequest<T, E>, S3RequestError> {
        let (tx, rx) = oneshot::channel::<ObjectClientResult<T, E, S3RequestError>>();

        let span_telemetry = request_span.clone();
        let span_body = request_span.clone();
        let span_finish = request_span;

        let start_time = Instant::now();
        let first_body_part = Arc::new(AtomicBool::new(true));
        let first_body_part_clone = Arc::clone(&first_body_part);

        options
            .on_telemetry(move |metrics| {
                let _guard = span_telemetry.enter();

                let http_status = metrics.status_code().unwrap_or(-1);
                let request_failure = !(200..299).contains(&http_status);
                let request_type = request_type_to_metrics_string(metrics.request_type());
                let request_id = metrics.request_id().unwrap_or_else(|| "<unknown>".into());
                let duration = metrics.total_duration();
                let ttfb = metrics.time_to_first_byte();
                let range = metrics.response_headers().and_then(|headers| extract_range_header(&headers));

                let log_level = status_code_to_log_level(http_status);

                let message = if request_failure {
                    "request failed"
                } else {
                    "request finished"
                };
                event!(log_level, %request_type, http_status, ?range, ?duration, ?ttfb, %request_id, "{}", message);
                trace!(detailed_metrics=?metrics, "request completed");

                let op = span_telemetry.metadata().map(|m| m.name()).unwrap_or("unknown");
                if let Some(ttfb) = ttfb {
                    metrics::histogram!("s3.requests.first_byte_latency_us", ttfb.as_micros() as f64, "op" => op, "type" => request_type);
                }
                metrics::histogram!("s3.requests.total_latency_us", duration.as_micros() as f64, "op" => op, "type" => request_type);
                metrics::counter!("s3.requests", 1, "op" => op, "type" => request_type);
                if request_failure {
                    metrics::counter!("s3.requests.failures", 1, "op" => op, "type" => request_type, "status" => format!("{http_status}"));
                }
            })
            .on_headers(move |headers, response_status| {
                (on_headers)(headers, response_status);
            })
            .on_body(move |range_start, data| {
                let _guard = span_body.enter();

                if first_body_part.compare_exchange(true, false, Ordering::SeqCst, Ordering::SeqCst).ok() == Some(true) {
                    let latency = start_time.elapsed().as_micros() as f64;
                    let op = span_body.metadata().map(|m| m.name()).unwrap_or("unknown");
                    metrics::histogram!("s3.meta_requests.first_byte_latency_us", latency, "op" => op);
                }

                trace!(start = range_start, length = data.len(), "body part received");

                (on_body)(range_start, data);
            })
            .on_finish(move |request_result| {
                let _guard = span_finish.enter();

                let op = span_finish.metadata().map(|m| m.name()).unwrap_or("unknown");
                let duration = start_time.elapsed();

                metrics::counter!("s3.meta_requests", 1, "op" => op);
                metrics::histogram!("s3.meta_requests.total_latency_us", duration.as_micros() as f64, "op" => op);
                // Some HTTP requests (like HEAD) don't have a body to stream back, so calculate TTFB now
                if first_body_part_clone.compare_exchange(true, false, Ordering::SeqCst, Ordering::SeqCst).ok() == Some(true)  {
                    let latency = duration.as_micros() as f64;
                    metrics::histogram!("s3.meta_requests.first_byte_latency_us", latency, "op" => op);
                }

                let log_level = status_code_to_log_level(request_result.response_status);
                if request_result.is_err() {
                    event!(log_level, ?duration, ?request_result, "meta request failed");

                    // If it's not a real HTTP status, encode the CRT error in the metric instead
                    let error_status = if request_result.response_status >= 100 {
                        request_result.response_status
                    } else {
                        -request_result.crt_error.raw_error()
                    };
                    metrics::counter!("s3.meta_requests.failures", 1, "op" => op, "status" => format!("{error_status}"));
                } else {
                    event!(log_level, ?duration, "meta request finished");
                }

                let result = on_finish(request_result);

                let _ = tx.send(result);
            });

        // Issue the HTTP request using the CRT's S3 meta request API. We don't need to hold on to
        // the resulting meta request, as it's a reference-counted object.
        self.s3_client.make_meta_request(options)?;

        Self::poll_client_metrics(&self.s3_client);

        Ok(S3HttpRequest { receiver: rx })
    }

    /// Make an HTTP request using this S3 client that returns the body on success or invokes the
    /// given callback on failure.
    ///
    /// The `on_error` callback can assume that `result.is_err()` is true for the result it
    /// receives.
    fn make_simple_http_request<E: Send + 'static>(
        &self,
        message: S3Message,
        request_type: MetaRequestType,
        request_span: Span,
        on_error: impl FnOnce(MetaRequestResult) -> ObjectClientError<E, S3RequestError> + Send + 'static,
    ) -> Result<S3HttpRequest<Vec<u8>, E>, S3RequestError> {
        let options = Self::new_meta_request_options(message, request_type);
        self.make_simple_http_request_from_options(options, request_span, on_error)
    }

    /// Make an HTTP request using this S3 client that returns the body on success or invokes the
    /// given callback on failure.
    ///
    /// The `on_error` callback can assume that `result.is_err()` is true for the result it
    /// receives.
    fn make_simple_http_request_from_options<E: Send + 'static>(
        &self,
        options: MetaRequestOptions,
        request_span: Span,
        on_error: impl FnOnce(MetaRequestResult) -> ObjectClientError<E, S3RequestError> + Send + 'static,
    ) -> Result<S3HttpRequest<Vec<u8>, E>, S3RequestError> {
        // Accumulate the body of the response into this Vec<u8>
        let body: Arc<Mutex<Vec<u8>>> = Default::default();
        let body_clone = Arc::clone(&body);

        self.make_meta_request_from_options(
            options,
            request_span,
            |_, _| (),
            move |offset, data| {
                let mut body = body_clone.lock().unwrap();
                assert_eq!(offset as usize, body.len());
                body.extend_from_slice(data);
            },
            move |result| {
                if result.is_err() {
                    Err(on_error(result))
                } else {
                    Ok(std::mem::take(&mut *body.lock().unwrap()))
                }
            },
        )
    }

    fn poll_client_metrics(s3_client: &Client) {
        let metrics = s3_client.poll_client_metrics();
        metrics::gauge!(
            "s3.client.num_requests_being_processed",
            f64::from(metrics.num_requests_tracked_requests)
        );
        metrics::gauge!(
            "s3.client.num_requests_being_prepared",
            f64::from(metrics.num_requests_being_prepared)
        );
        metrics::gauge!("s3.client.request_queue_size", f64::from(metrics.request_queue_size));
        metrics::gauge!(
            "s3.client.num_auto_default_network_io",
            f64::from(metrics.num_auto_default_network_io)
        );
        metrics::gauge!(
            "s3.client.num_auto_ranged_get_network_io",
            f64::from(metrics.num_auto_ranged_get_network_io)
        );
        metrics::gauge!(
            "s3.client.num_auto_ranged_put_network_io",
            f64::from(metrics.num_auto_ranged_put_network_io)
        );
        metrics::gauge!(
            "s3.client.num_auto_ranged_copy_network_io",
            f64::from(metrics.num_auto_ranged_copy_network_io)
        );
        metrics::gauge!(
            "s3.client.num_total_network_io",
            f64::from(metrics.num_total_network_io())
        );
        metrics::gauge!(
            "s3.client.num_requests_stream_queued_waiting",
            f64::from(metrics.num_requests_stream_queued_waiting)
        );
        metrics::gauge!(
            "s3.client.num_requests_streaming",
            f64::from(metrics.num_requests_streaming)
        );
    }

    fn next_request_counter(&self) -> u64 {
        self.next_request_counter.fetch_add(1, Ordering::SeqCst)
    }
}

/// A HTTP message to be sent to S3. This is a wrapper around a plain HTTP message, except that it
/// helps us correctly configure the endpoint and "Host" header to handle both path-style and
/// virtual-hosted-style addresses. The `path_prefix` is appended to the front of all paths, and
/// need not be terminated with a `/`.
#[derive(Debug)]
struct S3Message {
    inner: Message,
    uri: Uri,
    path_prefix: String,
    checksum_config: Option<ChecksumConfig>,
}

impl S3Message {
    /// Add a header to this message.
    fn add_header(
        &mut self,
        header: &Header<impl AsRef<OsStr>, impl AsRef<OsStr>>,
    ) -> Result<(), mountpoint_s3_crt::common::error::Error> {
        self.inner.add_header(header)
    }

    /// Set the request path and query for this message. The components should not be URL-encoded;
    /// this method will handle that.
    fn set_request_path_and_query<P: AsRef<OsStr>>(
        &mut self,
        path: impl AsRef<OsStr>,
        query: impl AsRef<[(P, P)]>,
    ) -> Result<(), mountpoint_s3_crt::common::error::Error> {
        // This is RFC 3986 but with '/' also considered a safe character for path fragments.
        const URLENCODE_QUERY_FRAGMENT: &AsciiSet =
            &NON_ALPHANUMERIC.remove(b'-').remove(b'.').remove(b'_').remove(b'~');
        const URLENCODE_PATH_FRAGMENT: &AsciiSet = &URLENCODE_QUERY_FRAGMENT.remove(b'/');

        fn write_encoded_fragment(s: &mut OsString, piece: impl AsRef<OsStr>, encoding: &'static AsciiSet) {
            let iter = percent_encode(piece.as_ref().as_bytes(), encoding);
            s.extend(iter.map(|s| OsStr::from_bytes(s.as_bytes())));
        }

        // This estimate is exact if no characters need encoding, otherwise we'll end up
        // reallocating a couple of times. The '?' for the query is counted in the first key-value
        // pair.
        let space_needed = self.path_prefix.len()
            + path.as_ref().len()
            + query
                .as_ref()
                .iter()
                .map(|(key, value)| key.as_ref().len() + value.as_ref().len() + 2) // +2 for & and =
                .sum::<usize>();

        let mut full_path = OsString::with_capacity(space_needed);

        write_encoded_fragment(&mut full_path, &self.path_prefix, URLENCODE_PATH_FRAGMENT);
        write_encoded_fragment(&mut full_path, &path, URLENCODE_PATH_FRAGMENT);

        // Build the query string
        if !query.as_ref().is_empty() {
            full_path.push("?");
            for (i, (key, value)) in query.as_ref().iter().enumerate() {
                if i != 0 {
                    full_path.push("&");
                }
                write_encoded_fragment(&mut full_path, key, URLENCODE_QUERY_FRAGMENT);
                full_path.push("=");
                write_encoded_fragment(&mut full_path, value, URLENCODE_QUERY_FRAGMENT);
            }
        }

        self.inner.set_request_path(full_path)
    }

    /// Set the request path for this message. The path should not be URL-encoded; this method will
    /// handle that.
    fn set_request_path(&mut self, path: impl AsRef<OsStr>) -> Result<(), mountpoint_s3_crt::common::error::Error> {
        self.set_request_path_and_query::<&str>(path, &[])
    }

    /// Sets the body input stream for this message, and returns any previously set input stream.
    /// If input_stream is None, unsets the body.
    fn set_body_stream(&mut self, input_stream: Option<AsyncInputStream>) -> Option<AsyncInputStream> {
        self.inner.set_body_stream(input_stream)
    }

    /// Sets the checksum configuration for this message.
    fn set_checksum_config(&mut self, checksum_config: Option<ChecksumConfig>) {
        self.checksum_config = checksum_config;
    }
}

#[derive(Debug)]
#[pin_project]
struct S3HttpRequest<T, E> {
    #[pin]
    receiver: oneshot::Receiver<ObjectClientResult<T, E, S3RequestError>>,
}

impl<T: Send, E: Send> Future for S3HttpRequest<T, E> {
    type Output = ObjectClientResult<T, E, S3RequestError>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        let this = self.project();
        this.receiver.poll(cx).map(|result| {
            result.unwrap_or_else(|err| {
                Err(ObjectClientError::ClientError(S3RequestError::InternalError(Box::new(
                    err,
                ))))
            })
        })
    }
}

/// Failures to construct a new S3 client
#[derive(Error, Debug)]
#[non_exhaustive]
pub enum NewClientError {
    /// Invalid S3 endpoint
    #[error("invalid S3 endpoint")]
    InvalidEndpoint(#[from] EndpointError),
    /// Invalid AWS credentials
    #[error("invalid AWS credentials")]
    ProviderFailure(#[from] mountpoint_s3_crt::common::error::Error),
    /// Invalid configuration
    #[error("invalid configuration: {0}")]
    InvalidConfiguration(String),
}

/// Failed S3 request results
#[derive(Error, Debug)]
pub enum S3RequestError {
    /// An internal error from within the S3 client. The request may have been sent.
    #[error("Internal S3 client error")]
    InternalError(#[source] Box<dyn std::error::Error + Send + Sync>),

    /// An internal error from within the AWS Common Runtime. The request may have been sent.
    #[error("Unknown CRT error")]
    CrtError(#[from] mountpoint_s3_crt::common::error::Error),

    /// An error during construction of a request. The request was not sent.
    #[error("Failed to construct request")]
    ConstructionFailure(#[from] ConstructionError),

    /// The request was sent but an unknown or unhandled failure occurred while processing it.
    #[error("Unknown response error: {0:?}")]
    ResponseError(MetaRequestResult),
}

impl S3RequestError {
    fn construction_failure(inner: impl Into<ConstructionError>) -> Self {
        S3RequestError::ConstructionFailure(inner.into())
    }
}

#[derive(Error, Debug)]
pub enum ConstructionError {
    /// CRT error while constructing the request
    #[error("Unknown CRT error: {0}")]
    CrtError(#[from] mountpoint_s3_crt::common::error::Error),

    /// The S3 endpoint was invalid
    #[error("Invalid S3 endpoint: {0}")]
    InvalidEndpoint(#[from] EndpointError),
}

/// Some requests are expected failures, and we want to log those at a different level to unexpected
/// ones.
fn status_code_to_log_level(status_code: i32) -> tracing::Level {
    if (200..=399).contains(&status_code) || status_code == 404 {
        tracing::Level::DEBUG
    } else {
        tracing::Level::WARN
    }
}

/// Return a string version of a [RequestType] for use in metrics
fn request_type_to_metrics_string(request_type: RequestType) -> &'static str {
    match request_type {
        RequestType::Default => "Default",
        RequestType::HeadObject => "HeadObject",
        RequestType::GetObject => "GetObject",
        RequestType::ListParts => "ListParts",
        RequestType::CreateMultipartUpload => "CreateMultipartUpload",
        RequestType::UploadPart => "UploadPart",
        RequestType::AbortMultipartUpload => "AbortMultipartUpload",
        RequestType::CompleteMultipartUpload => "CompleteMultipartUpload",
        RequestType::UploadPartCopy => "UploadPartCopy",
    }
}

/// Extract the byte range from the Content-Range header if present and valid
fn extract_range_header(headers: &Headers) -> Option<Range<u64>> {
    let header = headers.get("Content-Range").ok()?;
    let value = header.value().to_str()?;

    // Content-Range: <unit> <range-start>-<range-end>/<size>

    if !value.starts_with("bytes ") {
        return None;
    }
    let (_, value) = value.split_at("bytes ".len());
    let (range, _) = value.split_once('/')?;
    let (start, end) = range.split_once('-')?;
    let start = start.parse::<u64>().ok()?;
    let end = end.parse::<u64>().ok()?;

    // Rust ranges are exclusive at the end, but Content-Range is inclusive
    Some(start..end + 1)
}

#[async_trait]
impl ObjectClient for S3CrtClient {
    type GetObjectResult = S3GetObjectRequest;
    type PutObjectRequest = S3PutObjectRequest;
    type ClientError = S3RequestError;

    fn part_size(&self) -> Option<usize> {
        // TODO: the CRT does some clamping to a max size rather than just swallowing the part size
        // we configured it with, so this might be wrong. Right now the only clamping is to the max
        // S3 part size (5GiB), so this shouldn't affect the result.
        Some(self.inner.part_size)
    }

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        self.delete_object(bucket, key).await
    }

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        if_match: Option<ETag>,
        // TODO: If more arguments are added to get object, make a request struct having those arguments
        // along with bucket and key.
    ) -> ObjectClientResult<Self::GetObjectResult, GetObjectError, Self::ClientError> {
        self.get_object(bucket, key, range, if_match)
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ObjectClientResult<ListObjectsResult, ListObjectsError, Self::ClientError> {
        self.list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .await
    }

    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        self.head_object(bucket, key).await
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError> {
        self.put_object(bucket, key, params).await
    }

    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        max_parts: Option<usize>,
        part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError> {
        self.get_object_attributes(bucket, key, max_parts, part_number_marker, object_attributes)
            .await
    }
}

#[cfg(test)]
mod tests {
    use std::assert_eq;

    use super::*;
    use test_case::test_case;

    /// Test if the prefix is added correctly to the User-Agent header
    #[test]
    fn test_user_agent_with_prefix() {
        let user_agent_prefix = String::from("someprefix");
        let expected_user_agent = "someprefix mountpoint-s3-client/";

        let config = S3ClientConfig {
            user_agent_prefix: Some(user_agent_prefix),
            ..Default::default()
        };

        let client = S3CrtClient::new(config).expect("Create test client");

        let mut message = client
            .inner
            .new_request_template("GET", "doc-example-bucket")
            .expect("new request template expected");

        let headers = message.inner.get_headers().expect("Expected a block of HTTP headers");

        let user_agent_header = headers
            .get("User-Agent")
            .expect("User Agent Header expected with given prefix");
        let user_agent_header_value = user_agent_header.value();

        assert!(user_agent_header_value
            .to_string_lossy()
            .starts_with(expected_user_agent));
    }

    /// Simple test to ensure the user agent header is correct even when prefix is not added
    #[test]
    fn test_user_agent_without_prefix() {
        let expected_user_agent = "mountpoint-s3-client/";

        let config: S3ClientConfig = Default::default();

        let client = S3CrtClient::new(config).expect("Create test client");

        let mut message = client
            .inner
            .new_request_template("GET", "doc-example-bucket")
            .expect("new request template expected");

        let headers = message.inner.get_headers().expect("Expected a block of HTTP headers");

        let user_agent_header = headers
            .get("User-Agent")
            .expect("User Agent Header expected with given prefix");
        let user_agent_header_value = user_agent_header.value();

        assert!(user_agent_header_value
            .to_string_lossy()
            .starts_with(expected_user_agent));
    }

    #[test_case("bytes 200-1000/67589" => Some(200..1001))]
    #[test_case("bytes 200-1000/*" => Some(200..1001))]
    #[test_case("bytes 200-1000" => None)]
    #[test_case("bytes */67589" => None)]
    #[test_case("octets 200-1000]" => None)]
    fn parse_content_range(range: &str) -> Option<Range<u64>> {
        let mut headers = Headers::new(&Allocator::default()).unwrap();
        let header = Header::new("Content-Range", range);
        headers.add_header(&header).unwrap();
        extract_range_header(&headers)
    }

    /// Simple test to ensure the expected bucket owner can be set
    #[test]
    fn test_expected_bucket_owner() {
        let expected_bucket_owner = "111122223333";

        let config: S3ClientConfig = S3ClientConfig::new().bucket_owner("111122223333");

        let client = S3CrtClient::new(config).expect("Create test client");

        let mut message = client
            .inner
            .new_request_template("GET", "doc-example-bucket")
            .expect("new request template expected");

        let headers = message.inner.get_headers().expect("Expected a block of HTTP headers");

        let expected_bucket_owner_header = headers
            .get("x-amz-expected-bucket-owner")
            .expect("the headers should contain x-amz-expected-bucket-owner");
        let expected_bucket_owner_value = expected_bucket_owner_header.value();

        assert!(expected_bucket_owner_value
            .to_string_lossy()
            .starts_with(expected_bucket_owner));
    }
}
