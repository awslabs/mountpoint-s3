window.BENCHMARK_DATA = {
  "lastUpdate": 1747235347856,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dcafbb49b0f9060b558f451ffab1d41eeec7861",
          "message": "Allow changing log level dynamically with `USR2` signal  (#1367)\n\nThis PR makes Mountpoint capable of changing log verbosity dynamically\nwith `USR2` Unix signal. The users can send a `USR2` signal to\nMountpoint process, e.g., `kill -USR2 <mount-s3-pid>`, to toggle between\nthe following log verbosity levels:\n  1. Default logging verbosity\n  2. Debug logging for all except CRT (i.e., `debug,awscrt=off`)\n  3. Debug logging for all (i.e., `debug,awscrt=debug`)\n  4. Trace logging for all except CRT (i.e., `trace,awscrt=off`)\n  5. Trace logging for all (i.e., `trace,awscrt=trace`)\n\n### Does this change impact existing behavior?\n\nNo breaking change, a new runtime behavior with `USR2` Unix signal.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, will update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-17T13:52:06Z",
          "tree_id": "6d5f6cdff76b161f33ccb8173ed1b7bae72f4f31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1dcafbb49b0f9060b558f451ffab1d41eeec7861"
        },
        "date": 1744906061518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13567.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23073.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33624.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31718.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36200.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9208.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11967.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10077.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 815.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 514.6484375,
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
          "id": "2e293cf8334db3db4bfa3aae53e63d820a91c127",
          "message": "Move FuseSessionConfig out of cli (#1375)\n\nRefactor `FuseSessionConfig` out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T16:09:25Z",
          "tree_id": "6f2a9ebc10aa77c1413d618eb3dfff22120c6f11",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e293cf8334db3db4bfa3aae53e63d820a91c127"
        },
        "date": 1744914269331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12659.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19246.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35258.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38690.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31756.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8968.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11042.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10410.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 876.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 565.5234375,
            "unit": "MiB"
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
          "id": "05f39827035890ced5e62a3824057293bc955279",
          "message": "Add feature flags for manifest (#1376)\n\nWe'd like to have implementation of the manifest hidden behind the\nfeature flag. We enable tests in workflows now, so they will be\ntriggered in the subsequent PRs.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-22T10:26:24Z",
          "tree_id": "72a694f20a19e78b44a622b1659f04bae6a3e31c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f39827035890ced5e62a3824057293bc955279"
        },
        "date": 1745325834858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15384.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24377.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35171.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32692.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37400.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12728.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8699.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12370.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 747.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.03515625,
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
          "id": "f2f2a597b2737a84a54f20893076aebb7c2511a0",
          "message": "Add `fstab` CLI parser (#1362)\n\nIntroduce support for invoking Mountpoint with fstab style arguments:\n```\n./mount-s3 example-bucket /mnt/mountpoint -o rw,auto-unmount,allow-root\n```\n\n### Does this change impact existing behavior?\n\nNo breaking changes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, but not yet. This is still WIP\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-04-24T10:53:24Z",
          "tree_id": "49e84d64c478f8a338ef7d2e63f5fb1595e070ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2f2a597b2737a84a54f20893076aebb7c2511a0"
        },
        "date": 1745500150305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14390.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23916.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36469.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33794.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 379.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36309.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10773.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12833.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13051.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 794.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.09765625,
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
          "id": "77b1dcc58b14bbedecdc67edad63de0353060d81",
          "message": "Add CRT memory limit config to prefetcher and uploader benchmarks (#1379)\n\nIn some benchmarking, we want to experiment with adjusting the CRT's\nmemory limiter to observe the change in throughput performance.\n\nThis change introduces CLI flags to the benchmark scripts (examples)\nthat allows us to directly configure the CRT memory limiter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, impacts benchmarking scripts only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-24T16:10:04Z",
          "tree_id": "96e7729f3ee4c5fc442c6dcbe90529e172fab471",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77b1dcc58b14bbedecdc67edad63de0353060d81"
        },
        "date": 1745519087225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12120.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17655.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33667.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32455.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32518.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7855.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9744.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11105.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 2324.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 644.14453125,
            "unit": "MiB"
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
          "id": "c336f951a4934724f2975f76df24e22c0d299afc",
          "message": "Implement creation of the internal manifest (#1377)\n\nImplement creation of an SQLite database from an iterator of manifest\nentries (in future reading from a file; now from RAM in tests). For more\ncontext see\n[branch](https://github.com/vladem/mountpoint-s3/pull/7/files) where\nmanifest is used to load metadata of the objects.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-25T09:59:44Z",
          "tree_id": "4807717a33f69fbafc0f56456aaf8ff10d827c26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c336f951a4934724f2975f76df24e22c0d299afc"
        },
        "date": 1745583262059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12971.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19595.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33046.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34136.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36696.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10558.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13123.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12030.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 728.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.53515625,
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
          "id": "1c8721ca3da76db2bdc586edb748a75e5379c1eb",
          "message": "Add metrics log output for prefetcher and uploader benchmarks (#1384)\n\nToday, the prefetcher and uploader benchmarks configure the tracing\nlibrary to output logs to `stderr` however no metric sink is installed.\nThis change reuses the metrics module in `mountpoint-s3-fs` to emit\nmetrics in the same way.\n\nIf we want to leverage this in `mountpoint-s3-client`'s\n`client_benchmark`, we'd have to move this to a crate that the client\ncan depend on. I do not think it is worth doing at this time - we plan\nto review how metrics are emitted later this year.\n\nThe motivation for this change now is to support investigation into\nprefetcher performance.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only adds metrics to layer benchmarks.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-25T12:08:55Z",
          "tree_id": "52425983b70a26014b591bef1da6c24e32b72a1b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c8721ca3da76db2bdc586edb748a75e5379c1eb"
        },
        "date": 1745590999281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13304.83984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22252.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32239.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33204.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35700.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10498.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10274.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11740.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 879.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 517.28515625,
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
          "id": "0f68e990b54304f31fa9dc0cbdb33f94298d14b1",
          "message": "Use the Runtime type in the prefetcher (#1382)\n\nModify the prefetcher to use the `Runtime` type (previously\n`BoxRuntime`) instead of a generic parameter implementing `Spawn`.\n\nThis change simplifies the type signatures for many types used by the\nPrefetcher, including `ObjectPartStream` and `DataCache`\nimplementations, in a similar way as already done for the Uploader.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T13:24:05Z",
          "tree_id": "f78bb6d0ec5eedc80a2f47c726b12a16b58bbc9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f68e990b54304f31fa9dc0cbdb33f94298d14b1"
        },
        "date": 1745595700679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10821.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22362.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36433.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31459.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36342.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 409.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10601.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12033.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10959.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 935.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 550.48828125,
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
          "id": "2063e98a96f4b70fb7753af59c2d634b9fbc5aba",
          "message": "Extract ClientConfig from CliArgs (#1380)\n\nThe new `ClientConfig` type captures all the configuration settings used\nto initialize the S3 client. A `ClientConfig` instance can be built from\nthe relevant arguments in `CliArgs`, integrated with the settings\ndetected from `InstanceInfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T15:30:14Z",
          "tree_id": "4843b7a5a432fcabaa7d23f7a278160d718b8f7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2063e98a96f4b70fb7753af59c2d634b9fbc5aba"
        },
        "date": 1745603193878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13401.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19275.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32334.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 351.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33911.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33462.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10224.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10467.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9319.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 960.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 601.9296875,
            "unit": "MiB"
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
          "id": "28278732ffe316bba78560829259cd1590d9c172",
          "message": "Use manifest in readdir and lookup operations (#1383)\n\nUse metadata stored in an sqlite database instead of s3, when performing\nlookup and readdir.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-28T09:07:25Z",
          "tree_id": "6a8e4cbdd5b12523180c4fa1104f10fd5db0acab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28278732ffe316bba78560829259cd1590d9c172"
        },
        "date": 1745839622605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12212.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20375.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35075.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38414.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35745.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10587.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10684.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13341.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 630.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 466.2421875,
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
          "id": "fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b",
          "message": "Extract file system configuration from CliArgs (#1387)\n\nMinor change to extract a `S3FilesystemConfig` from `CliArgs`. Part of\nthe effort to move `CliArgs` out of the `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-28T10:28:42Z",
          "tree_id": "852ed279033cf08b021ab42ac8b398ae15fda01f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b"
        },
        "date": 1745844141743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14216.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20933.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34899.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 366.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33663.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40339.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12935.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12238.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10883.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 676.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.859375,
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
          "id": "b170c5355e085f9b324b4fd882a1c253fdb20fb5",
          "message": "Disable ANSI colors where not supported for fs and client examples (#1385)\n\nSimple change - currently, redirecting the logs to a file will keep ANSI\ncolors. With this change, the scripts will automatically turn off ANSI\ncolors when the standard error output is redirected.\n\nThis change is not urgent as users can turn off ANSI colors using\n`NO_COLOR=1`.\n\n### Does this change impact existing behavior?\n\nFor relevant examples/benchmarks only, ANSI color will be disabled when\nnot supported (i.e. not console output).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-29T10:02:07Z",
          "tree_id": "3d71b5cdead38a987fc6ef47b3582598d33c79cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b170c5355e085f9b324b4fd882a1c253fdb20fb5"
        },
        "date": 1745929116915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13797.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19874.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33821.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34569.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33520.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8607.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11758.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11406.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 779.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 498.59765625,
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
          "id": "2d811308c3e1ed7f62f45fa6fa8538076b074bc3",
          "message": "Remove Prefetch trait (#1388)\n\nSimplify the type signature of `S3Filesystem` and related types by\nremoving the `Prefetch` trait and replacing it with a single\n`Prefetcher` implementation, which has an `ObjectClient` generic\nparameter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T15:20:30Z",
          "tree_id": "8cd468e41a7e85c77349c86f2c06fa1722161e8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d811308c3e1ed7f62f45fa6fa8538076b074bc3"
        },
        "date": 1745948186817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12253.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24863.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35247.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 370.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33404.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36465.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11115.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11060.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13389.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 516.48046875,
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
          "id": "be17e42d1e9c1e859ac9e203beef5e870dc339bf",
          "message": "Adopt finish_non_exhaustive in manual Debug implementations (#1393)\n\nMinor change to improve manual `Debug` implementations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T16:23:20Z",
          "tree_id": "e2ed10a362552378fa47d5f30e45a1327e896da3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be17e42d1e9c1e859ac9e203beef5e870dc339bf"
        },
        "date": 1745951998519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11967.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19014.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32014.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 350.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34618.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35007.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9729.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11679.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10885.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 859.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 561.48828125,
            "unit": "MiB"
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
          "id": "dac707f5639842a6d1dfd7aaf27b43e703e15c7d",
          "message": "Add `disk_data_cache.disk_usage_mib` metric (#1392)\n\nAdd a metric to record the amount of space used by cache as estimated by\nMP internally. Relevant for\nhttps://github.com/awslabs/mountpoint-s3/issues/1389.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-30T10:08:46Z",
          "tree_id": "36914fe0b2e80ff06496de9a8159a89bc410732c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dac707f5639842a6d1dfd7aaf27b43e703e15c7d"
        },
        "date": 1746016009424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13737.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22852.625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34735.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35432.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36770.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10870.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 252.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11900.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11931.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 757.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 578.0625,
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
          "id": "cc3e8aab685367cd8ab8284812970b9a3f51993e",
          "message": "Update benchmark script to always copy env vars (#1394)\n\nThis commit changes the way environment variables are populated when\nrunning the benchmark script. There's no reason for us not to copy\nenvironment variables from the script into the launched subprocesses,\nand adding the functionality allows us to manipulate settings like the\nlogging level without making changes to `benchmark/benchmark.py`.\n\n### Does this change impact existing behavior?\n\nThis change updates the way when using benchmark scripts, FIO and\nMountpoint are launched in `benchmark/` to copy over the existing\nenvironment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-02T09:24:35Z",
          "tree_id": "c541c24d1e2f7b46f5083d2fd6ba19cd14639c77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3e8aab685367cd8ab8284812970b9a3f51993e"
        },
        "date": 1746186302886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14087.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21081.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36822.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 313.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37664.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34816.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12599.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11470.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10459.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 760.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 597.47265625,
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
          "id": "6c89ebe8a879c49b37dc79f9599074ed72f746ca",
          "message": "Combine configuration for supported data cache types (#1395)\n\nIntroduce a new `DataCacheConfig` type to combine configuration for the\ndata cache in Mountpoint. The new type can be configured to enable a\nlocal disk cache, a shared cache in S3 Express One Zone, or both.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T11:15:07Z",
          "tree_id": "c77e81452b0111f2f73bfcb82658c80b2f789988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c89ebe8a879c49b37dc79f9599074ed72f746ca"
        },
        "date": 1746192636713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11916.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20469.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32871.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 296.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32322.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33619.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11517.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10236.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12202.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 937.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 598.22265625,
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
          "id": "764f431d5e588e86dee0facd335f19db9f5d48b5",
          "message": "Introduce MountpointConfig (#1400)\n\nExtract the configuration and the logic to create a new Mountpoint FUSE\nsession out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T16:08:21Z",
          "tree_id": "bb65735360884a42506a09c6bdaeab2edc6041b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/764f431d5e588e86dee0facd335f19db9f5d48b5"
        },
        "date": 1746246641044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13292.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20565.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37951.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 293.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32823.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32639.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10304.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9580.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10989.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1066.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 629.41015625,
            "unit": "MiB"
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746546177797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10171.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16968.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33056.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33383.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33936.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10109.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9700.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11215.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 970.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 677.609375,
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
          "id": "ab791c6d67445b5824629110ce1957001f210179",
          "message": "Move CliArgs and main code to the mountpoint-s3 crate (#1401)\n\nComplete the decoupling of the configuration code from the specific\nCliArgs and initialization logic in the `mount-s3` binary. The latter\nare now in the `mountpoint-s3` crate, while configuring Mountpoint is\nnow part of the `mountpoint-s3-fs` API.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-06T15:05:01Z",
          "tree_id": "ba56fc65648b2f41500a886d094229fd55ff45c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab791c6d67445b5824629110ce1957001f210179"
        },
        "date": 1746552104148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12622.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18407.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31227.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 294.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32543.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32038.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8961.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8371.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11546.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 886.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 596.828125,
            "unit": "MiB"
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
          "distinct": false,
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746619787114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10019.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22597.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32740.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33293.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36500.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10591.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12207.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11926.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 841.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 563.08984375,
            "unit": "MiB"
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
          "distinct": false,
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746635261236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10790.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17539.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33966.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30800.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32379.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9993.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8263.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10732.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1119.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 674.02734375,
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
          "id": "78adb5f947e71b1937b349e555867008975eeb5f",
          "message": "Update CRT submodules (#1404)\n\n**What changed and why?**\nThis pull request updates the CRT submodules (aws-c-cal, aws-c-http,\naws-c-io, aws-c-s3, aws-checksums, aws-lc, s2n-tls) to their latest\ntagged releases.\n\nUpdating these ensures we incorporate the latest bug fixes, security\nupdates, and improvements from the AWS CRT libraries, including\naddressing the issue tracked in\n[#1381](https://github.com/awslabs/mountpoint-s3/issues/1381) related to\navoiding unnecessary Content-Length: 0 headers on GET/HEAD/DELETE\nrequests.\n\n### Does this change impact existing behavior?\n\nThere are no breaking changes to the Mountpoint S3 client or filesystem\nbehavior.\nAll tests (cargo test) passed locally after the update, and changelogs\nhave been updated accordingly.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries have been added to:\n\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n\nVersion numbers have also been updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T10:04:49Z",
          "tree_id": "760739eb6345a678f209b068f69aacdb7c1a5ae2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78adb5f947e71b1937b349e555867008975eeb5f"
        },
        "date": 1746793275657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14283.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21504.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33748.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37956.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38699.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12705.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11099.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10407.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 643.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.796875,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746803611255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13015.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21098.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36612.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32736.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33640.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10302.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11229.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11878.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 517.32421875,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746807531029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12039.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19734.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30112.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 348.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 81.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33588.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33024.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9946.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12276.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11300.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 877.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.80078125,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747052175376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13489.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22549.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35375.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36834.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32617.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10750.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10270.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13705.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 615.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 447.61328125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1420c5a65b778e6e00d1f4d3bdd01172d0dd622a",
          "message": "Add example for new configuration options and manifest (#1403)\n\nThis adds a new example to Mountpoint, which showcases how MP can be\nconfigured via API. In this example, we use the API to set configuration\noptions parsed from a json file.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-13T08:46:58Z",
          "tree_id": "d54f7eaed4e0def99e69fd5c7618ab94a730c1e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1420c5a65b778e6e00d1f4d3bdd01172d0dd622a"
        },
        "date": 1747134187421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12953.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22210.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36205.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33814.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32772.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8657.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10785.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12924.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 800.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.78515625,
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
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747146404021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13386.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22037.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36422.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 82.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32533.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32153.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9518.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10940.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13031.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 776.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.77734375,
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
          "id": "a1a162a36a9157699656ed97f3b178d345254114",
          "message": "Bump astral-sh/setup-uv from 5 to 6 (#1390)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 5\nto 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0 🌈 activate-environment and working-directory</h2>\n<h2>Changes</h2>\n<p>This version contains some breaking changes which have been gathering\nup for a while. Lets dive into them:</p>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#activate-environment\">Activate\nenvironment</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#working-directory\">Working\nDirectory</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#default-cache-dependency-glob\">Default\n<code>cache-dependency-glob</code></a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#use-default-cache-dir-on-self-hosted-runners\">Use\ndefault cache dir on self hosted runners</a></li>\n</ul>\n<h3>Activate environment</h3>\n<p>In previous versions using the input <code>python-version</code>\nautomatically activated a venv at the repository root.\nThis led to some unwanted side-effects, was sometimes unexpected and not\nflexible enough.</p>\n<p>The venv activation is now explicitly controlled with the new input\n<code>activate-environment</code> (false by default):</p>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv and\nactivate the environment\n  uses: astral-sh/setup-uv@v6\n  with:\n    activate-environment: true\n- run: uv pip install pip\n</code></pre>\n<p>The venv gets created by the <a\nhref=\"https://docs.astral.sh/uv/pip/environments/\"><code>uv\nvenv</code></a> command so the python version is controlled by the\n<code>python-version</code> input or the files\n<code>pyproject.toml</code>, <code>uv.toml</code>,\n<code>.python-version</code> in the <code>working-directory</code>.</p>\n<h3>Working Directory</h3>\n<p>The new input <code>working-directory</code> controls where we look\nfor <code>pyproject.toml</code>, <code>uv.toml</code> and\n<code>.python-version</code> files\nwhich are used to determine the version of uv and python to install.</p>\n<p>It can also be used to control where the venv gets created.</p>\n<pre lang=\"yaml\"><code>- name: Install uv based on the config files in\nthe working-directory\n  uses: astral-sh/setup-uv@v6\n  with:\n    working-directory: my/subproject/dir\n</code></pre>\n<blockquote>\n<p>[!CAUTION]</p>\n<p>The inputs <code>pyproject-file</code> and <code>uv-file</code> have\nbeen removed.</p>\n</blockquote>\n<h3>Default <code>cache-dependency-glob</code></h3>\n<p><a href=\"https://github.com/ssbarnea\"><code>@​ssbarnea</code></a>\nfound out that the default <code>cache-dependency-glob</code> was not\nsuitable for a lot of users.</p>\n<p>The old default</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c7f87aa956e4c323abf06d5dec078e358f6b4d04\"><code>c7f87aa</code></a>\nbump to v6 in README (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/382\">#382</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aadfaf08d64f83cdd98eea14fdab8eb08f73656c\"><code>aadfaf0</code></a>\nChange default cache-dependency-glob (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/352\">#352</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a0f9da6273a171f2d94cce2036eaf5a07fefa23c\"><code>a0f9da6</code></a>\nNo default UV_CACHE_DIR on selfhosted runners (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/380\">#380</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ec4c6916287cf1471f9f803d79ef6a0a04520e81\"><code>ec4c691</code></a>\nnew inputs activate-environment and working-directory (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/381\">#381</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aa1290542ebcd3b6932d825ed2b40807f82b2fdd\"><code>aa12905</code></a>\nchore: update known checksums for 0.6.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/378\">#378</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fcaddda076a8158a712b6d64986baf606c446694\"><code>fcaddda</code></a>\nchore: update known checksums for 0.6.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/377\">#377</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fb3a0a97fac846cb3395265a3087ab94ad3ca2a0\"><code>fb3a0a9</code></a>\nlog info on venv activation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/375\">#375</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-14T08:03:22Z",
          "tree_id": "530db272c1f8159fc1ebb78eef733907b3d97719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1a162a36a9157699656ed97f3b178d345254114"
        },
        "date": 1747217818448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12453.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18840.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35570.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32094.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37709.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12111.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11701.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12887.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 716.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.51171875,
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
          "id": "e76a2ad831c2f57758fbb69ad69ab5326e807f2b",
          "message": "Add test demonstrating MP behavior with ABAC IAM policies (#1415)\n\nThis adds new tests to demonstrate/document the behavior of Mountpoint\nwhen trying to implement attribute-based access control (ABAC). The\npurpose here is to simply demonstrate the behavior, so that we can\nunderstand current state/options.\n\n### Does this change impact existing behavior?\n\nNo, new test only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T12:54:04Z",
          "tree_id": "18059fa40acc87fb9f2e0c4187f55392a6047f80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e76a2ad831c2f57758fbb69ad69ab5326e807f2b"
        },
        "date": 1747235347804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12340.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20120.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30868.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33633.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34727.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9440.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11501.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10620.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 730.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.26171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}