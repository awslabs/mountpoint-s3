use std::{
    fs::{self, Metadata, metadata},
    io,
    os::unix::prelude::{MetadataExt, PermissionsExt},
};

use mountpoint_s3_fs::S3FilesystemConfig;
use nix::unistd::{getgid, getuid};
use test_case::test_case;

use crate::common::fuse::{self, TestSessionConfig, TestSessionCreator, read_dir_to_entry_names};

fn perm_test(
    creator_fn: impl TestSessionCreator,
    uid: Option<u32>,
    gid: Option<u32>,
    dir_mode: Option<u16>,
    file_mode: Option<u16>,
) {
    let mut config = S3FilesystemConfig::default();
    if let Some(id) = uid {
        config.uid = id;
    }
    if let Some(id) = gid {
        config.gid = id;
    }
    if let Some(mode) = dir_mode {
        config.dir_mode = mode;
    }
    if let Some(mode) = file_mode {
        config.file_mode = mode;
    }

    let test_session = creator_fn(
        "",
        TestSessionConfig {
            filesystem_config: config,
            ..Default::default()
        },
    );

    // expected values
    let uid = uid.unwrap_or_else(|| getuid().into());
    let gid = gid.unwrap_or_else(|| getgid().into());
    let dir_mode = dir_mode.unwrap_or(0o755) as u32;
    let file_mode = file_mode.unwrap_or(0o644) as u32;

    // verify mount point metadata
    let m = metadata(test_session.mount_path()).unwrap();
    assert!(m.file_type().is_dir());
    assert_perm(m, uid, gid, dir_mode);

    test_session.client().put_object("file1.txt", b"hello world").unwrap();
    test_session
        .client()
        .put_object("dir/file2.txt", b"hello world")
        .unwrap();

    // verify readdir works on mount point
    let read_dir_iter = fs::read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["dir", "file1.txt"]);

    // verify inner directory metadata
    let m = metadata(test_session.mount_path().join("dir")).unwrap();
    assert!(m.file_type().is_dir());
    assert_perm(m, uid, gid, dir_mode);

    // verify readdir works
    let read_dir_iter = fs::read_dir(test_session.mount_path().join("dir")).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["file2.txt"]);

    // verify file metadata
    let m = metadata(test_session.mount_path().join("file1.txt")).unwrap();
    assert!(m.file_type().is_file());
    assert_perm(m, uid, gid, file_mode);

    let m = metadata(test_session.mount_path().join("dir/file2.txt")).unwrap();
    assert!(m.file_type().is_file());
    assert_perm(m, uid, gid, file_mode);

    // verify read file works
    let file_content = fs::read_to_string(test_session.mount_path().join("file1.txt")).unwrap();
    assert_eq!(file_content, "hello world");

    let file_content = fs::read_to_string(test_session.mount_path().join("dir/file2.txt")).unwrap();
    assert_eq!(file_content, "hello world");
}

