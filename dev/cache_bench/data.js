window.BENCHMARK_DATA = {
  "lastUpdate": 1751370048543,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "5f962cbdf5c3a5beafb61cebb7549b84db1a1acd",
          "message": "Add documentation for fstab feature (#1441)\n\nAdds documentation for new fstab feature\n\n### Does this change impact existing behavior?\n\nNo\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:53:57Z",
          "tree_id": "72bc0427a52496d37124452a1b6bd474a52d2619",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5f962cbdf5c3a5beafb61cebb7549b84db1a1acd"
        },
        "date": 1748613227673,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1257.24736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1945.723046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.83271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.19091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 520.44150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.3375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 236.12763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3531.22373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4026.56220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1183.53154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1216.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1311.5876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 863.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1025.2287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 998.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1036.18671875,
            "unit": "MiB/s"
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
          "id": "da20daa33c97be569113890736ac62049840b8ff",
          "message": "Release v1.18.0 (#1448)\n\nPrepare for v1.18.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T12:14:04Z",
          "tree_id": "e779a1e594bfbd997857e9daa9b2a42ae0351cf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/da20daa33c97be569113890736ac62049840b8ff"
        },
        "date": 1748614383544,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.42939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2004.616796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.85498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1468.3890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.98994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 416.81376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.003515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.95322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3404.0056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4080.89599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.4478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1166.5271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1345.4337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 896.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1262.61064453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1010.4181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1111.01328125,
            "unit": "MiB/s"
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
        "date": 1748623669603,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1227.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.9283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 796.73125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1467.76806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 445.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.85810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 287.36318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3374.160546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4021.14033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1215.51943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1157.5681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 998.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 798.50615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1063.03896484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1052.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1314.25390625,
            "unit": "MiB/s"
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
        "date": 1748873081499,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1231.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 812.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.635546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.709375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 464.92216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 280.92841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3415.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3977.829296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1193.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.26044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 858.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1021.57138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1131.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1082.09609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 949.326953125,
            "unit": "MiB/s"
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
        "date": 1748962653522,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.94609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1952.0767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.7796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1500.5212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.23212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 401.83193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.63916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.25927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3318.38388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4094.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1177.15048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1152.52646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 809.38681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1243.1337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1195.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 984.5310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1255.57919921875,
            "unit": "MiB/s"
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
        "date": 1749049760457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1247.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.8099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.28935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.8552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.9982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.22841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3396.15283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3991.51162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1176.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.68759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 827.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 817.35224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1078.46357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1153.29580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1263.3265625,
            "unit": "MiB/s"
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
        "date": 1749133847293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.34287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1950.64033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.098046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.8373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 568.833203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.50361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.19111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3342.69716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3967.55478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1154.00078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1194.8458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 795.8921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1020.88857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1314.85361328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1040.84169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1306.12119140625,
            "unit": "MiB/s"
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
        "date": 1749491486898,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1246.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1946.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.55791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1501.6501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.5994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.78466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 340.5662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3523.10419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3944.60712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1196.8306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1298.2884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 893.67724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1146.66376953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1055.796484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1103.3650390625,
            "unit": "MiB/s"
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
        "date": 1749502795786,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.54404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1936.33583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.5962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.69853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 400.25732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.37568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3299.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.56259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.9939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.9048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 830.9759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1142.61123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1034.6568359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1174.59287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1352.92939453125,
            "unit": "MiB/s"
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
        "date": 1749558192189,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.43798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1938.0841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 759.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.46806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.2755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.22880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3389.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4026.13779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1232.70537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1176.65458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1418.171484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 924.9779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.15859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 987.2455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1193.90791015625,
            "unit": "MiB/s"
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
        "date": 1749581660014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.88984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2003.54951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.04130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.85107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 478.929296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.3951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.65810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3527.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4034.467578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1174.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1138.96591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 872.70615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 953.36357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.09892578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1067.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1165.3908203125,
            "unit": "MiB/s"
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
        "date": 1749746884566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1222.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1941.88984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.75068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1495.103125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.04677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 389.7615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.95283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3631.88857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4068.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.9501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.11826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 753.82099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 824.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 953.3298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1159.2017578125,
            "unit": "MiB/s"
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
        "date": 1749831022842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.21123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1966.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.73740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.17041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.4693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 323.1021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3411.35458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4098.1578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1156.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1321.6896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 842.234765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1061.76337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1004.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1028.92626953125,
            "unit": "MiB/s"
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
        "date": 1750322633711,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1944.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.16826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.68095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.0236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 446.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.66455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3684.4443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4002.65947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.085546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.2923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1326.956640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 989.120703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1085.8578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1088.61591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1139.71494140625,
            "unit": "MiB/s"
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
        "date": 1750444051767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.40673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.81181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 777.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.14794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 519.5837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.56376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3427.04697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4044.14140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1228.73330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.6724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1173.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1168.81572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.591015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 980.89296875,
            "unit": "MiB/s"
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
        "date": 1750755838785,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1238.52275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1950.80771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.54560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.60517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.91787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.70224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3329.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3986.16533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.82216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1166.42666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 861.13076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 949.5779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1219.3080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1043.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1336.73681640625,
            "unit": "MiB/s"
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
        "date": 1750775302075,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1246.94052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1970.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.79921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.22509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 269.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 386.9849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.610546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3336.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4072.94794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1185.83564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1164.3865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1325.81884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1019.523828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1268.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.1439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 926.43818359375,
            "unit": "MiB/s"
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
        "date": 1750843838164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1949.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.81669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1498.5755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.73388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 572.85205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.93310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3423.7859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4090.88486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1211.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 886.7123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 832.0884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1066.902734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1189.40068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1012.2125,
            "unit": "MiB/s"
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
        "date": 1750868208180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1232.55009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.6544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.49892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.0392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 518.733203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.64482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 235.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3425.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3972.14794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1219.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1157.8591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1378.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1271.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1337.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1070.98046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1061.832421875,
            "unit": "MiB/s"
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
        "date": 1750925432165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1228.4310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1963.43603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.2361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 572.95966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.230078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 233.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3668.19580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3981.21943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1217.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1187.9982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 840.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1222.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1151.70439453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1036.27529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1212.7296875,
            "unit": "MiB/s"
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
        "date": 1751013778141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1243.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1954.82705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.0376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.56162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.31025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.07353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.93115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 328.28369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3373.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3939.25625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1192.540625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1206.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1245.79384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1337.4365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1062.5650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1250.573046875,
            "unit": "MiB/s"
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
        "date": 1751023797461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1234.34677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2061.6224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.36708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1506.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 256.1537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.5564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.13564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.6359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3474.9392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3926.3025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1181.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 803.492578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 901.19599609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 977.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1697265625,
            "unit": "MiB/s"
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
        "date": 1751029653669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1240.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1983.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.18408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1470.76396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 258.02080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 415.870703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.1900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3416.61904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.7240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1176.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1311.52158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.844921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 879.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.82919921875,
            "unit": "MiB/s"
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
        "date": 1751036551452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1230.290234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.46376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 257.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 435.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.94697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3371.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4064.3927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1448.312890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.55595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 943.51572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21376953125,
            "unit": "MiB/s"
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
        "date": 1751044592730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.47431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1970.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 770.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.61875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 264.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 453.91533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.6876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.77353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3390.06923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3917.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1039.343359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.331640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 975.5080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.96416015625,
            "unit": "MiB/s"
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
        "date": 1751050983877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1926.07529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 744.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.63369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.19326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.7052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3545.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3996.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1207.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.02783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 786.47919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1024.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1076.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1173.18349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1135.399609375,
            "unit": "MiB/s"
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
        "date": 1751051065288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1220.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1951.7794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.53193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.0603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 425.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.96865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.51181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3356.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.1052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1162.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.99765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 914.25908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 873.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1225.34375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1105.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 984.29931640625,
            "unit": "MiB/s"
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
        "date": 1751051193427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1938.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.12744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.94677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 460.18251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3501.14912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3975.42119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1189.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1372.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1307.28251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1284.52275390625,
            "unit": "MiB/s"
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
        "date": 1751288066986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1294.63125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1992.12734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.11083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 474.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.5509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.7337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3369.426953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4032.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1455.9357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1312.80791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1420.873828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1328.72412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1106.45009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.25458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1053.11162109375,
            "unit": "MiB/s"
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
        "date": 1751370047579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1286.332421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2032.5958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.0525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.29892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.1646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 392.92958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.8533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.808984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3418.99619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4358.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1324.45361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.64619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1297.27958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.06904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1041.0298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1083.16611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 964.71357421875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}