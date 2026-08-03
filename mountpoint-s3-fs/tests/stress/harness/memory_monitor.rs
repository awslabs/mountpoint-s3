//! Memory monitor thread. Populates the `process.memory_usage` gauge with the OS-reported
//! RSS so teardown invariants can assert on peak process memory.

use std::sync::Arc;
use std::sync::atomic::{AtomicBool, Ordering};
use std::thread;
use std::time::Duration;

use mountpoint_s3_fs::metrics::defs::PROCESS_MEMORY_USAGE;
use sysinfo::{ProcessRefreshKind, ProcessesToUpdate, System, get_current_pid};

/// Spawn a thread that samples the current process's RSS every `interval` and records it
/// into the `process.memory_usage` gauge, matching the metric name the production binary
/// emits from `mountpoint_s3_fs::metrics::poll_process_metrics`.
pub(super) fn spawn_memory_monitor(stop: Arc<AtomicBool>, interval: Duration) -> thread::JoinHandle<()> {
    thread::spawn(move || {
        let Ok(pid) = get_current_pid() else {
            tracing::warn!("stress: get_current_pid failed; memory monitor disabled");
            return;
        };
        let mut sys = System::new();
        let sample = |sys: &mut System| {
            sys.refresh_processes_specifics(
                ProcessesToUpdate::Some(&[pid]),
                false,
                ProcessRefreshKind::nothing().with_memory(),
            );
            if let Some(process) = sys.process(pid) {
                metrics::gauge!(PROCESS_MEMORY_USAGE).set(process.memory() as f64);
            }
        };
        while !stop.load(Ordering::Relaxed) {
            sample(&mut sys);
            thread::sleep(interval);
        }
        // Final sample so the teardown peak is captured.
        sample(&mut sys);
    })
}