fn perm_test_negative(
    creator_fn: impl TestSessionCreator,
    uid: Option<u32>,
    gid: Option<u32>,
    dir_mode: Option<u16>,
    file_mode: Option<u16>,
) {
    let mut config = S3FilesystemConfig::default();
    if let Some(id) = uid {
        config.uid = id;
    }
    if let Some(id) = gid {
        config.gid = id;
    }
    if let Some(mode) = dir_mode {
        config.dir_mode = mode;
    }
    if let Some(mode) = file_mode {
        config.file_mode = mode;
    }

    let test_session = creator_fn(
        "",
        TestSessionConfig {
            filesystem_config: config,
            ..Default::default()
        },
    );

    // expected values
    let uid = uid.unwrap_or_else(|| getuid().into());
    let gid = gid.unwrap_or_else(|| getgid().into());
    let dir_mode = dir_mode.unwrap_or(0o755) as u32;

    // verify mount point metadata
    let m = metadata(test_session.mount_path()).unwrap();
    assert!(m.file_type().is_dir());
    assert_perm(m, uid, gid, dir_mode);

    test_session.client().put_object("file1.txt", b"hello world").unwrap();
    test_session
        .client()
        .put_object("dir/file2.txt", b"hello world")
        .unwrap();

    // verify readdir returns permission denied on mount point
    let readdir_result = fs::read_dir(test_session.mount_path()).map_err(|e| e.kind());
    assert!(readdir_result.is_err());
    assert_eq!(io::ErrorKind::PermissionDenied, readdir_result.unwrap_err());

    // verify access control works on inner directories
    let metadata_result = metadata(test_session.mount_path().join("dir")).map_err(|e| e.kind());
    assert!(metadata_result.is_err());
    assert_eq!(io::ErrorKind::PermissionDenied, metadata_result.unwrap_err());
    let readdir_result = fs::read_dir(test_session.mount_path().join("dir")).map_err(|e| e.kind());
    assert_eq!(io::ErrorKind::PermissionDenied, readdir_result.unwrap_err());

    // verify access control works on files
    let metadata_result = metadata(test_session.mount_path().join("file1.txt")).map_err(|e| e.kind());
    assert!(metadata_result.is_err());
    assert_eq!(io::ErrorKind::PermissionDenied, metadata_result.unwrap_err());
    let read_result = fs::read_to_string(test_session.mount_path().join("file1.txt")).map_err(|e| e.kind());
    assert!(read_result.is_err());
    assert_eq!(io::ErrorKind::PermissionDenied, read_result.unwrap_err());
}

fn assert_perm(m: Metadata, uid: u32, gid: u32, perm: u32) {
    assert_eq!(uid, m.uid());
    assert_eq!(gid, m.gid());
    // mask with 0o7777 to get only permission bits
    let actual_perm = m.permissions().mode() & 0o7777;
    assert_eq!(perm, actual_perm);
}

#[cfg(feature = "s3_tests")]
#[test_case(None, None, None, None; "default config")]
#[test_case(None, None, Some(0o700), Some(0o600); "non default permissions")]
#[test_case(None, None, Some(0o777), Some(0o777); "full permissions")]
#[test_case(Some(500), Some(20), None, None; "non default gid and uid")]
#[test_case(Some(500), Some(20), Some(0o555), Some(0o444); "non default gid, uid and permissions")]
fn permission_config_test_s3(uid: Option<u32>, gid: Option<u32>, dir_mode: Option<u16>, file_mode: Option<u16>) {
    perm_test(fuse::s3_session::new, uid, gid, dir_mode, file_mode);
}

#[test_case(None, None, None, None; "default config")]
#[test_case(None, None, Some(0o700), Some(0o600); "non default permissions")]
#[test_case(None, None, Some(0o777), Some(0o777); "full permissions")]
#[test_case(Some(500), Some(20), None, None; "non default gid and uid")]
#[test_case(Some(500), Some(20), Some(0o555), Some(0o444); "non default gid, uid and permissions")]
fn permission_config_test_mock(uid: Option<u32>, gid: Option<u32>, dir_mode: Option<u16>, file_mode: Option<u16>) {
    perm_test(fuse::mock_session::new, uid, gid, dir_mode, file_mode);
}

#[cfg(feature = "s3_tests")]
#[test_case(None, None, Some(0o000), Some(0o000); "no permissions")]
#[test_case(Some(500), Some(20), Some(0o700), Some(0o600); "no permissions as other users")]
fn permission_config_test_negative_s3(
    uid: Option<u32>,
    gid: Option<u32>,
    dir_mode: Option<u16>,
    file_mode: Option<u16>,
) {
    perm_test_negative(fuse::s3_session::new, uid, gid, dir_mode, file_mode);
}

#[test_case(None, None, Some(0o000), Some(0o000); "no permissions")]
#[test_case(Some(500), Some(20), Some(0o700), Some(0o600); "no permissions as other users")]
fn permission_config_test_negative_mock(
    uid: Option<u32>,
    gid: Option<u32>,
    dir_mode: Option<u16>,
    file_mode: Option<u16>,
) {
    perm_test_negative(fuse::mock_session::new, uid, gid, dir_mode, file_mode);
}
