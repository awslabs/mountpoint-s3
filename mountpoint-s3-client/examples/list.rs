use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;

use clap::Parser;
use tracing_subscriber::EnvFilter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    let subscriber = Subscriber::builder()
        .with_env_filter(EnvFilter::from_default_env())
        .with_ansi(supports_color::on(supports_color::Stream::Stderr).is_some())
        .with_writer(std::io::stderr)
        .finish();

    subscriber.try_init().expect("unable to install global subscriber");
}

#[derive(Parser, Debug)]
#[clap(about = "List an S3 bucket using Mountpoint's S3 client")]
pub struct CliArgs {
    #[clap(help = "S3 bucket to list")]
    pub bucket: String,

    #[clap(long, help = "Delimiter to use to group keys service-side")]
    pub delimiter: Option<String>,

    #[clap(long, help = "Prefix to list within")]
    pub prefix: Option<String>,

    #[clap(long, help = "AWS region of the bucket", default_value = "us-east-1")]
    pub region: String,
}

fn main() {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    let bucket = args.bucket.as_str();
    let delimiter = args.delimiter.unwrap_or_default();
    let prefix = args.prefix.unwrap_or_default();
    let region = args.region.as_str();

    let client = S3CrtClient::new(S3ClientConfig::new().endpoint_config(EndpointConfig::new(region)))
        .expect("couldn't create client");

    // TODO: Expose max-keys and cont. token arg, print common prefixes and continuation token
    let result = futures::executor::block_on(client.list_objects(bucket, None, &delimiter, 500, &prefix)).unwrap();

    for object in result.objects {
        println!("{object:?}");
    }
}
