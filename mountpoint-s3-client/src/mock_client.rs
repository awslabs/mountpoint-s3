//! A mock implementation of an object client for use in tests.

#![cfg(feature = "mock")]

use std::borrow::Cow;
use std::collections::{BTreeMap, BTreeSet, HashMap, HashSet};
use std::fmt::Write;
use std::pin::Pin;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, LazyLock, RwLock};
use std::task::{Context, Poll};
use std::time::{Duration, SystemTime};

use async_trait::async_trait;
use futures::{Stream, StreamExt};
use mountpoint_s3_crt::s3::client::BufferPoolUsageStats;
use rand::seq::SliceRandom;
use rand::SeedableRng;
use rand_chacha::ChaCha20Rng;
use thiserror::Error;
use time::OffsetDateTime;
use tracing::trace;

use crate::checksums::{
    crc32, crc32_to_base64, crc32c, crc32c_to_base64, crc64nvme, crc64nvme_to_base64, sha1, sha1_to_base64, sha256,
    sha256_to_base64,
};
use crate::error_metadata::{ClientErrorMetadata, ProvideErrorMetadata};
use crate::object_client::{
    Checksum, ChecksumAlgorithm, ChecksumMode, ClientBackpressureHandle, CopyObjectError, CopyObjectParams,
    CopyObjectResult, DeleteObjectError, DeleteObjectResult, ETag, GetBodyPart, GetObjectAttributesError,
    GetObjectAttributesParts, GetObjectAttributesResult, GetObjectError, GetObjectParams, GetObjectResponse,
    HeadObjectError, HeadObjectParams, HeadObjectResult, ListObjectsError, ListObjectsResult, ObjectAttribute,
    ObjectChecksumError, ObjectClient, ObjectClientError, ObjectClientResult, ObjectInfo, ObjectMetadata, ObjectPart,
    PutObjectError, PutObjectParams, PutObjectRequest, PutObjectResult, PutObjectSingleParams,
    PutObjectTrailingChecksums, RenameObjectError, RenameObjectParams, RenameObjectResult, RenamePreconditionTypes,
    RestoreStatus, UploadChecksum, UploadReview, UploadReviewPart,
};

mod leaky_bucket;
pub mod throughput_client;

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

/// Generate bytes for ramping pattern (currently, just a simple linear ramp).
/// Request RAMP_MODULUS extra bytes so we can read from any offset (modulo RAMP_MODULUS)
static RAMP_BYTES: LazyLock<Vec<u8>> = LazyLock::new(|| ramp_bytes(0, RAMP_BUFFER_SIZE + RAMP_MODULUS));

#[derive(Debug, Default, Clone)]
pub struct MockClientConfig {
    /// The bucket name this client will connect to
    pub bucket: String,
    /// The size of the parts that GetObject will respond with
    pub part_size: usize,
    /// A seed to randomize the order of ListObjectsV2 results, or None to use ordered list
    pub unordered_list_seed: Option<u64>,
    /// A flag to enable backpressure read
    pub enable_backpressure: bool,
    /// Initial backpressure read window size, ignored if enable_back_pressure is false
    pub initial_read_window_size: usize,
    // Is rename supported on this bucket
    pub enable_rename: bool,
}

/// A mock implementation of an object client that we can manually add objects to, and then query
/// via the [ObjectClient] APIs.
#[derive(Debug, Clone)]
pub struct MockClient {
    config: MockClientConfig,
    objects: Arc<RwLock<BTreeMap<String, MockObject>>>,
    in_progress_uploads: Arc<RwLock<BTreeSet<String>>>,
    operation_counts: Arc<RwLock<HashMap<Operation, u64>>>,
}

fn add_object(objects: &Arc<RwLock<BTreeMap<String, MockObject>>>, key: &str, value: MockObject) {
    objects.write().unwrap().insert(key.to_owned(), value);
}
unsafe impl Send for MockClient {}
impl MockClient {
    /// Create a new [MockClient] with the given config
    pub fn new(config: MockClientConfig) -> Self {
        Self {
            config,
            objects: Default::default(),
            in_progress_uploads: Default::default(),
            operation_counts: Default::default(),
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

    /// Remove all objects for the mock client's bucket
    pub fn remove_all_objects(&self) {
        self.objects.write().unwrap().clear();
    }

    /// Number of objects in the mock client's bucket
    pub fn object_count(&self) -> usize {
        self.objects.write().unwrap().len()
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

    /// Returns the objects storage class
    pub fn get_object_storage_class(&self, key: &str) -> Result<Option<String>, MockClientError> {
        if let Some(mock_object) = self.objects.read().unwrap().get(key) {
            Ok(mock_object.storage_class.to_owned())
        } else {
            Err(MockClientError("object not found".into()))
        }
    }

    /// Returns error if object does not exist
    pub fn restore_object(&self, key: &str) -> Result<(), MockClientError> {
        match self.objects.write().unwrap().get_mut(key) {
            Some(mock_object) => {
                mock_object.restore_status = Some(RestoreStatus::Restored {
                    expiry: SystemTime::now() + Duration::from_secs(3600),
                });
                Ok(())
            }
            None => Err(MockClientError("object not found".into())),
        }
    }

    pub fn is_object_restored(&self, key: &str) -> Result<bool, MockClientError> {
        if let Some(mock_object) = self.objects.read().unwrap().get(key) {
            Ok(matches!(
                mock_object.restore_status,
                Some(RestoreStatus::Restored { expiry: _ })
            ))
        } else {
            Err(MockClientError("object not found".into()))
        }
    }

    /// Create a new counter for the given operation, starting at 0.
    pub fn new_counter(&self, operation: Operation) -> OperationCounter<'_> {
        let op_counts = self.operation_counts.read().unwrap();
        let initial_count = op_counts.get(&operation).copied().unwrap_or_default();

        OperationCounter {
            client: self,
            initial_count,
            operation,
        }
    }

    /// Mock implementation of PutObject.
    fn mock_put_object<'a>(
        &self,
        key: &str,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send + 'a,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, MockClientError> {
        if let Some(offset) = params.write_offset_bytes {
            // Handle as an Append request.
            return self.append_object(key, offset, params, contents);
        }

        let checksum = validate_checksum(contents.as_ref(), params.checksum.as_ref())?;

        let mut object: MockObject = contents.into();
        object.set_storage_class(params.storage_class.clone());
        object.set_object_metadata(params.object_metadata.clone());
        object.set_checksum(checksum);

        let etag = object.etag.clone();
        add_object(&self.objects, key, object);
        Ok(PutObjectResult {
            etag,
            sse_type: None,
            sse_kms_key_id: None,
        })
    }

    /// Track number of operations for verifying API calls made by the client in testing.
    fn inc_op_count(&self, operation: Operation) {
        let mut op_counts = self.operation_counts.write().unwrap();
        op_counts.entry(operation).and_modify(|count| *count += 1).or_insert(1);
    }

    /// Ordered list implementation
    fn list_objects_ordered(
        &self,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ListObjectsResult {
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
                    restore_status: object.restore_status,
                    checksum_algorithms: object.checksum.algorithms(),
                });
            }
        }

        let common_prefixes = common_prefixes.into_iter().collect::<Vec<_>>();

        ListObjectsResult {
            objects: object_vec,
            common_prefixes,
            next_continuation_token,
        }
    }

    fn list_objects_unordered(
        &self,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
        seed: u64,
    ) -> ListObjectsResult {
        // TODO delimiter and prefix should be optional in the API
        let delimiter = (!delimiter.is_empty()).then_some(delimiter);

        let mut common_prefixes: Vec<String> = Vec::new();
        let mut common_prefixes_set: HashSet<String> = HashSet::new();
        let mut object_vec: Vec<ObjectInfo> = Vec::new();

        let objects = self.objects.read().unwrap();

        // Shuffle the keys now before we construct an iterator over them. This won't be stable in
        // the presence of mutation, but that's the expected behavior anyway.
        let mut object_keys: Vec<_> = objects.keys().filter(|key| key.starts_with(prefix)).collect();
        object_keys.shuffle(&mut ChaCha20Rng::seed_from_u64(seed));

        // Continuation tokens for unordered list will just be the index in the shuffled list. This
        // again won't work well in the presence of mutation, but again, that's the expected
        // behavior.
        let next_index = continuation_token
            .map(|ct| ct.parse::<usize>().expect("invalid continuation token"))
            .unwrap_or(0);
        let object_iterator = object_keys.iter().skip(next_index).take(max_keys);

        let mut next_continuation_token = next_index;
        for key in object_iterator {
            let object = objects.get(*key).expect("key is valid");
            let remaining_key = key.chars().skip(prefix.chars().count()).collect::<String>();

            if let Some((pre, _)) = delimiter.and_then(|d| remaining_key.split_once(d)) {
                let common_prefix = format!("{}{}{}", prefix, pre, delimiter.unwrap());
                if common_prefixes_set.insert(common_prefix.clone()) {
                    common_prefixes.push(common_prefix);
                }
            } else {
                object_vec.push(ObjectInfo {
                    key: key.to_string(),
                    size: object.len() as u64,
                    last_modified: object.last_modified,
                    etag: object.etag.as_str().to_string(),
                    storage_class: object.storage_class.clone(),
                    restore_status: object.restore_status,
                    checksum_algorithms: object.checksum.algorithms(),
                });
            }
            next_continuation_token += 1;
        }
        // We're on the last page of the list if we saw fewer than `max_keys` keys
        let next_continuation_token =
            (next_continuation_token == next_index + max_keys).then(|| next_continuation_token.to_string());

        ListObjectsResult {
            objects: object_vec,
            common_prefixes,
            next_continuation_token,
        }
    }

    // TODO: we may want to extend testing of failure conditions.
    fn append_object(
        &self,
        key: &str,
        offset: u64,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, MockClientError> {
        let contents = contents.as_ref();
        let mut objects = self.objects.write().unwrap();
        let object = match objects.get_mut(key) {
            None => {
                // Allow creating a new object if append at offset is 0, otherwise the request should fail
                if offset != 0 {
                    return Err(ObjectClientError::ServiceError(PutObjectError::NoSuchKey));
                }
                if params.if_match.is_some() {
                    return Err(ObjectClientError::ServiceError(PutObjectError::PreconditionFailed));
                }
                let checksum = validate_checksum(contents, params.checksum.as_ref())?;

                let mut object = MockObject::from(contents);
                object.set_storage_class(params.storage_class.clone());
                object.set_object_metadata(params.object_metadata.clone());
                object.set_checksum(checksum);
                objects.insert(key.to_owned(), object);
                objects.get_mut(key).unwrap()
            }
            Some(object) => {
                if let Some(etag) = &params.if_match {
                    if object.etag != *etag {
                        return Err(ObjectClientError::ServiceError(PutObjectError::PreconditionFailed));
                    }
                }

                // Append empty contents to non-empty object is not allowed
                if contents.is_empty() && !object.is_empty() {
                    return Err(ObjectClientError::ServiceError(PutObjectError::EmptyBody));
                }

                if object.len() as u64 != offset {
                    return Err(ObjectClientError::ServiceError(PutObjectError::InvalidWriteOffset));
                }

                let current_algorithms = object.checksum.algorithms();
                let checksum_matches = match &params.checksum {
                    Some(checksum) => current_algorithms.contains(&checksum.checksum_algorithm()),
                    None => current_algorithms.is_empty(),
                };
                if !checksum_matches {
                    return Err(ObjectClientError::ServiceError(PutObjectError::InvalidChecksumType));
                }

                // We only use the provided checksum for validation. [MockObject::append] below will
                // compact the data and compute the full checksum.
                _ = validate_checksum(contents, params.checksum.as_ref())?;

                object.append(contents);
                object
            }
        };
        let etag = object.etag.clone();
        Ok(PutObjectResult {
            etag,
            sse_type: None,
            sse_kms_key_id: None,
        })
    }
}

