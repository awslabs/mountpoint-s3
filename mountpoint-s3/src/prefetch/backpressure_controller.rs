use std::ops::Range;

use async_channel::{unbounded, Receiver, Sender};
use tracing::trace;

use super::PrefetchReadError;

#[derive(Debug)]
pub enum BackpressureFeedbackEvent {
    /// An event where data with a certain length has been read out of the stream
    DataRead(usize),
    /// An event indicating part queue stall
    PartQueueStall,
}

pub struct BackpressureConfig {
    /// Backpressure's initial read window size
    pub initial_read_window_size: usize,
    /// Maximum read window size that the backpressure controller is allowed to scale up to
    pub max_read_window_size: usize,
    /// Factor to increase the read window size by when the part queue is stalled
    pub read_window_size_multiplier: usize,
    /// Request range to apply backpressure
    pub request_range: Range<u64>,
}

#[derive(Debug)]
pub struct BackpressureController {
    read_window_updater: Sender<usize>,
    preferred_read_window_size: usize,
    max_read_window_size: usize,
    read_window_size_multiplier: usize,
    /// Upper bound of the current read window. The request can return data up to this
    /// offset *exclusively*. This value must be advanced to continue fetching new data.
    read_window_end_offset: u64,
    /// Next offset of the data to be read. It is used for tracking how many bytes of
    /// data has been read out of the stream.
    next_read_offset: u64,
    /// End offset for the request we want to apply backpressure. The request can return
    /// data up to this offset *exclusively*.
    request_end_offset: u64,
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
pub fn new_backpressure_controller(config: BackpressureConfig) -> (BackpressureController, BackpressureLimiter) {
    let read_window_end_offset = config.request_range.start + config.initial_read_window_size as u64;
    let (read_window_updater, read_window_incrementing_queue) = unbounded();
    let controller = BackpressureController {
        read_window_updater,
        preferred_read_window_size: config.initial_read_window_size,
        max_read_window_size: config.max_read_window_size,
        read_window_size_multiplier: config.read_window_size_multiplier,
        read_window_end_offset,
        next_read_offset: config.request_range.start,
        request_end_offset: config.request_range.end,
    };
    let limiter = BackpressureLimiter {
        read_window_incrementing_queue,
        read_window_end_offset,
        request_end_offset: config.request_range.end,
    };
    (controller, limiter)
}

impl BackpressureController {
    pub fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset
    }

    /// Send a feedback to the backpressure controller when reading data out of the stream. The backpressure controller
    /// will ensure that the read window size is enough to read this offset and that it is always close to `preferred_read_window_size`.
    pub async fn send_feedback<E>(&mut self, event: BackpressureFeedbackEvent) -> Result<(), PrefetchReadError<E>> {
        match event {
            BackpressureFeedbackEvent::DataRead(length) => {
                self.next_read_offset += length as u64;
                // Increment the read window only if the remaining window reaches some threshold i.e. half of it left.
                if self.remaining_window() < (self.preferred_read_window_size / 2)
                    && self.read_window_end_offset < self.request_end_offset
                {
                    let new_read_window_end_offset = self
                        .next_read_offset
                        .saturating_add(self.preferred_read_window_size as u64)
                        .min(self.request_end_offset);
                    debug_assert!(self.read_window_end_offset < new_read_window_end_offset);
                    let to_increase = new_read_window_end_offset.saturating_sub(self.read_window_end_offset) as usize;
                    trace!(
                        preferred_read_window_size = self.preferred_read_window_size,
                        next_read_offset = self.next_read_offset,
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

    fn remaining_window(&self) -> usize {
        self.read_window_end_offset.saturating_sub(self.next_read_offset) as usize
    }

    // Try scaling up preferred read window size with a multiplier configured at initialization.
    fn try_scaling_up(&mut self) {
        if self.preferred_read_window_size < self.max_read_window_size {
            let new_read_window_size =
                (self.preferred_read_window_size * self.read_window_size_multiplier).min(self.max_read_window_size);
            trace!(
                current_size = self.preferred_read_window_size,
                new_size = new_read_window_size,
                "scaling up preferred read window"
            );
            self.preferred_read_window_size = new_read_window_size;
        }
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
