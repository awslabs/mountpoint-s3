#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::operation::complete_multipart_upload::CompleteMultipartUploadOutput;
use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_s3::types::{ChecksumAlgorithm, CompletedMultipartUpload, CompletedPart};
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::error::{GetObjectAttributesError, ObjectClientError};
use mountpoint_s3_client::types::ObjectAttribute;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use test_case::test_case;

fn default_storage_class() -> &'static str {
    if cfg!(feature = "s3express_tests") {
        "EXPRESS_ONEZONE"
    } else {
        "STANDARD"
    }
}

async fn create_mpu_object(
    bucket: &String,
    key: &String,
    parts_size: &[usize],
    checksum_algorithm: Option<ChecksumAlgorithm>,
) -> (Vec<CompletedPart>, CompleteMultipartUploadOutput) {
    let sdk_client = get_test_sdk_client().await;

    let mut create_mpu = sdk_client.create_multipart_upload().bucket(bucket).key(key);
    if let Some(algorithm) = &checksum_algorithm {
        create_mpu = create_mpu.checksum_algorithm(algorithm.to_owned());
    }

    let create_mpu_output = create_mpu.send().await.unwrap();
    let upload_id = create_mpu_output.upload_id().unwrap();

    let mut completed_parts: Vec<CompletedPart> = Vec::new();

    for (part_index, part_size) in parts_size.iter().enumerate() {
        let part_body = vec![0; part_size.to_owned()];
        let part_num = (part_index + 1) as i32;

        let mut upload_part = sdk_client
            .upload_part()
            .bucket(bucket)
            .key(key)
            .part_number(part_num)
            .upload_id(upload_id)
            .body(ByteStream::from(part_body.to_vec()));
        if let Some(algorithm) = &checksum_algorithm {
            upload_part = upload_part.checksum_algorithm(algorithm.to_owned());
        }

        let upload_part_output = upload_part.send().await.unwrap();

        let mut completed_part_builder = CompletedPart::builder()
            .e_tag(upload_part_output.e_tag.as_ref().unwrap())
            .part_number(part_num);
        if let Some(algorithm) = &checksum_algorithm {
            match algorithm {
                ChecksumAlgorithm::Crc32 => {
                    completed_part_builder =
                        completed_part_builder.checksum_crc32(upload_part_output.checksum_crc32().unwrap())
                }
                ChecksumAlgorithm::Crc32C => {
                    completed_part_builder =
                        completed_part_builder.checksum_crc32_c(upload_part_output.checksum_crc32_c().unwrap())
                }
                ChecksumAlgorithm::Sha1 => {
                    completed_part_builder =
                        completed_part_builder.checksum_sha1(upload_part_output.checksum_sha1().unwrap())
                }
                ChecksumAlgorithm::Sha256 => {
                    completed_part_builder =
                        completed_part_builder.checksum_sha256(upload_part_output.checksum_sha256().unwrap())
                }
                _ => unimplemented!("This algorithm is not supported"),
            }
        }
        completed_parts.push(completed_part_builder.build());
    }

    let completed_mpu = CompletedMultipartUpload::builder()
        .set_parts(Some(completed_parts.clone()))
        .build();

    let complete_mpu_output = sdk_client
        .complete_multipart_upload()
        .bucket(bucket)
        .key(key)
        .upload_id(upload_id)
        .multipart_upload(completed_mpu)
        .send()
        .await
        .unwrap();

    (completed_parts, complete_mpu_output)
}

async fn test_with_checksum(checksum_algorithm: ChecksumAlgorithm) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_checksum");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let body = b"hello world!";

    let put_object_output = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(checksum_algorithm.clone())
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();
    let expected_etag = put_object_output.e_tag().map(|s| s.trim_matches('"').to_string());
    let expected_storage_class = default_storage_class();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_ref())
        .await;

    let result = result.unwrap();
    let etag = result.etag.map(|s| s.trim_matches('"').to_string());
    assert_eq!(etag, expected_etag);

    let checksum = result.checksum.unwrap();
    match checksum_algorithm {
        ChecksumAlgorithm::Crc64Nvme => assert_eq!(
            checksum.checksum_crc64nvme,
            put_object_output.checksum_crc64_nvme().map(|s| s.to_string())
        ),
        ChecksumAlgorithm::Crc32 => assert_eq!(
            checksum.checksum_crc32,
            put_object_output.checksum_crc32().map(|s| s.to_string())
        ),
        ChecksumAlgorithm::Crc32C => assert_eq!(
            checksum.checksum_crc32c,
            put_object_output.checksum_crc32_c().map(|s| s.to_string())
        ),
        ChecksumAlgorithm::Sha1 => assert_eq!(
            checksum.checksum_sha1,
            put_object_output.checksum_sha1().map(|s| s.to_string())
        ),
        ChecksumAlgorithm::Sha256 => assert_eq!(
            checksum.checksum_sha256,
            put_object_output.checksum_sha256().map(|s| s.to_string())
        ),
        _ => unimplemented!("This algorithm is not supported"),
    }

    assert_eq!(result.storage_class, Some(expected_storage_class.to_owned()));
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
    let put_object_output = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();
    let expected_etag = put_object_output.e_tag().map(|s| s.trim_matches('"').to_string());
    let expected_storage_class = default_storage_class();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_ref())
        .await;

    let result = result.unwrap();
    let etag = result.etag.map(|s| s.trim_matches('"').to_string());
    assert_eq!(etag, expected_etag);

    // Behavior when uploading without explicitly specifying the checksum algorithm is changing.
    // See https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums.
    // TODO: Review this test when adding support for the new algorithm.
    // assert!(result.checksum.is_none());

    assert_eq!(result.storage_class, Some(expected_storage_class.to_owned()));
    assert_eq!(result.object_size, Some(body.len() as u64));
    assert!(result.object_parts.is_none());
}

