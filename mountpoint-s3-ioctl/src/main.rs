use clap::Parser;
use mountpoint_s3_ioctl::{S3ObjectVersionBuffer, ioctl_mount_s3_set_inode_version};
use std::os::fd::AsRawFd;

#[derive(Parser)]
enum Args {
    /// Set the S3 object version ID for the given file.
    /// This version ID will be used for all S3 operations on the file.
    /// If the version ID is an empty string, any existing version information will be removed and
    /// the latest version will be used.
    SetVersion {
        /// Path to the file on the mountpoint handled by `mountpoint-s3`.
        file: String,
        /// S3 object version ID to set for the file.
        version: String,
    },
}

fn main() {
    let args = Args::parse();

    match args {
        Args::SetVersion { file, version } => {
            set_inode_version(&file, &version);
        }
    }
}

fn set_inode_version(file: &str, version: &str) {
    let fd = std::fs::File::open(file).unwrap_or_else(|e| {
        eprintln!("Failed to open file '{}': {}", file, e);
        std::process::exit(1);
    });
    let version_buffer = S3ObjectVersionBuffer::try_from(version).unwrap();

    let result = unsafe { ioctl_mount_s3_set_inode_version(fd.as_raw_fd(), std::slice::from_ref(&version_buffer)) };

    if let Err(e) = result {
        eprintln!("Failed to set S3 object version for file '{}': {}", file, e);
        std::process::exit(1);
    }
}
