//! A version of `mount-s3` that targets an in-memory mock S3 backend rather than the real service.
//!
//! The mock S3 backend supports simulating a target network throughput. The
//! --maximum-throughput-gbps command-line argument can be used to set the target throughput, which
//! defaults to 10Gbps.
//!
//! As a safety measure, this binary works only if the bucket name begins with "sthree-". This makes
//! sure we can't accidentally confuse this binary with a real `mount-s3` in any of our testing or
//! release workflows, since real bucket names cannot start with this prefix.
//!
//! This binary is intended only for use in testing and development of Mountpoint.

use std::sync::Arc;

use anyhow::anyhow;
use clap::Parser;
use futures::executor::ThreadPool;

use mountpoint_s3::CliArgs;
use mountpoint_s3_client::mock_client::throughput_client::ThroughputMockClient;
use mountpoint_s3_client::mock_client::{MockClientConfig, MockObject};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_fs::s3::S3Personality;
use mountpoint_s3_fs::Runtime;

fn main() -> anyhow::Result<()> {
    let cli_args = CliArgs::parse();
    mountpoint_s3::run(create_mock_client, cli_args)
}

fn create_mock_client(args: &CliArgs) -> anyhow::Result<(Arc<ThroughputMockClient>, Runtime, S3Personality)> {
    // An extra little safety thing to make sure we can distinguish the real mount-s3 binary and
    // this one. Buckets starting with "sthree-" are always invalid against real S3:
    // https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html
    anyhow::ensure!(
        args.bucket_name.starts_with("sthree-"),
        "mock-mount-s3 bucket names must start with `sthree-`"
    );

    tracing::warn!("using mock client");

    let Some(max_throughput_gbps) = args.maximum_throughput_gbps else {
        return Err(anyhow!(
            "must set --maximum-throughput-gbps when using mock-mount-s3 binary"
        ));
    };
    tracing::info!("mock client target network throughput {max_throughput_gbps} Gbps");

    let config = MockClientConfig {
        bucket: args.bucket_name.clone(),
        part_size: args.part_size as usize,
        unordered_list_seed: None,
        enable_backpressure: true,
        initial_read_window_size: 1024 * 1024 + 128 * 1024, // matching real MP
    };
    let client = ThroughputMockClient::new(config, max_throughput_gbps as f64);

    let runtime = Runtime::new(ThreadPool::builder().name_prefix("runtime").create()?);

    let s3_personality = if let Some(bucket_type) = &args.bucket_type {
        bucket_type.to_personality()
    } else {
        S3Personality::Standard
    };

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
            format!("test-{}B", size)
        };
        client.add_object(&key, MockObject::ramp(0x11, size as usize, ETag::for_tests()));
    }
    client.add_object("hello.txt", MockObject::from_bytes(b"hello world", ETag::for_tests()));
    client.add_object("empty", MockObject::from_bytes(b"", ETag::for_tests()));
    client.add_object(
        "dir/hello.txt",
        MockObject::from_bytes(b"hello world", ETag::for_tests()),
    );

    Ok((Arc::new(client), runtime, s3_personality))
}
