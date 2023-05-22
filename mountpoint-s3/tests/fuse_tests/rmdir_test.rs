use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use std::fs::{self, DirBuilder};
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::{read_dir_to_entry_names, TestClientBox};

fn rmdir_local_dir_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, _test_client) = creator_fn(prefix, Default::default());

    // Create local directory
    let main_dirname = "test_dir";
    let main_path = mount_point.path().join(main_dirname);
    let empty_dirname = "local_empty_dir";
    let non_empty_dirname = "local_non_empty_dir";
    let empty_dirpath = main_path.join(empty_dirname);
    let non_empty_dirpath = main_path.join(non_empty_dirname);

    DirBuilder::new().recursive(true).create(&empty_dirpath).unwrap();
    DirBuilder::new().recursive(true).create(&non_empty_dirpath).unwrap();

    // verify that the directories exist before testing `rmdir`
    let read_dir_iter = fs::read_dir(&main_path).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec![empty_dirname, non_empty_dirname]);

    // Write an object into the directory
    let filename = "nested_file";
    let filepath = non_empty_dirpath.join(filename);
    fs::write(filepath, "").unwrap();

    // remove the directories
    fs::remove_dir(&empty_dirpath).expect("should be able to remove empty directory");

    let err = fs::remove_dir(&non_empty_dirpath).expect_err("removing non-empty directory should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));

    // readdir should now show that the empty directory is deleted
    let mut read_dir_iter = fs::read_dir(&main_path).unwrap();
    let mut dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec![non_empty_dirname]);

    // should not be able to remove the deleted directory
    let err = fs::remove_dir(&empty_dirpath).expect_err("directory remove should not work on deleted directory");
    assert_eq!(err.raw_os_error(), Some(libc::ENOENT));

    // testing to re-create the removed directory
    DirBuilder::new().recursive(true).create(&empty_dirpath).unwrap();
    read_dir_iter = fs::read_dir(&main_path).unwrap();
    dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec![empty_dirname, non_empty_dirname]);
}

#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn rmdir_local_dir_test_mock(prefix: &str) {
    rmdir_local_dir_test(crate::fuse_tests::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn rmdir_local_dir_test_s3(prefix: &str) {
    rmdir_local_dir_test(crate::fuse_tests::s3_session::new, prefix);
}

fn rmdir_remote_dir_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    let main_dirname = "test_dir";
    let main_path = mount_point.path().join(main_dirname);
    // explicitly testing remote directories not getting removed
    let remote_dirname = "remote_dir";
    test_client
        .put_object(&format!("{main_dirname}/{remote_dirname}/hello.txt"), b"hello world")
        .unwrap();
    let remote_path = main_path.join(remote_dirname);
    let err = fs::remove_dir(remote_path).expect_err("removing remote directory should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));

    // checking if the test directory has correct entries
    let read_dir_iter = fs::read_dir(&main_path).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec![remote_dirname]);

    let empty_remote_dirname = "empty_remote_dir";
    // adding zero byte directory marker
    test_client
        .put_object(&format!("{main_dirname}/{empty_remote_dirname}"), b"")
        .unwrap();
    let empty_remote_path = main_path.join(empty_remote_dirname);
    let err = fs::remove_dir(empty_remote_path).expect_err("removing remote directory should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));

    // checking if the test directory has correct entries
    let read_dir_iter = fs::read_dir(&main_path).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec![remote_dirname, empty_remote_dirname]);
}

#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn rmdir_remote_dir_test_mock(prefix: &str) {
    rmdir_remote_dir_test(crate::fuse_tests::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn rmdir_remote_dir_test_s3(prefix: &str) {
    rmdir_remote_dir_test(crate::fuse_tests::s3_session::new, prefix);
}

fn create_after_rmdir_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, _test_client) = creator_fn(prefix, Default::default());
    // Create local directory
    let main_dirname = "test_dir";
    let main_path = mount_point.path().join(main_dirname);
    let empty_dirname = "local_empty_dir";
    let empty_dirpath = main_path.join(empty_dirname);

    DirBuilder::new().recursive(true).create(&empty_dirpath).unwrap();

    // remove the directory
    fs::remove_dir(&empty_dirpath).expect("should be able to remove empty directory");

    // trying to write a file and a sub-directory in the removed directory
    let filename = "nested_file";
    let filepath = empty_dirpath.join(filename);
    let file_err = fs::write(filepath, "Hello World").expect_err("Cannot create file in a removed directory");
    assert_eq!(file_err.raw_os_error(), Some(libc::ENOENT));

    let dirname = "nested_dir";
    let dirpath = empty_dirpath.join(dirname);
    let dir_err = DirBuilder::new()
        .recursive(false)
        .create(dirpath)
        .expect_err("Cannot create a directory in a removed directory");
    assert_eq!(dir_err.raw_os_error(), Some(libc::ENOENT));
}

#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn create_after_rmdir_test_mock(prefix: &str) {
    create_after_rmdir_test(crate::fuse_tests::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn create_after_rmdir_test_s3(prefix: &str) {
    create_after_rmdir_test(crate::fuse_tests::s3_session::new, prefix);
}
