use std::ffi::{OsStr, OsString};
use std::future::Future;
use std::ops::Range;
use std::pin::Pin;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};
use std::time::{Duration, Instant};

use aws_crt_s3::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Header, Headers, Message};
use aws_crt_s3::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use aws_crt_s3::io::event_loop::EventLoopGroup;
use aws_crt_s3::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use aws_crt_s3::io::retry_strategy::{ExponentialBackoffJitterMode, RetryStrategy, StandardRetryOptions};
use aws_crt_s3::io::stream::InputStream;
use aws_crt_s3::io::uri::Uri;
use aws_crt_s3::s3::client::{
    init_default_signing_config, Client, ClientConfig, MetaRequestOptions, MetaRequestResult, MetaRequestType,
};

use async_trait::async_trait;
use futures::channel::oneshot;
use pin_project::pin_project;
use thiserror::Error;
use tracing::{debug, error, trace, warn, Span};

use crate::endpoint::{AddressingStyle, Endpoint, EndpointError};
use crate::object_client::{HeadObjectResult, ListObjectsResult, ObjectClient, PutObjectParams, PutObjectResult};
use crate::s3_crt_client::get_object::{GetObjectError, GetObjectRequest};
use crate::s3_crt_client::head_object::HeadObjectError;
use crate::s3_crt_client::list_objects::ListObjectsError;
use crate::s3_crt_client::put_object::PutObjectError;

macro_rules! request_span {
    ($self:expr, $method:expr) => {{
        let counter = $self.next_request_counter();
        tracing::debug_span!($method, id = counter)
    }};
}

pub(crate) mod get_object;
pub(crate) mod head_bucket;
pub(crate) mod head_object;
pub(crate) mod list_objects;
pub(crate) mod put_object;

#[derive(Debug, Clone, Default)]
pub struct S3ClientConfig {
    pub throughput_target_gbps: Option<f64>,
    pub part_size: Option<usize>,
    pub endpoint: Option<Endpoint>,
    pub user_agent_prefix: Option<String>,
}

#[derive(Debug)]
pub struct S3CrtClient {
    s3_client: Client,
    event_loop_group: EventLoopGroup,
    endpoint: Endpoint,
    allocator: Allocator,
    next_request_counter: AtomicU64,
    /// user_agent_header will be passed into CRT which add additional information "CRTS3NativeClient/0.1.x".
    /// Here it will add the user agent prefix and s3 client information.
    user_agent_header: String,
}

impl S3CrtClient {
    pub fn new(region: &str, config: S3ClientConfig) -> Result<Self, NewClientError> {
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

        let creds_options = CredentialsProviderChainDefaultOptions {
            bootstrap: &mut client_bootstrap,
        };

        let mut creds_provider = CredentialsProvider::new_chain_default(&allocator, &creds_options).unwrap();
        let signing_config = init_default_signing_config(region, &mut creds_provider);

        let mut retry_strategy_options = StandardRetryOptions::default(&mut event_loop_group);
        // Match the SDK "legacy" retry strategies
        retry_strategy_options.backoff_retry_options.max_retries = 3;
        retry_strategy_options.backoff_retry_options.backoff_scale_factor = Duration::from_millis(500);
        retry_strategy_options.backoff_retry_options.jitter_mode = ExponentialBackoffJitterMode::Full;
        let retry_strategy = RetryStrategy::standard(&allocator, &retry_strategy_options).unwrap();

        let mut client_config = ClientConfig::new();

        client_config
            .client_bootstrap(client_bootstrap)
            .signing_config(signing_config)
            .retry_strategy(retry_strategy);

        if let Some(throughput_target_gbps) = config.throughput_target_gbps {
            client_config.throughput_target_gbps(throughput_target_gbps);
        }

        if let Some(part_size) = config.part_size {
            client_config.part_size(part_size);
        }

        const CLIENT_NAME: &str = "aws-s3-crt-rust";
        let user_agent_header = match config.user_agent_prefix {
            Some(prefix) => format!("{prefix} {CLIENT_NAME}"),
            None => CLIENT_NAME.to_owned(),
        };

        let s3_client = Client::new(&allocator, client_config).unwrap();

        let endpoint = if let Some(endpoint) = config.endpoint {
            endpoint
        } else {
            Endpoint::from_region(region, AddressingStyle::Automatic)?
        };

        Ok(Self {
            allocator,
            s3_client,
            event_loop_group,
            endpoint,
            next_request_counter: AtomicU64::new(0),
            user_agent_header,
        })
    }

