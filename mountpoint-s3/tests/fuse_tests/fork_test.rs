// These tests all run the main binary and so expect to be able to reach S3
#![cfg(feature = "s3_tests")]

use assert_cmd::prelude::*;
#[cfg(not(feature = "s3express_tests"))]
use aws_sdk_s3::primitives::ByteStream;
use std::fs::{self, File};
#[cfg(not(feature = "s3express_tests"))]
use std::io::Read;
use std::io::{self, Write};
#[cfg(not(feature = "s3express_tests"))]
use std::path::Path;
#[cfg(not(feature = "s3express_tests"))]
use std::process::{Child, Stdio};
use std::{path::PathBuf, process::Command};
use tempfile::NamedTempFile;
use test_case::test_case;

use crate::common::creds::{get_sdk_default_chain_creds, get_subsession_iam_role};
use crate::common::fuse::read_dir_to_entry_names;
#[cfg(not(feature = "s3express_tests"))]
use crate::common::mount::unmount_and_check_log;
use crate::common::mount::{
    get_mount_from_source_and_mountpoint, mount_exists, unmount, wait_for_exit, wait_for_mount,
};
use crate::common::s3::{
    create_objects, get_test_bucket_and_prefix, get_test_bucket_forbidden, get_test_region, get_test_sdk_client,
};
use crate::common::tokio_block_on;
#[cfg(not(feature = "s3express_tests"))]
use crate::common::{creds::get_scoped_down_credentials, s3::get_non_test_region, s3::get_test_kms_key_id};

#[test]
fn run_in_background() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_run_in_background");
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[test]
fn run_in_background_region_from_env() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_run_in_background_region_from_env");
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .env("AWS_REGION", region.clone())
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[test]
// Automatic region resolution doesn't work with S3 Express One Zone
#[cfg(not(feature = "s3express_tests"))]
fn run_in_background_automatic_region_resolution() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_run_in_background_automatic_region_resolution");
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[test]
fn run_in_foreground() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_run_in_foreground");
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let mut child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg("--foreground")
        .arg(format!("--region={region}"))
        .spawn()
        .expect("unable to spawn child");

    wait_for_mount("mountpoint-s3", mount_point.path().to_str().unwrap());

    // verify that process is still alive
    let child_status = child.try_wait().unwrap();
    assert_eq!(None, child_status);

    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[test]
fn run_in_background_fail_on_mount() -> Result<(), Box<dyn std::error::Error>> {
    // the mount would fail from error 403 on HeadBucket
    let bucket = get_test_bucket_forbidden();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg("--auto-unmount")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    Ok(())
}

#[test]
fn run_in_foreground_fail_on_mount() -> Result<(), Box<dyn std::error::Error>> {
    // the mount would fail from error 403 on HeadBucket
    let bucket = get_test_bucket_forbidden();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg("--auto-unmount")
        .arg("--foreground")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    Ok(())
}

#[test]
fn run_fail_on_duplicate_mount() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("run_fail_on_duplicate_mount");
    let mount_point = assert_fs::TempDir::new()?;
    let region = get_test_region();

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let first_mount = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(first_mount);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let second_mount = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(second_mount);

    // verify mount status
    assert!(!exit_status.success());

    unmount(mount_point.path());

    Ok(())
}

#[test]
fn mount_readonly() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_mount_readonly");
    let mount_point = assert_fs::TempDir::new()?;
    let region = get_test_region();

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let mut child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg("--foreground")
        .arg("--read-only")
        .arg(format!("--region={region}"))
        .spawn()
        .expect("unable to spawn child");

    wait_for_mount("mountpoint-s3", mount_point.path().to_str().unwrap());

    // verify that process is still alive
    let child_status = child.try_wait().unwrap();
    assert_eq!(None, child_status);

    let mount_line =
        get_mount_from_source_and_mountpoint("mountpoint-s3", mount_point.path().to_str().unwrap()).unwrap();

    // mount entry looks like
    // /dev/nvme0n1p2 on /boot type ext4 (rw,relatime)
    let mount_opts_str = mount_line.split_whitespace().last().unwrap();
    let mount_opts: Vec<&str> = mount_opts_str.trim_matches(&['(', ')'] as &[_]).split(',').collect();
    assert!(mount_opts.contains(&"ro"));

    unmount(mount_point.path());

    Ok(())
}

