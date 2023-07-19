use std::borrow::Cow;
use std::collections::{BTreeMap, BTreeSet};
use std::ops::Range;
use std::pin::Pin;
use std::sync::{Arc, RwLock};
use std::task::{Context, Poll};

use async_trait::async_trait;
use futures::{Stream, StreamExt};
use lazy_static::lazy_static;
use mountpoint_s3_crt::checksums::crc32c;
use thiserror::Error;
use time::OffsetDateTime;
use tracing::trace;

use crate::checksums::crc32c_to_base64;
use crate::object_client::{
    ChecksumAlgorithm, DeleteObjectError, DeleteObjectResult, GetBodyPart, GetObjectAttributesError,
    GetObjectAttributesResult, GetObjectError, HeadObjectError, HeadObjectResult, ListObjectsError, ListObjectsResult,
    ObjectClient, ObjectClientError, ObjectClientResult, ObjectInfo, PutObjectError, PutObjectParams, PutObjectResult,
    UploadReview, UploadReviewPart,
};
use crate::{Checksum, ETag, ObjectAttribute, PutObjectRequest};

pub const RAMP_MODULUS: usize = 251; // Largest prime under 256
static_assertions::const_assert!((RAMP_MODULUS > 0) && (RAMP_MODULUS <= 256));

const RAMP_BUFFER_SIZE: usize = 4 * 1024 * RAMP_MODULUS; // around 1 MiB
static_assertions::const_assert!(RAMP_BUFFER_SIZE % RAMP_MODULUS == 0);

// Return a ramping pattern of bytes modulo RAMP_MODULUS.  The seed is the first byte.
pub fn ramp_bytes(seed: usize, size: usize) -> Vec<u8> {
    let mut bytes: Vec<u8> = Vec::with_capacity(size);
    for i in 0..size {
        bytes.push(((seed + i) % RAMP_MODULUS) as u8);
    }
    bytes
}

lazy_static! {
    // Generate bytes for ramping pattern (currently, just a simple linear ramp).
    // Request RAMP_MODULUS extra bytes so we can read from any offset (modulo RAMP_MODULUS)
    static ref RAMP_BYTES: Vec<u8> = ramp_bytes(0, RAMP_BUFFER_SIZE + RAMP_MODULUS);
}

#[derive(Debug, Default)]
pub struct MockClientConfig {
    /// The bucket name this client will connect to
    pub bucket: String,
    /// The size of the parts that GetObject will respond with
    pub part_size: usize,
}

/// A mock implementation of an object client that we can manually add objects to, and then query
/// via the [ObjectClient] APIs.
#[derive(Debug)]
pub struct MockClient {
    config: MockClientConfig,
    objects: Arc<RwLock<BTreeMap<String, Arc<MockObject>>>>,
    in_progress_uploads: Arc<RwLock<BTreeSet<String>>>,
}

fn add_object(objects: &Arc<RwLock<BTreeMap<String, Arc<MockObject>>>>, key: &str, value: MockObject) {
    objects.write().unwrap().insert(key.to_owned(), Arc::new(value));
}

impl MockClient {
    /// Create a new [MockClient] with the given config
    pub fn new(config: MockClientConfig) -> Self {
        Self {
            config,
            objects: Default::default(),
            in_progress_uploads: Default::default(),
        }
    }

    /// Add an object to this mock client's bucket
    pub fn add_object(&self, key: &str, value: MockObject) {
        add_object(&self.objects, key, value);
    }

    /// Remove object for the mock client's bucket
    pub fn remove_object(&self, key: &str) {
        self.objects.write().unwrap().remove(key);
    }

    /// Returns `true` if this mock client's bucket contains the specified key
    pub fn contains_key(&self, key: &str) -> bool {
        self.objects.read().unwrap().contains_key(key)
    }

    /// Returns `true` if this mock client's bucket contains the specified common prefix
    pub fn contains_prefix(&self, prefix: &str) -> bool {
        let prefix = format!("{prefix}/");
        self.objects.read().unwrap().keys().any(|k| k.starts_with(&prefix))
    }