    pub fn event_loop_group(&self) -> EventLoopGroup {
        self.event_loop_group.clone()
    }

    /// Create a new HTTP request template for the given HTTP method and S3 bucket name.
    /// Pre-populates common headers used across all requests. Sets the "accept" header assuming the
    /// response should be XML; this header should be overwritten for requests like GET that return
    /// object data.
    fn new_request_template(&self, method: &str, bucket: &str) -> Result<S3Message, ConstructionError> {
        let (uri, path_prefix) = self.endpoint.for_bucket(bucket)?;
        let hostname = uri.host_name();

        let mut message = Message::new_request(&self.allocator)?;
        message.set_request_method(method)?;
        message.add_header(&Header::new("Host", hostname))?;
        message.add_header(&Header::new("accept", "application/xml"))?;
        message.add_header(&Header::new("User-Agent", &self.user_agent_header))?;

        Ok(S3Message {
            inner: message,
            uri,
            path_prefix,
        })
    }

    /// Make an HTTP request using this S3 client that invokes the given callbacks as the request
    /// makes progress. The `on_finish` callback is invoked only if the request succeeds.
    fn make_meta_request<T: Send + 'static, E: std::error::Error + Send + 'static>(
        &self,
        message: S3Message,
        meta_request_type: MetaRequestType,
        request_span: Span,
        mut on_headers: impl FnMut(&Headers, i32) + Send + 'static,
        mut on_body: impl FnMut(u64, &[u8]) + Send + 'static,
        on_finish: impl FnOnce(MetaRequestResult) -> Result<T, E> + Send + 'static,
    ) -> Result<S3HttpRequest<T, E>, S3RequestError<E>> {
        let (tx, rx) = oneshot::channel::<Result<T, S3RequestError<E>>>();

        let span_body = request_span.clone();
        let span_finish = request_span;

        let request_id = Arc::new(Mutex::new(None));
        let request_id_clone = Arc::clone(&request_id);
        let start_time = Instant::now();
        let mut first_body_part = true;

        let mut options = MetaRequestOptions::new();
        options
            .message(message.inner)
            .endpoint(message.uri)
            .on_headers(move |headers, response_status| {
                if let Ok(id) = headers.get("x-amz-request-id") {
                    let id = id.value().to_string_lossy().to_string();
                    *request_id.lock().unwrap() = Some(id);
                }
                (on_headers)(headers, response_status);
            })
            .on_body(move |range_start, data| {
                let _guard = span_body.enter();

                if first_body_part {
                    first_body_part = false;
                    let latency = start_time.elapsed().as_micros() as f64;
                    let op = span_body.metadata().map(|m| m.name()).unwrap_or("unknown");
                    metrics::histogram!("s3.first_byte_latency_us", latency, "op" => op);
                }

                trace!(start = range_start, length = data.len(), "body part received");

                (on_body)(range_start, data);
            })
            .on_finish(move |request_result| {
                let _guard = span_finish.enter();

                // Header callback won't be invoked concurrently, so we can hold onto this lock
                let request_id = request_id_clone.lock().unwrap();
                let op = span_finish.metadata().map(|m| m.name()).unwrap_or("unknown");

                metrics::counter!("s3.meta_requests", 1, "op" => op);

                let result = if !request_result.is_err() {
                    debug!(
                        request_id = request_id.as_deref().unwrap_or("unknown"),
                        duration_us = start_time.elapsed().as_micros(),
                        "request finished"
                    );
                    on_finish(request_result).map_err(|e| S3RequestError::ServiceError(e))
                } else {
                    warn!(
                        request_id = request_id.as_deref().unwrap_or("unknown"),
                        duration_us = start_time.elapsed().as_micros(),
                        ?request_result,
                        "request failed"
                    );
                    // If it's not a real HTTP status, encode the CRT error instead
                    let error_status = if request_result.response_status >= 100 {
                        request_result.response_status
                    } else {
                        -request_result.crt_error.raw_error()
                    };
                    metrics::counter!("s3.meta_request_failures", 1, "op" => op, "status" => format!("{error_status}"));
                    Err(S3RequestError::ResponseError(request_result))
                };

                let _ = tx.send(result);
            })
            .request_type(meta_request_type);

        // Issue the HTTP request using the CRT's S3 meta request API. We don't need to hold on to
        // the resulting meta request, as it's a reference-counted object.
        self.s3_client.make_meta_request(options)?;

        Self::poll_client_metrics(&self.s3_client);

        Ok(S3HttpRequest { receiver: rx })
    }