#[test_case(true)]
#[test_case(false)]
fn mount_allow_delete(allow_delete: bool) -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("mount_allow_delete");
    let mount_point = assert_fs::TempDir::new()?;
    let region = get_test_region();

    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"));
    if allow_delete {
        cmd.arg("--allow-delete");
    }
    let child = cmd.spawn().expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    // create and try to delete an object
    create_objects(&bucket, &prefix, &region, "file.txt", b"hello world");

    let result = fs::remove_file(mount_point.path().join("file.txt"));
    if allow_delete {
        result.expect("remove file should succeed when --allow_delete is set");
    } else {
        result.expect_err("remove file should fail when --allow_delete is not set");
    }

    unmount(mount_point.path());

    Ok(())
}

#[test_case(true; "checksums disabled")]
#[test_case(false; "default checksums")]
fn mount_disable_checksums(disable_checksums: bool) -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("mount_enable_checksums");
    let mount_point = assert_fs::TempDir::new()?;
    let region = get_test_region();

    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"));
    if disable_checksums {
        cmd.arg("--upload-checksums=off");
    }
    let child = cmd.spawn().expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    // try to upload an object
    {
        let mut f = File::create(mount_point.path().join("file.txt")).unwrap();
        f.write_all(b"hello world").unwrap();
        f.sync_all().unwrap();
    }

    // check it's there and has checksums if we expected it to
    let sdk_client = tokio_block_on(get_test_sdk_client(&region));
    let attrs = tokio_block_on(
        sdk_client
            .get_object_attributes()
            .bucket(&bucket)
            .key(format!("{prefix}file.txt"))
            .object_attributes(aws_sdk_s3::types::ObjectAttributes::ObjectParts)
            .send(),
    )
    .unwrap();
    let parts = attrs.object_parts().unwrap();
    // Parts may not be present when checksums are disabled, but if they are (on Express), they
    // shouldn't be crc32c which is our default
    if !disable_checksums {
        assert!(
            !parts.parts().is_empty(),
            "checksums must be present when checksums enabled"
        );
    }
    for part in parts.parts() {
        let checksum_present = part.checksum_crc32_c().is_some();
        assert_eq!(checksum_present, !disable_checksums, "checksum presence mismatch");
    }

    unmount(mount_point.path());

    Ok(())
}

#[test]
// S3 Express One Zone doesn't support scoped credentials
#[cfg(not(feature = "s3express_tests"))]
fn mount_scoped_credentials() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("mount_allow_delete");
    let subprefix = format!("{prefix}sub/");
    let mount_point = assert_fs::TempDir::new()?;
    let region = get_test_region();

    // Get scoped down credentials to the subprefix
    let policy = r#"{"Statement": [
        {"Effect": "Allow", "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject", "s3:AbortMultipartUpload"], "Resource": "arn:aws:s3:::__BUCKET__/__PREFIX__*"},
        {"Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::__BUCKET__", "Condition": {"StringLike": {"s3:prefix": "__PREFIX__*"}}}
    ]}"#;
    let policy = policy.replace("__BUCKET__", &bucket).replace("__PREFIX__", &subprefix);
    let credentials = tokio_block_on(get_scoped_down_credentials(policy));

    // First try without the subprefix -- mount should fail as we don't have permissions on it
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_ACCESS_KEY_ID", credentials.access_key_id())
        .env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key());
    if let Some(token) = credentials.session_token() {
        cmd.env("AWS_SESSION_TOKEN", token);
    }
    let child = cmd.spawn().expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    // Now try with the subprefix -- mount should work since we have the right permissions
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={subprefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_ACCESS_KEY_ID", credentials.access_key_id())
        .env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key());
    if let Some(token) = credentials.session_token() {
        cmd.env("AWS_SESSION_TOKEN", token);
    }
    let child = cmd.spawn().expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &subprefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[cfg(not(feature = "s3express_tests"))]
