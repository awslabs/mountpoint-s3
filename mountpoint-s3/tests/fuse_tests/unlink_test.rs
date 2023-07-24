use std::fs::{self, File};
use std::io::{ErrorKind, Read, Seek, SeekFrom, Write};

use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::{read_dir_to_entry_names, TestClientBox, TestSessionConfig};

/// Simple test cases, assuming a file isn't open for reading elsewhere.
fn simple_unlink_tests<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_delete: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_session_config);

    // Add a file directly to the bucket
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();
    test_client.put_object("dir/foo.txt", b"bar").unwrap();

    let main_dir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");
    let nonexistent_path = mount_point.path().join("dir/not-here.txt");

    // files should be visible in readdir
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["foo.txt", "hello.txt"]);

    let err = fs::remove_file(nonexistent_path).expect_err("file remove/unlink on non-existing file should fail");
    assert_eq!(err.kind(), ErrorKind::NotFound);

    fs::remove_file(&path).expect("file remove/unlink of existing path should succeed");

    let err = fs::remove_file(path).expect_err("file remove/unlink a second time on existing file should fail");
    assert_eq!(err.kind(), ErrorKind::NotFound);

    // readdir should now show the file as gone
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["foo.txt"]);
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

/// Testing behavior when a file is unlinked in the middle of reading
fn unlink_readhandle_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_delete: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_session_config);

    // Add a file directly to the bucket
    const B_IN_MB: usize = 1024 * 1024;
    test_client.put_object("dir/this.txt", &[0u8; B_IN_MB * 128]).unwrap();
    test_client.put_object("dir/other.txt", &[0u8; 1024]).unwrap(); // Persist implicit directory for test

    let main_dir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/this.txt");

    let mut f = File::options()
        .read(true)
        .write(false)
        .open(&path)
        .expect("open should succeed");
    f.read_exact(&mut [0u8; 1]).expect("read should succeed");

    fs::remove_file(&path).expect("file remove/unlink of existing path should succeed");

    // readdir should now show the file as gone
    let read_dir_iter = fs::read_dir(main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["other.txt"]);

    let _new_pos = f.seek(SeekFrom::Start((B_IN_MB * 120) as u64)).unwrap(); // Seek far ahead in file, to exceed prefetcher's progress
    let err = f
        .read_exact(&mut [0u8; 1])
        .expect_err("fresh read using open file handle should fail as object no longer exists");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EIO, "unlink should fail with OS err EIO");
}

#[cfg(feature = "s3_tests")]
#[test]
fn unlink_readhandle_test_s3() {
    unlink_readhandle_test(crate::fuse_tests::s3_session::new, "unlink_readhandle_test");
}

#[test_case(""; "no prefix")]
#[test_case("unlink_readhandle_test"; "prefix")]
fn unlink_readhandle_test_mock(prefix: &str) {
    unlink_readhandle_test(crate::fuse_tests::mock_session::new, prefix);
}

/// Testing behavior when a file is unlinked during and after writing
fn unlink_writehandle_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_delete: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_session_config);

    // Add a file directly to the bucket
    test_client.put_object("dir/other.txt", &[0u8; 1024]).unwrap(); // Persist implicit directory for test

    let main_dir = mount_point.path().join("dir");
    let path = main_dir.join("writing.txt");

    let mut f = File::options()
        .read(false)
        .write(true)
        .create(true)
        .open(&path)
        .expect("open for writing should succeed");

    let err = fs::remove_file(&path).expect_err("file remove/unlink of path open for writing should fail");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EPERM, "unlink should fail with OS err EPERM");

    f.write_all(&[0u8; 1]).expect("write should succeed");

    let err =
        fs::remove_file(&path).expect_err("file remove/unlink of path partial written to should continue to fail");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EPERM, "unlink should fail with OS err EPERM");

    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(
        dir_entry_names,
        vec!["other.txt", "writing.txt"],
        "file should be present in readdir"
    );

    f.sync_all().unwrap();
    drop(f);

    fs::remove_file(&path).expect("file can be deleted after being persisted remotely");

    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["other.txt"], "deleted file should be absent");
}

#[cfg(feature = "s3_tests")]
#[test]
fn unlink_writehandle_test_s3() {
    unlink_writehandle_test(crate::fuse_tests::s3_session::new, "unlink_writehandle_test");
}

#[test_case(""; "no prefix")]
#[test_case("unlink_writehandle_test"; "prefix")]
fn unlink_writehandle_test_mock(prefix: &str) {
    unlink_writehandle_test(crate::fuse_tests::mock_session::new, prefix);
}

fn unlink_fail_on_delete_not_allowed_test<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_delete: false,
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(Default::default(), test_session_config);

    test_client.put_object("dir/file.txt", &[0u8; 4]).unwrap();

    let main_dir = mount_point.path().join("dir");
    let path = main_dir.join("file.txt");
    let err = fs::remove_file(path).expect_err("file remove/unlink should fail when delete is not allowed");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EPERM, "unlink should fail with OS err EPERM");
}

#[cfg(feature = "s3_tests")]
#[test]
fn unlink_fail_on_delete_not_allowed_test_s3() {
    unlink_fail_on_delete_not_allowed_test(crate::fuse_tests::s3_session::new);
}

#[test]
fn unlink_fail_on_delete_not_allowed_test_mock() {
    unlink_fail_on_delete_not_allowed_test(crate::fuse_tests::mock_session::new);
}
