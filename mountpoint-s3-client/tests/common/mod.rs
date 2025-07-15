#![cfg(feature = "s3_tests")]

use aws_config::BehaviorVersion;
use aws_sdk_s3 as s3;
use aws_sdk_s3::config::Region;
use aws_sdk_s3::error::SdkError;
use aws_sdk_s3::operation::list_multipart_uploads::ListMultipartUploadsError;
use aws_sdk_s3::primitives::ByteStream;
use aws_smithy_runtime_api::client::orchestrator::HttpResponse;
use bytes::Bytes;
use futures::{Stream, StreamExt, pin_mut};
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::types::{ClientBackpressureHandle, GetBodyPart, GetObjectResponse};
use mountpoint_s3_client::{NewClientError, OnTelemetry, S3CrtClient};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use mountpoint_s3_crt::common::uri::Uri;
use rand::RngCore;
use rand::rngs::OsRng;
use std::ops::Range;
use std::sync::Arc;
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt as _;
use tracing_subscriber::{EnvFilter, Layer};

pub mod creds;
#[cfg(feature = "pool_tests")]
pub mod memory_pool;
pub mod tracing_test;

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();

    let subscriber = tracing_subscriber::registry()
        .with(tracing_subscriber::fmt::layer().with_filter(EnvFilter::from_default_env()))
        .with(self::tracing_test::TracingTestLayer::get());
    let _ = subscriber.try_init();
}

#[ctor::ctor]
fn init_crt() {
    mountpoint_s3_crt::io::io_library_init(&mountpoint_s3_crt::common::allocator::Allocator::default());
    mountpoint_s3_crt::s3::s3_library_init(&mountpoint_s3_crt::common::allocator::Allocator::default());
}

pub enum AccessPointType {
    SingleRegion,
    ObjectLambda,
    MultiRegion,
}

pub fn get_unique_test_prefix(test_name: &str) -> String {
    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").unwrap_or(String::from("mountpoint-test/"));
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");
    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = OsRng.next_u64();
    let prefix = format!("{prefix}{test_name}/{nonce}/");
    prefix
}

pub fn get_test_bucket() -> String {
    if cfg!(feature = "s3express_tests") {
        std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME")
            .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME to run integration tests")
    } else {
        std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
    }
}

pub fn get_test_kms_key_id() -> String {
    std::env::var("KMS_TEST_KEY_ID").expect("Set KMS_TEST_KEY_ID to run integration tests")
}

pub fn set_up_client_config(config: S3ClientConfig) -> S3ClientConfig {
    #[cfg(feature = "pool_tests")]
    let config = config.memory_pool(memory_pool::new_for_tests());

    #[cfg(feature = "fs_pool_tests")]
    let config = config.memory_pool_factory(|options: mountpoint_s3_client::config::MemoryPoolFactoryOptions| {
        mountpoint_s3_fs::memory::PagedPool::new([options.part_size()])
    });

    config
}

pub fn create_client_with_config(config: S3ClientConfig) -> Result<S3CrtClient, NewClientError> {
    S3CrtClient::new(set_up_client_config(config))
}

pub fn get_test_client_with_config(config: S3ClientConfig) -> S3CrtClient {
    create_client_with_config(config).expect("could not create test client")
}

pub fn get_test_client() -> S3CrtClient {
    get_test_client_with_config(S3ClientConfig::new().endpoint_config(get_test_endpoint_config()))
}

pub fn get_test_backpressure_client(initial_read_window: usize, part_size: Option<usize>) -> S3CrtClient {
    let mut config = S3ClientConfig::new()
        .endpoint_config(get_test_endpoint_config())
        .read_backpressure(true)
        .initial_read_window(initial_read_window);
    if let Some(part_size) = part_size {
        config = config.part_size(part_size);
    }
    get_test_client_with_config(config)
}

