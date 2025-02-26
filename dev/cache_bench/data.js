window.BENCHMARK_DATA = {
  "lastUpdate": 1740586433754,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "157ef8d3df463d10b0e169714ead6176b0d40842",
          "message": "Update reftests with small refactor and renames for clarity (#1225)\n\nThis change makes minor updates to improve clarity in the reference\ntests.\n\n### Does this change impact existing behavior?\n\nNo, refactors reftests only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T13:02:21Z",
          "tree_id": "d3a9d3760722ea7d4a785ffce9bd5490274e5590",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/157ef8d3df463d10b0e169714ead6176b0d40842"
        },
        "date": 1739199657952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.12275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1995.99462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 823.19287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1459.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.58828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.63876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 292.60791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3699.5953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3979.65185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1229.76015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1151.93828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 820.1994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1439.8107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1333.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.4744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1195.07705078125,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "812970714b42c6f28686302eef3d2c768332b955",
          "message": "Fix fs_benchmark to correctly configure backpressure (#1260)\n\nWhen running the benchmark script, it fails to run due to client errors\nwhere backpressure isn't enabled. This is due to Mountpoint's prefetcher\nrelying on this being enabled, or returning\n`BackpressurePreconditionFailed`.\n\nThis change configures the backpressure on the S3 client used by this\nbenchmark and has been tested on my own Linux machine.\n\n### Does this change impact existing behavior?\n\nFixes a benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark script change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:15:40Z",
          "tree_id": "e029f970f65ac62fc8ab00b77027452c092deb23",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/812970714b42c6f28686302eef3d2c768332b955"
        },
        "date": 1739207629096,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1281.10478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.02900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1447.855859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 430.4625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.37001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 304.651953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3695.6248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4103.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1223.18984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1135.42900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 831.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 847.3396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1116.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.590625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 941.3099609375,
            "unit": "MiB/s"
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
          "id": "8c68c1dea2530871f0e19f3bd75e6046c3790d1c",
          "message": "Update examples/benchmarks to use Clap derive syntax (#1258)\n\nSome of the benchmarks and other examples use the non-derive syntax of\nClap. Meanwhile, the main CLI for Mountpoint uses the derive syntax\nproviding much better ergonomics.\n\nThis change migrates to derive syntax for all benchmarks/examples,\nmaintaining existing behavior and aliasing to match the main CLI for\nconsistency. By using aliasing, we can avoid old command history or any\nscripts failing to run.\n\n### Does this change impact existing behavior?\n\nThis change does not change any behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:19:55Z",
          "tree_id": "8c38034fe2c2ce2cc41bcd0bdae8f5155272a453",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c68c1dea2530871f0e19f3bd75e6046c3790d1c"
        },
        "date": 1739207973616,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.5443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1995.7837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.4625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.30498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 395.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.1283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.89794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3612.57783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4035.3890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1212.39033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1169.07724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 949.5419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 995.14638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1207.4392578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1001.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1025.21279296875,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "6410b8c0e138e61969572c09f55f650bd7458943",
          "message": "Add timer metric over endpoint rule engine resolution (#1262)\n\nToday, Mountpoint evaluates the rule engine with every request despite\nalways using the same endpoint in its default configuration.\n\nThis change adds a histogram metric so that we can begin to have\nvisibility on how long this is taking, and how this can be distributed.\n\n### Does this change impact existing behavior?\n\nNo, it adds a new metric for endpoint resolution.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, metrics are not considered a stable feature. This is a new metric\naddition only, no change or removal.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T16:30:47Z",
          "tree_id": "ca11b3c438a206551eeb4385d82d4815f7ee71c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6410b8c0e138e61969572c09f55f650bd7458943"
        },
        "date": 1739212254602,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.12802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1993.78291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 779.86884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.96953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.0572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 501.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.1859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 343.10029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3650.61611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4033.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1256.30927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.25625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 851.52607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1074.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1222.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 997.93740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 974.575390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "smeyer@fastmail.com",
            "name": "Steven Meyer",
            "username": "notoriaga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5e580a8632e30d7616d392fff30eaf215da22cec",
          "message": "Add negative metadata cache ttl (#1246)\n\nAdds a new CLI argument `--negative-cache-ttl` that lets you set the TTL\nfor negative metadata entries separately from `--metadata-ttl`. My use\ncase is a write once read many bucket. Objects do not get deleted from\nthis bucket, and new objects are added every few minutes. I'd like to be\nable to set `--metadata-ttl indefinite` and `--negative-cache-ttl 60` to\neffectively utilize the caching while still being able to pick up new\nobjects. There is an open issue for this here -\nhttps://github.com/awslabs/mountpoint-s3/issues/831\n\n### Does this change impact existing behavior?\n\nNo, if `--negative-cache-ttl` is omitted the existing behavior is\nmaintained (use `--metadata-ttl` or the default file_ttl).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBecause this is a new feature I believe it would require both.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: notoriaga <smeyer@fastmail.com>\nSigned-off-by: Steven Meyer <smeyer@fastmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-11T13:59:57Z",
          "tree_id": "5c4086bb2ef39374bdfecb966e1ad1ed340ccfad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e580a8632e30d7616d392fff30eaf215da22cec"
        },
        "date": 1739289805886,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.262109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1990.846484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1486.0666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.69931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.40439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.83525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3650.16005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4010.8625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1221.346875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1151.95859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 827.90048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 837.5115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1083.859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1102.23623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1353.27099609375,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "e56d343ff6d9da3017c0b4888628da8ae6165883",
          "message": "Add metrics for FUSE worker idle and total count (#1264)\n\nBefore this change, there was no visibility into how many FUSE worker\nthreads within Mountpoint had been created nor any indication if they\nare all busy or not.\n\nThis change adds both a count for the number of FUSE worker threads that\nhave been spawned, as well as a count measuring how many are currently\nconsidered idle.\n\nWith the current metric implementation, these are guages and are only\nemitted when the value is updated. They are emitted in the logs as\nfollows:\n\n2025-02-11T13:00:14.647185Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:14.647227Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.total_count: 4\n2025-02-11T13:00:19.659416Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:24.672336Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:29.685867Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 4\n\n### Does this change impact existing behavior?\n\nThis adds a new metric only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new metric only. Metrics aren't advertised as a stable feature.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:49:49Z",
          "tree_id": "4d12876f8614ab18f6c151fa367edefde6eba7c7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e56d343ff6d9da3017c0b4888628da8ae6165883"
        },
        "date": 1739292610281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1291.56103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2002.8353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.7150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1445.67080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.27685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 497.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.6068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.99775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3718.148046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3917.53466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1209.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1140.84775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1090.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 978.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1255.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 965.87470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1120.7638671875,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "19b706dfc2b51d031d05602a328d4120ce72115b",
          "message": "Add experimental config to write Mountpoint PID to file (#1261)\n\nWhen investigating performance, we wanted to automate the collection of\nprofiler captures using a tool like `perf`. To do this, we needed the\nprocess ID of Mountpoint. By writing out the PID to a file, scripts\ncould automatically record profiles for the lifetime of Mountpoint by\nproviding its PID to `perf`.\n\nThis change adds the ability to write Mountpoint's PID to a file under\nan experimental/unstable environment variable. Since its unclear if we\nwant to expose this properly such as providing a CLI argument, we are\ntaking the unstable environment variable approach to make clear this\nconfiguration may change or be removed in future.\n\n### Does this change impact existing behavior?\n\nThis change adds a new experimental feature to write Mountpoint's PID to\na file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSince this is adding an experimental feature, no changelog entry is\nrequired. No minor version patch is required, as this is not a stable\nfeature addition.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:50:57Z",
          "tree_id": "3e105b172d88ae034d0e91a237a2d0c712cfccca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19b706dfc2b51d031d05602a328d4120ce72115b"
        },
        "date": 1739292627307,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.987109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1993.99140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.416796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.17548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.988671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.679296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.48525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3645.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4011.8345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1160.81435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1171.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1323.8921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1423.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1316.01904296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.726171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1163.74501953125,
            "unit": "MiB/s"
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
          "id": "981a3e11b23baa3247c968f6819698dfc5326cd5",
          "message": "Increase version to 1.15 and update CHANGELOG after adding new metadata TTL flag (#1265)\n\nThe change in #1246 requires a minor version increase and a new entry in\nthe changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-11T14:53:46Z",
          "tree_id": "a5999ea7bd7aaec4350279abf77568d7b14dc396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/981a3e11b23baa3247c968f6819698dfc5326cd5"
        },
        "date": 1739292982934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.7876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1973.097265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 758.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1448.35146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.55302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.6955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.2375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3634.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3977.02158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1184.4572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1149.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1321.26630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 901.5513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 986.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1109.1021484375,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "ed6f34bf117fcb0eab77920ba9f77201b42670b9",
          "message": "Add debug logging to FUSE flush to make upload completion clearer (#1247)\n\nIn some edge cases, Mountpoint will not be able to complete the MPU\nbefore the file is closed. For instance, we will not complete uploads\nwhere no bytes have been written since it can be common for applications\nto fork and result in file descriptor being closed before writing\nbegins.\n\nIf an application relies on close completing before another system\nqueries S3, it could lead to a race condition where the object is not\nyet in S3.\n\nWhile this is an edge case, this change adds debug logging which can\nhelp identify when this behavior occurs.\n\n### Does this change impact existing behavior?\n\nLogging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-13T16:26:23Z",
          "tree_id": "32b3f4d8ea6c36c585de17761e64cc893f7f35e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed6f34bf117fcb0eab77920ba9f77201b42670b9"
        },
        "date": 1739471454698,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.56279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1975.5970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 780.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.1208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.7416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3353.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3942.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1180.5109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.271875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.99853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1445.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1074.7654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1024.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1114.6740234375,
            "unit": "MiB/s"
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
          "id": "49c55bb73315bf3b0dca5326d6632cdf6453207e",
          "message": "Update caching documentation (#1267)\n\nUpdated the caching documentation to specify how the metadata cache\ninteracts with the data cache options.\n\nCloses #1263.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-02-14T15:20:08Z",
          "tree_id": "1fcff08e5c24399a87a6d8d7c97c7ac9b5622d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49c55bb73315bf3b0dca5326d6632cdf6453207e"
        },
        "date": 1739553638093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1267.35771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1989.347265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.109765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.90087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.6716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 555.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.4048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3601.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4051.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.86103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1044.141015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 978.42373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1023.01396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1060.64853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1087.0232421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d70f9195740f616eca0e4a739b83aa34065e3261",
          "message": "Enforce sse on writes to the xz cache (#1257)\n\nWith this PR, flags `--sse` and `--sse-kms-key-id` will also apply to\nobject uploads to the xz cache.\n\n### Does this change impact existing behavior?\n\nYes, bumped the version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-17T22:57:28Z",
          "tree_id": "180c78283657fbca46ba80d09c29b0976dd709a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d70f9195740f616eca0e4a739b83aa34065e3261"
        },
        "date": 1739840217863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.8931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1924.324609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.12509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.15341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.68662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.12744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3590.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4082.35087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.41455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 835.24921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1041.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.587109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1019.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1440.29140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454e1fab291e1d020fe1a1917799f7a7f8d2cac7",
          "message": "chore(clippy): remove exclusions for false positive rules (#1271)\n\n### Overview\nWe removed exclusions for false positive Clippy rules as they were fixed\nand this workaround is no longer needed.\n\n### Does this change impact existing behavior?\nNo, this is a small boilerplate change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nChange log and version changes are not needed.\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:19:10Z",
          "tree_id": "ec72709f8a00be840dacf4c142a5db7ef9c0428e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/454e1fab291e1d020fe1a1917799f7a7f8d2cac7"
        },
        "date": 1739985603137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1296.416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1961.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 775.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.61884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 435.9291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.68603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 334.97919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3600.50244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4173.52841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1242.73935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1208.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 935.89990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 989.19736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1251.9255859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1102.31162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 972.27216796875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2a50bbdf765b1a5652e6b9a5e89919feaf212be",
          "message": "Fuser fork submodule (#1269)\n\n### Overview\nTo be prepared for further refactoring we want to ease the supporting\neffort for the FUSER fork we're using.\nAs a first step we want to embed it as a git submodule which will be\nusing the existing `fuser/fork` branch as a remote.\nThis will allow us to keep the current sync flow with the original FUSER\n[repo](https://github.com/cberner/fuser) but skip the manual sync step\nin our `main` branch.\n\nWe will be able to update the fork by running `git submodule update\n--remote mountpoint-s3-fuser` which is more idiomatic. So we still be\nable to test changes locally w/o publishing the fork.\n\n*NB* We will need to commit the changes (dirty indices) after\nsubmodule's update.\n\n### Does this change impact existing behavior?\n\nThis change is completely internal and does not impact customer-facing\nbehavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis change does not require version or changelog changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:34:36Z",
          "tree_id": "56231be5cdb9a08a04d49dbf5c17de883229d997",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2a50bbdf765b1a5652e6b9a5e89919feaf212be"
        },
        "date": 1739986484625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.7078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1963.07744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.13349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.87138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.12666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 453.06015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 304.5041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3595.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4039.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1184.85263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1144.59697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1249.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 957.3509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1413.4974609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1057.92275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1135.44111328125,
            "unit": "MiB/s"
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
          "id": "bacb676bf7303208dc39cf8e91aff56b5ccc89d2",
          "message": "Add initial version of benchmark experiment runner (#1266)\n\nIn order to investigate performance in Mountpoint, we want to be able to\nvary different parameters. In fact, it can be very useful to vary these\nparameters together to see how performance (such as sequential read\nthroughput) changes as we vary two parameters together.\n\nThis change introduces a new benchmark running script which uses the\nPython framework Hydra to enumerate combinations of parameters, and then\nexecute some function with each combination. The script manages the\nlifecycle of the `mount-s3` file system and collecting data into an\noutput folder.\n\nThe change currently does not reuse the FIO definitions used by our\nregression benchmarks. In the mid-term, these should be reconciled.\n\nThis pull request (PR) supersedes a previous PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/986.\n\n### Does this change impact existing behavior?\n\nNo, this adds a new benchmark runner and benchmark definitions. This\ndoes not impact the Mountpoint file system.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint file system or crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-21T07:13:35Z",
          "tree_id": "f41549c9170abd8427c12f5c7a56563584dfa834",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bacb676bf7303208dc39cf8e91aff56b5ccc89d2"
        },
        "date": 1740129267848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1956.46728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 775.658984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.1302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.50439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.26572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 308.7515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3689.16416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4064.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1172.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.7509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 920.13466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 973.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1133.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1031.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 983.97958984375,
            "unit": "MiB/s"
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
          "id": "ea00e0dfffafa35e6ef2339a299c235fa1356d62",
          "message": "Add ETag to complete upload debug log (#1282)\n\nSmall change to add etag to debug logs when an MPU completes.\n\nWe already have size and object key, so this is the only missing\ninformation.\n\n### Does this change impact existing behavior?\n\nAdds etag to debug logs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T12:03:10Z",
          "tree_id": "bb4aeac896bbb845482469de8e7b1df4846647bb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea00e0dfffafa35e6ef2339a299c235fa1356d62"
        },
        "date": 1740405830053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.4044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1947.52705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.56689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.35947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.51455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 377.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3559.89423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.17958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.39189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1202.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 764.547265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 856.64677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1305.855859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.00009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 957.2009765625,
            "unit": "MiB/s"
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
          "id": "a5147a158407b8ed26a8953eabd218d3d79cfcc1",
          "message": "Add EC2 instance ID to benchmark output metadata (#1281)\n\nWe want to include the instance type in the metadata for a given\nbenchmark run.\n\nThis change adds a check into IMDS to query this data and add the EC2\ninstance type if available.\n\n### Does this change impact existing behavior?\n\nIt adds a new field to the benchmark output metadata file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no change to Mountpoint itself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T13:10:39Z",
          "tree_id": "e59b936e6f9b45b485f1e843ece5451832ba5e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a5147a158407b8ed26a8953eabd218d3d79cfcc1"
        },
        "date": 1740409867000,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.10361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1967.28662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.285546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1446.87236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.10849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 390.03408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.3390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3607.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4082.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1151.973828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 908.87158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1408.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1033.916796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.55361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 981.6126953125,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa",
          "message": "Add ability to specify multiple network interfaces to benchmark script (#1285)\n\nTo investigate multiple network card performance, we want to run\nexperiments with and without multiple network cards. This change adds\nthe ability to run the benchmark experiment runner and specify both\nnetwork interfaces and the maximum network throughput parameter.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, new feature on benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no Mountpoint change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-25T18:02:35Z",
          "tree_id": "557d94cef6ae02f5344dc7298cb3b32037fa250f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa"
        },
        "date": 1740513911644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1998.3962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1460.63515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.05498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 503.6458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 213.48662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.19736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3544.75810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4076.36240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1143.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1378.43115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 903.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1070.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1061.2828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "191584906+sahityadg@users.noreply.github.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe",
          "message": "Add FUSE background and congestion threshold config to benchmark script (#1286)\n\nTo investigate Mountpoint performance, we want to run experiments with\ndifferent FUSE max background and congestion threshold settings.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-02-26T10:38:53Z",
          "tree_id": "5b46086209bed0903ee2eb52308aa3a1ef8c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe"
        },
        "date": 1740573617964,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.133984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1985.34716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.7458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1453.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.9810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 496.18544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 318.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3565.34990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3970.18984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1150.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.6369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.6234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1141.0447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1101.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 964.48486328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59ccecfd3b7edf540504bb524f1ef7e7afae7ecc",
          "message": "Build and validate SLES package (#1278)\n\nBuild a separate package for SUSE Linux Enterprise Server (SLES), where\n`libfuse.so.2` is delivered by `libfuse2` rpm package (as compared to\n`fuse-libs` for AL2).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMay be? Added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-26T11:23:36Z",
          "tree_id": "427e5dc432f730ffa7fb9590d0d6635dba92c1ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59ccecfd3b7edf540504bb524f1ef7e7afae7ecc"
        },
        "date": 1740576393199,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.0833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1939.382421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.93349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 393.19404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.40126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.69794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3628.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4083.42255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1218.86328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1143.44814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 859.8849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1206.39150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 974.95751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1098.1802734375,
            "unit": "MiB/s"
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
          "id": "241d1195588ffed40c3fe508eede2befd80ce27f",
          "message": "Remove function pointer comparison in EventLoopGroup initialization (#1287)\n\nTrying to run `clippy` with Rust 1.85 fails with the following error:\n```\nerror: function pointer comparisons do not produce meaningful results since their addresses are not guaranteed to be unique\n  --> mountpoint-s3-crt/src/common/ref_count.rs:30:13\n   |\n30 |     assert!(callback.shutdown_callback_fn == Some(shutdown_callback));\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = note: the address of the same function can vary between different codegen units\n   = note: furthermore, different functions could have the same address after being merged together\n   = note: for more information visit <https://doc.rust-lang.org/nightly/core/ptr/fn.fn_addr_eq.html>\n   = note: `-D unpredictable-function-pointer-comparisons` implied by `-D warnings`\n   = help: to override `-D warnings` add `#[allow(unpredictable_function_pointer_comparisons)]`\n```\n\nThis change reworks the affected code by inlining the shutdown callback\nfunctions into `EventLoopGroup::new_default` (the only caller), which\nmakes the assertion redundant.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-26T14:12:12Z",
          "tree_id": "eabe649b5d5eb0ad848fb82651238fdcf5c6b2f8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/241d1195588ffed40c3fe508eede2befd80ce27f"
        },
        "date": 1740586433042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2010.56416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.7849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1454.7935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.4396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 463.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.63857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3584.55068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3991.27255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1172.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1171.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 847.53623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 850.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1037.87490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1084.29052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 903.65546875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}