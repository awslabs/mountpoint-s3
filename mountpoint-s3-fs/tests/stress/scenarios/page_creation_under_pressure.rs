//! `page_creation_under_pressure`: 49 holding writers (each pinning a single 8 MiB buffer) plus
//! 16 readers, run at a memory target of 520 MiB (512 + 8).
//!
//! **Purpose (feature/memory-limit):** exercise the page-allocator's halving fallback in
//! `SizePool::try_acquire` (`memory/pool.rs`):
//!
//! ```text
//! let mut buffer_count = MAX_BUFFERS_PER_PAGE;   // 16
//! while buffer_count > 0 {
//!     let Some(page) = Page::try_new(&self.stats, buffer_count) else {
//!         buffer_count /= 2;                      // 16 -> 8 -> 4 -> 2 -> 1
//!         continue;
//!     };
//!     ...
//! }
//! ```
//!
//! At a 520 MiB target the limiter reserves `max(520/8, 128) = 128 MiB`, leaving a
//! `data_buffer_budget` of 392 MiB — exactly 49 × 8 MiB, so the `WriteHandleLimiter` cap is 49.
//! Each holding writer writes only 4 KiB (a sub-part write) and holds the handle, pinning exactly
//! one 8 MiB buffer. The first 48 buffers fill three full 16-buffer pages (384 MiB). The 49th
//! buffer needs a fourth page: a full 128 MiB page would push allocation to 512 MiB (> 392 MiB
//! budget), so `Page::try_new` fails and the loop halves 16 → 8 → 4 → 2 → 1 until a single-buffer
//! (8 MiB) page fits (392 MiB exactly). The readers concurrently compete for the same budget.
//!
//! On `main` there is no halving loop (pages are always 16 buffers) and no `WriteHandleLimiter`,
//! so this simply runs as a 49-writer / 16-reader memory-pressure scenario; the interesting
//! behavior is on `feature/memory-limit`.

use std::iter::{chain, repeat_n};
use std::sync::Arc;
use std::time::Duration;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{HoldingWriter, LARGE_READ_OBJECT, SequentialReader};

/// Memory target: 512 MiB + 8 MiB. Yields data_buffer_budget = 392 MiB = 49 × 8 MiB, so the
/// WriteHandleLimiter cap is 49 and the 49th page allocation must fall back through the halving
/// loop to a single-buffer page.
const MEM_LIMIT: usize = (512 + 8) * 1024 * 1024;
/// One writer per available write-handle slot at MEM_LIMIT.
const NUM_WRITERS: usize = 49;
const NUM_READERS: usize = 16;
const PART_SIZE: usize = 8 * 1024 * 1024; // 8 MiB — the write part size (one buffer per handle).
/// Sub-part write: 4 KiB pins a single trailing buffer without completing a part, so each held
/// handle accounts for exactly one 8 MiB pool buffer.
const WRITE_BEFORE_HOLD: usize = 4 * 1024;
/// Hold longer than the 20s per-worker watchdog so a starved reader visibly stalls.
const HOLD: Duration = Duration::from_secs(60);
const READ_CHUNK: usize = PART_SIZE;

#[test]
fn page_creation_under_pressure() {
    let writer: Arc<dyn Worker> = Arc::new(HoldingWriter {
        scope: "page_creation_under_pressure",
        write_before_hold: WRITE_BEFORE_HOLD,
        hold: HOLD,
    });
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
    });
    let workers = chain(repeat_n(writer, NUM_WRITERS), repeat_n(reader, NUM_READERS)).collect();
    harness::run(Scenario {
        name: "page_creation_under_pressure",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MEM_LIMIT)
            .with_part_size(PART_SIZE),
        workers,
        max_latency: default_max_latency,
    });
}
