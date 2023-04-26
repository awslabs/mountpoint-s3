use std::time::Instant;

use crate::prefetch::part::Part;
use crate::prefetch::PrefetchReadError;
use crate::sync::async_channel::{unbounded, Receiver, Sender};
use crate::sync::atomic::{AtomicBool, Ordering};
use crate::sync::AsyncMutex;

/// A queue of [Part]s where the first part can be partially read from if the reader doesn't want
/// the entire part in one shot.
#[derive(Debug)]
pub struct PartQueue<E> {
    current_part: AsyncMutex<Option<Part>>,
    sender: Sender<Result<Part, E>>,
    receiver: Receiver<Result<Part, E>>,
    failed: AtomicBool,
}

impl<E: std::error::Error + Send + Sync> PartQueue<E> {
    pub fn new() -> Self {
        let (sender, receiver) = unbounded();

        Self {
            current_part: AsyncMutex::new(None),
            sender,
            receiver,
            failed: AtomicBool::new(false),
        }
    }

    /// Read up to `length` bytes from the queue at the current offset. This function always returns
    /// a contiguous [Bytes], and so may return fewer than `length` bytes if it would need to copy
    /// or reallocate to make the return value contiguous. This function blocks only if the queue is
    /// empty.
    ///
    /// If this method returns an Err, the PartQueue must never be accessed again.
    pub async fn read(&self, length: usize) -> Result<Part, PrefetchReadError<E>> {
        let mut current_part = self.current_part.lock().await;

        assert!(
            !self.failed.load(Ordering::SeqCst),
            "cannot use a PartQueue after failure"
        );

        let part = if let Some(current_part) = current_part.take() {
            Ok(current_part)
        } else {
            // Do `try_recv` first so we can track whether the read is starved or not
            if let Ok(part) = self.receiver.try_recv() {
                part
            } else {
                let start = Instant::now();
                let part = self.receiver.recv().await.expect("channel should not close");
                metrics::histogram!("prefetch.part_queue_starved_us", start.elapsed().as_micros() as f64);
                part
            }
        };

        let mut part = match part {
            Err(e) => {
                self.failed.store(true, Ordering::SeqCst);
                return Err(e.into());
            }
            Ok(part) => part,
        };
        debug_assert!(!part.is_empty(), "parts must not be empty");

        if length >= part.len() {
            Ok(part)
        } else {
            let tail = match part.split_off(length) {
                Ok(part) => part,
                Err(e) => {
                    self.failed.store(true, Ordering::SeqCst);
                    return Err(PrefetchReadError::PartReadFailed(e));
                }
            };
            *current_part = Some(tail);
            Ok(part)
        }
    }

    /// Push a new [Part] onto the back of the queue
    pub fn push(&self, part: Result<Part, E>) {
        // Unbounded channel will never actually block
        self.sender.send_blocking(part).unwrap();
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use futures::executor::block_on;
    use proptest::proptest;
    use proptest_derive::Arbitrary;
    use thiserror::Error;

    #[derive(Debug, Arbitrary)]
    enum Op {
        Read(#[proptest(strategy = "1usize..8192")] usize),
        ReadAligned,
        Push(#[proptest(strategy = "1usize..8192")] usize),
    }

    #[derive(Debug, Error)]
    enum DummyError {}

    async fn run_test(ops: Vec<Op>) {
        let part_key = "key";
        let part_queue = PartQueue::<DummyError>::new();
        let mut current_offset = 0;
        let mut current_length = 0;
        for op in ops {
            match op {
                Op::Read(n) => {
                    let n = n.min(current_length);
                    if n == 0 {
                        continue;
                    }
                    let part = part_queue.read(n).await.unwrap();
                    let bytes = part.into_bytes(part_key, current_offset).unwrap();
                    assert_eq!(bytes[0], current_offset as u8);
                    current_offset += bytes.len() as u64;
                    current_length -= bytes.len();
                }
                Op::ReadAligned => {
                    let first_part_length = part_queue.current_part.lock().await.as_ref().map(|p| p.len());
                    if let Some(n) = first_part_length {
                        let part = part_queue.read(n).await.unwrap();
                        let bytes = part.into_bytes(part_key, current_offset).unwrap();
                        assert_eq!(bytes[0], current_offset as u8);
                        assert_eq!(bytes.len(), n);
                        current_offset += n as u64;
                        current_length -= n;
                    }
                }
                Op::Push(n) => {
                    // Let's not get too out of control
                    if current_length + n > 50 * 1024 * 1024 {
                        continue;
                    }
                    let offset = current_offset + current_length as u64;
                    let bytes: Box<[u8]> = (0u8..=255).cycle().skip(offset as u8 as usize).take(n).collect();
                    let part = Part::new(part_key, offset, bytes.into());
                    part_queue.push(Ok(part));
                    current_length += n;
                }
            }
        }
    }

    #[test]
    fn part_queue_simple() {
        block_on(run_test(vec![Op::Push(1), Op::Push(1), Op::Read(1), Op::Read(1)]));
    }

    proptest! {
        #[test]
        fn proptest_part_queue(ops: Vec<Op>) {
            block_on(run_test(ops));
        }
    }
}
