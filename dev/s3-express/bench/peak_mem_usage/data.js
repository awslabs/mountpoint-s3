window.BENCHMARK_DATA = {
  "lastUpdate": 1751052121114,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "ca60ca2153664d92d6817a7de07f5bbac4522fbf",
          "message": "Fix changelog for v1.18.0 (#1449)\n\nFixes changelog for v1.18.0 release\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChanged\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T13:33:24Z",
          "tree_id": "8f1d5153ae3d609f1acd010ba43ca2d93e8d69f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca60ca2153664d92d6817a7de07f5bbac4522fbf"
        },
        "date": 1748619946805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16521.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28392.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37444.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38385.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36728.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13101.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13552.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12885.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.66015625,
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
          "id": "2eb41bc55469b66a05881f85ec214b0049268f26",
          "message": "Update prefetcher wait_for_read_window_increment to drain queue (#1425)\n\nWhen reviewing the prefetcher logic, the\n`wait_for_read_window_increment` method call in the S3 part stream was\nidentified as a potential issue. The logic currently pulls only one\nincrement from the queue of read window increments when large amounts of\ndata are being fetched. Today, this is likely not to cause an issue as\nthe read increments are much larger than the size of the parts emitted\nby `part_stream`. However, it would cause issues if there were changes\nhere in future that resulted in increments smaller than those parts.\n\nThis change updates the method to drain all available increments and\nreturn the new value to the caller. This ensures that the backpressure\nmechanism doesn't wait for each part before processing only one window\nincrement event. A new test is added to verify this behavior is\nguaranteed.\n\n### Does this change impact existing behavior?\n\nThere should be no impact, other than fixing logic that currently is\nunlikely to introduce performance changes outside of very large parts\nsizes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there is no known customer impact of the current issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-30T14:47:46Z",
          "tree_id": "ad81345f3d3e005a5b68c3418e9c55fda5b41aaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2eb41bc55469b66a05881f85ec214b0049268f26"
        },
        "date": 1748624478974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14015.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28233.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38369.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38062.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38935.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13138.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10234.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13636.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.296875,
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
          "id": "b2d1e773481408c95e9e36dd7588b0c53f7cbbc6",
          "message": "Fstab tests: Ignore empty directory (#1443)\n\nCurrently, our fstab tests can fail if run in an environment where the\noutput dir does not exist.\nThis PR changes the `rm -r` call to a `rm -rf` to ignore cases where the\ndirectory is empty.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-30T14:50:18Z",
          "tree_id": "178e0afe47f45a9481ecd6e6de7e1ddb96bf2084",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b2d1e773481408c95e9e36dd7588b0c53f7cbbc6"
        },
        "date": 1748624495400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16122.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24231.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35193.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 385.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37995.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41527.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14139.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14715.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12936.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.97265625,
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
        "date": 1748626380126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16745.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27408.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39358.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 230.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39871.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35724.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12650.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13777.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12235.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219.0234375,
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
        "date": 1748873900475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13307.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24085.7265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 47282.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 223.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37840.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40339.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11416.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10231.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11914.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 383.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.63671875,
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
        "date": 1748963519681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15842.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26549.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43646.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 183.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39587.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40957.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12422.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11993.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10103.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 264.609375,
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
        "date": 1749134728128,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17269.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27025.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40685.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34633.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37371.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12715.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12416.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13272.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.78515625,
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
        "date": 1749492381425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15271.453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26780.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40529.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 189.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 329.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 236.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36663.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37208.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14789.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12063.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12793.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.67578125,
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
        "date": 1749559001638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14265.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25442.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38307.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 299.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 317.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 240.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33142.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40103.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12344.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13546.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13447.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.3515625,
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
        "date": 1749582527926,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11740.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28806.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40701.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 304.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 325.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 235.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38750.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42377.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13380.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12876.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12538.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 422.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.52734375,
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
        "date": 1749747762938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13817.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25558.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42530.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 307.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 204.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 239.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35090.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39296.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13608.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13691.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10571.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 373.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.1015625,
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
        "date": 1749831852270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14222.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25222.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43540.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 303.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 160.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 316.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 232.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40061.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40361.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11603.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10599.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11254.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.890625,
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
        "date": 1749838269435,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14268.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27109.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39971.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 193.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 426.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37354.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39188.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13219.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11957.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13798.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.0859375,
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
        "date": 1750297444426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15538.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22404.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38069.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32009.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35451.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12439.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11273.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13434.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 348.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.2109375,
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
        "date": 1750323623558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15978.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26433.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43080.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 158.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40291.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32948.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13350.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13750.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10491.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.93359375,
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
        "date": 1750327038933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14028.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27570.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35013.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 219.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33407.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37890.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13045.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15456.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13576.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.03125,
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
        "date": 1750444939029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16122.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28216.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42016.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 181.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 323.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34697.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37345.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13397.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12356.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11960.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.7890625,
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
        "date": 1750756708790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13003.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23066.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41428.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 228.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35629.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 410.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38209.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13412.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14329.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10261.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.64453125,
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
        "date": 1750776117457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13721.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27359.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39745.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 138.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 191.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 321.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 239.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36642.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41160.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13409.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11244.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13978.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.0390625,
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
        "date": 1750844691605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15872.80859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27609.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39737.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 307.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 331.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 242.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36733.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40899.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12364.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12276.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10868.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.15234375,
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
        "date": 1750869019629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14357.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23324.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37057.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35497.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37428.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12645.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13499.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14567.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 421.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.875,
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
        "date": 1750926241434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15481,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23518.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38593.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 163.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 328.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 236.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35639.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37651.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13492.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13485.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10133.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.8203125,
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
        "date": 1751014670737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14946.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27636.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38498.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 305.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 183.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 320.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33495.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32024.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10710.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13606.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11814.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.66796875,
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
        "date": 1751024624253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13787.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26198.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40160.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 156.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 324.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 238.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34953.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40504.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13741.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10200.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12003.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 221.3125,
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
        "date": 1751030407979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14786.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25662.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39505.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 143.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 312.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 327.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 241.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35747.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32987.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13348.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14458.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11264.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 365.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.13671875,
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
        "date": 1751037282717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15990.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25012.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42684.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 299.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 324.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 241.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39236.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40011.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13594.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10661.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12528.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.91015625,
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
        "date": 1751045377397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13917.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22057.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39668.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 315.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 317.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 233.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35756.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36063.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12425.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11961.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10644.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0390625,
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
        "date": 1751051773418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13425.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22717.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36259.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 312.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 317.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 243.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33069.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39573.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12901.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12004.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12388.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 233.7890625,
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
        "date": 1751051951649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15735.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25025.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 44623.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 327.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 238.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 241.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35397.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41645.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11827.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12604.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13369.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.9765625,
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
        "date": 1751052121059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15519.08203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23853.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39339.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 205.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 319.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 240.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 240.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34697.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38086.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13451.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11542.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11673.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.23046875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}