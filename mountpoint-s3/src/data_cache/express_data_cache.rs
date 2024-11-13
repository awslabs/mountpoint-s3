use crate::object::ObjectId;
use crate::ServerSideEncryption;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheError, DataCacheResult};

use async_trait::async_trait;
use bytes::BytesMut;
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::{GetObjectParams, GetObjectRequest, PutObjectSingleParams};
use mountpoint_s3_client::ObjectClient;
use sha2::{Digest, Sha256};
use tracing::{error, Instrument};

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

/// A data cache on S3 Express One Zone that can be shared across Mountpoint instances.
pub struct ExpressDataCache<Client: ObjectClient> {
    client: Client,
    prefix: String,
    config: ExpressDataCacheConfig,
    /// Name of the S3 Express bucket to store the blocks.
    bucket_name: String,
    sse: ServerSideEncryption,
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
    pub fn new(
        client: Client,
        config: ExpressDataCacheConfig,
        source_bucket_name: &str,
        bucket_name: &str,
        sse: ServerSideEncryption,
    ) -> Self {
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
            sse,
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

        let object_key = block_key(&self.prefix, cache_key, block_idx);
        let result = match self
            .client
            .get_object(&self.bucket_name, &object_key, &GetObjectParams::new())
            .await
        {
            Ok(result) => result,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey)) => return Ok(None),
            Err(e) => return Err(e.into()),
        };

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

        let (sse_type, sse_kms_key_id) = result
            .get_object_sse()
            .await
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;
        self.sse
            .verify_response(sse_type.as_deref(), sse_kms_key_id.as_deref())
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;

        let buffer = buffer.freeze();
        DataCacheResult::Ok(Some(buffer.into()))
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

        let object_key = block_key(&self.prefix, &cache_key, block_idx);

        let mut params = PutObjectSingleParams::new();
        let (sse_type, key_id) = self
            .sse
            .clone()
            .into_inner()
            .map_err(|err| DataCacheError::IoFailure(err.into()))?;
        params = params.server_side_encryption(sse_type);
        params = params.ssekms_key_id(key_id);

        let (data, _crc) = bytes.into_inner().map_err(|_| DataCacheError::InvalidBlockContent)?;
        let req = self
            .client
            .put_object_single(&self.bucket_name, &object_key, &params, data)
            .in_current_span()
            .await?;

        // Verify that headers of the PUT response match the expected SSE
        if let Err(err) = self
            .sse
            .verify_response(req.sse_type.as_deref(), req.sse_kms_key_id.as_deref())
        {
            error!(key=?cache_key, error=?err, "A cache block was stored with wrong encryption settings");
            // Reaching this point is very unlikely and means that SSE settings were corrupted in transit or on S3 side, this may be a sign of a bug
            // in CRT code or S3. Thus, we terminate Mountpoint to send the most noticeable signal to customer about the issue. We prefer exiting
            // instead of returning an error because:
            // 1. this error would only be reported to logs because the cache population is an async process
            // 2. the reported error is severe as the object was already uploaded to S3.
            std::process::exit(1);
        }

        DataCacheResult::Ok(())
    }

    fn block_size(&self) -> u64 {
        self.config.block_size
    }
}

fn block_key(prefix: &str, cache_key: &ObjectId, block_idx: BlockIndex) -> String {
    let hashed_cache_key = hex::encode(
        Sha256::new()
            .chain_update(cache_key.key())
            .chain_update(cache_key.etag().as_str())
            .finalize(),
    );
    format!("{}/{}/{:010}", prefix, hashed_cache_key, block_idx)
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::checksums::ChecksummedBytes;
    use crate::sync::Arc;

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
        let cache = ExpressDataCache::new(client, config, "unique source description", bucket, Default::default());

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
        let cache = ExpressDataCache::new(
            client.clone(),
            Default::default(),
            "unique source description",
            bucket,
            Default::default(),
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
}
