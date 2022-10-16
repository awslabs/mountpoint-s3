use criterion::{black_box, criterion_group, criterion_main, Criterion};
use fuser::{BackgroundSession, MountOption, Session};
use rand::rngs::OsRng;
use rand::RngCore;
use s3_client::S3Client;
use s3_file_connector::fuse::S3FuseFilesystem;
use s3_file_connector::S3FilesystemConfig;
use std::{
    fs::File,
    io::{BufRead, BufReader},
    time::Duration,
};
use tempfile::tempdir;

fn get_test_client() -> S3Client {
    S3Client::new(&get_test_region(), Default::default()).expect("could not create test client")
}

fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run this benchmark");

    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = OsRng.next_u64();

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run this benchmark");
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

    let prefix = format!("{}{}/{}/", prefix, test_name, nonce);

    (bucket, prefix)
}

fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run this benchmark")
}

fn get_bench_file() -> String {
    std::env::var("S3_BUCKET_BENCH_FILE").expect("Set S3_BUCKET_BENCH_FILE to run this benchmark")
}

fn mount_file_system() -> BackgroundSession {
    let (bucket, _) = get_test_bucket_and_prefix("read_file");
    let temp_dir = tempdir().expect("Should be able to create temp directory");
    let mountpoint = temp_dir.path();

    let client = get_test_client();

    let mut options = vec![MountOption::RO, MountOption::FSName("fuse_sync".to_string())];
    options.push(MountOption::AutoUnmount);

    let filesystem_config = S3FilesystemConfig::default();
    let session = Session::new(
        S3FuseFilesystem::new(client, &bucket, "", filesystem_config),
        mountpoint,
        &options,
    )
    .expect("Should have created FUSE session successfully");

    BackgroundSession::new(session).expect("Should have started FUSE session successfully")
}

pub fn read_file_benchmark(c: &mut Criterion) {
    const DEFAULT_BUF_CAP: usize = 128;

    let file_path = &get_bench_file();

    let session = mount_file_system();
    let mountpoint = &session.mountpoint;

    let mut group = c.benchmark_group("read_file_benchmark");
    group.sample_size(10);
    group.measurement_time(Duration::new(10, 0));
    group.bench_function("read_file", |b| {
        b.iter(|| {
            let file_path = mountpoint.join(file_path);
            let file = File::open(file_path).unwrap();
            let mut reader = BufReader::with_capacity(DEFAULT_BUF_CAP, file);
            loop {
                let length = {
                    let buffer = reader.fill_buf().unwrap();
                    buffer.len()
                };
                if length == 0 {
                    break;
                }
                reader.consume(length);
            }
            black_box(1);
        })
    });
}

criterion_group!(benches, read_file_benchmark);
criterion_main!(benches);
