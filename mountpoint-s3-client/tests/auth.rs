#![cfg(feature = "s3_tests")]

pub mod common;

use std::io::Write;
use std::option::Option::None;

use aws_credential_types::Credentials;
use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use futures::StreamExt;
use mountpoint_s3_client::{
    EndpointConfig, ObjectClient, ObjectClientError, S3ClientAuthConfig, S3ClientConfig, S3CrtClient, S3RequestError,
};
use mountpoint_s3_crt::auth::credentials::{
    CredentialsProvider, CredentialsProviderProfileOptions, CredentialsProviderStaticOptions,
};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::io::channel_bootstrap;
use mountpoint_s3_crt::io::event_loop;
use mountpoint_s3_crt::io::host_resolver;
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

    // Get some static credentials using the SDK's default provider chain
    let credentials = get_sdk_default_chain_creds().await;

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
    // client can't tell that the corrupted secret access key is invalid, so the request gets sent,
    // but fails.
    let bogus_secret_access_key = credentials.secret_access_key().split_at(5).0;
    let config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: bogus_secret_access_key,
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

/// Test creating a client with the default credentials provider with a profile name override
///
/// This is complicated because CLI profiles are inherently global state, but we want to isolate the
/// test. So the [test_default_chain_with_profile_override] test below is forked into its own process, where it can set
/// the environment variables it needs to point to an isolated CLI configuration file without
/// affecting the rest of the real test runner.
///
/// This test will cover the following three cases:
/// * Default chain with valid AWS profile credential configuration
/// * Default chain with invalid AWS profile credential configuration
/// * Default chain with existing profile but no credential configuration, falling back on the rest of credential chain
async fn test_default_chain_custom_profile_provider_async() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_default_chain_custom_profile_provider");

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

    // Create a new config file where we can write new AWS profile configurations including credentials.
    // Environment variables will be updated to point to this new file.
    // This is OK only because the test runs in a forked process and won't affect any other concurrently running tests.
    let mut config_file = NamedTempFile::new().unwrap();
    // Set up the environment variables to use this new config file. This is only OK to do because
    // this test is run in a forked process, so won't affect any other concurrently running tests.
    std::env::set_var("AWS_CONFIG_FILE", config_file.path().as_os_str());

    // Get some static credentials using the SDK's default provider chain
    let credentials = get_sdk_default_chain_creds().await;
    let profile_name = "mountpoint-profile";
    write_credentials_to_named_profile(&mut config_file, profile_name, credentials).await;

    // Build a S3CrtClient that uses the new profile
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::DefaultChain {
            profile_name_override: Some(profile_name.to_owned()),
        })
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;

    // Try it again, but this time we'll use a profile with credentials that cannot access the object.
    // This way, we know the test isn't passing by accident.
    let profile_name = "mountpoint-bad-profile";
    let policy = r#"{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Deny",
                "Action": [ "s3:GetObject" ],
                "Resource": "*"
            }
        ]
    }"#;
    let scoped_down_creds = get_scoped_down_credentials(policy.to_owned()).await;
    write_credentials_to_named_profile(&mut config_file, profile_name, scoped_down_creds).await;

    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::DefaultChain {
            profile_name_override: Some(profile_name.to_owned()),
        })
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let mut request = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should be accepted by CRT");
    let _error = request
        .next()
        .await
        .unwrap()
        .expect_err("first GET for profile with no permissions should not work");

    // Finally, try a profile with no credentials which should follow the rest of the chain.
    let profile_name = "profile-with-no-creds-config";
    writeln!(&config_file, "[profile {profile_name}]").unwrap();
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::DefaultChain {
            profile_name_override: Some(profile_name.to_owned()),
        })
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;
}

