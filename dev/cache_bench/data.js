window.BENCHMARK_DATA = {
  "lastUpdate": 1754495909107,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "distinct": true,
          "id": "68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91",
          "message": "Refactor benchmark.py to extend to prefetcher and other benchmarks (#1507)\n\nThis change extracts fio and mountoint specific code from benchmark.py\nto specific modules to make it cleaner. It also separates the\nconfiguration into sections allowing us to have benchmark specific\nsweeper parameters.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:59:26Z",
          "tree_id": "409aff2851c4ed423fa580e15f7ea647f08445e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91"
        },
        "date": 1752667093979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.55654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2047.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.73515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.74794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.0279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 396.0396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.46298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3277.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4184.4576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1585.33935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1222.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 842.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1268.48896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 895.0171875,
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
          "id": "e104c3f563a175652d359c6e260d501f1b598339",
          "message": "Update CRT submodules to the latest releases (#1520)\n\nUpdate the CRT submodules to the latest releases, picking up in\nparticular: [Move fulfilling pending future outside the lock and ignore\nalready completed futures\n(#536)](https://github.com/awslabs/aws-c-s3/pull/536).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common aaa2f11e..2b67a658:\n  > Add API for a more compact (no dashes) UUID-to-str (#1212)\n  > Add a python script to help pick up the latest cjson and libcbor (#1211)\n  > Fix byte helpers for mingw 32 bit (#1210)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#1209)\n  > Fix signature of aws_backtrace_log (#1206)\n  > Remove clang-3 from CI (#1203)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 10961a70..bfa03928:\n  > support no_proxy excatly like CURL (#522)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#521)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io ee7925a3..12cb9f9c:\n  > stop packing future variable to avoid tsan data race warnings (#741)\n  > Support s2n security policy for TLS 1.2 and FIPS (#739)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 f8ae82e3..70aacd2d:\n  > Move fulfilling pending future outside the lock and ignore already completed futures (#536)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T07:58:37Z",
          "tree_id": "1216fd13514fc370ee60ae71b89d89644f20c951",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e104c3f563a175652d359c6e260d501f1b598339"
        },
        "date": 1752746423773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.21025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1986.02158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.2703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.16884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.87119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.68193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.75654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 232.4109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3661.9875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4216.63466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1214.1998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1221.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 868.4060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 727.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1048.44541015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1170.15810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1104.68515625,
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
          "id": "1623edb9ffa0e589e777aa69f9fba68396abfef2",
          "message": "Update client changelogs with patch release (#1522)\n\nMerge branch 'release/mountpoint-s3-client-0.17' into `main` to update\nthe CHANGELOGs of the client crates after the patch release.\n\n### Does this change impact existing behavior?\n\nNo, docs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdates the changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T18:32:41Z",
          "tree_id": "7064cda0e2e6fb2cec89f9edebeb8771f88bf8b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1623edb9ffa0e589e777aa69f9fba68396abfef2"
        },
        "date": 1752784387416,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.75244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.777734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.0005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.58310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.59033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 449.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.22958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.5724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3576.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4236.99736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1278.10732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1246.31298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1428.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1620.34033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1345.18046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 968.31953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1168.4349609375,
            "unit": "MiB/s"
          }
        ]
      },
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
          "distinct": true,
          "id": "c15079dd3cc9f81cf73de99b4e821cbd5b989a75",
          "message": "Minor fixes to client and prefetch benchmarks for consistency (#1518)\n\nThis change makes prefetch and client benchmarks consistent simplifying\nthe automation\n\n### Does this change impact existing behavior?\n\nNo, client and prefetch benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client and prefetch benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T06:51:47Z",
          "tree_id": "c7a06070cd9041ef2f5b716308821763d3f27ae1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c15079dd3cc9f81cf73de99b4e821cbd5b989a75"
        },
        "date": 1752828672207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2061.9189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1503.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.90595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 505.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 173.7078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3620.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4068.39794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1425.591015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1223.2251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 953.24208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 973.6578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1209.24599609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.292578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 949.426953125,
            "unit": "MiB/s"
          }
        ]
      },
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
          "distinct": true,
          "id": "56e653dc44168ba7be3eb475560b15b09a3a1bb1",
          "message": "Extend benchmark.py to run prefetch, crt and client benchmarks. (#1519)\n\nThis change allows us to run benchmarks at different Mountpoint layers\nwith a common input\n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T07:08:09Z",
          "tree_id": "d804a7b7046acfd2ce33f9542548f7e7080cc7f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56e653dc44168ba7be3eb475560b15b09a3a1bb1"
        },
        "date": 1752829657683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1282.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2012.38583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 850.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.83017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 384.60078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.72705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.39462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3509.34609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4117.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1226.10654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1283.75341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 877.4861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1227.601171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.90732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1183.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1157.83291015625,
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
          "distinct": false,
          "id": "c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e",
          "message": "Add support for custom memory pools (#1516)\n\nIntroduces a `MemoryPool` trait in the client crate which allows users\nto provide their own memory pool implementation. This is part of the\nbroader effort to use a unified memory pool in Mountpoint (see draft PR\n#1511).\n\nThis change introduces:\n* The required code to bridge implementations of the new Rust trait to\nthe CRT pool interface.\n* A simple `MemoryPool` implementation to be used in tests.\n* The `pool_tests` feature flags to use the above pool in the client\ntests, replacing the CRT default pool.\n* A new CI workflow to run the client tests with the custom pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nEntry in the client changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T12:57:54Z",
          "tree_id": "141b6452e1be9f7e92c8829dd1e74de58c0a05a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e"
        },
        "date": 1752850672710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1273.99951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2009.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.56103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1449.89140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 623.7955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 234.541796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3496.9005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.31923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1368.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1269.02265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1356.57314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.0578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.27353515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1043.72177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1202.14609375,
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
          "id": "aad91bc8d91b684c100bf242adea28a6f8e96a06",
          "message": "Split up client and fs integration tests in CI (#1523)\n\nOrganize the integration test workflows in two groups:\n\n1. Client tests, for the `mountpoint-s3-client` crate (and its\ndependencies: `mountpoint-s3-crt` and `mountpoint-s3-crt-sys`)\n2. FS tests, for `mountpoint-s3-fs` and `mountpoint-s3`\n\nBoth groups define a matrix strategy across runners and S3 buckets.\nAdditionally, the first group adds a dimension for the memory pool\n(currently default and test pool), while the second runs tests with FUSE\n2 and 3.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T14:18:26Z",
          "tree_id": "cc52be98a71f4ffc7512ddef1e359de874382248",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aad91bc8d91b684c100bf242adea28a6f8e96a06"
        },
        "date": 1752858073404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1284.23603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2022.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 823.8810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1487.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.48095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 394.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.0462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3725.07958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4110.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1242.17080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1367.18701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 847.0845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1211.8166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1128.28271484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1117.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1412.54345703125,
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
          "id": "44159b564162126a3374a864010a5151f16b88ac",
          "message": "Introduce UploaderConfig (#1526)\n\nGroup configuration parameters to initialize the `Uploader` component\ninto a new struct. It will make easier to introduce new parameters in\nfuture changes.\n\n### Does this change impact existing behavior?\n\nNo. Internal change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T11:26:42Z",
          "tree_id": "746c13a5a9535ff8544322786cdc9e66e334e720",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44159b564162126a3374a864010a5151f16b88ac"
        },
        "date": 1753104156466,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.42998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2042.29814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1455.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.74541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 388.62158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.16787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 272.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3727.5685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4044.8892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1356.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1325.1158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 899.8287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.8671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1364.39482421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1114.6236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 974.46416015625,
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
          "distinct": false,
          "id": "f06dc065a904da06b76a4bc667aa5966ab89e081",
          "message": "Extract meta request type when reserving buffers (#1524)\n\nModify the new `MemoryPool` trait (and the CRT bridge) to propagate the\ntype of the meta request which is reserving the buffer. Requires\nextending bindings to an additional private header from `aws-c-s3` in\norder to access the type of a `aws_s3_meta_request` pointer.\n\n### Does this change impact existing behavior?\n\nNo, the new type information is not used yet.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T12:43:22Z",
          "tree_id": "85098a437513db4098f974f17564649b52e61faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f06dc065a904da06b76a4bc667aa5966ab89e081"
        },
        "date": 1753108689175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.26728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1995.628125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 843.08251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1445.3287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 420.5439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.4693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3427.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4043.9224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1370.10517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1247.2962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 780.31533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1160.20068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1411.34990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1057.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1355.5185546875,
            "unit": "MiB/s"
          }
        ]
      },
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
          "distinct": true,
          "id": "1d416eff9ca92bd805562cedd117fe595e6aff53",
          "message": "Support read sizes up to 1M for fio cached IO benchmarks.  (#1528)\n\nThis change allows configuring fio read sizes for benchmarks. For cached\nIO reads over 256K, the script overwrites the read_ahead_kb on the\ndevice itself.\n\nThis also includes minor cleanup fixes from previous changes. \n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-21T16:50:33Z",
          "tree_id": "c8521a5894d1ed146e45439e6336658b7d16cb3d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1d416eff9ca92bd805562cedd117fe595e6aff53"
        },
        "date": 1753123819185,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.95732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2056.34765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.95029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.77568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.86796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 212.19296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.721875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3386.498828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4069.698046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1307.65107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.782421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 862.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 972.86962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1372.5220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.58681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.6591796875,
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
          "id": "5225d343b271ddb37ff54fda2b90f49809f67ae5",
          "message": "Decouple mem_limiter from client (#1525)\n\nMinor refactor to decouple the memory limiter from the client\nimplementation. The memory limiter only requires the client to retrieve\ninformation about its internal memory pool utilization. This change\nwraps that request in a type-erased closure and drop the generic\nparameter from the memory limiter and all related types.\n\n### Does this change impact existing behavior?\n\nNo. Internal refactor only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-22T05:50:37Z",
          "tree_id": "c0f540a8566d905e020ef12a575fb4b53762664a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5225d343b271ddb37ff54fda2b90f49809f67ae5"
        },
        "date": 1753170489384,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1269.4705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2063.3298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 831.7419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1461.571875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.11962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 444.04638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.828515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3416.60654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4047.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.74677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1233.498828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 810.1517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 814.68232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1137.21142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1047.55302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1372.58466796875,
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
          "id": "f73f89b29d673a3bc29e58b5c1f5e96e74ba534e",
          "message": "[Experimental] Support mounting multiple buckets with CSV manifest (#1506)\n\nImplement `ManifestMetablock` which uses SQLite db as a source of object\nmetadata. This implementation also allows mounting multiple buckets\nwithin a single filesystem. This change is not intended to be applied to\nthe regular `mount-s3` binary, only to `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, change is enabled in example only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, of the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T12:55:13Z",
          "tree_id": "dbbd80fbf7eb4fcb2fbfe447a6380f387d20c280",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f73f89b29d673a3bc29e58b5c1f5e96e74ba534e"
        },
        "date": 1753282560594,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.87001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2005.40283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.891796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.5619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.50517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 618.22802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 175.03515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.13388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3805.8126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4217.1615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1240.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1246.0880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1407.20830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1582.23427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1175.50986328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1074.03955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1317.04052734375,
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
          "id": "65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2",
          "message": "Release crates, mountpoint-s3-fs 0.6.0 (#1531)\n\nUpdate changelogs in preparation for crates release. Crates to be\nreleased:\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n- mountpoint-s3-fs\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T14:29:58Z",
          "tree_id": "55611484499579305e804b526f592752e9440ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2"
        },
        "date": 1753288065252,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1280.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1996.98212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 821.75,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1517.36484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.663671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 513.07158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.6263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.25869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3381.39638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4027.48037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1241.3861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1279.8875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1463.38828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 757.13603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1283.4109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1010.06533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1030.03173828125,
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
          "id": "0d8312a70e9440d9f6d854a7afb25126e176c458",
          "message": "Add custom memory pool implementation (#1529)\n\nIntroduce a custom implementation of a `MemoryPool` which can be used by\nthe CRT S3 client. The new pool will eventually be adopted in\nMountpoint, which will also use it to replace the allocations for disk\ncache blocks and incremental upload buffers.\n\nThis change extends the integration tests on the client crate to run\nwith this pool implementation.\n\nSee docs in `memory/pool.rs` for more details on the new memory pool.\n\n### Does this change impact existing behavior?\n\nNo, the new pool is only used in tests for now. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-23T15:12:29Z",
          "tree_id": "559e4d4caf42f78da3f0c2c2f037708fbe412c8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d8312a70e9440d9f6d854a7afb25126e176c458"
        },
        "date": 1753290717009,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1312.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2027.3962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 840.99404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1513.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.41435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 442.34296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 174.269140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 242.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3458.55546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4207.75166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1309.4423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1282.639453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 805.253515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 784.62236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1110.40400390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1101.1462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1123.25791015625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5732b47f04ed2b9280ada532c5346306625ae218",
          "message": "Add thread ID to log messages. (#1460)\n\nThis helps us to understand what's happening with concurrent operations.\n\n### Does this change impact existing behavior?\n\nChanges log message format slightly by adding thread IDs, which may\nmeans scripts that parse these messages need to change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-07-24T09:15:20Z",
          "tree_id": "350586199d5c03f8d368771e4cf3cd4567db03da",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5732b47f04ed2b9280ada532c5346306625ae218"
        },
        "date": 1753355629551,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1289.2857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2039.275,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.42666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.37626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 525.1970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3397.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3988.68828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1272.647265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.2708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.53837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 798.6447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1307.604296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1183.4255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1392.908203125,
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
          "id": "c209731fbd443d1c3db019fda0ac1c9175d499af",
          "message": "Remove duplicate S3Uri type (#1535)\n\nThe `S3Uri` was almost a complete duplicate of `S3Path`. This change\nremoves it and replaces it with `S3Path` in the few places where it was\nused. It also rearranges the related validation methods and consolidates\ntypes under the `s3` module.\n\n**Note**: I split out the renames and moves into a separate commit for\nease of review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nOnly for `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T11:20:59Z",
          "tree_id": "edabdf4c5d9b4a0acabff60dc5c2b6af04b8efcc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c209731fbd443d1c3db019fda0ac1c9175d499af"
        },
        "date": 1753363042691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2038.5681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 830.75771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1469.034375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.5978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3459.9755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4020.6955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1249.82275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1246.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1391.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1404.65517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1285.00029296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 974.42861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1124.112890625,
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
          "id": "6633db0048d429838f09f65ade1804ff666b6def",
          "message": "Set `mem_limit` in `mount_from_config` example (#1537)\n\nSet `mem_limit` in `mount_from_config` example. The value is retrieved\nfrom a json config.\n\n### Does this change impact existing behavior?\n\nNo, only the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-24T16:52:03Z",
          "tree_id": "dc0a7ab42e8372c268cb4c7db30508a4048c0093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6633db0048d429838f09f65ade1804ff666b6def"
        },
        "date": 1753383110637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.38115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2063.05830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.25146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.06630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 575.216015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 176.59189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.1765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3884.8296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4284.16630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1260.9216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.6923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1073.93759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1319.52724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1067.1630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.04404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1163.04501953125,
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
          "distinct": false,
          "id": "06deaaac0a57e2527c80d90ec2728309ea1ae45a",
          "message": "Fix issue preventing incremental upload to handle very large write part sizes (#1538)\n\nThe append upload queue tries to limit the total memory used to buffer\nthe data to write to 2 GiB. However, when setting `--write-part-size` to\nvalues greater than 2 GiB, it would incorrectly set the queue capacity\nto 0 buffers and panic.\n\nThis change ensures that the queue allows for at least 1 buffer, even if\nthat means exceeding the 2 GiB cap.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:05:59Z",
          "tree_id": "48ab171e8600cb851f60d9a591acd1968efe1fa2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06deaaac0a57e2527c80d90ec2728309ea1ae45a"
        },
        "date": 1753452169295,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.30625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2004.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 772.05322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 399.1662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.0001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.67080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3409.504296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4385.5408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1262.93134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1243.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 809.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1254.66181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.56884765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1000.77236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1256.1099609375,
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
          "distinct": false,
          "id": "15fe956a9e7588de2128f52108af9533cf9ea956",
          "message": "Use a unified memory pool in Mountpoint (#1511)\n\nIntroduces a unified memory pool in Mountpoint. The pool adopts the CRT\npool interface, so it can be used by the CRT client when requesting\nbuffers. Ownership of the buffers is then passed to the prefetcher when\nthey are returned from GetObject requests. The same memory pool is also\nused to serve reads from the local disk cache and for incremental\nuploads.\n\nThe main goal is to reduce overall memory usage and mitigate memory\nfragmentation issues. We may also observe performance gains in some\nscenarios since we can avoid copying the data received from GetObject.\n\n### Does this change impact existing behavior?\n\nNo changes in file system behavior. It will publish new memory-related\nmetrics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires entries in the `fs` and `mount-s3` changelogs and new major\nversions.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:06:27Z",
          "tree_id": "cad4f86f83dd9db2ce67cd92790761cbaedfeb08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15fe956a9e7588de2128f52108af9533cf9ea956"
        },
        "date": 1753452492054,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1343.203515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2212.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.440625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1619.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 306.059375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 454.72509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 174.47158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4007.72158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4480.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1301.38408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1379.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1448.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 823.20283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1344.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 957.131640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 916.98291015625,
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
          "distinct": false,
          "id": "097ab2ee264cbde065592f39155d0cdfc9465f76",
          "message": "Replace full key with S3Location in file handles (#1539)\n\nInternal change to directly propagate `S3Location` in file handles\nrather than the derived `full_key` string. The value is used for logging\nand error report, so we can postpone formatting the string until it is\nneeded.\n\n### Does this change impact existing behavior?\n\nMinor change in string formatting in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:11:05Z",
          "tree_id": "7f0e1c8539c41864f9f3143677aca300f98c9a5d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/097ab2ee264cbde065592f39155d0cdfc9465f76"
        },
        "date": 1753452786618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1362.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2314.32158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 857.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1603.128515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 294.951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 641.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.22626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.90859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3982.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4967.28984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1257.08466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1469.6021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 947.40859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1284.30673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.03525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1165.52412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1009.4791015625,
            "unit": "MiB/s"
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
          "id": "884323ea89ed9dc7ad612b67c7903cb80e35e9ba",
          "message": "Add usages of INITIAL_READ_WINDOW_SIZE (#1541)\n\nReplaces hard-coded initial read window sizes with usages of the\nconstant `INITIAL_READ_WINDOW_SIZE`.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T15:00:09Z",
          "tree_id": "918432d509e5398a0dc5d3e70734fce49b9dc8ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/884323ea89ed9dc7ad612b67c7903cb80e35e9ba"
        },
        "date": 1753462620648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1429.37431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2314.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 875.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1609.78955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.59169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 394.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.432421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4562.245703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4423.688671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1352.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1409.62197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 839.77900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1188.34658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1323.0279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 957.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1559.96318359375,
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
          "id": "581fdeb95dc511ca5ee39409093a75e4ddee0767",
          "message": "Enforce valid buffer sizes for the memory pool (#1540)\n\nThe memory pool will only accept buffer sizes in the range (0, 64MiB]\nfor the primary memory (i.e. allocated in pages of 16 buffers). For\nlarger sizes, it will only use secondary memory (i.e. ad-hoc allocation\nfor a single buffer).\n\nThe 64MiB cap reproduces the behavior of the internal CRT memory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - part of the memory pool change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T15:35:33Z",
          "tree_id": "40d197e8687e15aaff1c27602db0f85d11c71282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/581fdeb95dc511ca5ee39409093a75e4ddee0767"
        },
        "date": 1753464755671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1360.05185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2153.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1658.49072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 459.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.83671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 236.6423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4217.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4505.4693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1434.42041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1393.60234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 896.53310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 787.37822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1386.29580078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1154.06953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1524.18955078125,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "4a5f914f2fda3b4bad1aea57b16da784b41212a4",
          "message": "Make ObjectClient part sizes no longer optional (#1542)\n\nThe `ObjectClient` trait currently defines `read_part_size` and\n`write_part_size` as optional. This abstraction does not apply to any of\nthe existing implementations of the trait and we currently have no plans\nof using it. This change removes this unnecessary abstraction,\nsimplifying the code and avoiding possible confusion.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T16:15:33Z",
          "tree_id": "66d926af874bfa2c6e10d8bfce747ecf98112c80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a5f914f2fda3b4bad1aea57b16da784b41212a4"
        },
        "date": 1753467209733,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1409.669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2095.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 866.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1655.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.750390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 845.3197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.45341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 354.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3997.0912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4395.31318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1494.7435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1377.791796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 880.33349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1265.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1026.61025390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1143.8888671875,
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
          "id": "dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e",
          "message": "Prepare for release of the fs crate v0.7.0 (#1544)\n\nUpdate changelogs of the `fs` and `client` crates to prepare for\nrelease.\n\nAlso include previously missing entry in `client` changelog for #1542,\nand increase the crate version number.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-28T11:01:31Z",
          "tree_id": "13558d258862673afe79a1f9a4eb98ca18ce89ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e"
        },
        "date": 1753707723469,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.8947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2173.840234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 848.2736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1623.1275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 637.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.344921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.87333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4102.271875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4264.83232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1334.2234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1380.848046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 852.09541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1626.8162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1026.69697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1076.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1100.23515625,
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
          "id": "2a9a494442fe164e2119e3c020989c19ce198aae",
          "message": "Automated Benchmark Result Upload (#1527)\n\n### What changed and why?\n\nThis PR adds functionality to automatically upload benchmark results to\nan S3 bucket when benchmarks complete. The implementation includes:\n\n1. A new `detect_result_folder()` function that determines the\nappropriate result folder path and source path based on Hydra's runtime\nconfiguration\n2. A new `upload_results_to_s3()` function that uses AWS CLI to sync\nlocal benchmark results to the specified S3 bucket\n\nThese changes enable automated collection of benchmark results in a\ncentralized S3 location, making it easier to analyze performance trends\nover time.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-07-29T13:13:56Z",
          "tree_id": "a81582905f9e86c18ed7af6a4bd2fb58fc16fe0b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a9a494442fe164e2119e3c020989c19ce198aae"
        },
        "date": 1753801864569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1380.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2129.05859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.22041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1616.66669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 695.28798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.1568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 315.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4188.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4358.02275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1250.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1397.08125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 901.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1261.55400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1194.573046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1143.57548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1487.28994140625,
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
          "id": "720b2e17720e0b2ff7791e2614d20401c72b1f67",
          "message": "Use release flag for prefetcher benchmark (#1547)\n\nHarmonises the use of `--release` compile time flag across benchmarks.\n\nDoes not need a Changelog entry, as it neither changes existing\nbehaviour nor is customer-facing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:28:44Z",
          "tree_id": "3823efe7516dc0113e8565fbcc0cd226ee3b422b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720b2e17720e0b2ff7791e2614d20401c72b1f67"
        },
        "date": 1753889571091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1342.3671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2285.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 827.94423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1663.878125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.18291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 708.73154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.91826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4438.0625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4962.9044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1258.47412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1448.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1607.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 800.97861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1220.33076171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 957.1404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1276.440625,
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
          "distinct": true,
          "id": "315db6035a33a4c9fc568cd9f30a191c0ca3127d",
          "message": "Explicitly specify opt-level, use link-time optimisations (#1548)\n\nExplicitly set the optimisation level for our release builds to 3,\nadditionally enables link time optimisations and uses a single\ncompilation unit -- this enables more optimisations across the full\nlinked codebase.\n\nDoes not need a changelog entry, as it does not change mountpoint's\nbehaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:35:37Z",
          "tree_id": "4f5c1f207414e5cc5e4a8c90029400a3226e1e35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/315db6035a33a4c9fc568cd9f30a191c0ca3127d"
        },
        "date": 1753889808996,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.248828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2317.50634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 897.293359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1634.95029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 311.83994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 503.78427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 289.4513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4495.64482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4145.648828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1428.9294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1428.03642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 947.17802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1232.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1240.858984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.15751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1340.865625,
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
          "id": "8392342436f86c0f05698ab7d545b68a169a54fa",
          "message": "Add versioning of the configuration format in mount_from_config example (#1545)\n\nExample binary `mount_from_config` now accepts `config_version`\nparameter. This may be used to ensure that user is aware of updates to\nthe configuration format and prevent from silent failures.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-31T12:47:38Z",
          "tree_id": "94ffd5ae46b249ae2e2b817a62a3028d22aecdf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8392342436f86c0f05698ab7d545b68a169a54fa"
        },
        "date": 1753973404957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1410.020703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2125.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 848.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1651.32314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.86943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 510.77587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.63720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.9126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4645.906640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4838.4689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1412.30244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1372.06826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1658.43515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1169.59560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1079.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 980.24970703125,
            "unit": "MiB/s"
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
          "id": "0ed5273266768cddf36c4d04f4b175d0e02fb16f",
          "message": "Update logging docs for CSI Driver v2 (#1551)\n\nUpdate logging docs for CSI Driver v2 as in v2 logs are no longer in\nsyslog.\n\nSee\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/LOGGING.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:16:16Z",
          "tree_id": "d963e4a4b4c26756dc660760dbe4085622b7c966",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ed5273266768cddf36c4d04f4b175d0e02fb16f"
        },
        "date": 1754313406258,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1394.79453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2305.4841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.45205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1705.7998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 304.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 629.0876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.2078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4856.23642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4525.0111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1693.47568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1356.67548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1472.26533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1357.24267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1120.410546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1063.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1459.3265625,
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
          "id": "7f8c622cfb7d861afa36f9f8cb2efa2e266a7050",
          "message": "Fix typo in package/README.md (#1558)\n\nFixes a typo in the packaging readme\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-06T13:56:09Z",
          "tree_id": "f6d080301a061edcc1b18d97904fdde0352e85b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f8c622cfb7d861afa36f9f8cb2efa2e266a7050"
        },
        "date": 1754495908137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1330.19267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2214.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 851.37060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1642.838671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.98017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.4517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 176.15849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4019.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4729.24677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1362.2033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 900.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 799.97451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1010.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 997.8158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.67421875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}