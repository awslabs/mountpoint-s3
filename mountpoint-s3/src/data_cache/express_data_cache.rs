use crate::object::ObjectId;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult};

use async_trait::async_trait;
use bytes::BytesMut;
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::types::PutObjectParams;
use mountpoint_s3_client::{ObjectClient, PutObjectRequest};
use sha2::{Digest, Sha256};
use tracing::{trace, Instrument};

const CACHE_VERSION: &str = "V1";

pub struct ExpressDataCache<Client: ObjectClient> {
    client: Client,
    bucket_name: String,
    prefix: String,
    block_size: u64,
}

impl<Client> ExpressDataCache<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
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
        _block_offset: u64, // TODO: should we use this?
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        let object_key = block_key(&self.prefix, cache_key, block_idx);
        let result = match self.client.get_object(&self.bucket_name, &object_key, None, None).await {
            Ok(ok_result) => ok_result,
            Err(_e) => {
                //TODO: assuming that key does not exists but it could be something else, so we will need to do something smarter here
                return DataCacheResult::Ok(None);
            }
        };

        pin_mut!(result);

        let mut buffer = BytesMut::default();
        loop {
            trace!("ExpressDataCache::get_block {}", object_key);
            match result.next().await {
                Some(Ok((_offset, body))) => {
                    // TODO: check offset expectation
                    buffer.extend_from_slice(&body);
                }
                Some(Err(_e)) => {
                    // TODO: what should we do here? anything better?
                    return DataCacheResult::Ok(None);
                }
                None => {
                    break;
                }
            }
        }
        let buffer = buffer.freeze();
        DataCacheResult::Ok(Some(buffer.into()))
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        _block_offset: u64,
        bytes: ChecksummedBytes,
    ) -> DataCacheResult<()> {
        let object_key = block_key(&self.prefix, &cache_key, block_idx);
        trace!("ExpressDataCache::put_block {}", object_key);
        // TODO: handle errors in a better way than just expects
        let params = PutObjectParams::new();
        let mut req = self
            .client
            .put_object(&self.bucket_name, &object_key, &params)
            .in_current_span()
            .await
            .expect("could not create req");
        let (data, _crc) = bytes.into_inner().expect("could not unpack checksummed bytes");
        req.write(&data).await.expect("unable to write");
        req.complete().await.expect("unable to complete upload");

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
