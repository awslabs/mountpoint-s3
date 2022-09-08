use aws_c_s3_sys::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use aws_c_s3_sys::auth::signing_config::SigningConfig;
use aws_c_s3_sys::common::allocator::Allocator;
use aws_c_s3_sys::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use aws_c_s3_sys::io::event_loop::EventLoopGroup;
use aws_c_s3_sys::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use aws_c_s3_sys::s3::client::{init_default_signing_config, Client, ClientConfig};

use crate::crt_init;

mod get;
mod list_objects_v2;

#[derive(Debug, Clone, Default)]
pub struct S3ClientConfig {
    pub throughput_target_gbps: Option<f64>,
    pub part_size: Option<usize>,
}

// TODO i think event loops are intended to never move across threads, so need to think about
// synchronization here
#[allow(unused)]
pub struct S3Client {
    allocator: Allocator,
    s3_client: Client,
    credentials_provider: CredentialsProvider,
    client_bootstrap: ClientBootstrap,
    host_resolver: HostResolver,
    event_loop_group: EventLoopGroup,
    signing_config: SigningConfig,
    region: String,
    throughput_target_gbps: f64,
}

impl S3Client {
    pub fn new(config: S3ClientConfig) -> Result<Self, String> {
        crt_init();

        // Safety arguments in this function are mostly pretty boring (singletons, constructors that
        // copy from pointers, etc), so safety annotations only on interesting cases.

        let mut allocator = Allocator::default().unwrap();

        let mut event_loop_group = EventLoopGroup::new_default(&mut allocator, 0).unwrap();

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

        let signing_config = init_default_signing_config("us-east-1", &mut creds_provider);
        let throughput_target_gbps = config.throughput_target_gbps;
        let part_size = config.part_size;

        let client_config = ClientConfig {
            throughput_target_gbps,
            max_active_connections_override: None,
            part_size,
            client_bootstrap: &mut client_bootstrap,
            signing_config: &signing_config,
        };

        let s3_client = Client::new(&mut allocator, &client_config).unwrap();

        Ok(Self {
            allocator,
            s3_client,
            client_bootstrap,
            host_resolver,
            event_loop_group,
            credentials_provider: creds_provider,
            signing_config,
            region: "us-east-1".to_owned(),
            throughput_target_gbps: throughput_target_gbps.unwrap_or(0.0),
        })
    }

    pub fn throughput_target_gbps(&self) -> f64 {
        self.throughput_target_gbps
    }
}

// TODO ?
unsafe impl Send for S3Client {}
unsafe impl Sync for S3Client {}
