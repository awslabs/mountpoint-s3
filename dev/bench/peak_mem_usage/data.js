window.BENCHMARK_DATA = {
  "lastUpdate": 1756989572376,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1753802732032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3429.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4880.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8375.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8225.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8242.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2115.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 756.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 460.76171875,
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
          "id": "720b2e17720e0b2ff7791e2614d20401c72b1f67",
          "message": "Use release flag for prefetcher benchmark (#1547)\n\nHarmonises the use of `--release` compile time flag across benchmarks.\n\nDoes not need a Changelog entry, as it neither changes existing\nbehaviour nor is customer-facing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:28:44Z",
          "tree_id": "3823efe7516dc0113e8565fbcc0cd226ee3b422b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720b2e17720e0b2ff7791e2614d20401c72b1f67"
        },
        "date": 1753890564526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3570.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4863.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8417.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8164.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.5390625,
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
          "distinct": true,
          "id": "315db6035a33a4c9fc568cd9f30a191c0ca3127d",
          "message": "Explicitly specify opt-level, use link-time optimisations (#1548)\n\nExplicitly set the optimisation level for our release builds to 3,\nadditionally enables link time optimisations and uses a single\ncompilation unit -- this enables more optimisations across the full\nlinked codebase.\n\nDoes not need a changelog entry, as it does not change mountpoint's\nbehaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:35:37Z",
          "tree_id": "4f5c1f207414e5cc5e4a8c90029400a3226e1e35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/315db6035a33a4c9fc568cd9f30a191c0ca3127d"
        },
        "date": 1753890867807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3535.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4871.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8521.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8211.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8249.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 642.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.03515625,
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
          "id": "8392342436f86c0f05698ab7d545b68a169a54fa",
          "message": "Add versioning of the configuration format in mount_from_config example (#1545)\n\nExample binary `mount_from_config` now accepts `config_version`\nparameter. This may be used to ensure that user is aware of updates to\nthe configuration format and prevent from silent failures.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-31T12:47:38Z",
          "tree_id": "94ffd5ae46b249ae2e2b817a62a3028d22aecdf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8392342436f86c0f05698ab7d545b68a169a54fa"
        },
        "date": 1753974344089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3487.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4842.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8481.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8275.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 788.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.77734375,
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
          "id": "0ed5273266768cddf36c4d04f4b175d0e02fb16f",
          "message": "Update logging docs for CSI Driver v2 (#1551)\n\nUpdate logging docs for CSI Driver v2 as in v2 logs are no longer in\nsyslog.\n\nSee\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/LOGGING.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:16:16Z",
          "tree_id": "d963e4a4b4c26756dc660760dbe4085622b7c966",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ed5273266768cddf36c4d04f4b175d0e02fb16f"
        },
        "date": 1754314384326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3591.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4892.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8466.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8247.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8220.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2098.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 751.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.2734375,
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
          "id": "7f8c622cfb7d861afa36f9f8cb2efa2e266a7050",
          "message": "Fix typo in package/README.md (#1558)\n\nFixes a typo in the packaging readme\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-06T13:56:09Z",
          "tree_id": "f6d080301a061edcc1b18d97904fdde0352e85b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f8c622cfb7d861afa36f9f8cb2efa2e266a7050"
        },
        "date": 1754496783584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3495.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4839.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8512.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8280.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2114.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 722.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 454.7734375,
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
          "distinct": true,
          "id": "b8e905035064f1040e09ba1e120dde8f0aa6b14f",
          "message": "Add helpful script for generating summary table from benchmark runs (#1557)\n\nAdds a script that parses the benchmark output and autoamtically creates\na table with only the parameters that changed between runs.\n\nDoes not need a changelog entry, as the script only parses hydra runs. \n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-06T17:32:47Z",
          "tree_id": "ebca5100846db4d4f196c8688795b2ebe287ae85",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8e905035064f1040e09ba1e120dde8f0aa6b14f"
        },
        "date": 1754509549515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3552.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4880.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8480.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 46.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8255.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 784.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.00390625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peterxcli@gmail.com",
            "name": "Peter Lee",
            "username": "peterxcli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0326fe6d3035a4d10c7d8bbb81d22d3fccfe6816",
          "message": "If using custom endpoint, force path style in benchmark script (#1560)\n\n### What changed and why?\n\n**What changed:**\n- Added `--force-path-style` flag to the `optional_args` in\n`mountpoint-s3/scripts/fs_bench.sh` when `S3_ENDPOINT_URL` is set\n- This change ensures that when using S3-compatible endpoints (like\nApache Ozone, MinIO, etc.), mountpoint-s3 uses path-style addressing\ninstead of virtual hosted-style addressing\n\n**Why:**\n- S3-compatible services often don't support virtual hosted-style\naddressing (e.g., `bucket1.localhost:9878`)\n- By default, mountpoint-s3 uses virtual hosted-style addressing which\ncauses 404 errors when connecting to S3-compatible endpoints\n- The `--force-path-style` flag forces path-style addressing (e.g.,\n`localhost:9878/bucket1/`) which is compatible with most S3-compatible\nservices\n- This fix resolves the \"Invalid response status from request\" error\nwhen connecting to non-AWS S3 endpoints\n\n### Does this change impact existing behavior?\n\n**No breaking changes:**\n- This change only affects the behavior when `S3_ENDPOINT_URL` is\nexplicitly set\n- When using AWS S3 (the default), this change has no impact since AWS\nS3 supports both addressing styles\n- The `--force-path-style` flag is additive and doesn't remove any\nexisting functionality\n- Users connecting to AWS S3 will continue to work exactly as before\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n**Changelog entry:** Yes, recommended\n**Version change:** No, this is a bug fix\n\n**Justification:**\n- This is a bug fix that improves compatibility with S3-compatible\nservices\n- It doesn't introduce new features or breaking changes\n- The fix aligns with existing behavior in other benchmark scripts\n(`fs_latency_bench.sh` and `fs_cache_bench.sh` already have this fix)\n- Users connecting to S3-compatible services will now have a better\nout-of-the-box experience\n\n**Suggested changelog entry:**\n```\n## [Unreleased]\n### Fixed\n- Fixed benchmark scripts to use path-style addressing when connecting to S3-compatible endpoints\n  - Added `--force-path-style` flag to `fs_bench.sh` when `S3_ENDPOINT_URL` is set\n  - This resolves connection issues with Apache Ozone, MinIO, and other S3-compatible services\n```\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: peterxcli <peterxcli@gmail.com>",
          "timestamp": "2025-08-07T12:15:28Z",
          "tree_id": "0a3dd7a8082a91c1ee8e4ce44cb83604527979ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0326fe6d3035a4d10c7d8bbb81d22d3fccfe6816"
        },
        "date": 1754576996455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3583.5625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4871.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8464.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8114.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8153.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 823.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 541.80078125,
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
          "id": "a06f2ef58750be6a56a360734d6f6e2f2b1cb61f",
          "message": "Add changelog for #1560 (#1561)\n\nAdds changelog for #1560.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-07T13:47:56Z",
          "tree_id": "c7e2061319582a6f64d101c7489db6d64b478776",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a06f2ef58750be6a56a360734d6f6e2f2b1cb61f"
        },
        "date": 1754582751766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3654.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4952.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8527.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8136.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8203.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 947.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 526.796875,
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
          "distinct": true,
          "id": "608dc266af4e6824d66beaecbdc5a0fec2697f70",
          "message": "Add option to disable download checksums in performance tests (#1555)\n\nAdds an option to our benchmarking code to disable verification of\ndownloaded objects integrity.\n\nDoes not change existing behaviour, as it is only enabled when\n`EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION ` is set, and\nthus does not need a changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-07T16:13:09Z",
          "tree_id": "3cf1a53da09c0b84e24d577db0bb2f612bc79b33",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/608dc266af4e6824d66beaecbdc5a0fec2697f70"
        },
        "date": 1754591262625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3568.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4889.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8540.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8196.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8149.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 867.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.3125,
            "unit": "MiB"
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
        "date": 1754664156150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3511.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4886.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8530.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8217.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8232.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 772.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496,
            "unit": "MiB"
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
          "distinct": true,
          "id": "9235f1138490d1b05a158f217cd309678744b7f9",
          "message": "OpenTelemetry integration with metrics (#1550)\n\nThis PR adds an implementation of OpenTelemetry Exporting of metrics\nthrough the OpenTelemetry protocol (OTLP). Changes are: a new\nOtlpMetricsExporter struct which handles exporting metrics to an OTLP\nendpoint, and integration of the OTLP exporter with the existing metrics\nsystem.\n\nAll of this code is under a compile time flag, named `otlp_integration`\n\nTesting:\nI tested the implementation with a test otlp_metrics() in metrics.rs and\nran a docker container running the OpenTelemetry Collector at the\ndefault port\n\ndocker run -d --name otel-collector \\\n  -p 4318:4318 -p 4317:4317 \\\n  -v $(pwd)/collector-config.yaml:/etc/otelcol/config.yaml \\\n  otel/opentelemetry-collector-contrib:latest\n\nOnce I ran the test, I verified that the test metrics can be viewed in\nthe collector logs. (viewed using 'docker logs otel-collector'). Here is\na screenshot of an example of a test metric collected at the endpoint:\n<img width=\"391\" alt=\"Screenshot 2025-06-18 at 15 32 16\"\nsrc=\"https://github.com/user-attachments/assets/aab7e20a-0472-495b-af1d-23e966495e21\"\n/>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Shivangi Kumar <shivyk@amazon.com>\nCo-authored-by: Shivangi Kumar <shivyk@amazon.com>",
          "timestamp": "2025-08-11T16:08:44Z",
          "tree_id": "847951c7445398d2f45372b484538f2c564d6405",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9235f1138490d1b05a158f217cd309678744b7f9"
        },
        "date": 1754936785569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3532.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.96875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8399.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8139.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 841.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 459.2734375,
            "unit": "MiB"
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
        "date": 1755015307078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3564.07421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4953.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8525.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8210.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8084.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 694.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 511.8046875,
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
          "id": "302224192b1c97ed68f3f0721f63c3b0753d7f13",
          "message": "Add option to get flamegraph (#1570)\n\nAdds possibility to get flamegraphs for a Mountpoint benchmark run,\nusing `cargo flamegraph`.\n\nNo breaking changes, only adds functionality.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:28:30Z",
          "tree_id": "ae229acd069eba9ca7790b9ee9aa821e3c557123",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/302224192b1c97ed68f3f0721f63c3b0753d7f13"
        },
        "date": 1755103600514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3758.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4966.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8530.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8246.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8188.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 941.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 511.0234375,
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
          "distinct": true,
          "id": "9297fa45fc0d0509e509f84cd1766cb3664887c4",
          "message": "Small fix for stdev of singleton list (#1572)\n\nFixes a small bug where the autogrouping script to analyse benchmark\nruns in cmd may fail if a group only has 1 benchmark run, as\n´statistics.stdev´ fails when the list has less than 2 entries. In these\ncases, we will now return `N/A` as stddev.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:55:36Z",
          "tree_id": "1d7e73fb174489e9abcc9d87916d196b6f2cd1ba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9297fa45fc0d0509e509f84cd1766cb3664887c4"
        },
        "date": 1755105296887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3736.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4928.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8573.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8144.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8110.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 833.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.5234375,
            "unit": "MiB"
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
        "date": 1755195376122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3552.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4918.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8378.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8247.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8149.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 752.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 458.98828125,
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
          "distinct": true,
          "id": "7e865bdd4f52f730e7b7419dfe15561b556d10e4",
          "message": "Enable resource monitoring for all benchmark types (#1573)\n\nAdds the possibility to run resource monitoring for all benchmark types.\nThis is achieved by introducing a `Command` abstraction that is returned\nby the benchmark. Then when the command has just started executing we\nstart the monitoring with it, unless we already have a PID to monitor\n(used for FIO). (Thanks, Q )\n\nAdditionally changes the way we run most cargo commands by seperating\nthe phase where replacing `cargo run` by instead doing `cargo build` and\ngetting the executable path -- otherwise the compilation was part of the\nflamegraph.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-14T16:11:51Z",
          "tree_id": "528d0ef32e9b4084d1def0e4a051f89e3ab8a25a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e865bdd4f52f730e7b7419dfe15561b556d10e4"
        },
        "date": 1755196184512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3604.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4941.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8514.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8099.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8258.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 628.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 493.76953125,
            "unit": "MiB"
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
        "date": 1755257561852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3539.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4908,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8406.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8134.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8210.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2096.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 772.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 526.03515625,
            "unit": "MiB"
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
        "date": 1755262871389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3426.2578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4826.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8465.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8155.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8221.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 607.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.5625,
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
          "distinct": true,
          "id": "73c9de1a2ab6e5130aac9cb6d269037601a67023",
          "message": "🧊Change colour palette for icy flamegraphs ❄️ (#1576)\n\nMakes icycle flamegraphs more icy, by changing to blue colour palette\nfrom the currently used red (aka `hot`) one.\n\nNo changelog entry needed, as only affects benchmarking visualisations.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T12:50:00Z",
          "tree_id": "59f7c4dec7bc319939ed86bd5d3f1d5981704902",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73c9de1a2ab6e5130aac9cb6d269037601a67023"
        },
        "date": 1755270297468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3498.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4849.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8503.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8133.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8262.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 820.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.546875,
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
          "distinct": true,
          "id": "a21e11eb58696febd23f7285d270abe8e55beddc",
          "message": "Remove left-over parameter (#1578)\n\nRemoves accidentially forgotten parameter, fixing the prefetcher and\nclient benchmarks to be executable again.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T15:05:07Z",
          "tree_id": "2746dba63ded33c1f080cedf5c17dd2622df39db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a21e11eb58696febd23f7285d270abe8e55beddc"
        },
        "date": 1755278544749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3626.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8542.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8307.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8129.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 800.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 478.03125,
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
          "distinct": true,
          "id": "17e7c3f1b9f04387a8338e92311abfc0b8844090",
          "message": "Remove usage of `capture_output` from crt benchmark (#1582)\n\nRemoves usage of `capture_output` from CRT benchmarks as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-17T07:09:40Z",
          "tree_id": "7bdc95541817689ecf4bd263fbf97f6a69ab06c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17e7c3f1b9f04387a8338e92311abfc0b8844090"
        },
        "date": 1755422672470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3413.8984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4900.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8465.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8256.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8169.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2099.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.046875,
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
          "id": "28760197e4ca8e4bac68e9d751442a16088121b4",
          "message": "Disable flamegraphs by default (#1583)\n\nFlamegraphs were accidentially enabled by default.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-18T08:47:40Z",
          "tree_id": "71b178cc330edfaa6c0417640f47fc59be89a15a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28760197e4ca8e4bac68e9d751442a16088121b4"
        },
        "date": 1755515219631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3347.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4816.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8510.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8206.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8204.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.05859375,
            "unit": "MiB"
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
        "date": 1755603301065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3437.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4813.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8513.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8154.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8074.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2098.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 775.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 459.77734375,
            "unit": "MiB"
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
        "date": 1755635619164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3623.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4936.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8582.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8257.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8123.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 864.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.26171875,
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
          "id": "c6d0d88b177e93e8a4e7c74f6e645004a7986ca5",
          "message": "Add benchmark sweeper configuration and auto-override for benchmark type (#1554)\n\n### What changed and why?\n\nFixed an issue where benchmark parameters for unselected benchmark types\nwere incorrectly included in multirun sweeps. Previously, all benchmark\nparameters were defined in the common sweeper config, causing irrelevant\nparameters to be swept even when running specific benchmark types.\n\n__Changes:__\n\n- Added auto-detection of `benchmark_type` parameter to automatically\nselect appropriate sweeper config\n- Split benchmark-specific sweep parameters into separate config files\n(`fio.yaml`, `prefetch.yaml`, `client-bp.yaml`, etc.)\n- Moved common parameters to `base.yaml` sweeper config\n- Now only relevant parameters are swept for each benchmark type\n- Added tests that can be run via `uv add pytest --dev` and `uv run\npytest tests/` to test the filtering and combination logic.\n\n__Example__: Running `benchmark_type=fio` now only sweeps FIO-specific\nparameters instead of including unrelated prefetch or\nclient-backpressure parameters.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Existing commands work as before, but now sweep\nonly relevant parameters for the specified benchmark type.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNone needed\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-08-22T09:16:24Z",
          "tree_id": "6f6636e808f39a3e925cf88ba34ce39905ecfe45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6d0d88b177e93e8a4e7c74f6e645004a7986ca5"
        },
        "date": 1755862195234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3421.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4855.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8479.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8173.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8157.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 634.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 465.26953125,
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
          "distinct": true,
          "id": "1215a6df43bc5fe95672463cb16f91b579694ab2",
          "message": "Replace httpmock with wiremock (#1589)\n\nReplaces `httpmock` dependency with `wiremock` that is more often\nupdated.\n\nOnly replaces testing library.\n\nProbably needs a Changelog entry, will add later.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T10:49:18Z",
          "tree_id": "f4f32b234c8ad7dd3ec95068be935f1557bdf367",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1215a6df43bc5fe95672463cb16f91b579694ab2"
        },
        "date": 1756472738088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3319.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4836,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8584.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8320.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8122.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 636.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 651.68359375,
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
          "distinct": true,
          "id": "028ec721e5134829d2c1c8605ef8f3236d5ddeed",
          "message": "[Benchmarks] Ensure binaries are built with necessary flags for flamegraphing (#1575)\n\nEnsures that frame pointers for C and Rust code are emitted when\nflamegraphing mountpoint.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T13:28:20Z",
          "tree_id": "1384d0df12a36373765319f23a69312c3bcd9dcf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/028ec721e5134829d2c1c8605ef8f3236d5ddeed"
        },
        "date": 1756482197957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3476.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4905.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8433.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8206.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8096.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 934.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 459.30078125,
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
          "id": "61f94b3f80f002b29c98c4089273d1db6eed3438",
          "message": "Bump tracing-subscriber from 0.3.19 to 0.3.20 (#1590)\n\nBumps [tracing-subscriber](https://github.com/tokio-rs/tracing) from\n0.3.19 to 0.3.20.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tracing/releases\">tracing-subscriber's\nreleases</a>.</em></p>\n<blockquote>\n<h2>tracing-subscriber 0.3.20</h2>\n<p><strong>Security Fix</strong>: ANSI Escape Sequence Injection\n(CVE-TBD)</p>\n<h2>Impact</h2>\n<p>Previous versions of tracing-subscriber were vulnerable to ANSI\nescape sequence injection attacks. Untrusted user input containing ANSI\nescape sequences could be injected into terminal output when logged,\npotentially allowing attackers to:</p>\n<ul>\n<li>Manipulate terminal title bars</li>\n<li>Clear screens or modify terminal display</li>\n<li>Potentially mislead users through terminal manipulation</li>\n</ul>\n<p>In isolation, impact is minimal, however security issues have been\nfound in terminal emulators that enabled an attacker to use ANSI escape\nsequences via logs to exploit vulnerabilities in the terminal\nemulator.</p>\n<h2>Solution</h2>\n<p>Version 0.3.20 fixes this vulnerability by escaping ANSI control\ncharacters in when writing events to destinations that may be printed to\nthe terminal.</p>\n<h2>Affected Versions</h2>\n<p>All versions of tracing-subscriber prior to 0.3.20 are affected by\nthis vulnerability.</p>\n<h2>Recommendations</h2>\n<p>Immediate Action Required: We recommend upgrading to\ntracing-subscriber 0.3.20 immediately, especially if your\napplication:</p>\n<ul>\n<li>Logs user-provided input (form data, HTTP headers, query parameters,\netc.)</li>\n<li>Runs in environments where terminal output is displayed to\nusers</li>\n</ul>\n<h2>Migration</h2>\n<p>This is a patch release with no breaking API changes. Simply update\nyour Cargo.toml:</p>\n<pre lang=\"toml\"><code>[dependencies]\ntracing-subscriber = &quot;0.3.20&quot;\n</code></pre>\n<h2>Acknowledgments</h2>\n<p>We would like to thank <a href=\"http://github.com/zefr0x\">zefr0x</a>\nwho responsibly reported the issue at\n<code>security@tokio.rs</code>.</p>\n<p>If you believe you have found a security vulnerability in any\ntokio-rs project, please email us at <code>security@tokio.rs</code>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/4c52ca5266a3920fc5dfeebda2accf15ee7fb278\"><code>4c52ca5</code></a>\nfmt: fix ANSI escape sequence injection vulnerability (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3368\">#3368</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/f71cebe41e4c12735b1d19ca804428d4ff7d905d\"><code>f71cebe</code></a>\nsubscriber: impl Clone for EnvFilter (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3360\">#3360</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/3a1f571102b38bcdca13d59f3c454989d179055d\"><code>3a1f571</code></a>\nFix CI (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3361\">#3361</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e63ef57f3d686abe3727ddd586eb9af73d6715b7\"><code>e63ef57</code></a>\nchore: prepare tracing-attributes 0.1.30 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3316\">#3316</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e59a13b1a7bcdd78b8b5a7cbcf70a0b2cdd76f0\"><code>6e59a13</code></a>\nattributes: fix tracing::instrument regression around shadowing (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3311\">#3311</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e4df76127538aa8370d7dee32a6f84bbec6bbf10\"><code>e4df761</code></a>\ntracing: update core to 0.1.34 and attributes to 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3305\">#3305</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/643f392ebb73c4fb856f56a78c066c82582dd22c\"><code>643f392</code></a>\nchore: prepare tracing-attributes 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3304\">#3304</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/d08e7a6eea1833810ea527e18ea03b08cd402c9d\"><code>d08e7a6</code></a>\nchore: prepare tracing-core 0.1.34 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3302\">#3302</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e70c571d319a033d5f37c885ccf99aa675a9eac\"><code>6e70c57</code></a>\ntracing-subscriber: count numbers of enters in <code>Timings</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2944\">#2944</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/c01d4fd9def2fb061669a310598095c789ca0a32\"><code>c01d4fd</code></a>\nfix docs and enable CI on <code>main</code> branch (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3295\">#3295</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tracing/compare/tracing-subscriber-0.3.19...tracing-subscriber-0.3.20\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tracing-subscriber&package-manager=cargo&previous-version=0.3.19&new-version=0.3.20)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:05:39Z",
          "tree_id": "397b9b5bdbefbe0c2e5d65138c3244b0edf92cf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f94b3f80f002b29c98c4089273d1db6eed3438"
        },
        "date": 1756988564064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3535.7109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4904.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8368.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8249.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8239.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 809.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 478.3984375,
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
          "id": "10a0bf16d634087d35e077a47d77d196cc59ffb0",
          "message": "Bump actions/checkout from 4 to 5 (#1585)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to\n5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2238\">actions/checkout#2238</a></li>\n</ul>\n<h2>⚠️ Minimum Compatible Runner Version</h2>\n<p><strong>v2.327.1</strong><br />\n<a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Release\nNotes</a></p>\n<p>Make sure your runner is updated to this version or newer to use this\nrelease.</p>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5.0.0\">https://github.com/actions/checkout/compare/v4...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n<li>Prepare release v4.3.0 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2237\">actions/checkout#2237</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/motss\"><code>@​motss</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li><a href=\"https://github.com/mouismail\"><code>@​mouismail</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li><a href=\"https://github.com/benwells\"><code>@​benwells</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v4.3.0\">https://github.com/actions/checkout/compare/v4...v4.3.0</a></p>\n<h2>v4.2.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.1...v4.2.2\">https://github.com/actions/checkout/compare/v4.2.1...v4.2.2</a></p>\n<h2>v4.2.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Jcambass\"><code>@​Jcambass</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1919\">actions/checkout#1919</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.0...v4.2.1\">https://github.com/actions/checkout/compare/v4.2.0...v4.2.1</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>V5.0.0</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n</ul>\n<h2>V4.3.0</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<h2>v4.2.2</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<h2>v4.2.1</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>v4.2.0</h2>\n<ul>\n<li>Add Ref and Commit outputs by <a\nhref=\"https://github.com/lucacome\"><code>@​lucacome</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1180\">actions/checkout#1180</a></li>\n<li>Dependency updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>- <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1777\">actions/checkout#1777</a>,\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1872\">actions/checkout#1872</a></li>\n</ul>\n<h2>v4.1.7</h2>\n<ul>\n<li>Bump the minor-npm-dependencies group across 1 directory with 4\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1739\">actions/checkout#1739</a></li>\n<li>Bump actions/checkout from 3 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1697\">actions/checkout#1697</a></li>\n<li>Check out other refs/* by commit by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1774\">actions/checkout#1774</a></li>\n<li>Pin actions/checkout's own workflows to a known, good, stable\nversion. by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1776\">actions/checkout#1776</a></li>\n</ul>\n<h2>v4.1.6</h2>\n<ul>\n<li>Check platform to set archive extension appropriately by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1732\">actions/checkout#1732</a></li>\n</ul>\n<h2>v4.1.5</h2>\n<ul>\n<li>Update NPM dependencies by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1703\">actions/checkout#1703</a></li>\n<li>Bump github/codeql-action from 2 to 3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1694\">actions/checkout#1694</a></li>\n<li>Bump actions/setup-node from 1 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1696\">actions/checkout#1696</a></li>\n<li>Bump actions/upload-artifact from 2 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1695\">actions/checkout#1695</a></li>\n<li>README: Suggest <code>user.email</code> to be\n<code>41898282+github-actions[bot]@users.noreply.github.com</code> by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1707\">actions/checkout#1707</a></li>\n</ul>\n<h2>v4.1.4</h2>\n<ul>\n<li>Disable <code>extensions.worktreeConfig</code> when disabling\n<code>sparse-checkout</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1692\">actions/checkout#1692</a></li>\n<li>Add dependabot config by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1688\">actions/checkout#1688</a></li>\n<li>Bump the minor-actions-dependencies group with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1693\">actions/checkout#1693</a></li>\n<li>Bump word-wrap from 1.2.3 to 1.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1643\">actions/checkout#1643</a></li>\n</ul>\n<h2>v4.1.3</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/08c6903cd8c0fde910a37f88322edcfb5dd907a8\"><code>08c6903</code></a>\nPrepare v5.0.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2238\">#2238</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/9f265659d3bb64ab1440b03b12f4d47a24320917\"><code>9f26565</code></a>\nUpdate actions checkout to use node 24 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2226\">#2226</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:22:34Z",
          "tree_id": "21d164d6710c35f4ce4211d6cbaed1277161df03",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10a0bf16d634087d35e077a47d77d196cc59ffb0"
        },
        "date": 1756989572320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3545.21875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4853.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8502.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8222.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8210.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 801.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 430.4296875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}