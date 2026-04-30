use std::collections::HashSet;
#[cfg(target_os = "linux")]
use std::ffi::CString;
use std::fs::{self, File, OpenOptions};
use std::io::{ErrorKind, Read, Seek, SeekFrom, Write};
use std::os::unix::fs::MetadataExt;
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};
use std::sync::{Arc, Barrier};
use std::time::Duration;

use mountpoint_s3_fs::S3FilesystemConfig;
use mountpoint_s3_fs::fs::CacheConfig;
use mountpoint_s3_fs::s3::S3Personality;
#[cfg(target_os = "linux")]
use nix::fcntl::RenameFlags;
use rand::RngExt;
use rand::distr::Alphanumeric;
use test_case::test_case;
use tracing::{debug, info};

use crate::common::fuse::{self, TestSession, TestSessionConfig, read_dir_to_entry_names};

/// Simple test cases, assuming a file isn't open for reading elsewhere.
fn rename_basic_tests<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add a file directly to the bucket
    test_client.put_object("dir/source.txt", b"hello world").unwrap();

    let main_dir = mount_point.join("dir");
    let nonexistent_path = main_dir.join("nonexistent.txt");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    // files should be visible in readdir
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["source.txt"]);

    let err =
        fs::rename(&nonexistent_path, &destination_path).expect_err("file rename should fail as source doesn't exist");
    assert_eq!(err.kind(), ErrorKind::NotFound);

    fs::rename(&source_path, &destination_path).expect("should succeed if source exists and destination doesnt");
    let err = fs::metadata(&source_path).expect_err("source should no longer exist after rename");
    assert_eq!(err.kind(), ErrorKind::NotFound);
    fs::metadata(&destination_path).expect("destination should exist after rename");

    // readdir should now show the updated directory structure
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["destination.txt"]);

    // S3 structure should match
    assert!(
        test_client.contains_key("dir/destination.txt").unwrap(),
        "destination object must now exist in S3"
    );
    assert!(
        !test_client.contains_key("dir/source.txt").unwrap(),
        "source object must no longer exist in S3"
    );
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_basic_tests_s3() {
    rename_basic_tests(fuse::s3_session::new, "rename_basic_tests");
}

#[test_case(""; "no prefix")]
#[test_case("rename_basic_tests"; "prefix")]
fn rename_basic_tests_mock(prefix: &str) {
    rename_basic_tests(fuse::mock_session::new, prefix);
}

fn rename_simplewithcache_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            cache_config: CacheConfig {
                serve_lookup_from_cache: true,
                dir_ttl: Duration::from_secs(600),
                file_ttl: Duration::from_secs(600),
                ..Default::default()
            },
            s3_personality: S3Personality::ExpressOneZone,
            allow_rename: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add a file directly to the bucket
    test_client.put_object("dir/source.txt", b"hello world").unwrap();

    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    // files should be visible in readdir
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["source.txt"]);

    fs::rename(&source_path, &destination_path).expect("should succeed if source exists and destination doesnt");
    let err =
        fs::metadata(&source_path).expect_err("source should no longer exist after rename even with cache enabled");
    assert_eq!(err.kind(), ErrorKind::NotFound);
    fs::metadata(&destination_path).expect("destination should exist after rename");

    // readdir should now show the updated directory structure
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["destination.txt"]);

    // S3 structure should match
    assert!(
        test_client.contains_key("dir/destination.txt").unwrap(),
        "destination object must now exist in S3"
    );
    assert!(
        !test_client.contains_key("dir/source.txt").unwrap(),
        "source object must no longer exist in S3"
    );
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_simplewithcache_test_s3() {
    rename_simplewithcache_test(fuse::s3_session::new, "rename_simplewithcache_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_simplewithcache_test"; "prefix")]
fn rename_simplewithcache_test_mock(prefix: &str) {
    rename_simplewithcache_test(fuse::mock_session::new, prefix);
}

/// Covers where object is cached by MP but gone in S3.
fn rename_srcremovedbutcached_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            cache_config: CacheConfig {
                serve_lookup_from_cache: true,
                dir_ttl: Duration::from_secs(600),
                file_ttl: Duration::from_secs(600),
                ..Default::default()
            },
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path().to_owned();
    const SOURCE_OBJ_KEY: &str = "dir/source.txt";

    // Add a file directly to the bucket
    test_client.put_object(SOURCE_OBJ_KEY, b"hello world").unwrap();

    let main_dir = mount_point.join("dir");
    let nonexistent_path = main_dir.join("nonexistent.txt");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    // files should be visible in readdir
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["source.txt"]);

    test_client.remove_object(SOURCE_OBJ_KEY).unwrap();

    fs::metadata(&source_path).expect("stat should succeed from cache");

    let err = fs::rename(&nonexistent_path, &destination_path)
        .expect_err("file rename should fail when src is missing in S3");
    assert_eq!(
        err.kind(),
        ErrorKind::NotFound,
        "rename should return ENOENT for the source no longer existing in S3"
    );

    let err = fs::metadata(&destination_path).expect_err("stat should fail for destination as rename failed");
    assert_eq!(
        err.kind(),
        ErrorKind::NotFound,
        "stat on destination should return ENOENT as rename failed"
    );

    // Assert expected S3 structure
    assert!(
        !test_client.contains_key("dir/source.txt").unwrap(),
        "source object must no longer exist in S3 after removal"
    );
    assert!(
        !test_client.contains_key("dir/destination.txt").unwrap(),
        "destination object should not exist in S3"
    );
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_srcremovedbutcached_test_s3() {
    rename_srcremovedbutcached_test(fuse::s3_session::new, "rename_srcremovedbutcached_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_srcremovedbutcached_test"; "prefix")]
fn rename_srcremovedbutcached_test_mock(prefix: &str) {
    rename_srcremovedbutcached_test(fuse::mock_session::new, prefix);
}

fn rename_destexists_tests<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Prepare bucket content
    test_client.put_object("dir/source.txt", b"hello world").unwrap();
    test_client.put_object("dir/destination.txt", b"foo bar").unwrap();

    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    // files should be visible in readdir
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let mut dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    // Sort them
    dir_entry_names.sort();
    assert_eq!(dir_entry_names, vec!["destination.txt", "source.txt"]);

    let err = fs::rename(&source_path, &destination_path).expect_err("should fail if destination exists");
    assert_eq!(err.kind(), ErrorKind::AlreadyExists);

    for s3_key in ["dir/source.txt", "dir/destination.txt"] {
        assert!(
            test_client.contains_key(s3_key).unwrap(),
            "object with key {s3_key:?} should exist in S3"
        );
    }
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_destexists_tests_s3() {
    rename_destexists_tests(fuse::s3_session::new, "rename_destexists_tests");
}

#[test_case(""; "no prefix")]
#[test_case("rename_destexists_tests"; "prefix")]
fn rename_destexists_tests_mock(prefix: &str) {
    rename_destexists_tests(fuse::mock_session::new, prefix);
}

