//! Long-running stress tests.
// Gated to Linux: the readers use `O_DIRECT` (Linux-only in `libc`; macOS has no such flag), and
// the stress harness targets the Linux CI runner.
#![cfg(all(feature = "stress_tests", target_os = "linux"))]

use tikv_jemallocator::Jemalloc;

#[global_allocator]
static GLOBAL: Jemalloc = Jemalloc;

/// Matches the compiled-in jemalloc config of the `mount-s3` binary so the stress harness measures
/// the allocator settings that ship. Overridable at runtime via `_RJEM_MALLOC_CONF`.
// SAFETY: overrides jemalloc's weak `_rjem_malloc_conf` symbol, which it reads as a NUL-terminated
// options string during initialisation. The value below is NUL-terminated.
#[allow(non_upper_case_globals)]
#[unsafe(export_name = "_rjem_malloc_conf")]
pub static malloc_conf: &[u8] = b"abort_conf:true,background_thread:true,narenas:32\0";

mod common;
mod stress;
