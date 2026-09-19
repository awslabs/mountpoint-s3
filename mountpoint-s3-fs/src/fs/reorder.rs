//! Reassembly of a sequential write stream from writes that arrive out of order.

use std::collections::BTreeMap;

use tracing::debug;

/// How far ahead of the offset an upload expects a write may reach and still be treated as
/// reordering, which also bounds how much a single handle buffers.
///
/// The macOS NFS client can have `vfs.generic.nfs.client.max_async_writes` (128 by default)
/// writes of up to `vfs.generic.nfs.client.iosize` (1 MiB) outstanding at once, and it does not
/// order them. Anything beyond this window is not reordering but random access, which Mountpoint
/// cannot support, so it is still rejected.
const NFS_REORDER_WINDOW: usize = 8 * 1024 * 1024;

/// What a [`WriteReorderBuffer`] decided to do with a write.
#[derive(Debug, Eq, PartialEq)]
pub enum Accepted {
    /// The write starts at the offset the uploader expects. Send it on, report it with
    /// [`WriteReorderBuffer::advance`], then drain the buffer with
    /// [`WriteReorderBuffer::take_next`] to release any writes it now completes.
    Sequential,
    /// The write is ahead of the offset the uploader expects and has been buffered until the gap
    /// before it is filled.
    Buffered,
    /// The uploader has already consumed this range, so there is nothing to send. NFS clients
    /// retransmit writes they think were lost, and re-sending the bytes would corrupt the object.
    Duplicate,
}

/// Feeds a strictly sequential stream of writes to an upload from writes that may arrive in any
/// order within a bounded window.
///
/// Mountpoint uploads an object as it is written, so it can only accept writes in offset order.
/// A FUSE kernel gives it exactly that, because an application's `write` blocks until the reply
/// arrives. The macOS NFS client behind FUSE-T does not: it issues many writes concurrently and
/// they can reach us swapped. This buffer restores the order, and rejects a write only once the
/// gap ahead of it grows past a window no amount of reordering could explain.
#[derive(Debug)]
pub struct WriteReorderBuffer {
    /// Offset the upload expects to be written next.
    next_offset: u64,
    /// Writes received ahead of `next_offset`, keyed by the offset they start at.
    ahead: BTreeMap<u64, Vec<u8>>,
    /// Total length of the writes held in `ahead`.
    buffered: usize,
    /// How far past `next_offset` a write may reach, and a cap on `buffered`. Zero disables
    /// buffering, restoring the strict ordering a FUSE kernel already guarantees.
    window: usize,
}

impl WriteReorderBuffer {
    /// A buffer for an upload that has already written up to `next_offset`, sized for the
    /// transport this build talks to.
    pub fn new(next_offset: u64) -> Self {
        let window = if fuser::HOST_IS_NFS_CLIENT {
            NFS_REORDER_WINDOW
        } else {
            0
        };
        Self {
            next_offset,
            ahead: BTreeMap::new(),
            buffered: 0,
            window,
        }
    }

    #[cfg(test)]
    fn with_window(window: usize) -> Self {
        Self {
            next_offset: 0,
            ahead: BTreeMap::new(),
            buffered: 0,
            window,
        }
    }

    /// Offset the upload expects next, counting writes still held in the buffer.
    pub fn next_offset(&self) -> u64 {
        self.next_offset
    }

    /// Classify a write, buffering it if it arrived early.
    ///
    /// Returns `None` when the write cannot be explained by reordering, leaving the caller to
    /// report it as the out-of-order write it would have been without this buffer.
    pub fn accept(&mut self, offset: u64, data: &[u8]) -> Option<Accepted> {
        if offset == self.next_offset {
            return Some(Accepted::Sequential);
        }
        // With no window there is no reordering to undo, so anything the upload is not waiting for
        // is random access, including a write of a range it has already consumed.
        if self.window == 0 {
            return None;
        }
        if offset + data.len() as u64 <= self.next_offset {
            return Some(Accepted::Duplicate);
        }
        // A write that starts behind `next_offset` but ends past it would have to be split, and
        // no NFS client sends one. Treat it as random access.
        if offset < self.next_offset {
            return None;
        }
        // A write reaching further ahead than the client could have in flight is random access, not
        // reordering, however few bytes it carries.
        if offset + data.len() as u64 - self.next_offset > self.window as u64 {
            return None;
        }
        // Overlapping writes can hold more than the span they cover, so bound the memory too.
        if self.buffered + data.len() > self.window {
            return None;
        }
        debug!(
            offset,
            len = data.len(),
            expected = self.next_offset,
            "buffering an out-of-order write"
        );
        if let Some(previous) = self.ahead.insert(offset, data.to_vec()) {
            self.buffered -= previous.len();
        }
        self.buffered += data.len();
        Some(Accepted::Buffered)
    }

    /// Records that the upload consumed `len` bytes from `next_offset`.
    ///
    /// Only call this once the write has reached the upload, so that a write the upload rejected
    /// leaves the buffer expecting the same offset as before.
    pub fn advance(&mut self, len: usize) {
        self.next_offset += len as u64;
    }

