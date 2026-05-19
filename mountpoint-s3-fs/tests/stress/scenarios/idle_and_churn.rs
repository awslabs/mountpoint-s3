//! `idle_and_churn`: 8 churn workers + 48 idle workers against a shared-object
//! pool under the 512 MiB memory limit. The idle workers each read enough of the
//! object to force the prefetcher to issue a second `GetObject` metarequest and then
//! hold the handle idle for ~60s. The churn workers concurrently open, drain, and
//! close handles to verify active readers are not starved by memory pinned behind
//! idle handles.

use std::iter::{chain, repeat_n};
use std::sync::Arc;

use mountpoint_s3_fs::mem_limiter::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{Churn, Idle, SMALL_OBJECT_POOL};

const NUM_CHURN_WORKERS: usize = 8;
const NUM_IDLE_WORKERS: usize = 48;

#[test]
fn idle_and_churn() {
    let churn: Arc<dyn Worker> = Arc::new(Churn {
        pool: SMALL_OBJECT_POOL,
    });
    let idle: Arc<dyn Worker> = Arc::new(Idle {
        pool: SMALL_OBJECT_POOL,
    });
    let workers = chain(repeat_n(churn, NUM_CHURN_WORKERS), repeat_n(idle, NUM_IDLE_WORKERS)).collect();
    harness::run(Scenario {
        name: "idle_and_churn",
        session_config: TestSessionConfig::default().with_mem_limit(MINIMUM_MEM_LIMIT),
        workers,
        max_latency: default_max_latency,
    });
}
