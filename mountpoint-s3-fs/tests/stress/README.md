# Stress Tests

Long-running tests that sustain concurrent load against real S3 to shake out
deadlocks, per-worker stalls, tail-latency regressions, and memory issues.

## What it asserts

- No file I/O errors.
- Aggregated per file I/O p100 latency is within `Scenario::max_latency(op)`.
- No worker stall longer than `Worker::max_idle()`.
- At teardown, every reservation gauge is back to zero.
- Peak memory usage (reserved and RSS).

## Environment variables

| Variable                | Required | Description                                         |
|-------------------------|----------|-----------------------------------------------------|
| `S3_BUCKET_NAME`        | yes      | Bucket to use for test objects and ephemeral keys   |
| `S3_REGION`             | yes      | Region of the bucket                                |
| `S3_BUCKET_TEST_PREFIX` | no       | Defaults to `mountpoint-test/`; must end in `/`     |
| AWS credentials         | yes      | Standard SDK resolution (`AWS_PROFILE`, static keys, instance role, etc.) |
| `STRESS_DURATION_SECS`  | no       | Per-scenario duration in seconds; default 30        |

## How to run

A single scenario:

```
cargo nextest run --release \
    --features stress_tests \
    --package mountpoint-s3-fs \
    'stress::scenarios::sustained_reads' \
    --success-output final --failure-output final
```

All scenarios sequentially:

```
cargo nextest run --release \
    --features stress_tests \
    --package mountpoint-s3-fs \
    'stress::' \
    --test-threads=1 \
    --success-output final --failure-output final
```

## Adding a new scenario

1. Pick the workers that describe the load. Reuse existing ones
   (`SequentialReader`, `Writer`, `Idle`, `Churn`) or add a new type under
   `tests/stress/workers/`.
2. Create `tests/stress/scenarios/my_scenario.rs` containing one
   `#[test]` function that:
   - Builds a `Vec<Arc<dyn Worker>>` using `repeat_n` / `chain` /
     `repeat_with` as needed.
   - Builds a `Scenario` value (name, session config, workers,
     `max_latency`).
   - Calls `harness::run(scenario)`.
3. Register the module in `tests/stress/scenarios.rs`.

## Adding a new worker kind

1. Create `tests/stress/workers/my_worker.rs` with a
   `struct MyWorker { ... }` implementing `Worker`.
2. In `run`, wrap every file-system operation in
   `latencies.time(FileOp::_, || ...)` so the harness can aggregate per-op
   latency distributions. Use `FileOp::CloseRead` / `FileOp::CloseWrite`
   depending on the handle mode.
3. For shared read inputs, prefer the dataset descriptors in
   `workers/common.rs`:
   - `SharedObject { key, size }` for a single pre-uploaded object.
   - `SharedObjectPool { key_prefix, count, size }` for a family of
     identically-sized keys; `pool.pick_key(iter, instance)` returns a
     pseudo-random key seeded by `(iter, instance)`, and `pool.manifest()`
     returns the `(key, size)` entries for every key in the pool.
   Store the descriptor as a field on the worker and derive
   `shared_objects()` from it:
   ```rust
   pub struct MyReader {
       pub target: SharedObject,
   }

   impl Worker for MyReader {
       fn shared_objects(&self) -> Vec<(String, usize)> {
           vec![(self.target.key.to_string(), self.target.size)]
       }
       // ...
   }
   ```
   The harness unions the manifest across every worker in the scenario,
   de-dupes by key (asserting any two entries agree on size), and calls
   `ensure_shared_objects` exactly once before spawning threads. It's fine
   for two worker kinds (e.g. `Idle` and `Churn`) to declare overlapping
   sets — they'll be collapsed to a single upload pass. Open the file
   through the mount at
   `mount_path.join(test_objects::SHARED_OBJECTS_PREFIX).join(key)`. For
   ephemeral writes, use `test_objects::ephemeral_key(scope, suffix)` to
   get a flat, per-run-nonced key that cannot collide with shared objects,
   prior runs, or concurrent runs.
4. Increment the `progress` counter frequently (the watchdog polls it) and
   check `stop.load(Ordering::Relaxed)` between ops. Panic on I/O errors —
   scenarios are sized so the operations always succeed against a healthy
   session.
5. Re-export the type from `tests/stress/workers.rs`.
