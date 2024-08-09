use std::ops::Range;
use std::sync::Arc;

use async_channel::{unbounded, Receiver, Sender};
use humansize::make_format;
use mountpoint_s3_client::ObjectClient;
use tracing::trace;

use crate::mem_limiter::MemoryLimiter;

use super::PrefetchReadError;

#[derive(Debug)]
pub enum BackpressureFeedbackEvent {
    /// An event where data with a certain length has been read out of the stream
    DataRead { offset: u64, length: usize },
    /// An event indicating part queue stall
    PartQueueStall,
}

pub struct BackpressureConfig {
    /// Backpressure's initial read window size
    pub initial_read_window_size: usize,
    /// Minimum read window size that the backpressure controller is allowed to scale down to
    pub min_read_window_size: usize,
    /// Maximum read window size that the backpressure controller is allowed to scale up to
    pub max_read_window_size: usize,
    /// Factor to increase the read window size by when the part queue is stalled
    pub read_window_size_multiplier: usize,
    /// Request range to apply backpressure
    pub request_range: Range<u64>,
    pub read_part_size: usize,
}

#[derive(Debug)]
pub struct BackpressureController<Client: ObjectClient> {
    read_window_updater: Sender<usize>,
    preferred_read_window_size: usize,
    min_read_window_size: usize,
    max_read_window_size: usize,
    read_window_size_multiplier: usize,
    /// Upper bound of the current read window. The request can return data up to this
    /// offset *exclusively*. This value must be advanced to continue fetching new data.
    read_window_end_offset: u64,
    /// End offset for the request we want to apply backpressure. The request can return
    /// data up to this offset *exclusively*.
    request_end_offset: u64,
    read_part_size: usize,
    mem_limiter: Arc<MemoryLimiter<Client>>,
}

#[derive(Debug)]
pub struct BackpressureLimiter {
    read_window_incrementing_queue: Receiver<usize>,
    /// Upper bound of the current read window.
    /// Calling [BackpressureLimiter::wait_for_read_window_increment()] will block current
    /// thread until this value is advanced.
    read_window_end_offset: u64,
    /// End offset for the request we want to apply backpressure. The request can return
    /// data up to this offset *exclusively*.
    request_end_offset: u64,
}

/// Creates a [BackpressureController] and its related [BackpressureLimiter].
/// We use a pair of these to for providing feedback to backpressure stream.
///
/// [BackpressureLimiter] is used on producer side of the object stream, that is, any
/// [super::part_stream::ObjectPartStream] that support backpressure. The producer can call
/// `wait_for_read_window_increment` to wait for feedback from the consumer. This method
/// could block when they know that the producer requires read window incrementing.
///
/// [BackpressureController] will be given to the consumer side of the object stream.
/// It can be used anywhere to set preferred read window size for the stream and tell the
/// producer when its read window should be increased.
pub fn new_backpressure_controller<Client: ObjectClient>(
    config: BackpressureConfig,
    mem_limiter: Arc<MemoryLimiter<Client>>,
) -> (BackpressureController<Client>, BackpressureLimiter) {
    let read_window_end_offset = config.request_range.start + config.initial_read_window_size as u64;
    let (read_window_updater, read_window_incrementing_queue) = unbounded();
    mem_limiter.reserve(config.initial_read_window_size as u64);
    let controller = BackpressureController {
        read_window_updater,
        preferred_read_window_size: config.initial_read_window_size,
        min_read_window_size: config.min_read_window_size,
        max_read_window_size: config.max_read_window_size,
        read_window_size_multiplier: config.read_window_size_multiplier,
        read_window_end_offset,
        request_end_offset: config.request_range.end,
        read_part_size: config.read_part_size,
        mem_limiter,
    };
    let limiter = BackpressureLimiter {
        read_window_incrementing_queue,
        read_window_end_offset,
        request_end_offset: config.request_range.end,
    };
    (controller, limiter)
}

