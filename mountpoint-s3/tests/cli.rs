use assert_cmd::prelude::*; // Add methods on commands
use predicates::prelude::*; // Used for writing assertions
use std::process::Command; // Run programs

/// Regular expression for something that looks mostly like a SemVer version.
/// Don't use this outside of this test - SemVer is both more restrictive and flexible.
const VALID_VERSION_OUTPUT_PATTERN: &str =
    "^mountpoint-s3 \\d+\\.\\d+\\.\\d+(?:-\\w+(?:\\.\\w+)*)*(?:\\+[\\w\\.]+)*\n$";

#[test]
fn mount_point_doesnt_exist() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg("test/dir");
    let error_message = "Mount point test/dir does not exist or it is not a directory";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn mount_point_isnt_dir() -> Result<(), Box<dyn std::error::Error>> {
    let file = assert_fs::NamedTempFile::new("test/file.txt")?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(file.path());
    let error_message = format!(
        "Mount point {} does not exist or it is not a directory",
        file.path().display()
    );
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn prefix_doesnt_end_in_slash() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    let prefix = "foo";
    cmd.arg("test-bucket")
        .arg(dir.path())
        .arg(format!("--prefix={}", prefix));
    let error_message = format!(
        "error: invalid value '{}' for '--prefix <PREFIX>': prefix must end in '/'",
        prefix
    );
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn max_dir_mode_exceeded() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--dir-mode=7755");
    let error_message = "'--dir-mode <DIR_MODE>': only user/group/other permissions are supported";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn invalid_dir_mode() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--dir-mode=800");
    let error_message = "'--dir-mode <DIR_MODE>': must be a valid octal number";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn max_file_mode_exceeded() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--file-mode=7644");
    let error_message = "'--file-mode <FILE_MODE>': only user/group/other permissions are supported";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn invalid_file_mode() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--file-mode=900");
    let error_message = "'--file-mode <FILE_MODE>': must be a valid octal number";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn print_version_long() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg("--version");

    cmd.assert()
        .success()
        .stdout(predicate::str::is_match(VALID_VERSION_OUTPUT_PATTERN).unwrap());

    Ok(())
}

#[test]
fn print_version_short() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg("-V");

    cmd.assert()
        .success()
        .stdout(predicate::str::is_match(VALID_VERSION_OUTPUT_PATTERN).unwrap());

    Ok(())
}

#[test]
fn addressing_style_mutually_exclusive() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket")
        .arg("test/dir")
        .arg("--virtual-addressing")
        .arg("--path-addressing");
    let error_message = "the argument '--virtual-addressing' cannot be used with '--path-addressing'";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn bucket_name_and_directory_swapped() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test/dir").arg("my-bucket-name");
    let error_message = "bucket names can only contain letters, numbers, . and -";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn s3_uri_as_bucket_name() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("s3://test-bucket/").arg("test/dir");
    let error_message = "bucket name should not be an s3:// URI";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}
