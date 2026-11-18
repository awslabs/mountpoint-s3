//! Requests to S3 through the AWS SDK client built by `build_sdk_client`, for each endpoint option.

#![cfg(feature = "s3_tests")]

mod common;

use aws_sdk_s3::config::SharedCredentialsProvider;
use aws_sdk_s3::primitives::ByteStream;
use mountpoint_s3_client::config::AddressingStyle;
use mountpoint_s3_fs::s3::sdk_client::{SdkClientAuth, SdkClientConfig, build_sdk_client};
use test_case::test_case;

use common::creds::get_sdk_default_chain_creds;
use common::s3::{get_test_bucket, get_test_endpoint_config, get_test_prefix, get_test_sdk_client};

const BODY: &[u8] = b"hello world!";

async fn sdk_auth() -> SdkClientAuth {
    SdkClientAuth::Provider(SharedCredentialsProvider::new(get_sdk_default_chain_creds().await))
}

/// Upload an object named `hello` under a new prefix with the test SDK client and return the prefix
/// and the object's key.
async fn create_object(bucket: &str, test_name: &str) -> (String, String) {
    let prefix = get_test_prefix(test_name);
    let key = format!("{prefix}hello");
    let region = get_test_endpoint_config().get_region().to_owned();
    get_test_sdk_client(&region)
        .await
        .put_object()
        .bucket(bucket)
        .key(&key)
        .body(ByteStream::from_static(BODY))
        .send()
        .await
        .unwrap();
    (prefix, key)
}

/// Check that the SDK client built from `config` can list and head an object in `bucket`.
async fn run_test(config: SdkClientConfig, bucket: &str, test_name: &str) {
    let (prefix, key) = create_object(bucket, test_name).await;
    let client = build_sdk_client(&config).unwrap();

    let list = client
        .list_objects_v2()
        .bucket(bucket)
        .prefix(&prefix)
        .send()
        .await
        .expect("ListObjectsV2 should succeed");
    let keys: Vec<_> = list.contents().iter().filter_map(|object| object.key()).collect();
    assert_eq!(keys, [key.as_str()]);

    let head = client
        .head_object()
        .bucket(bucket)
        .key(&key)
        .send()
        .await
        .expect("HeadObject should succeed");
    assert_eq!(head.content_length(), Some(BODY.len() as i64));
}

#[test_case(AddressingStyle::Automatic, "sdk_client_default_addressing_style")]
#[test_case(AddressingStyle::Path, "sdk_client_path_addressing_style")]
#[tokio::test]
async fn test_addressing_style(addressing_style: AddressingStyle, test_name: &str) {
    let endpoint_config = get_test_endpoint_config().addressing_style(addressing_style);
    run_test(
        SdkClientConfig::new(endpoint_config, sdk_auth().await),
        &get_test_bucket(),
        test_name,
    )
    .await;
}

// S3 Express One Zone does not support dual-stack endpoints
#[cfg(not(feature = "s3express_tests"))]
#[test_case(AddressingStyle::Automatic, "sdk_client_dual_stack")]
#[test_case(AddressingStyle::Path, "sdk_client_dual_stack_path_style")]
#[tokio::test]
async fn test_dual_stack(addressing_style: AddressingStyle, test_name: &str) {
    let endpoint_config = get_test_endpoint_config()
        .addressing_style(addressing_style)
        .use_dual_stack(true);
    run_test(
        SdkClientConfig::new(endpoint_config, sdk_auth().await),
        &get_test_bucket(),
        test_name,
    )
    .await;
}

// S3 Express One Zone does not support transfer acceleration
#[cfg(not(feature = "s3express_tests"))]
#[tokio::test]
async fn test_transfer_acceleration() {
    let endpoint_config = get_test_endpoint_config().use_accelerate(true);
    run_test(
        SdkClientConfig::new(endpoint_config, sdk_auth().await),
        &get_test_bucket(),
        "sdk_client_transfer_acceleration",
    )
    .await;
}

// We're not testing S3 Express One Zone against FIPS endpoints
#[cfg(not(feature = "s3express_tests"))]
#[cfg(feature = "fips_tests")]
#[test_case(false, "sdk_client_fips")]
#[test_case(true, "sdk_client_fips_dual_stack")]
#[tokio::test]
async fn test_fips(dual_stack: bool, test_name: &str) {
    let endpoint_config = get_test_endpoint_config().use_fips(true).use_dual_stack(dual_stack);
    run_test(
        SdkClientConfig::new(endpoint_config, sdk_auth().await),
        &get_test_bucket(),
        test_name,
    )
    .await;
}
