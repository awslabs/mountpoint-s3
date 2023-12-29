//! Provides functionality related to the inner cache directory Mountpoint creates or uses.
//! Mountpoint attempts to cleanup the contents during mount and exit.
//!
//! Mountpoint uses a directory inside the user-provided cache directory
//! to mitigate any impact from the user providing a directory that already contains data.
//! Using a new sub-directory minimizes the interference with the existing directory structure,
//! and limits the risk from deleting or overwriting data to files written within this sub-directory.

use std::fs;
use std::io;
use std::os::unix::fs::DirBuilderExt;
use std::path::{Path, PathBuf};

use thiserror::Error;

/// Cache directory that has been created and emptied, and will be emptied when dropped.
#[derive(Debug)]
pub struct ManagedCacheDir {
    managed_path: PathBuf,
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
    /// If the directory already exists, it will be deleted before being recreated.
    pub fn new_from_parent<P: AsRef<Path>>(parent_path: P) -> Result<Self, ManagedCacheDirError> {
        let managed_cache_dir = Self {
            managed_path: parent_path.as_ref().join("mountpoint-cache"),
        };

        managed_cache_dir.remove()?;

        let mkdir_result = fs::DirBuilder::new().mode(0o700).create(managed_cache_dir.as_path());
        if let Err(mkdir_err) = mkdir_result {
            match mkdir_err.kind() {
                io::ErrorKind::AlreadyExists => tracing::warn!(
                    cache_dir = ?managed_cache_dir.as_path(),
                    "cache sub-directory already existed immediately after removal",
                ),
                _kind => return Err(ManagedCacheDirError::CreationFailure(mkdir_err)),
            }
        }

        Ok(managed_cache_dir)
    }

    /// Remove the cache sub-directory, along with its contents if any
    fn remove(&self) -> Result<(), ManagedCacheDirError> {
        tracing::debug!(cache_subdirectory = ?self.managed_path, "removing the cache sub-directory and any contents");
        if let Err(remove_dir_err) = fs::remove_dir_all(&self.managed_path) {
            match remove_dir_err.kind() {
                io::ErrorKind::NotFound => (),
                _kind => return Err(ManagedCacheDirError::CleanupFailure(remove_dir_err)),
            }
        }
        tracing::trace!(cache_subdirectory = ?self.managed_path, "cache sub-directory removal complete");
        Ok(())
    }

    /// Retrieve a reference to the managed path
    pub fn as_path(&self) -> &Path {
        self.managed_path.as_path()
    }

    /// Create an owned copy of the managed path
    pub fn as_path_buf(&self) -> PathBuf {
        self.managed_path.clone()
    }
}

impl Drop for ManagedCacheDir {
    fn drop(&mut self) {
        if let Err(err) = self.remove() {
            tracing::error!(cache_subdirectory = ?self.managed_path, "failed to remove cache sub-directory: {err}");
        }
    }
}

#[cfg(test)]
mod tests {
    use super::ManagedCacheDir;

    use std::fs;
    use std::os::unix::fs::{DirBuilderExt, PermissionsExt};

    const EXPECTED_DIR_MODE: u32 = 0o700;

    #[test]
    fn test_unused() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir =
            ManagedCacheDir::new_from_parent(temp_dir.path()).expect("creating managed dir should succeed");
        let dir_mode = fs::metadata(&expected_path)
            .expect("path should exist")
            .permissions()
            .mode();
        assert_eq!(
            dir_mode & 0o777,
            EXPECTED_DIR_MODE,
            "path should have {EXPECTED_DIR_MODE:#o} permission mode but had {dir_mode:#o}",
        );

        drop(managed_dir);
        assert!(
            !expected_path.try_exists().unwrap(),
            "{expected_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }

    #[test]
    fn test_used() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir =
            ManagedCacheDir::new_from_parent(temp_dir.path()).expect("creating managed dir should succeed");
        let dir_mode = fs::metadata(&expected_path)
            .expect("path should exist")
            .permissions()
            .mode();
        assert_eq!(
            dir_mode & 0o777,
            EXPECTED_DIR_MODE,
            "path should have {EXPECTED_DIR_MODE:#o} permission mode but had {dir_mode:#o}",
        );

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
    fn test_already_exists() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        fs::DirBuilder::new()
            .recursive(true)
            .mode(0o775) // something that isn't the expected `0o700`
            .create(expected_path.join("dir"))
            .unwrap();
        fs::File::create(expected_path.join("dir/file.txt")).unwrap();

        let managed_dir =
            ManagedCacheDir::new_from_parent(temp_dir.path()).expect("creating managed dir should succeed");

        let dir_mode = fs::metadata(&expected_path)
            .expect("path should exist")
            .permissions()
            .mode();
        assert_eq!(
            dir_mode & 0o777,
            EXPECTED_DIR_MODE,
            "path should have {EXPECTED_DIR_MODE:#o} permission mode but had {dir_mode:#o}",
        );

        let dir_entries = fs::read_dir(&expected_path).unwrap().count();
        assert!(dir_entries == 0, "directory should be empty");

        drop(managed_dir);
        assert!(
            !expected_path.try_exists().unwrap(),
            "{expected_path:?} should not exist"
        );

        temp_dir.close().unwrap();
    }
}
