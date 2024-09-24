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
