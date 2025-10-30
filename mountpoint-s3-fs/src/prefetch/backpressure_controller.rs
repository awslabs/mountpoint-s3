use std::ops::Range;

use async_channel::{Receiver, Sender, TryRecvError, unbounded};
use humansize::make_format;
use tracing::trace;

use crate::mem_limiter::{BufferArea, MemoryLimiter};
use crate::sync::{
    Arc,
    atomic::{AtomicU64, Ordering},
};

use super::PrefetchReadError;

#[derive(Debug)]
pub enum BackpressureFeedbackEvent {
    /// An event where data with a certain length has been read out of the stream
    DataRead { offset: u64, length: usize },
    /// An event indicating part queue stall
    PartQueueStall,
    /// Push front to the part queue (data from backwards seek window)
    PushFront { length: usize },
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

#[derive(Debug)]
pub struct BackpressureNotifier {
    feedback_sender: Sender<BackpressureFeedbackEvent>,
    read_window_end_offset: Arc<AtomicU64>,
}

#[derive(Debug)]
pub struct BackpressureLimiter {
    feedback_receiver: Receiver<BackpressureFeedbackEvent>,
    /// Amount by which the producer should be producing data ahead of [Self::next_read_offset].
    preferred_read_window_size: usize,
    min_read_window_size: usize,
    max_read_window_size: usize,
    /// Multiplier by which [Self::preferred_read_window_size] is scaled.
    read_window_size_multiplier: usize,
    /// Upper bound of the current read window, relative to the start of the S3 object.
    ///
    /// The request can return data up to this offset *exclusively*.
    /// This value must be advanced to continue fetching new data.
    read_window_end_offset: u64,
    /// This atomic is used to share information with the [BackpressureNotifier].
    /// The filed `read_window_end_offset` is the source of truth, which is never updated outside of this struct.
    read_window_end_offset_shared: Arc<AtomicU64>,
    /// Next offset of the data to be read, relative to the start of the S3 object.
    next_read_offset: u64,
    /// End offset within the S3 object for the request.
    ///
    /// The request can return data up to this offset *exclusively*.
    request_end_offset: u64,
    /// Memory limiter is used to guide decisions on how much data to prefetch.
    ///
    /// For example, when memory is low we should scale down [Self::preferred_read_window_size].
    mem_limiter: Arc<MemoryLimiter>,
    backwards_seek_size: u64,
}

#[derive(Copy, Clone)]
pub struct AlignmentOptions {
    pub align_relative_to: u64,
    pub align_with_part_size: u64,
}

pub fn new_backpressure_limiter(
    config: BackpressureConfig,
    mem_limiter: Arc<MemoryLimiter>,
) -> (BackpressureNotifier, BackpressureLimiter) {
    // Minimum window size multiplier as the scaling up and down won't work if the multiplier is 1.
    const MIN_WINDOW_SIZE_MULTIPLIER: usize = 2;
    let initial_read_window_size =
        (config.initial_read_window_size as u64).min(config.request_range.end - config.request_range.start);
    let read_window_end_offset = config.request_range.start + initial_read_window_size;
    mem_limiter.reserve(BufferArea::Prefetch, initial_read_window_size);

    let (feedback_sender, feedback_receiver) = unbounded();
    let read_window_end_offset_shared = Arc::new(AtomicU64::new(0));

    let notifier = BackpressureNotifier {
        feedback_sender,
        read_window_end_offset: read_window_end_offset_shared.clone(),
    };

    let limiter = BackpressureLimiter {
        feedback_receiver,
        preferred_read_window_size: initial_read_window_size as usize,
        min_read_window_size: config.min_read_window_size,
        max_read_window_size: config.max_read_window_size,
        read_window_size_multiplier: config.read_window_size_multiplier.max(MIN_WINDOW_SIZE_MULTIPLIER),
        read_window_end_offset,
        next_read_offset: config.request_range.start,
        request_end_offset: config.request_range.end,
        mem_limiter,
        read_window_end_offset_shared,
        backwards_seek_size: 0,
    };

    debug_assert!(
        limiter.read_window_end_offset <= limiter.request_end_offset,
        "invariant: the read window end offset should never be larger than the request end offset",
    );

    (notifier, limiter)
}

impl BackpressureNotifier {
    pub async fn send_feedback(&mut self, event: BackpressureFeedbackEvent) {
        if self.feedback_sender.send(event).await.is_err() {
            trace!("read window incrementing queue is already closed");
        }
    }

