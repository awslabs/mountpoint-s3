use std::num::NonZeroUsize;

use common::{make_test_filesystem_with_client, TestS3Filesystem};
use httpmock::{Method, MockServer, Then};
use mountpoint_s3::fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT};
use mountpoint_s3::fs::FUSE_ROOT_INODE;
use mountpoint_s3_client::config::{AddressingStyle, EndpointConfig, S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_client::error_metadata::ClientErrorMetadata;
use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::uri::Uri;

use test_case::test_case;

mod common;

#[test_case(true, false; "head object")]
#[test_case(false, true; "list object")]
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
    let head_object_503_headers = [];
    let head_object_ok_headers = [
        ("ETag", "71a5b8dcb22444f1b2b899dedc1e4122"),
        ("Date", "Thu, 12 Jan 2023 00:04:21 GMT"),
        ("Last-Modified", "Tue, 10 Jan 2023 23:39:32 GMT"),
        ("Accept-Ranges", "bytes"),
        ("Content-Range", "bytes 0-65535/65536"),
        ("Content-Type", "binary/octet-stream"),
        ("Content-Length", "1024"),
    ];

    let (fs, server) = create_fs_with_mock_s3(bucket);

    // lookup will issue 2 S3 calls, let's mock them
    // those are the *assumed* S3 responses, based on: https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html
    let (list_http_code, list_response) = if list_object_throttled {
        (503, list_503_response)
    } else {
        (200, list_empty_response(bucket, key))
    };
    let (head_object_http_code, head_object_headers): (u16, &[(&str, &str)]) = if head_object_throttled {
        (503, &head_object_503_headers)
    } else {
        (200, &head_object_ok_headers)
    };
    server.mock(|when, then| {
        when.method(Method::GET)
            .path(format!("/{}/", bucket))
            .query_param("list-type", "2")
            .query_param("prefix", format!("{key}/"));
        then.status(list_http_code).body(list_response);
    });
    server.mock(|when, then| {
        when.method(Method::HEAD).path(format!("/{}/{}", bucket, key));
        set_response_headers(then.status(head_object_http_code), head_object_headers);
    });

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
                http_code: Some(503),
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
async fn test_lookup_unhandled_error_mock() {
    let bucket = "bucket";
    let key = "unhandled";
    let (fs, server) = create_fs_with_mock_s3(bucket);
    server.mock(|when, then| {
        when.method(Method::GET)
            .path(format!("/{}/", bucket))
            .query_param("list-type", "2")
            .query_param("prefix", format!("{key}/"));
        then.status(200).body(list_empty_response(bucket, key));
    });
    server.mock(|when, then| {
        when.method(Method::HEAD).path(format!("/{}/{}", bucket, key));
        then.status(409); // let's say S3 adds 409 response code for HeadObject in future
    });
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

fn create_fs_with_mock_s3(bucket: &str) -> (TestS3Filesystem<S3CrtClient>, MockServer) {
    let server = MockServer::start();
    let endpoint = format!("http://{}", server.address());
    let endpoint = Uri::new_from_str(&Allocator::default(), endpoint).expect("must be a valid uri");
    let endpoint_config = EndpointConfig::new("PLACEHOLDER")
        .addressing_style(AddressingStyle::Path) // mock server responds to path style requests only
        .endpoint(endpoint);
    let client_config = S3ClientConfig::default()
        .endpoint_config(endpoint_config)
        .auth_config(S3ClientAuthConfig::NoSigning)
        .read_backpressure(true)
        .max_attempts(NonZeroUsize::new(3).unwrap()); // retry S3 request 3 times (which equals the existing default)
    let client = S3CrtClient::new(client_config).expect("must be able to create a CRT client");
    (
        make_test_filesystem_with_client(client, bucket, &Default::default(), Default::default()),
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

fn set_response_headers(mut then: Then, headers: &[(&str, &str)]) -> Then {
    for (key, value) in headers.iter() {
        then = then.header(*key, *value);
    }
    then
}
