//! Utilities for reading and parsing mount output

use std::fmt;
use std::path::Path;
use std::path::PathBuf;
use std::time::Duration;
use std::time::Instant;

use anyhow::bail;

use crate::command_utils::command_output;

/// A single entry from mount output.
#[derive(Debug, PartialEq)]
pub(crate) struct MountEntry {
    pub(crate) device: String,
    pub(crate) mountpoint: PathBuf,
    pub(crate) fstype: String,
}

impl MountEntry {
    /// Returns true if this is a FUSE mount at the specified mountpoint.
    pub(crate) fn is_fuse_mount_at(&self, mountpoint: &Path) -> bool {
        let expected_fstype = if cfg!(target_os = "macos") {
            "macfuse"
        } else if cfg!(target_os = "freebsd") {
            "fusefs"
        } else {
            "fuse"
        };
        self.fstype == expected_fstype && self.mountpoint == mountpoint
    }
}

impl fmt::Display for MountEntry {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let MountEntry {
            device,
            mountpoint,
            fstype,
        } = self;
        write!(f, "{} {} {}", device, mountpoint.display(), fstype)
    }
}

/// Reads mount output and returns a list of all mount entries.
pub(crate) async fn read_mounts() -> anyhow::Result<Vec<MountEntry>> {
    let content = command_output(["mount"]).await?;

    if cfg!(target_os = "linux") {
        parse_mount_output_on_linux(&content)
    } else if cfg!(target_os = "macos") || cfg!(target_os = "freebsd") {
        parse_mount_output_on_bsd(&content)
    } else {
        bail!("mount parsing is only implemented on Linux and macOS")
    }
}

/// Waits for a FUSE mount at the specified mountpoint to appear in mount output.
pub(crate) async fn wait_for_fuse_mount(mountpoint: &Path) -> anyhow::Result<()> {
    eprintln!("Waiting for mount...");

    let start = Instant::now();

    loop {
        let entries = read_mounts().await?;
        if entries.iter().any(|e| e.is_fuse_mount_at(mountpoint)) {
            return Ok(());
        }

        if start.elapsed() > Duration::from_secs(3) {
            let mut mounts_str = String::new();
            for entry in &entries {
                mounts_str.push_str(&format!("  {}\n", entry));
            }
            bail!(
                "Timeout waiting for FUSE mount at mountpoint: {}\nAll mounts:\n{}",
                mountpoint.display(),
                mounts_str
            );
        }

        tokio::time::sleep(Duration::from_millis(50)).await;
    }
}

fn mounts_str<'a>(mounts: impl IntoIterator<Item = &'a MountEntry>) -> String {
    let mut mounts_str = String::new();
    for entry in mounts {
        mounts_str.push_str(&format!("  {}\n", entry));
    }
    mounts_str
}

/// Waits for a FUSE mount at the specified mountpoint to disappear from mount output.
pub(crate) async fn wait_for_fuse_umount(mountpoint: &Path) -> anyhow::Result<()> {
    eprintln!("Waiting for umount...");

    let start = Instant::now();

    loop {
        let entries = read_mounts().await?;
        if !entries.iter().any(|e| e.is_fuse_mount_at(mountpoint)) {
            return Ok(());
        }

        if start.elapsed() > Duration::from_secs(3) {
            bail!(
                "Timeout waiting for FUSE umount at mountpoint: {}\nAll mounts:\n{}",
                mountpoint.display(),
                mounts_str(&entries)
            );
        }

        tokio::time::sleep(Duration::from_millis(50)).await;
    }
}

pub(crate) async fn assert_no_fuse_mount(mountpoint: &Path) -> anyhow::Result<()> {
    let entries = read_mounts().await?;
    let mp_entries: Vec<&MountEntry> = entries
        .iter()
        .filter(|e| e.is_fuse_mount_at(mountpoint))
        .collect();
    if !mp_entries.is_empty() {
        bail!(
            "Expecting no mount at mountpoint {}, got {}:\nMounts:\n{}",
            mountpoint.display(),
            mp_entries.len(),
            mounts_str(mp_entries)
        );
    }
    Ok(())
}

pub(crate) async fn assert_single_fuse_mount(mountpoint: &Path) -> anyhow::Result<()> {
    let entries = read_mounts().await?;
    let mp_entries: Vec<&MountEntry> = entries
        .iter()
        .filter(|e| e.is_fuse_mount_at(mountpoint))
        .collect();
    if mp_entries.is_empty() {
        bail!(
            "Expecting single mount at mountpoint {}, got no mounts:\nAll mounts:\n{}",
            mountpoint.display(),
            mounts_str(&entries)
        );
    }
    if mp_entries.len() > 1 {
        bail!(
            "Expecting single mount at mountpoint {}, got mounts:\nMountpoint mounts:\n{}",
            mountpoint.display(),
            mounts_str(mp_entries)
        );
    }
    Ok(())
}