impl<Client: ObjectClient> BackpressureController<Client> {
    pub fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset
    }

    /// Send a feedback to the backpressure controller when reading data out of the stream. The backpressure controller
    /// will ensure that the read window size is enough to read this offset and that it is always close to `preferred_read_window_size`.
    pub async fn send_feedback<E>(&mut self, event: BackpressureFeedbackEvent) -> Result<(), PrefetchReadError<E>> {
        match event {
            // Note, that this may come from a backwards seek, so offsets observed by this method are not necessarily ascending
            BackpressureFeedbackEvent::DataRead { offset, length } => {
                let next_read_offset = offset + length as u64;
                let remaining_window = self.read_window_end_offset.saturating_sub(next_read_offset) as usize;
                // Increment the read window only if the remaining window reaches some threshold i.e. half of it left.
                while remaining_window < (self.preferred_read_window_size / 2)
                    && self.read_window_end_offset < self.request_end_offset
                {
                    let available_mem = self.mem_limiter.available_mem();
                    // If the preferred read window size is still large and available memory is getting low we will try to scale it down.
                    if self.preferred_read_window_size > self.min_read_window_size
                        && available_mem < self.preferred_read_window_size as u64
                    {
                        self.try_scaling_down();
                        continue;
                    }

                    let new_read_window_end_offset = next_read_offset
                        .saturating_add(self.preferred_read_window_size as u64)
                        .min(self.request_end_offset);
                    debug_assert!(self.read_window_end_offset < new_read_window_end_offset);
                    let to_increase = new_read_window_end_offset.saturating_sub(self.read_window_end_offset) as usize;
                    trace!(
                        preferred_read_window_size = self.preferred_read_window_size,
                        next_read_offset,
                        read_window_end_offset = self.read_window_end_offset,
                        to_increase,
                        "incrementing read window"
                    );
                    self.increment_read_window(to_increase).await;
                    self.read_window_end_offset = new_read_window_end_offset;
                }
            }
            BackpressureFeedbackEvent::PartQueueStall => self.try_scaling_up(),
        }
        Ok(())
    }

    // Send an increment read window request to the stream producer
    async fn increment_read_window(&self, len: usize) {
        // This should not block since the channel is unbounded
        let _ = self
            .read_window_updater
            .send(len)
            .await
            .inspect_err(|_| trace!("read window incrementing queue is already closed"));
    }

    // Try scaling up preferred read window size with a multiplier configured at initialization.
    fn try_scaling_up(&mut self) {
        if self.preferred_read_window_size < self.max_read_window_size {
            let new_read_window_size = self.preferred_read_window_size * self.read_window_size_multiplier;
            // Also align the new read window size to the client part size
            let new_read_window_size =
                align(new_read_window_size, self.read_part_size, false).min(self.max_read_window_size);

            // Only scale up when there is enough memory
            let to_increase = (new_read_window_size - self.preferred_read_window_size) as u64;
            if to_increase <= self.mem_limiter.available_mem() {
                let formatter = make_format(humansize::BINARY);
                tracing::info!(
                    current_size = formatter(self.preferred_read_window_size),
                    new_size = formatter(new_read_window_size),
                    "scaling up preferred read window"
                );
                self.mem_limiter.release(self.preferred_read_window_size as u64);
                self.mem_limiter.reserve(new_read_window_size as u64);
                self.preferred_read_window_size = new_read_window_size;
            }
        }
    }

    pub fn try_scaling_down(&mut self) {
        if self.preferred_read_window_size > self.min_read_window_size {
            let new_read_window_size = self.preferred_read_window_size / self.read_window_size_multiplier;
            // Also align the new read window size to the client part size
            let new_read_window_size =
                align(new_read_window_size, self.read_part_size, false).max(self.min_read_window_size);

            let formatter = make_format(humansize::BINARY);
            tracing::info!(
                current_size = formatter(self.preferred_read_window_size),
                new_size = formatter(new_read_window_size),
                "scaling down read window"
            );
            self.mem_limiter.release(self.preferred_read_window_size as u64);
            self.mem_limiter.reserve(new_read_window_size as u64);
            self.preferred_read_window_size = new_read_window_size;
        }
    }
}

impl<Client: ObjectClient> Drop for BackpressureController<Client> {
    fn drop(&mut self) {
        self.mem_limiter.release(self.preferred_read_window_size as u64);
    }
}

impl BackpressureLimiter {
    pub fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset
    }

    /// Checks if there is enough read window to put the next item with a given offset to the stream.
    /// It blocks until receiving enough incrementing read window requests to serve the next part.
    ///
    /// Returns the new read window offset.
    pub async fn wait_for_read_window_increment<E>(
        &mut self,
        offset: u64,
    ) -> Result<Option<u64>, PrefetchReadError<E>> {
        // There is already enough read window so no need to block
        if self.read_window_end_offset > offset {
            // Check the read window incrementing queue to see there is an early request to increase read window
            let new_read_window_offset = if let Ok(len) = self.read_window_incrementing_queue.try_recv() {
                self.read_window_end_offset += len as u64;
                Some(self.read_window_end_offset)
            } else {
                None
            };
            return Ok(new_read_window_offset);
        }

        // Reaching here means there is not enough read window, so we block until it is large enough
        while self.read_window_end_offset <= offset && self.read_window_end_offset < self.request_end_offset {
            trace!(
                offset,
                read_window_offset = self.read_window_end_offset,
                "blocking for read window increment"
            );
            let recv = self.read_window_incrementing_queue.recv().await;
            match recv {
                Ok(len) => self.read_window_end_offset += len as u64,
                Err(_) => return Err(PrefetchReadError::ReadWindowIncrement),
            }
        }
        Ok(Some(self.read_window_end_offset))
    }
}

/// Try to align the given read window size to the part boundaries.
/// The `trim_only` flags controls whether the range is only trimmed down to
/// part boundaries or is allowed to grow wider.
fn align(read_window_size: usize, part_size: usize, trim_only: bool) -> usize {
    let part_alignment = part_size;
    let remainder = read_window_size % part_alignment;
    if trim_only || remainder == 0 {
        // trim it to the previous part boundary
        read_window_size - remainder
    } else {
        // extend it to the next part boundary
        read_window_size + (part_alignment - remainder)
    }
}
