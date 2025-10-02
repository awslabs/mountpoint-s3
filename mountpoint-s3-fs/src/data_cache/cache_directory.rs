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
        let mountpoint_cache_path = parent_path.as_ref().join("mountpoint-cache");
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
            managed_cache_dir.remove()?;
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
        if let Err(remove_dir_err) = fs::remove_dir_all(&self.mountpoint_cache_path) {
            match remove_dir_err.kind() {
                io::ErrorKind::NotFound => (),
                _kind => return Err(ManagedCacheDirError::CleanupFailure(remove_dir_err)),
            }
        }
        tracing::trace!(cache_subdirectory = ?self.mountpoint_cache_path, "cache sub-directory removal complete");
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

#[cfg(test)]
mod tests {
    use test_case::test_matrix;

    use super::{ManagedCacheDir, hash_cache_key};

    use std::ffi::OsStr;
    use std::fs;
    use std::os::unix::ffi::OsStrExt as _;
    use std::os::unix::fs::{DirBuilderExt, PermissionsExt};

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
}
