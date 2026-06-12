//! Stall-detection watchdog. Runs on its own thread, watches per-worker progress counters,
//! and flags the first worker that goes longer than its per-worker `max_idle` without
//! advancing.

use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicU64, AtomicUsize, Ordering};
use std::thread;
use std::time::{Duration, Instant};

/// Watchdog poll interval.
pub(super) const WATCHDOG_POLL: Duration = Duration::from_secs(1);

/// Sentinel value meaning "no stall detected".
pub(super) const NO_STALL: usize = usize::MAX;

pub(super) fn spawn_watchdog(
    scenario_name: String,
    labels: Vec<String>,
    max_idle_per_worker: Vec<Duration>,
    progress: Vec<Arc<AtomicU64>>,
    stop: Arc<AtomicBool>,
    stalled_worker: Arc<AtomicUsize>,
) -> thread::JoinHandle<()> {
    thread::spawn(move || {
        let start = Instant::now();
        let mut last_progress: Vec<u64> = progress.iter().map(|p| p.load(Ordering::Relaxed)).collect();
        let mut last_advance: Vec<Instant> = vec![start; progress.len()];
        while !stop.load(Ordering::Relaxed) {
            thread::sleep(WATCHDOG_POLL);
            let now = Instant::now();
            for (id, counter) in progress.iter().enumerate() {
                let current = counter.load(Ordering::Relaxed);
                if current > last_progress[id] {
                    last_progress[id] = current;
                    last_advance[id] = now;
                } else if now.duration_since(last_advance[id]) >= max_idle_per_worker[id] {
                    let snapshot: Vec<(&str, u64)> = progress
                        .iter()
                        .enumerate()
                        .map(|(i, p)| (labels[i].as_str(), p.load(Ordering::Relaxed)))
                        .collect();
                    tracing::error!(
                        scenario = %scenario_name,
                        stalled_worker = %labels[id],
                        max_idle_secs = max_idle_per_worker[id].as_secs(),
                        ?snapshot,
                        "stress: worker stalled — per-worker progress snapshot"
                    );
                    stalled_worker.store(id, Ordering::SeqCst);
                    stop.store(true, Ordering::SeqCst);
                    return;
                }
            }
        }
    })
}
