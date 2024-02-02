use std::os::unix::ffi::OsStrExt as _;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::time::{Duration, Instant};

use anyhow::{anyhow, Context};
use clap::Parser;
use futures::channel::oneshot;
use futures::executor::block_on;
use mountpoint_s3_crt::auth::credentials::{CredentialsProvider, CredentialsProviderChainDefaultOptions};
use mountpoint_s3_crt::auth::signing_config::SigningAlgorithm;
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use mountpoint_s3_crt::common::uri::Uri;
use mountpoint_s3_crt::http::request_response::{Header, Message};
use mountpoint_s3_crt::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use mountpoint_s3_crt::io::event_loop::EventLoopGroup;
use mountpoint_s3_crt::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use mountpoint_s3_crt::io::retry_strategy::{ExponentialBackoffJitterMode, RetryStrategy, StandardRetryOptions};
use mountpoint_s3_crt::s3::client::{init_signing_config, Client, ClientConfig, MetaRequestOptions, MetaRequestType};
use mountpoint_s3_crt::s3::endpoint_resolver::{RequestContext, RuleEngine};
use tracing::trace;

#[derive(Debug)]
struct Endpoint {
    uri: Uri,
    signing_algorithm: SigningAlgorithm,
    service: String,
    region: String,
}

impl Endpoint {
    fn resolve(region: &str, bucket: &str) -> anyhow::Result<Self> {
        let allocator = Allocator::default();

        let mut request_context = RequestContext::new(&allocator)?;
        request_context.add_string(&allocator, "Bucket", bucket)?;
        request_context.add_string(&allocator, "Region", region)?;

        let engine = RuleEngine::new(&allocator)?;
        let endpoint = engine.resolve(request_context)?;

        // S3 endpoints should always have this shape, so we're being lazy by `unwrap`ing everywhere
        let properties = endpoint.get_properties();
        let auth_scheme_data: serde_json::Value = serde_json::from_slice(properties.as_bytes())?;
        let auth_scheme_value = auth_scheme_data["authSchemes"].get(0).unwrap();
        let scheme_name = auth_scheme_value["name"].as_str().unwrap();
        let scheme_name = match scheme_name {
            "sigv4" => SigningAlgorithm::SigV4,
            "sigv4a" => SigningAlgorithm::SigV4A,
            "sigv4-s3express" => SigningAlgorithm::SigV4Express,
            _ => panic!("unknown scheme {scheme_name}"),
        };
        let service = auth_scheme_value["signingName"].as_str().unwrap().to_owned();
        let region = auth_scheme_value["signingRegion"].as_str().unwrap().to_owned();

        let uri = Uri::new_from_str(&allocator, endpoint.get_url())?;

        Ok(Endpoint {
            uri,
            signing_algorithm: scheme_name,
            service,
            region,
        })
    }
}

/// An S3 CRT client that can do `GetObject`` requests
#[derive(Debug)]
struct CrtClient {
    allocator: Allocator,
    client: Client,
    credentials_provider: CredentialsProvider,
    config: CrtClientConfig,
}

#[derive(Debug)]
struct CrtClientConfig {
    region: String,
    throughput_target_gbps: f64,
    part_size: usize,
}

impl CrtClient {
    /// Create a new S3 CRT client
    fn new(config: CrtClientConfig) -> anyhow::Result<Self> {
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

        let mut retry_strategy_options = StandardRetryOptions::default(&mut event_loop_group);
        // Match the SDK "legacy" retry strategies
        retry_strategy_options.backoff_retry_options.max_retries = 3;
        retry_strategy_options.backoff_retry_options.backoff_scale_factor = Duration::from_millis(500);
        retry_strategy_options.backoff_retry_options.jitter_mode = ExponentialBackoffJitterMode::Full;
        let retry_strategy = RetryStrategy::standard(&allocator, &retry_strategy_options).unwrap();

        let credentials_chain_default_options = CredentialsProviderChainDefaultOptions {
            bootstrap: &mut client_bootstrap,
        };
        let credentials_provider =
            CredentialsProvider::new_chain_default(&allocator, credentials_chain_default_options)?;
        let signing_config = init_signing_config(&config.region, credentials_provider.clone(), None, None, None);

        let mut client_config = ClientConfig::new();
        client_config.region(&config.region);
        client_config.express_support(true);
        client_config.signing_config(signing_config);
        client_config
            .client_bootstrap(client_bootstrap)
            .retry_strategy(retry_strategy);
        client_config.throughput_target_gbps(config.throughput_target_gbps);
        client_config.part_size(config.part_size);

        let client = Client::new(&allocator, client_config)?;

        Ok(CrtClient {
            allocator,
            client,
            credentials_provider,
            config,
        })
    }