fn rename_destparentmissing_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Prepare bucket content
    test_client.put_object("a/source.txt", b"hello world").unwrap();

    let source_path = mount_point.join("a/source.txt");
    let destination_path = mount_point.join("b/destination.txt");

    let err = fs::rename(&source_path, &destination_path).expect_err("should fail if destination parent doesn't exist");
    assert_eq!(err.kind(), ErrorKind::NotFound);

    fs::create_dir(mount_point.join("b")).unwrap();
    fs::rename(&source_path, &destination_path).expect("should succeed if destination parent now exists");

    // S3 structure should match
    assert!(
        test_client.contains_key("b/destination.txt").unwrap(),
        "destination object must now exist in S3"
    );
    assert!(
        !test_client.contains_key("a/source.txt").unwrap(),
        "source object must no longer exist in S3"
    );
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_destparentmissing_test_s3() {
    rename_destparentmissing_test(fuse::s3_session::new, "rename_destparentmissing_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_destparentmissing_test"; "prefix")]
fn rename_destparentmissing_test_mock(prefix: &str) {
    rename_destparentmissing_test(fuse::mock_session::new, prefix);
}

/// Testing behavior when a file is renamed in the middle of reading
fn rename_readhandle_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add a file directly to the bucket
    const B_IN_MB: usize = 1024 * 1024;
    test_client.put_object("dir/source.txt", &[0u8; B_IN_MB * 128]).unwrap();

    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    let mut f = File::options()
        .read(true)
        .write(false)
        .open(&source_path)
        .expect("open should succeed");
    f.read_exact(&mut [0u8; 1]).expect("read should succeed");

    fs::rename(&source_path, &destination_path).expect("should succeed if source exists and destination doesnt");

    // readdir should now show the file as gone (moved)
    let read_dir_iter = fs::read_dir(main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["destination.txt"]);

    let _new_pos = f.seek(SeekFrom::Start((B_IN_MB * 120) as u64)).unwrap(); // Seek far ahead in file, to exceed prefetcher's progress
    let err = f
        .read_exact(&mut [0u8; 1])
        .expect_err("fresh read using open file handle should fail as object backing inode no longer exists");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EIO, "read should fail with OS err EIO");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_readhandle_test_s3() {
    rename_readhandle_test(fuse::s3_session::new, "rename_readhandle_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_readhandle_test"; "prefix")]
fn rename_readhandle_test_mock(prefix: &str) {
    rename_readhandle_test(fuse::mock_session::new, prefix);
}

/// Testing behavior when a file is renamed during and after writing
fn rename_writehandle_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add a file directly to the bucket
    test_client.put_object("dir/other.txt", &[0u8; 1024]).unwrap(); // Persist implicit directory for test

    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("writing.txt");
    let destination_path = main_dir.join("writing-after-move.txt");

    let mut f = File::options()
        .read(false)
        .write(true)
        .create_new(true)
        .open(&source_path)
        .expect("open for writing should succeed");

    let err = fs::rename(&source_path, &destination_path).expect_err("rename of path open for writing should fail");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EPERM, "unlink should fail with OS err EPERM");

    f.write_all(&[0u8; 1]).expect("write should succeed");

    let err = fs::rename(&source_path, &destination_path)
        .expect_err("rename of path partially written to should continue to fail");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::EPERM, "rename should fail with OS err EPERM");

    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    let mut dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    dir_entry_names.sort();
    assert_eq!(
        dir_entry_names,
        vec!["other.txt", "writing.txt"],
        "file should be present in readdir"
    );

    f.sync_all().unwrap();
    drop(f);

    fs::rename(&source_path, &destination_path).expect("file can be renamed after being persisted remotely");
    debug!("reading now --- a");
    let read_dir_iter = fs::read_dir(&main_dir).unwrap();
    debug!("read");
    let mut dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    dir_entry_names.sort();
    assert_eq!(
        dir_entry_names,
        vec!["other.txt", "writing-after-move.txt"],
        "should only see existing files and new renamed file"
    );
    debug!("test successfull");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_writehandle_test_s3() {
    rename_writehandle_test(fuse::s3_session::new, "rename_writehandle_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_writehandle_test"; "prefix")]
fn rename_writehandle_test_mock(prefix: &str) {
    rename_writehandle_test(fuse::mock_session::new, prefix);
}

fn rename_directory_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Prepare bucket content
    test_client.put_object("source-dir/a.txt", b"hello world").unwrap();
    test_client.put_object("source-dir/b.txt", b"foo bar").unwrap();

    let src_dir_path = mount_point.join("source-dir");
    let dest_dir_path = mount_point.join("destination-dir");

    let err = fs::rename(&src_dir_path, &dest_dir_path).expect_err("should fail as directory rename is not supported");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);

    // But we can still do other renames, right?
    fs::rename(src_dir_path.join("a.txt"), src_dir_path.join("new-a.txt"))
        .expect("rename of files should still succeed");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_directory_test_s3() {
    rename_directory_test(fuse::s3_session::new, "rename_directory_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_directory_test"; "prefix")]
fn rename_directory_test_mock(prefix: &str) {
    rename_directory_test(fuse::mock_session::new, prefix);
}

/// Check that overwriting rename is forbidden when `allow_overwrites` is not passed as a flag.
fn rename_overwrites_forbidden_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add a file directly to the bucket
    test_client.put_object("dir/source.txt", b"hello world").unwrap();
    test_client.put_object("dir/destination.txt", b"hello world").unwrap();

    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    // files should be visible in readdir
    let read_dir_iter = fs::read_dir(&main_dir).expect("directory should exist");
    let mut dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    dir_entry_names.sort();
    assert_eq!(dir_entry_names, vec!["destination.txt", "source.txt"]);

    let err = fs::rename(source_path, destination_path)
        .expect_err("overwriting file rename should fail if allow_overwrite was not provided");
    assert_eq!(err.kind(), ErrorKind::AlreadyExists);
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_overwrites_forbidden_s3() {
    rename_overwrites_forbidden_test(fuse::s3_session::new, "rename_nodelete_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_nodelete_test"; "prefix")]
fn rename_overwrites_forbidden_mock(prefix: &str) {
    rename_overwrites_forbidden_test(fuse::mock_session::new, prefix);
}

// checks that renaming a file to it's current name succeeds
// TODO: Maybe cut this test, as this is guaranteed by the rename implementations
fn rename_no_op_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Put a object
    test_client.put_object("dir/source.txt", b"hello world").unwrap();
    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("source.txt");
    fs::rename(source_path, destination_path).expect("rename of files should succeed");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_same_file_test_s3() {
    rename_no_op_test(fuse::s3_session::new, "rename_nodelete_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_nodelete_test"; "prefix")]
fn rename_same_file_test_mock(prefix: &str) {
    rename_no_op_test(fuse::mock_session::new, prefix);
}

/**
 * Semantics Issue: What hapens, when we call rename on a direcotry with itself as an argument?
 */
fn rename_dir_noop_accepted_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Put a object
    test_client.put_object("dir/source.txt", b"hello world").unwrap();
    let main_dir = mount_point.join("dir");

    fs::rename(main_dir.clone(), main_dir.clone()).expect("rename of directory into itself should work");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_dir_noop_accepted_s3() {
    crate::fuse_tests::rename_test::rename_dir_noop_accepted_test(fuse::s3_session::new, "rename_dir_rejected_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_dir_rejected"; "prefix")]
fn rename_dir_noop_accepted_mock(prefix: &str) {
    crate::fuse_tests::rename_test::rename_dir_noop_accepted_test(fuse::mock_session::new, prefix);
}

