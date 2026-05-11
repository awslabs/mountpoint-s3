//! Background buffer-pruning engine for [`MemoryLimiter`].
//!
//! The pruner owns the loop, the wake signal, the round orchestration, and the
//! coalescing tick. It calls back into the pool/limiter for the actual decisions
//! (which handles to inspect, which buffers to release).

use std::sync::OnceLock;
use std::time::Duration;

use tracing::trace;

use crate::sync::thread::{self, JoinHandle, Thread};
use crate::sync::{Arc, Weak};

use super::pool::PagedPoolInner;
use super::stats::BufferKind;

/// Outcome of a single pruning round. Used for metrics and tracing.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum PruningOutcome {
    /// Nothing to prune (queue empty). Pressure is defined as
    /// "queue non-empty", so an empty queue means pressure has already cleared.
    Idle,
    /// In-flight uploads or active reads will release buffers naturally; wait.
    WaitingForRelease,
    /// One idle prefetch handle was dropped this round.
    Acted,
}

/// Period of the pruning loop's inner tick while under memory pressure.
/// Each tick re-evaluates the queue, in-flight state, and cooldowns.
pub(crate) const PRUNING_TICK: Duration = Duration::from_millis(1);
/// If the head of the allocation queue has been waiting longer than this, the pruner
/// will drop an idle prefetch handle even if uploads/active reads are in flight.
/// Acts as a starvation backstop.
pub(crate) const PRUNING_STARVATION_THRESHOLD: Duration = Duration::from_millis(5);

/// Spawn the background pruning loop. Must be called once after constructing the
/// pool, at filesystem init. Holds a [`Weak`] to the pool so the thread
/// terminates when the pool is dropped.
///
/// Runs on a dedicated OS thread rather than the CRT event-loop-group.
pub(super) fn spawn_pruning_loop(pool_inner: &Arc<PagedPoolInner>) -> JoinHandle<()> {
    let weak = Arc::downgrade(pool_inner);
    let signal = pool_inner.limiter().pruning_signal().clone();
    let handle = thread::Builder::new()
        .name("mem-limiter-pruner".to_string())
        .spawn(move || pruning_loop(weak, signal))
        .expect("failed to spawn pruning thread");
    pool_inner
        .limiter()
        .pruning_signal()
        .register_thread(handle.thread().clone());
    handle
}

/// "Pressure starting" signal for the pruning loop's outer wait.
///
/// Backed by the pruning thread's unpark token: any number of `notify()` calls
/// before the next `wait()` collapse to one wake.
///
/// Once the inner tick is running, notifies are absorbed. That's
/// intentional: under pressure we already know there's pressure, and the inner
/// loop polls every [`PRUNING_TICK`] regardless.
#[derive(Debug, Default)]
pub(crate) struct PruningSignal {
    thread: OnceLock<Thread>,
}

impl PruningSignal {
    pub(crate) fn new() -> Self {
        Self::default()
    }

    pub(crate) fn notify(&self) {
        if let Some(t) = self.thread.get() {
            t.unpark();
        }
    }

    /// Register the pruning thread that consumes `notify()` wakes. Called by
    /// [`spawn_pruning_loop`] on the spawning thread, using the freshly
    /// spawned pruning thread's [`Thread`] handle. Must be called exactly once.
    fn register_thread(&self, thread: Thread) {
        self.thread
            .set(thread)
            .expect("PruningSignal::register_thread called twice");
    }

    /// Park until `notify()` is called. Must only be called from the pruning
    /// thread previously registered via [`Self::register_thread`].
    fn wait(&self) {
        thread::park();
    }
}

/// Pruning loop body.
///
/// Two-level structure:
/// - **Outer wait**: park until [`MemoryLimiter::trigger_pruning`] wakes us.
/// - **Inner tick**: run a round every [`PRUNING_TICK`] until the round
///   reports [`PruningOutcome::Idle`] (queue drained). The round itself is
///   the only place that makes timing decisions (in-flight wait, starvation
///   override).
///
/// `thread::sleep` is deliberately uninterruptible by `unpark`, so notifies
/// during pressure do not cause extra rounds.
fn pruning_loop(pool_inner: Weak<PagedPoolInner>, signal: Arc<PruningSignal>) {
    loop {
        signal.wait();

        // Inner tick: poll every PRUNING_TICK until the queue drains.
        loop {
            let Some(strong) = pool_inner.upgrade() else {
                return; // pool dropped — exit
            };
            let outcome = run_pruning_round(&strong);
            metrics::counter!("mem.pruning_rounds").increment(1);
            trace!(?outcome, "pruning round complete");
            drop(strong);

            if matches!(outcome, PruningOutcome::Idle) {
                break; // back to outer park
            }
            thread::sleep(PRUNING_TICK);
        }
    }
}

