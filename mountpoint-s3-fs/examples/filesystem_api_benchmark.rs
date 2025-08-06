use std::error::Error;
use std::path::PathBuf;
use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};
use std::thread;
use std::time::{Duration, Instant};

use anyhow::Context;
use clap::{Parser, value_parser};
use futures::executor::block_on;
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_client::mock_client::MockClient;
use mountpoint_s3_client::types::{ETag, HeadObjectParams};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::fs::OpenFlags;
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::prefetch::Prefetcher;
use mountpoint_s3_fs::s3::config::INITIAL_READ_WINDOW_SIZE;
use mountpoint_s3_fs::s3::{Bucket, S3Path};
use mountpoint_s3_fs::{Runtime, S3Filesystem, S3FilesystemConfig, Superblock, SuperblockConfig};
use serde_json::{json, to_writer};
use std::ffi::OsStr;
use sysinfo::{RefreshKind, System};
use tracing::debug;
use tracing_subscriber::EnvFilter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;

const SECONDS_PER_DAY: u64 = 86400;

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
    name = "Mountpoint Filesystem API Benchmark",
    about = "Run workloads against the read API of Mountpoint. Fetched data is discarded."
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
        help = "Size of read requests to the filesystem",
        default_value_t = 128 * 1024,
        value_name = "BYTES",
    )]
    read_size: usize,

    #[arg(
        long,
        help = "Number of concurrent reader threads per file",
        default_value_t = 1,
        value_name = "THREADS"
    )]
    threads_per_file: usize,

    #[arg(long, help = "Number of times to download the S3 object", default_value_t = 1)]
    iterations: usize,

    #[arg(
        long,
        help = "Maximum duration in seconds (overrides iterations if specified)",
        value_name = "SECONDS",
        value_parser = parse_duration,
    )]
    max_duration: Option<Duration>,

    #[arg(
        long,
        help = "One or more network interfaces to use when accessing S3. Requires Linux 5.7+ or running as root.",
        value_name = "NETWORK_INTERFACE",
        value_delimiter = ','
    )]
    bind: Option<Vec<String>>,

    #[clap(long, help = "Output file to write the results to", value_name = "OUTPUT_FILE")]
    output_file: Option<PathBuf>,

    #[clap(long, help = "Use mock S3 client instead of real S3")]
    mock_client: bool,
}

fn parse_duration(arg: &str) -> Result<Duration, String> {
    arg.parse::<u64>()
        .map(Duration::from_secs)
        .map_err(|e| format!("Invalid duration: {e}"))
}

impl CliArgs {
    fn memory_target_in_bytes(&self) -> u64 {
        if let Some(target) = self.max_memory_target {
            target * 1024 * 1024
        } else {
            // Default to 95% of total system memory
            let sys = System::new_with_specifics(RefreshKind::everything());
            (sys.total_memory() as f64 * 0.95) as u64
        }
    }

    fn s3_client_config(&self) -> S3ClientConfig {
        // Set up backpressure with the same initial window used in Mountpoint.
        let mut client_config = S3ClientConfig::new()
            .read_backpressure(true)
            .initial_read_window(INITIAL_READ_WINDOW_SIZE)
            .endpoint_config(EndpointConfig::new(self.region.as_str()));
        if let Some(throughput_target_gbps) = self.maximum_throughput_gbps {
            client_config = client_config.throughput_target_gbps(throughput_target_gbps as f64);
        }
        if let Some(limit_gib) = self.crt_memory_limit_gib {
            client_config = client_config.memory_limit_in_bytes(limit_gib * 1024 * 1024 * 1024);
        }
        if let Some(part_size) = self.part_size {
            client_config = client_config.part_size(part_size as usize);
        }
        if let Some(nics) = &self.bind {
            client_config = client_config.network_interface_names(nics.to_vec());
        }
        client_config
    }
}

