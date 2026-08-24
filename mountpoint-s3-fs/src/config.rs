use anyhow::{Context as _, anyhow};
use futures::executor::block_on;
use mountpoint_s3_client::ObjectClient;

use crate::data_cache::{DataCacheConfig, DiskDataCache, ExpressDataCache, MultilevelDataCache};
use crate::fuse::config::FuseSessionConfig;
use crate::fuse::session::FuseSession;
use crate::fuse::{ErrorLogger, S3FuseFilesystem};
use crate::memory::PagedPool;
use crate::metablock::Metablock;
use crate::prefetch::{Prefetcher, PrefetcherBuilder};
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
    ) -> anyhow::Result<Self> {
        if filesystem_config.read_only != fuse_session_config.read_only() {
            return Err(anyhow!(
                "read-only must be set consistently: `FuseOptions::read_only` is {} but \
                `S3FilesystemConfig::read_only` is {}",
                fuse_session_config.read_only(),
                filesystem_config.read_only,
            ));
        }

        Ok(Self {
            fuse_session_config,
            data_cache_config,
            filesystem_config,
            error_logger: None,
        })
    }

    /// Set the [Self::error_logger] field
    pub fn error_logger(mut self, error_logger: impl ErrorLogger + Send + Sync + 'static) -> Self {
        self.error_logger = Some(Box::new(error_logger));
        self
    }

    /// Create a new FUSE session
    pub fn create_fuse_session<Client>(
        self,
        metablock: impl Metablock + 'static,
        client: Client,
        runtime: Runtime,
        memory_pool: PagedPool,
    ) -> anyhow::Result<FuseSession>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let prefetcher_builder =
            create_prefetcher_builder(self.data_cache_config, &client, &runtime, memory_pool.clone())?;
        tracing::trace!(filesystem_config=?self.filesystem_config, "creating file system");
        let fs = S3Filesystem::new(
            client,
            prefetcher_builder,
            memory_pool,
            runtime,
            metablock,
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
    memory_pool: PagedPool,
) -> anyhow::Result<PrefetcherBuilder<Client>>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let disk_cache = data_cache_config
        .disk_cache_config
        .map(|config| DiskDataCache::new(config, memory_pool));
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

#[cfg(test)]
mod tests {
    use fuser::MountOption;
    use test_case::test_case;

    use super::*;
    use crate::fuse::config::MountPoint;

    /// Built directly rather than through [`FuseSessionConfig::new`] + [`MountPoint::new`], which
    /// validate the mount point against the real file system and `/proc`. The tests below only care
    /// about read-only.
    fn fuse_session_config(read_only: bool) -> FuseSessionConfig {
        FuseSessionConfig {
            mount_point: MountPoint::Directory("/mnt/mountpoint-s3-test".into()),
            options: if read_only { vec![MountOption::RO] } else { vec![] },
            max_threads: 1,
            clone_fuse_fd: false,
        }
    }

    fn mountpoint_config(fuse_read_only: bool, fs_read_only: bool) -> anyhow::Result<MountpointConfig> {
        MountpointConfig::new(
            fuse_session_config(fuse_read_only),
            S3FilesystemConfig {
                read_only: fs_read_only,
                ..Default::default()
            },
            DataCacheConfig::default(),
        )
    }

    #[test_case(false, false)]
    #[test_case(true, true)]
    fn test_read_only_consistent_is_accepted(fuse_read_only: bool, fs_read_only: bool) {
        mountpoint_config(fuse_read_only, fs_read_only).expect("consistent read-only configuration should be accepted");
    }

    #[test_case(true, false)]
    #[test_case(false, true)]
    fn test_read_only_inconsistent_is_rejected(fuse_read_only: bool, fs_read_only: bool) {
        let err = mountpoint_config(fuse_read_only, fs_read_only)
            .expect_err("inconsistent read-only configuration should be rejected");
        assert!(
            err.to_string().contains("read-only must be set consistently"),
            "unexpected error: {err}"
        );
    }
}