#[cfg(target_os = "linux")]
/// Wrapper for renameat2, using a syscall instead of using nix::fcntl::renameat2.
/// Needed, as glibc 2.26 does not support rename, and this version is shipped on CentOs 7 and Al2.
pub fn renameat2_wrapper(old_path: &Path, new_path: &Path, flags: RenameFlags) -> Result<(), i32> {
    let old_path_c = CString::new(old_path.as_os_str().as_encoded_bytes()).map_err(|_| libc::EINVAL)?;
    let new_path_c = CString::new(new_path.as_os_str().as_encoded_bytes()).map_err(|_| libc::EINVAL)?;

    // SAFETY: This is safe assuming renameat2 is implemented correctly.
    //          We only pass in valid null terminated strings,
    //          the constants are system defined and valid for this system call,
    //          and `RenameFlags` can be passed to this system call.
    let result: Result<usize, syscalls::Errno> = unsafe {
        syscalls::syscall5(
            syscalls::Sysno::renameat2,
            libc::AT_FDCWD as usize,
            old_path_c.as_ptr() as usize,
            libc::AT_FDCWD as usize,
            new_path_c.as_ptr() as usize,
            flags.bits() as usize,
        )
    };

    match result {
        Ok(_) => Ok(()),
        Err(err) => Err(-err.into_raw()),
    }
}

#[cfg(target_os = "linux")]
fn rename_exchange_rejected_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    test_client
        .put_object("a.txt", b"hello world")
        .expect("put object should succeed");
    test_client
        .put_object("b.txt", b"fun times")
        .expect("put object should succeed");
    let result_exchange = renameat2_wrapper(
        &mount_point.join("a.txt"),
        &mount_point.join("b.txt"),
        nix::fcntl::RenameFlags::RENAME_EXCHANGE,
    );
    result_exchange.expect_err("Rename exchange rejected");
    let result_noreplace = renameat2_wrapper(
        &mount_point.join("a.txt"),
        &mount_point.join("b.txt"),
        nix::fcntl::RenameFlags::RENAME_NOREPLACE,
    );
    result_noreplace.expect_err("Rename noreplace not supported");
    let result_whiteout = renameat2_wrapper(
        &mount_point.join("a.txt"),
        &mount_point.join("b.txt"),
        nix::fcntl::RenameFlags::RENAME_WHITEOUT,
    );
    result_whiteout.expect_err("Rename noreplace not supported");
}

#[cfg(target_os = "linux")]
#[test_case(""; "no prefix")]
#[test_case("test_multiple_renames_deep_structure"; "prefix")]
fn rename_exchange_rejected_mock(prefix: &str) {
    rename_exchange_rejected_test(fuse::mock_session::new, prefix);
}

#[cfg(target_os = "linux")]
#[cfg(feature = "s3express_tests")]
#[test_case("test_multiple_renames_deep_structure"; "prefix")]
fn rename_exchange_rejected_s3(prefix: &str) {
    rename_exchange_rejected_test(fuse::s3_session::new, prefix);
}

fn rename_key_too_long<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add an object
    test_client
        .put_object("dir/a.txt", b"hello world")
        .expect("put object should succeed");

    let too_long_key = "X".repeat(1027);
    fs::rename(mount_point.join("dir/a.txt"), mount_point.join(&too_long_key)).expect_err("rename should not succeed");
    //.expect_err("rename into a too long key should fail");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn rename_key_too_long_s3() {
    rename_key_too_long(fuse::s3_session::new, "rename_dir_rejected_test");
}

#[test_case(""; "no prefix")]
#[test_case("rename_dir_rejected"; "prefix")]
fn rename_key_too_long_mock(prefix: &str) {
    rename_key_too_long(fuse::mock_session::new, prefix);
}

#[allow(clippy::too_many_arguments)]
// Generic rename mounts a bucket as in the other tests (using prefix and creater_fn).
// It then adds all the keys to the s3 bucket, with random content as description.
// For each string pair in the ops, it then tries to execute rename on it.
// If the success parameter is set to true, then each of these renames must succeed,
// if it is false, it is required that at least one of the renames fails (i.e. track if one op failed using a boolean and check after all operations)
// Then check that each file in the positive list is present and each file in the negative list is not present.
fn generic_rename_test<F>(
    creator_fn: F,
    prefix: &str,
    keys: Vec<&str>,
    dirs: Vec<&str>,
    ops: Vec<(&str, &str)>,
    success: bool,
    positive: Vec<&str>,
    negative: Vec<&str>,
) where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    // Create a test session configuration
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };

    // Create a test session using the provided creator function
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add all the keys to the S3 bucket with random content
    for key in keys.iter() {
        let content = format!("Random content for {key}");
        test_client
            .put_object(key, content.as_bytes())
            .expect("PutObject should succeed");
    }

    // Create all the directories in dirs
    for dir in dirs.iter() {
        fs::create_dir_all(mount_point.join(dir))
            .expect("error in a generic rename test, initial creation should succeed");
    }

    // Execute rename operations
    let mut any_op_failed = false;
    for (src, dst) in ops {
        let result = fs::rename(mount_point.join(src), mount_point.join(dst));
        if result.is_err() {
            any_op_failed = true;
            if success {
                panic!("Rename operation failed when it should have succeeded: {src:?} to {dst:?}");
            }
        }
    }

    // Check if at least one operation failed when success is false
    if !success && !any_op_failed {
        panic!("Expected at least one rename operation to fail, but all succeeded");
    }

    // Check that each file in the positive list is present
    for file in positive {
        assert!(mount_point.join(file).exists(), "File should exist: {file}");
    }

    // Check that each file in the negative list is not present
    for file in negative {
        assert!(!mount_point.join(file).exists(), "File should not exist: {file}");
    }
}

fn test_multiple_renames_deep_structure_success<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    generic_rename_test(
        creator_fn,
        prefix,
        vec!["a/b/cc"],
        vec!["a/b/c/d/e/f/g", "a/b/hg/sd/as/df/fd/kk"],
        vec![("a/b/cc", "a/b/c/d/e/cc"), ("a/b/c/d/e/cc", "a/b/hg/sd/as/df/fd/assd")],
        true,
        vec!["a/b/hg/sd/as/df/fd/assd"],
        vec!["a/b/cc"],
    );
}

#[test_case(""; "no prefix")]
#[test_case("rename_dir_rejected"; "prefix")]
fn test_multiple_renames_deep_structure_mock(prefix: &str) {
    test_multiple_renames_deep_structure_success(fuse::mock_session::new, prefix);
}

fn test_multiple_renames_deep_structure_failure<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    generic_rename_test(
        creator_fn,
        prefix,
        vec!["a/b/cc"],
        vec!["a/b/c/d/e/f/g", "a/b/hg/sd/as/df/fd/kk"],
        vec![("a/b/cc", "a/b/c/d/e/cc"), ("a/b/c/d/f/cc", "a/b/hg/sd/as/df/fd/assd")],
        false,
        vec!["a/b/hg/sd/as/df/fd/kk"],
        vec!["a/b/cc"],
    );
}

