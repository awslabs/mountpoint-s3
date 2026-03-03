use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};
use std::sync::Arc;
use std::time::Instant;

use mountpoint_s3_client::config::{Allocator, EndpointConfig, S3ClientConfig, Uri};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::{Prefetcher, PrefetcherConfig};
use mountpoint_s3_fs::upload::{Uploader, UploaderConfig};
use mountpoint_s3_fs::{Runtime, ServerSideEncryption};
use rand::{RngExt, SeedableRng};
use rand_pcg::Pcg64;
use thiserror::Error;

use crate::config::{AccessPattern, ChecksumAlgorithm, GlobalConfig, ResolvedJobConfig, SseType, WorkloadType};
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

pub struct Executor {
    pub client: S3CrtClient,
    pub uploader: Uploader<S3CrtClient>,
    prefetcher: Prefetcher<S3CrtClient>,
}

impl Executor {
    pub fn new(global: &GlobalConfig) -> Result<Self, ExecutionError> {
        let region = global.region.as_deref().unwrap_or("us-east-1");
        let read_part_size = global.read_part_size.unwrap_or(8 * 1024 * 1024);
        let write_part_size = global.write_part_size.unwrap_or(8 * 1024 * 1024);

        let max_memory_target = global.max_memory_target.unwrap_or_else(|| {
            use sysinfo::{RefreshKind, System};
            let sys = System::new_with_specifics(RefreshKind::everything());
            ((sys.total_memory() as f64 * 0.95) / (1024.0 * 1024.0)) as usize
        });

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

        let pool = PagedPool::new_with_candidate_sizes([read_part_size, write_part_size]);

        let mut endpoint_config = EndpointConfig::new(region);
        if let Some(url) = &global.endpoint_url {
            let endpoint_uri = Uri::new_from_str(&Allocator::default(), url)
                .map_err(|e| ExecutionError::ResourceInitError(format!("Failed to parse endpoint URL: {}", e)))?;
            endpoint_config = endpoint_config.endpoint(endpoint_uri);
        }

        let mut client_config = S3ClientConfig::new()
            .endpoint_config(endpoint_config)
            .read_backpressure(true)
            .initial_read_window(read_part_size)
            .write_part_size(write_part_size)
            .memory_pool(pool.clone());

        if let Some(throughput_gbps) = global.throughput_target_gbps {
            client_config = client_config.throughput_target_gbps(throughput_gbps);
        }

        if !bind.is_empty() {
            client_config = client_config.network_interface_names(bind);
        }

        let client = S3CrtClient::new(client_config)
            .map_err(|e| ExecutionError::ResourceInitError(format!("Failed to create S3 client: {}", e)))?;

        let memory_target_bytes = (max_memory_target * 1024 * 1024) as u64;
        let mem_limiter = Arc::new(MemoryLimiter::new(pool.clone(), memory_target_bytes));

        let runtime = Runtime::new(client.event_loop_group());

        let server_side_encryption = ServerSideEncryption::new(sse_type, global.sse_kms_key_id.clone());

        let uploader = Uploader::new(
            client.clone(),
            runtime.clone(),
            pool.clone(),
            mem_limiter.clone(),
            UploaderConfig::new(write_part_size)
                .server_side_encryption(server_side_encryption)
                .default_checksum_algorithm(checksum_algorithm),
        );

        let prefetcher =
            Prefetcher::default_builder(client.clone()).build(runtime, mem_limiter, PrefetcherConfig::default());

        Ok(Self {
            client,
            uploader,
            prefetcher,
        })
    }

    pub async fn execute_read_job(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
        if config.workload_type != WorkloadType::Read {
            return Err(ExecutionError::ExecutionFailed(
                "execute_read_job can only execute read workloads".to_string(),
            ));
        }

        match config.access_pattern {
            AccessPattern::Sequential => self.execute_sequential_read(config).await,
            AccessPattern::Random => self.execute_random_read(config).await,
        }
    }

