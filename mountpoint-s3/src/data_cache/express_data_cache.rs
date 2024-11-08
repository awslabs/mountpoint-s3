use crate::object::ObjectId;
use std::collections::HashMap;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheError, DataCacheResult};

use async_trait::async_trait;
use base64ct::{Base64, Encoding};
use bytes::BytesMut;
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::{
    ChecksumMode, GetObjectParams, GetObjectRequest, PutObjectSingleParams, UploadChecksum,
};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};
use sha2::{Digest, Sha256};
use tracing::Instrument;

use mountpoint_s3_client::checksums::crc32c_from_base64;
#[cfg(test)]
use proptest_derive::Arbitrary;

const CACHE_VERSION: &str = "V1";

/// Configuration for a [ExpressDataCache].
#[derive(Debug)]
pub struct ExpressDataCacheConfig {
    /// Size of data blocks.
    pub block_size: u64,
    /// The maximum size of an object to be cached.
    pub max_object_size: usize,
}

impl Default for ExpressDataCacheConfig {
    fn default() -> Self {
        Self {
            block_size: 1024 * 1024,      // 1 MiB
            max_object_size: 1024 * 1024, // 1 MiB
        }
    }
}

/// Metadata about the cached object to ensure that the object we've retrieved is the one we were
/// wanting to get (and avoid collisions with the key).
/// On miss, bypass the cache and go to the main data source.
#[cfg_attr(test, derive(Arbitrary))]
#[derive(Debug, PartialEq, Eq)]
struct BlockHeader {
    version: String,
    block_idx: BlockIndex,
    block_offset: u64,
    etag: String,
    source_key: String,
    source_bucket_name: String,
    header_checksum: u32,
}

impl BlockHeader {
    pub fn new(block_idx: BlockIndex, block_offset: u64, cache_key: &ObjectId, source_bucket_name: &str) -> Self {
        let header_checksum = Self::get_header_checksum(block_idx, block_offset, cache_key, source_bucket_name).value();
        Self {
            version: CACHE_VERSION.to_string(),
            block_idx,
            block_offset,
            etag: cache_key.etag().as_str().to_string(),
            source_key: cache_key.key().to_string(),
            source_bucket_name: source_bucket_name.to_string(),
            header_checksum,
        }
    }

    /// Get the S3 key this block should be written to or read from.
    pub fn to_s3_key(&self, prefix: &str) -> String {
        let hashed_cache_key = hex::encode(
            Sha256::new()
                .chain_update(&self.source_key)
                .chain_update(&self.etag)
                .finalize(),
        );
        format!("{}/{}/{:010}", prefix, hashed_cache_key, self.block_idx)
    }

    /// Convert to object metadata that is HTTP header safe (ASCII only)
    pub fn to_headers(&self) -> HashMap<String, String> {
        let source_key_encoded = Base64::encode_string(self.source_key.as_bytes());
        HashMap::from([
            ("cache-version".to_string(), self.version.clone()),
            ("block-idx".to_string(), format!("{}", self.block_idx)),
            ("block-offset".to_string(), format!("{}", self.block_offset)),
            ("etag".to_string(), self.etag.clone()),
            ("source-key".to_string(), source_key_encoded),
            ("source-bucket-name".to_string(), self.source_bucket_name.clone()),
            ("header-checksum".to_string(), format!("{}", self.header_checksum)),
        ])
    }

    /// Validate the object metadata headers received match this BlockHeader object.
    pub fn validate_headers(&self, headers: &HashMap<String, String>) -> Result<(), DataCacheError> {
        self.validate_header(headers, "cache-version", |version| version == self.version)?;
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
    ) -> Result<(), DataCacheError> {
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
    ) -> Crc32c {
        let mut hasher = crc32c::Hasher::new();
        hasher.update(CACHE_VERSION.as_bytes());
        hasher.update(&block_idx.to_be_bytes());
        hasher.update(&block_offset.to_be_bytes());
        hasher.update(cache_key.etag().as_str().as_bytes());
        hasher.update(cache_key.key().as_bytes());
        hasher.update(source_bucket_name.as_bytes());
        hasher.finalize()
    }
}

