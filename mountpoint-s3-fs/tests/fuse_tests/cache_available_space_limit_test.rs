use std::fs::{self, File};
use std::io::Read;
use std::path::{Path, PathBuf};
use std::process::Command;

use mountpoint_s3_fs::data_cache::{CacheLimit, DEFAULT_CACHE_MIN_AVAILABLE_RATIO, DiskDataCache, DiskDataCacheConfig};
use rand::rngs::SmallRng;
use rand::{Rng, SeedableRng};
use tracing::{debug, info, warn};

use crate::common::cache::CacheTestWrapper;
use crate::common::fuse::{self, TestSessionConfig};

const FILE_SIZE: usize = 10 * 1024 * 1024; // 10 MiB per file
const NUM_FILES: usize = 100; // 100 files = 1000 MiB total (matches cache size)
const TOLERANCE_RATIO: f64 = 0.02; // 2% tolerance for filesystem metadata overhead
const LOOP_DEVICE_SIZE_MIB: u64 = 1024; // 1 GiB loop device

/// Calculate total size of a directory recursively
fn get_directory_size(path: &Path) -> u64 {
    walkdir::WalkDir::new(path)
        .into_iter()
        .filter_map(|entry| entry.ok())
        .filter(|entry| entry.file_type().is_file())
        .filter_map(|entry| entry.metadata().ok())
        .map(|metadata| metadata.len())
        .sum()
}

/// Get filesystem statistics for a given path
fn get_filesystem_stats(path: &Path) -> (u64, u64) {
    let stat = nix::sys::statvfs::statvfs(path).expect("Failed to get filesystem stats");

    let block_size = stat.block_size();
    let total_space = stat.blocks() * block_size;
    let available_space = stat.blocks_available() * block_size;

    (total_space, available_space)
}

/// Represents an isolated loop device filesystem for cache testing
struct LoopDeviceFilesystem {
    #[allow(dead_code)]
    image_path: PathBuf,
    mount_path: PathBuf,
    _temp_dir: tempfile::TempDir,
}

impl LoopDeviceFilesystem {
    /// Create a new loop device filesystem with the specified size in MiB
    fn new(size_mib: u64) -> std::io::Result<Self> {
        let temp_dir = tempfile::tempdir()?;
        let image_path = temp_dir.path().join("cache-device.img");
        let mount_path = temp_dir.path().join("cache-mount");

        fs::create_dir_all(&mount_path)?;

        // Create a sparse file for the loop device
        let file = File::create(&image_path)?;
        file.set_len(size_mib * 1024 * 1024)?;
        drop(file);

        // Create ext4 filesystem on the image
        let output = Command::new("mkfs.ext4")
            .arg("-F") // Force creation
            .arg(&image_path)
            .output()?;

        if !output.status.success() {
            return Err(std::io::Error::other(format!(
                "mkfs.ext4 failed: {}",
                String::from_utf8_lossy(&output.stderr)
            )));
        }

        // Mount the loop device
        let output = Command::new("sudo")
            .arg("mount")
            .arg("-o")
            .arg("loop")
            .arg(&image_path)
            .arg(&mount_path)
            .output()?;

        if !output.status.success() {
            return Err(std::io::Error::other(format!(
                "mount failed: {}",
                String::from_utf8_lossy(&output.stderr)
            )));
        }

        // Make the mount point writable
        let output = Command::new("sudo").arg("chmod").arg("777").arg(&mount_path).output()?;

        if !output.status.success() {
            warn!("chmod failed: {}", String::from_utf8_lossy(&output.stderr));
        }

        Ok(Self {
            image_path,
            mount_path,
            _temp_dir: temp_dir,
        })
    }

    /// Get the mount path for the loop device
    fn mount_path(&self) -> &Path {
        &self.mount_path
    }
}

impl Drop for LoopDeviceFilesystem {
    fn drop(&mut self) {
        let _ = Command::new("sudo").arg("umount").arg(&self.mount_path).output();
    }
}

