//! Provides functionality related to the inner cache directory Mountpoint creates or uses.
//! Mountpoint attempts to cleanup the contents during mount and exit.
//!
//! Mountpoint uses a directory inside the user-provided cache directory
//! to mitigate any impact from the user providing a directory that already contains data.
//! Using a new sub-directory minimizes the interference with the existing directory structure,
//! and limits the risk from deleting or overwriting data to files written within this sub-directory.

use sha2::{Digest, Sha256};
use std::ffi::OsStr;
use std::fs;
use std::io;
use std::os::unix::ffi::OsStrExt as _;
use std::os::unix::fs::DirBuilderExt;
use std::path::{Path, PathBuf};
use std::time::SystemTime;

use thiserror::Error;

/// Cache directory that will be created with appropriate permissions if it doesn't exist,
/// and - where configured - emptied at creation and when dropped.
///
/// When using a `cache_key`, the key is hashed and added as a subdirectory of `mountpoint-cache`.
#[derive(Debug)]
pub struct ManagedCacheDir {
    /// `<parent_path>/mountpoint-cache`
    mountpoint_cache_path: PathBuf,
    /// `<parent_path>/mountpoint-cache` or `<parent_path>/mountpoint-cache/<hashed_cache_key>`
    managed_cache_path: PathBuf,
    /// Indicates if directory should be removed before construction and when dropped.
    should_cleanup: bool,
}