#[test_case(""; "no prefix")]
#[test_case("test_multiple_renames_deep_structure"; "prefix")]
fn test_multiple_renames_deep_structure_failure_mock(prefix: &str) {
    test_multiple_renames_deep_structure_failure(fuse::mock_session::new, prefix);
}

fn test_rename_very_long_path<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let long_path = "a/".repeat(5) + "file.txt";
    let new_long_dir = "b/".repeat(5);
    let new_long_path = "b/".repeat(5) + "new_file.txt";

    generic_rename_test(
        creator_fn,
        prefix,
        vec![&long_path],
        vec![&new_long_dir],
        vec![(long_path.as_str(), new_long_path.as_str())],
        true,
        vec![&new_long_path],
        vec![&long_path],
    );
}
#[test_case(""; "no prefix")]
#[test_case("test_hybridrename"; "prefix")]
fn rename_very_long_mock(prefix: &str) {
    test_rename_very_long_path(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case("test_hybridrename"; "prefix")]
fn rename_very_long_s3(prefix: &str) {
    test_rename_very_long_path(fuse::s3_session::new, prefix);
}

/// Tests that overwrites are enabled, if allow-overwrite is set.
fn rename_allow_overwrites_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add an object
    test_client
        .put_object("dir/a.txt", b"key for a")
        .expect("put object should succeed");

    test_client
        .put_object("dir/b.txt", b"key for b")
        .expect("put object should succeed");

    fs::rename(mount_point.join("dir/a.txt"), mount_point.join("dir/b.txt"))
        .expect("overwriting rename should succeed");

    // Check for the expected contents
    let contents: String = fs::read_to_string(mount_point.join("dir/b.txt")).expect("file should be readable");
    assert_eq!(contents, "key for a");
}

#[test_case(""; "no prefix")]
#[test_case("rename_allow_overwrites"; "prefix")]
fn rename_allow_overwrites_mock(prefix: &str) {
    rename_allow_overwrites_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case("rename_allow_overwrites"; "prefix")]
fn rename_allow_overwrites_s3(prefix: &str) {
    rename_allow_overwrites_test(fuse::s3_session::new, prefix);
}
#[cfg(target_os = "linux")]
/// Tests that even in a mode where overwrites are be enabled, flag RENAME_NOREPLACE can prevent this.
fn rename_flag_noreplace_disables_overwrites_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    test_client
        .put_object("a.txt", b"hello world")
        .expect("put object should succeed");
    test_client
        .put_object("b.txt", b"fun times")
        .expect("put object should succeed");

    let result_noreplace = renameat2_wrapper(
        &mount_point.join("a.txt"),
        &mount_point.join("b.txt"),
        nix::fcntl::RenameFlags::RENAME_NOREPLACE,
    );
    result_noreplace.expect_err("RENAME_NOREPLACE not handled correctly, since rename succeded when it shouldn't have");

    let result_noreplace = renameat2_wrapper(
        &mount_point.join("a.txt"),
        &mount_point.join("b.txt"),
        RenameFlags::empty(),
    );
    result_noreplace.expect("Without RENAME_NOREPLACE overwriting rename should succeded");
}

#[cfg(target_os = "linux")]
#[test_case(""; "no prefix")]
#[test_case("rename_flag_noreplace_disables_overwrites"; "prefix")]
fn rename_flag_noreplace_disables_overwrites_mock(prefix: &str) {
    rename_flag_noreplace_disables_overwrites_test(fuse::mock_session::new, prefix);
}

#[cfg(target_os = "linux")]
#[cfg(feature = "s3express_tests")]
#[test_case("rename_flag_noreplace_disables_overwrites"; "prefix")]
fn rename_flag_noreplace_disables_overwrites_s3(prefix: &str) {
    rename_flag_noreplace_disables_overwrites_test(fuse::s3_session::new, prefix);
}

/// This test aims at checking that concurrent renames work as expected.
/// It locally creates two files "a.txt" and "b.txt" and then
/// in two threads simultaneeously tries to rename "a.txt" to "b.txt"
/// and "b.txt" to "a.txt".
/// It then checks that only one of the files exists after the operations,
/// and that the contents are as expected.
///
/// This test is repeated 100 times, to hopefully cover many
/// possible interleavings.
fn test_rename_concurrent<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let iterations = 10;
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            allow_delete: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let mount_point = test_session.mount_path().to_owned();

    let mut wins = (0, 0);
    for i in 0..iterations {
        // Create initial files
        debug!("Iteration #{i}");
        {
            let mut filea = File::create(mount_point.join("a.txt")).unwrap();
            filea.write_all(b"a").unwrap();
            filea.sync_all().unwrap();
            filea.flush().unwrap();
            let mut fileb = File::create(mount_point.join("b.txt")).unwrap();
            fileb.write_all(b"b").unwrap();
            fileb.flush().unwrap();
            fileb.sync_all().unwrap();
        }
        // Create threads for concurrent rename operations
        let barrier = Arc::new(Barrier::new(2));

        let mount_point_clone_thread_a = mount_point.clone();
        let b1 = Arc::clone(&barrier);

        let thread1 = std::thread::spawn(move || {
            b1.wait();
            fs::rename(
                mount_point_clone_thread_a.join("a.txt"),
                mount_point_clone_thread_a.join("b.txt"),
            )
        });
        let mount_point_clone_thread_b = mount_point.clone();
        let b2 = Arc::clone(&barrier);

        let thread2 = std::thread::spawn(move || {
            b2.wait();
            fs::rename(
                mount_point_clone_thread_b.join("b.txt"),
                mount_point_clone_thread_b.join("a.txt"),
            )
        });
        // Wait for both operations to complete
        let result1 = thread1.join().expect("Thread 1 panicked");
        let result2 = thread2.join().expect("Thread 2 panicked");
        // Verify that at least one rename succeeded
        assert!(result1.is_ok() && result2.is_ok(), "Both renames should succeed");

        // Check file existence and contents
        let files = vec!["a.txt", "b.txt"];
        let mut found_files = 0;
        let mut valid_content = true;

        for file in files {
            if let Ok(contents) = fs::read_to_string(mount_point.join(file)) {
                found_files += 1;
                if contents != "a" && contents != "b" {
                    valid_content = false;
                }
                if contents == "a" {
                    wins.0 += 1;
                } else {
                    wins.1 += 1;
                }
            }
        }
        assert!(found_files == 1);
        let resa = fs::remove_file(mount_point.join("a.txt"));
        let resb = fs::remove_file(mount_point.join("b.txt"));
        if let (Err(_), Err(_)) = (resa, resb) {
            panic!("Expected one file to be deletable");
        }
        // Verify that any remaining files have valid content
        assert!(valid_content, "All remaining files should contain either 'a' or 'b'");
    }
    debug!("Finished {} {}", wins.0, wins.1);
}

#[test_case(""; "no prefix")]
#[test_case("test_rename_concurrent"; "prefix")]
fn test_rename_concurrent_mock(prefix: &str) {
    test_rename_concurrent(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case("test_rename_concurrent"; "prefix")]
fn test_rename_concurrent_simple_s3(prefix: &str) {
    test_rename_concurrent(fuse::s3_session::new, prefix);
}

fn rename_file_contents_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_delete: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };

    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path().to_owned();

    test_client
        .put_object("dir/a.txt", b"hello world")
        .expect("put object should succeed");

    fs::rename(mount_point.join("dir/a.txt"), mount_point.join("dir/moved.txt")).expect("rename should succeed");

    let contents =
        fs::read_to_string(mount_point.join("dir/moved.txt")).expect("Should have been able to read the file");
    assert_eq!(contents, "hello world");
}

