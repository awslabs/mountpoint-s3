#![cfg(feature = "s3_tests")]

pub mod common;

use test_case::test_case;

use common::*;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::error::{HeadObjectError, ObjectClientError::ClientError, ObjectClientError::ServiceError};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};

#[tokio::test]
async fn test_empty_list() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_empty_list");
    let key = format!("{prefix}/no-such-key");

    let interface_names = Vec::new();
    let config = S3ClientConfig::new()
        .endpoint_config(EndpointConfig::new(&get_test_region()))
        .network_interface_names(interface_names);
    let client = S3CrtClient::new(config).expect("client should create OK");

    let err = client
        .head_object(&bucket, &key)
        .await
        .expect_err("head_object should fail as the key doesn't exist");
    assert!(
        matches!(err, ServiceError(HeadObjectError::NotFound)),
        "HeadObject should 404 successfully"
    );
}

#[tokio::test]
async fn test_one_interface_ok() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_empty_list");
    let key = format!("{prefix}/no-such-key");

    let primary_interface = get_primary_interface_name();
    let interface_names = vec![primary_interface];
    let config = S3ClientConfig::new()
        .endpoint_config(EndpointConfig::new(&get_test_region()))
        .network_interface_names(interface_names);
    let client = S3CrtClient::new(config).expect("client should create OK");

    let err = client
        .head_object(&bucket, &key)
        .await
        .expect_err("head_object should fail as the key doesn't exist");
    assert!(
        matches!(err, ServiceError(HeadObjectError::NotFound)),
        "HeadObject should 404 successfully"
    );
}

/// This test demonstrates how the S3 client will fail today when configured with bad network interfaces.
/// The behavior isn't great, but this documents what happens.
///
/// TODO: How can we get to a point where S3 client creation fails when invalid interface names are provided?
#[test_case(true; "with one valid interface")]
#[test_case(false; "without any valid interface")]
#[tokio::test]
async fn test_nonexistent(with_valid_interface: bool) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_empty_list");
    let key = format!("{prefix}/no-such-key");

    let primary_interface = get_primary_interface_name();
    let non_existent_interface = String::from("none0");
    let interface_names = if with_valid_interface {
        vec![primary_interface, non_existent_interface]
    } else {
        vec![non_existent_interface]
    };
    let config = S3ClientConfig::new()
        .endpoint_config(EndpointConfig::new(&get_test_region()))
        .network_interface_names(interface_names);
    let client = S3CrtClient::new(config).expect("client should create OK");

    let mut socket_creation_failure = None;
    for _ in 0..10 {
        // It probably should only need two requests (round robin), but let's just do up to 10 if needed.
        let err = client
            .head_object(&bucket, &key)
            .await
            .expect_err("head_object should always fail as the object or the network interface didn't exist");
        if let ClientError(_) = &err {
            let error_message = format!("{err:?}");
            if error_message.contains("AWS_IO_SOCKET_INVALID_OPTIONS") {
                socket_creation_failure = Some(err);
                break;
            }
        }
    }
    socket_creation_failure.expect("crt should return error on socket creation for non-existent interface");
}

/// Retrieve the primary interface name used to route internet traffic.
///
/// This implementation uses `ip route` command.
fn get_primary_interface_name() -> String {
    // Run the `ip route` command and capture the output
    let output = std::process::Command::new("ip")
        .arg("route")
        .output()
        .expect("Failed to execute `ip route`");

    if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout);
        let lines: Vec<&str> = stdout.lines().collect();

        for line in lines {
            if line.starts_with("default") {
                // Strip everything away to leave the interface name
                let parts: Vec<&str> = line.split_whitespace().collect();
                if parts.len() >= 5 {
                    let interface_name = parts[4].to_string();
                    return interface_name;
                }
            }
        }
        // If the command succeeded, we really should be able to find the default interface.
        panic!("Default route not found in 'ip route' output");
    } else {
        panic!("Failed to execute `ip route`");
    }
}
