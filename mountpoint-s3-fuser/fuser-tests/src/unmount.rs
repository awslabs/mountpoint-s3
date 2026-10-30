use std::path::Path;

use anyhow::Context;
use tokio::process::Child;

use crate::command_utils::command_success;
use crate::mount_util::assert_no_fuse_mount;
use crate::mount_util::assert_single_fuse_mount;
use crate::mount_util::wait_for_fuse_umount;

/// Unmount behavior for FUSE filesystem tests.
pub(crate) enum Unmount {
    /// Use `--auto-unmount` flag, filesystem unmounts automatically when process exits.
    Auto,
    /// Manual unmount required after process exits.
    Manual,
}

/// Kill the FUSE process and handle unmounting based on the unmount mode.
pub(crate) async fn kill_and_unmount(
    mut fuse_process: Child,
    unmount: Unmount,
    mount_path: &str,
) -> anyhow::Result<()> {
    let mountpoint = Path::new(mount_path);
    assert_single_fuse_mount(mountpoint).await?;

    fuse_process
        .kill()
        .await
        .context("Failed to kill FUSE process")?;

    match unmount {
        Unmount::Auto => {
            wait_for_fuse_umount(mountpoint).await?;
        }
        Unmount::Manual => {
            command_success(["umount", mount_path]).await?;
            assert_no_fuse_mount(mountpoint).await?;
        }
    }

    Ok(())
}
