window.BENCHMARK_DATA = {
  "lastUpdate": 1732209562967,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "1c6f819c9365e01e5ba1dda5ec585129c17ca0e6",
          "message": "Lay out files using fio in the benchmark. (#1108)\n\n## Description of change\n\nThis makes the benchmarks more self-contained, creating the state that\nthey need to run rather than relying on pre-created state (potentially\nwith different/unknown mount options and/or object properties).\n\nIt does change behaviour a little: previously the multi-thread tests\nwould use the same object whereas now each thread uses its own object --\narguably this is a more useful test but results in higher S3 usage.\n\nAlso note that the cache benchmark is unchanged in this commit, because\nit makes assumptions about the filename used by the tests.\n\nRemoving the assumption that each test will operate on a single file\nprepares us for future mixed read/write tests, and allows different fio\njobs to be run in parallel safely.\n\n## Does this change impact existing behavior?\n\nYes, see above: previously the multi-thread tests would use the same\nobject whereas now each thread uses its own object -- arguably this is a\nmore useful test but results in higher S3 usage.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>\nSigned-off-by: Andy Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-13T13:38:42Z",
          "tree_id": "b4310376c893070907103204412e34cee107007e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c6f819c9365e01e5ba1dda5ec585129c17ca0e6"
        },
        "date": 1731512126873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 154.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37712.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43381.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13961.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12406.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10821.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 373.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254,
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
          "id": "9206ed4847bbf2574dc7650483e2126b89a14d10",
          "message": "Bypass the shared cache for large objects (#1117)\n\n## Description of change\n\nThis change makes `get_block` and `put_block` for objects larger than\n`1MiB` be a no-op in the shared cache.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it is under the feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, in the following PRs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-13T13:56:48Z",
          "tree_id": "2954eb36742819cb93403083daa8fbb8e3507b28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9206ed4847bbf2574dc7650483e2126b89a14d10"
        },
        "date": 1731513272077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 164.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35422.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37437.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13830.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10875.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11430.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.33984375,
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
          "id": "f14667fc65ff4c5b2ee2f5cf0e8eab8c2d1535e6",
          "message": "Add mixed read/write tests to the benchmark. (#1130)\n\n## Description of change\n\nAs we make changes that might impact mixed read/write workloads it is\nuseful to have some examples of these in our benchmarks. This change\nadds a 20/80, 50/50, and 80/20 read/write workload to the benchmarks.\n\nThe results reporting is updated to support multiple job types in a\nsingle benchmark. This works by continuing to average over iterations as\nbefore, but averages each job separately then sums the averages to\nproduce the final throughput number for that benchmark (i.e. (avg(read\nthroughput) + avg(write throughput)) for the mixed benchmarks).\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-14T11:10:48Z",
          "tree_id": "18cfee4dd5ad4708f3e6b72b4c2fd07527cfde44",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f14667fc65ff4c5b2ee2f5cf0e8eab8c2d1535e6"
        },
        "date": 1731590644523,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14290.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28579.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 46390.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 196.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 334.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39838.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39069.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12567.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14234.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10488.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.74609375,
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
          "id": "4af19445a4e2d2d9ea134751aef92c4cf53dfd4d",
          "message": "Add an integration test for the shared cache (#1071)\n\n## Description of change\n\nAdd an integration test for the shared cache. It uses\n`S3_EXPRESS_ONE_ZONE_BUCKET_NAME` as a cache bucket and `S3_BUCKET_NAME`\nas a regular bucket.\n\nRelevant issues: No\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-14T14:56:59Z",
          "tree_id": "3134e0e3fd4484916e9f9549e9e43f3731a1ba37",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4af19445a4e2d2d9ea134751aef92c4cf53dfd4d"
        },
        "date": 1731604171271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14195.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22774.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39551.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 186.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34040.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41078.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11227.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12951.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10437.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.5625,
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
          "id": "625d7dbb9b9b0ed4f072cfad48ef859522f3075b",
          "message": "Verify object metadata in Express cache (#1125)\n\n## Description of change\n\n- Verify S3 Express cache objects have valid object metadata which\nmatches the keys\n- Verifies the CRC32C of the object content post-download from S3\n  - If checksum is missing, return `BlockChecksumMissing`.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nChanges S3 Express cache to require object metadata and CRC32C to be\npresent. Old caches will not be used.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-14T15:49:49Z",
          "tree_id": "ed8468dd3fab76e53de1d182aebd2d30d80d48c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/625d7dbb9b9b0ed4f072cfad48ef859522f3075b"
        },
        "date": 1731607448923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16906.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27063.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37824.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 168.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42761.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39792.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12903.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13706.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12549.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.99609375,
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
          "id": "3738860dcdd8be73b222fdebd21677f7ad4070f9",
          "message": "Add a test for an invalid cache block (#1139)\n\n## Description of change\n\nJust adds a test that if a block in the shared cache is invalid, it is\nnot served to the client application.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-15T17:20:55Z",
          "tree_id": "17db2c6fd7dd7ce63582c3b0141ba7b6e4e29323",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3738860dcdd8be73b222fdebd21677f7ad4070f9"
        },
        "date": 1731701771047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15233.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25318.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45229.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 162.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 44301.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40744.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12917.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11164.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13467.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.5859375,
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
          "distinct": false,
          "id": "7198bc8097aac0496ddcaf926622db0da447c972",
          "message": "Set max_background FUSE config to 64 by default. (#1137)\n\nThis improves sequential read performance on instances with multiple\n100Gbps network interfaces. It controls the number of requests that are\nallowed in the pending queue that are classified as background, which\nincludes at least some read requests. It also indirectly controls the\n\"congestion threshold\", which is set by default to 75% of the max\nbackground value. When the congestion threshold is reached, FUSE will\nstop sending the asynchronous part of readaheads from paged IO to the\nfilesystem.\n\nTesting on 2 NIC instances shows up to approximately 29% speed-up on a\nsequential read workload with 32 open files, from 76.74 to 99Gbps, for\npaged IO. Although we don't have enough instrumentation to fully\nunderstand the change in queueing behaviour in FUSE, we think it is\nlikely because we're able to serve sufficient readahead requests for the\nobject before hitting the congestion threshold when the limit is higher,\nthus allowing mountpoint to start prefetching later parts of the object\nsooner.\n\nThe value of 64 was picked by experimentation with values between 16\n(the default) and 256, as well as specifically setting the congestion\nthreshold. Increasing the value generally led to better performance up\nto 64, after which performance doesn't improve further (at least not\nsignificantly). We wanted to choose the lowest value that seemed\nreasonable for the desired performance improvement, to reduce the chance\nof affecting a workload that wasn't being tested.\n\nAs well as the standard regression tests, the change was tested on trn1\ninstances with a 256KB sequential read workload reading 32 files in\nparallel over 1, 2, and 4 network interfaces. It does not regress our\nstandard benchmarks nor performance on this test with 1 NIC in use.\n\nThis change also temporarily introduces two environment variables to\ntune the behaviour, so we can isolate this change if a particular\nworkload is found to regress.\n\n## Does this change impact existing behavior?\n\nThis improves performance on large instance types. There's a risk of\nregression for workloads we don't test.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, will submit a separate PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>\nSigned-off-by: Andy Peace <andrew.peace@gmail.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-11-18T12:15:43Z",
          "tree_id": "a0af1991c8a30d4b830d6a692a4e716d87376306",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7198bc8097aac0496ddcaf926622db0da447c972"
        },
        "date": 1731940093004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17454.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27721.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41488.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 401.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37326.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40130.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13102.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13116.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9545.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.5,
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
          "id": "1e30bff37aa35be2e54e06a0bc92f7a684414bc8",
          "message": "Update user-agent on express cache usage (#1122)\n\n## Description of change\n\nAdd `mp-cache-express` to the user agent when caching in express is\nenabled.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-18T12:27:52Z",
          "tree_id": "aac263066f2f280609c1413e05ad01a64b2ec469",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e30bff37aa35be2e54e06a0bc92f7a684414bc8"
        },
        "date": 1731940838377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15806.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26795.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38690.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34105.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35142.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11297.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13659.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12010.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.59765625,
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
          "id": "378a56c2efbdbc423d745bbcf7cf3018d770dc7c",
          "message": "Validate that shared cache bucket is usable (#1141)\n\n## Description of change\n\n- Validates the shared cache bucket is write-able\n- Validates the shared cache bucket supports the `EXPRESS_ONEZONE`\nstorage class\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, the shared cache bucket is now validated that it supports the\n`EXPRESS_ONEZONE` storage class\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-18T16:04:15Z",
          "tree_id": "f3f7e68465c924b7f18f84e29f68d921bd948dd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/378a56c2efbdbc423d745bbcf7cf3018d770dc7c"
        },
        "date": 1731953835819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17349.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25478.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40466.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 426.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37431.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39597.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12086.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14904.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9670.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.5,
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
          "id": "02f8dda257177db60771033445afbc31bd6768af",
          "message": "Retrieve server-side encryption setting on HeadObject (#1143)\n\n## Description of change\n\nAdd two new fields to `HeadObjectResult`: \n* `sse_type`: The server-side encryption algorithm used to store the\nobject (header: \"x-amz-server-side-encryption\"),\n* `sse_kms_key_id`: The ID of the KMS key was used for object\nencryption, if present (header:\n\"x-amz-server-side-encryption-aws-kms-key-id\").\n\n## Does this change impact existing behavior?\n\nNo. Only adds fields to a non-exhaustive type.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes: `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-19T11:16:56Z",
          "tree_id": "1288023535a01babbf21054209f701e3eebaf39c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02f8dda257177db60771033445afbc31bd6768af"
        },
        "date": 1732023121946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14931.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23655.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40075.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 153.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37901.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41676.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13112.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11276.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9359.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.00390625,
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
          "id": "b61f4b966f616ed3d231857403946149520aad2a",
          "message": "Express cache cleanup (#1142)\n\n## Description of change\n\nRemove unneeded todo\n\nRelevant issues:\nhttps://github.com/awslabs/mountpoint-s3/pull/1141#discussion_r1846841259\n\n## Does this change impact existing behavior?\n\nNo\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-19T16:53:40Z",
          "tree_id": "d8291a54b3efb561d89bdee136233e17a36748de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b61f4b966f616ed3d231857403946149520aad2a"
        },
        "date": 1732043176686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17712.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24455.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37896.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35653.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38024.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14232.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13370.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8475.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.390625,
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
          "id": "84c3e5467d252830d5297d1d6b67f5915e32933b",
          "message": "Rename the shared cache CLI flag (#1144)\n\n## Description of change\n\nRename the CLI flag for the shared cache. New help message:\n\n```bash\n--cache-xz <BUCKET>\n    Enable caching of object content to the specified bucket on S3 Express One Zone (same region only)\n```\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it's behind a feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:05:27Z",
          "tree_id": "b7946c1f0149cfed9838ace088cbec96f2ee3b92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c3e5467d252830d5297d1d6b67f5915e32933b"
        },
        "date": 1732105190587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16013.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28872.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43886.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 231.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32917.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39233.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14044.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14150.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10999.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.25390625,
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
          "id": "87ce33f3376e98e91fea351187bc0c9048ea543c",
          "message": "Improve the corrupted block test (#1147)\n\n## Description of change\n\nJust test improvements. Addresses comments from the\nhttps://github.com/awslabs/mountpoint-s3/pull/1139.\n\nRelevant issues: N/A.\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:22:48Z",
          "tree_id": "46e17a13aaedf014b55589a894220ff007d27565",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/87ce33f3376e98e91fea351187bc0c9048ea543c"
        },
        "date": 1732106175512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15546.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26803.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39464.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34066.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39557.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13671.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13684.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14424.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.1171875,
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
          "id": "1e331a4c66f287d0124085258be32024baedb88c",
          "message": "Move PR desc instructions from template to CONTRIBUTING.md (#1134)\n\n## Description of change\n\nUntil this change, we were using HTML comments in the PR template to\nprovide instructions to contributors so they know what to include in a\nPR title and description. Since changing the default on GitHub to use\nthe PR description as the squash commit message, we now see the HTML\ncomments in comment messages which is not desired at all.\n\nThis change replaces HTML comments with non-comment TODOs which should\nbe addressed and removed. These are visible to reviewers, who should\nprompt the author to address them before merging.\n\nWe move some of the more detailed instructions into `CONTRIBUTING.md`\nwhich is where we describe the contribution process more broadly.\n\nThere's some minor simplification to the template given we can no longer\nprovide clear instructions via HTML comment.\n\n## Does this change impact existing behavior?\n\nThis changes the default description for code contributions to the\nrepository only.\n\nNo change to the file system or S3 client crates.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-20T13:07:07Z",
          "tree_id": "ed6523d18bac9a25810e36e7384d8a74cbe3b6af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e331a4c66f287d0124085258be32024baedb88c"
        },
        "date": 1732116047099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15380.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24727.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41797.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37726.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35918.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13530.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15846.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11593.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.1328125,
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
          "id": "9d26b3c315ae83fbfbec257d0c2324542f8561f8",
          "message": "Add empty data cache test  (#1149)\n\n## Description of change\n\nAdds an empty cache retrieval test\n\nFixes express cache to now pass new empty cache test\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes - shared cache no longer emits request failed when reading from an\nobject that doesn't exist\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-20T15:37:18Z",
          "tree_id": "d20f381e662cc600a84ce3e311bc21e12b002cd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d26b3c315ae83fbfbec257d0c2324542f8561f8"
        },
        "date": 1732125081745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15634.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26760.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39875.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33803.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37746.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11430.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12283.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13450.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.4765625,
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
          "id": "021da951173e310a0fc476ae285e42db51e1d524",
          "message": "Remove `express_cache` feature flag (#1145)\n\n## Description of change\n\n- Removes the feature flag so the shared cache may be included in the\nnext build;\n- Adds a changelog entry introducing the feature.\n\n(update and merge this after:\nhttps://github.com/awslabs/mountpoint-s3/pull/1144)\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, a new feature added.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, adding one in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T16:56:06Z",
          "tree_id": "47175363acc44c7e677760642d4185b10ae0659f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/021da951173e310a0fc476ae285e42db51e1d524"
        },
        "date": 1732129704758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13814.83984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26641.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39852.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35613.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35844.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11178.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12125.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11515.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.75390625,
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
          "id": "f7b4524e80095300b1fc5219c832b3c8db470fd7",
          "message": "Add metrics to express data cache (#1146)\n\n## Description of change\n\nAdds metrics to express data cache\nFixes a bug where getting a cache miss would be reported as an error\nrather than a cache miss\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nAdds metrics, no user facing functionality changes.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-20T17:11:45Z",
          "tree_id": "3adc8ba7f6eecd95b7ed277e567db2f25a80f683",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f7b4524e80095300b1fc5219c832b3c8db470fd7"
        },
        "date": 1732130615474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15461.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26230.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40141.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 162.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 332.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39624.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36029.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11831.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13706.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11987.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.71484375,
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
          "id": "2255c4cb42a8550d555490f5fa98b6cd360648d5",
          "message": "Add documentation for shared cache (#1153)\n\nAdd documentation for shared cache feature\n\n### Does this change impact existing behavior?\n\nNo change in behaviour, only documentation updates.\n\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-21T10:54:40Z",
          "tree_id": "8b69154870ec3995469cccd01e750a8f25786114",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2255c4cb42a8550d555490f5fa98b6cd360648d5"
        },
        "date": 1732194432851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15998.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29268.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39992.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 170.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39330.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37395.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11968.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14173.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8755.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.375,
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
          "id": "848434133368799358f46695ad50e1f5c3b261b7",
          "message": "Release v1.11.0 (#1152)\n\nBump the version to v1.11.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-21T11:36:19Z",
          "tree_id": "8e87b10e2b05c63663ec27b5d82639d191f6a819",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/848434133368799358f46695ad50e1f5c3b261b7"
        },
        "date": 1732197003881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16480.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27508.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41229.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 231.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38411.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38282.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12630.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10878.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9730.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.078125,
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
          "id": "ff191c1159e7d32b9fdeb2b0f0ca84628958c60a",
          "message": "Fix warnings for test struct variant not used (#1151)\n\nThis addresses the only build warning we have in Mountpoint's own\ncrates. The remaining build warnings come from the fuser forked crate,\nwhich we plan to address through an upstream contribution.\n\n### Does this change impact existing behavior?\n\nNo, avoids import of unused code in a test only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-21T15:05:50Z",
          "tree_id": "b622a43ba2266970019ee419fe25ee45d32db6f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff191c1159e7d32b9fdeb2b0f0ca84628958c60a"
        },
        "date": 1732209562928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15633.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25030.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45395.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39601.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38229.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12085.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12377.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12330.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.109375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}