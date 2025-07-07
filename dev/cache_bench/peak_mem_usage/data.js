window.BENCHMARK_DATA = {
  "lastUpdate": 1751882180577,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "2eb41bc55469b66a05881f85ec214b0049268f26",
          "message": "Update prefetcher wait_for_read_window_increment to drain queue (#1425)\n\nWhen reviewing the prefetcher logic, the\n`wait_for_read_window_increment` method call in the S3 part stream was\nidentified as a potential issue. The logic currently pulls only one\nincrement from the queue of read window increments when large amounts of\ndata are being fetched. Today, this is likely not to cause an issue as\nthe read increments are much larger than the size of the parts emitted\nby `part_stream`. However, it would cause issues if there were changes\nhere in future that resulted in increments smaller than those parts.\n\nThis change updates the method to drain all available increments and\nreturn the new value to the caller. This ensures that the backpressure\nmechanism doesn't wait for each part before processing only one window\nincrement event. A new test is added to verify this behavior is\nguaranteed.\n\n### Does this change impact existing behavior?\n\nThere should be no impact, other than fixing logic that currently is\nunlikely to introduce performance changes outside of very large parts\nsizes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there is no known customer impact of the current issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-30T14:47:46Z",
          "tree_id": "ad81345f3d3e005a5b68c3418e9c55fda5b41aaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2eb41bc55469b66a05881f85ec214b0049268f26"
        },
        "date": 1749049762436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3219.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3440.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3380.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3280.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8878.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3302.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3217.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3225.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4236.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.58984375,
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
          "id": "8f7b373b6f73abd04931936911dccf057ef0cbad",
          "message": "Write documentation on Mountpoint with S3 on Outposts (#1452)\n\nAdds some documentation on Mountpoint's support for S3 on Outposts.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - this was already supported but we were missing docs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-06-05T12:30:55Z",
          "tree_id": "b0d254fcdbb572c628e137be11d565366548a528",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f7b373b6f73abd04931936911dccf057ef0cbad"
        },
        "date": 1749133849137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3382.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3526.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3215.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 282.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3321.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4833.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3361.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3243.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9670.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2774.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.25,
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
          "id": "f138efcaa33169b005cdbf5a0d11c10d89db292e",
          "message": "Update CRT submodules to latest releases (#1458)\n\n> [!NOTE]\n> This PR reapplies the changes in #1430, previously reverted in #1435,\nwith the addition of a fix to a race condition in `aws-c-s3`\n(awslabs/aws-c-s3#521).\n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..938d0fea:\n  > [FIX] heap use after free on aws_ecc_key_pair_new_from_asn1 (#219)\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..3eedf1ef:\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..689dee3c:\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..52c90d39:\n  > Fix race condition between mem acquire and cancel (#521)\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-09T15:51:08Z",
          "tree_id": "f8167c75f033d0313ca68894468b3ce99bc9e499",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f138efcaa33169b005cdbf5a0d11c10d89db292e"
        },
        "date": 1749491488853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3195.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2962.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3345.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3210.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 243.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5630.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3236.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3277.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3315.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3230.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.85546875,
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
          "id": "5a6c5524ac5526cecd21bda0ea4109557f356924",
          "message": "Move ctrl-c handler out of FuseSession (#1459)\n\nMinor change to decouple `FuseSession` from the ctrl-c signal handler.\n`FuseSession` will now expose a function to signal shutdown, which can\nbe used by the caller when installing the signal handler.\n\nPrerequisite to start using `FuseSession` in tests, where we do not want\nto install multiple signal handlers when testing multiple instances of\n`FuseSession`.\n\n### Does this change impact existing behavior?\n\nNo, it's only an internal refactor.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n`fs` crate only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-09T19:00:33Z",
          "tree_id": "72c1412da4931af491d9cde6b872095f5c887f51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a6c5524ac5526cecd21bda0ea4109557f356924"
        },
        "date": 1749502797461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3311.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3107.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3381.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3171.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6369.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3240.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3599.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3397.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8656.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.90234375,
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
          "id": "50440db4921d6292b5a6babff392bf2f7baa437e",
          "message": "Minor refactor to prefetch_benchmark (#1461)\n\nIntroducing some minor refactoring to `prefetch_benchmark` before adding\nsome more significant changes (- adding caching support). This change\nalso introduces `anyhow::Result` to properly format errors when running\nthe benchmark, including sharing additional context and error sources.\n\n### Does this change impact existing behavior?\n\nThis is mainly a refactor. It does change error handling - errors are\nnow properly returned and formatted using `anyhow`, rather than via\npanics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, refactor only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-10T10:25:47Z",
          "tree_id": "4c8e9f85782f640861508aaeab17c8c401a6251d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50440db4921d6292b5a6babff392bf2f7baa437e"
        },
        "date": 1749558193858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3278.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3047.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3513.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3340.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12552.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3395.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3284.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3067.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3701.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.546875,
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
          "id": "cf3e15173e76989131c1500a6242502976731ab0",
          "message": "Ensure cache blocks are written atomically (#1433)\n\nAddress an issue with cache block reads failing while a concurrent write\nis in progress, observed for example in #1389 (see log entries in\n[comment](https://github.com/awslabs/mountpoint-s3/issues/1389#issuecomment-2861696762)).\nThis change modifies `put_block` to write to a temporary file first and\nthen rename to the expected cache block file name.\n\nIn addition, this PR also addresses concurrency issues in tracking block\nusage data for eviction: updates to `UsageInfo` were not previously\nsynchronized correctly with the operations on disk and we could end up\nrecording a new block write when in fact the block had been concurrently\ndeleted. Now we lock `UsageInfo` while performing file system\noperations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-10T16:50:31Z",
          "tree_id": "0eb796cd79dd17d25281031da52eeaa762005605",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf3e15173e76989131c1500a6242502976731ab0"
        },
        "date": 1749581662129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3356.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3307,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3401.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3303.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10142.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3280.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3315.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3351.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3361.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.98046875,
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
          "id": "f12f84d0a360e1449fc7048ac0103999170ea6b3",
          "message": "Update dependencies (#1465)\n\nUpdate the dependencies \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-12T14:48:28Z",
          "tree_id": "d378729160ff3118006093c9ea7a8383fefe3229",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f12f84d0a360e1449fc7048ac0103999170ea6b3"
        },
        "date": 1749746886516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3535.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3246.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3322.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3384.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15738.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3358.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3324.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3403.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5271.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.328125,
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
          "id": "d283f714c0c6cdca2f70afba717175435a8c10d5",
          "message": "Add mock-mount-s3 to benchmark/ scripts (#1332)\n\nThis change allows us to run our benchmark scripts in `benchmark/` using\nthe `mock-mount-s3` binary, which presents a Mountpoint file system\nbacked by an in-memory mock S3 client.\n\nThis change itself incorporates quite a few changes (which may have been\nbetter suited as separate commits). There are some changes to\naccommodate configuration of part sizes in `mock-mount-s3`, removal of\nthroughput limits (which is useful for benchmarking!), and finally\nadding the configuration options to the benchmarking scripts.\n\nThis change does include some hardcoded objects being added to\n`mock-mount-s3` which can accomodate the benchmarking scripts. This\nmeans that if the object keys change, the files will be created by FIO\nand \"uploaded\" / populated in memory, which probably isn't what you\nwant.\n\n### Does this change impact existing behavior?\n\nNo, there are no changes to main Mountpoint code.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes new or existing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-13T14:10:55Z",
          "tree_id": "e4caa406c27a437b4225fe435b67027445ad6110",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d283f714c0c6cdca2f70afba717175435a8c10d5"
        },
        "date": 1749831024784,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3386.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3296.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3321.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3245.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5832.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3280.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3363.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3214.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3445.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214,
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
          "id": "e4199f792268d9d0efe874ecc2b2df3b4ddc5151",
          "message": "Fewer Iterations in rename tests (#1469)\n\nTwo randomised tests for rename take > 40 minutes to execute on our CI.\nThis PR reduces those parameters so that integrationn tests should\nexecute faster again.\n\n### Does this change impact existing behavior?\n\nNo, only affects integration tests.\n\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires neither changelog entry nor version change, as only tests are\naffected.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-19T06:43:31Z",
          "tree_id": "8375600cb3303787607c5e184e2a5c5bfc0877cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e4199f792268d9d0efe874ecc2b2df3b4ddc5151"
        },
        "date": 1750322635668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3215.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3160.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 284.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3125.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17287.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 356.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3334.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3120.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3209.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4012.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.6015625,
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
          "id": "7c023072cea67aa617d85170594eb8fc2a1db0f7",
          "message": "Update CRT submodules to latest releases (#1472)\n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..8703b3e5:\n  > [FIX] heap use after free on aws_ecc_key_pair_new_from_asn1 (#219)\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..10961a70:\n  > Stop sending empty data frame when input stream ends but the request stream is not ending. (#520)\n  > Remove clang-3 from CI (#518)\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..ee7925a3:\n  > Fix casing on Windows header files (#736)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#737)\n  > Fix pem validation (#735)\n  > Fix warning Wdefault-const-init-unsafe (#734)\n  > Enabling TLS 1.3 on Windows (#732)\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..29ceb352:\n  > Fix issue with error response parting potentially overriding upload buffer (#528)\n  > Auto - Update S3 Ruleset & Partition (#527)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#524)\n  > Fix race condition between mem acquire and cancel (#521)\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc a614f975..8b4e504c:\n  > Prepare v1.53.1 (#2492)\n  > Update mlkem-native to v1 (#2451)\n  > Impl BIO_ADDR_xxx functions (#2439)\n  > Add password prompting support & EVP_read_pw_string (#2419)\n  > Split ssl handshake tests (#2489)\n  > Add timeouts to PQ TLS Integ Tests (#2464)\n  > Prepare v1.53.0 (#2471)\n  > Fix service indicator in HKDF, more paranoid zeroization, and simplify logic (#2482)\n  > [UPSTREAM] Fix BIO_eof for BIO pairs (#2440)\n  > Run 3p module tests on python 3.13, add patch for 3.14 (#2476)\n  > Simplify sshkdf and kbkdf (#2478)\n  > Fix some theoretical missing earlyclobber markers in inline assembly (#2477)\n  > Fix OCSP integration test failures (#2480)\n  > Add hardened build back in (#2474)\n  > Fix Ruby mainline and nginx CI (#2460)\n  > Improve support for multilib-style distros in our test scripts (#2467)\n  > Simplify Compiler CI jobs (#2430)\n  > ML-KEM memory safety (#2263)\n  > Use max_cert_list for TLSv1.3 NewSessionTicket (#2453)\n  > Revert \"Rework memory BIOs and implement BIO_seek (2nd try) (#2433)\" (#2466)\n  > Remove unused Windows afunix.h (#2461)\n  > Explicitly don't allow buffers aliasing in ctr-drbg implementation (#2458)\n  > Support relro in delocator (#2455)\n  > [SCRUTINICE] Remove redundant condition check (#2450)\n  > Openssl tool output ordered by options provided (#2452)\n  > Add build with hardened flag (#2396)\n  > Prepare v1.52.1 (#2445)\n  > Display X509 fingerprint after hash (#2444)\n  > Fix CI cross-mingw (#2437)\n  > Create pre-production stage for CI pipeline (#2282)\n  > Fix path-has-spaces test (#2436)\n  > fix(nix): Make sure bssl is in the PATH; workaround nix build failure… (#2431)\n  > Increase default salt from 8 to 16 bytes for PKCS#8 & PKCS#12 (#2409)\n  > Prepare v1.52.0 release (#2434)\n  > Rework memory BIOs and implement BIO_seek (2nd try) (#2433)\n  > Resolve SSL_PRIVATE_METHOD and certificate slots functionality (#2429)\n  > Revert \"Rework memory BIOs and implement BIO_seek (#2380)\" (#2432)\n  > Bump AWSLC_API_VERSION for X509_STORE_CTX_set_verify_crit_oids (#2426)\n  > Fix CI for mingw (#2428)\n  > ML-DSA: Add ML-DSA keyGen to break-kat.go (#2422)\n  > Remove unused docs/configs (#2427)\n  > Fix gtest_util.sh failure detection (#2423)\n  > Detection of unused results (#2411)\n  > ML-DSA: ASN.1 Module - add parsing of BOTH private key format (#2416)\n  > Rework memory BIOs and implement BIO_seek (#2380)\n  > Add Python 3.9 CI patch (#2415)\n  > Make ASN1_get_object a direct call (#2332)\n  > Implement BIO_dump (#2331)\n  > Add back two rules for clang-tidy (#2418)\n  > Clang-tidy is still noisy (#2417)\n  > Squelch clang-tidy (#2414)\n  > CI for iOS (#2389)\n  > Update mlkem-native (#2406)\n  > Add missing symbols for Unbound (#2352)\n  > Check for QUIC in SSL_process_quic_post_handshake (#2365)\n  > Remove extra va_end in err_add_error_vdata (#2364)\n  > Mark fallible container operations as `nodiscard` (#2366)\n  > Fix clang tidy ci (#2375)\n  > Remove xmlsec patch (#2405)\n  > Remove python CI patch for main (#2407)\n  > Fix socket test issues (#2404)\n  > Ensure that AVX512 is not used on macOS (#2363)\n  > Reject NewSessionTicket messages with empty tickets in TLS 1.3 (#2367)\n  > BIO datagram functions (#2321)\n  > Set OPENSSL_NO_EXTERNAL_PSK_TLS13 to indicate lack of TLS 1.3 PSK (#2399)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-20T15:52:55Z",
          "tree_id": "ccb734d23c4d9147d7a5f35450f20271af1c598a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c023072cea67aa617d85170594eb8fc2a1db0f7"
        },
        "date": 1750444053782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3505.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3432.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3250.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3287.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10119.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3504.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3385.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 234.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3259.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3299.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.50390625,
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
          "id": "c8d1eb5960bcc820e881c497db188e59b572d896",
          "message": "Move syscalls to dev-dependencies (#1479)\n\nThe `syscalls` crate is only used in tests. Move to the\n`dev-dependencies` section.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-24T07:04:11Z",
          "tree_id": "71f31ac446c20f99ad510bb9a0f3220286d626d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c8d1eb5960bcc820e881c497db188e59b572d896"
        },
        "date": 1750755840636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3137.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3377.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3435.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3171.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6915.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3412.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2980.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3458.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3386.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 233.66796875,
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
          "id": "55ba7de089446cfdf421b3c1ad92b1036c4e3dcf",
          "message": "Move object client into Superblock (#1476)\n\nThis PR moves the client into the Superblock, thus a superblock will\nalways interact with the same instantiation of an `ObjectClient + Send +\nSync`.\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact existing behaviour, as is only an\ninternal re-organisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, does not need a Changelog entry, as it only moves around where we\nstore the client.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-24T12:28:42Z",
          "tree_id": "23e9d9e1fb4d816c8b682ed0ca7fb58f01fa2680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55ba7de089446cfdf421b3c1ad92b1036c4e3dcf"
        },
        "date": 1750775303998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3228.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3345.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3288.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3275.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5723.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2850.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3051.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3535.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3394.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.14453125,
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
          "id": "43aa6f7cadaeb8bf580741502e53d761d063ed6d",
          "message": "Update CRT submodules to latest releases (#1484)\n\nUpdate `aws-c-s3` in order to pick up the latest addition to the Memory\npool interface (awslabs/aws-c-s3#529).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 29ceb352..1762f839:\n  > Add user data to pool factory (#529)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-25T07:33:36Z",
          "tree_id": "0ac46076318b295e9075b00d708a491b227fed32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43aa6f7cadaeb8bf580741502e53d761d063ed6d"
        },
        "date": 1750843840333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3395.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3427.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3392.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3506.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6277.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3368.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2836.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3108.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5766.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 217.0078125,
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
          "id": "20f3c0202371b8f012bd25067093dfcc97653d8a",
          "message": "Add support to collect perf stat counters in benchmark.py (#1474)\n\nAdd support to collect perf stat counters in benchmark.py\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only affects benchmark.py\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-06-25T14:15:10Z",
          "tree_id": "4a663775b6bd393e9e4638b97df3bb28c05c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/20f3c0202371b8f012bd25067093dfcc97653d8a"
        },
        "date": 1750868209836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3511.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3380.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3226.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3386.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4438.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3299.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3263.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 238.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3323.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3376.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.08203125,
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
          "id": "09db8afebc61bfd4717172b4ccbe57b9dd47c9b6",
          "message": "Move `reader_count` out of inode (#1475)\n\nMoves the reader count out of the inode and instead stores the reader\ncounts for all inodes with non-zero reader count in a HashMap (that is\nprotected by a lock).\n\n### Does this change impact existing behavior?\n\nThis should not have breaking changes, it could potentially reduce\nunlikely issues with the reader count getting messed up in highly\nconcurrent scenarios involving re-creation of inodes with the same\nnumber.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDoes not need a Changelog entry or version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-26T06:09:43Z",
          "tree_id": "b7465e39b2af7d265f25563d8bd047b7770a50c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09db8afebc61bfd4717172b4ccbe57b9dd47c9b6"
        },
        "date": 1750925433874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3344.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3159.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3252.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 281.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3172.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9484.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3371.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3456.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3576.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3243.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.91015625,
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
          "id": "f4d7df30fff3cc17c85578b0df51f5895523f6ab",
          "message": "Move lookup count into InodeMap (#1473)\n\nThis PR re-organises the way we lookup count by moving the lookup count\ninto inode HashMap (i.e, this hashmap now stores an association of\nInodeID -> (inode, lookup_count)). This more closely mirrors real file\nsystem's behaviour w.r.t. inodes that are re-created with the same inode\nnumber. It introduces some additional locking.\n\nThis should not have any difference in behaviour, as we do not replace\ninodes if they are currently open for writing or reading.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-27T06:44:45Z",
          "tree_id": "05178bedb883fbe00b7acb30e8ed313b47b4f73b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4d7df30fff3cc17c85578b0df51f5895523f6ab"
        },
        "date": 1751013779601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3301.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3091.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3441.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3181.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 249.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7767.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3568.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3275.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3135.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3347.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.375,
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
          "id": "7e45834ac4e73aa648d8f62583c1b3becb12d2b8",
          "message": "Add private option to disable disk cache cleanup for testing/benchmarking (#1483)\n\nThis updates the `ManagedCacheDir` struct to optionally perform cleanup\nat creation and drop. It also provides an environment variable for\nswitching this on at `mount-s3` invocation time. This will allow us to\nturn this cleanup off when trying to perform benchmarking comparing\n\"warming\" phases, as well as \"hot\" phases - i.e. to understand how\nMountpoint performs when loading the cache versus a full cache, where\nall requests are served from it.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change. One log is downgraded from `warn` to\n`debug`. The warning was not providing much valuable information - if\nneeded, we can turn on debug logs if any strange behavior is observed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no public changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T09:30:14Z",
          "tree_id": "cf1054344fd2f3a909e34fb60f31b42590dd3d0c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e45834ac4e73aa648d8f62583c1b3becb12d2b8"
        },
        "date": 1751023806059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3286.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2874.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3502.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3490.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4851.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3422.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3815.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 461.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3337.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15505.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 469.1953125,
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
          "id": "240108b8ab0386a9f7c6ca2f8de2901ebadd8c00",
          "message": "Remove inodes from file handles  (#1486)\n\nThis PR removes the reference to the inodes from the file handle and\ninstead uses the inode number and full key.\n\n### Does this change impact existing behavior?\n\nNo - is just an internal reorganisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNeeds no Changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T11:06:31Z",
          "tree_id": "45ca3fcb229ab13f55fcedaef59105acffefaaf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/240108b8ab0386a9f7c6ca2f8de2901ebadd8c00"
        },
        "date": 1751029667536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3430.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3503.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3558.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3258.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10586.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 5282.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3354,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 471.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3377.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12554.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 469.046875,
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
          "id": "dc4fc38f76a9533053fe4aa364a0fc3f08b724ba",
          "message": "Avoid copy of data returned by GetObject (#1481)\n\nReduce memory fragmentation and peak usage by avoiding copying data\nreturned by GetObject into newly allocated buffers. This change relies\non the new CRT API integrated in #1430, which allows `S3CrtClient` to\nextend the lifetime of the buffers from the CRT memory pool when they\nare returned by GetObject. Callers of the `get_object` method are now\nresponsible for dropping the returned `Bytes` instances in order for the\nbuffers to be released back to the CRT memory pool.\n\nAt the moment, the memory-limiting strategy used in the prefetcher\ncomponent in Mountpoint does not cope well with the change and may end\nup starving the CRT of available buffers. For this specific use case, we\nintroduced a temporary feature flag in the `mountpoint-s3-client` crate,\n`restore_buffer_copy` which restores the previous behavior, i.e.\nGetObject allocates and returns new buffers with a copy of the object\ncontent. As we rework this aspect of the prefetcher, we will likely\nremove the feature flag.\n\n### Does this change impact existing behavior?\n\nYes. The buffers returned by GetObject will be borrowed from the\ninternal memory pool.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Entry and new version number for the client crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T12:59:16Z",
          "tree_id": "49d96598858412ab5c0e3a038809679ae81b3eb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc4fc38f76a9533053fe4aa364a0fc3f08b724ba"
        },
        "date": 1751036562837,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3322.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3199.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3469.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3417.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4953.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3418.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3689.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 475.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 4682.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14791.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 474.14453125,
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
          "id": "01316f0631fa65afce93663f513b02e2355a9862",
          "message": "Update CHANGELOGs in preparation of `mountpoint-s3-client` release (#1489)\n\nUpdate the CHANGELOGs in order to release the client crates today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T15:17:30Z",
          "tree_id": "a2eddd8b3e259d4d50c838f03751402713a19bef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/01316f0631fa65afce93663f513b02e2355a9862"
        },
        "date": 1751044601509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3499.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3196.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3383.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7745.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3446.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3663.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 461.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3435.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15016.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 469.99609375,
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
          "id": "6a4e5962d94a8b3bba33b4f5eb829073fe44adc5",
          "message": "Fix previous change disabling cache cleanup by default (#1490)\n\nOnly disable disk cache cleanup when the environment variable\n`UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP` is set. Fixes a bug in #1483\nwhich disabled cleanup by default.\n\n### Does this change impact existing behavior?\n\nYes. Reverts to previous default behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:02:45Z",
          "tree_id": "7c22d703da6ba8cc8ec7642fcb278b6869bb4216",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a4e5962d94a8b3bba33b4f5eb829073fe44adc5"
        },
        "date": 1751050985257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3557.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 343.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3596.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3007.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3479.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12340.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3212.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3475.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3331.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4092.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.80859375,
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
          "id": "7f46c5141157368cdebd787389c19fb9d2e3d23a",
          "message": "Add trace for block reads in disk data cache (#1491)\n\nAdd a trace for block reads, useful for performance and memory analysis.\n\n### Does this change impact existing behavior?\n\nAdds a new trace log on block reading.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, trace log addition only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T17:02:59Z",
          "tree_id": "551963df2c841e6761c195dc31bccf96d5f636e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f46c5141157368cdebd787389c19fb9d2e3d23a"
        },
        "date": 1751051067173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3294.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3285.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3455.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3490.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6381.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3154.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3460.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3392.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3281.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.4140625,
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
          "id": "6df6fb183d946d2afd78d3b9ea7325964917c55d",
          "message": "Upgrade to Rust 1.88 (#1493)\n\nUpgrade to the new compiler and address new clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:07:36Z",
          "tree_id": "5a0fd226bfb5e2c3fa3e9faf5b6e153b7839886d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6df6fb183d946d2afd78d3b9ea7325964917c55d"
        },
        "date": 1751051195137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3149.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3222.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3202.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3301.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13522.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3467.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3548.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3355.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8747.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.7734375,
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
          "id": "63fb942f3749964e974a54a7bf25dbb40d118a24",
          "message": "Update cargo dependencies (#1496)\n\nUpdate cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-30T10:54:48Z",
          "tree_id": "986d85e6fe9a9b12fa1c9b03069a2447ac75f52a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63fb942f3749964e974a54a7bf25dbb40d118a24"
        },
        "date": 1751288068591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3464.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2943.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3494.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 282.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3619.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6022.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3394.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2991.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3466.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3487.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.328125,
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
          "id": "73322655761f1211a4bf0b1921b91b1a395d5062",
          "message": "Remove clippy exception in logging module (#1497)\n\nMinor internal change to the `logging` module in `mountpoint-s3-crt`:\nwhen interfacing with the C functions, expose the logger implementation\nas a direct reference instead of as a reference to a `Box`. Removes an\nexception to the\n[borrowed_box](https://rust-lang.github.io/rust-clippy/master/#borrowed_box)\nclippy warning. Also adds the `unsafe` blocks and `SAFETY` comments that\nwill be required in Rust 2024.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T09:41:23Z",
          "tree_id": "5247db4671da5719496e1612ab043c8b3afde618",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73322655761f1211a4bf0b1921b91b1a395d5062"
        },
        "date": 1751370049623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3082.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3417.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3457.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3261.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4280.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3031.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3188.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3381.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3428.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.82421875,
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
          "id": "05e964c915cb1254fcbcbd4f316cda41603b5954",
          "message": "Explicitly edit fstab file when running on Github runners to avoid a failure (#1482)\n\nIn the fstab CI tests, comment out a fstab entry for\n`\\dev/disk/cloud/azure_resource-part1` if we're running in Github\nActions.\n\n### Does this change impact existing behavior?\n\nFixes a failure in Github CI.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-01T13:42:48Z",
          "tree_id": "52581fc3fe4d6383ee758bb8b3f771e646bd97f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05e964c915cb1254fcbcbd4f316cda41603b5954"
        },
        "date": 1751384495373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3307.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3381.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3066.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3451.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 228.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13975.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3282.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3036.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3367.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4183.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.13671875,
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
          "id": "120028c7af9edd00f46c665f1f6e12dbee866d48",
          "message": "Upgrade to Rust 2024 (#1498)\n\nUpgrade crates to [Rust 2024\nEdition](https://doc.rust-lang.org/edition-guide/rust-2024/index.html).\n\nChanges are for the most part:\n* formatting changes applied by `cargo fmt`,\n* adopting the new requirement of `unsafe` blocks (and `SAFETY`\ncomments) in `unsafe` functions.\n\n### Does this change impact existing behavior?\n\nNo user-visible changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased versions of library crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T16:44:32Z",
          "tree_id": "860b7a45fc0e1c3cbdac917bb60b2048bf75186b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/120028c7af9edd00f46c665f1f6e12dbee866d48"
        },
        "date": 1751395578724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3329.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 342.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3211.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3248.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3237.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11448.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3142.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3363.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2941.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3393.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.18359375,
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
          "id": "a1972e4181f6be821bca3d4aa6ac5f601d31d2c7",
          "message": "Clarify that rename is atomic (#1499)\n\nClarified that rename in Express OneZone is atomic.\n\n### Does this change impact existing behavior?\n\nDoc update, no impact on existing behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a small doc update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-02T11:23:54Z",
          "tree_id": "4ad16ed2f8edb96c2f661e21f5ddc873f3a08e0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1972e4181f6be821bca3d4aa6ac5f601d31d2c7"
        },
        "date": 1751462559908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3309.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3571.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3301.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3315.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 201.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8615.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2767.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3093.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3350.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 6928.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.890625,
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
          "id": "814a43356ac5206a8ab179770427a3ed920ecc87",
          "message": "Simplify lookup + adjust readdir interface (#1488)\n\nThis PR introduces a more generic Lookup structure and uses it as the\nresult type of a lookup.\nAdditionally adjusts the readdir interface.\n\n### Does this change impact existing behavior?\n\nNo, does not impact existing behaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-04T16:30:27Z",
          "tree_id": "634a2a275066bc17527a49a9ffae60f340a52856",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814a43356ac5206a8ab179770427a3ed920ecc87"
        },
        "date": 1751653858952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3262.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3243.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3259.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3387.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7578.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3002.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3487.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 209.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3297.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3341.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.37890625,
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
          "id": "382a369680a30073b725c206d528a8ebf834e864",
          "message": "Introduce builder pattern for mockclientconfig (#1502)\n\nUse a builder pattern for MockClientConfig.\n\n### Does this change impact existing behavior?\n\nDoes not impact existing behaviour as it only changes the way we build\nthe structure.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-07T07:56:41Z",
          "tree_id": "f8f99873c1e51ad626f9076cb3560b9086b54f2f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/382a369680a30073b725c206d528a8ebf834e864"
        },
        "date": 1751882180522,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3501.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3358.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3108.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3449.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18607.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3292.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3342.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3519.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3484.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.4453125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}