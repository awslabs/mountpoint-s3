use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheError, DataCacheResult};
use crate::ServerSideEncryption;
use crate::metrics::defs::{
    ATTR_CACHE, CACHE_EXPRESS, CACHE_GET_ERRORS, CACHE_GET_IO_SIZE, CACHE_GET_LATENCY, CACHE_OVERSIZED_OBJECTS,
    CACHE_PUT_ERRORS, CACHE_PUT_IO_SIZE, CACHE_PUT_LATENCY,
};
use crate::object::ObjectId;
use std::collections::HashMap;
use std::time::Instant;

use async_trait::async_trait;
use base64ct::{Base64, Encoding};
use bytes::{Bytes, BytesMut};
use futures::{StreamExt, pin_mut};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::{
    ChecksumMode, ClientBackpressureHandle, GetBodyPart, GetObjectParams, GetObjectResponse, PutObjectSingleParams,
    UploadChecksum,
};
use sha2::{Digest, Sha256};
use tracing::Instrument;

use mountpoint_s3_client::checksums::crc32c_from_base64;

const CACHE_VERSION: &str = "V2";

/// Configuration for a [ExpressDataCache].
#[derive(Debug)]
pub struct ExpressDataCacheConfig {
    /// Name of the S3 Express bucket to store the blocks.
    pub bucket_name: String,
    /// Name of the mounted bucket.
    pub source_bucket_name: String,
    /// Size of data blocks.
    pub block_size: u64,
    /// The maximum size of an object to be cached.
    pub max_object_size: usize,
    /// The SSE to be used in PUT requests to the cache bucket.
    pub sse: ServerSideEncryption,
}

impl ExpressDataCacheConfig {
    pub fn new(bucket_name: &str, source_bucket_name: &str) -> Self {
        Self {
            bucket_name: bucket_name.to_owned(),
            source_bucket_name: source_bucket_name.to_owned(),
            block_size: 1024 * 1024,      // 1 MiB
            max_object_size: 1024 * 1024, // 1 MiB
            sse: ServerSideEncryption::default(),
        }
    }

    pub fn block_size(mut self, block_size: u64) -> Self {
        self.block_size = block_size;
        self
    }

    pub fn max_object_size(mut self, max_object_size: usize) -> Self {
        self.max_object_size = max_object_size;
        self
    }

    pub fn sse(mut self, sse: ServerSideEncryption) -> Self {
        self.sse = sse;
        self
    }
}

/// A data cache on S3 Express One Zone that can be shared across Mountpoint instances.
pub struct ExpressDataCache<Client: ObjectClient> {
    client: Client,
    prefix: String,
    config: ExpressDataCacheConfig,
}

impl<S, C> From<ObjectClientError<S, C>> for DataCacheError
where
    S: std::error::Error + Send + Sync + 'static,
    C: std::error::Error + Send + Sync + 'static,
{
    fn from(e: ObjectClientError<S, C>) -> Self {
        DataCacheError::IoFailure(e.into())
    }
}