/// Operations for use in operation counters.
#[derive(Debug, Eq, Hash, PartialEq)]
pub enum Operation {
    DeleteObject,
    HeadObject,
    GetObject,
    GetObjectAttributes,
    ListObjectsV2,
    PutObject,
    RenameObject,
    CopyObject,
    PutObjectSingle,
}

/// Counter for a specific client [Operation].
///
/// Obtainable via `new_counter(&Operation)` method on [MockClient]
/// Its lifetime is bounded by the client which created it.
pub struct OperationCounter<'a> {
    client: &'a MockClient,
    initial_count: u64,
    operation: Operation,
}

impl OperationCounter<'_> {
    /// Return number of requests since the counter was created.
    /// The counter is **not** reset when read.
    pub fn count(&self) -> u64 {
        let op_counts = self.client.operation_counts.read().unwrap();
        let total_count = op_counts.get(&self.operation).copied().unwrap_or_default();
        total_count - self.initial_count
    }
}

#[derive(Clone)]
pub struct MockObject {
    generator: Arc<dyn Fn(u64, usize) -> Box<[u8]> + Send + Sync>,
    size: usize,
    storage_class: Option<String>,
    restore_status: Option<RestoreStatus>,
    last_modified: OffsetDateTime,
    etag: ETag,
    parts: Option<MockObjectParts>,
    object_metadata: HashMap<String, String>,
    /// S3 checksums associated with the object.
    ///
    /// Typically, at most one of the checksums should be set.
    checksum: Checksum,
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
            restore_status: None,
            last_modified: OffsetDateTime::now_utc(),
            etag,
            parts: None,
            object_metadata: HashMap::new(),
            checksum: Checksum::empty(),
        }
    }

    pub fn constant(v: u8, size: usize, etag: ETag) -> Self {
        Self {
            generator: Arc::new(move |_offset, size| vec![v; size].into_boxed_slice()),
            size,
            storage_class: None,
            restore_status: None,
            last_modified: OffsetDateTime::now_utc(),
            etag,
            parts: None,
            object_metadata: HashMap::new(),
            checksum: Checksum::empty(),
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
            restore_status: None,
            last_modified: OffsetDateTime::now_utc(),
            etag,
            parts: None,
            object_metadata: HashMap::new(),
            checksum: Checksum::empty(),
        }
    }

    pub fn with_computed_checksums(mut self, algorithms: &[ChecksumAlgorithm]) -> Self {
        self.checksum = compute_checksum(&self.read(0, self.size), algorithms);
        self
    }

    /// Append data to this object.
    ///
    /// The whole content of the object will be compacted and a new checksum calculated.
    /// Pre-existing part information will be lost.
    pub fn append(&mut self, bytes: &[u8]) -> ETag {
        let mut buffer = Vec::with_capacity(self.size + bytes.len());
        buffer.extend_from_slice(&self.read(0, self.size));
        buffer.extend_from_slice(bytes);
        let new_bytes = buffer.into_boxed_slice();
        let new_etag = ETag::from_object_bytes(&new_bytes);
        let new_checksum = compute_checksum(&new_bytes, &self.checksum.algorithms());

        self.size = new_bytes.len();
        self.generator = Arc::new(move |offset, size| new_bytes[offset as usize..offset as usize + size].into());
        self.last_modified = OffsetDateTime::now_utc();
        self.etag = new_etag.clone();
        self.checksum = new_checksum;
        self.parts = None; // Ignore the part layout. Review if required.
        new_etag
    }

    pub fn set_last_modified(&mut self, last_modified: OffsetDateTime) {
        self.last_modified = last_modified;
    }

    pub fn set_storage_class(&mut self, storage_class: Option<String>) {
        self.storage_class = storage_class;
    }

    pub fn set_object_metadata(&mut self, object_metadata: HashMap<String, String>) {
        self.object_metadata = object_metadata;
    }

    pub fn set_restored(&mut self, restore_status: Option<RestoreStatus>) {
        self.restore_status = restore_status;
    }

    pub fn set_checksum(&mut self, checksum: Checksum) {
        self.checksum = checksum;
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
            .field("restored", &self.restore_status)
            .finish_non_exhaustive()
    }
}

