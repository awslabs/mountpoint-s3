//! `page_fragmentation`: a single worker that reproduces page-fragmentation amplification and the
//! cross-size-pool starvation it causes.
//!
//! A pool page holds 16 buffers and can only be trimmed when all 16 are free. Writers use an 8 MiB
//! part size; the worker opens 48 partial-write handles (filling 3 whole pages in the 8 MiB
//! size-pool), then closes all but one handle per page. That leaves 3 pages — 384 MiB — resident
//! behind only 3 in-use buffers, and `trim()` cannot reclaim any of them because no page is fully
//! empty.
//!
//! The worker then reads a shared object in a loop using a **16 MiB read part size**. Reads
//! allocate from a *separate* 16 MiB size-pool, so the 384 MiB pinned in the 8 MiB pool is pure
//! dead weight the reader can never reuse — it must find room for 16 MiB buffers in what little of
//! the 512 MiB budget remains. Runs entirely on one worker thread; the existing RSS/reserved
//! invariants observe the amplification and any starvation at teardown.

use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::PageFragmenter;

/// Read part size — deliberately different from the default 8 MiB write part size, so reads
/// allocate from a separate `PagedPool` size-pool and cannot reuse the buffers pinned by the
/// writers (which use the default `part_size`; 8 MiB × 16 per page = 128 MiB/page).
const READ_PART_SIZE: usize = 16 * 1024 * 1024;

#[test]
fn page_fragmentation() {
    let worker: Arc<dyn Worker> = Arc::new(PageFragmenter {
        scope: "page_fragmentation",
        read_chunk: READ_PART_SIZE,
    });
    harness::run(Scenario {
        name: "page_fragmentation",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_read_part_size(READ_PART_SIZE),
        workers: vec![worker],
        max_latency: default_max_latency,
    });
}
