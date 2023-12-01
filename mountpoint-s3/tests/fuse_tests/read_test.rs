use std::fs::{read_dir, File};
use std::io::{Read as _, Seek, SeekFrom};
#[cfg(not(feature = "s3express_tests"))]
use std::os::unix::prelude::PermissionsExt;
#[cfg(not(feature = "s3express_tests"))]
use std::time::{Duration, Instant};

use fuser::BackgroundSession;
use mountpoint_s3::data_cache::InMemoryDataCache;
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::types::PutObjectParams;
use rand::RngCore;
use rand::SeedableRng as _;
use rand_chacha::ChaChaRng;
use tempfile::TempDir;
use test_case::test_case;

use crate::common::fuse::{self, read_dir_to_entry_names, TestClientBox, TestSessionConfig};

fn basic_read_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let mut rng = ChaChaRng::seed_from_u64(0x87654321);

    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    test_client.put_object("hello.txt", b"hello world").unwrap();
    let mut two_mib_body = vec![0; 2 * 1024 * 1024];
    rng.fill_bytes(&mut two_mib_body);
    test_client.put_object("test2MiB.bin", &two_mib_body).unwrap();

    let read_dir_iter = read_dir(mount_point.path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "test2MiB.bin"]);

    let mut hello = File::open(mount_point.path().join("hello.txt")).unwrap();
    let mut hello_contents = String::new();
    hello.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");
    drop(hello);

    // We could do this with std::io::copy into the digest, but we'd like to control the buffer size
    // so we can make it weird.
    let mut bin = File::open(mount_point.path().join("test2MiB.bin")).unwrap();
    let mut two_mib_read = Vec::with_capacity(2 * 1024 * 1024);
    let mut bytes_read = 0usize;
    let mut buf = vec![0; 70000]; // weird size just to test alignment and the like
    loop {
        let read = bin.read(&mut buf[..]).unwrap();
        if read == 0 {
            break;
        }
        two_mib_read.extend_from_slice(&buf[..read]);
        bytes_read += read;
    }
    drop(bin);
    assert_eq!(bytes_read, 2 * 1024 * 1024);
    assert_eq!(two_mib_body, two_mib_read);

    let mut hello = File::open(mount_point.path().join("hello.txt")).unwrap();
    hello.seek(SeekFrom::Start(50)).unwrap();
    let result = hello.read(&mut [0; 4]).unwrap();
    assert_eq!(result, 0);
}

#[cfg(feature = "s3_tests")]
#[test]
fn basic_read_test_s3() {
    basic_read_test(fuse::s3_session::new, "basic_read_test");
}

#[cfg(feature = "s3_tests")]
#[test]
fn basic_read_test_s3_with_cache() {
    basic_read_test(
        fuse::s3_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        "basic_read_test",
    );
}

#[test_case("")]
#[test_case("basic_read_test")]
fn basic_read_test_mock(prefix: &str) {
    basic_read_test(fuse::mock_session::new, prefix);
}

#[test_case("")]
#[test_case("basic_read_test")]
fn basic_read_test_mock_with_cache(prefix: &str) {
    basic_read_test(
        fuse::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        prefix,
    );
}

#[cfg(not(feature = "s3express_tests"))]
#[derive(PartialEq)]
enum RestorationOptions {
    None,
    RestoreAndWait,
    RestoreInProgress,
}

