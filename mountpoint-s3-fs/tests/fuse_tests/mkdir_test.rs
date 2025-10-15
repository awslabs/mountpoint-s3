use std::fs::{self, DirBuilder, File, metadata};
use std::path::Path;

use test_case::test_case;

use crate::common::fuse::{self, TestSessionCreator, read_dir_to_entry_names};

fn mkdir_remote_after_file_create_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());

    // Create local directory
    let dirname = "local_dir";
    let dirpath = test_session.mount_path().join(dirname);
    DirBuilder::new()
        .recursive(true)
        .create(&dirpath)
        .expect("local directory creation should succeed");

    assert!(!test_session.client().contains_dir(dirname).unwrap());

    // Write an object into the directory
    let filename = "nested_file";
    {
        let filepath = dirpath.join(filename);
        let f = File::options()
            .write(true)
            .create_new(true)
            .open(filepath)
            .expect("file creation should succeed inside newly created directory");
        f.sync_all().unwrap();
    }

    // Remove the new object from the client
    test_session
        .client()
        .remove_object(&format!("{dirname}/{filename}"))
        .unwrap();

    // Verify that the directory disappeared
    let read_dir_iter = fs::read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, Vec::<String>::new());
}

#[cfg(feature = "s3_tests")]
#[test]
fn mkdir_remote_after_file_create_test_s3() {
    mkdir_remote_after_file_create_test(fuse::s3_session::new, "mkdir_test");
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
fn mkdir_remote_after_file_create_test_mock(prefix: &str) {
    mkdir_remote_after_file_create_test(fuse::mock_session::new, prefix);
}

fn mkdir_visible_locally_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());

    // Create local directory
    let dirname = "local_dir";
    let dirpath = test_session.mount_path().join(dirname);
    DirBuilder::new()
        .recursive(true)
        .create(&dirpath)
        .expect("local directory creation should succeed");

    assert!(
        !test_session.client().contains_dir(dirname).unwrap(),
        "directory should not exist in client",
    );

    assert!(
        Path::exists(&dirpath),
        "directory {dirpath:?} should exist locally when queried",
    );

    let m = metadata(&dirpath).expect("directory should exist when checked by stat");
    assert!(m.file_type().is_dir(), "{dirpath:?} should be directory");
}

#[cfg(feature = "s3_tests")]
#[test]
fn mkdir_visible_locally_test_s3() {
    mkdir_visible_locally_test(fuse::s3_session::new, "mkdir_test");
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
fn mkdir_visible_locally_test_mock(prefix: &str) {
    mkdir_visible_locally_test(fuse::mock_session::new, prefix);
}
