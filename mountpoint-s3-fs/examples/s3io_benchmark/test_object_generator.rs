use std::error::Error;
use std::fmt;
use std::sync::Arc;

use mountpoint_s3_client::config::{Allocator, EndpointConfig, S3ClientConfig, Uri};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::upload::{Uploader, UploaderConfig};
use mountpoint_s3_fs::{Runtime, ServerSideEncryption};

use crate::config::{ChecksumAlgorithm, GlobalConfig, ResolvedJobConfig, SseType, WorkloadType};

#[derive(Debug)]
pub enum ObjectGenerationError {
    Setup(String),
    Upload { key: String, reason: String },
}

impl fmt::Display for ObjectGenerationError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Setup(msg) => write!(f, "Setup failed: {}", msg),
            Self::Upload { key, reason } => write!(f, "Upload failed for '{}': {}", key, reason),
        }
    }
}

impl Error for ObjectGenerationError {}

pub async fn generate_test_objects(
    jobs: &[ResolvedJobConfig],
    global: &GlobalConfig,
) -> Result<(), ObjectGenerationError> {
    let jobs_requiring_generation: Vec<&ResolvedJobConfig> = jobs
        .iter()
        .filter(|job| job.workload_type == WorkloadType::Read && job.generate_object)
        .collect();

    if jobs_requiring_generation.is_empty() {
        return Ok(());
    }

    let uploader = create_uploader(global)?;

    for job in jobs_requiring_generation {
        upload_test_object(&uploader, &job.bucket, &job.object_key, job.object_size, job.write_size).await?;
        eprintln!(
            "Generated test object for job '{}': key={}, size={} bytes",
            job.name, job.object_key, job.object_size
        );
    }

    Ok(())
}

fn create_uploader(global: &GlobalConfig) -> Result<Uploader<S3CrtClient>, ObjectGenerationError> {
    let region = global.region.as_deref().unwrap_or("us-east-1");
    let write_part_size = global.write_part_size.unwrap_or(8 * 1024 * 1024);

    let max_memory_target = global.max_memory_target.unwrap_or_else(|| {
        use sysinfo::{RefreshKind, System};
        let sys = System::new_with_specifics(RefreshKind::everything());
        ((sys.total_memory() as f64 * 0.95) / (1024.0 * 1024.0)) as usize
    });

    let memory_target_bytes = (max_memory_target * 1024 * 1024) as u64;
    let bind = global.bind.clone().unwrap_or_default();

    let sse_type = global.sse.map(|sse| match sse {
        SseType::Aes256 => "AES256".to_string(),
        SseType::AwsKms => "aws:kms".to_string(),
    });

    let checksum_algorithm = match global.checksum_algorithm.unwrap_or(ChecksumAlgorithm::Crc32c) {
        ChecksumAlgorithm::Crc32c => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Crc32c),
        ChecksumAlgorithm::Crc32 => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Crc32),
        ChecksumAlgorithm::Sha1 => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Sha1),
        ChecksumAlgorithm::Sha256 => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Sha256),
        ChecksumAlgorithm::Off => None,
    };

    let pool = PagedPool::new_with_candidate_sizes([write_part_size]);

    let mut endpoint_config = EndpointConfig::new(region);
    if let Some(url) = &global.endpoint_url {
        let endpoint_uri = Uri::new_from_str(&Allocator::default(), url)
            .map_err(|e| ObjectGenerationError::Setup(format!("Failed to parse endpoint URL: {}", e)))?;
        endpoint_config = endpoint_config.endpoint(endpoint_uri);
    }

    let mut client_config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .read_backpressure(true)
        .write_part_size(write_part_size)
        .memory_pool(pool.clone());

    if let Some(throughput_gbps) = global.throughput_target_gbps {
        client_config = client_config.throughput_target_gbps(throughput_gbps);
    }

    if !bind.is_empty() {
        client_config = client_config.network_interface_names(bind);
    }

    let client = S3CrtClient::new(client_config)
        .map_err(|e| ObjectGenerationError::Setup(format!("Failed to create S3 client: {}", e)))?;

    let mem_limiter = Arc::new(MemoryLimiter::new(pool.clone(), memory_target_bytes));
    let runtime = Runtime::new(client.event_loop_group());
    let server_side_encryption = ServerSideEncryption::new(sse_type, global.sse_kms_key_id.clone());

    Ok(Uploader::new(
        client.clone(),
        runtime,
        pool,
        mem_limiter,
        UploaderConfig::new(write_part_size)
            .server_side_encryption(server_side_encryption)
            .default_checksum_algorithm(checksum_algorithm),
    ))
}

async fn upload_test_object(
    uploader: &Uploader<S3CrtClient>,
    bucket: &str,
    key: &str,
    size: u64,
    write_size: usize,
) -> Result<(), ObjectGenerationError> {
    let mut request = uploader
        .start_atomic_upload(bucket.to_string(), key.to_string())
        .map_err(|e| ObjectGenerationError::Upload {
            key: key.to_string(),
            reason: format!("Failed to start upload: {}", e),
        })?;

    let contents = vec![0xab; write_size];
    let mut offset = 0u64;

    while offset < size {
        let remaining = size - offset;
        let chunk_size = remaining.min(write_size as u64) as usize;

        let bytes_written = request
            .write(offset as i64, &contents[..chunk_size])
            .await
            .map_err(|e| ObjectGenerationError::Upload {
                key: key.to_string(),
                reason: format!("Write failed at offset {}: {}", offset, e),
            })?;

        offset += bytes_written as u64;
    }

    request.complete().await.map_err(|e| ObjectGenerationError::Upload {
        key: key.to_string(),
        reason: format!("Failed to complete upload: {}", e),
    })?;

    Ok(())
}
