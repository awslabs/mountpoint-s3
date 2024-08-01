use futures::future::RemoteHandle;

use crate::prefetch::part::Part;
use crate::prefetch::part_queue::PartQueue;
use crate::prefetch::PrefetchReadError;

use super::part_stream::RequestRange;

/// A single GetObject request submitted to the S3 client
#[derive(Debug)]
pub struct RequestTask<E: std::error::Error> {
    /// Handle on the task/future. The future is cancelled when handle is dropped. This is None if
    /// the request is fake (created by seeking backwards in the stream)
    _task_handle: RemoteHandle<()>,
    remaining: usize,
    range: RequestRange,
    part_queue: PartQueue<E>,
}

impl<E: std::error::Error + Send + Sync> RequestTask<E> {
    pub fn from_handle(task_handle: RemoteHandle<()>, range: RequestRange, part_queue: PartQueue<E>) -> Self {
        Self {
            _task_handle: task_handle,
            remaining: range.len(),
            range,
            part_queue,
        }
    }

    // Push a given list of parts in front of the part queue
    pub async fn push_front(&mut self, parts: Vec<Part>) -> Result<(), PrefetchReadError<E>> {
        // Merge all parts into one single part by pushing them to the front of the part queue.
        // This could result in a really big part, but we normally use this only for backward seek
        // so its size should not be bigger than the prefetcher's `max_backward_seek_distance`.
        for part in parts.into_iter().rev() {
            self.remaining += part.len();
            self.part_queue.push_front(part).await?;
        }
        Ok(())
    }

    pub async fn read(&mut self, length: usize) -> Result<Part, PrefetchReadError<E>> {
        tracing::trace!(length, "read");
        let part = self.part_queue.read(length).await?;
        debug_assert!(part.len() <= self.remaining);
        self.remaining -= part.len();
        Ok(part)
    }

    pub fn start_offset(&self) -> u64 {
        self.range.start()
    }

    pub fn end_offset(&self) -> u64 {
        self.range.end()
    }

    pub fn total_size(&self) -> usize {
        self.range.len()
    }

    pub fn remaining(&self) -> usize {
        self.remaining
    }

    /// Maximum offset which data is known to be already in the `self.part_queue`
    pub fn available_offset(&self) -> u64 {
        self.start_offset() + self.part_queue.bytes_received() as u64
    }

    pub fn read_window_offset(&self) -> u64 {
        self.part_queue.read_window_offset().unwrap_or(self.range.end())
    }
}
