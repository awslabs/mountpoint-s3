window.BENCHMARK_DATA = {
  "lastUpdate": 1774618768517,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6f34b6826b437ee3fc33e6dda40433964f041592",
          "message": "Udpate docs with cache metrics for OTLP export (#1739)\n\nUpdates documentation with new cache metrics available for OTLP export\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-22T12:04:41Z",
          "tree_id": "1787e28a58736bcfaf6d8a5ca150e09fb991df7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f34b6826b437ee3fc33e6dda40433964f041592"
        },
        "date": 1769091721783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2857.1875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4557.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8318.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8197.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8217.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 379.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.71484375,
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
          "id": "0fbb3de56f645defa5c398b007e60a829fe97c9e",
          "message": "Benchmark: Create s3io_benchmark (#1757)\n\n**What changed and why?** Need to create new fio-like benchmark tool for\nPrefetcher/Uploader level of abstraction that can run several jobs\nconcurrently.\n\nCreated new s3io_benchmark script:\n - Create single shareable instance of `Prefetcher` and `Uploader`\n- Read/Write job logic is mostly adapted/copied from existing separate\n`prefetch_benchmark.rs` and `upload_benchmark.rs` files\n- Random Read implementation logic is copied from\nhttps://github.com/awslabs/mountpoint-s3/pull/1747/changes\n- FIO-like job config file parsing. Precedence order: Job-specific >\nGlobal > Built-in default\n - Uses Tokio runtime for spawning multiple jobs concurrently\n\n**Manual Runs**:\n\n```\ncargo build --example s3io_benchmark\n./target/debug/examples/s3io_benchmark mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\n```\n\n```\nS3 I/O Benchmark\nConfig file: \"mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\"\n\nLoading configuration...\nPreparing and validating jobs...\nFound 5 job(s) to execute\nCreating shared resources...\nExecuting jobs...\nJob 'read_2' completed: 3 iterations, 0.03 GB, 21.83s\nJob 'write_1_0' completed: 3 iterations, 0.03 GB, 6.73s\nJob 'write_1_1' completed: 3 iterations, 0.03 GB, 5.73s\nJob 'write_1_2' completed: 3 iterations, 0.03 GB, 5.23s\nJob 'read_1' completed: 3 iterations, 0.01 GB, 10.08s\nCompleted 5 job(s)\n\nAggregating results...\nWriting results to: example_results.json\n\nBenchmark complete!\n  Total bytes: 127114460\n  Duration: 21.15s\n  Total errors: 0\n```\n\n```\n{\n  \"jobs\": [\n    {\n      \"job_name\": \"read_2\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30000000,\n      \"elapsed_seconds\": 21.152757958,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_0\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 6.731901292,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_1\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.72617075,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_2\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.225869416,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"read_1\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 6281564,\n      \"elapsed_seconds\": 9.367737875,\n      \"errors\": []\n    }\n  ],\n  \"summary\": {\n    \"total_bytes\": 127114460,\n    \"total_elapsed_seconds\": 21.152757958,\n    \"total_errors\": 0\n  }\n}\n```\n\n### Does this change impact existing behavior? No.\n\n### Does this change need a changelog entry? Does it require a version\nchange? No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-29T21:18:54Z",
          "tree_id": "22ecfa4bdfe0b5939cfb1b709cf772739c839dcd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbb3de56f645defa5c398b007e60a829fe97c9e"
        },
        "date": 1769729846334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2909.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4577.08984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8400.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8240.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8260.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.5703125,
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
          "distinct": false,
          "id": "17b7ca6dcf8556f9b09822a40c8dce6cff8393e7",
          "message": "s3io_benchmark: Add peak memory reporting (#1760)\n\n**What changed and why?** Need to track peak memory usage for\n`s3io_benchmark.rs`\n\n- Created memory tracker (adapted from `metrics.rs`)\n- Set default polling interval to 100ms.\n\n### Does this change impact existing behavior?\n\nN/A - benchmark only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - benchmark only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-30T16:06:47Z",
          "tree_id": "fcb4730679608bc9766818a57dfd8c3c3cbabde4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17b7ca6dcf8556f9b09822a40c8dce6cff8393e7"
        },
        "date": 1769797429221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2896.21875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8371.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8290.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8240.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.9921875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc3ed919f2afb2814611453fcabf6166b66fa895",
          "message": "Bump bytes from 1.11.0 to 1.11.1 (#1763)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.11.0 to 1.11.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes v1.11.1</h2>\n<h1>1.11.1 (February 3rd, 2026)</h1>\n<ul>\n<li>Fix integer overflow in <code>BytesMut::reserve</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.11.1 (February 3rd, 2026)</h1>\n<ul>\n<li>Fix integer overflow in <code>BytesMut::reserve</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/417dccdeff249e0c011327de7d92e0d6fbe7cc43\"><code>417dccd</code></a>\nRelease bytes v1.11.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/820\">#820</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/d0293b0e35838123c51ca5dfdf468ecafee4398f\"><code>d0293b0</code></a>\nMerge commit from fork</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.11.0...v1.11.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.11.0&new-version=1.11.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-04T10:40:11Z",
          "tree_id": "5a9f325f4b5d8f1370003bfbcc36763c3c91e74c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc3ed919f2afb2814611453fcabf6166b66fa895"
        },
        "date": 1770209933565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3417.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4593.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8717.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 56.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8201.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 391.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.5,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7041070456d2d2f35e068c4aff91c6a9cdb8dc46",
          "message": "Bump git2 from 0.20.3 to 0.20.4 (#1764)\n\nBumps [git2](https://github.com/rust-lang/git2-rs) from 0.20.3 to\n0.20.4.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-lang/git2-rs/blob/git2-0.20.4/CHANGELOG.md\">git2's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.20.4 - 2026-02-02</h2>\n<p><a\nhref=\"https://github.com/rust-lang/git2-rs/compare/git2-0.20.3...git2-0.20.4\">0.20.3...0.20.4</a></p>\n<h3>Fixed</h3>\n<ul>\n<li>Fix undefined behavior when dereferencing empty <code>Buf</code>.\n<a\nhref=\"https://redirect.github.com/rust-lang/git2-rs/pull/1213\">#1213</a></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/8852d7dabd38d0df6d4524e04a1c2ee520ac7203\"><code>8852d7d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-lang/git2-rs/issues/1214\">#1214</a>\nfrom weihanglo/backport-from-raw-parts</li>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/0b274f76f70f717c3bda4be1f79ba8e1cb11afd4\"><code>0b274f7</code></a>\nBump to 0.20.4</li>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/73a5d5d7c49a7eb9d17c2ab6e40dafe3765ebf4d\"><code>73a5d5d</code></a>\nAdd test for dereference of an empty Buf</li>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/ce566831eb188b0fdb27962e154b8da6103071bf\"><code>ce56683</code></a>\nfix: check ptr nullity before calling from_raw_parts</li>\n<li>See full diff in <a\nhref=\"https://github.com/rust-lang/git2-rs/compare/git2-0.20.3...git2-0.20.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=git2&package-manager=cargo&previous-version=0.20.3&new-version=0.20.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-05T06:44:30Z",
          "tree_id": "5d6488e1b9743bc2daf1c2654372e11d3c9c7bda",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7041070456d2d2f35e068c4aff91c6a9cdb8dc46"
        },
        "date": 1770282154129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2864.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8312.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8199.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8199.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.33203125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6976976e401b6147b72ebc3eec4c891fd4a3bca2",
          "message": "Bump aws-actions/configure-aws-credentials from 5 to 6 (#1766)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.1.1...v6.0.0\">6.0.0</a>\n(2026-02-04)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Update action to use node24 <em>Note this requires GitHub action\nrunner version <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">v2.327.1</a>\nor later</em> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1632\">#1632</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a7a2c1125c67f40a1e95768f4e4a7d8f019f87af\">a7a2c11</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add support to define transitive tag keys (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1316\">#1316</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/232435c0c05e51137544f0203931b84893d13b74\">232435c</a>)\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1628/changes/930ebd9bcaed959c3ba9e21567e8abbc3cae72c0\">930ebd9</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>properly output <code>aws-account-id</code> and\n<code>authenticated-arn</code> when using role-chaining (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1633\">#1633</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7ceaf96edc86cc1713cef59eba79feeb23f59da1\">7ceaf96</a>)</li>\n</ul>\n<h2>v5.1.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.1.0...v5.1.1\">5.1.1</a>\n(2025-11-24)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 5.1.1 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/56d6a583f00f6bad6d19d91d53a7bc3b8143d0e9\">56d6a58</a>)</li>\n<li>various dependency updates</li>\n</ul>\n<h2>v5.1.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.0.0...v5.1.0\">5.1.0</a>\n(2025-10-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>Add global timeout support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1487\">#1487</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/1584b8b0e2062557287c28fbe9b8920df434e866\">1584b8b</a>)</li>\n<li>add no-proxy support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/dde9b22a8e889a0821997a21a2c5a38020ee8de3\">dde9b22</a>)</li>\n<li>Improve debug logging in retry logic (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1485\">#1485</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/97ef425d73aa532439f54f90d0e83101a186c5a6\">97ef425</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>properly expose getProxyForUrl (introduced in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1486\">#1486</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cea42985ac88b42678fbc84c18066a7f07f05176\">cea4298</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.0.0...v5.1.0\">5.1.0</a>\n(2025-10-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>Add global timeout support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1487\">#1487</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/1584b8b0e2062557287c28fbe9b8920df434e866\">1584b8b</a>)</li>\n<li>add no-proxy support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/dde9b22a8e889a0821997a21a2c5a38020ee8de3\">dde9b22</a>)</li>\n<li>Improve debug logging in retry logic (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1485\">#1485</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/97ef425d73aa532439f54f90d0e83101a186c5a6\">97ef425</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>properly expose getProxyForUrl (introduced in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1486\">#1486</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cea42985ac88b42678fbc84c18066a7f07f05176\">cea4298</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.1...v5.0.0\">5.0.0</a>\n(2025-09-03)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\">8c45f6b</a>)</li>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/74b3e27aa80db064b5bb8c04b22fc607e817acf7\">74b3e27</a>)</li>\n<li>support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\">c4be498</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.1...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<h3>Features</h3>\n<ul>\n<li>depenency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8df5847569e6427dd6c4fb1cf565c83acfa8afa7\"><code>8df5847</code></a>\nchore(deps): bump fast-xml-parser and <code>@​aws-sdk/xml-builder</code>\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1640\">#1640</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d22a0f8af59e052e453e2f8fbe2b9cbbc1b76b15\"><code>d22a0f8</code></a>\nchore(deps-dev): bump <code>@​types/node</code> from 25.0.10 to 25.2.0\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1635\">#1635</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/f7b8181755fc1413cd909cbac860d8a76dc848f1\"><code>f7b8181</code></a>\nchore(main): release 6.0.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1641\">#1641</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c367a6acb003ce286b445638569d6ed8d9e846de\"><code>c367a6a</code></a>\nchore: integ tests manual option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1639\">#1639</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7ceaf96edc86cc1713cef59eba79feeb23f59da1\"><code>7ceaf96</code></a>\nfix: correct outputs for role chaining (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1633\">#1633</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a7a2c1125c67f40a1e95768f4e4a7d8f019f87af\"><code>a7a2c11</code></a>\nfeat!: update action to use node24 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1632\">#1632</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6e3375df071cb03cfbf5fa8ae7770ada6633ab7c\"><code>6e3375d</code></a>\nchore: remove release-please release automation (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1631\">#1631</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/98abed784138c9838ce602dfb51633e39a1a02b8\"><code>98abed7</code></a>\nchore: add workflow_dispatch trigger to release workflow (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1630\">#1630</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/bf3adbbb948ac5c9b2dd90a5beecc537dab6ebbf\"><code>bf3adbb</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/db43b8b90ab5e82cf8affce23d07afc7837ae4b2\"><code>db43b8b</code></a>\nchore: re-run linter</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-09T12:43:25Z",
          "tree_id": "e0a15db1a4e15932c19ddf5b2358f18db75c830b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6976976e401b6147b72ebc3eec4c891fd4a3bca2"
        },
        "date": 1770649250340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2926.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4603.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8282.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8221.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8179.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.60546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c888d4aca999a1eeb54b0e4fbe8f6d25169351e9",
          "message": "Upgrade rand to 0.10 (#1771)\n\nUpgrade the `rand` crate to version `0.10` and address minor breaking\nchanges.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-02-24T13:39:58Z",
          "tree_id": "1ce2c82403864a7633e14f16977672cb357be851",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c888d4aca999a1eeb54b0e4fbe8f6d25169351e9"
        },
        "date": 1771948615050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2872.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4576.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8318.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8195.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8204.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.82421875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34b47ffe8231583e4da2035d3d9db2bab8d65c08",
          "message": "Fix remaining cargo_bin warnings (#1772)\n\nFix remaining cargo_bin invocations. Leftover from #1742.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-02-25T15:55:05Z",
          "tree_id": "920dc8f71acc3a3f84dfe205cd062116d0c937ee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/34b47ffe8231583e4da2035d3d9db2bab8d65c08"
        },
        "date": 1772043424578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2912.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4577.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8326.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8245.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8287.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1075.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.89453125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f6bc61dbeb6117116aeccfb522d5e5f2325e31f",
          "message": "Upgrade toolchain to Rust 1.93 (#1773)\n\nUpgrade toolchain to Rust 1.93.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-02-26T08:29:14Z",
          "tree_id": "630c746c454669926d453888956281bbeb5b3879",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f6bc61dbeb6117116aeccfb522d5e5f2325e31f"
        },
        "date": 1772102800122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2860,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4572.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8385.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8193.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8235.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.4375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "fae405ff70749a62f764f7d67c249e2c34a47e09",
          "message": "Bump actions/download-artifact from 7 to 8 (#1774)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 7 to 8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.0</h2>\n<h2>v8 - What's new</h2>\n<h3>Direct downloads</h3>\n<p>To support direct uploads in <code>actions/upload-artifact</code>,\nthe action will no longer attempt to unzip all downloaded files.\nInstead, the action checks the <code>Content-Type</code> header ahead of\nunzipping and skips non-zipped files. Callers wishing to download a\nzipped file as-is can also set the new <code>skip-decompress</code>\nparameter to <code>false</code>.</p>\n<h3>Enforced checks (breaking)</h3>\n<p>A previous release introduced digest checks on the download. If a\ndownload hash didn't match the expected hash from the server, the action\nwould log a warning. Callers can now configure the behavior on mismatch\nwith the <code>digest-mismatch</code> parameter. To be secure by\ndefault, we are now defaulting the behavior to <code>error</code> which\nwill fail the workflow run.</p>\n<h3>ESM</h3>\n<p>To support new versions of the @actions/* packages, we've upgraded\nthe package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Don't attempt to un-zip non-zipped downloads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/460\">actions/download-artifact#460</a></li>\n<li>Add a setting to specify what to do on hash mismatch and default it\nto <code>error</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/461\">actions/download-artifact#461</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8.0.0\">https://github.com/actions/download-artifact/compare/v7...v8.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/70fc10c6e5e1ce46ad2ea6f2b72d43f7d47b13c3\"><code>70fc10c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/461\">#461</a>\nfrom actions/danwkennedy/digest-mismatch-behavior</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/f258da9a506b755b84a09a531814700b86ccfc62\"><code>f258da9</code></a>\nAdd change docs</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ccc058e5fbb0bb2352213eaec3491e117cbc4a5c\"><code>ccc058e</code></a>\nFix linting issues</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bd7976ba57ecea96e6f3df575eb922d11a12a9fd\"><code>bd7976b</code></a>\nAdd a setting to specify what to do on hash mismatch and default it to\n<code>error</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac21fcf45e0aaee541c0f7030558bdad38d77d6c\"><code>ac21fcf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/460\">#460</a>\nfrom actions/danwkennedy/download-no-unzip</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/15999bff51058bc7c19b50ebbba518eaef7c26c0\"><code>15999bf</code></a>\nAdd note about package bumps</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/974686ed5098c7f9c9289ec946b9058e496a2561\"><code>974686e</code></a>\nBump the version to <code>v8</code> and add release notes</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fbe48b1d2756394be4cd4358ed3bc1343b330e75\"><code>fbe48b1</code></a>\nUpdate test names to make it clearer what they do</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/96bf374a614d4360e225874c3efd6893a3f285e7\"><code>96bf374</code></a>\nOne more test fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/b8c4819ef592cbe04fd93534534b38f853864332\"><code>b8c4819</code></a>\nFix skip decompress test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=7&new-version=8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T08:49:36Z",
          "tree_id": "862d172fb443a4c9b1d2451ac56aeee9a8d28c0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fae405ff70749a62f764f7d67c249e2c34a47e09"
        },
        "date": 1772449657698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2891.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4536.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8264.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8271.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8288.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2112.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 205.171875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93974a085d8e00a2290177fd37e536fe5e260385",
          "message": "Bump actions/upload-artifact from 6 to 7 (#1775)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 What's new</h2>\n<h3>Direct Uploads</h3>\n<p>Adds support for uploading single files directly (unzipped). Callers\ncan set the new <code>archive</code> parameter to <code>false</code> to\nskip zipping the file during upload. Right now, we only support single\nfiles. The action will fail if the glob passed resolves to multiple\nfiles. The <code>name</code> parameter is also ignored with this\nsetting. Instead, the name of the artifact will be the name of the\nuploaded file.</p>\n<h3>ESM</h3>\n<p>To support new versions of the <code>@actions/*</code> packages,\nwe've upgraded the package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Add proxy integration test by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/754\">actions/upload-artifact#754</a></li>\n<li>Upgrade the module to ESM and bump dependencies by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/762\">actions/upload-artifact#762</a></li>\n<li>Support direct file uploads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/764\">actions/upload-artifact#764</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Link\"><code>@​Link</code></a>- made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/754\">actions/upload-artifact#754</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v6...v7.0.0\">https://github.com/actions/upload-artifact/compare/v6...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/bbbca2ddaa5d8feaa63e36b76fdaad77386f024f\"><code>bbbca2d</code></a>\nSupport direct file uploads (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/764\">#764</a>)</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/589182c5a4cec8920b8c1bce3e2fab1c97a02296\"><code>589182c</code></a>\nUpgrade the module to ESM and bump dependencies (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/762\">#762</a>)</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/47309c993abb98030a35d55ef7ff34b7fa1074b5\"><code>47309c9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/754\">#754</a>\nfrom actions/Link-/add-proxy-integration-tests</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/02a8460834e70dab0ce194c64360c59dc1475ef0\"><code>02a8460</code></a>\nAdd proxy integration test</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T08:54:26Z",
          "tree_id": "26639ba3d195645e3f422dcb2b62b79a87e713fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93974a085d8e00a2290177fd37e536fe5e260385"
        },
        "date": 1772449877620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2916.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4579.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8323.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 27.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8240.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8196.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.0390625,
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
          "id": "61f2416088f120238aa393b66247bfc487a7658e",
          "message": "Make `MemoryPool` buffer acquisition async-ready (#1768)\n\n**What changed and why?**\n\nThis PR makes the `MemoryPool` trait async-capable by adding a new\n`get_buffer_async()` method, and wires up the CRT bridge so that buffer\nacquisition on the read path is spawned on a CRT event loop. (Note that\non write-path we must keep doing `get_buffer()` in a sync way due to CRT\nlimitation\n[here](https://github.com/awslabs/aws-c-s3/blob/main/source/s3_meta_request.c#L2618-L2631))\n\nCurrently, when the S3 client needs a memory buffer, it calls\n`get_buffer` and blocks until the buffer is allocated. This works fine\nnow because allocation is instant. But we want to support a future\nscenario where the pool is full and needs to wait for memory to free up.\nAdding `get_buffer_async` lays the groundwork — the actual behavior\ndoesn't change much (allocations are still instant, but they now execute\non a separate Task/Future on the read path), but the infrastructure is\nin place.\n\nThe async future is spawned on existing CRT's `EventLoopGroup`. Note\nthat there is a timing issue: we create the `CrtBufferPoolFactory`\n(wrapping `MemoryPoolFactory`) when building `S3ClientConfig`, but the\n`EventLoopGroup` doesn't exist yet — it's created inside\n`S3CrtClientInner::new()`. So the factory must be constructed before the\nthread pool it needs to reference. The solution is to create wrapper\n`MemoryPoolFactoryWrapper`.\n\n### Does this change impact existing behavior?\n\n- Get buffer on read-path is now fulfilled on a separate spawned\nTask/Future instead of immediately in a sync way.\n- `MemoryPool` trait has now `'static + Send` bounds\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-02T22:57:56Z",
          "tree_id": "8c343884699c4747da1913cb7573998c70b0d541",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f2416088f120238aa393b66247bfc487a7658e"
        },
        "date": 1772500518534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2887.515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4548.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8389.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8017.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8070.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 395.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.69140625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f",
          "message": "Upgrade Cargo dependencies (#1777)\n\nUpgrade Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-03T10:45:25Z",
          "tree_id": "b8094bd57bfc31d5559eb6a277e7e4a60ebdbf54",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f"
        },
        "date": 1772542963279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2850.125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4577.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8278.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8059.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8099.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 305.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.07421875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41ae7ff7e7169de4f25bd33c39cee43c8c1c8555",
          "message": "Add DEVELOPMENT.md doc (#1717)\n\nThis introduces a document describing how to get started as a\ncontributor to Mountpoint. This partially replaces existing internal\ndocumentation that we have.\n\nBy moving it into the repository, it is:\n\n- In an expected location\n- Available to internal and external contributors alike\n- Available for both developers but also AI agents should a developer\nwant to make use of AI tooling\n\n### Does this change impact existing behavior?\n\nNo, project docs change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-03T16:51:54Z",
          "tree_id": "9c75bc8fdbc30b5488075e814acdb510ced61e2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41ae7ff7e7169de4f25bd33c39cee43c8c1c8555"
        },
        "date": 1772564891817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2892.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8298.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8281.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8073.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.80078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27ca3a014d7f5c8fb087faca52fd823a31a8788f",
          "message": "Bump docker/build-push-action from 6 to 7 (#1783)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<ul>\n<li>Node 24 as default runtime (requires <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Actions\nRunner v2.327.1</a> or later) by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1470\">docker/build-push-action#1470</a></li>\n<li>Remove deprecated <code>DOCKER_BUILD_NO_SUMMARY</code> and\n<code>DOCKER_BUILD_EXPORT_RETENTION_DAYS</code> envs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1473\">docker/build-push-action#1473</a></li>\n<li>Remove legacy export-build tool support for build summary by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1474\">docker/build-push-action#1474</a></li>\n<li>Switch to ESM and update config/test wiring by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1466\">docker/build-push-action#1466</a></li>\n<li>Bump <code>@​actions/core</code> from 1.11.1 to 3.0.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1454\">docker/build-push-action#1454</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.62.1 to 0.79.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1453\">docker/build-push-action#1453</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1472\">docker/build-push-action#1472</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1479\">docker/build-push-action#1479</a></li>\n<li>Bump minimatch from 3.1.2 to 3.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1463\">docker/build-push-action#1463</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0\">https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0</a></p>\n<h2>v6.19.2</h2>\n<ul>\n<li>Preserve port in <code>GIT_AUTH_TOKEN</code> host by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1458\">docker/build-push-action#1458</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2\">https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2</a></p>\n<h2>v6.19.1</h2>\n<ul>\n<li>Derive <code>GIT_AUTH_TOKEN</code> host from GitHub server URL by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1456\">docker/build-push-action#1456</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1\">https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1</a></p>\n<h2>v6.19.0</h2>\n<ul>\n<li>Scope default git auth token to <code>github.com</code> by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1451\">docker/build-push-action#1451</a></li>\n<li>Bump brace-expansion from 1.1.11 to 1.1.12 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1396\">docker/build-push-action#1396</a></li>\n<li>Bump form-data from 2.5.1 to 2.5.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1391\">docker/build-push-action#1391</a></li>\n<li>Bump js-yaml from 3.14.1 to 3.14.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1429\">docker/build-push-action#1429</a></li>\n<li>Bump lodash from 4.17.21 to 4.17.23 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1446\">docker/build-push-action#1446</a></li>\n<li>Bump tmp from 0.2.3 to 0.2.4 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1398\">docker/build-push-action#1398</a></li>\n<li>Bump undici from 5.28.4 to 5.29.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1397\">docker/build-push-action#1397</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0\">https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0</a></p>\n<h2>v6.18.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.61.0 to 0.62.1 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1381\">docker/build-push-action#1381</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\n<a\nhref=\"https://docs.docker.com/build/ci/github-actions/build-summary/\">Build\nsummary</a> is now supported with <a\nhref=\"https://docs.docker.com/build-cloud/\">Docker Build Cloud</a>.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0\">https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0</a></p>\n<h2>v6.17.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.59.0 to 0.61.0 by\n<a href=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1364\">docker/build-push-action#1364</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\nBuild record is now exported using the <a\nhref=\"https://docs.docker.com/reference/cli/docker/buildx/history/export/\"><code>buildx\nhistory export</code></a> command instead of the legacy export-build\ntool.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0\">https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0</a></p>\n<h2>v6.16.0</h2>\n<ul>\n<li>Handle no default attestations env var by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1343\">docker/build-push-action#1343</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/d08e5c354a6adb9ed34480a06d141179aa583294\"><code>d08e5c3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1479\">#1479</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cbd2dff9a0f0ef650dcce9c635bb2f877ab37be5\"><code>cbd2dff</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/f76f51f12900bb84aa9d1a498f35870ef1f76675\"><code>f76f51f</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.78.0 to\n0.79.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7d03e66b5f24d6b390ab64b132795fd3ef4152c8\"><code>7d03e66</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1473\">#1473</a>\nfrom crazy-max/rm-deprecated-envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/98f853d923dd281a3bcbbb98a0712a91aa913322\"><code>98f853d</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cadccf6e8c7385c86d9cb0800cf07672645cc238\"><code>cadccf6</code></a>\nremove deprecated envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03fe8775e325e34fffbda44c73316f8287aea372\"><code>03fe877</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1478\">#1478</a>\nfrom docker/dependabot/github_actions/docker/setup-b...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/827e36650e1fa7386d09422b5ba3c068fdbe0a1d\"><code>827e366</code></a>\nchore(deps): Bump docker/setup-buildx-action from 3 to 4</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/e25db879d025485a4eebd64fea9bb88a43632da6\"><code>e25db87</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1474\">#1474</a>\nfrom crazy-max/rm-export-build-tool</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/1ac2573b5c8b4e4621d5453ab2a99e83725242bd\"><code>1ac2573</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1470\">#1470</a>\nfrom crazy-max/node24</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-09T09:33:27Z",
          "tree_id": "c9ba3743efd90d6b4ae95a2dad003035dfe5d3ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27ca3a014d7f5c8fb087faca52fd823a31a8788f"
        },
        "date": 1773057004871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2862.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8194.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8208.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8161.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.453125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90bb0b4d4f890bc0a77898f6d7cdbb20895a9650",
          "message": "Fix default data cache limit validation during eviction (#1779)\n\nFixes `is_limit_exceeded()` function used by the data cache when in\ndefault mode (which should keep 5% of space in the cache file system).\nBefore the fix, it was incorrectly considering space reserved by the\nfile system as available space leading to 100% space usage. Now,\nreserved space is considered and the 5% available space is respected. A\nregression test was also added.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-09T16:47:27Z",
          "tree_id": "20f6ef4d0237f2a088335d68be2c71196eaf7748",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bb0b4d4f890bc0a77898f6d7cdbb20895a9650"
        },
        "date": 1773083107612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2858.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4596.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8316.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8148.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8134.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2113.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.04296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "855fa94bd3b40780018368a90b16ef837eb7e2f4",
          "message": "Fix read issue on concurrent open after truncate (#1781)\n\nFix race condition when 2 concurrent open requests occur after a\ntruncate and resulting in errors on read.\n\nThe issue is caused by a concurrent operation which ignores that the\ninode is still completing an upload and tries to refresh its state by\nperforming a remote lookup to the bucket. By the time the remote lookup\ncompletes, its result may be stale but still be used to overwrite the\nresult of the upload. This fix adds a check for a pending upload instead\nof only relying on the `write_status` field.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog entries for a patch release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T17:42:42Z",
          "tree_id": "beb72a04226e62ebc716133f9c9b272a97fa25ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/855fa94bd3b40780018368a90b16ef837eb7e2f4"
        },
        "date": 1773086422479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2863.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4558.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8210.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8198.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8072.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.828125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4270f8c47fa0717a9dcc87828eca01d12fc42d7a",
          "message": "Update changelogs for v1.22.1 release (#1784)\n\nUpdate changelogs for v1.22.1 release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T18:29:42Z",
          "tree_id": "c65d8b678eb9cb90ff43817065ad504b9b8cd445",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4270f8c47fa0717a9dcc87828eca01d12fc42d7a"
        },
        "date": 1773089299996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2931.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4554.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8259.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8070.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8218.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 307.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.02734375,
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
          "id": "0e042567569dedfe47397ee0dc023917771faefb",
          "message": "Update CRT submodules to latest releases (#1778)\n\nUpdate the CRT submodules to the latest releases.\n\nUpdated libraries:\n- aws-c-auth: v0.9.5 -> v0.10.0\n- Pick up: support imds endpoint override\n([#286](https://github.com/awslabs/aws-c-auth/pull/286))\n- aws-c-http: v0.10.9 -> v0.10.11\n- aws-c-io: v0.26.0 -> v0.26.1\n- aws-checksums: v0.2.8 -> v0.2.10\n- aws-lc: v1.66.2 -> v1.69.0\n- s2n-tls: v1.6.4 -> v1.7.0\n\n\n<details> <summary>Full CRT changelog:</summary>\n\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth a4409b95..5aefd277:\n  > support imds endpoint override (#286)\n  > Prioritizing profile credentials over credential_process when both are present (#288)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http acf31399..0d8e1a93:\n  > Fail http proxy configuration when using SecItem (#551)\n  > [fix] h2 stream manager initial settings not passed correctly & Log the headers (#544)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io d5ad01ce..bfb0819d:\n  > Add PQ-opt-out pref to supported s2n cases (#786)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 270b15ac..1d5f2f1f:\n  > Add flag to disable unknown pragmas on ARM (#111)\n  > Add XXHash algos (#110)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 728811ee..37d86461:\n  > Return correct error value when parsing PKCS7 authenticated attributes fails (#3061)\n  > Use CRYPTO_memcmp instead of OPENSSL_memcmp for tag verification (#3060)\n  > Ensure all signer certificate chains are verified (#3059)\n  > Prepare v1.69.0 (#3049)\n  > Simplify `d2i_PKCS7` by removing redundant BER-to-DER conversion (#3037)\n  > Key state consistency in PQDSA_KEY setter functions (#3040)\n  > Fix error return values for no-op UI_xxx stub functions (#3025)\n  > Update ACVP documentation (#2960)\n  > Retain flag after custom critical extensions check (#3030)\n  > Fix PKCS7 verify content memleak (#3036)\n  > Fix error reporting and document EC explicit params single-cert behavior (#3044)\n  > Various PKCS7 fixups (#3035)\n  > Fix link in README.md (#2945)\n  > Fix FIPS delocator handling of floating-point immediates on aarch64 (#3029)\n  > Prepare v1.68.0 (#3022)\n  > Refactor PQDSA_KEY set_raw functions to use goto-err cleanup (#2993)\n  > Generate Rust Bindings (#2999)\n  > Support WASM/Emscripten (#2959)\n  > Update Ubuntu 24:04 image compiler verification (#3017)\n  > Fix CI: mariadb (#3015)\n  > Miscellaneous CI improvements (#2978)\n  > Fix argument order in `hmac_copy` (#3014)\n  > Fix OPENSSL_memchr per C23 (#3008)\n  > Fix Windows CI: use `cd /d` in run_windows_tests.bat to handle cross-drive paths (#3012)\n  > Fix CI: gcc-4.8 (#3011)\n  > Reject XOF digests in DH_compute_key_hashed\n  > reject zero-sized digests in HKDF EVP_PKEY\n  > evp: disable EVP_PKEY_derive for KEM method\n  > pkcs8: cap ciphertext length before allocating in pkcs8_pbe_decrypt\n  > 1-byte OOB read in EVP_PKEY_asn1_find_str length calculation\n  > evp: fix DSA keygen error-path UAF/double-free\n  > Correct CCM nids in object definition (#2991)\n  > Ensure public key is set before verifying through ML-DSA verify (#2990)\n  > Remove redundant CPython 3.9 integration test (#2996)\n  > Ensure no overflow in signed output length in do_buf (#2988)\n  > Ensure index argument is not negative in ASN1_BIT_STRING_set_bit (#2987)\n  > Add PyOpenSSL integration test (#2992)\n  > Free potential memory before assigning new pointer (#2989)\n  > Support GCC 4.8 for aarch64 (#2964)\n  > Bump bytes from 1.7.1 to 1.11.1 in /tests/ci/lambda (#2983)\n  > Address some CMake findings (#2979)\n  > Update Wycheproof ECDSA test vectors and fix workflow typo (#2972)\n  > Disable SLP vectorizer for FIPS shared library builds on GCC 14+ (#2977)\n  > Nmap build needs liblinear (#2985)\n  > Add method to get type of ML-DSA instance configured under EVP PKEY (#2980)\n  > Fix aws-lc-rs CI job (#2966)\n  > Simplify FIPS conditional in top-level build script (#2976)\n  > Integrate Wycheproof ML-DSA test vectors (#2973)\n  > Bump mysql cluster version (#2967)\n  > Shorten Windows Build Directory Path (#2974)\n  > Add missing env vars to check-vectors workflow step (#2962)\n  > Fix checkout logic for android-omnibus (#2970)\n  > Ensure pkcs7 checks ASN1_TYPE->type (#2968)\n  > Migrate Android Testing to GitHub Actions (#2969)\n  > Adds a new randomness generation API (#2963)\n  > Model Device Farm CI Resources in CDK (#2965)\n  > Remove FIPS counter framework and other tidying up (#2947)\n  > Fix image-build-windows workflow to only push on workflow_call and workflow_dispatch (#2961)\n  > Move md4 out of FIPS module (#2956)\n  > Initial Framework for Using Doxygen to Document Public Header Files (#2908)\n  > openssl-ca command implementation for self-sign certificates (#2937)\n  > Remove AVX conditional from cmake script (#2958)\n  > Enable Hybrid PQ KeyShares by default (#2531)\n  > Add weekly automated check for outdated third-party test vectors (#2933)\n  > Bump urllib3 from 2.6.0 to 2.6.3 in /tests/ci (#2932)\n  > Prepare v1.67.0 (#2952)\n  > Bump FreeBSD testing to v14.2 and v15.0 (#2955)\n  > Fix CMake CI jobs (#2953)\n  > Update patch for nmap. (#2954)\n  > Cleanup pass on Go code in repository (#2951)\n  > Avoid cross-compilation build failure (#2944)\n  > Integrate Wycheproof ML-KEM test vectors (#2891)\n  > Use existing session context if new is actually NULL (#2946)\n  > Import mldsa-native (#2902)\n  > Windows 7 support (#2940)\n  > Remove Kyber completely (#2941)\n  > Use already defined macro for no inline (#2942)\n  > AES-GCM: Add function pointer trampolines to avoid delocator issue (#2919)\n  > Add support for Big Endian in ACVP tool (#2938)\n  > Service Indicator: Add error call trampoline to avoid delocator issue (#2920)\n  > Fix failing Windows Docker image build (#2931)\n  > Rename volatile state/memory to unique state/memory (#2935)\n  > increase timeout for SDE tests (#2936)\n  > Migrate Wycheproof test vectors for ECDSA, RSA PKCS#1, and some more (#2887)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 3276a087..f5e5e830:\n  > chore: rust binding release v0.3.34 (#5707)\n  > chore: add static lists of supported TLS parameters (#5698)\n  > feat(bindings): expose disable_x509_intent_verification API (#5703)\n  > test (integration): add renegotiate rust test (#5689)\n  > test(integration): add rust test for session resumption (#5683)\n  > chore: move s2n-tls-bench to Codebuild (#5693)\n  > chore: update s2n-tls-hyper crates version to 0.1.0 (#5702)\n  > Mark Kyber as unsupported on all LibCrypto variants (#5701)\n  > chore: bump standard MSRV to 1.83 (#5700)\n  > chore: bump to nixpkgs 2025.05 (#5489)\n  > build(deps): update reqwest requirement from 0.12.7 to 0.13.1 in /tests/pcap in the all-cargo-updates group across 1 directory (#5690)\n  > (chore): Rust bindings bump 0.3.33 (#5694)\n```\n\n\n</details>\n\nConfirmed the crate size is under the 10MiB limit (8.3MiB compressed)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-10T10:36:51Z",
          "tree_id": "8aa074215eb0f1357c6bdf9c18daed19542706ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e042567569dedfe47397ee0dc023917771faefb"
        },
        "date": 1773147286851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2926.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4588.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8215.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8013.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8150.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.68359375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2c41aba090af32c8d867b0fe4a67ae82169763a",
          "message": "Fix build failure on macOS (#1785)\n\nFix a platform-specific type casting error surfaced on macOS.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-11T10:40:37Z",
          "tree_id": "813a7ad399f17fbc0a4ee3deee0ce08c0ccfcb0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2c41aba090af32c8d867b0fe4a67ae82169763a"
        },
        "date": 1773233815548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4572.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8411.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8191.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8264.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2100.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2097.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.3125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43618edd0ccfb65c7264eeeca35cab59e4741cbf",
          "message": "CI: Run Clippy on macOS (#1786)\n\nAdd clippy to the macOS workflow. It will help detect issues like #1785\nearly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-12T12:24:24Z",
          "tree_id": "293d67e3c74b0b61d7e55481a4d31228a782d02c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43618edd0ccfb65c7264eeeca35cab59e4741cbf"
        },
        "date": 1773326605142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2895.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.2578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8323.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8111.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8157.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1078.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.046875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a205061c3231ef239d67c6836d1cb94aaaeabb0",
          "message": "Add developer container to support running integration tests, etc. on macOS (#1780)\n\nOn macOS, it is not considered reliable to run the integration tests for\nFUSE. This PR introduces a container for performing development-related\ntasks, but in particular running integration tests.\n\nThis allows developers using a macOS system to run FUSE tests using a\nreal Linux kernel (when using something like Docker Desktop, Colima,\nFinch, etc..).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, developer change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-13T10:23:17Z",
          "tree_id": "97f08ec0d1b4b9c529653eba5a90b5db47d8f6d1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a205061c3231ef239d67c6836d1cb94aaaeabb0"
        },
        "date": 1773405639050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2893.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4591.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8326.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8232.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8050.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 1072.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.4609375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c41baaa3ca29d9f0215573fb3bb9e6303150e9d",
          "message": "Update dev container to support local cache tests depending on loopback fs (#1788)\n\nBefore this change, running integration tests in the container would\nfail as it would not be able to run sudo, create the ext4 filesystem\netc. introduced by #1779.\n\nThis change updates the container to be able to invoke sudo, and adds\nmissing dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dev container change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T14:37:38Z",
          "tree_id": "807ed655a8ee90ed37491395f499f4f382f17ab6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c41baaa3ca29d9f0215573fb3bb9e6303150e9d"
        },
        "date": 1773766601672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4575.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8340.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8040.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8194.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57116c95347e5ff868fd45853f33c26e9dad12ee",
          "message": "Update local cache loop device fs tests with better error handling (#1789)\n\nBefore this change, it was difficult to identify what was going wrong\nwith a test that involved creating a new ext4 filesystem using a loop\ndevice. It might fail simply with \"file not found\" when `sudo` was not\ninstalled.\n\nThis change updates the test to use anyhow in order to capture\nadditional context about what went wrong. The use of anyhow is limited\nto the tests and not the source code.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T15:10:16Z",
          "tree_id": "63e9ff6474a19b6807e1285a90c24f50cc03c892",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57116c95347e5ff868fd45853f33c26e9dad12ee"
        },
        "date": 1773769005516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2898.15234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4616.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8228.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8035.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8251.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2099.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2081.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.81640625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1be83cb7c78a297819cffe35d7782e84e4d3ad19",
          "message": "Bump slackapi/slack-github-action from 2.1.1 to 3.0.1 (#1791)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.1 to 3.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.1</h2>\n<h2>What's Changed</h2>\n<p>Alongside the breaking changes of <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.0\"><code>@v3.0.0</code></a>\nand a <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/\">new\ntechnique</a> to run Slack CLI commands, we tried the wrong name to\npublish to the GitHub Marketplace 🐙 This action is now noted as <a\nhref=\"https://github.com/marketplace/actions/the-slack-github-action\"><strong>The\nSlack GitHub Action</strong></a> in listings 🎶 ✨</p>\n<h3>:art: Maintenance</h3>\n<ul>\n<li>chore: use a unique title for marketplace in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/576\">slackapi/slack-github-action#576</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>chore(release): tag version 3.0.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/577\">slackapi/slack-github-action#577</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1\">https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1</a></p>\n<h2>Slack GitHub Action v3.0.0</h2>\n<blockquote>\n<p>The <code>@v3.0.0</code> release had a hiccup on publish and we\nrecommend using <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.1\"><strong><code>@​v3.0.1</code></strong></a>\nor a more recent version when updating! Oops!</p>\n</blockquote>\n<p>🎽 <strong>Running Slack CLI commands and the active Node runtime,\nboth included in this release</strong> 👟 ✨</p>\n<h3>⚠️ Breaking change: Node.js 24 the runtime</h3>\n<p>This major version updates the GitHub Actions required runtime to <a\nhref=\"https://nodejs.org/en/about/previous-releases\"><strong>Node.js\n24</strong>.</a> Most <a\nhref=\"https://github.com/actions/runner-images?tab=readme-ov-file#software-and-image-support\">GitHub-hosted\nrunners</a> already include this, but self-hosted runners may need to be\nupdated ahead of <a\nhref=\"https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/\">planned\ndeprecations of Node 20 on GitHub Actions runners</a>.</p>\n<h3>📺 Enhancement: Run Slack CLI commands</h3>\n<p>This release introduces a new technique for running <a\nhref=\"https://docs.slack.dev/tools/slack-cli\">Slack CLI</a> commands\ndirectly in GitHub Actions workflows. Use this to install the latest\nversion (or a specific one) of the CLI and execute commands like\n<code>deploy</code> for merges to main, <code>manifest validate</code>\nwith tests, and other <a\nhref=\"https://docs.slack.dev/tools/slack-cli/reference/commands/slack\">commands</a>.</p>\n<p>Gather a token using the following CLI command to store with repo\nsecrets, then get started with an example below:</p>\n<pre><code>$ slack auth token\n</code></pre>\n<h3>🧪 Validate an app manifest on pull requests</h3>\n<p>Check that your app manifest is valid before merging changes:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest</a></p>\n<pre lang=\"yaml\"><code>- name: Validate the manifest\n  uses: slackapi/slack-github-action/cli@v3.0.0\n  with:\ncommand: &quot;manifest validate --app ${{ vars.SLACK_APP_ID }}&quot;\n    token: ${{ secrets.SLACK_SERVICE_TOKEN }}\n</code></pre>\n<h3>🚀 Deploy your app on push to main</h3>\n<p>Automate deployments whenever changes land on your main branch:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/af78098f536edbc4de71162a307590698245be95\"><code>af78098</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/add1a00063f351e4c0e55c3703da81637f03a8be\"><code>add1a00</code></a>\nchore(release): tag version 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/577\">#577</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/2bc9e7a4cd10f4d06ef49b8fa8a11efdc7fb891b\"><code>2bc9e7a</code></a>\nchore: use a unique title for marketplace (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/576\">#576</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5d43dad17bba7ebd47486137b9ab6936fd6bbf4\"><code>c5d43da</code></a>\nchore(release): tag version 3.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/575\">#575</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/963b9796dcc3184602a0aefe2f052d034027bfaf\"><code>963b979</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.14.1 to 7.15.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/574\">#574</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/90b7328a4cea35bd9dc6fc64d7f70e772d6d5876\"><code>90b7328</code></a>\nbuild(deps): bump <code>@​slack/logger</code> from 4.0.0 to 4.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/573\">#573</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e45cb891a61f925570820f137980df2028625fec\"><code>e45cb89</code></a>\nfeat: support slack cli commands with composite action inputs (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/560\">#560</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0aed2c2a70fe17c67bfd489b5dc3d9b410f69f79\"><code>0aed2c2</code></a>\nbuild(deps): bump https-proxy-agent from 7.0.6 to 8.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/572\">#572</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/4795f96c2818074349810cac0abc3bf5437bdc2c\"><code>4795f96</code></a>\nbuild(deps-dev): bump sinon from 21.0.1 to 21.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/571\">#571</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/bd9e2ce619554772120b8cfcbbc7fe4bd2d42a2f\"><code>bd9e2ce</code></a>\nbuild(deps): bump actions/setup-node from 6.2.0 to 6.3.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/569\">#569</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.1...v3.0.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.1&new-version=3.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-17T16:05:49Z",
          "tree_id": "c9ed45fb7b9e1caaa063e173f7c310ae62c7d5a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1be83cb7c78a297819cffe35d7782e84e4d3ad19"
        },
        "date": 1773773777532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2895.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4580.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8339.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8153.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8190.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 718.0703125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7eaeb6717b9ca938c8d8fa14006bcd32c765da6",
          "message": "Update changelogs for v1.22.2 release (#1794)\n\nUpdate changelogs for v1.22.2 release.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-03-20T15:11:04Z",
          "tree_id": "d3517aaf8f5617f8a9ace3424b0acd952f5962f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7eaeb6717b9ca938c8d8fa14006bcd32c765da6"
        },
        "date": 1774027735949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2865.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4582.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8291.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8229.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8102.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 396.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 224.57421875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55d81b6a748372c4e9e4164dfbf80bf02168c257",
          "message": "Update usages of GPG public keys with new rotated key (#1795)\n\nWe have a new GPG public key because the old one will expire soon. In\nthis PR we:\n- Update the usages of the public keys in the documentation with the new\none.\n- Simplify the `docker/Dockerfile` by installing `mount-s3` from AL2023\npackage repository\n\nTesting:\n```\n$ docker build -t mountpoint-s3 docker/\n[+] Building 16.9s (7/7) FINISHED                                                                                                                                                                                                                                              docker:default\n => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                     0.0s\n => => transferring dockerfile: 334B                                                                                                                                                                                                                                                     0.0s\n => [internal] load metadata for public.ecr.aws/amazonlinux/amazonlinux:2023                                                                                                                                                                                                             1.2s\n => [internal] load .dockerignore                                                                                                                                                                                                                                                        0.0s\n => => transferring context: 2B                                                                                                                                                                                                                                                          0.0s\n => CACHED [1/3] FROM public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                0.0s\n => => resolve public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                       0.0s\n => [2/3] RUN dnf upgrade -y &&     dnf install -y mount-s3 &&     dnf clean all                                                                                                                                                                                                        14.9s\n => [3/3] RUN echo \"user_allow_other\" >> /etc/fuse.conf                                                                                                                                                                                                                                  0.6s\n => exporting to image                                                                                                                                                                                                                                                                   0.1s \n => => exporting layers                                                                                                                                                                                                                                                                  0.1s \n => => writing image sha256:3ba80d05a326e4049cfeefb1d09697d977eaebfdcfcce565308e5de293a5f143                                                                                                                                                                                             0.0s \n => => naming to docker.io/library/mountpoint-s3                                                                                                                                                                                                                                         0.0s \n\n$ docker run --rm mountpoint-s3 --version\nmount-s3 1.22.0+1.amzn2023\n```\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nYes (in the release commit) and no.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-20T16:22:45Z",
          "tree_id": "aa7c2c082e5e2d9d5d865e1e51099f70768a366b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55d81b6a748372c4e9e4164dfbf80bf02168c257"
        },
        "date": 1774032092000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2851.453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8240.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8082.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8002.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 271.04296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "813d41a1826d02288912ff7f72f118bedc2dcc64",
          "message": "Update Cargo dependencies (#1797)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-23T11:14:08Z",
          "tree_id": "eeeaf89f1bdf841214f4b0bb48bb4d216727f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813d41a1826d02288912ff7f72f118bedc2dcc64"
        },
        "date": 1774272712376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2890.43359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8326.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8137.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8037.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.32421875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2",
          "message": "Add dev-container environment variable propagation allowlist (#1792)\n\nTo debug an issue, I wanted to use a different logging level in tests.\nThis change adds an allowlist of environment variables to automatically\npass into the dev-container.\n\n### Does this change impact existing behavior?\n\nNo, dev-container change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-23T16:06:04Z",
          "tree_id": "d4a007c7e3899b2a7805e2c8c3578748da154b2e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2"
        },
        "date": 1774290483389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2852.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8393.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 55.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8147.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.04296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd1c93202af0b75eaff505ffeeb08cc283048b4f",
          "message": "Add client error for S3 Express session creation failure (#1793)\n\nThis change introduces a proper S3 client error for when the CRT fails\nto create an S3 Express session, such as when having no authorization to\ndo so.\n\nInstead of a CRT error code, the customer will now see a clear message\n\"Failed to create S3 Express session, see CRT debug logs\".\n\nThis change also updates many tests that were previously testing S3\ngeneral purpose buckets to correctly test S3 Express / directory\nbuckets.\n\n### Does this change impact existing behavior?\n\nYes, it improves S3 Express session creation failure error messages. It\nincludes a call to action to direct the customer to check CRT debug logs\nto help them resolve the issue.\n\nIn the client, it introduces a new error variant.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nGiven the new error variant, the S3 client is a unstable minor version\nbump. (Effectively major.)\n\nFor all other crates and MP itself, a patch version bump has been\napplied, alongside changelog entries. The change is fairly minimal.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T11:22:07Z",
          "tree_id": "88c5ee68d8cdf7f802dbdc0228a84d9dc0e624af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd1c93202af0b75eaff505ffeeb08cc283048b4f"
        },
        "date": 1774618768457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2907.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8241.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8066.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8192.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.3984375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}