use crate::{data_cache::DataCache, sync::Arc};

use mountpoint_s3_client::ObjectClient;

use crate::{Runtime, mem_limiter::MemoryLimiter};

use super::caching_stream::CachingPartStream;
use super::part_stream::{ClientPartStream, PartStream};
use super::{Prefetcher, PrefetcherConfig};

/// A builder for [Prefetcher] instances.
pub struct PrefetcherBuilder<Client> {
    inner: Box<dyn PrefetcherBuild<Client>>,
}

impl<Client> PrefetcherBuilder<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// Creates an instance of the default [Prefetcher] builder.
    pub fn default_builder(client: Client) -> Self {
        Self {
            inner: Box::new(DefaultPrefetcherBuilder { client }),
        }
    }

    /// Creates an instance of a caching [Prefetcher] builder.
    pub fn caching_builder<Cache>(cache: Cache, client: Client) -> Self
    where
        Cache: DataCache + Send + Sync + 'static,
    {
        Self {
            inner: Box::new(CachingPrefetcherBuilder { cache, client }),
        }
    }

    /// Build a [Prefetcher] instance.
    pub fn build(
        self,
        runtime: Runtime,
        mem_limiter: Arc<MemoryLimiter>,
        prefetcher_config: PrefetcherConfig,
    ) -> Prefetcher<Client> {
        self.inner.build(runtime, mem_limiter, prefetcher_config)
    }
}

/// Internal trait to abstract over default and caching prefetcher implementations.
///
/// This is always wrapped in the public [PrefetcherBuilder] struct to hide the
/// cumbersome boxing due to handling trait objects with:
/// * a generic [ObjectClient] parameter,
/// * a build method that consumes `self`.
trait PrefetcherBuild<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn build(
        self: Box<Self>,
        runtime: Runtime,
        mem_limiter: Arc<MemoryLimiter>,
        prefetcher_config: PrefetcherConfig,
    ) -> Prefetcher<Client>;
}

struct DefaultPrefetcherBuilder<Client> {
    client: Client,
}

impl<Client> PrefetcherBuild<Client> for DefaultPrefetcherBuilder<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn build(
        self: Box<Self>,
        runtime: Runtime,
        mem_limiter: Arc<MemoryLimiter>,
        prefetcher_config: PrefetcherConfig,
    ) -> Prefetcher<Client> {
        let part_stream = ClientPartStream::new(runtime, self.client, mem_limiter);
        Prefetcher::new(PartStream::new(part_stream), prefetcher_config)
    }
}

struct CachingPrefetcherBuilder<Cache, Client> {
    cache: Cache,
    client: Client,
}

impl<Cache, Client> PrefetcherBuild<Client> for CachingPrefetcherBuilder<Cache, Client>
where
    Cache: DataCache + Send + Sync + 'static,
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn build(
        self: Box<Self>,
        runtime: Runtime,
        mem_limiter: Arc<MemoryLimiter>,
        prefetcher_config: PrefetcherConfig,
    ) -> Prefetcher<Client> {
        let part_stream = CachingPartStream::new(runtime, self.client, mem_limiter, self.cache);
        Prefetcher::new(PartStream::new(part_stream), prefetcher_config)
    }
}
