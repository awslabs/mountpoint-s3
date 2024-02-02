use std::pin::pin;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::time::Instant;

use clap::{Parser, Subcommand};
use futures::StreamExt;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::mock_client::throughput_client::ThroughputMockClient;
use mountpoint_s3_client::mock_client::{MockClientConfig, MockObject};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::EnvFilter;

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    let subscriber = Subscriber::builder()
        .with_env_filter(EnvFilter::from_default_env())
        .with_writer(std::io::stderr)
        .finish();

    subscriber.try_init().expect("unable to install global subscriber");
}

fn run_benchmark(client: impl ObjectClient + Clone, num_iterations: usize, bucket: &str, key: &str) {
    for i in 0..num_iterations {
        let received_size = Arc::new(AtomicU64::new(0));
        let client = client.clone();
        let received_size_clone = Arc::clone(&received_size);
        let start = Instant::now();
        futures::executor::block_on(async move {
            let mut request = client
                .get_object(bucket, key, None, None)
                .await
                .expect("couldn't create get request");
            let mut request = pin!(request);
            loop {
                match StreamExt::next(&mut request).await {
                    Some(Ok((_offset, body))) => {
                        received_size_clone.fetch_add(body.len() as u64, Ordering::SeqCst);
                    }
                    Some(Err(e)) => {
                        tracing::error!(error = ?e, "request failed");
                        break;
                    }
                    None => break,
                }
            }
        });

        let elapsed = start.elapsed();
        let received_size = received_size.load(Ordering::SeqCst);
        println!(
            "{}: received {} bytes in {:.2}s: {:.2}MiB/s",
            i,
            received_size,
            elapsed.as_secs_f64(),
            (received_size as f64) / elapsed.as_secs_f64() / (1024 * 1024) as f64
        );
    }
}

#[derive(Subcommand)]
enum Client {
    #[command(about = "Download a key from S3")]
    Real {
        #[arg(help = "Bucket name")]
        bucket: String,
        #[arg(help = "Key name")]
        key: String,
        #[arg(long, help = "AWS region", default_value = "us-east-1")]
        region: String,
    },
    #[command(about = "Download a key from a mock S3 server")]
    Mock {
        #[arg(help = "Mock object size")]
        object_size: u64,
    },
}

#[derive(Parser)]
struct CliArgs {
    #[command(subcommand)]
    client: Client,
    #[arg(long, help = "Desired throughput in Gbps", default_value = "10.0")]
    throughput_target_gbps: f64,
    #[arg(long, help = "Part size for multi-part GET", default_value = "8388608")]
    part_size: usize,
    #[arg(long, help = "Number of benchmark iterations", default_value = "1")]
    iterations: usize,
}

fn main() {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    match args.client {
        Client::Real { bucket, key, region } => {
            let mut config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(&region));
            config = config.throughput_target_gbps(args.throughput_target_gbps);
            config = config.part_size(args.part_size);
            let client = S3CrtClient::new(config).expect("couldn't create client");

            run_benchmark(client, args.iterations, &bucket, &key);
        }
        Client::Mock { object_size } => {
            const BUCKET: &str = "bucket";
            const KEY: &str = "key";

            let config = MockClientConfig {
                bucket: BUCKET.to_owned(),
                part_size: args.part_size,
                unordered_list_seed: None,
            };
            let client = ThroughputMockClient::new(config, args.throughput_target_gbps);
            let client = Arc::new(client);

            client.add_object(KEY, MockObject::ramp(0xaa, object_size as usize, ETag::for_tests()));

            run_benchmark(client, args.iterations, BUCKET, "key");
        }
    }
}
