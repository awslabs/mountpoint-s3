use std::future::Future;
use std::ops::Range;

use async_trait::async_trait;
use futures::Stream;
use time::OffsetDateTime;

/// A single element of the [ObjectClient::get_object] response is a pair of offset within the
/// object and the bytes starting at that offset.
pub type GetBodyPart = (u64, Box<[u8]>);

/// An [ObjectClient] is an S3-like blob storage interface
#[async_trait]
pub trait ObjectClient {
    type GetObjectResult: Stream<Item = Result<GetBodyPart, Self::GetObjectError>> + Send;
    type GetObjectError: std::error::Error;

    type ListObjectsError: std::error::Error;

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

    /// Storage class for this object.
    pub storage_class: String,

    /// Entity tag of this object.
    pub etag: String,
}
