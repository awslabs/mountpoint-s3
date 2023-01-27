use std::fs::{metadata, read_dir};

use fuser::BackgroundSession;
use s3_file_connector::S3FilesystemConfig;
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
