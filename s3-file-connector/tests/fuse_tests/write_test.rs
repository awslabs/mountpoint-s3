use std::fs::{metadata, read, File};
use std::io::{ErrorKind, Write};
use std::path::Path;
use std::time::Duration;

use fuser::BackgroundSession;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use s3_file_connector::S3FilesystemConfig;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::PutObjectFn;

fn open_for_write(path: impl AsRef<Path>, append: bool) -> std::io::Result<File> {
    let mut options = File::options();
    if append {
        options.append(true);
    } else {
        options.write(true);
    }
    options.create(true).open(path)
}

fn sequential_write_test<F>(creator_fn: F, prefix: &str, append: bool)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    const OBJECT_SIZE: usize = 50 * 1024;
    const WRITE_SIZE: usize = 1024;

    let (mount_point, _session, mut put_object_fn) = creator_fn(prefix, Default::default());

    // Make sure there's an existing directory
    put_object_fn("dir/hello.txt", b"hello world").unwrap();

    // The existing file shouldn't be writable
    let err = open_for_write(mount_point.path().join("dir/hello.txt"), append).expect_err("can't write existing file");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);

    let path = mount_point.path().join("dir/new.txt");

    let mut f = open_for_write(&path, append).unwrap();

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    for part in body.chunks(WRITE_SIZE) {
        f.write_all(part).unwrap();
    }

    drop(f);

    // The kernel doesn't guarantee to flush the data as soon as the file is closed. Currently,
    // the file won't be visible on the file system until it's flushed to S3, and so trying to stat
    // the file will fail.
    // TODO we can remove this when we implement fsync, or change it when we make files visible
    // during writes
    std::thread::sleep(Duration::from_secs(5));

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);

    // We shouldn't be allowed to open the file for writing again
    let err = open_for_write(&path, append).expect_err("can't write existing file");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "append")]
#[test_case(false; "no append")]
fn sequential_write_test_s3(append: bool) {
    sequential_write_test(crate::fuse_tests::s3_session::new, "sequential_write_test", append);
}

#[test_case("", true; "no prefix append")]
#[test_case("", false; "no prefix no append")]
#[test_case("sequential_write_test", true; "prefix append")]
#[test_case("sequential_write_test", false; "prefix no append")]
fn sequential_write_test_mock(prefix: &str, append: bool) {
    sequential_write_test(crate::fuse_tests::mock_session::new, prefix, append);
}