    /// Returns `true` if there is an upload in progress for the specified key
    pub fn is_upload_in_progress(&self, key: &str) -> bool {
        self.in_progress_uploads.read().unwrap().contains(key)
    }
}

#[derive(Clone)]
pub struct MockObject {
    generator: Arc<dyn Fn(u64, usize) -> Box<[u8]> + Send + Sync>,
    size: usize,
    storage_class: Option<String>,
    last_modified: OffsetDateTime,
    etag: ETag,
}

impl MockObject {
    pub fn read(&self, offset: u64, size: usize) -> Box<[u8]> {
        let read_size = self.size.saturating_sub(offset as usize);
        (self.generator)(offset, size.min(read_size))
    }

    pub fn from_bytes(bytes: &[u8], etag: ETag) -> Self {
        let bytes: Box<[u8]> = bytes.into();
        Self {
            size: bytes.len(),
            generator: Arc::new(move |offset, size| bytes[offset as usize..offset as usize + size].into()),
            storage_class: None,
            last_modified: OffsetDateTime::now_utc(),
            etag,
        }
    }

    pub fn constant(v: u8, size: usize, etag: ETag) -> Self {
        Self {
            generator: Arc::new(move |_offset, size| vec![v; size].into_boxed_slice()),
            size,
            storage_class: None,
            last_modified: OffsetDateTime::now_utc(),
            etag,
        }
    }

    pub fn ramp(seed: u8, size: usize, etag: ETag) -> Self {
        Self {
            generator: Arc::new(move |offset, mut size| {
                // Byte at offset k is (seed + k) % RAMP_MODULUS
                let mut vec = Vec::with_capacity(size);
                let offs = (offset as usize + seed as usize) % RAMP_MODULUS;
                while size > 0 {
                    let nbyte = size.min(RAMP_BUFFER_SIZE);
                    vec.extend_from_slice(&RAMP_BYTES[offs..offs + nbyte]);
                    size -= nbyte;
                }
                vec.into_boxed_slice()
            }),
            size,
            storage_class: None,
            last_modified: OffsetDateTime::now_utc(),
            etag,
        }
    }

    pub fn set_last_modified(&mut self, last_modified: OffsetDateTime) {
        self.last_modified = last_modified;
    }

    pub fn set_storage_class(&mut self, storage_class: Option<String>) {
        self.storage_class = storage_class;
    }

    pub fn len(&self) -> usize {
        self.size
    }

    pub fn is_empty(&self) -> bool {
        self.size == 0
    }

    pub fn etag(&self) -> ETag {
        self.etag.clone()
    }
}

impl<T: AsRef<[u8]>> From<T> for MockObject {
    fn from(bytes: T) -> Self {
        MockObject::from_bytes(bytes.as_ref(), ETag::from_object_bytes(bytes.as_ref()))
    }
}

impl std::fmt::Debug for MockObject {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        f.debug_struct("MockObject")
            .field("size", &self.size)
            .field("storage_class", &self.storage_class)
            .field("last_modified", &self.last_modified)
            .field("etag", &self.etag)
            .finish()
    }
}

#[derive(Debug)]
pub struct GetObjectResult {
    object: Arc<MockObject>,
    next_offset: u64,
    length: usize,
    part_size: usize,
}

impl GetObjectResult {
    /// Helpful test utility to just collect the entire object into memory. Will panic if the object
    /// parts are streamed out of order.
    pub async fn collect(mut self) -> ObjectClientResult<Box<[u8]>, GetObjectError, MockClientError> {
        let mut next_offset = None;
        let mut body = vec![];
        while let Some((offset, part)) = self.next().await.transpose()? {
            assert!(next_offset.as_ref().map(|no| offset == *no).unwrap_or(true));
            body.extend_from_slice(&part);
            next_offset = Some(offset + part.len() as u64);
        }
        Ok(body.into_boxed_slice())
    }
}

impl Stream for GetObjectResult {
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, MockClientError>;

