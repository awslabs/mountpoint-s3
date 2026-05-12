use metrics::{counter, histogram};
use mountpoint_s3_client::ObjectClient;
use tracing::trace;

use crate::checksums::ChecksummedBytes;
use crate::memory::CursorHandle;
use crate::metrics::defs::PREFETCH_RESET_STATE;
use crate::object::ObjectId;

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
    /// Id of the object to download
    object_id: ObjectId,
    /// Start offset for sequential read, used for calculating contiguous read metric
    start_offset: u64,
    /// Per-cursor state (reservation + active read tracking)
    cursor_handle: CursorHandle,
    /// Background task to request data
    request_task: RequestTask<Client>,
    /// Holds data for backward seeks
    ///
    /// **Invariant**: the offset of the last byte in this window is always `self.current_offset - 1`.
    backward_seek_window: SeekWindow,
    /// The maximum amount of unavailable data the prefetcher will tolerate during a seek operation
    /// before resetting and starting a new S3 request.
    max_forward_seek_wait_distance: u64,
    /// Current offset of this cursor
    current_offset: u64,
}

impl<Client> Cursor<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// Create a new cursor at the given offset.
    pub fn new(
        request_task: RequestTask<Client>,
        cursor_handle: CursorHandle,
        config: &PrefetcherConfig,
        object_id: ObjectId,
        offset: u64,
    ) -> Self {
        Self {
            object_id,
            start_offset: offset,
            cursor_handle,
            request_task,
            backward_seek_window: SeekWindow::new(config.max_backward_seek_distance as usize),
            max_forward_seek_wait_distance: config.max_forward_seek_wait_distance,
            current_offset: offset,
        }
    }

    /// The current offset for this cursor.
    pub fn current_offset(&self) -> u64 {
        self.current_offset
    }

    /// Read at the current offset.
    pub async fn read(
        &mut self,
        length: usize,
    ) -> Result<(ChecksummedBytes, bool), PrefetchReadError<Client::ClientError>> {
        let _active_read_guard = self.cursor_handle.set_active_read(self.current_offset, length);

        self.do_read(length).await
    }

    /// Try reading at the given offset. Returns `None` if unable to seek to the offset.
    pub async fn try_read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> Result<Option<(ChecksummedBytes, bool)>, PrefetchReadError<Client::ClientError>> {
        // Set the active read range before any blocking. For forward seeks, widen to include
        // the skipped bytes the prefetcher must consume to reach the requested offset.
        let active_start = self.current_offset.min(offset);
        let active_size = length + offset.saturating_sub(active_start) as usize;
        let _active_read_guard = self.cursor_handle.set_active_read(active_start, active_size);

        if !self.try_seek(offset).await? {
            // Seek failed
            trace!(
                expected = self.current_offset,
                actual = offset,
                "out-of-order read, resetting prefetch"
            );
            counter!(PREFETCH_RESET_STATE).increment(1);
            return Ok(None);
        }

        Ok(Some(self.do_read(length).await?))
    }

    async fn do_read(
        &mut self,
        length: usize,
    ) -> Result<(ChecksummedBytes, bool), PrefetchReadError<Client::ClientError>> {
        let offset = self.current_offset;
        let remaining = self.request_task.end_offset().saturating_sub(offset);
        if remaining == 0 {
            return Ok((ChecksummedBytes::default(), false));
        }

        let mut to_read = (length as u64).min(remaining);
        let mut all_parts_from_cache = true;
        let mut response = ChecksummedBytes::default();
        while to_read > 0 {
            debug_assert!(self.request_task.remaining() > 0);

            let part = self.request_task.read(to_read as usize).await?;
            all_parts_from_cache &= part.is_from_cache();
            self.backward_seek_window.push(part.clone());
            let part_bytes = part.into_bytes(&self.object_id, self.current_offset)?;

            self.current_offset += part_bytes.len() as u64;
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
        if offset == self.current_offset {
            return Ok(true);
        }

        trace!(from = self.current_offset, to = offset, "trying to seek");
        if offset > self.current_offset {
            self.try_seek_forward(offset).await
        } else {
            self.try_seek_backward(offset).await
        }
    }

    async fn try_seek_forward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset > self.current_offset);
        let total_seek_distance = offset - self.current_offset;
        histogram!("prefetch.seek_distance", "dir" => "forward").record(total_seek_distance as f64);

        if offset >= self.request_task.read_window_end_offset() {
            return Ok(false);
        }

        let available_offset = self.request_task.available_offset();
        let available_soon_offset = available_offset.saturating_add(self.max_forward_seek_wait_distance);
        if offset >= available_soon_offset {
            trace!(
                requested_offset = offset,
                available_offset = available_offset,
                "seek failed: not enough data available"
            );
            return Ok(false);
        }
        let mut seek_distance = offset - self.current_offset;
        while seek_distance > 0 {
            let part = self.request_task.read(seek_distance as usize).await?;
            seek_distance -= part.len() as u64;
            self.current_offset += part.len() as u64;
            self.backward_seek_window.push(part);
        }
        Ok(true)
    }

    async fn try_seek_backward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset < self.current_offset);

        let backwards_length_needed = self.current_offset - offset;
        histogram!("prefetch.seek_distance", "dir" => "backward").record(backwards_length_needed as f64);

        let Some(parts) = self.backward_seek_window.read_back(backwards_length_needed as usize) else {
            trace!("seek failed: not enough data in backwards seek window");
            return Ok(false);
        };
        self.request_task.push_front(parts).await?;
        self.current_offset = offset;
        Ok(true)
    }
}

impl<Client> Drop for Cursor<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn drop(&mut self) {
        histogram!("prefetch.contiguous_read_len").record((self.current_offset - self.start_offset) as f64);
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
