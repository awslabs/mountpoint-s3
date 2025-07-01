window.BENCHMARK_DATA = {
  "lastUpdate": 1751370976049,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "b2d1e773481408c95e9e36dd7588b0c53f7cbbc6",
          "message": "Fstab tests: Ignore empty directory (#1443)\n\nCurrently, our fstab tests can fail if run in an environment where the\noutput dir does not exist.\nThis PR changes the `rm -r` call to a `rm -rf` to ignore cases where the\ndirectory is empty.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-30T14:50:18Z",
          "tree_id": "178e0afe47f45a9481ecd6e6de7e1ddb96bf2084",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b2d1e773481408c95e9e36dd7588b0c53f7cbbc6"
        },
        "date": 1748624688443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15383.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23207.1875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37018.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 98.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 68.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37541.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35662.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12405.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12909.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12534.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 565.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.52734375,
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
          "id": "3fef44e2590d952b828e099803b5334ec909f53b",
          "message": "Fix example for using fstab in user data (#1450)\n\nThe previous example for using fstab with user data failed to install\nMountpoint occasionally on AL2023 hosts, and appears to be impacted by\nthis bug: https://github.com/amazonlinux/amazon-linux-2023/issues/397 &\nhttps://repost.aws/questions/QU_tj7NQl6ReKoG53zzEqYOw/amazon-linux-2023-issue-with-installing-packages-with-cloud-init.\n\nUpdating the example user data script to retry installing Mountpoint if\nit fails.\n\nI tested this by creating 6 AL2023 instances and saw they all started up\nand had Mountpoint available after swapping out the s3 bucket in the\nexample with my s3 bucket\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T15:21:56Z",
          "tree_id": "cea02b98052d7556b88a0cb52122e804903e6234",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fef44e2590d952b828e099803b5334ec909f53b"
        },
        "date": 1748626468879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15497.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23302.84375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35634.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34246.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35511.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 411.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11918.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9691.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13263.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 270.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 696.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.51953125,
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
          "id": "26c8bba25fbd7d09531930f524d5067c530a6564",
          "message": "Update fstab documentation with more examples (#1451)\n\nUpdate fstab documentation with more examples.\nInclude a failed mount example.\n\nRendered docs:\nhttps://github.com/muddyfish/mountpoint-s3/blob/fstab-docs-pr-feedback/doc/CONFIGURATION.md#automatically-mounting-an-s3-bucket-at-boot\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-06-02T12:04:13Z",
          "tree_id": "d637dcea9e15b7e291315d55dfa7847d79a86a90",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26c8bba25fbd7d09531930f524d5067c530a6564"
        },
        "date": 1748873951636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13717.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23371.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35504.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36007.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34428.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11291.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8997.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11675.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 600.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 401.14453125,
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
          "id": "64e0e557926e3b1c66b41e796548b02a1272aaa4",
          "message": "Update prefetch and backpressure documentation, minor code changes for clarity (#1440)\n\nThis change should not change any functionality, and only modifies\ndocument comments or rewrites code for clarity and to demonstrate\nassumptions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo behavior changes expected, no need for any changelog or version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-03T12:58:08Z",
          "tree_id": "895253695282953abe8d2c0ba7fab44f083d0f58",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/64e0e557926e3b1c66b41e796548b02a1272aaa4"
        },
        "date": 1748963672782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16169.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20680.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35286.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33606.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33488.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11581.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12261.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11310.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 580.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.14453125,
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
        "date": 1749134807277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12810.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21924.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33748.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34006.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36988.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8501.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11011.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11786.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 647.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 436.4453125,
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
        "date": 1749492413290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12999.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19878.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34111.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 275.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 283.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34609.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33726.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10431.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11486.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12653.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 696.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 464.76953125,
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
        "date": 1749559162324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15857.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23428.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36455.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 271.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 263.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34423.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37073.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10264.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10624.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10489.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 730.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.07421875,
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
        "date": 1749744602466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15366.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22446.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31988.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 271.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 285.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35571.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32459.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9094.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10977.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12490.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 768.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.63671875,
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
        "date": 1749747849660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11982.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22440.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36594.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 278.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33923.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38128.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8845.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12511.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10029.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 495.58203125,
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
        "date": 1749831953802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13245.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20103.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36906.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 273.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 274.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34060.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36678.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11224.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11042.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13194.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 680.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.62890625,
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
          "id": "1ee3d8f1f17f4918e16db386d7e993c1c8018200",
          "message": "Revert \"Update CRT submodules to latest releases (#1458)\" (#1466)\n\nThis reverts commit f138efcaa33169b005cdbf5a0d11c10d89db292e.\n\nAs part of the investigation on the benchmark failures in the CI, e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15625094824/job/44017689830,\nwe are reverting to the previous CRT releases.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, reverted.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-13T15:55:45Z",
          "tree_id": "8c67ecf11d7edc82d957c5524f7ea40fc4b1dbb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ee3d8f1f17f4918e16db386d7e993c1c8018200"
        },
        "date": 1749838388833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13819.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22301.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36797.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31931.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32774.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10383.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12579.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12109.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 660.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 560.78515625,
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
          "id": "ed14db3dfd12a28650399536ee978848e712eddf",
          "message": "Introduce file rename support for directory buckets in S3 Express One Zone (#1468)\n\nIntroduces support in Mountpoint for renaming files, using the\n[RenameObject\nAPI](https://aws.amazon.com/about-aws/whats-new/2025/06/amazon-s3-express-one-zone-atomic-renaming-objects-api/),\nwhich is supported on directory buckets in S3 Express One Zone.\n\nFile rename is enabled automatically when mounting a directory bucket in\nS3 Express One Zone. In order to replace an existing object through\nrename, the user must provide the `--allow-overwrite` flag at mount\ntime. More details on Mountpoint's support for rename can be found in\nthe semantics documentation `doc/SEMANTICS.md`.\n\n### Does this change impact existing behavior?\n\nYes, this change will enable rename object when a bucket with support\nfor the new API is mounted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries for the crates are updated. Versions are increased.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-18T22:57:29Z",
          "tree_id": "cf15574e84db9acaf0d68c76da854f9f4bd3e4ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed14db3dfd12a28650399536ee978848e712eddf"
        },
        "date": 1750297449449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13768.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21977.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34452.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33015.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35552.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9995.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12701.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10761.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 774.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.0390625,
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
        "date": 1750323558894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14424.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23613.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41283.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36451.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36515.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11395.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13438.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13487.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 750.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 405.63671875,
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
          "id": "41aeca132bc6ba8c21a8d2cb82ddab676211507f",
          "message": "Update changelogs to prepare for crate release (#1470)\n\nUpdates the changelogs so that crates can be updated prior to the\nrelease of MP v1.19.0\n\n### Does this change impact existing behavior?\n\nDoes not impact behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the crate update itself does not need a changelog entries. Version\nchanges were already done in #1468\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-19T07:43:55Z",
          "tree_id": "aa8e0d92d10f6c992a0742bc3484ca2780a038f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41aeca132bc6ba8c21a8d2cb82ddab676211507f"
        },
        "date": 1750327152705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14165.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23381.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39408.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36725.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32929.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10731.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13244.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11369.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.1328125,
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
        "date": 1750444990493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10843.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22279.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37267.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 269.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33895.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40232.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 408.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11183.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13402.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11944.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.0390625,
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
        "date": 1750756798945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13082.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24669.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38151.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36018.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32769.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9536.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11565.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14667.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 613.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.703125,
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
        "date": 1750776244087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13409.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18114.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36966.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 279.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 275.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 226.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33097.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37193.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10959.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10851.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12139.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 694.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 503.15234375,
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
        "date": 1750844784253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15242.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24609.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41702.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 258.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 220.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34055.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35197.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12065.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10464.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9126.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 650.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.19921875,
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
        "date": 1750869163700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13081.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20559.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37618.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 263.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32962.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32692.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8661.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13025.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11455.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 814.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 624.5390625,
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
        "date": 1750926333100,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12560.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23979.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35277.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 276.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31044.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39080.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11051.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9471.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13466.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.3046875,
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
        "date": 1751014793107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14621.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22548.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38194.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 275.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33574.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35551.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10203.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12842.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11710.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 749.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.1875,
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
        "date": 1751024650638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14400.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21946.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32886.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 273.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 220.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35028.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38041.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11984.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10432.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10285.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 683.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.296875,
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
        "date": 1751030543776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10724.08203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21776.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36454.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 280.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35127.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34295.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10850.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10959.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11900.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 817.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 578.13671875,
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
        "date": 1751037386757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12548.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20932.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38097.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 278.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 277.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 223.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34330.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34654.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9625.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9361.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12937.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 732.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.09375,
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
        "date": 1751045463553,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11093.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21868.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32099.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 272.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 280.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33565.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37803.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8103.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11506.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10534.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.66796875,
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
        "date": 1751051866525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14981.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25624.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35425.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34858.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37638.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10230.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12593.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13821.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 762.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 437.15625,
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
        "date": 1751051947748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13465.5625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22870.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37058.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 270.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 282.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 223.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37929.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38577.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11183.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9649.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13321.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 762.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.5390625,
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
        "date": 1751052208971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14987.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24410.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36266.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 262.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 280,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 220.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32138.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40576.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10043.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12207.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10517.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.55078125,
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
        "date": 1751289046856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13195.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23957.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30777.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 270.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31933.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38118.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10485.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13493.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13827.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 253.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 544.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 384.99609375,
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
        "date": 1751370975996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12024.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22653.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34184.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 252.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 266.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34592.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31867.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10244.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13231.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12683.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 726.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.7421875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}