//! An S3 client from the AWS SDK for Rust, configured from the same options as Mountpoint's CRT
//! client, so that requests sent through either client go to the same endpoint and carry the same
//! request-level settings.
//!
//! The SDK client is configured explicitly from these options only. It does not load the SDK's
//! shared configuration (`aws_config::load_defaults`), which would read the region, endpoint and
//! other settings from the SDK's own environment variables and profile files.

use aws_sdk_s3::config::{
    BehaviorVersion, Region, RequestChecksumCalculation, ResponseChecksumValidation, SharedCredentialsProvider,
    StalledStreamProtectionConfig,
};
use mountpoint_s3_client::config::{AddressingStyle, Allocator, EndpointConfig, Uri};
use thiserror::Error;

/// How the SDK client authenticates its requests.
#[derive(Debug, Clone)]
pub enum SdkClientAuth {
    /// Sign requests with credentials from the given provider. For S3 Express One Zone buckets, the
    /// SDK uses these credentials to create sessions, and signs requests with the session credentials.
    Provider(SharedCredentialsProvider),
    /// Send requests unsigned (anonymous access).
    NoSigning,
}

/// Configuration for an S3 client from the AWS SDK for Rust, built with [build_sdk_client].
///
/// The options mirror those of the CRT client's
/// [S3ClientConfig](mountpoint_s3_client::config::S3ClientConfig) that affect where requests go
/// and how they are authenticated.
#[derive(Debug, Clone)]
pub struct SdkClientConfig {
    endpoint_config: EndpointConfig,
    auth: SdkClientAuth,
}

impl SdkClientConfig {
    /// Create a configuration for clients that resolve endpoints from `endpoint_config` and
    /// authenticate requests with `auth`.
    pub fn new(endpoint_config: EndpointConfig, auth: SdkClientAuth) -> Self {
        Self { endpoint_config, auth }
    }
}

/// Errors returned by [build_sdk_client].
#[derive(Debug, Error)]
pub enum SdkClientError {
    /// The endpoint URL from the `AWS_ENDPOINT_URL` environment variable could not be parsed.
    #[error("invalid S3 endpoint")]
    InvalidEndpoint(#[source] Box<dyn std::error::Error + Send + Sync>),
    /// The endpoint URL in [EndpointConfig] is not valid UTF-8.
    #[error("the S3 endpoint URL is not valid UTF-8")]
    EndpointNotUtf8,
}

/// Build an S3 client from the AWS SDK for Rust with the given configuration.
///
/// The client resolves endpoints from the region, FIPS, dual-stack, transfer acceleration and
/// addressing style in [EndpointConfig], and from its endpoint URL or, if it has none, the
/// `AWS_ENDPOINT_URL` environment variable.
///
/// The client also sets:
/// * a pinned [BehaviorVersion], so that SDK upgrades don't change its defaults silently;
/// * request checksums and response checksum validation only when an operation requires them;
/// * no stalled-stream protection;
/// * session authentication for S3 Express One Zone buckets, whatever the value of
///   `AWS_S3_DISABLE_EXPRESS_SESSION_AUTH`.
///
/// The client's futures need a Tokio runtime to run on. Building the client doesn't need one.
///
/// # Errors
///
/// Returns [SdkClientError::InvalidEndpoint] if `AWS_ENDPOINT_URL` is used and can't be parsed,
/// and [SdkClientError::EndpointNotUtf8] if the endpoint URL in [EndpointConfig] isn't valid UTF-8.
pub fn build_sdk_client(config: &SdkClientConfig) -> Result<aws_sdk_s3::Client, SdkClientError> {
    let endpoint_config = &config.endpoint_config;
    let mut builder = aws_sdk_s3::Config::builder()
        .behavior_version(BehaviorVersion::v2026_01_12())
        .region(Region::new(endpoint_config.get_region().to_owned()))
        .use_fips(endpoint_config.get_fips())
        .use_dual_stack(endpoint_config.get_dual_stack())
        .accelerate(endpoint_config.get_accelerate())
        .force_path_style(endpoint_config.get_addressing_style() == AddressingStyle::Path)
        .request_checksum_calculation(RequestChecksumCalculation::WhenRequired)
        .response_checksum_validation(ResponseChecksumValidation::WhenRequired)
        .stalled_stream_protection(StalledStreamProtectionConfig::disabled())
        // When unset, the SDK reads `AWS_S3_DISABLE_EXPRESS_SESSION_AUTH` from the environment.
        // Requests to S3 Express One Zone buckets are always signed with session credentials.
        .disable_s3_express_session_auth(false);

    if let Some(endpoint_url) = endpoint_url(endpoint_config)? {
        builder = builder.endpoint_url(endpoint_url);
    }

    builder = match &config.auth {
        SdkClientAuth::Provider(provider) => builder.credentials_provider(provider.clone()),
        SdkClientAuth::NoSigning => builder.allow_no_auth(),
    };

    Ok(aws_sdk_s3::Client::from_conf(builder.build()))
}

/// The endpoint URL to use: the one in `endpoint_config` or, if it has none, the value of
/// `AWS_ENDPOINT_URL`, if set and valid Unicode.
///
/// A non-empty path gets a trailing `/`: with path-style addressing, the SDK's endpoint rules
/// append the bucket to the endpoint's path without a separator (`/base` and `bucket` to
/// `/basebucket`).
fn endpoint_url(endpoint_config: &EndpointConfig) -> Result<Option<String>, SdkClientError> {
    let uri = match endpoint_config.get_endpoint() {
        Some(uri) => uri,
        None => match std::env::var("AWS_ENDPOINT_URL") {
            Ok(url) => Uri::new_from_str(&Allocator::default(), &url)
                .map_err(|e| SdkClientError::InvalidEndpoint(Box::new(e)))?,
            Err(_) => return Ok(None),
        },
    };
    let mut url = uri
        .as_os_str()
        .to_str()
        .ok_or(SdkClientError::EndpointNotUtf8)?
        .to_owned();
    let path = uri.path().as_encoded_bytes();
    if !path.is_empty() && !path.ends_with(b"/") {
        url.push('/');
    }
    Ok(Some(url))
}

#[cfg(test)]
mod tests {
    //! Tests that the SDK client resolves the same endpoints as the CRT client configured from the
    //! same options.
    //!
    //! Endpoints are compared without sending anything over the network: the CRT side is its endpoint
    //! resolution ([EndpointConfig::resolve_for_bucket], which the CRT client uses to build every
    //! request), and the SDK side is the request the SDK client sends to an HTTP client that records it
    //! and answers `200 OK`.

