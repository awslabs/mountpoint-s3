use serde::Deserialize;
use std::collections::HashMap;
use std::path::Path;
use std::time::Duration;
use thiserror::Error;

use crate::test_object_generator::generate_test_objects;

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
    /// Memory monitoring polling interval. Default: 100ms.
    #[serde(default, with = "humantime_serde")]
    pub memory_monitor_interval: Option<Duration>,

    // === Job defaults (optional, overridable per job) ===
    #[serde(flatten)]
    pub job_defaults: JobConfig,
}

/// Job-specific configuration parameters (can override global defaults)
#[derive(Debug, Clone, Deserialize, PartialEq)]
pub struct JobConfig {
    /// Number of parallel jobs to spawn. Default: 1.
    pub numjobs: Option<usize>,
    pub workload_type: Option<WorkloadType>,
    pub object_key: Option<String>,
    pub object_size: Option<u64>,
    pub access_pattern: Option<AccessPattern>,
    pub read_size: Option<usize>,
    pub write_size: Option<usize>,
    pub randseed: Option<u64>,
    pub incremental_upload: Option<bool>,
    /// Number of iterations in each job
    pub iterations: Option<usize>,
    /// Max duration of jobs
    #[serde(default, with = "humantime_serde")]
    pub max_duration: Option<Duration>,
    /// Duration per iteration. Used in random read access pattern only.
    /// If specified then job is time-based instead of reading until total bytes equal to file size.
    #[serde(default, with = "humantime_serde")]
    pub iteration_duration: Option<Duration>,
    /// Whether to generate test objects before running read benchmarks.
    /// Only applies to read workloads. Default: true.
    pub generate_object: Option<bool>,
}

/// Configuration for a single job execution
/// Contains settings that vary per job
#[derive(Debug, Clone, PartialEq)]
pub struct ResolvedJobConfig {
    pub name: String,
    pub workload_type: WorkloadType,
    pub bucket: String,
    pub object_key: String,
    pub object_size: u64,
    pub access_pattern: AccessPattern,
    pub read_size: usize,
    pub write_size: usize,
    pub randseed: u64,
    pub incremental_upload: bool,
    pub iterations: usize,
    pub max_duration: Option<Duration>,
    pub iteration_duration: Option<Duration>,
    pub generate_object: bool,
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

/// Prepare jobs by resolving configuration inheritance and validating
pub async fn prepare_jobs(config: Config) -> Result<Vec<ResolvedJobConfig>, ConfigError> {
    // Validate global network interfaces if specified
    if let Some(bind) = &config.global.bind {
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

    let mut resolved_jobs = Vec::new();

    for (job_name, job_config) in config.jobs {
        // Determine numjobs value (job-specific overrides global, default to 1)
        let numjobs = job_config.numjobs.or(config.global.job_defaults.numjobs).unwrap_or(1);

        // Validate numjobs constraint (must be >= 1)
        if numjobs < 1 {
            return Err(ConfigError::Validation(format!(
                "Job '{}': Invalid value for 'numjobs': must be at least 1",
                job_name
            )));
        }

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

    generate_test_objects(&resolved_jobs, &config.global)
        .await
        .map_err(|e| ConfigError::Validation(format!("Object generation failed: {}", e)))?;

    Ok(resolved_jobs)
}

/// Merge global and job-specific configuration, applying defaults
/// Precedence order: Job-specific > Global > Built-in default
fn merge_and_resolve(job_name: &str, job: &JobConfig, global: &GlobalConfig) -> Result<ResolvedJobConfig, ConfigError> {
    // workload_type: Required field
    let workload_type = job.workload_type.or(global.job_defaults.workload_type).ok_or_else(|| {
        ConfigError::Validation(format!(
            "Job '{}': Missing required field 'workload_type' (must be in job or global config)",
            job_name
        ))
    })?;

    let bucket = global.bucket.clone();

    // object_key: Optional, auto-generated if not specified
    let object_key = job
        .object_key
        .clone()
        .or_else(|| global.job_defaults.object_key.clone())
        .unwrap_or_else(|| format!("{}.bin", job_name));

    // object_size: Optional with default
    let object_size = job
        .object_size
        .or(global.job_defaults.object_size)
        .unwrap_or(1024 * 1024 * 1024); // 1 GiB default

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
    let incremental_upload = job
        .incremental_upload
        .or(global.job_defaults.incremental_upload)
        .unwrap_or(false);

    // iterations: Optional with default
    let iterations = job.iterations.or(global.job_defaults.iterations).unwrap_or(1); // 1 iteration default

    // max_duration: Optional, no default
    let max_duration = job.max_duration.or(global.job_defaults.max_duration);

    // iteration_duration: Optional, no default (random read only)
    let iteration_duration = job.iteration_duration.or(global.job_defaults.iteration_duration);

    // generate_object: Optional with default of true
    let generate_object = job
        .generate_object
        .or(global.job_defaults.generate_object)
        .unwrap_or(true);

    Ok(ResolvedJobConfig {
        name: job_name.to_string(),
        workload_type,
        bucket,
        object_key,
        object_size,
        access_pattern,
        read_size,
        write_size,
        randseed,
        incremental_upload,
        iterations,
        max_duration,
        iteration_duration,
        generate_object,
    })
}
