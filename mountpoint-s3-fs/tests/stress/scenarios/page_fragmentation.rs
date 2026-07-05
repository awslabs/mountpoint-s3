//! `page_fragmentation`: a single worker that reproduces page-fragmentation amplification and the
//! cross-size-pool starvation it causes.
//!
//! A pool page holds 16 buffers and can only be trimmed when all 16 are free. Writes use the
//! default 8 MiB part size; the worker opens enough partial-write handles to fill 3 whole pages in
//! the 8 MiB size-pool, then closes all but one handle per page. That leaves 3 pages — 384 MiB —
//! resident behind only 3 in-use buffers, and `trim()` cannot reclaim any of them because no page
//! is fully empty.
//!
//! The worker then reads a shared object in a loop using a **16 MiB read part size**. Reads
//! allocate from a *separate* 16 MiB size-pool, so the 384 MiB pinned in the 8 MiB pool is pure
//! dead weight the reader can never reuse — it must find room for 16 MiB buffers in what little of
//! the budget remains. Runs entirely on one worker thread; the existing RSS/reserved invariants
//! observe the amplification and any starvation at teardown.
//!
//! The memory target is 528 MiB (not [`MINIMUM_MEM_LIMIT`]) so the write-handle cap fits 3 whole
//! pages: the write budget is `data_buffer_budget − read_reserve`, and with a 16 MiB read reserve
//! (one prunable read part, introduced by #1880) a 512 MiB target would cap writes at 46 handles —
//! short of the 48 needed for 3 full pages. `num_pages` is derived from the real write budget so
//! the fill never exceeds the cap (which would ENOMEM mid-fill) and auto-tracks future budget
//! changes.

use std::sync::Arc;
use std::time::Duration;

use mountpoint_s3_fs::memory::write_buffer_budget_for;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{BUFFERS_PER_PAGE, PageFragmenter};

/// Memory target sized so the write-handle cap is at least 3 whole pages (see module docs).
const MEM_LIMIT: usize = 528 * 1024 * 1024;
/// Read part size — deliberately different from the default 8 MiB write part size, so reads
/// allocate from a separate `PagedPool` size-pool and cannot reuse the buffers pinned by the
/// writers (which use the default `part_size`; 8 MiB × 16 per page = 128 MiB/page).
const READ_PART_SIZE: usize = 16 * 1024 * 1024;
/// Write part size — the `TestSessionConfig` default. One buffer per open write handle.
const WRITE_PART_SIZE: usize = 8 * 1024 * 1024;

#[test]
fn page_fragmentation() {
    // Whole pages that fit under the write-handle cap. The cap is
    // `write_buffer_budget_for(MEM_LIMIT, READ_PART_SIZE) / WRITE_PART_SIZE` — the read part size
    // sets the prunable reserve, the write part size is the per-handle buffer. Floor to whole
    // pages so every page the worker pins is completely filled (one survivor pins the whole page).
    let write_handle_cap = write_buffer_budget_for(MEM_LIMIT, READ_PART_SIZE) / WRITE_PART_SIZE;
    let num_pages = write_handle_cap / BUFFERS_PER_PAGE;
    assert!(
        num_pages >= 1,
        "page_fragmentation: write budget too small for even one full page (cap {write_handle_cap})"
    );

    let worker: Arc<dyn Worker> = Arc::new(PageFragmenter {
        scope: "page_fragmentation",
        num_pages,
        read_chunk: READ_PART_SIZE,
    });
    harness::run(Scenario {
        name: "page_fragmentation",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MEM_LIMIT)
            .with_read_part_size(READ_PART_SIZE),
        cache: false,
        setup: None,
        workers: vec![worker],
        max_latency: default_max_latency,
        // Phase 1 opens dozens of handles and settles each page, which can take a while under load;
        // allow a longer idle window than the 20s default before the watchdog flags the worker.
        max_idle: |_worker| Duration::from_secs(60),
    });
}
