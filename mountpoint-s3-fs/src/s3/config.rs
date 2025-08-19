use std::fmt::Display;
use std::num::NonZeroUsize;

use anyhow::Context as _;
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, Uri,
};
use mountpoint_s3_client::error::ObjectClientError;
use mountpoint_s3_client::user_agent::UserAgent;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};

use crate::memory::PagedPool;

use super::S3Path;

/// Configuration for the S3 Client to use in Mountpoint.
#[derive(Debug)]
pub struct ClientConfig {
    /// AWS region
    pub region: Region,

    /// S3 endpoint URL
    pub endpoint_url: Option<String>,

    /// The addressing style for endpoint resolution
    pub addressing_style: AddressingStyle,

    /// Use dual-stack endpoints when accessing S3
    pub dual_stack: bool,

    /// Use S3 Transfer Acceleration when accessing S3. This must be enabled on the bucket
    pub transfer_acceleration: bool,

    /// Authentication configuration
    pub auth_config: S3ClientAuthConfig,

    /// Set the 'x-amz-request-payer' to 'requester' on S3 requests
    pub requester_pays: bool,

    /// Account ID of the expected bucket owner
    pub expected_bucket_owner: Option<String>,

    /// Target throughput in Gbps
    pub throughput_target: TargetThroughputSetting,

    /// One or more network interfaces to use when accessing S3
    pub bind: Option<Vec<String>>,

    /// Part size for multi-part GET and PUT
    pub part_config: PartConfig,

    /// Value for the user-agent header
    pub user_agent: UserAgent,
}

#[derive(Debug)]
pub struct PartConfig {
    /// Part size for GET in bytes
    pub read_size_bytes: usize,

    /// Part size for multi-part PUT in bytes
    pub write_size_bytes: usize,
}

impl PartConfig {
    pub fn with_part_size(part_size: usize) -> Self {
        Self {
            read_size_bytes: part_size,
            write_size_bytes: part_size,
        }
    }

    pub fn with_read_write_sizes(read_size_bytes: usize, write_size_bytes: usize) -> Self {
        Self {
            read_size_bytes,
            write_size_bytes,
        }
    }
}

#[derive(Debug)]
pub struct Region {
    /// Region name
    name: String,
    /// Whether the region was provided by the user
    user_specified: bool,
}

impl Region {
    pub fn new_user_specified(region: String) -> Self {
        Self {
            name: region,
            user_specified: true,
        }
    }

    pub fn new_inferred(region: String) -> Self {
        Self {
            name: region,
            user_specified: false,
        }
    }

    pub fn as_str(&self) -> &str {
        &self.name
    }
}

impl Display for Region {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str(&self.name)
    }
}

/// Target throughput setting.
#[derive(Debug, Clone, Copy)]
pub enum TargetThroughputSetting {
    Default,
    User { gbps: f64 },
    Instance { gbps: f64 },
}

impl TargetThroughputSetting {
    pub const DEFAULT_TARGET_THROUGHPUT_GBPS: f64 = 10.0;

    pub fn value(&self) -> f64 {
        match self {
            TargetThroughputSetting::Default => Self::DEFAULT_TARGET_THROUGHPUT_GBPS,
            TargetThroughputSetting::User { gbps } => *gbps,
            TargetThroughputSetting::Instance { gbps } => *gbps,
        }
    }
}

// This is a weird looking number! We really want our first request size to be 1MiB,
// which is a common IO size. But Linux's readahead will try to read an extra 128k on on
// top of a 1MiB read, which we'd have to wait for a second request to service. Because
// FUSE doesn't know the difference between regular reads and readahead reads, it will
// send us a READ request for that 128k, so we'll have to block waiting for it even if
// the application doesn't want it. This is all in the noise for sequential IO, but
// waiting for the readahead hurts random IO. So we add 128k to the first request size
// to avoid the latency hit of the second request.
//
// Note the CRT does not respect this value right now, they always return chunks of part size
// but this is the first window size we prefer.
pub const INITIAL_READ_WINDOW_SIZE: usize = 1024 * 1024 + 128 * 1024;

