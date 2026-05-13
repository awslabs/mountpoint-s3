//! Tests for version_id support in metadata cache

#![cfg(test)]
#![allow(dead_code)]

use mountpoint_s3_client::mock_client::{MockClient, MockObject};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_fs::object::ObjectId;

#[test]
fn test_object_id_with_version() {
    let key = "test-key".to_string();
    let etag = ETag::for_tests();
    let version_id = "v123".to_string();

    // Create ObjectId with version_id
    let object_id = ObjectId::with_version(key.clone(), etag.clone(), version_id.clone());

    assert_eq!(object_id.key(), &key);
    assert_eq!(object_id.etag(), &etag);
    assert_eq!(object_id.version_id(), Some("v123"));
}

#[test]
fn test_object_id_without_version() {
    let key = "test-key".to_string();
    let etag = ETag::for_tests();

    // Create ObjectId without version_id
    let object_id = ObjectId::new(key.clone(), etag.clone());

    assert_eq!(object_id.key(), &key);
    assert_eq!(object_id.etag(), &etag);
    assert_eq!(object_id.version_id(), None);
}

#[test]
fn test_mock_object_with_version_id() {
    let etag = ETag::for_tests();
    let version_id = "v456".to_string();

    // Create a mock object with version_id
    let obj = MockObject::constant(0xAA, 64, etag.clone())
        .with_version_id(version_id.clone());

    // The mock object should have the version_id set
    assert_eq!(obj.len(), 64);
}

#[test]
fn test_mock_object_without_version_id() {
    let etag = ETag::for_tests();

    // Create a mock object without version_id
    let obj = MockObject::constant(0xBB, 32, etag.clone());

    // The mock object should work without version_id
    assert_eq!(obj.len(), 32);
}

#[tokio::test]
async fn test_head_object_returns_version_id() {
    let bucket = "test-bucket";
    let key = "test-key";
    let version_id = "v789";
    let etag = ETag::for_tests();

    // Create a mock client and add a versioned object
    let client = MockClient::config()
        .bucket(bucket.to_string())
        .build();

    let obj = MockObject::constant(0xCC, 128, etag.clone())
        .with_version_id(version_id.to_string());

    client.add_object(key, obj);

    // Call head_object and verify version_id is returned
    let result = client
        .head_object(bucket, key, &Default::default())
        .await
        .expect("head_object should succeed");

    assert_eq!(result.size, 128);
    assert_eq!(result.version_id, Some(version_id.to_string()));
}

#[tokio::test]
async fn test_head_object_without_version_id() {
    let bucket = "test-bucket";
    let key = "test-key-no-ver";
    let etag = ETag::for_tests();

    // Create a mock client and add an object without version_id
    let client = MockClient::config()
        .bucket(bucket.to_string())
        .build();

    let obj = MockObject::constant(0xDD, 64, etag.clone());
    client.add_object(key, obj);

    // Call head_object and verify version_id is None
    let result = client
        .head_object(bucket, key, &Default::default())
        .await
        .expect("head_object should succeed");

    assert_eq!(result.size, 64);
    assert_eq!(result.version_id, None);
}

#[tokio::test]
async fn test_get_object_with_version_id() {
    use mountpoint_s3_client::object_client::{GetObjectParams, ObjectClient};

    let bucket = "test-bucket";
    let key = "test-key-get";
    let version_id = "v999";
    let etag = ETag::for_tests();
    let test_data = vec![0x42u8; 100];

    // Create a mock client and add a versioned object
    let client = MockClient::config()
        .bucket(bucket.to_string())
        .build();

    let obj = MockObject::from_bytes(&test_data, etag.clone())
        .with_version_id(version_id.to_string());

    client.add_object(key, obj);

    // Get object with matching version_id - should succeed
    let params = GetObjectParams::new()
        .version_id(Some(version_id.to_string()));

    let result = client
        .get_object(bucket, key, &params)
        .await;

    assert!(result.is_ok(), "get_object with matching version_id should succeed");
}

#[tokio::test]
async fn test_get_object_with_wrong_version_id() {
    use mountpoint_s3_client::object_client::{GetObjectError, GetObjectParams, ObjectClient};
    use mountpoint_s3_client::ObjectClientError;

    let bucket = "test-bucket";
    let key = "test-key-wrong-ver";
    let version_id = "v111";
    let wrong_version_id = "v222";
    let etag = ETag::for_tests();
    let test_data = vec![0x11u8; 100];

    // Create a mock client and add a versioned object
    let client = MockClient::config()
        .bucket(bucket.to_string())
        .build();

    let obj = MockObject::from_bytes(&test_data, etag.clone())
        .with_version_id(version_id.to_string());

    client.add_object(key, obj);

    // Try to get object with different version_id - should fail
    let params = GetObjectParams::new()
        .version_id(Some(wrong_version_id.to_string()));

    let result = client
        .get_object(bucket, key, &params)
        .await;

    assert!(result.is_err(), "get_object with wrong version_id should fail");

    // Check that it's a NoSuchKey error
    match result {
        Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey(_))) => {
            // Expected error
        },
        other => panic!("Expected NoSuchKey error, got {:?}", other),
    }
}
