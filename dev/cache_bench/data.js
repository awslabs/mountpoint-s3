window.BENCHMARK_DATA = {
  "lastUpdate": 1758283041883,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "b8e905035064f1040e09ba1e120dde8f0aa6b14f",
          "message": "Add helpful script for generating summary table from benchmark runs (#1557)\n\nAdds a script that parses the benchmark output and autoamtically creates\na table with only the parameters that changed between runs.\n\nDoes not need a changelog entry, as the script only parses hydra runs. \n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-06T17:32:47Z",
          "tree_id": "ebca5100846db4d4f196c8688795b2ebe287ae85",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8e905035064f1040e09ba1e120dde8f0aa6b14f"
        },
        "date": 1754508631383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.1013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2169.63056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 922.8830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1696.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.883984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.519140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4234.47744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4369.9388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1562.42294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1470.9888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1459.60087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 770.95888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1076.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1229.54501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1585.31171875,
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
          "id": "a06f2ef58750be6a56a360734d6f6e2f2b1cb61f",
          "message": "Add changelog for #1560 (#1561)\n\nAdds changelog for #1560.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-07T13:47:56Z",
          "tree_id": "c7e2061319582a6f64d101c7489db6d64b478776",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a06f2ef58750be6a56a360734d6f6e2f2b1cb61f"
        },
        "date": 1754581870397,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1412.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2365.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 873.9666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1657.2783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.82392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.918359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.68974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4008.65712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4237.3724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1326.53408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1411.9654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1516.16142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 826.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1268.4681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.67353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.60625,
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
          "id": "608dc266af4e6824d66beaecbdc5a0fec2697f70",
          "message": "Add option to disable download checksums in performance tests (#1555)\n\nAdds an option to our benchmarking code to disable verification of\ndownloaded objects integrity.\n\nDoes not change existing behaviour, as it is only enabled when\n`EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION ` is set, and\nthus does not need a changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-07T16:13:09Z",
          "tree_id": "3cf1a53da09c0b84e24d577db0bb2f612bc79b33",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/608dc266af4e6824d66beaecbdc5a0fec2697f70"
        },
        "date": 1754590391923,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1385.91162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2431.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1647.76298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.59296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 511.98994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4228.1369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4733.34345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1552.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1394.02822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 809.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1212.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1351.00927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1042.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.49208984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0990c625c346dce35c122bc0c1854b9a5da34373",
          "message": "Add max_memory_target configuration to Mountpoint benchmarks (#1564)\n\nAdd `max_memory_target` configuration and `mem_limiter` Cargo feature\nflag to Mountpoint benchmarks. This is to enable testing mountpoint\nusing Fio benchmarks with a maximum memory limit that the mem_limiter\ncan then react on.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarks change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-08T12:24:47Z",
          "tree_id": "5e9c976ce32257eb6e4c4daab823cea3b4357811",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0990c625c346dce35c122bc0c1854b9a5da34373"
        },
        "date": 1754663287365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1401.45048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2238.63076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 919.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1641.30009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.625390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 730.15361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4255.02685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4721.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1240.64072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1336.93798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1499.13115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 797.99052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1086.394140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1160.68037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1272.37783203125,
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
          "distinct": false,
          "id": "3e4d3cf3a429d9bba903e9521e682147f95d6bb8",
          "message": "Bump `slab` to `0.4.11` (#1568)\n\nBumping `slab` to latest version.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-08-12T13:58:44Z",
          "tree_id": "414df62b6ca77389f85509f034810b684dba1172",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e4d3cf3a429d9bba903e9521e682147f95d6bb8"
        },
        "date": 1755014444106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1402.05205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2315.4578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.4626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1646.1875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 629.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 300.23876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4535.70986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4892.71630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1379.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1393.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1572.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 785.56005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1095.0837890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.4884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1168.5078125,
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
          "id": "302224192b1c97ed68f3f0721f63c3b0753d7f13",
          "message": "Add option to get flamegraph (#1570)\n\nAdds possibility to get flamegraphs for a Mountpoint benchmark run,\nusing `cargo flamegraph`.\n\nNo breaking changes, only adds functionality.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:28:30Z",
          "tree_id": "ae229acd069eba9ca7790b9ee9aa821e3c557123",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/302224192b1c97ed68f3f0721f63c3b0753d7f13"
        },
        "date": 1755102815430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2265.59560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 887.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1744.18837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 308.96845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 468.9904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.10869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4322.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4593.6130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1388.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1364.4115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1050.56455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 748.4220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1385.71240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.3345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1202.4537109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f88972304d227b03273118ccad077bd8abf97eec",
          "message": "Update readdir and readdirplus metrics to use histogram instead of counter (#1254)\n\nUpdate readdir and readdirplus APIs' `fuse.readdir[plus].entries` metric\nto use histogram instead of counter, as it would make more sense to\nrecord statistics on how many entries were returned in a readdir[plus]\nrequest when there was more than one in a given interval, than recording\nthe total readdir[plus] entries per interval.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1236.\n\n### Does this change impact existing behavior?\n\nYes, the `fuse.readdir[plus].entries` metric type has been changed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it is only updating a metric. Since metric names and availability\nare considered unstable, this does not need a changelog entry or version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>",
          "timestamp": "2025-08-14T15:59:37Z",
          "tree_id": "da313bd426f5f02de72ad31d2c2d43cdcc9a6d9f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f88972304d227b03273118ccad077bd8abf97eec"
        },
        "date": 1755194253805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.70732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2321.6029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 875.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1713.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.1228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 397.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.1056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4431.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4893.47060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1282.40341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1401.643359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1595.37978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 802.35927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1150.51708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1344.7130859375,
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
          "id": "7e865bdd4f52f730e7b7419dfe15561b556d10e4",
          "message": "Enable resource monitoring for all benchmark types (#1573)\n\nAdds the possibility to run resource monitoring for all benchmark types.\nThis is achieved by introducing a `Command` abstraction that is returned\nby the benchmark. Then when the command has just started executing we\nstart the monitoring with it, unless we already have a PID to monitor\n(used for FIO). (Thanks, Q )\n\nAdditionally changes the way we run most cargo commands by seperating\nthe phase where replacing `cargo run` by instead doing `cargo build` and\ngetting the executable path -- otherwise the compilation was part of the\nflamegraph.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-14T16:11:51Z",
          "tree_id": "528d0ef32e9b4084d1def0e4a051f89e3ab8a25a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e865bdd4f52f730e7b7419dfe15561b556d10e4"
        },
        "date": 1755195249275,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1416.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2308.1125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 844.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1665.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 294.08623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 815.3640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.3755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.223828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4257.01875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4541.02998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1382.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1434.72998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1388.85732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1391.56484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1237.22490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1199.47109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.462109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64593798+15skumar@users.noreply.github.com",
            "name": "15skumar",
            "username": "15skumar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "06121bbc9d960ce75260f28a7ab5fa64bc725f69",
          "message": "Add CLI option for publishing OTEL metrics to an endpoint  (#1552)\n\nThis PR adds a CLI argument which enables users to run Mountpoint with\nthe functionality of publishing metrics to a specified endpoint.\n\nNo impact on existing behavior. This CLI option is under a compile time\nflag.\n\nAdded functionality:\nRun Mountpoint with --otlp-endpoint http://localhost:4318 flag to enable\npublishing metrics to port 4318 (otlp port)\nOptionally you can also specify the exporting interval with the\n--otlp-export-interval flag.\n\nTo verify the implementation I ran a docker container running the\nOpenTelemetry Collector at the default port, and ran Mountpoint with the\nnew flag with endpoint specified.\nI verified that the Mountpoint metrics were visible in the collector\nlogs. Here is a screenshot of an example Mountpoint metric collected at\nthe endpoint:\n\n<img width=\"416\" height=\"217\" alt=\"Screenshot 2025-07-31 at 17 39 57\"\nsrc=\"https://github.com/user-attachments/assets/565f6ae9-84dc-49e4-a80a-6383ede913f4\"\n/>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Shivangi Kumar <shivyk@amazon.com>\nCo-authored-by: Shivangi Kumar <shivyk@amazon.com>",
          "timestamp": "2025-08-15T09:14:53Z",
          "tree_id": "534372177b6110805993a9241a8823bbf4d5c650",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06121bbc9d960ce75260f28a7ab5fa64bc725f69"
        },
        "date": 1755256557931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2297.99384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 862.97861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.3451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.86875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4072.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4383.03935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1356.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1425.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 946.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1321.30703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1088.69658203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1183.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 958.67919921875,
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
          "id": "4afe550f7fb6337483c8c121954c6b0453a6e0e0",
          "message": "Make benchmark log output colored. (#1577)\n\nThis makes benchmark output easier to read. Using the hydra-colorlog\npackage, which internally uses colorlog and configured Hydra log\nformatters appropriately.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-08-15T10:47:15Z",
          "tree_id": "be1924e68aa71ba52fc65d19126a7d03de8e74d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4afe550f7fb6337483c8c121954c6b0453a6e0e0"
        },
        "date": 1755261933391,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1394.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2325.83369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.9720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1673.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 309.62001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 682.56064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.11640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.1646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4500.78271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5070.2171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1451.65224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1480.9025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.0373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 789.13251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1271.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 988.188671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 979.6544921875,
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
          "id": "73c9de1a2ab6e5130aac9cb6d269037601a67023",
          "message": "🧊Change colour palette for icy flamegraphs ❄️ (#1576)\n\nMakes icycle flamegraphs more icy, by changing to blue colour palette\nfrom the currently used red (aka `hot`) one.\n\nNo changelog entry needed, as only affects benchmarking visualisations.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T12:50:00Z",
          "tree_id": "59f7c4dec7bc319939ed86bd5d3f1d5981704902",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73c9de1a2ab6e5130aac9cb6d269037601a67023"
        },
        "date": 1755269347532,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1378.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2149.7669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 877.093359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1673.74658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 312.50087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 661.346484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 234.5001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4246.33955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4873.24365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1218.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1616.27939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1331.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 828.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1132.29091796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1028.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1340.11484375,
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
          "id": "a21e11eb58696febd23f7285d270abe8e55beddc",
          "message": "Remove left-over parameter (#1578)\n\nRemoves accidentially forgotten parameter, fixing the prefetcher and\nclient benchmarks to be executable again.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T15:05:07Z",
          "tree_id": "2746dba63ded33c1f080cedf5c17dd2622df39db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a21e11eb58696febd23f7285d270abe8e55beddc"
        },
        "date": 1755277604089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.43154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2402.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 905.114453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1758.6431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 692.1115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.2875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.40048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4310.41357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4687.95244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1557.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1335.9927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 949.47783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 805.43525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.11298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.2126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.497265625,
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
          "id": "17e7c3f1b9f04387a8338e92311abfc0b8844090",
          "message": "Remove usage of `capture_output` from crt benchmark (#1582)\n\nRemoves usage of `capture_output` from CRT benchmarks as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-17T07:09:40Z",
          "tree_id": "7bdc95541817689ecf4bd263fbf97f6a69ab06c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17e7c3f1b9f04387a8338e92311abfc0b8844090"
        },
        "date": 1755421708419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1377.85849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2142.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 848.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1629.92099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.78134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 787.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.51240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4442.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4373.626171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1366.82919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1370.66884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 862.51064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1139.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1399.56787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.7689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 994.66220703125,
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
          "id": "28760197e4ca8e4bac68e9d751442a16088121b4",
          "message": "Disable flamegraphs by default (#1583)\n\nFlamegraphs were accidentially enabled by default.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-18T08:47:40Z",
          "tree_id": "71b178cc330edfaa6c0417640f47fc59be89a15a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28760197e4ca8e4bac68e9d751442a16088121b4"
        },
        "date": 1755514096590,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1432.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2372.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 872.64375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1645.05087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 315.98017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 776.41767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 290.46083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4142.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4638.4330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.672265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1435.2056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 926.03779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1527.83603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1079.980078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1226.69814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1444.0505859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08a09335f59f0fd4700e7841e35ade3ec4a10a6d",
          "message": "Capability to set EventLoopGroup thread count as a configurable CRT client config at runtime (#1579)\n\nAdd capability to set EventLoopGroup thread count as a configurable CRT\nclient config at runtime so we can override the current default with\ndifferent values (for e.g., during performance benchmarking) by setting\nan environment variable `UNSTABLE_CRT_EVENTLOOP_THREADS`.\n\nNote that the capability does not at the moment extend to CRT benchmarks\nrun through benchmark.py, because doing that will involve further\nchanges to etend CRT code and/or CRT benchmark logic.\n\nAlso note that unstable environmental variables are for experimental use\nand may be removed or modified anytime.\n\n### Does this change impact existing behavior?\n\nNo, it only introduces an unstable environment variable based capability\nto _optionally_ configure the thread count for CRT's event loop group.\nIt also introduces a change in the MP/client/prefetcher benchmarks to\nset that value using benchmark.py. The current default behaviours for\nMountpoint and benchmarks stay the same.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo, as it's not a behavioural change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-19T09:20:01Z",
          "tree_id": "ac73cbab9578beb43cd09b0f88e74f7db6e6a48c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/08a09335f59f0fd4700e7841e35ade3ec4a10a6d"
        },
        "date": 1755602296685,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1371.47958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2299.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 890.294140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1669.19423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.62978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.5208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 227.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 295.635546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4333.32626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4646.91123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1448.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1590.64853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 880.002734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1376.721875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1091.35634765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1051.608203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 973.36865234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ae15436920de7692be4094c4f831b21d75e2271",
          "message": "Configure the MP client benchmark to use the new paged memory-pool (#1565)\n\nConfigure the MP client benchmark to use the new paged memory-pool\ninstead of the default CRT memory pool. This is to make the client\nbenchmark perform more comparably to prefetcher and other upper layers.\n\nA second commit also fixes the throughput display units and\nmax_target_throughput default value.\n\n(Addressing PR comments) Also removed the `crt_mem_limit` configuration\nfrom benchmarks since we should not be using explicit CRT memory limits\nafter moving to using the paged buffer pool, and rely on configuring\nmemory limit/pressure through the Mountpoint mem_limiter as needed.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Mansi Pandey <mansipandey97@gmail.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-19T18:16:49Z",
          "tree_id": "765835c56d05f6bb7663e0b6bf76a6e79c4d9b36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ae15436920de7692be4094c4f831b21d75e2271"
        },
        "date": 1755634637799,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1367.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2271.26220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 861.00380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1678.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.06318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 836.416796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.6322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.377734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4185.0533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4455.91416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1474.809375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1386.6412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 906.96416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1254.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1131.628515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.73525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1313.342578125,
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
          "id": "c6d0d88b177e93e8a4e7c74f6e645004a7986ca5",
          "message": "Add benchmark sweeper configuration and auto-override for benchmark type (#1554)\n\n### What changed and why?\n\nFixed an issue where benchmark parameters for unselected benchmark types\nwere incorrectly included in multirun sweeps. Previously, all benchmark\nparameters were defined in the common sweeper config, causing irrelevant\nparameters to be swept even when running specific benchmark types.\n\n__Changes:__\n\n- Added auto-detection of `benchmark_type` parameter to automatically\nselect appropriate sweeper config\n- Split benchmark-specific sweep parameters into separate config files\n(`fio.yaml`, `prefetch.yaml`, `client-bp.yaml`, etc.)\n- Moved common parameters to `base.yaml` sweeper config\n- Now only relevant parameters are swept for each benchmark type\n- Added tests that can be run via `uv add pytest --dev` and `uv run\npytest tests/` to test the filtering and combination logic.\n\n__Example__: Running `benchmark_type=fio` now only sweeps FIO-specific\nparameters instead of including unrelated prefetch or\nclient-backpressure parameters.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Existing commands work as before, but now sweep\nonly relevant parameters for the specified benchmark type.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNone needed\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-08-22T09:16:24Z",
          "tree_id": "6f6636e808f39a3e925cf88ba34ce39905ecfe45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6d0d88b177e93e8a4e7c74f6e645004a7986ca5"
        },
        "date": 1755861326224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1371.4205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2367.247265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 849.5669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1672.37783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.83564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 229.09521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 286.77666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4360.55400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4652.1353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1237.27265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1436.1439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1614.39658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1225.4443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1156.5083984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1231.87958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.40986328125,
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
          "id": "1215a6df43bc5fe95672463cb16f91b579694ab2",
          "message": "Replace httpmock with wiremock (#1589)\n\nReplaces `httpmock` dependency with `wiremock` that is more often\nupdated.\n\nOnly replaces testing library.\n\nProbably needs a Changelog entry, will add later.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T10:49:18Z",
          "tree_id": "f4f32b234c8ad7dd3ec95068be935f1557bdf367",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1215a6df43bc5fe95672463cb16f91b579694ab2"
        },
        "date": 1756471828680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1365.0314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2287.73828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.72529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1666.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.8556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 810.155859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.80830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.97509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4409.62666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4495.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1549.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1361.93291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1389.895703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1609.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1048.76865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.50654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.6126953125,
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
          "id": "028ec721e5134829d2c1c8605ef8f3236d5ddeed",
          "message": "[Benchmarks] Ensure binaries are built with necessary flags for flamegraphing (#1575)\n\nEnsures that frame pointers for C and Rust code are emitted when\nflamegraphing mountpoint.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T13:28:20Z",
          "tree_id": "1384d0df12a36373765319f23a69312c3bcd9dcf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/028ec721e5134829d2c1c8605ef8f3236d5ddeed"
        },
        "date": 1756481298122,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.178125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2190.46533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.0087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1683.901953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.445703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.13583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4744.7740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4699.67373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1318.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1444.5248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1402.139453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1712.5314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1392.9728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1139.1455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1628.551171875,
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
          "id": "61f94b3f80f002b29c98c4089273d1db6eed3438",
          "message": "Bump tracing-subscriber from 0.3.19 to 0.3.20 (#1590)\n\nBumps [tracing-subscriber](https://github.com/tokio-rs/tracing) from\n0.3.19 to 0.3.20.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tracing/releases\">tracing-subscriber's\nreleases</a>.</em></p>\n<blockquote>\n<h2>tracing-subscriber 0.3.20</h2>\n<p><strong>Security Fix</strong>: ANSI Escape Sequence Injection\n(CVE-TBD)</p>\n<h2>Impact</h2>\n<p>Previous versions of tracing-subscriber were vulnerable to ANSI\nescape sequence injection attacks. Untrusted user input containing ANSI\nescape sequences could be injected into terminal output when logged,\npotentially allowing attackers to:</p>\n<ul>\n<li>Manipulate terminal title bars</li>\n<li>Clear screens or modify terminal display</li>\n<li>Potentially mislead users through terminal manipulation</li>\n</ul>\n<p>In isolation, impact is minimal, however security issues have been\nfound in terminal emulators that enabled an attacker to use ANSI escape\nsequences via logs to exploit vulnerabilities in the terminal\nemulator.</p>\n<h2>Solution</h2>\n<p>Version 0.3.20 fixes this vulnerability by escaping ANSI control\ncharacters in when writing events to destinations that may be printed to\nthe terminal.</p>\n<h2>Affected Versions</h2>\n<p>All versions of tracing-subscriber prior to 0.3.20 are affected by\nthis vulnerability.</p>\n<h2>Recommendations</h2>\n<p>Immediate Action Required: We recommend upgrading to\ntracing-subscriber 0.3.20 immediately, especially if your\napplication:</p>\n<ul>\n<li>Logs user-provided input (form data, HTTP headers, query parameters,\netc.)</li>\n<li>Runs in environments where terminal output is displayed to\nusers</li>\n</ul>\n<h2>Migration</h2>\n<p>This is a patch release with no breaking API changes. Simply update\nyour Cargo.toml:</p>\n<pre lang=\"toml\"><code>[dependencies]\ntracing-subscriber = &quot;0.3.20&quot;\n</code></pre>\n<h2>Acknowledgments</h2>\n<p>We would like to thank <a href=\"http://github.com/zefr0x\">zefr0x</a>\nwho responsibly reported the issue at\n<code>security@tokio.rs</code>.</p>\n<p>If you believe you have found a security vulnerability in any\ntokio-rs project, please email us at <code>security@tokio.rs</code>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/4c52ca5266a3920fc5dfeebda2accf15ee7fb278\"><code>4c52ca5</code></a>\nfmt: fix ANSI escape sequence injection vulnerability (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3368\">#3368</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/f71cebe41e4c12735b1d19ca804428d4ff7d905d\"><code>f71cebe</code></a>\nsubscriber: impl Clone for EnvFilter (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3360\">#3360</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/3a1f571102b38bcdca13d59f3c454989d179055d\"><code>3a1f571</code></a>\nFix CI (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3361\">#3361</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e63ef57f3d686abe3727ddd586eb9af73d6715b7\"><code>e63ef57</code></a>\nchore: prepare tracing-attributes 0.1.30 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3316\">#3316</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e59a13b1a7bcdd78b8b5a7cbcf70a0b2cdd76f0\"><code>6e59a13</code></a>\nattributes: fix tracing::instrument regression around shadowing (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3311\">#3311</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e4df76127538aa8370d7dee32a6f84bbec6bbf10\"><code>e4df761</code></a>\ntracing: update core to 0.1.34 and attributes to 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3305\">#3305</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/643f392ebb73c4fb856f56a78c066c82582dd22c\"><code>643f392</code></a>\nchore: prepare tracing-attributes 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3304\">#3304</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/d08e7a6eea1833810ea527e18ea03b08cd402c9d\"><code>d08e7a6</code></a>\nchore: prepare tracing-core 0.1.34 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3302\">#3302</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e70c571d319a033d5f37c885ccf99aa675a9eac\"><code>6e70c57</code></a>\ntracing-subscriber: count numbers of enters in <code>Timings</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2944\">#2944</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/c01d4fd9def2fb061669a310598095c789ca0a32\"><code>c01d4fd</code></a>\nfix docs and enable CI on <code>main</code> branch (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3295\">#3295</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tracing/compare/tracing-subscriber-0.3.19...tracing-subscriber-0.3.20\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tracing-subscriber&package-manager=cargo&previous-version=0.3.19&new-version=0.3.20)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:05:39Z",
          "tree_id": "397b9b5bdbefbe0c2e5d65138c3244b0edf92cf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f94b3f80f002b29c98c4089273d1db6eed3438"
        },
        "date": 1756987572643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1371.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2200.95361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 915.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1675.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.3716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.25166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.9015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.7123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4230.31103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4595.57138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1338.66484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1418.97548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 905.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 797.16474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1286.18818359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 996.248828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1001.63935546875,
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
          "id": "10a0bf16d634087d35e077a47d77d196cc59ffb0",
          "message": "Bump actions/checkout from 4 to 5 (#1585)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to\n5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2238\">actions/checkout#2238</a></li>\n</ul>\n<h2>⚠️ Minimum Compatible Runner Version</h2>\n<p><strong>v2.327.1</strong><br />\n<a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Release\nNotes</a></p>\n<p>Make sure your runner is updated to this version or newer to use this\nrelease.</p>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5.0.0\">https://github.com/actions/checkout/compare/v4...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n<li>Prepare release v4.3.0 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2237\">actions/checkout#2237</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/motss\"><code>@​motss</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li><a href=\"https://github.com/mouismail\"><code>@​mouismail</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li><a href=\"https://github.com/benwells\"><code>@​benwells</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v4.3.0\">https://github.com/actions/checkout/compare/v4...v4.3.0</a></p>\n<h2>v4.2.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.1...v4.2.2\">https://github.com/actions/checkout/compare/v4.2.1...v4.2.2</a></p>\n<h2>v4.2.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Jcambass\"><code>@​Jcambass</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1919\">actions/checkout#1919</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.0...v4.2.1\">https://github.com/actions/checkout/compare/v4.2.0...v4.2.1</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>V5.0.0</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n</ul>\n<h2>V4.3.0</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<h2>v4.2.2</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<h2>v4.2.1</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>v4.2.0</h2>\n<ul>\n<li>Add Ref and Commit outputs by <a\nhref=\"https://github.com/lucacome\"><code>@​lucacome</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1180\">actions/checkout#1180</a></li>\n<li>Dependency updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>- <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1777\">actions/checkout#1777</a>,\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1872\">actions/checkout#1872</a></li>\n</ul>\n<h2>v4.1.7</h2>\n<ul>\n<li>Bump the minor-npm-dependencies group across 1 directory with 4\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1739\">actions/checkout#1739</a></li>\n<li>Bump actions/checkout from 3 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1697\">actions/checkout#1697</a></li>\n<li>Check out other refs/* by commit by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1774\">actions/checkout#1774</a></li>\n<li>Pin actions/checkout's own workflows to a known, good, stable\nversion. by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1776\">actions/checkout#1776</a></li>\n</ul>\n<h2>v4.1.6</h2>\n<ul>\n<li>Check platform to set archive extension appropriately by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1732\">actions/checkout#1732</a></li>\n</ul>\n<h2>v4.1.5</h2>\n<ul>\n<li>Update NPM dependencies by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1703\">actions/checkout#1703</a></li>\n<li>Bump github/codeql-action from 2 to 3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1694\">actions/checkout#1694</a></li>\n<li>Bump actions/setup-node from 1 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1696\">actions/checkout#1696</a></li>\n<li>Bump actions/upload-artifact from 2 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1695\">actions/checkout#1695</a></li>\n<li>README: Suggest <code>user.email</code> to be\n<code>41898282+github-actions[bot]@users.noreply.github.com</code> by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1707\">actions/checkout#1707</a></li>\n</ul>\n<h2>v4.1.4</h2>\n<ul>\n<li>Disable <code>extensions.worktreeConfig</code> when disabling\n<code>sparse-checkout</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1692\">actions/checkout#1692</a></li>\n<li>Add dependabot config by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1688\">actions/checkout#1688</a></li>\n<li>Bump the minor-actions-dependencies group with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1693\">actions/checkout#1693</a></li>\n<li>Bump word-wrap from 1.2.3 to 1.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1643\">actions/checkout#1643</a></li>\n</ul>\n<h2>v4.1.3</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/08c6903cd8c0fde910a37f88322edcfb5dd907a8\"><code>08c6903</code></a>\nPrepare v5.0.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2238\">#2238</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/9f265659d3bb64ab1440b03b12f4d47a24320917\"><code>9f26565</code></a>\nUpdate actions checkout to use node 24 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2226\">#2226</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:22:34Z",
          "tree_id": "21d164d6710c35f4ce4211d6cbaed1277161df03",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10a0bf16d634087d35e077a47d77d196cc59ffb0"
        },
        "date": 1756988534283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1375.81533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2183.57666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 888.88623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1719.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 627.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 272.53876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4192.46572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4610.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1249.348828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1391.38515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 858.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1734.46923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1404.04443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1174.612890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1438.49775390625,
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
          "id": "9374ac123f8ed6811be4c9eca1ca72c7d62c3848",
          "message": "Remove locking assertion from unlink (#1596)\n\nDuring unlink we currently have an assumption related to locking and we\nassert it. However, we have seen some cases where the assumption does\nnot hold. The assumption is that, when removing the child node from the\nparent node, the VFS will hold a lock on the parent and child.\n\nThis change removes the assumption and its assertion. Instead, we\ninvalidate the cache in the case where concurrent operations within the\nsame Mountpoint process were made to to the file and its parent.\n\nFor testing, we created scenarios to trigger the existing assertions in\nthe current implementation of unlink:\n1. To trigger the `expect()` statement that follows the removal of the\n`inode`:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n- Workload: create a new file, remove it and (in a separate terminal)\nexecuted a `stat` on the file\n- The `stat` only completes after the deletion completes. The deletion\nthread panics holding a lock and poisons the other threads. Mountpoint\nunmounts.\n2. To trigger the `assert()` statement that handles `inode` number\nmismatch:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n     - We added a 45s sleep statement in forget (`fs.rs`)\n- Workload: create a new file, remove it, created a file with the same\nname using `aws cli` and (in a separate terminal) a `stat` on the file\n- Mountpoint behaviour is the same as the first case except the message\nis from the assert.\n\nWith the changes in this PR, Mountpoint does not unmount and the `stat`\nresults are as expected (non existent in the first case and the most\nrecent file in the second case).\n\n### Does this change impact existing behavior?\n\nNo, this is a fix.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, entires were added to the `CHANGELOG.md` files and the version of\nthe `mountpoint-s3-fs` crate was bumped to `0.7.1`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-10T13:58:27Z",
          "tree_id": "7fafe0ce4428c5c53d1e0c4bac7fe4fb6b0c63ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9374ac123f8ed6811be4c9eca1ca72c7d62c3848"
        },
        "date": 1757519965403,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.12978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2361.55380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1687.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 316.03564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 747.2712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.758203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.8904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4558.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5095.7505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1259.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1415.1603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1016.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 808.7916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1062.3416015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1010.1853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.55712890625,
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
          "distinct": false,
          "id": "8862a35451dc573c7f123ceb9d53e72d57553e7d",
          "message": "Change ioctl log level from warn to debug (#1598)\n\nReduces log noise in production environments by changing ioctl function\nlogging from WARN to DEBUG level. This change improves the\nsignal-to-noise ratio in logs without affecting functionality.\n\nDoes this change impact existing behavior? \nNo functional impact - only reduces log noise by moving expected ioctl\nfailures from WARN to DEBUG level.\n\nDoes this change need a changelog entry? Does it require a version\nchange?\nAdded entry to CHANGELOG.md. No version change required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-10T16:32:07Z",
          "tree_id": "8c9045f859b1a6ea3e48303f61230942bc8cabd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8862a35451dc573c7f123ceb9d53e72d57553e7d"
        },
        "date": 1757529053672,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1360.95341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2291.8326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 835.026953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.45234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.33271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 204.4939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 291.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4050.2044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5079.54677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1279.837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1635.48271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 865.13603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1452.9259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1357.3099609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1388.12568359375,
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
          "id": "d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed",
          "message": "Benchmark sweeper fix (#1608)\n\nUpdate benchmarks to load sweeper parameters only from benchmark\nspecific configuration files\n\nUntil this change, we load configuration parameters from all benchmark\nconfiguration files\nand pick only the relevant benchmark parameters using regex matching.\nWhile this works\nfor most cases, it doesn't work for mountpoint parameters that don't\nhave benchmark-type\nsubstring and those parameters are picked up by all benchmarks. This\nchange will restrict\nsweeping through config parameters defined in the benchmark specific\nfile.\n\nThis also includes a change to replace the unused fuse threads\nconfiguration with the correct parameter that gets used in benchmarks.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it only updates benchmarks. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T09:57:35Z",
          "tree_id": "65532a76286833542c0cc4e5e1070026199c0b49",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed"
        },
        "date": 1758283040888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1410.7416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2376.4927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 857.4908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1637.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 299.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 420.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.19365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4023.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5084.74091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1515.5501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1351.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 908.61171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 789.8373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1335.45576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.96494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1167.47890625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}