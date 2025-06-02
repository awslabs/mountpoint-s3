use std::ops::Range;
use std::sync::Arc;

use async_channel::{unbounded, Receiver, Sender};
use humansize::make_format;
use mountpoint_s3_client::ObjectClient;
use tracing::trace;

use crate::mem_limiter::{BufferArea, MemoryLimiter};

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
}

/// A [BackpressureController] should be given to consumers of a byte stream.
/// It is used to send feedback ([Self::send_feedback]) to its corresponding [BackpressureLimiter],
/// the counterpart which should be leveraged by the stream producer.
#[derive(Debug)]
pub struct BackpressureController<Client: ObjectClient> {
    /// Sender for the [BackpressureLimiter] to receive size increments from the controller.
    read_window_updater: Sender<usize>,
    /// Amount by which the producer should be producing data ahead of [Self::next_read_offset].
    preferred_read_window_size: usize,
    min_read_window_size: usize,
    max_read_window_size: usize,
    /// Multiplier by which [Self::preferred_read_window_size] is scaled.
    read_window_size_multiplier: usize,
    /// Upper bound of the current read window, relative to the S3 object (and not the meta request).
    ///
    /// The request can return data up to this offset *exclusively*.
    /// This value must be advanced to continue fetching new data.
    read_window_end_offset: u64,
    /// Next offset of the data to be read, relative to the start of the S3 object.
    next_read_offset: u64,
    /// End offset within the S3 object for the request.
    ///
    /// The request can return data up to this offset *exclusively*.
    request_end_offset: u64,
    /// Memory limiter is used to guide decisions on how much data to prefetch.
    ///
    /// For example, when memory is low we should scale down [Self::preferred_read_window_size].
    mem_limiter: Arc<MemoryLimiter<Client>>,
}

