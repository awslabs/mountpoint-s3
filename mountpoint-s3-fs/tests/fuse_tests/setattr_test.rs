use std::fs::{File, FileTimes, metadata};
use std::os::unix::prelude::MetadataExt;
use std::time::{Duration, SystemTime};

use filetime::FileTime;
use test_case::test_case;

use crate::common::fuse::{self, TestSessionCreator};

fn setattr_test(creator_fn: impl TestSessionCreator, prefix: &str, append: bool) {
    let test_session = creator_fn(prefix, Default::default());

    // Make sure there's an existing directory
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let path = test_session.mount_path().join("dir/new.txt");

    let f = {
        let mut options = File::options();
        if append {
            options.append(true);
        } else {
            options.write(true);
        }
        options.create(true).open(&path)
    }
    .expect("file open should succeed");

    let expected_atime = SystemTime::now().checked_add(Duration::from_secs(10)).unwrap();
    let expected_mtime = SystemTime::now().checked_add(Duration::from_secs(5)).unwrap();
    f.set_times(FileTimes::new().set_accessed(expected_atime))
        .expect("set atime should be successful");
    f.set_times(FileTimes::new().set_modified(expected_mtime))
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

    // Setting time attributes on remote files silently succeeds (no-op) to
    // allow programs like `wget` to work.
    filetime::set_file_atime(&path, FileTime::from_system_time(expected_atime))
        .expect("set atime should silently succeed on remote files");
    filetime::set_file_mtime(&path, FileTime::from_system_time(expected_mtime))
        .expect("set mtime should silently succeed on remote files");
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
