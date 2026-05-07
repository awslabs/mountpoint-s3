use metrics::{counter, histogram};
use mountpoint_s3_client::ObjectClient;
use tracing::trace;

use crate::checksums::ChecksummedBytes;
use crate::mem_limiter::MemoryLimiter;
use crate::metrics::defs::PREFETCH_RESET_STATE;
use crate::object::ObjectId;
use crate::sync::Arc;

use super::seek_window::SeekWindow;
use super::task::RequestTask;
use super::{PrefetchReadError, PrefetcherConfig};

/// A read cursor for a single sequential prefetch sequence. Manages the active request task,
/// backward seek window, read position, and all read/seek logic. Dropping a cursor records the
/// contiguous read metric and releases the in-flight request.
#[derive(Debug)]
pub struct Cursor<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    backpressure_task: RequestTask<Client>,
    // Invariant: the offset of the last byte in this window is always
    // self.next_sequential_read_offset - 1.
    backward_seek_window: SeekWindow,
    /// The maximum amount of unavailable data the prefetcher will tolerate during a seek operation
    /// before resetting and starting a new S3 request.
    max_forward_seek_wait_distance: u64,
    /// Start offset for sequential read, used for calculating contiguous read metric
    sequential_read_start_offset: u64,
    next_sequential_read_offset: u64,
    object_id: ObjectId,
    cursor_id: CursorId,
    mem_limiter: Arc<MemoryLimiter>,
}

impl<Client> Cursor<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn new(
        cursor_id: CursorId,
        backpressure_task: RequestTask<Client>,
        config: &PrefetcherConfig,
        object_id: ObjectId,
        offset: u64,
        mem_limiter: Arc<MemoryLimiter>,
    ) -> Self {
        Self {
            cursor_id,
            backpressure_task,
            backward_seek_window: SeekWindow::new(config.max_backward_seek_distance as usize),
            max_forward_seek_wait_distance: config.max_forward_seek_wait_distance,
            sequential_read_start_offset: offset,
            next_sequential_read_offset: offset,
            object_id,
            mem_limiter,
        }
    }

    pub fn current_offset(&self) -> u64 {
        self.next_sequential_read_offset
    }

    pub async fn read(
        &mut self,
        length: usize,
    ) -> Result<(ChecksummedBytes, bool), PrefetchReadError<Client::ClientError>> {
        let _active_read_guard =
            self.mem_limiter
                .set_active_read(self.cursor_id, self.next_sequential_read_offset, length);

        self.do_read(length).await
    }

    pub async fn try_read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> Result<Option<(ChecksummedBytes, bool)>, PrefetchReadError<Client::ClientError>> {
        // Set the active read range before any blocking. For forward seeks, widen to include
        // the skipped bytes the prefetcher must consume to reach the requested offset.
        let active_start = self.next_sequential_read_offset.min(offset);
        let active_size = length + offset.saturating_sub(active_start) as usize;
        let _active_read_guard = self
            .mem_limiter
            .set_active_read(self.cursor_id, active_start, active_size);

        if !self.try_seek(offset).await? {
            // Seek failed
            return Ok(None);
        }

        Ok(Some(self.read(length).await?))
    }

    async fn do_read(
        &mut self,
        length: usize,
    ) -> Result<(ChecksummedBytes, bool), PrefetchReadError<Client::ClientError>> {
        let offset = self.next_sequential_read_offset;
        let remaining = self.backpressure_task.end_offset().saturating_sub(offset);
        if remaining == 0 {
            return Ok((ChecksummedBytes::default(), false));
        }

        let mut to_read = (length as u64).min(remaining);
        let mut all_parts_from_cache = true;
        let mut response = ChecksummedBytes::default();
        while to_read > 0 {
            debug_assert!(self.backpressure_task.remaining() > 0);

            let part = self.backpressure_task.read(to_read as usize).await?;
            all_parts_from_cache &= part.is_from_cache();
            self.backward_seek_window.push(part.clone());
            let part_bytes = part.into_bytes(&self.object_id, self.next_sequential_read_offset)?;

            self.next_sequential_read_offset += part_bytes.len() as u64;
            // If we can complete the read with just a single buffer, early return to avoid copying
            // into a new buffer. This should be the common case as long as part size is larger than
            // read size, which it almost always is for real S3 clients and FUSE.
            if response.is_empty() && part_bytes.len() == to_read as usize {
                return Ok((part_bytes, all_parts_from_cache));
            }

            let part_len = part_bytes.len() as u64;
            response.extend(part_bytes)?;
            to_read -= part_len;
        }

        Ok((response, all_parts_from_cache))
    }

    /// Try to seek within the current inflight requests without restarting them.
    async fn try_seek(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        if offset == self.next_sequential_read_offset {
            return Ok(true);
        }

        trace!(from = self.next_sequential_read_offset, to = offset, "trying to seek");
        let result = if offset > self.next_sequential_read_offset {
            self.try_seek_forward(offset).await
        } else {
            self.try_seek_backward(offset).await
        };

        if result? {
            Ok(true)
        } else {
            trace!(
                expected = self.next_sequential_read_offset,
                actual = offset,
                "out-of-order read, resetting prefetch"
            );
            counter!(PREFETCH_RESET_STATE).increment(1);
            Ok(false)
        }
    }

    async fn try_seek_forward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset > self.next_sequential_read_offset);
        let total_seek_distance = offset - self.next_sequential_read_offset;
        histogram!("prefetch.seek_distance", "dir" => "forward").record(total_seek_distance as f64);

        if offset >= self.backpressure_task.read_window_end_offset() {
            return Ok(false);
        }

        let available_offset = self.backpressure_task.available_offset();
        let available_soon_offset = available_offset.saturating_add(self.max_forward_seek_wait_distance);
        if offset >= available_soon_offset {
            trace!(
                requested_offset = offset,
                available_offset = available_offset,
                "seek failed: not enough data available"
            );
            return Ok(false);
        }
        let mut seek_distance = offset - self.next_sequential_read_offset;
        while seek_distance > 0 {
            let part = self.backpressure_task.read(seek_distance as usize).await?;
            seek_distance -= part.len() as u64;
            self.next_sequential_read_offset += part.len() as u64;
            self.backward_seek_window.push(part);
        }
        Ok(true)
    }

    async fn try_seek_backward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset < self.next_sequential_read_offset);

        let backwards_length_needed = self.next_sequential_read_offset - offset;
        histogram!("prefetch.seek_distance", "dir" => "backward").record(backwards_length_needed as f64);

        let Some(parts) = self.backward_seek_window.read_back(backwards_length_needed as usize) else {
            trace!("seek failed: not enough data in backwards seek window");
            return Ok(false);
        };
        self.backpressure_task.push_front(parts).await?;
        self.next_sequential_read_offset = offset;
        Ok(true)
    }
}

impl<Client> Drop for Cursor<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn drop(&mut self) {
        histogram!("prefetch.contiguous_read_len")
            .record((self.next_sequential_read_offset - self.sequential_read_start_offset) as f64);
    }
}

/// Opaque identifier for a cursor.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct CursorId(u64);

impl CursorId {
    /// Reconstruct a `CursorId` from a raw `u64` (e.g., from CRT `custom_id`).
    pub fn new_from_raw(id: u64) -> Self {
        Self(id)
    }

    pub fn as_raw(&self) -> u64 {
        self.0
    }
}
