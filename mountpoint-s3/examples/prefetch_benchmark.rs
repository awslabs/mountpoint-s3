use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::time::Instant;

use clap::{Arg, Command};
use futures::executor::{block_on, ThreadPool};
use mountpoint_s3::prefetch::Prefetcher;
use mountpoint_s3_client::{ETag, S3ClientConfig, S3CrtClient};
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

fn main() {
    init_tracing_subscriber();

    let matches = Command::new("benchmark")
        .about("Download a single key from S3 and ignore its contents")
        .arg(Arg::new("bucket").required(true))
        .arg(Arg::new("key").required(true))
        .arg(Arg::new("size").required(true))
        .arg(
            Arg::new("throughput-target-gbps")
                .long("throughput-target-gbps")
                .help("Desired throughput in Gbps"),
        )
        .arg(
            Arg::new("part-size")
                .long("part-size")
                .help("Part size for multi-part GET and PUT"),
        )
        .arg(
            Arg::new("iterations")
                .long("iterations")
                .help("Number of times to download"),
        )
        .arg(Arg::new("region").long("region").default_value("us-east-1"))
        .get_matches();

    let bucket = matches.get_one::<String>("bucket").unwrap();
    let key = matches.get_one::<String>("key").unwrap();
    let size = matches
        .get_one::<String>("size")
        .unwrap()
        .parse::<u64>()
        .expect("size must be u64");
    let throughput_target_gbps = matches
        .get_one::<String>("throughput-target-gbps")
        .map(|s| s.parse::<f64>().expect("throughput target must be an f64"));
    let part_size = matches
        .get_one::<String>("part-size")
        .map(|s| s.parse::<usize>().expect("part size must be a usize"));
    let iterations = matches
        .get_one::<String>("iterations")
        .map(|s| s.parse::<usize>().expect("iterations must be a number"));
    let region = matches.get_one::<String>("region").unwrap();

    let mut config = S3ClientConfig::new();
    if let Some(throughput_target_gbps) = throughput_target_gbps {
        config = config.throughput_target_gbps(throughput_target_gbps);
    }
    if let Some(part_size) = part_size {
        config = config.part_size(part_size);
    }
    let client = Arc::new(S3CrtClient::new(region, config).expect("couldn't create client"));

    for i in 0..iterations.unwrap_or(1) {
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let manager = Prefetcher::new(client.clone(), runtime, Default::default());
        let received_size = Arc::new(AtomicU64::new(0));

        let start = Instant::now();

        let mut request = manager.get(bucket, key, size, ETag::for_tests());
        block_on(async {
            loop {
                let offset = received_size.load(Ordering::SeqCst);
                if offset >= size {
                    break;
                }
                let bytes = request.read(offset, 1 << 20).await.unwrap();
                received_size.fetch_add(bytes.len() as u64, Ordering::SeqCst);
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
