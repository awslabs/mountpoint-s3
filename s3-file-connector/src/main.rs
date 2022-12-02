use std::path::PathBuf;

use anyhow::anyhow;
use anyhow::Context as _;
use aws_crt_s3::common::rust_log_adapter::RustLogAdapter;
use clap::Parser;
use fuser::{BackgroundSession, MountOption, Session};
use s3_client::{HeadBucketError, S3Client, S3ClientConfig, S3RequestError};

use s3_file_connector::fs::S3FilesystemConfig;
use s3_file_connector::fuse::S3FuseFilesystem;
use s3_file_connector::metrics::{metrics_tracing_span_layer, MetricsSink};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::Layer;

fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    // Brutal hack because tracing-subscriber doesn't allow us to specify *multiple* default
    // directives -- we want warning-level logging except for the CRT, which is very spammy.
    if std::env::var("RUST_LOG") == Err(std::env::VarError::NotPresent) {
        std::env::set_var("RUST_LOG", "info,awscrt=off,fuser=error");
    }

    let fmt_layer = tracing_subscriber::fmt::layer()
        .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
        .with_filter(tracing_subscriber::filter::EnvFilter::from_default_env());

    tracing_subscriber::registry()
        .with(fmt_layer)
        .with(metrics_tracing_span_layer())
        .init();
}

#[derive(Parser)]
#[clap(about = "S3 FS Connector")]
struct CliArgs {
    #[clap(help = "Name of bucket to mount")]
    pub bucket_name: String,

    #[clap(help = "Mount point for file system")]
    pub mount_point: PathBuf,

    #[clap(
        long,
        help = "Prefix inside the bucket to mount. Mounts the entire bucket if unspecified."
    )]
    pub prefix: Option<String>,

    #[clap(long, help = "AWS region of the bucket", default_value = "us-east-1")]
    pub region: String,

    #[clap(long, help = "Automatically unmount on exit")]
    pub auto_unmount: bool,

    #[clap(long, help = "Allow root user to access file system")]
    pub allow_root: bool,

    #[clap(long, help = "Desired throughput in Gbps", value_name = "N (Gbps)", value_parser = clap::value_parser!(u64).range(1..))]
    pub throughput_target_gbps: Option<u64>,

    #[clap(long, help = "Max number of FUSE daemon threads", value_name = "N", value_parser = clap::value_parser!(i32).range(1..))]
    pub thread_count: Option<i32>,

    #[clap(long, help = "Max number of FUSE idle threads", value_name = "N", value_parser = clap::value_parser!(i32).range(-1..))]
    pub idle_thread_count: Option<i32>,

    #[clap(long, help = "Part size for multi-part GET and PUT", value_parser = clap::value_parser!(u64).range(1..))]
    pub part_size: Option<u64>,
}

fn main() -> anyhow::Result<()> {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    // validate mount point
    if !args.mount_point.exists() || !args.mount_point.is_dir() {
        return Err(anyhow!(
            "Mount point {} does not exist or it is not a directory",
            args.mount_point.display()
        ));
    }

    let mut options = vec![MountOption::RO, MountOption::FSName("fuse_sync".to_string())];
    if args.auto_unmount {
        options.push(MountOption::AutoUnmount);
    }
    if args.allow_root {
        options.push(MountOption::AllowRoot);
    }

    let filesystem_config = S3FilesystemConfig::default();
    let throughput_target_gbps = args.throughput_target_gbps.map(|t| t as f64);

    let client_config = S3ClientConfig {
        throughput_target_gbps,
        part_size: args.part_size.map(|t| t as usize),
    };

    let _metrics = MetricsSink::init();

    let client = create_client_for_bucket(&args.bucket_name, &args.region, client_config)
        .context("Failed to create S3 client")?;
    let runtime = client.event_loop_group();

    let fs = S3FuseFilesystem::new(
        client,
        runtime,
        &args.bucket_name,
        args.prefix.as_deref().unwrap_or(""),
        filesystem_config,
    );

    let max_threads = args.thread_count.unwrap_or(1);
    let idle_threads = args.idle_thread_count.unwrap_or(-1);

    if idle_threads > max_threads {
        return Err(anyhow!(
            "Max number of idle threads ({max_threads}) should be less than max number of threads ({idle_threads})."
        ));
    }

    println!("Starting with max-threads-count={max_threads} idle-threads-count={idle_threads}");

    let session = Session::new(fs, &args.mount_point, &options, max_threads, idle_threads)
        .context("Failed to create FUSE session")?;

    let session = BackgroundSession::new(session);

    let session = session.context("Failed to start FUSE session")?;

    tracing::info!("successfully mounted {:?}", args.mount_point);

    let (sender, receiver) = std::sync::mpsc::sync_channel(0);

    ctrlc::set_handler(move || {
        let _ = sender.send(());
    })
    .context("Failed to install signal handler")?;

    let _ = receiver.recv();

    drop(session);

    Ok(())
}

/// Discover the region for the bucket and create a client for it.
///
/// This also has the nice side effect of triggering the CRT's DNS resolver to start pooling
/// responses, which means we don't have to wait for the first file read to start the rampup period.
fn create_client_for_bucket(
    bucket: &str,
    supposed_region: &str,
    client_config: S3ClientConfig,
) -> Result<S3Client, anyhow::Error> {
    let client = S3Client::new(supposed_region, client_config.clone())?;
    let head_request = client.head_bucket(bucket);
    match futures::executor::block_on(head_request) {
        Ok(_) => Ok(client),
        Err(S3RequestError::ServiceError(HeadBucketError::IncorrectRegion(region))) => {
            tracing::warn!(
                "bucket {} is in region {}, not {}. redirecting...",
                bucket,
                region,
                supposed_region
            );
            let new_client = S3Client::new(&region, client_config)?;
            let head_request = new_client.head_bucket(bucket);
            futures::executor::block_on(head_request)
                .map(|_| new_client)
                .with_context(|| format!("HeadBucket failed for bucket {} in region {}", bucket, region))
        }
        Err(e) => {
            Err(e).with_context(|| format!("HeadBucket failed for bucket {} in region {}", bucket, supposed_region))
        }
    }
}
