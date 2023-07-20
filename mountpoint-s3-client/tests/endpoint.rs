#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::{AddressingStyle, EndpointConfig, ObjectClient, S3ClientConfig, S3CrtClient};
use mountpoint_s3_crt::common::{allocator::Allocator, uri::Uri};
use test_case::test_case;

async fn run_test<F: FnOnce(&str) -> EndpointConfig>(f: F) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_region");

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

#[test_case(AddressingStyle::Automatic)]
#[test_case(AddressingStyle::Virtual)]
#[test_case(AddressingStyle::Path)]
#[tokio::test]
async fn test_addressing_style_region(addressing_style: AddressingStyle) {
    run_test(|region| EndpointConfig::new(region).addressing_style(addressing_style)).await;
}

#[test_case(AddressingStyle::Automatic)]
#[test_case(AddressingStyle::Virtual)]
#[test_case(AddressingStyle::Path)]
#[tokio::test]
async fn test_addressing_style_uri(addressing_style: AddressingStyle) {
    run_test(|region| {
        let domain = get_test_domain();
        let uri = format!("https://s3.{region}.{domain}");
        let endpoint = Uri::new_from_str(&Allocator::default(), uri).expect("Uri Could not be parsed");
        EndpointConfig::new(region)
            .addressing_style(addressing_style)
            .endpoint(endpoint)
    })
    .await;
}

#[test_case(AddressingStyle::Automatic)]
#[test_case(AddressingStyle::Virtual)]
#[test_case(AddressingStyle::Path)]
#[tokio::test]
async fn test_addressing_style_uri_dualstack(addressing_style: AddressingStyle) {
    run_test(|region| {
        let domain = get_test_domain();
        let uri = format!("https://s3.dualstack.{region}.{domain}");
        let endpoint = Uri::new_from_str(&Allocator::default(), uri).expect("Uri Could not be parsed");
        EndpointConfig::new(region)
            .addressing_style(addressing_style)
            .endpoint(endpoint)
    })
    .await;
}

// FIPS endpoints can only be used with virtual-hosted-style addressing
#[cfg(feature = "fips_tests")]
#[test_case(AddressingStyle::Virtual)]
#[tokio::test]
async fn test_addressing_style_uri_fips(addressing_style: AddressingStyle) {
    run_test(|region| {
        let domain = get_test_domain();
        let uri = format!("https://s3-fips.{region}.{domain}");
        let endpoint = Uri::new_from_str(&Allocator::default(), uri).expect("Uri Could not be parsed");
        EndpointConfig::new(region)
            .addressing_style(addressing_style)
            .endpoint(endpoint)
    })
    .await;
}
// FIPS endpoints can only be used with virtual-hosted-style addressing
#[cfg(feature = "fips_tests")]
#[test_case(AddressingStyle::Virtual)]
#[tokio::test]
async fn test_addressing_style_uri_fips_dualstack(addressing_style: AddressingStyle) {
    run_test(|region| {
        let domain = get_test_domain();
        let uri = format!("https://s3-fips.dualstack.{region}.{domain}");
        let endpoint = Uri::new_from_str(&Allocator::default(), uri).expect("Uri Could not be parsed");
        EndpointConfig::new(region)
            .addressing_style(addressing_style)
            .endpoint(endpoint)
    })
    .await;
}
