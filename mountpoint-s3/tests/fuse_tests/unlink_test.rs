//! FUSE integration tests covering unlink.
//!
//! Cases:
//! - one ino. delete it. not in s3 anymore
//! - one ino. open for reading. delete it. still in s3. close reader. not in s3.

use std::fs;
use std::io::{ErrorKind, Read, Write};
use std::os::unix::prelude::OpenOptionsExt;
use std::path::Path;
use std::time::Duration;

use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::PutObjectFn;

/// Simple test cases, assuming a file isn't open for reading elsewhere.
fn simple_unlink_tests<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let (mount_point, _session, mut put_object_fn) = creator_fn(prefix, Default::default());

    // Add a file directly to the bucket
    put_object_fn("dir/hello.txt", b"hello world").unwrap();
    put_object_fn("dir/foo.txt", b"bar").unwrap();

    let main_dir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");
    let nonexistent_path = mount_point.path().join("dir/not-here.txt");

    // files should be visible in readdir
    let dir = fs::read_dir(&main_dir).unwrap();
    let dirs: Vec<_> = dir.map(|f| f.unwrap()).collect();
    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["foo.txt", "hello.txt"]
    );

    let err = fs::remove_file(nonexistent_path).expect_err("file remove/unlink on non-existing file should fail");
    assert_eq!(err.kind(), ErrorKind::NotFound);

    fs::remove_file(&path).expect("file remove/unlink of existing path should succeed");

    let err = fs::remove_file(path).expect_err("file remove/unlink a second time on existing file should fail");
    assert_eq!(err.kind(), ErrorKind::NotFound);

    // readdir should now show the file as gone
    let dir = fs::read_dir(&main_dir).unwrap();
    let dirs: Vec<_> = dir.map(|f| f.unwrap()).collect();
    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["foo.txt"]
    );
}

#[cfg(feature = "s3_tests")]
#[test]
fn simple_unlink_test_s3() {
    simple_unlink_tests(crate::fuse_tests::s3_session::new, "simple_unlink_tests");
}

#[test_case(""; "no prefix")]
#[test_case("simple_unlink_test"; "prefix")]
fn simple_unlink_test_mock(prefix: &str) {
    simple_unlink_tests(crate::fuse_tests::mock_session::new, prefix);
}
