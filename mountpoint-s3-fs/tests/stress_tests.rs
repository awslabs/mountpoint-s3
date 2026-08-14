//! Long-running stress tests.
// Gated to Linux: the readers use `O_DIRECT` (Linux-only in `libc`; macOS has no such flag), and
// the stress harness targets the Linux CI runner.
#![cfg(all(feature = "stress_tests", target_os = "linux"))]

mod common;
mod stress;
