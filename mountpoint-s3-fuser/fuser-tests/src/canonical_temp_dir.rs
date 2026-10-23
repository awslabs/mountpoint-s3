use std::os::unix::fs::chown;
use std::path::Path;
use std::path::PathBuf;

use anyhow::Context;
use nix::unistd::User;
use tempfile::TempDir;

/// A temporary directory that is canonicalized.
///
/// The `mount` command output may use canonical paths, so we need
/// to canonicalize the temporary directory path to match against it.
pub(crate) struct CanonicalTempDir {
    /// The underlying temporary directory (kept for cleanup on drop).
    _temp_dir: TempDir,
    /// The canonicalized path.
    path: PathBuf,
}

impl CanonicalTempDir {
    /// Creates a new temporary directory and canonicalizes its path.
    pub(crate) fn new() -> anyhow::Result<Self> {
        let temp_dir = TempDir::new().context("Failed to create temporary directory")?;
        let path = temp_dir
            .path()
            .canonicalize()
            .context("Failed to canonicalize temporary directory path")?;
        Ok(Self {
            _temp_dir: temp_dir,
            path,
        })
    }

    /// Creates a new temporary directory owned by the specified user and canonicalizes its path.
    pub(crate) async fn for_user(username: &str) -> anyhow::Result<Self> {
        let temp_dir = TempDir::new().context("Failed to create temporary directory")?;
        let user = User::from_name(username)
            .context("Failed to look up user")?
            .context(format!("User '{}' not found", username))?;
        chown(
            temp_dir.path(),
            Some(user.uid.into()),
            Some(user.gid.into()),
        )
        .context("Failed to chown temporary directory")?;
        let path = temp_dir
            .path()
            .canonicalize()
            .context("Failed to canonicalize temporary directory path")?;
        Ok(Self {
            _temp_dir: temp_dir,
            path,
        })
    }

    /// Returns the canonicalized path of the temporary directory.
    pub(crate) fn path(&self) -> &Path {
        &self.path
    }
}
