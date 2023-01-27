use aws_crt_s3::common::rust_log_adapter::RustLogAdapter;
use s3_client::S3Client;

use clap::{Arg, Command};
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

    let matches = Command::new("list")
        .about("List an S3 bucket")
        .arg(Arg::new("bucket").required(true))
        .arg(Arg::new("delimiter").long("--delimiter").default_value(""))
        .arg(Arg::new("prefix").long("--prefix").default_value(""))
        .arg(Arg::new("region").long("--region").default_value("us-east-1"))
        .get_matches();

    let bucket = matches.get_one::<String>("bucket").unwrap();
    let delimiter = matches.get_one::<String>("delimiter").unwrap();
    let prefix = matches.get_one::<String>("prefix").unwrap();
    let region = matches.get_one::<String>("region").unwrap();

    let client = S3Client::new(region, Default::default()).expect("couldn't create client");

    let result = futures::executor::block_on(client.list_objects(bucket, None, delimiter, 500, prefix)).unwrap();

    for object in result.objects {
        println!("{object:?}");
    }
}
