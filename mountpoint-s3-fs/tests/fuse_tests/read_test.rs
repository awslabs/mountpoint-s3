use std::fs::{File, read_dir};
use std::io::{Read, Seek, SeekFrom, Write};
#[cfg(not(feature = "s3express_tests"))]
use std::os::unix::prelude::PermissionsExt;
#[cfg(not(feature = "s3express_tests"))]
use std::time::{Duration, Instant};

use mountpoint_s3_fs::S3FilesystemConfig;
use mountpoint_s3_fs::data_cache::InMemoryDataCache;
use rand::rngs::SmallRng;
use rand::{Rng, SeedableRng};
use test_case::test_matrix;

use crate::common::fuse::{self, TestSessionConfig, TestSessionCreator, read_dir_to_entry_names};

const READ_ONLY: bool = true;
const READ_WRITE: bool = false;

const FUSE_PASS_FD: bool = true;
const FUSE_SELF_MOUNT: bool = false;

/// Test wrapper to support generation of test names when used with [test_case].
enum BucketPrefix {
    None,
    Some(&'static str),
}

impl std::fmt::Display for BucketPrefix {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            BucketPrefix::Some(prefix) => write!(f, "{prefix}"),
            BucketPrefix::None => write!(f, ""),
        }
    }
}

fn basic_read_test(
    creator_fn: impl TestSessionCreator,
    prefix: &str,
    read_only: bool,
    pass_fuse_fd: bool,
    size_mb: usize,
    fail_on_non_aligned_read_window: bool,
) {
    let mut rng = SmallRng::seed_from_u64(0x87654321);

    let test_session = creator_fn(
        prefix,
        TestSessionConfig::default()
            .with_pass_fuse_fd(pass_fuse_fd)
            .fail_on_non_aligned_read_window(fail_on_non_aligned_read_window),
    );

    test_session.client().put_object("hello.txt", b"hello world").unwrap();
    let mut test_body = vec![0; size_mb * 1024 * 1024];
    rng.fill_bytes(&mut test_body);
    test_session.client().put_object("test2MiB.bin", &test_body).unwrap();

    let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "test2MiB.bin"]);

    let hello_path = test_session.mount_path().join("hello.txt");
    let mut hello_fh1 = File::options().read(true).write(!read_only).open(&hello_path).unwrap();
    let mut hello_contents = String::new();
    hello_fh1.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    // We can read from a file more than once at the same time.
    let mut hello_fh2 = File::options().read(true).write(!read_only).open(&hello_path).unwrap();
    let mut hello_contents = String::new();
    hello_fh2.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    drop(hello_fh1);
    drop(hello_fh2);

    // We could do this with std::io::copy into the digest, but we'd like to control the buffer size
    // so we can make it weird.
    let mut bin = File::options()
        .read(true)
        .write(!read_only)
        .open(test_session.mount_path().join("test2MiB.bin"))
        .unwrap();
    let mut test_read = Vec::with_capacity(size_mb * 1024 * 1024);
    let mut bytes_read = 0usize;
    let mut buf = vec![0; 70000]; // weird size just to test alignment and the like
    loop {
        let read = bin.read(&mut buf[..]).unwrap();
        if read == 0 {
            break;
        }
        test_read.extend_from_slice(&buf[..read]);
        bytes_read += read;
    }
    drop(bin);
    assert_eq!(bytes_read, size_mb * 1024 * 1024);
    assert_eq!(test_body, test_read);

    let mut hello = File::open(test_session.mount_path().join("hello.txt")).unwrap();
    hello.seek(SeekFrom::Start(50)).unwrap();
    let result = hello.read(&mut [0; 4]).unwrap();
    assert_eq!(result, 0);
}

#[cfg(feature = "s3_tests")]
#[test_matrix(
    [READ_ONLY, READ_WRITE],
    [FUSE_PASS_FD, FUSE_SELF_MOUNT]
)]
fn basic_read_test_s3(read_only: bool, pass_fuse_fd: bool) {
    basic_read_test(
        fuse::s3_session::new,
        "basic_read_test",
        read_only,
        pass_fuse_fd,
        2,
        false,
    );
}

#[cfg(feature = "s3_tests")]
#[test_matrix(
    [READ_ONLY, READ_WRITE],
    [FUSE_PASS_FD, FUSE_SELF_MOUNT]
)]
fn basic_read_test_s3_with_cache(read_only: bool, pass_fuse_fd: bool) {
    basic_read_test(
        fuse::s3_session::new_with_cache(|block_size, _| InMemoryDataCache::new(block_size)),
        "basic_read_test_with_cache",
        read_only,
        pass_fuse_fd,
        2,
        false,
    );
}

#[test_matrix(
    [BucketPrefix::None, BucketPrefix::Some("basic_read_test")],
    [READ_ONLY, READ_WRITE],
    [FUSE_PASS_FD, FUSE_SELF_MOUNT]
)]
fn basic_read_test_mock(prefix: BucketPrefix, read_only: bool, pass_fuse_fd: bool) {
    basic_read_test(
        fuse::mock_session::new,
        &prefix.to_string(),
        read_only,
        pass_fuse_fd,
        2,
        false,
    );
}