    pub async fn execute_write_job(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
        if config.workload_type != WorkloadType::Write {
            return Err(ExecutionError::ExecutionFailed(
                "execute_write_job can only execute write workloads".to_string(),
            ));
        }

        if config.incremental_upload {
            Ok(self.execute_incremental_upload(config).await)
        } else {
            Ok(self.execute_multipart_upload(config).await)
        }
    }

    async fn execute_sequential_read(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
        let client = &self.client;
        let prefetcher = &self.prefetcher;
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
        let mut iterations_completed = 0usize;

        let job_start = Instant::now();
        let max_duration = config.max_duration;

        for _iteration in 0..config.iterations {
            if let Some(max_dur) = max_duration
                && job_start.elapsed() >= max_dur
            {
                break;
            }

            let mut request = prefetcher.prefetch(bucket.to_string(), object_id.clone(), size);
            let mut offset = 0;
            while offset < size {
                if let Some(max_dur) = max_duration
                    && job_start.elapsed() >= max_dur
                {
                    break;
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
                            message: format!("Read failed at offset {}: {}", offset, e),
                        });
                        break;
                    }
                }
            }

            if offset >= size {
                iterations_completed += 1;
            }
        }

        let duration = job_start.elapsed();

        Ok(JobResult {
            job_name: config.name.clone(),
            workload_type: "read".to_string(),
            iterations_completed,
            total_bytes,
            elapsed_seconds: duration,
            errors,
        })
    }

    async fn execute_random_read(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
        let client = &self.client;
        let prefetcher = &self.prefetcher;
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
        let mut iterations_completed = 0usize;

        let job_start = Instant::now();
        let max_duration = config.max_duration;
        let iteration_duration = config.iteration_duration;

        for iteration in 0..config.iterations {
            if let Some(max_dur) = max_duration
                && job_start.elapsed() >= max_dur
            {
                break;
            }

            let iteration_start = Instant::now();
            let mut request = prefetcher.prefetch(bucket.to_string(), object_id.clone(), size);

            // Create a unique, deterministic seed by combining randseed with object_id hash
            // and iteration. This ensures each object/iteration has a different but reproducible
            // random access pattern.
            let randseed = config.randseed;
            let mut hasher = DefaultHasher::new();
            randseed.hash(&mut hasher);
            object_id.hash(&mut hasher);
            iteration.hash(&mut hasher);
            let seed = hasher.finish();
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

            let mut completed_successfully = true;
            let mut timed_out = false;
            // Note: This intentionally allows overlapping reads, which is acceptable for now.
            while should_continue(bytes_read_this_iteration, &iteration_start) {
                if let Some(max_dur) = max_duration
                    && job_start.elapsed() >= max_dur
                {
                    timed_out = true;
                    break;
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
                            message: format!("Read failed at offset {}: {}", offset, e),
                        });
                        completed_successfully = false;
                        break;
                    }
                }
            }

            if completed_successfully && !timed_out {
                iterations_completed += 1;
            }
        }

        let duration = job_start.elapsed();

        Ok(JobResult {
            job_name: config.name.clone(),
            workload_type: "read".to_string(),
            iterations_completed,
            total_bytes,
            elapsed_seconds: duration,
            errors,
        })
    }

    async fn execute_multipart_upload_iteration(
        &self,
        config: &ResolvedJobConfig,
        contents: &[u8],
        max_duration: Option<std::time::Duration>,
        job_start: Instant,
    ) -> Result<u64, ErrorInfo> {
        let uploader = &self.uploader;
        let bucket = &config.bucket;
        let object_key = &config.object_key;

        let mut request = uploader
            .start_atomic_upload(bucket.to_string(), object_key.to_string())
            .map_err(|e| ErrorInfo {
                error_type: "StartUploadError".to_string(),
                message: format!("Failed to start upload: {}", e),
            })?;

        let mut offset = 0;
        let target_size = config.object_size as usize;
        while offset < target_size {
            if let Some(max_dur) = max_duration
                && job_start.elapsed() >= max_dur
            {
                break;
            }

            let bytes_written = request.write(offset as i64, contents).await.map_err(|e| ErrorInfo {
                error_type: "WriteError".to_string(),
                message: format!("Write failed at offset {}: {}", offset, e),
            })?;

            offset += bytes_written;
        }

        if offset < target_size {
            return Err(ErrorInfo {
                error_type: "IncompleteUpload".to_string(),
                message: format!("Upload incomplete: wrote {} of {} bytes", offset, target_size),
            });
        }

        request.complete().await.map_err(|e| ErrorInfo {
            error_type: "CompleteError".to_string(),
            message: format!("Failed to complete upload: {}", e),
        })?;

        Ok(offset as u64)
    }

    async fn execute_multipart_upload(&self, config: &ResolvedJobConfig) -> JobResult {
        let mut total_bytes = 0u64;
        let mut errors = Vec::new();
        let mut iterations_completed = 0usize;

        let job_start = Instant::now();
        let max_duration = config.max_duration;

        // Allocate buffer once and reuse it for all writes
        let contents = vec![0xab; config.write_size];

        for _iteration in 0..config.iterations {
            if let Some(max_dur) = max_duration
                && job_start.elapsed() >= max_dur
            {
                break;
            }

            match self
                .execute_multipart_upload_iteration(config, &contents, max_duration, job_start)
                .await
            {
                Ok(bytes_written) => {
                    total_bytes += bytes_written;
                    iterations_completed += 1;
                }
                Err(error) => {
                    errors.push(error);
                }
            }
        }

        let duration = job_start.elapsed();

        JobResult {
            job_name: config.name.clone(),
            workload_type: "write".to_string(),
            iterations_completed,
            total_bytes,
            elapsed_seconds: duration,
            errors,
        }
    }

    async fn execute_incremental_upload_iteration(
        &self,
        config: &ResolvedJobConfig,
        contents: &[u8],
        max_duration: Option<std::time::Duration>,
        job_start: Instant,
    ) -> Result<u64, ErrorInfo> {
        let uploader = &self.uploader;
        let bucket = &config.bucket;
        let object_key = &config.object_key;

        let mut request = uploader.start_incremental_upload(bucket.to_string(), object_key.to_string(), 0, None);

        let mut offset = 0u64;
        let target_size = config.object_size;
        while offset < target_size {
            if let Some(max_dur) = max_duration
                && job_start.elapsed() >= max_dur
            {
                break;
            }

            request.write(offset, contents).await.map_err(|e| ErrorInfo {
                error_type: "IncrementalWriteError".to_string(),
                message: format!("Incremental write failed at offset {}: {}", offset, e),
            })?;

            offset += contents.len() as u64;
        }

        if offset < target_size {
            return Err(ErrorInfo {
                error_type: "IncompleteUpload".to_string(),
                message: format!("Upload incomplete: wrote {} of {} bytes", offset, target_size),
            });
        }

        request.complete().await.map_err(|e| ErrorInfo {
            error_type: "CompleteError".to_string(),
            message: format!("Failed to complete upload: {}", e),
        })?;

        Ok(offset)
    }

    async fn execute_incremental_upload(&self, config: &ResolvedJobConfig) -> JobResult {
        let mut total_bytes = 0u64;
        let mut errors = Vec::new();
        let mut iterations_completed = 0usize;

        let job_start = Instant::now();
        let max_duration = config.max_duration;

        // Allocate buffer once and reuse it for all writes
        let contents = vec![0xab; config.write_size];

        for _iteration in 0..config.iterations {
            if let Some(max_dur) = max_duration
                && job_start.elapsed() >= max_dur
            {
                break;
            }

            match self
                .execute_incremental_upload_iteration(config, &contents, max_duration, job_start)
                .await
            {
                Ok(bytes_written) => {
                    total_bytes += bytes_written;
                    iterations_completed += 1;
                }
                Err(error) => {
                    errors.push(error);
                }
            }
        }

        let duration = job_start.elapsed();

        JobResult {
            job_name: config.name.clone(),
            workload_type: "write".to_string(),
            iterations_completed,
            total_bytes,
            elapsed_seconds: duration,
            errors,
        }
    }
}
