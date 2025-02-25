use std::fs::{File, OpenOptions};
use std::io::{self, BufRead, BufReader};
use std::path::{Path, PathBuf};
use std::time::Instant;

use clap::{value_parser, Parser};
use fuser::{BackgroundSession, MountOption, Session};
use mountpoint_s3::fuse::S3FuseFilesystem;
use mountpoint_s3::prefetch::default_prefetch;
use mountpoint_s3::{S3Filesystem, S3FilesystemConfig};
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_client::S3CrtClient;
use tempfile::tempdir;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::EnvFilter;

#[cfg(target_os = "linux")]
use std::os::unix::fs::OpenOptionsExt;

fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    let subscriber = Subscriber::builder()
        .with_env_filter(EnvFilter::from_default_env())
        .with_writer(std::io::stderr)
        .finish();

    subscriber.try_init().expect("unable to install global subscriber");
}

#[derive(Parser, Debug)]
#[clap(about = "Read a single file from a path and ignore its contents.")]
pub struct CliArgs {
    #[clap(help = "S3 bucket to mount")]
    pub bucket: String,

    #[clap(help = "Path to read relative to the mountpoint")]
    pub file_path: PathBuf,

    #[clap(long, help = "AWS region of the bucket", default_value = "us-east-1")]
    pub region: String,

    #[clap(long, help = "Buffer reader capacity in kibibytes", default_value_t = 128)]
    pub buffer_capacity_kb: usize,

    #[clap(long, help = "Open file with O_DIRECT option")]
    pub direct: bool,

    #[clap(
        long,
        help = "Target throughput in gigabits per second",
        value_name = "N",
        value_parser = value_parser!(u64).range(1..),
        alias = "throughput-target-gbps",
    )]
    pub maximum_throughput_gbps: Option<f64>,

    #[clap(long, help = "Number of times to run the benchmark", default_value_t = 1)]
    pub iterations: usize,
}

fn main() -> io::Result<()> {
    init_tracing_subscriber();

    const KB: usize = 1 << 10;
    const MB: usize = 1 << 20;

    let args = CliArgs::parse();

    let file_path = args.file_path;
    let direct = args.direct;

    let temp_dir = tempdir().expect("Should be able to create temp directory");
    let mountpoint = temp_dir.path();
    let session = mount_file_system(mountpoint, &args.bucket, &args.region, args.maximum_throughput_gbps);

    #[cfg(not(target_os = "linux"))]
    if direct {
        panic!("O_DIRECT only supported on Linux");
    }

    for i in 0..args.iterations {
        let file_path = mountpoint.join(&file_path);
        let file = if direct {
            let mut open = OpenOptions::new();
            open.read(true);
            #[cfg(target_os = "linux")]
            open.custom_flags(libc::O_DIRECT);
            open.open(&file_path)?
        } else {
            File::open(&file_path)?
        };
        let mut received_size: u64 = 0;
        let mut op_counter: u64 = 0;

        let start = Instant::now();
        let mut reader = BufReader::with_capacity(args.buffer_capacity_kb * KB, file);
        loop {
            let length = {
                let buffer = reader.fill_buf()?;
                op_counter += 1;
                received_size += buffer.len() as u64;
                buffer.len()
            };
            if length == 0 {
                break;
            }
            reader.consume(length);
        }

        let elapsed = start.elapsed();

        println!(
            "{}: requested {} ops in {:.2}s: {:.2} IOPS",
            i,
            op_counter,
            elapsed.as_secs_f64(),
            (op_counter as f64) / elapsed.as_secs_f64()
        );

        println!(
            "{}: received {} bytes in {:.2}s: {:.2} MiB/s",
            i,
            received_size,
            elapsed.as_secs_f64(),
            (received_size as f64) / elapsed.as_secs_f64() / MB as f64
        );
    }

    drop(session);
    Ok(())
}

fn mount_file_system(
    mountpoint: &Path,
    bucket_name: &str,
    region: &str,
    throughput_target_gbps: Option<f64>,
) -> BackgroundSession {
    let mut config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(region));
    let initial_read_window_size = 1024 * 1024 + 128 * 1024;
    config = config
        .read_backpressure(true)
        .initial_read_window(initial_read_window_size);
    if let Some(throughput_target_gbps) = throughput_target_gbps {
        config = config.throughput_target_gbps(throughput_target_gbps);
    }
    let client = S3CrtClient::new(config).expect("Failed to create S3 client");
    let runtime = client.event_loop_group();

    let mut options = vec![MountOption::RO, MountOption::FSName("mountpoint-s3".to_string())];
    options.push(MountOption::AutoUnmount);

    let filesystem_config = S3FilesystemConfig::default();

    println!(
        "Mounting bucket {} to path {}",
        bucket_name,
        mountpoint.to_str().unwrap()
    );
    let prefetcher = default_prefetch(runtime.clone(), Default::default());
    let fs = S3Filesystem::new(
        client,
        prefetcher,
        runtime,
        bucket_name,
        &Default::default(),
        filesystem_config,
    );
    let session = Session::new(S3FuseFilesystem::new(fs), mountpoint, &options)
        .expect("Should have created FUSE session successfully");

    BackgroundSession::new(session).expect("Should have started FUSE session successfully")
}
