use std::fs;
use std::path::{Path, PathBuf};

use crate::common::fuse::{self, TestSessionConfig};
use mountpoint_s3_fs::fs::error_metadata::MOUNTPOINT_ERROR_INTERNAL;
use mountpoint_s3_fs::{
    logging::event_log::{Event, LogErrorCallback},
    manifest::Manifest,
    S3FilesystemConfig,
};
use tempfile::tempdir;
use time::OffsetDateTime;

const VERSION: &str = "1";

#[test]
fn test_manifest_error_logged() {
    // define the expected output
    let expected_events = vec![Event {
        timestamp: OffsetDateTime::now_utc(),
        operation: "lookup".to_string(),
        fuse_request_id: Some(0),
        error_code: MOUNTPOINT_ERROR_INTERNAL.to_string(),
        errno: Some(5),
        internal_message: Some(
            "inode error: manifest error: database error: no such table: s3_objects: Error code 1: SQL error or missing database".to_string(),
        ),
        s3_bucket_name: None,
        s3_object_key: None,
        s3_error_http_status: None,
        s3_error_code: None,
        s3_error_message: None,
        version: VERSION.to_string(),
    }];

    // create a fuse session with a non existent manifest
    let tmp_dir = tempdir().expect("must create a tmp dir");
    let manifest_db_path = tmp_dir.path().join("non_existent.db");
    let error_callback =
        std::sync::Arc::new(LogErrorCallback::new(tmp_dir.path()).expect("must create a error callback"));
    let manifest = Manifest::new(&manifest_db_path).unwrap();
    let test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            manifest: Some(manifest),
            ..Default::default()
        },
        error_callback: Some(error_callback.clone()),
        ..Default::default()
    };

    let test_session = fuse::mock_session::new("test_manifest_error_logged", test_session_config);

    // try to lookup and expect an EIO error
    let e = std::fs::metadata(test_session.mount_path().join("key")).expect_err("lookup must fail");
    assert_eq!(e.raw_os_error().expect("lookup must fail"), libc::EIO);

    // finalize the session and the event logger
    drop(test_session);

    // check output
    check_event_log(tmp_dir.path(), expected_events);
}

#[test]
fn test_not_found_error_not_logged() {
    // define the expected output
    let expected_events = vec![];

    // create a fuse session with a non existent manifest
    let tmp_dir = tempdir().expect("must create a tmp dir");
    let error_callback =
        std::sync::Arc::new(LogErrorCallback::new(tmp_dir.path()).expect("must create a error callback"));
    let test_session_config = TestSessionConfig {
        error_callback: Some(error_callback.clone()),
        ..Default::default()
    };

    let test_session = fuse::mock_session::new("test_manifest_error_logged", test_session_config);

    // try to lookup and expect an ENOENT error
    let e = std::fs::metadata(test_session.mount_path().join("key")).expect_err("lookup must fail");
    assert_eq!(e.raw_os_error().expect("lookup must fail"), libc::ENOENT);

    // finalize the session and the event logger
    drop(test_session);

    // check output
    check_event_log(tmp_dir.path(), expected_events);
}

fn check_event_log(log_dir_path: &Path, mut expected_events: Vec<Event>) {
    let event_log = fs::read_to_string(find_event_log_file_path(log_dir_path)).expect("must read the event log");
    let written_events: Vec<Event> = event_log
        .split("\n")
        .filter(|line| !line.is_empty())
        .map(|line| serde_json::from_str(line).expect("must be a valid event"))
        .collect();
    assert_eq!(written_events.len(), expected_events.len());
    for (i, written_event) in written_events.iter().enumerate() {
        expected_events[i].timestamp = written_event.timestamp; // do not validate the value of timestamp
        expected_events[i].fuse_request_id = written_event.fuse_request_id; // do not validate fuse_request_id
    }
    assert_eq!(&written_events, &expected_events);
}

fn find_event_log_file_path<P: AsRef<Path>>(dir: P) -> PathBuf {
    fs::read_dir(dir)
        .expect("readdir must succeed")
        .map(|entry| entry.expect("readdir must succeed"))
        .find(|e| e.path().is_file() && e.file_name().to_string_lossy().starts_with("mountpoint-s3-event-log"))
        .expect("expected an event log file in the directory")
        .path()
}
