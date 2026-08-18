//! Priority-ordered allocation queue for buffer requests under memory pressure.

use std::collections::VecDeque;
use std::ops::{Deref, DerefMut};
use std::time::Instant;

use futures::channel::oneshot;
use mountpoint_s3_client::config::CancellationToken;
use tracing::trace;

use crate::metrics::defs::{POOL_ALLOCATION_QUEUE_DEPTH, POOL_ALLOCATION_QUEUE_WAIT};
use crate::prefetch::CursorId;
use crate::sync::atomic::{AtomicBool, Ordering};
use crate::sync::{Mutex, MutexGuard};

use super::buffers::PoolBuffer;
use super::stats::BufferKind;

/// A single entry in the allocation queue, representing a pending buffer request.
pub struct PendingAllocation {
    /// Which cursor is requesting this buffer. `None` for upload requests
    /// (uploads have no associated cursor).
    pub cursor_id: Option<CursorId>,
    /// Size of the buffer the waiter needs, in bytes.
    pub size: usize,
    /// The kind of buffer to allocate (e.g. [BufferKind::GetObject], [BufferKind::PutObject]).
    pub kind: BufferKind,
    /// When this entry was enqueued. Used by the pruner to detect waiters
    /// that have been queued long enough to trip the starvation backstop.
    queued_at: Instant,
    /// Channel sender used to deliver the allocated [PoolBuffer] to the waiter.
    /// When dropped, the receiver resolves with `Err(Canceled)`.
    sender: oneshot::Sender<PoolBuffer>,
    /// Optional token that reports cancellation once the buffer is no longer needed — for
    /// example, when the CRT cancels the meta request this reservation was serving.
    token: Option<CancellationToken>,
}

impl PendingAllocation {
    /// Deliver the allocated buffer to the waiter.
    /// Returns `Err(buffer)` if the receiver was dropped (caller cancelled).
    pub fn fulfill(self, buffer: PoolBuffer) -> Result<(), PoolBuffer> {
        self.sender.send(buffer)
    }

    /// Returns `true` if the queue should drop this request because it no longer wants its
    /// buffer.
    fn is_abandoned(&self) -> bool {
        self.sender.is_canceled() || self.token.as_ref().is_some_and(|token| token.is_cancelled())
    }
}

/// A priority-ordered allocation queue with two lanes: high and low.
///
/// High-priority requests (active reads, uploads) are served before low-priority
/// ones (speculative prefetch). Within each lane, requests are served FIFO. A low-priority
/// request can be promoted to the back of the high lane via [`upgrade`](Self::upgrade).
///
/// This queue does not allocate buffers or check available memory — it only manages
/// ordering, signaling, and lifecycle. The pool drives the wake loop by calling
/// [`pop_front_if`](Self::pop_front_if) with a predicate (e.g., `can_allocate`),
/// then performing the allocation and delivering the buffer via the entry's sender.
pub struct AllocationQueue {
    /// Queue state protected by a mutex.
    inner: Mutex<AllocationQueueInner>,
    /// `true` if either queue has pending entries. Allows a lock-free check
    /// via [`has_pending`](Self::has_pending).
    has_pending: AtomicBool,
}

struct AllocationQueueInner {
    /// High-priority requests (active reads + uploads). Served first.
    high: VecDeque<PendingAllocation>,
    /// Low-priority requests (speculative prefetch). Served when high is empty.
    low: VecDeque<PendingAllocation>,
}

/// Guard around the locked [`AllocationQueueInner`] that refreshes the
/// [`POOL_ALLOCATION_QUEUE_DEPTH`] gauge from the queue lengths when it is dropped.
struct DepthTrackingGuard<'a> {
    inner: MutexGuard<'a, AllocationQueueInner>,
}

impl Deref for DepthTrackingGuard<'_> {
    type Target = AllocationQueueInner;

    fn deref(&self) -> &Self::Target {
        &self.inner
    }
}

impl DerefMut for DepthTrackingGuard<'_> {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.inner
    }
}