pub fn get_test_client_with_custom_telemetry(telemetry_callback: Arc<dyn OnTelemetry>) -> S3CrtClient {
    let config = S3ClientConfig::new()
        .endpoint_config(get_test_endpoint_config())
        .telemetry_callback(telemetry_callback);
    get_test_client_with_config(config)
}

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = get_test_bucket();
    let prefix = get_unique_test_prefix(test_name);

    (bucket, prefix)
}

pub fn get_test_access_point(arn: bool, access_point_type: AccessPointType) -> String {
    match access_point_type {
        AccessPointType::SingleRegion => {
            if arn {
                std::env::var("S3_ACCESS_POINT_ARN").expect("Set S3_ACCESS_POINT_ARN to run integration tests")
            } else {
                std::env::var("S3_ACCESS_POINT_ALIAS").expect("Set S3_ACCESS_POINT_ALIAS to run integration tests")
            }
        }
        AccessPointType::ObjectLambda => {
            if arn {
                std::env::var("S3_OLAP_ARN").expect("Set S3_OLAP_ARN to run integration tests")
            } else {
                std::env::var("S3_OLAP_ALIAS").expect("Set S3_OLAP_ALIAS to run integration tests")
            }
        }
        AccessPointType::MultiRegion => {
            // Multi region accesspoints should only be accessed using their ARN
            // (since endpoint for alias needs to be in format `<mrap-alias>.accesspoint.s3-global.amazonaws.com`. But this endpoint could not be formed using
            // CRT endpoint resolver any bucket alias with '.' in it will be resolved in path style addressing. Similar is the case with CLI)
            assert!(arn);
            std::env::var("S3_MRAP_ARN").expect("Set S3_MRAP_ARN to run integration tests")
        }
    }
}

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

/// Optional config for testing against a custom endpoint url
fn get_test_endpoint_url() -> Option<String> {
    if cfg!(feature = "s3express_tests") {
        std::env::var("S3_EXPRESS_ONE_ZONE_ENDPOINT_URL")
            .ok()
            .filter(|str| !str.is_empty())
    } else {
        std::env::var("S3_ENDPOINT_URL").ok().filter(|str| !str.is_empty())
    }
}

pub fn get_test_endpoint_config() -> EndpointConfig {
    let mut endpoint_config = EndpointConfig::new(&get_test_region());
    if let Some(endpoint_url) = get_test_endpoint_url() {
        let endpoint = Uri::new_from_str(&Allocator::default(), endpoint_url.clone()).expect("invalid endpoint url");
        endpoint_config = endpoint_config.endpoint(endpoint);
    }
    endpoint_config
}

pub fn get_test_bucket_without_permissions() -> String {
    std::env::var("S3_FORBIDDEN_BUCKET_NAME").expect("Set S3_FORBIDDEN_BUCKET_NAME to run integration tests")
}

pub fn get_secondary_test_region() -> String {
    std::env::var("S3_SECONDARY_REGION").unwrap_or(String::from("ap-southeast-2"))
}

pub fn get_test_domain() -> String {
    std::env::var("S3_DOMAIN").unwrap_or(String::from("amazonaws.com"))
}

pub async fn get_test_sdk_client() -> s3::Client {
    let mut sdk_config = aws_config::defaults(BehaviorVersion::latest()).region(Region::new(get_test_region()));
    if let Some(endpoint_url) = get_test_endpoint_url() {
        sdk_config = sdk_config.endpoint_url(endpoint_url);
    }
    s3::Client::new(&sdk_config.load().await)
}

/// Create some objects in a prefix for testing.
pub async fn create_objects_for_test(client: &s3::Client, bucket: &str, prefix: &str, names: &[impl AsRef<str>]) {
    for name in names {
        client
            .put_object()
            .bucket(bucket)
            .key(format!("{}{}", prefix, name.as_ref()))
            .body(ByteStream::from(Bytes::from_static(b".")))
            .send()
            .await
            .unwrap();
    }
}

