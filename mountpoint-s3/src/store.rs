use std::fmt::Debug;

use async_trait::async_trait;
use futures::{executor::ThreadPool, task::Spawn};
use mountpoint_s3_client::error::{
    DeleteObjectError, GetObjectAttributesError, GetObjectError, HeadObjectError, ListObjectsError, ObjectClientError,
    PutObjectError,
};
use mountpoint_s3_client::types::{
    DeleteObjectResult, ETag, GetObjectAttributesResult, HeadObjectResult, ListObjectsResult, ObjectAttribute,
    ObjectClientResult, PutObjectParams,
};
use mountpoint_s3_client::{ObjectClient, PutObjectRequest};
use thiserror::Error;

use crate::checksums::{ChecksummedBytes, IntegrityError};
use crate::prefetch::{self, ClientPartStream, ObjectPartStream, Prefetcher, PrefetcherConfig};
use crate::sync::Arc;

/// A generic interface to S3-like object store.
/// Similar to [ObjectClient], but provides a [ObjectStore::prefetch] method instead
/// of [ObjectClient::get_object].
#[async_trait]
pub trait ObjectStore: Clone {
    type ClientError: std::error::Error + Send + Sync + 'static;
    type PutObjectRequest: PutObjectRequest<ClientError = Self::ClientError>;
    type PrefetchGetObject: PrefetchGetObject<ClientError = Self::ClientError>;

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

    /// Start a new prefetch request to the specified object.
    fn prefetch(&self, bucket: &str, key: &str, size: u64, etag: ETag) -> Self::PrefetchGetObject;
}

/// Result of a prefetch request. Allows callers to read object data.
#[async_trait]
pub trait PrefetchGetObject: Send {
    type ClientError: std::error::Error + Send + Sync + 'static;

    /// Read some bytes from the object. This function will always return exactly `size` bytes,
    /// except at the end of the object where it will return however many bytes are left (including
    /// possibly 0 bytes).
    async fn read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> ObjectClientResult<ChecksummedBytes, PrefetchReadError, Self::ClientError>;
}

#[derive(Debug, Error)]
pub enum PrefetchReadError {
    #[error("get object request failed")]
    GetRequestFailed(#[from] GetObjectError),

    #[error("get request terminated unexpectedly")]
    GetRequestTerminatedUnexpectedly,

    #[error("integrity check failed")]
    Integrity(#[from] IntegrityError),
}

impl PrefetchReadError {
    pub fn map<C>(error: ObjectClientError<GetObjectError, C>) -> ObjectClientError<Self, C> {
        match error {
            ObjectClientError::ServiceError(s) => ObjectClientError::ServiceError(Self::GetRequestFailed(s)),
            ObjectClientError::ClientError(c) => ObjectClientError::ClientError(c),
        }
    }
}

#[derive(Debug)]
pub struct ClientStore<Client, Stream> {
    client: Arc<Client>,
    prefetcher: Arc<Prefetcher<Stream>>,
}

impl<Client, Stream> ClientStore<Client, Stream>
where
    Stream: ObjectPartStream + Send + Sync + 'static,
{
    pub fn new(client: Arc<Client>, part_stream: Stream, prefetcher_config: PrefetcherConfig) -> Self {
        let prefetcher = Prefetcher::new(part_stream, prefetcher_config);
        Self { client, prefetcher }
    }
}

impl<Client, Stream> Clone for ClientStore<Client, Stream> {
    fn clone(&self) -> Self {
        Self {
            client: self.client.clone(),
            prefetcher: self.prefetcher.clone(),
        }
    }
}

#[async_trait]
impl<Client, Stream> ObjectStore for ClientStore<Client, Stream>
where
    Client: ObjectClient + Send + Sync + 'static,
    Stream: ObjectPartStream<ClientError = Client::ClientError> + Send + Sync + 'static,
{
    type ClientError = <Client as ObjectClient>::ClientError;
    type PutObjectRequest = <Client as ObjectClient>::PutObjectRequest;
    type PrefetchGetObject = prefetch::PrefetchGetObject<Stream>;

    fn part_size(&self) -> Option<usize> {
        self.client.part_size()
    }

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        self.client.delete_object(bucket, key).await
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ObjectClientResult<ListObjectsResult, ListObjectsError, Self::ClientError> {
        self.client
            .list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .await
    }

    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        self.client.head_object(bucket, key).await
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError> {
        self.client.put_object(bucket, key, params).await
    }

    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        max_parts: Option<usize>,
        part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError> {
        self.client
            .get_object_attributes(bucket, key, max_parts, part_number_marker, object_attributes)
            .await
    }

    fn prefetch(&self, bucket: &str, key: &str, size: u64, etag: ETag) -> Self::PrefetchGetObject {
        self.prefetcher.get(bucket, key, size, etag)
    }
}

pub fn default_store<Client, Runtime>(
    client: Arc<Client>,
    runtime: Runtime,
    prefetcher_config: PrefetcherConfig,
) -> ClientStore<Client, ClientPartStream<Client, Runtime>>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync + 'static,
{
    let part_stream = ClientPartStream::new(client.clone(), runtime);
    ClientStore::new(client, part_stream, prefetcher_config)
}

pub type TestStore<Client> = ClientStore<Client, ClientPartStream<Client, ThreadPool>>;

pub fn test_store<Client>(client: Arc<Client>) -> TestStore<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
    let part_stream = ClientPartStream::new(client.clone(), runtime);
    ClientStore::new(client, part_stream, Default::default())
}
