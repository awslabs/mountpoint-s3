pub mod fs;
pub mod fuse;
mod inode;
pub mod metrics;
pub mod prefetch;

pub use fs::{S3Filesystem, S3FilesystemConfig};

/// Enable tracing and CRT logging when running unit tests.
#[cfg(test)]
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = aws_crt_s3::common::rust_log_adapter::RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}
