//! Priority-ordered allocation queue for buffer requests under memory pressure.

use std::collections::VecDeque;
use std::sync::Mutex;
use std::sync::atomic::{AtomicBool, Ordering};

use futures::channel::oneshot;

use crate::prefetch::CursorId;

use super::buffers::PoolBuffer;
use super::stats::BufferKind;

/// Priority levels for allocation requests.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AllocationPriority {
    /// Speculative prefetch — nobody is waiting on this data yet.
    Low,
    /// Active read or upload — a syscall is blocked waiting for this buffer.
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
    /// Channel sender used to deliver the allocated [PoolBuffer] to the waiter.
    /// When dropped, the receiver resolves with `Err(Canceled)`.
    pub sender: oneshot::Sender<PoolBuffer>,
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
    /// via [`is_memory_pressure`](Self::is_memory_pressure).
    memory_pressure: AtomicBool,
}

struct AllocationQueueInner {
    /// High-priority requests (active reads + uploads). Served first.
    high: VecDeque<PendingAllocation>,
    /// Low-priority requests (speculative prefetch). Served when high is empty.
    low: VecDeque<PendingAllocation>,
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
            memory_pressure: AtomicBool::new(false),
        }
    }

    /// Enqueue a buffer allocation request. Returns a receiver that resolves to the
    /// allocated [PoolBuffer] when fulfilled, or `Err(Canceled)` if the sender is dropped.
    pub fn push(
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
            sender,
        };

        let mut inner = self.inner.lock().unwrap();
        match priority {
            AllocationPriority::High => inner.high.push_back(entry),
            AllocationPriority::Low => inner.low.push_back(entry),
        }
        self.memory_pressure.store(true, Ordering::Release);

        receiver
    }

    /// Atomically peeks at the front entry and removes it if `predicate` returns `true`.
    ///
    /// Checks the high-priority list first, then low. The predicate receives the
    /// entry's size, kind, and cursor_id so the caller can decide (e.g., check
    /// `can_allocate(size)`) without a race between peek and pop.
    ///
    /// Returns `None` if both queues are empty or the predicate returns `false`.
    /// Sets `memory_pressure` to `false` if both queues become empty after removal.
    pub fn pop_front_if(
        &self,
        predicate: impl FnOnce(usize, BufferKind, Option<CursorId>) -> bool,
    ) -> Option<PendingAllocation> {
        let mut inner = self.inner.lock().unwrap();
        let front = inner.high.front().or_else(|| inner.low.front())?;
        if !predicate(front.size, front.kind, front.cursor_id) {
            return None;
        }
        let entry = inner.high.pop_front().or_else(|| inner.low.pop_front());
        if inner.high.is_empty() && inner.low.is_empty() {
            self.memory_pressure.store(false, Ordering::Release);
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
        let mut to_promote = Vec::new();
        let mut remaining = VecDeque::with_capacity(inner.low.len());
        for entry in inner.low.drain(..) {
            if entry.cursor_id == Some(cursor_id) {
                to_promote.push(entry);
            } else {
                remaining.push_back(entry);
            }
        }
        inner.low = remaining;
        for entry in to_promote {
            inner.high.push_back(entry);
        }
    }

    /// Returns `true` if either queue has pending entries.
    ///
    /// This is a lock-free check using an [`AtomicBool`]. Used by the pool to decide
    /// whether new requests must go through the queue (to respect priority ordering
    /// of existing waiters).
    pub fn is_memory_pressure(&self) -> bool {
        self.memory_pressure.load(Ordering::Acquire)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use futures::executor::block_on;

    use crate::memory::pages::Page;

    fn make_buffer(size: usize) -> PoolBuffer {
        let page = Page::new_for_tests(size);
        let ptr = page.try_reserve(BufferKind::Other).unwrap();
        PoolBuffer::new_primary(ptr, size)
    }

    /// Helper: always-true predicate (unconditionally pop).
    fn always(_size: usize, _kind: BufferKind, _cursor: Option<CursorId>) -> bool {
        true
    }

    #[test]
    fn test_push_sets_memory_pressure() {
        let queue = AllocationQueue::new();
        assert!(!queue.is_memory_pressure());

        let _rx = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(1)),
            1024,
            BufferKind::GetObject,
        );
        assert!(queue.is_memory_pressure());
    }

    #[test]
    fn test_pop_front_if_fulfills_and_clears_pressure() {
        let queue = AllocationQueue::new();
        let rx = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(1)),
            1024,
            BufferKind::GetObject,
        );

        let entry = queue.pop_front_if(always).unwrap();
        assert!(!queue.is_memory_pressure());

        let buffer = make_buffer(entry.size);
        let _ = entry.sender.send(buffer);

        let result = block_on(rx);
        assert!(result.is_ok());
    }

    #[test]
    fn test_pop_front_if_predicate_false_does_not_remove() {
        let queue = AllocationQueue::new();
        let _rx = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(1)),
            1024,
            BufferKind::GetObject,
        );

        let result = queue.pop_front_if(|_size, _kind, _cursor| false);
        assert!(result.is_none());
        assert!(queue.is_memory_pressure()); // still there
    }

    #[test]
    fn test_high_priority_served_before_low() {
        let queue = AllocationQueue::new();

        let _rx_low = queue.push(
            AllocationPriority::Low,
            Some(CursorId::new_from_raw(1)),
            1024,
            BufferKind::GetObject,
        );
        let _rx_high = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(2)),
            1024,
            BufferKind::GetObject,
        );

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(CursorId::new_from_raw(2))); // high first
    }

    #[test]
    fn test_fifo_within_same_priority() {
        let queue = AllocationQueue::new();

        let _rx1 = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(1)),
            1024,
            BufferKind::GetObject,
        );
        let _rx2 = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(2)),
            1024,
            BufferKind::GetObject,
        );

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

        let _rx_a = queue.push(AllocationPriority::Low, Some(cursor_a), 1024, BufferKind::GetObject);
        let _rx_b = queue.push(AllocationPriority::Low, Some(cursor_b), 1024, BufferKind::GetObject);

        queue.upgrade(cursor_a);

        let entry = queue.pop_front_if(always).unwrap();
        assert_eq!(entry.cursor_id, Some(cursor_a)); // upgraded, served first
    }

    #[test]
    fn test_upgrade_multiple_entries_same_cursor() {
        let queue = AllocationQueue::new();
        let cursor = CursorId::new_from_raw(1);
        let other = CursorId::new_from_raw(2);

        let _rx1 = queue.push(AllocationPriority::Low, Some(cursor), 1024, BufferKind::GetObject);
        let _rx2 = queue.push(AllocationPriority::Low, Some(cursor), 2048, BufferKind::GetObject);
        let _rx_other = queue.push(AllocationPriority::Low, Some(other), 1024, BufferKind::GetObject);

        queue.upgrade(cursor);

        let e1 = queue.pop_front_if(always).unwrap();
        let e2 = queue.pop_front_if(always).unwrap();
        assert_eq!(e1.cursor_id, Some(cursor));
        assert_eq!(e2.cursor_id, Some(cursor));

        let e3 = queue.pop_front_if(always).unwrap();
        assert_eq!(e3.cursor_id, Some(other));
    }

    #[test]
    fn test_pop_front_if_empty_queue() {
        let queue = AllocationQueue::new();
        assert!(queue.pop_front_if(always).is_none());
        assert!(!queue.is_memory_pressure());
    }

    #[test]
    fn test_dropped_receiver_does_not_block() {
        let queue = AllocationQueue::new();
        let rx = queue.push(
            AllocationPriority::High,
            Some(CursorId::new_from_raw(1)),
            1024,
            BufferKind::GetObject,
        );
        drop(rx);

        let entry = queue.pop_front_if(always).unwrap();
        let buffer = make_buffer(entry.size);
        let result = entry.sender.send(buffer);
        assert!(result.is_err()); // receiver gone, no panic
    }
}