fn compute_checksum(content: &[u8], algorithms: &[ChecksumAlgorithm]) -> Checksum {
    let mut checksum = Checksum::empty();
    for algorithm in algorithms {
        match algorithm {
            ChecksumAlgorithm::Crc64nvme => {
                let crc64nvme = crc64nvme::checksum(content);
                checksum.checksum_crc64nvme = Some(crc64nvme_to_base64(&crc64nvme));
            }
            ChecksumAlgorithm::Crc32 => {
                let crc32 = crc32::checksum(content);
                checksum.checksum_crc32 = Some(crc32_to_base64(&crc32));
            }
            ChecksumAlgorithm::Crc32c => {
                let crc32c = crc32c::checksum(content);
                checksum.checksum_crc32c = Some(crc32c_to_base64(&crc32c));
            }
            ChecksumAlgorithm::Sha1 => {
                let sha1 = sha1::checksum(content).expect("sha1 computation failed");
                checksum.checksum_sha1 = Some(sha1_to_base64(&sha1));
            }
            ChecksumAlgorithm::Sha256 => {
                let sha256 = sha256::checksum(content).expect("sha256 computation failed");
                checksum.checksum_sha256 = Some(sha256_to_base64(&sha256));
            }
            algorithm => unimplemented!("unknown checksum algorithm: {:?}", algorithm),
        };
    }
    checksum
}

/// Validate data against the [UploadChecksum] and return the [Checksum] to be stored.
fn validate_checksum(
    contents: &[u8],
    upload_checksum: Option<&UploadChecksum>,
) -> ObjectClientResult<Checksum, PutObjectError, MockClientError> {
    let algorithm = upload_checksum.map(|c| c.checksum_algorithm());
    let content_checksum = compute_checksum(contents, algorithm.as_slice());
    let provided_checksum = upload_checksum.cloned().into();
    if provided_checksum != content_checksum {
        return Err(ObjectClientError::ServiceError(PutObjectError::BadChecksum));
    }
    Ok(provided_checksum)
}
#[derive(Clone, Debug)]
pub struct MockBackpressureHandle {
    read_window_end_offset: Arc<AtomicU64>,
}

impl ClientBackpressureHandle for MockBackpressureHandle {
    fn increment_read_window(&mut self, len: usize) {
        self.read_window_end_offset.fetch_add(len as u64, Ordering::SeqCst);
    }

    fn ensure_read_window(&mut self, desired_end_offset: u64) {
        let diff = desired_end_offset.saturating_sub(self.read_window_end_offset()) as usize;
        self.increment_read_window(diff);
    }

    fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset.load(Ordering::SeqCst)
    }
}

#[derive(Debug)]
pub struct MockGetObjectResponse {
    object: MockObject,
    next_offset: u64,
    length: usize,
    part_size: usize,
    backpressure_handle: Option<MockBackpressureHandle>,
}

impl MockGetObjectResponse {
    /// Helpful test utility to just collect the entire object into memory. Will panic if the object
    /// parts are streamed out of order.
    pub async fn collect(mut self) -> ObjectClientResult<Box<[u8]>, GetObjectError, MockClientError> {
        let mut next_offset = None;
        let mut body = vec![];
        while let Some(GetBodyPart { offset, data }) = self.next().await.transpose()? {
            assert!(next_offset.as_ref().map(|no| offset == *no).unwrap_or(true));
            body.extend_from_slice(&data);
            next_offset = Some(offset + data.len() as u64);
        }
        Ok(body.into_boxed_slice())
    }
}

#[cfg_attr(not(docsrs), async_trait)]
impl GetObjectResponse for MockGetObjectResponse {
    type BackpressureHandle = MockBackpressureHandle;
    type ClientError = MockClientError;

    fn backpressure_handle(&mut self) -> Option<&mut Self::BackpressureHandle> {
        self.backpressure_handle.as_mut()
    }

    fn get_object_metadata(&self) -> ObjectMetadata {
        self.object.object_metadata.clone()
    }

    fn get_object_checksum(&self) -> Result<Checksum, ObjectChecksumError> {
        Ok(self.object.checksum.clone())
    }
}

impl Stream for MockGetObjectResponse {
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, MockClientError>;

    fn poll_next(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        if self.length == 0 {
            return Poll::Ready(None);
        }

        let next_read_size = self.part_size.min(self.length);

        // Simulate backpressure mechanism
        if let Some(handle) = &self.backpressure_handle {
            if self.next_offset >= handle.read_window_end_offset() {
                return Poll::Ready(Some(Err(ObjectClientError::ClientError(MockClientError(
                    "empty read window".into(),
                )))));
            }
        }
        let next_part = self.object.read(self.next_offset, next_read_size);

        let result = GetBodyPart {
            offset: self.next_offset,
            data: next_part.into(),
        };
        self.next_offset += next_read_size as u64;
        self.length -= next_read_size;
        Poll::Ready(Some(Ok(result)))
    }
}

