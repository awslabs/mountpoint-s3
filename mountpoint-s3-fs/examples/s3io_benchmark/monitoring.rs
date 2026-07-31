use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};
use std::time::Duration;
use sysinfo::{ProcessRefreshKind, ProcessesToUpdate, System, get_current_pid};

/// Memory monitor that tracks peak RSS usage
/// Adapted from metrics.rs
#[derive(Default)]
pub struct MemoryMonitor {
    peak_memory: Arc<AtomicU64>,
    monitor_handle: Option<tokio::task::JoinHandle<()>>,
}

impl MemoryMonitor {
    pub fn start(&mut self, interval: Option<Duration>) {
        let peak_memory = Arc::clone(&self.peak_memory);
        let interval = interval.unwrap_or(Duration::from_millis(100));
        let handle = tokio::spawn(async move {
            monitor_memory_loop(peak_memory, interval).await;
        });
        self.monitor_handle = Some(handle);
    }

    pub fn stop(&mut self) {
        if let Some(handle) = self.monitor_handle.take() {
            handle.abort();
        }

        // Poll memory one final time
        let mut sys = System::new();
        if let Ok(pid) = get_current_pid() {
            sys.refresh_processes_specifics(
                ProcessesToUpdate::Some(&[pid]),
                false,
                ProcessRefreshKind::nothing().with_memory(),
            );
            if let Some(process) = sys.process(pid) {
                let current_memory = process.memory();
                self.peak_memory.fetch_max(current_memory, Ordering::Relaxed);
            }
        }
    }

    /// Get the peak memory usage in MiB
    pub fn peak_memory_mib(&self) -> f64 {
        let peak_bytes = self.peak_memory.load(Ordering::Relaxed);
        peak_bytes as f64 / (1024.0 * 1024.0)
    }
}

/// Monitor memory usage and track peak RSS
async fn monitor_memory_loop(peak_memory: Arc<AtomicU64>, interval: Duration) {
    let mut sys = System::new();
    let pid = get_current_pid().expect("Failed to get current PID");

    loop {
        sys.refresh_processes_specifics(
            ProcessesToUpdate::Some(&[pid]),
            false,
            ProcessRefreshKind::nothing().with_memory(),
        );

        if let Some(process) = sys.process(pid) {
            let current_memory = process.memory();
            peak_memory.fetch_max(current_memory, Ordering::Relaxed);
        }

        tokio::time::sleep(interval).await;
    }
}
