use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};
use std::thread;
use std::time::Instant;

use anyhow::Context;
use clap::{Parser, value_parser};
use futures::executor::block_on;
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::Runtime;
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::{Prefetcher, PrefetcherConfig};
use sysinfo::{RefreshKind, System};
use tracing_subscriber::EnvFilter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("should succeed as first and only adapter init call");

    let subscriber = Subscriber::builder()
        .with_env_filter(EnvFilter::from_default_env())
        .with_ansi(supports_color::on(supports_color::Stream::Stderr).is_some())
        .with_writer(std::io::stderr)
        .finish();

    subscriber
        .try_init()
        .expect("should succeed as first and only subscriber init call");
}

#[derive(Parser, Debug)]
#[clap(
    name = "Mountpoint Prefetcher Benchmark",
    about = "Run workloads against the prefetcher component of Mountpoint. Fetched data is discarded."
)]
pub struct CliArgs {
    #[clap(help = "S3 bucket name containing the S3 objects to fetch")]
    pub bucket: String,

    #[clap(help = "List of S3 object keys to fetch", num_args = 1.., value_delimiter = ',')]
    pub s3_keys: Vec<String>,

    #[clap(
        long,
        help = "AWS region of the bucket",
        default_value = "us-east-1",
        value_name = "AWS_REGION"
    )]
    pub region: String,

    #[clap(
        long,
        help = "Target throughput in gibibits per second",
        value_name = "N",
        value_parser = value_parser!(u64).range(1..),
        alias = "throughput-target-gbps",
    )]
    pub maximum_throughput_gbps: Option<u64>,

    #[arg(long, help = "Override value for CRT memory limit in gibibytes", value_name = "GiB")]
    pub crt_memory_limit_gib: Option<u64>,

    #[clap(
        long,
        help = "Maximum memory usage target for Mountpoint's memory limiter [default: 95% of total system memory]",
        value_name = "MiB",
        value_parser = value_parser!(u64).range(512..),
    )]
    pub max_memory_target: Option<u64>,

    #[clap(
        long,
        help = "Part size for multi-part GET in bytes",
        value_name = "BYTES",
        value_parser = value_parser!(u64).range(1..usize::MAX as u64),
        alias = "read-part-size",
    )]
    pub part_size: Option<u64>,

    #[arg(
        long,
        help = "Size of read requests requests to the prefetcher",
        default_value_t = 128 * 1024,
        value_name = "BYTES",
    )]
    read_size: usize,

    #[arg(long, help = "Number of times to download the S3 object", default_value_t = 1)]
    iterations: usize,

    #[arg(
        long,
        help = "Number of concurrent downloads per object",
        default_value_t = 1,
        value_name = "N"
    )]
    downloads_per_object: usize,

    #[clap(
        long,
        help = "One or more network interfaces to use when accessing S3. Requires Linux 5.7+ or running as root.",
        value_name = "NETWORK_INTERFACE"
    )]
    pub bind: Option<Vec<String>>,
}

fn create_memory_limiter(args: &CliArgs, client: &S3CrtClient) -> Arc<MemoryLimiter<S3CrtClient>> {
    let max_memory_target = if let Some(target) = args.max_memory_target {
        target * 1024 * 1024
    } else {
        // Default to 95% of total system memory
        let sys = System::new_with_specifics(RefreshKind::everything());
        (sys.total_memory() as f64 * 0.95) as u64
    };
    Arc::new(MemoryLimiter::new(client.clone(), max_memory_target))
}

fn main() -> anyhow::Result<()> {
    init_tracing_subscriber();
    let _metrics_handle = mountpoint_s3_fs::metrics::install();

    let args = CliArgs::parse();

    let bucket = args.bucket.as_str();
    let client = make_s3_client_from_args(&args).context("failed to create S3 CRT client")?;
    let mem_limiter = create_memory_limiter(&args, &client);
    let runtime = Runtime::new(client.event_loop_group());

    // Verify if all objects exist and collect metadata
    let object_metadata: Vec<(ObjectId, u64)> = args
        .s3_keys
        .iter()
        .map(|key| {
            let head_result = block_on(client.head_object(bucket, key, &HeadObjectParams::new()))
                .with_context(|| format!("HeadObject failed for {key}"))?;
            Ok((ObjectId::new(key.to_string(), head_result.etag), head_result.size))
        })
        .collect::<anyhow::Result<Vec<_>>>()?;

    for iteration in 0..args.iterations {
        let received_bytes = Arc::new(AtomicU64::new(0));
        let start = Instant::now();

        thread::scope(|scope| {
            let mut download_tasks = Vec::new();

            for (object_id, size) in &object_metadata {
                for _ in 0..args.downloads_per_object {
                    let received_bytes = received_bytes.clone();
                    let object_id = object_id.clone();
                    let manager = Prefetcher::default_builder(client.clone()).build(
                        runtime.clone(),
                        mem_limiter.clone(),
                        PrefetcherConfig::default(),
                    );
                    let mut request = manager.prefetch(bucket.to_string(), object_id.clone(), *size);

                    download_tasks.push(scope.spawn(move || {
                        futures::executor::block_on(async move {
                            let mut offset = 0;
                            while offset < *size {
                                let bytes = request.read(offset, args.read_size).await.unwrap();
                                let length = bytes.len() as u64;
                                offset += length;
                                received_bytes.fetch_add(length, Ordering::SeqCst);
                            }
                        })
                    }));
                }
            }

            for task in download_tasks {
                task.join().unwrap();
            }
        });

        let elapsed = start.elapsed();

        let received_size = received_bytes.load(Ordering::SeqCst);
        println!(
            "{iteration}: received {received_size} bytes in {:.2}s: {:.2} Gib/s",
            elapsed.as_secs_f64(),
            (received_size as f64) / elapsed.as_secs_f64() / (1024 * 1024 * 1024 / 8) as f64
        );
    }

    Ok(())
}

fn make_s3_client_from_args(args: &CliArgs) -> anyhow::Result<S3CrtClient> {
    let initial_read_window_size = 1024 * 1024 + 128 * 1024;
    let mut client_config = S3ClientConfig::new()
        .read_backpressure(true)
        .initial_read_window(initial_read_window_size)
        .endpoint_config(EndpointConfig::new(args.region.as_str()));
    if let Some(throughput_target_gbps) = args.maximum_throughput_gbps {
        client_config = client_config.throughput_target_gbps(throughput_target_gbps as f64);
    }
    if let Some(limit_gib) = args.crt_memory_limit_gib {
        client_config = client_config.memory_limit_in_bytes(limit_gib * 1024 * 1024 * 1024);
    }
    if let Some(part_size) = args.part_size {
        client_config = client_config.part_size(part_size as usize);
    }
    if let Some(interfaces) = &args.bind {
        let nics: Vec<String> = interfaces
            .iter()
            .flat_map(|iface| iface.split(',').map(|s| s.trim().to_string()))
            .filter(|s| !s.is_empty())
            .collect();
        client_config = client_config.network_interface_names(nics);
    }
    Ok(S3CrtClient::new(client_config)?)
}
