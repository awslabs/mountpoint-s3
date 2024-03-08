use async_trait::async_trait;
use auto_impl::auto_impl;
use futures::Stream;
use std::str::FromStr;
use std::time::SystemTime;
use std::{
    fmt::{self, Debug},
    ops::Range,
    string::ParseError,
};
use thiserror::Error;
use time::OffsetDateTime;

/// A single element of a [`get_object`](ObjectClient::get_object) response stream is a pair of
/// offset within the object and the bytes starting at that offset.
pub type GetBodyPart = (u64, Box<[u8]>);

/// An ETag (entity tag) is a unique identifier for a HTTP object.
///
/// New ETags can be created with the [`FromStr`] implementation.
#[derive(Debug, Clone, Hash, PartialEq, Eq)]
pub struct ETag(String);

impl ETag {
    /// Get the ETag as a string
    pub fn as_str(&self) -> &str {
        &self.0
    }

    /// Unpack the [String] contained by the [ETag] wrapper
    pub fn into_inner(self) -> String {
        self.0
    }

    /// Creating default etag for tests
    #[doc(hidden)]
    pub fn for_tests() -> Self {
        Self("test_etag".to_string())
    }

    /// Creating unique etag from bytes
    #[doc(hidden)]
    #[cfg(feature = "mock")]
    pub fn from_object_bytes(data: &[u8]) -> Self {
        use md5::Digest as _;

        let mut hasher = md5::Md5::new();
        hasher.update(data);

        let hash = hasher.finalize();
        let result = format!("{:x}", hash);
        Self(result)
    }
}

impl FromStr for ETag {
    type Err = ParseError;
    fn from_str(value: &str) -> Result<Self, Self::Err> {
        let etag = value.to_string();
        Ok(ETag(etag))
    }
}

/// A generic interface to S3-like object storage services.
///
/// This trait defines the common methods that all object services implement.
///
/// This is an async trait defined with the [async-trait](https://crates.io/crates/async-trait)
/// crate, and so implementations of this trait must use the `#[async_trait::async_trait]`
/// attribute.
#[cfg_attr(not(docs_rs), async_trait)]
#[auto_impl(Arc)]
pub trait ObjectClient {
    type GetObjectResult: Stream<Item = ObjectClientResult<GetBodyPart, GetObjectError, Self::ClientError>> + Send;
    type PutObjectRequest: PutObjectRequest<ClientError = Self::ClientError>;
    type ClientError: std::error::Error + Send + Sync + 'static;

    /// Query the part size this client uses for PUT and GET operations to the object store. This
    /// can be `None` if the client does not do multi-part operations.
    fn part_size(&self) -> Option<usize>;

    /// Delete a single object from the object store.
    ///
    /// DeleteObject will succeed even if the object within the bucket does not exist.
    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError>;

    /// Get an object from the object store. Returns a stream of body parts of the object. Parts are
    /// guaranteed to be returned by the stream in order and contiguously.
    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        if_match: Option<ETag>,
    ) -> ObjectClientResult<Self::GetObjectResult, GetObjectError, Self::ClientError>;

    /// List the objects in a bucket under a given prefix
    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ObjectClientResult<ListObjectsResult, ListObjectsError, Self::ClientError>;

    /// Retrieve object metadata without retrieving the object contents
    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError>;

    /// Put an object into the object store. Returns a [PutObjectRequest] for callers
    /// to provide the content of the object.
    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError>;

    /// Retrieves all the metadata from an object without returning the object contents.
    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        max_parts: Option<usize>,
        part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError>;
}

/// The top-level error type returned by calls to an [`ObjectClient`].
///
/// Errors that are explicitly modeled on a per-request-type basis are [`ServiceError`]s. Other
/// generic or unhandled errors are [`ClientError`]s.
///
/// The distinction between these two types of error can sometimes be blurry. As a rough heuristic,
/// [`ServiceError`]s are those that *any reasonable implementation* of an object client would be
/// capable of experiencing, and [`ClientError`]s are anything else. For example, any object client
/// could experience a "no such key" error, but only object clients that implement a permissions
/// system could experience "permission denied" errors. When in doubt, we err towards *not* adding
/// new [`ServiceError`]s, as they are public API for *every* object client.
///
/// [`ServiceError`]: ObjectClientError::ServiceError
/// [`ClientError`]: ObjectClientError::ClientError
#[derive(Debug, Error)]
pub enum ObjectClientError<S, C> {
    /// An error returned by the service itself
    #[error("Service error")]
    ServiceError(#[source] S),

    /// An error within the object client (for example, an unexpected response, or a failure to
    /// construct the request).
    #[error("Client error")]
    ClientError(#[from] C),
}

/// Shorthand type for the result of an object client request
pub type ObjectClientResult<T, S, C> = Result<T, ObjectClientError<S, C>>;

/// Errors returned by a [`get_object`](ObjectClient::get_object) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum GetObjectError {
    #[error("The bucket does not exist")]
    NoSuchBucket,

    #[error("The key does not exist")]
    NoSuchKey,

    #[error("At least one of the preconditions specified did not hold")]
    PreconditionFailed,
}

/// Result of a [`list_objects`](ObjectClient::list_objects) request
#[derive(Debug)]
#[non_exhaustive]
pub struct ListObjectsResult {
    /// The list of objects.
    pub objects: Vec<ObjectInfo>,

