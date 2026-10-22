//! The S3 metadata operations the [Superblock](super::Superblock) needs, as a narrow interface.
//!
//! The superblock only issues HeadObject, ListObjectsV2, DeleteObject and RenameObject, and only
//! uses a few fields of their responses. The interface is shaped after exactly that: plain request
//! parameters, and small result types ([HeadInfo], [ListPage]) holding what the superblock reads.
//! Each implementation translates its client's types into these:
//!
//! * every [ObjectClient] (e.g. `S3CrtClient`), through a blanket implementation;
//! * [InMemoryMetadata], a synchronous in-memory backend for tests.

use std::fmt;

use async_trait::async_trait;
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::error::{
    DeleteObjectError, HeadObjectError, ListObjectsError, ObjectClientError, RenameObjectError,
};
use mountpoint_s3_client::error_metadata::{ClientErrorMetadata, ProvideErrorMetadata};
use mountpoint_s3_client::types::{
    HeadObjectParams, HeadObjectResult, ListObjectsResult, RenameObjectParams, RestoreStatus,
};
use time::OffsetDateTime;

/// S3 metadata operations used by the superblock.
#[async_trait]
pub trait MetadataClient: Send + Sync {
    /// HeadObject `key`.
    async fn head_object(&self, bucket: &str, key: &str) -> Result<HeadInfo, MetadataError>;

    /// One ListObjectsV2 page, including the restore status of archived objects. An empty
    /// `delimiter` lists without a delimiter.
    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListPage, MetadataError>;

    /// DeleteObject `key`.
    async fn delete_object(&self, bucket: &str, key: &str) -> Result<(), MetadataError>;

    /// RenameObject `src_key` to `dst_key`. Unless `overwrite`, fails with
    /// [PreconditionFailed](MetadataErrorKind::PreconditionFailed) if the destination exists.
    // An ETag precondition on the source could be added here in the future.
    async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        overwrite: bool,
    ) -> Result<(), MetadataError>;
}

/// The parts of a HeadObject response the superblock uses.
#[derive(Debug, Clone)]
pub struct HeadInfo {
    pub size: u64,
    pub last_modified: OffsetDateTime,
    pub etag: String,
    pub storage_class: Option<String>,
    pub restore_status: Option<RestoreStatus>,
}

/// An object in a ListObjectsV2 page.
#[derive(Debug, Clone)]
pub struct ListedObject {
    pub key: String,
    pub size: u64,
    pub last_modified: OffsetDateTime,
    pub etag: String,
    pub storage_class: Option<String>,
    pub restore_status: Option<RestoreStatus>,
}

/// The parts of a ListObjectsV2 page the superblock uses.
#[derive(Debug, Clone, Default)]
pub struct ListPage {
    pub objects: Vec<ListedObject>,
    pub common_prefixes: Vec<String>,
    pub next_continuation_token: Option<String>,
}

/// Error from a [MetadataClient] operation.
///
/// The [kind](Self::kind) classifies the failures the superblock handles specifically. The source
/// is the underlying client error: it keeps providing its [ClientErrorMetadata] (S3 error code and
/// message, request id) through [ProvideErrorMetadata], and this error is transparent for display
/// and [source](std::error::Error::source), so logs and error metadata are unchanged.
pub struct MetadataError {
    kind: MetadataErrorKind,
    source: Box<dyn MetadataErrorSource>,
}

/// The failures of metadata operations the superblock distinguishes. Each can be determined from
/// an S3 error response (status and error code), so any client can classify its errors.
#[derive(Debug, PartialEq, Eq)]
#[non_exhaustive]
pub enum MetadataErrorKind {
    /// The key does not exist (HeadObject 404, RenameObject source not found).
    NotFound,
    /// A precondition of the request was not met (HTTP 412).
    PreconditionFailed,
    /// The operation is not supported by the bucket (e.g. RenameObject on general purpose buckets).
    NotImplemented,
    /// The key is too long.
    KeyTooLong,
    /// Any other failure.
    Other,
}

