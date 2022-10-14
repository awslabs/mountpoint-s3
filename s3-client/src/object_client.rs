use std::future::Future;
use std::ops::Range;

use async_trait::async_trait;
use auto_impl::auto_impl;
use futures::Stream;
use time::OffsetDateTime;

/// A single element of the [ObjectClient::get_object] response is a pair of offset within the
/// object and the bytes starting at that offset.
pub type GetBodyPart = (u64, Box<[u8]>);

/// An [ObjectClient] is an S3-like blob storage interface
#[async_trait]
#[auto_impl(Arc)]
pub trait ObjectClient {
    type GetObjectResult: Stream<Item = Result<GetBodyPart, Self::GetObjectError>> + Send;
    type GetObjectError: std::error::Error + Send + Sync + 'static;
    type HeadObjectError: std::error::Error + Send + Sync + 'static;
    type ListObjectsError: std::error::Error + Send + Sync + 'static;

    /// Get an object from the object store. Returns a stream of body parts of the object. Parts are
    /// guaranteed to be returned by the stream in order and contiguously.
    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
    ) -> Result<Self::GetObjectResult, Self::GetObjectError>;

    /// List the objects in a bucket under a given prefix
    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListObjectsResult, Self::ListObjectsError>;

    /// Retrieve object metadata without retrieving the object contents
    async fn head_object(&self, bucket: &str, key: &str) -> Result<HeadObjectResult, Self::HeadObjectError>;

    // TODO this should live on some separate trait. It exists mostly so StreamingGetObject knows
    // how to spawn tasks.
    fn spawn<T: Send + 'static>(&self, future: impl Future<Output = T> + Send + 'static);
}

/// Result of a [ObjectClient::list_objects] request
#[derive(Debug)]
pub struct ListObjectsResult {
    /// The name of the bucket.
    pub bucket: String,

    /// The list of objects.
    pub objects: Vec<ObjectInfo>,

    /// The list of common prefixes. This rolls up all of the objects with a common prefix up to
    /// the next instance of the delimiter.
    pub common_prefixes: Vec<String>,

    /// If present, the continuation token to use to query more results.
    pub next_continuation_token: Option<String>,
}

/// Result of a [ObjectClient::head_object] request
#[derive(Debug)]
pub struct HeadObjectResult {
    /// The name of the bcuket
    pub bucket: String,

    /// Object metadata
    pub object: ObjectInfo,
}

/// Metadata about a single S3 object.
/// See https://docs.aws.amazon.com/AmazonS3/latest/API/API_Object.html for more details.
#[derive(Debug)]
pub struct ObjectInfo {
    /// Key for this object.
    pub key: String,

    /// Size of this object in bytes.
    pub size: u64,

    /// The time this object was last modified.
    pub last_modified: OffsetDateTime,

    /// Storage class for this object.  Optional because head_object does not return
    /// the storage class in its response.  See Examples here
    /// https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html#API_HeadObject_Examples
    pub storage_class: Option<String>,

    /// Entity tag of this object.
    pub etag: String,
}
