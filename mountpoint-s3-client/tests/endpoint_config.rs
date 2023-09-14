#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::primitives::ByteStream;
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::{AddressingStyle, EndpointConfig, ObjectClient, S3ClientConfig, S3CrtClient};
use test_case::test_case;

async fn run_test<F: FnOnce(&str) -> EndpointConfig>(f: F, prefix: &str, bucket: String) {
    let sdk_client = get_test_sdk_client().await;

    // Create one object named "hello"
    let key = format!("{prefix}hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let region = get_test_region();
    let endpoint_config = f(&region);
    let config = S3ClientConfig::new().endpoint_config(endpoint_config.clone());
    let client = S3CrtClient::new(config).expect("could not create test client");

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;
}

#[test_case(AddressingStyle::Automatic, "test_default_addressing_style")]
#[test_case(AddressingStyle::Path, "test_path_addressing_style")]
#[tokio::test]
async fn test_addressing_style(addressing_style: AddressingStyle, prefix: &str) {
    run_test(
        |region| EndpointConfig::new(region).addressing_style(addressing_style),
        &get_unique_test_prefix(prefix),
        get_test_bucket(),
    )
    .await;
}

#[cfg(feature = "fips_tests")]
#[tokio::test]
async fn test_use_fips() {
    let prefix = get_unique_test_prefix("test_fips");
    run_test(
        |region| EndpointConfig::new(region).use_fips(true),
        &prefix,
        get_test_bucket(),
    )
    .await;
}

// Transfer acceleration do not work with path style
#[tokio::test]
async fn test_use_accelerate() {
    let prefix = get_unique_test_prefix("test_transfer_acceleration");
    run_test(
        |region| EndpointConfig::new(region).use_accelerate(true),
        &prefix,
        get_test_bucket(),
    )
    .await;
}

#[test_case(AddressingStyle::Automatic, "test_dual_stack")]
#[test_case(AddressingStyle::Path, "test_dual_stack_path_style")]
#[tokio::test]
async fn test_addressing_style_dualstack_option(addressing_style: AddressingStyle, prefix: &str) {
    let prefix = get_unique_test_prefix(prefix);
    run_test(
        |region| {
            EndpointConfig::new(region)
                .addressing_style(addressing_style)
                .use_dual_stack(true)
        },
        &prefix,
        get_test_bucket(),
    )
    .await;
}

#[cfg(feature = "fips_tests")]
#[tokio::test]
async fn test_fips_dual_stack_mount_option() {
    let prefix = get_unique_test_prefix("test_fips_dual_stack");
    run_test(
        |region| EndpointConfig::new(region).use_fips(true).use_dual_stack(true),
        &prefix,
        get_test_bucket(),
    )
    .await;
}

#[test_case(AddressingStyle::Automatic, true, "test_accesspoint_arn")]
#[test_case(AddressingStyle::Automatic, false, "test_accesspoint_alias")]
#[test_case(AddressingStyle::Path, false, "test_accesspoint_alias")]
// Path-style addressing cannot be used with ARN buckets for the endpoint resolution
// Also, path-style addressing is not supported for Access Points. But it seems to be supported for single region access point for now.
#[tokio::test]
async fn test_single_region_access_point(addressing_style: AddressingStyle, arn: bool, prefix: &str) {
    run_test(
        |region| EndpointConfig::new(region).addressing_style(addressing_style),
        &get_unique_test_prefix(prefix),
        get_test_access_point(arn, AccessPointType::SingleRegion),
    )
    .await;
}

// For Object Lambda Access Point, PutObject is not supported,
// For multi region access points, Rust SDK is not supported. Hence different helper method for these tests.
async fn run_list_objects_test<F: FnOnce(&str) -> EndpointConfig>(f: F, prefix: &str, bucket: &str) {
    let region = get_test_region();
    let endpoint_config = f(&region);
    let config = S3ClientConfig::new().endpoint_config(endpoint_config.clone());
    let client = S3CrtClient::new(config).expect("could not create test client");

    client
        .list_objects(bucket, None, "/", 10, prefix)
        .await
        .expect("list_object should succeed");
}

#[test_case(false, "test_OLAP_alias")]
#[test_case(true, "test_OLAP_ARN")]
// Path-style addressing is not supported for Access points
#[tokio::test]
async fn test_object_lambda_access_point(arn: bool, prefix: &str) {
    run_list_objects_test(
        EndpointConfig::new,
        &get_unique_test_prefix(prefix),
        &get_test_access_point(arn, AccessPointType::ObjectLambda),
    )
    .await;
}

// Path-style addressing is not supported for Access points
// Only ARN is supported for Multi Region access point as AWS CLI.
#[tokio::test]
async fn test_multi_region_access_point() {
    let prefix = "test_MRAP";
    run_list_objects_test(
        EndpointConfig::new,
        &get_unique_test_prefix(prefix),
        &get_test_access_point(true, AccessPointType::MultiRegion),
    )
    .await;
}
