pub mod autoconfigure;
mod checksums;
pub mod data_cache;
pub mod fs;
pub mod fuse;
mod inode;
pub mod logging;
pub mod metrics;
mod object;
pub mod prefetch;
pub mod prefix;
mod sync;
mod upload;

pub use fs::{S3Filesystem, S3FilesystemConfig};

/// Enable tracing and CRT logging when running unit tests.
#[cfg(test)]
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}
