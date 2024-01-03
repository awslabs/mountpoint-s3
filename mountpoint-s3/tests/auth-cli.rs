#![cfg(feature = "s3_tests")]

mod common;

use assert_cmd::prelude::*; // Add methods on commands
use predicates::prelude::*; // Used for writing assertions
use std::{fs, process::Command}; // Run programs

use aws_config::default_provider::credentials::DefaultCredentialsChain;
use aws_credential_types::provider::ProvideCredentials;
use aws_sdk_s3::config::Credentials;

use crate::common::s3::{get_test_bucket_and_prefix, get_test_region};

/// This test puts valid credentials into the environment and configure invalid credentials in an AWS Profile.
/// It verifies that Mountpoint fails due to using those credentials and ignoring the credentials in the environment.
#[tokio::test]
async fn check_profile_env_prefers_static_env_creds() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let profile_name = "test-profile";

    let (bucket, prefix) = get_test_bucket_and_prefix("check_profile_env_prefers_static_env_creds");
    let region = get_test_region();

    let config_file_name = dir.join("config");
    let mut config_file = fs::File::create(&config_file_name).unwrap();
    cmd.env("AWS_CONFIG_FILE", &config_file_name);

    // Configure invalid credentials. We intend to check Mountpoint uses these despite setting AWS_PROFILE.
    {
        let credentials = aws_sdk_s3::config::Credentials::new(
            "AKIAIOSFODNN7EXAMPLE",
            "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
            None,
            None,
            "invalid_creds",
        );
        cmd.env("AWS_ACCESS_KEY_ID", credentials.access_key_id());
        cmd.env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key());
        if let Some(token) = credentials.session_token() {
            cmd.env("AWS_SESSION_TOKEN", token);
        }
    }

    // Configure invalid credentials in an AWS Profile.
    {
        let credentials = get_sdk_default_chain_creds().await;
        write_credentials_to_named_profile(&mut config_file, profile_name, credentials).await;
        cmd.env("AWS_PROFILE", profile_name);
    }

    cmd.env("AWS_REGION", region);
    cmd.arg(&bucket);
    cmd.arg(dir.path());
    cmd.arg(format!("--prefix={prefix}"));
    let error_message = "The AWS Access Key Id you provided does not exist in our records.";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

/// This test puts invalid credentials into the environment and configure valid credentials in an AWS Profile.
/// It verifies that Mountpoint fails due to using those credentials and ignoring the credentials in the environment.
#[tokio::test]
async fn check_profile_flag_ignores_static_env_creds() -> Result<(), Box<dyn std::error::Error>> {
    let dir = assert_fs::TempDir::new()?;
    let mut cmd = Command::cargo_bin("mount-s3")?;
    let profile_name = "test-profile";

    let (bucket, prefix) = get_test_bucket_and_prefix("check_profile_flag_ignores_static_env_creds");
    let region = get_test_region();

    let config_file_name = dir.join("config");
    let mut config_file = fs::File::create(&config_file_name).unwrap();
    cmd.env("AWS_CONFIG_FILE", &config_file_name);

    // Configure invalid credentials in an AWS Profile.
    {
        let credentials = aws_sdk_s3::config::Credentials::new(
            "AKIAIOSFODNN7EXAMPLE",
            "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
            None,
            None,
            "invalid_creds",
        );
        write_credentials_to_named_profile(&mut config_file, profile_name, credentials).await;
    }

    // Configure valid environment variables explicitly.
    // We intend to check Mountpoint skips these when setting `--profile <PROFILE_NAME>`.
    {
        let credentials = get_sdk_default_chain_creds().await;
        cmd.env("AWS_ACCESS_KEY_ID", credentials.access_key_id());
        cmd.env("AWS_SECRET_ACCESS_KEY", credentials.secret_access_key());
        if let Some(token) = credentials.session_token() {
            cmd.env("AWS_SESSION_TOKEN", token);
        }
    }

    cmd.env("AWS_REGION", region);
    cmd.arg(&bucket);
    cmd.arg(dir.path());
    cmd.arg(format!("--prefix={prefix}"));
    cmd.arg(format!("--profile={profile_name}"));
    let error_message = "The AWS Access Key Id you provided does not exist in our records.";
    cmd.assert().failure().stderr(predicate::str::contains(error_message));

    Ok(())
}

/// Takes something writable (such as an open file) and writes a new entry for the given name and SDK credentials.
async fn write_credentials_to_named_profile<B: std::io::Write>(
    mut config_buffer: B,
    profile_name: &str,
    credentials: aws_sdk_s3::config::Credentials,
) {
    writeln!(config_buffer, "[profile {profile_name}]").unwrap();
    let access_key_id = credentials.access_key_id();
    writeln!(config_buffer, "aws_access_key_id = {access_key_id}").unwrap();
    let secret_access_key = credentials.secret_access_key();
    writeln!(config_buffer, "aws_secret_access_key = {secret_access_key}",).unwrap();
    if let Some(session_token) = credentials.session_token() {
        writeln!(config_buffer, "aws_session_token = {session_token}").unwrap();
    }
}

/// Grab a set of SDK [Credentials] from the default credential provider chain.
pub async fn get_sdk_default_chain_creds() -> Credentials {
    let sdk_provider = DefaultCredentialsChain::builder().build().await;
    sdk_provider
        .provide_credentials()
        .await
        .expect("default chain credentials should be available")
}