impl<Client> ExpressDataCache<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    /// Create a new instance.
    pub fn new(client: Client, config: ExpressDataCacheConfig) -> Self {
        Self {
            client,
            prefix: build_prefix(&config.source_bucket_name, config.block_size),
            config,
        }
    }

    pub async fn make_put_object_request<'a>(
        &self,
        mut params: PutObjectSingleParams,
        object_key: &str,
        data: impl AsRef<[u8]> + Send + 'a,
    ) -> Result<(), DataCacheError> {
        let (sse_type, key_id) = self
            .config
            .sse
            .clone()
            .into_inner()
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;
        params = params.server_side_encryption(sse_type);
        params = params.ssekms_key_id(key_id);

        let result = self
            .client
            .put_object_single(&self.config.bucket_name, object_key, &params, data)
            .in_current_span()
            .await
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;

        // Verify that headers of the PUT response match the expected SSE
        if let Err(err) = self
            .config
            .sse
            .verify_response(result.sse_type.as_deref(), result.sse_kms_key_id.as_deref())
        {
            tracing::error!(object_key=?object_key, error=?err, "Unexpected SSE in PutObject response from S3. A cache block may be stored with wrong encryption settings.");
            // Reaching this point is very unlikely and means that SSE settings were corrupted in transit or on S3 side, this may be a sign of a bug
            // in CRT code or S3. Thus, we terminate Mountpoint to send the most noticeable signal to customer about the issue. We prefer exiting
            // instead of returning an error because:
            // 1. this error would only be reported to logs because the cache population is an async process
            // 2. the reported error is severe as the object was already uploaded to S3.
            std::process::exit(1);
        }

        Ok(())
    }

    pub async fn verify_cache_valid(&self) -> Result<(), DataCacheError> {
        let object_key = format!("{}/_mountpoint_cache_metadata", &self.prefix);
        // This data is human-readable, and not expected to be read by Mountpoint.
        // The file format used here is NOT stable.
        // For now, let's just include the data that's guaranteed to be correct as it's what
        // calculates the prefix.
        let data = format!(
            "source_bucket={}\nblock_size={}",
            self.config.source_bucket_name, self.config.block_size
        );

        // put_object is sufficient for validating cache, as S3 Directory buckets only support
        // read-only, or read-write. Write implies read access.
        // Validating we're in a directory bucket by using the `EXPRESS_ONEZONE` storage class.
        let params = PutObjectSingleParams::new().storage_class("EXPRESS_ONEZONE".to_string());
        self.make_put_object_request(params, &object_key, data).await
    }

    // Ensure the flow-control window is large enough for reading a block of data if backpressure is enabled.
    fn ensure_read_window(&self, backpressure_handle: Option<&mut impl ClientBackpressureHandle>) {
        if let Some(backpressure_handle) = backpressure_handle {
            backpressure_handle.increment_read_window(self.config.block_size as usize);
        }
    }

    async fn read_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        object_size: usize,
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        if object_size > self.config.max_object_size {
            metrics::counter!(CACHE_OVERSIZED_OBJECTS, ATTR_CACHE => CACHE_EXPRESS).increment(1);
            return Ok(None);
        }

        if block_offset != block_idx * self.config.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let object_key = get_s3_key(&self.prefix, cache_key, block_idx);
        let mut result = match self
            .client
            .get_object(
                &self.config.bucket_name,
                &object_key,
                &GetObjectParams::new().checksum_mode(Some(ChecksumMode::Enabled)),
            )
            .await
        {
            Ok(result) => result,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey(_))) => {
                return Ok(None);
            }
            Err(e) => {
                return Err(DataCacheError::IoFailure(e.into()));
            }
        };
        let mut backpressure_handle = result.backpressure_handle().cloned();

        // Guarantee that the request will start even in case of `initial_read_window == 0`.
        self.ensure_read_window(backpressure_handle.as_mut());

        let mut buffer: Bytes = Bytes::new();
        pin_mut!(result);
        while let Some(chunk) = result.next().await {
            match chunk {
                Ok(GetBodyPart { offset, data: body }) => {
                    if offset != buffer.len() as u64 {
                        return Err(DataCacheError::InvalidBlockOffset);
                    }

                    buffer = if buffer.is_empty() {
                        body
                    } else {
                        // Unlikely: we expect `get_object` to return a single chunk.
                        let mut buffer = BytesMut::from(buffer);
                        buffer.extend_from_slice(&body);
                        buffer.freeze()
                    };

                    // Ensure the flow-control window is large enough.
                    self.ensure_read_window(backpressure_handle.as_mut());
                }
                Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey(_))) => {
                    return Ok(None);
                }
                Err(e) => {
                    return Err(DataCacheError::IoFailure(e.into()));
                }
            }
        }

        let object_metadata = result.get_object_metadata();

        let checksum = result
            .get_object_checksum()
            .map_err(|_| DataCacheError::InvalidBlockChecksum)?;
        let crc32c_b64 = checksum
            .checksum_crc32c
            .ok_or_else(|| DataCacheError::InvalidBlockChecksum)?;
        let crc32c = crc32c_from_base64(&crc32c_b64).map_err(|_| DataCacheError::InvalidBlockChecksum)?;

        let block_metadata = BlockMetadata::new(
            block_idx,
            block_offset,
            cache_key,
            &self.config.source_bucket_name,
            crc32c,
        );
        block_metadata.validate_object_metadata(&object_metadata)?;

        Ok(Some(ChecksummedBytes::new_from_inner_data(buffer, crc32c)))
    }

    async fn write_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()> {
        if object_size > self.config.max_object_size {
            metrics::counter!(CACHE_OVERSIZED_OBJECTS, ATTR_CACHE => CACHE_EXPRESS).increment(1);
            return Ok(());
        }

        if block_offset != block_idx * self.config.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let object_key = get_s3_key(&self.prefix, &cache_key, block_idx);

        let (data, checksum) = bytes.into_inner().map_err(|_| DataCacheError::InvalidBlockContent)?;
        let block_metadata = BlockMetadata::new(
            block_idx,
            block_offset,
            &cache_key,
            &self.config.source_bucket_name,
            checksum,
        );

        self.make_put_object_request(block_metadata.to_put_object_params(), &object_key, data)
            .await
    }
}

