window.BENCHMARK_DATA = {
  "lastUpdate": 1753452788697,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751910247118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3240.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3242.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3404.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 279.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3415.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13765.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3376.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3346.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 5242.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3377.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.484375,
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
          "id": "ceaba78a1994d767b1a6b45593a49cee7e351d5d",
          "message": "Introduce Metablock abstraction (#1500)\n\nThis PR introduces the `Metablock` abstraction that is currently only\nimplemented by the `Superblock`.\nWith this abstraction it will be easier to potentially introduce new\nimplementations of this interface for slightly modifed semantics.\n\nDoes not change existing behaviour, as it only introduces an interface.\n\nAdded Changelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-08T08:09:07Z",
          "tree_id": "70b5af778b163213c09f49738ff69b9827c72837",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ceaba78a1994d767b1a6b45593a49cee7e351d5d"
        },
        "date": 1751969193079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3168.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3520.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3344.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3342.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9821.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3181.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3603.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 239.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3120.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3409.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.9296875,
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
          "id": "996816631f6a2e79971653c3030cddb0352b617c",
          "message": "Remove last bucket usage (#1505)\n\nRemoves a left over usage of bucket in `Filesystem`.\n\nNo behaviour change.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-09T13:54:49Z",
          "tree_id": "6e02f8c1307a53a5c1725e339578e5753ed93669",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/996816631f6a2e79971653c3030cddb0352b617c"
        },
        "date": 1752121233305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3530.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3275.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3232.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3199.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 200.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15545.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3157.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3112.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3513.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3440.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.171875,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752166205552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3057.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3159.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3462.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3593.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19014.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3330.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3645.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3634.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3589.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.27734375,
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
          "id": "fa6203366755e0009fe9b962cc21393999dc0b4a",
          "message": "Add an option to write benchmarks output to a file (#1510)\n\nThis change allows us to save benchmarks output to a file in json\nformat, making it easier to parse the output.\n\n### Does this change impact existing behavior?\n\nNo, prefetcher and client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, prefetcher and client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-11T12:42:54Z",
          "tree_id": "eb47df7b7b77e96306607aa391c4f2b5ef22c495",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa6203366755e0009fe9b962cc21393999dc0b4a"
        },
        "date": 1752244900732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3401,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3443.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3606.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3309.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4458.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3132.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3752.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3120.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4556.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.5625,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752493224619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3547.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3121.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3544.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3435.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 199.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7108.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3314.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3523.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10173.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3553.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.26171875,
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
          "distinct": false,
          "id": "c3b70d06ce7edcd06373ab47816bdb91a1eba8b1",
          "message": "Bump slackapi/slack-github-action from 2.1.0 to 2.1.1 (#1514)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.0 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack Send v2.1.1</h2>\n<h2>What's Changed</h2>\n<p>This release fixes an issue where substituted variables might've\nbroken valid JSON or YAML parsings when using the\n<code>payload-file-path</code> input option.</p>\n<h3>🐛 Bug fixes</h3>\n<ul>\n<li>fix: parse provided payloads before replacing templated variables in\n<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/449\">slackapi/slack-github-action#449</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>📚 Documentation</h3>\n<ul>\n<li>docs: fix channel mention formatting in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/447\">slackapi/slack-github-action#447</a>\n- Thanks <a\nhref=\"https://github.com/mwbrooks\"><code>@​mwbrooks</code></a>!</li>\n<li>docs: remove links to pages that are no longer referenced in\nmarkdown in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/459\">slackapi/slack-github-action#459</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>🤖 Dependencies</h3>\n<ul>\n<li>build(deps): bump undici from 5.28.5 to 5.29.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/442\">slackapi/slack-github-action#442</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump codecov/codecov-action from 5.4.2 to 5.4.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/443\">slackapi/slack-github-action#443</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.1.0 to 11.5.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/450\">slackapi/slack-github-action#450</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/451\">slackapi/slack-github-action#451</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.3 to\n22.15.29 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/452\">slackapi/slack-github-action#452</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.1 to 7.9.2\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/453\">slackapi/slack-github-action#453</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.2 to 7.9.3\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/462\">slackapi/slack-github-action#462</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump axios from 1.9.0 to 1.10.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/465\">slackapi/slack-github-action#465</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.29 to\n24.0.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/466\">slackapi/slack-github-action#466</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.5.0 to 11.7.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/468\">slackapi/slack-github-action#468</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/469\">slackapi/slack-github-action#469</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump sinon from 20.0.0 to 21.0.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/471\">slackapi/slack-github-action#471</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 24.0.3 to\n24.0.8 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/472\">slackapi/slack-github-action#472</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to\n2.0.6 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/470\">slackapi/slack-github-action#470</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n</ul>\n<h3>🧰 Maintenance</h3>\n<ul>\n<li>ci: pin action hashes and escape variables with minimum permission\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/441\">slackapi/slack-github-action#441</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: create separate release branches for tagged releases on\npublish in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/457\">slackapi/slack-github-action#457</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: clone repository &quot;docs&quot; and configuration when\nsyncing project docs in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/467\">slackapi/slack-github-action#467</a>\n- Thanks <a\nhref=\"https://github.com/lukegalbraithrussell\"><code>@​lukegalbraithrussell</code></a>!</li>\n<li>chore(release): tag version 2.1.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/474\">slackapi/slack-github-action#474</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/91efab103c0de0a537f72a35f6b8cda0ee76bf0a\"><code>91efab1</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b6f4640825302dc9b85bd5ffbe34dfc7a762e404\"><code>b6f4640</code></a>\nchore(release): tag version 2.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/474\">#474</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d3dc61e5d1355f17c060df3210cda7044341866e\"><code>d3dc61e</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to 2.0.6\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/f647c89261423b9045f1ecc4f887c2e62ff6f33d\"><code>f647c89</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.0.3 to 24.0.8\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/472\">#472</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e6fa63302e670473dcb1695b744c15895d615227\"><code>e6fa633</code></a>\nbuild(deps-dev): bump sinon from 20.0.0 to 21.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/471\">#471</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/75b7822f871b0c9c128cae6c27efc029b1f6c1de\"><code>75b7822</code></a>\nbuild(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d7b6150e2a1b713e9aaf24e1559a11dfdf0f2a2d\"><code>d7b6150</code></a>\nbuild(deps-dev): bump mocha from 11.5.0 to 11.7.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/468\">#468</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/a7f5b68f29d9c4eb439f490ee90bda80a34ed6f5\"><code>a7f5b68</code></a>\nbuild: clone repository &quot;docs&quot; and configuration when syncing\nproject docs (#...</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c69deab25713549329730019e9c20a81d09bb4cd\"><code>c69deab</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 22.15.29 to 24.0.3\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/466\">#466</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1d0943cb8c8bca873d09b7b9638f3a94f89d829a\"><code>1d0943c</code></a>\nbuild(deps): bump axios from 1.9.0 to 1.10.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/465\">#465</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.0&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-14T10:14:09Z",
          "tree_id": "13338d52a1265d5b973af2ad086b1277bcb643fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3b70d06ce7edcd06373ab47816bdb91a1eba8b1"
        },
        "date": 1752495157369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3271.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2875.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3567.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 282.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3631.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5370.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 337.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3308.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3474.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3635.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3438.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.4453125,
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
          "id": "500986305934dc89b9457a6dfad2532476332862",
          "message": "Update the aws-c-s3 submodule to the latest release (#1515)\n\nUpdate the `aws-c-s3` submodule to\n[v0.8.4](https://github.com/awslabs/aws-c-s3/releases/tag/v0.8.4),\npicking up in particular: [ Avoid releasing pending mem ticket future\nwhile holding the lock #533\n](https://github.com/awslabs/aws-c-s3/pull/533).\n\n\nChange details:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1762f839..f8ae82e3:\n  > Avoid releasing pending mem ticket future while holding the lock (#533)\n  > More request metrics (#530)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T22:17:50Z",
          "tree_id": "208673de285dd84fdc1214be27868ca27e9310f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/500986305934dc89b9457a6dfad2532476332862"
        },
        "date": 1752538524941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3520.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2909.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3054.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3388.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 199.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11079.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2597.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3335.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3402.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.90234375,
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
          "id": "4a7b5aeadf08ca443fb027362eb9b5051d425bbb",
          "message": "Update MP client benchmarks to benchmark multiple object downloads  (#1512)\n\nThis change adds new parameters to client benchmarks to download\nmultiple objects and to limit the duration of the test.\nThis change also extends bind parameter to take a comma separated list\nof NICs.\n\n### Does this change impact existing behavior?\n\nNo, client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:34:44Z",
          "tree_id": "7fee70a1c31e9e939412aa597706ade1a0d6dba6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a7b5aeadf08ca443fb027362eb9b5051d425bbb"
        },
        "date": 1752665660886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3328.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3405.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3506.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3430.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7181.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 335.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3253.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2751.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3421.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8314.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.625,
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
          "id": "68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91",
          "message": "Refactor benchmark.py to extend to prefetcher and other benchmarks (#1507)\n\nThis change extracts fio and mountoint specific code from benchmark.py\nto specific modules to make it cleaner. It also separates the\nconfiguration into sections allowing us to have benchmark specific\nsweeper parameters.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:59:26Z",
          "tree_id": "409aff2851c4ed423fa580e15f7ea647f08445e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91"
        },
        "date": 1752667095737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3521.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2822.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3385.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3278.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 194.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5564.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3090.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3519.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3334.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3616.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.90234375,
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
          "id": "e104c3f563a175652d359c6e260d501f1b598339",
          "message": "Update CRT submodules to the latest releases (#1520)\n\nUpdate the CRT submodules to the latest releases, picking up in\nparticular: [Move fulfilling pending future outside the lock and ignore\nalready completed futures\n(#536)](https://github.com/awslabs/aws-c-s3/pull/536).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common aaa2f11e..2b67a658:\n  > Add API for a more compact (no dashes) UUID-to-str (#1212)\n  > Add a python script to help pick up the latest cjson and libcbor (#1211)\n  > Fix byte helpers for mingw 32 bit (#1210)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#1209)\n  > Fix signature of aws_backtrace_log (#1206)\n  > Remove clang-3 from CI (#1203)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 10961a70..bfa03928:\n  > support no_proxy excatly like CURL (#522)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#521)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io ee7925a3..12cb9f9c:\n  > stop packing future variable to avoid tsan data race warnings (#741)\n  > Support s2n security policy for TLS 1.2 and FIPS (#739)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 f8ae82e3..70aacd2d:\n  > Move fulfilling pending future outside the lock and ignore already completed futures (#536)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T07:58:37Z",
          "tree_id": "1216fd13514fc370ee60ae71b89d89644f20c951",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e104c3f563a175652d359c6e260d501f1b598339"
        },
        "date": 1752746425255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3376.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 322.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3403.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3194.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3176.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 201.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 11502.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3265.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3241.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 209.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3276.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5835.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.3203125,
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
      }
    ]
  }
}