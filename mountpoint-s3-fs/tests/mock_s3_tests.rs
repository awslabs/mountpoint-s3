use std::num::NonZeroUsize;

use common::make_test_filesystem_with_client;
use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, Uri,
};
use mountpoint_s3_client::error_metadata::ClientErrorMetadata;
use mountpoint_s3_fs::fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT};
use mountpoint_s3_fs::fs::{FUSE_ROOT_INODE, OpenFlags, ToErrno};
use wiremock::matchers::{method, path, query_param};
use wiremock::{Mock, MockServer, ResponseTemplate};

use mountpoint_s3_fs::S3Filesystem;
use mountpoint_s3_fs::memory::PagedPool;
use test_case::test_case;

mod common;

#[test_case(true, false; "head object")]
#[test_case(false, true; "list object")]
#[test_case(true, true; "both list and head")]
#[tokio::test]
async fn test_lookup_throttled_mock(head_object_throttled: bool, list_object_throttled: bool) {
    let bucket = "bucket";
    let key = "throttled";
    let list_503_response = r#"
    <?xml version=\"1.0\" encoding=\"UTF-8\"?>
    <Error>
        <Code>SlowDown</Code>
        <RequestId>765b43b1b388405cb10ac1c510e7b6cd</RequestId>
        <HostId>00000000000000000000000000000000000/000000000000000000==</HostId>
    </Error>
    "#
    .to_string();
    let head_object_503_headers = vec![];
    let head_object_ok_headers = vec![
        ("ETag", "71a5b8dcb22444f1b2b899dedc1e4122"),
        ("Date", "Thu, 12 Jan 2023 00:04:21 GMT"),
        ("Last-Modified", "Tue, 10 Jan 2023 23:39:32 GMT"),
        ("Accept-Ranges", "bytes"),
        ("Content-Range", "bytes 0-65535/65536"),
        ("Content-Type", "binary/octet-stream"),
        ("Content-Length", "1024"),
    ];

    let (fs, server) = create_fs_with_mock_s3(bucket).await;

    // lookup will issue 2 S3 calls, let's mock them
    // those are the *assumed* S3 responses, based on: https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html
    let (list_http_code, list_response) = if list_object_throttled {
        (503, list_503_response)
    } else {
        (200, list_empty_response(bucket, key))
    };
    let (head_object_http_code, head_object_headers) = if head_object_throttled {
        (503, head_object_503_headers)
    } else {
        (200, head_object_ok_headers)
    };
    Mock::given(method("GET"))
        .and(path(format!("/{bucket}/")))
        .and(query_param("list-type", "2"))
        .and(query_param("prefix", format!("{key}/")))
        .respond_with(ResponseTemplate::new(list_http_code).set_body_string(list_response))
        .mount(&server)
        .await;

    let head_response = ResponseTemplate::new(head_object_http_code).append_headers(head_object_headers);
    Mock::given(method("HEAD"))
        .and(path(format!("/{bucket}/{key}")))
        .respond_with(head_response)
        .mount(&server)
        .await;

    // perform a lookup
    let err = fs
        .lookup(FUSE_ROOT_INODE, key.as_ref())
        .await
        .expect_err("lookup must fail");
    let actual_errno = nix::errno::Errno::from_raw(err.to_errno());
    let expected_errno = nix::errno::Errno::EIO;
    assert_eq!(
        actual_errno, expected_errno,
        "lookup failure due to HTTP 503 must return {expected_errno:?}",
    );
    let metadata = err.meta();
    assert_eq!(
        *metadata,
        ErrorMetadata {
            client_error_meta: ClientErrorMetadata {
                http_code: Some(503),
                error_code: Some("SlowDown".to_string()),
                error_message: Some("Please reduce your request rate.".to_string()),
            },
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(bucket.to_string()),
            s3_object_key: Some(key.to_string())
        }
    );
}

#[tokio::test]
async fn test_lookup_unhandled_error_mock() {
    let bucket = "bucket";
    let key = "unhandled";
    let (fs, server) = create_fs_with_mock_s3(bucket).await;
    Mock::given(method("GET"))
        .and(path(format!("/{bucket}/")))
        .and(query_param("list-type", "2"))
        .and(query_param("prefix", format!("{key}/")))
        .respond_with(ResponseTemplate::new(200).set_body_string(list_empty_response(bucket, key)))
        .mount(&server)
        .await;
    Mock::given(method("HEAD"))
        .and(path(format!("/{bucket}/{key}")))
        .respond_with(ResponseTemplate::new(409)) // let's say S3 adds 409 response code for HeadObject in future
        .mount(&server)
        .await;
    // perform a lookup
    let err = fs
        .lookup(FUSE_ROOT_INODE, key.as_ref())
        .await
        .expect_err("lookup must fail");
    let metadata = err.meta();
    assert_eq!(
        *metadata,
        ErrorMetadata {
            client_error_meta: ClientErrorMetadata {
                http_code: Some(409),
                error_code: None,
                error_message: None,
            },
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(bucket.to_string()),
            s3_object_key: Some(key.to_string())
        }
    );
}

