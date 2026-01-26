use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};
use std::sync::Arc;
use std::time::{Duration, Instant};

use mountpoint_s3_client::config::{Allocator, EndpointConfig, S3ClientConfig, Uri};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::{Prefetcher, PrefetcherConfig};
use mountpoint_s3_fs::upload::{Uploader, UploaderConfig};
use mountpoint_s3_fs::{Runtime, ServerSideEncryption};
use rand::{Rng, SeedableRng};
use rand_pcg::Pcg64;
use thiserror::Error;

use crate::config::{AccessPattern, ResolvedJobConfig, WorkloadType};
use crate::results::{ErrorInfo, JobResult};

#[derive(Debug, Error)]
pub enum ExecutionError {
    #[error("Job execution failed: {0}")]
    ExecutionFailed(String),

    #[error("S3 operation failed: {0}")]
    S3Error(String),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),

    #[error("Resource initialization failed: {0}")]
    ResourceInitError(String),
}

pub struct SharedResources {
    pub client: Arc<S3CrtClient>,
    pub uploader: Uploader<Arc<S3CrtClient>>,
    pub prefetcher: Prefetcher<Arc<S3CrtClient>>,
}

impl SharedResources {
    pub fn new(
        client: Arc<S3CrtClient>,
        uploader: Uploader<Arc<S3CrtClient>>,
        prefetcher: Prefetcher<Arc<S3CrtClient>>,
    ) -> Self {
        Self {
            client,
            uploader,
            prefetcher,
        }
    }
}

pub fn create_shared_resources(first_job: &ResolvedJobConfig) -> Result<SharedResources, ExecutionError> {
    let max_memory_target = first_job.max_memory_target;

    let pool = PagedPool::new_with_candidate_sizes([first_job.read_part_size, first_job.write_part_size]);

    let mut endpoint_config = EndpointConfig::new(&first_job.region);
    if let Some(url) = &first_job.endpoint_url {
        let endpoint_uri = Uri::new_from_str(&Allocator::default(), url)
            .map_err(|e| ExecutionError::ResourceInitError(format!("Failed to parse endpoint URL: {}", e)))?;
        endpoint_config = endpoint_config.endpoint(endpoint_uri);
    }

    let mut client_config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .read_backpressure(true)
        .initial_read_window(first_job.read_part_size)
        .write_part_size(first_job.write_part_size)
        .memory_pool(pool.clone());

    if let Some(throughput_gbps) = first_job.throughput_target_gbps {
        client_config = client_config.throughput_target_gbps(throughput_gbps);
    }

    if !first_job.bind.is_empty() {
        client_config = client_config.network_interface_names(first_job.bind.clone());
    }

    let client = Arc::new(
        S3CrtClient::new(client_config)
            .map_err(|e| ExecutionError::ResourceInitError(format!("Failed to create S3 client: {}", e)))?,
    );

    let memory_target_bytes = (max_memory_target * 1024 * 1024) as u64;
    let mem_limiter = Arc::new(MemoryLimiter::new(pool.clone(), memory_target_bytes));

    let runtime = Runtime::new(client.event_loop_group());

    let server_side_encryption =
        ServerSideEncryption::new(first_job.sse_type.clone(), first_job.sse_kms_key_id.clone());

    let uploader = Uploader::new(
        client.clone(),
        runtime.clone(),
        pool.clone(),
        mem_limiter.clone(),
        UploaderConfig::new(first_job.write_part_size)
            .server_side_encryption(server_side_encryption)
            .default_checksum_algorithm(first_job.checksum_algorithm.clone()),
    );

    let prefetcher =
        Prefetcher::default_builder(client.clone()).build(runtime, mem_limiter, PrefetcherConfig::default());

    Ok(SharedResources::new(client, uploader, prefetcher))
}

pub async fn execute_read_job(
    config: &ResolvedJobConfig,
    resources: &SharedResources,
) -> Result<JobResult, ExecutionError> {
    if config.workload_type != WorkloadType::Read {
        return Err(ExecutionError::ExecutionFailed(
            "execute_read_job can only execute read workloads".to_string(),
        ));
    }

    match config.access_pattern {
        AccessPattern::Sequential => execute_sequential_read(config, resources).await,
        AccessPattern::Random => execute_random_read(config, resources).await,
    }
}

pub async fn execute_write_job(
    config: &ResolvedJobConfig,
    resources: &SharedResources,
) -> Result<JobResult, ExecutionError> {
    if config.workload_type != WorkloadType::Write {
        return Err(ExecutionError::ExecutionFailed(
            "execute_write_job can only execute write workloads".to_string(),
        ));
    }

    let uploader = &resources.uploader;
    if config.incremental_upload {
        execute_incremental_upload(config, uploader).await
    } else {
        execute_multipart_upload(config, uploader).await
    }
}

