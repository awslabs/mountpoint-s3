window.BENCHMARK_DATA = {
  "lastUpdate": 1754581872636,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1752784389414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3292.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3167.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3360.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3201.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10906.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3291.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3313.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 6693.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3523.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.28125,
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
        "date": 1752828673741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3218.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 344.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3318.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3102.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3195.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11222.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3320.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2880.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3247.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3474.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.3828125,
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
        "date": 1752829659726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3398.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3345.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2881.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3324.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2950.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3607.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3310.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3604.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.8359375,
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
        "date": 1752850674409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3341.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3439.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3601.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2919.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 202.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12084.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3077.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3449.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 203.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3398.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3448.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 237.04296875,
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
        "date": 1752858075425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3468.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3163.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3399.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3475.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13631.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3383.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3503.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3085.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3052.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.32421875,
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
        "date": 1753104157927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2893.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3506.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3418.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3231.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 14918.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2873.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3665.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 205.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3360.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3277.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.9140625,
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
        "date": 1753108690788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3313.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3293.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3436.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3575.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5228.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3050.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3432.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 234.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3297.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5625.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.82421875,
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
        "date": 1753123821409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3380.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3397.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3310.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3297.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6438.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3221.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3431.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3356.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3076.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.8828125,
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
        "date": 1753170491440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2722.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3366.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3439.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3275.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5932.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3292.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3456.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2927.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3342.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.6328125,
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
        "date": 1753282562399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3388.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3406.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3415.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3137.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15238.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3318.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3257.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 5925.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3217.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.25,
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
        "date": 1753288066986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3335.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3423.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3409.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3454.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 209.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8940.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3581.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 206.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10611.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3370.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.58984375,
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
        "date": 1753290719243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3144.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3436.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3124.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3163.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7081.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3219.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3128.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3440.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3175.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.82421875,
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
        "date": 1753355631577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3286.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3254.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3363.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3322.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5369.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3025.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3364.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3281.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3250.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.578125,
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
        "date": 1753363044717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3306.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3210.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3308.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3311.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 202.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9963.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3535.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3558.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3127.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3286.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.203125,
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
        "date": 1753383112622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3304.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3274.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3423.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 274.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3320.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11523.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3327.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3539.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3244.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3359.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.51953125,
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
        "date": 1753452170799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2818.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 342.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3485.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3476.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3227.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 203.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6997.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3432.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3009.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3290.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3423.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 239.86328125,
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
        "date": 1753452493501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2179.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2264.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2156.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2177.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2228.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2273.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2157.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2196.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.375,
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
        "date": 1753452788641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2176.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2263.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2172.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2172.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.85546875,
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
      }
    ]
  }
}