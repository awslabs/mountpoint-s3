//! Tests for the mock server harness. They cover its client configurations, bucket types and the
//! server's lifetime.

mod common;

use std::net::TcpStream;
use std::time::{Duration, Instant};

use aws_sdk_s3::primitives::ByteStream;
use common::mock_server::{AddObjectRequest, DIRECTORY_BUCKET, Error, MockServer, Occurrence, Operation};
use mountpoint_s3_client::error::{ObjectClientError, PutObjectError};
use mountpoint_s3_client::types::{HeadObjectParams, PutObjectSingleParams};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};

/// Build a CRT client for `server` with the harness's client settings.
fn crt_client(server: &MockServer) -> S3CrtClient {
    S3CrtClient::new(server.crt_client_config()).expect("failed to create the CRT client")
}

/// Build an SDK client for `server` with the harness's client settings.
fn sdk_client(server: &MockServer) -> aws_sdk_s3::Client {
    aws_sdk_s3::Client::from_conf(server.sdk_config().build())
}

/// Returns `true` if the server at `address` stops accepting connections within a few seconds.
fn stops_accepting(address: &str) -> bool {
    let deadline = Instant::now() + Duration::from_secs(5);
    while Instant::now() < deadline {
        if TcpStream::connect(address).is_err() {
            return true;
        }
        std::thread::sleep(Duration::from_millis(10));
    }
    false
}

fn address(server: &MockServer) -> String {
    server.endpoint_url().trim_start_matches("http://").to_owned()
}

#[tokio::test]
async fn guard_keeps_the_server_running() {
    let server = MockServer::config().build().await;
    let etag = server
        .add_object("key", AddObjectRequest::new(vec![1; 10]).etag("test_etag"))
        .await;
    let address = address(&server);
    // The guarded client stands in for a file system or any other component that holds a client
    // of the server.
    let bucket = server.bucket().to_owned();
    let component = server.guard(crt_client(&server));
    drop(server);

    let head = component
        .head_object(&bucket, "key", &HeadObjectParams::new())
        .await
        .expect("the guard keeps the server running");
    assert_eq!(head.etag, etag);

    drop(component);
    assert!(stops_accepting(&address), "the server should stop with its last handle");
}

#[tokio::test]
async fn server_stops_with_its_last_clone() {
    let server = MockServer::config().build().await;
    let address = address(&server);
    let clone = server.clone();
    let counter = server.new_counter(Operation::HeadObject);
    drop(server);
    drop(clone);
    TcpStream::connect(&address).expect("a request counter keeps the server running");
    assert_eq!(counter.count(), 0);

    drop(counter);
    assert!(stops_accepting(&address), "the server should stop with its last handle");
}

#[tokio::test]
async fn sdk_clients_share_the_bucket() {
    let server = MockServer::config().build().await;
    let put_counter = server.new_counter(Operation::PutObject);
    let sdk = sdk_client(&server);
    sdk.put_object()
        .bucket(server.bucket())
        .key("from-sdk")
        .body(ByteStream::from_static(b"hello"))
        .send()
        .await
        .unwrap();
    server
        .add_object("seeded", AddObjectRequest::new(vec![1; 10]).etag("test_etag"))
        .await;

    assert_eq!(server.object_content("from-sdk").await.unwrap(), b"hello");
    let head = sdk
        .head_object()
        .bucket(server.bucket())
        .key("seeded")
        .send()
        .await
        .unwrap();
    assert_eq!(head.e_tag(), Some("\"test_etag\""));
    let head = crt_client(&server)
        .head_object(server.bucket(), "from-sdk", &HeadObjectParams::new())
        .await
        .unwrap();
    assert_eq!(head.size, 5);
    assert_eq!(put_counter.count(), 1);
}

#[tokio::test]
async fn sdk_clients_do_not_retry() {
    let server = MockServer::config().build().await;
    server
        .add_object("key", AddObjectRequest::new(vec![1; 10]).etag("test_etag"))
        .await;
    server.inject_error(
        Operation::HeadObject,
        Some("key"),
        Error::Internal("injected fault".to_owned()),
        0,
        Occurrence::Once,
    );
    let sdk = sdk_client(&server);
    let head_counter = server.new_counter(Operation::HeadObject);
    let head = || sdk.head_object().bucket(server.bucket()).key("key").send();

    let err = head().await.expect_err("the injected error should surface");
    assert_eq!(err.raw_response().map(|r| r.status().as_u16()), Some(500));
    assert_eq!(head_counter.count(), 1);
    head().await.expect("the fault fires once");
}

#[tokio::test]
async fn crt_clients_do_not_retry() {
    let server = MockServer::config().build().await;
    server.add_object("key", AddObjectRequest::new(vec![1; 10])).await;
    server.inject_error(
        Operation::HeadObject,
        Some("key"),
        Error::Internal("injected fault".to_owned()),
        0,
        Occurrence::Once,
    );
    let client = crt_client(&server);
    let head_counter = server.new_counter(Operation::HeadObject);
    let params = HeadObjectParams::new();
    let head = || client.head_object(server.bucket(), "key", &params);

    head().await.expect_err("the injected error should surface");
    assert_eq!(head_counter.count(), 1);
    head().await.expect("the fault fires once");
}

/// Appends succeed in directory buckets and fail in general purpose buckets, as they do in S3.
#[tokio::test]
async fn appends_only_in_directory_buckets() {
    let append = PutObjectSingleParams::new_for_append(5);

    let server = MockServer::config().build().await;
    server.add_object("key", AddObjectRequest::new("hello")).await;
    let put_counter = server.new_counter(Operation::PutObject);
    let session_counter = server.new_counter(Operation::CreateSession);
    let err = crt_client(&server)
        .put_object_single(server.bucket(), "key", &append, b" world".to_vec())
        .await
        .expect_err("a general purpose bucket should not serve appends");
    assert!(
        matches!(err, ObjectClientError::ServiceError(PutObjectError::NotImplemented)),
        "the server should answer 501 NotImplemented, got {err:?}"
    );
    assert_eq!(put_counter.count(), 1, "the append should reach the server");
    assert_eq!(session_counter.count(), 0);
    assert_eq!(server.object_content("key").await.unwrap(), b"hello");

    let server = MockServer::config().bucket(DIRECTORY_BUCKET).build().await;
    server.add_object("key", AddObjectRequest::new("hello")).await;
    let session_counter = server.new_counter(Operation::CreateSession);
    crt_client(&server)
        .put_object_single(server.bucket(), "key", &append, b" world".to_vec())
        .await
        .expect("a directory bucket should serve appends");
    assert_eq!(server.object_content("key").await.unwrap(), b"hello world");
    // The harness signs directory bucket requests without S3 Express sessions.
    assert_eq!(session_counter.count(), 0);
}
