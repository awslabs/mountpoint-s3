#![cfg(feature = "s3_tests")]

pub mod common;

use std::io::Write;
use std::option::Option::None;

use aws_config::default_provider::credentials::DefaultCredentialsChain;
use aws_credential_types::provider::ProvideCredentials;
use aws_sdk_s3::types::ByteStream;
use aws_sdk_s3::Region;
use bytes::Bytes;
use common::*;
use futures::StreamExt;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_client::{S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_crt::auth::credentials::{CredentialsProvider, CredentialsProviderStaticOptions};
use mountpoint_s3_crt::common::allocator::Allocator;
use rusty_fork::rusty_fork_test;
use tempfile::NamedTempFile;

/// Test creating a client with the static credentials provider
#[tokio::test]
async fn test_static_provider() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_static_provider");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    // Get some static credentials by just using the SDK's default provider, which we know works
    let sdk_provider = DefaultCredentialsChain::builder()
        .region(Region::new(get_test_region()))
        .build()
        .await;
    let credentials = sdk_provider
        .provide_credentials()
        .await
        .expect("can't get static credentials");

    // Build a S3CrtClient that uses a static credentials provider with the creds we just got
    let config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: credentials.secret_access_key(),
        session_token: credentials.session_token(),
    };
    let provider = CredentialsProvider::new_static(&Allocator::default(), config).expect("couldn't create provider");
    let config = S3ClientConfig {
        auth_config: S3ClientAuthConfig::Provider(provider),
        ..Default::default()
    };
    let client = S3CrtClient::new(&get_test_region(), config).expect("couldn't create client");

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;

    // Try it again but corrupt the credentials so that we know they're actually being used. The
    // client can't tell that the corrupted secret access key is invalid, so the request gets sent,
    // but fails.
    let bogus_secret_access_key = credentials.secret_access_key().split_at(5).0;
    let config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: bogus_secret_access_key,
        session_token: credentials.session_token(),
    };
    let provider = CredentialsProvider::new_static(&Allocator::default(), config).expect("couldn't create provider");
    let config = S3ClientConfig {
        auth_config: S3ClientAuthConfig::Provider(provider),
        ..Default::default()
    };
    let client = S3CrtClient::new(&get_test_region(), config).expect("couldn't create client");

    let mut request = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object request should be sent");

    let _error = request
        .next()
        .await
        .unwrap()
        .expect_err("bogus credentials should not work");
}

/// Test creating a client with the profile credentials provider
///
/// This is complicated because CLI profiles are inherently global state, but we want to isolate the
/// test. So the [test_profile_provider] test below is forked into its own process, where it can set
/// the environment variables it needs to point to an isolated CLI configuration file without
/// affecting the rest of the real test runner.
async fn test_profile_provider_async() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_profile_provider");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    // Get some static credentials by just using the SDK's default provider chain
    let sdk_provider = DefaultCredentialsChain::builder()
        .region(Region::new(get_test_region()))
        .build()
        .await;
    let credentials = sdk_provider
        .provide_credentials()
        .await
        .expect("can't get static credentials");

    // Write the credentials in CLI config format into a temp file
    let profile_name = "mountpoint-profile";
    let mut config_file = NamedTempFile::new().unwrap();
    writeln!(
        config_file,
        "[profile {}]
aws_access_key_id = {}
aws_secret_access_key = {}",
        profile_name,
        credentials.access_key_id(),
        credentials.secret_access_key()
    )
    .unwrap();
    if let Some(session_token) = credentials.session_token() {
        writeln!(config_file, "aws_session_token = {}", session_token).unwrap()
    }

    // Set up the environment variables to use this new config file. This is only OK to do because
    // this test is run in a forked process, so won't affect any other concurrently running tests.
    // We need to unset AWS_PROFILE if set, because the CRT's profile provider prefers it over the
    // overriden profile name.
    std::env::remove_var("AWS_PROFILE");
    std::env::set_var("AWS_CONFIG_FILE", config_file.path().as_os_str());

    // Build a S3CrtClient that uses the config file
    let config = S3ClientConfig {
        auth_config: S3ClientAuthConfig::Profile(profile_name.to_owned()),
        ..Default::default()
    };
    let client = S3CrtClient::new(&get_test_region(), config).expect("couldn't create client");

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;

    // Try it again, but scribble over the credentials, so we know it's not succeeding by accident.
    // The client can't tell that the corrupted session token is invalid, so the request gets sent,
    // but fails.
    let length = config_file.as_file().metadata().unwrap().len();
    config_file.as_file_mut().set_len(length - 5).unwrap();

    let config = S3ClientConfig {
        auth_config: S3ClientAuthConfig::Profile(profile_name.to_owned()),
        ..Default::default()
    };
    let client = S3CrtClient::new(&get_test_region(), config).expect("couldn't create client");

    let mut request = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should be sent");

    let _error = request
        .next()
        .await
        .unwrap()
        .expect_err("bogus credentials should not work");

    // Try it again with a bogus profile name so we know it's not succeeding by accident. This time
    // the client can tell that the profile is invalid (it doesn't exist), so the client can't even
    // be constructed.
    let config = S3ClientConfig {
        auth_config: S3ClientAuthConfig::Profile("not-the-right-profile-name".to_owned()),
        ..Default::default()
    };
    let _result = S3CrtClient::new(&get_test_region(), config).expect_err("profile doesn't exist");
}

rusty_fork_test! {
    #[test]
    fn test_profile_provider() {
        // rusty_fork doesn't support async tests, so build an SDK-usable runtime manually
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_profile_provider_async());
    }
}
