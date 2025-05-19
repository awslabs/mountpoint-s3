window.BENCHMARK_DATA = {
  "lastUpdate": 1747666990286,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1745582373656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3330.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3257.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3191.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3431.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 245.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17343.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3259.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3348.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14108.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.02734375,
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
        "date": 1745590045107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3196.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3343.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3400.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3222.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27488.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3357.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3344.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3320.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3428.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.14453125,
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
        "date": 1745594808385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3078.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3293.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3275.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3307.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19159.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3319.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3440.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3244.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3427.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.33203125,
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
        "date": 1745602200400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3206.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 341.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3129.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3302.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3176.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23234.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3269.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3213.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 242.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3450.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3405.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.9921875,
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
        "date": 1745838736794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3417.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3427.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3388.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22474.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3350.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3423.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3405,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3317.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.4296875,
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
        "date": 1745843273778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3495.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3115.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3109.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3399.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38448.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3226.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3311.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3418.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3112.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.125,
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
        "date": 1745928300470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3479.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3481.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3466.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3297.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33674.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3533.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3556.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 206.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3405.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3112.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.0546875,
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
        "date": 1745947246606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3282.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3275.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3348.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3147.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34878.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3219.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3364.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3437.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5358.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.12890625,
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
        "date": 1745951014116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3261.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3198.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3354.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3509.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21298.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3343.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3296.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 241.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3445.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13411.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.89453125,
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
        "date": 1746014988455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3192.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3230.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3374.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24508.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3304.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3426.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3042.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3304.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.25390625,
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
        "date": 1746191687981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3513.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3296.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3270.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3503.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30942.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3495.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3421.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3329.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11733.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.359375,
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
        "date": 1746209266510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3094.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3386.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3389.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3290.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27964.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 354.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3463.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3396.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3305.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 24770.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.890625,
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
        "date": 1746209409387,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3070.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3216.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3231.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3308.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27924.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3277.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3450.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2968.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3472.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.0078125,
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
        "date": 1746545286157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3158.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3251.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3528.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3093.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16202.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3174.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3342.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3297.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3289.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 233.9609375,
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
        "date": 1746551218754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3274.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3279.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3284.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3298.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31224.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3302.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3281.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3398.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3242.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.6484375,
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
        "date": 1746618883268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3474.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3362.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3269.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3271.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31139.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3255.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3275.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3251.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2879.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 233.14453125,
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
        "date": 1746634390505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3376.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3248.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3258.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3146.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35634.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3413.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3368.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3234.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3199.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.28515625,
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
        "date": 1746792341827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3517.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 344.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3316.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3424.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3163.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16260.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3387.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3269.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3216.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3474.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.46875,
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
        "date": 1746802677423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3278.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3264.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3383.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22616.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3332.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3218.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10295.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10090.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.328125,
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
        "date": 1746806592758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3076.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3391.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3175.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27330.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3283.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3253.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7631.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.09375,
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
        "date": 1747051308620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3187.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3379.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3382.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3364.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28898.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3359.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3362.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3372.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13254.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.1875,
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
        "date": 1747133276783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3035.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3243.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3362.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3350.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16728.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3359.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3427.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3617.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3318.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.1171875,
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
        "date": 1747145634512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3314.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3464.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3346.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3263.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27206.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3253.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3475.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3488.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5092.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.3125,
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
        "date": 1747216957091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3321.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3352.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3406.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3442.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30648.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3402.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3430.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3397.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.53515625,
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
        "date": 1747234383555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3396.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 343.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3070.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3328.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3266.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16282.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3184.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3433.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3184.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3151.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 207.8984375,
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
          "distinct": false,
          "id": "6f91f234c6fb939c92d1a115cacaf8f881e17dfe",
          "message": "Update contributing to address updates of 0.x.y patch versions (#1406)\n\nThe guidance on how to update dependencies (and their dependents) was\nunclear. This change updates the contributing guide.\n\n### Does this change impact existing behavior?\n\nDoc change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, doc change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T14:24:29Z",
          "tree_id": "d98c0c4a2becbd973d4a658530432b01325165a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f91f234c6fb939c92d1a115cacaf8f881e17dfe"
        },
        "date": 1747239856907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3267.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3385.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3327.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3269.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34156.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3374.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3255.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3292.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3294.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.71875,
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
          "distinct": false,
          "id": "09a22a9c025816872a6c6607166ed8ef0f80d3d6",
          "message": "Remove unused read timeout from prefetcher configuration (#1421)\n\nPrefetcher read timeouts were removed in commit 0ca2c771. The motivation\nthere was that timeouts were added due to deadlock issues early in\ndevelopment of Mountpoint, and that they had since been eliminated.\nThere is an open next step to introduce timeouts at a FUSE operation\nlevel which has not yet been completed (see\nhttps://github.com/awslabs/mountpoint-s3/issues/124).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes internal config struct only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-15T09:26:02Z",
          "tree_id": "c016737272a4116b9a05d18a765e2482c621cc16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a22a9c025816872a6c6607166ed8ef0f80d3d6"
        },
        "date": 1747308316373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3321.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3338.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32942.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3081.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3494.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3594.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3388.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.0390625,
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
          "id": "be792de9ef2e76f6993bc6126db679bb2cb34fc0",
          "message": "Adding fstab tag to user agent headers (#1420)\n\n### What changed and why?\n\n- This PR adds a new mp-fstab tag to the user agent header when\nMountpoint is launched via an fstab entry.\n- Introduces an is_fstab field to CliArgs, which is set to true when\nparsing arguments from fstab.\n- This allows downstream consumers (like the product team) to detect and\nanalyze fstab-based usage of Mountpoint for Amazon S3, supporting\nproduct analytics and future UX improvements.\n\nExample Request Header\n<img width=\"719\" alt=\"image\"\nsrc=\"https://github.com/user-attachments/assets/10561b96-b893-496f-bab4-3f00ae568e68\"\n/>\n\n\n### Does this change impact existing behavior?\n\n- No breaking changes.\n- The only impact is the addition of the mp-fstab tag in the user agent\nheader for fstab-based mounts.\n- All other mounting methods and user agent construction remain\nunchanged.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-15T10:16:23Z",
          "tree_id": "615c10da9bea9d73cb8eaecd4d1cfecc767eab31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be792de9ef2e76f6993bc6126db679bb2cb34fc0"
        },
        "date": 1747311381131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3324.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3580.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3667.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3305.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21371.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3578.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3344.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3504.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10058.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.44140625,
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
          "distinct": false,
          "id": "676157b668a0b76b3387acb3f67d3bce58d2774e",
          "message": "Add errno check to FS mock S3 tests (#1424)\n\nSimple update to the test to check error number. We check this in other\nparts of the code, but this provides integration testing using the mock\nS3 HTTP server tests.\n\nProvides some basic coverage related to #1422.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-16T11:57:29Z",
          "tree_id": "e4a9ba6ba6b16ff193851b4ddef74cc132179ef3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/676157b668a0b76b3387acb3f67d3bce58d2774e"
        },
        "date": 1747403854726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3395.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3539.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3372.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3410.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16348.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3364.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3290.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3291.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3152.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.9921875,
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
          "id": "172b4a14f53004bec00bca69110a88a895348b22",
          "message": "Propagate S3 response with `PrefetchReadError` (#1411)\n\nFor logging purposes we want S3 response (http_code, error_code,\nerror_message) to be retrievable via `fs::Error` when errors occur\nduring `S3FuseFilesystem::read` operation.\n\nTo achieve that we preserve this information during `PrefetchReadError\n-> fs::Error` conversion in `PrefetchReadError::get_request_failed`\nmethod. We also adjust `mountpoint-s3-client` to parse and store S3\nresponse with the following errors:\n\n1. GetObjectError::NoSuchBucket\n1. GetObjectError::NoSuchKey\n1. GetObjectError::PreconditionFailed\n1. S3RequestError::Forbidden\n1. S3RequestError::ResponseError\n1. S3RequestError::Throttled\n1. S3RequestError::IncorrectRegion\n1. Other `S3RequestError` variants occur before the response arrives and\nthus don't provide metadata\n\n### Does this change impact existing behavior?\n\nIn logs, read errors do not contain redundant token:\n> ..read failed with errno 5: get request failed: ~get object request\nfailed:~ Client error: ..\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAn entry for the `mountpoint-s3-client` changelog and a minor version\nbump (`0.14.1` -> `0.15.0`) to account for changes to error enum\nvariants?\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-19T13:02:01Z",
          "tree_id": "bf7371a714593d161ada9ab239fc11073ae65ba1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/172b4a14f53004bec00bca69110a88a895348b22"
        },
        "date": 1747666990232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3337.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3400.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 340.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2965.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3295.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20430.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3097.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3350.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3330.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3185.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.0390625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}