/// Test creating a client with the profile credentials provider
///
/// This is complicated because CLI profiles are inherently global state, but we want to isolate the
/// test. So the [test_profile_provider] test below is forked into its own process, where it can set
/// the environment variables it needs to point to an isolated CLI configuration file without
/// affecting the rest of the real test runner.
async fn test_profile_only_provider_async() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_profile_only_provider");

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

    // Get some static credentials using the SDK's default provider chain
    let credentials = get_sdk_default_chain_creds().await;

    // Write the credentials in CLI config format into a temp file
    let mut config_file = NamedTempFile::new().unwrap();
    let profile_name = "mountpoint-profile";
    write_credentials_to_named_profile(&mut config_file, profile_name, credentials).await;

    // Set up the environment variables to use this new config file. This is only OK to do because
    // this test is run in a forked process, so won't affect any other concurrently running tests.
    std::env::set_var("AWS_CONFIG_FILE", config_file.path().as_os_str());

    // Build a S3CrtClient that uses the config file
    let mut client_bootstrap = setup_crt_bootstrap();
    let profile_provider = CredentialsProvider::new_profile(
        &Allocator::default(),
        CredentialsProviderProfileOptions {
            bootstrap: &mut client_bootstrap,
            profile_name_override: profile_name,
        },
    )
    .unwrap();

    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(profile_provider))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;

    // Try it again, but this time we'll use a profile that cannot access the object.
    // This way, we know the test isn't passing by accident.
    let profile_name = "mountpoint-bad-profile";
    let policy = r#"{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Deny",
                "Action": [ "s3:GetObject" ],
                "Resource": "*"
            }
        ]
    }"#;

    let scoped_down_creds = get_scoped_down_credentials(policy.to_owned()).await;
    write_credentials_to_named_profile(&mut config_file, profile_name, scoped_down_creds).await;

    let profile_provider = CredentialsProvider::new_profile(
        &Allocator::default(),
        CredentialsProviderProfileOptions {
            bootstrap: &mut client_bootstrap,
            profile_name_override: profile_name,
        },
    )
    .unwrap();

    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(profile_provider))
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(config).unwrap();

    let mut request = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should be accepted by CRT");
    let _error = request
        .next()
        .await
        .unwrap()
        .expect_err("first GET for profile with no permissions should not work");

    // Try it again with a bogus profile name. The profile provider alone should not return any credentials.
    // It shouldn't be possible to even construct the credential provider.
    CredentialsProvider::new_profile(
        &Allocator::default(),
        CredentialsProviderProfileOptions {
            bootstrap: &mut client_bootstrap,
            profile_name_override: "not-the-right-profile-name",
        },
    )
    .expect_err("cannot create provider if profile doesn't exist");
}

fn setup_crt_bootstrap() -> channel_bootstrap::ClientBootstrap {
    let allocator = Allocator::default();

    let mut event_loop_group = event_loop::EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

    let resolver_options = host_resolver::HostResolverDefaultOptions {
        max_entries: 8,
        event_loop_group: &mut event_loop_group,
    };

    let mut host_resolver = host_resolver::HostResolver::new_default(&allocator, &resolver_options).unwrap();

    let bootstrap_options = channel_bootstrap::ClientBootstrapOptions {
        event_loop_group: &mut event_loop_group,
        host_resolver: &mut host_resolver,
    };

    channel_bootstrap::ClientBootstrap::new(&allocator, &bootstrap_options).unwrap()
}

/// Takes something writable (such as an open file) and writes a new entry for the given name and SDK credentials.
async fn write_credentials_to_named_profile<B: std::io::Write>(
    mut config_buffer: B,
    profile_name: &str,
    credentials: Credentials,
) {
    writeln!(config_buffer, "[profile {profile_name}]").unwrap();
    writeln!(config_buffer, "aws_access_key_id = {}", credentials.access_key_id()).unwrap();
    writeln!(
        config_buffer,
        "aws_secret_access_key = {}",
        credentials.secret_access_key()
    )
    .unwrap();
    if let Some(session_token) = credentials.session_token() {
        writeln!(config_buffer, "aws_session_token = {}", session_token).unwrap();
    }
}

rusty_fork_test! {
    #[test]
    fn test_profile_only_provider() {
        // rusty_fork doesn't support async tests, so build an SDK-usable runtime manually
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_profile_only_provider_async());
    }

    #[test]
    fn test_default_chain_with_profile_override() {
        // rusty_fork doesn't support async tests, so build an SDK-usable runtime manually
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_default_chain_custom_profile_provider_async());
    }
}

/// Test using a client with scoped-down credentials
#[tokio::test]
async fn test_scoped_credentials() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_scoped_credentials");

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

    // Scope down to the `foo` prefix
    let policy = r#"{"Statement": [
    {"Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::__BUCKET__/__PREFIX__/*"},
    {"Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::__BUCKET__", "Condition": {"StringLike": {"s3:prefix": "__PREFIX__/*"}}}
]}"#;
    let policy = policy
        .replace("__BUCKET__", &bucket)
        .replace("__PREFIX__", &format!("{prefix}foo"));
    let credentials = get_scoped_down_credentials(policy).await;

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
