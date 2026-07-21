use metrics::{counter, histogram};
use mountpoint_s3_client::ObjectClient;
use tracing::trace;

use crate::checksums::ChecksummedBytes;
use crate::memory::CursorHandle;
use crate::metrics::defs::PREFETCH_RESET_STATE;
use crate::object::ObjectId;
use crate::sync::{Arc, AsyncMutex, Mutex};

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
    /// Id of this cursor
    cursor_id: CursorId,
    /// The expensive resettable resources (RequestTask + SeekWindow).
    /// `None` after a limiter-initiated reset.
    inner: Arc<AsyncMutex<Option<CursorInner<Client>>>>,
    /// The maximum amount of unavailable data the prefetcher will tolerate during a seek operation
    /// before resetting and starting a new S3 request.
    max_forward_seek_wait_distance: u64,
}

/// The resettable portion of a cursor: the request task and backward seek buffer.
#[derive(Debug)]
struct CursorInner<Client: ObjectClient + Clone + Send + Sync + 'static> {
    /// Background task to request data
    request_task: RequestTask<Client>,
    /// Holds data for backward seeks
    ///
    /// **Invariant**: the offset of the last byte in this window is always `self.current_offset - 1`.
    backward_seek_window: Arc<Mutex<SeekWindow>>,
    /// Current offset of this cursor
    current_offset: u64,
    /// Per-cursor state (reservation + active read tracking)
    cursor_handle: CursorHandle,
}

impl<Client> Cursor<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// Create a new cursor at the given offset and read from it.
    pub async fn new_and_read(
        request_task: RequestTask<Client>,
        cursor_handle: CursorHandle,
        config: &PrefetcherConfig,
        object_id: ObjectId,
        offset: u64,
        initial_read_length: usize,
    ) -> Result<(Self, (ChecksummedBytes, bool)), PrefetchReadError<Client::ClientError>> {
        let cursor_id = cursor_handle.id();
        let backward_seek_window = Arc::new(Mutex::new(SeekWindow::new(config.max_backward_seek_distance as usize)));
        {
            let window = Arc::downgrade(&backward_seek_window);
            cursor_handle.register_clear_seek_window_fn(Box::new(move || {
                window.upgrade().map(|w| w.lock().unwrap().clear()).unwrap_or(0)
            }));
        }
        let cursor_inner = CursorInner {
            request_task,
            backward_seek_window,
            current_offset: offset,
            cursor_handle,
        };

        let cursor = Self {
            object_id,
            cursor_id,
            inner: Arc::new(AsyncMutex::new(Some(cursor_inner))),
            max_forward_seek_wait_distance: config.max_forward_seek_wait_distance,
        };

        let mut guard = cursor.inner.lock().await;
        let inner = guard.as_mut().expect("internal cursor should be set");

        // Register reset callback while holding the lock. A reset will not affect the initial read.
        let inner_reset = Arc::downgrade(&cursor.inner);
        inner.cursor_handle.register_reset_fn(Box::new(move || {
            if let Some(lock) = inner_reset.upgrade()
                && let Some(mut guard) = lock.try_lock()
            {
                let Some(inner) = guard.take() else {
                    return false;
                };
                drop(inner);
                true
            } else {
                false
            }
        }));

        let _active_read_guard = inner
            .cursor_handle
            .set_active_read(inner.current_offset, initial_read_length);
        let result = inner.do_read(&cursor, initial_read_length).await?;
        drop(guard);

        Ok((cursor, result))
    }

    /// Try reading at the given offset. Returns `None` if unable to seek to the offset
    /// or if the cursor has been reset by the memory limiter.
    pub async fn try_read(
        &self,
        offset: u64,
        length: usize,
    ) -> Result<Option<(ChecksummedBytes, bool)>, PrefetchReadError<Client::ClientError>> {
        let mut guard = self.inner.lock().await;
        let Some(inner) = guard.as_mut() else {
            return Ok(None);
        };

        // Set the active read range before any blocking. For forward seeks, widen to include
        // the skipped bytes the prefetcher must consume to reach the requested offset.
        let active_start = inner.current_offset.min(offset);
        let active_size = length + offset.saturating_sub(active_start) as usize;
        let _active_read_guard = inner.cursor_handle.set_active_read(active_start, active_size);

        if !inner.try_seek(self, offset).await? {
            // Seek failed
            trace!(
                expected = inner.current_offset,
                actual = offset,
                "out-of-order read, resetting prefetch"
            );
            counter!(PREFETCH_RESET_STATE).increment(1);
            return Ok(None);
        }

        Ok(Some(inner.do_read(self, length).await?))
    }

    pub fn cursor_id(&self) -> CursorId {
        self.cursor_id
    }
}

impl<Client> CursorInner<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    async fn do_read(
        &mut self,
        cursor: &Cursor<Client>,
        length: usize,
    ) -> Result<(ChecksummedBytes, bool), PrefetchReadError<Client::ClientError>> {
        let remaining = self.request_task.end_offset().saturating_sub(self.current_offset);
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
            self.backward_seek_window.lock().unwrap().push(part.clone());
            let part_bytes = part.into_bytes(&cursor.object_id, self.current_offset)?;

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
    async fn try_seek(
        &mut self,
        cursor: &Cursor<Client>,
        offset: u64,
    ) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        if offset == self.current_offset {
            return Ok(true);
        }

        trace!(from = self.current_offset, to = offset, "trying to seek");
        if offset > self.current_offset {
            self.try_seek_forward(offset, cursor.max_forward_seek_wait_distance)
                .await
        } else {
            self.try_seek_backward(offset).await
        }
    }

    async fn try_seek_forward(
        &mut self,
        offset: u64,
        max_forward_seek_wait_distance: u64,
    ) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset > self.current_offset);
        let total_seek_distance = offset - self.current_offset;
        histogram!("prefetch.seek_distance", "dir" => "forward").record(total_seek_distance as f64);

        if offset >= self.request_task.read_window_end_offset() {
            return Ok(false);
        }
        let available_offset = self.request_task.available_offset();
        let available_soon_offset = available_offset.saturating_add(max_forward_seek_wait_distance);
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
            self.backward_seek_window.lock().unwrap().push(part);
        }
        Ok(true)
    }

    async fn try_seek_backward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset < self.current_offset);
        let backwards_length_needed = self.current_offset - offset;
        histogram!("prefetch.seek_distance", "dir" => "backward").record(backwards_length_needed as f64);

        let Some(parts) = self
            .backward_seek_window
            .lock()
            .unwrap()
            .read_back(backwards_length_needed as usize)
        else {
            trace!("seek failed: not enough data in backwards seek window");
            return Ok(false);
        };
        self.request_task.push_front(parts).await?;
        self.current_offset = offset;
        Ok(true)
    }
}

impl<Client> Drop for CursorInner<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn drop(&mut self) {
        histogram!("prefetch.contiguous_read_len")
            .record((self.current_offset - self.request_task.start_offset()) as f64);
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
