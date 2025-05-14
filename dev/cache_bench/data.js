window.BENCHMARK_DATA = {
  "lastUpdate": 1747216955918,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "bde61b2a12350af728aede0c23e7efe6b86974d7",
          "message": "Validate ServerSideEncryption on construction (#1373)\n\nMinor change to validate the server-side encryption configuration\nspecified in the CLI arguments when the `ServerSideEncryption` instance\nis built, rather than in a separate function.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T11:03:58Z",
          "tree_id": "29c4c1d976c80f8fe1d569b4d1096bfab0924918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bde61b2a12350af728aede0c23e7efe6b86974d7"
        },
        "date": 1744894945097,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1929.39052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.5806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 565.25068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.00927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3527.27646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3982.6466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1177.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1197.24287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1267.608984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1185.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.9869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 995.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 958.33876953125,
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
          "id": "b397f65b9b9f41623611c9a9a3ecd4b3f6b11556",
          "message": "Isolate metadata cache configuration in CliArgs (#1374)\n\nMinor change to take the metadata cache configuration out of the `mount`\nfunction.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T13:33:09Z",
          "tree_id": "4aad9a34de86b303eba15949c51a98f72d216eca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b397f65b9b9f41623611c9a9a3ecd4b3f6b11556"
        },
        "date": 1744904036807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1280.06259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.4388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.23193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1499.28369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 454.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.91044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.48330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.3451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4059.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1219.511328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1164.99091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 754.50341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1129.4419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1329.96103515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.90263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.50927734375,
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
        "date": 1744905153427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1277.72978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1988.05322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1464.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.51875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3581.48466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4053.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.954296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.93271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1410.23349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 911.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1184.73623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1246.09833984375,
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
        "date": 1745324907299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1954.1109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.12646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 485.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.34912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.60625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3633.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4119.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1135.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 951.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 818.65810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1372.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1025.4783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 938.314453125,
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
        "date": 1745499227234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1949.34306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1474.815625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.0685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 520.651953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.413671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.3283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3837.5177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4100.1896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1189.97255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1219.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 860.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1446.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.36787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1009.05,
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
        "date": 1745518178037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1243.22119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.1216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.78583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.89716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 554.71845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3623.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3998.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1188.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.9236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 870.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1413.7732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.4802734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.45869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 929.61201171875,
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
        "date": 1745582371667,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.16875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1497.04052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.62275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 477.2185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 330.77578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3710.7580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4011.58955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1241.7166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1218.35576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 797.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 860.667578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1096.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.9728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1432.956640625,
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
        "date": 1745590043740,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.2541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1976.70771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.3287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.57578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.42060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.20078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3613.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.81171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1186.56416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 854.601953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1061.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1250.45126953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1005.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 995.26220703125,
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
        "date": 1745594807055,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.7005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.6203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1468.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.44169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 515.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.15751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3556.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3916.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1227.15283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1409.71572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 854.26591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1055.002734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1088.5541015625,
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
        "date": 1745602198640,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.0794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.69189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.2400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.3443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.13173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.5580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3620.5689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4052.46455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1212.100390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.29873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 875.60625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1374.72626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.92265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1032.843359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1201.46279296875,
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
        "date": 1745838735049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1275.48876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2012.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 821.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 444.29072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.2580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 291.31181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3611.22666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3937.68251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1195.2962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1191.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 868.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1117.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1056.496875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1047.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 965.89775390625,
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
        "date": 1745843272366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.52666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1951.43876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.778125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.58330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.0083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 533.21015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.23173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.39423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3780.19228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1237.69560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1171.671484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 885.8107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1163.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1111.61748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1069.6818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 946.10283203125,
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
        "date": 1745928298505,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.028125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.87138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.489453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.78505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.14052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3695.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4008.38681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1185.832421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1322.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 912.75654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1091.02490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.96455078125,
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
        "date": 1745947244704,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.8724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1962.469140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 774.84599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.67587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 545.74306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.29091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3761.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4343.28046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1174.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.79755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1346.68623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 879.85771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1261.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1011.8498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1243.15654296875,
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
        "date": 1745951012342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.24833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.99501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.58037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.1751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 443.70888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.88642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.9685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3509.26806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3997.79130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.668359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.42392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 933.3775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1370.46474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.84140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1037.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1278.55185546875,
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
        "date": 1746014986629,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.00341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1946.57734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1492.656640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 422.3419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.12724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 296.78828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3738.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.35,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1276.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1173.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 929.05107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1025.96611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1230.23515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 982.66123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 912.27197265625,
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
        "date": 1746191685971,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1282.54267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.88212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.003125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.01640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.98876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 517.4046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.52880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 279.33837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3641.12041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4070.6775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1187.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1196.21845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 925.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 856.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1230.56865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1030.3369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.749609375,
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
        "date": 1746209264576,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.876171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1962.74248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 795.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.90009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.50458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 565.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.96923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.54921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3663.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4153.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.60615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1139.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.156640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 829.666796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1209.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1180.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1282.09375,
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
        "date": 1746209408001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1947.92041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 819.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.1826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 602.34501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.80556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 309.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3640.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4000.21611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1205.313671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1177.08251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1429.52861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 867.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.93291015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 998.77333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1295.775390625,
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
        "date": 1746545284188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.72919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2023.7744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.497265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.494921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 398.55849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.68583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3549.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3946.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1198.1763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1136.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 924.116796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 870.9505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1098.1927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1018.01318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1161.2478515625,
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
        "date": 1746551216666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1195.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.73291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.53818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 484.26328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.15263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3872.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.45908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.62587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 950.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1116.15146484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 980.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1169.38642578125,
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
        "date": 1746618881162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1981.78935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.16259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.13037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.57119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 416.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.18310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.82041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3682.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4136.16083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1134.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1381.2046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 929.384375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1234.07509765625,
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
        "date": 1746634388523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1990.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.98076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1433.74375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.757421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.28720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 326.76708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3632.941796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4203.8419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1220.7927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.98388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1302.86357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1014.4615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1217.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 996.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1082.98828125,
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
        "date": 1746792340093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.15927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.4078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 413.15966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.199609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3608.082421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3988.61650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1179.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 866.218359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 939.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 907.15166015625,
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
        "date": 1746802675894,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1480.5248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.53681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.28798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.56875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3546.738671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3953.92841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1163.66513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1112.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 932.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.60751953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1220.8451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 919.729296875,
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
        "date": 1746806591356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.21728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1948.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.9091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 306.4943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3624.33447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4061.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1167.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.79375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 878.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 889.030078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.01513671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1086.0177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1215.79619140625,
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
        "date": 1747051306728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.63837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.1873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 448.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.22333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 282.16484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3665.91826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3955.76376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1211.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 876.47099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 833.67587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1105.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1138.69501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 977.3021484375,
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
        "date": 1747133274819,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.174609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1984.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.448046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.67568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.81904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.1755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.253515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3657.68603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4059.7974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1186.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 874.36279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1324.6505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1038.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1074.5083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1243.17578125,
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
        "date": 1747145632504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1279.40947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.03662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 815.82841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1493.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.33017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.776953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.27978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3645.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4031.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.41259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 848.05146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1023.50966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1114.0689453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1008.14150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1405.31513671875,
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
        "date": 1747216955116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.469140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1961.82900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 774.75888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.3978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.8060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 553.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.11728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 284.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3836.344140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4252.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1167.0544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1297.70546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1493.10302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.76279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1166.40078125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}