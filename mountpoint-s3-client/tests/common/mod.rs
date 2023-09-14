#![cfg(feature = "s3_tests")]

use aws_sdk_s3 as s3;
use aws_sdk_s3::config::Region;
use aws_sdk_s3::error::SdkError;
use aws_sdk_s3::operation::list_multipart_uploads::ListMultipartUploadsError;
use aws_sdk_s3::primitives::ByteStream;
use aws_smithy_runtime_api::client::orchestrator::HttpResponse;
use bytes::Bytes;
use futures::{pin_mut, Stream, StreamExt};
use mountpoint_s3_client::{EndpointConfig, S3ClientConfig, S3CrtClient};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use rand::rngs::OsRng;
use rand::RngCore;
use std::ops::Range;

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
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
    std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
}

pub fn get_test_client() -> S3CrtClient {
    let endpoint_config = EndpointConfig::new(&get_test_region());
    S3CrtClient::new(S3ClientConfig::new().endpoint_config(endpoint_config)).expect("could not create test client")
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

pub fn get_test_bucket_without_permissions() -> String {
    std::env::var("S3_FORBIDDEN_BUCKET_NAME").expect("Set S3_FORBIDDEN_BUCKET_NAME to run integration tests")
}

pub fn get_secondary_test_region() -> String {
    std::env::var("S3_SECONDARY_REGION").unwrap_or(String::from("ap-southeast-2"))
}

pub fn get_test_domain() -> String {
    std::env::var("S3_DOMAIN").unwrap_or(String::from("amazonaws.com"))
}

pub fn get_subsession_iam_role() -> String {
    std::env::var("S3_SUBSESSION_IAM_ROLE").expect("Set S3_SUBSESSION_IAM_ROLE to run integration tests")
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
            .body(ByteStream::from(Bytes::from_static(b".")))
            .send()
            .await
            .unwrap();
    }
}

pub async fn get_mpu_count_for_key(
    client: &s3::Client,
    bucket: &str,
    key: &str,
) -> Result<usize, SdkError<ListMultipartUploadsError, HttpResponse>> {
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
        .body(ByteStream::from(Bytes::from_static(b".")))
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
