use std::fs::OpenOptions;
use std::io::Write;
use std::{
    fs::{metadata, read_dir, read_to_string},
    time::Duration,
};

use mountpoint_s3_fs::{
    S3FilesystemConfig,
    fs::{CacheConfig, TimeToLive},
};
use test_case::test_case;

use crate::common::fuse::{self, TestSessionConfig, TestSessionCreator, read_dir_to_entry_names};

/// See [mountpoint_s3_fs::inode::tests::test_lookup_directory_overlap].
fn lookup_directory_overlap_test(creator_fn: impl TestSessionCreator, prefix: &str, subdir: &str) {
    let test_session = creator_fn(prefix, Default::default());

    test_session
        .client()
        .put_object(&format!("dir/{subdir}hello.txt"), b"hello world")
        .unwrap();
    test_session
        .client()
        .put_object(&format!("dir-1/{subdir}hello.txt"), b"hello world")
        .unwrap();

    let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["dir", "dir-1"]);

    let m = metadata(test_session.mount_path().join("dir")).unwrap();
    assert!(m.file_type().is_dir());
    let m = metadata(test_session.mount_path().join("dir-1")).unwrap();
    assert!(m.file_type().is_dir());
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no subdirectory")]
#[test_case("subdir/"; "with subdirectory")]
fn lookup_directory_overlap_test_s3(subdir: &str) {
    lookup_directory_overlap_test(fuse::s3_session::new, "lookup_dirrectory_overlap", subdir);
}

#[test_case("", ""; "no prefix no subdirectory")]
#[test_case("lookup_dirrectory_overlap", ""; "prefix no subdirectory")]
#[test_case("", "subdir/"; "no prefix subdirectory")]
#[test_case("lookup_dirrectory_overlap", "subdir/"; "prefix subdirectory")]
fn lookup_directory_overlap_test_mock(prefix: &str, subdir: &str) {
    lookup_directory_overlap_test(fuse::mock_session::new, prefix, subdir);
}

fn lookup_weird_characters_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());

    let keys = &[
        "weird$dir name",
        "weird$dir name/my 1st file~.jpg",
        "weird$dir name/my 2nd file: the better one.jpg",
        "weirder_.-@dir +name",
        "weirder_.-@dir +name/",
    ];

    for (i, key) in keys.iter().enumerate() {
        test_session
            .client()
            .put_object(key, format!("hello world {i}").as_bytes())
            .unwrap();
    }

    let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["weird$dir name", "weirder_.-@dir +name"]);

    let m = metadata(test_session.mount_path().join(keys[0])).unwrap();
    assert!(m.file_type().is_dir());
    let m = metadata(test_session.mount_path().join(keys[3])).unwrap();
    assert!(m.file_type().is_dir());

    let read_dir_iter = read_dir(test_session.mount_path().join(keys[0])).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(
        dir_entry_names,
        vec!["my 1st file~.jpg", "my 2nd file: the better one.jpg"]
    );

    let f = read_to_string(test_session.mount_path().join(keys[1])).unwrap();
    assert_eq!(f, "hello world 1");

    let f = read_to_string(test_session.mount_path().join(keys[2])).unwrap();
    assert_eq!(f, "hello world 2");
}

#[cfg(feature = "s3_tests")]
#[test]
fn lookup_directory_weird_characters_s3() {
    lookup_weird_characters_test(fuse::s3_session::new, "lookup_weird_characters_test");
}

#[test]
fn lookup_directory_weird_characters_mock() {
    lookup_weird_characters_test(fuse::mock_session::new, "lookup_weird_characters_test");
}

