pub mod fs;
pub mod fuse;
mod inode;
pub mod metrics;
pub mod prefetch;
mod sync;

pub use fs::{S3Filesystem, S3FilesystemConfig};

/// Enable tracing and CRT logging when running unit tests.
#[cfg(test)]
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}

pub const EXAMPLE_STRING: &str = "Hello World";