#[derive(Debug, Default, Error, PartialEq, Eq)]
pub struct MockClientError(pub Cow<'static, str>);

impl std::fmt::Display for MockClientError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl ProvideErrorMetadata for MockClientError {
    fn meta(&self) -> ClientErrorMetadata {
        Default::default()
    }
}

fn mock_client_error<T, E>(s: impl Into<Cow<'static, str>>) -> ObjectClientResult<T, E, MockClientError> {
    Err(ObjectClientError::ClientError(MockClientError(s.into())))
}

#[cfg_attr(not(docsrs), async_trait)]
impl ObjectClient for MockClient {
    type GetObjectResponse = MockGetObjectResponse;
    type PutObjectRequest = MockPutObjectRequest;
    type ClientError = MockClientError;

    fn read_part_size(&self) -> Option<usize> {
        Some(self.config.part_size)
    }

    fn write_part_size(&self) -> Option<usize> {
        Some(self.config.part_size)
    }

    fn initial_read_window_size(&self) -> Option<usize> {
        if self.config.enable_backpressure {
            Some(self.config.initial_read_window_size)
        } else {
            None
        }
    }

    fn mem_usage_stats(&self) -> Option<BufferPoolUsageStats> {
        None
    }

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        trace!(bucket, key, "DeleteObject");
        self.inc_op_count(Operation::DeleteObject);

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(DeleteObjectError::NoSuchBucket));
        }

        self.remove_object(key);

        Ok(DeleteObjectResult {})
    }

    async fn copy_object(
        &self,
        source_bucket: &str,
        source_key: &str,
        destination_bucket: &str,
        destination_key: &str,
        _params: &CopyObjectParams,
    ) -> ObjectClientResult<CopyObjectResult, CopyObjectError, Self::ClientError> {
        if destination_bucket != self.config.bucket && source_bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(CopyObjectError::NotFound));
        }

        let mut objects = self.objects.write().unwrap();
        if let Some(object) = objects.get(source_key) {
            let cloned_object = object.clone();
            objects.insert(destination_key.to_owned(), cloned_object);
            Ok(CopyObjectResult {})
        } else {
            Err(ObjectClientError::ServiceError(CopyObjectError::NotFound))
        }
    }

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        params: &GetObjectParams,
    ) -> ObjectClientResult<Self::GetObjectResponse, GetObjectError, Self::ClientError> {
        trace!(bucket, key, ?params.range, ?params.if_match, "GetObject");
        self.inc_op_count(Operation::GetObject);

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(GetObjectError::NoSuchBucket(
                Default::default(),
            )));
        }

        let objects = self.objects.read().unwrap();

        if let Some(object) = objects.get(key) {
            if let Some(etag_match) = params.if_match.as_ref() {
                if etag_match != &object.etag {
                    return Err(ObjectClientError::ServiceError(GetObjectError::PreconditionFailed(
                        Default::default(),
                    )));
                }
            }

            let (next_offset, length) = if let Some(range) = params.range.as_ref() {
                if range.start >= object.len() as u64 || range.end > object.len() as u64 {
                    return mock_client_error(format!("invalid range, length={}", object.len()));
                }
                (range.start, (range.end - range.start) as usize)
            } else {
                (0, object.len())
            };

            let backpressure_handle = if self.config.enable_backpressure {
                let read_window_end_offset = Arc::new(AtomicU64::new(
                    next_offset + self.config.initial_read_window_size as u64,
                ));
                Some(MockBackpressureHandle { read_window_end_offset })
            } else {
                None
            };
            Ok(MockGetObjectResponse {
                object: object.clone(),
                next_offset,
                length,
                part_size: self.config.part_size,
                backpressure_handle,
            })
        } else {
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey(
                Default::default(),
            )))
        }
    }

    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
        params: &HeadObjectParams,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        trace!(bucket, key, "HeadObject");
        self.inc_op_count(Operation::HeadObject);

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(HeadObjectError::NotFound));
        }

        let objects = self.objects.read().unwrap();
        if let Some(object) = objects.get(key) {
            // Checksum information is opt-in
            let checksum = match params.checksum_mode {
                Some(ChecksumMode::Enabled) => object.checksum.clone(),
                None => Checksum::empty(),
            };

            Ok(HeadObjectResult {
                size: object.size as u64,
                last_modified: object.last_modified,
                etag: object.etag.clone(),
                storage_class: object.storage_class.clone(),
                restore_status: object.restore_status,
                checksum,
                sse_type: None,
                sse_kms_key_id: None,
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
        self.inc_op_count(Operation::ListObjectsV2);

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(ListObjectsError::NoSuchBucket));
        }

        if let Some(seed) = self.config.unordered_list_seed {
            Ok(self.list_objects_unordered(continuation_token, delimiter, max_keys, prefix, seed))
        } else {
            Ok(self.list_objects_ordered(continuation_token, delimiter, max_keys, prefix))
        }
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError> {
        trace!(bucket, key, "PutObject");
        self.inc_op_count(Operation::PutObject);

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

    async fn put_object_single<'a>(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send + 'a,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        trace!(bucket, key, "PutObject");
        self.inc_op_count(Operation::PutObjectSingle);

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(PutObjectError::NoSuchBucket));
        }

        self.mock_put_object(key, params, contents)
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
        self.inc_op_count(Operation::GetObjectAttributes);

        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(GetObjectAttributesError::NoSuchBucket));
        }

        let objects = self.objects.read().unwrap();
        if let Some(object) = objects.get(key) {
            let mut result = GetObjectAttributesResult::default();
            for attribute in object_attributes.iter() {
                match attribute {
                    ObjectAttribute::ETag => result.etag = Some(object.etag.as_str().to_owned()),
                    ObjectAttribute::Checksum => result.checksum = Some(object.checksum.clone()),
                    ObjectAttribute::ObjectParts => {
                        let parts = match &object.parts {
                            Some(MockObjectParts::Count(num_parts)) => Some(GetObjectAttributesParts {
                                is_truncated: None,
                                max_parts: None,
                                next_part_number_marker: None,
                                part_number_marker: None,
                                parts: None,
                                total_parts_count: Some(*num_parts),
                            }),
                            Some(MockObjectParts::Parts(parts)) => Some(GetObjectAttributesParts {
                                is_truncated: Some(false),
                                max_parts: Some(10000),
                                next_part_number_marker: Some(parts.len()),
                                part_number_marker: Some(0),
                                parts: Some(
                                    parts
                                        .iter()
                                        .enumerate()
                                        .map(|(i, part)| ObjectPart {
                                            checksum: Some(Checksum {
                                                checksum_crc64nvme: None,
                                                checksum_crc32: None,
                                                checksum_crc32c: part.checksum.clone(),
                                                checksum_sha1: None,
                                                checksum_sha256: None,
                                            }),
                                            // Part numbers start at 1
                                            part_number: i + 1,
                                            size: part.size,
                                        })
                                        .collect(),
                                ),
                                total_parts_count: Some(parts.len()),
                            }),
                            None => None,
                        };
                        result.object_parts = parts;
                    }
                    ObjectAttribute::StorageClass => object.storage_class.clone_into(&mut result.storage_class),
                    ObjectAttribute::ObjectSize => result.object_size = Some(object.size as u64),
                }
            }
            Ok(result)
        } else {
            Err(ObjectClientError::ServiceError(GetObjectAttributesError::NoSuchKey))
        }
    }

    async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        params: &RenameObjectParams,
    ) -> ObjectClientResult<RenameObjectResult, RenameObjectError, Self::ClientError> {
        trace!(bucket, ?src_key, ?dst_key, "RenameObject");
        self.inc_op_count(Operation::RenameObject);
        if !self.config.enable_rename {
            return Err(ObjectClientError::ServiceError(RenameObjectError::NotImplementedError));
        }
        if bucket != self.config.bucket {
            return Err(ObjectClientError::ServiceError(RenameObjectError::NoSuchBucket));
        }

        if dst_key.len() > 1024 {
            return Err(ObjectClientError::ServiceError(RenameObjectError::KeyTooLong));
        }

        let mut objects = self.objects.write().unwrap();

        if objects.contains_key(dst_key) && params.if_none_match == Some("*".to_string()) {
            return Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                RenamePreconditionTypes::IfNoneMatch,
            )));
        }

        // First check if destination Etag matches
        if let Some(dst_etag_to_match) = &params.if_match {
            if let Some(destination_object) = objects.get(dst_key) {
                if *dst_etag_to_match != destination_object.etag {
                    return Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                        RenamePreconditionTypes::IfMatch,
                    )));
                }
            }
        }

        if let Some(src_etag_to_match) = &params.if_source_match {
            if let Some(src_object) = objects.get(src_key) {
                if *src_etag_to_match != src_object.etag {
                    return Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                        RenamePreconditionTypes::IfMatch,
                    )));
                }
            }
        }
        if !objects.contains_key(src_key) {
            return Err(ObjectClientError::ServiceError(RenameObjectError::KeyNotFound));
        }
        let removed = objects.remove(src_key).unwrap();
        objects.insert(dst_key.to_owned(), removed);
        trace!("renamed in bucket");
        Ok(RenameObjectResult {})
    }
}

/// Mock implementation of a meta [PutObjectRequest], created by [MockClient]'s [ObjectClient::put_object].
///
/// For a single PutObject, see [MockClient]'s implementation of [ObjectClient::put_object_single].
#[derive(Debug)]
pub struct MockPutObjectRequest {
    key: String,
    buffer: Vec<u8>,
    part_size: usize,
    params: PutObjectParams,
    objects: Arc<RwLock<BTreeMap<String, MockObject>>>,
    in_progress_uploads: Arc<RwLock<BTreeSet<String>>>,
}

impl MockPutObjectRequest {
    fn new(
        key: &str,
        part_size: usize,
        params: &PutObjectParams,
        objects: &Arc<RwLock<BTreeMap<String, MockObject>>>,
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

    fn parts(&self) -> Vec<MockObjectPartAttributes> {
        self.buffer
            .chunks(self.part_size)
            .map(|part| {
                let size = part.len();
                let checksum = if self.params.trailing_checksums != PutObjectTrailingChecksums::Disabled {
                    let checksum = crc32c::checksum(part);
                    Some(crc32c_to_base64(&checksum))
                } else {
                    None
                };
                MockObjectPartAttributes { size, checksum }
            })
            .collect()
    }

    fn complete_inner(
        mut self,
        parts: Vec<MockObjectPartAttributes>,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, MockClientError> {
        let buffer = std::mem::take(&mut self.buffer);
        let mut object: MockObject = buffer.into();
        object.set_storage_class(self.params.storage_class.clone());
        object.set_object_metadata(self.params.object_metadata.clone());

        // For S3 Standard, part attributes are only available when additional checksums are used
        if self.params.trailing_checksums == PutObjectTrailingChecksums::Enabled {
            let whole_obj_checksum = {
                let mut whole_obj_checksum = Checksum::empty();
                let part_checksums = parts
                    .iter()
                    .map(|part| part.checksum.clone())
                    .map(|checksum| checksum.expect("checksum must be set when using trailing checksums"));
                whole_obj_checksum.checksum_crc32c = Some(compute_crc32c_of_crc32c_checksums(part_checksums));
                whole_obj_checksum
            };
            object.set_checksum(whole_obj_checksum);
            object.parts = Some(MockObjectParts::Parts(parts));
        } else {
            object.parts = Some(MockObjectParts::Count(parts.len()));
        }

        let etag = object.etag();
        add_object(&self.objects, &self.key, object);
        Ok(PutObjectResult {
            etag,
            sse_type: None,
            sse_kms_key_id: None,
        })
    }
}

/// Compute a checksum of checksums, mirroring how S3 computes object checksums for MPUs.
fn compute_crc32c_of_crc32c_checksums(individual_checksums: impl IntoIterator<Item = String>) -> String {
    let mut checksum = crc32c::Hasher::new();
    let mut count = 0;
    for individual_checksum in individual_checksums {
        count += 1;
        checksum.update(individual_checksum.as_bytes());
    }
    let mut checksum = crc32c_to_base64(&checksum.finalize());
    write!(checksum, "-{count}").expect("should be able to append to String");
    checksum
}

impl Drop for MockPutObjectRequest {
    fn drop(&mut self) {
        self.in_progress_uploads.write().unwrap().remove(&self.key);
    }
}

#[cfg_attr(not(docsrs), async_trait)]
impl PutObjectRequest for MockPutObjectRequest {
    type ClientError = MockClientError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        self.buffer.extend_from_slice(slice);
        Ok(())
    }

    async fn complete(mut self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        let parts = self.parts();
        self.complete_inner(parts)
    }

    async fn review_and_complete(
        self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        let checksum_algorithm = if self.params.trailing_checksums != PutObjectTrailingChecksums::Disabled {
            Some(ChecksumAlgorithm::Crc32c)
        } else {
            None
        };
        let parts = self.parts();
        let review_parts = parts
            .iter()
            .map(|part| UploadReviewPart {
                size: part.size as u64,
                checksum: part.checksum.clone(),
            })
            .collect();
        let review = UploadReview {
            checksum_algorithm,
            parts: review_parts,
        };
        if !review_callback(review) {
            return mock_client_error("upload review failed, aborting");
        }
        self.complete_inner(parts)
    }
}

#[derive(Debug, Clone)]
struct MockObjectPartAttributes {
    size: usize,
    checksum: Option<String>,
}

/// Some S3 implementations only report per-part data from GetObjectAttributes if parts were
/// uploaded with additional checksums. This enum is how we remember whether additional checksums
/// were used; if not, the only thing we report is the number of parts.
#[derive(Debug, Clone)]
enum MockObjectParts {
    Count(usize),
    Parts(Vec<MockObjectPartAttributes>),
}

#[cfg(test)]
mod tests {
    use futures::StreamExt;
    use rand::{Rng, RngCore, SeedableRng};
    use rand_chacha::ChaChaRng;
    use std::ops::Range;
    use test_case::test_case;

