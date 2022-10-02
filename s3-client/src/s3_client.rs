use std::future::Future;
use std::ops::Range;

use async_trait::async_trait;
use aws_crt_s3::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use aws_crt_s3::auth::signing_config::SigningConfig;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use aws_crt_s3::io::event_loop::EventLoopGroup;
use aws_crt_s3::io::futures::FutureSpawner;
use aws_crt_s3::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use aws_crt_s3::s3::client::{init_default_signing_config, Client, ClientConfig};
use thiserror::Error;

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
}

#[derive(Error, Debug)]
pub enum S3ClientError {
    #[error("unknown S3Client error")]
    Unknown,
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