fn mount_with_sse(
    bucket: &str,
    mount_point: &Path,
    prefix: &str,
    key_id: &str,
    credentials: Option<aws_sdk_s3::config::Credentials>,
) -> Child {
    let region = get_test_region();
    let mut cmd = Command::cargo_bin("mount-s3").expect("can not locate mount-s3 binary");
    cmd.stdout(Stdio::piped())
        .arg(bucket)
        .arg(mount_point)
        .arg(format!("--region={region}"))
        .arg(format!("--prefix={prefix}"))
        .arg("--sse=aws:kms:dsse")
        .arg(format!("--sse-kms-key-id={key_id}"))
        .arg("--auto-unmount")
        .arg("--foreground");
    if let Some(credentials) = credentials {
        cmd.env("AWS_ACCESS_KEY_ID", credentials.access_key_id())
            .env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key());
        if let Some(token) = credentials.session_token() {
            cmd.env("AWS_SESSION_TOKEN", token);
        }
    }
    let child = cmd.spawn().expect("unable to spawn child");
    wait_for_mount("mountpoint-s3", mount_point.to_str().unwrap());
    child
}

#[test]
fn mount_with_assumed_role() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("mount_with_assumed_role");
    let subsession_role = get_subsession_iam_role();
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;
    let profile_name = "fork_test";
    let source_profile = "default";

    let config_file = create_cli_config_file(profile_name, source_profile, &subsession_role, Some(&region))?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_CONFIG_FILE", config_file.path())
        .env("AWS_PROFILE", profile_name)
        .env_remove("AWS_ACCESS_KEY_ID")
        .env_remove("AWS_SECRET_ACCESS_KEY")
        .env_remove("AWS_SESSION_TOKEN")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // Verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[test]
// For S3 Express One Zone, this test is not really reliable because we don't support auto region
// detection for them. So, when you run this test on the default region (us-east-1) it will pass,
// but if you run it on any other regions it will fail even if you can assume the role successfully.
#[cfg(not(feature = "s3express_tests"))]
fn mount_with_assumed_role_in_other_region() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("mount_with_assumed_role_in_other_region");
    let subsession_role = get_subsession_iam_role();
    let region = get_test_region();
    let other_region = get_non_test_region();
    let invalid_region = "invalid-region";
    let mount_point = assert_fs::TempDir::new()?;
    let profile_name = "fork_test";
    let source_profile = "default";

    // First, verify that the mount fails if the region in the config file is invalid
    let config_file = create_cli_config_file(profile_name, source_profile, &subsession_role, Some(invalid_region))?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .env("AWS_CONFIG_FILE", config_file.path())
        .env("AWS_PROFILE", profile_name)
        .env_remove("AWS_ACCESS_KEY_ID")
        .env_remove("AWS_SECRET_ACCESS_KEY")
        .env_remove("AWS_SESSION_TOKEN")
        .env("AWS_EC2_METADATA_DISABLED", "true")
        .env_remove("AWS_REGION")
        .env_remove("AWS_DEFAULT_REGION")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // Verify mount status and mount entry
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    // Next, verify the mount succeeds when assuming a role in other valid region
    let config_file = create_cli_config_file(profile_name, source_profile, &subsession_role, Some(&other_region))?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .env("AWS_CONFIG_FILE", config_file.path())
        .env("AWS_PROFILE", profile_name)
        .env_remove("AWS_ACCESS_KEY_ID")
        .env_remove("AWS_SECRET_ACCESS_KEY")
        .env_remove("AWS_SESSION_TOKEN")
        .env("AWS_EC2_METADATA_DISABLED", "true")
        .env_remove("AWS_REGION")
        .env_remove("AWS_DEFAULT_REGION")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // Verify mount status and mount entry.
    // This is where Mountpoint might be diverging from other clients, like AWS CLI, they would
    // return failures in this case because their S3 endpoint resolver respects the region configured
    // in the config file. However, Mountpoint never use that file for S3 endpoint resolver and
    // try to resolve the endpoint on its own.
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

