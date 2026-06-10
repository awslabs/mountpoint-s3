//! Background pool-maintenance engine for [`MemoryLimiter`].

use std::time::Duration;

use tracing::trace;

use crate::sync::{Arc, Weak, thread};
use crate::util::wake_signal::WakeSignal;

use super::pool::PagedPoolInner;

/// Outcome of a single pruning round. Used for metrics and tracing.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum PruningOutcome {
    /// Nothing to prune (queue empty). Pressure is defined as
    /// "queue non-empty", so an empty queue means pressure has already cleared.
    Idle,
    /// In-flight uploads or active reads will release buffers naturally; wait.
    WaitingForRelease,
    /// One idle cursor was reset this round.
    Acted,
}

/// Period of the pruning loop's inner tick while under memory pressure.
pub(crate) const PRUNING_TICK: Duration = Duration::from_millis(1);
/// If the head of the allocation queue has been waiting longer than this, the pruner
/// will reset an idle cursor even if uploads/active reads are in flight.
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
///   4. Otherwise reset one idle cursor.
fn run_pruning_round(pool_inner: &Arc<PagedPoolInner>) -> PruningOutcome {
    // 1. Pool trim — idempotent and harmless. Empty pages may now be reusable
    //    by a different SizePool after a future allocation. If anything was
    //    freed, wake the allocation queue so pending requests can claim it.
    //    TODO: Consider doing trim cooldown (i.e. invoke trim less often)
    //    if it's contending too much with reserve read lock.
    if pool_inner.trim() {
        pool_inner.try_wake_pending();
    }

    // 2. If no waiter is queued, there's no pressure — exit the inner tick.
    if !pool_inner.is_memory_pressure() {
        return PruningOutcome::Idle;
    }

    let starving = pool_inner
        .head_waited()
        .is_some_and(|d| d >= PRUNING_STARVATION_THRESHOLD);

    // 3. Natural release path: in-flight uploads or active reads will free
    //    buffers without our help — defer to that path.
    let in_flight = has_uploads_in_flight(pool_inner) || pool_inner.limiter().has_active_reads();
    if in_flight && !starving {
        return PruningOutcome::WaitingForRelease;
    }

    // 4. Disruptive: reset one idle cursor.
    if pool_inner.limiter().reset_one_idle_cursor() {
        metrics::counter!("mem.cursor_resets").increment(1);
        return PruningOutcome::Acted;
    }

    // We attempted to reset an idle cursor but found nothing eligible.
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

#[cfg(test)]
mod tests {
    use std::sync::Arc;
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::time::{Duration, Instant};

    use bytes::Bytes;
    use futures::executor::block_on;

    use super::{PRUNING_STARVATION_THRESHOLD, PruningOutcome, run_pruning_round, spawn_pool_maintenance_thread};
    use crate::memory::{BufferKind, PagedPool};

    const TEST_WAIT_TIMEOUT: Duration = Duration::from_secs(1);
    /// Long idle interval used in tests where we want the loop to stay
    /// parked unless explicitly notified or the pool is dropped.
    const TEST_IDLE_INTERVAL: Duration = Duration::from_secs(60);
    const BUF: usize = 1024;

    /// Pool sized for one page of `BUF`-byte buffers — small enough that the
    /// "fill all memory" loop in pressure tests is fast in debug builds.
    fn tight_pool() -> PagedPool {
        let additional_reserved = (BUF as u64 * 16).max(128 * 1024 * 1024);
        let mem_limit = BUF as u64 * 16 + additional_reserved;
        PagedPool::config()
            .with_candidate_sizes([BUF])
            .with_memory_limit(mem_limit)
            .build()
    }

    /// Fill the pool, spawn a waiter on `acquire_buffer_async`, and block
    /// until the request lands in the allocation queue. Returns the held
    /// buffers so the caller can drop them when the test is done.
    fn fill_and_enqueue_waiter(pool: &PagedPool) -> Vec<Bytes> {
        let mut blockers = Vec::new();
        while pool.available_mem() >= BUF as u64 {
            blockers.push(pool.get_buffer_mut(BUF, BufferKind::Other, None).into_bytes());
        }
        let pool_clone = pool.clone();
        std::thread::spawn(move || block_on(pool_clone.acquire_buffer_async(BUF, BufferKind::GetObject, None)));
        let deadline = Instant::now() + TEST_WAIT_TIMEOUT;
        while !pool.inner().is_memory_pressure() {
            assert!(Instant::now() < deadline, "request did not enter queue");
            std::thread::sleep(Duration::from_millis(1));
        }
        blockers
    }

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

    /// Contract for `run_pruning_round` when the allocation queue is empty:
    /// returns [`PruningOutcome::Idle`]. Pressure is defined as "queue
    /// non-empty", so an empty queue means no pressure — the pruner's job
    /// here is to observe and exit.
    #[test]
    fn run_pruning_round_returns_idle_on_empty_queue() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();

        let outcome = run_pruning_round(pool.inner());
        assert_eq!(outcome, PruningOutcome::Idle);
        assert!(
            !pool.inner().is_memory_pressure(),
            "empty allocation queue must report no memory pressure",
        );
    }

    /// `run_pruning_round` must observe real allocation-queue pressure
    /// and not return `Idle` while a waiter is enqueued. Without an
    /// idle cursor to evict, the round defers to natural release.
    #[test]
    fn run_pruning_round_observes_real_queue_pressure() {
        let pool = tight_pool();
        let _blockers = fill_and_enqueue_waiter(&pool);

        let outcome = run_pruning_round(pool.inner());
        assert_eq!(outcome, PruningOutcome::WaitingForRelease);
    }

    /// `acquire_buffer_async` must call `trigger_pruning` after pushing a
    /// waiter, so a maintenance thread parked on its long idle interval
    /// notices pressure within `PRUNING_TICK` rather than waiting up to
    /// `TEST_IDLE_INTERVAL` (60s). Observed via the idle cursor's
    /// reset_fn firing once the starvation threshold elapses.
    #[test]
    fn acquire_buffer_async_wakes_parked_maintenance_thread() {
        let pool = tight_pool();
        let _maintenance = spawn_pool_maintenance_thread(pool.inner(), TEST_IDLE_INTERVAL);

        // Idle cursor with a reset_fn — the maintenance thread will reset it
        // once the queue's head exceeds the starvation threshold.
        let idle = pool.create_cursor();
        let idle_was_reset = Arc::new(AtomicBool::new(false));
        let flag = idle_was_reset.clone();
        idle.register_reset_fn(Box::new(move || !flag.swap(true, Ordering::SeqCst)));
        drop(idle.set_active_read(0, 1));

        // Hold an active read so the natural-release path would normally
        // suppress eviction; the starvation threshold must override it.
        let active = pool.create_cursor();
        let _active_guard = active.set_active_read(0, BUF);

        // Pushing a waiter notifies the parked pruner via `trigger_pruning`.
        let _blockers = fill_and_enqueue_waiter(&pool);

        // After the starvation threshold the maintenance thread should run
        // a round that resets the idle cursor. Without `trigger_pruning`
        // the pruner would still be parked, so this poll would time out.
        let deadline = Instant::now() + TEST_WAIT_TIMEOUT;
        while !idle_was_reset.load(Ordering::SeqCst) {
            assert!(
                Instant::now() < deadline,
                "maintenance thread did not reset idle cursor — `trigger_pruning` may be missing",
            );
            std::thread::sleep(Duration::from_millis(1));
        }
    }

    /// Starvation backstop: when a waiter has been queued longer than
    /// [`PRUNING_STARVATION_THRESHOLD`], the pruner must reset an idle
    /// cursor *even though* an active read is still in flight (which
    /// would normally defer to the natural release path).
    #[test]
    fn run_pruning_round_starvation_resets_idle_cursor_despite_active_read() {
        let pool = tight_pool();

        // Idle cursor with a registered reset_fn — eligible for eviction.
        let idle = pool.create_cursor();
        let idle_was_reset = Arc::new(AtomicBool::new(false));
        let flag = idle_was_reset.clone();
        idle.register_reset_fn(Box::new(move || !flag.swap(true, Ordering::SeqCst)));
        // Bump its tick once so it's treated as having been read from.
        drop(idle.set_active_read(0, 1));

        // Active cursor: held with `_active_guard` so `has_active_reads`
        // returns true and the natural-release path would normally fire.
        let active = pool.create_cursor();
        let _active_guard = active.set_active_read(0, BUF);

        let _blockers = fill_and_enqueue_waiter(&pool);

        // Wait past the starvation threshold, with margin.
        std::thread::sleep(PRUNING_STARVATION_THRESHOLD + Duration::from_millis(2));

        let outcome = run_pruning_round(pool.inner());
        assert_eq!(
            outcome,
            PruningOutcome::Acted,
            "starving waiter should force the pruner to reset an idle cursor",
        );
        assert!(
            idle_was_reset.load(Ordering::SeqCst),
            "the idle cursor's reset_fn should have been invoked",
        );
    }
}
