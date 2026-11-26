//! Tests of the errno and the error metadata of failed metadata requests.

use std::time::Duration;

use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_client::error_metadata::ClientErrorMetadata;
use mountpoint_s3_fs::fs::error_metadata::{
    ErrorMetadata, MOUNTPOINT_ERROR_CLIENT, MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT,
};
use mountpoint_s3_fs::fs::{CacheConfig, INodeNo, OpenFlags, RenameFlags, ToErrno};
use mountpoint_s3_fs::s3::S3Personality;
use mountpoint_s3_fs::{S3Filesystem, S3FilesystemConfig};
use test_case::test_case;

use crate::common::DirectoryReply;
use crate::common::mock_server::{AddObjectRequest, DIRECTORY_BUCKET, Error, MockServerGuard, Occurrence, Operation};
use crate::make_mock_server_filesystem;

/// The key of the object that each case of [test_metadata_error] operates on.
const KEY: &str = "file";

/// The name that the rename cases of [test_metadata_error] rename [KEY] to.
const NEW_NAME: &str = "renamed";

/// A file system operation that sends a metadata request for [KEY] or its directory.
#[derive(Debug, Clone, Copy)]
enum MetadataOperation {
    /// Look up [KEY]: HeadObject and ListObjectsV2.
    Lookup,
    /// List the root directory: ListObjectsV2.
    Readdir,
    /// Remove [KEY] after looking it up: DeleteObject.
    Unlink,
    /// Rename [KEY] to [NEW_NAME] without replacing an existing file, after looking up [NEW_NAME]
    /// as missing and another client creating it: RenameObject.
    Rename,
}

impl MetadataOperation {
    /// Run the operation on `fs` and return its error. The test fails if the operation succeeds.
    async fn run_to_error(self, fs: &MockServerGuard<S3Filesystem<S3CrtClient>>) -> mountpoint_s3_fs::fs::Error {
        let result = match self {
            Self::Lookup => fs.lookup(INodeNo::ROOT, KEY.as_ref()).await.map(|_| ()),
            Self::Readdir => match fs.opendir(INodeNo::ROOT, OpenFlags::empty()).await {
                Ok(opened) => {
                    let mut reply = DirectoryReply::default();
                    fs.readdirplus(INodeNo::ROOT, opened.fh, 0, &mut reply).await
                }
                Err(error) => Err(error),
            },
            Self::Unlink => {
                fs.lookup(INodeNo::ROOT, KEY.as_ref())
                    .await
                    .expect("the lookup before the unlink should succeed");
                fs.unlink(INodeNo::ROOT, KEY.as_ref()).await
            }
            Self::Rename => {
                fs.lookup(INodeNo::ROOT, NEW_NAME.as_ref())
                    .await
                    .expect_err("the new name should be missing");
                fs.server()
                    .add_object(NEW_NAME, AddObjectRequest::new(vec![0xbb; 3]))
                    .await;
                fs.rename(
                    INodeNo::ROOT,
                    KEY.as_ref(),
                    INodeNo::ROOT,
                    NEW_NAME.as_ref(),
                    RenameFlags::empty(),
                )
                .await
            }
        };
        result.expect_err("the operation should fail")
    }
}

/// The error metadata of an error that the file system reports without the S3 error.
fn no_metadata() -> ErrorMetadata {
    ErrorMetadata::default()
}

/// The error metadata of a lookup of a name that doesn't exist, which the event log skips.
fn lookup_nonexistent() -> ErrorMetadata {
    ErrorMetadata {
        error_code: Some(MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT.to_owned()),
        ..Default::default()
    }
}

/// The error metadata of a failed request for `key`, with the HTTP status, S3 error code and
/// message that the client reports.
fn client_error(key: &str, status: Option<i32>, code: Option<&str>, message: Option<&str>) -> ErrorMetadata {
    ErrorMetadata {
        client_error_meta: ClientErrorMetadata {
            http_code: status,
            error_code: code.map(str::to_owned),
            error_message: message.map(str::to_owned),
        },
        error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_owned()),
        s3_bucket_name: Some(DIRECTORY_BUCKET.to_owned()),
        s3_object_key: Some(key.to_owned()),
    }
}

/// An S3 error response with any code, to inject in a case of [test_metadata_error].
fn custom_error(status: u16, code: &str, message: &str) -> Option<Error> {
    Some(Error::Custom {
        code: code.to_owned(),
        status: http::StatusCode::from_u16(status).unwrap(),
        message: message.to_owned(),
    })
}

const THROTTLED: &str = "Please reduce your request rate.";
const INTERNAL_ERROR: &str = "We encountered an internal error. Please try again.";