pub async fn get_mpu_count_for_key(
    client: &s3::Client,
    bucket: &str,
    prefix: &str,
    key: &str,
) -> Result<usize, SdkError<ListMultipartUploadsError, HttpResponse>> {
    // This could be broken if we have initiated more than one multipart upload using the same key
    // since ListMultipartUploads returns all multipart uploads for that key.
    let upload_count = client
        .list_multipart_uploads()
        .bucket(bucket)
        .prefix(prefix)
        .send()
        .await?
        .uploads()
        .iter()
        .filter(|&u| u.key() == Some(key))
        .count();

    Ok(upload_count)
}

/// Check the result of a GET against expected bytes.
pub async fn check_get_result<E: std::fmt::Debug>(
    result: impl Stream<Item = Result<GetBodyPart, E>>,
    range: Option<Range<u64>>,
    expected: &[u8],
) {
    let mut accum = vec![];
    let mut next_offset = range.map(|r| r.start).unwrap_or(0);
    pin_mut!(result);
    while let Some(r) = result.next().await {
        let GetBodyPart { offset, data: body } = r.expect("get_object body part failed");
        assert_eq!(offset, next_offset, "wrong body part offset");
        next_offset += body.len() as u64;
        accum.extend_from_slice(&body[..]);
    }
    assert_eq!(&accum[..], expected, "body does not match");
}

/// Check the result of a GET against expected bytes.
pub async fn check_backpressure_get_result(
    read_window: usize,
    mut response: impl GetObjectResponse,
    range: Option<Range<u64>>,
    expected: &[u8],
) {
    let mut accum = vec![];
    let mut next_offset = range.map(|r| r.start).unwrap_or(0);
    let mut backpressure_handle = response
        .backpressure_handle()
        .cloned()
        .expect("should be able to get a backpressure handle");
    pin_mut!(response);
    while let Some(r) = response.next().await {
        let GetBodyPart { offset, data: body } = r.expect("get_object body part failed");
        assert_eq!(offset, next_offset, "wrong body part offset");
        next_offset += body.len() as u64;
        accum.extend_from_slice(&body[..]);

        // We run out of data to read if read window is smaller than accum length of data,
        // so we keeping adding window size, otherwise the request will be blocked.
        while next_offset >= backpressure_handle.read_window_end_offset() {
            backpressure_handle.increment_read_window(read_window);
        }
    }
    assert_eq!(&accum[..], expected, "body does not match");
}

/// Create a test suite that will execute a test that works over a generic [ObjectClient] against
/// both the Rust CRT as well and the mock object client implementations.
///
/// To use, define a function that takes an [ObjectClient], and a bucket and prefix to use for testing:
/// `async fn my_test_fn(client: &impl ObjectClient, bucket: &str, prefix: &str) { ... }`.
/// Then invoke this macro with the identifier for the function:
/// `object_client_test!(my_test_fn);`
#[macro_export]
macro_rules! object_client_test {
    ($test_fn_identifier:ident) => {
        mod $test_fn_identifier {
            use super::$test_fn_identifier;
            use mountpoint_s3_client::mock_client::MockClient;
            use $crate::{get_test_bucket_and_prefix, get_test_client};

            #[tokio::test]
            async fn mock() {
                let (bucket, prefix) = get_test_bucket_and_prefix(stringify!($test_fn_identifier));

                let client = MockClient::config()
                    .bucket(&bucket)
                    .part_size(1024)
                    .unordered_list_seed(None)
                    .build();

                let key = format!("{prefix}hello");
                $test_fn_identifier(&client, &bucket, &key, Default::default()).await;
            }

            #[tokio::test]
            async fn rust_crt() {
                let (bucket, prefix) = get_test_bucket_and_prefix(stringify!($test_fn_identifier));

                let client = get_test_client();

                let key = format!("{prefix}hello");
                $test_fn_identifier(&client, &bucket, &key, Default::default()).await;
            }
        }
    };
}
