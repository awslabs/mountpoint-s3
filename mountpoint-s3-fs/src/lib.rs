mod async_util;
pub mod autoconfigure;
mod checksums;
mod config;
pub mod data_cache;
pub mod experimental;
pub mod fs;
pub mod fuse;
pub mod logging;
#[cfg(feature = "manifest")]
pub mod manifest;
pub mod mem_limiter;
pub mod metrics;
pub mod mountspace;
pub mod object;
pub mod prefetch;
pub mod prefix;
pub mod s3;
mod superblock;
mod sync;
pub mod upload;

pub use async_util::Runtime;
pub use config::MountpointConfig;
pub use fs::{S3Filesystem, S3FilesystemConfig, ServerSideEncryption};

/// Enable tracing and CRT logging when running unit tests.
#[cfg(test)]
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = mountpoint_s3_client::config::RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}

#[cfg(test)]
#[ctor::ctor]
fn init_crt() {
    mountpoint_s3_client::config::io_library_init(&mountpoint_s3_client::config::Allocator::default());
    mountpoint_s3_client::config::s3_library_init(&mountpoint_s3_client::config::Allocator::default());
}
