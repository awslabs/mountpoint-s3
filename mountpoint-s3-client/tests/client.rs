#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_client::config::S3ClientConfig;

#[tokio::test]
async fn test_build_client() {
    let config = S3ClientConfig::new()
        .memory_pool(memory_pool::new_for_tests())
        .endpoint_config(get_test_endpoint_config());

    // Attempt to create the client twice.
    for _i in 0..2 {
        let _client = S3CrtClient::new(config.clone()).expect("could not create test client");
    }
}