    fn poll_next(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        if self.length == 0 {
            return Poll::Ready(None);
        }

        let next_part_size = self.part_size.min(self.length);
        let next_part = self.object.read(self.next_offset, next_part_size);

        let result = (self.next_offset, next_part);
        self.next_offset += next_part_size as u64;
        self.length -= next_part_size;
        Poll::Ready(Some(Ok(result)))
    }
}

#[derive(Debug, Error, PartialEq, Eq)]
pub struct MockClientError(pub Cow<'static, str>);

impl std::fmt::Display for MockClientError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

fn mock_client_error<T, E>(s: impl Into<Cow<'static, str>>) -> ObjectClientResult<T, E, MockClientError> {
    Err(ObjectClientError::ClientError(MockClientError(s.into())))
}

#[async_trait]
impl ObjectClient for MockClient {
    type GetObjectResult = GetObjectResult;
    type PutObjectRequest = MockPutObjectRequest;
    type ClientError = MockClientError;

    fn part_size(&self) -> Option<usize> {
        Some(self.config.part_size)
    }

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        trace!(bucket, key, "DeleteObject");

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(DeleteObjectError::NoSuchBucket));
        }

        self.remove_object(key);

        Ok(DeleteObjectResult {})
    }

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        if_match: Option<ETag>,
    ) -> ObjectClientResult<Self::GetObjectResult, GetObjectError, Self::ClientError> {
        trace!(bucket, key, ?range, ?if_match, "GetObject");

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(GetObjectError::NoSuchBucket));
        }

        let objects = self.objects.read().unwrap();

        if let Some(object) = objects.get(key) {
            if let Some(etag_match) = if_match {
                if etag_match != object.etag {
                    return Err(ObjectClientError::ServiceError(GetObjectError::PreconditionFailed));
                }
            }

            let (next_offset, length) = if let Some(range) = range {
                if range.start >= object.len() as u64 || range.end > object.len() as u64 {
                    return mock_client_error(format!("invalid range, length={}", object.len()));
                }
                (range.start, (range.end - range.start) as usize)
            } else {
                (0, object.len())
            };

            Ok(GetObjectResult {
                object: Arc::clone(object),
                next_offset,
                length,
                part_size: self.config.part_size,
            })
        } else {
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey))
        }
    }

    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        trace!(bucket, key, "HeadObject");

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(HeadObjectError::NotFound));
        }

        let objects = self.objects.read().unwrap();
        if let Some(object) = objects.get(key) {
            Ok(HeadObjectResult {
                bucket: bucket.to_string(),
                object: ObjectInfo {
                    key: key.to_string(),
                    size: object.size as u64,
                    last_modified: object.last_modified,
                    etag: object.etag.as_str().to_string(),
                    storage_class: object.storage_class.clone(),
                },
            })
        } else {
            Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
        }
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ObjectClientResult<ListObjectsResult, ListObjectsError, Self::ClientError> {
        trace!(bucket, ?continuation_token, delimiter, max_keys, prefix, "ListObjects");

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(ListObjectsError::NoSuchBucket));
        }

        // TODO delimiter and prefix should be optional in the API
        let delimiter = (!delimiter.is_empty()).then_some(delimiter);

        let objects = self.objects.read().unwrap();

        let mut common_prefixes: BTreeSet<String> = BTreeSet::new();
        let mut object_vec: Vec<ObjectInfo> = Vec::new();
        let mut next_continuation_token: Option<String> = None;
        let mut current_common_prefix: Option<String> = None;
        // When handling prefixes and delimiters, we care about characters, not bytes.
        let prefix_len = prefix.chars().count();

        // If there is a continuation token, set up an iterator starting at that token. Otherwise,
        // start at the beginning of the bucket.
        let object_iterator = objects.range(continuation_token.unwrap_or("").to_string()..);

        for (key, object) in object_iterator {
            let key_len = key.chars().count();
            // If the prefix is `n` characters long, and we encounter a key whose first `n`
            // characters are lexicographically larger than the prefix, then we can stop iterating.
            // Note that we cannot just do a direct comparison between the full key and prefix. For
            // example, A/C/c is lexicographically larger than A/C, but A/C is a prefix of A/C/c and
            // we risk skipping directory entries if we stop when we encounter A/C/c.
            let key_prefix = if key_len >= prefix_len {
                key.chars().take(prefix_len).collect::<String>()
            } else {
                key.to_string()
            };
            if key_prefix.as_str() > prefix {
                break;
            }

            // Skip keys that do not start with the specified prefix
            if !key.starts_with(prefix) {
                continue;
            }

            // When we hit the maximum number of keys, if the current key will be a common prefix,
            // we need to keep going until we get past that prefix before choosing the continuation
            // token and breaking out of the loop. Otherwise, we might return the same common prefix
            // twice (once now, once on the next LIST call). If the current key does not have a
            // common prefix, it just becomes the continuation token.
            let key_count = common_prefixes.len() + object_vec.len();
            if key_count >= max_keys {
                match current_common_prefix {
                    Some(ref ccp) if key.starts_with(ccp) => continue,
                    _ => {
                        next_continuation_token = Some(key.to_string());
                        break;
                    }
                }
            }

            // We need to roll up all keys that have a common substring between the specified prefix
            // (if any) and the next instance of the delimiter into a single common prefix (see
            // https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html). So here
            // remove the prefix (if any) to make sure we are only looking for delimiters
            // that come after the prefix
            let no_prefix_key = key.chars().skip(prefix_len).collect::<String>();

            // If we have a delimiter, split the prefix-less key on it. If that gives a non-empty
            // string, it's a common prefix. If not, it's a regular key.
            if let Some((pre, _)) = delimiter.and_then(|d| no_prefix_key.split_once(d)) {
                let common_prefix = format!("{}{}{}", prefix, pre, delimiter.unwrap());
                if common_prefixes.insert(common_prefix.clone()) {
                    current_common_prefix = Some(common_prefix);
                }
            } else {
                object_vec.push(ObjectInfo {
                    key: key.to_string(),
                    size: object.len() as u64,
                    last_modified: object.last_modified,
                    etag: object.etag.as_str().to_string(),
                    storage_class: object.storage_class.clone(),
                });
            }
        }

        let common_prefixes = common_prefixes.into_iter().collect::<Vec<_>>();

        Ok(ListObjectsResult {
            bucket: bucket.to_string(),
            objects: object_vec,
            common_prefixes,
            next_continuation_token,
        })
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError> {
        trace!(bucket, key, "PutObject");

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(PutObjectError::NoSuchBucket));
        }

        let put_request = MockPutObjectRequest::new(
            key,
            self.config.part_size,
            params,
            &self.objects,
            &self.in_progress_uploads,
        );
        Ok(put_request)
    }

    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        _max_parts: Option<usize>,
        _part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError> {
        trace!(bucket, key, "GetObjectAttributes");

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(GetObjectAttributesError::NoSuchBucket));
        }

        let objects = self.objects.read().unwrap();
        if let Some(object) = objects.get(key) {
            let mut result = GetObjectAttributesResult::default();
            for attribute in object_attributes.iter() {
                match attribute {
                    ObjectAttribute::ETag => result.etag = Some("TODO".to_owned()),
                    ObjectAttribute::Checksum => {
                        result.checksum = Some(Checksum {
                            checksum_crc32: Some("TODO".to_owned()),
                            checksum_crc32c: Some("TODO".to_owned()),
                            checksum_sha1: Some("TODO".to_owned()),
                            checksum_sha256: Some("TODO".to_owned()),
                        })
                    }
                    ObjectAttribute::ObjectParts => todo!("Support multipart mock object"),
                    ObjectAttribute::StorageClass => result.storage_class = object.storage_class.clone(),
                    ObjectAttribute::ObjectSize => result.object_size = Some(object.size as u64),
                }
            }
            Ok(result)
        } else {
            Err(ObjectClientError::ServiceError(GetObjectAttributesError::NoSuchKey))
        }
    }
}

