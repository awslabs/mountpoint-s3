#![cfg(feature = "s3_tests")]

pub mod common;

use std::io::Write;
use std::option::Option::None;

use aws_config::default_provider::credentials::DefaultCredentialsChain;
use aws_credential_types::provider::ProvideCredentials;
use aws_sdk_s3::config::Region;
use aws_sdk_s3::primitives::ByteStream;
use bytes::Bytes;
use common::*;
use futures::StreamExt;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientAuthConfig, S3ClientConfig};
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::error::ObjectClientError;
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::S3RequestError;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_crt::auth::credentials::{CredentialsProvider, CredentialsProviderStaticOptions};
use mountpoint_s3_crt::common::allocator::Allocator;
use rusty_fork::rusty_fork_test;
use tempfile::NamedTempFile;

/// Test creating a client with the static credentials provider
#[tokio::test]
async fn test_static_provider() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_static_provider");

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
        .expect("static credentials should be available");

    // Build a S3CrtClient that uses a static credentials provider with the creds we just got
    let config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: credentials.secret_access_key(),
        session_token: credentials.session_token(),
    };
    let provider = CredentialsProvider::new_static(&Allocator::default(), config).unwrap();
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(provider))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;

    // Try it again but corrupt the credentials so that we know they're actually being used. The
    // client doesn't check anything about access key IDs, so the request will get sent, but fails.
    let bogus_access_key_id = credentials.access_key_id().split_at(10).0;
    let config = CredentialsProviderStaticOptions {
        access_key_id: bogus_access_key_id,
        secret_access_key: credentials.secret_access_key(),
        session_token: credentials.session_token(),
    };
    let provider = CredentialsProvider::new_static(&Allocator::default(), config).unwrap();
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(provider))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

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
async fn test_profile_provider_static_async() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_profile_provider_static");

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
        .expect("static credentials should be available");

    // Write the credentials in CLI config format into a temp file. The ordering is a little funny
    // because we'll be truncating the access key ID later, so we want it last in the file.
    let profile_name = "mountpoint-profile";
    let mut config_file = NamedTempFile::new().unwrap();
    writeln!(config_file, "[profile {}]", profile_name).unwrap();
    if let Some(session_token) = credentials.session_token() {
        writeln!(config_file, "aws_session_token = {}", session_token).unwrap()
    }
    writeln!(
        config_file,
        "aws_secret_access_key = {}",
        credentials.secret_access_key()
    )
    .unwrap();
    writeln!(config_file, "aws_access_key_id = {}", credentials.access_key_id()).unwrap();

    // Set up the environment variables to use this new config file. This is only OK to do because
    // this test is run in a forked process, so won't affect any other concurrently running tests.
    std::env::set_var("AWS_CONFIG_FILE", config_file.path().as_os_str());

    // Build a S3CrtClient that uses the config file
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Profile(profile_name.to_owned()))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;

    // Try it again but corrupt the credentials so that we know they're actually being used. The
    // client doesn't check anything about access key IDs, so the request will get sent, but fails.
    let length = config_file.as_file().metadata().unwrap().len();
    config_file.as_file_mut().set_len(length - 5).unwrap();

    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Profile(profile_name.to_owned()))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

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
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Profile("not-the-right-profile-name".to_owned()))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let _result = S3CrtClient::new(config).expect_err("profile doesn't exist");
}

