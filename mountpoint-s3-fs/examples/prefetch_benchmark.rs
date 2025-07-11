use std::error::Error;
use std::path::PathBuf;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::thread;
use std::time::{Duration, Instant};

use anyhow::Context;
use clap::{Parser, value_parser};
use futures::executor::block_on;
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::Runtime;
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::{PrefetchGetObject, Prefetcher, PrefetcherConfig};
use serde_json::{json, to_writer};
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
        help = "Maximum runtime in seconds (overrides iterations if specified)",
        value_name = "SECONDS"
    )]
    runtime: Option<u64>,

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

    #[clap(long, help = "Output file to write the results to", value_name = "OUTPUT_FILE")]
    pub output_file: Option<PathBuf>,
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

    let runtime_exceeded = Arc::new(AtomicBool::new(false));
    let total_start = Instant::now();
    if let Some(runtime) = args.runtime {
        thread::spawn({
            let runtime_exceeded = runtime_exceeded.clone();
            move || {
                thread::sleep(Duration::from_secs(runtime));
                runtime_exceeded.store(true, Ordering::SeqCst);
            }
        });
    }
    let mut iteration = 0;
    let mut total_bytes = 0;
    let mut iter_results = Vec::new();
    while iteration < args.iterations && !runtime_exceeded.load(Ordering::SeqCst) {
        let received_bytes = Arc::new(AtomicU64::new(0));
        let start = Instant::now();
        let manager = Prefetcher::default_builder(client.clone()).build(
            runtime.clone(),
            mem_limiter.clone(),
            PrefetcherConfig::default(),
        );

        thread::scope(|scope| {
            let mut download_tasks = Vec::new();

            for (object_id, size) in &object_metadata {
                for _ in 0..args.downloads_per_object {
                    let received_bytes = received_bytes.clone();
                    let object_id = object_id.clone();
                    let request = manager.prefetch(bucket.to_string(), object_id.clone(), *size);
                    let read_size = args.read_size;
                    let runtime_exceeded_clone = runtime_exceeded.clone();

                    let task = scope.spawn(move || {
                        let result = block_on(wait_for_download(
                            request,
                            *size,
                            read_size as u64,
                            runtime_exceeded_clone,
                        ));
                        if let Ok(bytes_read) = result {
                            received_bytes.fetch_add(bytes_read, Ordering::SeqCst);
                        } else {
                            // As object download failures can produce
                            // misleading results, exit the benchmarks
                            // to avoid confusion.
                            eprintln!("Download failed: {:?}", result.err());
                            eprintln!("Exiting benchmarks due to download failure");
                            std::process::exit(1);
                        }
                    });

                    download_tasks.push(task);
                }
            }

            for task in download_tasks {
                task.join().unwrap();
            }
        });

        let elapsed = start.elapsed();
        let received_size = received_bytes.load(Ordering::SeqCst);
        total_bytes += received_size;
        println!(
            "{iteration}: received {received_size} bytes in {:.2}s: {:.2} Gib/s",
            elapsed.as_secs_f64(),
            (received_size as f64) / elapsed.as_secs_f64() / (1024 * 1024 * 1024 / 8) as f64
        );
        iter_results.push(json!({
            "iteration": iteration,
            "bytes": received_size,
            "duration_seconds": elapsed.as_secs_f64(),
        }));
        iteration += 1;
    }
    let total_elapsed = total_start.elapsed();
    println!(
        "\nTotal: {iteration} iterations, {total_bytes} bytes in {:.2}s: {:.2} Gib/s",
        total_elapsed.as_secs_f64(),
        (total_bytes as f64) / total_elapsed.as_secs_f64() / (1024 * 1024 * 1024 / 8) as f64
    );

    if let Some(output_path) = args.output_file {
        let output_file = std::fs::File::create(output_path).expect("Failed to create output_file: {output_path}");
        let results = json!({
            "summary": {
                "total_bytes": total_bytes,
                "duration_seconds": total_elapsed.as_secs_f64(),
                "iterations": iteration,
            },
            "iterations": iter_results
        });
        to_writer(output_file, &results).expect("Failed to write to output file: {output_path}");
    }

    Ok(())
}

async fn wait_for_download(
    mut request: PrefetchGetObject<S3CrtClient>,
    size: u64,
    read_size: u64,
    runtime_exceeded: Arc<AtomicBool>,
) -> Result<u64, Box<dyn Error>> {
    let mut offset = 0;
    let mut total_bytes_read = 0;
    while offset < size && !runtime_exceeded.load(Ordering::SeqCst) {
        let bytes = request.read(offset, read_size as usize).await?;
        let bytes_read = bytes.len() as u64;
        offset += bytes_read;
        total_bytes_read += bytes_read;
    }
    Ok(total_bytes_read)
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