    use std::sync::{Arc, Mutex};

    use aws_sdk_s3::config::http::{HttpRequest, HttpResponse};
    use aws_sdk_s3::config::{Credentials, HttpClient, IntoShared, RuntimeComponents};
    use aws_sdk_s3::primitives::SdkBody;
    use aws_smithy_runtime_api::client::http::{
        HttpConnector, HttpConnectorFuture, HttpConnectorSettings, SharedHttpConnector,
    };
    use aws_smithy_runtime_api::http::StatusCode;
    use mountpoint_s3_client::config::S3ClientConfig;
    use mountpoint_s3_client::{NewClientError, S3CrtClient};
    use rusty_fork::rusty_fork_test;
    use test_case::test_case;

    use super::*;

    const BUCKET: &str = "amzn-s3-demo-bucket";
    const KEY: &str = "dir/key";
    const ACCESS_KEY_ID: &str = "AKIAIOSFODNN7EXAMPLE";
    const SECRET_ACCESS_KEY: &str = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

    /// Where a request goes and how it is signed.
    #[derive(Debug, PartialEq, Eq)]
    struct ResolvedRequest {
        /// Scheme, authority and path of the request for [KEY].
        url: String,
        /// Region and service name in the SigV4 credential scope.
        signing_scope: Option<(String, String)>,
    }

    /// The CRT client's request for `key` in `bucket`: the resolved endpoint URL followed by
    /// `/<key>`, as in `S3CrtClient`'s request templates, and the region and name of its auth scheme.
    fn crt_request(endpoint_config: &EndpointConfig, bucket: &str, key: &str) -> Result<ResolvedRequest, String> {
        let resolved = endpoint_config
            .resolve_for_bucket(bucket)
            .map_err(|e| format!("{e:?}"))?;
        let uri = resolved.uri().map_err(|e| format!("{e:?}"))?;
        let auth_scheme = resolved.auth_scheme().map_err(|e| format!("{e:?}"))?;
        let url = format!(
            "{}://{}{}/{key}",
            uri.scheme().to_str().unwrap(),
            uri.authority().to_str().unwrap(),
            uri.path().to_str().unwrap(),
        );
        Ok(ResolvedRequest {
            url,
            signing_scope: Some((
                auth_scheme.signing_region().to_owned(),
                auth_scheme.signing_name().to_owned(),
            )),
        })
    }