#[test_case(ChecksumAlgorithm::Crc64Nvme)]
#[test_case(ChecksumAlgorithm::Crc32)]
#[test_case(ChecksumAlgorithm::Crc32C)]
#[test_case(ChecksumAlgorithm::Sha1)]
#[test_case(ChecksumAlgorithm::Sha256)]
#[tokio::test]
async fn test_get_attributes_with_checksum(checksum_algorithm: ChecksumAlgorithm) {
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

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_ref())
        .await;

    let result = result.unwrap();
    assert!(result.etag.is_none());
    assert!(result.checksum.is_none());
    assert!(result.object_parts.is_none());
    assert!(result.storage_class.is_none());
    assert!(result.object_size.is_none());
}

#[tokio::test]
async fn test_get_attributes_mpu() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_mpu");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let parts_size: Vec<usize> = vec![5 * 1024 * 1024, 1024];
    let object_size = parts_size.iter().sum::<usize>() as u64;

    let (_completed_parts, complete_mpu_output) = create_mpu_object(&bucket, &key, &parts_size, None).await;
    let expected_etag = complete_mpu_output.e_tag().map(|s| s.trim_matches('"').to_string());
    let expected_storage_class = default_storage_class();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_ref())
        .await;

    let result = result.unwrap();
    let etag = result.etag.map(|s| s.trim_matches('"').to_string());
    assert_eq!(etag, expected_etag);
    assert_eq!(result.storage_class, Some(expected_storage_class.to_owned()));
    assert_eq!(result.object_size, Some(object_size));

    // Behavior when uploading without explicitly specifying the checksum algorithm is changing.
    // See https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums.
    // TODO: Review this test when adding support for the new algorithm.
    // assert!(result.checksum.is_none());

    // object_parts is returned only if the object is using additional checksums.
    let object_parts = result.object_parts.unwrap();
    assert_eq!(object_parts.total_parts_count.unwrap(), 2);
    // S3 Express One Zone returns all object parts metadata while normal S3 doesn't.
    if cfg!(feature = "s3express_tests") {
        assert_eq!(object_parts.is_truncated, Some(false));
        assert_eq!(object_parts.max_parts, Some(1000));
        assert_eq!(object_parts.next_part_number_marker, Some(2));
        assert_eq!(object_parts.part_number_marker, Some(0));
    } else {
        assert!(object_parts.is_truncated.is_none());
        assert!(object_parts.max_parts.is_none());
        assert!(object_parts.next_part_number_marker.is_none());
        assert!(object_parts.part_number_marker.is_none());
        assert!(object_parts.parts.is_none());
    }
}

#[tokio::test]
async fn test_get_attributes_mpu_with_checksum() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_mpu_with_checksum");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let parts_size: Vec<usize> = vec![5 * 1024 * 1024, 1024];
    let object_size = parts_size.iter().sum::<usize>() as u64;

    let (completed_parts, complete_mpu_output) =
        create_mpu_object(&bucket, &key, &parts_size, Some(ChecksumAlgorithm::Crc32C)).await;
    let expected_etag = complete_mpu_output.e_tag().map(|s| s.trim_matches('"').to_string());
    let expected_storage_class = default_storage_class();

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![
        ObjectAttribute::ETag,
        ObjectAttribute::Checksum,
        ObjectAttribute::ObjectParts,
        ObjectAttribute::StorageClass,
        ObjectAttribute::ObjectSize,
    ];

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_slice())
        .await;

    let result = result.unwrap();
    let etag = result.etag.map(|s| s.trim_matches('"').to_string());
    assert_eq!(etag, expected_etag);
    assert_eq!(result.storage_class, Some(expected_storage_class.to_owned()));
    assert_eq!(result.object_size, Some(object_size));

    let checksum = result.checksum.unwrap();
    // S3 Express One Zone includes the part number suffix in the checksum while general purpose S3 doesn't.
    let checksum = if cfg!(feature = "s3express_tests") {
        checksum.checksum_crc32c
    } else {
        checksum
            .checksum_crc32c
            .map(|s| format!("{}-{}", s, completed_parts.len()))
    };
    let expected_checksum = complete_mpu_output.checksum_crc32_c().map(|s| s.to_string());
    assert_eq!(checksum, expected_checksum);

    let object_parts = result.object_parts.unwrap();
    assert!(!object_parts.is_truncated.unwrap());
    assert_eq!(object_parts.max_parts.unwrap(), 1000);
    assert_eq!(object_parts.part_number_marker.unwrap(), 0);
    assert_eq!(object_parts.next_part_number_marker.unwrap(), 2);
    assert_eq!(object_parts.total_parts_count.unwrap(), 2);
    assert_eq!(object_parts.parts.as_ref().unwrap().len(), 2);

    let parts = object_parts.parts.unwrap();
    let part1 = &parts[0];
    assert_eq!(
        &part1.checksum.as_ref().unwrap().checksum_crc32c,
        &completed_parts[0].checksum_crc32_c().map(|s| s.to_string())
    );
    assert_eq!(part1.part_number, 1);
    assert_eq!(part1.size, parts_size[0]);

    let part2 = &parts[1];
    assert_eq!(
        &part2.checksum.as_ref().unwrap().checksum_crc32c,
        &completed_parts[1].checksum_crc32_c().map(|s| s.to_string())
    );
    assert_eq!(part2.part_number, 2);
    assert_eq!(part2.size, parts_size[1]);
}

