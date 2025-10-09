//! Tests documenting Mountpoint's behavior given scoped-down IAM permissions.
//!
//! These tests leverage Amazon STS's session policy feature,
//! where we can reduce the permissions granted to the principal by creating a new session with new credentials.

#![cfg(feature = "s3_tests")]
// The only test in this module at the moment relies on object tagging, not supported in S3 Express One Zone.
#![cfg(not(feature = "s3express_tests"))]

use std::fs;
use std::io::Read;
use std::time::Duration;

use aws_sdk_s3::primitives::ByteStream;
use mountpoint_s3_fs::S3FilesystemConfig;
use mountpoint_s3_fs::fs::CacheConfig;
use test_case::test_case;

use crate::common::creds::get_scoped_down_credentials;
use crate::common::fuse::{self, TestSessionConfig, read_dir_to_entry_names};
use crate::common::s3::{get_test_bucket, get_test_region, get_test_sdk_client};
use crate::common::tokio_block_on;

/// Demonstrate behavior of Mountpoint combined with an IAM policy that leverages attribute-based access control (ABAC)
/// via S3 object tagging.
///
/// The purpose of this test is to demonstrate the adverse behavior (surprising EIO errors) when using this policy.
#[test_case(true; "with metadata cache")]
#[test_case(false; "without metadata cache")]
fn get_object_req_existing_tags(metadata_cache: bool) {
    let bucket = get_test_bucket();

    let cache_config = if metadata_cache {
        let one_hour = Duration::from_secs(60 * 60);
        CacheConfig::new(mountpoint_s3_fs::fs::TimeToLive::Duration(one_hour))
    } else {
        CacheConfig {
            // Avoid any caching in MP, though this could hides weird inconsistencies!
            dir_ttl: Duration::ZERO,
            file_ttl: Duration::ZERO,
            ..Default::default()
        }
    };
    let mut test_session_config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            cache_config,
            ..Default::default()
        },
        ..Default::default()
    };

    // Some credentials that are only allowed to access objects with a certain tag "Department=finance".
    let scoped_down_credentials = {
        // Note: do not use this policy as a reference, for Mountpoint test purposes only.
        // Please refer the IAM guide on how to use ABAC:
        // https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html
        let policy = r#"{
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": ["s3:ListBucket"],
                    "Resource": "arn:aws:s3:::__BUCKET__"
                },
                {
                    "Effect": "Allow",
                    "Action": ["s3:GetObject"],
                    "Resource": "arn:aws:s3:::__BUCKET__/*",
                    "Condition": {
                        "StringEquals": {
                            "s3:ExistingObjectTag/Department": "Finance"
                        }
                    }
                }
            ]
        }"#;
        let policy = policy.replace("__BUCKET__", &bucket);
        tokio_block_on(get_scoped_down_credentials(policy))
    };
    test_session_config = test_session_config.with_credentials(scoped_down_credentials);

    let test_session = fuse::s3_session::new("get_object_req_existing_tags", test_session_config);
    let prefix = test_session.prefix();

    // Stage objects using SDK with standard test credentials
    {
        let s3_client = tokio_block_on(get_test_sdk_client(get_test_region().as_str()));
        for key in vec!["finance_1.txt", "dir1/finance_2.txt"] {
            let request = s3_client
                .put_object()
                .bucket(&bucket)
                .key(format!("{prefix}{key}"))
                .body(ByteStream::from_static(b"Hello world"))
                .tagging("Department=Finance");
            tokio_block_on(request.send()).expect("should be able to upload object to S3 via SDK");
        }

        for key in vec!["untagged_1.txt", "dir1/untagged_2.txt"] {
            let request = s3_client
                .put_object()
                .bucket(&bucket)
                .key(format!("{prefix}{key}"))
                .body(ByteStream::from_static(b"Inaccessible content"));
            tokio_block_on(request.send()).expect("should be able to upload object to S3 via SDK");
        }

        for key in vec!["other_1.txt", "dir1/other_2.txt"] {
            let request = s3_client
                .put_object()
                .bucket(&bucket)
                .key(format!("{prefix}{key}"))
                .body(ByteStream::from_static(b"Inaccessible content"))
                .tagging("Department=OtherDepartment");
            tokio_block_on(request.send()).expect("should be able to upload object to S3 via SDK");
        }
    }

    // Test directory listing
    {
        let entries = fs::read_dir(test_session.mount_path()).expect("listing root should succeed");
        let entries = read_dir_to_entry_names(entries);
        assert_eq!(entries, vec!["dir1", "finance_1.txt", "other_1.txt", "untagged_1.txt"]);

        let entries = fs::read_dir(test_session.mount_path().join("dir1")).expect("listing deeper should succeed");
        let entries = read_dir_to_entry_names(entries);
        assert_eq!(entries, vec!["finance_2.txt", "other_2.txt", "untagged_2.txt"]);
    }

    // Happy case for tagged objects
    for path in vec!["finance_1.txt", "dir1/finance_2.txt"] {
        let path = test_session.mount_path().join(path);
        fs::metadata(&path).expect("stat should succeed on file we are granted access to");
        let _contents = fs::read_to_string(&path).expect("read should succeed on file we are granted access to");
    }

    // Unhappy cases for accessing objects not granted by policy
    for path in vec![
        "untagged_1.txt",
        "dir1/untagged_2.txt",
        "other_1.txt",
        "dir1/other_2.txt",
    ] {
        let path = test_session.mount_path().join(path);

        let open_result = fs::File::open(&path);
        if metadata_cache {
            let mut file = open_result.expect("should succeed because it should be cached for a long duration");
            let mut buf = Vec::new();
            let fs_err = file
                .read_to_end(&mut buf)
                .expect_err("reading should fail with no GetObject permissions");
            let raw_os_errno = fs_err
                .raw_os_error()
                .expect("should have OS error as we expect error to be an FS error from Mountpoint");
            assert_eq!(
                raw_os_errno,
                libc::EIO,
                "expected EIO ({}) but got {:?}",
                libc::EIO,
                fs_err
            );

            let _metadata = fs::metadata(&path).expect("stat should succeed as it should be cached for long duration");
        } else {
            let fs_err = open_result.expect_err("should fail due to no permission to perform HeadObject");
            let raw_os_errno = fs_err
                .raw_os_error()
                .expect("should have OS error as we expect error to be an FS error from Mountpoint");
            assert_eq!(
                raw_os_errno,
                libc::EIO,
                "expected EIO ({}) but got {:?}",
                libc::EIO,
                fs_err
            );

            let fs_err = fs::metadata(&path).expect_err("stat should fail on file for untagged or no matching tags");
            let raw_os_errno = fs_err
                .raw_os_error()
                .expect("should have OS error as we expect error to be an FS error from Mountpoint");
            assert_eq!(
                raw_os_errno,
                libc::EIO,
                "expected EIO ({}) but got {:?}",
                libc::EIO,
                fs_err
            );
        }
    }
}
