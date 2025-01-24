use std::fmt::{self, Debug};
use std::ops::Range;
use std::time::SystemTime;

use async_trait::async_trait;
use auto_impl::auto_impl;
use futures::Stream;
use mountpoint_s3_crt::s3::client::BufferPoolUsageStats;
use std::collections::HashMap;
use thiserror::Error;
use time::OffsetDateTime;

use crate::checksums::{
    self, crc32_to_base64, crc32c_to_base64, crc64nvme_to_base64, sha1_to_base64, sha256_to_base64,
};
use crate::error_metadata::{ClientErrorMetadata, ProvideErrorMetadata};

mod etag;
pub use etag::ETag;

/// A generic interface to S3-like object storage services.
///
/// This trait defines the common methods that all object services implement.
///
/// This is an async trait defined with the [async-trait](https://crates.io/crates/async-trait)
/// crate, and so implementations of this trait must use the `#[async_trait::async_trait]`
/// attribute.
#[cfg_attr(not(docsrs), async_trait)]
#[auto_impl(Arc)]
pub trait ObjectClient {
    type GetObjectResponse: GetObjectResponse<ClientError = Self::ClientError>;
    type PutObjectRequest: PutObjectRequest<ClientError = Self::ClientError>;
    type ClientError: std::error::Error + ProvideErrorMetadata + Send + Sync + 'static;

    /// Query the part size this client uses for GET operations to the object store. This
    /// can be `None` if the client does not do multi-part operations.
    fn read_part_size(&self) -> Option<usize>;

    /// Query the part size this client uses for PUT operations to the object store. This
    /// can be `None` if the client does not do multi-part operations.
    fn write_part_size(&self) -> Option<usize>;

    /// Query the initial read window size this client uses for backpressure GetObject requests.
    /// This can be `None` if backpressure is disabled.
    fn initial_read_window_size(&self) -> Option<usize>;

    /// Query current memory usage stats for the client. This can be `None` if the client
    /// does not record the stats.
    fn mem_usage_stats(&self) -> Option<BufferPoolUsageStats>;

    /// Delete a single object from the object store.
    ///
    /// DeleteObject will succeed even if the object within the bucket does not exist.
    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError>;

    /// Create a copy of an existing object. Currently, this functionality has the following limitations:
    /// - Supported only for copying between matching bucket types:
    ///     - Standard S3 to Standard S3 buckets.
    ///     - S3 Express to S3 Express buckets.
    /// - Host header must use virtual host addressing style (path style is not supported) and both source and dest buckets must have dns compliant name.
    /// - Only {bucket}/{key} format is supported for source and passing arn as source will not work.
    /// - Source bucket is assumed to be in the same region as destination bucket.
    async fn copy_object(
        &self,
        source_bucket: &str,
        source_key: &str,
        destination_bucket: &str,
        destination_key: &str,
        params: &CopyObjectParams,
    ) -> ObjectClientResult<CopyObjectResult, CopyObjectError, Self::ClientError>;

