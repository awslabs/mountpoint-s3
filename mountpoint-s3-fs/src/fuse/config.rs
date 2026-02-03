use std::os::fd::RawFd;
use std::path::{Path, PathBuf};

#[cfg(target_os = "linux")]
use std::os::fd::AsRawFd as _;

use anyhow::anyhow;
use fuser::MountOption;
use regex::Regex;

/// Configuration for a FUSE background session.
#[derive(Debug)]
pub struct FuseSessionConfig {
    pub(crate) mount_point: MountPoint,
    pub(crate) options: Vec<MountOption>,
    pub(crate) max_threads: usize,
    pub(crate) clone_fuse_fd: bool,
}

/// Mount options to be passed to FUSE.
#[derive(Debug, Default)]
pub struct FuseOptions {
    /// Mount file system in read-only mode
    pub read_only: bool,
    /// Automatically unmount on exit
    pub auto_unmount: bool,
    /// Allow root user to access file system
    pub allow_root: bool,
    /// Allow other users, including root, to access file system
    pub allow_other: bool,
    /// UNSTABLE: Use clone_fd optimization?
    pub clone_fd: bool,
}

impl FuseSessionConfig {
    pub fn new(mount_point: MountPoint, fuse_options: FuseOptions, max_threads: usize) -> anyhow::Result<Self> {
        let fs_name = String::from("mountpoint-s3");
        let mut options = vec![
            MountOption::DefaultPermissions,
            MountOption::FSName(fs_name),
            MountOption::NoAtime,
        ];
        if fuse_options.read_only {
            options.push(MountOption::RO);
        }
        if fuse_options.auto_unmount {
            options.push(MountOption::AutoUnmount);
        }
        if fuse_options.allow_root {
            options.push(MountOption::AllowRoot);
        }
        if fuse_options.allow_other {
            options.push(MountOption::AllowOther);
        }

        #[cfg(target_os = "linux")]
        if matches!(mount_point, MountPoint::FileDescriptor(_)) {
            let passed_mount_options = &[
                (fuse_options.read_only, "--read-only"),
                (fuse_options.auto_unmount, "--auto-unmount"),
            ]
            .iter()
            .filter(|o| o.0)
            .map(|o| o.1)
            .collect::<Vec<_>>();

            if !passed_mount_options.is_empty() {
                return Err(anyhow!(
                    "Mount options: {} are ignored with FUSE fd mount point.\
                    Mount options should be passed while performing `mount` syscall in the caller process.",
                    passed_mount_options.join(", ")
                ));
            }
        }

        Ok(Self {
            mount_point,
            options,
            max_threads,
            clone_fuse_fd: fuse_options.clone_fd,
        })
    }

    pub fn mount_point(&self) -> &MountPoint {
        &self.mount_point
    }
}

/// OS mount point where S3 file system should be mounted.
/// This is typically a [Directory], but may be a different variant for more advanced use cases.
#[derive(Debug)]
pub enum MountPoint {
    /// Directory to mount the new S3 filesystem at.
    Directory(PathBuf),
    /// Use a FUSE file descriptor that has already been opened and mounted.
    #[cfg(target_os = "linux")]
    FileDescriptor(std::os::fd::OwnedFd),
}

impl MountPoint {
    pub fn new(mount_point: impl AsRef<Path>) -> anyhow::Result<Self> {
        match parse_fd_from_mount_point(&mount_point) {
            Some(fd) => MountPoint::from_fd(fd),
            None => MountPoint::from_directory(mount_point),
        }
    }

    #[cfg(not(target_os = "linux"))]
    fn from_fd(_: RawFd) -> anyhow::Result<Self> {
        Err(anyhow!("Passing a FUSE file descriptor only supported on Linux"))
    }