    use super::*;

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

    async fn test_get_object(
        key: &str,
        size: usize,
        range: Option<Range<u64>>,
        object_metadata: HashMap<String, String>,
    ) {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let mut body = vec![0u8; size];
        rng.fill_bytes(&mut body);

        let mut object = MockObject::from_bytes(&body, ETag::for_tests());
        object.set_object_metadata(object_metadata.clone());
        client.add_object(key, object);

        let mut get_request = client
            .get_object("test_bucket", key, &GetObjectParams::new().range(range.clone()))
            .await
            .expect("should not fail");

        let mut accum = vec![];
        let mut next_offset = range.as_ref().map(|r| r.start).unwrap_or(0);
        while let Some(r) = get_request.next().await {
            let GetBodyPart { offset, data: body } = r.expect("get_object body part failed");
            assert_eq!(offset, next_offset, "wrong body part offset");
            next_offset += body.len() as u64;
            accum.extend_from_slice(&body[..]);
        }
        let expected_range = range.unwrap_or(0..size as u64);
        let expected_range = expected_range.start as usize..expected_range.end as usize;
        assert_eq!(&accum[..], &body[expected_range], "body does not match");

        assert_eq!(get_request.get_object_metadata(), object_metadata);
    }

    #[tokio::test]
    async fn get_object() {
        test_get_object("key1", 2000, None, Default::default()).await;
        test_get_object("key1", 9000, Some(50..2000), Default::default()).await;
        test_get_object("key1", 10, Some(0..10), Default::default()).await;
        test_get_object(
            "key1",
            10,
            None,
            HashMap::from([("foo".to_string(), "bar".to_string())]),
        )
        .await;
    }

    async fn test_get_object_backpressure(
        key: &str,
        size: usize,
        range: Option<Range<u64>>,
        backpressure_read_window_size: usize,
    ) {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            enable_backpressure: true,
            enable_rename: false,
            initial_read_window_size: backpressure_read_window_size,
        });

        let mut body = vec![0u8; size];
        rng.fill_bytes(&mut body);
        client.add_object(key, MockObject::from_bytes(&body, ETag::for_tests()));

        let mut get_request = client
            .get_object("test_bucket", key, &GetObjectParams::new().range(range.clone()))
            .await
            .expect("should not fail");
        let mut backpressure_handle = get_request
            .backpressure_handle()
            .cloned()
            .expect("should be able to get a backpressure handle");