fn lookup_previously_shadowed_file_test(creator_fn: impl TestSessionCreator) {
    let filesystem_config = S3FilesystemConfig {
        cache_config: CacheConfig {
            serve_lookup_from_cache: false,
            file_ttl: Duration::ZERO,
            dir_ttl: Duration::ZERO,
            negative_cache_ttl: Duration::ZERO,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(
        Default::default(),
        TestSessionConfig {
            filesystem_config,
            ..Default::default()
        },
    );

    let name = "foo";
    let nested = format!("{name}/bar");
    test_session.client().put_object(&nested, b"bar").unwrap();

    let path = test_session.mount_path().join(name);
    let m = metadata(&path).unwrap();
    assert!(m.file_type().is_dir());

    test_session.client().remove_object(&nested).unwrap();
    test_session.client().put_object(name, b"foo").unwrap();

    let m = metadata(&path).unwrap();
    assert!(m.file_type().is_file());
}

#[cfg(feature = "s3_tests")]
#[test]
fn lookup_previously_shadowed_file_test_s3() {
    lookup_previously_shadowed_file_test(fuse::s3_session::new);
}

#[test]
fn lookup_previously_shadowed_file_test_mock() {
    lookup_previously_shadowed_file_test(fuse::mock_session::new);
}

fn lookup_unicode_keys_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());

    let keys = &["مرحبًا", "こんにちは/", "🇦🇺", "🐈/🦀"];

    for (i, key) in keys.iter().enumerate() {
        test_session
            .client()
            .put_object(key, format!("hello world {i}").as_bytes())
            .unwrap();
    }

    let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["مرحبًا", "こんにちは", "🇦🇺", "🐈"]);

    let m = metadata(test_session.mount_path().join("こんにちは")).unwrap();
    assert!(m.file_type().is_dir());
    let m = metadata(test_session.mount_path().join("🐈")).unwrap();
    assert!(m.file_type().is_dir());

    // Not really a "lookup" test, but since we're playing with Unicode, may as well do it here
    let new_path = test_session.mount_path().join("🐈/👻");
    let mut f = OpenOptions::new().write(true).create_new(true).open(&new_path).unwrap();
    f.write_all("hello world 4".as_bytes()).unwrap();
    f.sync_all().unwrap();
    drop(f);

    let f = read_to_string(test_session.mount_path().join(keys[0])).unwrap();
    assert_eq!(f, "hello world 0");

    let f = read_to_string(new_path).unwrap();
    assert_eq!(f, "hello world 4");
}

#[cfg(feature = "s3_tests")]
#[test]
fn lookup_unicode_keys_s3() {
    lookup_unicode_keys_test(fuse::s3_session::new, "lookup_unicode_keys_test");
}

#[test]
fn lookup_unicode_keys_mock() {
    lookup_unicode_keys_test(fuse::mock_session::new, "lookup_unicode_keys_test");
}

fn lookup_with_negative_cache(creator_fn: impl TestSessionCreator) {
    const FILE_NAME: &str = "hello.txt";
    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            cache_config: CacheConfig::new(TimeToLive::Duration(Duration::from_secs(600))),
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("lookup_with_negative_cache", config);

    // Check negative caching
    let file_path = test_session.mount_path().join(FILE_NAME);
    metadata(&file_path).expect_err("should fail as no object exists");

    test_session.client().put_object(FILE_NAME, b"hello").unwrap();

    metadata(&file_path).expect_err("should fail as mountpoint should use negative cache");

    // Use read dir to discover the new file
    let dir_entry_names = read_dir_to_entry_names(read_dir(test_session.mount_path()).unwrap());
    assert_eq!(dir_entry_names, vec![FILE_NAME]);

    let m = metadata(&file_path).expect("should succeed as object is cached and exists");
    assert!(m.file_type().is_file());
}

#[cfg(feature = "s3_tests")]
#[test]
fn lookup_with_negative_cache_s3() {
    lookup_with_negative_cache(fuse::s3_session::new);
}

#[test]
fn lookup_with_negative_cache_mock() {
    lookup_with_negative_cache(fuse::mock_session::new);
}

fn lookup_with_negative_cache_ttl(creator_fn: impl TestSessionCreator, ttl: Duration) {
    const FILE_NAME: &str = "hello.txt";
    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            cache_config: CacheConfig::new(TimeToLive::Duration(Duration::from_secs(600)))
                .with_negative_metadata_ttl(TimeToLive::Duration(ttl)),
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("lookup_with_negative_cache_ttl", config);

    let file_path = test_session.mount_path().join(FILE_NAME);
    metadata(&file_path).expect_err("should fail as no object exists");

    test_session.client().put_object(FILE_NAME, b"hello").unwrap();
    metadata(&file_path).expect_err("should fail as mountpoint should use negative cache");

    std::thread::sleep(ttl);

    let m = metadata(&file_path).expect("should succeed as the ttl has expired");
    assert!(m.file_type().is_file());
}

#[cfg(feature = "s3_tests")]
#[test]
fn lookup_with_negative_cache_ttl_s3() {
    lookup_with_negative_cache_ttl(fuse::s3_session::new, Duration::from_secs(5));
}

#[test]
fn lookup_with_negative_cache_ttl_mock() {
    lookup_with_negative_cache_ttl(fuse::mock_session::new, Duration::from_secs(1));
}
