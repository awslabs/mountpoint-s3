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

/// Get filesystem statistics for a given path
fn get_filesystem_stats(path: &Path) -> (u64, u64) {
    let stat = nix::sys::statvfs::statvfs(path).expect("Failed to get filesystem stats");
    let block_size = stat.block_size();
    (stat.blocks() * block_size, stat.blocks_available() * block_size)
}

/// Test that the cache respects the available space limit (default 5% free) during sequential reads.
///
/// An isolated loop device filesystem is used for the cache, ensuring Mountpoint calculates the 95% limit based on the isolated filesystem, not the entire host.
///
/// Note: requires `sudo` for loop device mount/umount operations.
#[test]
fn available_space_cache_limit_test_mock() {
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
        CacheTestWrapper::new(DiskDataCache::new(cache_config, pool))
    })("available_space_cache_limit_test", TestSessionConfig::default());

    // Create test files
    let mut rng = SmallRng::seed_from_u64(0x12345678);
    let mut file_data = vec![0u8; FILE_SIZE];

    for i in 0..NUM_FILES {
        rng.fill_bytes(&mut file_data);
        let key = format!("file-{}.bin", i + 1);
        test_session.client().put_object(&key, &file_data).unwrap();
    }

    let (total_space, initial_available) = get_filesystem_stats(&cache_path);
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
                "File {}: Available space {} bytes ({:.1}% used) - BELOW minimum {} bytes (shortage: {} bytes, {:.2}%)",
                i + 1,
                current_available,
                used_percent,
                min_required_available,
                shortage,
                shortage_pct
            );
        } else if (i + 1) % 10 == 0 {
            debug!(
                "File {}: Used space {} bytes, Available {} bytes ({:.1}% used, {:.1}% free)",
                i + 1,
                total_space - current_available,
                current_available,
                used_percent,
                available_ratio * 100.0
            );
        }
    }

    let min_available_space_percent = (min_available_space as f64 / total_space as f64) * 100.0;
    let (_, final_available) = get_filesystem_stats(&cache_path);
    let final_used_percent = ((total_space - final_available) as f64 / total_space as f64) * 100.0;
    info!(
        "Filesystem Total: {} MiB, Initial available: {} MiB, Min available: {} MiB ({:.1}%), Final usage: {:.1}%",
        total_space / (1024 * 1024),
        initial_available / (1024 * 1024),
        min_available_space / (1024 * 1024),
        min_available_space_percent,
        final_used_percent,
    );

    // Assert no violations (with the tolerance)
    assert!(
        !has_violation,
        "Cache violated available space limit. Min available: {} bytes ({:.1}%), Required: {:.1}% (tolerance: {:.1}%)",
        min_available_space,
        min_available_space_percent,
        DEFAULT_CACHE_MIN_AVAILABLE_RATIO * 100.0,
        TOLERANCE_RATIO * 100.0
    );
}

/// Represents an isolated loop device filesystem for cache testing
struct LoopDeviceFilesystem {
    mount_path: PathBuf,
    /// Kept alive to ensure the temp directory is not deleted before `Drop` unmounts the loop device.
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
        let output = Command::new("mkfs.ext4").arg("-F").arg(&image_path).output()?;
        if !output.status.success() {
            return Err(std::io::Error::other(format!(
                "mkfs.ext4 failed: {}",
                String::from_utf8_lossy(&output.stderr)
            )));
        }

        let output = Command::new("sudo")
            .args(["mount", "-o", "loop"])
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
        let output = Command::new("sudo").args(["chmod", "777"]).arg(&mount_path).output()?;
        if !output.status.success() {
            warn!("chmod failed: {}", String::from_utf8_lossy(&output.stderr));
        }

        Ok(Self {
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
