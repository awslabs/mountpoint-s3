use std::ffi::OsStr;
use std::future::Future;
use std::ops::Range;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};
use std::time::{Duration, Instant};

use aws_crt_s3::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Headers, Message};
use aws_crt_s3::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use aws_crt_s3::io::event_loop::EventLoopGroup;
use aws_crt_s3::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use aws_crt_s3::io::retry_strategy::{ExponentialBackoffJitterMode, RetryStrategy, StandardRetryOptions};
use aws_crt_s3::s3::client::{
    init_default_signing_config, Client, ClientConfig, MetaRequestOptions, MetaRequestResult, MetaRequestType,
};

use async_trait::async_trait;
use futures::channel::oneshot;
use pin_project::pin_project;
use thiserror::Error;
use tracing::{debug, error, trace, warn, Span};

use crate::object_client::{HeadObjectResult, ListObjectsResult, ObjectClient};
use crate::s3_client::get_object::{GetObjectError, GetObjectRequest};
use crate::s3_client::head_object::HeadObjectError;
use crate::s3_client::list_objects::ListObjectsError;

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

#[derive(Debug, Clone, Default)]
pub struct S3ClientConfig {
    pub throughput_target_gbps: Option<f64>,
    pub part_size: Option<usize>,
}

#[derive(Debug)]
pub struct S3Client {
    s3_client: Client,
    event_loop_group: EventLoopGroup,
    region: String,
    _allocator: Allocator,
    next_request_counter: AtomicU64,
}

impl S3Client {
    pub fn new(region: &str, config: S3ClientConfig) -> Result<Self, NewClientError> {
        let mut allocator = Allocator::default();

        let mut event_loop_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        let resolver_options = HostResolverDefaultOptions {
            max_entries: 8,
            event_loop_group: &mut event_loop_group,
        };

        let mut host_resolver = HostResolver::new_default(&mut allocator, &resolver_options).unwrap();

        let bootstrap_options = ClientBootstrapOptions {
            event_loop_group: &mut event_loop_group,
            host_resolver: &mut host_resolver,
        };

        let mut client_bootstrap = ClientBootstrap::new(&mut allocator, &bootstrap_options).unwrap();

        let creds_options = CredentialsProviderChainDefaultOptions {
            bootstrap: &mut client_bootstrap,
        };

        let mut creds_provider = CredentialsProvider::new_chain_default(&mut allocator, &creds_options).unwrap();
        let signing_config = init_default_signing_config(region, &mut creds_provider);

        let mut retry_strategy_options = StandardRetryOptions::default(&mut event_loop_group);
        // Match the SDK "legacy" retry strategies
        retry_strategy_options.backoff_retry_options.max_retries = 3;
        retry_strategy_options.backoff_retry_options.backoff_scale_factor = Duration::from_millis(500);
        retry_strategy_options.backoff_retry_options.jitter_mode = ExponentialBackoffJitterMode::Full;
        let retry_strategy = RetryStrategy::standard(&mut allocator, &retry_strategy_options).unwrap();

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

        let s3_client = Client::new(&mut allocator, client_config).unwrap();

        Ok(Self {
            _allocator: allocator,
            s3_client,
            event_loop_group,
            region: region.to_owned(),
            next_request_counter: AtomicU64::new(0),
        })
    }

    pub fn event_loop_group(&self) -> EventLoopGroup {
        self.event_loop_group.clone()
    }

    /// Make an HTTP request using this S3 client that invokes the given callbacks as the request
    /// makes progress. The `on_finish` callback is invoked only if the request succeeds.
    fn make_meta_request<T: Send + 'static, E: std::error::Error + Send + 'static>(
        &self,
        message: Message,
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
            .message(message)
            .on_headers(move |headers, response_status| {
                if let Ok(id) = headers.get("x-amz-request-id") {
                    *request_id.lock().unwrap() = Some(id.value().clone());
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

                trace!(
                    start = range_start,
                    length = data.len(),
                    "body part received"
                );

                (on_body)(range_start, data);
            })
            .on_finish(move |request_result| {
                let _guard = span_finish.enter();

                debug!(
                    request_id=?request_id_clone.lock().unwrap().as_deref().unwrap_or_else(|| OsStr::from_bytes("unknown".as_bytes())),
                    duration=?start_time.elapsed(),
                    "request finished"
                );

                let result = if !request_result.is_err() {
                    on_finish(request_result).map_err(|e| S3RequestError::ServiceError(e))
                } else {
                    warn!(?request_result, "request failed");
                    Err(S3RequestError::ResponseError(request_result))
                };

                let _ = tx.send(result);
            })
            .request_type(meta_request_type);

        // Issue the HTTP request using the CRT's S3 meta request API. We don't need to hold on to
        // the resulting meta request, as it's a reference-counted object.
        self.s3_client
            .make_meta_request(options)
            .map_err(S3RequestError::ConstructionFailure)?;

        Ok(S3HttpRequest { receiver: rx })
    }

    /// Make an HTTP request using this S3 client that returns the body on success
    fn make_simple_http_request<E: std::error::Error + Send + 'static>(
        &self,
        message: Message,
        request_span: Span,
    ) -> Result<S3HttpRequest<Vec<u8>, E>, S3RequestError<E>> {
        // Accumulate the body of the response into this Vec<u8>
        let body: Arc<Mutex<Vec<u8>>> = Default::default();
        let body_clone = Arc::clone(&body);

        self.make_meta_request(
            message,
            MetaRequestType::Default,
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

    fn next_request_counter(&self) -> u64 {
        self.next_request_counter.fetch_add(1, Ordering::SeqCst)
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
    // Currently, client construction is actually infallible, but this reserves the ability for us
    // to do fallible stuff at construction time.
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
    ConstructionFailure(#[source] aws_crt_s3::common::error::Error),

    /// The request was sent but an unknown or unhandled failure occurred while processing it.
    #[error("Unknown response error: {0:?}")]
    ResponseError(MetaRequestResult),

    /// The request was sent and the service returned an error.
    #[error("Error received from S3: {0:?}")]
    ServiceError(#[source] E),
}

#[async_trait]
impl ObjectClient for S3Client {
    type GetObjectResult = GetObjectRequest;
    type GetObjectError = S3RequestError<GetObjectError>;
    type HeadObjectError = S3RequestError<HeadObjectError>;
    type ListObjectsError = S3RequestError<ListObjectsError>;

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
}
