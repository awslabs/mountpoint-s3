use std::collections::VecDeque;

use crate::prefetch::part::Part;

/// A backwards seek window for a single prefetch stream. Parts can be pushed onto the end of the
/// window (== closest to the current offset in the stream) and older parts will be dropped to
/// remain within a maximum size.
#[derive(Debug)]
pub struct SeekWindow {
    parts: VecDeque<Part>,
    max_size: usize,
    current_size: usize,
}

impl SeekWindow {
    pub fn new(max_size: usize) -> Self {
        assert!(max_size > 0);
        SeekWindow {
            parts: VecDeque::new(),
            max_size,
            current_size: 0,
        }
    }

    /// Add a new part to the front of the window, and drop any parts necessary to fit the new part
    /// within the maximum size.
    pub fn push(&mut self, part: Part) {
        if part.len() > self.max_size {
            self.clear();
            return;
        }

        while self.max_size - self.current_size < part.len() {
            let p = self
                .parts
                .pop_front()
                .expect("window is non-empty if current size is non-zero");
            self.current_size -= p.len();
        }

        self.current_size += part.len();
        self.parts.push_back(part);
    }

    /// Read off the back of the window. Returns None if there's not enough data in the window to
    /// satisfy the desired length.
    pub fn read_back(&mut self, mut length: usize) -> Option<Vec<Part>> {
        if length > self.current_size {
            return None;
        }

        let mut result = VecDeque::new();
        loop {
            if length == 0 {
                break;
            }
            let mut part = self.parts.pop_back().expect("we checked that current_size >= length");
            // If we only need some of this part, split it up and put the rest back onto the window
            if part.len() > length {
                let back = part.split_off(part.len() - length);
                self.parts.push_back(part);
                part = back;
            }
            length -= part.len();
            self.current_size -= part.len();
            // We're walking backwards through the queue, so to keep the result in object offset
            // order, push to the front.
            result.push_front(part);
        }
        Some(result.into())
    }

    /// Reset the seek window to an empty state
    pub fn clear(&mut self) {
        self.parts.drain(..);
        self.current_size = 0;
    }
}
