use aws_crt_s3::common::rust_log_adapter::RustLogAdapter;
use criterion::{criterion_group, criterion_main, Criterion, Throughput};
use fuser::{BackgroundSession, MountOption, Session};
use rand::Rng;
use s3_client::{S3Client, S3ClientConfig};
use s3_file_connector::fuse::S3FuseFilesystem;
use s3_file_connector::S3FilesystemConfig;
use std::io::{Seek, SeekFrom};
use std::{
    fs::{File, OpenOptions},
    io::{BufRead, BufReader},
    thread,
    time::Duration,
};
use tempfile::tempdir;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::EnvFilter;

#[cfg(target_os = "linux")]
use std::os::unix::fs::OpenOptionsExt;

const KB: u64 = 1 << 10;
const MB: u64 = 1 << 20;

enum IoType {
    SequentialRead,
    RandomRead,
}

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    let subscriber = Subscriber::builder()
        .with_env_filter(EnvFilter::from_default_env())
        .with_writer(std::io::stderr)
        .finish();

    subscriber.try_init().expect("unable to install global subscriber");
}

fn get_test_client() -> S3Client {
    let throughput_target_gbps = Some(100.0);
    let part_size = None;
    let config = S3ClientConfig {
        throughput_target_gbps,
        part_size,
    };
    S3Client::new(&get_test_region(), config).expect("could not create test client")
}

fn get_test_bucket_and_prefix() -> (String, String) {
    let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run this benchmark");

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run this benchmark");
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

    (bucket, prefix)
}

fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run this benchmark")
}

fn get_bench_file() -> String {
    std::env::var("S3_BUCKET_BENCH_FILE").expect("Set S3_BUCKET_BENCH_FILE to run this benchmark")
}

fn get_small_bench_file() -> String {
    std::env::var("S3_BUCKET_SMALL_BENCH_FILE").expect("Set S3_BUCKET_SMALL_BENCH_FILE to run this benchmark")
}

fn get_buffer_cap() -> usize {
    let buf_cap = std::env::var("FS_BENCH_BUF_CAP").unwrap_or_else(|_| "256".to_string());
    buf_cap
        .parse::<usize>()
        .expect("Buffer capacity must be able to convert to usize")
        * KB as usize
}

fn mount_file_system() -> BackgroundSession {
    let (bucket, prefix) = get_test_bucket_and_prefix();
    let temp_dir = tempdir().expect("Should be able to create temp directory");
    let mountpoint = temp_dir.path();

    let client = get_test_client();
    let runtime = client.event_loop_group();

    let mut options = vec![MountOption::RO, MountOption::FSName("fuse_sync".to_string())];
    options.push(MountOption::AutoUnmount);

    let filesystem_config = S3FilesystemConfig::default();
    let session = Session::new(
        S3FuseFilesystem::new(client, runtime, &bucket, &prefix, filesystem_config),
        mountpoint,
        &options,
    )
    .expect("Should have created FUSE session successfully");

    BackgroundSession::new(session).expect("Should have started FUSE session successfully")
}

fn read_from_file(file: File, io_type: IoType, io_size: u64, starting_offset: u64) {
    let buffer_cap = get_buffer_cap();
    let file_size = file.metadata().unwrap().len();
    let mut reader = BufReader::with_capacity(buffer_cap, file);
    let _ = reader.seek(SeekFrom::Start(starting_offset));
    let mut total_read: u64 = 0;
    loop {
        // if this is a random read, get a random position in the file and seek to that position
        if let IoType::RandomRead = io_type {
            let offset = rand::thread_rng().gen_range(0..file_size);
            let _ = reader.seek(SeekFrom::Start(offset));
        }

        // read data into buffer
        let length = {
            let buffer = reader.fill_buf().unwrap();
            total_read += buffer.len() as u64;
            buffer.len()
        };

        // read until io_size is reached
        if total_read >= io_size {
            break;
        }

        if length == 0 {
            // reach the end of the file, reset the cursor
            let _ = reader.seek(SeekFrom::Start(0));
        } else {
            reader.consume(length);
        }
    }
}