    pub fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset.load(Ordering::SeqCst)
    }
}

impl BackpressureLimiter {
    pub fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset
    }

    /// Helps rounding up read window end for the S3 request following reads from cache.
    pub fn rounded_up_read_window_end_offset(&mut self, alignment_options: AlignmentOptions) -> u64 {
        let rounded_up = Self::round_up_to_part_boundary(self.read_window_end_offset, alignment_options)
            .min(self.request_end_offset);
        if rounded_up > self.read_window_end_offset {
            self.mem_limiter
                .reserve(BufferArea::Prefetch, rounded_up - self.read_window_end_offset);
            self.increment_read_window(rounded_up);
        }
        self.read_window_end_offset
    }

    /// Wait until the backpressure window moves ahead of the given offset.
    ///
    /// Returns the new read window offset.
    pub async fn wait_for_read_window_increment<E>(
        &mut self,
        next_request_offset: u64,
        alignment_options: AlignmentOptions,
    ) -> Result<u64, PrefetchReadError<E>> {
        // If there is no more data to download return immediatelly.
        if self.request_end_offset <= next_request_offset {
            return Ok(self.read_window_end_offset);
        }
        // Otherwise there is more data in S3, but we may need to wait for reader to process downloaded data, let's check that.
        loop {
            let event = if self.read_window_end_offset <= next_request_offset {
                // We will only wait for another read if next_request_offset is ahead of read_window_end_offset.
                self.feedback_receiver
                    .recv()
                    .await
                    .map_err(|_| PrefetchReadError::ReadWindowIncrement)?
            } else {
                // If there is enough read window for next_request_offset, we only process feedback that is available immediatelly.
                match self.feedback_receiver.try_recv() {
                    Ok(event) => event,
                    // If there is no more feedback currently, return to keep reading from the request.
                    Err(TryRecvError::Empty) => break,
                    // If the feedback channel is closed, push this error to part queue and stop streaming.
                    Err(TryRecvError::Closed) => return Err(PrefetchReadError::ReadWindowIncrement),
                }
            };
            // This call updates read_window_end_offset if the reader advanced far enough (at least half of read window must be read already).
            self.process_event(event, alignment_options);
        }
        Ok(self.read_window_end_offset)
    }

    fn process_event(&mut self, event: BackpressureFeedbackEvent, alignment_options: AlignmentOptions) {
        trace!(?event, "got backpressure feedback");
        match event {
            // Note, that this may come from a backwards seek, so offsets observed by this method are not necessarily ascending
            BackpressureFeedbackEvent::DataRead { offset, length } => {
                // Update next_read_offset, but never decrease it (which may happen in case of backwards seek).
                self.next_read_offset = self.next_read_offset.max(offset + length as u64);

                // Release everything that's not from backwards seek (backwards seek data doesn't have a reservation).
                let to_release = (length as u64).saturating_sub(self.backwards_seek_size);
                self.backwards_seek_size = self.backwards_seek_size.saturating_sub(length as u64);
                if to_release > 0 {
                    self.mem_limiter.release(BufferArea::Prefetch, to_release);
                }

                let remaining_window = self.read_window_end_offset.saturating_sub(self.next_read_offset) as usize;

                // Increment the read window only if the remaining window reaches some threshold i.e. half of it left.
                // When memory is low the `preferred_read_window_size` will be scaled down so we have to keep trying
                // until we have enough read window.
                while remaining_window < (self.preferred_read_window_size / 2)
                    && self.read_window_end_offset < self.request_end_offset
                {
                    let new_read_window_end_offset = self
                        .next_read_offset
                        .saturating_add(self.preferred_read_window_size as u64);
                    // NOTE: in the end of the object we still have up to "part_size" of unaccounted memory.
                    let new_read_window_end_offset =
                        Self::round_up_to_part_boundary(new_read_window_end_offset, alignment_options)
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
                        self.increment_read_window(new_read_window_end_offset);
                        break;
                    }

                    // Try to reserve the memory for the length we want to increase before sending the request,
                    // scale down the read window if it fails.
                    if self.mem_limiter.try_reserve(BufferArea::Prefetch, to_increase as u64) {
                        self.increment_read_window(new_read_window_end_offset);
                        break;
                    } else {
                        self.scale_down();
                    }
                }
            }
            BackpressureFeedbackEvent::PartQueueStall => self.scale_up(),
            // Backwards seek data is not accounted in memory limiter, keep track of its size here,
            // so that we don't release more than reserved on DataRead.
            BackpressureFeedbackEvent::PushFront { length } => {
                self.backwards_seek_size += length as u64;
            }
        }
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

    fn round_up_to_part_boundary(read_window_end: u64, alignment_options: AlignmentOptions) -> u64 {
        let part_size = alignment_options.align_with_part_size;
        if read_window_end > alignment_options.align_relative_to {
            let relative_end_offset = read_window_end - alignment_options.align_relative_to;
            if !relative_end_offset.is_multiple_of(part_size) {
                let aligned_relative_offset = part_size * (relative_end_offset / part_size + 1);
                alignment_options.align_relative_to + aligned_relative_offset
            } else {
                read_window_end
            }
        } else {
            read_window_end
        }
    }

    fn increment_read_window(&mut self, new_read_window_end_offset: u64) {
        trace!(
            prev_read_window_end_offset = self.read_window_end_offset,
            read_window_end_offset = new_read_window_end_offset,
            "incremented read window"
        );
        self.read_window_end_offset = new_read_window_end_offset;
        // Share new read window end with [BackpressureNotifier]
        self.read_window_end_offset_shared
            .store(self.read_window_end_offset, Ordering::SeqCst);
    }
}