/// Parses the output of the `mount` command on Linux.
/// Format: device on mountpoint type fstype (options...)
fn parse_mount_output_on_linux(content: &str) -> anyhow::Result<Vec<MountEntry>> {
    let mut entries = Vec::new();
    for line in content.lines() {
        // Format: device on mountpoint type fstype (options)
        let Some((device, rest)) = line.split_once(" on ") else {
            bail!("Failed to parse mount line: missing ' on ': {}", line);
        };
        let Some((mountpoint, rest)) = rest.split_once(" type ") else {
            bail!("Failed to parse mount line: missing ' type ': {}", line);
        };
        // fstype is followed by options in parentheses, or end of line
        let fstype = rest.split_once(' ').map(|(fs, _)| fs).unwrap_or(rest);
        entries.push(MountEntry {
            device: device.to_owned(),
            mountpoint: PathBuf::from(mountpoint),
            fstype: fstype.to_owned(),
        });
    }
    Ok(entries)
}

/// Parses the output of the `mount` command on macOS.
/// Format: device on mountpoint (fstype, options...)
fn parse_mount_output_on_bsd(content: &str) -> anyhow::Result<Vec<MountEntry>> {
    let mut entries = Vec::new();
    for line in content.lines() {
        // Format: device on mountpoint (fstype, options...)
        let Some((device, rest)) = line.split_once(" on ") else {
            bail!("Failed to parse mount line: missing ' on ': {}", line);
        };
        // Find the last occurrence of " (" to separate mountpoint from options
        let Some(paren_pos) = rest.rfind(" (") else {
            bail!(
                "Failed to parse mount line: missing ' (' for options: {}",
                line
            );
        };
        let mountpoint = &rest[..paren_pos];
        let options_part = &rest[paren_pos + 2..]; // Skip " ("
        // Remove trailing ")" and get the first option which is the fstype
        let options_part = options_part.trim_end_matches(')');
        let fstype = options_part.split(',').next().unwrap_or("").trim();
        entries.push(MountEntry {
            device: device.to_owned(),
            mountpoint: PathBuf::from(mountpoint),
            fstype: fstype.to_owned(),
        });
    }
    Ok(entries)
}

#[cfg(test)]
mod tests {
    use std::path::PathBuf;

    use crate::mount_util::MountEntry;
    use crate::mount_util::parse_mount_output_on_bsd;
    use crate::mount_util::parse_mount_output_on_linux;

    #[test]
    fn test_parse_mount_output_on_linux() {
        let content = r#"/dev/sda1 on / type ext4 (rw,relatime,discard,errors=remount-ro,commit=30)
devtmpfs on /dev type devtmpfs (rw,nosuid,noexec,relatime,size=16426972k,nr_inodes=4106743,mode=755,inode64)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)
"#;
        let entries = parse_mount_output_on_linux(content).unwrap();
        assert_eq!(
            entries,
            vec![
                MountEntry {
                    device: "/dev/sda1".to_owned(),
                    mountpoint: PathBuf::from("/"),
                    fstype: "ext4".to_owned()
                },
                MountEntry {
                    device: "devtmpfs".to_owned(),
                    mountpoint: PathBuf::from("/dev"),
                    fstype: "devtmpfs".to_owned()
                },
                MountEntry {
                    device: "proc".to_owned(),
                    mountpoint: PathBuf::from("/proc"),
                    fstype: "proc".to_owned()
                },
                MountEntry {
                    device: "sysfs".to_owned(),
                    mountpoint: PathBuf::from("/sys"),
                    fstype: "sysfs".to_owned()
                },
            ]
        );
    }

    #[test]
    fn test_parse_mount_output_on_bsd() {
        let content = r#"/dev/disk3s1s1 on / (apfs, sealed, local, read-only, journaled)
devfs on /dev (devfs, local, nobrowse)
map auto_home on /System/Volumes/Data/home (autofs, automounted, nobrowse)
"#;
        let entries = parse_mount_output_on_bsd(content).unwrap();
        assert_eq!(
            entries,
            vec![
                MountEntry {
                    device: "/dev/disk3s1s1".to_owned(),
                    mountpoint: PathBuf::from("/"),
                    fstype: "apfs".to_owned()
                },
                MountEntry {
                    device: "devfs".to_owned(),
                    mountpoint: PathBuf::from("/dev"),
                    fstype: "devfs".to_owned()
                },
                MountEntry {
                    device: "map auto_home".to_owned(),
                    mountpoint: PathBuf::from("/System/Volumes/Data/home"),
                    fstype: "autofs".to_owned()
                },
            ]
        );
    }
}
