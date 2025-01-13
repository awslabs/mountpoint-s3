window.BENCHMARK_DATA = {
  "lastUpdate": 1736770579642,
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
          "distinct": true,
          "id": "688ec178f5394a174ae0460e7a521a23b4862cc5",
          "message": "Update CRT submodules to latest releases (#1195)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Support full object checksum and crc64nvme.\n([awslabs/aws-c-s3#468](https://github.com/awslabs/aws-c-s3/pull/468))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common be8ed873..fadfef49:\n  > Support relative paths when prebuilding dependencies with CMake (#1174)\n  > Switch CI to use roles (#1173)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 45894ed3..337155f6:\n  > Support full object checksum (#468)\n  > [meta request]: assign shutdown_callback inside critical region (#470)\n  > Switch CI to use roles (#463)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T14:34:31Z",
          "tree_id": "a76eb1fedb360c0d9396cc8f471c8043976b20b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/688ec178f5394a174ae0460e7a521a23b4862cc5"
        },
        "date": 1733848653845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.3970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1990.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.79189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.1701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.38828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 537.68671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.82724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3723.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4014.590234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1133.819921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1148.83505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 900.64189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 992.83349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1096.10390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1098.278125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 922.780859375,
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
          "id": "441a5025600604e8bcf38ef991f200436f5148ff",
          "message": "Allow partial repeat of `readdir` response (#965)\n\n## Description of change\nWhen user application gets interrupted in a `readdir` syscall the\nunderlying chain of `readdir` fuse requests gets reset to an offset\nwhich is considered stale by Mountpoint. In that case Mountpoint still\ncompletes the interrupted `readdir` request, but kernel partially\ndiscards the response. We already cache the last response, so we can use\nit to serve the request which follows the interrupt.\n\nRelevant issues: https://github.com/awslabs/mountpoint-s3/issues/955\n\n## Does this change impact existing behavior?\n\nThis is not a breaking change. Previously an error was returned, now\nit'll be handled properly.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-10T17:03:49Z",
          "tree_id": "6c94fffcbf7a1071bef1b3ce6ba35f0a5bb6a611",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/441a5025600604e8bcf38ef991f200436f5148ff"
        },
        "date": 1733857309916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.2388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1979.02685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 817.6779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.73701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.1486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.00263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.53603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 348.34951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3676.27998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3908.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1108.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1126.78251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1354.04599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1176.95361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1057.10029296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 967.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1237.67158203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "caaa11b6543d5d5a5848834df514354c8fed8cb9",
          "message": "Add label to errno in error message for clarity (#1197)\n\nThis change improves the clarity of [fuse_error with\nerrono](https://github.com/awslabs/mountpoint-s3/pull/1189).\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2024-12-10T17:06:26Z",
          "tree_id": "81f8266c7b36539e9f9f593aaca6417786b4525d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caaa11b6543d5d5a5848834df514354c8fed8cb9"
        },
        "date": 1733857460494,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1952.801171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.7587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.57373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 532.75458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 332.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3550.40107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3931.47021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1128.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1144.35537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1426.3953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 987.55751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1046.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 967.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1001.23115234375,
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
          "id": "9d1196d169a67001b1a13ddc109eeddb9f5fb11f",
          "message": "Upgrade crates to latest versions (#1196)\n\nUpgrade all dependencies to the latest versions. Fix minor breaking\nchange in the API for `sysinfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T17:13:22Z",
          "tree_id": "f5271c3d8242c08adcc4e19829b8067eed11dc36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d1196d169a67001b1a13ddc109eeddb9f5fb11f"
        },
        "date": 1733857913699,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1255.16435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1955.959375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.5072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 537.51904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3654.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4054.1802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1143.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 834.43671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1217.119921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1034.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 915.90341796875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eecf301ec9fe538fcffde4459563124161669568",
          "message": "Create new latency benchmark for writing of one-byte files (#1190)\n\nCreates a new latency benchmark for writing of one-byte files. Also\ncreates a folder for writing latency benchmarks and extends the\n`fs_latency_bench.sh` script to handle multiple folders.\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-11T09:56:25Z",
          "tree_id": "347ab79ed636947f9dda697ea1efc77e5fb4ef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eecf301ec9fe538fcffde4459563124161669568"
        },
        "date": 1733918324299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1982.734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.28916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.68798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.6111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 510.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 311.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3568.5587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4007.0701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1175.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1128.92822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 886.4541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 947.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1056.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1038.207421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.16416015625,
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
          "id": "f09ac0c765ebfce6fa71a01caf3e3534f1d71e59",
          "message": "Remove workaround for macOS builds due to pkg-config issues (#1202)\n\nIn November, macOS runners had an issue with the `pkg-config` package\nand we introduced a workaround:\nhttps://github.com/awslabs/mountpoint-s3/pull/1158/\n\nWe see now that the fix has been released and we should no longer need\nthe workaround: https://github.com/actions/runner-images/issues/10984.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T14:01:36Z",
          "tree_id": "6d86e38850362a6cc19e08263594a8736389406b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f09ac0c765ebfce6fa71a01caf3e3534f1d71e59"
        },
        "date": 1734451546279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.792578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1974.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 787.87783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.3185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 505.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.9603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.1990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3604.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4027.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1133.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.06484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1404.87275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 788.615625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1011.33037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.732421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d5b36e8ff116a3f02be6c37c1112f7793b162430",
          "message": "Improve get_object interface for backpressure (#1200)\n\nCurrently, we support flow-control window for GetObject requests by\nallowing applications to call `GetObjectResponse::increment_read_window`\nbut it is tricky to use because we need to hold onto the stream itself\nin order to control the feedback loop while also consuming the data.\n\nThis change introduces a new trait `ClientBackpressureHandle` for\ncontrolling the read window so that the stream and the flow-control\npaths are decoupled.\n\nApplications can now call `GetObjectResponse::take_backpressure_handle`\nto get a backpressure handle from the response and use this handle to\nextend the read window.\n\n### Does this change impact existing behavior?\n\nYes, there is a breaking change for `mountpoint-s3-client`.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-12-17T14:03:09Z",
          "tree_id": "02f6ff16f04c91b79e790bfc1e5a804f3fe763aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d5b36e8ff116a3f02be6c37c1112f7793b162430"
        },
        "date": 1734452032902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.6693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1930.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.59072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 563.34560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.50185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.9744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3577.8197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.9818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1141.17392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.15537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1383.6216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 813.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1084.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1056.5494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.0087890625,
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
          "id": "631e6e06772ebc111896d29dac751de7ff5e0d1c",
          "message": "Address shadowing divergence in reftest, update semantics doc (#1201)\n\nThis commit addresses a case where MP model and property tests diverge\n(https://github.com/awslabs/mountpoint-s3/pull/1066). The issue was\ncaused by the reference not correctly implementing the shadowing order\ndefined in\n[#4f8cf0b](https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53).\nThis commit fixes the reference model, and clarifies the semantics\narising from concurrent MPUs.\n\nThis is not a breaking change, as it only impacts the reference tests.\n\nThis does not need a Changelog entry, as the change does not impact\nMountpoint's behaviour.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-12-17T15:52:11Z",
          "tree_id": "f2cf3b21c547261f4b81944038c76716c7245d62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631e6e06772ebc111896d29dac751de7ff5e0d1c"
        },
        "date": 1734457927525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.55390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.385546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.28203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.93525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.82001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 315.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3813.52578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4039.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.93837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.739453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 841.283984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1028.31533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1270.56015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1069.7884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1222.0154296875,
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
          "id": "602f371ff81ec89de5e6067fc09b7b7825d783ee",
          "message": "Add support for passing FUSE file descriptors as mount point (#1103)\n\n## Description of change\n\nfuser v0.15.0 added support for creating a `Session` from existing FUSE\nfile descriptor (via `Session::from_fd`). This PR adds this support to\nMountpoint. It allows passing FUSE file descriptor as mount point in the\nform of `/dev/fd/{fd}`.\n\nAn example usage of this feature can be seen with a helper Go script,\n[mounthelper.go](https://github.com/awslabs/mountpoint-s3/blob/86bdefa5147a7edc533a6be5d2724fec74ba91fb/examples/fuse-fd-mount-point/mounthelper.go):\n\n```bash\n$ go build mounthelper.go\n$ sudo /sbin/setcap 'cap_sys_admin=ep' ./mounthelper # `mount` syscall requires `CAP_SYS_ADMIN`, alternatively, `mounthelper` can be run as root\n$ ./mounthelper -mountpoint /tmp/mountpoint -bucket bucketname\nbucket bucketname is mounted at /dev/fd/3\n2024/11/07 17:23:42 Filesystem mounted, waiting for ctrl+c signal to terminate \n\n$ # in a different terminal session\n$ echo \"Hello at `date`\" > /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\nHello at Thu Nov  7 17:32:33 UTC 2024\n$ rm /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\ncat: /tmp/mountpoint/helloworld: No such file or directory\n```\n\nRelevant issues: This PR resurrects a previous PR to add this feature:\nhttps://github.com/awslabs/mountpoint-s3/pull/537\n\n## Does this change impact existing behavior?\n\nShouldn't affect any existing behavior as we had an “is directory?”\ncheck for passed mount points before, and it shouldn't have been\npossible to pass a file descriptor as a mount point prior to this\nchange.\n\n## Does this change need a changelog entry in any of the crates?\n\nUpdated CHANGELOG for `mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T16:56:59Z",
          "tree_id": "1a210e077e88bc40a945a0b79f33981f0461f3fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/602f371ff81ec89de5e6067fc09b7b7825d783ee"
        },
        "date": 1734462058303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.94580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1955.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.09716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.426171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 521.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.0015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.3490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3613.91298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4017.73154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1227.2966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1152.3669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 850.0353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1405.12314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1068.71396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.52841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1415.7123046875,
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
          "id": "3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545",
          "message": "Wait for CreateMPU before returning from put_object (#1192)\n\n`S3CrtClient::put_object` was originally implemented so that it would\ncomplete immediately and return a `PutObjectRequest` implementation. Any\nerror from the S3 request would only be returned on calling `write` or\n`complete` on the `PutObjectRequest`. With this change, we modify\n`put_object` to await for the initial `CreateMultipartUpload` request to\ncomplete and only then either return a `PutObjectRequest` or propagate\nthe error from the request. This is analogous to what done for\n`get_object` in #1171 and addresses an issue where errors were not\npropagated correctly (#1007).\n\nAt the file handle level, however, we still want the `open` operation to\ncomplete quickly, without waiting for `CreateMultipartUpload` to\ncomplete. In order to preserve the previous behavior, `upload::atomic`\nwas adapted to spawn a concurrent task in the background when calling\n`put_object`.\n\n### Does this change impact existing behavior?\n\nYes.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`. No user-visible changes in\n`mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-18T09:46:54Z",
          "tree_id": "9de535c6c2542ad4b28ec6a8fbe5a446d1fb38a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545"
        },
        "date": 1734522520653,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1267.33583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1978.48349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.4046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.09130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 585.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 302.85146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3609.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4093.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1234.272265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1194.85126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1301.8119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1234.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1092.8791015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1049.12841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1437.02158203125,
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
          "distinct": false,
          "id": "641f613c0339c1ba6bc9c53a55d37dc358f73b55",
          "message": "Emit shared cache durations in cache hit, miss and error conditions (#1162)\n\nAdds additional duration metrics to the shared cache for cache hits,\nmisses, and errors.\n\nExample metrics:\n```\n2024-12-06T14:11:43.012775Z  INFO mountpoint_s3::metrics: express_data_cache.block_err[reason=invalid_block_offset,type=read]: 189 (n=189)\n2024-12-06T14:11:43.012802Z  INFO mountpoint_s3::metrics: express_data_cache.block_hit: 0 (n=189)\n2024-12-06T14:11:43.012817Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=error]: n=189: min=3 p10=3 p50=4 avg=3.87 p90=5 p99=5 p99.9=6 max=6\n2024-12-06T14:11:43.012831Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=write]: 380 (n=190)\n2024-12-06T14:11:43.012844Z  INFO mountpoint_s3::metrics: express_data_cache.write_duration_us[type=ok]: n=190: min=8256 p10=8511 p50=8895 avg=8882.19 p90=9343 p99=9535 p99.9=9663 max=9663\n```\n\nAnd\n```\n2024-12-06T16:06:14.462602Z  INFO mountpoint_s3::metrics: express_data_cache.block_hit: 98 (n=100)\n2024-12-06T16:06:14.462628Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=miss]: n=2: min=21120 p10=21247 p50=21247 avg=21824.00 p90=22527 p99=22527 p99.9=22527 max=22527\n2024-12-06T16:06:14.462641Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=ok]: n=98: min=5888 p10=6015 p50=6271 avg=6378.94 p90=6559 p99=14079 p99.9=14079 max=14079\n2024-12-06T16:06:14.462652Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=read]: 196 (n=98)\n2024-12-06T16:06:14.462663Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=write]: 4 (n=2)\n2024-12-06T16:06:14.462673Z  INFO mountpoint_s3::metrics: express_data_cache.write_duration_us[type=ok]: n=2: min=9408 p10=9471 p50=9471 avg=19280.00 p90=29183 p99=29183 p99.9=29183 max=29183\n\n```\n\nAdditionally refactors the cache in response to comments in\nhttps://github.com/awslabs/mountpoint-s3/pull/1146\n\n### Does this change impact existing behavior?\n\nYes, the `express_data_cache.read_duration_us` metric now has a type\nassociated with if it was a cache hit or not.\n\n### Does this change need a changelog entry?\n\nNo, changes to metrics don't need changelog entries.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-20T16:56:57Z",
          "tree_id": "8b2b056f261209a201e29e4b9582662287eb74de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/641f613c0339c1ba6bc9c53a55d37dc358f73b55"
        },
        "date": 1734721031797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.9626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.36767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.85712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1483.135546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.30615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 446.34638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.51552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 291.23564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3596.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3981.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1195.751171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1140.3830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1413.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1184.394140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1129.690234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1078.93203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1107.75732421875,
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
          "id": "4284e644b78d9d35124feb7e3a81adbed1609c91",
          "message": "Store the name of a mounted bucket in block's metadata (#1208)\n\nThe field `x-amz-meta-source-bucket-name` of the cache block was\nintended to store the name of the mounted bucket (source bucket).\nCurrently it stores the name of the cache bucket.\n\n### Does this change impact existing behavior?\n\nYes, we update the version of the block schema. All blocks written with\nprevious versions of Mountpoint won't be accessible (attempts will be\ncache misses).\n\n### Does this change need a changelog entry?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-03T16:12:07Z",
          "tree_id": "fa59588b62b86b10009fa7c474cc3d114651d0b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4284e644b78d9d35124feb7e3a81adbed1609c91"
        },
        "date": 1735927998366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.953515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1991.8841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.2775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.3650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.62001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 447.04287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.346484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.67646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3695.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3847.349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1171.57607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1136.6578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1326.19365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 880.315234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1160.90673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1202.90009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1082.0806640625,
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
          "id": "89873a9331a0d568f8a03056cbc466d2e2ae44b3",
          "message": "Add rustdoc tests to CI (#1210)\n\nThere's a few rustdoc tests in the code base however CI did not\npreviously ensure they passed or even compiled. This change fixes broken\ndoctests and adds a new job to run these in CI.\n\nThis will allow us to write new doctests and be sure that they will be\nvalidated by CI. For example, we may wish to write doctests asserting\nsafety justifications.\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry?\n\nNo, this changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:12:33Z",
          "tree_id": "0007ac658a6679f74f3b8c75acabaa8ec2c009b6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89873a9331a0d568f8a03056cbc466d2e2ae44b3"
        },
        "date": 1736255521638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1277.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1936.53232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.2623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.5953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.69970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 403.40107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.051171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.1439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3675.31865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3994.5171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.13076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1166.9720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 835.8908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 946.30556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.27763671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1100.37626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1298.70400390625,
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
          "id": "91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14",
          "message": "Update CRT `HeadersError` enum to include header name (#1205)\n\nWe recently saw an error in #1199 where \"Header not found\" was emitted,\nbut its really unclear what header was missing.\n\n2024-12-12T18:33:59.379478Z WARN flush{req=1609 ino=2 fh=1 pid=29257\nname=\"testfile_100M.bin\"}: mountpoint_s3::fuse: flush failed: put\nfailed: put request failed: Client error: Internal S3 client error:\nHeader not found\n\nThis change updates the `HeadersError::HeaderNotFound` enum variant to\ncontain a copy of the header name, such that error messages can emit it\nfor debugging purposes.\n\nIt may make more sense to have all the header names we use statically\ndefined somewhere, such that we could include a static reference to the\nheader and avoid allocating for an error message. However, we don't\nexpect there to be any performance regression introduced by this change.\nThis move to static values could be made later.\n\n### Does this change impact existing behavior?\n\nHeader not found and invalid header value errors will now include the\nheader name when printing the error message.\n\nThe enum variants change meaning any code using the enum may be\nimpacted.\n\n### Does this change need a changelog entry?\n\nNot for Mountpoint itself. I have added a change log entry to\n`mountpoint-s3-crt` since it is a breaking API change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:44:46Z",
          "tree_id": "472fef60ac68484102c83b0b18130d6e088c230c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14"
        },
        "date": 1736257472733,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1970.8712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 796.9017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.8521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.209375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 432.04755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.0220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.27421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3638.46142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3934.43994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1150.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1152.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1202.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 809.79091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1156.64677734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1018.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 979.89111328125,
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
          "id": "866ee1c509ca513f0f41122a5f7153bf223ec259",
          "message": "Improve tracing and assertion messages for reftests (#1211)\n\nThis change adds some additional tracing to reftests and makes some\nadjustments to assertion messages to make it clearer why we assert what\nwe assert and would return a better message when things go wrong.\n\nThere are no significant changes, this is primarily readability and\ndebugging improvements.\n\n### Does this change impact existing behavior?\n\nNo change to behavior of Mountpoint or its libraries.\n\n### Does this change need a changelog entry?\n\nNo, no behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T15:41:52Z",
          "tree_id": "b2b2f32cf333ef210f081af8c13eb7b7cd121d94",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/866ee1c509ca513f0f41122a5f7153bf223ec259"
        },
        "date": 1736271707654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.30458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1987.2126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.7201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.69482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.3041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 396.950390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.436328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.89765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3641.1021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4028.33779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1178.716015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 888.218359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1049.74521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1277.391015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1005.773828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1208.17109375,
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
          "id": "33c20c8ba9a0dd3a024915583ad3fc7b15e3e524",
          "message": "Release v1.13.1 (#1215)\n\nBump version to 1.13.1.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-09T15:21:58Z",
          "tree_id": "3eae5a2340251e6db87cdba353e9d0b852c31b35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33c20c8ba9a0dd3a024915583ad3fc7b15e3e524"
        },
        "date": 1736443492159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1279.6830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2034.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.85166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.48408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.34375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 464.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 362.35908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3752.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3871.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1209.29912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1215.969921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1402.929296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.89873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 990.82158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.43896484375,
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
          "id": "8e4b2cacd46e7e0bb48a5a667851f48bb7b031ee",
          "message": "Explicitly set rust version to 1.83 for release (#1217)\n\nExplicitly set rust version to 1.83 for release\n\n### Does this change impact existing behavior?\n\nTemporarily forces Rust version to 1.83 for the 1.13.1 release\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-10T09:43:19Z",
          "tree_id": "1d96b3c938bcafaf77f8c2702332b90c30ec643e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e4b2cacd46e7e0bb48a5a667851f48bb7b031ee"
        },
        "date": 1736509273449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1298.81953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1935.737109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.64306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1483.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.178515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.18759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.87177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 325.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3657.93681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3946.4662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1150.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.78671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 743.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1322.94111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1102.70869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1037.14228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1150.906640625,
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
          "id": "3da84c54af23c4adb6e1d357ab247a88192f4de7",
          "message": "Release v1.14.0 (#1218)\n\nBumped version to 1.14.0\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nUpdated\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-10T15:02:20Z",
          "tree_id": "ab991458a686a22bff132dabd1ddd170d30093cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3da84c54af23c4adb6e1d357ab247a88192f4de7"
        },
        "date": 1736528491421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1274.6970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2000.91123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 822.63974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1498.240625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.9220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 535.23505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.96435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.702734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3844.33642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4017.78232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1178.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1155.28349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1184.337109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1119.5513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1169.36640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 988.31962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1007.576953125,
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
          "id": "456c7dedee67dc50d10c9a5c4716f2fffaf1d406",
          "message": "Replace lazy_static and once_cell with std library equivalents (#1212)\n\nThe types provided by `lazy_static` and `once_cell` have now been added\nto the standard library as of Rust 1.80.0\n(https://blog.rust-lang.org/2024/07/25/Rust-1.80.0.html#lazycell-and-lazylock),\nand we no longer need to use these crates for this functionality. This\nchange removes those dependencies, and updates our code to use the new\nstandard types.\n\n### Does this change impact existing behavior?\n\nNo change in existing behavior.\n\n### Does this change need a changelog entry?\n\nNo, no behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-10T16:15:10Z",
          "tree_id": "25b4ec7855aeb5e53327b12df77235ea7f8d632d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/456c7dedee67dc50d10c9a5c4716f2fffaf1d406"
        },
        "date": 1736532941889,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1279.4271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1950.40087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 772.74951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.8353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.694140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 502.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.71015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 303.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3802.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3984.5783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1178.27880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.910546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 892.90224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1056.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1271.7953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1011.284765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 974.500390625,
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
          "id": "7d6e8f9d26a451a155edcf8289f93781158fd3bb",
          "message": "Update reftest to always generate a directory at the root of the reference model (#1219)\n\nThis change impacts only Mountpoint's reference tests.\n\nThe current strategy for generating the tree allows for the root to be a\nfile, which is not possible. This leads to us adding special cases to\nthe reftest comparison logic as well as having bizarre test cases which\nare hard to understand.\n\nThis change updates the strategy by ensuring that the root is always a\ndirectory, and simplifies some of the unused proptest layers.\n\n### Does this change impact existing behavior?\n\nNo change to existing Mountpoint behavior. This changes the type of\ntrees generated by our reference tests, removing those that are not\npossible in Mountpoint.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-13T10:13:22Z",
          "tree_id": "63a375fb619d6f7b74727aad6ad70d4584e2c293",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d6e8f9d26a451a155edcf8289f93781158fd3bb"
        },
        "date": 1736770578983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.63125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1955.0697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.41552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.24638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 463.58837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.29228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.2818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3675.59326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3926.47607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1198.96044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1149.91328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 922.16376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1397.88876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1104.2736328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1118.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 914.42412109375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}