/// A client error that can be the source of a [MetadataError].
pub trait MetadataErrorSource: std::error::Error + ProvideErrorMetadata + Send + Sync + 'static {}

impl<T: std::error::Error + ProvideErrorMetadata + Send + Sync + 'static> MetadataErrorSource for T {}

impl MetadataError {
    /// A new error of the given kind, caused by `source`.
    pub fn new(kind: MetadataErrorKind, source: impl MetadataErrorSource) -> Self {
        Self {
            kind,
            source: Box::new(source),
        }
    }

    /// What kind of failure this is.
    pub fn kind(&self) -> &MetadataErrorKind {
        &self.kind
    }

    /// Classify a HeadObject error from an [ObjectClient].
    pub fn from_head_object<E: MetadataErrorSource>(error: ObjectClientError<HeadObjectError, E>) -> Self {
        let kind = match &error {
            ObjectClientError::ServiceError(HeadObjectError::NotFound) => MetadataErrorKind::NotFound,
            _ => MetadataErrorKind::Other,
        };
        Self::new(kind, error)
    }

    /// Classify a ListObjectsV2 error from an [ObjectClient].
    pub fn from_list_objects<E: MetadataErrorSource>(error: ObjectClientError<ListObjectsError, E>) -> Self {
        Self::new(MetadataErrorKind::Other, error)
    }

    /// Classify a DeleteObject error from an [ObjectClient].
    pub fn from_delete_object<E: MetadataErrorSource>(error: ObjectClientError<DeleteObjectError, E>) -> Self {
        Self::new(MetadataErrorKind::Other, error)
    }

    /// Classify a RenameObject error from an [ObjectClient].
    pub fn from_rename_object<E: MetadataErrorSource>(error: ObjectClientError<RenameObjectError, E>) -> Self {
        let kind = match &error {
            ObjectClientError::ServiceError(RenameObjectError::KeyNotFound) => MetadataErrorKind::NotFound,
            ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(_)) => {
                MetadataErrorKind::PreconditionFailed
            }
            ObjectClientError::ServiceError(RenameObjectError::KeyTooLong) => MetadataErrorKind::KeyTooLong,
            ObjectClientError::ServiceError(RenameObjectError::NotImplementedError) => {
                MetadataErrorKind::NotImplemented
            }
            _ => MetadataErrorKind::Other,
        };
        Self::new(kind, error)
    }
}

impl fmt::Debug for MetadataError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("MetadataError")
            .field("kind", &self.kind)
            .field("source", &self.source)
            .finish()
    }
}

impl fmt::Display for MetadataError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Display::fmt(&self.source, f)
    }
}

impl std::error::Error for MetadataError {
    fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        self.source.source()
    }
}

impl ProvideErrorMetadata for MetadataError {
    fn meta(&self) -> ClientErrorMetadata {
        self.source.meta()
    }
}

impl From<HeadObjectResult> for HeadInfo {
    fn from(result: HeadObjectResult) -> Self {
        Self {
            size: result.size,
            last_modified: result.last_modified,
            etag: result.etag.into_inner(),
            storage_class: result.storage_class,
            restore_status: result.restore_status,
        }
    }
}

impl From<ListObjectsResult> for ListPage {
    fn from(result: ListObjectsResult) -> Self {
        Self {
            objects: result
                .objects
                .into_iter()
                .map(|object| ListedObject {
                    key: object.key,
                    size: object.size,
                    last_modified: object.last_modified,
                    etag: object.etag,
                    storage_class: object.storage_class,
                    restore_status: object.restore_status,
                })
                .collect(),
            common_prefixes: result.common_prefixes,
            next_continuation_token: result.next_continuation_token,
        }
    }
}

/// RenameObject parameters for an [ObjectClient] rename that may or may not overwrite.
fn rename_params(overwrite: bool) -> RenameObjectParams {
    if overwrite {
        RenameObjectParams::new()
    } else {
        RenameObjectParams::new().if_none_match(Some("*".to_string()))
    }
}

