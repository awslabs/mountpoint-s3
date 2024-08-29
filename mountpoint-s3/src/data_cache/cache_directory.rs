//! Provides functionality related to the inner cache directory Mountpoint creates or uses.
//! Mountpoint attempts to cleanup the contents during mount and exit.
//!
//! Mountpoint uses a directory inside the user-provided cache directory
//! to mitigate any impact from the user providing a directory that already contains data.
//! Using a new sub-directory minimizes the interference with the existing directory structure,
//! and limits the risk from deleting or overwriting data to files written within this sub-directory.

use sha2::{Digest, Sha256};
use std::ffi::OsString;
use std::fs;
use std::io;
use std::os::unix::fs::DirBuilderExt;
use std::os::unix::prelude::OsStrExt;
use std::path::{Path, PathBuf};

use thiserror::Error;

/// Cache directory that has been created and emptied, and will be emptied when dropped.
/// When using a `cache_key`, the key is hashed and added as a subdirectory of `mountpoint-cache`.
#[derive(Debug)]
pub struct ManagedCacheDir {
    /// `<parent_path>/mountpoint-cache`
    mountpoint_cache_path: PathBuf,
    /// `<parent_path>/mountpoint-cache` or `<parent_path>/mountpoint-cache/<hashed_cache_key>`
    managed_cache_path: PathBuf,
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
    /// If `<parent_path>/mountpoint-cache` already exists, it will be deleted before being
    /// recreated. This can cause performance degradation, but will never result in unused caches
    /// being retained, assuming other Mountpoint instances are being ran on the host.
    pub fn new_from_parent_with_cache_key(
        parent_path: impl AsRef<Path>,
        cache_key: Option<OsString>,
    ) -> Result<Self, ManagedCacheDirError> {
        let mountpoint_cache_path = parent_path.as_ref().join("mountpoint-cache");
        let managed_cache_path = match cache_key {
            None => mountpoint_cache_path.clone(),
            Some(ref cache_key) => mountpoint_cache_path.join(hash_cache_key(cache_key.as_bytes())),
        };
        let managed_cache_dir = Self {
            mountpoint_cache_path,
            managed_cache_path,
        };

        managed_cache_dir.remove()?;
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
                io::ErrorKind::AlreadyExists => tracing::warn!(
                    cache_dir = ?path,
                    "cache sub-directory already existed immediately after removal",
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
        if let Err(err) = self.remove() {
            tracing::error!(cache_subdirectory = ?self.mountpoint_cache_path, "failed to remove cache sub-directory: {err}");
        }
    }
}

/// Hash the cache_key to avoid path traversal attacks.
fn hash_cache_key(cache_key: &[u8]) -> String {
    let mut hasher = Sha256::new();
    hasher.update(cache_key);
    let hashed_key: [u8; 32] = hasher.finalize().into();
    hex::encode(hashed_key)
}

#[cfg(test)]
mod tests {
    use super::{hash_cache_key, ManagedCacheDir};
    use std::ffi::OsString;

    use std::fs;
    use std::os::unix::ffi::OsStrExt;
    use std::os::unix::fs::{DirBuilderExt, PermissionsExt};
    use std::path::PathBuf;

    const EXPECTED_DIR_MODE: u32 = 0o700;

    #[test]
    fn test_unused() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None)
            .expect("creating managed dir should succeed");
        assert_dir_exists_with_permissions(&expected_path);

        drop(managed_dir);
        assert!(
            !expected_path.try_exists().unwrap(),
            "{expected_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }

    #[test]
    fn test_cache_key_unused() {
        let temp_dir = tempfile::tempdir().unwrap();
        let cache_key = OsString::from("cache_key");
        let mp_cache_path = temp_dir.path().join("mountpoint-cache");
        let expected_path = mp_cache_path.join(hash_cache_key(cache_key.as_bytes()));

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), Some(cache_key))
            .expect("creating managed dir should succeed");
        assert_dir_does_not_exist(&mp_cache_path.join("cache_key"));
        assert_dir_exists_with_permissions(&expected_path);

        drop(managed_dir);
        assert!(
            !mp_cache_path.try_exists().unwrap(),
            "{mp_cache_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }

    #[test]
    fn test_used() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None)
            .expect("creating managed dir should succeed");
        assert_dir_exists_with_permissions(&expected_path);

        fs::File::create(expected_path.join("file.txt"))
            .expect("should be able to create file within managed directory");
        fs::create_dir(expected_path.join("dir")).expect("should be able to create dir within managed directory");
        fs::File::create(expected_path.join("dir/file.txt"))
            .expect("should be able to create file within subdirectory");

        drop(managed_dir);
        assert!(
            !expected_path.try_exists().unwrap(),
            "{expected_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }

    #[test]
    fn test_cache_key_used() {
        let temp_dir = tempfile::tempdir().unwrap();
        let cache_key = OsString::from("cache_key");
        let mp_cache_path = temp_dir.path().join("mountpoint-cache");
        let expected_path = mp_cache_path.join(hash_cache_key(cache_key.as_bytes()));

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), Some(cache_key))
            .expect("creating managed dir should succeed");
        assert_dir_does_not_exist(&mp_cache_path.join("cache_key"));
        assert_dir_exists_with_permissions(&expected_path);

        fs::File::create(expected_path.join("file.txt"))
            .expect("should be able to create file within managed directory");
        fs::create_dir(expected_path.join("dir")).expect("should be able to create dir within managed directory");
        fs::File::create(expected_path.join("dir/file.txt"))
            .expect("should be able to create file within subdirectory");

        drop(managed_dir);
        assert!(
            !mp_cache_path.try_exists().unwrap(),
            "{expected_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }

    #[test]
    fn test_already_exists() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        fs::DirBuilder::new()
            .recursive(true)
            .mode(0o775) // something that isn't the expected `0o700`
            .create(expected_path.join("dir"))
            .unwrap();
        fs::File::create(expected_path.join("dir/file.txt")).unwrap();

        let managed_dir = ManagedCacheDir::new_from_parent_with_cache_key(temp_dir.path(), None)
            .expect("creating managed dir should succeed");

        assert_dir_exists_with_permissions(&expected_path);

        let dir_entries = fs::read_dir(&expected_path).unwrap().count();
        assert!(dir_entries == 0, "directory should be empty");

        drop(managed_dir);
        assert!(
            !expected_path.try_exists().unwrap(),
            "{expected_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }

    fn assert_dir_does_not_exist(expected_path: &PathBuf) {
        assert!(fs::metadata(expected_path).is_err());
    }

    fn assert_dir_exists_with_permissions(expected_path: &PathBuf) {
        let dir_mode = fs::metadata(expected_path)
            .expect("path should exist")
            .permissions()
            .mode();
        assert_eq!(
            dir_mode & 0o777,
            EXPECTED_DIR_MODE,
            "path should have {EXPECTED_DIR_MODE:#o} permission mode but had {dir_mode:#o}",
        );
    }
}