    /// The SDK client's HeadObject request for `key` in `bucket`, captured before it is sent.
    async fn sdk_request(config: &SdkClientConfig, bucket: &str, key: &str) -> Result<ResolvedRequest, String> {
        let client = build_sdk_client(config).map_err(|e| format!("{e:?}"))?;
        let http_client = CapturingHttpClient::default();
        let requests = http_client.requests.clone();
        let client = aws_sdk_s3::Client::from_conf(client.config().to_builder().http_client(http_client).build());
        client
            .head_object()
            .bucket(bucket)
            .key(key)
            .send()
            .await
            .map_err(|e| error_chain(&e))?;
        let requests = requests.lock().unwrap();
        assert_eq!(requests.len(), 1, "expected a single request, got {requests:?}");
        let request = &requests[0];
        let url = request.uri.split('?').next().unwrap().to_owned();
        let signing_scope = request.header("authorization").map(|authorization| {
            // AWS4-HMAC-SHA256 Credential=<key id>/<date>/<region>/<service>/aws4_request, ...
            let credential = authorization
                .split("Credential=")
                .nth(1)
                .and_then(|c| c.split(',').next())
                .unwrap_or_else(|| panic!("unexpected authorization header: {authorization}"));
            let parts: Vec<&str> = credential.split('/').collect();
            (parts[2].to_owned(), parts[3].to_owned())
        });
        Ok(ResolvedRequest { url, signing_scope })
    }

    fn error_chain<E: std::error::Error>(error: &E) -> String {
        let mut message = error.to_string();
        let mut source = error.source();
        while let Some(e) = source {
            message.push_str(": ");
            message.push_str(&e.to_string());
            source = e.source();
        }
        message
    }

    /// A request recorded by [CapturingHttpClient].
    #[derive(Debug, Clone)]
    struct CapturedRequest {
        uri: String,
        headers: Vec<(String, String)>,
    }

    impl CapturedRequest {
        fn header(&self, name: &str) -> Option<&str> {
            self.headers
                .iter()
                .find(|(n, _)| n.eq_ignore_ascii_case(name))
                .map(|(_, v)| v.as_str())
        }
    }

    /// The requests recorded by a [CapturingHttpClient].
    type CapturedRequests = Arc<Mutex<Vec<CapturedRequest>>>;

    /// An HTTP client that records every request and answers `200 OK` with an empty body.
    #[derive(Debug, Clone, Default)]
    struct CapturingHttpClient {
        requests: CapturedRequests,
    }

    impl HttpConnector for CapturingHttpClient {
        fn call(&self, request: HttpRequest) -> HttpConnectorFuture {
            let captured = CapturedRequest {
                uri: request.uri().to_owned(),
                headers: request
                    .headers()
                    .iter()
                    .map(|(n, v)| (n.to_owned(), v.to_owned()))
                    .collect(),
            };
            self.requests.lock().unwrap().push(captured);
            let response = HttpResponse::new(StatusCode::try_from(200).unwrap(), SdkBody::empty());
            HttpConnectorFuture::ready(Ok(response))
        }
    }

    impl HttpClient for CapturingHttpClient {
        fn http_connector(
            &self,
            _settings: &HttpConnectorSettings,
            _components: &RuntimeComponents,
        ) -> SharedHttpConnector {
            self.clone().into_shared()
        }
    }

    fn static_credentials() -> SdkClientAuth {
        let credentials = Credentials::new(ACCESS_KEY_ID, SECRET_ACCESS_KEY, None, None, "test");
        SdkClientAuth::Provider(SharedCredentialsProvider::new(credentials))
    }

    fn endpoint(url: &str) -> Uri {
        Uri::new_from_str(&Allocator::default(), url).unwrap()
    }

    /// Assert that both clients resolve `endpoint_config` and `bucket` to `expected_url` (or both fail
    /// to resolve them, if `None`), with the same signing scope.
    async fn assert_endpoint_parity(endpoint_config: EndpointConfig, bucket: &str, expected_url: Option<&str>) {
        let crt = crt_request(&endpoint_config, bucket, KEY);
        let sdk = sdk_request(
            &SdkClientConfig::new(endpoint_config, static_credentials()),
            bucket,
            KEY,
        )
        .await;
        match expected_url {
            Some(expected_url) => {
                let crt = crt.expect("CRT endpoint resolution should succeed");
                let sdk = sdk.expect("SDK request should succeed");
                assert_eq!(crt.url, expected_url);
                assert_eq!(sdk, crt);
            }
            None => {
                assert!(crt.is_err(), "CRT endpoint resolution should fail, got {crt:?}");
                assert!(sdk.is_err(), "SDK request should fail, got {sdk:?}");
            }
        }
    }