#[test_matrix(
    [BucketPrefix::None, BucketPrefix::Some("basic_read_test_with_cache")],
    [READ_ONLY, READ_WRITE],
    [FUSE_PASS_FD, FUSE_SELF_MOUNT]
)]
fn basic_read_test_mock_with_cache(prefix: BucketPrefix, read_only: bool, pass_fuse_fd: bool) {
    basic_read_test(
        fuse::mock_session::new_with_cache(|block_size, _| InMemoryDataCache::new(block_size)),
        &prefix.to_string(),
        read_only,
        pass_fuse_fd,
        2,
        false,
    );
}

#[test]
fn basic_read_test_mock_large() {
    basic_read_test(
        fuse::mock_session::new,
        "basic_read_test_mock_large",
        true,
        false,
        20,
        true,
    );
}

#[cfg(not(feature = "s3express_tests"))]
#[derive(PartialEq)]
enum RestorationOptions {
    None,
    RestoreAndWait,
    #[allow(dead_code)]
    /// Restore object but do not wait for it to be available for reading.
    ///
    /// Mock client does not implement objects in a 'restoring' state,
    /// it simply is or is not restored.
    RestoreInProgress,
}

#[cfg(not(feature = "s3express_tests"))]
fn read_flexible_retrieval_test(
    creator_fn: impl TestSessionCreator,
    prefix: &str,
    files: &[&str],
    restore: RestorationOptions,
) {
    use mountpoint_s3_client::types::PutObjectSingleParams;

    let test_session = creator_fn(prefix, Default::default());

    for file in files {
        let mut put_params = PutObjectSingleParams::default();
        if *file != "STANDARD" {
            put_params.storage_class = Some(file.to_string());
        }
        let key = format!("{file}.txt");
        test_session
            .client()
            .put_object_single(&key, b"hello world", put_params)
            .unwrap();
        match restore {
            RestorationOptions::None => (),
            RestorationOptions::RestoreAndWait => {
                test_session.client().restore_object(&key, true).unwrap();
                let timeout = Duration::from_secs(300);
                let start = Instant::now();
                let mut timeouted = true;
                while start.elapsed() < timeout {
                    if test_session
                        .client()
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
            RestorationOptions::RestoreInProgress => test_session.client().restore_object(&key, false).unwrap(),
        }
    }

    let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
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
#[test_matrix(
    [BucketPrefix::None, BucketPrefix::Some("read_flexible_retrieval_test")]
)]
fn read_flexible_retrieval_test_mock(prefix: BucketPrefix) {
    const FILES: &[&str] = &["STANDARD", "GLACIER_IR", "GLACIER", "DEEP_ARCHIVE"];
    read_flexible_retrieval_test(
        fuse::mock_session::new,
        &prefix.to_string(),
        FILES,
        RestorationOptions::None,
    );
}

#[cfg(not(feature = "s3express_tests"))]
#[test_matrix(
    [BucketPrefix::None, BucketPrefix::Some("read_flexible_retrieval_test")]
)]
fn read_flexible_retrieval_restored_test_mock(prefix: BucketPrefix) {
    const FILES: &[&str] = &["GLACIER", "DEEP_ARCHIVE"];
    read_flexible_retrieval_test(
        fuse::mock_session::new,
        &prefix.to_string(),
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

fn read_errors_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    test_session.client().put_object("hello.txt", b"hello world").unwrap();

    let file_path = test_session.mount_path().join("hello.txt");

    let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt"]);

    // Overwrite the test file and verify that we can't read from a file opened in O_WRONLY
    let mut write_fh = File::options().write(true).truncate(true).open(&file_path).unwrap();
    let mut contents = String::new();
    let err = write_fh.read_to_string(&mut contents).expect_err("read should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));
    write_fh.sync_all().unwrap();
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
    let err = File::options()
        .read(true)
        .open(&file_path)
        .expect_err("opening for read should fail with pending write handles open");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));
}

#[cfg(feature = "s3_tests")]
#[test]
fn read_errors_test_s3() {
    read_errors_test(fuse::s3_session::new, "read_errors_test");
}

#[test_matrix(
    [BucketPrefix::None, BucketPrefix::Some("read_errors_test")]
)]
fn read_errors_test_mock(prefix: BucketPrefix) {
    read_errors_test(fuse::mock_session::new, &prefix.to_string());
}

fn read_after_flush_test(creator_fn: impl TestSessionCreator) {
    const KEY: &str = "data.bin";
    let test_session = creator_fn("read_after_flush_test", Default::default());

    let mut rng = SmallRng::seed_from_u64(0x87654321);
    let mut two_mib_body = vec![0; 2 * 1024 * 1024];
    rng.fill_bytes(&mut two_mib_body);
    test_session.client().put_object(KEY, &two_mib_body).unwrap();

    let path = test_session.mount_path().join(KEY);
    let mut f = File::options().read(true).open(path).unwrap();

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
