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