/// Run a single pruning round.
///
/// Order of operations:
///   1. `pool.trim()` — always cheap; releases empty pages back to the
///      allocator. Does NOT directly progress the allocation queue.
///   2. If the queue is empty, return [`PruningOutcome::Idle`] so the loop
///      exits its inner tick and goes back to parking.
///   3. If uploads are in flight or active reads hold buffers, let the
///      natural release path do the work — unless the head of the queue
///      has been waiting beyond [`PRUNING_STARVATION_THRESHOLD`].
///   4. Otherwise drop one idle prefetch handle.
fn run_pruning_round(pool_inner: &PagedPoolInner) -> PruningOutcome {
    // 1. Pool trim — idempotent and harmless. Empty pages may now be reusable
    //    by a different SizePool after a future allocation.
    //    TODO: Consider doing trim cooldown (i.e. invoke trim less often)
    //    if it's contending too much with reserve read lock.
    let _trimmed = pool_inner.trim();

    // 2. Allocation queue not yet implemented. For now we have no waiters,
    //    so any wakeup we receive is transient.
    let queue_empty = true; // TODO: inspect allocation_queue
    let head_waited = Duration::ZERO; // TODO: queue.front().queued_at.elapsed()
    if queue_empty {
        return PruningOutcome::Idle;
    }

    let starving = head_waited >= PRUNING_STARVATION_THRESHOLD;

    // 3. Natural release path: in-flight uploads complete, or active reads
    //    receive their S3 response, freeing buffers without our help.
    let in_flight = has_uploads_in_flight(pool_inner) || pool_inner.limiter().has_active_reads_with_buffers();
    if in_flight && !starving {
        return PruningOutcome::WaitingForRelease;
    }

    // 4. Disruptive: drop one idle prefetch handle.
    if pool_inner.limiter().drop_one_idle_prefetch_handle() {
        metrics::counter!("mem.pruning_resets").increment(1);
        return PruningOutcome::Acted;
    }

    // We attempted to drop an idle prefetch handle but found nothing eligible.
    // Wait for the next tick; a release elsewhere may unstick us.
    PruningOutcome::WaitingForRelease
}

/// Returns `true` if any upload buffer is currently held in the pool. An
/// in-flight `UploadPart`/`PutObject` will eventually release memory
/// without our help.
///
/// TODO: tighten to "in-flight UploadPart/PutObject exists":
///   `reserved_bytes(PutObject) + reserved_bytes(Append)
///       > upload_handles_holding_buffers * write_part_size`
/// Each write handle holds at most one "filling" buffer (FUSE write data
/// being staged) at any time without an in-flight request, so excess
/// reserved bytes above that baseline indicate at least one part actually
/// uploading. Requires tracking `upload_handles_holding_buffers` (likely
/// the active-write-handles counter).
fn has_uploads_in_flight(pool_inner: &PagedPoolInner) -> bool {
    pool_inner.reserved_bytes(BufferKind::PutObject) > 0 || pool_inner.reserved_bytes(BufferKind::Append) > 0
}

#[cfg(all(test, not(feature = "shuttle")))]
mod tests {
    use std::sync::Arc;
    use std::time::{Duration, Instant};

    use super::{PruningOutcome, PruningSignal, run_pruning_round, spawn_pruning_loop};
    use crate::memory::PagedPool;

    const TEST_WAIT_TIMEOUT: Duration = Duration::from_secs(1);

    /// Dropping the pool while the pruner is parked must wake the thread
    /// so it can observe the dead `Weak` and exit. Otherwise the thread leaks.
    #[test]
    fn pruning_thread_exits_on_pool_drop() {
        let pool = PagedPool::new_with_candidate_sizes_minimally_limited([1024]);
        let handle = spawn_pruning_loop(pool.inner());

        drop(pool);

        let deadline = Instant::now() + TEST_WAIT_TIMEOUT;
        while !handle.is_finished() {
            assert!(
                Instant::now() < deadline,
                "pruning thread did not exit within {TEST_WAIT_TIMEOUT:?} of pool drop \
                 — likely missing `Drop` notify on `MemoryLimiter`",
            );
            std::thread::sleep(Duration::from_millis(10));
        }
        handle.join().expect("pruning thread panicked");
    }

    /// `PruningSignal::notify` from another thread must wake the registered
    /// pruning thread. This is the basic primitive on which the loop's outer
    /// wait depends.
    #[test]
    fn signal_notify_wakes_registered_waiter() {
        let signal = Arc::new(PruningSignal::new());
        let (tx, rx) = std::sync::mpsc::channel();
        let signal_for_pruner = signal.clone();
        let pruner = std::thread::spawn(move || {
            signal_for_pruner.wait();
            tx.send(()).unwrap();
        });

        signal.register_thread(pruner.thread().clone());
        signal.notify();

        rx.recv_timeout(TEST_WAIT_TIMEOUT)
            .expect("pruning thread did not wake within timeout of notify()");
        pruner.join().expect("pruning thread panicked");
    }

    /// Contract for `run_pruning_round` while the allocation queue stub
    /// reports empty: returns [`PruningOutcome::Idle`]. Pressure is defined
    /// as "queue non-empty", so an empty queue means no pressure — the
    /// pruner's job here is to observe and exit.
    #[test]
    fn run_pruning_round_returns_idle_on_empty_queue() {
        let pool = PagedPool::new_with_candidate_sizes_minimally_limited([1024]);

        let outcome = run_pruning_round(pool.inner());
        assert_eq!(outcome, PruningOutcome::Idle);
        assert!(
            !pool.inner().limiter().is_memory_pressure(),
            "empty allocation queue must report no memory pressure",
        );
    }
}