    #[cfg(target_os = "linux")]
    fn from_fd(fd: RawFd) -> anyhow::Result<Self> {
        const FUSE_DEV: &str = "/dev/fuse";

        use procfs::{
            ProcError,
            process::{FDPermissions, FDTarget, Process},
        };
        use std::os::fd::{FromRawFd, OwnedFd};

        let mount_point = format!("/dev/fd/{fd}");

        let process = Process::myself().unwrap();
        let fd_info = match process.fd_from_fd(fd) {
            Ok(fd_info) => fd_info,
            Err(ProcError::NotFound(_)) => {
                return Err(anyhow!("mount point {} is not a valid file descriptor", &mount_point));
            }
            Err(err) => {
                return Err(anyhow!(
                    "failed to get file descriptor information for mount point {}: {}",
                    &mount_point,
                    err
                ));
            }
        };
        let FDTarget::Path(path) = &fd_info.target else {
            return Err(anyhow!(
                "expected mount point {} to be a {} device file descriptor but got {:?}",
                &mount_point,
                FUSE_DEV,
                fd_info.target
            ));
        };
        if path != &PathBuf::from(FUSE_DEV) {
            return Err(anyhow!(
                "expected mount point {} to be a {} file descriptor but got {}",
                &mount_point,
                FUSE_DEV,
                path.display()
            ));
        }

        if !fd_info.mode().contains(FDPermissions::READ | FDPermissions::WRITE) {
            return Err(anyhow!(
                "expected mount point {} file descriptor to have read and write permissions but got {:?}",
                &mount_point,
                fd_info.mode()
            ));
        }

        // SAFETY: `fd` is validated to be a valid FUSE file descriptor, and it is documented
        // for users of this feature to give ownership of this file descriptor to Mountpoint.
        let owned_fd = unsafe { OwnedFd::from_raw_fd(fd) };

        Ok(MountPoint::FileDescriptor(owned_fd))
    }

    fn from_directory(mount_point: impl AsRef<Path>) -> anyhow::Result<Self> {
        let path = mount_point.as_ref();

        if !path.exists() {
            return Err(anyhow!("mount point {} does not exist", path.display()));
        }

        if !path.is_dir() {
            return Err(anyhow!("mount point {} is not a directory", path.display()));
        }

        #[cfg(target_os = "linux")]
        {
            use procfs::process::Process;

            // This is a best-effort validation, so don't fail if we can't read /proc/self/mountinfo for
            // some reason.
            match Process::myself().and_then(|me| me.mountinfo()) {
                Ok(mounts) => {
                    if mounts
                        .0
                        .iter()
                        .any(|mount| mount.mount_point == path && mount.fs_type != "autofs")
                    {
                        return Err(anyhow!("mount point {} is already mounted", path.display()));
                    }
                }
                Err(e) => {
                    tracing::debug!("failed to read mountinfo, not checking for existing mounts: {e:?}");
                }
            };
        }

        Ok(MountPoint::Directory(mount_point.as_ref().to_owned()))
    }
}

impl std::fmt::Display for MountPoint {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            MountPoint::Directory(path) => write!(f, "{}", path.display()),
            #[cfg(target_os = "linux")]
            MountPoint::FileDescriptor(fd) => write!(f, "/dev/fd/{}", fd.as_raw_fd()),
        }
    }
}

/// Parses file descriptor from given mount point.
/// The syntax for passing file descriptors as mount points is "/dev/fd/N",
/// and this function basically returns "N".
fn parse_fd_from_mount_point(path: impl AsRef<Path>) -> Option<RawFd> {
    let re = Regex::new(r"^/dev/fd/(?<fd>\d+)$").unwrap();
    let path = path.as_ref().to_str()?;
    let caps = re.captures(path)?;
    let fd = &caps["fd"];
    fd.parse().ok()
}

#[cfg(test)]
mod tests {
    use test_case::test_case;

    use super::*;

    #[test_case("/dev/fd/3", Some(3); "valid file descriptor")]
    #[test_case("/dev/fd/378", Some(378); "long valid file descriptor")]
    #[test_case("/dev/fd/-1", None; "invalid file descriptor")]
    #[test_case("/mnt/fd/3", None; "a folder with number")]
    #[test_case("/mnt/fd/378", None; "a folder with a longer number")]
    #[test_case("/mnt/mp", None; "a folder")]
    #[test_case("", None; "empty")]
    fn test_parsing_fuse_fd_from_mount_point(mount_point: &str, expected: Option<RawFd>) {
        assert_eq!(expected, parse_fd_from_mount_point(mount_point));
    }
}
