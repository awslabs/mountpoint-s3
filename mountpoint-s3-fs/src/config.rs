use anyhow::Context as _;
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
    read_only: Option<bool>,
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
            read_only: None,
        }
    }

    /// Set the [Self::error_logger] field
    pub fn error_logger(mut self, error_logger: impl ErrorLogger + Send + Sync + 'static) -> Self {
        self.error_logger = Some(Box::new(error_logger));
        self
    }

    /// Override whether the file system treats this mount as read-only.
    ///
    /// By default this is taken from the FUSE mount options
    /// ([`FuseSessionConfig::read_only`]). Set it explicitly when the mount point is a file
    /// descriptor: there the mount has already been performed by the caller, so Mountpoint cannot
    /// see whether it was mounted read-only.
    pub fn read_only(mut self, read_only: bool) -> Self {
        self.read_only = Some(read_only);
        self
    }

    /// Whether to build the file system read-only: the caller's [`Self::read_only`] override if
    /// set, otherwise whatever the FUSE mount options say.
    fn is_read_only(&self) -> bool {
        self.read_only.unwrap_or(self.fuse_session_config.read_only())
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
        let read_only = self.is_read_only();
        let prefetcher_builder =
            create_prefetcher_builder(self.data_cache_config, &client, &runtime, memory_pool.clone())?;
        tracing::trace!(filesystem_config=?self.filesystem_config, read_only, "creating file system");
        let fs = S3Filesystem::new(
            client,
            prefetcher_builder,
            memory_pool,
            runtime,
            metablock,
            self.filesystem_config,
            read_only,
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
    use test_case::test_case;

    use super::*;
    use crate::fuse::config::{FuseOptions, MountPoint};

    fn mountpoint_config(read_only: bool, mount_dir: &tempfile::TempDir) -> MountpointConfig {
        let fuse_options = FuseOptions {
            read_only,
            ..Default::default()
        };
        let fuse_session_config = FuseSessionConfig::new(
            MountPoint::new(mount_dir.path()).expect("mount point should be valid"),
            fuse_options,
            1,
        )
        .expect("session config should be valid");
        MountpointConfig::new(
            fuse_session_config,
            S3FilesystemConfig::default(),
            DataCacheConfig::default(),
        )
    }

    /// By default read-only-ness follows the FUSE mount options, so embedders don't have to state
    /// it twice.
    #[test_case(false)]
    #[test_case(true)]
    fn test_read_only_defaults_to_fuse_options(read_only: bool) {
        let mount_dir = tempfile::tempdir().unwrap();
        assert_eq!(mountpoint_config(read_only, &mount_dir).is_read_only(), read_only);
    }

    /// An explicit override wins over the FUSE mount options, in both directions. This is how a
    /// caller that mounted `/dev/fuse` read-only itself tells us so: the `ro` flag it passed to
    /// `mount` isn't visible in our mount options.
    #[test_case(false, true)]
    #[test_case(true, false)]
    #[test_case(true, true)]
    #[test_case(false, false)]
    fn test_read_only_override_wins(fuse_read_only: bool, override_read_only: bool) {
        let mount_dir = tempfile::tempdir().unwrap();
        let config = mountpoint_config(fuse_read_only, &mount_dir).read_only(override_read_only);
        assert_eq!(config.is_read_only(), override_read_only);
    }
}