fn main() -> anyhow::Result<()> {
    init_tracing_subscriber();
    let _metrics_handle = mountpoint_s3_fs::metrics::install();

    let args = CliArgs::parse();

    let bucket = args.bucket.as_str();

    if args.mock_client {
        run_mock_benchmark(bucket, &args)?;
    } else {
        run_real_benchmark(bucket, &args)?;
    }

    Ok(())
}

fn run_mock_benchmark(bucket: &str, args: &CliArgs) -> anyhow::Result<()> {
    // Use mock client - create mock objects of 100GiB each
    let mock_object_size = 100 * 1024 * 1024 * 1024; // 100GiB

    // Initialize a PagedPool with part size
    let pool = PagedPool::new_with_candidate_sizes([args.part_size.unwrap_or(8 * 1024 * 1024) as usize]);

    let mut config = MockClient::config()
        .bucket(bucket)
        .unordered_list_seed(None)
        .enable_backpressure(true)
        .part_size(args.part_size.unwrap_or(8 * 1024 * 1024) as usize)
        .initial_read_window_size(INITIAL_READ_WINDOW_SIZE)
        .memory_pool(pool.clone());

    // Configure part size to match real client behavior
    if let Some(part_size) = args.part_size {
        config = config.part_size(part_size as usize);
    }

    let client = Arc::new(MockClient::new(config));

    // Add mock objects for each key
    let mut object_metadata = Vec::new();
    for key in &args.s3_keys {
        client.add_ramp_object(key, 0xaa, mock_object_size, ETag::for_tests());
        object_metadata.push((key.clone(), mock_object_size as u64));
    }

    let mem_limiter = Arc::new(MemoryLimiter::new(pool.clone(), args.memory_target_in_bytes()));
    let runtime = Runtime::new(
        futures::executor::ThreadPool::builder()
            .name_prefix("runtime")
            .create()?,
    );

    run_benchmark_impl(client, pool, mem_limiter, runtime, bucket, object_metadata, args)
}

fn run_real_benchmark(bucket: &str, args: &CliArgs) -> anyhow::Result<()> {
    // Use real S3 client
    let pool = PagedPool::new_with_candidate_sizes([args.part_size.unwrap_or(8 * 1024 * 1024) as usize]);
    let client_config = args.s3_client_config().memory_pool(pool.clone());
    let client = S3CrtClient::new(client_config).context("failed to create S3 CRT client")?;
    let mem_limiter = Arc::new(MemoryLimiter::new(pool.clone(), args.memory_target_in_bytes()));
    let runtime = Runtime::new(client.event_loop_group());

    // Verify if all objects exist and collect metadata
    let object_metadata: Vec<(String, u64)> = args
        .s3_keys
        .iter()
        .map(|key| {
            let head_result = block_on(client.head_object(bucket, key, &HeadObjectParams::new()))
                .with_context(|| format!("HeadObject failed for {key}"))?;
            Ok((key.clone(), head_result.size))
        })
        .collect::<anyhow::Result<Vec<_>>>()?;

    run_benchmark_impl(client.into(), pool, mem_limiter, runtime, bucket, object_metadata, args)
}

