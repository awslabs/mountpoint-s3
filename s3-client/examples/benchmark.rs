use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::time::Instant;

use s3_client::{S3Client, S3ClientConfig, StreamingGetObject};

use clap::{Arg, Command};
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::EnvFilter;

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
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
                .help("Desired throughput in Gbps")
                .takes_value(true),
        )
        .arg(
            Arg::new("part-size")
                .long("part-size")
                .help("Part size for multi-part GET and PUT")
                .takes_value(true),
        )
        .arg(
            Arg::new("streaming-get")
                .long("streaming-get")
                .help("Use Rust streaming GET"),
        )
        .arg(
            Arg::new("iterations")
                .long("iterations")
                .help("Number of times to download")
                .takes_value(true),
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
    let use_rust_streaming_get = matches.contains_id("streaming-get");
    let iterations = matches
        .get_one::<String>("iterations")
        .map(|s| s.parse::<usize>().expect("iterations must be a number"));
    let region = matches.get_one::<String>("region").unwrap();

    let config = S3ClientConfig {
        throughput_target_gbps,
        part_size,
    };
    let client = Arc::new(S3Client::new(region, config).expect("couldn't create client"));

    for i in 0..iterations.unwrap_or(1) {
        let received_size = Arc::new(AtomicU64::new(0));
        let start = Instant::now();
        if use_rust_streaming_get {
            let mut request = StreamingGetObject::new(Arc::clone(&client), bucket, key, size);
            loop {
                let offset = received_size.load(Ordering::SeqCst);
                if offset >= size {
                    break;
                }
                let bytes = request.read(offset, 1 << 20);
                received_size.fetch_add(bytes.len() as u64, Ordering::SeqCst);
            }
        } else {
            let received_size_clone = Arc::clone(&received_size);
            let request = client
                .get_object(bucket, key, None, move |_offset, body| {
                    received_size_clone.fetch_add(body.len() as u64, Ordering::SeqCst);
                })
                .expect("failed to start request");
            request.wait().expect("request failed");
        }

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