// sequential read from the start to the end of the file
pub fn sequential_read(c: &mut Criterion) {
    init_tracing_subscriber();

    let file_path = &get_bench_file();

    // total size of data to be read
    let io_size: u64 = 20480 * MB;

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    let mut group = c.benchmark_group("fs");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));
    group.throughput(Throughput::Bytes(io_size));
    group.bench_with_input("sequential_read", &io_size, |b, &io_size| {
        b.iter(|| {
            let file_path = mountpoint.join(file_path);
            let file = File::open(file_path).unwrap();
            read_from_file(file, IoType::SequentialRead, io_size, 0);
        });
    });
}

pub fn sequential_read_four_threads(c: &mut Criterion) {
    let file_path = &get_bench_file();

    // total size of data to be read
    let io_size: u64 = 20480 * MB;

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    let mut group = c.benchmark_group("fs");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));
    group.throughput(Throughput::Bytes(io_size));
    group.bench_with_input("sequential_read_four_threads", &io_size, |b, &io_size| {
        b.iter(|| {
            let thread_count = 4;
            thread::scope(|scope| {
                for i in 0..thread_count {
                    scope.spawn(move || {
                        let full_path = mountpoint.join(file_path);
                        let file = File::open(full_path).unwrap();
                        let part_size = io_size / thread_count;
                        read_from_file(file, IoType::SequentialRead, part_size, part_size * i);
                    });
                }
            });
        });
    });
}

// sequential read with delayed start
// simulate a situation where we mount a file system and leave it for a while before start using it, this should give CRT some time to warm up.
pub fn sequential_read_delayed_start(c: &mut Criterion) {
    let file_path = &get_bench_file();

    // total size of data to be read
    let io_size: u64 = 20480 * MB;

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    // sleep for 60 seconds after file system is mounted before start reading
    thread::sleep(Duration::from_secs(60));

    let mut group = c.benchmark_group("fs");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));
    group.throughput(Throughput::Bytes(io_size));
    group.bench_with_input("sequential_read_delayed_start", &io_size, |b, &io_size| {
        b.iter(|| {
            let file_path = mountpoint.join(file_path);
            let file = File::open(file_path).unwrap();
            read_from_file(file, IoType::SequentialRead, io_size, 0);
        });
    });
}

// sequential read with linux page cache disabled by using O_DIRECT flag when open a file to read
pub fn sequential_read_direct_io(c: &mut Criterion) {
    let file_path = &get_bench_file();

    // total size of data to be read
    let io_size: u64 = 20480 * MB;

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    let mut group = c.benchmark_group("fs");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));
    group.throughput(Throughput::Bytes(io_size));
    group.bench_with_input("sequential_read_direct_io", &io_size, |b, &io_size| {
        b.iter(|| {
            let file_path = mountpoint.join(file_path);
            let mut open = OpenOptions::new();
            open.read(true);
            #[cfg(target_os = "linux")]
            open.custom_flags(libc::O_DIRECT);
            let file = open.open(file_path).unwrap();
            read_from_file(file, IoType::SequentialRead, io_size, 0);
        });
    });
}

// randomly read from different positions in a file until desired IO size is reached
pub fn random_read_small_file(c: &mut Criterion) {
    let file_path = &get_small_bench_file();

    // total size of data to be read
    let io_size: u64 = 10 * MB;

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    let mut group = c.benchmark_group("fs");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));

    group.throughput(Throughput::Bytes(io_size));
    group.bench_with_input("random_read_small_file", &io_size, |b, &io_size| {
        b.iter(|| {
            let file_path = mountpoint.join(file_path);
            let file = File::open(file_path).unwrap();
            read_from_file(file, IoType::RandomRead, io_size, 0);
        });
    });
}

// randomly read from different positions in a file until desired IO size is reached
pub fn random_read_big_file(c: &mut Criterion) {
    let file_path = &get_bench_file();

    // total size of data to be read
    let io_size: u64 = 10 * MB;

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    let mut group = c.benchmark_group("fs");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));
    group.throughput(Throughput::Bytes(io_size));
    group.bench_with_input("random_read_big_file", &io_size, |b, &io_size| {
        b.iter(|| {
            let file_path = mountpoint.join(file_path);
            let file = File::open(file_path).unwrap();
            read_from_file(file, IoType::RandomRead, io_size, 0);
        });
    });
}

criterion_group!(
    benches,
    sequential_read,
    sequential_read_four_threads,
    sequential_read_delayed_start,
    sequential_read_direct_io,
    random_read_small_file,
    random_read_big_file
);
criterion_main!(benches);