// Test profile auth without setting a region so it will fallback to global STS endpoint
#[test]
// For S3 Express One Zone, this test is not really reliable because we don't support auto region
// detection for them. So, when you run this test on the default region (us-east-1) it will pass,
// but if you run it on any other regions it will fail even if you can assume the role successfully.
#[cfg(not(feature = "s3express_tests"))]
fn mount_with_assumed_role_no_region() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("mount_with_assumed_role_no_region");
    let subsession_role = get_subsession_iam_role();
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;
    let profile_name = "fork_test";
    let source_profile = "default";

    let config_file = create_cli_config_file(profile_name, source_profile, &subsession_role, None)?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .env("AWS_CONFIG_FILE", config_file.path())
        .env("AWS_PROFILE", profile_name)
        .env_remove("AWS_ACCESS_KEY_ID")
        .env_remove("AWS_SECRET_ACCESS_KEY")
        .env_remove("AWS_SESSION_TOKEN")
        .env("AWS_EC2_METADATA_DISABLED", "true")
        .env_remove("AWS_REGION")
        .env_remove("AWS_DEFAULT_REGION")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    Ok(())
}

#[test]
fn run_fail_when_assume_role_with_invalid_arn() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("run_fail_when_assume_role_with_invalid_arn");
    let invalid_role = "arn:aws:iam::123456789123:role/invalid-role";
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;
    let profile_with_bad_arn = "bad_profile";
    let source_profile = "default";

    let config_file = create_cli_config_file(profile_with_bad_arn, source_profile, invalid_role, Some(&region))?;

    // First, make sure we can mount with the default profile
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_CONFIG_FILE", config_file.path())
        .env("AWS_PROFILE", "default")
        .env_remove("AWS_ACCESS_KEY_ID")
        .env_remove("AWS_SECRET_ACCESS_KEY")
        .env_remove("AWS_SESSION_TOKEN")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // Verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    unmount(mount_point.path());

    // Then we will test with the profile with invalid arn
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_CONFIG_FILE", config_file.path())
        .env("AWS_PROFILE", profile_with_bad_arn)
        .env_remove("AWS_ACCESS_KEY_ID")
        .env_remove("AWS_SECRET_ACCESS_KEY")
        .env_remove("AWS_SESSION_TOKEN")
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // Verify mount status and mount entry
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    Ok(())
}

#[cfg(not(feature = "s3express_tests"))]
fn write_to_file(mount_point: &Path, file_name: &str) -> Result<(), std::io::Error> {
    let mut f = fs::File::create(mount_point.join(file_name)).expect("should be able to open file for writing");
    let data = vec![0xaa; 32];
    f.write_all(&data)
}

#[cfg(not(feature = "s3express_tests"))]
#[test]
fn write_with_inexistent_key_sse() {
    let (bucket, prefix) = get_test_bucket_and_prefix("write_with_inexistent_key_sse");
    let key_id = format!(
        "arn:aws:kms:{}:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
        get_test_region()
    );
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");
    let child = mount_with_sse(&bucket, mount_point.path(), &prefix, &key_id, None);
    write_to_file(mount_point.path(), "f.txt").expect_err("should not be able to write to the file without proper sse");

    let expected_log_line = regex::Regex::new(r"^.*is not authorized to perform: kms:GenerateDataKey.*$").unwrap();
    unmount_and_check_log(child, mount_point.path(), &expected_log_line);
}

