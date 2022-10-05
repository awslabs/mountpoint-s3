use clap::{Arg, Command};
use fuser::{BackgroundSession, MountOption, Session};
use s3_client::{S3Client, S3ClientConfig};
use s3_file_connector::fs::{S3Filesystem, S3FilesystemConfig};
use std::{
    fs::File,
    io::{self, BufRead, BufReader},
    time::Instant,
};
use tempfile::tempdir;

fn main() -> io::Result<()> {
    const KB: usize = 1 << 10;
    const MB: usize = 1 << 20;
    const BUFFER_CAP: usize = 128 * KB;

    let matches = Command::new("benchmark")
        .about("Read a single file from a path and ignore its contents")
        .arg(Arg::new("bucket").required(true))
        .arg(
            Arg::new("file_path")
                .required(true)
                .help("relative path to the mountpoint"),
        )
        .arg(
            Arg::new("iterations")
                .long("iterations")
                .help("Number of times to download")
                .takes_value(true),
        )
        .arg(Arg::new("region").long("region").default_value("us-east-1"))
        .get_matches();

    let bucket_name = matches.get_one::<String>("bucket").unwrap();
    let file_path = matches.get_one::<String>("file_path").unwrap();
    let iterations = matches
        .get_one::<String>("iterations")
        .map(|s| s.parse::<usize>().expect("iterations must be a number"));
    let region = matches.get_one::<String>("region").unwrap();

    let session = mount_file_system(bucket_name, region);
    let mountpoint = &session.mountpoint;

    for i in 0..iterations.unwrap_or(1) {
        let file_path = mountpoint.join(file_path);
        let file = File::open(file_path)?;
        let mut received_size: u64 = 0;
        let mut op_counter: u64 = 0;

        let start = Instant::now();
        let mut reader = BufReader::with_capacity(BUFFER_CAP, file);
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
            (op_counter as f64) / elapsed.as_secs_f64() as f64
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

fn mount_file_system(bucket_name: &str, region: &str) -> BackgroundSession {
    let temp_dir = tempdir().expect("Should be able to create temp directory");
    let mountpoint = temp_dir.path();

    let throughput_target_gbps = Some(1.0);
    let part_size = None;
    let config = S3ClientConfig {
        throughput_target_gbps,
        part_size,
    };
    let client = S3Client::new(region, config).expect("Failed to create S3 client");

    let mut options = vec![MountOption::RO, MountOption::FSName("fuse_sync".to_string())];
    options.push(MountOption::AutoUnmount);

    let filesystem_config = S3FilesystemConfig::default();

    println!(
        "Mounting bucket {} to path {}",
        bucket_name,
        mountpoint.to_str().unwrap()
    );
    let session = Session::new(
        S3Filesystem::new(
            client,
            bucket_name,
            "",
            filesystem_config,
            throughput_target_gbps.unwrap_or(1.0),
        ),
        mountpoint,
        &options,
    )
    .expect("Should have created FUSE session successfully");

    BackgroundSession::new(session).expect("Should have started FUSE session successfully")
}