impl ClientConfig {
    /// Create an [S3CrtClient]
    pub fn create_client(
        self,
        memory_pool: PagedPool,
        validate_on_s3_path: Option<&S3Path>,
    ) -> anyhow::Result<S3CrtClient> {
        let mut client_config = S3ClientConfig::new()
            .auth_config(self.auth_config)
            .throughput_target_gbps(self.throughput_target.value())
            .read_part_size(self.part_config.read_size_bytes)
            .write_part_size(self.part_config.write_size_bytes)
            .read_backpressure(true)
            .initial_read_window(INITIAL_READ_WINDOW_SIZE)
            .user_agent(self.user_agent)
            .memory_pool(memory_pool);
        if let Some(interfaces) = self.bind {
            client_config = client_config.network_interface_names(interfaces);
        }
        if self.requester_pays {
            client_config = client_config.request_payer("requester");
        }
        if let Some(owner) = &self.expected_bucket_owner {
            client_config = client_config.bucket_owner(owner);
        }
        // Transient errors are really bad for file systems (applications don't usually expect them), so
        // let's be more stubborn than the SDK default. With the CRT defaults of 500ms backoff, full
        // jitter, and 20s max backoff time, 10 attempts will take an average of 55 seconds.
        client_config = client_config.max_attempts(NonZeroUsize::new(10).unwrap());

        const ENV_VAR_KEY_CRT_ELG_THREADS: &str = "UNSTABLE_CRT_EVENTLOOP_THREADS";
        if let Some(crt_elg_threads) = std::env::var_os(ENV_VAR_KEY_CRT_ELG_THREADS) {
            let crt_elg_threads = crt_elg_threads.to_string_lossy().parse::<u16>().unwrap_or_else(|_| {
                panic!(
                    "Invalid value for environment variable {ENV_VAR_KEY_CRT_ELG_THREADS}. Must be positive integer."
                )
            });
            client_config = client_config.event_loop_threads(crt_elg_threads);
        }

        let mut endpoint_config = EndpointConfig::new(self.region.as_str())
            .addressing_style(self.addressing_style)
            .use_accelerate(self.transfer_acceleration)
            .use_dual_stack(self.dual_stack);

        if let Some(uri) = self.endpoint_url {
            if !self.region.user_specified {
                tracing::warn!(
                    "endpoint specified but region unspecified. using {} as the signing region.",
                    self.region
                );
            }

            let endpoint_uri = Uri::new_from_str(&Allocator::default(), uri).context("Failed to parse endpoint URL")?;
            endpoint_config = endpoint_config.endpoint(endpoint_uri);
        }

        let client = S3CrtClient::new(client_config.clone().endpoint_config(endpoint_config.clone()))?;

        if let Some(s3_path) = validate_on_s3_path {
            validate_client_for_bucket(client, s3_path, self.region, endpoint_config, client_config)
        } else {
            Ok(client)
        }
    }
}

/// Validate a client by sending a ListObjectsV2 request to the given bucket/prefix. If the region was not
/// explicitly provided by the user, attempt to infer it by first sending a ListObjectsV2 to the default region.
///
/// This also has the nice side effect of triggering the CRT's DNS resolver to start pooling
/// responses, which means we don't have to wait for the first file read to start the rampup period.
fn validate_client_for_bucket(
    client: S3CrtClient,
    s3_path: &S3Path,
    region: Region,
    endpoint_config: EndpointConfig,
    client_config: S3ClientConfig,
) -> anyhow::Result<S3CrtClient> {
    let list_request = client.list_objects(&s3_path.bucket, None, "", 0, s3_path.prefix.as_str());
    match futures::executor::block_on(list_request) {
        Ok(_) => Ok(client),
        // Don't try to automatically correct the region if it was manually specified incorrectly
        Err(ObjectClientError::ClientError(S3RequestError::IncorrectRegion(correct_region, _)))
            if !region.user_specified =>
        {
            tracing::warn!(
                "bucket {} is in region {}, not {}. redirecting...",
                s3_path.bucket,
                correct_region,
                region
            );
            let new_client = S3CrtClient::new(client_config.endpoint_config(endpoint_config.region(&correct_region)))?;
            let list_request = new_client.list_objects(&s3_path.bucket, None, "", 0, s3_path.prefix.as_str());
            futures::executor::block_on(list_request)
                .map(|_| new_client)
                .with_context(|| {
                    format!(
                        "initial ListObjectsV2 failed for bucket {} in region {}",
                        s3_path.bucket, correct_region
                    )
                })
        }
        Err(e) => Err(e).with_context(|| {
            format!(
                "initial ListObjectsV2 failed for bucket {} in region {}",
                s3_path.bucket, region
            )
        }),
    }
}