/// The [BackpressureLimiter] is used on producer side of a stream, for example,
/// any [super::part_stream::ObjectPartStream] that supports backpressure.
///
/// The producer can call [Self::wait_for_read_window_increment] to wait for feedback from the consumer.
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
///
/// This pair allows a consumer to send feedback ([BackpressureFeedbackEvent]) when starved or bytes are consumed,
/// informing a producer (a holder of the [BackpressureLimiter]) when it should provide data more aggressively.
pub fn new_backpressure_controller<Client: ObjectClient>(
    config: BackpressureConfig,
    mem_limiter: Arc<MemoryLimiter<Client>>,
) -> (BackpressureController<Client>, BackpressureLimiter) {
    // Minimum window size multiplier as the scaling up and down won't work if the multiplier is 1.
    const MIN_WINDOW_SIZE_MULTIPLIER: usize = 2;
    let read_window_end_offset = config.request_range.start + config.initial_read_window_size as u64;
    let (read_window_updater, read_window_incrementing_queue) = unbounded();
    mem_limiter.reserve(BufferArea::Prefetch, config.initial_read_window_size as u64);
    let controller = BackpressureController {
        read_window_updater,
        preferred_read_window_size: config.initial_read_window_size,
        min_read_window_size: config.min_read_window_size,
        max_read_window_size: config.max_read_window_size,
        read_window_size_multiplier: config.read_window_size_multiplier.max(MIN_WINDOW_SIZE_MULTIPLIER),
        read_window_end_offset,
        next_read_offset: config.request_range.start,
        request_end_offset: config.request_range.end,
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
                self.next_read_offset = offset + length as u64;
                self.mem_limiter.release(BufferArea::Prefetch, length as u64);
                let remaining_window = self.read_window_end_offset.saturating_sub(self.next_read_offset) as usize;

                // Increment the read window only if the remaining window reaches some threshold i.e. half of it left.
                // When memory is low the `preferred_read_window_size` will be scaled down so we have to keep trying
                // until we have enough read window.
                while remaining_window < (self.preferred_read_window_size / 2)
                    && self.read_window_end_offset < self.request_end_offset
                {
                    let new_read_window_end_offset = self
                        .next_read_offset
                        .saturating_add(self.preferred_read_window_size as u64)
                        .min(self.request_end_offset);
                    // We can skip if the new `read_window_end_offset` is less than or equal to the current one, this
                    // could happen after the read window is scaled down.
                    if new_read_window_end_offset <= self.read_window_end_offset {
                        break;
                    }
                    let to_increase = new_read_window_end_offset.saturating_sub(self.read_window_end_offset) as usize;

                    // Force incrementing read window regardless of available memory when we are already at minimum
                    // read window size.
                    if self.preferred_read_window_size <= self.min_read_window_size {
                        self.mem_limiter.reserve(BufferArea::Prefetch, to_increase as u64);
                        self.increment_read_window(to_increase).await;
                        break;
                    }

                    // Try to reserve the memory for the length we want to increase before sending the request,
                    // scale down the read window if it fails.
                    if self.mem_limiter.try_reserve(BufferArea::Prefetch, to_increase as u64) {
                        self.increment_read_window(to_increase).await;
                        break;
                    } else {
                        self.scale_down();
                    }
                }
            }
            BackpressureFeedbackEvent::PartQueueStall => self.scale_up(),
        }
        Ok(())
    }

    // Send an increment read window request to the stream producer
    async fn increment_read_window(&mut self, len: usize) {
        let prev_window_end_offset = self.read_window_end_offset;
        let next_window_end_offset = prev_window_end_offset + len as u64;
        trace!(
            next_read_offset = self.next_read_offset,
            prev_window_end_offset,
            next_window_end_offset,
            len,
            "incrementing read window",
        );

        // This should not block since the channel is unbounded
        let _ = self
            .read_window_updater
            .send(len)
            .await
            .inspect_err(|_| trace!("read window incrementing queue is already closed"));
        self.read_window_end_offset = next_window_end_offset;
    }

    /// Scale up preferred read window size with a multiplier configured at initialization.
    ///
    /// Fails silently if there is insufficient free memory to perform it according to [Self::mem_limiter].
    fn scale_up(&mut self) {
        if self.preferred_read_window_size < self.max_read_window_size {
            let new_read_window_size = (self.preferred_read_window_size * self.read_window_size_multiplier)
                .max(self.min_read_window_size)
                .min(self.max_read_window_size);
            // Only scale up when there is enough memory. We don't have to reserve the memory here
            // because only `preferred_read_window_size` is increased but the actual read window will
            // be updated later on `DataRead` event (where we do reserve memory).
            let to_increase = (new_read_window_size - self.preferred_read_window_size) as u64;
            let available_mem = self.mem_limiter.available_mem();
            if available_mem >= to_increase {
                let formatter = make_format(humansize::BINARY);
                trace!(
                    prev_size = formatter(self.preferred_read_window_size),
                    new_size = formatter(new_read_window_size),
                    "scaled up preferred read window"
                );
                self.preferred_read_window_size = new_read_window_size;
                metrics::histogram!("prefetch.window_after_increase_mib")
                    .record((self.preferred_read_window_size / 1024 / 1024) as f64);
            }
        }
    }

    /// Scale down [Self::preferred_read_window_size] by a multiplier configured at initialization.
    fn scale_down(&mut self) {
        if self.preferred_read_window_size > self.min_read_window_size {
            assert!(self.read_window_size_multiplier > 1);
            let new_read_window_size = (self.preferred_read_window_size / self.read_window_size_multiplier)
                .max(self.min_read_window_size)
                .min(self.max_read_window_size);
            let formatter = make_format(humansize::BINARY);
            trace!(
                current_size = formatter(self.preferred_read_window_size),
                new_size = formatter(new_read_window_size),
                "scaled down read window"
            );
            self.preferred_read_window_size = new_read_window_size;
            metrics::histogram!("prefetch.window_after_decrease_mib")
                .record((self.preferred_read_window_size / 1024 / 1024) as f64);
        }
    }
}

