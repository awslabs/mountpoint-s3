use std::io::Write;
use std::sync::{Arc, Mutex};

use clap::{Arg, Command};
use futures::StreamExt;
use mountpoint_s3_client::{EndpointConfig, ObjectClient, S3ClientConfig, S3CrtClient};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use regex::Regex;
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

    let matches = Command::new("download")
        .about("Download a single key from S3")
        .arg(Arg::new("bucket").required(true))
        .arg(Arg::new("key").required(true))
        .arg(Arg::new("region").long("region").default_value("us-east-1"))
        .arg(
            Arg::new("range")
                .long("range")
                .help("byte range to download (inclusive)")
                .value_name("0-10"),
        )
        .get_matches();

    let bucket = matches.get_one::<String>("bucket").unwrap();
    let key = matches.get_one::<String>("key").unwrap();
    let region = matches.get_one::<String>("region").unwrap();
    let range = matches.get_one::<String>("range").map(|s| {
        let range_regex = Regex::new(r"^(?P<start>[0-9]+)-(?P<end>[0-9]+)$").unwrap();
        let matches = range_regex.captures(s).expect("invalid range");
        let start = matches.name("start").unwrap().as_str().parse::<u64>().unwrap();
        let end = matches.name("end").unwrap().as_str().parse::<u64>().unwrap();
        // bytes range is inclusive, but the `Range` type is exclusive, so bump the end by 1
        start..(end + 1)
    });

    let client = S3CrtClient::new(S3ClientConfig::new().endpoint_config(EndpointConfig::new(region)))
        .expect("couldn't create client");

    let last_offset = Arc::new(Mutex::new(None));
    let last_offset_clone = Arc::clone(&last_offset);
    futures::executor::block_on(async move {
        let mut request = client
            .get_object(bucket, key, range, None)
            .await
            .expect("couldn't create get request");
        loop {
            match StreamExt::next(&mut request).await {
                Some(Ok((offset, body))) => {
                    let mut last_offset = last_offset_clone.lock().unwrap();
                    assert!(Some(offset) > *last_offset, "out-of-order body parts");
                    *last_offset = Some(offset);
                    let stdout = std::io::stdout();
                    let mut guard = stdout.lock();
                    guard.write_all(&body[..]).expect("write failed");
                }
                Some(Err(e)) => {
                    tracing::error!(error = ?e, "request failed");
                    break;
                }
                None => break,
            }
        }
    });
}