    #[test_case(EndpointConfig::new("us-east-1"), BUCKET, Some("https://amzn-s3-demo-bucket.s3.us-east-1.amazonaws.com/dir/key"); "region us-east-1")]
    #[test_case(EndpointConfig::new("eu-west-1"), BUCKET, Some("https://amzn-s3-demo-bucket.s3.eu-west-1.amazonaws.com/dir/key"); "region eu-west-1")]
    #[test_case(EndpointConfig::new("cn-north-1"), BUCKET, Some("https://amzn-s3-demo-bucket.s3.cn-north-1.amazonaws.com.cn/dir/key"); "region in the China partition")]
    #[test_case(EndpointConfig::new("us-gov-west-1"), BUCKET, Some("https://amzn-s3-demo-bucket.s3.us-gov-west-1.amazonaws.com/dir/key"); "region in the GovCloud partition")]
    #[test_case(EndpointConfig::new("not a region"), BUCKET, None; "invalid region")]
    #[test_case(EndpointConfig::new("eu-west-1"), "amzn.s3.demo.bucket", Some("https://s3.eu-west-1.amazonaws.com/amzn.s3.demo.bucket/dir/key"); "automatic addressing, bucket with dots")]
    #[test_case(EndpointConfig::new("eu-west-1").addressing_style(AddressingStyle::Path), BUCKET, Some("https://s3.eu-west-1.amazonaws.com/amzn-s3-demo-bucket/dir/key"); "path style")]
    #[test_case(EndpointConfig::new("eu-west-1").use_dual_stack(true), BUCKET, Some("https://amzn-s3-demo-bucket.s3.dualstack.eu-west-1.amazonaws.com/dir/key"); "dual-stack")]
    #[test_case(EndpointConfig::new("eu-west-1").use_dual_stack(true).addressing_style(AddressingStyle::Path), BUCKET, Some("https://s3.dualstack.eu-west-1.amazonaws.com/amzn-s3-demo-bucket/dir/key"); "dual-stack, path style")]
    #[test_case(EndpointConfig::new("eu-west-1").use_accelerate(true), BUCKET, Some("https://amzn-s3-demo-bucket.s3-accelerate.amazonaws.com/dir/key"); "transfer acceleration")]
    #[test_case(EndpointConfig::new("eu-west-1").use_accelerate(true).use_dual_stack(true), BUCKET, Some("https://amzn-s3-demo-bucket.s3-accelerate.dualstack.amazonaws.com/dir/key"); "transfer acceleration, dual-stack")]
    #[test_case(EndpointConfig::new("eu-west-1").use_accelerate(true).addressing_style(AddressingStyle::Path), BUCKET, None; "transfer acceleration, path style")]
    #[test_case(EndpointConfig::new("eu-west-1").use_accelerate(true), "amzn.s3.demo.bucket", None; "transfer acceleration, bucket with dots")]
    #[test_case(EndpointConfig::new("us-east-1").use_fips(true), BUCKET, Some("https://amzn-s3-demo-bucket.s3-fips.us-east-1.amazonaws.com/dir/key"); "FIPS")]
    #[test_case(EndpointConfig::new("us-gov-west-1").use_fips(true), BUCKET, Some("https://amzn-s3-demo-bucket.s3-fips.us-gov-west-1.amazonaws.com/dir/key"); "FIPS, GovCloud")]
    #[test_case(EndpointConfig::new("us-east-1").use_fips(true).use_dual_stack(true), BUCKET, Some("https://amzn-s3-demo-bucket.s3-fips.dualstack.us-east-1.amazonaws.com/dir/key"); "FIPS, dual-stack")]
    #[test_case(EndpointConfig::new("us-east-1").use_fips(true).addressing_style(AddressingStyle::Path), BUCKET, Some("https://s3-fips.us-east-1.amazonaws.com/amzn-s3-demo-bucket/dir/key"); "FIPS, path style")]
    #[test_case(EndpointConfig::new("us-east-1").use_fips(true).use_accelerate(true), BUCKET, None; "FIPS, transfer acceleration")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.com")), BUCKET, Some("https://amzn-s3-demo-bucket.s3.example.com/dir/key"); "endpoint URL")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.com")).addressing_style(AddressingStyle::Path), BUCKET, Some("https://s3.example.com/amzn-s3-demo-bucket/dir/key"); "endpoint URL, path style")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("http://s3.example.com:8080/base")), BUCKET, Some("http://amzn-s3-demo-bucket.s3.example.com:8080/base/dir/key"); "endpoint URL with scheme, port and path")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("http://s3.example.com:8080/base")).addressing_style(AddressingStyle::Path), BUCKET, Some("http://s3.example.com:8080/base/amzn-s3-demo-bucket/dir/key"); "endpoint URL with a path, path style")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.com/")).addressing_style(AddressingStyle::Path), BUCKET, Some("https://s3.example.com/amzn-s3-demo-bucket/dir/key"); "endpoint URL with a trailing slash, path style")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("http://127.0.0.1:9000")), BUCKET, Some("http://127.0.0.1:9000/amzn-s3-demo-bucket/dir/key"); "endpoint URL with an IP address")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("http://127.0.0.1:9000/base")), BUCKET, Some("http://127.0.0.1:9000/base/amzn-s3-demo-bucket/dir/key"); "endpoint URL with an IP address and a path")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.com")).use_dual_stack(true), BUCKET, None; "endpoint URL, dual-stack")]
    #[test_case(EndpointConfig::new("us-east-1").endpoint(endpoint("https://s3.example.com")).use_fips(true), BUCKET, None; "endpoint URL, FIPS")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.com")).use_accelerate(true), BUCKET, None; "endpoint URL, transfer acceleration")]
    #[test_case(EndpointConfig::new("eu-west-1").endpoint(endpoint("not a url")), BUCKET, None; "invalid endpoint URL")]
    #[tokio::test]
    async fn test_endpoint_parity(endpoint_config: EndpointConfig, bucket: &str, expected_url: Option<&str>) {
        assert_endpoint_parity(endpoint_config, bucket, expected_url).await;
    }

