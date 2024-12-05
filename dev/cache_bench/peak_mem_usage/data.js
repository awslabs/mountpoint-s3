window.BENCHMARK_DATA = {
  "lastUpdate": 1733439019335,
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
          "distinct": true,
          "id": "47e1d56e8899806b5c6f217cee291a8f9c57c4a9",
          "message": "Refactor MemoryLimiter to specify tracked 'area' when reserving memory (#1161)\n\nThe memory limiter currently tracks the amount of memory reserved for\nprefetching. We plan to extend this as part of supporting appends in S3\nExpress One Zone (#1160).\n\nThis change (originally authored by @monthonk) refactors the memory\nlimiter API to allow specifying the \"area\" we'd like to reserve in, for\nthe purpose of metrics for now.\n\n### Does this change impact existing behavior?\n\nNo change to existing behavior.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-22T12:59:03Z",
          "tree_id": "3ea920b54b9b8a47eefad798421f49cd86a90af3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47e1d56e8899806b5c6f217cee291a8f9c57c4a9"
        },
        "date": 1732287526445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3323.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3271.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3402.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3239.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26042.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3157.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3304.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3268.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3181.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.0703125,
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
          "id": "458ffdcd17717d7af944c2d7af8384c4f7b2d111",
          "message": "Improve support for additional checksum algorithms in mountpoint-s3-client (#1157)\n\nAllows to specify any of the supported checksum algorithms when\nuploading objects.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nYes, adding an entry to the `mountpoint-s3-client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T14:13:13Z",
          "tree_id": "87dbdf991dd2ef2df65ebcbee18f08b30c36b845",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/458ffdcd17717d7af944c2d7af8384c4f7b2d111"
        },
        "date": 1732291964031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3227.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3351.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18575.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3249.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3346.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 219.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2969.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.5234375,
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
          "id": "61dc41779154633ea8c6e15e07ed9e75348870bb",
          "message": "Introduce incremental upload mode and support for append (#1165)\n\nIntroduce a new option for Mountpoint to upload files incrementally and\nsupport appending to existing files. The new option can be enabled by\nsetting the `--incremental-upload` flag at mount time and is available\nwhen mounting directory buckets in S3 Express One Zone.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1160.\n\n### Does this change impact existing behavior?\n\nNo changes under default settings.\n\n### Does this change need a changelog entry?\n\nYes, added entry to the `mountpoint-s3` changelog, under \"New Features\".\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T12:39:32Z",
          "tree_id": "b1a5ead0ea75de63b7dd8fe5209eea4e57412a09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61dc41779154633ea8c6e15e07ed9e75348870bb"
        },
        "date": 1732545597829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3351.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3224.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3336.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28160.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 354.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3098.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3301.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3340.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3133.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.69921875,
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
          "id": "c66546af1b31b1908d74ecd82c403142ef728aa2",
          "message": "Release v1.12.0 (#1166)\n\nBump version to 1.12.0\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo, just added a section for the release today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T13:17:49Z",
          "tree_id": "a2988234c7d2f7f37305f6eeb6d0c2cc270bbe91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c66546af1b31b1908d74ecd82c403142ef728aa2"
        },
        "date": 1732547857250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3367.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3281.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3434.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3303.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28501.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3325.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3386.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3382.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3264.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.33984375,
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
          "id": "e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e",
          "message": "Remove old TODO (#1167)\n\nThe issue has already been addressed in Cancel S3 requests when dropped\n[#794](https://github.com/awslabs/mountpoint-s3/pull/794).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T17:20:29Z",
          "tree_id": "97be414ede808c088863bc696d7602794a2b26f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e"
        },
        "date": 1732562452497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3450.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3326.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3273.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3323.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25422.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3343.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3322.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3425.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3179.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 203.0703125,
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732626095213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3452.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3165.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3246.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3164.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24244.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 335.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3170.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3467.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3356.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3266.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.61328125,
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
          "id": "4ec847aa49b05c04b072540a50253139e7e6dfb1",
          "message": "Upgrade cargo-deny action, remove deprecated deny configurations (#1168)\n\nThe `cargo-deny` action we depend on release v2 in August, and with it\nmade breaking changes. Dependabot was unable to merge due to these\nbreaking changes: https://github.com/awslabs/mountpoint-s3/pull/969/\n\nThis change removes the deprecated configurations. `cargo-deny` now\nmarks all of those we configured as denied rather than allowing the\nviolations to be downgraded to warnings or allowed. This impacts us only\nfor 'unmaintained' crates which is fine, if needed we can always create\nan exception entry.\n\n### Does this change impact existing behavior?\n\nThis is a CI change only. We upgrade, removing unused and deprecated\nfields. Unmaintained crates will now fail CI.\n\n### Does this change need a changelog entry?\n\nNo, there is no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T11:16:25Z",
          "tree_id": "1d1cb34260301af398846e1b8de7766a9a4eced7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ec847aa49b05c04b072540a50253139e7e6dfb1"
        },
        "date": 1732627113074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3499.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3139.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3481.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3105.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28956.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3227.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3337.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3250.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3244.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.984375,
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
          "id": "13687edd9f9ff04b11ac2cb932a0ef5d3033a57b",
          "message": "Add additional Rustdoc to incremental upload module (#1169)\n\nJust adding more Rustdoc to help give pointers and get new readers up to\nspeed.\n\n### Does this change impact existing behavior?\n\nNo, documentation / style change only.\n\n### Does this change need a changelog entry?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T14:18:55Z",
          "tree_id": "af4a94cb2c47da8c87e41f2344452205339d8080",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13687edd9f9ff04b11ac2cb932a0ef5d3033a57b"
        },
        "date": 1732637968434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3382.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3410.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3363.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3282.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21842.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3266.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3388.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3355.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3142.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.07421875,
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
          "id": "896a10bb9c6c70d6928c19d04f4bd4168b289cd8",
          "message": "Fix flaky write_with_sse_kms_key_id_ok test (#1140)\n\nFixes the flakiness of write_with_sse_kms_key_id_ok test, which was\ncaused by not properly unmounting and dropping child.\n\nThis is not a breaking change; no changelog entry required (as this just\nfixes a test).\n\n\nBefore this change, this test fails in ~10 out of 100 runs, after this\nchange it fails 0 times out of 100 runs.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-26T14:37:17Z",
          "tree_id": "0d9a1126b207277215874e303deb01a097575a2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896a10bb9c6c70d6928c19d04f4bd4168b289cd8"
        },
        "date": 1732639121146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3276.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3256.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3309.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21295.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3284.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3313.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 219.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3313.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3383.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.97265625,
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
          "id": "654d86027265fafc87c5064cfe3a521faf0f11d4",
          "message": "Fix flaky out_of_order_write test (#1170)\n\nThe `out_of_order_write` tests failed to account that in incremental\nupload mode the previously written content of a file could be already\nuploaded when a subsequent `write` fails (as expected in the test). In\nthis case, the upload would occasionally be triggered by a `flush` call\nas a consequence of the test runner process being forked.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-27T14:25:07Z",
          "tree_id": "522ada25736c28165de1b678dc8aabe80745bc1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/654d86027265fafc87c5064cfe3a521faf0f11d4"
        },
        "date": 1732724713149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3328.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3405.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3349.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3443.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36175.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3315.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3254.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 242.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3379.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13199.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.25390625,
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
          "distinct": true,
          "id": "b04177565a641e7c5f6be18cbefe6fcdc583732e",
          "message": "Fix Clippy warnings on Rust 1.83 (#1175)\n\nRust 1.83 has been released with new Clippy lints, and it [broke our\nCI](https://github.com/awslabs/mountpoint-s3/actions/runs/12072806349/job/33667591504?pr=1103)\nas we use stable toolchain.\n\nThis PR fixes Clippy warnings on Rust 1.83. Most fixes are done with\n`cargo clippy --fix` and manually checked.\n\n### Does this change impact existing behavior?\n\nNone expected, it just changes the code style.\n\n### Does this change need a changelog entry?\n\nNo, as there is no behavioral change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-28T21:25:18Z",
          "tree_id": "f55ad261e9c05377bf58e76e528730db2b4866bf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04177565a641e7c5f6be18cbefe6fcdc583732e"
        },
        "date": 1732836362563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3352.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3452.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3413.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3344.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 228.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28228.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3321.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 356.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3388.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3330.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3446.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.9921875,
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
          "id": "54b57c47df1fe38296267495f3820260a6b72775",
          "message": "Merge AppendUploader into Uploader (#1172)\n\nInternal refactor to merge the `AppendUploader` for incremental uploads\ninto the existing `Uploader`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-29T15:02:02Z",
          "tree_id": "948984450c148893795a5b131a77a36e4cff8d4c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54b57c47df1fe38296267495f3820260a6b72775"
        },
        "date": 1732899720624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3129.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3155.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3242.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32687.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3356.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 358.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3016.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 238.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3339.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11575.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.15234375,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733138297749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3295.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3228.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3171.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3356.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21880.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3471.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3394.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3243.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3186.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.8828125,
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
          "id": "59f7ba56f45c7ff6834b79853c12c2b6fcafa216",
          "message": "Update documentation for supported bucket types (#1176)\n\nUpdate the documentation to enumerate supported bucket types.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T10:04:26Z",
          "tree_id": "344cf5fb725eedee6eeb53ccca9cc4c1dd4f7f5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59f7ba56f45c7ff6834b79853c12c2b6fcafa216"
        },
        "date": 1733140876925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3405.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3260.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3337.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3290.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15743.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 354.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3307.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3397.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 203.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3260.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3321.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.38671875,
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
          "id": "d14655adf91c734ef21f5dcdeeeed110e13de68a",
          "message": "Release v1.13.0 (#1178)\n\nBump version to 1.13.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T12:00:14Z",
          "tree_id": "cd1c649007a4f066ef26d85a0659a38f30fe85b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d14655adf91c734ef21f5dcdeeeed110e13de68a"
        },
        "date": 1733147887710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3405.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3573.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3456.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3219.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25263.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3227.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3348.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3347.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3907.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.765625,
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
          "distinct": false,
          "id": "353a74782af91d0ee48424519d434e16bfb2bda9",
          "message": "Update hashbrown 0.15.0 to 0.15.2 (#1184)\n\nUpdate hashbrown 0.15.0 to 0.15.2 to fix\nhttps://rustsec.org/advisories/RUSTSEC-2024-0402\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:24:04Z",
          "tree_id": "89193b05da07694243d0c4aba0de26d085076c2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/353a74782af91d0ee48424519d434e16bfb2bda9"
        },
        "date": 1733332891512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3374.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3305.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3127.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3380.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32602.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3233.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3263.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3170.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 18719.00390625,
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733334455093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3365.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3091.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3414.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3438.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23337.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 358.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3413.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3278.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 16668.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.66796875,
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
          "id": "7a675cd70380f27849458663f617035784bd7fe9",
          "message": "Update get_object_attributes test to account for default checksum (#1185)\n\nThe [improved support for object integrity\nchecks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums)\nthat is being rolled out in Amazon S3 means that GetObjectAttributes\nreturns a `CRC-64NVME` object checksum even when no checksum was\nspecified when the object was uploaded.\n\nThis change removes the expectation of an empty checksum that was\ncausing a test failure in some regions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T10:54:40Z",
          "tree_id": "ca9e6a33aad4186a5bfe2dd78cc439c603c764cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7a675cd70380f27849458663f617035784bd7fe9"
        },
        "date": 1733403272709,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3472.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3267.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3256.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3251.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15338.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3080.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3217.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3353.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11766.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.2265625,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733404515035,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3152.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3350.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 342.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3391.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3473.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27958.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3305.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3294.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2906.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3260.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.39453125,
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
          "id": "3c7fb3fcfe485d397ec6fb65f25596569fc584d8",
          "message": "Simplify get_object by waiting for response headers (#1171)\n\n`S3CrtClient::get_object` was originally implemented so that it would\ncomplete immediately and return a `GetObjectRequest` implementation\n(extending `Stream`) to retrieve body parts. Any error from the S3\nrequest would be returned through the stream.\nWe recently added additional methods (`get_object_metadata` in #1065 and\n`get_object_checksum` in #1123) to the response that rely on the headers\nreturned by the (first) `GetObject` request. The new methods required an\nasync signature and a complicated implementation in order to account for\nfailures and they still do not correctly report accurate error\ninformation in some cases.\nWith this change, we modify `get_object` to await for response headers\nbefore returning either an error or a `GetObjectResponse` (note the name\nchange) implementation. The ergonomics of `get_object` are improved:\n* `await`ing the initial call can already return some errors (e.g.\nbucket/key not found),\n* `get_object_checksum` and `get_object_metadata` are now sync\nfunctions.\n\n### Does this change impact existing behavior?\n\nYes, `get_object` behavior is different, `get_object_checksum` and\n`get_object_metadata` signatures have changed, and `GetObjectRequest`\nwas renamed to `GetObjectResponse`.\n\n### Does this change need a changelog entry?\n\nYes, it requires a breaking change entry for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T20:48:17Z",
          "tree_id": "616cd7bda6e7117129f22aebaa3dc5aace410008",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c7fb3fcfe485d397ec6fb65f25596569fc584d8"
        },
        "date": 1733439019295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3437.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3344.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3269.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3277.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27192.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3144.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3478.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3205.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3364.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.52734375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}