    /// Make an HTTP request using this S3 client that returns the body on success
    fn make_simple_http_request<E: std::error::Error + Send + 'static>(
        &self,
        message: S3Message,
        request_type: MetaRequestType,
        request_span: Span,
    ) -> Result<S3HttpRequest<Vec<u8>, E>, S3RequestError<E>> {
        // Accumulate the body of the response into this Vec<u8>
        let body: Arc<Mutex<Vec<u8>>> = Default::default();
        let body_clone = Arc::clone(&body);

        self.make_meta_request(
            message,
            request_type,
            request_span,
            |_, _| (),
            move |offset, data| {
                let mut body = body_clone.lock().unwrap();
                assert_eq!(offset as usize, body.len());
                body.extend_from_slice(data);
            },
            move |_result| Ok(std::mem::take(&mut *body.lock().unwrap())),
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
struct S3Message<'a> {
    inner: Message<'a>,
    uri: Uri,
    path_prefix: String,
}

impl<'a> S3Message<'a> {
    /// Add a header to this message.
    fn add_header(
        &mut self,
        header: &Header<impl AsRef<OsStr>, impl AsRef<OsStr>>,
    ) -> Result<(), aws_crt_s3::common::error::Error> {
        self.inner.add_header(header)
    }

    /// Set the request path for this message.
    fn set_request_path(&mut self, path: impl AsRef<OsStr>) -> Result<(), aws_crt_s3::common::error::Error> {
        let mut full_path = OsString::with_capacity(self.path_prefix.len() + path.as_ref().len());
        full_path.push(&self.path_prefix);
        full_path.push(path);
        self.inner.set_request_path(full_path)
    }

    /// Sets the body input stream for this message, and returns any previously set input stream.
    /// If input_stream is None, unsets the body.
    fn set_body_stream(&mut self, input_stream: Option<InputStream<'a>>) -> Option<InputStream<'a>> {
        self.inner.set_body_stream(input_stream)
    }
}

#[derive(Debug)]
#[pin_project]
struct S3HttpRequest<T, E: std::error::Error> {
    #[pin]
    receiver: oneshot::Receiver<Result<T, S3RequestError<E>>>,
}

impl<T: Send, E: std::error::Error + Send + 'static> Future for S3HttpRequest<T, E> {
    type Output = Result<T, S3RequestError<E>>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        let this = self.project();
        this.receiver
            .poll(cx)
            .map(|result| result.unwrap_or_else(|err| Err(S3RequestError::InternalError(Box::new(err)))))
    }
}

