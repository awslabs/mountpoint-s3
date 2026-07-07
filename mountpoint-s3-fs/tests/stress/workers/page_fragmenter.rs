//! `PageFragmenter` worker: reproduces page-fragmentation amplification in the buffer pool.
//!
//! A pool page holds 16 buffers and can only be trimmed when all 16 are free. Acquisition packs
//! new buffers into existing pages, but a drop pattern that leaves one survivor per page pins the
//! whole page: e.g. 48 open write handles fill 3 pages (16+16+16), and closing all but one handle
//! per page leaves 3 pages resident (48 buffers' worth of memory) for only 3 buffers in use — a
//! 16x blow-up that `trim()` cannot reclaim because no page is fully empty.
//!
//! This worker builds that history deterministically, then holds the survivors while reading a
//! shared object in a loop so the pinned pages coexist with live read demand for the rest of the
//! run. It is a single-threaded worker: one instance drives all three phases.

use std::fs::File;
use std::io::Write;
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::time::Duration;

use crate::stress::harness::{FileOp, FileOpLatencies, Worker};
use crate::stress::test_objects::{self, SHARED_OBJECTS_PREFIX};

use super::common::{SharedObject, read_to_eof_once};

/// Number of write handles opened in phase 1. A multiple of `BUFFERS_PER_PAGE` so the pinned
/// buffers fill whole pages (48 = 3 full pages of 16 buffers each).
const NUM_WRITERS: usize = 48;
/// Buffers per pool page — a page can only be trimmed when all of these are free.
const BUFFERS_PER_PAGE: usize = 16;
/// Number of handles kept open in phase 2, spaced one per page so every page stays pinned.
const NUM_SURVIVORS: usize = 3;
/// Bytes written into each phase-1 handle: a small partial write that pins exactly one part
/// buffer without ever completing a part.
const WRITE_BYTES: usize = 4 * 1024;
/// Pause after filling each page so the pool settles the page's buffers before the next opens.
const PER_PAGE_SETTLE: Duration = Duration::from_millis(200);
/// The shared object read in a loop during phase 3.
const READ_TARGET: SharedObject = super::sequential_reader::LARGE_READ_OBJECT;

/// A single-threaded worker that fragments the buffer pool (phase 1: open `NUM_WRITERS` partial
/// write handles across whole pages; phase 2: close all but `NUM_SURVIVORS`, one per page; phase
/// 3: hold the survivors and read `READ_TARGET` in a loop until `stop`).
pub struct PageFragmenter {
    /// Scenario label used as the ephemeral-key scenario segment.
    pub scope: &'static str,
    /// Read chunk size for phase 3. Set to the session's read part size so reads allocate from
    /// their own size-pool, distinct from the writers' pinned pages.
    pub read_chunk: usize,
}

impl Worker for PageFragmenter {
    fn kind(&self) -> &'static str {
        "page_fragmenter"
    }

    fn shared_objects(&self) -> Vec<(String, usize)> {
        vec![(READ_TARGET.key.to_string(), READ_TARGET.size)]
    }

    /// Opening 48 handles and settling each page can take a while under load; allow a longer
    /// idle window than the 20s default before the watchdog flags this worker.
    fn max_idle(&self) -> Duration {
        Duration::from_secs(60)
    }

    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        // Phase 1: open NUM_WRITERS handles, writing a small partial buffer into each so every
        // open handle pins one part buffer. Settle after each full page so the pool packs the
        // buffers into whole pages (16 per page) before the next page starts filling.
        let chunk = vec![0xC3u8; WRITE_BYTES];
        let mut handles: Vec<File> = Vec::with_capacity(NUM_WRITERS);
        for i in 0..NUM_WRITERS {
            if stop.load(Ordering::Relaxed) {
                return;
            }
            let key = test_objects::ephemeral_key(self.scope, &format!("f{instance:03}_w{i:03}.bin"));
            let path = mount_path.join(&key);
            let mut file = latencies
                .time(FileOp::Open, || File::create(&path))
                .unwrap_or_else(|e| panic!("{}: page_fragmenter: create {i} failed: {e:?}", self.scope));
            latencies
                .time(FileOp::Write, || file.write_all(&chunk))
                .unwrap_or_else(|e| panic!("{}: page_fragmenter: write {i} failed: {e:?}", self.scope));
            handles.push(file);
            progress.fetch_add(1, Ordering::Relaxed);
            // After each full page of buffers, let the pool settle before opening the next page.
            if (i + 1) % BUFFERS_PER_PAGE == 0 {
                std::thread::sleep(PER_PAGE_SETTLE);
            }
        }

        // Phase 2: close all but NUM_SURVIVORS handles, keeping one per page (indices 0, 16, 32)
        // so every page keeps exactly one live buffer and none can be trimmed.
        let survivor_indices: Vec<usize> = (0..NUM_SURVIVORS).map(|s| s * BUFFERS_PER_PAGE).collect();
        let mut survivors: Vec<File> = Vec::with_capacity(NUM_SURVIVORS);
        for (i, file) in handles.into_iter().enumerate() {
            if survivor_indices.contains(&i) {
                survivors.push(file);
            } else {
                latencies.time(FileOp::CloseWrite, || drop(file));
                progress.fetch_add(1, Ordering::Relaxed);
            }
        }

        // Phase 3: hold the survivors (keeping their pages pinned) and read a shared object in a
        // loop until stop. `survivors` stays in scope for the whole loop.
        let path = mount_path.join(SHARED_OBJECTS_PREFIX).join(READ_TARGET.key);
        let mut buf = vec![0u8; self.read_chunk];
        while !stop.load(Ordering::Relaxed) {
            read_to_eof_once("page_fragmenter", &path, &mut buf, progress, latencies, stop);
        }

        // Explicitly keep survivors alive until the run ends.
        drop(survivors);
    }
}
