use std::io::Write;
use std::ops::Range;
use std::sync::{Arc, Mutex};

use clap::Parser;
use futures::StreamExt;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::types::GetObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
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

#[derive(Parser, Debug)]
#[clap(about = "Download a single object from S3")]
pub struct CliArgs {
    #[clap(help = "S3 bucket name containing the S3 object to fetch")]
    pub bucket: String,

    #[clap(help = "S3 object key to fetch")]
    pub s3_key: String,

    #[clap(long, help = "AWS region of the bucket", default_value = "us-east-1")]
    pub region: String,

    #[clap(
        long,
        help = "byte range to download (inclusive)",
        value_parser = parse_range,
    )]
    pub range: Option<Range<u64>>,

    #[arg(
        long,
        help = "Configure S3 client's desired throughput in Gbps",
        default_value_t = 10.0,
        visible_alias = "maximum-throughput-gbps",
        value_name = "GBPS"
    )]
    throughput_target_gbps: f64,

    #[clap(
        long,
        help = "One or more network interfaces to use when accessing S3. Requires Linux 5.7+ or running as root.",
        value_name = "NETWORK_INTERFACE"
    )]
    pub bind: Option<Vec<String>>,
}

/// Empty error type, since we don't care too much for an example.
#[derive(Debug, thiserror::Error)]
#[error("failed to parse range")]
struct RangeParseError;

fn parse_range(range: &str) -> Result<Range<u64>, RangeParseError> {
    let range_regex = Regex::new(r"^(?P<start>[0-9]+)-(?P<end>[0-9]+)$").unwrap();
    let matches = range_regex.captures(range).expect("failed to recognize range pattern");
    let start = matches
        .name("start")
        .unwrap()
        .as_str()
        .parse::<u64>()
        .expect("failed to parse range start");
    let end = matches
        .name("end")
        .unwrap()
        .as_str()
        .parse::<u64>()
        .expect("failed to parse range end");

    // bytes range is inclusive, but the `Range` type is exclusive, so bump the end by 1
    Ok(start..(end + 1))
}

fn main() {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    let bucket = &args.bucket;
    let key = &args.s3_key;
    let region = &args.region;
    let range = args.range;

    let mut config = S3ClientConfig::new();

    config = config.endpoint_config(EndpointConfig::new(region));
    config = config.throughput_target_gbps(args.throughput_target_gbps);
    if let Some(interfaces) = &args.bind {
        config = config.network_interface_names(interfaces.clone());
    }

    let client = S3CrtClient::new(config).expect("couldn't create client");

    let last_offset = Arc::new(Mutex::new(None));
    let last_offset_clone = Arc::clone(&last_offset);
    futures::executor::block_on(async move {
        let mut request = client
            .get_object(bucket, key, &GetObjectParams::new().range(range))
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