#[derive(Debug, Error)]
pub enum ManagedCacheDirError {
    #[error("creation of cache sub-directory failed due to IO error: {0}")]
    CreationFailure(#[source] io::Error),
    #[error("cleanup of cache sub-directory failed due to IO error: {0}")]
    CleanupFailure(#[source] io::Error),
}

impl ManagedCacheDir {
    // This is the sub-directory where Mountpoint will store cache contents for the current Mountpoint instance.
    const MOUNTPOINT_CACHE_DIR_NAME: &str = "mountpoint-cache";
    // This is the sub-directory prefix where Mountpoint will rename any leftover cache sub-directory from any previous Mountpoint instances
    // and then will attempt to clean up in a background thread.
    const MOUNTPOINT_OLD_CACHE_DIR_PREFIX: &str = "old-mountpoint-cache.";
    // This is the maximum number of retries Mountpoint will try to clean up the old cache folder in the background thread.
    // Mountpoint will log any errors if clean up fails.
    const MOUNTPOINT_OLD_CACHE_DIR_CLEANUP_MAX_RETRY: usize = 3;

    /// Create a new directory inside the provided parent path.
    ///
    /// If `should_cleanup` is `true` and `<parent_path>/mountpoint-cache` already exists,
    /// it will be deleted before being recreated with the correct permissions.
    /// If `should_cleanup` is `false`, the directory will only be created if it doesn't exist.
    /// Any existing directory will be used 'as is', and will not have its permissions updated.
    ///
    /// By cleaning up the directory, we ensure caches are cleaned up where Mountpoint may have exited uncleanly
    /// and also ensure that the correct permissions are configured on the cache directory.
    pub fn new_from_parent_with_cache_key(
        parent_path: impl AsRef<Path>,
        cache_key: Option<&OsStr>,
        should_cleanup: bool,
    ) -> Result<Self, ManagedCacheDirError> {
        let mountpoint_cache_path = parent_path.as_ref().join(ManagedCacheDir::MOUNTPOINT_CACHE_DIR_NAME);
        let managed_cache_path = match cache_key {
            None => mountpoint_cache_path.clone(),
            Some(cache_key) => mountpoint_cache_path.join(hash_cache_key(cache_key.as_bytes())),
        };
        let managed_cache_dir = Self {
            mountpoint_cache_path,
            managed_cache_path,
            should_cleanup,
        };

        if should_cleanup {
            managed_cache_dir
                .remove_in_background()
                .map_err(ManagedCacheDirError::CleanupFailure)?;
        }
        Self::create_dir(&managed_cache_dir.mountpoint_cache_path)?;
        if cache_key.is_some() {
            Self::create_dir(&managed_cache_dir.managed_cache_path)?;
        }
        Ok(managed_cache_dir)
    }

    /// Remove the cache sub-directory, along with its contents if any
    fn remove(&self) -> Result<(), ManagedCacheDirError> {
        tracing::debug!(cache_subdirectory = ?self.mountpoint_cache_path, "removing the cache sub-directory and any contents");
        remove_dir_all_ignore_not_found(&self.mountpoint_cache_path).map_err(ManagedCacheDirError::CleanupFailure)?;
        tracing::trace!(cache_subdirectory = ?self.mountpoint_cache_path, "cache sub-directory removal complete");
        Ok(())
    }

    /// Remove the cache sub-directory in a background thread.
    /// This method first renames `<parent_path>/mountpoint-cache` into `<parent_path>/old-mountpoint-cache.<EPOCH_NS>` in the current thread,
    /// and then spawns a detached background thread to clean up the old cache folder.
    fn remove_in_background(&self) -> io::Result<()> {
        let exists = self.mountpoint_cache_path.try_exists()?;
        if !exists {
            // Nothing to do
            return Ok(());
        }

        let epoch_ns = SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .map(|d| d.as_nanos())
            .unwrap_or_default();
        let renamed_cache_path = self.mountpoint_cache_path.with_file_name(format!(
            "{}{}",
            ManagedCacheDir::MOUNTPOINT_OLD_CACHE_DIR_PREFIX,
            epoch_ns
        ));

        tracing::debug!(
            cache_subdirectory = ?self.mountpoint_cache_path,
            renamed_cache_subdirectory = ?renamed_cache_path,
            "renaming the cache sub-directory to clean up in a background thread");
        fs::rename(&self.mountpoint_cache_path, &renamed_cache_path)?;

        std::thread::spawn(move || {
            for attempt in 1..=ManagedCacheDir::MOUNTPOINT_OLD_CACHE_DIR_CLEANUP_MAX_RETRY {
                match remove_dir_all_ignore_not_found(&renamed_cache_path) {
                    Ok(()) => {
                        tracing::debug!(
                            attempt = attempt,
                            renamed_cache_subdirectory = ?renamed_cache_path,
                            "cache sub-directory removal complete");
                        return;
                    }
                    Err(err) => {
                        tracing::error!(
                            attempt = attempt,
                            renamed_cache_subdirectory = ?renamed_cache_path,
                            error = ?err,
                            "failed to remove cache sub-directory in background");
                    }
                }
            }
        });

        Ok(())
    }

    /// Create a directory, assuming the parent path exists.
    fn create_dir(path: &Path) -> Result<(), ManagedCacheDirError> {
        let mkdir_result = fs::DirBuilder::new().mode(0o700).create(path);
        if let Err(mkdir_err) = mkdir_result {
            match mkdir_err.kind() {
                io::ErrorKind::AlreadyExists => tracing::debug!(
                    cache_dir = ?path,
                    "cache sub-directory already existed",
                ),
                _kind => return Err(ManagedCacheDirError::CreationFailure(mkdir_err)),
            }
        }

        Ok(())
    }

    /// Retrieve a reference to the managed path
    pub fn as_path(&self) -> &Path {
        self.managed_cache_path.as_path()
    }

    /// Create an owned copy of the managed path
    pub fn as_path_buf(&self) -> PathBuf {
        self.managed_cache_path.clone()
    }
}

impl Drop for ManagedCacheDir {
    fn drop(&mut self) {
        if self.should_cleanup
            && let Err(err) = self.remove()
        {
            tracing::error!(cache_subdirectory = ?self.mountpoint_cache_path, "failed to remove cache sub-directory: {err}");
        }
    }
}

/// Hash the cache_key to avoid path traversal attacks.
fn hash_cache_key(cache_key: &[u8]) -> String {
    let hashed_key = Sha256::digest(cache_key);
    hex::encode(hashed_key)
}

/// Removes given directory after removing all its contents.
/// This function is a wrapper around [fs::remove_dir_all] and just ignores "not found" errors.
fn remove_dir_all_ignore_not_found(path: &Path) -> io::Result<()> {
    match fs::remove_dir_all(path) {
        Ok(()) => Ok(()),
        Err(err) if err.kind() == io::ErrorKind::NotFound => Ok(()),
        Err(err) => Err(err),
    }
}

#[cfg(test)]
mod tests {
    use test_case::test_matrix;

    use super::{ManagedCacheDir, hash_cache_key};

    use std::ffi::OsStr;
    use std::fs;
    use std::os::unix::ffi::OsStrExt as _;
    use std::os::unix::fs::{DirBuilderExt, PermissionsExt};
    use std::time::{Duration, Instant};

    const EXPECTED_DIR_MODE: u32 = 0o700;

    const SHOULD_CLEANUP: bool = true;
    const SHOULD_NOT_CLEANUP: bool = !SHOULD_CLEANUP;

    macro_rules! assert_dir_does_not_exist {
        ($path:expr, $($arg:tt)+) => {
            let err = fs::metadata($path).expect_err("path should not exist");
            assert!(
                matches!(err.kind(), std::io::ErrorKind::NotFound),
                $($arg)+
            );
        };
    }

    macro_rules! assert_cache_dir_existence_after_cleanup {
        ($expected:expr, $path:expr) => {
            let exists = $path.try_exists().unwrap();
            if $expected {
                assert_eq!($expected, exists, "expected cache sub-directory to exist");
            } else {
                assert_eq!($expected, exists, "expected cache sub-directory to not exist");
            }
        };
    }

    macro_rules! assert_dir_exists_with_permissions {
        ($expected_path:expr) => {
            let dir_mode = fs::metadata($expected_path)
                .expect("path should exist")
                .permissions()
                .mode();
            let dir_mode = dir_mode & 0o777;
            assert_eq!(
                dir_mode, EXPECTED_DIR_MODE,
                "path should have {EXPECTED_DIR_MODE:#o} permission mode but had {dir_mode:#o}",
            );
        };
    }

    #[test_matrix([SHOULD_CLEANUP, SHOULD_NOT_CLEANUP])]
    fn test_unused(should_cleanup: bool) {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None, should_cleanup)
            .expect("creating managed dir should succeed");
        assert_dir_exists_with_permissions!(&expected_path);

        drop(managed_dir);
        assert_cache_dir_existence_after_cleanup!(!should_cleanup, &expected_path);

        temp_dir.close().unwrap();
    }

    #[test_matrix([SHOULD_CLEANUP, SHOULD_NOT_CLEANUP])]
    fn test_cache_key_unused(should_cleanup: bool) {
        let temp_dir = tempfile::tempdir().unwrap();
        let cache_key = OsStr::new("cache_key");
        let mp_cache_path = temp_dir.path().join("mountpoint-cache");
        let expected_path = mp_cache_path.join(hash_cache_key(cache_key.as_bytes()));

        let managed_dir =
            ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), Some(cache_key), should_cleanup)
                .expect("creating managed dir should succeed");
        assert_dir_does_not_exist!(
            &mp_cache_path.join("cache_key"),
            "raw cache key should not be used in cache dir name",
        );
        assert_dir_exists_with_permissions!(&expected_path);

