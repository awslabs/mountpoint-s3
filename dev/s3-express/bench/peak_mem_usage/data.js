window.BENCHMARK_DATA = {
  "lastUpdate": 1754576838240,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
        "date": 1752785249277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13168.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28088.1015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39664.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 308.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 189.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 316.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 232.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36339.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37440.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13055.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13705.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11753.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.80078125,
            "unit": "MiB"
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
        "date": 1752829498211,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14978.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24138.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39096.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 132.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 310.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 216.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 309.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35637.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37671.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10639.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12401.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13004.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.04296875,
            "unit": "MiB"
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
        "date": 1752830513551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14448.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29607.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40876.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 141.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 162.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 245.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36115.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38495.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13164.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12574.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9498.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 231.265625,
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
          "distinct": false,
          "id": "c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e",
          "message": "Add support for custom memory pools (#1516)\n\nIntroduces a `MemoryPool` trait in the client crate which allows users\nto provide their own memory pool implementation. This is part of the\nbroader effort to use a unified memory pool in Mountpoint (see draft PR\n#1511).\n\nThis change introduces:\n* The required code to bridge implementations of the new Rust trait to\nthe CRT pool interface.\n* A simple `MemoryPool` implementation to be used in tests.\n* The `pool_tests` feature flags to use the above pool in the client\ntests, replacing the CRT default pool.\n* A new CI workflow to run the client tests with the custom pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nEntry in the client changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T12:57:54Z",
          "tree_id": "141b6452e1be9f7e92c8829dd1e74de58c0a05a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e"
        },
        "date": 1752851543628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16631.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28017.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35490.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 165.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 320.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 231.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37049.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33229.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13550.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13873.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12057.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 301.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.73828125,
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
          "id": "aad91bc8d91b684c100bf242adea28a6f8e96a06",
          "message": "Split up client and fs integration tests in CI (#1523)\n\nOrganize the integration test workflows in two groups:\n\n1. Client tests, for the `mountpoint-s3-client` crate (and its\ndependencies: `mountpoint-s3-crt` and `mountpoint-s3-crt-sys`)\n2. FS tests, for `mountpoint-s3-fs` and `mountpoint-s3`\n\nBoth groups define a matrix strategy across runners and S3 buckets.\nAdditionally, the first group adds a dimension for the memory pool\n(currently default and test pool), while the second runs tests with FUSE\n2 and 3.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T14:18:26Z",
          "tree_id": "cc52be98a71f4ffc7512ddef1e359de874382248",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aad91bc8d91b684c100bf242adea28a6f8e96a06"
        },
        "date": 1752858885200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10459.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25831.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39832.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 313.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 313.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34103.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36262.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11596.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12014.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9443.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.5234375,
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
          "id": "44159b564162126a3374a864010a5151f16b88ac",
          "message": "Introduce UploaderConfig (#1526)\n\nGroup configuration parameters to initialize the `Uploader` component\ninto a new struct. It will make easier to introduce new parameters in\nfuture changes.\n\n### Does this change impact existing behavior?\n\nNo. Internal change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T11:26:42Z",
          "tree_id": "746c13a5a9535ff8544322786cdc9e66e334e720",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44159b564162126a3374a864010a5151f16b88ac"
        },
        "date": 1753104997778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16258.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21513.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38680.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 135.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 160.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 318.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 233.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37331.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39761.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11734.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11273.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13770.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.4140625,
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
          "distinct": false,
          "id": "f06dc065a904da06b76a4bc667aa5966ab89e081",
          "message": "Extract meta request type when reserving buffers (#1524)\n\nModify the new `MemoryPool` trait (and the CRT bridge) to propagate the\ntype of the meta request which is reserving the buffer. Requires\nextending bindings to an additional private header from `aws-c-s3` in\norder to access the type of a `aws_s3_meta_request` pointer.\n\n### Does this change impact existing behavior?\n\nNo, the new type information is not used yet.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T12:43:22Z",
          "tree_id": "85098a437513db4098f974f17564649b52e61faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f06dc065a904da06b76a4bc667aa5966ab89e081"
        },
        "date": 1753109545656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16703.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26734.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37738.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 141.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 313.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 240.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36024.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37001,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13261.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15007.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13357.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.99609375,
            "unit": "MiB"
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
        "date": 1753124681333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14255.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26951.34765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42245.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 128.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 305.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 314.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 229.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35315.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 379.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40726.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12622.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12865.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13485.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.0078125,
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
          "id": "5225d343b271ddb37ff54fda2b90f49809f67ae5",
          "message": "Decouple mem_limiter from client (#1525)\n\nMinor refactor to decouple the memory limiter from the client\nimplementation. The memory limiter only requires the client to retrieve\ninformation about its internal memory pool utilization. This change\nwraps that request in a type-erased closure and drop the generic\nparameter from the memory limiter and all related types.\n\n### Does this change impact existing behavior?\n\nNo. Internal refactor only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-22T05:50:37Z",
          "tree_id": "c0f540a8566d905e020ef12a575fb4b53762664a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5225d343b271ddb37ff54fda2b90f49809f67ae5"
        },
        "date": 1753171258889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13264.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29201.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38831.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 134.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 292.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 322.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 231.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35911.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43485.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13850.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12937.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11880.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.0078125,
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
          "id": "f73f89b29d673a3bc29e58b5c1f5e96e74ba534e",
          "message": "[Experimental] Support mounting multiple buckets with CSV manifest (#1506)\n\nImplement `ManifestMetablock` which uses SQLite db as a source of object\nmetadata. This implementation also allows mounting multiple buckets\nwithin a single filesystem. This change is not intended to be applied to\nthe regular `mount-s3` binary, only to `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, change is enabled in example only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, of the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T12:55:13Z",
          "tree_id": "dbbd80fbf7eb4fcb2fbfe447a6380f387d20c280",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f73f89b29d673a3bc29e58b5c1f5e96e74ba534e"
        },
        "date": 1753283387525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15006.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27037.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42555.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 133.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 307.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 238.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 328.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 232.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31261.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38290.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13080.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12571.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14055.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.390625,
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
          "id": "65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2",
          "message": "Release crates, mountpoint-s3-fs 0.6.0 (#1531)\n\nUpdate changelogs in preparation for crates release. Crates to be\nreleased:\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n- mountpoint-s3-fs\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T14:29:58Z",
          "tree_id": "55611484499579305e804b526f592752e9440ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2"
        },
        "date": 1753288892108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16828.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26455.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38788.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 133.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 303.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 135.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 322.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 232.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37265.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37681.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14473.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12266.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10185.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 298.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.015625,
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
          "id": "0d8312a70e9440d9f6d854a7afb25126e176c458",
          "message": "Add custom memory pool implementation (#1529)\n\nIntroduce a custom implementation of a `MemoryPool` which can be used by\nthe CRT S3 client. The new pool will eventually be adopted in\nMountpoint, which will also use it to replace the allocations for disk\ncache blocks and incremental upload buffers.\n\nThis change extends the integration tests on the client crate to run\nwith this pool implementation.\n\nSee docs in `memory/pool.rs` for more details on the new memory pool.\n\n### Does this change impact existing behavior?\n\nNo, the new pool is only used in tests for now. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-23T15:12:29Z",
          "tree_id": "559e4d4caf42f78da3f0c2c2f037708fbe412c8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d8312a70e9440d9f6d854a7afb25126e176c458"
        },
        "date": 1753324688690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15521.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25335.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40391.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 296.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 208.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31517.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36803.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12619.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12048.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9786.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.03125,
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
          "id": "5732b47f04ed2b9280ada532c5346306625ae218",
          "message": "Add thread ID to log messages. (#1460)\n\nThis helps us to understand what's happening with concurrent operations.\n\n### Does this change impact existing behavior?\n\nChanges log message format slightly by adding thread IDs, which may\nmeans scripts that parse these messages need to change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-07-24T09:15:20Z",
          "tree_id": "350586199d5c03f8d368771e4cf3cd4567db03da",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5732b47f04ed2b9280ada532c5346306625ae218"
        },
        "date": 1753356371062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13138.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28709.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40002.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 318.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38873,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41291.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12268.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10607.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10113.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 299.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.0546875,
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
          "id": "c20dd804d324e55767cb3ee62665ccad264c37ec",
          "message": "Implement Deref on pool buffers (#1533)\n\nMinor usability improvement on the buffers for the newly introduced\nmemory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T10:04:25Z",
          "tree_id": "2a15f64dea6a3d194b44019d00f1e909c8c8b414",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c20dd804d324e55767cb3ee62665ccad264c37ec"
        },
        "date": 1753359281083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17139.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27305.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39145.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 190.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 315.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35244.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35909.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12348.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13440.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11654.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.2421875,
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
          "id": "c209731fbd443d1c3db019fda0ac1c9175d499af",
          "message": "Remove duplicate S3Uri type (#1535)\n\nThe `S3Uri` was almost a complete duplicate of `S3Path`. This change\nremoves it and replaces it with `S3Path` in the few places where it was\nused. It also rearranges the related validation methods and consolidates\ntypes under the `s3` module.\n\n**Note**: I split out the renames and moves into a separate commit for\nease of review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nOnly for `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T11:20:59Z",
          "tree_id": "edabdf4c5d9b4a0acabff60dc5c2b6af04b8efcc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c209731fbd443d1c3db019fda0ac1c9175d499af"
        },
        "date": 1753363950546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15829.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28374.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35934.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 291.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 148.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 319.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 228.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30220.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33367.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14250.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12971.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12669.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.44921875,
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
          "id": "6633db0048d429838f09f65ade1804ff666b6def",
          "message": "Set `mem_limit` in `mount_from_config` example (#1537)\n\nSet `mem_limit` in `mount_from_config` example. The value is retrieved\nfrom a json config.\n\n### Does this change impact existing behavior?\n\nNo, only the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-24T16:52:03Z",
          "tree_id": "dc0a7ab42e8372c268cb4c7db30508a4048c0093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6633db0048d429838f09f65ade1804ff666b6def"
        },
        "date": 1753383876293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14374.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26019.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37956.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 241.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31667.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39626.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13820.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12430.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13741.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 362.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.265625,
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
          "distinct": false,
          "id": "06deaaac0a57e2527c80d90ec2728309ea1ae45a",
          "message": "Fix issue preventing incremental upload to handle very large write part sizes (#1538)\n\nThe append upload queue tries to limit the total memory used to buffer\nthe data to write to 2 GiB. However, when setting `--write-part-size` to\nvalues greater than 2 GiB, it would incorrectly set the queue capacity\nto 0 buffers and panic.\n\nThis change ensures that the queue allows for at least 1 buffer, even if\nthat means exceeding the 2 GiB cap.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:05:59Z",
          "tree_id": "48ab171e8600cb851f60d9a591acd1968efe1fa2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06deaaac0a57e2527c80d90ec2728309ea1ae45a"
        },
        "date": 1753453037662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15309.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24173.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45493.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 225.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 235.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38545.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42668.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13881.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12267.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12733.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.765625,
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
          "distinct": false,
          "id": "15fe956a9e7588de2128f52108af9533cf9ea956",
          "message": "Use a unified memory pool in Mountpoint (#1511)\n\nIntroduces a unified memory pool in Mountpoint. The pool adopts the CRT\npool interface, so it can be used by the CRT client when requesting\nbuffers. Ownership of the buffers is then passed to the prefetcher when\nthey are returned from GetObject requests. The same memory pool is also\nused to serve reads from the local disk cache and for incremental\nuploads.\n\nThe main goal is to reduce overall memory usage and mitigate memory\nfragmentation issues. We may also observe performance gains in some\nscenarios since we can avoid copying the data received from GetObject.\n\n### Does this change impact existing behavior?\n\nNo changes in file system behavior. It will publish new memory-related\nmetrics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires entries in the `fs` and `mount-s3` changelogs and new major\nversions.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:06:27Z",
          "tree_id": "cad4f86f83dd9db2ce67cd92790761cbaedfeb08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15fe956a9e7588de2128f52108af9533cf9ea956"
        },
        "date": 1753453306921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2851.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4546.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8344.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8159.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8210.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2096.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.3046875,
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
          "distinct": false,
          "id": "097ab2ee264cbde065592f39155d0cdfc9465f76",
          "message": "Replace full key with S3Location in file handles (#1539)\n\nInternal change to directly propagate `S3Location` in file handles\nrather than the derived `full_key` string. The value is used for logging\nand error report, so we can postpone formatting the string until it is\nneeded.\n\n### Does this change impact existing behavior?\n\nMinor change in string formatting in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:11:05Z",
          "tree_id": "7f0e1c8539c41864f9f3143677aca300f98c9a5d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/097ab2ee264cbde065592f39155d0cdfc9465f76"
        },
        "date": 1753453589261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2833.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4597.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8319.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8164.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2092.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2081.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.32421875,
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
          "distinct": true,
          "id": "884323ea89ed9dc7ad612b67c7903cb80e35e9ba",
          "message": "Add usages of INITIAL_READ_WINDOW_SIZE (#1541)\n\nReplaces hard-coded initial read window sizes with usages of the\nconstant `INITIAL_READ_WINDOW_SIZE`.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T15:00:09Z",
          "tree_id": "918432d509e5398a0dc5d3e70734fce49b9dc8ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/884323ea89ed9dc7ad612b67c7903cb80e35e9ba"
        },
        "date": 1753463497037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2877.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4548.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8298.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8308.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8204.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.02734375,
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
        "date": 1753465617368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2847.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8389.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8268.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2096.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2095.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.9453125,
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
        "date": 1753468005495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2836.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4582.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8312.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8159.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8229.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 232.7890625,
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
        "date": 1753708541760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2846.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4538.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8207.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8130.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8174.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2080.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.40234375,
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
        "date": 1753802661880,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2837.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4907.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8294.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8139.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8186.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2091.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2086.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 216.3515625,
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
        "date": 1753890350780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2868.4765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8432.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8163.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8195.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2091.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 383.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.28515625,
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
        "date": 1753890783721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8320.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8205.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8141.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 300.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.26953125,
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
        "date": 1753974192384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2867.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4595.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8237.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8244.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2089.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 346.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 247.0703125,
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
        "date": 1754314314869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2881.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4583.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8347.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8206.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8202.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2093.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 218.859375,
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
        "date": 1754509485369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2905.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4546.87890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8325.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8203.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8245.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2079.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 233.12890625,
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
        "date": 1754576838188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2898.33203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4555.87890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8325.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8166.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2085.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2093.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 230.4921875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}