/// A data cache on S3 Express One Zone that can be shared across Mountpoint instances.
pub struct ExpressDataCache<Client: ObjectClient> {
    client: Client,
    prefix: String,
    config: ExpressDataCacheConfig,
    /// Name of the S3 Express bucket to store the blocks.
    bucket_name: String,
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
    ///
    /// TODO: consider adding some validation of the bucket.
    pub fn new(client: Client, config: ExpressDataCacheConfig, source_bucket_name: &str, bucket_name: &str) -> Self {
        let prefix = hex::encode(
            Sha256::new()
                .chain_update(CACHE_VERSION.as_bytes())
                .chain_update(config.block_size.to_be_bytes())
                .chain_update(source_bucket_name.as_bytes())
                .finalize(),
        );
        Self {
            client,
            prefix,
            config,
            bucket_name: bucket_name.to_owned(),
        }
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
        if object_size > self.config.max_object_size {
            return Ok(None);
        }

        if block_offset != block_idx * self.config.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let headers = BlockHeader::new(block_idx, block_offset, cache_key, &self.bucket_name);

        let object_key = headers.to_s3_key(&self.prefix);
        let result = match self
            .client
            .get_object(
                &self.bucket_name,
                &object_key,
                &GetObjectParams::new().checksum_mode(Some(ChecksumMode::Enabled)),
            )
            .await
        {
            Ok(result) => result,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey)) => return Ok(None),
            Err(e) => return Err(e.into()),
        };

        let object_metadata = result
            .get_object_metadata()
            .await
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;
        headers.validate_headers(&object_metadata)?;

        let checksum = result
            .get_object_checksum()
            .await
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;
        let crc32 = crc32c_from_base64(&checksum.checksum_crc32c.ok_or(DataCacheError::BlockChecksumMissing)?)
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;

        pin_mut!(result);
        // Guarantee that the request will start even in case of `initial_read_window == 0`.
        result.as_mut().increment_read_window(self.config.block_size as usize);

        // TODO: optimize for the common case of a single chunk.
        let mut buffer = BytesMut::default();
        while let Some(chunk) = result.next().await {
            match chunk {
                Ok((offset, body)) => {
                    if offset != buffer.len() as u64 {
                        return Err(DataCacheError::InvalidBlockOffset);
                    }
                    buffer.extend_from_slice(&body);

                    // Ensure the flow-control window is large enough.
                    result.as_mut().increment_read_window(self.config.block_size as usize);
                }
                Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey)) => return Ok(None),
                Err(e) => return Err(e.into()),
            }
        }
        let buffer = buffer.freeze();
        Ok(Some(ChecksummedBytes::new_from_inner_data(buffer, crc32)))
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()> {
        if object_size > self.config.max_object_size {
            return Ok(());
        }

        if block_offset != block_idx * self.config.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let headers = BlockHeader::new(block_idx, block_offset, &cache_key, &self.bucket_name);
        let object_key = headers.to_s3_key(&self.prefix);

        let (data, checksum) = bytes.into_inner().map_err(|_| DataCacheError::InvalidBlockContent)?;
        let params = PutObjectSingleParams::new()
            .object_metadata(headers.to_headers())
            .checksum(Some(UploadChecksum::Crc32c(checksum)));
        let _req = self
            .client
            .put_object_single(&self.bucket_name, &object_key, &params, data)
            .in_current_span()
            .await?;

        Ok(())
    }

    fn block_size(&self) -> u64 {
        self.config.block_size
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::checksums::ChecksummedBytes;
    use crate::sync::Arc;
    use proptest::{prop_assert, proptest};

    use test_case::test_case;

    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
    use mountpoint_s3_client::types::ETag;

    #[test_case(1024, 512 * 1024; "block_size smaller than part_size")]
    #[test_case(8 * 1024 * 1024, 512 * 1024; "block_size larger than part_size")]
    #[tokio::test]
    async fn test_put_get(part_size: usize, block_size: u64) {
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size,
            enable_backpressure: true,
            initial_read_window_size: part_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));

        let config = ExpressDataCacheConfig {
            block_size,
            ..Default::default()
        };
        let cache = ExpressDataCache::new(client, config, "unique source description", bucket);

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
            "no entry should be available to return but got {:?}",
            block,
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
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 8 * 1024 * 1024,
            enable_backpressure: true,
            initial_read_window_size: 8 * 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let cache = ExpressDataCache::new(client.clone(), Default::default(), "unique source description", bucket);
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

    proptest! {
        #[test]
        fn proptest_block_header_creates_small_s3_keys(block_header: BlockHeader) {
            // Ensure we can always serialise to S3 keys smaller than 1kb
            prop_assert!(block_header.to_s3_key("prefix").len() <= 1024);
        }

        #[test]
        fn proptest_block_header_to_headers_s3_key_ascii_only(block_header: BlockHeader) {
            // Validate that even with UTF keys, the source key is always ascii
            let headers = block_header.to_headers();
            prop_assert!(headers.get("source-key").unwrap().is_ascii());
        }

        #[test]
        fn proptest_block_header_validates_headers(block_header: BlockHeader, block_header2: BlockHeader) {
            // `to_headers` should contain enough information that `validate_headers` acts as equality
            if block_header == block_header2 {
                prop_assert!(block_header2.validate_headers(&block_header.to_headers()).is_ok());
            } else {
                prop_assert!(block_header2.validate_headers(&block_header.to_headers()).is_err());
            }
        }

        #[test]
        fn proptest_block_header_validates_headers_is_equal(block_header: BlockHeader) {
            // More checks to verify the equals path, as generating lots of equals examples may be hard
            prop_assert!(block_header.validate_headers(&block_header.to_headers()).is_ok());
        }
    }
}
