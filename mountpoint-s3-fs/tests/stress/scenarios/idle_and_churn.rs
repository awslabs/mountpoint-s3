//! `idle_and_churn`: 8 churn workers + 48 idle workers under the 512 MiB memory limit,
//! designed to force the memory limiter to reclaim buffers pinned behind idle prefetch
//! handles.
//!
//! Each idle worker opens a distinct large object, reads a [`IDLE_WARMUP`] prefix
//! *continuously* (so repeated part-queue drains scale the prefetch read window up), then
//! holds the handle idle for ~60s — pinning a full scaled-up window of reserved buffers.
//! With 48 such handles the pinned reservations far exceed the ~384 MiB effective budget,
//! so the allocation queue stays under pressure. The churn workers concurrently open,
//! drain, and close handles on a separate small-object pool; their allocations can only be
//! served if the limiter reclaims memory from the idle handles. That reclamation is the
//! `mem.cursor_resets` path (the maintenance thread's `reset_one_idle_cursor`), which this
//! scenario exists to exercise: an earlier version read only a 1 MiB probe on 4 MiB objects
//! and so pinned ~20 MiB total, never building enough pressure to trigger a single forced
//! reset.

use std::iter::{chain, repeat_n};
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{Churn, Idle, LARGE_OBJECT_POOL, SMALL_OBJECT_POOL};

/// Default worker counts and warm-up, tuned for the in-region, high-bandwidth CI runner.
/// Each is overridable via env for lower-bandwidth environments (e.g. a laptop over a
/// long-haul link, where running all 56 big-window readers concurrently saturates the
/// link before any idle handle finishes warming up). Overrides are for local smoke tests
/// only — CI runs the defaults.
const DEFAULT_NUM_CHURN_WORKERS: usize = 8;
const DEFAULT_NUM_IDLE_WORKERS: usize = 48; // One idle handle per object in LARGE_OBJECT_POOL.
/// How much each idle worker reads before going idle. Large enough that repeated
/// part-queue stalls scale the read window up to a multi-part window before the hold, and
/// `<= LARGE_OBJECT_POOL.size` so it fits within one object.
const DEFAULT_IDLE_WARMUP: usize = 16 * 1024 * 1024;

/// Read a `usize` from `var`, falling back to `default` when unset or unparseable.
fn env_usize(var: &str, default: usize) -> usize {
    std::env::var(var).ok().and_then(|s| s.parse().ok()).unwrap_or(default)
}

#[test]
fn idle_and_churn() {
    let num_churn = env_usize("STRESS_IDLE_CHURN_NUM_CHURN", DEFAULT_NUM_CHURN_WORKERS);
    // The pool the idle workers hold open. Defaults to the large pool (whose 32 MiB objects
    // let a warmed-up read window grow); set `STRESS_IDLE_CHURN_IDLE_POOL=small` to reproduce
    // the pre-retune behaviour (4 MiB objects) for A/B comparison.
    let idle_pool = match std::env::var("STRESS_IDLE_CHURN_IDLE_POOL").as_deref() {
        Ok("small") => SMALL_OBJECT_POOL,
        _ => LARGE_OBJECT_POOL,
    };
    let num_idle = env_usize("STRESS_IDLE_CHURN_NUM_IDLE", DEFAULT_NUM_IDLE_WORKERS).min(idle_pool.count);
    let warmup = env_usize("STRESS_IDLE_CHURN_WARMUP", DEFAULT_IDLE_WARMUP).min(idle_pool.size);
    // Memory limit override (in MiB). Defaults to the standard minimum. Lowering it lets a
    // low-concurrency local run build allocation-queue pressure — and so exercise the idle
    // cursor reclamation path — without the bandwidth to establish a full 384 MiB of pinned
    // windows. CI runs the default.
    let mem_limit = env_usize("STRESS_IDLE_CHURN_MEM_LIMIT_MIB", MINIMUM_MEM_LIMIT / (1024 * 1024)) * 1024 * 1024;

    let churn: Arc<dyn Worker> = Arc::new(Churn {
        pool: SMALL_OBJECT_POOL,
    });
    let idle: Arc<dyn Worker> = Arc::new(Idle {
        pool: idle_pool,
        warmup,
    });
    let workers = chain(repeat_n(churn, num_churn), repeat_n(idle, num_idle)).collect();
    harness::run(Scenario {
        name: "idle_and_churn",
        session_config: TestSessionConfig::default().with_mem_limit(mem_limit),
        workers,
        max_latency: default_max_latency,
    });
}
