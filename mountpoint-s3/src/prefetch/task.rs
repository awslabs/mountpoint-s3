use futures::future::RemoteHandle;

use crate::prefetch::part::ObjectPart;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueue};
use crate::prefetch::PrefetchReadError;

/// A single GetObject request submitted to the S3 client
#[derive(Debug)]
pub struct RequestTask<E: std::error::Error> {
    /// Handle on the task/future. The future is cancelled when handle is dropped. This is None if
    /// the request is fake (created by seeking backwards in the stream)
    task_handle: Option<RemoteHandle<()>>,
    remaining: usize,
    start_offset: u64,
    total_size: usize,
    part_queue: PartQueue<E>,
}

impl<E: std::error::Error + Send + Sync> RequestTask<E> {
    pub fn from_handle(task_handle: RemoteHandle<()>, size: usize, offset: u64, part_queue: PartQueue<E>) -> Self {
        Self {
            task_handle: Some(task_handle),
            remaining: size,
            start_offset: offset,
            total_size: size,
            part_queue,
        }
    }

    pub fn from_parts(parts: impl IntoIterator<Item = ObjectPart>, offset: u64) -> Self {
        let mut size = 0;
        let (part_queue, part_queue_producer) = unbounded_part_queue();
        for part in parts {
            size += part.len();
            part_queue_producer.push(Ok(part));
        }
        Self {
            task_handle: None,
            remaining: size,
            start_offset: offset,
            total_size: size,
            part_queue,
        }
    }

    pub async fn read(&mut self, length: usize) -> Result<ObjectPart, PrefetchReadError<E>> {
        let part = self.part_queue.read(length).await?;
        debug_assert!(part.len() <= self.remaining);
        self.remaining -= part.len();
        Ok(part)
    }

    pub fn start_offset(&self) -> u64 {
        self.start_offset
    }

    pub fn end_offset(&self) -> u64 {
        self.start_offset + self.total_size as u64
    }

    pub fn total_size(&self) -> usize {
        self.total_size
    }

    pub fn remaining(&self) -> usize {
        self.remaining
    }

    /// Maximum offset which data is known to be already in the `self.part_queue`
    pub fn available_offset(&self) -> u64 {
        self.start_offset + self.part_queue.bytes_received() as u64
    }

    /// Some requests aren't actually streaming data (they're fake, created by backwards seeks), and
    /// shouldn't be counted for prefetcher progress.
    pub fn is_streaming(&self) -> bool {
        self.task_handle.is_some()
    }
}