#[async_trait]
impl<C> MetadataClient for C
where
    C: ObjectClient + Send + Sync,
{
    async fn head_object(&self, bucket: &str, key: &str) -> Result<HeadInfo, MetadataError> {
        ObjectClient::head_object(self, bucket, key, &HeadObjectParams::new())
            .await
            .map(HeadInfo::from)
            .map_err(MetadataError::from_head_object)
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListPage, MetadataError> {
        ObjectClient::list_objects(self, bucket, continuation_token, delimiter, max_keys, prefix)
            .await
            .map(ListPage::from)
            .map_err(MetadataError::from_list_objects)
    }

    async fn delete_object(&self, bucket: &str, key: &str) -> Result<(), MetadataError> {
        ObjectClient::delete_object(self, bucket, key)
            .await
            .map(|_| ())
            .map_err(MetadataError::from_delete_object)
    }

    async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        overwrite: bool,
    ) -> Result<(), MetadataError> {
        ObjectClient::rename_object(self, bucket, src_key, dst_key, &rename_params(overwrite))
            .await
            .map(|_| ())
            .map_err(MetadataError::from_rename_object)
    }
}

/// In-memory [MetadataClient] over a [MockBucket](mountpoint_s3_client::mock_client::MockBucket).
///
/// Operations complete on the first poll, without threads or I/O, so schedules are deterministic
/// under shuttle. The bucket can be shared with a
/// [MockClient](mountpoint_s3_client::mock_client::MockClient) serving the data path
/// ([MockClient::mock_bucket](mountpoint_s3_client::mock_client::MockClient::mock_bucket)).
#[cfg(any(test, feature = "mock"))]
#[derive(Debug, Clone)]
pub struct InMemoryMetadata {
    // A std `Arc`, not `crate::sync::Arc`, so that the bucket can be shared with a `MockClient`.
    // Shuttle would gain little from its own `Arc`: `MockBucket` uses std locks, which shuttle
    // does not control either.
    bucket: std::sync::Arc<mountpoint_s3_client::mock_client::MockBucket>,
}

#[cfg(any(test, feature = "mock"))]
impl InMemoryMetadata {
    /// A metadata client over `bucket`.
    pub fn new(bucket: std::sync::Arc<mountpoint_s3_client::mock_client::MockBucket>) -> Self {
        Self { bucket }
    }

    /// The underlying bucket.
    pub fn bucket(&self) -> &std::sync::Arc<mountpoint_s3_client::mock_client::MockBucket> {
        &self.bucket
    }
}

#[cfg(any(test, feature = "mock"))]
#[async_trait]
impl MetadataClient for InMemoryMetadata {
    async fn head_object(&self, bucket: &str, key: &str) -> Result<HeadInfo, MetadataError> {
        self.bucket
            .head_object(bucket, key, &HeadObjectParams::new())
            .map(HeadInfo::from)
            .map_err(MetadataError::from_head_object)
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListPage, MetadataError> {
        self.bucket
            .list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .map(ListPage::from)
            .map_err(MetadataError::from_list_objects)
    }

    async fn delete_object(&self, bucket: &str, key: &str) -> Result<(), MetadataError> {
        self.bucket
            .delete_object(bucket, key)
            .map(|_| ())
            .map_err(MetadataError::from_delete_object)
    }

    async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        overwrite: bool,
    ) -> Result<(), MetadataError> {
        self.bucket
            .rename_object(bucket, src_key, dst_key, &rename_params(overwrite))
            .map(|_| ())
            .map_err(MetadataError::from_rename_object)
    }
}

#[cfg(test)]
mod tests {
    use std::error::Error as _;

    use futures::executor::block_on;
    use mountpoint_s3_client::error_metadata::ClientErrorMetadata;
    use mountpoint_s3_client::mock_client::{MockBucket, MockObject};
    use mountpoint_s3_client::types::RenamePreconditionTypes;

    use super::*;

