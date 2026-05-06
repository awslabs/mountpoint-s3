//! Per-op latency histograms timed by scenario workers.

use std::time::Instant;

use hdrhistogram::Histogram as HdrHistogram;

/// File operations timed by [`FileOpLatencies`].
#[derive(Clone, Copy, Debug)]
pub enum FileOp {
    Open = 0,
    Read = 1,
    Write = 2,
    CloseRead = 3,
    CloseWrite = 4,
}

impl FileOp {
    pub const ALL: [FileOp; 5] = [
        FileOp::Open,
        FileOp::Read,
        FileOp::Write,
        FileOp::CloseRead,
        FileOp::CloseWrite,
    ];

    pub fn name(self) -> &'static str {
        match self {
            FileOp::Open => "open",
            FileOp::Read => "read",
            FileOp::Write => "write",
            FileOp::CloseRead => "close_read",
            FileOp::CloseWrite => "close_write",
        }
    }
}

/// Per-worker op-latency histograms. Each worker owns one; the harness merges them at teardown.
pub struct FileOpLatencies {
    histograms: [HdrHistogram<u64>; 5],
}

impl FileOpLatencies {
    pub fn new() -> Self {
        let mk = || HdrHistogram::<u64>::new_with_bounds(1, 600_000_000, 3).expect("HDR bounds valid");
        Self {
            histograms: [mk(), mk(), mk(), mk(), mk()],
        }
    }

    /// Time `f` and record its elapsed microseconds under `op`.
    pub fn time<R>(&mut self, op: FileOp, f: impl FnOnce() -> R) -> R {
        let start = Instant::now();
        let out = f();
        let elapsed_us = start.elapsed().as_micros();
        let h = &mut self.histograms[op as usize];
        let high = h.high();
        let v = elapsed_us.min(high as u128) as u64;
        h.record(v).ok();
        out
    }

    pub fn histogram(&self, op: FileOp) -> &HdrHistogram<u64> {
        &self.histograms[op as usize]
    }

    pub fn merge(&mut self, other: &FileOpLatencies) {
        for op in FileOp::ALL {
            // Safe: both histograms share the same bounds.
            let _ = self.histograms[op as usize].add(&other.histograms[op as usize]);
        }
    }
}

impl Default for FileOpLatencies {
    fn default() -> Self {
        Self::new()
    }
}