#[cfg(not(feature = "s3express_tests"))]
#[test]
fn write_with_no_permissions_for_a_key_sse() {
    let policy_with_no_kms_perms = r#"{"Statement": [
        {"Effect": "Allow", "Action": ["s3:*"], "Resource": "*"}
    ]}"#;
    let credentials = tokio_block_on(get_scoped_down_credentials(policy_with_no_kms_perms));

    let (bucket, prefix) = get_test_bucket_and_prefix("write_with_no_permissions_for_a_key_sse");
    let key_id = get_test_kms_key_id();
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");
    let child = mount_with_sse(&bucket, mount_point.path(), &prefix, &key_id, Some(credentials));
    write_to_file(mount_point.path(), "f.txt").expect_err("should not be able to write to the file without proper sse");

    let log_line_pattern = format!("^.*WARN.*User: [^ ]* is not authorized to perform: kms:GenerateDataKey on resource: {key_id} because no session policy allows the kms:GenerateDataKey action.*$");
    let expected_log_line = regex::Regex::new(&log_line_pattern).unwrap();
    unmount_and_check_log(child, mount_point.path(), &expected_log_line);
}

#[cfg(not(feature = "s3express_tests"))]
#[test]
fn read_with_no_permissions_for_a_key_sse() {
    let policy_with_no_kms_perms = r#"{"Statement": [
        {"Effect": "Allow", "Action": ["s3:*"], "Resource": "*"}
    ]}"#;
    let credentials = tokio_block_on(get_scoped_down_credentials(policy_with_no_kms_perms));

    let (bucket, prefix) = get_test_bucket_and_prefix("read_with_no_permissions_for_a_key_sse");
    let key_id = get_test_kms_key_id();
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");

    let encrypted_object = "encrypted_with_kms";
    let unencrypted_object = "unencrypted_with_s3_keys";
    {
        // create files
        let test_client = tokio_block_on(get_test_sdk_client(get_test_region().as_str()));
        let data = vec![0xaa; 32];
        let mut request = test_client
            .put_object()
            .bucket(&bucket)
            .key(format!("{prefix}{encrypted_object}"))
            .body(ByteStream::from(data.clone()));
        request =
            request.set_server_side_encryption(Some(aws_sdk_s3::types::ServerSideEncryption::from("aws:kms:dsse")));
        request = request.set_ssekms_key_id(Some(key_id.clone()));
        tokio_block_on(request.send()).expect("should be able to upload object to S3 via SDK client");
        let request = test_client
            .put_object()
            .bucket(&bucket)
            .key(format!("{prefix}{unencrypted_object}"))
            .body(ByteStream::from(data));
        tokio_block_on(request.send()).expect("should be able to upload object to S3 via SDK client");
    }

    let child = mount_with_sse(&bucket, mount_point.path(), &prefix, &key_id, Some(credentials));
    {
        // attempting to read files using Mountpoint, this scoped block also limits file lifetimes
        let encrypted_object = mount_point.join(encrypted_object);
        let mut data = Vec::new();
        let mut f = fs::File::open(encrypted_object).expect("can not open file for read");
        let read_result = f.read_to_end(&mut data);
        read_result.expect_err("should not be able to read a kms-encrypted file without kms permissions");

        let unencrypted_object = mount_point.join(unencrypted_object);
        let mut f = fs::File::open(unencrypted_object).expect("can not open file for read");
        let read_result = f.read_to_end(&mut data);
        read_result.expect("should be able to read a default-encrypted file after the first read failure");
    }

    let log_line_pattern = format!("^.*WARN.*{encrypted_object}.*read failed: get request failed: get object request failed: Client error: Forbidden: User: .* is not authorized to perform: kms:Decrypt on resource: {key_id} because no session policy allows the kms:Decrypt action.*$");
    let expected_log_line = regex::Regex::new(&log_line_pattern).unwrap();
    unmount_and_check_log(child, mount_point.path(), &expected_log_line);
}

