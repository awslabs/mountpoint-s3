use assert_cmd::prelude::*; // Add methods on commands
use predicates::prelude::*; // Used for writing assertions
use std::{fs, os::unix::prelude::PermissionsExt, process::Command}; // Run programs
use test_case::test_case;

/// Regular expression for something that looks mostly like a SemVer version.
/// See https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string.
const VALID_VERSION_OUTPUT_PATTERN: &str = "^mount-s3 (0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?\n$";

#[test]
fn mount_point_doesnt_exist() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg("test/dir");
    let error_message = "mount point test/dir does not exist";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn mount_point_isnt_dir() -> Result<(), Box<dyn std::error::Error>> {
    let file = assert_fs::NamedTempFile::new("file.txt")?;
    fs::write(file.path(), b"hello")?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(file.path());
    let error_message = format!("mount point {} is not a directory", file.path().display());
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
fn bucket_name_and_directory_swapped() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test/dir").arg("my-bucket-name");
    let error_message = "bucket argument should be a valid bucket name(only letters, numbers, . and -) or a valid ARN";
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

#[test]
fn invalid_profile() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket").arg(dir.path()).arg("--profile").arg("INVALID");
    let error_message = "invalid AWS credentials";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn validate_log_files_permissions() -> Result<(), Box<dyn std::error::Error>> {
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let dir = assert_fs::TempDir::new()?;
    let log_dir = assert_fs::TempDir::new()?;
    let log_dir = log_dir.path().join("logs");

    cmd.arg("test-bucket").arg(dir.path());
    cmd.arg(format!("--log-directory={}", log_dir.to_str().unwrap()));
    cmd.assert().failure();

    // verify log directory metadata
    let metadata = fs::metadata(&log_dir).unwrap();
    assert!(metadata.is_dir());
    // mask with 0o7777 to get only permission bits
    let dir_perm = metadata.permissions().mode() & 0o7777;
    let expected_dir_perm = 0o750;
    assert_eq!(
        expected_dir_perm, dir_perm,
        "log directory created by mountpoint should have {:#o} permissions, not {:#o}",
        expected_dir_perm, dir_perm,
    );

    // verify log files metadata
    let log_files = fs::read_dir(&log_dir).unwrap();
    for log_file in log_files {
        let log_file = log_file.unwrap();
        let metadata = fs::metadata(log_file.path()).unwrap();
        assert!(metadata.is_file());
        // mask with 0o7777 to get only permission bits
        let file_perm = metadata.permissions().mode() & 0o7777;
        let expected_file_perm = 0o640;
        assert_eq!(
            expected_file_perm, file_perm,
            "log file should have {:#o} permissions, not {:#o}",
            expected_file_perm, file_perm,
        );
    }

    Ok(())
}

#[test]
fn allow_other_conflict() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket")
        .arg(dir.path())
        .arg("--allow-other")
        .arg("--allow-root");
    let error_message = "the argument '--allow-other' cannot be used with '--allow-root'";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn max_ttl_exceeded() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    const INVALID_TTL: u64 = 150 * 365 * 24 * 60 * 60;
    cmd.arg("test-bucket")
        .arg(dir.path())
        .arg("--metadata-ttl")
        .arg(format!("{}", INVALID_TTL));
    let error_message =
        "'--metadata-ttl <SECONDS|indefinite|minimal>': TTL must not be greater than 3153600000s (~100 years)";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test_case("20000000000000000000")]
#[test_case("infinite")]
fn invalid_ttl(invalid_ttl: &str) -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;

    cmd.arg("test-bucket")
        .arg(dir.path())
        .arg("--metadata-ttl")
        .arg(invalid_ttl);
    let error_message = "'--metadata-ttl <SECONDS|indefinite|minimal>': TTL must be a valid number of seconds, or";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn sse_args_non_empty() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg("test-bucket").arg(dir.path()).arg("--sse=");
    let error_message = "a value is required for '--sse <SSE>' but none was supplied";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg("test-bucket")
        .arg(dir.path())
        .arg("--sse=aws:kms")
        .arg("--sse-kms-key-id=");
    let error_message = "invalid value \'\' for \'--sse-kms-key-id <AWS_KMS_KEY_ARN>\': KMS Key ARN is only accepted as a key identifier, Key Alias ARN is not accepted";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test]
fn sse_key_not_allowed_with_aes256() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg("test-bucket")
        .arg(dir.path())
        .arg("--sse=AES256")
        .arg("--sse-kms-key-id=arn:aws:kms:eu-west-1:151381207180:key/dabe1478-fe48-47ca-b6f8-ca044b643a82");
    let error_message = "--sse-kms-key-id can not be used with --sse AES256";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

#[test_case(Some(1024), Some(1024))]
#[test_case(None, Some(1024))]
#[test_case(Some(1024), None)]
fn verify_new_part_size_config_conflict_with_old_one(
    read_part_size: Option<u64>,
    write_part_size: Option<u64>,
) -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;
    cmd.arg("test-bucket").arg(dir.path()).arg("--part-size=1024");

    if let Some(read_part_size) = read_part_size {
        cmd.arg(format!("--read-part-size={}", read_part_size));
    }
    if let Some(write_part_size) = write_part_size {
        cmd.arg(format!("--write-part-size={}", write_part_size));
    }

    let error_message = "cannot be used with";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}
