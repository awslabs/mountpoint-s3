window.BENCHMARK_DATA = {
  "lastUpdate": 1778062398783,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone, Incremental Upload)": [
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dfad6f5052933c16114365d8adbfdd49e88ebf0",
          "message": "bench: Add incremental-upload throughput benchmark to S3 Express CI (#1813)\n\n## Summary\n\nExtend the existing S3 Express throughput benchmark CI with two new\n`--incremental-upload` variants, folded into the existing `bench` matrix\nintroduced by #1808 rather than as a separate job:\n\n- `incremental-upload` — default memory budget.\n- `incremental-upload-mem-limited` — `--features mem_limiter` +\n`--max-memory-target=512`.\n\nBoth new variants only run the `write` and `mix` fio categories (read is\nskipped since incremental upload is an upload-path feature).\n\nThis PR also isolates `S3_BUCKET_TEST_PREFIX` per matrix leg on the\nthroughput `bench` jobs (S3 Standard and S3 Express). The single\nworkflow-level prefix previously caused all matrix legs to race for the\nsame fio scratch keys in the benchmark bucket. This was latent (silent\noverlapping MPUs) for non-incremental legs but fatal for incremental\nupload: the append pipeline conditions each `PutObject` on the object's\ncurrent ETag, and a sibling leg's `unlink=1` between iterations aborts\nthe upload with `NoSuchKey`.\n\ngh-pages paths follow the `data_path_suffix` convention from #1808:\n\n| Variant | Throughput chart path |\n|---|---|\n| Incremental Upload | `dev/s3-express/bench/incremental_upload` |\n| Incremental Upload, Memory-Limited |\n`dev/s3-express/bench/incremental_upload/mem_limited` |\n\n### Does this change impact existing behavior?\n\nNo - only benchmark prefix changes generating/using new objects.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo — CI-only change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-01T13:20:46Z",
          "tree_id": "de8315ee6937f02426ad4964b0dd3f5ac60320b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dfad6f5052933c16114365d8adbfdd49e88ebf0"
        },
        "date": 1777645803491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12686.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 10531.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 11451.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 3484.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 3517.62109375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "586bc9bccb197f59cd516534aa6b0785bff68691",
          "message": "Add stress tests (#1820)\n\n### Summary\n\n- Adds a stress test harness under\n`mountpoint-s3-fs/tests/stress_tests/` with four scenarios\n(`sustained_reads`, `sustained_writes`, `mixed_rw`, `idle_and_churn`)\nthat drive real S3 traffic under the 512 MiB memory limit to shake out\ndeadlocks, per-worker stalls, tail-latency regressions, and memory\nissues.\n- Asserts at teardown: reservation gauges return to zero, per-op p100\nlatency within a configurable ceiling (20sec default), and per-worker\nwatchdog against stalls.\n- Adds a feature flag `stress_tests`, an aggregated metrics recorder in\n`tests/common/test_recorder.rs` and GitHub workflows when a PR is\nlabelled `stress` (similar to benchmarks/performance workflows).\n- Runs on the same hosts as benchmarks\n- Example stress test run and CI logs from my fork:\nhttps://github.com/yerzhan7/mountpoint-s3/actions/runs/25390606910\n- For now set it to run for 15min in CI\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-06T09:05:46Z",
          "tree_id": "4f527d703690bb26732efe4f3278949f0625480d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/586bc9bccb197f59cd516534aa6b0785bff68691"
        },
        "date": 1778062398716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12706.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 10473.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 11663.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 3421.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 3406.13671875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}