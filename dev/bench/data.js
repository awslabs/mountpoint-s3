window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "9dfd5ddd9a91d1ee7b76e10083be0f79af980350",
          "message": "Upgrade aws-lc to 1.62.1 (#1683)\n\nUpgrade aws-lc to 1.62.1. In particular, pick up:\n* Do no consider warnings fatal in CPU Jitter for LTO build\n[#2769](https://github.com/aws/aws-lc/pull/2769).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 5a9df219..e0ee14ec:\n  > Prepare v1.62.1 (#2771)\n  > Add more options to genrsa (#2770)\n  > Do no consider warnings fatal in CPU Jitter for LTO build (#2769)\n  > Add Windows Docker Image Build (#2760)\n  > Migrate Graviton2 and Graviton4 from EC2 Test Framework (#2759)\n  > AL2023 x509-limbo container (#2761)\n  > Implement -passin for dgst cli (#2763)\n  > Fix librelp integration CI (#2766)\n  > ci: scope down GitHub Token permissions (#2762)\n  > AWS CodeBuild Fleets Setup (#2758)\n  > Implement more options for x509 CLI (#2735)\n  > Don't log feature probe error message unless requested (#2755)\n  > Consolidate GitHub CodeBuild Projects (#2757)\n  > Fix windows CI job (#2744)\n  > Cipher-stealing: no need for re-loading round keys; they're still in registers. (#2734)\n  > Add OPENSSL_NO_UI_CONSOLE macro (#2751)\n  > Use New Docker Images in GitHub Workflows (#2752)\n  > Add ecr:BatchImportUpstreamImage for first-time cache pull-thru (#2747)\n  > Add Docker Image Build Workflows (#2746)\n  > CodeBuild Setup for GitHub Docker Image Builds (#2745)\n  > Implement ecparam CLI tool (#2718)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-27T22:27:02Z",
          "tree_id": "9dea7f8dc4561e525a4a47b90caa1567c2fa4b60",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9dfd5ddd9a91d1ee7b76e10083be0f79af980350"
        },
        "date": 1761612634749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4991.82470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4503.084179687499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5844.30537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.49443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.43154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.546484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.27138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6324.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5209.31513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.61044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1953.95498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.87978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1443.08955078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.39267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1729.45068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.8798828125,
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
          "id": "8590e4e6abbbcf4593bc5925c760f743c8e8fac4",
          "message": "Remove CFLAGS workaround from al2023 spec (#1674)\n\nRemove CFLAGS workaround from al2023 spec.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T08:41:45Z",
          "tree_id": "80279ea98baf5bae6d38f46ee2f472cafa75796c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8590e4e6abbbcf4593bc5925c760f743c8e8fac4"
        },
        "date": 1761648954604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5006.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4528.85791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5797.1244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.97958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.04765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.319140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.13974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5944.13720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5170.86298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.90546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1862.19658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.58544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1579.375390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1251.8091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1934.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1108.453515625,
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
          "id": "56d8b179e993351e7f7ecf7087f0c4ca10a7887d",
          "message": "Add units for metrics in logs (#1677)\n\nThis change adds units canonical labels to metrics in logs. Currently,\nit only includes units for metrics eligible for OTLP export.\n\n### Does this change impact existing behavior?\n\nYes, it updates the log format\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it updates the log format\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T09:50:41Z",
          "tree_id": "6436d9b459bc9fd691ab820eba8b7387510de680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56d8b179e993351e7f7ecf7087f0c4ca10a7887d"
        },
        "date": 1761653138618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5027.5921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4697.24453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5831.857519531251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.46884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.68017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6172.24091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.2927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5249.3611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.60107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1739.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.9740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1470.54970703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.907421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.31328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1608.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.12265625,
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
          "id": "66a9ac1b583f96f34925cbdd73a1087b9a186ad2",
          "message": "Add otlp metrics user-agent tag (#1686)\n\nThis adds a user-agent tag when otlp endpoint is configured to get\ninsights into usage of otlp metrics.\n\n### Does this change impact existing behavior?\n\nNo, under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T13:37:18Z",
          "tree_id": "5498f079aa321b68855296e214b52becd64915f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/66a9ac1b583f96f34925cbdd73a1087b9a186ad2"
        },
        "date": 1761666750163,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5070.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4574.351855468751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5947.707128906251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.98701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.5521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6487.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.21494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5018.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.743359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1726.8181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.05283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1663.77900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.58583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1817.3224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1143.5466796875,
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
          "id": "b27977ba9c6cc0b770933fc55e1d32bec9eac8f0",
          "message": "Remove OTLP integration feature flag (#1685)\n\nRemoves the `otlp_integration` feature flag\n\n### Does this change impact existing behavior?\n\nNo, this enables otlp metrics without requiring a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added a mountpoint-s3-fs changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T18:42:12Z",
          "tree_id": "b41459cc8c7cac4ad6912ad4e9173b6cdd7aed47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b27977ba9c6cc0b770933fc55e1d32bec9eac8f0"
        },
        "date": 1761685202636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5032.47509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4567.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5940.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.22548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.23408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.090234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6256.0935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5219.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.04423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.9513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1639.52900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1258.747265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.15107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1076.87353515625,
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
          "id": "0d0ceb9b898c84ff62486c295f257d0143bc953c",
          "message": "Merge al2023 workflow into integration tests (#1689)\n\nAvoids duplicate approval request. Also fixes checkout and requires\napproval for the build SRPM step.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T21:07:52Z",
          "tree_id": "c8cfa475328a9edfb651edba1ce086b0498ba5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d0ceb9b898c84ff62486c295f257d0143bc953c"
        },
        "date": 1761693812731,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5023.555078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4575.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5901.04853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.74150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.94853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.85458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.78427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.70576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.4349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6239.848828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.2142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5200.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.0861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1749.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.67646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1597.9923828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.01181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1884.7916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.71181640625,
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
          "id": "b84f6e2db38744a1b79d870084fd1ea42bff7c2f",
          "message": "Add documentation for OTLP metrics (#1681)\n\nDocument metrics available for OTLP export and how to export them to\nobservability backends.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-29T17:22:59Z",
          "tree_id": "5602bbb6348fc5226aeb00c40328110892b189ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b84f6e2db38744a1b79d870084fd1ea42bff7c2f"
        },
        "date": 1761766752165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5023.15537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4608.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5768.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.36162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.55927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.49228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.05595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6238.9298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.83486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5242.5857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.35048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1989.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.483984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1498.909765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.08876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.59638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1897.79560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.3353515625,
            "unit": "MiB/s"
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
          "id": "613e4676d25d59e2621c41c4c141097dcc2cf00a",
          "message": "docs: Update LOGGING.md for default INFO level and metrics behavior (#1620)\n\nUpdate documentation to reflect new default logging level\n\n### What changed and why?\n- Updated LOGGING.md to reflect the new default INFO logging level\n(changed from WARN)\n- Added explanation of metrics logging behavior with --log-metrics and\n--debug flags\n- Clarified verbosity levels in documentation\n\nThese changes align the documentation with the implementation changes\nmade in PR #1605.\n\n### Does this change impact existing behavior?\nNo, this is a documentation-only change that reflects already merged\nchanges from PR #1605\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo changelog entry or version change needed as this is only updating\ndocumentation to match existing behavior.\n\n---\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-29T19:58:55Z",
          "tree_id": "d68c93d36fc4038ba611232771d126ed7e598cec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/613e4676d25d59e2621c41c4c141097dcc2cf00a"
        },
        "date": 1761776318219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4997.13583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4510.79970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5601.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.7244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.61474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.72109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.28662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6167.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.10400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5029.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.18544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1815.0806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1654.4681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1219.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.25634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1540.3404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.288671875,
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
          "id": "854836ac0d0810f943371082b8f79305f592377d",
          "message": "Update RPM workflow to handle configurable release (#1690)\n\nUpdate the RPM workflow to use a \"version tag\" (`<VERSION>-<RELEASE>`),\nwhich will allow to handle a configurable release in a future change.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-29T22:09:39Z",
          "tree_id": "fbd562fa793b449fba3b079884b323ce0969dad1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/854836ac0d0810f943371082b8f79305f592377d"
        },
        "date": 1761784060710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4943.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4419.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5706.76103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.44990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.15859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.65791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.022265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.23662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6273.8083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.01318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5055.81826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.44384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1894.79814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.00009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1529.31220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.84501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.172265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1663.16064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1116.78466796875,
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
          "distinct": false,
          "id": "ace6f51bf3e5e2192abd9c3cc7352c443d4d548c",
          "message": "Update AL2023 RPM build process and package structure (#1684)\n\nUpdate AL2023 RPM package structure and adjust the build steps in CI.\n\n* Updated generate_amzn2023_srpm.sh to create and include separate\nvendor dependencies tarball\n* Moved from custom /opt/aws/mountpoint-s3/ directory to standard\n/usr/bin/ and /usr/share/doc/ locations\n* Updated release field\n* Configured RUSTFLAGS for cargo build\n* Added option to link to source on GitHub\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-30T12:11:24Z",
          "tree_id": "beea2e55b44dee97564f383c37d2b49112b87180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace6f51bf3e5e2192abd9c3cc7352c443d4d548c"
        },
        "date": 1761834398232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4973.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4485.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5881.346484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.89130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.53125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.34306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.1712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.44267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.23115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.10205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6144.32177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5148.6001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.20810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.73212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1460.82529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.72216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.4388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1709.01123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1114.88720703125,
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
          "id": "837675f5c83343b882b28cf3e1be1e2368596d6a",
          "message": "Prepare for 1.21.0 release (#1692)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-30T13:48:29Z",
          "tree_id": "784cb19e88184a344fc80236263c8ee250e3abb0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/837675f5c83343b882b28cf3e1be1e2368596d6a"
        },
        "date": 1761840384613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5033.18115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4555.66455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5680.06767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.67900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.9087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.62177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.07099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6208.61943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.49541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5100.8244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.71533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1811.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.83212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.83837890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.64345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1836.05234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.91552734375,
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
          "id": "820ae346c009eb336de1cbebb196ecd8403207c0",
          "message": "Fix race condition in logging tests (#1693)\n\nSome of the logging tests occasionally failed because `LockedWriter`\npanicked when trying to retrieve the underlying buffer. For example in\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/18838458022/job/53744837442#step:7:2151:\n\n```\nthread 'logging::syslog::tests::test_syslog_layer' panicked at mountpoint-s3-fs/src/logging/testing.rs:11:47:\ncalled `Result::unwrap()` on an `Err` value: Mutex [..]\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-31T18:28:18Z",
          "tree_id": "c359f1cf074d4809bf9fe291b70a7e53ab6bdda2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/820ae346c009eb336de1cbebb196ecd8403207c0"
        },
        "date": 1761943600966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5077.22587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4525.540722656249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5896.598535156249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.47138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.16591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6436.2974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.30712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5034.050390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.5798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1964.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.08525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1340.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1724.2453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1094.9453125,
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
          "distinct": false,
          "id": "484b81367e678f504b50d0c3aa049f96015b8559",
          "message": "Correct metric type documentation (#1696)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-11-03T11:05:20Z",
          "tree_id": "6027812a4fc35fae0319fddb700ab70ec154262a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484b81367e678f504b50d0c3aa049f96015b8559"
        },
        "date": 1762176186669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5034.801562500001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4668.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5868.683007812499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.51318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.93681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.68642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.83935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.89912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.126171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6241.028125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5118.3546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.98583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1831.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.41962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1475.533984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1292.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.91396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.47607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.77900390625,
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
          "id": "63d79f65d2b4142fd16613472e9cc328a42f9ba6",
          "message": "Fix workflow permissions to publish benchmark results (#1722)\n\nThe changes in #1695 resulted in benchmark actions on push to main to\nfail when trying to publish results. This change will allow benchmark\nworkflows to write to github pages by fixing their permissions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-10T17:51:26Z",
          "tree_id": "dd3d1b999ab4c31439f0769cccf0f63bae29c556",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63d79f65d2b4142fd16613472e9cc328a42f9ba6"
        },
        "date": 1765397452592,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5010.77529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4500.73310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5942.55234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.6267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.84072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.68564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.71953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.45185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5950.88896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.360546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5130.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.56015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1613.61259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.6921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1402.6306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1194.70419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.3900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1723.800390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1023.0888671875,
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
          "id": "a3d487c5b4b416478351f90693a17fe1399b6d98",
          "message": "Refactor cache metrics for consistency and completeness (#1721)\n\nThis PR streamlines cache metrics collection across disk and express\ncache implementations.\n\nThis change renames caching metrics for consistency with other OTLP\nmetrics. This change also captures latency, bytes_transferred from/to\ncache and errors consistently across both disk and express cache\nimplementations.\n\n### Does this change impact existing behavior?\n\nYes, updates cache metrics in logs\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-12-10T18:49:08Z",
          "tree_id": "382f4e0f5addcf5fa0ecfe04b5a10b853c56bdc7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3d487c5b4b416478351f90693a17fe1399b6d98"
        },
        "date": 1765401059091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5053.9267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4562.65615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5846.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.92314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.77890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.12421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.383203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6254.5587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.13486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5228.15966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.60634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1806.4642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.07431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1478.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1469.01279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.58017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1684.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.8423828125,
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
          "id": "adde28b1ceb63153f117d63d1dd63d47806a71cd",
          "message": "Fix workflow-complete jobs for GitHub workflows (#1723)\n\nUpdates jobs to always run and then fail, rather than be skipped when\nneeded jobs fail.\nThis will allow GitHub to correctly block when tests fail.\n\n`needs` JSON context:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/contexts#needs-context\n\nEquivalent CSI driver PR:\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/pull/661\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, CI change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-11T18:50:16Z",
          "tree_id": "cf312a1c597b9961e0e8e2ca9ed6c85dcc27c11e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/adde28b1ceb63153f117d63d1dd63d47806a71cd"
        },
        "date": 1765487303516,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4880.34765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4501.62109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5591.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.10419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.09365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.85146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.02041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.32294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.16767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.63115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6012.26796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.91748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5128.35693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1645.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.36943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1449.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1351.48466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.68076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1785.78251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1021.31611328125,
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
          "id": "0c5511300aa087bb5664cd7a089e84cf01ade29a",
          "message": "Bump actions/cache from 3 to 5 (#1726)\n\nBumps [actions/cache](https://github.com/actions/cache) from 3 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/releases\">actions/cache's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<blockquote>\n<p>[!IMPORTANT]\n<strong><code>actions/cache@v5</code> runs on the Node.js 24 runtime and\nrequires a minimum Actions Runner version of\n<code>2.327.1</code>.</strong></p>\n<p>If you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<hr />\n<h2>What's Changed</h2>\n<ul>\n<li>Upgrade to use node24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1630\">actions/cache#1630</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1684\">actions/cache#1684</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4.3.0...v5.0.0\">https://github.com/actions/cache/compare/v4.3.0...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add note on runner versions by <a\nhref=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1642\">actions/cache#1642</a></li>\n<li>Prepare <code>v4.3.0</code> release by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1655\">actions/cache#1655</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1642\">actions/cache#1642</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4...v4.3.0\">https://github.com/actions/cache/compare/v4...v4.3.0</a></p>\n<h2>v4.2.4</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1620\">actions/cache#1620</a></li>\n<li>Upgrade <code>@actions/cache</code> to <code>4.0.5</code> and move\n<code>@protobuf-ts/plugin</code> to dev depdencies by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1634\">actions/cache#1634</a></li>\n<li>Prepare release <code>4.2.4</code> by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1636\">actions/cache#1636</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1620\">actions/cache#1620</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4...v4.2.4\">https://github.com/actions/cache/compare/v4...v4.2.4</a></p>\n<h2>v4.2.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use <code>@​actions/cache</code> 4.0.3 package &amp;\nprepare for new release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1577\">actions/cache#1577</a>\n(SAS tokens for cache entries are now masked in debug logs)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1577\">actions/cache#1577</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4.2.2...v4.2.3\">https://github.com/actions/cache/compare/v4.2.2...v4.2.3</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/blob/main/RELEASES.md\">actions/cache's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Releases</h1>\n<h2>Changelog</h2>\n<h3>5.0.1</h3>\n<ul>\n<li>Update <code>@azure/storage-blob</code> to <code>^12.29.1</code> via\n<code>@actions/cache@5.0.1</code> <a\nhref=\"https://redirect.github.com/actions/cache/pull/1685\">#1685</a></li>\n</ul>\n<h3>5.0.0</h3>\n<blockquote>\n<p>[!IMPORTANT]\n<code>actions/cache@v5</code> runs on the Node.js 24 runtime and\nrequires a minimum Actions Runner version of <code>2.327.1</code>.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>4.3.0</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to <a\nhref=\"https://redirect.github.com/actions/toolkit/pull/2132\">v4.1.0</a></li>\n</ul>\n<h3>4.2.4</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.5</li>\n</ul>\n<h3>4.2.3</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.3 (obfuscates SAS token in\ndebug logs for cache entries)</li>\n</ul>\n<h3>4.2.2</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.2</li>\n</ul>\n<h3>4.2.1</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.1</li>\n</ul>\n<h3>4.2.0</h3>\n<p>TLDR; The cache backend service has been rewritten from the ground up\nfor improved performance and reliability. <a\nhref=\"https://github.com/actions/cache\">actions/cache</a> now integrates\nwith the new cache service (v2) APIs.</p>\n<p>The new service will gradually roll out as of <strong>February 1st,\n2025</strong>. The legacy service will also be sunset on the same date.\nChanges in these release are <strong>fully backward\ncompatible</strong>.</p>\n<p><strong>We are deprecating some versions of this action</strong>. We\nrecommend upgrading to version <code>v4</code> or <code>v3</code> as\nsoon as possible before <strong>February 1st, 2025.</strong> (Upgrade\ninstructions below).</p>\n<p>If you are using pinned SHAs, please use the SHAs of versions\n<code>v4.2.0</code> or <code>v3.4.0</code></p>\n<p>If you do not upgrade, all workflow runs using any of the deprecated\n<a href=\"https://github.com/actions/cache\">actions/cache</a> will\nfail.</p>\n<p>Upgrading to the recommended versions will not break your\nworkflows.</p>\n<h3>4.1.2</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/cache/commit/9255dc7a253b0ccc959486e2bca901246202afeb\"><code>9255dc7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1686\">#1686</a>\nfrom actions/cache-v5.0.1-release</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/8ff5423e8b66eacab4e638ee52abbd2cb831366a\"><code>8ff5423</code></a>\nchore: release v5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/9233019a152bc768059ac1768b8e4403b5da16c1\"><code>9233019</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1685\">#1685</a>\nfrom salmanmkc/node24-storage-blob-fix</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/b975f2bb844529e1063ad882c609b224bcd66eb6\"><code>b975f2b</code></a>\nfix: add peer property to package-lock.json for dependencies</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/d0a0e1813491d01d574c95f8d189f62622bbb2ae\"><code>d0a0e18</code></a>\nfix: update license files for <code>@​actions/cache</code>,\nfast-xml-parser, and strnum</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/74de208dcfcbe85c0e7154e7b17e4105fe2554ff\"><code>74de208</code></a>\nfix: update <code>@​actions/cache</code> to ^5.0.1 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/ac7f1152ead02e89c14b5456d14ab17591e74cfb\"><code>ac7f115</code></a>\npeer</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/b0f846b50b6061d7a2ca6f1a2fea61d4a65d1a16\"><code>b0f846b</code></a>\nfix: update <code>@​actions/cache</code> with storage-blob fix for\nNode.js 24 punycode depr...</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/a7833574556fa59680c1b7cb190c1735db73ebf0\"><code>a783357</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1684\">#1684</a>\nfrom actions/prepare-cache-v5-release</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/3bb0d78750a39cefce0c2b5a0a9801052b4359ad\"><code>3bb0d78</code></a>\ndocs: highlight v5 runner requirement in releases</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/cache/compare/v3...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/cache&package-manager=github_actions&previous-version=3&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T11:05:16Z",
          "tree_id": "dd4099e7988ae3967d74ec814e3000514b317c7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c5511300aa087bb5664cd7a089e84cf01ade29a"
        },
        "date": 1765805094272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4928.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4577.27138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5837.427832031251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.706640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.1810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.11748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.740625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.433203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.37197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.19443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6246.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.95341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5235.20078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.98466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2019.5439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.72724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1330.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1333.1912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.06796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1574.301171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.30703125,
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
          "id": "c46c37365bd1d50df9e9104227eb9b2095ab08c0",
          "message": "Bump actions/download-artifact from 6 to 7 (#1727)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/download-artifact@v7 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v6 had preliminary\nsupport for Node 24, however this action was by default still running on\nNode.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li>Download Artifact Node24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n<li>fix: update <code>@​actions/artifact</code> to fix Node.js 24\npunycode deprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/451\">actions/download-artifact#451</a></li>\n<li>prepare release v7.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/452\">actions/download-artifact#452</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0\">https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/37930b1c2abaa49bbe596cd826c3c89aef350131\"><code>37930b1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/452\">#452</a>\nfrom actions/download-artifact-v7-release</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/72582b9e0acd370909e83fa4a1fd0fca3ad452d8\"><code>72582b9</code></a>\ndoc: update readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/0d2ec9d4cbcefe257d822f108de2a1f15f8da9f6\"><code>0d2ec9d</code></a>\nchore: release v7.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fd7ae8fda6dc16277a9ffbc91cdb0eedf156e912\"><code>fd7ae8f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/451\">#451</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/d484700543354b15886d6a52910cf61b7f1d2b27\"><code>d484700</code></a>\nchore: restore minimatch.dep.yml license file</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/03a808050efe42bb6ad85281890afd4e4546672c\"><code>03a8080</code></a>\nchore: remove obsolete dependency license files</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/56fe6d904b0968950f8b68ea17774c54973ed5e2\"><code>56fe6d9</code></a>\nchore: update <code>@​actions/artifact</code> license file to 5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/8e3ebc4ab4d2e095e5eb44ba1a4a53b6b03976ad\"><code>8e3ebc4</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/1e3c4b4d4906c98ab57453c24efefdf16c078044\"><code>1e3c4b4</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/458627d354794c71bc386c8d5839d20b5885fe2a\"><code>458627d</code></a>\nchore: use local <code>@​actions/artifact</code> package for Node.js 24\ntesting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T13:01:52Z",
          "tree_id": "07e45296629cf48ddda94fe169224b2316021dfb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c46c37365bd1d50df9e9104227eb9b2095ab08c0"
        },
        "date": 1765812132298,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4908.65634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4465.9001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5797.08544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.64521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.78681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.49296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.05703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.19267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6207.26396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.23505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5095.359765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2003.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.83994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1546.64990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.5513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1593.36552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.2763671875,
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
          "distinct": false,
          "id": "bd31858c8c9058a7890e7d939452413577215633",
          "message": "Bump actions/upload-artifact from 5 to 6 (#1725)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>v6 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/upload-artifact@v6 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v5 had preliminary\nsupport for Node.js 24, however this action was by default still running\non Node.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Upload Artifact Node 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/719\">actions/upload-artifact#719</a></li>\n<li>fix: update <code>@​actions/artifact</code> for Node.js 24 punycode\ndeprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/744\">actions/upload-artifact#744</a></li>\n<li>prepare release v6.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/745\">actions/upload-artifact#745</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0\">https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b7c566a772e6b6bfb58ed0dc250532a479d7789f\"><code>b7c566a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/745\">#745</a>\nfrom actions/upload-artifact-v6-release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/e516bc8500aaf3d07d591fcd4ae6ab5f9c391d5b\"><code>e516bc8</code></a>\ndocs: correct description of Node.js 24 support in README</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/ddc45ed9bca9b38dbd643978d88e3981cdc91415\"><code>ddc45ed</code></a>\ndocs: update README to correct action name for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/615b319bd27bb32c3d64dca6b6ed6974d5fbe653\"><code>615b319</code></a>\nchore: release v6.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/017748b48f8610ca8e6af1222f4a618e84a9c703\"><code>017748b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/744\">#744</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/38d4c7997f5510fcc41fc4aae2a6b97becdbe7fc\"><code>38d4c79</code></a>\nchore: rebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/7d27270e0cfd253e666c44abac0711308d2d042f\"><code>7d27270</code></a>\nchore: add missing license cache files for <code>@​actions/core</code>,\n<code>@​actions/io</code>, and mi...</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5f643d3c9475505ccaf26d686ffbfb71a8387261\"><code>5f643d3</code></a>\nchore: update license files for <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1 dependencies</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/1df1684032c88614064493e1a0478fcb3583e1d0\"><code>1df1684</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b5b1a918401ee270935b6b1d857ae66c85f3be6f\"><code>b5b1a91</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T12:58:56Z",
          "tree_id": "b12f49c2ddb33941c8a7ca26780450e778701a18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd31858c8c9058a7890e7d939452413577215633"
        },
        "date": 1765898294728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4880.737988281249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4489.18955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5755.942675781251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.13125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.31591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.367578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.62021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6123.6283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.1744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5174.78134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1714.14892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.55537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.4818359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1313.85361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1827.3228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1052.2068359375,
            "unit": "MiB/s"
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
          "id": "31a7d31db23463310bf82403ca1e678b7f311523",
          "message": "Extend autogroup.py to present benchmark output in json format (#1714)\n\n### What changed and why?\nAdded --json-output option to export benchmark results in JSON format\nwith separate parameter keys\n\n### Does this change impact existing behavior?\nNo breaking changes. Only adds new optional --json-output functionality.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-12-17T11:04:28Z",
          "tree_id": "fcc12704c5032d4e196a859464246e9cfcf3200c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7d31db23463310bf82403ca1e678b7f311523"
        },
        "date": 1765977785592,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4933.4244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4340.66025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.57451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.49326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.737109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.1017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.39384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.94736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.14423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6194.3841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.89755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4948.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.25849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1830.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.5970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1485.7908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1432.51396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.5986328125,
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
          "id": "eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca",
          "message": "Add cache metrics for OTLP export (#1724)\n\nThis change adds cache metrics for OTLP export. \n\n### Does this change impact existing behavior?\n\nYes, adds new metrics for OTLP export\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-17T12:03:15Z",
          "tree_id": "98d1447807f41eeef7647db0e823549431bfe64a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca"
        },
        "date": 1765981351637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4923.5298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4431.04794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5805.5451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.401171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.27919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6232.17900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.25517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5022.8810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.0291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2019.32373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.28955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1419.95068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.33017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.25654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1831.5248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.775390625,
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
          "id": "ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58",
          "message": "Fix internal race condition in the incremental upload queue (#1728)\n\nThis change addresses an issue that caused the\n`upload::incremental::tests::test_append_failure_on_object_replaced` to\nfail\n[occasionally](https://github.com/awslabs/mountpoint-s3/actions/runs/20229391488/job/58068496627#step:8:576).\nThe root cause was a race condition in `AppendUploadQueue` when\nattempting to write more data after a failure to retrieve the checksum\nalgorithm, which would occasionally result in a panic instead of\nreturning an `UploadAlreadyTerminated` error.\n\nThe issue could be fixed with a simple change (see first commit), but I\nopted to refactor the queue to use a single channel to return both the\nchecksum algorithm and the PutObject responses, making error handling\nmore uniform.\n\n**Note that there is no user impact**, since further writes after an\nerror are not allowed by the \"file system\" layer.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T16:33:54Z",
          "tree_id": "d439318b2f53945d6d6415df16e0e51e6d2bd970",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58"
        },
        "date": 1765997590295,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4954.29189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4560.2103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5821.855078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.62939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.05703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.39921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.97373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6091.098046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.17138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5007.37412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1582.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.8380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1319.02314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1224.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.69794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1468.6857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.07734375,
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
          "id": "2c8b96b3cc004645bc24bdae903d4007f7f02fca",
          "message": "Fix benchmarks not running on PRs (#1731)\n\nAddress an issue introduced in #1722 where benchmark workflows would not\nrun on PRs (enabled when setting the \"performance\" label).\n\n### Does this change impact existing behavior?\n\nNo, CI only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T17:23:34Z",
          "tree_id": "b730453a5da4939aabc07d8f540a14e303006298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2c8b96b3cc004645bc24bdae903d4007f7f02fca"
        },
        "date": 1766000568448,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5012.4392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4507.01259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5745.029980468749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.30498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.27607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.1814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.96865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.59091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.07802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.155859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5929.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4930.62734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1838.42841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.99228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1423.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1253.76484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.48037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1598.96044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 976.02861328125,
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
          "id": "deba195af5cfc231784d226a00468cffc284df27",
          "message": "Align read window with part boundaries + configurable `initial_request_size` (#1707)\n\nRe-created https://github.com/awslabs/mountpoint-s3/pull/1618, in this\nPR:\n\n- we align read window end to the part boundary for the second request\n(see `round_up_to_part_boundary` method);\n- we update mock client to allow testing of this change;\n- we add `PrefetcherConfig::initial_request_size` field and use it in\n`mount_from_config.rs` example.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMinor version change and a change log to `mountpoint-s3-fs`, will add\nlater. Patch version change to the `mountpoint-s3-fs-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T11:19:28Z",
          "tree_id": "8c01e60eb5f63bdbc01ecb41f5c66fcc5b046b1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/deba195af5cfc231784d226a00468cffc284df27"
        },
        "date": 1766410621897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5058.63466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4653.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5887.90673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.98330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.7328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.22734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.78466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.82529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6306.6541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.74892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5125.6017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.25537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2010.32744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.2767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1411.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1354.862890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.4830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1789.7673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1009.2646484375,
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
          "id": "7520e72e68a574e2b6839db4638e058d2a2791d9",
          "message": "Release crates, including mountpoint-s3-fs 0.8.4 (#1734)\n\nBump versions / update changelogs of the following crates prior to the\nrelease:\n\n- `mountpoint-s3-crt`\n- `mountpoint-s3-client`\n- `mountpoint-s3-fs`\n\nDiff with the previous release:\nhttps://github.com/awslabs/mountpoint-s3/compare/mountpoint-s3-fs-0.8.3..main\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T14:29:43Z",
          "tree_id": "304205e26732fe787c0e0a854d52a799eea10f3e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7520e72e68a574e2b6839db4638e058d2a2791d9"
        },
        "date": 1766422169529,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5015.99482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4552.4009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5877.44677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.374609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.0923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.42705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.49736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6284.2439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.57158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5104.12529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.25859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1787.61806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.03388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1448.0763671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.63818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.46806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1477.29677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 951.24296875,
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
          "id": "8adc7549733902dd2169cd540abc878b01987004",
          "message": "Fix internal failure on atomic upload (#1733)\n\nImprove handling of errors on `CreateMultiPartUpload` in the atomic\nupload code path. Similarly to the change in #1728, the issue only\nmanifests when attempting to further write or complete an upload after\nan error and it does not affect Mountpoint file system users, since\nthat's already prevented at that level.\n\n### Does this change impact existing behavior?\n\nNo, user-visible behavior not impacted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-24T12:45:36Z",
          "tree_id": "c4508f6e35e19f9238eee792e408780298d56f7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8adc7549733902dd2169cd540abc878b01987004"
        },
        "date": 1766588730683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5059.99794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4603.91201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5839.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.22998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.29716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.86337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.61328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.13056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6301.503125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5164.5154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.6982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1822.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.43134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1733.4576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1273.77451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.24892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1882.84365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.3638671875,
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
          "id": "2ff12d030057e30881527035c62dbac8f4f20efd",
          "message": "Fix broken link in SEMANTICS.md (#1736)\n\nFixes broken link in SEMANTICS.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-01-07T16:24:19Z",
          "tree_id": "224ecb4cb8678324f7e8f60979a173090e444abb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2ff12d030057e30881527035c62dbac8f4f20efd"
        },
        "date": 1767811512818,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5047.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4551.9283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5809.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.519140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.237109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.49560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6361.15830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.1,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5180.214453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.1599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2047.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1509.8666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1190.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.11982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1572.14384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.87392578125,
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
          "distinct": false,
          "id": "a449eead062b530bf8ad4c1aa735045454cf8e3f",
          "message": "Ignore bincode's unmaintained status temporarily (#1740)\n\nUntil we migrate away from bincode, ignore the [unmaintained\nstatus](https://rustsec.org/advisories/RUSTSEC-2025-0141) to unblock the\nbuilds\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-09T16:19:13Z",
          "tree_id": "ce5cd74f403ffc24db87831a33ff08e0b4219f4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a449eead062b530bf8ad4c1aa735045454cf8e3f"
        },
        "date": 1767984046439,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4996.3892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4449.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5774.4107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.30390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.4865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.846484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.33154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6275.39365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.24765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5004.257421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.7427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1791.05,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.9779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1550.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1249.73076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1795.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.57724609375,
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
          "id": "48e67efde2ccb13f4ef20f40564352e6a27591ae",
          "message": "Upgrade cargo dependencies (#1742)\n\nUpgrade cargo dependencies to the latest compatible releases. Exception:\nadapted to minor breaking change in the `assert_cmd` crate (tests only).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, bumped crate versions where required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-12T15:58:38Z",
          "tree_id": "720101ea3942739ad06ffb5e9e8557f01ad055b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48e67efde2ccb13f4ef20f40564352e6a27591ae"
        },
        "date": 1768241872779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4913.0482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4504.67939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5702.23427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.73876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.49541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.48486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.853125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.25576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5968.180859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.33896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5131.32646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.918359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1944.26806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.410546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1524.6873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1338.5548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.58564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1934.48603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.3921875,
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
          "id": "af2480220f9999c62c3c6b15bae6394452c62799",
          "message": "Correct cache io_size metric type to histogram (#1738)\n\nUntil this change, these are incorrectly recorded as counters, which do\nnot help capture the bytes get/put to cache.\n\n### Does this change impact existing behavior?\n\nYes, Changes how these metrics are recorded in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-13T07:54:22Z",
          "tree_id": "b83488b7b5583a1b1d9a9b4cdf14cb559b6ffe48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/af2480220f9999c62c3c6b15bae6394452c62799"
        },
        "date": 1768299156508,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4997.313671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4556.259570312501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5794.097949218751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.61796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.05888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.8578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6161.7126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.49482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5183.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.54599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1935.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.071875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1758.116796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1444.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.37060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1461.262890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.6615234375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1768299157595,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}