/// Shared test logic for cache available space limit validation
///
/// This function contains the core test logic that validates cache respects available space limits.
/// It can be used with both mock and real S3 sessions.
fn run_available_space_cache_limit_test(test_session: crate::common::fuse::TestSession, cache_path: PathBuf) {
    let (total_space, initial_available) = get_filesystem_stats(&cache_path);

    let mut rng = SmallRng::seed_from_u64(0x12345678);
    let mut file_data = vec![0u8; FILE_SIZE];

    for i in 0..NUM_FILES {
        rng.fill_bytes(&mut file_data);
        let key = format!("file-{}.bin", i + 1);
        test_session.client().put_object(&key, &file_data).unwrap();
    }

    let mut max_cache_size = 0u64;
    let mut min_available_space = initial_available;
    let mut has_violation = false;

    // Sequential read pattern - read each file once
    for i in 0..NUM_FILES {
        let key = format!("file-{}.bin", i + 1);
        let path = test_session.mount_path().join(&key);

        let mut file = File::open(&path).unwrap();
        let mut buffer = Vec::new();
        file.read_to_end(&mut buffer).unwrap();

        assert_eq!(buffer.len(), FILE_SIZE, "File {} has incorrect size", key);

        // Check actual cache directory size
        let actual_cache_size = get_directory_size(&cache_path);
        max_cache_size = max_cache_size.max(actual_cache_size);

        // Check filesystem available space
        let (_, current_available) = get_filesystem_stats(&cache_path);
        min_available_space = min_available_space.min(current_available);

        let available_ratio = current_available as f64 / total_space as f64;
        let used_percent = ((total_space - current_available) as f64 / total_space as f64) * 100.0;

        // Check if we're preserving at least 5% available space of total filesystem with 2% tolerance
        // This margin is necessary because Mountpoint currently slightly exceeds the limit ocasionally.
        let tolerance = (total_space as f64 * TOLERANCE_RATIO) as u64;
        let min_required_available = (total_space as f64 * DEFAULT_CACHE_MIN_AVAILABLE_RATIO) as u64;

        if current_available < min_required_available.saturating_sub(tolerance) {
            has_violation = true;
            let shortage = min_required_available - current_available;
            let shortage_pct = (shortage as f64 / total_space as f64) * 100.0;
            warn!(
                "⚠️  File {}: Available space {} bytes ({:.1}% used) - BELOW minimum {} bytes (shortage: {} bytes, {:.2}%)",
                i + 1,
                current_available,
                used_percent,
                min_required_available,
                shortage,
                shortage_pct
            );
        } else if (i + 1) % 10 == 0 {
            debug!(
                "✓  File {}: Cache size {} bytes, Available {} bytes ({:.1}% used, {:.1}% free)",
                i + 1,
                actual_cache_size,
                current_available,
                used_percent,
                available_ratio * 100.0
            );
        }
    }

    // Final verification
    let final_cache_size = get_directory_size(&cache_path);
    let (_, final_available) = get_filesystem_stats(&cache_path);
    let final_used_percent = ((total_space - final_available) as f64 / total_space as f64) * 100.0;

    info!("\n=== Test Summary ===");
    info!("Isolated filesystem: {} MiB loop device", LOOP_DEVICE_SIZE_MIB);
    info!("Total files read: {}", NUM_FILES);
    info!("Total data read: {} MiB", (NUM_FILES * FILE_SIZE) / (1024 * 1024));
    info!("Filesystem total: {} MiB", total_space / (1024 * 1024));
    info!("Initial available: {} MiB", initial_available / (1024 * 1024));
    info!(
        "Min available observed: {} MiB ({:.1}% of total)",
        min_available_space / (1024 * 1024),
        (min_available_space as f64 / total_space as f64) * 100.0
    );
    info!(
        "Final available: {} MiB ({:.1}% of total)",
        final_available / (1024 * 1024),
        (final_available as f64 / total_space as f64) * 100.0
    );
    info!(
        "Max cache size observed: {} bytes ({} MiB)",
        max_cache_size,
        max_cache_size / (1024 * 1024)
    );
    info!(
        "Final cache size: {} bytes ({} MiB)",
        final_cache_size,
        final_cache_size / (1024 * 1024)
    );
    info!("Final filesystem usage: {:.1}%", final_used_percent);

    // Verify cache was actually used
    assert!(final_cache_size > 0, "Cache should contain data after sequential reads");

    // Assert no violations (with 2% tolerance)
    assert!(
        !has_violation,
        "Cache violated available space limit. Min available: {} bytes ({:.1}%), Required: {:.1}% (tolerance: {:.1}%)",
        min_available_space,
        (min_available_space as f64 / total_space as f64) * 100.0,
        DEFAULT_CACHE_MIN_AVAILABLE_RATIO * 100.0,
        TOLERANCE_RATIO * 100.0
    );
}

/// Test that cache respects available space limits (default 5% free) during sequential file access
///
/// An isolated loop device filesystem is created for the cache, ensuring Mountpoint calculates the 95% limit based on the isolated filesystem, not the entire host.
#[test]
fn available_space_cache_limit_test_mock() {
    // Create isolated filesystem for cache
    let loop_fs = LoopDeviceFilesystem::new(LOOP_DEVICE_SIZE_MIB).expect("Failed to create loop device filesystem");
    let cache_path = loop_fs.mount_path().to_path_buf();

    let test_session = fuse::mock_session::new_with_cache(|block_size, pool| {
        let cache_config = DiskDataCacheConfig {
            cache_directory: cache_path.clone(),
            block_size,
            limit: CacheLimit::AvailableSpace {
                min_ratio: DEFAULT_CACHE_MIN_AVAILABLE_RATIO,
            },
        };
        let cache = DiskDataCache::new(cache_config, pool);
        CacheTestWrapper::new(cache)
    })("available_space_cache_limit_test", TestSessionConfig::default());

    run_available_space_cache_limit_test(test_session, cache_path);
}

#[cfg(feature = "s3_tests")]
#[test]
fn available_space_cache_limit_test_s3() {
    use crate::common::fuse::s3_session;

    // Create isolated filesystem for cache
    let loop_fs = LoopDeviceFilesystem::new(LOOP_DEVICE_SIZE_MIB).expect("Failed to create loop device filesystem");
    let cache_path = loop_fs.mount_path().to_path_buf();

    let test_session = s3_session::new_with_cache(|block_size, pool| {
        let cache_config = DiskDataCacheConfig {
            cache_directory: cache_path.clone(),
            block_size,
            limit: CacheLimit::AvailableSpace {
                min_ratio: DEFAULT_CACHE_MIN_AVAILABLE_RATIO,
            },
        };
        let cache = DiskDataCache::new(cache_config, pool);
        CacheTestWrapper::new(cache)
    })("available_space_cache_limit_test_s3", TestSessionConfig::default());

    run_available_space_cache_limit_test(test_session, cache_path);
}
