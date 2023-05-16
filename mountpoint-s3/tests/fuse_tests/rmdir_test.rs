use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use std::{
    fs::{self, DirBuilder},
    io::ErrorKind,
};
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::{read_dir_to_entry_names, TestClientBox};

fn rmdir_test<F>(creator_fn: F, prefix: &str)
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
    //should not remove non empty directory
    let err = fs::remove_dir(&non_empty_dirpath).expect_err("removing non-empty directory should fail");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);

    // readdir should now show that the empty directory is deleted
    let read_dir_iter = fs::read_dir(&main_path).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec![non_empty_dirname]);

    // should not be able to remove the deleted directory
    let err = fs::remove_dir(&empty_dirpath).expect_err("directory remove should not work on deleted directory");
    assert_eq!(err.kind(), ErrorKind::NotFound);
}

#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn rmdir_test_mock(prefix: &str) {
    rmdir_test(crate::fuse_tests::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("rmdir_test"; "prefix")]
fn rmdir_test_s3(prefix: &str) {
    rmdir_test(crate::fuse_tests::s3_session::new, prefix);
}