    /// Download an object from S3 using the CRT client and invoke the `body_callback` for each
    /// part of the body downloaded. The callback is always invoked in order.
    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        body_callback: impl FnMut(u64, &[u8]) + Send + 'static,
    ) -> anyhow::Result<()> {
        let endpoint = Endpoint::resolve(&self.config.region, bucket)?;

        let mut message = Message::new_request(&self.allocator)?;
        message.set_request_method("GET")?;
        message.set_request_path(format!("/{key}"))?;
        message.add_header(&Header::new("Host", endpoint.uri.host_name()))?;

        let signing_config = init_signing_config(
            &endpoint.region,
            self.credentials_provider.clone(),
            Some(endpoint.signing_algorithm),
            Some(&endpoint.service),
            Some(false),
        );

        let (tx, rx) = oneshot::channel::<anyhow::Result<()>>();

        let mut request_options = MetaRequestOptions::default();
        request_options
            .request_type(MetaRequestType::GetObject)
            .message(message)
            .endpoint(endpoint.uri)
            .signing_config(signing_config)
            .on_body(body_callback)
            .on_finish({
                let bucket = bucket.to_owned();
                let key = key.to_owned();
                move |result| {
                    trace!(?bucket, ?key, ?result, "finish get_object request");
                    let ret = if result.is_err() {
                        Err(anyhow::anyhow!("request failed: {:?}", result))
                    } else {
                        Ok(())
                    };
                    let _ = tx.send(ret);
                }
            });

        trace!(?bucket, ?key, "start get_object request");

        let _request = self.client.make_meta_request(request_options)?;

        rx.await?
    }
}

#[derive(Parser)]
#[command(about = "simple S3 download benchmark using the CRT S3 client")]
struct CliArgs {
    #[arg(help = "bucket name")]
    bucket: String,
    #[arg(help = "key name")]
    key: String,
    #[arg(long, help = "region name", default_value = "us-east-1")]
    region: String,
    #[arg(
        long,
        help = "max throughput (gigabits/second)",
        value_name = "GBPS",
        default_value = "10.0"
    )]
    maximum_throughput_gbps: f64,
    #[arg(long, help = "part size (bytes)", default_value = "8388608")]
    part_size: usize,
    #[arg(long, help = "number of times to download", default_value = "1")]
    iterations: usize,
}

fn main() -> anyhow::Result<()> {
    RustLogAdapter::try_init().context("failed to inititalize RustLogAdapter")?;
    tracing_subscriber::fmt::try_init().map_err(|e| anyhow!("failed to initialize tracing subscriber: {:?}", e))?;

    let args = CliArgs::parse();

    let config = CrtClientConfig {
        region: args.region,
        throughput_target_gbps: args.maximum_throughput_gbps,
        part_size: args.part_size,
    };
    let client = CrtClient::new(config)?;

    for i in 0..args.iterations {
        let start = Instant::now();
        let num_bytes = block_on(async {
            let bytes_received = Arc::new(AtomicUsize::new(0));
            client
                .get_object(&args.bucket, &args.key, {
                    let bytes_received = bytes_received.clone();
                    move |_, body| {
                        bytes_received.fetch_add(body.len(), Ordering::SeqCst);
                    }
                })
                .await?;
            Ok::<_, anyhow::Error>(bytes_received.load(Ordering::SeqCst))
        })?;
        let elapsed = start.elapsed();
        println!(
            "iteration {}: {}b in {}s = {:.2}MiB/s",
            i,
            num_bytes,
            elapsed.as_secs_f64(),
            num_bytes as f64 / elapsed.as_secs_f64() / (1024.0 * 1024.0)
        );
    }

    Ok(())
}
