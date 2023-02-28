#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::model::{ChecksumAlgorithm, CompletedMultipartUpload, CompletedPart};
use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::{GetObjectAttributesError, ObjectAttribute, ObjectClientError, S3CrtClient, S3RequestError};
use test_case::test_case;

async fn test_with_checksum(checksum_algorithm: ChecksumAlgorithm) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_checksum");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let body = b"hello world!";

    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(checksum_algorithm.clone())
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client.get_object_attributes(&bucket, &key, object_attributes).await;

    assert!(result.is_ok());

    let result = result.unwrap();
    assert!(result.etag.is_some());

    assert!(result.checksum.is_some());
    let checksum = result.checksum.unwrap();
    match checksum_algorithm {
        ChecksumAlgorithm::Crc32 => assert!(checksum.checksum_crc32.is_some()),
        ChecksumAlgorithm::Crc32C => assert!(checksum.checksum_crc32c.is_some()),
        ChecksumAlgorithm::Sha1 => assert!(checksum.checksum_sha1.is_some()),
        ChecksumAlgorithm::Sha256 => assert!(checksum.checksum_sha256.is_some()),
        _ => unimplemented!("This algorithm is not supported"),
    }

    assert_eq!(result.storage_class, Some("STANDARD".to_owned()));
    assert_eq!(result.object_size, Some(body.len() as u64));
    assert!(result.object_parts.is_none());
}

#[tokio::test]
async fn test_get_attributes() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes");

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

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client.get_object_attributes(&bucket, &key, object_attributes).await;

    assert!(result.is_ok());

    let result = result.unwrap();
    assert!(result.etag.is_some());
    assert!(result.checksum.is_none());
    assert_eq!(result.storage_class, Some("STANDARD".to_owned()));
    assert_eq!(result.object_size, Some(body.len() as u64));
    assert!(result.object_parts.is_none());
}

#[test_case(ChecksumAlgorithm::Crc32; "Checksum CRC32")]
#[test_case(ChecksumAlgorithm::Crc32C; "Checksum CRC32C")]
#[test_case(ChecksumAlgorithm::Sha1; "Checksum SHA1")]
#[test_case(ChecksumAlgorithm::Sha256; "Checksum SHA256")]
#[tokio::test]
async fn test_get_attributes_checksum(checksum_algorithm: ChecksumAlgorithm) {
    test_with_checksum(checksum_algorithm).await;
}

#[tokio::test]
async fn test_get_attributes_all_none() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_all_none");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(ChecksumAlgorithm::Crc32C)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![ObjectAttribute::ObjectParts];

    let result = client.get_object_attributes(&bucket, &key, object_attributes).await;

    assert!(result.is_ok());

    let result = result.unwrap();
    assert!(result.etag.is_none());
    assert!(result.checksum.is_none());
    assert!(result.object_parts.is_none());
    assert!(result.storage_class.is_none());
    assert!(result.object_size.is_none());
}

#[tokio::test]
async fn test_get_attributes_mpu() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_mpu");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");

    let create_mpu_output = sdk_client
        .create_multipart_upload()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(ChecksumAlgorithm::Crc32C)
        .send()
        .await
        .unwrap();
    let upload_id = create_mpu_output.upload_id().unwrap();

    let mut completed_parts: Vec<CompletedPart> = Vec::new();
    let five_mib_body = vec![0; 5 * 1024 * 1024];
    let one_mib_body = vec![0; 1024 * 1024];
    let object_size = (five_mib_body.len() + one_mib_body.len()) as u64;

    let upload_part_output1 = sdk_client
        .upload_part()
        .bucket(&bucket)
        .key(&key)
        .part_number(1)
        .upload_id(upload_id)
        .checksum_algorithm(ChecksumAlgorithm::Crc32C)
        .body(ByteStream::from(five_mib_body.to_vec()))
        .send()
        .await
        .unwrap();
    completed_parts.push(
        CompletedPart::builder()
            .e_tag(upload_part_output1.e_tag.as_ref().unwrap())
            .checksum_crc32_c(upload_part_output1.checksum_crc32_c().unwrap())
            .part_number(1)
            .build(),
    );

    let upload_part_output2 = sdk_client
        .upload_part()
        .bucket(&bucket)
        .key(&key)
        .part_number(2)
        .upload_id(upload_id)
        .checksum_algorithm(ChecksumAlgorithm::Crc32C)
        .body(ByteStream::from(one_mib_body.to_vec()))
        .send()
        .await
        .unwrap();
    completed_parts.push(
        CompletedPart::builder()
            .e_tag(upload_part_output2.e_tag.as_ref().unwrap())
            .checksum_crc32_c(upload_part_output2.checksum_crc32_c().unwrap())
            .part_number(2)
            .build(),
    );

    let completed_mpu = CompletedMultipartUpload::builder()
        .set_parts(Some(completed_parts))
        .build();

    sdk_client
        .complete_multipart_upload()
        .bucket(&bucket)
        .key(&key)
        .upload_id(upload_id)
        .multipart_upload(completed_mpu)
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client.get_object_attributes(&bucket, &key, object_attributes).await;

    assert!(result.is_ok());

    let result = result.unwrap();
    assert!(result.etag.is_some());
    assert_eq!(result.storage_class, Some("STANDARD".to_owned()));
    assert_eq!(result.object_size, Some(object_size));

    assert!(result.checksum.is_some());
    let checksum = result.checksum.unwrap();
    assert!(checksum.checksum_crc32c.is_some());

    assert!(result.object_parts.is_some());
    let object_parts = result.object_parts.unwrap();
    assert!(!object_parts.is_truncated);
    assert!(object_parts.max_parts > 0);
    assert_eq!(object_parts.part_number_marker, 0);
    assert_eq!(object_parts.next_part_number_marker, 2);
    assert_eq!(object_parts.total_parts_count, 2);
    assert_eq!(object_parts.parts.len(), 2);

    let part1 = &object_parts.parts[0];
    assert!(part1.checksum_crc32c.is_some());
    assert_eq!(part1.part_number, 1);
    assert_eq!(part1.size, five_mib_body.len());

    let part2 = &object_parts.parts[1];
    assert!(part2.checksum_crc32c.is_some());
    assert_eq!(part2.part_number, 2);
    assert_eq!(part2.size, one_mib_body.len());
}

#[tokio::test]
async fn test_get_attributes_404() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_404");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();
    let object_attributes = vec![ObjectAttribute::ETag];

    let result = client.get_object_attributes(&bucket, &key, object_attributes).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(GetObjectAttributesError::NotFound))
    ));
}

#[tokio::test]
async fn test_get_attributes_no_perm() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_no_perm");
    let bucket = get_test_bucket_without_permissions();

    let key = format!("{prefix}/some_key");

    let client: S3CrtClient = get_test_client();
    let object_attributes = vec![ObjectAttribute::ETag];

    let result = client.get_object_attributes(&bucket, &key, object_attributes).await;

    if let Err(ObjectClientError::ClientError(S3RequestError::ResponseError(err))) = &result {
        assert!(err.response_status == 403);
    } else {
        panic!("Unexpected result, expected a ResponseError with 403 if there's no permission");
    }
}