#[test_case(""; "no prefix")]
fn rename_file_contents_mock(prefix: &str) {
    rename_file_contents_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case("test_rename_file_contents"; "prefix")]
fn rename_file_contents_s3(prefix: &str) {
    rename_file_contents_test(fuse::s3_session::new, prefix);
}

/// Ensure that inode number stay identical after a rename
fn rename_same_ino_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    test_client
        .put_object("dir/a.txt", b"key for a")
        .expect("put object should succeed");
    test_client
        .put_object("dir/b.txt", b"key for b")
        .expect("put object should succeed");

    test_client
        .put_object("dirtwo/b.txt", b"key for b in dir2")
        .expect("put object should succeed");

    // Get the inode number for mount_point.join("dir/a.txt")
    let initial_inode = fs::metadata(mount_point.join("dir/a.txt")).unwrap().ino();
    // Rename "dir/a.txt" to "dir/c.txt"
    fs::rename(mount_point.join("dir/a.txt"), mount_point.join("dir/c.txt")).expect("rename should succeed");
    assert_eq!(
        fs::metadata(mount_point.join("dir/c.txt")).unwrap().ino(),
        initial_inode
    );
    // Rename "dir/c.txt" to dir.b.txt ensure the inode number stays identical
    fs::rename(mount_point.join("dir/c.txt"), mount_point.join("dir/b.txt")).expect("rename should succeed");
    assert_eq!(
        fs::metadata(mount_point.join("dir/b.txt")).unwrap().ino(),
        initial_inode
    );
    // Rename "dir/b.txt" to "dirtwo/b.txt", ensure inode number stays identical
    fs::rename(mount_point.join("dir/b.txt"), mount_point.join("dirtwo/b.txt")).expect("rename should succeed");
    assert_eq!(
        fs::metadata(mount_point.join("dirtwo/b.txt")).unwrap().ino(),
        initial_inode
    );
    let read_dir_iter = fs::read_dir(mount_point.join("dirtwo")).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["b.txt"]);
}

#[test_case(""; "no prefix")]
fn rename_same_ino_mock(prefix: &str) {
    rename_same_ino_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_same_ino_s3(prefix: &str) {
    rename_same_ino_test(fuse::s3_session::new, prefix);
}

/// Tests that a file can be appended after and before a rename, and that the content is as expected.
fn rename_append_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let mount_point = test_session.mount_path();
    fs::create_dir(mount_point.join("dir")).expect("should be able to create dir");
    // Create file a.txt
    {
        let data = "Some data!";
        let mut f = File::create(mount_point.join("a.txt")).expect("Unable to create file");
        f.write_all(data.as_bytes()).expect("Unable to write data");
        drop(f);
    }
    // Append to it
    {
        let data = "append";
        let mut file = OpenOptions::new().append(true).open(mount_point.join("a.txt")).unwrap();
        file.write_all(data.as_bytes()).expect("Unable to write data");
        file.sync_all().unwrap();
        drop(file);
    }
    // Rename it
    {
        fs::rename(mount_point.join("a.txt"), mount_point.join("dir/b.txt")).expect("rename successfull");
    }
    // Append to it again
    {
        let data = "append";
        let mut file = OpenOptions::new()
            .append(true)
            .open(mount_point.join("dir/b.txt"))
            .unwrap();
        file.write_all(data.as_bytes()).expect("Unable to write data");
        file.sync_all().unwrap();
        drop(file);
    }
    fs::rename(mount_point.join("dir/b.txt"), mount_point.join("dir/c.txt")).expect("rename successfull");
    // Verify the contents
    // Wait for a few seconds
    let contents = fs::read_to_string(mount_point.join("dir/c.txt")).expect("read should succeed");
    assert_eq!(contents, "Some data!appendappend");
}

#[test_case(""; "no prefix")]
fn rename_append_mock(prefix: &str) {
    rename_append_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_append_s3(prefix: &str) {
    rename_append_test(fuse::s3_session::new, prefix);
}

fn rename_out_of_topdir_regression<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();
    // First place two objects in S3

    test_client
        .put_object("dir/a/b.txt", b"key for b nested")
        .expect("put object should succeed");
    test_client
        .put_object("dir/b.txt", b"key for b")
        .expect("put object should succeed");
    // Try to rename
    fs::rename(mount_point.join("dir/a/b.txt"), mount_point.join("dir/b.txt")).expect("Rename should work");
    let contents = fs::read_to_string(mount_point.join("dir/b.txt")).expect("read should succeed");
    assert_eq!(contents, "key for b nested");
}