async fn execute_sequential_read(
    config: &ResolvedJobConfig,
    resources: &SharedResources,
) -> Result<JobResult, ExecutionError> {
    let client = &resources.client;
    let prefetcher = &resources.prefetcher;
    let bucket = &config.bucket;
    let object_key = &config.object_key;

    let head_result = client
        .head_object(bucket, object_key, &HeadObjectParams::new())
        .await
        .map_err(|e| ExecutionError::S3Error(format!("HeadObject failed: {}", e)))?;

    let object_id = ObjectId::new(object_key.to_string(), head_result.etag);
    let size = head_result.size;

    let mut total_bytes = 0u64;
    let mut errors = Vec::new();

    let job_start = Instant::now();
    let max_duration = config.max_duration.map(Duration::from_secs);

    for _iteration in 0..config.iterations {
        if let Some(max_dur) = max_duration {
            if job_start.elapsed() >= max_dur {
                break;
            }
        }

        let mut request = prefetcher.prefetch(bucket.to_string(), object_id.clone(), size);
        let mut offset = 0;
        while offset < size {
            if let Some(max_dur) = max_duration {
                if job_start.elapsed() >= max_dur {
                    break;
                }
            }

            let read_size = std::cmp::min(config.read_size as u64, size - offset);

            match request.read(offset, read_size as usize).await {
                Ok(bytes) => {
                    let bytes_read = bytes.len() as u64;

                    offset += bytes_read;
                    total_bytes += bytes_read;
                }
                Err(e) => {
                    errors.push(ErrorInfo {
                        error_type: "ReadError".to_string(),
                        count: 1,
                        message: format!("Read failed at offset {}: {}", offset, e),
                    });
                    break;
                }
            }
        }
    }

    let duration = job_start.elapsed();
    let elapsed_seconds = duration.as_secs_f64();

    Ok(JobResult {
        job_name: config.name.clone(),
        workload_type: "read".to_string(),
        iterations_completed: config.iterations,
        total_bytes,
        elapsed_seconds,
        errors,
    })
}

async fn execute_random_read(
    config: &ResolvedJobConfig,
    resources: &SharedResources,
) -> Result<JobResult, ExecutionError> {
    let client = &resources.client;
    let prefetcher = &resources.prefetcher;
    let bucket = &config.bucket;
    let object_key = &config.object_key;

    let head_result = client
        .head_object(bucket, object_key, &HeadObjectParams::new())
        .await
        .map_err(|e| ExecutionError::S3Error(format!("HeadObject failed: {}", e)))?;

    let object_id = ObjectId::new(object_key.to_string(), head_result.etag);
    let size = head_result.size;

    let mut total_bytes = 0u64;
    let mut errors = Vec::new();

    let job_start = Instant::now();
    let max_duration = config.max_duration.map(Duration::from_secs);
    let iteration_duration = config.iteration_duration.map(Duration::from_secs);

    for iteration in 0..config.iterations {
        if let Some(max_dur) = max_duration {
            if job_start.elapsed() >= max_dur {
                break;
            }
        }

        let iteration_start = Instant::now();
        let mut request = prefetcher.prefetch(bucket.to_string(), object_id.clone(), size);

        // Create a unique, deterministic seed by combining randseed with object_id hash
        // and iteration. This ensures each object/iteration has a different but reproducible
        // random access pattern.
        let randseed = config.randseed;
        let mut hasher = DefaultHasher::new();
        object_id.hash(&mut hasher);
        let object_hash = hasher.finish();
        let seed = randseed.wrapping_add(object_hash).wrapping_add(iteration as u64);
        let mut rng = Pcg64::seed_from_u64(seed);

        let max_offset = size.saturating_sub(1);
        let mut bytes_read_this_iteration = 0u64;

        // Determine exit condition based on iteration_duration
        let should_continue = |bytes_read: u64, iteration_start: &Instant| -> bool {
            if let Some(iter_dur) = iteration_duration {
                // Time-based: continue until iteration duration elapsed
                iteration_start.elapsed() < iter_dur
            } else {
                // Byte-based: read approximately one file's worth of data
                bytes_read < size
            }
        };

        // Read approximately one file's worth of data using random offsets
        // Note: This intentionally allows overlapping reads, which is acceptable for now.
        while should_continue(bytes_read_this_iteration, &iteration_start) {
            if let Some(max_dur) = max_duration {
                if job_start.elapsed() >= max_dur {
                    break;
                }
            }

            let offset = rng.random_range(0..=max_offset);
            let read_size = std::cmp::min(config.read_size as u64, size - offset);

            match request.read(offset, read_size as usize).await {
                Ok(bytes) => {
                    let bytes_read = bytes.len() as u64;

                    bytes_read_this_iteration += bytes_read;
                    total_bytes += bytes_read;
                }
                Err(e) => {
                    errors.push(ErrorInfo {
                        error_type: "ReadError".to_string(),
                        count: 1,
                        message: format!("Read failed at offset {}: {}", offset, e),
                    });
                    break;
                }
            }
        }
    }

    let duration = job_start.elapsed();
    let elapsed_seconds = duration.as_secs_f64();

    Ok(JobResult {
        job_name: config.name.clone(),
        workload_type: "read".to_string(),
        iterations_completed: config.iterations,
        total_bytes,
        elapsed_seconds,
        errors,
    })
}

