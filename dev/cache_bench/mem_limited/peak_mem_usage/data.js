window.BENCHMARK_DATA = {
  "lastUpdate": 1793397983335,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard, Memory-Limited)": [
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
          "distinct": false,
          "id": "b851f704b3a0685b7180e7f064711f565ffb32e0",
          "message": "Fail benchmarks when a memory limit is breached (#1940)\n\nMemory-limited benchmark jobs already report peak RSS breaches in a\nsummary table but still pass. This makes a breach fail the job, after\nthe results have been saved and published.\n\nTesting:\n- `render-mem-summary.sh` over 5 input shapes locally (no results, all\nwithin limit, partial breach, full breach) - correct output and exit\ncode in each.\n- Gate wiring on a real Actions run, 4 cases: a breach fails the job;\n`false` and a skipped render step both pass; a breach still fails when\nan earlier step had already failed.\n- Not covered: a real breaching benchmark run, as `--memory-target` has\na 512 MiB floor.\n\nSupersedes #1935, which was auto-closed when its base branch was\ndeleted. Same change, rebased onto `main`.\n\n### Does this change impact existing behavior?\n\nYes, intentionally: memory-limited benchmark jobs now fail on a breach.\nResults are still saved and published first, and other variants are\nunaffected.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this only changes CI benchmark workflows.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-10-05T13:34:17Z",
          "tree_id": "45533325b67a4c4eda1eda8d5eeacedd1bd3eb9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b851f704b3a0685b7180e7f064711f565ffb32e0"
        },
        "date": 1791217759189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 376.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 378.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 367.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 382.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 403.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 54.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 376.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 366.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 370.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 384.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.90234375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngpil.yoon@gmail.com",
            "name": "Aaron Y.",
            "username": "ziwon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b525122fdc28fb34b8695cdaccf15e3f483f14c5",
          "message": "fix(metrics): poll S3 client metrics periodically (#1957)\n\n**What changed and why?**\n\nS3 CRT client gauges (`s3.client.*`) were sampled only when\n`make_meta_request()` ran. The metrics publisher still flushed every\nfive seconds, but it only refreshed process metrics before `publish()`.\nFor meta requests that last longer than that interval, the CRT gauges\nwere therefore frozen after the first sample.\n\nThis change moves sampling onto the existing publisher cycle:\n\n1. `MetricsSinkHandle::register_poller` stores a `Send + Sync` callback\nin a publisher-lifecycle registry. Registration does **not** go through\nthe shutdown/`recv_timeout` channel, so it cannot reset or delay the\nfive-second wait.\n2. On each timeout and on shutdown, the publisher runs\n`poll_process_metrics()`, then the registered client pollers, then\n`publish()`.\n3. After the object client is built, `run` and the FS examples that\ninstall metrics register a clone of the client. `S3CrtClient` is `Clone`\nvia `Arc`, so the final drain can safely sample after the FUSE session\nends.\n4. The poller registry is shared only by the publisher thread and\n`MetricsSinkHandle`. Dropping the handle joins the final publication and\nthen releases the callbacks and captured client clones; the\nprocess-global metrics recorder does not retain them.\n5. `ObjectClient::poll_client_metrics` is a default no-op, overridden by\n`S3CrtClient`. Mock and other non-CRT clients keep working without\nCRT-specific behavior.\n6. The polling call immediately after `make_meta_request()` is removed.\nMetric names, gauge/histogram types, and changed-value emission behavior\nare unchanged.\n\nFixes #1410\n\n### Does this change impact existing behavior?\n\nYes, in the intended way: `s3.client.*` gauges now update on every\nfive-second publication cycle even when no new meta request is created.\nLong-running requests no longer leave those gauges stuck at the value\nfrom request start. Existing `ObjectClient` implementations inherit the\nnew no-op method and do not need to override it.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Unreleased notes were added for `mountpoint-s3`,\n`mountpoint-s3-fs`, and `mountpoint-s3-client`. Version numbers are left\nfor the next release cut.\n\n### Tests\n\nDeterministic unit tests require no AWS credentials, network access, or\nreal S3 service:\n\n- A registered poller runs on repeated publisher timeouts with no meta\nrequests, each poll occurs before the matching `publish()`, and shutdown\nperforms one final poll and publication.\n- Registering pollers during the wait does not reset or stop the cadence\nand does not trigger an immediate publication.\n- Dropping `MetricsSinkHandle` releases registered callbacks even while\nthe metrics sink remains alive.\n- `S3CrtClient::poll_client_metrics`, constructed with `NoSigning`,\nemits the existing `s3.client.*` gauges under a local recorder.\n- Mock `ObjectClient::poll_client_metrics` remains a no-op.\n\nAfter rebasing onto current upstream `main`, `make pre-pr-check`\nsucceeded: formatting, `cargo check --all-targets --all-features`,\nrepository-standard clippy with warnings denied, and 941 nextest tests\npassed with 1 skipped. This PR does **not** include an end-to-end\nAWS/`--log-metrics` mount run.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Aaron Y. <yngpil.yoon@gmail.com>",
          "timestamp": "2026-10-06T10:42:58Z",
          "tree_id": "ffb0700ad0d89c5b3a062df477d12b641f3029e9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b525122fdc28fb34b8695cdaccf15e3f483f14c5"
        },
        "date": 1791293853852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 387.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 377.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 382.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 362.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 370.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 389.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 386.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 392.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 367.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.46484375,
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
          "id": "77bd88d56091f47b24b06f8fd0bb05a20ea6d598",
          "message": "Bound the CRT thread join at exit and skip cleanup on timeout (#1978)\n\n**Problem:** In #1850 we have added CRT cleanup at exit, but this may\ncause a process hang in some cases during shutdown if CRT threads are\nstill running.\n\n**Solution**: Add 1 second timeout to wait for CRT threads to join\ninstead of waiting indefinitely\n\n**Testing**: Added 2 unit tests that re-produced the hang. They are\ngreen after the fix.\n\n### Does this change impact existing behavior?\n\nProcesses that exit while a CRT client is still alive now exit after up\nto 1 second, without CRT cleanup, instead of hanging. Processes that\ndrop all their clients before exit are unaffected. No public API change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry under `Unreleased` in\n`mountpoint-s3-crt/CHANGELOG.md`. It needs a patch version bump of\n`mountpoint-s3-crt` when released.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T11:38:31Z",
          "tree_id": "689fb38fe0d308d3c5a9fbaf8e181397ba38871d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77bd88d56091f47b24b06f8fd0bb05a20ea6d598"
        },
        "date": 1791295863477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 380.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 381.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 370.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 368.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 392.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 367.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 360.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 385.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 368.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.640625,
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
          "id": "ababef079bd81106c9dce644f797f5ba3cd34cf9",
          "message": "Update changelog in preparation of `mountpoint-s3-crt` release (#1979)\n\nUpdate the CHANGELOG in order to release the `mountpoint-s3-crt` crate:\n\n* `mountpoint-s3-crt` - `v0.16.2`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T13:40:15Z",
          "tree_id": "6906dac3eecb937361d343b2836ea54618e541be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ababef079bd81106c9dce644f797f5ba3cd34cf9"
        },
        "date": 1791303558539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 383.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 382.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 382.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 375.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 370.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 369.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 369.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 368.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 371.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.6328125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e373e4159606f66ca07edf214a4fead004153e4b",
          "message": "Update release workflow to create a git tag (#1969)\n\nUpdate the release workflow to be manually triggered with the intended\nrelease version number.\nThis now creates and pushes the git tag to the repository, as well as\ncreating a github release.\n\nExample run:\nhttps://github.com/muddyfish/mountpoint-s3/actions/runs/36004359806/job/107648757049\nExample release:\nhttps://github.com/muddyfish/mountpoint-s3/releases/tag/mountpoint-s3-1.24.0\n\n### Does this change impact existing behavior?\n\nChanges release.yml to be ran on a manual workflow rather than on a tag\npush.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-07T08:54:40Z",
          "tree_id": "2b0e2a928b10a1af574c80c9c8e222570a20f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e373e4159606f66ca07edf214a4fead004153e4b"
        },
        "date": 1791372148255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 369.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 387.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 366.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 367.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 383.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 368.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 374.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 373.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 394.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.05859375,
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
          "id": "1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8",
          "message": "Send If-Match on incremental upload at offset 0 (#1970)\n\nFix inconsistency when during incremental upload we do not attach\n`If-Match` ETag header (when ETag is known) at offset 0.\n\n### Does this change impact existing behavior?\n\nYes. If there was concurrent modification file operation will fail with\nEIO. This now matches behaviour for `offset > 0`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-07T09:38:56Z",
          "tree_id": "2eb04ccdd5ac2df67b8acc94aaefd2a84bda81fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8"
        },
        "date": 1791375544452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 377.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 377.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 378.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 378.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 378.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 387.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 390.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 365.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 394.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.15234375,
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
          "id": "49ba6c8e067aa1c584a1c7008590e5741235ddb0",
          "message": "Bump taiki-e/install-action from 2.87.17 to 2.87.21 (#1977)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.17 to 2.87.21.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.21</h2>\n<ul>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.129.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.3.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.19.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.13.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.7.0.</p>\n</li>\n</ul>\n<h2>2.87.20</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.14.0.</p>\n</li>\n</ul>\n<h2>2.87.19</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.146.</p>\n</li>\n</ul>\n<h2>2.87.18</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.84.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.12.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.3.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4cef1412cce204788f482e778a0b9187f9626a29\"><code>4cef141</code></a>\nRelease 2.87.21</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/133135e7fd1570baff8964a044bcf0d2147fc57a\"><code>133135e</code></a>\nUpdate <code>wasm-bindgen@latest</code> to 0.2.129</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8589241798155a8c0c86c7c0ae4f642a90a698e1\"><code>8589241</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/95e5bbc4a58633e12ebefd904f798c1eb76c18f7\"><code>95e5bbc</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/48ce11d4f97676e64a76a3dc4b83a4f59245b702\"><code>48ce11d</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/368e6617a899743920fa751bb5d414b6f0352cc0\"><code>368e661</code></a>\nUpdate wasm-bindgen manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/57f22a457e27d10a13bfcaee43e03dff1c20dedd\"><code>57f22a4</code></a>\nUpdate <code>uv@latest</code> to 0.12.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/888634e2727c1021a94ebfac9a2d266109a366b8\"><code>888634e</code></a>\nUpdate typos manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3bcab01fb9790f533b19647e60396514a9d08f96\"><code>3bcab01</code></a>\nUpdate protoc-gen-connect-openapi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/947e90eb285641d8325cc2d55ae24bd51d5c6b8a\"><code>947e90e</code></a>\nUpdate <code>mise@latest</code> to 2026.9.13</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.17...v2.87.21\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.17&new-version=2.87.21)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-08T11:21:48Z",
          "tree_id": "98f3c2ea75860030fbdf62a8581b5634dd8927aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49ba6c8e067aa1c584a1c7008590e5741235ddb0"
        },
        "date": 1791467376234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 369.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 373.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 403.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 389.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 380.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 54.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 379.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 66.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 377.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 399.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 371.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.890625,
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
          "id": "27f32de4e0b5d97797bf54a00a940c3f3e4065fc",
          "message": "Fix ruff lint failures from new 0.17 default rule set (#1983)\n\nruff 0.17.0 expanded its default lint selection from `E4,E7,E9,F` to\nseveral hundred rules. CI runs `uvx ruff` unpinned, so the release broke\nthe Benchmark and Packaging script checks without any change on our\nside.\n\nApply the autofixes for the newly-enabled rules:\n\n- UP017: use the `datetime.UTC` alias instead of `timezone.utc`.\n- I001: `tomllib` now sorts into the stdlib import block.\n- RUF100: drop the `# noqa: DTZ005`, unused since DTZ is not enabled.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-12T15:31:22Z",
          "tree_id": "39ad30ae58ccd869bda2936dccdb3113dccac4fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27f32de4e0b5d97797bf54a00a940c3f3e4065fc"
        },
        "date": 1791827950836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 370.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 370.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 369.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 371.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 365.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 371.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 386.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 383.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 380.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.94140625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cc1a6ded1d2bfcdbb393ae6540b66d306ee182a2",
          "message": "Clarify mountpoint can overwrite objects (#1982)\n\nDocuments that Mountpoint can replace an existing object even when\n--allow-overwrite is not set: existence is only checked at file-open\ntime, so an object uploaded to the bucket after that check may be\nreplaced when the write completes. Metadata caching (negative cache)\nwidens this window.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2026-10-12T16:01:13Z",
          "tree_id": "21302bac8198a6e3315040305f42431b9d468ff9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc1a6ded1d2bfcdbb393ae6540b66d306ee182a2"
        },
        "date": 1791829610806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 426.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 364.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 365.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 383.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 384.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 383.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 384.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 386.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 378.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.3671875,
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
          "id": "4f6866c101cae19d1e99a1e89c260c646b4730f6",
          "message": "Bump hydra-core from 1.3.4 to 1.3.7 in /benchmark (#1981)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.4\nto 1.3.7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.7</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state, process-environment mutation, and logging formatters.\nThese checks are not a complete security boundary. (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3442\">#3442</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7</a></p>\n<h2>Hydra 1.3.6</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blacklist to Python logging configuration. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6</a></p>\n<h2>Hydra 1.3.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Warn Hydra 1.3 users relying on Hydra 1.1 behavior (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5\">https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.7/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.7 (2026-09-14)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state,\nprocess-environment mutation, and logging formatters. These checks are\nnot a\ncomplete security boundary. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3442\">#3442</a>)\n1.3.6 (2026-08-29)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blocklist to Python logging configuration.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<h1>1.3.5 (2026-08-06)</h1>\n<h3>API Change (Renames, deprecations and removals)</h3>\n<ul>\n<li>Warn Hydra 1.3 applications that rely on Hydra 1.1 compatibility\nbefore\nupgrading to Hydra 1.4. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3334\">#3334</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81715a5a258ae2657369344f4e3523e5fbabb2af\"><code>81715a5</code></a>\nPrepare hydra-core 1.3.7 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/4720dfca2bde27fa140ec287a05709668fbdf168\"><code>4720dfc</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/27df7550bfd6582a111df148ef96de499474c243\"><code>27df755</code></a>\nPrepare Hydra 1.3.6 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ff3e4dba890c29a21d8c2bb867ee87d37ccf21d0\"><code>ff3e4db</code></a>\nHarden logging target resolution on 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3420\">#3420</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/aa102eaabfa8c93f481ac4938dd7a34203c58d24\"><code>aa102ea</code></a>\nHarden deferred instantiate dispatch on 1.3</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2c82bbb3f39603b336cb852461739fdf7a38798a\"><code>2c82bbb</code></a>\nBackport instantiate target authorization hardening to 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3413\">#3413</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/06613cef4c44bf3473b92ecde533487647784b0b\"><code>06613ce</code></a>\nBump Hydra to 1.3.6.dev0</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/51647a2183512bc4e5556842c494e7efdbd75375\"><code>51647a2</code></a>\nRelease Hydra 1.3.5</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/445b0a7505c0c07a7f0bd3dde3baf4811c2fea27\"><code>445b0a7</code></a>\nWarn Hydra 1.3 users relying on 1.1 compatibility (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.4&new-version=1.3.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-12T16:53:49Z",
          "tree_id": "2cbe058a18d7d75fdf61ce5f778dcc719a9f85bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f6866c101cae19d1e99a1e89c260c646b4730f6"
        },
        "date": 1791834331262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 385.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 367.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 371.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 367.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 368.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 373.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 357.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 421.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 366.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.82421875,
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
          "id": "2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0",
          "message": "Bump taiki-e/install-action from 2.87.21 to 2.87.26 (#1984)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.21 to 2.87.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.26</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.2.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.3.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.0.0.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 1.21.0.</p>\n</li>\n</ul>\n<h2>2.87.25</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.23.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.2.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.10.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.60.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-semver-checks@latest</code> to 0.51.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.1.</p>\n</li>\n</ul>\n<h2>2.87.24</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.59.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-leptos@latest</code> to 0.3.11.</p>\n</li>\n<li>\n<p>Update <code>cargo-insta@latest</code> to 1.49.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.0.</p>\n</li>\n</ul>\n<h2>2.87.23</h2>\n<ul>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.261.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.22.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.75.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.1.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.28.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.0.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.9.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f7e5d7c961414b23f5b25b2da9294395d08513ad\"><code>f7e5d7c</code></a>\nRelease 2.87.26</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/148b70c8533f32f0f67928d48f6234c224cc2717\"><code>148b70c</code></a>\nUpdate <code>tombi@latest</code> to 1.7.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9856be60d227976dcbe71f75a36a857c6bf3504a\"><code>9856be6</code></a>\nUpdate <code>prek@latest</code> to 0.5.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/246da9e6f2857c0c408cc9b590117673cd74d06e\"><code>246da9e</code></a>\nUpdate <code>mise@latest</code> to 2026.10.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8ec05a70c3252cd782c8c266ee7c57fdfa6b0699\"><code>8ec05a7</code></a>\nUpdate <code>kache@latest</code> to 1.0.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a5ed626e494481910920bbdee016db18f33bf1df\"><code>a5ed626</code></a>\nUpdate <code>hyperfine@latest</code> to 1.21.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/183e4297cca2404691e9380e1307288dced5c82a\"><code>183e429</code></a>\nRelease 2.87.25</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5e241e4899f64a7ba9011f0c3a46f591b6527640\"><code>5e241e4</code></a>\nUpdate <code>uv@latest</code> to 0.12.23</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/126791b91b3ba2303cb850bbdb6943156fe7c71b\"><code>126791b</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/35ba21c90f3f48ed80e4934a494a422e17488157\"><code>35ba21c</code></a>\nUpdate prek manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.21...v2.87.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.21&new-version=2.87.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:20:46Z",
          "tree_id": "570e1562229933fcc5317a95493cf69da0956e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0"
        },
        "date": 1791918660629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 372.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 375.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 365.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 382.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 364.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 385.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 368.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 384.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 383.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.27734375,
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
          "id": "06757889535392d04f03b7b7e676983716700768",
          "message": "Update cargo dependencies (#1987)\n\nIn particular, update `rustls` to 0.23.46 to address\n[RUSTSEC-2026-0347](https://rustsec.org/advisories/RUSTSEC-2026-0347),\n[RUSTSEC-2026-0348](https://rustsec.org/advisories/RUSTSEC-2026-0348),\nand\n[RUSTSEC-2026-0349](https://rustsec.org/advisories/RUSTSEC-2026-0349).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T08:53:11Z",
          "tree_id": "bec0d423d4ab5dd6d059e993e27e4eec237f4346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06757889535392d04f03b7b7e676983716700768"
        },
        "date": 1792063580526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 378.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 354.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 362.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 371.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 375.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 385.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 395.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 381.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 369.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.55859375,
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
          "id": "372450bcac90421f5ab8136550bfac2381b9b081",
          "message": "Add code review guidelines (#1986)\n\nAdd doc/REVIEW_GUIDELINES.md, which collects what reviewers look for in\npull requests: severity, formatting and comment style, PR hygiene,\nchangelog and versioning, file system semantics, errors and logging,\nconcurrency, performance and memory, unsafe code and FFI, configuration\nand metrics, tests, and dependencies. It mostly consolidates existing\nguidance from CONTRIBUTING.md and SEMANTICS.md and conventions already\nfollowed in review.\n\nCONTRIBUTING.md now asks contributors to review their change against the\nguidelines before opening a pull request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T12:52:17Z",
          "tree_id": "8ed667694bc6da4006937c670cf1733765d5f04d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/372450bcac90421f5ab8136550bfac2381b9b081"
        },
        "date": 1792078055540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 381.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 371.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 365.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 384.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 369.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 425.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 371.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 371.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 371.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.3125,
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
          "id": "5cc3445f94edb508faf05f2b28ef5f99bcb768af",
          "message": "Bump actions/download-artifact from 8.0.1 to 8.0.2 (#1992)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 8.0.1 to 8.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update the readme by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/473\">actions/download-artifact#473</a></li>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Update <code>@​actions/artifact</code> to 6.3.1 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n<li>Prepare download-artifact v8.0.2 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/493\">actions/download-artifact#493</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2\">https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/9000827ccba6bdab643e8b6fd33ac0654aef8333\"><code>9000827</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/493\">#493</a>\nfrom actions/tunc-d-prepare-download-v8-0-2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e455989ae00f5bdd4054f05d3e972c6bf8a62dc5\"><code>e455989</code></a>\nPrepare download-artifact v8.0.2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/a00b90c4a2f01d73a8c89552caabca6ea3b43137\"><code>a00b90c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/492\">#492</a>\nfrom actions/tunc-d-download-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/29bb7ce6af5345aeab5bb4774ce7249ee3ccc27f\"><code>29bb7ce</code></a>\nUpdate <code>@​actions/artifact</code> to 6.3.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/484a0b528fb4d7bd804637ccb632e47a0e638317\"><code>484a0b5</code></a>\nUpdate the readme (<a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/473\">#473</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=8.0.1&new-version=8.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T09:12:34Z",
          "tree_id": "e6120675afa7de292698398a8e829cee39d135c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cc3445f94edb508faf05f2b28ef5f99bcb768af"
        },
        "date": 1792410854893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 364.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 370.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 370.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 384.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 378.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 387.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 62.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 369.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 372.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 366.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.76953125,
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
          "id": "81dc534ca5cc489cf18d5a34d672e1a95d354605",
          "message": "Bump actions/upload-artifact from 7.0.1 to 7.0.2 (#1991)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 7.0.1 to 7.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Updates <code>@​actions/artifact</code> to v6.3.1.</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/821\">actions/upload-artifact#821</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2\">https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cf430e030ddbb5b0abf93d22962f4752f3646cd9\"><code>cf430e0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/822\">#822</a>\nfrom actions/tunc-d-prepare-upload-v7-0-2</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/c2acdedd35a8824a1552c7137f8c18288c3ea469\"><code>c2acded</code></a>\nchore: prepare v7.0.2 release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/4687c1bbaa0a58abb517d90b4bbade6754c80c1a\"><code>4687c1b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/821\">#821</a>\nfrom actions/tunc-d-upload-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8cbe1bebdb858105d8fdd88f81404d4de4595719\"><code>8cbe1be</code></a>\nBump <code>@​actions/artifact</code> to 6.3.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=7.0.1&new-version=7.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:31Z",
          "tree_id": "57a72ec72e13e2df516584a57cedd49fb9101275",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81dc534ca5cc489cf18d5a34d672e1a95d354605"
        },
        "date": 1792419472316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 371.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 366.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 61.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 376.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 366.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 370.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 376.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 66.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 376.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 366.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 375.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.72265625,
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
          "id": "982d5c0933c54c785087407f47bbbef7cbf5e6be",
          "message": "mock-client: align checksum behaviour with S3 (#1988)\n\nAlign the mock client's checksum behaviour with S3:\n\n- Uploads without an additional checksum (PutObject, multipart upload\nwithout trailing checksums, and appends that create a new object) now\nstore S3's default full-object CRC64NVME checksum.\n- An append without a checksum is treated as CRC64NVME. It is accepted\non objects with a CRC64NVME checksum (or none) and rejected with\n`InvalidChecksumType` otherwise.\n- `MockGetObjectResponse::get_object_checksum` now returns\n`DidNotRequestChecksums` unless the request enabled checksum mode,\nmatching `S3CrtClient`. It returns an empty checksum for a ranged GET\nthat does not cover the whole object.\n\n`write_checksums_test` now asserts the default CRC64NVME checksum for\nuploads without checksums, on both the mock and S3, instead of ignoring\nit.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint's file system behaviour. The `MockClient`\n(`mock` feature of `mountpoint-s3-client`) changes behaviour: callers of\n`get_object_checksum` must now enable checksum mode on the GET, and\nobjects uploaded without checksums now report a CRC64NVME checksum.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry describing the mock client\nchanges. The crate is already at an unreleased patch version (0.22.2).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-20T13:34:14Z",
          "tree_id": "1e9aca50df41a802434807c0b686726724371ff7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/982d5c0933c54c785087407f47bbbef7cbf5e6be"
        },
        "date": 1792512328916,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 369.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 367.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 369.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 406.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 380.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 369.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 366.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 382.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 378.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.65625,
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
          "id": "9336fd883f6838b15f19aef80bb0f721b369eed4",
          "message": "Run CI on pushes and PRs to feature branches (#1997)\n\nLong-lived feature branches (`feature/**`) should get the same CI as\n`main`. Tests and the PR integration tests already run on PRs to any\nbranch, but some workflows only run for `main`:\n\n- Crate checks and packaging now also run on PRs to feature branches.\n- Tests, integration tests, crate checks and packaging now also run on\npushes to feature branches, so that each merge into them (including\nmerges from `main`) is tested.\n\nScheduled runs, benchmarks and stress tests stay `main`-only. Benchmarks\nand stress tests are still available on feature-branch PRs through their\nlabels.\n\n### Does this change impact existing behavior?\n\nNo. Runs for `main`, PRs to `main` and the merge queue are unchanged.\nExisting feature branches pick up the new triggers only once they merge\n`main`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T18:44:13Z",
          "tree_id": "5d21527e4ba2bee6e55fc7a8b8cf52fe6f8ec696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9336fd883f6838b15f19aef80bb0f721b369eed4"
        },
        "date": 1792620524661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 364.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 59.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 387.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 380.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 383.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 375.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 379.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 374.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 359.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 366.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.3046875,
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
          "id": "fb36799638c268ffd7d7267e936b255e203fe1df",
          "message": "Extract `MockBucket` from `MockClient` (#1989)\n\nExtract the in-memory bucket model of `MockClient` into a new\n`MockBucket`.\n\n`MockBucket` owns the bucket state (objects, in-progress uploads,\noperation counts) and serves HeadObject, ListObjectsV2, DeleteObject and\nRenameObject synchronously. `MockClient` becomes a view over an\n`Arc<MockBucket>` that adds the client-side behaviour: part sizes,\nbackpressure, and the `ObjectClient` interface. A bucket can then be\nshared between a `MockClient` and other in-memory test backends without\ngoing through `ObjectClient`, for example a metadata-only fake for the\nfile system's superblock, so that tests exercising the superblock can\nrun on synchronous operations.\n\nThe configuration is split the same way. `MockBucketConfig` (name,\nlisting order, rename support) builds a `MockBucket`. `MockDataConfig`\n(part size, backpressure, read window checks) configures a `MockClient`\nover an existing bucket with `MockClient::with_bucket`.\n`MockClientConfig` keeps its API and combines both.\n\n### Does this change impact existing behavior?\n\nNo. This only affects test-support code under the `mock` feature of\n`mountpoint-s3-client`. The existing `MockClient` and `MockClientConfig`\nAPIs and their behaviour are unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry for the new public\n`MockBucket`, `MockBucketConfig`, `MockDataConfig`,\n`MockClient::with_bucket` and `MockClient::mock_bucket`. No version\nchange: these are additions, and v0.22.2 is already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T21:21:17Z",
          "tree_id": "b15590ec69e2ff0a11cc962d202eb1c3d68af7dd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb36799638c268ffd7d7267e936b255e203fe1df"
        },
        "date": 1792628042104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 368.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 377.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 384.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 374.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 390.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 371.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 372.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 366.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 386.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.7265625,
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
          "distinct": false,
          "id": "b36809b56455bf2b1d8c63a7fea9f963a4ee71d3",
          "message": "Narrow the superblock's S3 dependency to a `MetadataClient` interface (#1998)\n\nNarrow the file system's superblock to the S3 metadata operations it\nactually issues, behind a new `MetadataClient` trait, and run the\nsuperblock's slow, deterministic tests (shuttle tests and reftests) on\nan in-memory implementation of it.\n\nThe superblock only issues HeadObject, ListObjectsV2, DeleteObject and\nRenameObject, and only reads a few response fields. `Superblock<OC:\nObjectClient>` becomes `Superblock<M: MetadataClient>`, an interface\nshaped after exactly that: plain request parameters (rename takes\n`overwrite` instead of precondition params), and small result types\n(`HeadInfo`, `ListPage`) with only the fields the superblock uses. Every\n`ObjectClient` implements `MetadataClient` through a blanket\nimplementation that converts its results, so production code paths are\nunchanged.\n\n`MetadataError` classifies the failures the superblock handles\nspecifically (not found, precondition failed, not implemented, key too\nlong) and keeps the client error as its source. It is transparent for\n`Display` and `source()`, and delegates `ProvideErrorMetadata`, so logs\nand error metadata are unchanged. The kinds don't depend on\n`mountpoint-s3-client` error types, so other clients can classify their\nown errors.\n\n`InMemoryMetadata` (new `mock` feature, enabled for the crate's own\ntests) serves the interface synchronously from a `MockBucket` (#1989),\nwhich can be shared with a `MockClient` serving the data path.\nOperations complete on the first poll, without threads or I/O:\n\n* the superblock shuttle tests use it directly, so shuttle only\nschedules at the superblock's own synchronization points;\n* the reftest harness builds its file system with the superblock on\n`InMemoryMetadata` and the data path on `MockClient`, over the same\nbucket. Runtime is unchanged (the mutations reftest is within 2-4%).\n\n### Does this change impact existing behavior?\n\nNo. The `Superblock` bounds are relaxed from `ObjectClient + Send +\nSync` to `MetadataClient`, which every such client implements, so\nexisting uses compile and behave as before. Errors keep the same\ndisplay, source chain and error metadata.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-fs` changelog entry for the new public\n`MetadataClient` interface and the `mock` feature with\n`InMemoryMetadata`. No version change: these are additive, and v0.11.1\nis already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T15:39:59Z",
          "tree_id": "1561f9d5314b778c198deb6a377dda2f71428ac9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b36809b56455bf2b1d8c63a7fea9f963a4ee71d3"
        },
        "date": 1792693175884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 375.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 373.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 370.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 376.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 371.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 369.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 386.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.53515625,
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
          "id": "9e23c24e5962d249ef06370124309d3e52661b33",
          "message": "Restrict FUSE test mounts to the user running the tests (#2000)\n\nThe FUSE test sessions mounted with `allow_other`, so any process on the\nhost could open files in the test file systems. Other processes, such as\nfile scanners, can then interfere with the tests: if one opens a file\nfor reading just after a test closes it, Mountpoint correctly rejects\nthe test's next open of that file for writing with `EPERM` (a file can't\nhave a reader and a writer at the same time, see SEMANTICS.md). That\nmade tests such as `rename_append_mock`, `read_errors_test_mock` and\n`reftests::fuse::proptest_fuse` fail intermittently, more often under\nload.\n\nThis change mounts the test sessions without `allow_other` and with the\nmatching owner-only session ACL, as `mount-s3` does by default. The\nkernel then rejects accesses from other users, root included, and the\ntests remain the only clients of their file systems.\n\n### Does this change impact existing behavior?\n\nNo. Only the test harness changes; Mountpoint's behavior is unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test-only change, no published code is affected.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T16:47:08Z",
          "tree_id": "a048439bd443814faa8b72fdea91aca20e6a6c32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9e23c24e5962d249ef06370124309d3e52661b33"
        },
        "date": 1792697923733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 391.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 404.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 366.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 382.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 363.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 385.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 384.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 369.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 368.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.4609375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e",
          "message": "Update dependencies to fix security vulnerabilities (#2008)\n\nUpdates ctutils from 0.4.3 to 0.4.6 via `cargo update -p ctutils`.\n\nTemporarily adds RUSTSEC-2026-0387 (crypto-bigint) to deny.toml ignore\nlist - this is a pre-existing issue on main, blocked on AWS SDK upstream\nreleasing a version with crypto-bigint 0.7.x.\n### Does this change impact existing behavior?\n\nNo. Security patch only, no API or behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-26T15:25:34Z",
          "tree_id": "7531fded5baaca215c2865e5aab50330dcdbde7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e"
        },
        "date": 1793036927916,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 358.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 350.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 371.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 381.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 391.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 362.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 383.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 394.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 368.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.109375,
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
          "distinct": false,
          "id": "e6e4f739c460f5ed356db01df673de220937da5f",
          "message": "Re-enable jemalloc background threads in the background mount process (#1999)\n\n`mount-s3` configures jemalloc with `background_thread:true`, so that\npage purging runs on jemalloc's own threads rather than on the threads\nthat free memory. jemalloc turns its background threads off in a forked\nchild, though, so a mount in background mode (the default, without\n`--foreground`) ran without them, and only foreground mounts had them.\nIn background mode, freed memory was returned to the operating system\n(`madvise`) on the threads that freed it, the ones serving file system\nrequests and S3 transfers, which is what the setting is meant to avoid.\n\nThis change checks whether background threads are enabled before forking\nand, if so, turns them back on in the child before it does anything\nelse, using jemalloc's `background_thread` `mallctl` control. If that\nfails, the mount fails, as a foreground mount does when jemalloc can't\nstart its background thread.\n\njemalloc's background threads can write error messages directly to\nstderr. The background process used to close stdin, stdout and stderr\nonce mounted, so files and sockets opened later could reuse those\ndescriptors and receive such writes. It now points them to `/dev/null`\ninstead.\n\nA new test checks that the mount process has jemalloc background threads\nin both background and foreground mode.\n\n### Does this change impact existing behavior?\n\nBackground-mode mounts now run with jemalloc background threads, like\nforeground mounts. As a result, memory freed after a workload is\nreturned to the operating system gradually by those threads rather than\nimmediately on the thread that freed it: this is the intended behavior\nof the setting, and matches `--foreground` mounts. A background mount\nnow fails if those threads can't be started. Its standard streams are\nredirected to `/dev/null` rather than closed. No CLI or configuration\nchanges. Setting `background_thread:false` through `_RJEM_MALLOC_CONF`\nstill disables them.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in `mountpoint-s3/CHANGELOG.md` under Unreleased\n(v1.24.1). No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-27T15:50:50Z",
          "tree_id": "8c9d0bf566d36d183adb4c0be5bde0a80bcc9873",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6e4f739c460f5ed356db01df673de220937da5f"
        },
        "date": 1793127499303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 387.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 372.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 384.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 371.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 385.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 384.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 385.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 373.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 370.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.890625,
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
          "id": "2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d",
          "message": "Bump taiki-e/install-action from 2.87.28 to 2.87.29 (#2007)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.28 to 2.87.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.29</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.31.0.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.262.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.1.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.172.</p>\n</li>\n<li>\n<p>Update <code>osv-scanner@latest</code> to 2.7.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.11.</p>\n</li>\n<li>\n<p>Update <code>mdbook-d2@latest</code> to 0.3.9.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.13.0.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.2.1.</p>\n</li>\n<li>\n<p>Update <code>just@latest</code> to 1.59.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.63.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-crap@latest</code> to 0.8.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.12.0.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8cca0918f8471c33515202b73f56ab27f2bed283\"><code>8cca091</code></a>\nRelease 2.87.29</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/fc26824601b40bd3b26712c48942016e2b2d12f6\"><code>fc26824</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5018b2ebebbb2657068e91071ea73d9a53a44f2d\"><code>5018b2e</code></a>\nUpdate <code>zizmor@latest</code> to 1.31.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d0e52041f440d731eae552c575c81c4cccd601c8\"><code>d0e5204</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/517774f2ae949bb5d89258edba4466e75f1a33be\"><code>517774f</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.262.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4bc69b1c8214eb6efb50b217dfb04ae04d8af1f5\"><code>4bc69b1</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0470a3f16345a16a36a8b4b51fd72f0de5cc6b5b\"><code>0470a3f</code></a>\nUpdate <code>uv@latest</code> to 0.13.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7a2b747eb5f89f888d956c73464777912a182a35\"><code>7a2b747</code></a>\nUpdate <code>trivy@latest</code> to 0.76.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7efb5337f67975eb612c46a52d9c7790a5829f97\"><code>7efb533</code></a>\nUpdate <code>tombi@latest</code> to 1.8.4</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e5d37d6fd4d56d59f3bdc428d4138afa60276954\"><code>e5d37d6</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.172</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.28...v2.87.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.28&new-version=2.87.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T09:45:55Z",
          "tree_id": "a43a4984b96baf2ec7f6d9935a8ca8c5660db69f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d"
        },
        "date": 1793189348032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 386.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 403.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 389.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 388.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 372.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 385.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 66.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 371.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 412.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 368.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.20703125,
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
          "distinct": false,
          "id": "59c7bbc1843652ccd239ef8a9235e56ad1842774",
          "message": "Update cargo dependencies (#2009)\n\nRun cargo update to pick up in particular `crypto-bigint v0.7.10` which\naddresses RUSTSEC-2026-0387.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-28T10:56:19Z",
          "tree_id": "7fa69936bf6b5f0af7c779be06b559d490744c43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59c7bbc1843652ccd239ef8a9235e56ad1842774"
        },
        "date": 1793193652476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 370.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 390.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 389.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 375.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 377.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 372.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 385.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 44.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 386.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 372.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.2265625,
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
          "id": "36b537e5f5e439bdd4f942746e02d86f8851ae48",
          "message": "Bump hydra-core from 1.3.7 to 1.3.8 in /benchmark (#2011)\n\nBumps [hydra-core](https://github.com/hydra-ecosystem/hydra) from 1.3.7\nto 1.3.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.8</h2>\n<h3>Bug fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.8/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.8 (2026-10-25)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/004658aa49f466982433dded1e4f413c5fd35da8\"><code>004658a</code></a>\nClarify the Hydra 1.3.8 security release note</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2f20addd723d2f07eff55cae63e7df5b3170059d\"><code>2f20add</code></a>\nPrepare Hydra 1.3.8 security release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/de5554320c17cd2d974492c03d0b1456adb4a8ef\"><code>de55543</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/39f3b31ae38a44fa3ba9f50fe5859265b3bbaa10\"><code>39f3b31</code></a>\nPrepare Ray launcher 1.2.2 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ed11e57534d93a7e16d7dd1a42665f02859bb4fb\"><code>ed11e57</code></a>\nBackport the Ray version resolver fix to Hydra 1.3 (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3567\">#3567</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d620c0b2b72838a20ff634a49e5cf19b82e5a66d\"><code>d620c0b</code></a>\nUpdate Hydra 1.3 package metadata after repository transfer</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/35cd89dfd67ca1718c33cc9b783529804b9244c7\"><code>35cd89d</code></a>\nSupport publishing 1.3 plugins</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/8429daa0fa1212e57240de5613d7ec74380705e8\"><code>8429daa</code></a>\nPrepare hydra-optuna-sweeper 1.3.0 release</li>\n<li>See full diff in <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.7...v1.3.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.7&new-version=1.3.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T11:41:00Z",
          "tree_id": "d0e1d32ab40a68581cd558f77a859cb6e1f6b8ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36b537e5f5e439bdd4f942746e02d86f8851ae48"
        },
        "date": 1793197170410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 388.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 369.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 61.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 387.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 385.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 373.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 371.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 389.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 390.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 381.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.234375,
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
          "distinct": false,
          "id": "f0b0e02cbf2a37e912697e5cd4b8830c3ededa04",
          "message": "Update CRT submodules to latest releases (#2010)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.0` -> `v1.0.2`\n* `aws-c-common` `v1.0.1` -> `v1.0.5`\n* `aws-c-http` `v1.0.0` -> `v1.1.1`\n* `aws-c-io` `v1.0.0` -> `v1.1.1`\n* `aws-c-s3` `v1.1.3` -> `v1.5.0`\n* `aws-c-sdkutils` `v1.0.0` -> `v1.0.1`\n* `aws-checksums` `v1.0.0` -> `v1.0.1`\n* `aws-lc` `v5.9.0` -> `v5.12.0`\n* `s2n-tls` `v1.7.10` -> `v1.7.13`\n\nChanges in behavior:\n- With the new `aws-c-io`, the CRT retry strategy no longer rejects more\nthan 63 retries, so setting `AWS_MAX_ATTEMPTS` (or `max_attempts` in the\nclient) above 64 no longer makes the client panic at creation and\nMountpoint at startup. A new test covers it.\n- The new `aws-c-s3` starts up to 8 threads per client for meta requests\nthat upload from or download to a file. `mountpoint-s3-crt` doesn't\nsupport those requests, so its `Client` limits them to one thread, the\nminimum the CRT allows. A new test covers it.\n- The User-Agent header carries new CRT metadata.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 055e822f0..3d29adcec:\n  > chore(release): patch-update to VERSION - 1.0.2\n  > Fix warnings found by the Undefined Behavior Sanitizer- #274 (#305)\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Uri secure cleanup (#307)\n  > Secure cleanup to the key buffers (#304)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 69cd45209..45e930738:\n  > Fix version (#1307)\n  > Set sticky bit on cross process lock file (#1306)\n  > add bignum (#1300)\n  > Make UBSan errors fatal (#1266)\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Uri secure cleanup (#1286)\n  > chore(release): patch-update to VERSION - 1.0.2\n  > fix: reduce warnings and support windows-arm builds (#1278)\n  > Add callback-compatible wrappers for byte cursor equality functions (#1281)\n  > Cache CPU feature detection at library init (#1280)\n  > Windows thread failure cleanup (#1279)\n  > Revert thread detach state to not created when OS thread creation fails (#1277)\n  > Optimize the size of encoded double values (#1268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 2b563f8a7..d19eabf4c:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Add path to responds immediately for H2 mock server (#593)\n  > Make ubsan useful (#587)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Move l4 proxy config to end of public structs (#591)\n  > Securely destroying data path  (#590)\n  > fix: strip absolute-form request-target to spec (#584)\n  > fix: validate WebSocket CLOSE frames (#583)\n  > fix: harden HPACK decoding and table sizing (#582)\n  > fix: validate HTTP/2 request pseudo headers (#581)\n  > Socks5 support (#585)\n  > Lower fuzz test log level to avoid ctest running out of memory (#589)\n  > chore: make h2benchmark configurable (#580)\n  > chore: document and pin existing behavior (#578)\n  > chore: remove unreachable OOM handling (#577)\n  > chore: address TODO comments (#576)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 1685abcd3..cbc368573:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Update API names to avoid conflict (#857)\n  > [Feat]: Adding Adaptive retry strategy (#849)\n  > Register cleanup callback on accepted socket instead of listener (#855)\n  > Fix Server Channel Use After Free (#854)\n  > chore: tester fix to notify with lock (#853)\n  > [Chore]: Removing max_retry check (#850)\n  > Make ubsan useful (#844)\n  > Fix naming of the arguments (#848)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Fix find s2n result in pre-installed s2n even when we build s2n source together (#845)\n  > Socks5 Implementation  (#832)\n  > Fix and test for thread launch failure leading to shutdown deadlock (#842)\n  > Updated `s_do_read` to handle NULL right slot (#805)\n  > chore: Clarifying comment for SecIdentityCreate Api (#839)\n  > feat: keychain-less macOS identity mode (#826)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 805ca0f4c..fcb0e322b:\n  > chore(release): minor-update to VERSION - 1.5.0\n  > Fix Clang 21 -Wdefault-const-init-field-unsafe error (#707)\n  > Add recv_buffer: buffer-pool  (#693)\n  > fix: limit the eventloops spawned (#702)\n  > chore(release): patch-update to VERSION - 1.4.1\n  > Get Defalut Part Size (#706)\n  > chore(release): minor-update to VERSION - 1.4.0\n  > User Agent fix (#703)\n  > Retry strategy Modes (#705)\n  > fix: prevent segfault from early request finish (#701)\n  > fix: surface errors with first part get (#700)\n  > fix: stream creation failure on odd part sizes (#699)\n  > Validate whole-object checksum before finish decides outcome (#698)\n  > Fix undefined behavior from function pointer type casts flagged by UBSan (#688)\n  > chore(release): patch-update to VERSION - 1.3.1\n  > Run the tests in parallel (#696)\n  > limit the file io threads by default and make it configurable via env… (#694)\n  > Full object checksum for round-trip tests (#690)\n  > chore(release): minor-update to VERSION - 1.3.0\n  > Manual changelog and more validation (#691)\n  > fix the bug where we delete the file even succeed (#689)\n  > Expected checksum and validation mode changes (#684)\n  > chore(release): minor-update to VERSION - 1.2.0\n  > Clarify the bit mask logic. (#687)\n  > Parallel out of order write to file (#679)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils de0fbe807..66a79c011:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Fix misaligned data in endpoints (#76)\n  > Ubsan fixes (#75)\n  > feat:  Add streaming aws-chunked content encoding decoder (#64)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ee7c435de..12cd22e81:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > fix: use clang's intrinsics header under clang-cl on ARM64 (#120)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 39b142ec3..cd481c207:\n  > Prepare v5.12.0 (#3689)\n  > feat(tool-openssl): add ocsp command (#3635)\n  > feat(tool-openssl): support CA signing, revocation, and CRLs in ca (#3634)\n  > Explicitly block a small set of intermediates (#3688)\n  > Hold HPKE key and context buffers out of line (#3637)\n  > feat(tool-openssl): add x509 -serial/-addtrust/-trustout (#3636)\n  > tool-openssl: add password-based key derivation to openssl enc (#3665)\n  > tool-openssl: add openssl rand subcommand (#3664)\n  > Fix PKCS12 password prompt test isolation on OpenBSD (#3680)\n  > Make the SSL_SHA256 constant non-overlapping with the rest (#3659)\n  > tool-openssl: support cipher name as command (e.g. openssl aes-256-cbc) (#3666)\n  > Move AArch64 Keccak round constants out of .text (#3674)\n  > Use CMake find_package for OpenSSL (#3662)\n  > Implement aws-lc-provider error queue handling (#3488)\n  > fix(ssl): Reject non-ECDHE cipher in handback (#3653)\n  > Import s2n-bignum 2026-09-29 (#3661)\n  > Reject ECH configuration on DTLS connections (#3578)\n  > fix(ci): running ci in dedicated msys shell (#3669)\n  > Scope OCSP noCheck exemption to the responder certificate (#3576)\n  > Bump the pip-ci group across 1 directory with 3 updates (#3657)\n  > Bump the cargo-ci-lambda group across 1 directory with 3 updates (#3658)\n  > Add FIPS support to the aws-lc-provider (#3487)\n  > Bump rustls from 0.23.40 to 0.23.45 in /tests/ci/lambda (#3649)\n  > Bump urllib3 from 2.7.0 to 2.8.0 in /tests/ci (#3606)\n  > Bump the github-actions group across 1 directory with 3 updates (#3627)\n  > Ensure UBE is caught between thread-local state init and uniqueness test (#3654)\n  > Validate OCSP HTTP request inputs (#3639)\n  > Fix -Wunused-but-set-global in rand_isolated_test.cc (#3648)\n  > fix(ci): scope id-token permission to report-failures job in integration omnibus (#3640)\n  > Reserve alignment slack in SSLBuffer max capacity (#3642)\n  > Reject failed signature controls (CWE-393) (#3643)\n  > Fix -Wunused-but-set-global in fork_ube_detect.c (#3645)\n  > Verify provider-wide algorithm reachability (#3486)\n  > Reject repeated AES-XTS data unit operations (#3621)\n  > Salt len truncation fix (#3570)\n  > Implement remaining SHA2 digests (#3485)\n  > Adding RC2 EVP key length signed truncation guard (#3589)\n  > Grow BIO_read_asn1's buffer incrementally, not from the claimed length (#3583)\n  > Add SHA2-224 and establish the SHA-2 variant pattern (#3449)\n  > Check `EVP_PKEY_assign_EC_KEY` return (#3620)\n  > Honor restricted PSS min saltlen for AUTO verify (#3470)\n  > Reset cached extension state when reusing an X509 or X509_CRL (#3584)\n  > Deduplicate digest algorithms in PKCS7_dataInit (#3579)\n  > Clear buffered cipher state per record in aead_tls_open (#3587)\n  > Prepare v5.11.0 (#3610)\n  > Harden previous-finished* length in v1/v2 transfer (#3595)\n  > Recognise known safe DH groups/primes and short-circuit Diffie-Hellman test (#3337)\n  > fix(ci): restrict calls for autofix (#3599)\n  > fix(ml_kem): Gate ML-KEM x86-64 on BMI2 in addition to AVX2 (#3596)\n  > Support RSA encryption/decryption and additional ciphers in the OpenSSL CLI (#3605)\n  > Resize md_data when an HMAC EVP_MD_CTX changes digest (#3586)\n  > Use the dummy key when a PKCS#7 content encryption key is the wrong length (#3585)\n  > Remove nameRelativeToCRLIssuer CRL distribution point support (#3598)\n  > fix(x509): Verify CSR proof-of-possession on -req (#3592)\n  > fix(ssl): Check buffer-view bounds before pointer arithmetic (#3566)\n  > Reject unoffered cipher suite in TLS 1.3 client (#3537)\n  > fix: Add patch for failing gRPC master branch (#3591)\n  > feat(duvet): RFC 8032 (EdDSA) requirement coverage + annotation-regression CI (#3477)\n  > Support `pkcs12 -export` and `req -batch` in the OpenSSL CLI (#3575)\n  > fix(acvp): place the IUT public key correctly in KAS-ECC fixedInfo (#3597)\n  > fix: Update Ruby (master) integration patch (#3590)\n  > Extend FIPS 3.x EOS to February 2030 (#3539)\n  > Seed groups and signature algorithms from the system crypto policy (#3504)\n  > Gating PR auth checks on actor pushing the code instead of author (#3567)\n  > Fail openssl ca when the issued certificate cannot be written (#3568)\n  > Guard against NULL attribute type names in X509_NAME_print_ex (#3574)\n  > Harden a number of code-paths to avoid e.g. hangs and invalid input (#3543)\n  > Add OpenSSL-compatible rehash -compat support (#3563)\n  > Reject [UNIVERSAL 0] elements with content as end-of-contents (#3560)\n  > Fix BIO socket error handling (#3459)\n  > Restricting CI permissions so fork-PR code doesn't run CI with ECR push and shared S3 write permissions (#3546)\n  > Record job settings (#3569)\n  > Zeroize ChaCha20-Poly1305 key material (#3552)\n  > Skip AEAD ConcurrentStability under Intel SDE; add deterministic context-immutability test (#3562)\n  > ci: fix openssh-master integration (#3561)\n  > Prepare 5.10.0 (#3553)\n  > Add EVP_add_cipher as a compatibility no-op (#3554)\n  > Fix SIGPIPE race in linkage checks (#3551)\n  > Quote shell arguments in tool tests (#3499)\n  > Bump the github-actions group with 8 updates (#3550)\n  > Reject non-canonical Ed25519 public keys in the nohw decoder (#3457)\n  > Add pkcs12 import subcommand to the CLI (#3532)\n  > Improve verify and x509 CLI compatibility  (#3548)\n  > Seed cipher lists and version bounds from the system crypto policy (#3503)\n  > Prevent tests from creating temporary files in the source tree (#3498)\n  > Return process exit codes from openssl CLI tool entry points (#3536)\n  > Add EVP_PKEY_check and EVP_PKEY_public_check for KEMs (#2709)\n  > Add context length guard in ML-DSA ACVP siggen (#3538)\n  > fix: declare FIPS service-indicator funcs in curve25519.c (#3514)\n  > fix: restore alloc-size >= ivlen invariant in legacy AES-GCM SET_IVLEN (#3466)\n  > Export the crypto-policies reader and add its CI job (#3527)\n  > Add a reader for the system crypto-policies OpenSSL back-end (#3502)\n  > Retry failed rndr register read a bounded number of times (#3475)\n  > Shard WASM gtests across runner CPUs (#3524)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls bce022f41..e7ce83a27:\n  > feat: add 20261021 security policies (#6141)\n  > test: add rust buffered send test (#6060)\n  > feat: Adds API to make fragment length configurable (#6139)\n  > fix(bindings): remove Result from CertValidationCallbackSync (#5779)\n  > fix: validate x509 extension length on the length-only path (#6126)\n  > fix: add null check for quic_transport_parameters (#6135)\n  > refactor: guard libcrypto function calls (#6133)\n  > docs: clarify aws-kms-tls-auth revocation requires KMS key rotation (#6128)\n  > chore: bindings release 0.3.46 (#6130)\n  > fix: prefer ECDSA signature schemes in ELB TLS 1.3 security policies (#6127)\n  > fix(mem): Reverse MADV_DONTDUMP on mlock allocator free (#6120)\n  > fix: treat s2n_allowed_to_cache_connection error return as false (#6125)\n  > chore: add new team member (#6122)\n  > fix: enforce max handshake length in parse_message (#6055)\n  > fix: copy ticket key before use to avoid concurrent rotation UAF (#6043)\n  > fix: initialize s2n_cert fields in s2n_connection_get_peer_cert_chain (#6045)\n  > fix: guard DH param sizes against uint16 truncation (#6062)\n  > refactor: remove length-prefixed logic for PQ key shares (#6041)\n  > chore: bindings release 0.3.45 (#6116)\n  > build(deps): update bindgen requirement from 0.72 to 0.73 in /bindings/rust/standard (#6084)\n  > feat: add OpenSSL 4.0 compatibility (#6111)\n  > fix: prevent trust store switch when s2n_connection_set_config fails (#6105)\n  > feat(rust-examples): add mutual TLS example (#5995)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6098)\n  > fix: re-enable TLS_RSA cipher suites in the Java integration test client (#6114)\n  > revert: new AMI for the kTLS fleet was published with updated PGP key for the github CLI. (#6109)\n  > ci: pin macOS CI to openssl@3 to fix OpenSSL 4 build break (#6113)\n  > build(cmake): add opt-in discovery for a distribution-packaged AWS-LC (#6108)\n  > fix: disable TLS1.3 resumption when client auth is required (#6103)\n  > feat: Adds split API on the Rust bindings Connection (#5774)\n  > fix: report Finished and PSK binder mismatches as decrypt_error (#6104)\n  > chore: bindings bump v.0.3.44 (#6099)\n  > chore: Update gh cli PGP key (#6102)\n  > chore(bindings): Address 2 Rustsec advisories (#6095)\n  > style: order tls 1.3 cipher suites first (#6092)\n  > fix: remove unused variable to fix Clang build with Werror (#6093)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6079)\n  > feat: Preserve count in handshake/compute duration (#6069)\n  > fix: Ensure that TLS1.3 ticket is not accepted on TLS1.2 codepath (#6081)\n  > build(deps): update brass-aphid-wire crates (#6090)\n  > fix: cleanup kms-tls-auth crate (#6094)\n  > feat(bindings): add async cert validation callback (#6071)\n  > feat(metrics): skip export when record is zero (#6087)\n  > fix: relax https test to accept all status codes (#6091)\n  > feat(bindings): deprecate & alias Connection::wipe (#6033)\n  > fix: cleanup dhparams in failure case (#6085)\n  > chore: add simonmarty to the team (#6089)\n  > feat(policy): Add ELB, KMS, and service TLS security policies (#5977)\n```\n</details>\n\n### Does this change impact existing behavior?\n\n`AWS_MAX_ATTEMPTS` values above 64 are now accepted, where Mountpoint\nused to panic at startup. Each client has one additional idle thread.\nSee the changes in behavior above.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: \"Update to latest CRT dependencies\" entries for\n`mountpoint-s3-crt-sys`, `mountpoint-s3-crt` and `mountpoint-s3-client`,\n\"Update to latest S3 client\" for `mountpoint-s3-fs`, and entries for the\n`AWS_MAX_ATTEMPTS` fix in `mountpoint-s3-client` and `mountpoint-s3`.\nMinor version bumps: `mountpoint-s3-crt-sys` 0.18.0, `mountpoint-s3-crt`\n0.17.0, `mountpoint-s3-client` 0.23.0, `mountpoint-s3-fs` 0.12.0.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-29T06:52:50Z",
          "tree_id": "451fcd2f4a5dd7b7b92a1d893bdac454a0ba1a3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0b0e02cbf2a37e912697e5cd4b8830c3ededa04"
        },
        "date": 1793265530968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 404.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 63.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 368.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 61.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 373.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 370.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 371.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 380.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 68.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 393.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 388.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 377.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.76171875,
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
          "id": "f5d283be78d717f3f219d82740608a1483dfa301",
          "message": "Bump libz-sys from 1.1.30 to 1.1.31 (RUSTSEC-2026-0418) (#2013)\n\nBumps libz-sys to 1.1.31 to fix RUSTSEC-2026-0418 (the libz-sys build\nscript logs its compiler probe command, leaking environment variables\ninto the build directory), which currently fails the `cargo deny`\nadvisories check. Cargo.lock only, no code changes.\n\nlibz-sys is a build-time dependency only, reached via\n`built` -> `git2` -> `libgit2-sys` from the `mountpoint-s3` and\n`mountpoint-s3-client` build scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-30T09:44:05Z",
          "tree_id": "23b855040345b40f370758ceb7539c4582cf29a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5d283be78d717f3f219d82740608a1483dfa301"
        },
        "date": 1793362060479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 376.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 369.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 370.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 395.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 389.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 373.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 356.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 383.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 374.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.703125,
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
          "distinct": false,
          "id": "eed2626515d090b005ce3383a2e9ec878c266ecf",
          "message": "Fix lock-order deadlock between forget and rename/opendir in the superblock (#1995)\n\n`Superblock::forget` held the inode map lock while taking the parent\ndirectory's state lock to unlink the forgotten inode. `rename` and\nopening a directory take the inode map lock while holding a directory's\nstate lock. A forget racing with either in the same directory could\ntherefore deadlock and hang the file system.\n\n`forget` now removes the inode from the map under the map lock alone,\nand then locks the parent to unlink it, unless a lookup has remembered\nit again in between. While it is being unlinked, the inode stays in the\nmap with a lookup count of 0, so that the forget of a child still finds\nits parent if the parent is being forgotten at the same time. A\ndirectory that was unlinked before its children were forgotten can still\nhold children that are no longer in the inode map: opening the directory\nskips such local children instead of failing.\n\nTo keep the order from being broken again, the map's lock is now\ninternal to `InodeMap`: its methods lock internally and return clones,\nso no caller can hold the map lock while taking another lock. Operations\nthat need several steps under the lock (lowering an inode's lookup count\nand finding its parent, checking whether a directory is an ancestor of\nanother for rename) are `InodeMap` methods.\n\nAdds shuttle tests for forget racing with rename and opendir (both\ndeadlock without the fix), a lookup of the same inode, and the forget of\nthe parent directory, alone and together with a lookup of it, and a unit\ntest for listing a directory with a local child that is not in the inode\nmap.\n\n### Does this change impact existing behavior?\n\nIt fixes a possible hang, and opening a directory no longer fails when a\nlocal file in it has been forgotten. No other behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: entries in the `mountpoint-s3-fs` and `mountpoint-s3` changelogs.\nBoth crates are already at unreleased patch versions (v0.11.1 and\nv1.24.1).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-30T12:05:41Z",
          "tree_id": "c3fd6343dc7f4d27bbca39f536afa82b0e243538",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eed2626515d090b005ce3383a2e9ec878c266ecf"
        },
        "date": 1793370579798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 374.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 374.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 390.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 372.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 373.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 371.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 374.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 368.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 401.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.90625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "830e8a9d7c7d13d79fa8e143b87bd811d31a1d77",
          "message": "  Upgrade fuser to 0.17 (#2005)\n\nUpgrades the vendored fuser to 0.17 and adopts its typed wrappers.\n\n- `mountpoint-s3-fuser` is re-vendored from `fuser/fork` (`d59a11218`)\nand excluded from the workspace, since fuser 0.17 declares its own\n`[workspace]`.\n- `--auto-unmount` keeps its current behavior: with no `--allow-*`\noption, Mountpoint passes `auto_unmount` and `allow_other` to the kernel\nand keeps the ACL as `Owner`, as the previous fuser did. Tests cover\nthis.\n- `S3Filesystem` now matches fuser's `Filesystem` trait. `INodeNo`,\n`FileHandle`, `Errno`, `Generation`, `LockOwner`, `FopenFlags`,\n`BsdFileFlags`, `WriteFlags` and `u64` offsets are used all the way\ndown. Our `OpenFlags` and `RenameFlags` are kept and converted once in\n`fuse.rs`.\n\n### Does this change impact existing behavior?\n\nNo user-facing behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n - `mountpoint-s3-fuser`: bumped to 0.2.0\n- `mountpoint-s3-fs`: added a changelog entry for the fuser 0.17\nalignment and the type changes. No version change needed.\n \n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-30T16:48:12Z",
          "tree_id": "c3655b84b58bdbcbff463b4dd97f32f8fbb1831a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/830e8a9d7c7d13d79fa8e143b87bd811d31a1d77"
        },
        "date": 1793388244945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 375.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 383.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 61.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 372.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 385.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 401.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 58.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 404.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 66.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 406.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 371.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 371.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.015625,
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
          "distinct": false,
          "id": "7c8d62364774d42086c0ac62de1693ef2bc68fc2",
          "message": "Fix `max_attempts = 1` still retrying failed requests (#1996)\n\nSetting the maximum number of attempts to 1\n(`S3ClientConfig::max_attempts` or `AWS_MAX_ATTEMPTS=1`) did not disable\nretries: failed requests were still attempted up to 4 times. The client\npasses `max_retries = attempts - 1` to the CRT's standard retry\nstrategy, which treats `max_retries = 0` as \"use the default\" (3\nretries).\n\nThe client now configures retries through the S3 client's built-in retry\nconfig, with the new `ClientConfig::retry_config` in\n`mountpoint-s3-crt`, instead of building a retry strategy: the no-retry\nmode (`AWS_S3_RETRY_MODE_NONE`, from awslabs/aws-c-s3#705) for 1\nattempt, and the standard mode with `max_attempts - 1` retries\notherwise, with the same backoff settings as before. In the no-retry\nmode the S3 client makes each request once, without acquiring a retry\ntoken, and also turns off the first-byte timeout it otherwise sets on\nUploadPart requests, which relies on retrying the parts that time out.\n\n`AWS_MAX_ATTEMPTS` must now be a positive integer. Other values make\nclient creation fail with `NewClientError::InvalidConfiguration`, so\nMountpoint fails to start with a clear error. Previously `0` selected\nthe CRT's default of 4 attempts, and other invalid values were silently\nignored.\n\nNew tests run against a local mock server (wiremock). They count the\nrequests made for failing ListObjectsV2 and HeadObject calls with 1, 2\nand 3 attempts, set from the client config or the environment, and check\nthat invalid `AWS_MAX_ATTEMPTS` values are rejected. The single-attempt\nand invalid-value tests fail without this fix.\n\n### Does this change impact existing behavior?\n\nYes:\n- Bug fix: `AWS_MAX_ATTEMPTS=1` and `max_attempts(1)` now make a single\nattempt.\n- Breaking change: Mountpoint and `S3CrtClient::new` now fail when\n`AWS_MAX_ATTEMPTS` is set to anything other than a positive integer (for\nexample `0`, `-1`, `\"\"` or `many`). These values were silently ignored,\nexcept `0`, which gave 4 attempts instead of no retries. Failing at\nstartup is safer than running with a different number of attempts than\nthe user asked for.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. There are changelog entries for `mountpoint-s3-crt`,\n`mountpoint-s3-client` and `mountpoint-s3`.\n- `mountpoint-s3` is bumped to 1.25.0 for the breaking change.\n- `mountpoint-s3-crt` 0.17.0 (new `ClientConfig::retry_config`, which\nreplaces the removed `ClientConfig::retry_strategy`) and\n`mountpoint-s3-client` 0.23.0 are already bumped past their latest\nreleases.\n- `mountpoint-s3-fs` gets the change through its existing \"Update to\nlatest S3 client\" entry (0.12.0, already bumped).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-30T18:39:55Z",
          "tree_id": "a98db25d75e805a696db1f0ab5a364c65c8df83f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c8d62364774d42086c0ac62de1693ef2bc68fc2"
        },
        "date": 1793397983251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 372.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 62.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 386.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 61.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 385.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 367.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 388.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 390.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 67.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 361.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 375.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 359.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.09765625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}