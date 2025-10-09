#![cfg(feature = "s3express_tests")]

use mountpoint_s3_client::error::{ObjectClientError, RenameObjectError};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::types::{
    HeadObjectParams, PutObjectParams, PutObjectSingleParams, RenameObjectParams, RenamePreconditionTypes,
    UploadChecksum,
};
use mountpoint_s3_client::{ObjectClient, PutObjectRequest};
use mountpoint_s3_crt::checksums::crc64nvme;
use tracing::debug;
use uuid::Uuid;

pub mod common;
use common::{get_test_bucket_and_prefix, get_test_client};

// Test that rename with source matching works as expected
#[tokio::test]
async fn simple_rename() {
    let (bucket, prefix) = get_test_bucket_and_prefix("put_append_rename_append_test");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    // Get the ETag from HeadObject
    let headobjectparams = HeadObjectParams::new();
    let head_result = client
        .head_object(&bucket, &source_key, &headobjectparams)
        .await
        .expect("head object request should succeed");
    let etag = head_result.etag;
    // Perform a rename
    let rename_params = RenameObjectParams::new().if_source_match(Some(etag));
    let _ = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await
        .expect("rename should succeed");
}

#[tokio::test]
async fn put_append_rename_append_test() {
    let (bucket, prefix) = get_test_bucket_and_prefix("put_append_rename_append_test");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    // Append to it
    let object_size = b"data".len();
    let contents = vec![0u8; 32];
    let params = PutObjectSingleParams::new_for_append(object_size as u64)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))));
    let put_object_result = client
        .put_object_single(&bucket, &source_key, &params, &contents)
        .await
        .expect("put_object_single should succeed");

    // Get the ETag from HeadObject
    let headobjectparams = HeadObjectParams::new();
    let head_result = client
        .head_object(&bucket, &source_key, &headobjectparams)
        .await
        .expect("head object request should succeed");
    let etag = ETag::from(
        head_result
            .etag
            .as_str()
            .strip_suffix("\"")
            .unwrap()
            .strip_prefix("\"")
            .unwrap(),
    );
    // Perform a rename
    debug!(?etag, "have got Etag from Head Object Request");
    debug!(?put_object_result.etag, "have got Etag from Put Object Request");

    let rename_params = RenameObjectParams::new().if_source_match(Some(put_object_result.etag));
    let _ = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await
        .expect("rename should succeed");
}

// Perform a test where overwritten file has different ETag
// Test that rename with source matching works as expected
#[tokio::test]
async fn rename_destination_does_not_match() {
    let (bucket, prefix) = get_test_bucket_and_prefix("rename_destination_does_not_match");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &dest_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"other").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");
    // Get the ETag from HeadObject
    let headobjectparams = HeadObjectParams::new();
    let head_result = client
        .head_object(&bucket, &source_key, &headobjectparams)
        .await
        .expect("head object request should succeed");
    let etag = head_result.etag;
    // Perform a rename
    let rename_params = RenameObjectParams::new()
        .if_source_match(Some(etag.clone()))
        .if_match(Some(etag));
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await;
    assert!(result.is_err(), "Result should be an error variant");
    assert!(matches!(
        result.err().unwrap(),
        ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(RenamePreconditionTypes::IfMatch))
    ));
}

#[tokio::test]
async fn rename_overwrite_error() {
    let (bucket, prefix) = get_test_bucket_and_prefix("rename_overwrite_error");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &dest_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"other").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    let rename_params = RenameObjectParams::new().if_none_match(Some("*".into()));
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await;
    assert!(result.is_err(), "Result should be an error variant");
    assert!(matches!(
        result.err().unwrap(),
        ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
            RenamePreconditionTypes::IfNoneMatch
        ))
    ));
}

#[tokio::test]
async fn rename_double_error() {
    let (bucket, prefix) = get_test_bucket_and_prefix("rename_double_error");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &dest_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"other").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");
    let headobjectparams = HeadObjectParams::new();
    let head_result = client
        .head_object(&bucket, &source_key, &headobjectparams)
        .await
        .expect("head object request should succeed");
    let etag = head_result.etag;

    let rename_params = RenameObjectParams::new()
        .if_none_match(Some("*".into()))
        .if_match(Some(etag));
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await;
    assert!(result.is_err(), "Result should be an error variant");
    assert!(matches!(
        result.err().unwrap(),
        ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(RenamePreconditionTypes::IfMatch))
    ));
}

// Try a rename where the source does not match
// Perform a test where overwritten file has different ETag
// Test that rename with source matching works as expected
#[tokio::test]
async fn rename_source_does_not_match() {
    let (bucket, prefix) = get_test_bucket_and_prefix("rename_source_does_not_match");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &dest_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"other").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");
    // Get the ETag from HeadObject
    let headobjectparams = HeadObjectParams::new();
    let head_result = client
        .head_object(&bucket, &dest_key, &headobjectparams)
        .await
        .expect("head object request should succeed");
    let etag = head_result.etag;
    // Perform a rename
    let rename_params = RenameObjectParams::new().if_source_match(Some(etag.clone()));
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await;
    assert!(result.is_err(), "Result should be an error variant");
    assert!(matches!(
        result.err().unwrap(),
        ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(RenamePreconditionTypes::IfMatch))
    ));
}

#[tokio::test]
async fn rename_idempotency_test() {
    let (bucket, prefix) = get_test_bucket_and_prefix("rename_idempotency_test");
    let client = get_test_client();
    let source_key = format!("{prefix}a.txt");
    let dest_key = format!("{prefix}b.txt");

    let params = PutObjectParams::new();
    let mut request = client
        .put_object(&bucket, &source_key, &params)
        .await
        .expect("put should succeed");
    request.write(b"data").await.expect("write should succeed");
    request
        .complete()
        .await
        .expect("the upload should complete successfully");
    // This needs to be a fresh token on each run.
    let rename_params = RenameObjectParams::new().client_token(Some(Uuid::new_v4().to_string()));
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await;
    assert!(result.is_ok(), "First rename should work");
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params)
        .await;
    assert!(result.is_ok(), "Second rename should be replayed");
    // Attempt a third rename with a w.h.p. different token
    let rename_params_new = RenameObjectParams::new().client_token(Some(Uuid::new_v4().to_string()));
    let result = client
        .rename_object(&bucket, &source_key, &dest_key, &rename_params_new)
        .await;
    assert!(result.is_err(), "Third rename should not work");
}
