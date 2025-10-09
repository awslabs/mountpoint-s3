//! O_DIRECT tests are grouped in a separate integration test module so they can be
//! run serially. This is because O_DIRECT has undefined behavior if run concurrently
//! with a fork, and FUSE tests involve a fork to spawn fusermount.

#![cfg(target_os = "linux")]
#![cfg(feature = "fuse_tests")]

mod common;

use std::fs::File;
use std::os::unix::fs::{FileExt, OpenOptionsExt};
use std::{fs::OpenOptions, time::Duration};

use crate::common::fuse::{self, TestSessionConfig, TestSessionCreator};
use mountpoint_s3_fs::data_cache::InMemoryDataCache;
use mountpoint_s3_fs::fs::{CacheConfig, S3FilesystemConfig};
use serial_test::serial;
use test_case::test_case;

fn cache_and_direct_io_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    const OBJECT_SIZE: usize = 8;

    let test_session_conf = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            cache_config: CacheConfig {
                serve_lookup_from_cache: true,
                dir_ttl: Duration::from_secs(600),
                file_ttl: Duration::from_secs(600),
                ..Default::default()
            },
            ..Default::default()
        },
        max_worker_threads: 1, // avoid stale inode issues. (FIXME)
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_conf);

    let file_name = "file.bin";
    let file_path = test_session.mount_path().join(file_name);

    // Create the first version of the file
    let original_contents = vec![0x0fu8; OBJECT_SIZE];
    test_session.client().put_object(file_name, &original_contents).unwrap();

    // Open and read fully the file before updating it remotely
    let original_file = File::open(&file_path).expect("first open should succeed");
    let mut buf = vec![0u8; OBJECT_SIZE];
    original_file.read_exact_at(&mut buf, 0).unwrap();
    assert_eq!(buf, &original_contents[..buf.len()]);

    let new_contents = vec![0xffu8; OBJECT_SIZE];
    test_session.client().put_object(file_name, &new_contents).unwrap();

    // Open the file again, which should be reading from cache
    for _ in 0..2 {
        let still_original_file = File::open(&file_path).expect("next open should succeed");
        still_original_file
            .read_exact_at(&mut buf, 0)
            .expect("should be OK as result is cached");
        assert_eq!(
            buf,
            &original_contents[..buf.len()],
            "bytes read should be original object from cache"
        );
    }

    // Open the file w/ O_DIRECT, which should see the new file on S3 despite the old file being cached
    let mut buf = vec![0u8; OBJECT_SIZE];
    let new_file = OpenOptions::new()
        .read(true)
        .custom_flags(libc::O_DIRECT)
        .open(&file_path)
        .expect("open with O_DIRECT should succeed");
    new_file
        .read_exact_at(&mut buf, 0)
        .expect("should be able to read file content from S3");
    assert_eq!(
        buf,
        &new_contents[..buf.len()],
        "bytes read should be new bytes from S3 client"
    );
}

#[test_case(""; "no prefix")]
#[test_case("cache_and_direct_io_test_mock"; "prefix")]
#[serial]
fn cache_and_direct_io_test_mock(prefix: &str) {
    cache_and_direct_io_test(
        fuse::mock_session::new_with_cache(|block_size, _| InMemoryDataCache::new(block_size)),
        prefix,
    );
}

#[cfg(feature = "s3_tests")]
#[test]
#[serial]
fn cache_and_direct_io_test_s3() {
    cache_and_direct_io_test(
        fuse::s3_session::new_with_cache(|block_size, _| InMemoryDataCache::new(block_size)),
        "cache_and_direct_io_test_s3",
    );
}