#[tokio::test]
async fn test_read_unhandled_error_mock() {
    let bucket = "bucket";
    let key = "unhandled";
    let head_object_ok_headers = [
        ("ETag", "71a5b8dcb22444f1b2b899dedc1e4122"),
        ("Date", "Thu, 12 Jan 2023 00:04:21 GMT"),
        ("Last-Modified", "Tue, 10 Jan 2023 23:39:32 GMT"),
        ("Accept-Ranges", "bytes"),
        ("Content-Range", "bytes 0-65535/65536"),
        ("Content-Type", "binary/octet-stream"),
        ("Content-Length", "1024"),
    ];
    let get_object_error_resp = r#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NotARealError</Code><Message>This error is made up.</Message><RequestId>CM0R497NB0WAQ977</RequestId><HostId>w1TqUKGaIuNAIgzqm/L2azuzgEBINxTngWPbV1iH2IvpLsVCCTKHJTh4HsGp4JnggHqVkA+KN1MGqHDw1+WEuA==</HostId></Error>"#;

    let (fs, server) = create_fs_with_mock_s3(bucket).await;

    // set up a mock for a successful lookup but a failed read
    Mock::given(method("GET"))
        .and(path(format!("/{bucket}/")))
        .and(query_param("list-type", "2"))
        .and(query_param("prefix", format!("{key}/")))
        .respond_with(ResponseTemplate::new(200).set_body_string(list_empty_response(bucket, key)))
        .mount(&server)
        .await;

    let head_response = ResponseTemplate::new(200).append_headers(head_object_ok_headers);
    Mock::given(method("HEAD"))
        .and(path(format!("/{bucket}/{key}")))
        .respond_with(head_response)
        .mount(&server)
        .await;

    Mock::given(method("GET"))
        .and(path(format!("/{bucket}/{key}")))
        .respond_with(ResponseTemplate::new(418).set_body_string(get_object_error_resp))
        .mount(&server)
        .await;

    // perform a read
    let entry = fs
        .lookup(FUSE_ROOT_INODE, key.as_ref())
        .await
        .expect("lookup must succeed");
    let fh = fs
        .open(entry.attr.ino, OpenFlags::empty(), 0)
        .await
        .expect("open must succeed")
        .fh;
    let err = fs
        .read(entry.attr.ino, fh, 0, 4096, 0, None)
        .await
        .expect_err("read must fail");
    let metadata = err.meta();
    assert_eq!(
        *metadata,
        ErrorMetadata {
            client_error_meta: ClientErrorMetadata {
                http_code: Some(418),
                error_code: Some("NotARealError".to_string()),
                error_message: Some("This error is made up.".to_string()),
            },
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(bucket.to_string()),
            s3_object_key: Some(key.to_string())
        }
    );
}

async fn create_fs_with_mock_s3(bucket: &str) -> (S3Filesystem<S3CrtClient>, MockServer) {
    let server = MockServer::start().await;
    let endpoint = server.uri();
    let endpoint = Uri::new_from_str(&Allocator::default(), endpoint).expect("must be a valid uri");
    let endpoint_config = EndpointConfig::new("PLACEHOLDER")
        .addressing_style(AddressingStyle::Path) // mock server responds to path style requests only
        .endpoint(endpoint);
    let part_size = 1024 * 1024;
    let pool = PagedPool::new_with_candidate_sizes([part_size]);
    let client_config = S3ClientConfig::default()
        .endpoint_config(endpoint_config)
        .auth_config(S3ClientAuthConfig::NoSigning)
        .memory_pool(pool.clone())
        .read_backpressure(true)
        .max_attempts(NonZeroUsize::new(3).unwrap()); // retry S3 request 3 times (which equals the existing default)
    let client = S3CrtClient::new(client_config).expect("must be able to create a CRT client");
    (
        make_test_filesystem_with_client(client, pool, bucket, &Default::default(), Default::default()),
        server,
    )
}

fn list_empty_response(bucket: &str, prefix: &str) -> String {
    let template = r#"
    <ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
        <Name>__BUCKET__</Name>
        <Prefix>__PREFIX__/</Prefix>
        <KeyCount>0</KeyCount>
        <MaxKeys>1000</MaxKeys>
        <IsTruncated>false</IsTruncated>
    </ListBucketResult>
    "#;
    template.replace("__PREFIX__", prefix).replace("__BUCKET__", bucket)
}
