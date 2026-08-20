use std::fmt::Display;
use std::num::NonZeroUsize;

use anyhow::Context as _;
use humansize::{BINARY, format_size};
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, TlsConfig, Uri,
};
use mountpoint_s3_client::error::ObjectClientError;
use mountpoint_s3_client::user_agent::UserAgent;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};

use crate::memory::{PagedPool, data_buffer_budget_for};

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

    /// Optional TLS configuration (for example, a custom CA trust store).
    pub tls_config: Option<TlsConfig>,
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

    /// Validate and clamp read_part_size against the memory budget.
    /// Must be called BEFORE creating the PagedPool.
    ///
    /// - If user explicitly set both memory and part size AND they conflict → FAIL
    /// - If memory is default (auto-detected) and conflict → CLAMP and warn
    pub fn validate(mut self, memory_limit: MemoryLimitSetting) -> anyhow::Result<Self> {
        let mem_limit = memory_limit.bytes();
        let data_buffer_budget = data_buffer_budget_for(mem_limit);
        let reserved = mem_limit.saturating_sub(data_buffer_budget);

        if self.read_size_bytes > data_buffer_budget {
            if memory_limit.is_user_specified() {
                // User explicitly set both → FAIL IMMEDIATELY
                anyhow::bail!(
                    "read part size ({}) exceeds the memory available for data buffers ({}). \
                     The memory target is {}, of which {} is reserved for Mountpoint overhead. \
                     Increase --memory-target or decrease --read-part-size.",
                    format_size(self.read_size_bytes, BINARY),
                    format_size(data_buffer_budget, BINARY),
                    format_size(mem_limit, BINARY),
                    format_size(reserved, BINARY)
                );
            } else {
                // Memory was auto-detected → CLAMP and warn
                tracing::warn!(
                    "read part size ({}) exceeds the memory available for data buffers ({}). \
                     The auto-detected memory target is {}, of which {} is reserved for Mountpoint overhead. \
                     Clamping read part size to {}.",
                    format_size(self.read_size_bytes, BINARY),
                    format_size(data_buffer_budget, BINARY),
                    format_size(mem_limit, BINARY),
                    format_size(reserved, BINARY),
                    format_size(data_buffer_budget, BINARY)
                );
                self.read_size_bytes = data_buffer_budget;
            }
        }
        Ok(self)
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

/// Memory limit setting.
#[derive(Debug, Clone, Copy)]
pub enum MemoryLimitSetting {
    /// Default memory limit (95% of system memory)
    Default(usize),
    /// User-specified memory limit via --memory-target
    User(usize),
}

impl MemoryLimitSetting {
    pub fn bytes(&self) -> usize {
        match self {
            MemoryLimitSetting::Default(bytes) => *bytes,
            MemoryLimitSetting::User(bytes) => *bytes,
        }
    }

    pub fn is_user_specified(&self) -> bool {
        matches!(self, MemoryLimitSetting::User(_))
    }
}

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
            .initial_read_window(self.part_config.read_size_bytes)
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
        if let Some(tls_config) = self.tls_config {
            client_config = client_config.tls_config(tls_config);
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

#[cfg(test)]
mod tests {
    use super::*;
    use crate::memory::{CandidateSize, PagedPool};

    #[test]
    fn test_read_part_size_within_budget_no_clamp() {
        // read_part_size < budget → should use requested size, no error
        let mem_limit = MemoryLimitSetting::Default(1024 * 1024 * 1024); // 1 GB
        let part_config = PartConfig::with_part_size(8 * 1024 * 1024).validate(mem_limit); // 8 MB - well within budget

        assert!(part_config.is_ok(), "Should succeed when read_part_size < budget");
        assert_eq!(
            part_config.unwrap().read_size_bytes,
            8 * 1024 * 1024,
            "read_size_bytes should remain unchanged"
        );
    }

    #[test]
    fn test_read_part_size_exceeds_budget_user_specified_fails() {
        // User set memory + read_part_size > budget → should fail during validation
        let mem_limit_bytes: usize = 512 * 1024 * 1024; // 512 MB
        let memory_limit = MemoryLimitSetting::User(mem_limit_bytes);

        let budget = data_buffer_budget_for(mem_limit_bytes);
        let excessive_size = budget + 1; // Just over budget

        let result = PartConfig::with_part_size(excessive_size).validate(memory_limit);
        assert!(
            result.is_err(),
            "Should fail when user set memory and read_part_size > budget"
        );
        let err = result.unwrap_err();
        let err_msg = err.to_string();
        assert!(
            err_msg.contains("exceeds the memory available for data buffers"),
            "Error should mention data buffers: {}",
            err
        );
        assert!(
            err_msg.contains("reserved for Mountpoint overhead"),
            "Error should explain reserved memory: {}",
            err
        );
    }

    #[test]
    fn test_read_part_size_exceeds_budget_default_clamps() {
        // Default memory + read_part_size > budget → should clamp and succeed
        let mem_limit_bytes: usize = 512 * 1024 * 1024; // 512 MB
        let memory_limit = MemoryLimitSetting::Default(mem_limit_bytes);

        let budget = data_buffer_budget_for(mem_limit_bytes);
        let excessive_size = budget + 100 * 1024 * 1024; // 100 MB over budget

        let part_config = PartConfig::with_part_size(excessive_size).validate(memory_limit);
        assert!(
            part_config.is_ok(),
            "Should succeed (with clamping) when memory is default and read_part_size > budget"
        );

        let part_config = part_config.unwrap();

        // Verify the read_size_bytes was clamped to budget
        assert_eq!(
            part_config.read_size_bytes, budget,
            "read_size_bytes should be clamped to budget"
        );

        // Verify write_size_bytes was NOT clamped
        assert_eq!(
            part_config.write_size_bytes, excessive_size,
            "write_size_bytes should remain unchanged"
        );

        // Now create pool and client with clamped value to verify end-to-end flow
        let pool = PagedPool::config()
            .with_candidate_sizes([CandidateSize::new(part_config.read_size_bytes)])
            .with_memory_limit(mem_limit_bytes)
            .build();

        let config = ClientConfig {
            region: Region::new_inferred("us-east-1".to_string()),
            endpoint_url: None,
            addressing_style: AddressingStyle::Automatic,
            dual_stack: false,
            transfer_acceleration: false,
            auth_config: S3ClientAuthConfig::NoSigning,
            requester_pays: false,
            expected_bucket_owner: None,
            throughput_target: TargetThroughputSetting::Default,
            bind: None,
            part_config,
            user_agent: UserAgent::new(None),
            tls_config: None,
        };

        let client = config.create_client(pool, None).unwrap();
        assert_eq!(
            client.read_part_size(),
            budget,
            "Client should use clamped size equal to budget"
        );
    }

    #[test]
    fn test_read_part_size_with_separate_read_write_sizes() {
        // Test the --read-part-size override case (separate from --part-size)
        let mem_limit_bytes: usize = 512 * 1024 * 1024; // 512 MB
        let memory_limit = MemoryLimitSetting::User(mem_limit_bytes);

        let budget = data_buffer_budget_for(mem_limit_bytes);
        let excessive_read_size = budget + 1; // Just over budget
        let normal_write_size = 8 * 1024 * 1024; // 8 MB - within budget

        // Should fail because read_part_size exceeds budget (even though write is fine)
        let result = PartConfig::with_read_write_sizes(excessive_read_size, normal_write_size).validate(memory_limit);
        assert!(result.is_err(), "Should fail when read_part_size exceeds budget");
        let err = result.unwrap_err();
        let err_msg = err.to_string();
        assert!(
            err_msg.contains("exceeds the memory available for data buffers"),
            "Error should mention data buffers: {}",
            err
        );
    }
}
