//! Tests for the number of attempts the client makes, against a local mock server.
//!
//! Each test runs in a forked process because `AWS_MAX_ATTEMPTS` is process-global.

use std::num::NonZeroUsize;
use std::time::Duration;

use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, Uri,
};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{NewClientError, ObjectClient, S3CrtClient};
use rusty_fork::rusty_fork_test;
use wiremock::matchers::{method, path};
use wiremock::{Mock, MockServer, ResponseTemplate};

const BUCKET: &str = "test-bucket";
const KEY: &str = "test-key";

const INTERNAL_ERROR_BODY: &str = r#"<?xml version="1.0" encoding="UTF-8"?>
<Error>
    <Code>InternalError</Code>
    <Message>We encountered an internal error. Please try again.</Message>
    <RequestId>4442587FB7D0A2F9</RequestId>
</Error>"#;

/// The operation sent to the mock server, which fails every request with a retryable error.
#[derive(Debug, Clone, Copy)]
enum Operation {
    /// `ListObjectsV2`, failing with 500 InternalError.
    ListObjects,
    /// `HeadObject`, failing with 503 (no body, as S3 does for HEAD).
    HeadObject,
}

/// Set `AWS_MAX_ATTEMPTS` to `value`, or unset it.
fn set_env_max_attempts(value: Option<&str>) {
    // SAFETY: each test runs in its own forked process, before any other thread reads the environment.
    unsafe {
        match value {
            Some(value) => std::env::set_var("AWS_MAX_ATTEMPTS", value),
            None => std::env::remove_var("AWS_MAX_ATTEMPTS"),
        }
    }
}

/// Check that creating a client fails with `AWS_MAX_ATTEMPTS` set to `value`.
fn assert_env_max_attempts_rejected(value: &str) {
    set_env_max_attempts(Some(value));
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::NoSigning)
        .max_attempts(NonZeroUsize::new(2).unwrap());
    let error = S3CrtClient::new(config).expect_err("client creation should fail");
    assert!(
        matches!(&error, NewClientError::InvalidConfiguration(message) if message.contains("AWS_MAX_ATTEMPTS")),
        "unexpected error for AWS_MAX_ATTEMPTS={value:?}: {error:?}"
    );
}

/// Count the requests the client sends for one failing call of `operation`, with `AWS_MAX_ATTEMPTS`
/// set to `env_max_attempts` (or unset) and the client configured with `config_max_attempts`.
fn count_attempts(
    operation: Operation,
    env_max_attempts: Option<&str>,
    config_max_attempts: Option<NonZeroUsize>,
) -> usize {
    set_env_max_attempts(env_max_attempts);

    let runtime = tokio::runtime::Builder::new_multi_thread()
        .worker_threads(2)
        .enable_all()
        .build()
        .expect("tokio runtime");

    runtime.block_on(async {
        let server = MockServer::start().await;
        Mock::given(method("GET"))
            .and(path(format!("/{BUCKET}/")))
            .respond_with(ResponseTemplate::new(500).set_body_string(INTERNAL_ERROR_BODY))
            .mount(&server)
            .await;
        Mock::given(method("HEAD"))
            .and(path(format!("/{BUCKET}/{KEY}")))
            .respond_with(ResponseTemplate::new(503))
            .mount(&server)
            .await;

        let endpoint = Uri::new_from_str(&Allocator::default(), server.uri()).expect("valid uri");
        let endpoint_config = EndpointConfig::new("us-east-1")
            .addressing_style(AddressingStyle::Path)
            .endpoint(endpoint);
        let mut config = S3ClientConfig::new()
            .endpoint_config(endpoint_config)
            .auth_config(S3ClientAuthConfig::NoSigning);
        if let Some(max_attempts) = config_max_attempts {
            config = config.max_attempts(max_attempts);
        }
        let client = S3CrtClient::new(config).expect("create client");

        // Generous bound: retries back off for at most a few seconds with the attempt counts used here.
        let timeout = Duration::from_secs(60);
        match operation {
            Operation::ListObjects => {
                let result = tokio::time::timeout(timeout, client.list_objects(BUCKET, None, "/", 1000, ""))
                    .await
                    .expect("request should finish");
                result.expect_err("request should fail");
            }
            Operation::HeadObject => {
                let result = tokio::time::timeout(timeout, client.head_object(BUCKET, KEY, &HeadObjectParams::new()))
                    .await
                    .expect("request should finish");
                result.expect_err("request should fail");
            }
        }

        server.received_requests().await.expect("recording is enabled").len()
    })
}

rusty_fork_test! {
    #[test]
    fn single_attempt_from_config_does_not_retry_list() {
        assert_eq!(count_attempts(Operation::ListObjects, None, NonZeroUsize::new(1)), 1);
    }

    #[test]
    fn single_attempt_from_config_does_not_retry_head() {
        assert_eq!(count_attempts(Operation::HeadObject, None, NonZeroUsize::new(1)), 1);
    }

    #[test]
    fn single_attempt_from_env_does_not_retry() {
        // The environment variable overrides the configured value.
        assert_eq!(count_attempts(Operation::ListObjects, Some("1"), NonZeroUsize::new(5)), 1);
    }

    #[test]
    fn two_attempts_from_config_retry_once() {
        assert_eq!(count_attempts(Operation::ListObjects, None, NonZeroUsize::new(2)), 2);
        assert_eq!(count_attempts(Operation::HeadObject, None, NonZeroUsize::new(2)), 2);
    }

    #[test]
    fn three_attempts_from_env_retry_twice() {
        assert_eq!(count_attempts(Operation::ListObjects, Some("3"), NonZeroUsize::new(5)), 3);
    }

    #[test]
    fn default_is_three_attempts() {
        assert_eq!(count_attempts(Operation::ListObjects, None, None), 3);
    }

    #[test]
    fn zero_env_value_is_rejected() {
        assert_env_max_attempts_rejected("0");
    }

    #[test]
    fn negative_env_value_is_rejected() {
        assert_env_max_attempts_rejected("-1");
    }

    #[test]
    fn non_numeric_env_value_is_rejected() {
        assert_env_max_attempts_rejected("many");
    }

    #[test]
    fn empty_env_value_is_rejected() {
        assert_env_max_attempts_rejected("");
    }
}
