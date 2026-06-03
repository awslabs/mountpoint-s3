//! Background pool-maintenance engine for [`MemoryLimiter`].

use std::time::Duration;

use tracing::trace;

use crate::sync::{Arc, Weak, thread};
use crate::wake_signal::WakeSignal;

use super::pool::PagedPoolInner;

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
pub(crate) const PRUNING_TICK: Duration = Duration::from_millis(1);
/// If the head of the allocation queue has been waiting longer than this, the pruner
/// will drop an idle prefetch handle even if uploads/active reads are in flight.
/// Acts as a starvation backstop.
pub(crate) const PRUNING_STARVATION_THRESHOLD: Duration = Duration::from_millis(5);

/// Spawn the background maintenance thread. Must be called once after constructing
/// the pool, at filesystem init. Holds a [`Weak`] to the pool so the thread
/// terminates when the pool is dropped.
///
/// `idle_interval` controls how often a periodic [`PagedPoolInner::trim`] runs
/// when there is no memory pressure. Production uses ~60s; tests use shorter
/// values.
pub(super) fn spawn_pool_maintenance_thread(
    pool_inner: &Arc<PagedPoolInner>,
    idle_interval: Duration,
) -> thread::JoinHandle<()> {
    let weak = Arc::downgrade(pool_inner);
    let signal = pool_inner.limiter().pruning_signal().clone();
    thread::Builder::new()
        .name("mem-pool-maintenance".to_string())
        .spawn(move || maintenance_loop(weak, signal, idle_interval))
        .expect("failed to spawn pool maintenance thread")
}

/// Maintenance loop body.
///
/// Two phases per outer iteration:
/// 1. **Idle wait**: `wait_timeout(idle_interval)`. Returns early on `notify`,
///    or after the idle interval elapses, whichever first.
/// 2. **Drain rounds**: run [`run_pruning_round`] in a loop. If the round
///    returns [`PruningOutcome::Idle`] (no pressure), break. Otherwise sleep
///    [`PRUNING_TICK`] and run another round.
///
/// When there is no pressure, the drain loop exits immediately after one
/// round (which still does the cheap pool trim), so the periodic trim is
/// implicit in the same code path.
///
/// `thread::sleep` inside the inner drain is deliberately uninterruptible by
/// notifies — under pressure the loop polls every [`PRUNING_TICK`] anyway,
/// so there is nothing useful for an extra wake to do.
fn maintenance_loop(pool_inner: Weak<PagedPoolInner>, signal: Arc<WakeSignal>, idle_interval: Duration) {
    loop {
        signal.wait_timeout(idle_interval);

        // Drain: keep running rounds until the queue is empty (or pool is gone).
        loop {
            let Some(strong) = pool_inner.upgrade() else {
                return; // pool dropped — exit
            };
            let outcome = run_pruning_round(&strong);
            trace!(?outcome, "pruning round complete");
            drop(strong);

            if matches!(outcome, PruningOutcome::Idle) {
                break;
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
    let in_flight = has_uploads_in_flight(pool_inner) || pool_inner.limiter().has_active_reads();
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

/// Returns `true` if any in-flight `UploadPart`/`PutObject` is currently
/// holding a pool buffer that will be released when the request completes.
///
/// TODO: Currently a stub returning `false`.
/// Tighten to "in-flight UploadPart/PutObject exists":
///   `reserved_bytes(PutObject) + reserved_bytes(Append)
///       > upload_handles_holding_buffers * write_part_size`
/// Each write handle holds at most one "filling" buffer (FUSE write data
/// being staged) at any time without an in-flight request, so excess
/// reserved bytes above that baseline indicate at least one part actually
/// uploading. Requires tracking `upload_handles_holding_buffers` (likely
/// the active-write-handles counter).
fn has_uploads_in_flight(_pool_inner: &PagedPoolInner) -> bool {
    false
}

#[cfg(all(test, not(feature = "shuttle")))]
mod tests {
    use std::time::{Duration, Instant};

    use super::{PruningOutcome, run_pruning_round, spawn_pool_maintenance_thread};
    use crate::memory::PagedPool;

    const TEST_WAIT_TIMEOUT: Duration = Duration::from_secs(1);
    /// Long idle interval used in tests where we want the loop to stay
    /// parked unless explicitly notified or the pool is dropped.
    const TEST_IDLE_INTERVAL: Duration = Duration::from_secs(60);

    /// Dropping the pool while the maintenance thread is parked must wake it
    /// (via `MemoryLimiter::drop` notify) so it can observe the dead `Weak`
    /// and exit. Otherwise the thread leaks until the idle interval elapses.
    #[test]
    fn maintenance_thread_exits_on_pool_drop() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();
        let handle = spawn_pool_maintenance_thread(pool.inner(), TEST_IDLE_INTERVAL);

        drop(pool);

        let deadline = Instant::now() + TEST_WAIT_TIMEOUT;
        while !handle.is_finished() {
            assert!(
                Instant::now() < deadline,
                "maintenance thread did not exit within {TEST_WAIT_TIMEOUT:?} of pool drop \
                 — likely missing `Drop` notify on `MemoryLimiter`",
            );
            std::thread::sleep(Duration::from_millis(10));
        }
        handle.join().expect("maintenance thread panicked");
    }

    /// Contract for `run_pruning_round` while the allocation queue stub
    /// reports empty: returns [`PruningOutcome::Idle`]. Pressure is defined
    /// as "queue non-empty", so an empty queue means no pressure — the
    /// pruner's job here is to observe and exit.
    #[test]
    fn run_pruning_round_returns_idle_on_empty_queue() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();

        let outcome = run_pruning_round(pool.inner());
        assert_eq!(outcome, PruningOutcome::Idle);
        assert!(
            !pool.inner().limiter().is_memory_pressure(),
            "empty allocation queue must report no memory pressure",
        );
    }
}