        drop(managed_dir);
        assert_cache_dir_existence_after_cleanup!(!should_cleanup, &mp_cache_path);

        temp_dir.close().unwrap();
    }

    #[test_matrix([SHOULD_CLEANUP, SHOULD_NOT_CLEANUP])]
    fn test_used(should_cleanup: bool) {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None, should_cleanup)
            .expect("creating managed dir should succeed");
        assert_dir_exists_with_permissions!(&expected_path);

        fs::File::create(expected_path.join("file.txt"))
            .expect("should be able to create file within managed directory");
        fs::create_dir(expected_path.join("dir")).expect("should be able to create dir within managed directory");
        fs::File::create(expected_path.join("dir/file.txt"))
            .expect("should be able to create file within subdirectory");

        drop(managed_dir);
        assert_cache_dir_existence_after_cleanup!(!should_cleanup, &expected_path);

        temp_dir.close().unwrap();
    }

    #[test_matrix([SHOULD_CLEANUP, SHOULD_NOT_CLEANUP])]
    fn test_cache_key_used(should_cleanup: bool) {
        let temp_dir = tempfile::tempdir().unwrap();
        let cache_key = OsStr::new("cache_key");
        let mp_cache_path = temp_dir.path().join("mountpoint-cache");
        let expected_path = mp_cache_path.join(hash_cache_key(cache_key.as_bytes()));

        let managed_dir =
            ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), Some(cache_key), should_cleanup)
                .expect("creating managed dir should succeed");
        assert_dir_does_not_exist!(
            &mp_cache_path.join("cache_key"),
            "raw cache key should not be used in cache dir name",
        );
        assert_dir_exists_with_permissions!(&expected_path);

        fs::File::create(expected_path.join("file.txt"))
            .expect("should be able to create file within managed directory");
        fs::create_dir(expected_path.join("dir")).expect("should be able to create dir within managed directory");
        fs::File::create(expected_path.join("dir/file.txt"))
            .expect("should be able to create file within subdirectory");

        drop(managed_dir);
        assert_cache_dir_existence_after_cleanup!(!should_cleanup, &expected_path);

        temp_dir.close().unwrap();
    }

    #[test_matrix([SHOULD_CLEANUP, SHOULD_NOT_CLEANUP])]
    fn test_already_exists(should_cleanup: bool) {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        fs::DirBuilder::new()
            .recursive(true)
            .mode(0o775) // something that isn't the expected `0o700`
            .create(expected_path.join("dir"))
            .unwrap();
        fs::File::create(expected_path.join("dir/file.txt")).unwrap();

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None, should_cleanup)
            .expect("creating managed dir should succeed");

        fs::metadata(&expected_path).expect("path should exist");

        let dir_entries = fs::read_dir(&expected_path).unwrap().count();
        if should_cleanup {
            assert_eq!(dir_entries, 0, "directory should be empty");
            // Also check permissions! If we created it, then it should be the right permissions.
            assert_dir_exists_with_permissions!(&expected_path);
        } else {
            assert_eq!(dir_entries, 1, "directory should have one entry");
        }

        drop(managed_dir);
        assert_cache_dir_existence_after_cleanup!(!should_cleanup, &expected_path);

        temp_dir.close().unwrap();
    }

    // This test is disabled by default as it takes 10m+ to run.
    // #[test_matrix([50_000, 100_000, 250_000, 500_000])]
    #[allow(unused)]
    fn test_big_folder_cleaned_in_background(num_entries: usize) {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        // Here we're trying to create a folder structure similar to how Mountpoint stores local-cache.
        // Cache folder layout of a Mountpoint instance would look like:
        //
        // $ tree -L 3 --filelimit=256 /tmp/mp-cache/mountpoint-cache
        // /tmp/mp-cache/mountpoint-cache
        // └── V2
        //     ├── 00 [418 entries exceeds filelimit, not opening dir]
        //     ├── 01 [425 entries exceeds filelimit, not opening dir]
        //     ├── 02 [410 entries exceeds filelimit, not opening dir]
        //     ├── 03 [454 entries exceeds filelimit, not opening dir]
        //     ├── 04 [415 entries exceeds filelimit, not opening dir]
        //     ├── 05 [423 entries exceeds filelimit, not opening dir]
        //     ├── 06 [404 entries exceeds filelimit, not opening dir]
        //     ├── 07 [424 entries exceeds filelimit, not opening dir]
        //     ├── 08 [423 entries exceeds filelimit, not opening dir]
        //     ├── 09 [396 entries exceeds filelimit, not opening dir]
        //     ├── 0a [456 entries exceeds filelimit, not opening dir]
        //           ...
        //           256 folders in total
        let start = std::time::Instant::now();
        const NUM_PARTITIONS: usize = 256;
        for n in 0..num_entries {
            let dir = expected_path.join("V2").join(format!("{}", n % NUM_PARTITIONS));
            fs::DirBuilder::new()
                .recursive(true)
                .mode(0o775) // something that isn't the expected `0o700`
                .create(&dir)
                .unwrap();
            fs::File::create(dir.join(format!("{n}.txt"))).unwrap();
        }
        println!(
            "created cache directory with {} entries in {:?}",
            num_entries,
            start.elapsed()
        );

        let start = Instant::now();
        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None, SHOULD_CLEANUP)
            .expect("creating managed dir should succeed");
        println!("managed dir constructed in {:?}", start.elapsed());

        // `<parent_path>/mountpoint-cache` should exists with correct permissions and without any entries
        assert_dir_exists_with_permissions!(&expected_path);
        assert_eq!(
            0,
            fs::read_dir(&expected_path).unwrap().count(),
            "directory should be empty"
        );

        // Ensure old cache directory exists...
        let old_cache_dir = fs::read_dir(temp_dir.path())
            .unwrap()
            .filter_map(|res| match res {
                Ok(entry) => {
                    let path = entry.path();
                    let file_name = path.file_name().unwrap().to_str().unwrap();
                    if file_name.starts_with("old-mountpoint-cache.") {
                        Some(entry)
                    } else {
                        None
                    }
                }
                Err(_) => None,
            })
            .next()
            .expect("missing old cache directory");
        assert!(old_cache_dir.path().exists(), "old cache directory must exists");
        // ... but it should be cleaned in the background, and eventually should disappear in 5 mins
        for _ in 0..300 {
            std::thread::sleep(Duration::from_secs(1));
            if !old_cache_dir.path().exists() {
                break;
            }
        }
        assert!(
            !old_cache_dir.path().exists(),
            "old cache directory must disappear after 5 mins"
        );
        println!(
            "old cache directory {:?} cleaned up in {:?}",
            old_cache_dir.path(),
            start.elapsed()
        );

        drop(managed_dir);
        assert_dir_does_not_exist!(&expected_path, "cache folder should be cleaned on drop");

        temp_dir.close().unwrap();
    }
}