#[derive(Debug)]
pub struct MockPutObjectRequest {
    key: String,
    buffer: Vec<u8>,
    part_size: usize,
    params: PutObjectParams,
    objects: Arc<RwLock<BTreeMap<String, Arc<MockObject>>>>,
    in_progress_uploads: Arc<RwLock<BTreeSet<String>>>,
}

impl MockPutObjectRequest {
    fn new(
        key: &str,
        part_size: usize,
        params: &PutObjectParams,
        objects: &Arc<RwLock<BTreeMap<String, Arc<MockObject>>>>,
        in_progress_uploads: &Arc<RwLock<BTreeSet<String>>>,
    ) -> Self {
        in_progress_uploads.write().unwrap().insert(key.to_owned());
        Self {
            key: key.to_owned(),
            buffer: vec![],
            part_size,
            params: params.clone(),
            objects: objects.clone(),
            in_progress_uploads: in_progress_uploads.clone(),
        }
    }
}

impl Drop for MockPutObjectRequest {
    fn drop(&mut self) {
        self.in_progress_uploads.write().unwrap().remove(&self.key);
    }
}

#[async_trait]
impl PutObjectRequest for MockPutObjectRequest {
    type ClientError = MockClientError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        self.buffer.extend_from_slice(slice);
        Ok(())
    }

    async fn complete(mut self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        let buffer = std::mem::take(&mut self.buffer);
        let mut object: MockObject = buffer.into();
        object.set_storage_class(self.params.storage_class.clone());
        add_object(&self.objects, &self.key, object);
        Ok(PutObjectResult {})
    }

    async fn review_and_complete(
        self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        let checksum_algorithm = if self.params.trailing_checksums {
            Some(ChecksumAlgorithm::Crc32c)
        } else {
            None
        };
        let parts: Vec<UploadReviewPart> = self
            .buffer
            .chunks(self.part_size)
            .map(|part| {
                let size = part.len() as u64;
                let checksum = if self.params.trailing_checksums {
                    let checksum = crc32c::checksum(part);
                    Some(crc32c_to_base64(&checksum))
                } else {
                    None
                };
                UploadReviewPart { size, checksum }
            })
            .collect();
        let review = UploadReview {
            checksum_algorithm,
            parts,
        };
        if !review_callback(review) {
            return mock_client_error("upload review failed, aborting");
        }
        self.complete().await
    }
}