#[async_trait]
impl<Client> DataCache for ExpressDataCache<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    async fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        object_size: usize,
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        let start = Instant::now();
        let result = match self.read_block(cache_key, block_idx, block_offset, object_size).await {
            Ok(Some(data)) => {
                metrics::counter!(CACHE_GET_IO_SIZE, ATTR_CACHE => CACHE_EXPRESS).increment(data.len() as u64);
                Ok(Some(data))
            }
            Ok(None) => Ok(None),
            Err(err) => {
                metrics::counter!(CACHE_GET_ERRORS, ATTR_CACHE => CACHE_EXPRESS).increment(1);
                Err(err)
            }
        };
        metrics::histogram!(CACHE_GET_LATENCY, ATTR_CACHE => CACHE_EXPRESS).record(start.elapsed().as_micros() as f64);
        result
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()> {
        let start = Instant::now();
        let bytes_len = bytes.len();
        let result = match self
            .write_block(cache_key, block_idx, block_offset, bytes, object_size)
            .await
        {
            Ok(()) => {
                metrics::counter!(CACHE_PUT_IO_SIZE, ATTR_CACHE => CACHE_EXPRESS).increment(bytes_len as u64);
                Ok(())
            }
            Err(err) => {
                metrics::counter!(CACHE_PUT_ERRORS, ATTR_CACHE => CACHE_EXPRESS).increment(1);
                Err(err)
            }
        };
        metrics::histogram!(CACHE_PUT_LATENCY, ATTR_CACHE => CACHE_EXPRESS).record(start.elapsed().as_micros() as f64);
        result
    }

    fn block_size(&self) -> u64 {
        self.config.block_size
    }
}

/// Metadata about the cached object to ensure that the object we've retrieved is the one we were
/// wanting to get (and avoid collisions with the key).
/// On miss, bypass the cache and go to the main data source.
#[cfg_attr(test, derive(proptest_derive::Arbitrary))]
#[derive(Clone, Debug, PartialEq, Eq)]
struct BlockMetadata {
    block_idx: BlockIndex,
    block_offset: u64,
    etag: String,
    source_key: String,
    source_bucket_name: String,
    data_checksum: u32,
    header_checksum: u32,
}

impl BlockMetadata {
    pub fn new(
        block_idx: BlockIndex,
        block_offset: u64,
        cache_key: &ObjectId,
        source_bucket_name: &str,
        data_checksum: Crc32c,
    ) -> Self {
        let header_checksum =
            Self::get_header_checksum(block_idx, block_offset, cache_key, source_bucket_name, data_checksum).value();
        Self {
            block_idx,
            block_offset,
            etag: cache_key.etag().as_str().to_string(),
            source_key: cache_key.key().to_string(),
            source_bucket_name: source_bucket_name.to_string(),
            data_checksum: data_checksum.value(),
            header_checksum,
        }
    }

    /// Build parameters to be used when running a PutObject for this block
    pub fn to_put_object_params(&self) -> PutObjectSingleParams {
        // Convert to object metadata that is HTTP header safe (ASCII only)
        let source_key_encoded = Base64::encode_string(self.source_key.as_bytes());
        let object_metadata = HashMap::from([
            ("cache-version".to_string(), CACHE_VERSION.to_string()),
            ("block-idx".to_string(), format!("{}", self.block_idx)),
            ("block-offset".to_string(), format!("{}", self.block_offset)),
            ("etag".to_string(), self.etag.clone()),
            ("source-key".to_string(), source_key_encoded),
            ("source-bucket-name".to_string(), self.source_bucket_name.clone()),
            ("header-checksum".to_string(), format!("{}", self.header_checksum)),
        ]);

        PutObjectSingleParams::new()
            .object_metadata(object_metadata)
            .checksum(Some(UploadChecksum::Crc32c(Crc32c::new(self.data_checksum))))
    }

