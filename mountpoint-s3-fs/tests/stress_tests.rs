//! Long-running stress tests.
// Gated to Linux: the readers use `O_DIRECT` (Linux-only in `libc`; macOS has no such flag), and
// the stress harness targets the Linux CI runner.
#![cfg(all(feature = "stress_tests", target_os = "linux"))]

use tikv_jemallocator::Jemalloc;

#[global_allocator]
static GLOBAL: Jemalloc = Jemalloc;

// Keep in sync with the `mount-s3` binary's jemalloc config, see `mountpoint-s3/src/main.rs`.
#[allow(non_upper_case_globals)]
#[unsafe(export_name = "_rjem_malloc_conf")]
pub static malloc_conf: &[u8] = b"abort_conf:true,background_thread:true,narenas:32\0";

mod common;
mod stress;
