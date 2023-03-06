use std::collections::VecDeque;
use std::time::{Duration, Instant};

use crate::prefetch::part::Part;
use crate::prefetch::PrefetchReadError;
use crate::sync::atomic::{AtomicBool, Ordering};
use crate::sync::{Condvar, Mutex};

/// A queue of [Part]s where the first part can be partially read from if the reader doesn't want
/// the entire part in one shot.
#[derive(Debug)]
pub struct PartQueue<E> {
    buffers: Mutex<VecDeque<Result<Part, E>>>,
    queue_signal: Condvar,
    failed: AtomicBool,
}

impl<E: std::error::Error + Send + Sync> PartQueue<E> {
    pub fn new() -> Self {
        Self {
            buffers: Mutex::new(VecDeque::new()),
            queue_signal: Condvar::new(),
            failed: AtomicBool::new(false),
        }
    }

    /// Read up to `length` bytes from the queue at the current offset. This function always returns
    /// a contiguous [Bytes], and so may return fewer than `length` bytes it it would need to copy
    /// or reallocate to make the return value contiguous. This function blocks only if the queue is
    /// empty.
    ///
    /// If this method returns an Err, the PartQueue must never be accessed again.
    pub fn read(&self, length: usize, timeout: Duration) -> Result<Part, PrefetchReadError<E>> {
        let mut buffers = self.buffers.lock().unwrap();

        assert!(
            !self.failed.load(Ordering::SeqCst),
            "cannot use a PartQueue after failure"
        );

        // This code looks a little funky because we want to (1) only emit the starved metric once
        // even under spurious wakes and (2) emit the metric even if we time out waiting.
        if buffers.is_empty() {
            let start = Instant::now();
            let ret = loop {
                let (guard, timed_out) = self.queue_signal.wait_timeout(buffers, timeout).unwrap();
                buffers = guard;
                if timed_out.timed_out() {
                    break Err(PrefetchReadError::TimedOut);
                }
                if !buffers.is_empty() {
                    break Ok(());
                }
            };
            metrics::histogram!("prefetch.part_queue_starved_us", start.elapsed().as_micros() as f64);
            ret?;
        }

        let mut part = match buffers.pop_front().expect("buffers is not empty") {
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
            let tail = part.split_off(length);
            buffers.push_front(Ok(tail));
            Ok(part)
        }
    }

    /// Push a new [Part] onto the back of the queue
    pub fn push(&self, part: Result<Part, E>) {
        let mut buffers = self.buffers.lock().unwrap();
        buffers.push_back(part);
        self.queue_signal.notify_one();
    }
}

#[cfg(test)]
mod tests {
    use super::*;

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

    fn run_test(ops: Vec<Op>) {
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
                    let part = part_queue.read(n, Duration::from_millis(10)).unwrap();
                    let bytes = part.into_bytes(part_key, current_offset).unwrap();
                    assert_eq!(bytes[0], current_offset as u8);
                    current_offset += bytes.len() as u64;
                    current_length -= bytes.len();
                }
                Op::ReadAligned => {
                    let first_part_length = part_queue
                        .buffers
                        .lock()
                        .unwrap()
                        .front()
                        .map(|part| part.as_ref().unwrap().len());
                    if let Some(n) = first_part_length {
                        let part = part_queue.read(n, Duration::from_millis(10)).unwrap();
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
            let available: usize = part_queue
                .buffers
                .lock()
                .unwrap()
                .iter()
                .map(|part| part.as_ref().unwrap().len())
                .sum();
            assert_eq!(available, current_length);
        }
    }

    #[test]
    fn part_queue_simple() {
        run_test(vec![Op::Push(1), Op::Push(1), Op::Read(1), Op::Read(1)]);
    }

    proptest! {
        #[test]
        fn proptest_part_queue(ops: Vec<Op>) {
            run_test(ops);
        }
    }
}