    /// Removes the buffered write that starts where the upload left off, if there is one.
    ///
    /// Call after [`WriteReorderBuffer::advance`], repeatedly, until it returns `None`: each write
    /// it hands back must reach the upload and be advanced past in turn.
    pub fn take_next(&mut self) -> Option<(u64, Vec<u8>)> {
        let offset = self.next_offset;
        let data = self.ahead.remove(&offset)?;
        self.buffered -= data.len();
        Some((offset, data))
    }

    /// Whether any write is still waiting for the gap before it to be filled.
    ///
    /// A handle closed in this state lost data: the writes cannot be uploaded because the bytes
    /// before them never arrived.
    pub fn has_buffered_writes(&self) -> bool {
        !self.ahead.is_empty()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// Offers a write the way the write path does, returning the offsets sent to the upload.
    ///
    /// Panics if the buffer rejects the write, so that a test which expects one to be rejected has
    /// to say so.
    fn send(buffer: &mut WriteReorderBuffer, offset: u64, len: usize) -> Vec<u64> {
        let data = vec![0; len];
        match buffer.accept(offset, &data).expect("the write should be accepted") {
            Accepted::Buffered | Accepted::Duplicate => return vec![],
            Accepted::Sequential => {}
        }
        let mut sent = vec![offset];
        buffer.advance(len);
        while let Some((offset, data)) = buffer.take_next() {
            sent.push(offset);
            buffer.advance(data.len());
        }
        sent
    }

    #[test]
    fn sequential_writes_pass_straight_through() {
        let mut buffer = WriteReorderBuffer::with_window(1024);
        for offset in [0, 8, 16] {
            assert_eq!(send(&mut buffer, offset, 8), vec![offset]);
        }
        assert_eq!(buffer.next_offset(), 24);
        assert!(!buffer.has_buffered_writes());
    }

    #[test]
    fn a_swapped_pair_is_put_back_in_order() {
        let mut buffer = WriteReorderBuffer::with_window(1024);
        assert_eq!(send(&mut buffer, 8, 8), Vec::<u64>::new());
        assert!(buffer.has_buffered_writes());
        assert_eq!(send(&mut buffer, 0, 8), vec![0, 8]);
        assert_eq!(buffer.next_offset(), 16);
        assert!(!buffer.has_buffered_writes());
    }

    #[test]
    fn a_run_of_buffered_writes_is_released_at_once() {
        let mut buffer = WriteReorderBuffer::with_window(1024);
        for offset in [24, 8, 16] {
            assert_eq!(send(&mut buffer, offset, 8), Vec::<u64>::new());
        }
        assert_eq!(send(&mut buffer, 0, 8), vec![0, 8, 16, 24]);
        assert_eq!(buffer.next_offset(), 32);
    }

    #[test]
    fn a_retransmitted_write_is_not_sent_twice() {
        let mut buffer = WriteReorderBuffer::with_window(1024);
        assert_eq!(send(&mut buffer, 0, 8), vec![0]);
        assert_eq!(buffer.accept(0, &[0; 8]), Some(Accepted::Duplicate));
        assert_eq!(buffer.next_offset(), 8);
    }

    #[test]
    fn a_write_the_upload_rejected_is_expected_again() {
        let mut buffer = WriteReorderBuffer::with_window(1024);
        // The write reached the upload, which refused it, so nothing was advanced past.
        assert_eq!(buffer.accept(0, &[0; 8]), Some(Accepted::Sequential));
        assert_eq!(buffer.next_offset(), 0);
        assert_eq!(send(&mut buffer, 0, 8), vec![0]);
    }

    #[test]
    fn a_write_past_the_window_is_rejected() {
        let mut buffer = WriteReorderBuffer::with_window(16);
        assert_eq!(send(&mut buffer, 8, 8), Vec::<u64>::new());
        assert_eq!(buffer.accept(64, &[0; 16]), None);
        assert_eq!(buffer.next_offset(), 0);
    }

    #[test]
    fn a_small_write_past_the_window_is_rejected() {
        // Cheap to buffer, but too far ahead of the upload to be anything but random access.
        let mut buffer = WriteReorderBuffer::with_window(16);
        assert_eq!(buffer.accept(1024, &[0; 1]), None);
        assert!(!buffer.has_buffered_writes());
    }

    #[test]
    fn a_write_overlapping_the_upload_is_rejected() {
        let mut buffer = WriteReorderBuffer::with_window(1024);
        assert_eq!(send(&mut buffer, 0, 8), vec![0]);
        assert_eq!(buffer.accept(4, &[0; 8]), None);
    }

    #[test]
    fn a_zero_window_rejects_anything_but_the_next_write() {
        let mut buffer = WriteReorderBuffer::with_window(0);
        assert_eq!(send(&mut buffer, 0, 8), vec![0]);
        assert_eq!(buffer.accept(16, &[0; 8]), None);
        // Without a window, a range the upload already consumed is random access, not a
        // retransmission to absorb.
        assert_eq!(buffer.accept(0, &[0; 8]), None);
    }
}