#[test_case(""; "no prefix")]
fn rename_out_of_topdir_regression_mock(prefix: &str) {
    rename_out_of_topdir_regression(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_out_of_topdir_regression_s3(prefix: &str) {
    rename_out_of_topdir_regression(fuse::s3_session::new, prefix);
}

fn compare_directories<P: AsRef<Path>>(dir1: P, dir2: P) {
    let dir1 = dir1.as_ref();
    let dir2 = dir2.as_ref();

    // Helper function to get all files in a directory as a HashSet of relative paths
    fn get_files(dir: &Path) -> HashSet<PathBuf> {
        walkdir::WalkDir::new(dir)
            .into_iter()
            .filter_map(Result::ok)
            .filter(|e| e.file_type().is_file())
            .map(|entry| entry.path().strip_prefix(dir).unwrap().to_path_buf())
            .collect()
    }

    let files1 = get_files(dir1);
    let files2 = get_files(dir2);

    // Check for files in dir1 that don't exist in dir2
    let missing_in_dir2: Vec<_> = files1.difference(&files2).collect();
    assert!(
        missing_in_dir2.is_empty(),
        "Files present in {dir1:?} but missing in {dir2:?}: {missing_in_dir2:?}"
    );

    // Check for files in dir2 that don't exist in dir1
    let missing_in_dir1: Vec<_> = files2.difference(&files1).collect();
    assert!(
        missing_in_dir1.is_empty(),
        "Files present in {dir2:?} but missing in {dir1:?}: {missing_in_dir1:?}"
    );

    // Compare contents of all files
    for rel_path in &files1 {
        let path1 = dir1.join(rel_path);
        let path2 = dir2.join(rel_path);

        let contents1 = std::fs::read(&path1).unwrap();
        let contents2 = std::fs::read(&path2).unwrap();
        assert_eq!(contents1, contents2, "Contents differ for file {rel_path:?}");
    }
}

fn compare_directories_only_readdir_on_dir1<P: AsRef<Path>>(dir1: P, dir2: P) {
    let dir1 = dir1.as_ref();
    let dir2 = dir2.as_ref();
    fn get_files(dir: &Path) -> HashSet<PathBuf> {
        walkdir::WalkDir::new(dir)
            .into_iter()
            .filter_map(Result::ok)
            .filter(|e| e.file_type().is_file())
            .map(|entry| entry.path().strip_prefix(dir).unwrap().to_path_buf())
            .collect()
    }

    let files1 = get_files(dir1);
    // Compare contents of all files
    for rel_path in &files1 {
        let path1 = dir1.join(rel_path);
        let path2 = dir2.join(rel_path);

        let contents1 = fs::read_to_string(&path1).unwrap();
        let contents2 = fs::read_to_string(&path2).unwrap();
        assert_eq!(contents1, contents2, "Contents differ for file {rel_path:?}");
    }
}

// This test starts with a directory structure
//  - a
//     - b
//         - c
//             - d.txt
//             - e.txt
//         - f.txt
//         - g.txt
//  - h
//     - i.txt
//  And performs the following moves:
//     a/b/f.txt -> a/b/c/d.txt
//     a/b/c/e.txt -> a/b/c/g.txt
//     a/b/c/d.txt -> a/d.txt
//     a/b/g.txt -> h/i.txt
//  It performs this both on the MP and on a local directory and compares contents after each step.
//  All of these renames are supposed to work.
fn rename_complicated_structure_contents_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            cache_config: CacheConfig {
                serve_lookup_from_cache: true,
                dir_ttl: Duration::from_secs(6000),
                file_ttl: Duration::from_secs(6000),
                ..Default::default()
            },
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    let temp_dir = tempfile::tempdir().expect("Failed to create temp dir");
    let temp_path = temp_dir.path();

    let initial_files = [
        ("a/b/c/d.txt", "d"),
        ("a/b/c/e.txt", "e"),
        ("a/b/f.txt", "f"),
        ("a/b/g.txt", "g"),
        ("h/i.txt", "i"),
    ];

    for (path, content) in &initial_files {
        // Create in S3
        test_client
            .put_object(path, content.as_bytes())
            .expect("put object should succeed");
        // Create in local temp directory
        let full_path = temp_path.join(path);
        std::fs::create_dir_all(full_path.parent().unwrap()).expect("Failed to create directories");
        std::fs::write(full_path, content.as_bytes()).expect("Failed to write file");
    }

    let renames = [
        ("a/b/f.txt", "a/b/c/d.txt"),
        ("a/b/c/e.txt", "a/b/g.txt"),
        ("a/b/c/d.txt", "a/d.txt"),
        ("a/b/g.txt", "h/i.txt"),
    ];

    for (i, (from, to)) in renames.iter().enumerate() {
        debug!("Move {}", i + 1);
        std::fs::rename(mount_point.join(from), mount_point.join(to)).expect("Move {i+1} failed");
        std::fs::rename(temp_path.join(from), temp_path.join(to)).expect("Local move {i+1} failed");

        compare_directories_only_readdir_on_dir1(temp_path, mount_point);
    }

    compare_directories(temp_path, mount_point);
}

#[test_case(""; "no prefix")]
fn rename_complicated_structure_contents_mock(prefix: &str) {
    rename_complicated_structure_contents_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_complicated_structure_contents_s3(prefix: &str) {
    rename_complicated_structure_contents_test(fuse::s3_session::new, prefix);
}

fn rename_into_topdir_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();
    // First place two objects in S3

    test_client
        .put_object("dir/a/b.txt", b"key for b nested")
        .expect("put object should succeed");
    test_client
        .put_object("dir/b.txt", b"key for b")
        .expect("put object should succeed");
    // Try to rename
    fs::rename(mount_point.join("dir/b.txt"), mount_point.join("dir/a/b.txt")).expect("Rename should work");
    let contents = fs::read_to_string(mount_point.join("dir/a/b.txt")).expect("read should succeed");
    assert_eq!(contents, "key for b");
}

#[test_case(""; "no prefix")]
fn rename_into_topdir_mock(prefix: &str) {
    rename_into_topdir_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_into_topdir_s3(prefix: &str) {
    rename_into_topdir_test(fuse::s3_session::new, prefix);
}

fn cross_directory_rename_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();
    // First place three objects in S3

    test_client
        .put_object("dir/a/b.txt", b"dir/a/b.txt")
        .expect("put object should succeed");
    test_client
        .put_object("dirb/b.txt", b"dirb/b.txt")
        .expect("put object should succeed");
    // Add a file so that the directory does not disappear after rename
    test_client
        .put_object("dir/a/static", b"dir/a/b.txt")
        .expect("put object should succeed");
    test_client
        .put_object("dirb/c/d.txt", b"dirb/c/d.txt")
        .expect("put object should succeed");

    // Do two cross directory renames, then check the contents
    fs::rename(mount_point.join("dir/a/b.txt"), mount_point.join("dirb/c/d.txt")).expect("rename should succeed");
    fs::rename(mount_point.join("dirb/b.txt"), mount_point.join("dir/a/b.txt")).expect("rename should succeed");
    // Check the contents
    let contents = fs::read_to_string(mount_point.join("dir/a/b.txt")).expect("read should succeed");
    assert_eq!(contents, "dirb/b.txt");

    let contents = fs::read_to_string(mount_point.join("dirb/c/d.txt")).expect("read should succeed");
    assert_eq!(contents, "dir/a/b.txt");
}

#[test_case(""; "no prefix")]
fn cross_directory_rename_mock(prefix: &str) {
    cross_directory_rename_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn cross_directory_rename_s3(prefix: &str) {
    cross_directory_rename_test(fuse::s3_session::new, prefix);
}

fn rename_last_file_out_of_dir_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            incremental_upload: true,
            cache_config: CacheConfig {
                serve_lookup_from_cache: true,
                dir_ttl: Duration::from_secs(0),
                file_ttl: Duration::from_secs(0),
                ..Default::default()
            },
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Place an object
    test_client
        .put_object("dir/a/b.txt", b"dir/a/b.txt")
        .expect("put object should succeed");
    fs::rename(mount_point.join("dir/a/b.txt"), mount_point.join("b.txt")).expect("Can move out of directory");

    // Check that no more subdirectories
    assert!(
        !mount_point.join("dir/a").exists(),
        "Directory 'dir/a' should no longer exist"
    );
    assert!(
        !mount_point.join("dir").exists(),
        "Directory 'dir' should no longer exist"
    );

    // Verify the file exists in the new location
    assert!(mount_point.join("b.txt").exists(), "File should exist in new location");

    // Verify the content of the moved file
    let content = fs::read_to_string(mount_point.join("b.txt")).expect("Should be able to read file content");
    assert_eq!(content, "dir/a/b.txt", "File content should remain unchanged");

    // Verify with S3 client that the object has been moved
    assert!(
        test_client.contains_key("b.txt").unwrap(),
        "Object should exist in new location"
    );
    assert!(
        !test_client.contains_key("dir/a/b.txt").unwrap(),
        "Object should not exist in old location"
    );
}

#[test_case(""; "no prefix")]
fn rename_last_file_out_of_dir_mock(prefix: &str) {
    rename_last_file_out_of_dir_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_last_file_out_of_dir_s3(prefix: &str) {
    rename_last_file_out_of_dir_test(fuse::s3_session::new, prefix);
}

/// Populates a bucket with two files "a.txt" and "b.txt", tries to spawn 20 threads that randomly rename one into the other
/// Validates that at the end of the test, exactly one file is present, that at least one rename succeeded,
/// and that the contents are either "a" or "b".
fn many_simultaneous_renames_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    //
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            allow_delete: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path().to_owned();
    let barrier = Arc::new(Barrier::new(20));
    let success_counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];

    // Write both files
    test_client
        .put_object("a.txt", b"a")
        .expect("put object should succeed");
    test_client
        .put_object("b.txt", b"b")
        .expect("put object should succeed");

    // Spawn 20 threads that try to rename files
    for _ in 0..20 {
        let mount_point = mount_point.clone();
        let barrier = barrier.clone();
        let success_counter = success_counter.clone();

        let handle = std::thread::spawn(move || {
            barrier.wait();
            let result = if rand::random::<bool>() {
                fs::rename(mount_point.join("a.txt"), mount_point.join("b.txt"))
            } else {
                fs::rename(mount_point.join("b.txt"), mount_point.join("a.txt"))
            };
            if result.is_ok() {
                success_counter.fetch_add(1, Ordering::SeqCst);
            }
        });
        handles.push(handle);
    }

    // Wait for all threads to complete
    for handle in handles {
        handle.join().unwrap();
    }

    // Verify results
    let success_count = success_counter.load(Ordering::SeqCst);
    assert!(success_count > 0, "At least one rename should succeed");

    // Check that exactly one file exists
    let files_exist = [mount_point.join("a.txt").exists(), mount_point.join("b.txt").exists()];
    assert_eq!(
        files_exist.iter().filter(|&&x| x).count(),
        1,
        "Exactly one file should exist"
    );

    // Verify content is either "a" or "b"
    let final_path = if mount_point.join("a.txt").exists() {
        mount_point.join("a.txt")
    } else {
        mount_point.join("b.txt")
    };
    let content = fs::read_to_string(final_path).expect("Should be able to read file");
    assert!(content == "a" || content == "b", "Content should be either 'a' or 'b'");
}

