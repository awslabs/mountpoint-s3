use std::fs::{read_dir, File};
use std::io::{Read, Seek, SeekFrom, Write};
#[cfg(not(feature = "s3express_tests"))]
use std::os::unix::prelude::PermissionsExt;
use std::path::Path;
#[cfg(not(feature = "s3express_tests"))]
use std::time::{Duration, Instant};

use fuser::BackgroundSession;
use mountpoint_s3::data_cache::InMemoryDataCache;
use mountpoint_s3::S3FilesystemConfig;
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::types::PutObjectParams;
use rand::RngCore;
use rand::SeedableRng as _;
use rand_chacha::ChaChaRng;
use tempfile::TempDir;
use test_case::test_case;

use crate::common::fuse::{self, read_dir_to_entry_names, TestClientBox, TestSessionConfig};

fn open_for_read(path: impl AsRef<Path>, read_only: bool) -> std::io::Result<File> {
    let mut options = File::options();
    if !read_only {
        options.write(true);
    }
    options.read(true).open(path)
}

fn basic_read_test<F>(creator_fn: F, prefix: &str, read_only: bool)
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

    let mut hello_fh1 = open_for_read(mount_point.path().join("hello.txt"), read_only).unwrap();
    let mut hello_contents = String::new();
    hello_fh1.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    // We can read from a file more than once at the same time.
    let mut hello_fh2 = open_for_read(mount_point.path().join("hello.txt"), read_only).unwrap();
    let mut hello_contents = String::new();
    hello_fh2.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    drop(hello_fh1);
    drop(hello_fh2);

    // We could do this with std::io::copy into the digest, but we'd like to control the buffer size
    // so we can make it weird.
    let mut bin = open_for_read(mount_point.path().join("test2MiB.bin"), read_only).unwrap();
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
#[test_case(true; "read only")]
#[test_case(false; "readwrite")]
fn basic_read_test_s3(read_only: bool) {
    basic_read_test(fuse::s3_session::new, "basic_read_test", read_only);
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "read only")]
#[test_case(false; "readwrite")]
fn basic_read_test_s3_with_cache(read_only: bool) {
    basic_read_test(
        fuse::s3_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        "basic_read_test_with_cache",
        read_only,
    );
}

#[test_case("", true; "no prefix read only")]
#[test_case("", false; "no prefix readwrite")]
#[test_case("basic_read_test", true; "prefix read only")]
#[test_case("basic_read_test", false; "prefix readwrite")]
fn basic_read_test_mock(prefix: &str, read_only: bool) {
    basic_read_test(fuse::mock_session::new, prefix, read_only);
}

#[test_case("", true; "no prefix read only")]
#[test_case("", false; "no prefix readwrite")]
#[test_case("basic_read_test_with_cache", true; "prefix read only")]
#[test_case("basic_read_test_with_cache", false; "prefix readwrite")]
fn basic_read_test_mock_with_cache(prefix: &str, read_only: bool) {
    basic_read_test(
        fuse::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        prefix,
        read_only,
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

fn read_errors_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    test_client.put_object("hello.txt", b"hello world").unwrap();

    let file_path = mount_point.path().join("hello.txt");

    let read_dir_iter = read_dir(mount_point.path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt"]);

    // Overwrite the test file and verify that we can't read from a file opened in O_WRONLY
    let mut write_fh = File::options().write(true).open(&file_path).unwrap();
    let mut contents = String::new();
    let err = write_fh.read_to_string(&mut contents).expect_err("read should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));
    drop(write_fh);

    // We shouldn't be able to read from a file mid-write in O_RDWR
    let mut fh = File::options()
        .write(true)
        .read(true)
        .create(true)
        .truncate(true)
        .open(&file_path)
        .unwrap();
    fh.write_all(b"new contents").expect("write should succeed");
    fh.seek(std::io::SeekFrom::End(-1)).unwrap();
    let err = fh.read_to_string(&mut contents).expect_err("read should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    // Read should also fail from different file handle
    let mut read_fh = open_for_read(&file_path, true).unwrap();
    let err = read_fh.read_to_string(&mut contents).expect_err("read should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));
}

#[cfg(feature = "s3_tests")]
#[test]
fn read_errors_test_s3() {
    read_errors_test(fuse::s3_session::new, "read_errors_test");
}

#[test_case(""; "no prefix")]
#[test_case("read_errors_test"; "prefix")]
fn read_errors_test_mock(prefix: &str) {
    read_errors_test(fuse::mock_session::new, prefix);
}

fn read_after_flush_test<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "data.bin";
    let (mount_point, _session, mut test_client) = creator_fn("read_after_flush_test", Default::default());

    let mut rng = ChaChaRng::seed_from_u64(0x87654321);
    let mut two_mib_body = vec![0; 2 * 1024 * 1024];
    rng.fill_bytes(&mut two_mib_body);
    test_client.put_object(KEY, &two_mib_body).unwrap();

    let path = mount_point.path().join(KEY);
    let mut f = open_for_read(path, true).unwrap();

    let mut content = vec![0; 128];
    f.read_exact(&mut content).unwrap();

    let mut f_dup = f.try_clone().unwrap();

    // Close the file. Triggers a flush on the file handle.
    drop(f);

    // Read using the duplicated instance (same underlying handle).
    // Seek to the end of the file to avoid relying on the kernel cache.
    let pos = f_dup.seek(SeekFrom::End(-(content.len() as i64))).unwrap() as usize;
    f_dup.read_exact(&mut content).unwrap();
    assert_eq!(content, two_mib_body[pos..]);
}

#[cfg(feature = "s3_tests")]
#[test]
fn read_after_flush_test_s3() {
    read_after_flush_test(fuse::s3_session::new);
}

#[test]
fn read_after_flush_test_mock() {
    read_after_flush_test(fuse::mock_session::new);
}
