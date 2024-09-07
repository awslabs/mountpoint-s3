use std::str::FromStr;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::thread;
use std::time::Instant;

use clap::{Arg, Command};
use futures::executor::{block_on, ThreadPool};
use mountpoint_s3::prefetch::{default_prefetch, Prefetch, PrefetchResult};
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
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

fn main() {
    init_tracing_subscriber();

    let matches = Command::new("benchmark")
        .about("Download a single key from S3 and ignore its contents")
        .arg(Arg::new("bucket").required(true))
        .arg(Arg::new("key").required(true))
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
        .arg(Arg::new("read-size").long("read-size").help("Size of read requests"))
        .arg(
            Arg::new("iterations")
                .long("iterations")
                .help("Number of times to download"),
        )
        .arg(
            Arg::new("downloads")
                .long("downloads")
                .help("Number of concurrent downloads"),
        )
        .arg(Arg::new("region").long("region").default_value("us-east-1"))
        .get_matches();

    let bucket = matches.get_one::<String>("bucket").unwrap();
    let key = matches.get_one::<String>("key").unwrap();
    let throughput_target_gbps = matches
        .get_one::<String>("throughput-target-gbps")
        .map(|s| s.parse::<f64>().expect("throughput target must be an f64"));
    let part_size = matches
        .get_one::<String>("part-size")
        .map(|s| s.parse::<usize>().expect("part size must be a usize"));
    let read_size = matches
        .get_one::<String>("read-size")
        .map(|s| s.parse::<usize>().expect("read size must be a usize"))
        .unwrap_or(128 * 1024);
    let iterations = matches
        .get_one::<String>("iterations")
        .map(|s| s.parse::<usize>().expect("iterations must be a number"));
    let downloads = matches
        .get_one::<String>("downloads")
        .map(|s| s.parse::<usize>().expect("downloads must be a number"))
        .unwrap_or(1);
    let region = matches.get_one::<String>("region").unwrap();

    let initial_read_window_size = 1024 * 1024 + 128 * 1024;
    let mut config = S3ClientConfig::new()
        .endpoint_config(EndpointConfig::new(region))
        .read_backpressure(true)
        .initial_read_window(initial_read_window_size);
    if let Some(throughput_target_gbps) = throughput_target_gbps {
        config = config.throughput_target_gbps(throughput_target_gbps);
    }
    if let Some(part_size) = part_size {
        config = config.part_size(part_size);
    }
    let client = Arc::new(S3CrtClient::new(config).expect("couldn't create client"));

    let head_object_result = block_on(client.head_object(bucket, key)).expect("HeadObject failed");
    let size = head_object_result.object.size;
    let etag = ETag::from_str(&head_object_result.object.etag).unwrap();

    for i in 0..iterations.unwrap_or(1) {
        let runtime = ThreadPool::builder().pool_size(downloads).create().unwrap();
        let manager = default_prefetch(runtime, Default::default());
        let received_bytes = Arc::new(AtomicU64::new(0));

        let start = Instant::now();

        thread::scope(|scope| {
            for _ in 0..downloads {
                let received_bytes = received_bytes.clone();
                let mut request = manager.prefetch(client.clone(), bucket, key, size, etag.clone());

                scope.spawn(|| {
                    futures::executor::block_on(async move {
                        let mut offset = 0;
                        while offset < size {
                            let bytes = request.read(offset, read_size).await.unwrap();
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