async fn execute_multipart_upload(
    config: &ResolvedJobConfig,
    uploader: &Uploader<Arc<S3CrtClient>>,
) -> Result<JobResult, ExecutionError> {
    let bucket = &config.bucket;
    let object_key = &config.object_key;

    let mut total_bytes = 0u64;
    let mut errors = Vec::new();

    let job_start = Instant::now();
    let max_duration = config.max_duration.map(Duration::from_secs);

    for _iteration in 0..config.iterations {
        if let Some(max_dur) = max_duration {
            if job_start.elapsed() >= max_dur {
                break;
            }
        }

        let data = vec![0xab; config.object_size as usize];
        let mut request = match uploader.start_atomic_upload(bucket.to_string(), object_key.to_string()) {
            Ok(req) => req,
            Err(e) => {
                errors.push(ErrorInfo {
                    error_type: "StartUploadError".to_string(),
                    count: 1,
                    message: format!("Failed to start upload: {}", e),
                });
                continue;
            }
        };

        let mut offset = 0;
        while offset < data.len() {
            if let Some(max_dur) = max_duration {
                if job_start.elapsed() >= max_dur {
                    break;
                }
            }

            let chunk_size = std::cmp::min(config.write_size, data.len() - offset);
            let chunk = &data[offset..offset + chunk_size];

            match request.write(offset as i64, chunk).await {
                Ok(bytes_written) => {
                    offset += bytes_written;
                    total_bytes += bytes_written as u64;
                }
                Err(e) => {
                    errors.push(ErrorInfo {
                        error_type: "WriteError".to_string(),
                        count: 1,
                        message: format!("Write failed at offset {}: {}", offset, e),
                    });
                    break;
                }
            }
        }

        match request.complete().await {
            Ok(_result) => {
                // Upload completed successfully
            }
            Err(e) => {
                errors.push(ErrorInfo {
                    error_type: "CompleteError".to_string(),
                    count: 1,
                    message: format!("Failed to complete upload: {}", e),
                });
            }
        }
    }

    let duration = job_start.elapsed();
    let elapsed_seconds = duration.as_secs_f64();

    Ok(JobResult {
        job_name: config.name.clone(),
        workload_type: "write".to_string(),
        iterations_completed: config.iterations,
        total_bytes,
        elapsed_seconds,
        errors,
    })
}

async fn execute_incremental_upload(
    config: &ResolvedJobConfig,
    uploader: &Uploader<Arc<S3CrtClient>>,
) -> Result<JobResult, ExecutionError> {
    let bucket = &config.bucket;
    let object_key = &config.object_key;

    let mut total_bytes = 0u64;
    let mut errors = Vec::new();

    let job_start = Instant::now();
    let max_duration = config.max_duration.map(Duration::from_secs);

    for _iteration in 0..config.iterations {
        if let Some(max_dur) = max_duration {
            if job_start.elapsed() >= max_dur {
                break;
            }
        }

        let data = vec![0xab; config.object_size as usize];
        let mut request = uploader.start_incremental_upload(bucket.to_string(), object_key.to_string(), 0, None);

        let mut offset = 0u64;
        while offset < data.len() as u64 {
            if let Some(max_dur) = max_duration {
                if job_start.elapsed() >= max_dur {
                    break;
                }
            }

            let chunk_size = std::cmp::min(config.write_size, (data.len() as u64 - offset) as usize);
            let chunk = &data[offset as usize..(offset as usize + chunk_size)];

            match request.write(offset, chunk).await {
                Ok(_) => {
                    offset += chunk_size as u64;
                    total_bytes += chunk_size as u64;
                }
                Err(e) => {
                    errors.push(ErrorInfo {
                        error_type: "IncrementalWriteError".to_string(),
                        count: 1,
                        message: format!("Incremental write failed at offset {}: {}", offset, e),
                    });
                    break;
                }
            }
        }

        // Complete the upload
        match request.complete().await {
            Ok(_result) => {
                // Upload completed successfully
            }
            Err(e) => {
                errors.push(ErrorInfo {
                    error_type: "CompleteError".to_string(),
                    count: 1,
                    message: format!("Failed to complete upload: {}", e),
                });
            }
        }
    }

    let duration = job_start.elapsed();
    let elapsed_seconds = duration.as_secs_f64();

    Ok(JobResult {
        job_name: config.name.clone(),
        workload_type: "write".to_string(),
        iterations_completed: config.iterations,
        total_bytes,
        elapsed_seconds,
        errors,
    })
}
