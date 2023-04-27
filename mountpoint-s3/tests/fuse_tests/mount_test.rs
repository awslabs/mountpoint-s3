use std::fs::{read_dir, File};
use std::io::{Read as _, Seek, SeekFrom};

use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use rand::RngCore;
use rand::SeedableRng as _;
use rand_chacha::ChaChaRng;
use tempfile::TempDir;

use crate::fuse_tests::TestClientBox;

fn basic_read_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let mut rng = ChaChaRng::seed_from_u64(0x87654321);

    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    test_client.put_object("hello.txt", b"hello world").unwrap();
    let mut two_mib_body = vec![0; 2 * 1024 * 1024];
    rng.fill_bytes(&mut two_mib_body);
    test_client.put_object("test2MiB.bin", &two_mib_body).unwrap();

    let test_dir = read_dir(mount_point.path()).unwrap();
    let files: Vec<_> = test_dir.map(|f| f.unwrap()).collect();

    assert_eq!(
        files
            .iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["hello.txt", "test2MiB.bin"]
    );

    let mut hello = File::open(files[0].path()).unwrap();
    let mut hello_contents = String::new();
    hello.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");
    drop(hello);

    // We could do this with std::io::copy into the digest, but we'd like to control the buffer size
    // so we can make it weird.
    let mut bin = File::open(files[1].path()).unwrap();
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

    let mut hello = File::open(files[0].path()).unwrap();
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
