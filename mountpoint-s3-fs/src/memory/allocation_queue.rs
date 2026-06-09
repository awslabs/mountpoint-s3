//! Priority-ordered allocation queue for buffer requests under memory pressure.

use std::collections::VecDeque;
use std::time::Instant;

use futures::channel::oneshot;

use crate::prefetch::CursorId;
use crate::sync::Mutex;
use crate::sync::atomic::{AtomicBool, Ordering};

use super::buffers::PoolBuffer;
use super::stats::BufferKind;

/// Priority for an allocation request.
///
/// The queue serves all [`High`](Self::High) entries (FIFO) before any
/// [`Low`](Self::Low) entries (FIFO). A [`Low`] request can be promoted to
/// the back of [`High`] via [`AllocationQueue::upgrade`].
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum AllocationPriority {
    Low,
    High,
}

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
}

impl PendingAllocation {
    /// Deliver the allocated buffer to the waiter.
    /// Returns `Err(buffer)` if the receiver was dropped (caller cancelled).
    pub fn fulfill(self, buffer: PoolBuffer) -> Result<(), PoolBuffer> {
        self.sender.send(buffer)
    }
}

/// A priority-ordered allocation queue with two lanes: high and low.
///
/// High-priority requests (active reads, uploads) are served before low-priority
/// ones (speculative prefetch). Within each lane, requests are served FIFO.
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

impl std::fmt::Debug for AllocationQueue {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("AllocationQueue")
            .field("has_pending", &self.has_pending.load(Ordering::Relaxed))
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

    /// Enqueue a high-priority buffer allocation request.
    /// Returns a receiver that resolves to the allocated [PoolBuffer] when fulfilled,
    /// or `Err(Canceled)` if the sender is dropped.
    pub fn push_high(
        &self,
        cursor_id: Option<CursorId>,
        size: usize,
        kind: BufferKind,
    ) -> oneshot::Receiver<PoolBuffer> {
        self.push_inner(AllocationPriority::High, cursor_id, size, kind)
    }

    /// Enqueue a low-priority buffer allocation request.
    /// Low-priority requests always have a cursor (speculative prefetch).
    /// Returns a receiver that resolves to the allocated [PoolBuffer] when fulfilled,
    /// or `Err(Canceled)` if the sender is dropped.
    pub fn push_low(&self, cursor_id: CursorId, size: usize, kind: BufferKind) -> oneshot::Receiver<PoolBuffer> {
        self.push_inner(AllocationPriority::Low, Some(cursor_id), size, kind)
    }

    fn push_inner(
        &self,
        priority: AllocationPriority,
        cursor_id: Option<CursorId>,
        size: usize,
        kind: BufferKind,
    ) -> oneshot::Receiver<PoolBuffer> {
        let (sender, receiver) = oneshot::channel();
        let entry = PendingAllocation {
            cursor_id,
            size,
            kind,
            queued_at: Instant::now(),
            sender,
        };

        let mut inner = self.inner.lock().unwrap();
        self.has_pending.store(true, Ordering::Release);
        match priority {
            AllocationPriority::High => inner.high.push_back(entry),
            AllocationPriority::Low => inner.low.push_back(entry),
        }

        receiver
    }

    /// Atomically peeks at the front entry and removes it if `predicate` returns `true`.
    ///
    /// Checks the high-priority list first, then low. Cancelled entries (where the
    /// receiver was dropped) are pruned from the front of each queue before checking
    /// the predicate — this prevents a large cancelled entry from blocking smaller
    /// live entries behind it.
    ///
    /// Returns `None` if both queues are empty or the predicate returns `false`.
    /// Sets `has_pending` to `false` if both queues become empty after removal.
    pub fn pop_front_if(
        &self,
        predicate: impl FnOnce(usize, BufferKind, Option<CursorId>) -> bool,
    ) -> Option<PendingAllocation> {
        let mut inner = self.inner.lock().unwrap();

        // Prune cancelled entries from the front of each queue.
        while inner.high.front().is_some_and(|e| e.sender.is_canceled()) {
            inner.high.pop_front();
        }
        while inner.low.front().is_some_and(|e| e.sender.is_canceled()) {
            inner.low.pop_front();
        }

        let front = inner.high.front().or_else(|| inner.low.front());
        let Some(front) = front else {
            self.has_pending.store(false, Ordering::Release);
            return None;
        };

        if !predicate(front.size, front.kind, front.cursor_id) {
            return None;
        }
        let entry = inner.high.pop_front().or_else(|| inner.low.pop_front());
        if inner.high.is_empty() && inner.low.is_empty() {
            self.has_pending.store(false, Ordering::Release);
        }
        entry
    }

    /// Moves all entries for `cursor_id` from the low-priority queue to the back
    /// of the high-priority queue. No-op if no entries match.
    ///
    /// Called when a FUSE read arrives for a cursor that has pending speculative
    /// allocations — those allocations are now urgent.
    pub fn upgrade(&self, cursor_id: CursorId) {
        let mut inner = self.inner.lock().unwrap();
        let n = inner.low.len();
        for _ in 0..n {
            let entry = inner.low.pop_front().unwrap();
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
            self.has_pending.store(false, Ordering::Release);
        }
    }

    /// Returns `true` if either queue has pending entries.
    ///
    /// This is a lock-free check using an [`AtomicBool`]. Used by the pool to decide
    /// whether new requests must go through the queue (to respect priority ordering
    /// of existing waiters).
    pub fn has_pending(&self) -> bool {
        self.has_pending.load(Ordering::Acquire)
    }