#[cfg(test)]
mod tests {
    use futures::StreamExt;
    use rand::{Rng, RngCore, SeedableRng};
    use rand_chacha::ChaChaRng;
    use test_case::test_case;

    use super::*;

    async fn test_get_object(key: &str, size: usize, range: Option<Range<u64>>) {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
        });

        let mut body = vec![0u8; size];
        rng.fill_bytes(&mut body);
        client.add_object(key, MockObject::from_bytes(&body, ETag::for_tests()));

        let mut get_request = client
            .get_object("test_bucket", key, range.clone(), None)
            .await
            .expect("should not fail");

        let mut accum = vec![];
        let mut next_offset = range.as_ref().map(|r| r.start).unwrap_or(0);
        while let Some(r) = get_request.next().await {
            let (offset, body) = r.expect("get_object body part failed");
            assert_eq!(offset, next_offset, "wrong body part offset");
            next_offset += body.len() as u64;
            accum.extend_from_slice(&body[..]);
        }
        let expected_range = range.unwrap_or(0..size as u64);
        let expected_range = expected_range.start as usize..expected_range.end as usize;
        assert_eq!(&accum[..], &body[expected_range], "body does not match");
    }

    #[tokio::test]
    async fn get_object() {
        test_get_object("key1", 2000, None).await;
        test_get_object("key1", 9000, Some(50..2000)).await;
        test_get_object("key1", 10, Some(0..10)).await;
    }

    #[allow(clippy::reversed_empty_ranges)]
    #[tokio::test]
    async fn get_object_errors() {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
        });

        let mut body = vec![0u8; 2000];
        rng.fill_bytes(&mut body);
        client.add_object("key1", body[..].into());

        macro_rules! assert_client_error {
            ($e:expr, $err:expr) => {
                let err = $e.expect_err("should fail");
                match err {
                    ObjectClientError::ClientError(MockClientError(m)) => {
                        assert_eq!(&*m, $err);
                    }
                    _ => assert!(false, "wrong error type"),
                }
            };
        }

        assert!(matches!(
            client.get_object("wrong_bucket", "key1", None, None).await,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchBucket))
        ));

        assert!(matches!(
            client.get_object("test_bucket", "wrong_key", None, None).await,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey))
        ));

        assert_client_error!(
            client.get_object("test_bucket", "key1", Some(0..2001), None).await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client.get_object("test_bucket", "key1", Some(2000..2000), None).await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client.get_object("test_bucket", "key1", Some(500..2001), None).await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client.get_object("test_bucket", "key1", Some(5000..2001), None).await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client.get_object("test_bucket", "key1", Some(5000..1), None).await,
            "invalid range, length=2000"
        );
    }

    #[tokio::test]
    async fn list_object_dirs() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
        });

        let mut keys = vec![];
        for i in 0..5 {
            keys.push(format!("dirs/dir1/file{i}.txt"));
        }
        for i in 0..5 {
            keys.push(format!("dirs/dir2/file{i}.txt"));
        }
        for key in &keys {
            client.add_object(key, MockObject::constant(0u8, 5, ETag::for_tests()));
        }

        macro_rules! check {
            ($delimiter:expr, $max_keys:expr, $prefix:expr, $objects:expr, $prefixes:expr) => {
                let result = client
                    .list_objects("test_bucket", None, $delimiter, $max_keys, $prefix)
                    .await
                    .expect("should not fail");
                assert_eq!(
                    &result
                        .objects
                        .into_iter()
                        .map(|object| object.key)
                        .collect::<Vec<_>>(),
                    $objects as &[String],
                    "wrong objects"
                );
                assert_eq!(&result.common_prefixes, $prefixes as &[&str], "wrong prefixes");
            };
        }

        check!("", 1000, "", &keys[..], &[]);
        check!("/", 1000, "", &[], &["dirs/"]);
        check!("/", 1000, "dirs/", &[], &["dirs/dir1/", "dirs/dir2/"]);
        check!("/", 1000, "dirs/dir2/", &keys[5..10], &[]);

        // max-keys tests
        check!("", 6, "", &keys[..6], &[]);
        check!("/", 1, "", &[], &["dirs/"]);
        check!("/", 2, "dirs/", &[], &["dirs/dir1/", "dirs/dir2/"]);
        check!("/", 1, "dirs/", &[], &["dirs/dir1/"]);
        check!("/", 2, "dirs/dir2/", &keys[5..7], &[]);
        check!("/", 1, "dirs/dir2/", &keys[5..6], &[]);
        check!("/", 1, "dirs/dir2", &[], &["dirs/dir2/"]);
        check!("/", 2, "dirs/dir2", &[], &["dirs/dir2/"]);

        macro_rules! check_continuation {
            ($delimiter:expr, $max_keys:expr, $prefix:expr, $objects:expr, $prefixes:expr) => {
                let result = client
                    .list_objects("test_bucket", None, $delimiter, $max_keys, $prefix)
                    .await
                    .expect("should not fail");
                assert!(result.next_continuation_token.is_some());

                let result = client
                    .list_objects(
                        "test_bucket",
                        result.next_continuation_token.as_deref(),
                        $delimiter,
                        $max_keys,
                        $prefix,
                    )
                    .await
                    .expect("should not fail");
                assert_eq!(
                    &result
                        .objects
                        .into_iter()
                        .map(|object| object.key)
                        .collect::<Vec<_>>(),
                    $objects as &[String]
                );
                assert_eq!(&result.common_prefixes, $prefixes as &[&str]);
            };
        }

        check_continuation!("", 6, "", &keys[6..], &[]);
        check_continuation!("/", 1, "dirs/", &[], &["dirs/dir2/"]);
        check_continuation!("/", 2, "dirs/dir2/", &keys[7..9], &[]);
    }

    #[tokio::test]
    async fn list_objects_unicode() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
        });

        let mut keys = vec![];
        for i in 0..5 {
            keys.push(format!("dirs/こんにちは/file{i}.txt"));
        }
        for i in 0..5 {
            keys.push(format!("dirs/😄🥹/file{i}.txt"));
        }
        for key in &keys {
            client.add_object(key, MockObject::constant(0u8, 5, ETag::for_tests()));
        }

        macro_rules! check {
            ($delimiter:expr, $prefix:expr, $objects:expr, $prefixes:expr) => {
                let result = client
                    .list_objects("test_bucket", None, $delimiter, 1000, $prefix)
                    .await
                    .expect("should not fail");
                assert_eq!(
                    &result
                        .objects
                        .into_iter()
                        .map(|object| object.key)
                        .collect::<Vec<_>>(),
                    $objects as &[String],
                    "wrong objects"
                );
                assert_eq!(&result.common_prefixes, $prefixes as &[&str], "wrong prefixes");
            };
        }

        check!("", "", &keys[..], &[]);
        check!("/", "dirs/", &[], &["dirs/こんにちは/", "dirs/😄🥹/"]);
        check!("", "dirs/😄🥹/", &keys[5..], &[]);
        check!("/", "dirs/😄", &[], &["dirs/😄🥹/"]);
        check!("", "dirs/😄🥹😮", &[], &[]);
    }

    #[tokio::test]
    async fn test_put_object() {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let obj = MockObject::ramp(0xaa, 2 * RAMP_BUFFER_SIZE, ETag::for_tests());

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
        });

        let mut put_request = client
            .put_object("test_bucket", "key1", &Default::default())
            .await
            .expect("put_object failed");

        // Stream randomly sized parts into put_object_request.
        let mut next_offset = 0;
        while next_offset < obj.len() {
            let part_size = rng.gen_range(0..=obj.len() - next_offset);
            let result = obj.read(next_offset as u64, part_size);
            next_offset += part_size;
            put_request.write(&result).await.unwrap();
        }

        put_request.complete().await.expect("put_object failed");

        let mut get_request = client
            .get_object("test_bucket", "key1", None, None)
            .await
            .expect("get_object failed");

        // Check that the result of get_object is correct.
        let mut next_offset = 0;
        while let Some(r) = get_request.next().await {
            let (offset, body) = r.expect("get_object body part failed");
            assert_eq!(offset, next_offset, "wrong body part offset");
            next_offset += body.len() as u64;
            assert_eq!(body, obj.read(offset, body.len()));
        }
    }

    proptest::proptest! {
        #[test]
        fn test_ramp(size in 1..2*RAMP_BUFFER_SIZE, read_size in 1..2*RAMP_BUFFER_SIZE, offset in 0..RAMP_BUFFER_SIZE) {
            let obj = MockObject::ramp(0xaa, size, ETag::for_tests());
            let r = obj.read(offset as u64, read_size);
            let expected_len = size.saturating_sub(offset).min(read_size);
            let expected = ramp_bytes(0xaa + offset, expected_len);
            assert_eq!(&r[..], &expected[..]);
        }
    }

    #[test_case(None)]
    #[test_case(Some("GLACIER"))]
    #[tokio::test]
    async fn test_storage_class(storage_class: Option<&str>) {
        let body = vec![0u8; 16];

        let bucket = "test_bucket";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 1024,
        });

        let key = "key1";
        let put_params = PutObjectParams {
            storage_class: storage_class.map(String::from),
            ..Default::default()
        };
        let mut put_request = client.put_object(bucket, key, &put_params).await.unwrap();
        put_request.write(&body).await.unwrap();
        put_request.complete().await.unwrap();

        // head_object returns storage class
        let head_result = client.head_object(bucket, key).await.unwrap();
        assert_eq!(head_result.object.storage_class.as_deref(), storage_class);

        // list_objects returns storage class
        let list_result = client.list_objects(bucket, None, "/", 1, "").await.unwrap();
        assert!(
            matches!(&list_result.objects[..], [object] if object.key == key && object.storage_class.as_deref() == storage_class )
        );
    }
}
