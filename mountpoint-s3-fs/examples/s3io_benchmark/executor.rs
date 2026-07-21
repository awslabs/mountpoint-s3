use std::cmp::min;
use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};
use std::time::Instant;

use mountpoint_s3_client::config::{Allocator, EndpointConfig, S3ClientConfig, Uri};
use mountpoint_s3_client::types::HeadObjectParams;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::memory::effective_total_memory;
use mountpoint_s3_fs::memory::{CandidateSize, PagedPool};
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

        let memory_target = global
            .memory_target
            .unwrap_or_else(|| ((effective_total_memory() as f64 * 0.95) / (1024.0 * 1024.0)) as usize);

        let bind = global.bind.clone().unwrap_or_default();

        let sse_type = global.sse.map(|sse| match sse {
            SseType::Aes256 => "AES256".to_string(),
            SseType::AwsKms => "aws:kms".to_string(),
        });

        let checksum_algorithm = match global.checksum_algorithm.unwrap_or(ChecksumAlgorithm::Crc32c) {
            ChecksumAlgorithm::Crc64nvme => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Crc64nvme),
            ChecksumAlgorithm::Crc32c => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Crc32c),
            ChecksumAlgorithm::Crc32 => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Crc32),
            ChecksumAlgorithm::Sha1 => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Sha1),
            ChecksumAlgorithm::Sha256 => Some(mountpoint_s3_client::types::ChecksumAlgorithm::Sha256),
            ChecksumAlgorithm::Off => None,
        };

        let memory_target_bytes = memory_target * 1024 * 1024;
        let pool = PagedPool::config()
            .with_candidate_sizes([CandidateSize::new(read_part_size), CandidateSize::new(write_part_size)])
            .with_memory_limit(memory_target_bytes)
            .build();

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

        let runtime = Runtime::new(client.event_loop_group());

        let server_side_encryption = ServerSideEncryption::new(sse_type, global.sse_kms_key_id.clone());

        let uploader = Uploader::new(
            client.clone(),
            runtime.clone(),
            pool.clone(),
            UploaderConfig::new(write_part_size)
                .server_side_encryption(server_side_encryption)
                .default_checksum_algorithm(checksum_algorithm),
        );

        let prefetcher = Prefetcher::default_builder(client.clone()).build(runtime, pool, PrefetcherConfig::default());

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
            AccessPattern::MultiCursorSequential => self.execute_multi_cursor_read(config).await,
            AccessPattern::OverlappingCursors => self.execute_overlapping_cursors_read(config).await,
            AccessPattern::SequentialWithSeeks => self.execute_sequential_with_seeks(config).await,
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

                let read_size = min(config.read_size as u64, size - offset);

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

    /// `num_cursors` interleaved sequential cursors partitioning the object into contiguous,
    /// non-overlapping regions (the last cursor absorbs any remainder).
    async fn execute_multi_cursor_read(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
        let num_cursors = config.num_cursors;
        self.run_interleaved_cursors(config, |size| {
            let region_size = size / num_cursors as u64;
            (0..num_cursors)
                .map(|i| {
                    let start = i as u64 * region_size;
                    let end = if i == num_cursors - 1 {
                        size
                    } else {
                        start + region_size
                    };
                    (start, end)
                })
                .collect()
        })
        .await
    }

    /// `num_cursors` interleaved sequential cursors, each starting at an evenly-spaced offset but
    /// all reading to the end of the file.
    ///
    /// Note that total bytes read exceeds the object size (each cursor reads from its start to EOF).
    async fn execute_overlapping_cursors_read(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
        let num_cursors = config.num_cursors;
        self.run_interleaved_cursors(config, |size| {
            // Evenly-spaced start offsets; every cursor's end is EOF (this is the overlap).
            let spacing = size / num_cursors as u64;
            (0..num_cursors).map(|i| (i as u64 * spacing, size)).collect()
        })
        .await
    }

    /// Shared helper for multi-cursor read patterns. Round-robins through a set of cursors, reading
    /// up to `bytes_per_cursor_visit` from each before advancing to the next so the cursors stay
    /// concurrently live. `build_ranges` maps the object size to each cursor's `[start, end)`
    /// range; ranges may overlap (as in `overlapping_cursors`), in which case `total_bytes` exceeds
    /// the object size.
    async fn run_interleaved_cursors(
        &self,
        config: &ResolvedJobConfig,
        build_ranges: impl Fn(u64) -> Vec<(u64, u64)>,
    ) -> Result<JobResult, ExecutionError> {
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

        let num_cursors = config.num_cursors;
        let bytes_per_visit = config.bytes_per_cursor_visit as u64;

        if size < num_cursors as u64 {
            return Err(ExecutionError::ExecutionFailed(format!(
                "Object size ({}) is smaller than num_cursors ({})",
                size, num_cursors
            )));
        }

        let ranges = build_ranges(size);
        let expected_bytes: u64 = ranges.iter().map(|(start, end)| end - start).sum();

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

            // Each cursor starts at its range start and runs to its range end.
            let mut offsets: Vec<u64> = ranges.iter().map(|(start, _)| *start).collect();
            let mut request = prefetcher.prefetch(bucket.to_string(), object_id.clone(), size);
            let mut iteration_bytes = 0u64;
            let mut finished_count = 0;
            let mut had_error = false;

            'outer: loop {
                if finished_count >= ranges.len() {
                    break;
                }

                for (offset, &(_, end)) in offsets.iter_mut().zip(ranges.iter()) {
                    if *offset >= end {
                        continue;
                    }

                    if let Some(max_dur) = max_duration
                        && job_start.elapsed() >= max_dur
                    {
                        break 'outer;
                    }

                    // Read up to bytes_per_visit from this cursor, then yield to the next so the
                    // cursors stay concurrently live and interleaved.
                    let visit_end = (*offset + bytes_per_visit).min(end);
                    while *offset < visit_end {
                        let read_size = min(config.read_size as u64, visit_end - *offset);
                        match request.read(*offset, read_size as usize).await {
                            Ok(bytes) => {
                                let n = bytes.len() as u64;
                                *offset += n;
                                iteration_bytes += n;
                                total_bytes += n;
                            }
                            Err(e) => {
                                errors.push(ErrorInfo {
                                    error_type: "ReadError".to_string(),
                                    message: format!("Read failed at offset {}: {}", offset, e),
                                });
                                had_error = true;
                                break 'outer;
                            }
                        }
                    }

                    if *offset >= end {
                        finished_count += 1;
                    }
                }
            }

            if !had_error && iteration_bytes == expected_bytes {
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

    /// A dominant sequential stream, confined to the first `1/dominant_fraction` of the object,
    /// sharing one file handle with periodic bursts of random look-aside reads in the remaining
    /// region. Every `seek_interval` dominant reads, a burst of `distant_per_burst` reads is issued
    /// at random `read_size`-aligned offsets in the `[size/dominant_fraction, size)` region. All
    /// reads share one prefetch request, so each random look-aside tends to spawn its own transient
    /// cursor alongside the dominant stream, exercising the prefetcher's ability to protect the
    /// dominant stream while occasional distant readers come and go.
    ///
    /// The dominant stream is confined to the first region (rather than running to EOF) so it never
    /// collides with the look-aside region; an iteration completes when it reaches the end of that
    /// region. Distant-read bytes are added to `total_bytes` but do not affect completion.
    async fn execute_sequential_with_seeks(&self, config: &ResolvedJobConfig) -> Result<JobResult, ExecutionError> {
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

        let read_size = config.read_size as u64;
        let seek_interval = config.seek_interval;
        let distant_per_burst = config.distant_per_burst;

        // Split the object: the dominant sequential stream runs over the first region
        // `[0, dominant_end)`; look-aside reads land at random offsets in `[dominant_end, size)`.
        // Both regions must hold at least one full read.
        let dominant_end = size / config.dominant_fraction as u64;
        if dominant_end < read_size || size - dominant_end < read_size {
            return Err(ExecutionError::ExecutionFailed(format!(
                "Object size ({}) is too small for sequential_with_seeks with dominant_fraction ({}) and read_size ({}): both the dominant and look-aside regions must hold at least one read",
                size, config.dominant_fraction, read_size
            )));
        }
        // Random look-aside offsets are chosen from the read_size-aligned slots in the look-aside
        // region. Deterministic RNG mirrors execute_random_read.
        let distant_slots = (size - dominant_end) / read_size;
        let randseed = config.randseed;
        let mut hasher = DefaultHasher::new();
        randseed.hash(&mut hasher);
        object_id.hash(&mut hasher);
        let mut rng = Pcg64::seed_from_u64(hasher.finish());

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
            let mut offset = 0u64;
            let mut dominant_reads = 0usize;
            let mut had_error = false;

            while offset < dominant_end {
                if let Some(max_dur) = max_duration
                    && job_start.elapsed() >= max_dur
                {
                    break;
                }

                // Dominant sequential read from the current frontier.
                let dominant_len = min(read_size, dominant_end - offset);
                match request.read(offset, dominant_len as usize).await {
                    Ok(bytes) => {
                        let n = bytes.len() as u64;
                        offset += n;
                        total_bytes += n;
                    }
                    Err(e) => {
                        errors.push(ErrorInfo {
                            error_type: "ReadError".to_string(),
                            message: format!("Dominant read failed at offset {}: {}", offset, e),
                        });
                        had_error = true;
                        break;
                    }
                }

                dominant_reads += 1;

                // Every `seek_interval` dominant reads, fire a burst of random look-aside reads.
                if dominant_reads.is_multiple_of(seek_interval) {
                    for _ in 0..distant_per_burst {
                        if let Some(max_dur) = max_duration
                            && job_start.elapsed() >= max_dur
                        {
                            break;
                        }

                        // A random read at a read_size-aligned offset in the look-aside region.
                        let distant_offset = dominant_end + rng.random_range(0..distant_slots) * read_size;
                        match request.read(distant_offset, read_size as usize).await {
                            Ok(bytes) => {
                                total_bytes += bytes.len() as u64;
                            }
                            Err(e) => {
                                errors.push(ErrorInfo {
                                    error_type: "ReadError".to_string(),
                                    message: format!("Distant read failed at offset {}: {}", distant_offset, e),
                                });
                                had_error = true;
                                break;
                            }
                        }
                    }

                    if had_error {
                        break;
                    }
                }
            }

            if !had_error && offset >= dominant_end {
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
                let read_size = min(config.read_size as u64, size - offset);

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
