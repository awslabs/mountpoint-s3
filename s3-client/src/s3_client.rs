use std::future::{ready, Future};
use std::ops::Range;
use std::sync::{Arc, Mutex};

use async_trait::async_trait;
use aws_crt_s3::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use aws_crt_s3::auth::signing_config::SigningConfig;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::Message;
use aws_crt_s3::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use aws_crt_s3::io::event_loop::EventLoopGroup;
use aws_crt_s3::io::futures::FutureSpawner;
use aws_crt_s3::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use aws_crt_s3::s3::client::{init_default_signing_config, Client, ClientConfig, MetaRequestOptions};
use aws_crt_s3_sys::aws_s3_meta_request_type;
use futures::channel::oneshot;
use futures::TryFutureExt;
use thiserror::Error;
use tracing::{error, trace};

use crate::object_client::{ListObjectsResult, ObjectClient};
use crate::s3_client::get::{GetObjectError, GetObjectRequest};
use crate::s3_client::list_objects::ListObjectsError;

pub(crate) mod get;
pub(crate) mod head_bucket;
pub(crate) mod list_objects;

#[derive(Debug, Clone, Default)]
pub struct S3ClientConfig {
    pub throughput_target_gbps: Option<f64>,
    pub part_size: Option<usize>,
}

#[allow(unused)]
pub struct S3Client {
    allocator: Allocator,
    s3_client: Client,
    signing_config: SigningConfig,
    credentials_provider: CredentialsProvider,
    host_resolver: HostResolver,
    event_loop_group: EventLoopGroup,
    region: String,
    throughput_target_gbps: f64,
}

#[derive(Error, Debug)]
#[error("HTTP Error: {self}")]
pub struct HttpError {
    #[source]
    crt_error: aws_crt_s3::common::error::Error,

    response_status: i32,

    error_response_body: String,
}

impl S3Client {
    pub fn new(region: &str, config: S3ClientConfig) -> Result<Self, S3ClientError> {
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
            .signing_config(signing_config.clone());

        if let Some(throughput_target_gbps) = throughput_target_gbps {
            client_config.throughput_target_gbps(throughput_target_gbps);
        }

        if let Some(part_size) = part_size {
            client_config.part_size(part_size);
        }

        let s3_client = Client::new(&mut allocator, client_config).unwrap();

        Ok(Self {
            allocator,
            s3_client,
            signing_config,
            host_resolver,
            event_loop_group,
            credentials_provider: creds_provider,
            region: region.to_owned(),
            throughput_target_gbps: throughput_target_gbps.unwrap_or(0.0),
        })
    }

    pub fn throughput_target_gbps(&self) -> f64 {
        self.throughput_target_gbps
    }

    /// Make an HTTP request using this S3 client. Returns the body of the HTTP response on success.
    fn make_http_request(&self, message: Message) -> impl Future<Output = Result<Vec<u8>, S3ClientError>> + Send {
        let (tx, rx) = oneshot::channel::<Result<Vec<u8>, S3ClientError>>();

        // Accumulate the body of the response into this Vec<u8>.
        let body: Arc<Mutex<Vec<u8>>> = Default::default();

        let body1 = body.clone();

        let message = message;
        let mut options = MetaRequestOptions::new();
        options
            .message(message)
            .on_body(move |range_start, data| {
                trace!(
                    start = range_start,
                    length = data.len(),
                    "ListObjects body part received"
                );

                let mut body = body1.lock().unwrap();

                // TODO: are we guaranteed to receive parts in order like this?
                assert_eq!(range_start as usize, body.len());
                body.extend_from_slice(data);
            })
            .on_finish(move |request_result| {
                let mut body = body.lock().unwrap();

                trace!(total_size = body.len(), "HTTP request finished");

                let result = if request_result.error_code == 0 {
                    Ok(std::mem::take(&mut *body))
                } else {
                    // Turn the error response body into String, using Debug to produce some message
                    // if it's not valid UTF-8.
                    let error_response_body = request_result
                        .error_response_body
                        .unwrap_or_else(|| "No error response body".into())
                        .into_string()
                        .unwrap_or_else(|e| format!("Response not valid UTF-8: {:?}", e));

                    let crt_error: aws_crt_s3::common::error::Error = request_result.error_code.into();

                    error!(
                        ?crt_error,
                        http_code = request_result.response_status,
                        response = error_response_body,
                        "HTTP error"
                    );

                    Err(S3ClientError::Http(
                        crt_error,
                        request_result.response_status,
                        error_response_body,
                    ))
                };

                let _ = tx.send(result);
            })
            .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

        // TODO: this ugliness is because using rustc thinks that Message (which isn't Send) is held
        // across an await. This manual unrolling into futures::future combinators shows that isn't the case.
        ready(
            self.s3_client
                .make_meta_request(options)
                .map_err(S3ClientError::Crt)
                .map(|_| {}),
        )
        .and_then(|()| rx.unwrap_or_else(|err| Err(S3ClientError::OneshotCanceled(err))))
    }
}

#[derive(Error, Debug)]
pub enum S3ClientError {
    #[error("unknown S3Client error")]
    Unknown,

    #[error("CRT error: {0}")]
    Crt(#[from] aws_crt_s3::common::error::Error),

    #[error("HTTP error: CRT: {0}, response code = {1}, response = {2}")]
    Http(#[source] aws_crt_s3::common::error::Error, i32, String),

    #[error("A future was prematurely canceled: {0}")]
    OneshotCanceled(#[from] futures::channel::oneshot::Canceled),
}

// TODO ?
unsafe impl Send for S3Client {}
unsafe impl Sync for S3Client {}

#[async_trait]
impl ObjectClient for S3Client {
    type GetObjectResult = GetObjectRequest;
    type GetObjectError = GetObjectError;

    type ListObjectsError = ListObjectsError;

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

    /// Run the provided future to completion
    // TODO this belongs on a trait i guess, since StreamingGetObject wants to spawn tasks and is generic
    fn spawn<T: Send + 'static>(&self, future: impl Future<Output = T> + Send + 'static) {
        // TODO give this a proper JoinHandle-esque return type
        self.event_loop_group.spawn_future(future);
    }
}
