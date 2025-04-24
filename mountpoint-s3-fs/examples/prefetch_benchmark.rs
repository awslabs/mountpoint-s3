use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::thread;
use std::time::Instant;

use clap::{value_parser, Parser};
use futures::executor::block_on;
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::{default_prefetch, Prefetch, PrefetchResult};
use sysinfo::{RefreshKind, System};
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

#[derive(Parser, Debug)]
#[clap(
    name = "Mountpoint Prefetcher Benchmark",
    about = "Run workloads against the prefetcher component of Mountpoint. Fetched data is discarded."
)]
pub struct CliArgs {
    #[clap(help = "S3 bucket name containing the S3 object to fetch")]
    pub bucket: String,

    #[clap(help = "S3 object key to fetch")]
    pub s3_key: String,

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

    #[arg(long, help = "Number of concurrent downloads", default_value_t = 1, value_name = "N")]
    downloads: usize,

    #[clap(
        long,
        help = "One or more network interfaces to use when accessing S3. Requires Linux 5.7+ or running as root.",
        value_name = "NETWORK_INTERFACE"
    )]
    pub bind: Option<Vec<String>>,
}

fn main() {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    let bucket = args.bucket.as_str();
    let key = args.s3_key.as_str();

    let initial_read_window_size = 1024 * 1024 + 128 * 1024;
    let mut config = S3ClientConfig::new()
        .endpoint_config(EndpointConfig::new(args.region.as_str()))
        .read_backpressure(true)
        .initial_read_window(initial_read_window_size);
    if let Some(throughput_target_gbps) = args.maximum_throughput_gbps {
        config = config.throughput_target_gbps(throughput_target_gbps as f64);
    }
    if let Some(limit_gib) = args.crt_memory_limit_gib {
        config = config.memory_limit_in_bytes(limit_gib * 1024 * 1024 * 1024);
    }
    if let Some(part_size) = args.part_size {
        config = config.part_size(part_size as usize);
    }
    if let Some(interfaces) = &args.bind {
        config = config.network_interface_names(interfaces.clone());
    }
    let client = Arc::new(S3CrtClient::new(config).expect("couldn't create client"));

    let max_memory_target = if let Some(target) = args.max_memory_target {
        target * 1024 * 1024
    } else {
        // Default to 95% of total system memory
        let sys = System::new_with_specifics(RefreshKind::everything());
        (sys.total_memory() as f64 * 0.95) as u64
    };
    let mem_limiter = Arc::new(MemoryLimiter::new(client.clone(), max_memory_target));

    let head_object_result =
        block_on(client.head_object(bucket, key, &HeadObjectParams::new())).expect("HeadObject failed");
    let size = head_object_result.size;
    let etag = head_object_result.etag;

    for i in 0..args.iterations {
        let runtime = client.event_loop_group();
        let manager = default_prefetch(runtime, Default::default());
        let received_bytes = Arc::new(AtomicU64::new(0));

        let start = Instant::now();

        let object_id = ObjectId::new(key.to_string(), etag.clone());
        thread::scope(|scope| {
            for _ in 0..args.downloads {
                let received_bytes = received_bytes.clone();
                let mut request = manager.prefetch(
                    client.clone(),
                    mem_limiter.clone(),
                    bucket.to_string(),
                    object_id.clone(),
                    size,
                );

                scope.spawn(|| {
                    futures::executor::block_on(async move {
                        let mut offset = 0;
                        while offset < size {
                            let bytes = request.read(offset, args.read_size).await.unwrap();
                            offset += bytes.len() as u64;
                            received_bytes.fetch_add(bytes.len() as u64, Ordering::SeqCst);
                        }
                    })
                });
            }
        });

        let elapsed = start.elapsed();

        let received_size = received_bytes.load(Ordering::SeqCst);
        println!(
            "{}: received {} bytes in {:.2}s: {:.2}MiB/s",
            i,
            received_size,
            elapsed.as_secs_f64(),
            (received_size as f64) / elapsed.as_secs_f64() / (1024 * 1024) as f64
        );
    }
}