impl Drop for DepthTrackingGuard<'_> {
    fn drop(&mut self) {
        metrics::gauge!(POOL_ALLOCATION_QUEUE_DEPTH, "priority" => "high").set(self.inner.high.len() as f64);
        metrics::gauge!(POOL_ALLOCATION_QUEUE_DEPTH, "priority" => "low").set(self.inner.low.len() as f64);
    }
}

impl std::fmt::Debug for AllocationQueue {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("AllocationQueue")
            .field("has_pending", &self.has_pending.load(Ordering::SeqCst))
            .finish_non_exhaustive()
    }
}

impl Default for AllocationQueue {
    fn default() -> Self {
        Self::new()
    }
}

impl AllocationQueue {
    /// Creates a new empty allocation queue.
    pub fn new() -> Self {
        Self {
            inner: Mutex::new(AllocationQueueInner {
                high: VecDeque::new(),
                low: VecDeque::new(),
            }),
            has_pending: AtomicBool::new(false),
        }
    }

    /// Lock the queue's inner state, returning a [`DepthTrackingGuard`] that refreshes the
    /// depth gauge when dropped.
    fn lock_tracked(&self) -> DepthTrackingGuard<'_> {
        DepthTrackingGuard {
            inner: self.inner.lock().unwrap(),
        }
    }

    /// Enqueue a buffer allocation request for an upload. Uploads have no cursor and are always
    /// urgent — a write syscall is blocked on the buffer — so they go straight to the high lane.
    ///
    /// Returns a receiver that resolves to the allocated [PoolBuffer] when fulfilled,
    /// or `Err(Canceled)` if the sender is dropped.
    pub fn push_write(
        &self,
        size: usize,
        kind: BufferKind,
        token: Option<CancellationToken>,
    ) -> oneshot::Receiver<PoolBuffer> {
        self.push_inner(|| true, None, size, kind, token)
    }

    /// Enqueue a buffer allocation request for a read on `cursor_id`, in the lane reported by
    /// `is_active`: high when the cursor has a FUSE read waiting on the buffer, low when the read
    /// is speculative prefetch.
    ///
    /// `is_active` is evaluated *while the queue lock is held*, which is what makes the lane
    /// decision race-free against a concurrent [`Self::upgrade`]: `set_active_read` marks the
    /// cursor active before taking this lock to promote, so the lock totally orders the two paths.
    ///
    /// Returns a receiver that resolves to the allocated [PoolBuffer] when fulfilled,
    /// or `Err(Canceled)` if the sender is dropped.
    pub fn push_read(
        &self,
        cursor_id: CursorId,
        size: usize,
        kind: BufferKind,
        token: Option<CancellationToken>,
        is_active: impl FnOnce() -> bool,
    ) -> oneshot::Receiver<PoolBuffer> {
        self.push_inner(is_active, Some(cursor_id), size, kind, token)
    }

    fn push_inner(
        &self,
        is_urgent: impl FnOnce() -> bool,
        cursor_id: Option<CursorId>,
        size: usize,
        kind: BufferKind,
        token: Option<CancellationToken>,
    ) -> oneshot::Receiver<PoolBuffer> {
        let (sender, receiver) = oneshot::channel();
        let entry = PendingAllocation {
            cursor_id,
            size,
            kind,
            queued_at: Instant::now(),
            sender,
            token,
        };

        let mut inner = self.lock_tracked();
        self.has_pending.store(true, Ordering::SeqCst);
        // `is_urgent` runs here, under the queue lock: that is what stops a concurrent `upgrade`
        // scan from landing between the lane decision and the push. See [`Self::push_read`].
        if is_urgent() {
            inner.high.push_back(entry);
        } else {
            inner.low.push_back(entry);
        }

        receiver
    }

    /// Fulfill the pending allocation at the front of the queue using the result of `try_get_buffer`.
    ///
    /// Returns `false` if the queue was empty or `try_get_buffer` returned `None`.
    ///
    /// Skips (and removes) abandoned entries in the queue.
    pub fn try_fulfill_front(&self, try_get_buffer: impl FnOnce(&PendingAllocation) -> Option<PoolBuffer>) -> bool {
        if !self.has_pending() {
            return false;
        }

        // TODO(memory-limiter): consider refactoring or inlining try_front_if.
        let mut buffer = None;
        let entry = self.pop_front_if(|pending| {
            buffer = try_get_buffer(pending);
            buffer.is_some()
        });
        if let Some(entry) = entry
            && let Some(buffer) = buffer
        {
            if let Err(cancelled) = entry.fulfill(buffer) {
                // Drop buffer, but still succeed.
                trace!(size = cancelled.len(), "request cancelled after acquiring buffer");
                drop(cancelled);
            }
            true
        } else {
            false
        }
    }

    /// Atomically peeks at the front entry and removes it if `predicate` returns `true`.
    ///
    /// Checks the high-priority list first, then low. Abandoned entries — where the waiter
    /// dropped the receiver, or the CRT cancelled the reservation (see
    /// [`PendingAllocation::is_abandoned`]) — are pruned from the front of each queue before
    /// checking the predicate. This prevents a large abandoned entry from blocking smaller live
    /// entries behind it, and (crucially) avoids allocating a buffer for a request that no
    /// longer wants it.
    ///
    /// Returns `None` if both queues are empty or the predicate returns `false`.
    /// Sets `has_pending` to `false` if both queues become empty after removal.
    fn pop_front_if(&self, predicate: impl FnOnce(&PendingAllocation) -> bool) -> Option<PendingAllocation> {
        let mut inner = self.lock_tracked();

        // Prune abandoned entries from the front of each queue.
        while inner.high.front().is_some_and(|e| e.is_abandoned()) {
            inner.high.pop_front();
        }
        while inner.low.front().is_some_and(|e| e.is_abandoned()) {
            inner.low.pop_front();
        }

        let front = inner.high.front().or_else(|| inner.low.front());
        let Some(front) = front else {
            self.has_pending.store(false, Ordering::SeqCst);
            return None;
        };

        if !predicate(front) {
            return None;
        }
        let entry = inner.high.pop_front().or_else(|| inner.low.pop_front());
        if inner.high.is_empty() && inner.low.is_empty() {
            self.has_pending.store(false, Ordering::SeqCst);
        }

        drop(inner);
        entry.inspect(|e| {
            metrics::histogram!(POOL_ALLOCATION_QUEUE_WAIT).record(e.queued_at.elapsed().as_micros() as f64);
        })
    }

    /// Moves all entries for `cursor_id` from the low-priority queue to the back
    /// of the high-priority queue. No-op if no entries match.
    ///
    /// Called when a FUSE read arrives for a cursor that has pending speculative
    /// allocations — those allocations are now urgent.
    pub fn upgrade(&self, cursor_id: CursorId) {
        let mut inner = self.lock_tracked();
        let n = inner.low.len();
        for _ in 0..n {
            let entry = inner.low.pop_front().unwrap();
            // Only drop entries whose receiver is already gone. We deliberately use the cheap
            // `is_canceled()` atomic here rather than the full `is_abandoned()` check: this is an
            // O(n) scan on the hot FUSE-read path, and `upgrade` only reorders entries (it never
            // allocates), so a CRT-cancelled-but-not-yet-pruned entry promoted to high is
            // harmless — `pop_front_if` prunes it before any buffer is allocated.
            if entry.sender.is_canceled() {
                continue;
            }
            if entry.cursor_id == Some(cursor_id) {
                inner.high.push_back(entry);
            } else {
                inner.low.push_back(entry);
            }
        }
        if inner.high.is_empty() && inner.low.is_empty() {
            self.has_pending.store(false, Ordering::SeqCst);
        }
    }

    /// Returns `true` if either queue has pending entries.
    ///
    /// This is a lock-free check using an [`AtomicBool`]. Used by the pool to decide
    /// whether new requests must go through the queue (to respect priority ordering
    /// of existing waiters).
    pub fn has_pending(&self) -> bool {
        self.has_pending.load(Ordering::SeqCst)
    }

    /// `Instant` at which the next-to-be-served live entry was queued.
    ///
    /// Walks high then low (matching [`Self::pop_front_if`]'s priority order)
    /// and skips abandoned entries without removing them — pruning happens on
    /// the next [`Self::pop_front_if`] call. Returns `None` if the queue is
    /// empty or contains only abandoned entries.
    pub fn head_queued_at(&self) -> Option<Instant> {
        let inner = self.inner.lock().unwrap();
        inner
            .high
            .iter()
            .find(|e| !e.is_abandoned())
            .or_else(|| inner.low.iter().find(|e| !e.is_abandoned()))
            .map(|e| e.queued_at)
    }
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use super::*;
    use futures::executor::block_on;

    use crate::memory::pages::Page;

    fn make_buffer(size: usize) -> PoolBuffer {
        let page = Page::new_for_tests(size);
        let ptr = page.try_acquire(BufferKind::Other).unwrap();
        PoolBuffer::new_primary(ptr, size)
    }

    /// A token that already reports cancellation, standing in for a reservation the CRT
    /// cancelled while it was queued. Uses `std` atomics explicitly: the token is a
    /// `mountpoint-s3-client` type, so it is not built on Shuttle's instrumented primitives.
    fn cancelled_token() -> CancellationToken {
        CancellationToken::from_flag(Arc::new(std::sync::atomic::AtomicBool::new(true)))
    }

    /// Helper: always-true predicate (unconditionally pop).
    fn always(_pending: &PendingAllocation) -> bool {
        true
    }

    /// Helper: enqueue a read for a cursor with an active read, so it lands in `high`.
    fn push_high(queue: &AllocationQueue, cursor_id: CursorId, size: usize) -> oneshot::Receiver<PoolBuffer> {
        queue.push_read(cursor_id, size, BufferKind::GetObject, None, || true)
    }

    /// Helper: enqueue a speculative read — a cursor with no active read, so it lands in `low`.
    fn push_low(queue: &AllocationQueue, cursor_id: CursorId, size: usize) -> oneshot::Receiver<PoolBuffer> {
        queue.push_read(cursor_id, size, BufferKind::GetObject, None, || false)
    }

    #[test]
    fn test_push_sets_has_pending() {
        let queue = AllocationQueue::new();
        assert!(!queue.has_pending());

        let _rx = push_high(&queue, CursorId::new_from_raw(1), 1024);
        assert!(queue.has_pending());
    }

    #[test]
    fn test_pop_front_if_fulfills_and_clears_pressure() {
        let queue = AllocationQueue::new();
        let rx = push_high(&queue, CursorId::new_from_raw(1), 1024);

        let entry = queue.pop_front_if(always).unwrap();
        assert!(!queue.has_pending());

        let buffer = make_buffer(entry.size);
        let _ = entry.fulfill(buffer);

        let result = block_on(rx);
        assert!(result.is_ok());
    }

    #[test]
    fn test_pop_front_if_predicate_false_does_not_remove() {
        let queue = AllocationQueue::new();
        let _rx = push_high(&queue, CursorId::new_from_raw(1), 1024);

        let result = queue.pop_front_if(|_pending| false);
        assert!(result.is_none());
        assert!(queue.has_pending()); // still there
    }

    #[test]
    fn test_high_priority_served_before_low() {
        let queue = AllocationQueue::new();

        let _rx_low = push_low(&queue, CursorId::new_from_raw(1), 1024);
        let _rx_high = push_high(&queue, CursorId::new_from_raw(2), 1024);

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(CursorId::new_from_raw(2))); // high first
    }

    #[test]
    fn test_push_read_with_active_read_goes_high() {
        let queue = AllocationQueue::new();
        let speculative = CursorId::new_from_raw(1);
        let active = CursorId::new_from_raw(2);

        let _rx_low = push_low(&queue, speculative, 1024);
        let _rx_high = queue.push_read(active, 1024, BufferKind::GetObject, None, || true);

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(active)); // active read first
    }

    #[test]
    fn test_push_read_decides_lane_under_queue_lock() {
        let queue = AllocationQueue::new();
        let mut evaluated = false;

        let _rx = queue.push_read(CursorId::new_from_raw(1), 1024, BufferKind::GetObject, None, || {
            evaluated = true;
            assert!(
                queue.inner.try_lock().is_err(),
                "active-read check must run while the queue lock is held",
            );
            false
        });

        assert!(evaluated, "active-read check must be evaluated");
    }

    #[test]
    fn test_fifo_within_same_priority() {
        let queue = AllocationQueue::new();

        let _rx1 = push_high(&queue, CursorId::new_from_raw(1), 1024);
        let _rx2 = push_high(&queue, CursorId::new_from_raw(2), 1024);

        let first = queue.pop_front_if(always).unwrap();
        let second = queue.pop_front_if(always).unwrap();
        assert_eq!(first.cursor_id, Some(CursorId::new_from_raw(1)));
        assert_eq!(second.cursor_id, Some(CursorId::new_from_raw(2)));
    }

    #[test]
    fn test_upgrade_moves_low_to_high() {
        let queue = AllocationQueue::new();
        let cursor_a = CursorId::new_from_raw(1);
        let cursor_b = CursorId::new_from_raw(2);

        let _rx_a = push_low(&queue, cursor_a, 1024);
        let _rx_b = push_low(&queue, cursor_b, 1024);

        queue.upgrade(cursor_a);

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(cursor_a)); // upgraded, served first
    }

    #[test]
    fn test_upgrade_multiple_entries_same_cursor() {
        let queue = AllocationQueue::new();
        let cursor = CursorId::new_from_raw(1);
        let other = CursorId::new_from_raw(2);

        let _rx1 = push_low(&queue, cursor, 1024);
        let _rx2 = push_low(&queue, cursor, 2048);
        let _rx_other = push_low(&queue, other, 1024);

        queue.upgrade(cursor);

        let e1 = queue.pop_front_if(always).unwrap();
        let e2 = queue.pop_front_if(always).unwrap();
        assert_eq!(e1.cursor_id, Some(cursor));
        assert_eq!(e2.cursor_id, Some(cursor));

        let e3 = queue.pop_front_if(always).unwrap();
        assert_eq!(e3.cursor_id, Some(other));
    }

    #[test]
    fn test_upgrade_does_not_affect_uploads() {
        let queue = AllocationQueue::new();
        let cursor = CursorId::new_from_raw(1);

        // Upload (no cursor_id) in high queue, read in low queue
        let _rx_upload = queue.push_write(8192, BufferKind::PutObject, None);
        let _rx_read = push_low(&queue, cursor, 1024);

        queue.upgrade(cursor);

        // Upload is still first (was already high), then promoted read
        let e1 = queue.pop_front_if(always).unwrap();
        assert_eq!(e1.cursor_id, None); // upload, still at front of high

        let e2 = queue.pop_front_if(always).unwrap();
        assert_eq!(e2.cursor_id, Some(cursor)); // promoted read, back of high
    }

    #[test]
    fn test_cancelled_large_entry_does_not_block_smaller_entry() {
        let queue = AllocationQueue::new();

        let rx_large = push_high(&queue, CursorId::new_from_raw(1), 64 * 1024 * 1024);
        let _rx_small = push_high(&queue, CursorId::new_from_raw(2), 1024);

        drop(rx_large);

        let entry = queue.pop_front_if(|pending| pending.size <= 1024 * 1024);
        assert!(entry.is_some());
        assert_eq!(entry.unwrap().cursor_id, Some(CursorId::new_from_raw(2)));
    }

    #[test]
    fn test_pop_front_if_empty_queue() {
        let queue = AllocationQueue::new();
        assert!(queue.pop_front_if(always).is_none());
        assert!(!queue.has_pending());
    }

    #[test]
    fn test_cancelled_entry_pruned_on_pop() {
        let queue = AllocationQueue::new();
        let rx = push_high(&queue, CursorId::new_from_raw(1), 1024);
        drop(rx);

        let entry = queue.pop_front_if(always);
        assert!(entry.is_none());
        assert!(!queue.has_pending());
    }

    #[test]
    fn test_cancelled_token_entry_pruned_on_pop() {
        let queue = AllocationQueue::new();
        // Hold the receiver alive: only the token marks the entry abandoned.
        let _rx = queue.push_read(
            CursorId::new_from_raw(1),
            1024,
            BufferKind::GetObject,
            Some(cancelled_token()),
            || true,
        );

        let entry = queue.pop_front_if(always);
        assert!(entry.is_none(), "entry with a cancelled token must be pruned");
        assert!(!queue.has_pending());
    }

    #[test]
    fn test_uncancelled_token_entry_not_pruned() {
        let queue = AllocationQueue::new();
        let _rx = queue.push_read(
            CursorId::new_from_raw(7),
            1024,
            BufferKind::GetObject,
            Some(CancellationToken::never_cancelled()),
            || true,
        );

        let entry = queue.pop_front_if(always).expect("live entry must remain servable");
        assert_eq!(entry.cursor_id, Some(CursorId::new_from_raw(7)));
    }

    #[test]
    fn test_cancelled_token_entry_does_not_block_live_entry() {
        let queue = AllocationQueue::new();
        let _rx_dead = queue.push_read(
            CursorId::new_from_raw(1),
            64 * 1024 * 1024,
            BufferKind::GetObject,
            Some(cancelled_token()),
            || true,
        );
        let _rx_live = push_high(&queue, CursorId::new_from_raw(2), 1024);

        let entry = queue.pop_front_if(always).expect("live entry should be served");
        assert_eq!(entry.cursor_id, Some(CursorId::new_from_raw(2)));
    }

    #[test]
    fn test_head_queued_at_empty_queue() {
        let queue = AllocationQueue::new();
        assert!(queue.head_queued_at().is_none());
    }

    #[test]
    fn test_head_queued_at_returns_oldest_high_priority_first() {
        let queue = AllocationQueue::new();
        // Push low first, then high. `head_queued_at` should report the high entry.
        let _rx_low = push_low(&queue, CursorId::new_from_raw(1), 1024);
        std::thread::sleep(std::time::Duration::from_millis(2));
        let _rx_high = push_high(&queue, CursorId::new_from_raw(2), 1024);

        let head = queue.head_queued_at().expect("queue not empty");
        // The high entry was pushed last, so its elapsed time is shorter.
        assert!(
            head.elapsed() < std::time::Duration::from_millis(2),
            "head_queued_at should track high-priority entry, not the older low one",
        );
    }

    #[test]
    fn test_head_queued_at_skips_cancelled_entries() {
        let queue = AllocationQueue::new();
        let rx_old = push_high(&queue, CursorId::new_from_raw(1), 1024);
        std::thread::sleep(std::time::Duration::from_millis(2));
        let _rx_live = push_high(&queue, CursorId::new_from_raw(2), 1024);

        drop(rx_old); // cancels the older entry without removing it

        let head = queue.head_queued_at().expect("live entry remains");
        assert!(
            head.elapsed() < std::time::Duration::from_millis(2),
            "head_queued_at should skip cancelled entries to the next live one",
        );
    }

    #[test]
    fn test_head_queued_at_skips_cancelled_token_entries() {
        let queue = AllocationQueue::new();
        // The older entry's token reports cancelled (receiver still held); the newer one is live.
        let _rx_dead = queue.push_read(
            CursorId::new_from_raw(1),
            1024,
            BufferKind::GetObject,
            Some(cancelled_token()),
            || true,
        );
        std::thread::sleep(std::time::Duration::from_millis(2));
        let _rx_live = push_high(&queue, CursorId::new_from_raw(2), 1024);

        let head = queue.head_queued_at().expect("live entry remains");
        assert!(
            head.elapsed() < std::time::Duration::from_millis(2),
            "head_queued_at should skip entries with a cancelled token to the next live one",
        );
    }

    #[test]
    fn test_head_queued_at_falls_back_to_low_when_high_empty() {
        let queue = AllocationQueue::new();
        let _rx_low = push_low(&queue, CursorId::new_from_raw(1), 1024);

        let head = queue.head_queued_at().expect("low queue not empty");
        assert!(head.elapsed() < std::time::Duration::from_secs(1));
    }
}
