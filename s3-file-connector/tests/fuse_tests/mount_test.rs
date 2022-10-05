use std::fs::{read_dir, File, OpenOptions};
use std::io::Read as _;

#[cfg(target_os = "linux")]
use std::os::unix::fs::OpenOptionsExt;

use fuser::BackgroundSession;
use rand::RngCore;
use rand::SeedableRng as _;
use rand_chacha::ChaChaRng;
use s3_file_connector::S3FilesystemConfig;
use tempfile::TempDir;

use crate::fuse_tests::PutObjectFn;

fn basic_read_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let mut rng = ChaChaRng::seed_from_u64(0x87654321);

    let (mount_point, _session, mut put_object_fn) = creator_fn(prefix, Default::default());

    put_object_fn("hello.txt", b"hello world").unwrap();
    let mut two_mib_body = vec![0; 2 * 1024 * 1024];
    rng.fill_bytes(&mut two_mib_body);
    put_object_fn("test2MiB.bin", &two_mib_body).unwrap();

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
    let mut bin = {
        let mut open = OpenOptions::new();
        open.read(true);
        #[cfg(target_os = "linux")]
        open.custom_flags(libc::O_DIRECT);
        open.open(files[1].path()).unwrap()
    };
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