    /// Get an object from the object store. Returns a stream of body parts of the object. Parts are
    /// guaranteed to be returned by the stream in order and contiguously.
    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        params: &GetObjectParams,
    ) -> ObjectClientResult<Self::GetObjectResponse, GetObjectError, Self::ClientError>;

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
        params: &HeadObjectParams,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError>;

    /// Put an object into the object store. Returns a [PutObjectRequest] for callers
    /// to provide the content of the object.
    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError>;

    /// Put an object into the object store.
    async fn put_object_single<'a>(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send + 'a,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError>;

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
#[derive(Debug, Error, PartialEq)]
pub enum ObjectClientError<S, C> {
    /// An error returned by the service itself
    #[error("Service error")]
    ServiceError(#[source] S),

    /// An error within the object client (for example, an unexpected response, or a failure to
    /// construct the request).
    #[error("Client error")]
    ClientError(#[from] C),
}

impl<S, C> ProvideErrorMetadata for ObjectClientError<S, C>
where
    C: ProvideErrorMetadata,
{
    fn meta(&self) -> ClientErrorMetadata {
        match self {
            Self::ClientError(err) => err.meta(),
            _ => Default::default(),
        }
    }
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

/// Parameters to a [`get_object`](ObjectClient::get_object) request
#[derive(Debug, Default, Clone)]
#[non_exhaustive]
pub struct GetObjectParams {
    pub range: Option<Range<u64>>,
    pub if_match: Option<ETag>,
    pub checksum_mode: Option<ChecksumMode>,
}

impl GetObjectParams {
    /// Create a default [GetObjectParams].
    pub fn new() -> Self {
        Self::default()
    }

    /// Set the range retrieved by the GetObject request
    pub fn range(mut self, value: Option<Range<u64>>) -> Self {
        self.range = value;
        self
    }

    /// Set the required etag on the object
    pub fn if_match(mut self, value: Option<ETag>) -> Self {
        self.if_match = value;
        self
    }

    /// Set option to retrieve checksum as part of the GetObject request
    pub fn checksum_mode(mut self, value: Option<ChecksumMode>) -> Self {
        self.checksum_mode = value;
        self
    }
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

/// Parameters to a [`head_object`](ObjectClient::head_object) request
#[derive(Debug, Default, Clone)]
#[non_exhaustive]
pub struct HeadObjectParams {
    /// Enable to retrieve checksum as part of the HeadObject request
    pub checksum_mode: Option<ChecksumMode>,
}

impl HeadObjectParams {
    /// Create a default [HeadObjectParams].
    pub fn new() -> Self {
        Self::default()
    }

    /// Set option to retrieve checksum as part of the HeadObject request
    pub fn checksum_mode(mut self, value: Option<ChecksumMode>) -> Self {
        self.checksum_mode = value;
        self
    }
}

/// Enable [ChecksumMode] to retrieve object checksums
#[non_exhaustive]
#[derive(Clone, Debug, PartialEq)]
pub enum ChecksumMode {
    /// Retrieve checksums
    Enabled,
}

/// Result of a [`head_object`](ObjectClient::head_object) request
#[derive(Debug)]
#[non_exhaustive]
pub struct HeadObjectResult {
    /// Size of the object in bytes.
    ///
    /// Refers to the `Content-Length` HTTP header for HeadObject.
    pub size: u64,

    /// The time this object was last modified.
    pub last_modified: OffsetDateTime,

    /// Entity tag of this object.
    pub etag: ETag,

    /// Storage class for this object.
    ///
    /// The value is optional because HeadObject does not return the storage class in its response
    /// for objects in the S3 Standard storage class.
    /// See examples in the
    /// [Amazon S3 API Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html#API_HeadObject_Examples).
    pub storage_class: Option<String>,

    /// Objects in flexible retrieval storage classes (such as GLACIER and DEEP_ARCHIVE) are only
    /// accessible after restoration
    pub restore_status: Option<RestoreStatus>,
    /// Checksum of the object.
    ///
    /// HeadObject must explicitly request for this field to be included,
    /// otherwise the values will be empty.
    pub checksum: Checksum,

    /// Server-side encryption type that was used to store the object.
    pub sse_type: Option<String>,

    /// Server-side encryption KMS key ID that was used to store the object.
    pub sse_kms_key_id: Option<String>,
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

/// Result of a [`copy_object`](ObjectClient::copy_object) request
#[derive(Debug)]
#[non_exhaustive]
pub struct CopyObjectResult {
    // TODO: Populate this struct with return fields from the S3 API, e.g., etag.
}

/// Errors returned by a [`copy_object`](ObjectClient::copy_object) request
#[derive(Debug, Error, PartialEq, Eq)]
#[non_exhaustive]
pub enum CopyObjectError {
    /// Note that CopyObject cannot distinguish between NoSuchBucket and NoSuchKey errors
    #[error("The object was not found")]
    NotFound,

    #[error("The source object of the COPY action is not in the active tier and is only stored in Amazon S3 Glacier.")]
    ObjectNotInActiveTierError,
}

/// Parameters to a [`copy_object`](ObjectClient::copy_object) request
#[derive(Debug, Default, Clone)]
#[non_exhaustive]
pub struct CopyObjectParams {
    // TODO: Populate this struct with fields as and when required to satisfy various use cases.
}

impl CopyObjectParams {
    /// Create a default [CopyObjectParams].
    pub fn new() -> Self {
        Self::default()
    }
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

pub type ObjectMetadata = HashMap<String, String>;

/// Parameters to a [`put_object`](ObjectClient::put_object) request
#[derive(Debug, Default, Clone)]
#[non_exhaustive]
pub struct PutObjectParams {
    /// Enable Crc32c trailing checksums.
    pub trailing_checksums: PutObjectTrailingChecksums,
    /// Storage class to be used when creating new S3 object
    pub storage_class: Option<String>,
    /// The server-side encryption algorithm to be used for this object in Amazon S3 (for example, AES256, aws:kms, aws:kms:dsse)
    pub server_side_encryption: Option<String>,
    /// If `server_side_encryption` has a valid value of aws:kms or aws:kms:dsse, this value may be used to specify AWS KMS key ID to be used
    /// when creating new S3 object
    pub ssekms_key_id: Option<String>,
    /// Custom headers to add to the request
    pub custom_headers: Vec<(String, String)>,
    /// User-defined object metadata
    pub object_metadata: ObjectMetadata,
}

impl PutObjectParams {
    /// Create a default [PutObjectParams].
    pub fn new() -> Self {
        Self::default()
    }

    /// Set Crc32c trailing checksums.
    pub fn trailing_checksums(mut self, value: PutObjectTrailingChecksums) -> Self {
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

    /// Add a custom header to the request.
    pub fn add_custom_header(mut self, name: String, value: String) -> Self {
        self.custom_headers.push((name, value));
        self
    }

    /// Set user defined object metadata.
    pub fn object_metadata(mut self, value: ObjectMetadata) -> Self {
        self.object_metadata = value;
        self
    }
}

/// How CRC32c checksums are used for parts of a multi-part PutObject request
#[derive(Debug, Default, Clone, Copy, PartialEq, Eq)]
pub enum PutObjectTrailingChecksums {
    /// Checksums are computed, passed to upload review, and also sent to S3
    Enabled,
    /// Checksums are computed, passed to upload review, but not sent to S3
    ReviewOnly,
    /// Checksums are not computed on the client side
    #[default]
    Disabled,
}

/// Info for the caller to review before an upload completes.
pub type UploadReview = mountpoint_s3_crt::s3::client::UploadReview;

/// Info about a single part, for the caller to review before the upload completes.
pub type UploadReviewPart = mountpoint_s3_crt::s3::client::UploadReviewPart;

/// A checksum algorithm used by the object client for integrity checks on uploads and downloads.
pub type ChecksumAlgorithm = mountpoint_s3_crt::s3::client::ChecksumAlgorithm;

/// Parameters to a [`put_object_single`](ObjectClient::put_object_single) request
#[derive(Debug, Default, Clone)]
#[non_exhaustive]
pub struct PutObjectSingleParams {
    /// User-provided checksum of the data to upload.
    pub checksum: Option<UploadChecksum>,
    /// Storage class to be used when creating new S3 object
    pub storage_class: Option<String>,
    /// The server-side encryption algorithm to be used for this object in Amazon S3 (for example, AES256, aws:kms, aws:kms:dsse)
    pub server_side_encryption: Option<String>,
    /// If `server_side_encryption` has a valid value of aws:kms or aws:kms:dsse, this value may be used to specify AWS KMS key ID to be used
    /// when creating new S3 object
    pub ssekms_key_id: Option<String>,
    /// Requires pre-existing object to match the given etag in order to perform the request
    pub if_match: Option<ETag>,
    /// Offset on the pre-existing object where to append the data in the request
    pub write_offset_bytes: Option<u64>,
    /// Custom headers to add to the request
    pub custom_headers: Vec<(String, String)>,
    /// User-defined object metadata
    pub object_metadata: ObjectMetadata,
}

impl PutObjectSingleParams {
    /// Create a default [PutObjectSingleParams].
    pub fn new() -> Self {
        Self::default()
    }

    /// Create a [PutObjectSingleParams] for an append request at the given offset.
    pub fn new_for_append(offset: u64) -> Self {
        Self::default().write_offset_bytes(offset)
    }

    /// Set checksum.
    pub fn checksum(mut self, value: Option<UploadChecksum>) -> Self {
        self.checksum = value;
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

    /// Set the required etag on the pre-existing object.
    pub fn if_match(mut self, value: Option<ETag>) -> Self {
        self.if_match = value;
        self
    }

    /// Set the offset on the pre-existing object where to append the data in the request.
    pub fn write_offset_bytes(mut self, value: u64) -> Self {
        self.write_offset_bytes = Some(value);
        self
    }

    /// Add a custom header to the request.
    pub fn add_custom_header(mut self, name: String, value: String) -> Self {
        self.custom_headers.push((name, value));
        self
    }

    /// Set user defined object metadata.
    pub fn object_metadata(mut self, value: ObjectMetadata) -> Self {
        self.object_metadata = value;
        self
    }
}

/// A checksum used by the object client for integrity checks on uploads.
#[derive(Debug, Clone)]
#[non_exhaustive]
pub enum UploadChecksum {
    Crc64nvme(checksums::Crc64nvme),
    Crc32c(checksums::Crc32c),
    Crc32(checksums::Crc32),
    Sha1(checksums::Sha1),
    Sha256(checksums::Sha256),
}

impl UploadChecksum {
    /// The checksum algorithm used to compute this checksum.
    pub fn checksum_algorithm(&self) -> ChecksumAlgorithm {
        match self {
            UploadChecksum::Crc64nvme(_) => ChecksumAlgorithm::Crc64nvme,
            UploadChecksum::Crc32c(_) => ChecksumAlgorithm::Crc32c,
            UploadChecksum::Crc32(_) => ChecksumAlgorithm::Crc32,
            UploadChecksum::Sha1(_) => ChecksumAlgorithm::Sha1,
            UploadChecksum::Sha256(_) => ChecksumAlgorithm::Sha256,
        }
    }
}

/// A handle for controlling backpressure enabled requests.
///
/// If the client was created with `enable_read_backpressure` set true,
/// each meta request has a flow-control window that shrinks as response
/// body data is downloaded (headers do not affect the size of the window).
/// The client's `initial_read_window` determines the starting size of each meta request's window.
/// If a meta request's flow-control window reaches 0, no further data will be downloaded.
/// If the `initial_read_window` is 0, the request will not start until the window is incremented.
/// Maintain a larger window to keep up a high download throughput,
/// parts cannot download in parallel unless the window is large enough to hold multiple parts.
/// Maintain a smaller window to limit the amount of data buffered in memory.
pub trait ClientBackpressureHandle {
    /// Increment the flow-control read window, so that response data continues downloading.
    fn increment_read_window(&mut self, len: usize);

    /// Move the upper bound of the read window to the given offset if it's not already there.
    fn ensure_read_window(&mut self, desired_end_offset: u64);

    /// Get the upper bound of the read window. When backpressure is enabled, [GetObjectRequest] can
    /// return data up to this offset *exclusively*.
    fn read_window_end_offset(&self) -> u64;
}

/// A streaming response to a GetObject request.
///
/// This struct implements [`futures::Stream`], which you can use to read the body of the object.
/// Each item of the stream is a part of the object body together with the part's offset within the
/// object.
#[cfg_attr(not(docsrs), async_trait)]
pub trait GetObjectResponse:
    Stream<Item = ObjectClientResult<GetBodyPart, GetObjectError, Self::ClientError>> + Send + Sync
{
    type BackpressureHandle: ClientBackpressureHandle + Clone + Send + Sync;
    type ClientError: std::error::Error + Send + Sync + 'static;

    /// Take the backpressure handle from the response.
    ///
    /// If `enable_read_backpressure` is false this call will return `None`,
    /// no backpressure is being applied and data is being downloaded as fast as possible.
    fn backpressure_handle(&mut self) -> Option<&mut Self::BackpressureHandle>;

    /// Get the object's user defined metadata.
    fn get_object_metadata(&self) -> ObjectMetadata;

    /// Get the object's checksum, if uploaded with one
    fn get_object_checksum(&self) -> Result<Checksum, ObjectChecksumError>;
}

/// Failures to return object checksum
#[derive(Debug, Error)]
pub enum ObjectChecksumError {
    #[error("requested object checksums, but did not specify it in the request")]
    DidNotRequestChecksums,
    #[error("object checksum could not be retrieved from headers")]
    HeadersError(#[source] Box<dyn std::error::Error + Send + Sync + 'static>),
}

/// A single element of a [`get_object`](ObjectClient::get_object) response stream is a pair of
/// offset within the object and the bytes starting at that offset.
pub type GetBodyPart = (u64, Box<[u8]>);

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
#[cfg_attr(not(docsrs), async_trait)]
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
#[derive(Debug)]
#[non_exhaustive]
pub struct PutObjectResult {
    /// ETag of the uploaded object
    pub etag: ETag,
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

    #[error("The key does not exist")]
    NoSuchKey,

    #[error("Request body cannot be empty when write offset is specified")]
    EmptyBody,

    #[error("The offset does not match the current object size")]
    InvalidWriteOffset,

    #[error("The provided checksum does not match the data")]
    BadChecksum,

    #[error("The provided checksum is not valid or does not match the existing checksum algorithm")]
    InvalidChecksumType,

    #[error("At least one of the pre-conditions you specified did not hold")]
    PreconditionFailed,

    #[error("The server does not support the functionality required to fulfill the request")]
    NotImplemented,
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
#[non_exhaustive]
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

    /// The algorithm that was used to create a checksum of the object.
    ///
    /// The [Amazon S3 API Reference] specifies this field as a list of strings,
    /// so we return here a [Vec] of [ChecksumAlgorithm].
    ///
    /// [Amazon S3 API Reference]:
    ///     https://docs.aws.amazon.com/AmazonS3/latest/API/API_Object.html#AmazonS3-Type-Object-ChecksumAlgorithm
    pub checksum_algorithms: Vec<ChecksumAlgorithm>,
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
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Checksum {
    /// Base64-encoded, 64-bit CRC64NVME checksum of the object
    pub checksum_crc64nvme: Option<String>,

    /// Base64-encoded, 32-bit CRC32 checksum of the object
    pub checksum_crc32: Option<String>,

    /// Base64-encoded, 32-bit CRC32C checksum of the object
    pub checksum_crc32c: Option<String>,

    /// Base64-encoded, 160-bit SHA-1 digest of the object
    pub checksum_sha1: Option<String>,

    /// Base64-encoded, 256-bit SHA-256 digest of the object
    pub checksum_sha256: Option<String>,
}

impl Checksum {
    /// Construct an empty [Checksum]
    pub fn empty() -> Self {
        Self {
            checksum_crc64nvme: None,
            checksum_crc32: None,
            checksum_crc32c: None,
            checksum_sha1: None,
            checksum_sha256: None,
        }
    }

    /// Provide [ChecksumAlgorithm]s for the [Checksum], if set and recognized.
    pub fn algorithms(&self) -> Vec<ChecksumAlgorithm> {
        // We assume that at most one checksum will be set.
        let mut algorithms = Vec::with_capacity(1);

        // Pattern match forces us to accomodate any new fields when added.
        let Self {
            checksum_crc64nvme,
            checksum_crc32,
            checksum_crc32c,
            checksum_sha1,
            checksum_sha256,
        } = &self;

        if checksum_crc64nvme.is_some() {
            algorithms.push(ChecksumAlgorithm::Crc64nvme);
        }
        if checksum_crc32.is_some() {
            algorithms.push(ChecksumAlgorithm::Crc32);
        }
        if checksum_crc32c.is_some() {
            algorithms.push(ChecksumAlgorithm::Crc32c);
        }
        if checksum_sha1.is_some() {
            algorithms.push(ChecksumAlgorithm::Sha1);
        }
        if checksum_sha256.is_some() {
            algorithms.push(ChecksumAlgorithm::Sha256);
        }

        algorithms
    }
}

impl From<Option<UploadChecksum>> for Checksum {
    fn from(value: Option<UploadChecksum>) -> Self {
        let mut checksum = Checksum::empty();
        match value.as_ref() {
            Some(UploadChecksum::Crc64nvme(crc64)) => checksum.checksum_crc64nvme = Some(crc64nvme_to_base64(crc64)),
            Some(UploadChecksum::Crc32c(crc32c)) => checksum.checksum_crc32c = Some(crc32c_to_base64(crc32c)),
            Some(UploadChecksum::Crc32(crc32)) => checksum.checksum_crc32 = Some(crc32_to_base64(crc32)),
            Some(UploadChecksum::Sha1(sha1)) => checksum.checksum_sha1 = Some(sha1_to_base64(sha1)),
            Some(UploadChecksum::Sha256(sha256)) => checksum.checksum_sha256 = Some(sha256_to_base64(sha256)),
            None => {}
        };
        checksum
    }
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_checksum_algorithm_one_set() {
        let checksum = Checksum {
            checksum_crc64nvme: None,
            checksum_crc32: None,
            checksum_crc32c: None,
            checksum_sha1: Some("checksum_sha1".to_string()),
            checksum_sha256: None,
        };
        assert_eq!(checksum.algorithms(), vec![ChecksumAlgorithm::Sha1]);
    }

    #[test]
    fn test_checksum_algorithm_none_set() {
        let checksum = Checksum {
            checksum_crc64nvme: None,
            checksum_crc32: None,
            checksum_crc32c: None,
            checksum_sha1: None,
            checksum_sha256: None,
        };
        assert_eq!(checksum.algorithms(), vec![]);
    }

    #[test]
    fn test_checksum_algorithm_many_set() {
        // Amazon S3 doesn't support more than one algorithm today, but just in case... let's show we don't panic.
        let checksum = Checksum {
            checksum_crc64nvme: None,
            checksum_crc32: None,
            checksum_crc32c: Some("checksum_crc32c".to_string()),
            checksum_sha1: Some("checksum_sha1".to_string()),
            checksum_sha256: None,
        };
        assert_eq!(
            checksum.algorithms(),
            vec![ChecksumAlgorithm::Crc32c, ChecksumAlgorithm::Sha1],
        );
    }
}
