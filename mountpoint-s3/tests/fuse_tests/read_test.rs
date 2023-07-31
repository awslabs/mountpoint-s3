use std::fs::{read_dir, File};
use std::io::{Read as _, Seek, SeekFrom};
use std::os::unix::prelude::PermissionsExt;

use fuser::BackgroundSession;
use mountpoint_s3_client::PutObjectParams;
use rand::RngCore;
use rand::SeedableRng as _;
use rand_chacha::ChaChaRng;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::{read_dir_to_entry_names, TestClientBox, TestSessionConfig};

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
    basic_read_test(crate::fuse_tests::s3_session::new, "basic_read_test");
}

#[test]
fn basic_read_test_mock() {
    basic_read_test(crate::fuse_tests::mock_session::new, "");
}

#[test]
fn basic_read_test_mock_prefix() {
    basic_read_test(crate::fuse_tests::mock_session::new, "basic_read_test");
}

fn read_flexible_retrieval_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const FILES: &[&str] = &["STANDARD", "GLACIER_IR", "GLACIER", "DEEP_ARCHIVE"];

    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    for file in FILES {
        let mut put_params = PutObjectParams::default();
        if *file != "STANDARD" {
            put_params.storage_class = Some(file.to_string());
        }
        test_client
            .put_object_params(&format!("{file}.txt"), b"hello world", put_params)
            .unwrap();
    }

    let read_dir_iter = read_dir(mount_point.path()).unwrap();
    for file in read_dir_iter {
        let file = file.unwrap();
        let file_name = file.file_name().to_string_lossy().into_owned();

        let metadata = file.metadata().unwrap();
        if file_name == "GLACIER.txt" || file_name == "DEEP_ARCHIVE.txt" {
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
#[test]
fn read_flexible_retrieval_test_s3() {
    read_flexible_retrieval_test(crate::fuse_tests::s3_session::new, "read_flexible_retrieval_test");
}

#[test_case(""; "no prefix")]
#[test_case("read_flexible_retrieval_test"; "prefix")]
fn read_flexible_retrieval_test_mock(prefix: &str) {
    read_flexible_retrieval_test(crate::fuse_tests::mock_session::new, prefix);
}
