use mountpoint_s3_client::types::ChecksumAlgorithm as ClientChecksumAlgorithm;
use serde::Deserialize;
use std::collections::HashMap;
use std::path::Path;
use thiserror::Error;

/// Top-level configuration structure
#[derive(Debug, Clone, Deserialize, PartialEq)]
pub struct Config {
    pub global: GlobalConfig,
    pub jobs: HashMap<String, JobConfig>,
}

/// Global configuration parameters shared across all jobs
#[derive(Debug, Clone, Deserialize, PartialEq)]
pub struct GlobalConfig {
    // === Infrastructure (required or optional, not overridable) ===
    pub bucket: String,
    pub region: Option<String>,
    pub endpoint_url: Option<String>,
    pub throughput_target_gbps: Option<f64>,
    pub max_memory_target: Option<usize>, // MiB
    pub bind: Option<Vec<String>>,
    pub output_file: Option<String>,
    pub read_part_size: Option<usize>,
    pub write_part_size: Option<usize>,
    pub sse: Option<SseType>,
    pub sse_kms_key_id: Option<String>,
    pub checksum_algorithm: Option<ChecksumAlgorithm>,

    // === Job defaults (optional, overridable per job) ===
    #[serde(flatten)]
    pub job_defaults: JobConfig,
}

/// Job-specific configuration parameters (can override global defaults)
#[derive(Debug, Clone, Deserialize, PartialEq)]
pub struct JobConfig {
    pub numjobs: Option<usize>, // Number of parallel jobs to spawn. Default: 1.
    pub workload_type: Option<WorkloadType>,
    pub object_key: Option<String>,
    pub object_size: Option<u64>,
    pub access_pattern: Option<AccessPattern>,
    pub read_size: Option<usize>,
    pub write_size: Option<usize>,
    pub randseed: Option<u64>,
    pub incremental_upload: Option<bool>,
    pub iterations: Option<usize>, // Number of iterations in each job
    pub max_duration: Option<u64>, // max duration of jobs in seconds
    // Seconds per iteration. Used in random read access pattern only.
    // If specified then job is time-based instead of reading until total bytes equal to file size.
    pub iteration_duration: Option<u64>,
}

/// Resolved job configuration with all parameters determined
/// TODO: This is a lot of repetition, consider refactoring (e.g. using macros).
#[derive(Debug, Clone, PartialEq)]
pub struct ResolvedJobConfig {
    pub name: String,
    pub workload_type: WorkloadType,
    pub object_key: String,
    pub object_size: u64,
    pub access_pattern: AccessPattern,
    pub read_size: usize,
    pub read_part_size: usize,
    pub write_size: usize,
    pub randseed: u64,
    pub incremental_upload: bool,
    pub bucket: String,
    pub region: String,
    pub endpoint_url: Option<String>,
    pub throughput_target_gbps: Option<f64>,
    pub max_memory_target: usize,
    pub iterations: usize,
    pub max_duration: Option<u64>,
    pub iteration_duration: Option<u64>,
    pub bind: Vec<String>,
    pub write_part_size: usize,
    pub sse_type: Option<String>,
    pub sse_kms_key_id: Option<String>,
    pub checksum_algorithm: Option<ClientChecksumAlgorithm>,
}

/// Workload type: read or write
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum WorkloadType {
    Read,
    Write,
}

/// Access pattern for read operations
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum AccessPattern {
    Sequential,
    Random,
}

/// Server-side encryption type
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
pub enum SseType {
    #[serde(rename = "AES256")]
    Aes256,
    #[serde(rename = "aws:kms")]
    AwsKms,
}

/// Checksum algorithm for data integrity
#[derive(Debug, Clone, Copy, PartialEq, Eq, Deserialize)]
pub enum ChecksumAlgorithm {
    #[serde(rename = "off")]
    Off,
    #[serde(rename = "CRC32C")]
    Crc32c,
    #[serde(rename = "CRC32")]
    Crc32,
    #[serde(rename = "SHA1")]
    Sha1,
    #[serde(rename = "SHA256")]
    Sha256,
}