impl<Client: ObjectClient> Drop for BackpressureController<Client> {
    fn drop(&mut self) {
        debug_assert!(
            self.next_read_offset <= self.request_end_offset,
            "invariant: the next read offset should never be larger than the request end offset",
        );
        // Free up memory we have reserved for the read window.
        let remaining_window = self.read_window_end_offset.saturating_sub(self.next_read_offset);
        self.mem_limiter.release(BufferArea::Prefetch, remaining_window);
    }
}

impl BackpressureLimiter {
    pub fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset
    }

    /// Wait until the backpressure window moves ahead of the given offset.
    ///
    /// Returns the new read window offset if it has changed, otherwise [None].
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
                desired_offset = offset,
                current_offset = self.read_window_end_offset,
                "blocking for read window increment",
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

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
    use test_case::test_case;

    use crate::mem_limiter::MemoryLimiter;

    use super::{new_backpressure_controller, BackpressureConfig, BackpressureController, BackpressureLimiter};

    #[test_case(1024 * 1024 + 128 * 1024, 2)] // real config
    #[test_case(3 * 1024 * 1024, 4)]
    #[test_case(8 * 1024 * 1024, 8)]
    #[test_case(2 * 1024 * 1024 * 1024, 2)]
    fn test_read_window_scale_up(initial_read_window_size: usize, read_window_size_multiplier: usize) {
        let request_range = 0..(5 * 1024 * 1024 * 1024);
        let backpressure_config = BackpressureConfig {
            initial_read_window_size,
            min_read_window_size: 8 * 1024 * 1024,
            max_read_window_size: 2 * 1024 * 1024 * 1024,
            read_window_size_multiplier,
            request_range,
        };

        let (mut backpressure_controller, _backpressure_limiter) =
            new_backpressure_controller_for_test(backpressure_config);
        while backpressure_controller.preferred_read_window_size < backpressure_controller.max_read_window_size {
            backpressure_controller.scale_up();
            assert!(backpressure_controller.preferred_read_window_size >= backpressure_controller.min_read_window_size);
            assert!(backpressure_controller.preferred_read_window_size <= backpressure_controller.max_read_window_size);
        }
        assert_eq!(
            backpressure_controller.preferred_read_window_size, backpressure_controller.max_read_window_size,
            "should have scaled up to max read window size"
        );
    }

    #[test_case(2 * 1024 * 1024 * 1024, 2)]
    #[test_case(15 * 1024 * 1024 * 1024, 2)]
    #[test_case(2 * 1024 * 1024 * 1024, 8)]
    #[test_case(8 * 1024 * 1024, 8)]
    fn test_read_window_scale_down(initial_read_window_size: usize, read_window_size_multiplier: usize) {
        let request_range = 0..(5 * 1024 * 1024 * 1024);
        let backpressure_config = BackpressureConfig {
            initial_read_window_size,
            min_read_window_size: 8 * 1024 * 1024,
            max_read_window_size: 2 * 1024 * 1024 * 1024,
            read_window_size_multiplier,
            request_range,
        };

        let (mut backpressure_controller, _backpressure_limiter) =
            new_backpressure_controller_for_test(backpressure_config);
        while backpressure_controller.preferred_read_window_size > backpressure_controller.min_read_window_size {
            backpressure_controller.scale_down();
            assert!(backpressure_controller.preferred_read_window_size <= backpressure_controller.max_read_window_size);
            assert!(backpressure_controller.preferred_read_window_size >= backpressure_controller.min_read_window_size);
        }
        assert_eq!(
            backpressure_controller.preferred_read_window_size, backpressure_controller.min_read_window_size,
            "should have scaled down to min read window size"
        );
    }

    fn new_backpressure_controller_for_test(
        backpressure_config: BackpressureConfig,
    ) -> (BackpressureController<MockClient>, BackpressureLimiter) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: 8 * 1024 * 1024,
            enable_backpressure: true,
            initial_read_window_size: backpressure_config.initial_read_window_size,
            ..Default::default()
        };

        let client = MockClient::new(config);
        let mem_limiter = Arc::new(MemoryLimiter::new(
            client,
            backpressure_config.max_read_window_size as u64,
        ));
        new_backpressure_controller(backpressure_config, mem_limiter.clone())
    }
}
