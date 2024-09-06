#[cfg(not(feature = "s3express_tests"))]
use crate::common::creds::get_scoped_down_credentials;
use crate::common::fuse::read_dir_to_entry_names;
use crate::common::mount::{mount_exists, unmount, wait_for_exit};
#[cfg(not(feature = "s3express_tests"))]
use crate::common::s3::deny_single_object_access_policy;
use crate::common::s3::{create_objects, get_test_bucket_and_prefix, get_test_region};
#[cfg(not(feature = "s3express_tests"))]
use crate::common::tokio_block_on;
use assert_cmd::prelude::*;
use assert_fs::TempDir;
use aws_sdk_sts::config::Credentials;
use chrono::DateTime;
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3::fs::error_metadata::MOUNTPOINT_ERROR_CLIENT;
use mountpoint_s3::fs::error_metadata::{MOUNTPOINT_ERROR_INTERNAL, MOUNTPOINT_ERROR_UNSUPPORTED};
use std::fs::File;
use std::io::Read;
use std::os::unix::fs::{symlink, MetadataExt};
use std::path::{Path, PathBuf};
use std::process::Command;

#[derive(serde::Deserialize, Debug, Default, Clone)]
struct Event {
    operation: String,
    fuse_request_id: Option<u64>,
    error_code: String,
    errno: Option<u32>,
    internal_message: Option<String>,
    s3_object_key: Option<String>,
    s3_bucket_name: Option<String>,
    s3_error_http_status: Option<u32>,
    timestamp: String,
    version: String,
}

#[cfg(not(feature = "s3express_tests"))]
#[test]
fn event_log_forbidden_on_open_attempt() {
    let test_name = "forbidden_event_on_open_attempt";
    let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
    let region = get_test_region();

    let forbidden_object_name = "forbidden_object";
    let allowed_object_name = "allowed_object";
    create_objects(&bucket, &prefix, &region, forbidden_object_name, &[0; 1024]);
    create_objects(&bucket, &prefix, &region, allowed_object_name, &[0; 1024]);

    // mount a bucket
    let forbidden_object_key = format!("{prefix}{forbidden_object_name}");
    let credentials = tokio_block_on(get_scoped_down_credentials(&deny_single_object_access_policy(
        &bucket,
        &forbidden_object_key,
    )));
    let (mount_point, log_directory) = mount_with_event_log(
        Some(credentials),
        &region,
        &bucket,
        &prefix,
        /* application_log= */ false,
    );

    // try to open files corresponding to an allowed and a forbidden object
    File::open(mount_point.path().join(allowed_object_name)).expect("must open allowed object");
    for _ in 0..2 {
        File::open(mount_point.path().join(forbidden_object_name)).expect_err("must fail to open forbidden object");
    }

    // check the event log
    unmount(mount_point.path());
    let events: Vec<_> = read_events(log_directory.path())
        .into_iter()
        .filter(|event| event.error_code != MOUNTPOINT_ERROR_UNSUPPORTED)
        .collect();
    let forbidden_event = Event {
        operation: "lookup".to_owned(),
        error_code: MOUNTPOINT_ERROR_CLIENT.to_owned(),
        errno: Some(5),
        s3_object_key: Some(forbidden_object_key),
        s3_bucket_name: Some(bucket),
        s3_error_http_status: Some(403),
        version: "1".to_owned(),
        internal_message: Some("^.*Forbidden.*$".to_owned()),
        fuse_request_id: Some(0),
        ..Default::default()
    };
    let expected_events = vec![forbidden_event.clone(), forbidden_event];
    assert_events_match(&events, &expected_events);
}

#[test]
fn event_log_unsupported_on_symlink_attempt() {
    let test_name = "unsupported_event_on_symlink_attempt";
    let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
    let region = get_test_region();

    create_objects(&bucket, &prefix, &region, test_name, &[0; 1024]);

    // mount a bucket
    let (mount_point, log_directory) =
        mount_with_event_log(None, &region, &bucket, &prefix, /* application_log= */ false);

    // try to create a symlink
    symlink(mount_point.path().join(test_name), mount_point.path().join("symlink"))
        .expect_err("symlink is unsupported");

    // check the event log
    unmount(mount_point.path());
    let events: Vec<_> = read_events(log_directory.path())
        .into_iter()
        .filter(|event| event.error_code == MOUNTPOINT_ERROR_UNSUPPORTED && event.operation == "symlink")
        .collect();
    let expected_events = vec![Event {
        operation: "symlink".to_owned(),
        error_code: MOUNTPOINT_ERROR_UNSUPPORTED.to_owned(),
        errno: Some(1),
        version: "1".to_owned(),
        fuse_request_id: Some(0),
        ..Default::default()
    }];
    assert_events_match(&events, &expected_events);
}

