//! `page_creation_under_pressure`: enough holding writers to fill the write-handle budget (each
//! pinning a single 8 MiB buffer) plus 16 readers, run at a memory target sized so the cap is
//! `49` — one buffer past three full 16-buffer pages.
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
//! At the 528 MiB target the limiter reserves `max(528/8, 128) = 128 MiB` plus a one-part read
//! reserve (8 MiB), leaving a `write_buffer_budget` of 392 MiB — exactly 49 × 8 MiB, so the
//! `WriteHandleLimiter` cap is 49. `NUM_WRITERS` is derived from that cap via [`budget_parts`], so
//! every writer is admitted (no `open()` ENOMEM) and the count auto-tracks any future change to
//! the budget math (e.g. the read-reserve introduced by #1880). Each holding writer writes only
//! 4 KiB (a sub-part write) and holds the handle, pinning exactly one 8 MiB buffer. The first 48
//! buffers fill three full 16-buffer pages (384 MiB). The 49th buffer needs a fourth page: a full
//! 128 MiB page would exceed the write budget, so `Page::try_new` fails and the loop halves
//! 16 → 8 → 4 → 2 → 1 until a single-buffer (8 MiB) page fits. The readers concurrently compete
//! for the same budget.
//!
//! On `main` there is no halving loop (pages are always 16 buffers) and no `WriteHandleLimiter`,
//! so this simply runs as a writer / 16-reader memory-pressure scenario; the interesting behavior
//! is on `feature/memory-limit`.

use std::iter::{chain, repeat_n};
use std::sync::Arc;
use std::time::Duration;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, budget_parts, default_max_idle, default_max_latency};
use crate::stress::workers::{HoldingWriter, LARGE_READ_OBJECT, SequentialReader};

/// Memory target sized so `write_buffer_budget` is 392 MiB = 49 × 8 MiB, making the
/// WriteHandleLimiter cap 49: three full 16-buffer pages plus one buffer that must fall back
/// through the halving loop to a partial page. Concretely at 528 MiB: data_buffer_budget is
/// 528 − max(528/8, 128) = 400 MiB, minus one 8 MiB read reserve = 392 MiB write budget.
const MEM_LIMIT: usize = 528 * 1024 * 1024;
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
    // Derive the writer count from the actual write-handle cap so every writer is admitted and
    // the count tracks the budget math. With read and write part sizes both `PART_SIZE`,
    // `budget_parts` computes `write_buffer_budget_for(MEM_LIMIT, PART_SIZE) / PART_SIZE` — the
    // same value the WriteHandleLimiter uses. At MEM_LIMIT this is 49 (see module docs).
    let num_writers = budget_parts(MEM_LIMIT, PART_SIZE);

    let writer: Arc<dyn Worker> = Arc::new(HoldingWriter {
        scope: "page_creation_under_pressure",
        write_before_hold: WRITE_BEFORE_HOLD,
        hold: HOLD,
    });
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
        direct_io: false,
    });
    let workers = chain(repeat_n(writer, num_writers), repeat_n(reader, NUM_READERS)).collect();
    harness::run(Scenario {
        name: "page_creation_under_pressure",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MEM_LIMIT)
            .with_part_size(PART_SIZE),
        cache: false,
        setup: None,
        workers,
        max_latency: default_max_latency,
        max_idle: default_max_idle,
    });
}
