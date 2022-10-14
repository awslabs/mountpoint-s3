use std::future::Future;
use std::ops::Range;
use std::sync::{Arc, Mutex};

use async_trait::async_trait;

use aws_crt_s3::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::Message;
use aws_crt_s3::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use aws_crt_s3::io::event_loop::EventLoopGroup;
use aws_crt_s3::io::futures::FutureSpawner;
use aws_crt_s3::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use aws_crt_s3::s3::client::{
    init_default_signing_config, Client, ClientConfig, MetaRequestOptions, MetaRequestResult,
};
use aws_crt_s3_sys::aws_s3_meta_request_type;

use futures::channel::oneshot;

use thiserror::Error;

use tracing::{error, trace};

use crate::object_client::{HeadObjectResult, ListObjectsResult, ObjectClient};
use crate::s3_client::get::{GetObjectError, GetObjectRequest};
use crate::s3_client::head_object::HeadObjectError;
use crate::s3_client::list_objects::ListObjectsError;

pub(crate) mod get;
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
    throughput_target_gbps: f64,
}

impl S3Client {
    pub fn new(region: &str, config: S3ClientConfig) -> Result<Self, NewClientError> {
        // Safety arguments in this function are mostly pretty boring (singletons, constructors that
        // copy from pointers, etc), so safety annotations only on interesting cases.

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
        let throughput_target_gbps = config.throughput_target_gbps;
        let part_size = config.part_size;

        let mut client_config = ClientConfig::new();

        client_config
            .client_bootstrap(client_bootstrap)
            .signing_config(signing_config);

        if let Some(throughput_target_gbps) = throughput_target_gbps {
            client_config.throughput_target_gbps(throughput_target_gbps);
        }

        if let Some(part_size) = part_size {
            client_config.part_size(part_size);
        }

        let s3_client = Client::new(&mut allocator, client_config).unwrap();

        Ok(Self {
            _allocator: allocator,
            s3_client,
            event_loop_group,
            region: region.to_owned(),
            throughput_target_gbps: throughput_target_gbps.unwrap_or(0.0),
        })
    }

    pub fn throughput_target_gbps(&self) -> f64 {
        self.throughput_target_gbps
    }

    /// Make an HTTP request using this S3 client. Returns the body of the HTTP response on success.
    fn make_http_request<E: std::error::Error + Send + 'static>(
        &self,
        message: Message,
    ) -> impl Future<Output = Result<Vec<u8>, S3RequestError<E>>> + Send {
        let (tx, rx) = oneshot::channel::<Result<Vec<u8>, S3RequestError<E>>>();

        // Accumulate the body of the response into this Vec<u8>.
        let body: Arc<Mutex<Vec<u8>>> = Default::default();

        let body1 = body.clone();

        let mut options = MetaRequestOptions::new();
        options
            .message(message)
            .on_body(move |range_start, data| {
                trace!(
                    start = range_start,
                    length = data.len(),
                    "S3 request body part received"
                );

                let mut body = body1.lock().unwrap();

                // TODO: are we guaranteed to receive parts in order like this?
                assert_eq!(range_start as usize, body.len());
                body.extend_from_slice(data);
            })
            .on_finish(move |request_result| {
                let mut body = body.lock().unwrap();

                trace!(body_size = body.len(), "S3 request finished");

                let result = if !request_result.is_err() {
                    Ok(std::mem::take(&mut *body))
                } else {
                    error!(?request_result, "S3 request failed");
                    Err(S3RequestError::ResponseError(request_result))
                };

                let _ = tx.send(result);
            })
            .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

        // Issue the HTTP request using the CRT's S3 meta request API.
        let req = self
            .s3_client
            .make_meta_request(options)
            .map(|_| ()) // Discard the MetaRequest since it's not Send.
            .map_err(S3RequestError::ConstructionFailure);

        async {
            // Check that the request was successfully constructed. Has to be in the async block.
            req?;

            // Wait on the rx channel until the callbacks are all done.
            rx.await
                .unwrap_or_else(|err| Err(S3RequestError::InternalError(Box::new(err))))
        }
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

    /// Run the provided future to completion
    // TODO this belongs on a trait i guess, since StreamingGetObject wants to spawn tasks and is generic
    fn spawn<T: Send + 'static>(&self, future: impl Future<Output = T> + Send + 'static) {
        // TODO give this a proper JoinHandle-esque return type
        self.event_loop_group.spawn_future(future);
    }
}