async fn test_profile_provider_assume_role_async() {
    let sdk_client = get_test_sdk_client().await;
    let subsession_role = get_subsession_iam_role();
    let (bucket, prefix) = get_test_bucket_and_prefix("test_profile_provider_assume_role");

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

    let profile_name = "mountpoint-profile";
    let source_profile = "default";
    let mut config_file = NamedTempFile::new().unwrap();
    writeln!(config_file, "[profile {}]", profile_name).unwrap();

    // Set up the environment variables to use this new config file. This is only OK to do because
    // this test is run in a forked process, so won't affect any other concurrently running tests.
    std::env::set_var("AWS_CONFIG_FILE", config_file.path().as_os_str());

    // Credentials are provided as environment variables when running on GitHub Actions,
    // so we will have to build a credentials file from those variables if they exist, otherwise
    // we are going to use default profile from the test instance.
    let _credentials_file = get_credentials_from_env().map(|credentials| {
        let mut credentials_file = NamedTempFile::new().unwrap();
        writeln!(credentials_file, "[{}]", source_profile).unwrap();
        writeln!(credentials_file, "aws_access_key_id={}", credentials.access_key_id()).unwrap();
        writeln!(
            credentials_file,
            "aws_secret_access_key={}",
            credentials.secret_access_key()
        )
        .unwrap();
        if let Some(session_token) = credentials.session_token() {
            writeln!(credentials_file, "aws_session_token={session_token}").unwrap();
        }
        std::env::remove_var("AWS_ACCESS_KEY_ID");
        std::env::remove_var("AWS_SECRET_ACCESS_KEY");
        std::env::remove_var("AWS_SESSION_TOKEN");
        std::env::set_var("AWS_SHARED_CREDENTIALS_FILE", credentials_file.path().as_os_str());
        credentials_file
    });

    // First, verify that we can use this profile for the client but the request should fail because
    // we did not configure which arn to assume yet.
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Profile(profile_name.to_owned()))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let mut request = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should be sent");

    let _error = request.next().await.unwrap().expect_err("role arn is not set");

    // Build a S3CrtClient that uses the right config, now the request should succeed.
    writeln!(config_file, "role_arn = {}", subsession_role).unwrap();
    writeln!(config_file, "source_profile = {}", source_profile).unwrap();
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Profile(profile_name.to_owned()))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;
}

rusty_fork_test! {
    #[test]
    fn test_profile_provider_static() {
        // rusty_fork doesn't support async tests, so build an SDK-usable runtime manually
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_profile_provider_static_async());
    }

    #[test]
    fn test_profile_provider_assume_role() {
        // rusty_fork doesn't support async tests, so build an SDK-usable runtime manually
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_profile_provider_assume_role_async());
    }
}

/// Test using a client with scoped-down credentials
#[tokio::test]
// S3 Express One Zone doesn't support scoped credentials
#[cfg(not(feature = "s3express_tests"))]
async fn test_scoped_credentials() {
    use aws_config::BehaviorVersion;

    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_scoped_credentials");
    let subsession_role = get_subsession_iam_role();

    for key in ["foo/foo.txt", "bar/bar.txt", "baz.txt"] {
        sdk_client
            .put_object()
            .bucket(&bucket)
            .key(&format!("{prefix}{key}"))
            .body(ByteStream::from(Bytes::from_static(b"hello world")))
            .send()
            .await
            .unwrap();
    }

    let config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(get_test_region()))
        .load()
        .await;
    let sts_client = aws_sdk_sts::Client::new(&config);

    // Scope down to the `foo` prefix
    let policy = r#"{"Statement": [
    {"Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::__BUCKET__/__PREFIX__/*"},
    {"Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::__BUCKET__", "Condition": {"StringLike": {"s3:prefix": "__PREFIX__/*"}}}
]}"#;
    let policy = policy
        .replace("__BUCKET__", &bucket)
        .replace("__PREFIX__", &format!("{prefix}foo"));
    let credentials = sts_client
        .assume_role()
        .role_arn(subsession_role)
        .role_session_name("test_scoped_credentials")
        .policy(policy)
        .send()
        .await
        .unwrap();
    let credentials = credentials.credentials().unwrap();

    // Build a S3CrtClient that uses a static credentials provider with the creds we just got
    let config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: credentials.secret_access_key(),
        session_token: Some(credentials.session_token()),
    };
    let provider = CredentialsProvider::new_static(&Allocator::default(), config).unwrap();
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(provider))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    // Inside the prefix, things should be fine
    let _result = client
        .get_object(&bucket, &format!("{prefix}foo/foo.txt"), None, None)
        .await
        .expect("get_object should succeed");
    let _result = client
        .list_objects(&bucket, None, "/", 10, &format!("{prefix}foo/"))
        .await
        .expect("list_objects_should_succeed");

    // Outside the prefix, requests should fail with permissions errors
    let mut request = client
        .get_object(&bucket, &format!("{prefix}baz.txt"), None, None)
        .await
        .expect("request should be sent");
    let err = request
        .next()
        .await
        .unwrap()
        .expect_err("should fail in different prefix");
    assert!(matches!(
        err,
        ObjectClientError::ClientError(S3RequestError::Forbidden(_))
    ));
    let err = client
        .list_objects(&bucket, None, "/", 10, &format!("{prefix}/"))
        .await
        .expect_err("should fail in different prefix");
    assert!(matches!(
        err,
        ObjectClientError::ClientError(S3RequestError::Forbidden(_))
    ));
}