    /// With an endpoint URL whose path is only `/` and virtual-hosted addressing, the CRT client
    /// sends `//<key>`, which S3 reads as the key `/<key>`, and the SDK client sends `/<key>`.
    #[tokio::test]
    async fn test_endpoint_url_with_trailing_slash() {
        let endpoint_config = EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.com/"));
        let crt = crt_request(&endpoint_config, BUCKET, KEY).unwrap();
        assert_eq!(crt.url, "https://amzn-s3-demo-bucket.s3.example.com//dir/key");
        let sdk = sdk_request(
            &SdkClientConfig::new(endpoint_config, static_credentials()),
            BUCKET,
            KEY,
        )
        .await
        .unwrap();
        assert_eq!(sdk.url, "https://amzn-s3-demo-bucket.s3.example.com/dir/key");
    }

    #[tokio::test]
    async fn test_no_signing() {
        let config = SdkClientConfig::new(EndpointConfig::new("eu-west-1"), SdkClientAuth::NoSigning);
        let request = sdk_request(&config, BUCKET, KEY)
            .await
            .expect("SDK request should succeed");
        assert_eq!(request.signing_scope, None, "request should not be signed");
    }

    /// The parts of a request received by [HttpServer] that the tests check.
    #[derive(Debug)]
    struct ReceivedRequest {
        /// Whether this is an S3 Express One Zone `CreateSession` request.
        create_session: bool,
        /// Whether the request carries an S3 Express One Zone session token.
        session_token: bool,
    }

    /// A local HTTP server that answers S3 Express One Zone `CreateSession` requests with session
    /// credentials, and every other request with `200 OK` and an empty body.
    struct HttpServer(wiremock::MockServer);

    impl HttpServer {
        async fn start_express() -> Self {
            let server = wiremock::MockServer::start().await;
            wiremock::Mock::given(wiremock::matchers::query_param_contains("session", ""))
                .respond_with(wiremock::ResponseTemplate::new(200).set_body_string(CREATE_SESSION_RESPONSE))
                .with_priority(1)
                .mount(&server)
                .await;
            wiremock::Mock::given(wiremock::matchers::any())
                .respond_with(wiremock::ResponseTemplate::new(200))
                .mount(&server)
                .await;
            Self(server)
        }

        fn uri(&self) -> String {
            self.0.uri()
        }

        /// The requests received so far.
        async fn received_requests(&self) -> Vec<ReceivedRequest> {
            let mut received = Vec::new();
            for request in self.0.received_requests().await.unwrap() {
                received.push(ReceivedRequest {
                    create_session: request.url.query_pairs().any(|(key, _)| key == "session"),
                    session_token: request.headers.contains_key("x-amz-s3session-token"),
                });
            }
            received
        }
    }

