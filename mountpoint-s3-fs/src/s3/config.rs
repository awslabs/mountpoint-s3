use std::env;
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
use tracing::warn;

use crate::memory::{PagedPool, data_buffer_budget_for};
use tokio::runtime::Handle;

use super::S3Path;
use super::credentials::{SdkCredentialsChain, SdkCredentialsConfig, SharedCredentials};

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
    pub auth_config: AuthConfig,

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

/// How the client authenticates its requests to S3.
#[derive(Debug, Clone, Default)]
pub enum AuthConfig {
    /// Sign requests with credentials from the default credentials chain
    /// ([SdkCredentialsChain::Default]).
    #[default]
    Default,
    /// Sign requests with credentials from the given profile in the shared config and credentials
    /// files ([SdkCredentialsChain::Profile]).
    Profile(String),
    /// Do not sign requests.
    NoSigning,
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
    ///
    /// `tokio_handle` runs the client's Tokio-based components, such as the SDK credentials chain.
    /// Its runtime must be multi-thread, with the I/O and time drivers enabled. The caller keeps it
    /// running for as long as the client exists. With `validate_on_s3_path`, it loads the
    /// credentials and checks the bucket before it returns; without it, the credentials are first
    /// fetched for the client's first request.
    pub async fn create_client(
        self,
        memory_pool: PagedPool,
        validate_on_s3_path: Option<&S3Path>,
        tokio_handle: Handle,
    ) -> anyhow::Result<S3CrtClient> {
        let credentials = self.sdk_credentials(tokio_handle).await?;
        let auth_config = match &credentials {
            Some(credentials) => credentials.auth_config(),
            None => S3ClientAuthConfig::NoSigning,
        };
        let mut client_config = S3ClientConfig::new()
            .auth_config(auth_config)
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

        if disable_retry_quota() {
            client_config = client_config.retry_quota(false);
        }

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
            if let Some(credentials) = &credentials {
                // Load the credentials before the bucket check, so that a mount without credentials
                // fails with the chain's reason: the CRT client only sees that its query failed. The
                // bucket check signs with the credentials loaded here, from the cache.
                credentials.load().await?;
            }
            validate_client_for_bucket(client, s3_path, self.region, endpoint_config, client_config).await
        } else {
            Ok(client)
        }
    }

    /// The shared credentials over the SDK chain for the configured authentication, or `None` for
    /// [AuthConfig::NoSigning].
    async fn sdk_credentials(&self, tokio_handle: Handle) -> anyhow::Result<Option<SharedCredentials>> {
        let chain = match &self.auth_config {
            AuthConfig::Default => SdkCredentialsChain::Default,
            AuthConfig::Profile(name) => SdkCredentialsChain::Profile(name.clone()),
            AuthConfig::NoSigning => return Ok(None),
        };
        let mut credentials_config = SdkCredentialsConfig::new(chain);
        if let Some(tls_config) = &self.tls_config {
            credentials_config = credentials_config.tls_config(tls_config);
        }
        Ok(Some(
            SharedCredentials::from_sdk(credentials_config, tokio_handle).await?,
        ))
    }
}

/// Return whether the S3 client should retry failed requests without a retry quota.
fn disable_retry_quota() -> bool {
    const ENV_VAR_KEY: &str = "UNSTABLE_MOUNTPOINT_DISABLE_RETRY_QUOTA";
    let disable = env::var_os(ENV_VAR_KEY).is_some_and(|x| x.eq_ignore_ascii_case("TRUE") || x == "1");
    if disable {
        warn!("{ENV_VAR_KEY} is set and 'truthy', disabling the retry quota");
    }
    disable
}