#[tokio::test]
async fn test_get_attributes_mpu_pagination() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_mpu_pagination");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let parts_size: Vec<usize> = vec![5 * 1024 * 1024, 1024];

    let (completed_parts, _complete_mpu_output) =
        create_mpu_object(&bucket, &key, &parts_size, Some(ChecksumAlgorithm::Sha256)).await;

    let client: S3CrtClient = get_test_client();

    let object_attributes = vec![ObjectAttribute::ObjectParts];

    // Get the first page with only one part
    let max_parts = 1;
    let result = client
        .get_object_attributes(&bucket, &key, Some(max_parts), None, object_attributes.as_slice())
        .await;

    let result = result.unwrap();

    let object_parts = result.object_parts.unwrap();
    assert!(object_parts.is_truncated.unwrap());
    assert_eq!(object_parts.max_parts.unwrap(), 1);
    assert_eq!(object_parts.part_number_marker.unwrap(), 0);
    assert_eq!(object_parts.next_part_number_marker.unwrap(), 1);
    assert_eq!(object_parts.total_parts_count.unwrap(), 2);
    assert_eq!(object_parts.parts.as_ref().unwrap().len(), 1);

    let parts = object_parts.parts.unwrap();
    let part1 = &parts[0];
    assert_eq!(
        &part1.checksum.as_ref().unwrap().checksum_sha256,
        &completed_parts[0].checksum_sha256().map(|s| s.to_string())
    );
    assert_eq!(part1.part_number, 1);
    assert_eq!(part1.size, parts_size[0]);

    // Get the next page using next_part_number_marker
    let result = client
        .get_object_attributes(
            &bucket,
            &key,
            None,
            object_parts.next_part_number_marker,
            object_attributes.as_ref(),
        )
        .await;

    let result = result.unwrap();

    let object_parts = result.object_parts.unwrap();
    assert!(!object_parts.is_truncated.unwrap());
    assert_eq!(object_parts.max_parts.unwrap(), 1000);
    assert_eq!(object_parts.part_number_marker.unwrap(), 1);
    assert_eq!(object_parts.next_part_number_marker.unwrap(), 2);
    assert_eq!(object_parts.total_parts_count.unwrap(), 2);
    assert_eq!(object_parts.parts.as_ref().unwrap().len(), 1);

    let parts = object_parts.parts.unwrap();
    let part2 = &parts[0];
    assert_eq!(
        &part2.checksum.as_ref().unwrap().checksum_sha256,
        &completed_parts[1].checksum_sha256().map(|s| s.to_string())
    );
    assert_eq!(part2.part_number, 2);
    assert_eq!(part2.size, parts_size[1]);
}

#[tokio::test]
async fn test_get_attributes_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_404");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();
    let object_attributes = vec![ObjectAttribute::ETag];

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_ref())
        .await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(GetObjectAttributesError::NoSuchKey))
    ));
}

#[tokio::test]
async fn test_get_attributes_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_404");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();
    let object_attributes = vec![ObjectAttribute::ETag];

    let result = client
        .get_object_attributes("nonexistent_bucket", &key, None, None, object_attributes.as_ref())
        .await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(GetObjectAttributesError::NoSuchBucket))
    ));
}

#[tokio::test]
async fn test_get_attributes_no_perm() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_attributes_no_perm");
    let bucket = get_test_bucket_without_permissions();

    let key = format!("{prefix}/some_key");

    let client: S3CrtClient = get_test_client();
    let object_attributes = vec![ObjectAttribute::ETag];

    let result = client
        .get_object_attributes(&bucket, &key, None, None, object_attributes.as_ref())
        .await;

    assert!(matches!(
        result,
        Err(ObjectClientError::ClientError(S3RequestError::Forbidden(_, _)))
    ));
}