    /// `Instant` at which the next-to-be-served live entry was queued.
    ///
    /// Walks high then low (matching [`Self::pop_front_if`]'s priority order)
    /// and skips cancelled entries without removing them — pruning happens on
    /// the next [`Self::pop_front_if`] call. Returns `None` if the queue is
    /// empty or contains only cancelled entries.
    pub fn head_queued_at(&self) -> Option<Instant> {
        let inner = self.inner.lock().unwrap();
        inner
            .high
            .iter()
            .find(|e| !e.sender.is_canceled())
            .or_else(|| inner.low.iter().find(|e| !e.sender.is_canceled()))
            .map(|e| e.queued_at)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use futures::executor::block_on;

    use crate::memory::pages::Page;

    fn make_buffer(size: usize) -> PoolBuffer {
        let page = Page::new_for_tests(size);
        let ptr = page.try_acquire(BufferKind::Other).unwrap();
        PoolBuffer::new_primary(ptr, size)
    }

    /// Helper: always-true predicate (unconditionally pop).
    fn always(_size: usize, _kind: BufferKind, _cursor: Option<CursorId>) -> bool {
        true
    }

    #[test]
    fn test_push_sets_has_pending() {
        let queue = AllocationQueue::new();
        assert!(!queue.has_pending());

        let _rx = queue.push_high(Some(CursorId::new_from_raw(1)), 1024, BufferKind::GetObject);
        assert!(queue.has_pending());
    }

    #[test]
    fn test_pop_front_if_fulfills_and_clears_pressure() {
        let queue = AllocationQueue::new();
        let rx = queue.push_high(Some(CursorId::new_from_raw(1)), 1024, BufferKind::GetObject);

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
        let _rx = queue.push_high(Some(CursorId::new_from_raw(1)), 1024, BufferKind::GetObject);

        let result = queue.pop_front_if(|_size, _kind, _cursor| false);
        assert!(result.is_none());
        assert!(queue.has_pending()); // still there
    }

    #[test]
    fn test_high_priority_served_before_low() {
        let queue = AllocationQueue::new();

        let _rx_low = queue.push_low(CursorId::new_from_raw(1), 1024, BufferKind::GetObject);
        let _rx_high = queue.push_high(Some(CursorId::new_from_raw(2)), 1024, BufferKind::GetObject);

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(CursorId::new_from_raw(2))); // high first
    }

    #[test]
    fn test_fifo_within_same_priority() {
        let queue = AllocationQueue::new();

        let _rx1 = queue.push_high(Some(CursorId::new_from_raw(1)), 1024, BufferKind::GetObject);
        let _rx2 = queue.push_high(Some(CursorId::new_from_raw(2)), 1024, BufferKind::GetObject);

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

        let _rx_a = queue.push_low(cursor_a, 1024, BufferKind::GetObject);
        let _rx_b = queue.push_low(cursor_b, 1024, BufferKind::GetObject);

        queue.upgrade(cursor_a);

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(cursor_a)); // upgraded, served first
    }

    #[test]
    fn test_upgrade_multiple_entries_same_cursor() {
        let queue = AllocationQueue::new();
        let cursor = CursorId::new_from_raw(1);
        let other = CursorId::new_from_raw(2);

        let _rx1 = queue.push_low(cursor, 1024, BufferKind::GetObject);
        let _rx2 = queue.push_low(cursor, 2048, BufferKind::GetObject);
        let _rx_other = queue.push_low(other, 1024, BufferKind::GetObject);

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
        let _rx_upload = queue.push_high(None, 8192, BufferKind::PutObject);
        let _rx_read = queue.push_low(cursor, 1024, BufferKind::GetObject);

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

        let rx_large = queue.push_high(Some(CursorId::new_from_raw(1)), 64 * 1024 * 1024, BufferKind::GetObject);
        let _rx_small = queue.push_high(Some(CursorId::new_from_raw(2)), 1024, BufferKind::GetObject);

        drop(rx_large);

        let entry = queue.pop_front_if(|size, _, _| size <= 1024 * 1024);
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
        let rx = queue.push_high(Some(CursorId::new_from_raw(1)), 1024, BufferKind::GetObject);
        drop(rx);

        let entry = queue.pop_front_if(always);
        assert!(entry.is_none());
        assert!(!queue.has_pending());
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
        let _rx_low = queue.push_low(CursorId::new_from_raw(1), 1024, BufferKind::GetObject);
        std::thread::sleep(std::time::Duration::from_millis(2));
        let _rx_high = queue.push_high(Some(CursorId::new_from_raw(2)), 1024, BufferKind::GetObject);

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
        let rx_old = queue.push_high(Some(CursorId::new_from_raw(1)), 1024, BufferKind::GetObject);
        std::thread::sleep(std::time::Duration::from_millis(2));
        let _rx_live = queue.push_high(Some(CursorId::new_from_raw(2)), 1024, BufferKind::GetObject);

        drop(rx_old); // cancels the older entry without removing it

        let head = queue.head_queued_at().expect("live entry remains");
        assert!(
            head.elapsed() < std::time::Duration::from_millis(2),
            "head_queued_at should skip cancelled entries to the next live one",
        );
    }

    #[test]
    fn test_head_queued_at_falls_back_to_low_when_high_empty() {
        let queue = AllocationQueue::new();
        let _rx_low = queue.push_low(CursorId::new_from_raw(1), 1024, BufferKind::GetObject);

        let head = queue.head_queued_at().expect("low queue not empty");
        assert!(head.elapsed() < std::time::Duration::from_secs(1));
    }
}
