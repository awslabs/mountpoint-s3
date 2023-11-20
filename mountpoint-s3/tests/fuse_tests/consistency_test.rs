use std::fs::File;
use std::os::unix::prelude::FileExt;

use fuser::BackgroundSession;
use tempfile::TempDir;
use test_case::test_case;

use mountpoint_s3::data_cache::InMemoryDataCache;

use crate::fuse_tests::{TestClientBox, TestSessionConfig};

fn page_cache_sharing_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    // Big enough to avoid readahead
    const OBJECT_SIZE: usize = 512 * 1024;

    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    // Create the first version of the file
    let old_contents = vec![0xaau8; OBJECT_SIZE];
    test_client.put_object("file.bin", &old_contents).unwrap();

    // Open the file before updating it remotely
    let old_file = File::open(mount_point.path().join("file.bin")).unwrap();
    let mut buf = vec![0u8; 128];
    old_file.read_exact_at(&mut buf, 0).unwrap();
    assert_eq!(buf, &old_contents[..buf.len()]);

    let new_contents = vec![0xbbu8; OBJECT_SIZE];
    test_client.put_object("file.bin", &new_contents).unwrap();

    // Open the file again, should see the new contents this time
    let new_file = File::open(mount_point.path().join("file.bin")).unwrap();
    new_file.read_exact_at(&mut buf, 0).unwrap();
    assert_eq!(buf, &new_contents[..buf.len()]);

    // The old fd should see either the old contents or fail the read
    let res = old_file.read_exact_at(&mut buf, 0);
    match res {
        Ok(()) => assert_eq!(buf, &old_contents[..buf.len()]),
        Err(e) => println!("old read failed: {e:?}"),
    }

    // Try reading a fresh page in the other order (old file first)
    let offset = OBJECT_SIZE / 2;
    let res = old_file.read_exact_at(&mut buf, offset as u64);
    match res {
        Ok(()) => assert_eq!(buf, &old_contents[offset..offset + buf.len()]),
        Err(e) => println!("old read at {offset} failed: {e:?}"),
    }
    new_file.read_exact_at(&mut buf, offset as u64).unwrap();
    assert_eq!(buf, &new_contents[offset..offset + buf.len()]);
}

#[cfg(feature = "s3_tests")]
#[test]
fn page_cache_sharing_test_s3() {
    page_cache_sharing_test(crate::fuse_tests::s3_session::new, "page_cache_sharing_test");
}

#[cfg(feature = "s3_tests")]
#[test]
fn page_cache_sharing_test_s3_with_cache() {
    page_cache_sharing_test(
        crate::fuse_tests::s3_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        "page_cache_sharing_test",
    );
}

#[test_case(""; "no prefix")]
#[test_case("page_cache_sharing_test"; "prefix")]
fn page_cache_sharing_test_mock(prefix: &str) {
    page_cache_sharing_test(crate::fuse_tests::mock_session::new, prefix);
}

#[test_case(""; "no prefix")]
#[test_case("page_cache_sharing_test"; "prefix")]
fn page_cache_sharing_test_mock_with_cache(prefix: &str) {
    page_cache_sharing_test(
        crate::fuse_tests::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        prefix,
    );
}

#[cfg(target_os = "linux")]
mod direct_io {
    use super::*;

    use std::fs::OpenOptions;
    use std::os::unix::fs::OpenOptionsExt;
    use std::time::Duration;

    use test_case::test_case;

    use mountpoint_s3::fs::{CacheConfig, S3FilesystemConfig};

    fn cache_and_direct_io_test<F>(creator_fn: F, prefix: &str)
    where
        F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
    {
        const OBJECT_SIZE: usize = 8;

        let test_session_conf = TestSessionConfig {
            filesystem_config: S3FilesystemConfig {
                cache_config: CacheConfig {
                    serve_lookup_from_cache: true,
                    dir_ttl: Duration::from_secs(600),
                    file_ttl: Duration::from_secs(600),
                },
                ..Default::default()
            },
            ..Default::default()
        };
        let (mount_point, _session, mut test_client) = creator_fn(prefix, test_session_conf);

        let file_name = "file.bin";

        // Create the first version of the file
        let old_contents = vec![0x0fu8; OBJECT_SIZE];
        test_client.put_object(file_name, &old_contents).unwrap();

        // Open and read fully the file before updating it remotely
        let old_file = File::open(mount_point.path().join(file_name)).unwrap();
        let mut buf = vec![0u8; OBJECT_SIZE];
        old_file.read_exact_at(&mut buf, 0).unwrap();
        assert_eq!(buf, &old_contents[..buf.len()]);

        let new_contents = vec![0xffu8; OBJECT_SIZE];
        test_client.put_object(file_name, &new_contents).unwrap();

        // Open the file again, which should be reading from cache
        for _ in 0..2 {
            let new_file = File::open(mount_point.path().join(file_name)).unwrap();
            new_file
                .read_exact_at(&mut buf, 0)
                .expect("should be OK as result is cached");
            assert_eq!(
                buf,
                &old_contents[..buf.len()],
                "bytes read should be old object from cache"
            );
        }

        // Open the file w/ O_DIRECT, which should see the new file on S3 despite the old file being cached
        let mut buf = [0u8; OBJECT_SIZE];
        let new_file = OpenOptions::new()
            .read(true)
            .custom_flags(libc::O_DIRECT)
            .open(mount_point.path().join(file_name))
            .unwrap();
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
    fn cache_and_direct_io_test_mock(prefix: &str) {
        cache_and_direct_io_test(
            crate::fuse_tests::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
            prefix,
        );
    }

    #[cfg(feature = "s3_tests")]
    #[test]
    fn cache_and_direct_io_test_s3() {
        cache_and_direct_io_test(
            crate::fuse_tests::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
            "cache_and_direct_io_test_s3",
        );
    }
}