    /// Validate the object metadata headers received match this BlockMetadata object.
    pub fn validate_object_metadata(&self, headers: &HashMap<String, String>) -> DataCacheResult<()> {
        self.validate_header(headers, "cache-version", |version| version == CACHE_VERSION)?;
        self.validate_header(headers, "block-idx", |block_idx| {
            block_idx.parse() == Ok(self.block_idx)
        })?;
        self.validate_header(headers, "block-offset", |block_offset| {
            block_offset.parse() == Ok(self.block_offset)
        })?;
        self.validate_header(headers, "etag", |etag| etag == self.etag)?;
        self.validate_header(headers, "source-key", |source_key| {
            source_key == Base64::encode_string(self.source_key.as_bytes())
        })?;
        self.validate_header(headers, "source-bucket-name", |source_bucket_name| {
            source_bucket_name == self.source_bucket_name
        })?;
        self.validate_header(headers, "header-checksum", |header_checksum| {
            header_checksum.parse() == Ok(self.header_checksum)
        })?;

        Ok(())
    }

    fn validate_header<F: Fn(&str) -> bool>(
        &self,
        headers: &HashMap<String, String>,
        header: &str,
        is_valid: F,
    ) -> DataCacheResult<()> {
        let value = headers
            .get(header)
            .ok_or(DataCacheError::InvalidBlockHeader(header.to_string()))?;
        is_valid(value)
            .then_some(())
            .ok_or(DataCacheError::InvalidBlockHeader(header.to_string()))
    }

    fn get_header_checksum(
        block_idx: BlockIndex,
        block_offset: u64,
        cache_key: &ObjectId,
        source_bucket_name: &str,
        data_checksum: Crc32c,
    ) -> Crc32c {
        let mut hasher = crc32c::Hasher::new();
        hasher.update(CACHE_VERSION.as_bytes());
        hasher.update(&block_idx.to_be_bytes());
        hasher.update(&block_offset.to_be_bytes());
        hasher.update(cache_key.etag().as_str().as_bytes());
        hasher.update(cache_key.key().as_bytes());
        hasher.update(source_bucket_name.as_bytes());
        hasher.update(&data_checksum.value().to_be_bytes());
        hasher.finalize()
    }
}

/// Get the prefix for objects we'll be creating in S3
pub fn build_prefix(source_bucket_name: &str, block_size: u64) -> String {
    hex::encode(
        Sha256::new()
            .chain_update(CACHE_VERSION.as_bytes())
            .chain_update(block_size.to_be_bytes())
            .chain_update(source_bucket_name.as_bytes())
            .finalize(),
    )
}