/// Validate a client by sending a ListObjectsV2 request to the given bucket/prefix. If the region was not
/// explicitly provided by the user, attempt to infer it by first sending a ListObjectsV2 to the default region.
///
/// This also has the nice side effect of triggering the CRT's DNS resolver to start pooling
/// responses, which means we don't have to wait for the first file read to start the rampup period.
async fn validate_client_for_bucket(
    client: S3CrtClient,
    s3_path: &S3Path,
    region: Region,
    endpoint_config: EndpointConfig,
    client_config: S3ClientConfig,
) -> anyhow::Result<S3CrtClient> {
    let list_request = client.list_objects(&s3_path.bucket, None, "", 0, s3_path.prefix.as_str());
    match list_request.await {
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
            list_request.await.map(|_| new_client).with_context(|| {
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
    use rusty_fork::rusty_fork_test;

    use super::*;
    use crate::memory::{CandidateSize, PagedPool};
    use crate::s3::{Bucket, Prefix};
    use tokio::runtime::{Builder, Runtime};

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
            auth_config: AuthConfig::NoSigning,
            requester_pays: false,
            expected_bucket_owner: None,
            throughput_target: TargetThroughputSetting::Default,
            bind: None,
            part_config,
            user_agent: UserAgent::new(None),
            tls_config: None,
        };

        let tokio_runtime = new_runtime();
        let client = tokio_runtime
            .block_on(config.create_client(pool, None, tokio_runtime.handle().clone()))
            .unwrap();
        assert_eq!(
            client.read_part_size(),
            budget,
            "Client should use clamped size equal to budget"
        );
    }

    fn test_client_config(auth_config: AuthConfig) -> ClientConfig {
        ClientConfig {
            region: Region::new_inferred("us-east-1".to_string()),
            endpoint_url: None,
            addressing_style: AddressingStyle::Automatic,
            dual_stack: false,
            transfer_acceleration: false,
            auth_config,
            requester_pays: false,
            expected_bucket_owner: None,
            throughput_target: TargetThroughputSetting::Default,
            bind: None,
            part_config: PartConfig::with_part_size(8 * 1024 * 1024),
            user_agent: UserAgent::new(None),
            tls_config: None,
        }
    }

    /// A multi-thread runtime for the code under test. Build it only after setting up the
    /// environment: it starts threads.
    fn new_runtime() -> Runtime {
        Builder::new_multi_thread().enable_all().build().unwrap()
    }

    fn test_pool() -> PagedPool {
        PagedPool::config()
            .with_candidate_sizes([CandidateSize::new(8 * 1024 * 1024)])
            .with_memory_limit(512 * 1024 * 1024)
            .build()
    }

    rusty_fork_test! {
        #[test]
        fn missing_profile_fails_client_creation() {
            let dir = tempfile::tempdir().unwrap();
            // SAFETY: the test runs in its own forked process, which has no other thread yet.
            unsafe {
                std::env::set_var("AWS_CONFIG_FILE", dir.path().join("config"));
                std::env::set_var("AWS_SHARED_CREDENTIALS_FILE", dir.path().join("credentials"));
            }
            // Built after setting the environment: it starts threads.
            let tokio_runtime = new_runtime();
            let config = test_client_config(AuthConfig::Profile("missing".to_owned()));
            let err = tokio_runtime
                .block_on(config.create_client(test_pool(), None, tokio_runtime.handle().clone()))
                .unwrap_err();
            assert!(format!("{err:#}").contains("invalid AWS credentials"), "{err:#}");
        }

        #[test]
        fn bucket_check_without_credentials_fails_with_the_reason() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            // Built after setting the environment: it starts threads.
            let tokio_runtime = new_runtime();
            let config = test_client_config(AuthConfig::Default);
            let err = tokio_runtime
                .block_on(config.create_client(test_pool(), Some(&test_s3_path()), tokio_runtime.handle().clone()))
                .unwrap_err();
            let message = format!("{err:#}");
            assert!(message.starts_with("failed to load AWS credentials"), "{message}");
            assert!(message.contains("instance metadata is disabled"), "{message}");
        }

        #[test]
        fn bucket_check_signs_with_the_loaded_credentials() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            let runs = dir.path().join("runs");
            let script = dir.path().join("credential-process.sh");
            std::fs::write(
                &script,
                format!(
                    "#!/bin/sh\necho run >> {runs:?}\necho '{{\"Version\": 1, \"AccessKeyId\": \"{PROCESS_ACCESS_KEY_ID}\", \"SecretAccessKey\": \"secret\"}}'\n"
                ),
            )
            .unwrap();
            std::fs::set_permissions(&script, std::os::unix::fs::PermissionsExt::from_mode(0o755)).unwrap();
            std::fs::write(
                dir.path().join("config"),
                format!("[default]\ncredential_process = {}\n", script.display()),
            )
            .unwrap();
            // Built after setting the environment: it starts threads.
            let tokio_runtime = new_runtime();
            let server = tokio_runtime.block_on(async {
                let server = wiremock::MockServer::start().await;
                wiremock::Mock::given(wiremock::matchers::any())
                    .respond_with(wiremock::ResponseTemplate::new(200).set_body_string(LIST_OBJECTS_RESPONSE))
                    .mount(&server)
                    .await;
                server
            });

            let mut config = test_client_config(AuthConfig::Default);
            config.endpoint_url = Some(server.uri());
            config.addressing_style = AddressingStyle::Path;
            tokio_runtime
                .block_on(config.create_client(test_pool(), Some(&test_s3_path()), tokio_runtime.handle().clone()))
                .unwrap();

            // One fetch, at the load before the bucket check, which signs with its credentials.
            assert_eq!(std::fs::read_to_string(&runs).unwrap().lines().count(), 1);
            let requests = tokio_runtime.block_on(server.received_requests()).unwrap();
            assert_eq!(requests.len(), 1, "{requests:?}");
            let authorization = requests[0].headers.get("authorization").unwrap().to_str().unwrap();
            assert!(authorization.contains(&format!("Credential={PROCESS_ACCESS_KEY_ID}/")), "{authorization}");
        }
    }

    const PROCESS_ACCESS_KEY_ID: &str = "AKIACREDPROCESS";

    const LIST_OBJECTS_RESPONSE: &str = r#"<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Name>amzn-s3-demo-bucket</Name><Prefix></Prefix><KeyCount>0</KeyCount><MaxKeys>0</MaxKeys><IsTruncated>false</IsTruncated></ListBucketResult>"#;

    fn test_s3_path() -> S3Path {
        S3Path::new(Bucket::new("amzn-s3-demo-bucket").unwrap(), Prefix::empty())
    }

    /// Point every credential source at `dir` or turn it off: no `AWS_*` variables from the test's
    /// environment, shared files and `HOME` in `dir`, and no instance metadata.
    ///
    /// Only call it in a forked test process, which has a single thread at this point.
    fn isolate_environment(dir: &std::path::Path) {
        for (key, _) in std::env::vars_os() {
            if key.to_string_lossy().starts_with("AWS_") {
                // SAFETY: the test runs in its own forked, single-threaded process.
                unsafe { std::env::remove_var(key) };
            }
        }
        // SAFETY: the test runs in its own forked, single-threaded process.
        unsafe {
            std::env::set_var("HOME", dir);
            std::env::set_var("AWS_CONFIG_FILE", dir.join("config"));
            std::env::set_var("AWS_SHARED_CREDENTIALS_FILE", dir.join("credentials"));
            std::env::set_var("AWS_EC2_METADATA_DISABLED", "true");
        }
    }

    #[test]
    fn sdk_credentials_for_auth_config() {
        let tokio_runtime = new_runtime();
        let sdk_credentials = |auth_config| {
            tokio_runtime
                .block_on(test_client_config(auth_config).sdk_credentials(tokio_runtime.handle().clone()))
                .unwrap()
        };
        assert!(sdk_credentials(AuthConfig::Default).is_some());
        assert!(sdk_credentials(AuthConfig::NoSigning).is_none());
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
