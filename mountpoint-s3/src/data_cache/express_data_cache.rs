use crate::object::ObjectId;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheError, DataCacheResult};

use async_trait::async_trait;
use bytes::BytesMut;
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::PutObjectParams;
use mountpoint_s3_client::{ObjectClient, PutObjectRequest};
use sha2::{Digest, Sha256};
use tracing::Instrument;

const CACHE_VERSION: &str = "V1";

/// A data cache on S3 Express One Zone that can be shared across Mountpoint instances.
pub struct ExpressDataCache<Client: ObjectClient> {
    client: Client,
    bucket_name: String,
    prefix: String,
    block_size: u64,
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
    pub fn new(bucket_name: &str, client: Client, source_description: &str, block_size: u64) -> Self {
        let prefix = hex::encode(
            Sha256::new()
                .chain_update(CACHE_VERSION.as_bytes())
                .chain_update(block_size.to_be_bytes())
                .chain_update(source_description.as_bytes())
                .finalize(),
        );
        Self {
            client,
            bucket_name: bucket_name.to_owned(),
            prefix,
            block_size,
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
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        if block_offset != block_idx * self.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let object_key = block_key(&self.prefix, cache_key, block_idx);
        let result = match self.client.get_object(&self.bucket_name, &object_key, None, None).await {
            Ok(result) => result,
            Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey)) => return Ok(None),
            Err(e) => return Err(e.into()),
        };

        pin_mut!(result);

        // TODO: optimize for the common case of a single chunk.
        let mut buffer = BytesMut::default();
        while let Some(chunk) = result.next().await {
            let (offset, body) = chunk?;
            if offset != buffer.len() as u64 {
                return Err(DataCacheError::InvalidBlockOffset);
            }
            buffer.extend_from_slice(&body);
        }
        let buffer = buffer.freeze();
        DataCacheResult::Ok(Some(buffer.into()))
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
    ) -> DataCacheResult<()> {
        if block_offset != block_idx * self.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let object_key = block_key(&self.prefix, &cache_key, block_idx);

        // TODO: ideally we should use a simple Put rather than MPU.
        let params = PutObjectParams::new();
        let mut req = self
            .client
            .put_object(&self.bucket_name, &object_key, &params)
            .in_current_span()
            .await?;
        let (data, _crc) = bytes.into_inner().map_err(|_| DataCacheError::InvalidBlockContent)?;
        req.write(&data).await?;
        req.complete().await?;

        DataCacheResult::Ok(())
    }

    fn block_size(&self) -> u64 {
        self.block_size
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

    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
    use mountpoint_s3_client::types::ETag;

    #[tokio::test]
    async fn test_put_get() {
        let data_1 = ChecksummedBytes::new("Foo".into());
        let data_2 = ChecksummedBytes::new("Bar".into());
        let data_3 = ChecksummedBytes::new("Baz".into());

        let bucket = "test-bucket";
        let part_size = 8 * 1024 * 1024;
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size,
            enable_backpressure: true,
            initial_read_window_size: part_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));

        let block_size = 512 * 1024;
        let cache = ExpressDataCache::new(bucket, client, "unique source description", block_size);
        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_2 = ObjectId::new(
            "longkey_".repeat(128), // 1024 bytes, max length for S3 keys
            ETag::for_tests(),
        );

        let block = cache
            .get_block(&cache_key_1, 0, 0)
            .await
            .expect("cache should be accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {:?}",
            block,
        );

        // PUT and GET, OK?
        cache
            .put_block(cache_key_1.clone(), 0, 0, data_1.clone())
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 0, 0)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET block for a second key, OK?
        cache
            .put_block(cache_key_2.clone(), 0, 0, data_2.clone())
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_2, 0, 0)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_2, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache
            .put_block(cache_key_1.clone(), 1, block_size, data_3.clone())
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 1, block_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_3, entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0, 0)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );
    }
}