/// Get the S3 key this block should be written to or read from.
pub fn get_s3_key(prefix: &str, cache_key: &ObjectId, block_idx: BlockIndex) -> String {
    let hashed_cache_key = hex::encode(
        Sha256::new()
            .chain_update(cache_key.key())
            .chain_update(cache_key.etag().as_str())
            .finalize(),
    );
    format!("{prefix}/{hashed_cache_key}/{block_idx:010}")
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::checksums::ChecksummedBytes;
    use crate::sync::Arc;
    use proptest::{prop_assert, proptest};

    use mountpoint_s3_client::failure_client::{CountdownFailureConfig, countdown_failure_client};
    use mountpoint_s3_client::mock_client::{MockClient, MockClientError};
    use mountpoint_s3_client::types::ETag;
    use test_case::test_case;

    #[test_case(1024, 512 * 1024; "block_size smaller than part_size")]
    #[test_case(8 * 1024 * 1024, 512 * 1024; "block_size larger than part_size")]
    #[tokio::test]
    async fn test_put_get(part_size: usize, block_size: u64) {
        let bucket = "test-bucket";
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket)
                .part_size(part_size)
                .enable_backpressure(true)
                .initial_read_window_size(part_size)
                .build(),
        );

        let config = ExpressDataCacheConfig::new(bucket, "unique source description").block_size(block_size);
        let cache = ExpressDataCache::new(client, config);

        let data_1 = ChecksummedBytes::new("Foo".into());
        let data_2 = ChecksummedBytes::new("Bar".into());
        let data_3 = ChecksummedBytes::new("a".repeat(block_size as usize).into());

        let object_1_size = data_1.len() + data_3.len();
        let object_2_size = data_2.len();

        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_2 = ObjectId::new(
            "longkey_".repeat(128), // 1024 bytes, max length for S3 keys
            ETag::for_tests(),
        );

        let block = cache
            .get_block(&cache_key_1, 0, 0, object_1_size)
            .await
            .expect("cache should be accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {block:?}",
        );

        // PUT and GET, OK?
        cache
            .put_block(cache_key_1.clone(), 0, 0, data_1.clone(), object_1_size)
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 0, 0, object_1_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert!(entry.validate().is_ok(), "CRC32C should match");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET block for a second key, OK?
        cache
            .put_block(cache_key_2.clone(), 0, 0, data_2.clone(), object_2_size)
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_2, 0, 0, object_2_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert!(entry.validate().is_ok(), "CRC32C should match");
        assert_eq!(
            data_2, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache
            .put_block(cache_key_1.clone(), 1, block_size, data_3.clone(), object_1_size)
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 1, block_size, object_1_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert!(entry.validate().is_ok(), "CRC32C should match");
        assert_eq!(
            data_3, entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0, 0, object_1_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert!(entry.validate().is_ok(), "CRC32C should match");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[tokio::test]
    async fn large_object_bypassed() {
        let bucket = "test-bucket";
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket)
                .part_size(8 * 1024 * 1024)
                .enable_backpressure(true)
                .initial_read_window_size(8 * 1024 * 1024)
                .build(),
        );
        let cache = ExpressDataCache::new(
            client.clone(),
            ExpressDataCacheConfig::new(bucket, "unique source description"),
        );
        let data_1 = vec![0u8; 1024 * 1024 + 1];
        let data_1 = ChecksummedBytes::new(data_1.into());
        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        // PUT and GET for a large object should be no-op
        cache
            .put_block(cache_key_1.clone(), 0, 0, data_1.clone(), data_1.len())
            .await
            .expect("cache should be accessible");
        let get_result = cache
            .get_block(&cache_key_1, 0, 0, data_1.len())
            .await
            .expect("cache should be accessible");
        assert!(get_result.is_none());
        assert_eq!(client.object_count(), 0, "cache must be empty");
    }

    #[tokio::test]
    async fn test_get_validate_failure() {
        let source_bucket = "source-bucket";
        let bucket = "test-bucket";
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket)
                .part_size(8 * 1024 * 1024)
                .enable_backpressure(true)
                .initial_read_window_size(8 * 1024 * 1024)
                .build(),
        );
        let config = ExpressDataCacheConfig::new(bucket, source_bucket);
        let block_size = config.block_size;
        let cache = ExpressDataCache::new(client.clone(), config);

        let data = ChecksummedBytes::new("Foo".into());
        let data_2 = ChecksummedBytes::new("Bar".into());
        let cache_key = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_non_existent = ObjectId::new("does-not-exist".into(), ETag::for_tests());

        // Setup cache
        let object_key = get_s3_key(&build_prefix(source_bucket, block_size), &cache_key, 0);

        let (data, checksum) = data.into_inner().unwrap();
        let block_metadata = BlockMetadata::new(0, 0, &cache_key, source_bucket, checksum);
        let put_params = block_metadata.to_put_object_params();

        let (data_2, checksum_2) = data_2.into_inner().unwrap();
        let block_metadata_2 = BlockMetadata::new(0, 0, &cache_key, source_bucket, checksum_2);
        let put_params_2 = block_metadata_2.to_put_object_params();

        // Store with correct metadata and expect a successful get_block
        client
            .put_object_single(bucket, &object_key, &put_params, data.clone())
            .in_current_span()
            .await
            .unwrap();
        let (received_data, _) = cache
            .get_block(&cache_key, 0, 0, data.len())
            .await
            .expect("get should succeed with intact metadata")
            .expect("block should be non-empty")
            .into_inner()
            .expect("block should be valid");
        assert_eq!(received_data, data);

        // Remove the checksum when writing.
        client
            .put_object_single(bucket, &object_key, &put_params.clone().checksum(None), data.clone())
            .in_current_span()
            .await
            .unwrap();
        let err = cache
            .get_block(&cache_key, 0, 0, data.len())
            .await
            .expect_err("cache should return error if checksum isn't present");
        assert!(matches!(err, DataCacheError::InvalidBlockChecksum));

        // Remove the object metadata when writing.
        client
            .put_object_single(
                bucket,
                &object_key,
                &put_params.clone().object_metadata(HashMap::new()),
                data.clone(),
            )
            .in_current_span()
            .await
            .unwrap();
        let err = cache
            .get_block(&cache_key, 0, 0, data.len())
            .await
            .expect_err("cache should return error if object metadata isn't present");
        assert!(matches!(err, DataCacheError::InvalidBlockHeader(_)));

        // Emulate corrupt data by writing 'incorrect' data.
        client
            .put_object_single(bucket, &object_key, &put_params.clone(), data_2.clone())
            .in_current_span()
            .await
            .expect_err("should fail to write as checksum incorrect");

        // Write data with object metadata header for different object
        client
            .put_object_single(
                bucket,
                &object_key,
                &put_params.clone().checksum(put_params_2.checksum.clone()),
                data_2.clone(),
            )
            .in_current_span()
            .await
            .unwrap();
        let err = cache
            .get_block(&cache_key, 0, 0, data_2.len())
            .await
            .expect_err("cache should return error if object metadata doesn't match data");
        assert!(matches!(err, DataCacheError::InvalidBlockHeader(_)));

        // Write data with object metadata header for object from a different bucket
        let mut corrupted_metadata = block_metadata.clone();
        corrupted_metadata.source_bucket_name = bucket.to_owned();
        client
            .put_object_single(
                bucket,
                &object_key,
                &corrupted_metadata.to_put_object_params(),
                data.clone(),
            )
            .in_current_span()
            .await
            .unwrap();
        let err = cache
            .get_block(&cache_key, 0, 0, data.len())
            .await
            .expect_err("cache should return error if source bucket does not match");
        assert!(matches!(err, DataCacheError::InvalidBlockHeader(_)));

        // Get data that's not been written yet
        let result = cache
            .get_block(&cache_key_non_existent, 0, 0, data.len())
            .await
            .expect("cache should return None if data is not present");
        assert_eq!(result, None);
    }

    #[tokio::test]
    async fn test_verify_cache_valid_success() {
        let source_bucket = "source-bucket";
        let bucket = "test-bucket";
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket)
                .part_size(8 * 1024 * 1024)
                .enable_backpressure(true)
                .initial_read_window_size(8 * 1024 * 1024)
                .build(),
        );
        let cache = ExpressDataCache::new(client.clone(), ExpressDataCacheConfig::new(bucket, source_bucket));

        cache.verify_cache_valid().await.expect("cache should work");
    }

    #[tokio::test]
    async fn test_verify_cache_valid_failure() {
        let source_bucket = "source-bucket";
        let bucket = "test-bucket";
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket)
                .part_size(8 * 1024 * 1024)
                .enable_backpressure(true)
                .initial_read_window_size(8 * 1024 * 1024)
                .build(),
        );

        let mut put_single_failures = HashMap::new();
        put_single_failures.insert(1, MockClientError("error".to_owned().into()).into());

        let failure_client = Arc::new(countdown_failure_client(
            client.clone(),
            CountdownFailureConfig {
                put_single_failures,
                ..Default::default()
            },
        ));

        let cache = ExpressDataCache::new(failure_client, ExpressDataCacheConfig::new(bucket, source_bucket));

        cache
            .verify_cache_valid()
            .await
            .expect_err("cache should not report valid if cannot write");
    }

    proptest! {
        #[test]
        fn proptest_creates_small_s3_keys(key: String, etag: String, block_idx: BlockIndex, source_description: String, block_size: u64) {
            // Ensure we can always serialise to S3 keys smaller than 1kb
            let cache_key = ObjectId::new(key, etag.into());
            let prefix = build_prefix(&source_description, block_size);
            prop_assert!(get_s3_key(&prefix, &cache_key, block_idx).len() <= 1024);
        }

        #[test]
        fn proptest_block_metadata_to_headers_s3_key_ascii_only(block_metadata: BlockMetadata) {
            // Validate that even with UTF keys, the source key is always ascii
            let params = block_metadata.to_put_object_params();
            prop_assert!(params.object_metadata.get("source-key").unwrap().is_ascii());
        }

        #[test]
        fn proptest_block_metadata_validates_headers(block_metadata: BlockMetadata, block_metadata2: BlockMetadata) {
            // `to_headers` should contain enough information that `validate_headers` acts as equality
            let params = block_metadata.to_put_object_params();
            if block_metadata == block_metadata2 {
                prop_assert!(block_metadata2.validate_object_metadata(&params.object_metadata).is_ok());
            } else {
                prop_assert!(block_metadata2.validate_object_metadata(&params.object_metadata).is_err());
            }
        }

        #[test]
        fn proptest_block_metadata_validates_headers_is_equal(block_metadata: BlockMetadata) {
            // More checks to verify the equals path, as generating lots of equals examples may be hard
            let params = block_metadata.to_put_object_params();
            prop_assert!(block_metadata.validate_object_metadata(&params.object_metadata).is_ok());
            prop_assert!(matches!(params.checksum, Some(UploadChecksum::Crc32c(x)) if x == Crc32c::new(block_metadata.data_checksum)));
        }
    }
}
