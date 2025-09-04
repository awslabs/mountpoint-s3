use std::fs::{File, OpenOptions};
use std::io::{self, BufRead, BufReader};
use std::path::{Path, PathBuf};
use std::time::Instant;

use clap::{Parser, value_parser};
use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_client::config::{EndpointConfig, RustLogAdapter, S3ClientConfig};
use mountpoint_s3_fs::fuse::S3FuseFilesystem;
use mountpoint_s3_fs::fuse::config::{FuseOptions, FuseSessionConfig, MountPoint};
use mountpoint_s3_fs::fuse::session::FuseSession;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::prefetch::Prefetcher;
use mountpoint_s3_fs::s3::config::INITIAL_READ_WINDOW_SIZE;
use mountpoint_s3_fs::s3::{Bucket, S3Path};
use mountpoint_s3_fs::{Runtime, S3Filesystem, S3FilesystemConfig, Superblock, SuperblockConfig};
use tempfile::tempdir;
use tracing_subscriber::EnvFilter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;

#[cfg(target_os = "linux")]
use std::os::unix::fs::OpenOptionsExt;

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
) -> FuseSession {
    let pool = PagedPool::new_with_candidate_sizes([8 * 1024 * 1024]);
    let mut config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(region));
    config = config
        .read_backpressure(true)
        .initial_read_window(INITIAL_READ_WINDOW_SIZE)
        .memory_pool(pool.clone());
    if let Some(throughput_target_gbps) = throughput_target_gbps {
        config = config.throughput_target_gbps(throughput_target_gbps);
    }
    let client = S3CrtClient::new(config).expect("Failed to create S3 client");
    let runtime = Runtime::new(client.event_loop_group());

    let filesystem_config = S3FilesystemConfig::default();

    let s3_path = S3Path::new(
        Bucket::new(bucket_name).expect("invalid bucket name"),
        Default::default(),
    );
    println!(
        "Mounting {} to path {}",
        s3_path.bucket_description(),
        mountpoint.to_str().unwrap()
    );
    let prefetcher_builder = Prefetcher::default_builder(client.clone());
    let superblock = Superblock::new(
        client.clone(),
        s3_path,
        SuperblockConfig {
            cache_config: filesystem_config.cache_config.clone(),
            s3_personality: filesystem_config.s3_personality,
        },
    );
    let fs = S3Filesystem::new(client, prefetcher_builder, pool, runtime, superblock, filesystem_config);

    let options = FuseOptions {
        read_only: true,
        auto_unmount: true,
        ..Default::default()
    };
    let max_threads = 1;
    let config = FuseSessionConfig::new(MountPoint::Directory(mountpoint.to_path_buf()), options, max_threads)
        .expect("should create session config");
    FuseSession::new(S3FuseFilesystem::new(fs, None), config).expect("should have started FUSE session successfully")
}