    /// A client error with metadata, standing in for a CRT error with an S3 error response.
    #[derive(Debug, thiserror::Error)]
    #[error("client failed")]
    struct TestClientError(#[source] std::io::Error);

    impl ProvideErrorMetadata for TestClientError {
        fn meta(&self) -> ClientErrorMetadata {
            ClientErrorMetadata {
                http_code: Some(403),
                error_code: Some("AccessDenied".to_string()),
                error_message: Some("Access Denied".to_string()),
            }
        }
    }

    #[test]
    fn keeps_source_metadata_display_and_chain() {
        let client_error: ObjectClientError<HeadObjectError, TestClientError> =
            ObjectClientError::ClientError(TestClientError(std::io::Error::other("root cause")));
        let expected_display = client_error.to_string();
        let error = MetadataError::from_head_object(client_error);

        assert_eq!(error.kind(), &MetadataErrorKind::Other);
        assert_eq!(error.meta().error_code.as_deref(), Some("AccessDenied"));
        assert_eq!(error.meta().http_code, Some(403));
        assert_eq!(error.to_string(), expected_display);
        // Transparent: the chain continues with the source's own source.
        assert_eq!(error.source().unwrap().to_string(), "client failed");
    }

    #[test]
    fn classifies_errors() {
        let not_found: ObjectClientError<HeadObjectError, TestClientError> =
            ObjectClientError::ServiceError(HeadObjectError::NotFound);
        assert_eq!(
            MetadataError::from_head_object(not_found).kind(),
            &MetadataErrorKind::NotFound
        );

        let cases: Vec<(RenameObjectError, MetadataErrorKind)> = vec![
            (RenameObjectError::KeyNotFound, MetadataErrorKind::NotFound),
            (RenameObjectError::KeyTooLong, MetadataErrorKind::KeyTooLong),
            (
                RenameObjectError::NotImplementedError,
                MetadataErrorKind::NotImplemented,
            ),
            (
                RenameObjectError::PreConditionFailed(RenamePreconditionTypes::IfNoneMatch),
                MetadataErrorKind::PreconditionFailed,
            ),
            (RenameObjectError::BadRequest, MetadataErrorKind::Other),
        ];
        for (error, kind) in cases {
            let error: ObjectClientError<RenameObjectError, TestClientError> = ObjectClientError::ServiceError(error);
            assert_eq!(MetadataError::from_rename_object(error).kind(), &kind);
        }
    }

    fn in_memory(enable_rename: bool) -> InMemoryMetadata {
        InMemoryMetadata::new(std::sync::Arc::new(
            MockBucket::config().name("bucket").enable_rename(enable_rename).build(),
        ))
    }

    #[test]
    fn in_memory_head_and_list() {
        let client = in_memory(false);
        let mut object = MockObject::from(b"hello");
        object.set_storage_class(Some("GLACIER".to_owned()));
        client.bucket().add_object("dir/file", object);

        let head = block_on(client.head_object("bucket", "dir/file")).unwrap();
        assert_eq!(head.size, 5);
        assert_eq!(head.storage_class.as_deref(), Some("GLACIER"));

        let list = block_on(client.list_objects("bucket", None, "/", 1000, "")).unwrap();
        assert_eq!(list.common_prefixes, ["dir/"]);
        assert!(list.objects.is_empty());
        assert_eq!(list.next_continuation_token, None);

        let missing = block_on(client.head_object("bucket", "nope")).unwrap_err();
        assert_eq!(missing.kind(), &MetadataErrorKind::NotFound);
    }

    #[test]
    fn in_memory_rename_overwrite() {
        let client = in_memory(true);
        client.bucket().add_object("a", MockObject::from(b"a"));
        client.bucket().add_object("b", MockObject::from(b"b"));
        let error = block_on(client.rename_object("bucket", "a", "b", false)).unwrap_err();
        assert_eq!(error.kind(), &MetadataErrorKind::PreconditionFailed);
        block_on(client.rename_object("bucket", "a", "b", true)).unwrap();
        assert!(!client.bucket().contains_key("a"));
    }
}