/// Failures to construct a new S3 client
#[derive(Error, Debug)]
#[non_exhaustive]
pub enum NewClientError {
    /// Invalid S3 endpoint
    #[error("invalid S3 endpoint")]
    InvalidEndpoint(#[from] EndpointError),
}

/// Failed S3 request results
#[derive(Error, Debug)]
pub enum S3RequestError<E: std::error::Error> {
    /// An internal error from within the S3 client. The request may have been sent.
    #[error("Internal S3 client error")]
    InternalError(#[source] Box<dyn std::error::Error + Send + Sync>),

    /// An internal error from within the AWS Common Runtime. The request may have been sent.
    #[error("Unknown CRT error: {0}")]
    CrtError(#[from] aws_crt_s3::common::error::Error),

    /// An error during construction of a request. The request was not sent.
    #[error("Failed to construct request: {0}")]
    ConstructionFailure(#[from] ConstructionError),

    /// The request was sent but an unknown or unhandled failure occurred while processing it.
    #[error("Unknown response error: {0:?}")]
    ResponseError(MetaRequestResult),

    /// The request was sent and the service returned an error.
    #[error("Error received from S3: {0:?}")]
    ServiceError(#[source] E),
}

#[derive(Error, Debug)]
pub enum ConstructionError {
    /// CRT error while constructing the request
    #[error("Unknown CRT error: {0}")]
    CrtError(#[from] aws_crt_s3::common::error::Error),

    /// The S3 endpoint was invalid
    #[error("Invalid S3 endpoint: {0}")]
    InvalidEndpoint(#[from] EndpointError),
}

#[async_trait]
impl ObjectClient for S3CrtClient {
    type GetObjectResult = GetObjectRequest;
    type GetObjectError = S3RequestError<GetObjectError>;
    type HeadObjectError = S3RequestError<HeadObjectError>;
    type ListObjectsError = S3RequestError<ListObjectsError>;
    type PutObjectError = S3RequestError<PutObjectError>;

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
    ) -> Result<Self::GetObjectResult, Self::GetObjectError> {
        self.get_object(bucket, key, range)
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListObjectsResult, Self::ListObjectsError> {
        self.list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .await
    }

    async fn head_object(&self, bucket: &str, key: &str) -> Result<HeadObjectResult, Self::HeadObjectError> {
        self.head_object(bucket, key).await
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
        contents: impl futures::Stream<Item = impl AsRef<[u8]> + Send> + Send,
    ) -> Result<PutObjectResult, Self::PutObjectError> {
        self.put_object(bucket, key, params, contents).await
    }
}
#[cfg(test)]
mod tests {
    use crate::S3ClientConfig;
    use crate::S3CrtClient;
    use std::assert_eq;

    #[test]
    fn test_user_agent_with_prefix() {
        let user_agent_prefix = String::from("someprefix");
        let expected_user_agent = "someprefix aws-s3-crt-rust";

        let config = S3ClientConfig {
            user_agent_prefix: Some(user_agent_prefix),
            ..Default::default()
        };

        let client = S3CrtClient::new("eu-west-1", config).expect("Create test client");

        let mut message = client
            .new_request_template("GET", "plutotestankit")
            .expect("new request template expected");

        // get headers is getting the Headers from CRT and convertling it to rust format
        let headers = {
            let this = &mut message;
            this.inner.get_headers()
        };

        let user_agent_header = headers
            .get("User-Agent")
            .expect("User Agent Header expected with given prefix");
        let user_agent_header_value = user_agent_header.value();

        assert_eq!(expected_user_agent, user_agent_header_value);
    }

    // Simple test to ensure the user agent header is correct even when prefix is not added
    #[test]
    fn test_user_agent_without_prefix() {
        let expected_user_agent = "aws-s3-crt-rust";

        let config: S3ClientConfig = Default::default();

        let client = S3CrtClient::new("eu-west-1", config).expect("Create test client");

        let mut message = client
            .new_request_template("GET", "plutotestankit")
            .expect("new request template expected");

        // get headers is getting the Headers from CRT and convertling it to rust format
        let headers = {
            let this = &mut message;
            this.inner.get_headers()
        };

        let user_agent_header = headers.get("User-Agent").expect("User Agent Header expected");
        let user_agent_header_value = user_agent_header.value();

        assert_eq!(expected_user_agent, user_agent_header_value);
    }
}
