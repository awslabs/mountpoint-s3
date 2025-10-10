use std::fs;
use std::path::{Path, PathBuf};

use mountpoint_s3_fs::fs::error_metadata::{MOUNTPOINT_ERROR_INTERNAL, MOUNTPOINT_EVENT_READY};
use mountpoint_s3_fs::manifest::DbEntry;
use mountpoint_s3_fs::metablock::ValidKey;
use mountpoint_s3_fs::s3::{Prefix, S3Path};
use mountpoint_s3_fs::{
    logging::error_logger::{Event, FileErrorLogger},
    manifest::Manifest,
};
use tempfile::tempdir;
use time::OffsetDateTime;

use crate::common::fuse::{self, TestSessionConfig};
use crate::common::manifest::{create_dummy_manifest, insert_entries};

const VERSION: &str = "1";

#[test]
fn test_manifest_error_logged() {
    // define the expected output
    let expected_events = vec![
        Event::new("mount", MOUNTPOINT_EVENT_READY),
        Event {
            timestamp: OffsetDateTime::now_utc(),
            operation: "lookup".to_string(),
            fuse_request_id: Some(0),
            error_code: MOUNTPOINT_ERROR_INTERNAL.to_string(),
            errno: Some(5),
            internal_message: Some("inode error: manifest error: read invalid row with id 3".to_string()),
            s3_bucket_name: None,
            s3_object_key: None,
            s3_error_http_status: None,
            s3_error_code: None,
            s3_error_message: None,
            version: VERSION.to_string(),
        },
    ];

    // create a fuse session with a manifest containing a corrupted entry (no etag)
    let s3_path = S3Path::new("test_bucket".to_string().try_into().unwrap(), Prefix::empty());
    let (tmp_dir, manifest_db_path) =
        create_dummy_manifest::<&str>(&[], 0, "channel_0", &s3_path.bucket).expect("manifest must be created");
    insert_entries(
        &manifest_db_path,
        &[DbEntry::new(
            3,
            1,
            0,
            Some(ValidKey::root()),
            "key".try_into().unwrap(),
            None,
            Some(1),
            &s3_path,
        )
        .expect("must be a valid db entry")],
    )
    .expect("insert invalid row must succeed");
    let error_logger = Box::new(FileErrorLogger::new(tmp_dir.path(), || ()).expect("must create a error callback"));
    let manifest = Manifest::new(&manifest_db_path).unwrap();
    let test_session_config = TestSessionConfig {
        manifest: Some(manifest),
        error_logger: Some(error_logger),
        ..Default::default()
    };

    let test_session = fuse::mock_session::new(s3_path.prefix.as_str(), test_session_config);

    // try to lookup and expect an EIO error
    let e = std::fs::metadata(test_session.mount_path().join("key")).expect_err("lookup must fail");
    assert_eq!(e.raw_os_error().expect("lookup must fail"), libc::EIO);

    // finalize the session and the event logger
    drop(test_session);

    // check output
    check_error_log(tmp_dir.path(), expected_events);
}

#[test]
fn test_not_found_error_not_logged() {
    // define the expected output
    let expected_events = vec![Event::new("mount", MOUNTPOINT_EVENT_READY)];

    // create a fuse session with empty mock client
    let tmp_dir = tempdir().expect("must create a tmp dir");
    let error_logger = Box::new(FileErrorLogger::new(tmp_dir.path(), || ()).expect("must create a error callback"));
    let test_session_config = TestSessionConfig {
        error_logger: Some(error_logger),
        ..Default::default()
    };

    let test_session = fuse::mock_session::new("test_manifest_error_logged", test_session_config);

    // try to lookup and expect an ENOENT error
    let e = std::fs::metadata(test_session.mount_path().join("key")).expect_err("lookup must fail");
    assert_eq!(e.raw_os_error().expect("lookup must fail"), libc::ENOENT);

    // finalize the session and the event logger
    drop(test_session);

    // check output
    check_error_log(tmp_dir.path(), expected_events);
}

fn check_error_log(log_dir_path: &Path, mut expected_events: Vec<Event>) {
    let event_log = fs::read_to_string(find_error_log_file_path(log_dir_path)).expect("must read the event log");
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

fn find_error_log_file_path<P: AsRef<Path>>(dir: P) -> PathBuf {
    fs::read_dir(dir)
        .expect("readdir must succeed")
        .map(|entry| entry.expect("readdir must succeed"))
        .find(|e| e.path().is_file() && e.file_name().to_string_lossy().starts_with("mountpoint-s3-event-log"))
        .expect("expected an event log file in the directory")
        .path()
}
