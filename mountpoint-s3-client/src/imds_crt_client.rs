use std::time::Duration;

use mountpoint_s3_crt::auth::imds_client::ImdsClient;
use mountpoint_s3_crt::auth::imds_client::ImdsClientConfig;
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::error::Error;
use mountpoint_s3_crt::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use mountpoint_s3_crt::io::event_loop::EventLoopGroup;
use mountpoint_s3_crt::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use mountpoint_s3_crt::io::retry_strategy::{ExponentialBackoffJitterMode, RetryStrategy, StandardRetryOptions};

#[derive(Debug)]
pub struct ImdsCrtClient {
    imds_client: ImdsClient,
    event_loop_group: EventLoopGroup,
    allocator: Allocator,
}

impl ImdsCrtClient {
    pub fn new() -> Result<Self, Error> {
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

        let client_bootstrap = ClientBootstrap::new(&allocator, &bootstrap_options).unwrap();

        let mut retry_strategy_options = StandardRetryOptions::default(&mut event_loop_group);
        retry_strategy_options.backoff_retry_options.max_retries = 3;
        retry_strategy_options.backoff_retry_options.backoff_scale_factor = Duration::from_millis(500);
        retry_strategy_options.backoff_retry_options.jitter_mode = ExponentialBackoffJitterMode::Full;
        let retry_strategy = RetryStrategy::standard(&allocator, &retry_strategy_options).unwrap();

        let mut client_config = ImdsClientConfig::new();

        client_config
            .client_bootstrap(client_bootstrap)
            .retry_strategy(retry_strategy);

        let imds_client = ImdsClient::new(&allocator, client_config).unwrap();

        Ok(Self {
            imds_client,
            event_loop_group,
            allocator,
        })
    }

    pub fn make_instance_type_query(&self) {
        let res = self.imds_client.get_instance_type(move |result| {
            if result.is_err() {
            } else {
            }
        });
    }
}