        let mut accum = vec![];
        let mut next_offset = range.as_ref().map(|r| r.start).unwrap_or(0);
        while let Some(r) = get_request.next().await {
            let GetBodyPart { offset, data: body } = r.expect("get_object body part failed");
            assert_eq!(offset, next_offset, "wrong body part offset");
            next_offset += body.len() as u64;
            accum.extend_from_slice(&body[..]);

            while next_offset >= backpressure_handle.read_window_end_offset() {
                backpressure_handle.increment_read_window(backpressure_read_window_size);
            }
        }
        let expected_range = range.unwrap_or(0..size as u64);
        let expected_range = expected_range.start as usize..expected_range.end as usize;
        assert_eq!(&accum[..], &body[expected_range], "body does not match");
    }

    #[tokio::test]
    async fn get_object_backpressure() {
        test_get_object_backpressure("key1", 2000, None, 256).await;
        test_get_object_backpressure("key1", 9000, Some(50..2000), 512).await;
        test_get_object_backpressure("key1", 10, Some(0..10), 256).await;
    }

    #[allow(clippy::reversed_empty_ranges)]
    #[tokio::test]
    async fn get_object_errors() {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let mut body = vec![0u8; 2000];
        rng.fill_bytes(&mut body);
        client.add_object("key1", body[..].into());

        assert!(matches!(
            client.get_object("wrong_bucket", "key1", &GetObjectParams::new()).await,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchBucket(_)))
        ));

        assert!(matches!(
            client
                .get_object("test_bucket", "wrong_key", &GetObjectParams::new())
                .await,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey(_)))
        ));

        assert_client_error!(
            client
                .get_object("test_bucket", "key1", &GetObjectParams::new().range(Some(0..2001)))
                .await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client
                .get_object("test_bucket", "key1", &GetObjectParams::new().range(Some(2000..2000)))
                .await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client
                .get_object("test_bucket", "key1", &GetObjectParams::new().range(Some(500..2001)))
                .await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client
                .get_object("test_bucket", "key1", &GetObjectParams::new().range(Some(5000..2001)))
                .await,
            "invalid range, length=2000"
        );
        assert_client_error!(
            client
                .get_object("test_bucket", "key1", &GetObjectParams::new().range(Some(5000..1)))
                .await,
            "invalid range, length=2000"
        );
    }

    // Verify that an error is returned when we don't increment read window size
    #[tokio::test]
    async fn verify_backpressure_get_object() {
        let key = "key1";

        let mut rng = ChaChaRng::seed_from_u64(0x12345678);
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            enable_backpressure: true,
            enable_rename: false,
            initial_read_window_size: 256,
        });

        let part_size = client.read_part_size().unwrap();
        let size = part_size * 2;
        let range = 0..(part_size + 1) as u64;

        let mut expected_body = vec![0u8; size];
        rng.fill_bytes(&mut expected_body);
        client.add_object(key, MockObject::from_bytes(&expected_body, ETag::for_tests()));

        let mut get_request = client
            .get_object("test_bucket", key, &GetObjectParams::new().range(Some(range.clone())))
            .await
            .expect("should not fail");

        // Verify that we can receive some data since the window size is more than 0
        let first_part = get_request.next().await.expect("result should not be empty");
        let GetBodyPart { offset, data: body } = first_part.unwrap();
        assert_eq!(offset, 0, "wrong body part offset");

        // The CRT always return at least a part even if the window is smaller than that
        let expected_range = range.start as usize..part_size;
        assert_eq!(&body[..], &expected_body[expected_range]);

        // This await should return an error because current window is not enough to get the next part
        let next = get_request.next().await.expect("result should not be empty");
        assert_client_error!(next, "empty read window");
    }

    #[tokio::test]
    async fn test_copy_object() {
        let bucket = "test_bucket";
        let src_key = "src_copy_key";
        let dst_key = "dst_copy_key";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        client.add_object(src_key, "test_body".into());

        client
            .copy_object(bucket, src_key, bucket, dst_key, &Default::default())
            .await
            .expect("Should not fail");

        client
            .get_object(bucket, dst_key, &GetObjectParams::new())
            .await
            .expect("get_object should succeed");
    }

    #[tokio::test]
    async fn test_copy_object_non_existing_key() {
        let bucket = "test_bucket";
        let src_key = "src_copy_key";
        let dst_key = "dst_copy_key";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        assert!(matches!(
            client
                .copy_object(bucket, src_key, bucket, dst_key, &Default::default())
                .await,
            Err(ObjectClientError::ServiceError(CopyObjectError::NotFound))
        ));
    }

    #[tokio::test]
    async fn list_object_dirs() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
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
            unordered_list_seed: None,
            ..Default::default()
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

    #[test_case(""; "unprefixed")]
    #[test_case("prefix/1/2/"; "prefixed")]
    #[tokio::test]
    async fn list_objects_unordered(prefix: &str) {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: Some(1234),
            ..Default::default()
        });

        for i in 0..20 {
            client.add_object(
                &format!("{prefix}key{i}"),
                MockObject::constant(0u8, 5, ETag::for_tests()),
            );
            if i % 3 == 0 {
                client.add_object(
                    &format!("{prefix}key{i}/file.txt"),
                    MockObject::constant(0u8, 5, ETag::for_tests()),
                );
            } else if i % 5 == 0 {
                client.add_object(
                    &format!("{prefix}key{i}/"),
                    MockObject::constant(0u8, 5, ETag::for_tests()),
                );
            }
        }

        let result1 = client
            .list_objects("test_bucket", None, "/", 10, prefix)
            .await
            .expect("should not fail");
        let continuation_token = result1.next_continuation_token.expect("list should not be finished");
        let result2 = client
            .list_objects("test_bucket", Some(&continuation_token), "/", 1000, prefix)
            .await
            .expect("should not fail");

        assert!(result2.next_continuation_token.is_none());

        // Depends on the random seed, but a cheap way to check randomization is working
        assert_ne!(result1.objects[0].key, format!("{prefix}key0"));

        let prefixes: HashSet<_> = result1
            .common_prefixes
            .into_iter()
            .chain(result2.common_prefixes.into_iter())
            .collect();
        let objects: HashSet<_> = result1
            .objects
            .into_iter()
            .map(|o| o.key)
            .chain(result2.objects.into_iter().map(|o| o.key))
            .collect();
        let expected_prefixes: HashSet<_> = (0..20)
            .filter(|i| i % 3 == 0 || i % 5 == 0)
            .map(|i| format!("{prefix}key{i}/"))
            .collect();
        let expected_objects: HashSet<_> = (0..20).map(|i| format!("{prefix}key{i}")).collect();
        assert_eq!(prefixes, expected_prefixes);
        assert_eq!(objects, expected_objects);
    }

    #[test_case(1, "")]
    #[test_case(2, "")]
    #[test_case(3, "")]
    #[test_case(5, "")]
    #[test_case(10, "")]
    #[test_case(50, "")]
    #[test_case(1, "prefix/1/2/")]
    #[test_case(2, "prefix/1/2/")]
    #[test_case(3, "prefix/1/2/")]
    #[test_case(5, "prefix/1/2/")]
    #[test_case(10, "prefix/1/2/")]
    #[test_case(50, "prefix/1/2/")]
    #[tokio::test]
    async fn list_objects_unordered_delimited_page_size(page_size: usize, prefix: &str) {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: Some(1234),
            ..Default::default()
        });

        for i in 0..20 {
            client.add_object(
                &format!("{prefix}key{i}"),
                MockObject::constant(0u8, 5, ETag::for_tests()),
            );
            if i % 3 == 0 {
                client.add_object(
                    &format!("{prefix}key{i}/file.txt"),
                    MockObject::constant(0u8, 5, ETag::for_tests()),
                );
            } else if i % 5 == 0 {
                client.add_object(
                    &format!("{prefix}key{i}/"),
                    MockObject::constant(0u8, 5, ETag::for_tests()),
                );
            }
        }

        let mut prefixes = HashSet::new();
        let mut objects = HashSet::new();
        let mut continuation_token = None;
        for _ in 0..100 {
            let result = client
                .list_objects("test_bucket", continuation_token.as_deref(), "/", page_size, prefix)
                .await
                .expect("should not fail");
            continuation_token = result.next_continuation_token;

            prefixes.extend(result.common_prefixes.into_iter());
            objects.extend(result.objects.into_iter().map(|o| o.key));

            if continuation_token.is_none() {
                break;
            }
        }

        assert!(continuation_token.is_none(), "list did not terminate");

        let expected_prefixes: HashSet<_> = (0..20)
            .filter(|i| i % 3 == 0 || i % 5 == 0)
            .map(|i| format!("{prefix}key{i}/"))
            .collect();
        let expected_objects: HashSet<_> = (0..20).map(|i| format!("{prefix}key{i}")).collect();
        assert_eq!(prefixes, expected_prefixes);
        assert_eq!(objects, expected_objects);
    }

    #[test_case(1, "")]
    #[test_case(2, "")]
    #[test_case(3, "")]
    #[test_case(5, "")]
    #[test_case(10, "")]
    #[test_case(50, "")]
    #[test_case(1, "prefix/1/2/")]
    #[test_case(2, "prefix/1/2/")]
    #[test_case(3, "prefix/1/2/")]
    #[test_case(5, "prefix/1/2/")]
    #[test_case(10, "prefix/1/2/")]
    #[test_case(50, "prefix/1/2/")]
    #[tokio::test]
    async fn list_objects_unordered_undelimited_page_size(page_size: usize, prefix: &str) {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: Some(1234),
            ..Default::default()
        });

        for i in 0..20 {
            client.add_object(
                &format!("{prefix}key{i}"),
                MockObject::constant(0u8, 5, ETag::for_tests()),
            );
            if i % 3 == 0 {
                client.add_object(
                    &format!("{prefix}key{i}/file.txt"),
                    MockObject::constant(0u8, 5, ETag::for_tests()),
                );
            } else if i % 5 == 0 {
                client.add_object(
                    &format!("{prefix}key{i}/"),
                    MockObject::constant(0u8, 5, ETag::for_tests()),
                );
            }
        }

        let mut prefixes = HashSet::new();
        let mut objects = HashSet::new();
        let mut continuation_token = None;
        for _ in 0..100 {
            let result = client
                .list_objects("test_bucket", continuation_token.as_deref(), "", page_size, prefix)
                .await
                .expect("should not fail");
            continuation_token = result.next_continuation_token;

            prefixes.extend(result.common_prefixes.into_iter());
            objects.extend(result.objects.into_iter().map(|o| o.key));

            if continuation_token.is_none() {
                break;
            }
        }

        assert!(continuation_token.is_none(), "list did not terminate");

        assert!(prefixes.is_empty(), "should be no common prefixes without a delimiter");

        let mut expected_objects: HashSet<_> = (0..20).map(|i| format!("{prefix}key{i}")).collect();
        expected_objects.extend(
            (0..20)
                .filter(|i| i % 3 == 0)
                .map(|i| format!("{prefix}key{i}/file.txt")),
        );
        expected_objects.extend(
            (0..20)
                .filter(|i| i % 3 != 0 && i % 5 == 0)
                .map(|i| format!("{prefix}key{i}/")),
        );
        assert_eq!(objects, expected_objects);
    }

    #[tokio::test]
    async fn list_objects_checksum() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            ..Default::default()
        });

        client.add_object("a.txt", MockObject::constant(0u8, 5, ETag::for_tests()));
        let mut object_b = MockObject::constant(1u8, 5, ETag::for_tests());
        object_b.set_checksum(Checksum {
            checksum_crc64nvme: None,
            checksum_crc32: None,
            checksum_crc32c: None,
            checksum_sha1: Some(String::from("QwzjTQIHJO11oZbfwq1nx3dy0Wk=")),
            checksum_sha256: None,
        });
        client.add_object("b.txt", object_b);

        let result = client
            .list_objects("test_bucket", None, "/", 1000, "")
            .await
            .expect("should not fail");
        assert_eq!(result.objects[0].checksum_algorithms, vec![]);
        assert_eq!(result.objects[1].checksum_algorithms, vec![ChecksumAlgorithm::Sha1]);
    }

    #[tokio::test]
    async fn test_put_object() {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let obj = MockObject::ramp(0xaa, 2 * RAMP_BUFFER_SIZE, ETag::for_tests());

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let object_metadata = HashMap::from([("foo".to_string(), "bar".to_string())]);
        let put_object_params = PutObjectParams::new().object_metadata(object_metadata.clone());
        let mut put_request = client
            .put_object("test_bucket", "key1", &put_object_params)
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
            .get_object("test_bucket", "key1", &GetObjectParams::new())
            .await
            .expect("get_object failed");

        // Check that the result of get_object is correct.
        let mut next_offset = 0;
        while let Some(r) = get_request.next().await {
            let GetBodyPart { offset, data: body } = r.expect("get_object body part failed");
            assert_eq!(offset, next_offset, "wrong body part offset");
            next_offset += body.len() as u64;
            assert_eq!(*body, *obj.read(offset, body.len()));
        }
        assert_eq!(object_metadata, get_request.object.object_metadata);
    }

    #[tokio::test]
    async fn test_put_object_single() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let content = vec![42u8; 512];
        let object_metadata = HashMap::from([("foo".to_string(), "bar".to_string())]);
        let put_object_params = PutObjectSingleParams::new().object_metadata(object_metadata.clone());
        let _put_result = client
            .put_object_single("test_bucket", "key1", &put_object_params, &content)
            .await
            .expect("put_object failed");

        let get_request = client
            .get_object("test_bucket", "key1", &GetObjectParams::new())
            .await
            .expect("get_object failed");

        assert_eq!(object_metadata, get_request.object.object_metadata);
        // Check that the result of get_object is correct.
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(&content, &*actual);
    }

    #[tokio::test]
    async fn test_checksums_set_after_single_put() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            ..Default::default()
        });

        let s3_key = "key1";
        let content = vec![42u8; 512];
        let content_checksum = crc32c::checksum(&content);
        let put_object_params = PutObjectSingleParams::new().checksum(Some(UploadChecksum::Crc32c(content_checksum)));
        let _put_result = client
            .put_object_single("test_bucket", s3_key, &put_object_params, &content)
            .await
            .expect("put_object failed");

        // Now verify...

        let objects = client.objects.read().unwrap();
        let stored_object = objects.get(s3_key).expect("object should exist after PutObject");

        let mut expected_checksum = Checksum::empty();
        expected_checksum.checksum_crc32c = Some(crc32c_to_base64(&content_checksum));
        assert_eq!(
            stored_object.checksum, expected_checksum,
            "stored object checksum should equal expected checksum",
        );
    }

    #[test_case(PutObjectTrailingChecksums::Enabled; "enabled")]
    #[test_case(PutObjectTrailingChecksums::ReviewOnly; "review only")]
    #[test_case(PutObjectTrailingChecksums::Disabled; "disabled")]
    #[tokio::test]
    async fn test_checksums_set_after_meta_put(trailing_checksums: PutObjectTrailingChecksums) {
        let mut rng = ChaChaRng::seed_from_u64(0x12345678);

        let obj = MockObject::ramp(0xaa, 2 * RAMP_BUFFER_SIZE, ETag::for_tests());

        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024,
            ..Default::default()
        });

        let s3_key = "key1";
        let put_object_params = PutObjectParams::new().trailing_checksums(trailing_checksums);
        let mut put_request = client
            .put_object("test_bucket", s3_key, &put_object_params)
            .await
            .expect("should be able to initiate meta put_object");

        // Stream randomly sized parts into put_object_request.
        let mut next_offset = 0;
        while next_offset < obj.len() {
            let part_size = rng.gen_range(0..=obj.len() - next_offset);
            let result = obj.read(next_offset as u64, part_size);
            next_offset += part_size;
            put_request.write(&result).await.unwrap();
        }

        put_request
            .complete()
            .await
            .expect("should be able to complete meta put_object");

        // Now verify...

        let objects = client.objects.read().unwrap();
        let stored_object = objects.get(s3_key).expect("object should exist after PutObject");

        match stored_object
            .parts
            .as_ref()
            .expect("parts must exist when using meta put")
        {
            MockObjectParts::Parts(_) => {
                assert!(
                    matches!(trailing_checksums, PutObjectTrailingChecksums::Enabled),
                    "checksums should only be set if trailing checksums were sent to S3",
                );
            }
            MockObjectParts::Count(_) => {
                assert!(
                    !matches!(trailing_checksums, PutObjectTrailingChecksums::Enabled),
                    "checksums should be set if trailing checksums were sent to S3",
                );
            }
        }

        let mut expected_obj_checksum = Checksum::empty();
        if let PutObjectTrailingChecksums::Enabled = trailing_checksums {
            // Only if the checksums should be persisted should we check part-level checksums were set.
            let Some(MockObjectParts::Parts(parts)) = stored_object.parts.as_ref() else {
                unreachable!("we know checksums were enabled for this upload");
            };

            let part_checksums = parts
                .iter()
                .map(|part| part.checksum.clone())
                .map(|checksum| checksum.expect("checksum must be set when using trailing checksums"));
            let obj_checksum = compute_crc32c_of_crc32c_checksums(part_checksums);
            expected_obj_checksum.checksum_crc32c = Some(obj_checksum);
        }

        assert_eq!(
            stored_object.checksum, expected_obj_checksum,
            "stored object checksum should equal expected checksum",
        );
    }

    #[tokio::test]
    async fn rename_object_without_override() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            enable_rename: true,
            ..Default::default()
        });

        client.add_object("key1", MockObject::constant(1u8, 5, ETag::for_tests()));
        client.add_object("key2", MockObject::constant(2u8, 5, ETag::for_tests()));

        let mut params = RenameObjectParams::new();
        params.if_none_match = Some("*".to_string());

        assert!(matches!(
            client.rename_object("wrong_bucket", "key1", "key2", &params).await,
            Err(ObjectClientError::ServiceError(RenameObjectError::NoSuchBucket))
        ));

        assert!(matches!(
            client
                .rename_object("test_bucket", "wrong_src_key", "new_key", &params)
                .await,
            Err(ObjectClientError::ServiceError(RenameObjectError::KeyNotFound))
        ));

        assert_eq!(
            client.rename_object("test_bucket", "key1", "key2", &params).await,
            Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                RenamePreconditionTypes::IfNoneMatch
            )))
        );

        assert_eq!(
            client.rename_object("test_bucket", "key1", "key1", &params).await,
            Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                RenamePreconditionTypes::IfNoneMatch
            )))
        );

        // Happy case
        {
            client
                .rename_object("test_bucket", "key1", "new_key1", &params)
                .await
                .expect("rename should succeed");
            assert!(matches!(
                client
                    .head_object("test_bucket", "key1", &HeadObjectParams::new())
                    .await,
                Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
            ));
            client
                .head_object("test_bucket", "new_key1", &HeadObjectParams::new())
                .await
                .expect("object should now exist with new key");
        }
    }

    #[tokio::test]
    async fn rename_etag_source_matching() {
        let client = MockClient::new(MockClientConfig {
            bucket: "test_bucket".to_string(),
            enable_rename: true,
            ..Default::default()
        });

        let mockobj_for_first: MockObject = b"343".into();
        let mockobj_for_second: MockObject = b"123".into();
        let mockobj_for_third: MockObject = b"266".into();

        let etag_for_first = mockobj_for_first.etag.clone();
        let etag_for_second = mockobj_for_second.etag.clone();
        let etag_for_third = mockobj_for_third.etag.clone();

        client.add_object("key1", mockobj_for_first);
        client.add_object("key2", mockobj_for_second);
        // Try a rename with a source that does not match
        let mut params = RenameObjectParams::new();
        params.if_source_match = Some(etag_for_third.clone());
        assert_eq!(
            client.rename_object("test_bucket", "key1", "key2", &params).await,
            Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                RenamePreconditionTypes::IfMatch
            )))
        );
        // Try a rename with a destination that does not match
        params.if_source_match = None;
        params.if_match = Some(etag_for_third.clone());
        assert_eq!(
            client.rename_object("test_bucket", "key1", "key2", &params).await,
            Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                RenamePreconditionTypes::IfMatch
            )))
        );

        params.if_source_match = Some(etag_for_second.clone());
        params.if_match = Some(etag_for_first.clone());
        assert_eq!(
            client.rename_object("test_bucket", "key1", "key2", &params).await,
            Err(ObjectClientError::ServiceError(RenameObjectError::PreConditionFailed(
                RenamePreconditionTypes::IfMatch
            )))
        );

        // Lastly overwriting rename where both match
        params.if_source_match = Some(etag_for_first.clone());
        params.if_match = Some(etag_for_second.clone());
        client
            .rename_object("test_bucket", "key1", "key2", &params)
            .await
            .expect("rename should succeed");
        // Assert that key2 is accessible, while key1 is not
        assert!(matches!(
            client
                .head_object("test_bucket", "key1", &HeadObjectParams::new())
                .await,
            Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
        ));
        client
            .head_object("test_bucket", "key2", &HeadObjectParams::new())
            .await
            .expect("object should now exist with new key");
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
            unordered_list_seed: None,
            ..Default::default()
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
        let head_result = client.head_object(bucket, key, &HeadObjectParams::new()).await.unwrap();
        assert_eq!(head_result.storage_class.as_deref(), storage_class);

        // list_objects returns storage class
        let list_result = client.list_objects(bucket, None, "/", 1, "").await.unwrap();
        assert!(
            matches!(&list_result.objects[..], [object] if object.key == key && object.storage_class.as_deref() == storage_class )
        );
    }

    #[tokio::test]
    async fn counter_test() {
        let bucket = "test_bucket";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let head_counter_1 = client.new_counter(Operation::HeadObject);
        let delete_counter_1 = client.new_counter(Operation::DeleteObject);

        let _result = client.head_object(bucket, "key", &HeadObjectParams::new()).await;
        assert_eq!(1, head_counter_1.count());
        assert_eq!(0, delete_counter_1.count());

        let head_counter_2 = client.new_counter(Operation::HeadObject);
        assert_eq!(0, head_counter_2.count());

        let _result = client.head_object(bucket, "key", &HeadObjectParams::new()).await;
        let _result = client.delete_object(bucket, "key").await;
        let _result = client.delete_object(bucket, "key").await;
        let _result = client.delete_object(bucket, "key").await;
        assert_eq!(2, head_counter_1.count());
        assert_eq!(3, delete_counter_1.count());
        assert_eq!(1, head_counter_2.count());
    }

    #[test_case(PutObjectTrailingChecksums::Enabled; "enabled")]
    #[test_case(PutObjectTrailingChecksums::ReviewOnly; "review only")]
    #[test_case(PutObjectTrailingChecksums::Disabled; "disabled")]
    #[tokio::test]
    async fn test_checksum_attributes(trailing_checksums: PutObjectTrailingChecksums) {
        const OBJECT_SIZE: usize = 500 * 1024;
        const PART_SIZE: usize = 16 * 1024;

        let body = vec![0xAAu8; OBJECT_SIZE];

        let bucket = "test_bucket";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_owned(),
            part_size: PART_SIZE,
            unordered_list_seed: None,
            ..Default::default()
        });

        let key = "key1";
        let put_params = PutObjectParams {
            trailing_checksums,
            ..Default::default()
        };
        let mut put_request = client.put_object(bucket, key, &put_params).await.unwrap();
        put_request.write(&body).await.unwrap();

        put_request
            .review_and_complete(move |review| {
                let parts = review.parts;
                if trailing_checksums == PutObjectTrailingChecksums::Disabled {
                    assert!(review.checksum_algorithm.is_none());
                    assert!(parts.iter().all(|p| p.checksum.is_none()));
                } else {
                    assert_eq!(review.checksum_algorithm, Some(ChecksumAlgorithm::Crc32c));
                }
                true
            })
            .await
            .unwrap();

        // GetObjectAttributes returns checksums
        let attrs = client
            .get_object_attributes(
                bucket,
                key,
                None,
                None,
                &[ObjectAttribute::ObjectParts, ObjectAttribute::Checksum],
            )
            .await
            .unwrap();

        let parts = attrs.object_parts.expect("parts should be returned");

        let expected_parts = OBJECT_SIZE.div_ceil(PART_SIZE);
        assert_eq!(parts.total_parts_count, Some(expected_parts));

        if trailing_checksums == PutObjectTrailingChecksums::Enabled {
            let part_attributes = parts
                .parts
                .expect("part attributes should be returned if checksums enabled");
            assert_eq!(part_attributes.len(), expected_parts);
            for (i, part) in part_attributes.iter().enumerate() {
                let start = i * PART_SIZE;
                let end = OBJECT_SIZE.min((i + 1) * PART_SIZE);
                let expected_checksum = crc32c_to_base64(&crc32c::checksum(&body[start..end]));
                let actual_checksum = part
                    .checksum
                    .as_ref()
                    .expect("checksum should be present")
                    .checksum_crc32c
                    .as_ref()
                    .expect("crc32c should be present");
                assert_eq!(&expected_checksum, actual_checksum);
            }

            // We trust that other tests will cover checksum correctness,
            // so let's just check the right checksums are set.
            let Checksum {
                checksum_crc64nvme,
                checksum_crc32,
                checksum_crc32c,
                checksum_sha1,
                checksum_sha256,
            } = attrs.checksum.expect("object checksum should be present");
            assert!(checksum_crc64nvme.is_none(), "CRC64NVME should not be set");
            assert!(checksum_crc32.is_none(), "CRC32 should not be set");
            assert!(checksum_crc32c.is_some(), "CRC32C should be set");
            assert!(checksum_sha1.is_none(), "SHA1 should not be set");
            assert!(checksum_sha256.is_none(), "SHA256 should not be set");
        } else {
            assert!(
                parts.parts.is_none(),
                "parts should not be returned if checksums disabled"
            );
        }
    }

    #[test_case(MockObject::ramp(0xaa, 2 * RAMP_BUFFER_SIZE, ETag::for_tests()))]
    #[test_case(MockObject::constant(0xab, 20, ETag::for_tests()))]
    #[test_case(MockObject::from([]))]
    #[test_case(MockObject::from([0xbb; 128]))]
    #[tokio::test]
    async fn test_append_object(obj: MockObject) {
        let bucket = "test_bucket";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let key = "test_object";
        client.add_object(key, obj.clone());

        let append_data = vec![42u8; 10];
        let params = PutObjectSingleParams::new_for_append(obj.len() as u64);
        client
            .put_object_single(bucket, key, &params, &append_data)
            .await
            .expect("append failed");

        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");

        // Check that the result of get_object is correct.
        let actual = get_request.collect().await.expect("failed to collect body");

        let expected = {
            let mut expected = Vec::with_capacity(obj.len() + append_data.len());
            expected.extend_from_slice(&obj.read(0, obj.len()));
            expected.extend_from_slice(&append_data);
            expected
        };

        assert_eq!(&expected, &*actual);
    }

    #[test_case(20, 10)]
    #[test_case(20, 20)]
    #[test_case(20, 30)]
    #[tokio::test]
    async fn test_append_object_fails_with_wrong_offset(original_size: usize, append_offset: u64) {
        let bucket = "test_bucket";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let key = "test_object";
        let obj = MockObject::constant(0xab, original_size, ETag::for_tests());
        client.add_object(key, obj.clone());

        let append_data = vec![42u8; 10];
        let params = PutObjectSingleParams::new_for_append(append_offset);
        let result = client.put_object_single(bucket, key, &params, &append_data).await;

        if append_offset != original_size as u64 {
            let err = result.expect_err("append should reject invalid offset");
            assert!(matches!(
                err,
                ObjectClientError::ServiceError(PutObjectError::InvalidWriteOffset)
            ));
        } else {
            result.expect("append with valid offset failed");
        }
    }

    #[tokio::test]
    async fn test_append_object_checksums() {
        let bucket = "test_bucket";
        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024,
            unordered_list_seed: None,
            ..Default::default()
        });

        let key = "test_object";
        let content = [0xbb; 128];
        let obj = MockObject::from(content).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, obj.clone());

        let append_data = vec![42u8; 10];
        let checksum = crc32c::checksum(&append_data);
        let mut offset = obj.len() as u64;

        // Append with matching checksum algorithm.
        client
            .put_object_single(
                bucket,
                key,
                &PutObjectSingleParams::new_for_append(offset).checksum(Some(UploadChecksum::Crc32c(checksum))),
                &append_data,
            )
            .await
            .expect("append with correct checksum failed");

        offset += append_data.len() as u64;

        // Append with no checksum, while existing object uses CRC32C.
        let err = client
            .put_object_single(
                bucket,
                key,
                &PutObjectSingleParams::new_for_append(offset),
                &append_data,
            )
            .await
            .expect_err("append with no checksum succeeded");
        assert!(matches!(
            err,
            ObjectClientError::ServiceError(PutObjectError::InvalidChecksumType)
        ));
    }
}
