use std::collections::VecDeque;
use std::sync::{Condvar, Mutex};
use std::time::Duration;

use thiserror::Error;

use crate::prefetch::part::Part;

/// A queue of [Part]s where the first part can be partially read from if the reader doesn't want
/// the entire part in one shot.
#[derive(Debug)]
pub struct PartQueue {
    buffers: Mutex<VecDeque<Part>>,
    queue_signal: Condvar,
}

impl PartQueue {
    pub fn new() -> Self {
        Self {
            buffers: Mutex::new(VecDeque::new()),
            queue_signal: Condvar::new(),
        }
    }

    /// Read up to `length` bytes from the queue at the current offset. This function always returns
    /// a contiguous [Bytes], and so may return fewer than `length` bytes it it would need to copy
    /// or reallocate to make the return value contiguous. This function blocks only if the queue is
    /// empty.
    pub fn read(&self, length: usize, timeout: Duration) -> Result<Part, PartReadError> {
        let (mut buffers, timed_out) = self
            .queue_signal
            .wait_timeout_while(self.buffers.lock().unwrap(), timeout, |buffers| buffers.is_empty())
            .unwrap();
        if timed_out.timed_out() {
            return Err(PartReadError::TimedOut);
        }

        let part = buffers.front_mut().expect("buffers is not empty");
        debug_assert!(!part.is_empty(), "parts must not be empty");

        if length >= part.len() {
            Ok(buffers.pop_front().expect("buffers is not empty"))
        } else {
            let tail = part.split_off(length);
            let head = std::mem::replace(part, tail);
            Ok(head)
        }
    }

    /// Push a new [Part] onto the back of the queue
    pub fn push(&self, part: Part) {
        let mut buffers = self.buffers.lock().unwrap();
        buffers.push_back(part);
        self.queue_signal.notify_one();
    }
}

#[derive(Debug, Error)]
pub enum PartReadError {
    #[error("timed out waiting to read")]
    TimedOut,
}

#[cfg(test)]
mod tests {
    use std::ffi::OsString;

    use super::*;

    use proptest::proptest;
    use proptest_derive::Arbitrary;

    #[derive(Debug, Arbitrary)]
    enum Op {
        Read(#[proptest(strategy = "1usize..8192")] usize),
        ReadAligned,
        Push(#[proptest(strategy = "1usize..8192")] usize),
    }

    fn run_test(ops: Vec<Op>) {
        let part_key = OsString::from("key");
        let part_queue = PartQueue::new();
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
                    let bytes = part.into_bytes(&part_key, current_offset).unwrap();
                    assert_eq!(bytes[0], current_offset as u8);
                    current_offset += bytes.len() as u64;
                    current_length -= bytes.len();
                }
                Op::ReadAligned => {
                    let first_part_length = part_queue.buffers.lock().unwrap().front().map(|part| part.len());
                    if let Some(n) = first_part_length {
                        let part = part_queue.read(n, Duration::from_millis(10)).unwrap();
                        let bytes = part.into_bytes(&part_key, current_offset).unwrap();
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
                    let part = Part::new(part_key.clone(), offset, bytes.into());
                    part_queue.push(part);
                    current_length += n;
                }
            }
            let available: usize = part_queue.buffers.lock().unwrap().iter().map(|part| part.len()).sum();
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
