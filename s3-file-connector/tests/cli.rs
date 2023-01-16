use assert_cmd::prelude::*; // Add methods on commands
use predicates::prelude::*; // Used for writing assertions
use std::process::Command; // Run programs

#[test]
fn mount_point_doesnt_exist() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("s3-file-connector")?;

    cmd.arg("test-bucket").arg("test/dir");
    let error_message = "Mount point test/dir does not exist or it is not a directory";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn mount_point_isnt_dir() -> Result<(), Box<dyn std::error::Error>> {
    let file = assert_fs::NamedTempFile::new("test/file.txt")?;
    let mut cmd = Command::cargo_bin("s3-file-connector")?;

    cmd.arg("test-bucket").arg(file.path());
    let error_message = format!(
        "Mount point {} does not exist or it is not a directory",
        file.path().display()
    );
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn max_dir_mode_exceeded() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("s3-file-connector")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--dir-mode=7755");
    let error_message = "'--dir-mode <DIR_MODE>': only user/group/other permissions are supported";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn invalid_dir_mode() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("s3-file-connector")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--dir-mode=800");
    let error_message = "'--dir-mode <DIR_MODE>': must be a valid octal number";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn max_file_mode_exceeded() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("s3-file-connector")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--file-mode=7644");
    let error_message = "'--file-mode <FILE_MODE>': only user/group/other permissions are supported";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn invalid_file_mode() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("s3-file-connector")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--file-mode=900");
    let error_message = "'--file-mode <FILE_MODE>': must be a valid octal number";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}