    /// The list of common prefixes. This rolls up all of the objects with a common prefix up to
    /// the next instance of the delimiter.
    pub common_prefixes: Vec<String>,

    /// If present, the continuation token to use to query more results.
    pub next_continuation_token: Option<String>,
}

/// Errors returned by a [`list_objects`](ObjectClient::list_objects) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum ListObjectsError {
    #[error("The bucket does not exist")]
    NoSuchBucket,
}

/// Result of a [`head_object`](ObjectClient::head_object) request
#[derive(Debug)]
#[non_exhaustive]
pub struct HeadObjectResult {
    /// The name of the bcuket
    pub bucket: String,

    /// Object metadata
    pub object: ObjectInfo,
}

/// Errors returned by a [`head_object`](ObjectClient::head_object) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum HeadObjectError {
    /// Note that HeadObject cannot distinguish between NoSuchBucket and NoSuchKey errors
    #[error("The object was not found")]
    NotFound,
}

/// Result of a [`delete_object`](ObjectClient::delete_object) request
///
/// Note: DeleteObject requests on a non-existent object within a bucket are considered a success.
// TODO: Populate this struct with return fields from the S3 API, e.g., version id, delete marker.
#[derive(Debug)]
#[non_exhaustive]
pub struct DeleteObjectResult {}

/// Errors returned by a [`delete_object`](ObjectClient::delete_object) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum DeleteObjectError {
    #[error("The bucket does not exist")]
    NoSuchBucket,
}

/// Result of a [`get_object_attributes`](ObjectClient::get_object_attributes) request
#[derive(Debug, Default)]
pub struct GetObjectAttributesResult {
    /// ETag of the object
    pub etag: Option<String>,

    /// Checksum of the object
    pub checksum: Option<Checksum>,

    /// Object parts metadata for multi part object
    pub object_parts: Option<GetObjectAttributesParts>,

    /// Storage class of the object
    pub storage_class: Option<String>,

    /// Object size
    pub object_size: Option<u64>,
}

/// Errors returned by a [`get_object_attributes`](ObjectClient::get_object_attributes) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum GetObjectAttributesError {
    #[error("The bucket does not exist")]
    NoSuchBucket,

    #[error("The key does not exist")]
    NoSuchKey,
}

/// Parameters to a [`put_object`](ObjectClient::put_object) request
#[derive(Debug, Default, Clone)]
#[non_exhaustive]
pub struct PutObjectParams {
    /// Enable Crc32c trailing checksums.
    pub trailing_checksums: bool,
    /// Storage class to be used when creating new S3 object
    pub storage_class: Option<String>,
    /// The server-side encryption algorithm to be used for this object in Amazon S3 (for example, AES256, aws:kms, aws:kms:dsse)
    pub server_side_encryption: Option<String>,
    /// If `server_side_encryption` has a valid value of aws:kms or aws:kms:dsse, this value may be used to specify AWS KMS key ID to be used
    /// when creating new S3 object
    pub ssekms_key_id: Option<String>,
}

impl PutObjectParams {
    /// Create a default [PutObjectParams].
    pub fn new() -> Self {
        Self::default()
    }

    /// Set Crc32c trailing checksums.
    pub fn trailing_checksums(mut self, value: bool) -> Self {
        self.trailing_checksums = value;
        self
    }

    /// Set the storage class.
    pub fn storage_class(mut self, value: String) -> Self {
        self.storage_class = Some(value);
        self
    }

    /// Set server-side encryption type.
    pub fn server_side_encryption(mut self, value: Option<String>) -> Self {
        self.server_side_encryption = value;
        self
    }

    /// Set KMS key ID to be used for server-side encryption.
    pub fn ssekms_key_id(mut self, value: Option<String>) -> Self {
        self.ssekms_key_id = value;
        self
    }
}

/// Info for the caller to review before an upload completes.
pub type UploadReview = mountpoint_s3_crt::s3::client::UploadReview;

/// Info about a single part, for the caller to review before the upload completes.
pub type UploadReviewPart = mountpoint_s3_crt::s3::client::UploadReviewPart;

/// Checksum algorithm.
pub type ChecksumAlgorithm = mountpoint_s3_crt::s3::client::ChecksumAlgorithm;

/// A streaming put request which allows callers to asynchronously write the body of the request.
///
/// You can call the [`write`](Self::write) method to write data to the object, and then call
/// [`complete`](Self::complete) to complete the upload. Alternatively, you can call
/// [`review_and_complete`](Self::review_and_complete) to review the upload before completing it,
/// giving the chance to cancel the request if the upload is not as expected.
///
/// This is an async trait defined with the [async-trait](https://crates.io/crates/async-trait)
/// crate, and so implementations of this trait must use the `#[async_trait::async_trait]`
/// attribute.
#[cfg_attr(not(docs_rs), async_trait)]
pub trait PutObjectRequest: Send {
    type ClientError: std::error::Error + Send + Sync + 'static;