#[cfg(not(feature = "s3express_tests"))]
#[test]
fn write_with_sse_kms_key_id_ok() {
    let kms_key_arn = get_test_kms_key_id();
    assert!(kms_key_arn.starts_with("arn:") && kms_key_arn.contains(":key"));
    let (bucket, prefix) = get_test_bucket_and_prefix("write_with_sse_kms_key_id_ok");
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");
    let _ = mount_with_sse(&bucket, mount_point.path(), &prefix, &kms_key_arn, None);
    let f_name = "f.txt";
    write_to_file(mount_point.path(), f_name).expect("should be able to write to the file");
    unmount(&mount_point);

    let sdk_client = tokio_block_on(get_test_sdk_client(get_test_region().as_str()));
    let key = format!("{}{}", prefix, f_name);
    let head_object_output = tokio_block_on(sdk_client.head_object().bucket(&bucket).key(&key).send());
    let head_object_output = head_object_output.expect("object must exist");
    assert_eq!(
        head_object_output.ssekms_key_id.expect("ssekms_key_id must be set"),
        kms_key_arn
    );
}

#[cfg(not(feature = "s3express_tests"))]
#[test_case("1234abcd-12ab-34cd-56ef-1234567890ab"; "KMS Key ID")]
#[test_case("arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"; "KMS Key alias")]
#[test_case("alias/ExampleAlias"; "KMS Key alias ARN")]
fn write_with_sse_kms_key_id_unsupported(key_id: &str) {
    let (bucket, prefix) = get_test_bucket_and_prefix("write_with_sse_kms_key_id_unsupported");
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");
    let region = get_test_region();
    let mut cmd = Command::cargo_bin("mount-s3").expect("can not locate mount-s3 binary");
    let child = cmd
        .stdout(Stdio::piped())
        .arg(bucket)
        .arg(mount_point.path())
        .arg(format!("--region={region}"))
        .arg(format!("--prefix={prefix}"))
        .arg("--sse=aws:kms:dsse")
        .arg(format!("--sse-kms-key-id={key_id}"))
        .arg("--auto-unmount")
        .arg("--foreground")
        .spawn()
        .expect("must be able to fork mountpoint");
    let exit_status = wait_for_exit(child);
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));
}

fn test_read_files(bucket: &str, prefix: &str, region: &str, mount_point: &PathBuf) {
    // create objects for test
    create_objects(bucket, prefix, region, "file1.txt", b"hello world");
    create_objects(bucket, prefix, region, "dir/file2.txt", b"hello world");

    // verify readdir works on mount point
    let read_dir_iter = fs::read_dir(mount_point).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["dir", "file1.txt"]);

    // verify readdir works
    let read_dir_iter = fs::read_dir(mount_point.join("dir")).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["file2.txt"]);

    // verify read file works
    let file_content = fs::read_to_string(mount_point.as_path().join("file1.txt")).unwrap();
    assert_eq!(file_content, "hello world");

    let file_content = fs::read_to_string(mount_point.as_path().join("dir/file2.txt")).unwrap();
    assert_eq!(file_content, "hello world");
}

/// Create a CLI config file containing a profile that source its credentials from another given source profile.
fn create_cli_config_file(
    profile_name: &str,
    source_profile: &str,
    role_arn: &str,
    region: Option<&str>,
) -> io::Result<NamedTempFile> {
    let mut config_file = NamedTempFile::new()?;

    // Populate source profile from the default credentials chain
    let credentials = tokio_block_on(get_sdk_default_chain_creds());
    writeln!(config_file, "[profile {}]", source_profile).unwrap();
    writeln!(config_file, "aws_access_key_id={}", credentials.access_key_id()).unwrap();
    writeln!(config_file, "aws_secret_access_key={}", credentials.secret_access_key()).unwrap();
    if let Some(session_token) = credentials.session_token() {
        writeln!(config_file, "aws_session_token={session_token}").unwrap();
    }

    // Then populate the profile for testing
    writeln!(config_file, "[profile {}]", profile_name).unwrap();
    writeln!(config_file, "source_profile = {}", source_profile).unwrap();
    writeln!(config_file, "role_arn = {}", role_arn).unwrap();
    if let Some(region) = region {
        writeln!(config_file, "region = {}", region).unwrap();
    }

    Ok(config_file)
}