#[cfg(not(feature = "s3express_tests"))]
fn read_flexible_retrieval_test<F>(creator_fn: F, prefix: &str, files: &[&str], restore: RestorationOptions)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    for file in files {
        let mut put_params = PutObjectParams::default();
        if *file != "STANDARD" {
            put_params.storage_class = Some(file.to_string());
        }
        let key = format!("{file}.txt");
        test_client.put_object_params(&key, b"hello world", put_params).unwrap();
        match restore {
            RestorationOptions::None => (),
            RestorationOptions::RestoreAndWait => {
                test_client.restore_object(&key, true).unwrap();
                let timeout = Duration::from_secs(300);
                let start = Instant::now();
                let mut timeouted = true;
                while start.elapsed() < timeout {
                    if test_client
                        .is_object_restored(&key)
                        .expect("failed to check restoration status")
                    {
                        timeouted = false;
                        break;
                    }
                    std::thread::sleep(Duration::from_secs(1));
                }
                assert!(!timeouted, "timeouted while waiting for object become restored");
            }
            RestorationOptions::RestoreInProgress => test_client.restore_object(&key, false).unwrap(),
        }
    }

    let read_dir_iter = read_dir(mount_point.path()).unwrap();
    for file in read_dir_iter {
        let file = file.unwrap();
        let file_name = file.file_name().to_string_lossy().into_owned();

        let metadata = file.metadata().unwrap();
        if (file_name == "GLACIER.txt" || file_name == "DEEP_ARCHIVE.txt")
            && restore != RestorationOptions::RestoreAndWait
        {
            assert_eq!(metadata.permissions().mode() as libc::mode_t & !libc::S_IFMT, 0o000);
            let err = File::open(file.path()).expect_err("read of flexible retrieval object should fail");
            assert_eq!(err.raw_os_error(), Some(libc::EACCES));
        } else {
            let mut f = File::open(file.path()).expect("instant retrieval file should succeed");
            let mut contents = String::new();
            f.read_to_string(&mut contents).unwrap();
            assert_eq!(contents, "hello world");
        }
    }
}

#[cfg(feature = "s3_tests")]
// S3 Express One Zone is a distinct storage class and can't be overridden
#[cfg(not(feature = "s3express_tests"))]
#[test]
fn read_flexible_retrieval_test_s3() {
    const FILES: &[&str] = &["STANDARD", "GLACIER_IR", "GLACIER", "DEEP_ARCHIVE"];
    read_flexible_retrieval_test(
        fuse::s3_session::new,
        "read_flexible_retrieval_test",
        FILES,
        RestorationOptions::None,
    );
}

#[cfg(not(feature = "s3express_tests"))]
#[test_case(""; "no prefix")]
#[test_case("read_flexible_retrieval_test"; "prefix")]
fn read_flexible_retrieval_test_mock(prefix: &str) {
    const FILES: &[&str] = &["STANDARD", "GLACIER_IR", "GLACIER", "DEEP_ARCHIVE"];
    read_flexible_retrieval_test(fuse::mock_session::new, prefix, FILES, RestorationOptions::None);
}

#[cfg(not(feature = "s3express_tests"))]
#[test_case(""; "no prefix")]
#[test_case("read_flexible_retrieval_test"; "prefix")]
fn read_flexible_retrieval_restored_test_mock(prefix: &str) {
    const FILES: &[&str] = &["GLACIER", "DEEP_ARCHIVE"];
    read_flexible_retrieval_test(
        fuse::mock_session::new,
        prefix,
        FILES,
        RestorationOptions::RestoreAndWait,
    );
}

// We do not run this test for objects in DEEP_ARCHIVE storage class because
// it does not support expedited retrieval option. It would take 12 hours to
// restore object from DEEP_ARCHIVE.
#[cfg(feature = "s3_tests")]
#[cfg(not(feature = "s3express_tests"))]
#[test]
fn read_flexible_retrieval_restored_test_s3() {
    const RESTORED_FILES: &[&str] = &["GLACIER"];
    read_flexible_retrieval_test(
        fuse::s3_session::new,
        "read_flexible_retrieval_restored_test_s3",
        RESTORED_FILES,
        RestorationOptions::RestoreAndWait,
    );
}

#[cfg(feature = "s3_tests")]
#[cfg(not(feature = "s3express_tests"))]
#[test]
fn read_flexible_retrieval_restoring_test_s3() {
    const RESTORING_FILES: &[&str] = &["GLACIER", "DEEP_ARCHIVE"];
    read_flexible_retrieval_test(
        fuse::s3_session::new,
        "read_flexible_retrieval_restoring_test_s3",
        RESTORING_FILES,
        RestorationOptions::RestoreInProgress,
    );
}