impl Drop for BackpressureLimiter {
    fn drop(&mut self) {
        debug_assert!(
            self.read_window_end_offset <= self.request_end_offset,
            "invariant: the read window end offset should never be larger than the request end offset",
        );
        debug_assert!(
            self.next_read_offset <= self.request_end_offset,
            "invariant: the next read offset should never be larger than the request end offset",
        );
        // Free up memory we have reserved for the read window.
        let remaining_window = self.read_window_end_offset.saturating_sub(self.next_read_offset);
        self.mem_limiter.release(BufferArea::Prefetch, remaining_window);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use std::sync::Arc;

    use futures::executor::block_on;
    use mountpoint_s3_client::mock_client::MockClientError;
    use test_case::test_case;

    use crate::mem_limiter::MemoryLimiter;
    use crate::memory::PagedPool;
    use crate::s3::config::INITIAL_READ_WINDOW_SIZE;

    #[test_case(INITIAL_READ_WINDOW_SIZE, 2)] // real config
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

        let (_, mut backpressure_limiter) = new_backpressure_limiter_for_test(backpressure_config);
        while backpressure_limiter.preferred_read_window_size < backpressure_limiter.max_read_window_size {
            backpressure_limiter.scale_up();
            assert!(backpressure_limiter.preferred_read_window_size >= backpressure_limiter.min_read_window_size);
            assert!(backpressure_limiter.preferred_read_window_size <= backpressure_limiter.max_read_window_size);
        }
        assert_eq!(
            backpressure_limiter.preferred_read_window_size, backpressure_limiter.max_read_window_size,
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

        let (_, mut backpressure_limiter) = new_backpressure_limiter_for_test(backpressure_config);
        while backpressure_limiter.preferred_read_window_size > backpressure_limiter.min_read_window_size {
            backpressure_limiter.scale_down();
            assert!(backpressure_limiter.preferred_read_window_size <= backpressure_limiter.max_read_window_size);
            assert!(backpressure_limiter.preferred_read_window_size >= backpressure_limiter.min_read_window_size);
        }
        assert_eq!(
            backpressure_limiter.preferred_read_window_size, backpressure_limiter.min_read_window_size,
            "should have scaled down to min read window size"
        );
    }

    #[test]
    #[allow(clippy::identity_op)]
    fn wait_for_read_window_increment_drains_all_events() {
        const KIB: usize = 1024;
        const MIB: usize = 1024 * KIB;
        const GIB: usize = 1024 * MIB;

        // OK, back to basics. Just reproduce what happened, verify it passes after the fix.
        let backpressure_config = BackpressureConfig {
            initial_read_window_size: 1 * MIB,
            min_read_window_size: 8 * MIB,
            max_read_window_size: 2 * GIB,
            read_window_size_multiplier: 2,
            request_range: 0..(5 * GIB as u64),
        };

        let (mut backpressure_notifier, mut backpressure_limiter) =
            new_backpressure_limiter_for_test(backpressure_config);

        block_on(async {
            #[allow(clippy::identity_op)]
            let expected_offset = 1 * MIB as u64;
            assert_eq!(
                backpressure_limiter.read_window_end_offset(),
                expected_offset,
                "read window end offset should already be {expected_offset} due to initial read window size config",
            );

            // Send more than one increment.

            // Usually part queue stall will occur while waiting for first byte, read_window_end = 1MB.
            backpressure_notifier
                .send_feedback(BackpressureFeedbackEvent::PartQueueStall)
                .await;

            // Consume whole initial request, read_window_end = 9MB.
            backpressure_notifier
                .send_feedback(BackpressureFeedbackEvent::DataRead {
                    offset: 0,
                    length: 1 * MIB,
                })
                .await;

            // Consume some data which is not enough to increment the window, read_window_end = 9MB.
            backpressure_notifier
                .send_feedback(BackpressureFeedbackEvent::DataRead {
                    offset: (1 * MIB) as u64,
                    length: 1 * MIB,
                })
                .await;
            backpressure_notifier
                .send_feedback(BackpressureFeedbackEvent::DataRead {
                    offset: (2 * MIB) as u64,
                    length: 2 * MIB,
                })
                .await;

            // Consume enough data to increment the window, read_window_end = 17MB.
            backpressure_notifier
                .send_feedback(BackpressureFeedbackEvent::DataRead {
                    offset: (4 * MIB) as u64,
                    length: 2 * MIB,
                })
                .await;

            // Assert that all events were consumed and the produced read_window_end is as expected.
            let curr_offset = backpressure_limiter
                .wait_for_read_window_increment::<MockClientError>(
                    0,
                    AlignmentOptions {
                        align_relative_to: (1 * MIB) as u64,
                        align_with_part_size: (8 * MIB) as u64,
                    },
                )
                .await
                .expect("should return OK as we have new values to increment before channels are closed");
            assert_eq!(
                17 * MIB as u64,
                curr_offset,
                "expected offset did not match offset reported by limiter",
            );
        });
    }

    #[test_case(500, 1000, 100, 500; "offset before second request start")]
    #[test_case(1000, 1000, 512, 1000; "offset at second request start")]
    #[test_case(1500, 1000, 512, 1512; "offset after second request start, needs rounding up")]
    #[test_case(2024, 1000, 512, 2024; "offset after second request start, already aligned")]
    #[test_case(1001, 1000, 512, 1512; "offset just after second request start, needs rounding up")]
    #[test_case(1512, 1000, 512, 1512; "offset exactly at part boundary")]
    #[test_case(1513, 1000, 512, 2024; "offset just past part boundary")]
    fn test_round_up_to_part_boundary(offset: u64, align_relative_to: u64, align_with_part_size: u64, expected: u64) {
        let result = BackpressureLimiter::round_up_to_part_boundary(
            offset,
            AlignmentOptions {
                align_relative_to,
                align_with_part_size,
            },
        );
        assert_eq!(result, expected);
    }

    fn new_backpressure_limiter_for_test(
        backpressure_config: BackpressureConfig,
    ) -> (BackpressureNotifier, BackpressureLimiter) {
        let pool = PagedPool::new_with_candidate_sizes([8 * 1024 * 1024]);
        let mem_limiter = Arc::new(MemoryLimiter::new(
            pool,
            backpressure_config.max_read_window_size as u64,
        ));
        new_backpressure_limiter(backpressure_config, mem_limiter.clone())
    }
}