#[test]
fn event_log_internal_error_on_read_mutated_attempt() {
    let test_name = "event_log_internal_error_on_read_mutated_attempt";
    let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
    let region = get_test_region();

    let content_16mb = vec![0_u8; 16 * 1024 * 1024];
    create_objects(&bucket, &prefix, &region, test_name, &content_16mb);
    drop(content_16mb);

    // mount a bucket
    let (mount_point, log_directory) =
        mount_with_event_log(None, &region, &bucket, &prefix, /* application_log= */ false);

    // try to read from a stale file handle
    let mut f = File::open(mount_point.path().join(test_name)).unwrap();
    let mut buf = vec![0_u8; 1024];
    let _ = f.read(&mut buf).unwrap();
    // replace the original object
    let content_16mb = vec![1_u8; 16 * 1024 * 1024];
    create_objects(&bucket, &prefix, &region, test_name, &content_16mb);
    drop(content_16mb);
    let mut str = Default::default();
    f.read_to_string(&mut str)
        .expect_err("must not read from a mutated object");
    drop(f);

    // check the event log
    unmount(mount_point.path());
    let events: Vec<_> = read_events(log_directory.path())
        .into_iter()
        .filter(|event| event.error_code != MOUNTPOINT_ERROR_UNSUPPORTED && event.operation == "read")
        .collect();
    let expected_event = Event {
        operation: "read".to_owned(),
        error_code: MOUNTPOINT_ERROR_INTERNAL.to_owned(),
        errno: Some(116),
        version: "1".to_owned(),
        internal_message: Some("^object was mutated remotely$".to_owned()),
        fuse_request_id: Some(0),
        ..Default::default()
    };
    // the exact number of events is not known (there are multiple reads involved), but all of them must be internal errors
    let expected_events = vec![expected_event.clone(); events.len()];
    assert_events_match(&events, &expected_events);
}

#[test]
fn event_log_with_application_log() {
    let test_name = "event_log_with_application_log";
    let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
    let region = get_test_region();

    create_objects(&bucket, &prefix, &region, test_name, &[0; 1024]);

    // mount a bucket
    let (mount_point, log_directory) =
        mount_with_event_log(None, &region, &bucket, &prefix, /* application_log= */ true);

    // try to create a symlink
    symlink(mount_point.path().join(test_name), mount_point.path().join("symlink"))
        .expect_err("symlink is unsupported");
    unmount(mount_point.path());

    // check both logs contain something
    let events = read_events(log_directory.path());
    assert!(!events.is_empty(), "empty events");

    let application_log_path = locate_log(log_directory.path(), "^mountpoint-s3-[0-9]{4}.*$");
    let application_log_stat = std::fs::metadata(application_log_path).expect("");
    assert!(application_log_stat.size() > 0, "empty application log");
}

fn mount_with_event_log(
    credentials: Option<Credentials>,
    region: &str,
    bucket: &str,
    prefix: &str,
    application_log: bool,
) -> (TempDir, TempDir) {
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");
    let log_directory = assert_fs::TempDir::new().expect("can not create a log dir");
    let mut cmd = Command::cargo_bin("mount-s3").expect("mount-s3 binary must exist");
    if let Some(credentials) = credentials {
        cmd.env("AWS_ACCESS_KEY_ID", credentials.access_key_id())
            .env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key());
        if let Some(token) = credentials.session_token() {
            cmd.env("AWS_SESSION_TOKEN", token);
        }
    }
    if application_log {
        cmd.arg(format!("--log-directory={}", log_directory.path().display()));
    }
    let child = cmd
        .arg(bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .arg(format!("--event-log-directory={}", log_directory.path().display()))
        .spawn()
        .expect("unable to spawn child");

    // verify mount status and mount entry
    let exit_status = wait_for_exit(child);
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    (mount_point, log_directory)
}

fn locate_log(log_dir: &Path, f_name_pattern: &str) -> PathBuf {
    let f_name_regex = regex::Regex::new(f_name_pattern).unwrap();
    let read_dir_iter = std::fs::read_dir(log_dir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    let file_name = dir_entry_names
        .iter()
        .find(|name| f_name_regex.is_match(name))
        .expect("event log must exist");
    log_dir.join(file_name)
}

fn read_events(log_directory: &Path) -> Vec<Event> {
    let event_log_path = locate_log(log_directory, "^mountpoint-s3-event-log.*$");
    let event_log = std::fs::read_to_string(event_log_path).expect("event log must exist");
    event_log
        .lines()
        .filter(|line| !line.is_empty())
        .map(|line| serde_json::from_str(line).expect("must be able to parse an event"))
        .collect()
}

fn assert_events_match(actual: &[Event], expected: &[Event]) {
    assert_eq!(actual.len(), expected.len());
    for i in 0..actual.len() {
        assert_event_matches(&actual[i], &expected[i]);
    }
}

fn assert_event_matches(actual: &Event, expected: &Event) {
    let internal_message_pattern = expected
        .internal_message
        .as_ref()
        .map(|internal_message_pattern| regex::Regex::new(internal_message_pattern).unwrap());

    // the following fields should match the expected event
    assert_eq!(actual.operation, expected.operation);
    assert_eq!(actual.error_code, expected.error_code);
    assert_eq!(actual.errno, expected.errno);
    match &internal_message_pattern {
        Some(internal_message_pattern) => assert!(
            internal_message_pattern.is_match(
                actual
                    .internal_message
                    .as_ref()
                    .expect("internal_message must be non empty")
            ),
            "unexpected internal_message: {:?}",
            actual.internal_message
        ),
        None => assert!(actual.internal_message.is_none()),
    }
    assert_eq!(actual.s3_object_key, expected.s3_object_key);
    assert_eq!(actual.s3_bucket_name, expected.s3_bucket_name);
    assert_eq!(actual.s3_error_http_status, expected.s3_error_http_status);
    assert_eq!(actual.version, expected.version);

    // the following fields should just make sense
    match &expected.fuse_request_id {
        Some(_) => assert!(actual.fuse_request_id.expect("fuse_request_id must be non empty") > 0),
        None => assert!(actual.fuse_request_id.is_none()),
    }
    let parsed_time = DateTime::parse_from_rfc3339(&actual.timestamp);
    assert!(
        parsed_time.is_ok(),
        "malformed time: {}, err: {:?}",
        actual.timestamp,
        parsed_time
    );
}
