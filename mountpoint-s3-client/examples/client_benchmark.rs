use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::time::Instant;

use clap::{Arg, Command};
use futures::StreamExt;
use mountpoint_s3_client::{EndpointConfig, ObjectClient, S3ClientConfig, S3CrtClient};
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
            Arg::new("iterations")
                .long("iterations")
                .help("Number of times to download")
                .takes_value(true),
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
    let iterations = matches
        .get_one::<String>("iterations")
        .map(|s| s.parse::<usize>().expect("iterations must be a number"));
    let region = matches.get_one::<String>("region").unwrap();

    let mut config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(region));
    if let Some(throughput_target_gbps) = throughput_target_gbps {
        config = config.throughput_target_gbps(throughput_target_gbps);
    }
    if let Some(part_size) = part_size {
        config = config.part_size(part_size);
    }
    let client = S3CrtClient::new(config).expect("couldn't create client");

    for i in 0..iterations.unwrap_or(1) {
        let received_size = Arc::new(AtomicU64::new(0));
        let start = Instant::now();
        let client = client.clone();
        let received_size_clone = Arc::clone(&received_size);
        futures::executor::block_on(async move {
            let mut request = client
                .get_object(bucket, key, None, None)
                .await
                .expect("couldn't create get request");
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
