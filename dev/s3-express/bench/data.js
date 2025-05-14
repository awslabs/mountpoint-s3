window.BENCHMARK_DATA = {
  "lastUpdate": 1747217732566,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
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
          "id": "b397f65b9b9f41623611c9a9a3ecd4b3f6b11556",
          "message": "Isolate metadata cache configuration in CliArgs (#1374)\n\nMinor change to take the metadata cache configuration out of the `mount`\nfunction.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T13:33:09Z",
          "tree_id": "4aad9a34de86b303eba15949c51a98f72d216eca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b397f65b9b9f41623611c9a9a3ecd4b3f6b11556"
        },
        "date": 1744904913968,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5320.70576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4713.08583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5749.54736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.297265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.49375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.9337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.034765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.512890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.405859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6111.02802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.29140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5200.10107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2033.62841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1483.20087890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1412.77099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.30439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1500.2416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.08330078125,
            "unit": "MiB/s"
          }
        ]
      },
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
        "date": 1744905962032,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5253.35908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4684.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5823.428320312501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.44609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.2201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 129.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.02900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.28818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.54951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6021.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.08271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5175.54853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.88291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1798.2103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.74130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1532.5775390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1332.50712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.33798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1497.24921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1089.21328125,
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
          "id": "2e293cf8334db3db4bfa3aae53e63d820a91c127",
          "message": "Move FuseSessionConfig out of cli (#1375)\n\nRefactor `FuseSessionConfig` out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T16:09:25Z",
          "tree_id": "6f2a9ebc10aa77c1413d618eb3dfff22120c6f11",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e293cf8334db3db4bfa3aae53e63d820a91c127"
        },
        "date": 1744914210534,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5298.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4639.82265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5851.69345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.22080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.46630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.59814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.086328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.16279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.86650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.90673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6116.7658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5174.825,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.72763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1775.02880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.962109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1480.37021484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.64716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.89248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1680.44130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.015234375,
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
          "id": "05f39827035890ced5e62a3824057293bc955279",
          "message": "Add feature flags for manifest (#1376)\n\nWe'd like to have implementation of the manifest hidden behind the\nfeature flag. We enable tests in workflows now, so they will be\ntriggered in the subsequent PRs.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-22T10:26:24Z",
          "tree_id": "72a694f20a19e78b44a622b1659f04bae6a3e31c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f39827035890ced5e62a3824057293bc955279"
        },
        "date": 1745325729370,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5281.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4699.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5833.66748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.5650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.91728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.73701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 129.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.47646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.71806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.55390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5865.99423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.53349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5175.14365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.31611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1933.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.89169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1562.82998046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1498.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.9611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1957.53408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.09091796875,
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
          "id": "f2f2a597b2737a84a54f20893076aebb7c2511a0",
          "message": "Add `fstab` CLI parser (#1362)\n\nIntroduce support for invoking Mountpoint with fstab style arguments:\n```\n./mount-s3 example-bucket /mnt/mountpoint -o rw,auto-unmount,allow-root\n```\n\n### Does this change impact existing behavior?\n\nNo breaking changes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, but not yet. This is still WIP\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-04-24T10:53:24Z",
          "tree_id": "49e84d64c478f8a338ef7d2e63f5fb1595e070ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2f2a597b2737a84a54f20893076aebb7c2511a0"
        },
        "date": 1745499998698,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5258.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4758.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5915.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.32470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.42763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.54384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.83125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.69892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6141.46015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5220.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 512.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2014.47060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.65986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1706.07421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1290.6263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.297265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1546.94052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1054.0796875,
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
          "id": "77b1dcc58b14bbedecdc67edad63de0353060d81",
          "message": "Add CRT memory limit config to prefetcher and uploader benchmarks (#1379)\n\nIn some benchmarking, we want to experiment with adjusting the CRT's\nmemory limiter to observe the change in throughput performance.\n\nThis change introduces CLI flags to the benchmark scripts (examples)\nthat allows us to directly configure the CRT memory limiter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, impacts benchmarking scripts only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-24T16:10:04Z",
          "tree_id": "96e7729f3ee4c5fc442c6dcbe90529e172fab471",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77b1dcc58b14bbedecdc67edad63de0353060d81"
        },
        "date": 1745518940777,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5414.43173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4730.28134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5814.94248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 95.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.17607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 89.75205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.405859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.1080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.9978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.39375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6017.54375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.6427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5254.23642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.12978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1803.69775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1546.28037109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1278.19208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1711.026171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.005078125,
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
          "id": "c336f951a4934724f2975f76df24e22c0d299afc",
          "message": "Implement creation of the internal manifest (#1377)\n\nImplement creation of an SQLite database from an iterator of manifest\nentries (in future reading from a file; now from RAM in tests). For more\ncontext see\n[branch](https://github.com/vladem/mountpoint-s3/pull/7/files) where\nmanifest is used to load metadata of the objects.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-25T09:59:44Z",
          "tree_id": "4807717a33f69fbafc0f56456aaf8ff10d827c26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c336f951a4934724f2975f76df24e22c0d299afc"
        },
        "date": 1745583191403,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5316.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4710.426953124999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5944.080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.79072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.600390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.6974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.7626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.64970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.06337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.93173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.4759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6160.12138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.51240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5124.44609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1801.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.75625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1527.484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1313.015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.5451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1553.24609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.6748046875,
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
          "id": "1c8721ca3da76db2bdc586edb748a75e5379c1eb",
          "message": "Add metrics log output for prefetcher and uploader benchmarks (#1384)\n\nToday, the prefetcher and uploader benchmarks configure the tracing\nlibrary to output logs to `stderr` however no metric sink is installed.\nThis change reuses the metrics module in `mountpoint-s3-fs` to emit\nmetrics in the same way.\n\nIf we want to leverage this in `mountpoint-s3-client`'s\n`client_benchmark`, we'd have to move this to a crate that the client\ncan depend on. I do not think it is worth doing at this time - we plan\nto review how metrics are emitted later this year.\n\nThe motivation for this change now is to support investigation into\nprefetcher performance.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only adds metrics to layer benchmarks.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-25T12:08:55Z",
          "tree_id": "52425983b70a26014b591bef1da6c24e32b72a1b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c8721ca3da76db2bdc586edb748a75e5379c1eb"
        },
        "date": 1745590866561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5322.13857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4705.23095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5888.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.02265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.65908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 126.52890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.53115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.9451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6177.68115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.9783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5184.22763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.309765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1793.098046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.8576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.77490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1378.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.10126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1831.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1010.260546875,
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
          "id": "0f68e990b54304f31fa9dc0cbdb33f94298d14b1",
          "message": "Use the Runtime type in the prefetcher (#1382)\n\nModify the prefetcher to use the `Runtime` type (previously\n`BoxRuntime`) instead of a generic parameter implementing `Spawn`.\n\nThis change simplifies the type signatures for many types used by the\nPrefetcher, including `ObjectPartStream` and `DataCache`\nimplementations, in a similar way as already done for the Uploader.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T13:24:05Z",
          "tree_id": "f78bb6d0ec5eedc80a2f47c726b12a16b58bbc9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f68e990b54304f31fa9dc0cbdb33f94298d14b1"
        },
        "date": 1745595546809,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5250.616796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4649.5865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5859.47646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.36962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.75244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.08720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.37373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.87734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.6947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.89423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.60615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5912.583203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.64638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5101.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1813.3583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1691.92666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1274.766796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.11875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1625.02978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 946.69697265625,
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
          "id": "2063e98a96f4b70fb7753af59c2d634b9fbc5aba",
          "message": "Extract ClientConfig from CliArgs (#1380)\n\nThe new `ClientConfig` type captures all the configuration settings used\nto initialize the S3 client. A `ClientConfig` instance can be built from\nthe relevant arguments in `CliArgs`, integrated with the settings\ndetected from `InstanceInfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T15:30:14Z",
          "tree_id": "4843b7a5a432fcabaa7d23f7a278160d718b8f7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2063e98a96f4b70fb7753af59c2d634b9fbc5aba"
        },
        "date": 1745603087670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5324.77802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4715.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5902.5494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.34287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.6095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.915625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.839453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.25556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.161328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6052.50947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.87783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5133.2892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2097.44453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.06787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1584.25146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1089.7130859375,
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
          "id": "28278732ffe316bba78560829259cd1590d9c172",
          "message": "Use manifest in readdir and lookup operations (#1383)\n\nUse metadata stored in an sqlite database instead of s3, when performing\nlookup and readdir.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-28T09:07:25Z",
          "tree_id": "6a8e4cbdd5b12523180c4fa1104f10fd5db0acab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28278732ffe316bba78560829259cd1590d9c172"
        },
        "date": 1745839503946,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5227.18466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4682.1080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5851.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.6966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.84091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.8728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.82333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.48447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.1892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.8794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6207.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.7298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5247.42763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.0708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1780.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1591.41572265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1341.39326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.63974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1527.63740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1025.85791015625,
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
          "id": "fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b",
          "message": "Extract file system configuration from CliArgs (#1387)\n\nMinor change to extract a `S3FilesystemConfig` from `CliArgs`. Part of\nthe effort to move `CliArgs` out of the `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-28T10:28:42Z",
          "tree_id": "852ed279033cf08b021ab42ac8b398ae15fda01f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b"
        },
        "date": 1745844092306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5286.9890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4673.36630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5838.491992187501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.0583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.87744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.6873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.046484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.98154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6027.175,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.8814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5195.71181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 521.2791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1801.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.66123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1506.2953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.78916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.72529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1504.79248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1018.23037109375,
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
          "id": "b170c5355e085f9b324b4fd882a1c253fdb20fb5",
          "message": "Disable ANSI colors where not supported for fs and client examples (#1385)\n\nSimple change - currently, redirecting the logs to a file will keep ANSI\ncolors. With this change, the scripts will automatically turn off ANSI\ncolors when the standard error output is redirected.\n\nThis change is not urgent as users can turn off ANSI colors using\n`NO_COLOR=1`.\n\n### Does this change impact existing behavior?\n\nFor relevant examples/benchmarks only, ANSI color will be disabled when\nnot supported (i.e. not console output).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-29T10:02:07Z",
          "tree_id": "3d71b5cdead38a987fc6ef47b3582598d33c79cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b170c5355e085f9b324b4fd882a1c253fdb20fb5"
        },
        "date": 1745929005182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5256.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4675.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5823.075390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.87744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.12041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.66865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.52392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.78984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.23544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6106.74580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.4232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5189.51728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.98212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1871.836328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.0388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1491.13232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.24599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.0837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1605.3333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.63359375,
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
          "id": "2d811308c3e1ed7f62f45fa6fa8538076b074bc3",
          "message": "Remove Prefetch trait (#1388)\n\nSimplify the type signature of `S3Filesystem` and related types by\nremoving the `Prefetch` trait and replacing it with a single\n`Prefetcher` implementation, which has an `ObjectClient` generic\nparameter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T15:20:30Z",
          "tree_id": "8cd468e41a7e85c77349c86f2c06fa1722161e8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d811308c3e1ed7f62f45fa6fa8538076b074bc3"
        },
        "date": 1745948053041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5249.15107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4747.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5884.917578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 97.901953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.64697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.829296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.68017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.54189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.84794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.88232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6157.69462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.70517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5203.24853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1998.60458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.54365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1875.604296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1411.3306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.52646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1593.91787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1039.341015625,
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
          "id": "be17e42d1e9c1e859ac9e203beef5e870dc339bf",
          "message": "Adopt finish_non_exhaustive in manual Debug implementations (#1393)\n\nMinor change to improve manual `Debug` implementations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T16:23:20Z",
          "tree_id": "e2ed10a362552378fa47d5f30e45a1327e896da3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be17e42d1e9c1e859ac9e203beef5e870dc339bf"
        },
        "date": 1745951853576,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5297.55263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4695.32333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5872.84111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.39384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.210546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.69619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.72158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.2791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6147.30078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.2046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5253.2947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.11064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2034.93837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.37578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1540.09482421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.0951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.90048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1955.32080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.72685546875,
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
          "id": "dac707f5639842a6d1dfd7aaf27b43e703e15c7d",
          "message": "Add `disk_data_cache.disk_usage_mib` metric (#1392)\n\nAdd a metric to record the amount of space used by cache as estimated by\nMP internally. Relevant for\nhttps://github.com/awslabs/mountpoint-s3/issues/1389.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-30T10:08:46Z",
          "tree_id": "36914fe0b2e80ff06496de9a8159a89bc410732c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dac707f5639842a6d1dfd7aaf27b43e703e15c7d"
        },
        "date": 1746015758533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5222.709765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4679.58369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5889.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.05361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.3923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.90322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.55498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.26259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.878125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.70390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6017.6255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.083203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5187.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.844921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2062.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.559765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1471.09296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1407.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.3947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1882.2052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1043.50712890625,
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
          "id": "6c89ebe8a879c49b37dc79f9599074ed72f746ca",
          "message": "Combine configuration for supported data cache types (#1395)\n\nIntroduce a new `DataCacheConfig` type to combine configuration for the\ndata cache in Mountpoint. The new type can be configured to enable a\nlocal disk cache, a shared cache in S3 Express One Zone, or both.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T11:15:07Z",
          "tree_id": "c77e81452b0111f2f73bfcb82658c80b2f789988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c89ebe8a879c49b37dc79f9599074ed72f746ca"
        },
        "date": 1746192569328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5343.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4629.9013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5851.67958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.34033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.027734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.890234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 125.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.02109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.673046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6020.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 508.1935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5140.6974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 504.05185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2123.07705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.34345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1512.981640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1227.3150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.64892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1599.39853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.0703125,
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
          "id": "cc3e8aab685367cd8ab8284812970b9a3f51993e",
          "message": "Update benchmark script to always copy env vars (#1394)\n\nThis commit changes the way environment variables are populated when\nrunning the benchmark script. There's no reason for us not to copy\nenvironment variables from the script into the launched subprocesses,\nand adding the functionality allows us to manipulate settings like the\nlogging level without making changes to `benchmark/benchmark.py`.\n\n### Does this change impact existing behavior?\n\nThis change updates the way when using benchmark scripts, FIO and\nMountpoint are launched in `benchmark/` to copy over the existing\nenvironment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-02T09:24:35Z",
          "tree_id": "c541c24d1e2f7b46f5083d2fd6ba19cd14639c77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3e8aab685367cd8ab8284812970b9a3f51993e"
        },
        "date": 1746210214046,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5242.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4691.23037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5872.042871093749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 96.97548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.6791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.887109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.44462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.827734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.7541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.616796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6035.03642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.8724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5162.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2037.80068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1483.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1285.75224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.63818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1461.15302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1066.21142578125,
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
          "id": "764f431d5e588e86dee0facd335f19db9f5d48b5",
          "message": "Introduce MountpointConfig (#1400)\n\nExtract the configuration and the logic to create a new Mountpoint FUSE\nsession out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T16:08:21Z",
          "tree_id": "bb65735360884a42506a09c6bdaeab2edc6041b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/764f431d5e588e86dee0facd335f19db9f5d48b5"
        },
        "date": 1746246519036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5272.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4713.48408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5781.64970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.54013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.53232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.6421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 129.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.81083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.891015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.27119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5763.52236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 508.97626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5152.77080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 506.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1770.19052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.20380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1486.74404296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1327.69462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.10673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1717.57841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1055.66748046875,
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746546099306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5174.77998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4635.37705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5826.651464843751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 93.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.86142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 86.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 125.23564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.8689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.60458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.3994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.21767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6103.84619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.16513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5154.9142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 504.085546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1993.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1727.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1202.68779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.52275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1923.555859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1018.85966796875,
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
          "id": "ab791c6d67445b5824629110ce1957001f210179",
          "message": "Move CliArgs and main code to the mountpoint-s3 crate (#1401)\n\nComplete the decoupling of the configuration code from the specific\nCliArgs and initialization logic in the `mount-s3` binary. The latter\nare now in the `mountpoint-s3` crate, while configuring Mountpoint is\nnow part of the `mountpoint-s3-fs` API.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-06T15:05:01Z",
          "tree_id": "ba56fc65648b2f41500a886d094229fd55ff45c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab791c6d67445b5824629110ce1957001f210179"
        },
        "date": 1746551937053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5255.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4700.08974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5887.858105468749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.29970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.60283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.5353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.39443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.14951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.28037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.50703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.99404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6149.040234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.95048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5198.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 510.0775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1747.36884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1520.14873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1294.2677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.1599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1809.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1025.4947265625,
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
          "distinct": false,
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746619636762,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5256.38896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4701.6494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5802.254296874999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.55224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.7650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.65751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 126.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.24521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.05595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6017.297265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 513.8931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4963.90205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 510.523828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1969.54140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.005078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1503.64267578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1332.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1669.0966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1074.37021484375,
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
          "distinct": false,
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746635096807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5187.10927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4655.64873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5891.4453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 94.1875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.94638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 89.04833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.2666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.08828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.368359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.130078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6027.83310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.4669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5087.97451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 509.0599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1828.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.97919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1509.92080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1526.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.99736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1511.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1022.7306640625,
            "unit": "MiB/s"
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
        "date": 1746793128337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5178.251171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4706.01826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5852.7748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.1859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.25166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 125.42197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.8607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.81064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.27646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6076.96640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 508.88291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5223.44033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 506.57734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1866.42841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.55087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.62578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1348.14501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.2857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1728.3736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1148.700390625,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746803514108,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5282.920703125001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4683.84306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5851.2109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.18076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.2025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 129.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.73408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.58876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5971.996484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.12578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5226.83525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.036328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1793.66875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.30234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.049609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1400.10087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.94931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1701.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.923046875,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746807324613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5222.35927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4710.60263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5864.3421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.37734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.76689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.56962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 129.74423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.65791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.88349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.62451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.65,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5996.8294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.86513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5272.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.9259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1859.63251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.9994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1471.5771484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1535.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.55283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1602.58974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.04287109375,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747052099062,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5289.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4833.39736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5868.75439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.36884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.0328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.85498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.5138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.621875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6198.7638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.73310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5180.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1814.95400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.394921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.3123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.1787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1504.24365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1103.26767578125,
            "unit": "MiB/s"
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
        "date": 1747134023352,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5232.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4684.09169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5854.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.6265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.188671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.977734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.9712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.00380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5977.36162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.0865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5111.89697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.6384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2070.95634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.22099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1409.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1271.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.590625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1500.06337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1045.68251953125,
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
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747146442817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5238.03720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4674.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5821.3505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.95615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.58232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 129.583203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.25234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.50810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.50830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.05810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6093.62421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.74453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5082.17216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.01396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1851.1103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.2767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1476.49619140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1251.28271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.66591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1718.90703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1084.05546875,
            "unit": "MiB/s"
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
        "date": 1747217731516,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5207.994433593751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4723.9060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5841.300683593749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.28681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.414453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.10908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.10322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.4203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.548046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.61875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6243.4279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.31298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5144.569140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 512.23427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1698.8072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.22568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1569.1845703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1426.565625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.07841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1739.47958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.531640625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}