/// Checks the errno of a file system operation whose metadata request gets an S3 error response.
/// The test also checks the error metadata that the event log records for the failure.
///
/// The server injects `error` into each `s3_operation` request. The failed rename condition is the
/// server's own response instead: the CRT client recognizes it only from the `Condition` element of
/// the response, which injected errors don't have.
#[test_case(MetadataOperation::Lookup, Operation::HeadObject, Some(Error::NoSuchKey), libc::ENOENT, lookup_nonexistent(); "HeadObject not found")]
#[test_case(MetadataOperation::Lookup, Operation::HeadObject, Some(Error::AccessDenied), libc::EIO, client_error(KEY, Some(403), None, None); "HeadObject forbidden")]
#[test_case(MetadataOperation::Lookup, Operation::HeadObject, Some(Error::SlowDown), libc::EIO, client_error(KEY, Some(503), Some("SlowDown"), Some(THROTTLED)); "HeadObject throttled")]
#[test_case(MetadataOperation::Lookup, Operation::HeadObject, custom_error(500, "InternalError", INTERNAL_ERROR), libc::EIO, client_error(KEY, None, None, None); "HeadObject internal error")]
#[test_case(MetadataOperation::Lookup, Operation::ListObjectsV2, Some(Error::NoSuchBucket), libc::EIO, client_error(KEY, None, None, None); "ListObjectsV2 no such bucket")]
#[test_case(MetadataOperation::Lookup, Operation::ListObjectsV2, Some(Error::AccessDenied), libc::EIO, client_error(KEY, Some(403), Some("AccessDenied"), Some("Access Denied")); "ListObjectsV2 access denied")]
#[test_case(MetadataOperation::Lookup, Operation::ListObjectsV2, Some(Error::SlowDown), libc::EIO, client_error(KEY, Some(503), Some("SlowDown"), Some(THROTTLED)); "ListObjectsV2 throttled")]
#[test_case(MetadataOperation::Lookup, Operation::ListObjectsV2, custom_error(500, "InternalError", INTERNAL_ERROR), libc::EIO, client_error(KEY, None, None, None); "ListObjectsV2 internal error")]
#[test_case(MetadataOperation::Readdir, Operation::ListObjectsV2, Some(Error::AccessDenied), libc::EIO, client_error("", Some(403), Some("AccessDenied"), Some("Access Denied")); "readdir ListObjectsV2 access denied")]
#[test_case(MetadataOperation::Unlink, Operation::DeleteObject, Some(Error::NoSuchBucket), libc::EIO, client_error(KEY, None, None, None); "DeleteObject no such bucket")]
#[test_case(MetadataOperation::Unlink, Operation::DeleteObject, Some(Error::AccessDenied), libc::EIO, client_error(KEY, Some(403), Some("AccessDenied"), Some("Access Denied")); "DeleteObject access denied")]
#[test_case(MetadataOperation::Unlink, Operation::DeleteObject, Some(Error::SlowDown), libc::EIO, client_error(KEY, Some(503), Some("SlowDown"), Some(THROTTLED)); "DeleteObject throttled")]
#[test_case(MetadataOperation::Unlink, Operation::DeleteObject, custom_error(500, "InternalError", INTERNAL_ERROR), libc::EIO, client_error(KEY, None, None, None); "DeleteObject internal error")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, Some(Error::NoSuchKey), libc::ENOENT, no_metadata(); "RenameObject no such key")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, None, libc::EEXIST, no_metadata(); "RenameObject precondition failed")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, Some(Error::NotImplemented), libc::ENOSYS, no_metadata(); "RenameObject not implemented")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, custom_error(400, "KeyTooLong", "Your key is too long"), libc::ENAMETOOLONG, no_metadata(); "RenameObject key too long")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, Some(Error::InvalidRequest("Invalid request")), libc::EIO, client_error(KEY, None, None, None); "RenameObject invalid request")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, Some(Error::AccessDenied), libc::EIO, client_error(KEY, Some(403), Some("AccessDenied"), Some("Access Denied")); "RenameObject access denied")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, Some(Error::SlowDown), libc::EIO, client_error(KEY, Some(503), Some("SlowDown"), Some(THROTTLED)); "RenameObject throttled")]
#[test_case(MetadataOperation::Rename, Operation::RenameObject, custom_error(500, "InternalError", INTERNAL_ERROR), libc::EIO, client_error(KEY, None, None, None); "RenameObject internal error")]
#[tokio::test]
async fn test_metadata_error(
    fs_operation: MetadataOperation,
    s3_operation: Operation,
    error: Option<Error>,
    expected_errno: i32,
    expected_metadata: ErrorMetadata,
) {
    // The file system can delete files. It treats the bucket as a directory bucket, which serves
    // renames. It serves lookups from its cache, including those of missing names. A rename can
    // then target a name that it looked up as missing before another client created it.
    let config = S3FilesystemConfig {
        allow_delete: true,
        s3_personality: S3Personality::ExpressOneZone,
        cache_config: CacheConfig {
            serve_lookup_from_cache: true,
            use_negative_cache: true,
            negative_cache_ttl: Duration::from_secs(3600),
            ..Default::default()
        },
        ..Default::default()
    };
    let fs = make_mock_server_filesystem(&Default::default(), config).await;
    let server = fs.server();
    server.add_object(KEY, AddObjectRequest::new(vec![0xaa; 5])).await;
    if let Some(error) = error {
        server.inject_error(s3_operation, None, error, 0, Occurrence::Always);
    }
    let requests = server.new_counter(s3_operation);

    let error = fs_operation.run_to_error(&fs).await;
    assert!(requests.count() > 0, "no {s3_operation:?} request");
    assert_eq!(
        (i32::from(error.to_errno()), error.meta().clone()),
        (expected_errno, expected_metadata)
    );
}
