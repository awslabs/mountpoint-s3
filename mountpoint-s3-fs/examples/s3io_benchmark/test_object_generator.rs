use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::types::HeadObjectParams;
use thiserror::Error;

use crate::config::{GlobalConfig, ResolvedJobConfig, WorkloadType};
use crate::executor::Executor;

/// S3 multipart upload has a hard limit of 10,000 parts per upload
/// https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html
const MAX_PARTS: u64 = 10_000;

#[derive(Debug, Error)]
pub enum ObjectGenerationError {
    #[error("Setup failed: {0}")]
    Setup(String),
    #[error("Upload failed for '{key}': {reason}")]
    Upload { key: String, reason: String },
}

// Note: This intentionally creates a separate Executor instance to ensure
// test object generation doesn't influence benchmark jobs
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

    // Override write_part_size if any job would exceed S3's 10,000 part limit
    let mut adjusted_global = global.clone();
    let max_object_size = jobs_requiring_generation
        .iter()
        .map(|job| job.object_size)
        .max()
        .unwrap_or(0);
    let default_write_part_size = global.write_part_size.unwrap_or(8 * 1024 * 1024) as u64;
    let min_required_part_size = max_object_size.div_ceil(MAX_PARTS);
    if min_required_part_size > default_write_part_size {
        adjusted_global.write_part_size = Some(min_required_part_size as usize);
        eprintln!(
            "Test Object Generator: Adjusted write_part_size from {} to {} bytes to stay within S3's 10,000 part limit for object size {} bytes",
            default_write_part_size, min_required_part_size, max_object_size
        );
    }

    let executor = Executor::new(&adjusted_global).map_err(|e| ObjectGenerationError::Setup(e.to_string()))?;
    for job in jobs_requiring_generation {
        // Skip generation if object already exists with correct size
        match executor
            .client
            .head_object(&job.bucket, &job.object_key, &HeadObjectParams::new())
            .await
        {
            Ok(head_result) => {
                if head_result.size == job.object_size {
                    eprintln!(
                        "Test object for job '{}' already exists with correct size: key={}, size={} bytes",
                        job.name, job.object_key, job.object_size
                    );
                    continue;
                } else {
                    eprintln!(
                        "Test object for job '{}' exists but has wrong size (expected: {}, actual: {}), re-uploading: key={}",
                        job.name, job.object_size, head_result.size, job.object_key
                    );
                }
            }
            Err(_) => {
                eprintln!(
                    "Test object for job '{}' does not exist, uploading: key={}",
                    job.name, job.object_key
                );
            }
        }

        upload_test_object(&executor, &job.bucket, &job.object_key, job.object_size, job.write_size).await?;
        eprintln!(
            "Generated test object for job '{}': key={}, size={} bytes",
            job.name, job.object_key, job.object_size
        );
    }

    Ok(())
}

async fn upload_test_object(
    executor: &Executor,
    bucket: &str,
    key: &str,
    size: u64,
    write_size: usize,
) -> Result<(), ObjectGenerationError> {
    let mut request = executor
        .uploader
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