    /// Write the given slice to the put request body.
    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError>;

    /// Complete the put request and return a [`PutObjectResult`].
    async fn complete(self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError>;

    /// Review and complete the put request and return a [`PutObjectResult`].
    async fn review_and_complete(
        self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError>;
}

/// Result of a [ObjectClient::put_object] request
// TODO: Populate this struct with return fields from the S3 API, e.g., etag.
#[derive(Debug)]
#[non_exhaustive]
pub struct PutObjectResult {
    /// Server-side encryption type that was used to store new object (reported by S3)
    pub sse_type: Option<String>,
    /// Server-side encryption KMS key ID that was used to store new object (reported by S3)
    pub sse_kms_key_id: Option<String>,
}

/// Errors returned by a [`put_object`](ObjectClient::put_object) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum PutObjectError {
    #[error("The bucket does not exist")]
    NoSuchBucket,
}

/// Restoration status for S3 objects in flexible retrieval storage classes.
///
/// See [Checking restore status and expiration
/// date](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects.html#restore-archived-objects-status)
/// in the *Amazon S3 User Guide* for more details.
#[derive(Debug, Clone, Copy)]
pub enum RestoreStatus {
    /// S3 returns this status after it accepted a restoration request, but not have completed it yet.
    /// Objects with this status are not readable.
    InProgress,

    /// This status means that restoration is fully completed. Note that restored objects are stored only
    /// for the number of days that was specified in the request.
    Restored { expiry: SystemTime },
}

/// Metadata about a single S3 object.
///
/// See [Object](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Object.html) in the *Amazon S3
/// API Reference* for more details.
#[derive(Debug, Clone)]
pub struct ObjectInfo {
    /// Key for this object.
    pub key: String,

    /// Size of this object in bytes.
    pub size: u64,

    /// The time this object was last modified.
    pub last_modified: OffsetDateTime,

    /// Storage class for this object. Optional because head_object does not return
    /// the storage class in its response for Standard objects. See examples in the [*Amazon S3 API
    /// Reference*](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html#API_HeadObject_Examples)
    pub storage_class: Option<String>,

    /// Objects in flexible retrieval storage classes (such as GLACIER and DEEP_ARCHIVE) are only
    /// accessible after restoration
    pub restore_status: Option<RestoreStatus>,

    /// Entity tag of this object.
    pub etag: String,
}

/// All possible object attributes that can be retrived from [ObjectClient::get_object_attributes].
/// Fields that you do not specify are not returned.
#[derive(Debug)]
pub enum ObjectAttribute {
    /// ETag of the object
    ETag,

    /// Checksum of the object
    Checksum,

    /// Object parts metadata for multi part object
    ObjectParts,

    /// Storage class of the object
    StorageClass,

    /// Object size
    ObjectSize,
}

impl fmt::Display for ObjectAttribute {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let attr_name = match self {
            ObjectAttribute::ETag => "ETag",
            ObjectAttribute::Checksum => "Checksum",
            ObjectAttribute::ObjectParts => "ObjectParts",
            ObjectAttribute::StorageClass => "StorageClass",
            ObjectAttribute::ObjectSize => "ObjectSize",
        };
        write!(f, "{}", attr_name)
    }
}

/// Metadata about object checksum.
///
/// See [Checksum](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Checksum.html) in the *Amazon
/// S3 API Reference* for more details.
#[derive(Debug)]
pub struct Checksum {
    /// Base64-encoded, 32-bit CRC32 checksum of the object
    pub checksum_crc32: Option<String>,

    /// Base64-encoded, 32-bit CRC32C checksum of the object
    pub checksum_crc32c: Option<String>,

    /// Base64-encoded, 160-bit SHA-1 digest of the object
    pub checksum_sha1: Option<String>,

    /// Base64-encoded, 256-bit SHA-256 digest of the object
    pub checksum_sha256: Option<String>,
}

/// Metadata about object parts from GetObjectAttributes API.
///
/// See [GetObjectAttributesParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributesParts.html)
/// in the *Amazon S3 API Reference* for more details.
#[derive(Debug)]
pub struct GetObjectAttributesParts {
    /// Indicates whether the returned list of parts is truncated
    pub is_truncated: Option<bool>,

    /// Maximum number of parts allowed in the response
    pub max_parts: Option<usize>,

    /// When a list is truncated, this element specifies the next marker
    pub next_part_number_marker: Option<usize>,

    /// The marker for the current part
    pub part_number_marker: Option<usize>,

    /// Array of metadata for particular parts
    pub parts: Option<Vec<ObjectPart>>,

    /// Total number of parts
    pub total_parts_count: Option<usize>,
}

/// Metadata for an individual object part.
///
/// See [ObjectPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ObjectPart.html) in the
/// *Amazon S3 API Reference* for more details.
#[derive(Debug)]
pub struct ObjectPart {
    /// Checksum of the object
    pub checksum: Option<Checksum>,

    /// Number of the part, this value is a positive integer between 1 and 10,000
    pub part_number: usize,

    /// Size of the part in bytes
    pub size: usize,
}