#[test_case(""; "no prefix")]
fn many_simultaneous_renames_mock(prefix: &str) {
    many_simultaneous_renames_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn many_simultaneous_renames_s3(prefix: &str) {
    many_simultaneous_renames_test(fuse::s3_session::new, prefix);
}

/// Ensure that renaming to a file that is being written to fails
fn rename_dest_open_for_writing_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            allow_delete: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path().to_owned();

    test_client
        .put_object("source.txt", b"source")
        .expect("put object should succeed");

    let _file = OpenOptions::new()
        .write(true)
        .create(true)
        .truncate(true)
        .open(mount_point.join("dest.txt"))
        .expect("Should be able to open file for writing");

    // Attempt to rename source to destination should fail
    let result = fs::rename(mount_point.join("source.txt"), mount_point.join("dest.txt"));
    assert!(
        result.is_err(),
        "Rename should fail when destination is open for writing"
    );
}

#[test_case(""; "no prefix")]
fn rename_dest_open_for_writing_mock(prefix: &str) {
    rename_dest_open_for_writing_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_dest_open_for_writing_s3(prefix: &str) {
    rename_dest_open_for_writing_test(fuse::s3_session::new, prefix);
}

/// Ensure overwriting to a file that is open for reading is possible, but read will fail at some point.
fn rename_dest_open_for_reading_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            s3_personality: S3Personality::ExpressOneZone,
            allow_overwrite: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    // Add a file directly to the bucket
    const B_IN_MB: usize = 1024 * 1024;
    test_client.put_object("dir/source.txt", &[0u8; B_IN_MB * 140]).unwrap();
    test_client
        .put_object("dir/destination.txt", &[3u8; B_IN_MB * 140])
        .unwrap();

    let main_dir = mount_point.join("dir");
    let source_path = main_dir.join("source.txt");
    let destination_path = main_dir.join("destination.txt");

    let mut f = File::options()
        .read(true)
        .write(false)
        .open(&destination_path)
        .expect("open should succeed");
    f.read_exact(&mut [0u8; 1]).expect("read should succeed");

    fs::rename(&source_path, &destination_path).expect("should succeed if source exists and destination doesnt");

    // readdir should now show the file as gone (moved)
    let read_dir_iter = fs::read_dir(main_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["destination.txt"]);

    let _new_pos = f.seek(SeekFrom::Start((B_IN_MB * 130) as u64)).unwrap(); // Seek far ahead in file, to exceed prefetcher's progress
    let err = f
        .read_exact(&mut [0u8; 1])
        .expect_err("fresh read using open file handle should fail as object backing inode has been renamed");
    let raw_os_err = err.raw_os_error().expect("err should be OS-level err");
    assert_eq!(raw_os_err, libc::ESTALE, "read should fail with OS err ESTALE");
}

#[test_case(""; "no prefix")]
fn rename_dest_open_for_reading_mock(prefix: &str) {
    rename_dest_open_for_reading_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_dest_open_for_reading_s3(prefix: &str) {
    rename_dest_open_for_reading_test(fuse::s3_session::new, prefix);
}

fn generate_random_filename() -> String {
    rand::rng()
        .sample_iter(&Alphanumeric)
        .take(8) // 8 character filenames
        .map(char::from)
        .collect()
}

fn generate_random_path(max_depth: usize) -> PathBuf {
    let depth = rand::rng().random_range(2..=max_depth);
    let mut path = PathBuf::new();
    for _ in 0..depth {
        path.push(generate_random_filename());
    }
    path.set_extension("txt");
    path
}

fn large_scale_random_rename_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    const INITIAL_FILES: usize = 200;
    const RENAME_OPERATIONS: usize = 50;
    const MAX_DEPTH: usize = 3;

    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            s3_personality: S3Personality::ExpressOneZone,
            cache_config: CacheConfig {
                serve_lookup_from_cache: true,
                dir_ttl: Duration::from_secs(6000),
                file_ttl: Duration::from_secs(6000),
                ..Default::default()
            },
            ..Default::default()
        },
        ..Default::default()
    };

    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path();

    let temp_dir = tempfile::tempdir().expect("Failed to create temp dir");
    let temp_path = temp_dir.path();

    info!("Generating and creating {} initial files...", INITIAL_FILES);

    // Generate initial files
    let mut files: Vec<(PathBuf, String)> = (0..INITIAL_FILES)
        .map(|i| {
            let path = generate_random_path(MAX_DEPTH);
            let content = format!("content_{i}");
            (path, content)
        })
        .collect();

    files.iter().for_each(|(path, content)| {
        test_client
            .put_object(path.to_str().unwrap(), content.as_bytes())
            .expect("put object should succeed");

        let full_path = temp_path.join(path);
        std::fs::create_dir_all(full_path.parent().unwrap()).expect("Failed to create directories");
        std::fs::write(full_path, content.as_bytes()).expect("Failed to write file");
    });
    // Perform rename operations
    for i in 0..RENAME_OPERATIONS {
        if i % 50 == 0 {
            info!("Completed {} renames...", i);
        }
        let source_idx = rand::rng().random_range(0..files.len());
        let (source_path, _) = &files[source_idx];

        // Different types of rename operations with weighted probabilities
        let new_path = match rand::rng().random_range(0..100) {
            0..=40 => {
                // 40% chance: Same directory, new name
                source_path.with_file_name(format!("{}.txt", generate_random_filename()))
            }
            41..=70 => {
                if let Some(parent) = source_path.parent() {
                    parent.join(format!("{}.txt", generate_random_filename()))
                } else {
                    PathBuf::from(format!("{}.txt", generate_random_filename()))
                }
            }
            _ => generate_random_path(MAX_DEPTH),
        };

        // Ensure parent directory exists for new path
        if let Some(parent) = new_path.parent() {
            let mp_parent = mount_point.join(parent);
            let temp_parent = temp_path.join(parent);

            if !mp_parent.exists() {
                std::fs::create_dir_all(&mp_parent).expect("Failed to create parent directory in mountpoint");
            }
            if !temp_parent.exists() {
                std::fs::create_dir_all(&temp_parent).expect("Failed to create parent directory in temp");
            }
        }

        // Perform rename
        std::fs::rename(mount_point.join(source_path), mount_point.join(&new_path)).expect("Move should succeed");

        std::fs::rename(temp_path.join(source_path), temp_path.join(&new_path)).expect("Local move should succeed");

        files[source_idx].0 = new_path;

        // Compare directories periodically (every 10 operations)
        if i % 10 == 0 {
            compare_directories_only_readdir_on_dir1(temp_path, mount_point);
        }
    }
    // Final comparison
    compare_directories(temp_path, mount_point);
}

