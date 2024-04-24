// These tests all run the main binary and so expect to be able to reach S3
#![cfg(feature = "s3_tests")]

use assert_cmd::prelude::*;
#[cfg(not(feature = "s3express_tests"))]
use aws_config::BehaviorVersion;
#[cfg(not(feature = "s3express_tests"))]
use aws_sdk_s3::primitives::ByteStream;
#[cfg(not(feature = "s3express_tests"))]
use aws_sdk_sts::config::Region;
use std::fs::{self, File};
#[cfg(not(feature = "s3express_tests"))]
use std::io::Read;
use std::io::{BufRead, BufReader, Write};
use std::path::Path;
use std::process::{Child, ExitStatus, Stdio};
use std::time::{Duration, Instant};
use std::{path::PathBuf, process::Command};
use test_case::test_case;

use crate::common::fuse::read_dir_to_entry_names;
use crate::common::s3::{
    create_objects, get_test_bucket_and_prefix, get_test_bucket_forbidden, get_test_region, get_test_sdk_client,
};
#[cfg(not(feature = "s3express_tests"))]
use crate::common::s3::{get_scoped_down_credentials, get_subsession_iam_role, get_test_kms_key_id};
use crate::common::tokio_block_on;

const MAX_WAIT_DURATION: std::time::Duration = std::time::Duration::from_secs(10);

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
    let subsession_role = get_subsession_iam_role();

    // Get scoped down credentials to the subprefix
    let policy = r#"{"Statement": [
        {"Effect": "Allow", "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject", "s3:AbortMultipartUpload"], "Resource": "arn:aws:s3:::__BUCKET__/__PREFIX__*"},
        {"Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::__BUCKET__", "Condition": {"StringLike": {"s3:prefix": "__PREFIX__*"}}}
    ]}"#;
    let policy = policy.replace("__BUCKET__", &bucket).replace("__PREFIX__", &subprefix);
    let config = tokio_block_on(
        aws_config::defaults(BehaviorVersion::latest())
            .region(Region::new(get_test_region()))
            .load(),
    );
    let sts_client = aws_sdk_sts::Client::new(&config);
    let credentials = tokio_block_on(
        sts_client
            .assume_role()
            .role_arn(subsession_role)
            .role_session_name("test_scoped_credentials")
            .policy(policy)
            .send(),
    )
    .unwrap();
    let credentials = credentials.credentials().unwrap();

    // First try without the subprefix -- mount should fail as we don't have permissions on it
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_ACCESS_KEY_ID", credentials.access_key_id())
        .env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key())
        .env("AWS_SESSION_TOKEN", credentials.session_token())
        .spawn()
        .expect("unable to spawn child");

    let exit_status = wait_for_exit(child);

    // verify mount status and mount entry
    assert!(!exit_status.success());
    assert!(!mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    // Now try with the subprefix -- mount should work since we have the right permissions
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={subprefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .env("AWS_ACCESS_KEY_ID", credentials.access_key_id())
        .env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key())
        .env("AWS_SESSION_TOKEN", credentials.session_token())
        .spawn()
        .expect("unable to spawn child");

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
    let key_id = "SOME_INVALID_KEY";
    let mount_point = assert_fs::TempDir::new().expect("can not create a mount dir");
    let child = mount_with_sse(&bucket, mount_point.path(), &prefix, key_id, None);
    write_to_file(mount_point.path(), "f.txt").expect_err("should not be able to write to the file without proper sse");

    let expected_log_line =
        regex::Regex::new(r"^.*WARN.*KMS.NotFoundException.*Invalid keyId \\'SOME_INVALID_KEY\\'.*$").unwrap();
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

fn mount_exists(source: &str, mount_point: &str) -> bool {
    get_mount_from_source_and_mountpoint(source, mount_point).is_some()
}

/// Read all mount records in the system and return the line that matches given arguments.
/// # Arguments
///
/// * `source` - name of the file system.
/// * `mount_point` - path to the mount point.
fn get_mount_from_source_and_mountpoint(source: &str, mount_point: &str) -> Option<String> {
    // macOS wrap its temp directory under /private but it's not visible to users
    #[cfg(target_os = "macos")]
    let mount_point = format!("/private{}", mount_point);

    let mut cmd = Command::new("mount");
    #[cfg(target_os = "linux")]
    cmd.arg("-l");
    let mut cmd = cmd.stdout(Stdio::piped()).spawn().expect("Unable to spawn mount tool");

    let stdout = cmd.stdout.as_mut().unwrap();
    let stdout_reader = BufReader::new(stdout);
    let stdout_lines = stdout_reader.lines();

    for line in stdout_lines.map_while(Result::ok) {
        let str: Vec<&str> = line.split_whitespace().collect();
        let source_rec = str[0];
        let mount_point_rec = str[2];
        if source_rec == source && mount_point_rec == mount_point {
            return Some(line);
        }
    }
    None
}

fn wait_for_exit(mut child: Child) -> ExitStatus {
    let st = Instant::now();

    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match child.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(Duration::from_millis(100)),
        }
    }
}

fn wait_for_mount(source: &str, mount_point: &str) {
    let st = Instant::now();

    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for mount timeout")
        }
        if mount_exists(source, mount_point) {
            return;
        }
        std::thread::sleep(Duration::from_millis(100));
    }
}

fn unmount(mount_point: &Path) {
    fn run_fusermount(bin: &str, mount_point: &Path) -> Result<bool, Box<dyn std::error::Error>> {
        let mut child = Command::new(bin).arg("-u").arg(mount_point).spawn()?;
        let result = child.wait()?;
        Ok(result.success())
    }

    // Loop a bit to give any slow/async FUSE requests time to finish
    for i in 1..4 {
        // Try both FUSE 2 and FUSE 3 versions, since we don't know where we're running
        for bin in ["fusermount", "fusermount3"] {
            if matches!(run_fusermount(bin, mount_point), Ok(true)) {
                return;
            }
        }
        std::thread::sleep(i * Duration::from_secs(1));
    }

    panic!("failed to unmount");
}

#[cfg(not(feature = "s3express_tests"))]
fn unmount_and_check_log(mut process: Child, mount_path: &Path, expected_log_line: &regex::Regex) {
    unmount(mount_path);
    let mut stdout = process
        .stdout
        .take()
        .expect("stdout shouldn't be consumed at this point");
    wait_for_exit(process);
    let mut buf = Vec::new();
    stdout
        .read_to_end(&mut buf)
        .expect("failed to read mountpoint log from pipe");
    let log = String::from_utf8(buf).expect("mountpoint log is not a valid UTF-8");
    for line in log.lines() {
        if expected_log_line.is_match(line) {
            return;
        }
    }
    panic!("can not find a matching line in log: [{log}]");
}
