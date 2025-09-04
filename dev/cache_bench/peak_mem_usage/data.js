window.BENCHMARK_DATA = {
  "lastUpdate": 1756987575029,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1753462622914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2593.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2248.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2255.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2246.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2420.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2207.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2275.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.65234375,
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
          "id": "581fdeb95dc511ca5ee39409093a75e4ddee0767",
          "message": "Enforce valid buffer sizes for the memory pool (#1540)\n\nThe memory pool will only accept buffer sizes in the range (0, 64MiB]\nfor the primary memory (i.e. allocated in pages of 16 buffers). For\nlarger sizes, it will only use secondary memory (i.e. ad-hoc allocation\nfor a single buffer).\n\nThe 64MiB cap reproduces the behavior of the internal CRT memory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - part of the memory pool change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T15:35:33Z",
          "tree_id": "40d197e8687e15aaff1c27602db0f85d11c71282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/581fdeb95dc511ca5ee39409093a75e4ddee0767"
        },
        "date": 1753464757159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2280.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2247.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2164.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2172.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 50.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2172.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2174.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2304.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2182.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 39.27734375,
            "unit": "MiB"
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
        "date": 1753467211724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2181.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2197.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2177.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 41.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 37.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2230.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2193.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2215.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.8359375,
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
          "id": "dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e",
          "message": "Prepare for release of the fs crate v0.7.0 (#1544)\n\nUpdate changelogs of the `fs` and `client` crates to prepare for\nrelease.\n\nAlso include previously missing entry in `client` changelog for #1542,\nand increase the crate version number.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-28T11:01:31Z",
          "tree_id": "13558d258862673afe79a1f9a4eb98ca18ce89ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e"
        },
        "date": 1753707725095,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2180.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2171.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2181.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2198.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2221.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 30.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2192.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.171875,
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
          "id": "2a9a494442fe164e2119e3c020989c19ce198aae",
          "message": "Automated Benchmark Result Upload (#1527)\n\n### What changed and why?\n\nThis PR adds functionality to automatically upload benchmark results to\nan S3 bucket when benchmarks complete. The implementation includes:\n\n1. A new `detect_result_folder()` function that determines the\nappropriate result folder path and source path based on Hydra's runtime\nconfiguration\n2. A new `upload_results_to_s3()` function that uses AWS CLI to sync\nlocal benchmark results to the specified S3 bucket\n\nThese changes enable automated collection of benchmark results in a\ncentralized S3 location, making it easier to analyze performance trends\nover time.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-07-29T13:13:56Z",
          "tree_id": "a81582905f9e86c18ed7af6a4bd2fb58fc16fe0b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a9a494442fe164e2119e3c020989c19ce198aae"
        },
        "date": 1753801866615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2290.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2188.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2186.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2513.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2180,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 32.78125,
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
        "date": 1753889572652,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2167.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2193.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2484.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 53.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2201.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2180.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2354.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2178.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2160.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.53125,
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
        "date": 1753889810771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2177.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2484.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2190.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2190.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2179.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2561.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2174.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.94140625,
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
        "date": 1753973407173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2172.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2181.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2208.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2450.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2416.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2191.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2187.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.1875,
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
        "date": 1754313407765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2180.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2169.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2173.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2189.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2513.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2243.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2182.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2174.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2200.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.3125,
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
        "date": 1754495910143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2177.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2372.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2197.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2251.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2203.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2280.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2179.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.3671875,
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
        "date": 1754508632911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2182.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2191.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2365.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2175.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2203.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2174.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.63671875,
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
        "date": 1754581872581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2452.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2394.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2195.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2187.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2193.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2276.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2608.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.68359375,
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
        "date": 1754590393929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2277.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2204.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2188.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2375.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 41.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2386.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2188.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2317.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2380.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2185.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8359375,
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
        "date": 1754663289645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2251.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2179.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 41.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2173.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 43.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2173.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2201.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2171.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2207.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.93359375,
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
        "date": 1755014446274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2382.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2194.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2193.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2232.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 40.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2386.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2578.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2188.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2180.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2272.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.0703125,
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
        "date": 1755102817565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2388.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2447.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2472.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2198.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2196.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2191.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 43.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2200.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 30.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2218.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2284.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.56640625,
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
        "date": 1755194255880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2217.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2224.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2194.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2164.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2177.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2178.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.92578125,
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
        "date": 1755195250782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2530.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2313.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2185.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 63.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2393.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2173.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2478.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.015625,
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
        "date": 1755256559705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2197.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2176.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2187.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2229.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2181.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2295.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2180.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2258.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2186.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.68359375,
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
        "date": 1755261935646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2184.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2178.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2288.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 55.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2176.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2182.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2177.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2189.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.5546875,
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
        "date": 1755269349624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2173.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2200.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2174.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2458.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2481.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2297.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2179.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.0859375,
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
        "date": 1755277605923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2213.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2170.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2180.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2180.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2192.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2195.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.234375,
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
        "date": 1755421709953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2171.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2195.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2189.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2177.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2168.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 30.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2195.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2176.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.66015625,
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
        "date": 1755514098181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2317.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2307.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2175.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2227.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2180.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.3359375,
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
        "date": 1755602298202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2179.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2383.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2179.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2335.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2414.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2162.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2191.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.02734375,
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
        "date": 1755634639844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2378.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2271.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2177.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2172.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2201.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2181.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2605.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.13671875,
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
        "date": 1755861328297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2197.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2178.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2244.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2196.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2271.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2432.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 39.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2238.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.1875,
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
        "date": 1756471830936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2196.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2269.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2198.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2185.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2189.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2190.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 38.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2176.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2171.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.91796875,
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
        "date": 1756481300187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2183.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2176.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2197.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2186.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 3038.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 33.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2177.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2289.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.73828125,
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
        "date": 1756987574975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2165.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2190.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2185.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2187.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2178.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2168.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2170.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2170.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 37.19921875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}