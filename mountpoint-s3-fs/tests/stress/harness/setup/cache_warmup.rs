//! `CacheWarmup`: a setup-phase step that reads one or more shared objects front-to-back through the
//! mount to populate the on-disk cache before workers start.

use std::fs::File;
use std::io::Read;
use std::path::Path;

use super::SetupGuard;
use crate::stress::test_objects::SHARED_OBJECTS_PREFIX;

/// Guard for a completed cache warmup — drop is a no-op.
pub struct CacheWarmup;
impl SetupGuard for CacheWarmup {}

/// Read each shared object in `keys` (relative to `SHARED_OBJECTS_PREFIX`) front-to-back through the
/// FUSE mount, populating the disk cache.
pub fn warm_cache(keys: &[&str], mount_path: &Path) -> CacheWarmup {
    const WARMUP_CHUNK: usize = 8 * 1024 * 1024;
    let mut buf = vec![0u8; WARMUP_CHUNK];

    for &key in keys {
        let path = mount_path.join(SHARED_OBJECTS_PREFIX).join(key);
        tracing::info!(key, "stress: cache warmup starting for object");
        let mut file = File::open(&path).unwrap_or_else(|e| panic!("cache warmup: failed to open {path:?}: {e:?}"));
        loop {
            let n = file
                .read(&mut buf)
                .unwrap_or_else(|e| panic!("cache warmup: read failed for {path:?}: {e:?}"));
            if n == 0 {
                break;
            }
        }
        tracing::info!(key, "stress: cache warmup complete for object");
    }
    CacheWarmup
}