#[test_case(""; "no prefix")]
fn large_scale_random_rename_mock(prefix: &str) {
    large_scale_random_rename_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn large_scale_random_rename_s3(prefix: &str) {
    large_scale_random_rename_test(fuse::s3_session::new, prefix);
}

#[derive(Debug, Clone, Eq, PartialEq)]
/// Keeps track of the result of the three operations we try to run in parallel
struct OperationResult {
    mv_success: bool,
    del_a_success: bool,
    del_b_success: bool,
}

#[derive(Debug, Eq, PartialEq)]
/// Keeps track of the part file system state that we care about for this test
struct FsState {
    a_exists: bool,
    b_exists: bool,
    b_has_a_content: bool, // true if b exists and has a's content
}

/// Takes a path and generates cooresponding FsState
fn get_fs_state(mount_point: &Path) -> FsState {
    let a_path = mount_point.join("a.txt");
    let b_path = mount_point.join("b.txt");

    let a_exists = a_path.exists();
    let b_exists = b_path.exists();
    let b_has_a_content = if b_exists {
        match std::fs::read_to_string(&b_path) {
            Ok(content) => content == "a_content",
            Err(_) => false,
        }
    } else {
        false
    };

    FsState {
        a_exists,
        b_exists,
        b_has_a_content,
    }
}

/// Simulate what would happen if operations occurred in a specific order
fn simulate_sequence(ops: &[&str]) -> (OperationResult, FsState) {
    let mut a_exists = true;
    let mut b_exists = false;
    let mut b_has_a_content = false;
    let mut mv_success = false;
    let mut del_a_success = false;
    let mut del_b_success = false;

    for &op in ops {
        match op {
            "mv" => {
                if a_exists && !b_exists {
                    mv_success = true;
                    a_exists = false;
                    b_exists = true;
                    b_has_a_content = true;
                }
            }
            "delA" => {
                if a_exists {
                    del_a_success = true;
                    a_exists = false;
                }
            }
            "delB" => {
                if b_exists {
                    del_b_success = true;
                    b_exists = false;
                    b_has_a_content = false;
                }
            }
            _ => panic!("Unknown operation"),
        }
    }

    (
        OperationResult {
            mv_success,
            del_a_success,
            del_b_success,
        },
        FsState {
            a_exists,
            b_exists,
            b_has_a_content,
        },
    )
}

fn rename_concurrent_remove_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> TestSession,
{
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            allow_delete: true,
            s3_personality: S3Personality::ExpressOneZone,
            ..Default::default()
        },
        ..Default::default()
    };

    let test_session = creator_fn(prefix, test_session_config);
    let test_client = test_session.client();
    let mount_point = test_session.mount_path().to_owned();

    // Run multiple iterations to increase chance of hitting different orderings
    for iteration in 0..30 {
        debug!("Starting iteration {}", iteration);

        // Create initial state: only a.txt exists
        test_client
            .put_object("a.txt", b"a_content")
            .expect("put object should succeed");

        let barrier = Arc::new(Barrier::new(3));
        let mv_success = Arc::new(AtomicBool::new(false));
        let del_a_success = Arc::new(AtomicBool::new(false));
        let del_b_success = Arc::new(AtomicBool::new(false));

        // Thread 1: mv a -> b
        let b1 = barrier.clone();
        let mv_s = mv_success.clone();
        let mp1 = mount_point.clone();
        let mv_handle = std::thread::spawn(move || {
            b1.wait();
            let result = std::fs::rename(mp1.join("a.txt"), mp1.join("b.txt"));
            mv_s.store(result.is_ok(), Ordering::SeqCst);
        });

        // Thread 2: remove a
        let b2 = barrier.clone();
        let del_a_s = del_a_success.clone();
        let mp2 = mount_point.clone();
        let del_a_handle = std::thread::spawn(move || {
            b2.wait();
            let result = std::fs::remove_file(mp2.join("a.txt"));
            del_a_s.store(result.is_ok(), Ordering::SeqCst);
        });

        // Thread 3: remove b
        let b3 = barrier.clone();
        let del_b_s = del_b_success.clone();
        let mp3 = mount_point.clone();
        let del_b_handle = std::thread::spawn(move || {
            b3.wait();
            let result = std::fs::remove_file(mp3.join("b.txt"));
            del_b_s.store(result.is_ok(), Ordering::SeqCst);
        });

        // Wait for all operations to complete
        mv_handle.join().unwrap();
        del_a_handle.join().unwrap();
        del_b_handle.join().unwrap();

        // Collect results
        let actual_result = OperationResult {
            mv_success: mv_success.load(Ordering::SeqCst),
            del_a_success: del_a_success.load(Ordering::SeqCst),
            del_b_success: del_b_success.load(Ordering::SeqCst),
        };
        let actual_fs_state = get_fs_state(&mount_point);

        // Define all possible orderings
        let possible_orderings = [
            vec!["mv", "delA", "delB"],
            vec!["mv", "delB", "delA"],
            vec!["delA", "mv", "delB"],
            vec!["delA", "delB", "mv"],
            vec!["delB", "mv", "delA"],
            vec!["delB", "delA", "mv"],
        ];

        // Check if actual result matches any possible ordering
        let valid_outcome = possible_orderings.iter().any(|ordering| {
            let (expected_result, expected_state) = simulate_sequence(ordering);
            expected_result == actual_result && expected_state == actual_fs_state
        });

        assert!(
            valid_outcome,
            "Iteration {iteration}: Result {actual_result:?} and state {actual_fs_state:?} don't match any valid ordering"
        );

        // Cleanup for next iteration
        let _ = std::fs::remove_file(mount_point.join("a.txt"));
        let _ = std::fs::remove_file(mount_point.join("b.txt"));
    }
}

#[test_case(""; "no prefix")]
fn rename_concurrent_remove_mock(prefix: &str) {
    rename_concurrent_remove_test(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3express_tests")]
#[test_case(""; "no prefix")]
fn rename_concurrent_remove_s3(prefix: &str) {
    rename_concurrent_remove_test(fuse::s3_session::new, prefix);
}