    fn block_on<F: Future>(future: F) -> F::Output {
        tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .unwrap()
            .block_on(future)
    }

    /// The URL the CRT client sends requests to, after applying `AWS_ENDPOINT_URL`.
    fn crt_client_url(endpoint_config: EndpointConfig) -> Result<String, String> {
        let client =
            S3CrtClient::new(S3ClientConfig::new().endpoint_config(endpoint_config)).map_err(|e| e.to_string())?;
        crt_request(&client.endpoint_config(), BUCKET, KEY).map(|request| request.url)
    }

    fn sdk_client_url(endpoint_config: EndpointConfig) -> Result<String, String> {
        let config = SdkClientConfig::new(endpoint_config, static_credentials());
        block_on(sdk_request(&config, BUCKET, KEY)).map(|request| request.url)
    }

    // Run in forked processes, as they set environment variables.
    rusty_fork_test! {
        #[test]
        fn test_aws_endpoint_url_env() {
            // SAFETY: the test runs in a forked process, so this doesn't affect other tests.
            unsafe { std::env::set_var("AWS_ENDPOINT_URL", "https://s3.example.com"); }
            let endpoint_config = EndpointConfig::new("eu-west-1");
            let crt_url = crt_client_url(endpoint_config.clone()).unwrap();
            assert_eq!(crt_url, "https://amzn-s3-demo-bucket.s3.example.com/dir/key");
            assert_eq!(sdk_client_url(endpoint_config).unwrap(), crt_url);
        }

        #[test]
        fn test_endpoint_url_takes_precedence_over_env() {
            // SAFETY: the test runs in a forked process, so this doesn't affect other tests.
            unsafe { std::env::set_var("AWS_ENDPOINT_URL", "https://s3.example.com"); }
            let endpoint_config = EndpointConfig::new("eu-west-1").endpoint(endpoint("https://s3.example.org"));
            let crt_url = crt_client_url(endpoint_config.clone()).unwrap();
            assert_eq!(crt_url, "https://amzn-s3-demo-bucket.s3.example.org/dir/key");
            assert_eq!(sdk_client_url(endpoint_config).unwrap(), crt_url);
        }

        #[test]
        fn test_invalid_aws_endpoint_url_env() {
            // SAFETY: the test runs in a forked process, so this doesn't affect other tests.
            unsafe { std::env::set_var("AWS_ENDPOINT_URL", "htp:/bad:url"); }
            let endpoint_config = EndpointConfig::new("eu-west-1");
            let crt_result = S3CrtClient::new(S3ClientConfig::new().endpoint_config(endpoint_config.clone()));
            assert!(matches!(crt_result, Err(NewClientError::InvalidEndpoint(_))));
            let sdk_result = build_sdk_client(&SdkClientConfig::new(endpoint_config, static_credentials()));
            assert!(matches!(sdk_result, Err(SdkClientError::InvalidEndpoint(_))));
        }

        #[test]
        fn test_express_session_auth_env_ignored() {
            // SAFETY: the test runs in a forked process, so this doesn't affect other tests.
            unsafe { std::env::set_var("AWS_S3_DISABLE_EXPRESS_SESSION_AUTH", "true"); }
            let requests = block_on(async {
                let server = HttpServer::start_express().await;
                let config = SdkClientConfig::new(
                    EndpointConfig::new("us-west-2").endpoint(endpoint(&server.uri())),
                    static_credentials(),
                );
                let client = build_sdk_client(&config).unwrap();
                let _ = client.head_object().bucket(EXPRESS_BUCKET).key(KEY).send().await;
                server.received_requests().await
            });
            let create_session: Vec<bool> = requests.iter().map(|request| request.create_session).collect();
            assert_eq!(create_session, [true, false], "the client should still create a session: {requests:?}");
            assert!(requests[1].session_token, "the request should be signed with the session credentials");
        }
    }

    const EXPRESS_BUCKET: &str = "amzn-s3-demo-bucket--usw2-az1--x-s3";

    const CREATE_SESSION_RESPONSE: &str = r#"<?xml version="1.0" encoding="UTF-8"?>
<CreateSessionResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Credentials><SessionToken>TESTSESSIONTOKEN</SessionToken><SecretAccessKey>TESTSECRETKEY</SecretAccessKey><AccessKeyId>ASIATESTKEYID</AccessKeyId><Expiration>2099-01-01T00:00:00Z</Expiration></Credentials></CreateSessionResult>"#;
}
