//! A version of `mount-s3` that targets an in-memory mock S3 backend rather than the real service.
//!
//! The mock S3 backend supports simulating a target network throughput.
//! The `--maximum-throughput-gbps` command-line argument can be used to optionally limit download throughput.
//!
//! As a safety measure, this binary works only if the bucket name begins with "sthree-". This makes
//! sure we can't accidentally confuse this binary with a real `mount-s3` in any of our testing or
//! release workflows, since real bucket names cannot start with this prefix.
//!
//! This binary is intended only for use in testing and development of Mountpoint.

use std::sync::Arc;

use clap::Parser;
use futures::executor::ThreadPool;

use mountpoint_s3::CliArgs;
use mountpoint_s3_client::mock_client::throughput_client::ThroughputMockClient;
use mountpoint_s3_client::mock_client::{MockClient, MockObject};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_fs::Runtime;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::s3::S3Personality;
use mountpoint_s3_fs::s3::config::{ClientConfig, S3Path, TargetThroughputSetting};

fn main() -> anyhow::Result<()> {
    let cli_args = CliArgs::parse();
    mountpoint_s3::run(create_mock_client, cli_args)
}

pub fn create_mock_client(
    client_config: ClientConfig,
    _pool: PagedPool,
    s3_path: &S3Path,
    personality: Option<S3Personality>,
) -> anyhow::Result<(Arc<ThroughputMockClient>, Runtime, S3Personality)> {
    // An extra little safety thing to make sure we can distinguish the real mount-s3 binary and
    // this one. Buckets starting with "sthree-" are always invalid against real S3:
    // https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html
    anyhow::ensure!(
        &s3_path.bucket_name.starts_with("sthree-"),
        "mock-mount-s3 bucket names must start with `sthree-`"
    );

    // TODO: Actually update the mock client to support different part sizes
    let part_size = {
        if client_config.part_config.read_size_bytes != client_config.part_config.write_size_bytes {
            tracing::warn!("mock client does not support separate part sizes for reading and writing, ignoring");
        }
        client_config.part_config.read_size_bytes
    };

    let s3_personality = personality.unwrap_or(S3Personality::Standard);

    let config = MockClient::config()
        .bucket(&s3_path.bucket_name)
        .part_size(part_size as usize)
        .unordered_list_seed(None)
        .enable_backpressure(true)
        .initial_read_window_size(1024 * 1024 + 128 * 1024) // matching real MP
        .enable_rename(s3_personality.supports_rename_object());

    let client = if let TargetThroughputSetting::User {
        gbps: max_throughput_gbps,
    } = client_config.throughput_target
    {
        tracing::info!("mock client limited to {max_throughput_gbps} Gb/s download throughput");
        ThroughputMockClient::new(config, max_throughput_gbps)
    } else {
        tracing::info!("mock client with no throughput limit");
        ThroughputMockClient::new_unlimited_throughput(config)
    };

    let runtime = Runtime::new(ThreadPool::builder().name_prefix("runtime").create()?);

    // Pre-populate the bucket with some interesting file sizes and a little structure
    for expt in 0..10 {
        let size = 2000 * 10u64.pow(expt);
        let key = if size > 10u64.pow(12) {
            format!("test-{}TB", size / 10u64.pow(12))
        } else if size > 10u64.pow(9) {
            format!("test-{}GB", size / 10u64.pow(9))
        } else if size > 10u64.pow(6) {
            format!("test-{}MB", size / 10u64.pow(6))
        } else if size > 10u64.pow(3) {
            format!("test-{}kB", size / 10u64.pow(3))
        } else {
            format!("test-{size}B")
        };
        client.add_object(&key, MockObject::ramp(0x11, size as usize, ETag::for_tests()));
    }
    // Some objects that are useful for benchmarking
    for job_num in 0..1024 {
        let size_gib = 100;
        let size_bytes = size_gib * 1024u64.pow(3);
        let key = format!("j{job_num}_{size_gib}GiB.bin");
        client.add_object(&key, MockObject::constant(1u8, size_bytes as usize, ETag::for_tests()));
    }
    client.add_object("hello.txt", MockObject::from_bytes(b"hello world", ETag::for_tests()));
    client.add_object("empty", MockObject::from_bytes(b"", ETag::for_tests()));
    client.add_object(
        "dir/hello.txt",
        MockObject::from_bytes(b"hello world", ETag::for_tests()),
    );

    Ok((Arc::new(client), runtime, s3_personality))
}
