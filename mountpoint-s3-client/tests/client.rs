#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_client::config::S3ClientConfig;

#[tokio::test]
async fn test_create_client_twice() {
    let config = set_up_client_config(S3ClientConfig::new().endpoint_config(get_test_endpoint_config()));

    // Attempt to create the client twice.
    for _i in 0..2 {
        let _client = S3CrtClient::new(config.clone()).expect("could not create test client");
    }
}
