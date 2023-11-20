//! Provides functionality related to the inner cache directory Mountpoint creates or uses.
//! Mountpoint attempts to cleanup the contents during mount and exit.
//!
//! Mountpoint uses a directory inside the user-provided cache directory
//! to mitigate any impact from the user providing a directory that already contains data.
//! Using a new sub-directory minimizes the interference with the existing directory structure,
//! and limits the risk from deleting or overwriting data to files written within this sub-directory.

use std::fs;
use std::io;
use std::path::{Path, PathBuf};

use thiserror::Error;

/// Cache directory that has been created and emptied, and will be emptied when dropped.
#[derive(Debug)]
pub struct ManagedCacheDir {
    managed_path: PathBuf,
    /// Used to prevent double cleanup with `close(self)` and [Drop]
    closed: bool,
}

#[derive(Debug, Error)]
pub enum ManagedCacheDirError {
    #[error("creation of cache sub-directory failed due to IO error: {0}")]
    CreationFailure(#[source] io::Error),
    #[error("cleanup of cache sub-directory failed due to IO error: {0}")]
    CleanupFailure(#[source] io::Error),
}

impl ManagedCacheDir {
    /// Create a new directory inside the provided parent path, cleaning it of any contents if it already exists.
    pub fn new_from_parent<P: AsRef<Path>>(parent_path: P) -> Result<Self, ManagedCacheDirError> {
        let managed_path = parent_path.as_ref().join("mountpoint-cache");

        if let Err(mkdir_err) = fs::create_dir(&managed_path) {
            match mkdir_err.kind() {
                io::ErrorKind::AlreadyExists => (),
                _kind => return Err(ManagedCacheDirError::CreationFailure(mkdir_err)),
            }
        }

        let managed_cache_dir = Self {
            managed_path,
            closed: false,
        };
        managed_cache_dir.clean()?;

        Ok(managed_cache_dir)
    }

    /// Remove the cache sub-directory
    fn clean(&self) -> Result<(), ManagedCacheDirError> {
        tracing::debug!(cache_subdirectory = ?self.managed_path, "cleaning up contents of cache sub-directory");
        if let Err(e) = fs::remove_dir_all(&self.managed_path) {
            match e.kind() {
                io::ErrorKind::NotFound => (),
                _kind => return Err(ManagedCacheDirError::CleanupFailure(e)),
            }
        }
        tracing::trace!(cache_subdirectory = ?self.managed_path, "cleanup complete");
        Ok(())
    }

    /// Delete the managed cache directory, waiting until complete.
    ///
    /// This directory should also be cleaned as part of [Drop], however this is not always guaranteed.
    pub fn close(mut self) -> Result<(), ManagedCacheDirError> {
        let result = self.clean();
        if result.is_ok() {
            self.closed = true;
        }
        result
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
        if !self.closed {
            if let Err(err) = self.clean() {
                tracing::error!(managed_cache_path = ?self.managed_path, "failed to clean cache directory: {err}");
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::ManagedCacheDir;

    use std::fs;

    #[test]
    fn test_unused() {
        let temp_dir = tempfile::tempdir().unwrap();
        let expected_path = temp_dir.path().join("mountpoint-cache");

        let managed_dir =
            ManagedCacheDir::new_from_parent(temp_dir.path()).expect("creating managed dir should succeed");
        assert!(expected_path.try_exists().unwrap(), "{expected_path:?} should exist");

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
        assert!(expected_path.try_exists().unwrap(), "{expected_path:?} should exist");

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

        fs::create_dir_all(expected_path.join("dir")).unwrap();
        fs::File::create(expected_path.join("dir/file.txt")).unwrap();

        let managed_dir =
            ManagedCacheDir::new_from_parent(temp_dir.path()).expect("creating managed dir should succeed");
        assert!(expected_path.try_exists().unwrap(), "{expected_path:?} should exist");

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
