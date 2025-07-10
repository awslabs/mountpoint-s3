use std::pin::pin;
use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};
use std::thread;
use std::time::Instant;

use clap::{Parser, Subcommand};
use futures::StreamExt;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::mock_client::throughput_client::ThroughputMockClient;
use mountpoint_s3_client::mock_client::{MockClient, MockObject};
use mountpoint_s3_client::types::{ClientBackpressureHandle, ETag, GetObjectParams, GetObjectResponse};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use tracing_subscriber::EnvFilter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    let subscriber = Subscriber::builder()
        .with_env_filter(EnvFilter::from_default_env())
        .with_ansi(supports_color::on(supports_color::Stream::Stderr).is_some())
        .with_writer(std::io::stderr)
        .finish();

    subscriber.try_init().expect("unable to install global subscriber");
}

fn run_benchmark(
    client: impl ObjectClient + Clone + Send,
    num_iterations: usize,
    num_downloads: usize,
    bucket: &str,
    key: &str,
    enable_backpressure: bool,
) {
    for i in 0..num_iterations {
        let start = Instant::now();
        let received_size = Arc::new(AtomicU64::new(0));

        thread::scope(|scope| {
            for _ in 0..num_downloads {
                let client = client.clone();
                let received_size_clone = Arc::clone(&received_size);
                scope.spawn(|| {
                    futures::executor::block_on(async move {
                        let mut received_obj_len = 0u64;
                        let mut request = client
                            .get_object(bucket, key, &GetObjectParams::new())
                            .await
                            .expect("couldn't create get request");
                        let mut backpressure_handle = request.backpressure_handle().cloned();
                        if enable_backpressure {
                            if let Some(backpressure_handle) = backpressure_handle.as_mut() {
                                let initial_read_window_size = client.initial_read_window_size().expect("initial size always set when backpressure is enabled");
                                backpressure_handle.ensure_read_window(initial_read_window_size as u64);
                            }
                        }

                        let mut request = pin!(request);
                        loop {
                            match request.next().await {
                                Some(Ok(part)) => {
                                    let part_len = part.data.len();
                                    tracing::info!(
                                        target: "benchmarking_instrumentation",
                                        received_obj_len = ?received_obj_len,
                                        part_len = part_len,
                                        "consuming data",
                                    );
                                    received_size_clone.fetch_add(part_len as u64, Ordering::SeqCst);
                                    received_obj_len += part_len as u64;
                                    if enable_backpressure {
                                        if let Some(backpressure_handle) = backpressure_handle.as_mut() {
                                            tracing::info!(
                                                target: "benchmarking_instrumentation",
                                                preferred_read_window_size = ?client.initial_read_window_size(),
                                                prev_read_window_end_offset = ?(client.initial_read_window_size().unwrap() as u64 + received_obj_len - part_len as u64),
                                                new_read_window_end_offset = ?(client.initial_read_window_size().unwrap() as u64 + received_obj_len),
                                                part_len = part_len,
                                                "advancing read window",
                                            );

                                            backpressure_handle.increment_read_window(part_len);
                                        }
                                    }
                                }
                                Some(Err(e)) => {
                                    tracing::error!(error = ?e, "request failed");
                                    break;
                                }
                                _ => break,
                            }
                        }
                    })
                });
            }
        });

        let elapsed = start.elapsed();
        let received_size = received_size.load(Ordering::SeqCst);
        println!(
            "{}: received {} bytes in {:.2}s: {:.2} Gib/s",
            i,
            received_size,
            elapsed.as_secs_f64(),
            (received_size as f64) / elapsed.as_secs_f64() / (1024 * 1024 * 1024 / 8) as f64
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
        #[clap(
            long,
            help = "One or more network interfaces to use when accessing S3. Requires Linux 5.7+ or running as root.",
            value_name = "NETWORK_INTERFACE"
        )]
        bind: Option<Vec<String>>,
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
    #[arg(
        long,
        help = "Desired throughput in Gbps",
        default_value_t = 10.0,
        visible_alias = "maximum-throughput-gbps"
    )]
    throughput_target_gbps: f64,
    #[arg(
        long,
        help = "CRT Memory limit in GB",
        default_value = "0",
        visible_alias = "memory-limit-gb"
    )]
    crt_memory_limit_gb: u64,
    #[arg(long, help = "Part size in bytes for multi-part GET", default_value = "8388608")]
    part_size: usize,
    #[arg(long, help = "Number of benchmark iterations", default_value = "1")]
    iterations: usize,
    #[arg(long, help = "Number of concurrent downloads", default_value = "1")]
    downloads: usize,
    #[arg(long, help = "Enable CRT backpressure mode")]
    enable_backpressure: bool,
    #[arg(
        long,
        help = "Initial read window size in bytes, used to dictate how far ahead we request data from S3",
        default_value = "0"
    )]
    initial_window_size: Option<usize>,
}

fn main() {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    match args.client {
        Client::Real {
            bucket,
            key,
            region,
            bind,
        } => {
            let mut config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(&region));
            config = config.throughput_target_gbps(args.throughput_target_gbps);
            config = config.memory_limit_in_bytes(args.crt_memory_limit_gb * 1024 * 1024 * 1024);
            if let Some(interfaces) = &bind {
                config = config.network_interface_names(interfaces.clone());
            }
            config = config.part_size(args.part_size);
            if args.enable_backpressure {
                config = config.read_backpressure(true);
                config = config.initial_read_window(
                    args.initial_window_size
                        .expect("read window size is required when backpressure is enabled"),
                );
            }
            let client = S3CrtClient::new(config).expect("couldn't create client");

            run_benchmark(
                client,
                args.iterations,
                args.downloads,
                &bucket,
                &key,
                args.enable_backpressure,
            );
        }
        Client::Mock { object_size } => {
            const BUCKET: &str = "bucket";
            const KEY: &str = "key";

            let config = MockClient::config()
                .bucket(BUCKET)
                .part_size(args.part_size)
                .unordered_list_seed(None);
            let client = ThroughputMockClient::new(config, args.throughput_target_gbps);
            let client = Arc::new(client);

            client.add_object(KEY, MockObject::ramp(0xaa, object_size as usize, ETag::for_tests()));

            run_benchmark(
                client,
                args.iterations,
                args.downloads,
                BUCKET,
                KEY,
                args.enable_backpressure,
            );
        }
    }
}
