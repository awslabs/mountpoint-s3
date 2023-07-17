// These tests all run the main binary and so expect to be able to reach S3
#![cfg(feature = "s3_tests")]

use assert_cmd::prelude::*; // Add methods on commands
use std::fs;
use std::io::{BufRead, BufReader};
use std::process::Stdio;
use std::{path::PathBuf, process::Command}; // Run programs

use crate::common::{create_objects, get_test_bucket_and_prefix, get_test_bucket_forbidden, get_test_region};
use crate::fuse_tests::read_dir_to_entry_names;

const MAX_WAIT_DURATION: std::time::Duration = std::time::Duration::from_secs(10);

#[test]
fn run_in_background() -> Result<(), Box<dyn std::error::Error>> {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_run_in_background");
    let region = get_test_region();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let mut child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .spawn()
        .expect("unable to spawn child");

    let st = std::time::Instant::now();

    let exit_status = loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match child.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(std::time::Duration::from_millis(100)),
        }
    };

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

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

    let st = std::time::Instant::now();

    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        if mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()) {
            break;
        }
        std::thread::sleep(std::time::Duration::from_millis(100));
    }

    // verify that process is still alive
    let child_status = child.try_wait().unwrap();
    assert_eq!(None, child_status);

    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    test_read_files(&bucket, &prefix, &region, &mount_point.to_path_buf());

    Ok(())
}

#[test]
fn run_in_background_fail_on_mount() -> Result<(), Box<dyn std::error::Error>> {
    // the mount would fail from error 403 on HeadBucket
    let bucket = get_test_bucket_forbidden();
    let mount_point = assert_fs::TempDir::new()?;

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let mut child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg("--auto-unmount")
        .spawn()
        .expect("unable to spawn child");

    let st = std::time::Instant::now();

    let exit_status = loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match child.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(std::time::Duration::from_millis(100)),
        }
    };

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
    let mut child = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg("--auto-unmount")
        .arg("--foreground")
        .spawn()
        .expect("unable to spawn child");

    let st = std::time::Instant::now();

    let exit_status = loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match child.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(std::time::Duration::from_millis(100)),
        }
    };

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
    let mut first_mount = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .arg(format!("--region={region}"))
        .spawn()
        .expect("unable to spawn child");

    let st = std::time::Instant::now();

    let exit_status = loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match first_mount.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(std::time::Duration::from_millis(100)),
        }
    };

    // verify mount status and mount entry
    assert!(exit_status.success());
    assert!(mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()));

    let mut cmd = Command::cargo_bin("mount-s3")?;
    let mut second_mount = cmd
        .arg(&bucket)
        .arg(mount_point.path())
        .arg(format!("--prefix={prefix}"))
        .arg("--auto-unmount")
        .spawn()
        .expect("unable to spawn child");

    let st = std::time::Instant::now();

    let exit_status = loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match second_mount.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(std::time::Duration::from_millis(100)),
        }
    };

    // verify mount status
    assert!(!exit_status.success());

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

    let st = std::time::Instant::now();

    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        if mount_exists("mountpoint-s3", mount_point.path().to_str().unwrap()) {
            break;
        }
        std::thread::sleep(std::time::Duration::from_millis(100));
    }

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

    Ok(())
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

    for line in stdout_lines.flatten() {
        let str: Vec<&str> = line.split_whitespace().collect();
        let source_rec = str[0];
        let mount_point_rec = str[2];
        if source_rec == source && mount_point_rec == mount_point {
            return Some(line);
        }
    }
    None
}
