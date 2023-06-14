#![cfg(feature = "s3_tests")]

use aws_sdk_s3 as s3;
use bytes::Bytes;
use futures::{pin_mut, Stream, StreamExt};
use mountpoint_s3_client::{S3ClientConfig, S3CrtClient};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use rand::rngs::OsRng;
use rand::RngCore;
use s3::Region;
use std::ops::Range;

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}

pub fn get_test_client() -> S3CrtClient {
    // Try to match what mountpoint-s3's defaults are
    let client_config = S3ClientConfig {
        throughput_target_gbps: Some(10.0),
        part_size: Some(8 * 1024 * 1024),
        ..Default::default()
    };
    S3CrtClient::new(&get_test_region(), client_config).expect("could not create test client")
}

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests");

    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = OsRng.next_u64();

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run integration tests");
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

    let prefix = format!("{prefix}{test_name}/{nonce}/");

    (bucket, prefix)
}

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

pub fn get_test_bucket_without_permissions() -> String {
    std::env::var("S3_FORBIDDEN_BUCKET_NAME").expect("Set S3_FORBIDDEN_BUCKET_NAME to run integration tests")
}

pub async fn get_test_sdk_client() -> s3::Client {
    let config = aws_config::from_env()
        .region(Region::new(get_test_region()))
        .load()
        .await;
    s3::Client::new(&config)
}

/// Create some objects in a prefix for testing.
pub async fn create_objects_for_test(client: &s3::Client, bucket: &str, prefix: &str, names: &[impl AsRef<str>]) {
    for name in names {
        client
            .put_object()
            .bucket(bucket)
            .key(format!("{}{}", prefix, name.as_ref()))
            .body(s3::types::ByteStream::from(Bytes::from_static(b".")))
            .send()
            .await
            .unwrap();
    }
}

pub async fn get_mpu_count_for_key(
    client: &s3::Client,
    bucket: &str,
    key: &str,
) -> Result<usize, aws_sdk_s3::types::SdkError<aws_sdk_s3::error::ListMultipartUploadsError>> {
    let upload_count = client
        .list_multipart_uploads()
        .bucket(bucket)
        .prefix(key)
        .send()
        .await?
        .uploads()
        .map_or(0, |u| u.len());

    Ok(upload_count)
}

#[tokio::test]
async fn test_sdk_create_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_sdk_create_object");

    let response = sdk_client
        .put_object()
        .bucket(bucket)
        .key(format!("{prefix}hello"))
        .body(s3::types::ByteStream::from(Bytes::from_static(b".")))
        .send()
        .await
        .unwrap();

    println!("{response:?}");
}

/// Check the result of a GET against expected bytes.
pub async fn check_get_result<E: std::fmt::Debug>(
    result: impl Stream<Item = Result<(u64, Box<[u8]>), E>>,
    range: Option<Range<u64>>,
    expected: &[u8],
) {
    let mut accum = vec![];
    let mut next_offset = range.map(|r| r.start).unwrap_or(0);
    pin_mut!(result);
    while let Some(r) = result.next().await {
        let (offset, body) = r.expect("get_object body part failed");
        assert_eq!(offset, next_offset, "wrong body part offset");
        next_offset += body.len() as u64;
        accum.extend_from_slice(&body[..]);
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
            use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
            use $crate::{get_test_bucket_and_prefix, get_test_client};

            #[tokio::test]
            async fn mock() {
                let (bucket, prefix) = get_test_bucket_and_prefix(stringify!($test_fn_identifier));

                let client = MockClient::new(MockClientConfig {
                    bucket: bucket.to_string(),
                    part_size: 1024,
                });

                $test_fn_identifier(&client, &bucket, &prefix).await;
            }

            #[tokio::test]
            async fn rust_crt() {
                let (bucket, prefix) = get_test_bucket_and_prefix(stringify!($test_fn_identifier));

                let client = get_test_client();

                $test_fn_identifier(&client, &bucket, &prefix).await;
            }
        }
    };
}
