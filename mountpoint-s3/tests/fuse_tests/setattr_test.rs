use std::fs::{metadata, File};
use std::os::unix::prelude::MetadataExt;
use std::path::Path;
use std::time::{Duration, SystemTime};

use filetime::FileTime;
use fuser::BackgroundSession;
use tempfile::TempDir;
use test_case::test_case;

use crate::common::fuse::{self, TestClientBox, TestSessionConfig};

fn open_for_write(path: impl AsRef<Path>, append: bool) -> std::io::Result<File> {
    let mut options = File::options();
    if append {
        options.append(true);
    } else {
        options.write(true);
    }
    options.create(true).open(path)
}

fn setattr_test<F>(creator_fn: F, prefix: &str, append: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    // Make sure there's an existing directory
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let path = mount_point.path().join("dir/new.txt");

    let f = open_for_write(&path, append).unwrap();

    let expected_atime = SystemTime::now().checked_add(Duration::from_secs(10)).unwrap();
    let expected_mtime = SystemTime::now().checked_add(Duration::from_secs(5)).unwrap();
    filetime::set_file_atime(&path, FileTime::from_system_time(expected_atime))
        .expect("set atime should be successful");
    filetime::set_file_mtime(&path, FileTime::from_system_time(expected_mtime))
        .expect("set mtime should be successful");

    // Verify that time attributes are changed
    let m = metadata(&path).unwrap();
    assert_eq!(
        m.atime() as u64,
        expected_atime.duration_since(SystemTime::UNIX_EPOCH).unwrap().as_secs()
    );
    assert_eq!(
        m.mtime() as u64,
        expected_mtime.duration_since(SystemTime::UNIX_EPOCH).unwrap().as_secs()
    );

    // Complete the upload and wait for the write status to be WriteStatus::Remote
    f.sync_all().unwrap();
    drop(f);

    // Verify that we get an error when setting time attributes for remote files
    let err = filetime::set_file_atime(&path, FileTime::from_system_time(expected_atime))
        .expect_err("set atime should fail on remote files");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));
    let err = filetime::set_file_mtime(&path, FileTime::from_system_time(expected_mtime))
        .expect_err("set mtime should fail on remote files");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "append")]
#[test_case(false; "no append")]
fn setattr_test_s3(append: bool) {
    setattr_test(fuse::s3_session::new, "setattr_test_s3", append);
}

#[test_case(true; "append")]
#[test_case(false; "no append")]
fn setattr_test_mock(append: bool) {
    setattr_test(fuse::mock_session::new, "setattr_test_mock", append);
}