/// Errors that can occur during configuration parsing and validation
#[derive(Debug, Error)]
pub enum ConfigError {
    #[error("Failed to parse TOML configuration: {0}")]
    Parse(#[from] toml::de::Error),

    #[error("Configuration validation failed: {0}")]
    Validation(String),

    #[error("I/O error: {0}")]
    Io(#[from] std::io::Error),
}

/// Parse TOML configuration from a file
pub fn parse_config_file(path: &Path) -> Result<Config, ConfigError> {
    let content = std::fs::read_to_string(path)?;
    parse_config_string(&content)
}

/// Parse TOML configuration from a string
pub fn parse_config_string(content: &str) -> Result<Config, ConfigError> {
    Ok(toml::from_str(content)?)
}

/// Validate the entire configuration
pub fn validate_config(config: &Config) -> Result<(), ConfigError> {
    // Validate each job
    for (job_name, job_config) in &config.jobs {
        validate_job(job_config, &config.global)
            .map_err(|e| ConfigError::Validation(format!("Job '{}': {}", job_name, e)))?;
    }

    Ok(())
}

/// Validate a single job configuration
pub fn validate_job(job: &JobConfig, global: &GlobalConfig) -> Result<(), ConfigError> {
    // Validate required field: workload_type (must be in job or global)
    let workload_type = job.workload_type.or(global.job_defaults.workload_type);
    if workload_type.is_none() {
        return Err(ConfigError::Validation(
            "Missing required field 'workload_type' (must be in job or global config)".to_string(),
        ));
    }

    // Validate network interfaces if specified (global only)
    if let Some(bind) = &global.bind {
        if bind.is_empty() {
            return Err(ConfigError::Validation(
                "Invalid value for 'bind' in global config: must contain at least one network interface".to_string(),
            ));
        }

        for interface in bind {
            if interface.is_empty() {
                return Err(ConfigError::Validation(
                    "Invalid value for 'bind' in global config: interface names cannot be empty".to_string(),
                ));
            }
        }
    }

    // Validate numjobs constraint (must be >= 1 if specified)
    let numjobs = job.numjobs.or(global.job_defaults.numjobs);
    if let Some(numjobs_val) = numjobs
        && numjobs_val < 1
    {
        return Err(ConfigError::Validation(
            "Invalid value for 'numjobs': must be at least 1".to_string(),
        ));
    }

    Ok(())
}

/// Prepare jobs by resolving configuration inheritance
pub fn prepare_jobs(config: Config) -> Result<Vec<ResolvedJobConfig>, ConfigError> {
    let mut resolved_jobs = Vec::new();

    for (job_name, job_config) in config.jobs {
        // Determine numjobs value (job-specific overrides global, default to 1)
        let numjobs = job_config.numjobs.or(config.global.job_defaults.numjobs).unwrap_or(1);

        if numjobs == 1 {
            // Single job
            let resolved = merge_and_resolve(&job_name, &job_config, &config.global)?;
            resolved_jobs.push(resolved);
        } else {
            // Multiple jobs: create duplicates with indexed names
            for job_index in 0..numjobs {
                let indexed_name = format!("{}_{}", job_name, job_index);
                let resolved = merge_and_resolve(&indexed_name, &job_config, &config.global)?;

                // Note: If object_key was explicitly specified, all jobs use the same object_key.
                // If object_key was auto-generated, it's already unique (based on indexed_name).

                resolved_jobs.push(resolved);
            }
        }
    }

    // TODO: Generate/upload test objects for read workloads

    Ok(resolved_jobs)
}

/// Merge global and job-specific configuration, applying defaults
/// Precedence order: Job-specific > Global > Built-in default
fn merge_and_resolve(job_name: &str, job: &JobConfig, global: &GlobalConfig) -> Result<ResolvedJobConfig, ConfigError> {
    // === Infrastructure parameters (global-only, not overridable) ===
    let bucket = global.bucket.clone();

    let region = global.region.clone().unwrap_or_else(|| "us-east-1".to_string()); // Default to us-east-1

    let endpoint_url = global.endpoint_url.clone();
    let throughput_target_gbps = global.throughput_target_gbps;

    // Default to 95% of total system memory
    let max_memory_target = if let Some(target) = global.max_memory_target {
        target
    } else {
        use sysinfo::{RefreshKind, System};
        let sys = System::new_with_specifics(RefreshKind::everything());
        ((sys.total_memory() as f64 * 0.95) / (1024.0 * 1024.0)) as usize // Convert bytes to MiB
    };

    let bind = global.bind.clone().unwrap_or_default(); // Empty vec default

    // === Workload parameters (job overrides global, with defaults) ===

    // workload_type: Required field
    let workload_type = job.workload_type.or(global.job_defaults.workload_type).ok_or_else(|| {
        ConfigError::Validation(format!(
            "Job '{}': Missing required field 'workload_type' (must be in job or global config)",
            job_name
        ))
    })?;

    // object_key: Optional, auto-generated if not specified
    let object_key = job
        .object_key
        .clone()
        .or_else(|| global.job_defaults.object_key.clone())
        .unwrap_or_else(|| format!("{}.bin", job_name));

    // object_size: Optional with default
    let object_size = job.object_size.or(global.job_defaults.object_size).unwrap_or(1024 * 1024 * 1024); // 1 GiB default

    // access_pattern: Optional with default
    let access_pattern = job
        .access_pattern
        .or(global.job_defaults.access_pattern)
        .unwrap_or(AccessPattern::Sequential); // Default to Sequential

    // I/O sizes: Optional with defaults
    let read_size = job.read_size.or(global.job_defaults.read_size).unwrap_or(128 * 1024); // 128 KiB default

    let write_size = job.write_size.or(global.job_defaults.write_size).unwrap_or(128 * 1024); // 128 KiB default

    // randseed: Optional with default (matching prefetch_benchmark)
    let randseed = job.randseed.or(global.job_defaults.randseed).unwrap_or(1); // Default to 1

    // incremental_upload: Optional with default
    let incremental_upload = job.incremental_upload.or(global.job_defaults.incremental_upload).unwrap_or(false);

    // === Global uploader configuration (same for all jobs) ===

    // read_part_size: Optional with default (used during S3 client initialization)
    let read_part_size = global.read_part_size.unwrap_or(8 * 1024 * 1024); // 8 MiB default

    // write_part_size: Optional with default
    let write_part_size = global.write_part_size.unwrap_or(8 * 1024 * 1024); // 8 MiB default

    // sse: Convert to String format expected by ServerSideEncryption
    let sse_type = global.sse.map(|sse| match sse {
        SseType::Aes256 => "AES256".to_string(),
        SseType::AwsKms => "aws:kms".to_string(),
    });

    // sse_kms_key_id: Optional, no default
    let sse_kms_key_id = global.sse_kms_key_id.clone();

    // checksum_algorithm: Convert to client ChecksumAlgorithm type
    let checksum_algorithm = match global.checksum_algorithm.unwrap_or(ChecksumAlgorithm::Crc32c) {
        ChecksumAlgorithm::Crc32c => Some(ClientChecksumAlgorithm::Crc32c),
        ChecksumAlgorithm::Crc32 => Some(ClientChecksumAlgorithm::Crc32),
        ChecksumAlgorithm::Sha1 => Some(ClientChecksumAlgorithm::Sha1),
        ChecksumAlgorithm::Sha256 => Some(ClientChecksumAlgorithm::Sha256),
        ChecksumAlgorithm::Off => None,
    };

    // iterations: Optional with default
    let iterations = job.iterations.or(global.job_defaults.iterations).unwrap_or(1); // 1 iteration default

    // max_duration: Optional, no default
    let max_duration = job.max_duration.or(global.job_defaults.max_duration);

    // iteration_duration: Optional, no default (random read only)
    let iteration_duration = job.iteration_duration.or(global.job_defaults.iteration_duration);

    Ok(ResolvedJobConfig {
        name: job_name.to_string(),
        workload_type,
        object_key,
        object_size,
        access_pattern,
        read_size,
        read_part_size,
        write_size,
        randseed,
        incremental_upload,
        bucket,
        region,
        endpoint_url,
        throughput_target_gbps,
        max_memory_target,
        iterations,
        max_duration,
        iteration_duration,
        bind,
        write_part_size,
        sse_type,
        sse_kms_key_id,
        checksum_algorithm,
    })
}
