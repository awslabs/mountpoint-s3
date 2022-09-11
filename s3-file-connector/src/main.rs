use anyhow::Context as _;
use clap::Parser;
use fuser::{BackgroundSession, MountOption, Session};
use s3_client::{S3Client, S3ClientConfig};

mod fs;

use std::path::PathBuf;

fn init_tracing_subscriber() {
    tracing_subscriber::fmt::init();

    // Or to send it to stderr instead...
    // use tracing_subscriber::util::SubscriberInitExt as _;

    // let subscriber = tracing_subscriber::fmt::Subscriber::builder()
    //     .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
    //     .with_writer(std::io::stderr)
    //     .finish();

    // subscriber
    //     .try_init()
    //     .expect("unable to install global subscriber");
}

#[derive(Parser)]
#[clap(about = "S3 FS Connector")]
struct CliArgs {
    #[clap(help = "Mount point for file system")]
    pub mount_point: PathBuf,

    #[clap(help = "Name of bucket to mount")]
    pub bucket_name: String,

    #[clap(help = "Name of key to mount")]
    pub key_name: String,

    #[clap(help = "Size of key in bytes")]
    pub file_size: u64,

    #[clap(help = "AWS region of the bucket", default_value = "us-east-1")]
    pub region: String,

    #[clap(long, help = "Automatically unmount on exit")]
    pub auto_unmount: bool,

    #[clap(long, help = "Allow root user to access file system")]
    pub allow_root: bool,

    #[clap(long, help = "Desired throughput in Gbps", value_name = "N (Gbps)", value_parser = clap::value_parser!(u64).range(1..))]
    pub throughput_target_gbps: Option<u64>,

    #[clap(long, help = "Number of FUSE daemon threads", value_name = "N", value_parser = clap::value_parser!(u64).range(1..))]
    pub thread_count: Option<u64>,

    #[clap(long, help = "Part size for multi-part GET and PUT", value_parser = clap::value_parser!(u64).range(1..))]
    pub part_size: Option<u64>,
}

fn main() -> anyhow::Result<()> {
    init_tracing_subscriber();

    let args = CliArgs::parse();

    let mut options = vec![MountOption::RO, MountOption::FSName("fuse_sync".to_string())];
    if args.auto_unmount {
        options.push(MountOption::AutoUnmount);
    }
    if args.allow_root {
        options.push(MountOption::AllowRoot);
    }

    let config = S3ClientConfig {
        throughput_target_gbps: args.throughput_target_gbps.map(|t| t as f64),
        part_size: args.part_size.map(|t| t as usize),
    };
    let client = S3Client::new(&args.region, config).context("Failed to create S3 client")?;

    let session = Session::new(
        fs::S3Filesystem::new(client, &args.bucket_name, &args.key_name, args.file_size as usize),
        &args.mount_point,
        &options,
    )
    .context("Failed to create FUSE session")?;

    let session = if let Some(thread_count) = args.thread_count {
        BackgroundSession::new_multi_thread(session, thread_count as usize)
    } else {
        BackgroundSession::new(session)
    };
    let session = session.context("Failed to start FUSE session")?;

    let (sender, receiver) = std::sync::mpsc::sync_channel(0);

    ctrlc::set_handler(move || {
        let _ = sender.send(());
    })
    .context("Failed to install signal handler")?;

    let _ = receiver.recv();

    drop(session);

    Ok(())
}
