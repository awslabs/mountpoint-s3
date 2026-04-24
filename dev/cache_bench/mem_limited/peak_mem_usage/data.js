window.BENCHMARK_DATA = {
  "lastUpdate": 1777049862858,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard, Memory-Limited)": [
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
          "id": "72e3a504cfb783ca2d76844461fa1c879238ee67",
          "message": "bench: Add memory-limited FIO benchmarks with breach detection (#1808)\n\n## Summary\n\nExtend the existing FIO throughput benchmarks CI so that each supported\nworkload also runs with Mountpoint built using `--features mem_limiter`\nand mounted with `--max-memory-target=512` (MiB - fixed). Under this\nextra pressure, Mountpoint must stay within the configured budget; the\nnew jobs surface per-test peak memory usage in a GitHub Actions step\nsummary table so regressions/improvements in the memory limiter are easy\nto spot.\n\nNon-latency only. Same FIO job definitions are used for both the regular\nand memory-limited variants.\n\n- The existing `bench` (S3 Standard), `cache-bench`, and S3 Express\n`bench` jobs are extended with a `strategy.matrix` that fans each one\nout to two variants:\n  - `default` — unchanged behaviour.\n- `mem-limited` — builds with `--features mem_limiter`, runs with\n`S3_MAX_MEMORY_TARGET_MIB=512`, and emits an extra GitHub Actions\nsummary table.\n\nThe matrix also drives per-variant job name suffixes, gh-pages chart\nsub-paths, and S3 results sub-prefixes, so the two variants don't\ncollide.\n- New `.github/actions/scripts/render-mem-summary.sh` that renders a\nMarkdown table to `$GITHUB_STEP_SUMMARY` with per-test peak RSS, the\nlimit, a breach flag, and peak reserved memory per area/kind. Gated on\n`matrix.variant == 'mem-limited'`.\n- Shared benchmark scripts (`fs_bench.sh`, `fs_cache_bench.sh`) are now\nparameterised via the `S3_MAX_MEMORY_TARGET_MIB` env variable. When set,\nthey:\n  - Build with `--features mem_limiter`.\n  - Mount with `--max-memory-target=<N>`.\n- Ask `mount-s3-log-analyzer` for an additional JSON file via\n`--mem-limit-mib=<N> --extra-metrics-out=<PATH>`.\n\n  When unset, behaviour is unchanged.\n- `mount-s3-log-analyzer` gains two optional flags, `--mem-limit-mib`\nand `--extra-metrics-out`, wired together with `clap`'s `requires` so\neither both are set or neither. When both are set, the analyzer also\nparses Mountpoint metric log lines for:\n  - `mem.bytes_reserved[area=prefetch]`\n  - `mem.bytes_reserved[area=upload]`\n  - `pool.reserved_bytes[kind=get_object]`\n  - `pool.reserved_bytes[kind=put_object]`\n\nand writes JSON with the test name, peak RSS in MiB, memory limit in\nMiB, a `breached = peak_rss_mib\n\n## Example GitHub Actions summary\n\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/24720419069\n\n```\n| Test | Peak RSS (MiB) | Memory Limit (MiB) | Status | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) |\n|---|---|---|---|---|---|---|---|\n| mix_1r4w | 1562.546875 | 512 | ❌ BREACHED | 32 | N/A | 32 | 1376 |\n| rand_read_4t_direct | 22.0625 | 512 | ✅ OK | 68.5 | N/A | 64 | N/A |\n```\n\nNotes:\n- Breach is **non-fatal**: the ❌ is informational; the CI job does not\nfail on a breach.\n- A metric is rendered as `N/A` only when Mountpoint never emitted it in\nthe logs (e.g. `pool.reserved_bytes[kind=get_object]` in a write-only\nworkload). If the metric was emitted with value 0, the column shows\n`0.0`.\n- The `_extra_metrics.json` file is consumed **only** by the memory\nsummary step. It is not fed into the gh-pages benchmark charts.\n\n## Where results are stored\n\nMemory-limited results are stored under distinct `mem_limited` sub-paths\nso they don't collide with the existing charts:\n\n| Workload | Throughput chart path | Peak-memory chart path |\n\n|---------------------------------|-----------------------------------------------|-------------------------------------------------------------|\n| S3 Standard throughput | `dev/bench/mem_limited` |\n`dev/bench/mem_limited/peak_mem_usage` |\n| S3 Standard cache | `dev/cache_bench/mem_limited` |\n`dev/cache_bench/mem_limited/peak_mem_usage` |\n| S3 Express One Zone throughput | `dev/s3-express/bench/mem_limited` |\n`dev/s3-express/bench/mem_limited/peak_mem_usage` |\n\n## Why a separate `_extra_metrics.json`?\n\nThe existing `<test>_peak_mem.json` follows the `{name, value, unit}`\nschema required by `benchmark-action/github-action-benchmark` and feeds\nthe gh-pages charts. Adding more fields there would pollute the charts\nfor non-memory-limited runs. Keeping the file separate lets each\nconsumer (benchmark-action vs. GH Actions summary) receive only what it\nneeds.\n\n### Does this change impact existing behavior?\n\nNo - adding new benchmarks only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-24T14:24:02Z",
          "tree_id": "ecd9198213eb3e1fb01aa871847b055e26b111b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/72e3a504cfb783ca2d76844461fa1c879238ee67"
        },
        "date": 1777049862796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 400.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 423.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 415.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 403.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 415.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 496.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 425.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 421.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 453.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.16015625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}