fn run_benchmark_impl<T: ObjectClient + Send + Sync + 'static>(
    client: Arc<T>,
    pool: PagedPool,
    mem_limiter: Arc<MemoryLimiter>,
    runtime: Runtime,
    bucket: &str,
    object_metadata: Vec<(String, u64)>,
    args: &CliArgs,
) -> anyhow::Result<()> {
    // Create the filesystem
    let filesystem_config = S3FilesystemConfig::default();
    let s3_path = S3Path::new(Bucket::new(bucket).context("invalid bucket name")?, Default::default());

    let prefetcher_builder = Prefetcher::default_builder(client.clone());
    let superblock = Superblock::new(
        client.clone(),
        s3_path,
        SuperblockConfig {
            cache_config: filesystem_config.cache_config.clone(),
            s3_personality: filesystem_config.s3_personality,
        },
    );

    let filesystem = Arc::new(S3Filesystem::new(
        client,
        prefetcher_builder,
        pool,
        runtime,
        superblock,
        filesystem_config,
    ));

    let total_start = Instant::now();
    let mut iteration = 0;
    let mut total_bytes = 0;
    let mut iter_results = Vec::new();
    let max_duration = args.max_duration.unwrap_or(Duration::from_secs(SECONDS_PER_DAY));
    let timeout: Instant = total_start.checked_add(max_duration).expect("Duration overflow error");

    while iteration < args.iterations && Instant::now() < timeout {
        let received_bytes = Arc::new(AtomicU64::new(0));
        let start = Instant::now();

        thread::scope(|scope| {
            let mut tasks = Vec::new();

            for (key, size) in &object_metadata {
                for thread_id in 0..args.threads_per_file {
                    let filesystem = filesystem.clone();
                    let received_bytes = received_bytes.clone();
                    let key = key.clone();
                    let size = *size;
                    let read_size = args.read_size;

                    let task = scope.spawn(move || {
                        let result = block_on(read_file_worker(filesystem, &key, size, read_size, timeout, thread_id));
                        if let Ok(bytes_read) = result {
                            received_bytes.fetch_add(bytes_read, Ordering::SeqCst);
                        } else {
                            // As file read failures can produce misleading results, exit the benchmarks
                            eprintln!("File read failed: {:?}", result.err());
                            eprintln!("Exiting benchmarks due to read failure");
                            std::process::exit(1);
                        }
                    });

                    tasks.push(task);
                }
            }

            for task in tasks {
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
            "elapsed_seconds": elapsed.as_secs_f64(),
        }));
        iteration += 1;
    }

    let total_elapsed = total_start.elapsed();
    println!(
        "\nTotal: {iteration} iterations, {total_bytes} bytes in {:.2}s: {:.2} Gib/s",
        total_elapsed.as_secs_f64(),
        (total_bytes as f64) / total_elapsed.as_secs_f64() / (1024 * 1024 * 1024 / 8) as f64
    );

    if let Some(output_path) = &args.output_file {
        let output_file = std::fs::File::create(output_path).expect("Failed to create output_file");
        let results = json!({
            "summary": {
                "total_bytes": total_bytes,
                "total_elapsed_seconds": total_elapsed.as_secs_f64(),
                "max_duration_seconds": max_duration.as_secs_f64(),
                "iterations": iteration,
            },
            "iterations": iter_results
        });
        to_writer(output_file, &results).expect("Failed to write to output file");
    }

    Ok(())
}

async fn read_file_worker<T: ObjectClient + Clone + Send + Sync>(
    filesystem: Arc<S3Filesystem<T>>,
    key: &str,
    size: u64,
    read_size: usize,
    timeout: Instant,
    thread_id: usize,
) -> Result<u64, Box<dyn Error>> {
    debug!("Thread {} starting to read file {}", thread_id, key);

    // Look up the file first to get its inode
    let lookup_result = filesystem.lookup(1, OsStr::new(key)).await?; // 1 is root inode
    let ino = lookup_result.attr.ino;

    // Open the file
    let opened = filesystem.open(ino, OpenFlags::O_RDWR, 0).await?;
    let file_handle = opened.fh;

    let mut offset = 0;
    let mut total_bytes_read = 0;

    while offset < size && Instant::now() < timeout {
        let bytes_to_read = std::cmp::min(read_size, (size - offset) as usize);
        let data = filesystem
            .read(ino, file_handle, offset as i64, bytes_to_read as u32, 0, None)
            .await?;
        let bytes_read = data.len() as u64;
        debug!("Thread {} read {bytes_read} bytes at offset {offset}", thread_id);

        offset += bytes_read;
        total_bytes_read += bytes_read;

        if bytes_read == 0 {
            break;
        }
    }

    // Release the file handle
    filesystem.release(ino, file_handle, 0, None, false).await?;

    debug!(
        "Thread {} finished reading file {}, total bytes: {}",
        thread_id, key, total_bytes_read
    );
    Ok(total_bytes_read)
}
