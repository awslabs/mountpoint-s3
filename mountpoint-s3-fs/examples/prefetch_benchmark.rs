use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::thread;
use std::time::{Duration, Instant};

use anyhow::Context;
use clap::{value_parser, Parser, ValueEnum};
use futures::executor::block_on;
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::data_cache::{CacheLimit, DiskDataCache, DiskDataCacheConfig, DEFAULT_CACHE_BLOCK_SIZE};
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::{Prefetcher, PrefetcherConfig};
use mountpoint_s3_fs::Runtime;
use sysinfo::{RefreshKind, System};
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::EnvFilter;

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

    #[clap(
        long,
        help = "Enable caching of object content to the given directory.",
        value_name = "DIRECTORY"
    )]
    pub disk_cache: Option<PathBuf>,

    #[clap(
        long,
        help = "Configure how the benchmark cleans the data cache directory.",
        default_value = "every-iteration",
        value_name = "MODE"
    )]
    pub disk_cache_cleanup: CacheCleanupMode,
}

#[derive(Clone, Debug)]
pub enum CacheCleanupMode {
    /// Never try to clean at start or end of benchmark overall or for iterations.
    ///
    /// This can allow effectively a 'warm' cache for testing.
    /// This tool doesn't offer to perform warm up in-process as this can impact the process itself (e.g. memory usage).
    /// You should warm up the cache with a separate process (such as this benchmark, but an earlier invocation).
    Never,
    /// Try to clean at start and end of every benchmark iteration.
    ///
    /// This can allow effectively a 'cold' cache for testing.
    EveryIteration,
}

impl ValueEnum for CacheCleanupMode {
    fn value_variants<'a>() -> &'a [Self] {
        &[CacheCleanupMode::Never, CacheCleanupMode::EveryIteration]
    }

    fn to_possible_value(&self) -> Option<clap::builder::PossibleValue> {
        match self {
            CacheCleanupMode::Never => Some(clap::builder::PossibleValue::new("never")),
            CacheCleanupMode::EveryIteration => Some(clap::builder::PossibleValue::new("every-iteration")),
        }
    }
}

fn main() -> anyhow::Result<()> {
    init_tracing_subscriber();
    let _metrics_handle = mountpoint_s3_fs::metrics::install();

    let args = CliArgs::parse();

    let bucket = args.bucket.as_str();
    let key = args.s3_key.as_str();

    let client = make_s3_client_from_args(&args).context("failed to create S3 CRT client")?;

    let mem_limiter = {
        let max_memory_target = if let Some(target) = args.max_memory_target {
            target * 1024 * 1024
        } else {
            // Default to 95% of total system memory
            let sys = System::new_with_specifics(RefreshKind::everything());
            (sys.total_memory() as f64 * 0.95) as u64
        };
        Arc::new(MemoryLimiter::new(client.clone(), max_memory_target))
    };

    let head_object_result = block_on(client.head_object(bucket, key, &HeadObjectParams::new()))
        .context("initial HeadObject to fetch object metadata before benchmark failed")?;
    let size = head_object_result.size;
    let object_id = ObjectId::new(key.to_string(), head_object_result.etag);

    let runtime = Runtime::new(client.event_loop_group());

    for iteration in 0..args.iterations {
        let manager = {
            let client = client.clone();
            let builder = match &args.disk_cache {
                None => Prefetcher::default_builder(client),
                Some(cache_directory) => {
                    if matches!(args.disk_cache_cleanup, CacheCleanupMode::EveryIteration) {
                        tracing::trace!(
                            iteration,
                            ?cache_directory,
                            "removing contents of cache directory between iterations",
                        );
                        // Wait a little to avoid files existing in the direcotry.
                        // Presumably, this is waiting for any tasks writing blocks on runtime to complete.
                        // TODO: Fix this sillyness?
                        std::thread::sleep(Duration::from_millis(2000));
                        remove_all_entries(cache_directory.as_path())
                            .context("failed to cleanup cache directory between iterations")?;
                    }

                    let config = DiskDataCacheConfig {
                        cache_directory: cache_directory.clone(),
                        block_size: DEFAULT_CACHE_BLOCK_SIZE,
                        limit: CacheLimit::Unbounded,
                    };
                    let disk_cache = DiskDataCache::new(config);
                    Prefetcher::caching_builder(disk_cache, client)
                }
            };
            builder.build(runtime.clone(), mem_limiter.clone(), PrefetcherConfig::default())
        };

        let received_bytes = Arc::new(AtomicU64::new(0));
        let start = Instant::now();

        thread::scope(|scope| {
            for _ in 0..args.downloads {
                let received_bytes = received_bytes.clone();
                let mut request = manager.prefetch(bucket.to_string(), object_id.clone(), size);

                scope.spawn(|| {
                    futures::executor::block_on(async move {
                        let mut offset = 0;
                        while offset < size {
                            let bytes = request.read(offset, args.read_size).await.unwrap();
                            let length = bytes.len() as u64;
                            offset += length;
                            received_bytes.fetch_add(length, Ordering::SeqCst);
                        }
                    })
                });
            }
        });

        let elapsed = start.elapsed();

        let received_size = received_bytes.load(Ordering::SeqCst);
        println!(
            "{}: received {} bytes in {:.2}s: {:.2} Gib/s",
            iteration,
            received_size,
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
        client_config = client_config.network_interface_names(interfaces.clone());
    }
    let client = S3CrtClient::new(client_config)?;
    Ok(client)
}

/// Remove all directory entries recursively under `directory`.
fn remove_all_entries(directory: &Path) -> std::io::Result<()> {
    for entry in std::fs::read_dir(directory)? {
        let path = entry?.path();
        match (path.is_file(), path.is_dir()) {
            (true, false) => std::fs::remove_file(&path)?,
            (false, true) => std::fs::remove_dir_all(&path)?,
            _ => unreachable!("entry should be exactly one of file or directory"),
        }
    }
    Ok(())
}
