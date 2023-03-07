use std::fs::{metadata, read_dir, read_to_string};

use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::PutObjectFn;

/// See [s3_file_connector::inode::tests::test_lookup_directory_overlap].
fn lookup_directory_overlap_test<F>(creator_fn: F, prefix: &str, subdir: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let (mount_point, _session, mut put_object_fn) = creator_fn(prefix, Default::default());

    put_object_fn(&format!("dir/{subdir}hello.txt"), b"hello world").unwrap();
    put_object_fn(&format!("dir-1/{subdir}hello.txt"), b"hello world").unwrap();

    let test_dir = read_dir(mount_point.path()).unwrap();
    let dirs: Vec<_> = test_dir.map(|f| f.unwrap()).collect();

    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["dir", "dir-1"]
    );

    let m = metadata(mount_point.path().join("dir")).unwrap();
    assert!(m.file_type().is_dir());
    let m = metadata(mount_point.path().join("dir-1")).unwrap();
    assert!(m.file_type().is_dir());
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no subdirectory")]
#[test_case("subdir/"; "with subdirectory")]
fn lookup_directory_overlap_test_s3(subdir: &str) {
    lookup_directory_overlap_test(crate::fuse_tests::s3_session::new, "lookup_dirrectory_overlap", subdir);
}

#[test_case("", ""; "no prefix no subdirectory")]
#[test_case("lookup_dirrectory_overlap", ""; "prefix no subdirectory")]
#[test_case("", "subdir/"; "no prefix subdirectory")]
#[test_case("lookup_dirrectory_overlap", "subdir/"; "prefix subdirectory")]
fn lookup_directory_overlap_test_mock(prefix: &str, subdir: &str) {
    lookup_directory_overlap_test(crate::fuse_tests::mock_session::new, prefix, subdir);
}

fn lookup_weird_characters_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let (mount_point, _session, mut put_object_fn) = creator_fn(prefix, Default::default());

    let keys = &[
        "weird$dir name",
        "weird$dir name/my 1st file~.jpg",
        "weird$dir name/my 2nd file: the better one.jpg",
        "weirder_.-@dir +name",
        "weirder_.-@dir +name/",
    ];

    for (i, key) in keys.iter().enumerate() {
        put_object_fn(key, format!("hello world {i}").as_bytes()).unwrap();
    }

    let test_dir = read_dir(mount_point.path()).unwrap();
    let dirs: Vec<_> = test_dir.map(|f| f.unwrap()).collect();

    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["weird$dir name", "weirder_.-@dir +name"]
    );

    let m = metadata(mount_point.path().join(keys[0])).unwrap();
    assert!(m.file_type().is_dir());
    let m = metadata(mount_point.path().join(keys[3])).unwrap();
    assert!(m.file_type().is_dir());

    let test_dir = read_dir(mount_point.path().join(keys[0])).unwrap();
    let dirs: Vec<_> = test_dir.map(|f| f.unwrap()).collect();

    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["my 1st file~.jpg", "my 2nd file: the better one.jpg"]
    );

    let f = read_to_string(mount_point.path().join(keys[1])).unwrap();
    assert_eq!(f, "hello world 1");

    let f = read_to_string(mount_point.path().join(keys[2])).unwrap();
    assert_eq!(f, "hello world 2");
}

#[cfg(feature = "s3_tests")]
#[test]
fn lookup_directory_weird_characters_s3() {
    lookup_weird_characters_test(crate::fuse_tests::s3_session::new, "lookup_weird_characters_test");
}

#[test]
fn lookup_directory_weird_characters_mock() {
    lookup_weird_characters_test(crate::fuse_tests::mock_session::new, "lookup_weird_characters_test");
}
