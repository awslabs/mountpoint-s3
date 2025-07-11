use anyhow::Context as _;
use futures::executor::block_on;
use mountpoint_s3_client::ObjectClient;

use crate::data_cache::{DataCacheConfig, DiskDataCache, ExpressDataCache, MultilevelDataCache};
use crate::fuse::config::FuseSessionConfig;
use crate::fuse::session::FuseSession;
use crate::fuse::{ErrorLogger, S3FuseFilesystem};
use crate::memory::PagedPool;
use crate::prefetch::{Prefetcher, PrefetcherBuilder};
use crate::s3::config::S3Path;
use crate::sync::Arc;
use crate::{Runtime, S3Filesystem, S3FilesystemConfig};

/// Configuration for a Mountpoint session
#[derive(Debug)]
pub struct MountpointConfig {
    fuse_session_config: FuseSessionConfig,
    data_cache_config: DataCacheConfig,
    filesystem_config: S3FilesystemConfig,
    error_logger: Option<Box<dyn ErrorLogger + Send + Sync>>,
}

impl MountpointConfig {
    pub fn new(
        fuse_session_config: FuseSessionConfig,
        filesystem_config: S3FilesystemConfig,
        data_cache_config: DataCacheConfig,
    ) -> Self {
        Self {
            fuse_session_config,
            data_cache_config,
            filesystem_config,
            error_logger: None,
        }
    }

    /// Set the [Self::error_logger] field
    pub fn error_logger(mut self, error_logger: impl ErrorLogger + Send + Sync + 'static) -> Self {
        self.error_logger = Some(Box::new(error_logger));
        self
    }

    /// Create a new FUSE session
    pub fn create_fuse_session<Client>(
        self,
        s3_path: S3Path,
        client: Client,
        runtime: Runtime,
        memory_pool: Option<PagedPool>,
    ) -> anyhow::Result<FuseSession>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let prefetcher_builder = create_prefetcher_builder(self.data_cache_config, &client, &runtime, memory_pool)?;
        tracing::trace!(filesystem_config=?self.filesystem_config, "creating file system");
        let fs = S3Filesystem::new(
            client,
            prefetcher_builder,
            runtime,
            &s3_path.bucket_name,
            &s3_path.prefix,
            self.filesystem_config,
        );

        let fuse_fs = S3FuseFilesystem::new(fs, self.error_logger);
        let session = FuseSession::new(fuse_fs, self.fuse_session_config)?;
        ctrlc::set_handler(session.shutdown_fn()).context("failed to set interrupt handler")?;
        Ok(session)
    }
}

fn create_prefetcher_builder<Client>(
    data_cache_config: DataCacheConfig,
    client: &Client,
    runtime: &Runtime,
    memory_pool: Option<PagedPool>,
) -> anyhow::Result<PrefetcherBuilder<Client>>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let disk_cache = data_cache_config
        .disk_cache_config
        .map(|config| DiskDataCache::new_with_pool(config, memory_pool));
    let express_cache = match data_cache_config.express_cache_config {
        None => None,
        Some(config) => {
            let cache_bucket_name = config.bucket_name.clone();
            let express_cache = ExpressDataCache::new(client.clone(), config);
            block_on(express_cache.verify_cache_valid())
                .with_context(|| format!("initial PutObject failed for shared cache bucket {cache_bucket_name}"))?;
            Some(express_cache)
        }
    };
    let client = client.clone();
    let builder = match (disk_cache, express_cache) {
        (None, Some(express_cache)) => Prefetcher::caching_builder(express_cache, client),
        (Some(disk_cache), None) => Prefetcher::caching_builder(disk_cache, client),
        (Some(disk_cache), Some(express_cache)) => {
            let cache = MultilevelDataCache::new(Arc::new(disk_cache), express_cache, runtime.clone());
            Prefetcher::caching_builder(cache, client)
        }
        _ => Prefetcher::default_builder(client),
    };
    Ok(builder)
}
