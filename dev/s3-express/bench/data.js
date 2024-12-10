window.BENCHMARK_DATA = {
  "lastUpdate": 1733834304750,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
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
        "date": 1732546421160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5140.26767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4706.120410156251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5830.6736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.82587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.731640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.2564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.3677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6054.76416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.6501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5074.715625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.27216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2098.929296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.89912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1419.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1317.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.18095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1605.61337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.57685546875,
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
          "id": "c66546af1b31b1908d74ecd82c403142ef728aa2",
          "message": "Release v1.12.0 (#1166)\n\nBump version to 1.12.0\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo, just added a section for the release today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T13:17:49Z",
          "tree_id": "a2988234c7d2f7f37305f6eeb6d0c2cc270bbe91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c66546af1b31b1908d74ecd82c403142ef728aa2"
        },
        "date": 1732548654936,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5248.3525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4708.7896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5821.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.3255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.92880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.52841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 128.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.20986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.52509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6063.0966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.21005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5182.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.731640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1825.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.95458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1594.53134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1224.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1577.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.5322265625,
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
          "id": "e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e",
          "message": "Remove old TODO (#1167)\n\nThe issue has already been addressed in Cancel S3 requests when dropped\n[#794](https://github.com/awslabs/mountpoint-s3/pull/794).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T17:20:29Z",
          "tree_id": "97be414ede808c088863bc696d7602794a2b26f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e"
        },
        "date": 1732563236781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5246.276953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4565.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5698.239160156249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.49775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.194140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.25341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.79853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6103.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.79599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5072.59609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.24130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1765.07734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1690.307421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.793359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1774.713671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1047.8185546875,
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732626852151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5183.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4655.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5767.8865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.6623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.51240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.2466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.9943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.586328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.9603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6026.1732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.9884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5094.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.932421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1963.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.56318359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1280.37705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.9875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.60966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1037.661328125,
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
          "id": "4ec847aa49b05c04b072540a50253139e7e6dfb1",
          "message": "Upgrade cargo-deny action, remove deprecated deny configurations (#1168)\n\nThe `cargo-deny` action we depend on release v2 in August, and with it\nmade breaking changes. Dependabot was unable to merge due to these\nbreaking changes: https://github.com/awslabs/mountpoint-s3/pull/969/\n\nThis change removes the deprecated configurations. `cargo-deny` now\nmarks all of those we configured as denied rather than allowing the\nviolations to be downgraded to warnings or allowed. This impacts us only\nfor 'unmaintained' crates which is fine, if needed we can always create\nan exception entry.\n\n### Does this change impact existing behavior?\n\nThis is a CI change only. We upgrade, removing unused and deprecated\nfields. Unmaintained crates will now fail CI.\n\n### Does this change need a changelog entry?\n\nNo, there is no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T11:16:25Z",
          "tree_id": "1d1cb34260301af398846e1b8de7766a9a4eced7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ec847aa49b05c04b072540a50253139e7e6dfb1"
        },
        "date": 1732627771951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5230.225390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4649.98837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5799.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.84140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.10185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.31337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.14794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.424609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6167.66591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5060.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.53642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2130.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.48310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1482.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1538.83095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.1513671875,
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
          "id": "13687edd9f9ff04b11ac2cb932a0ef5d3033a57b",
          "message": "Add additional Rustdoc to incremental upload module (#1169)\n\nJust adding more Rustdoc to help give pointers and get new readers up to\nspeed.\n\n### Does this change impact existing behavior?\n\nNo, documentation / style change only.\n\n### Does this change need a changelog entry?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T14:18:55Z",
          "tree_id": "af4a94cb2c47da8c87e41f2344452205339d8080",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13687edd9f9ff04b11ac2cb932a0ef5d3033a57b"
        },
        "date": 1732638758650,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5199.734082031249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4642.89853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5791.9587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.46865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.66318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.191015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5959.43935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.548046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5101.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.0708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2144.99970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.31728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1453.31875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1227.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.75244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1539.170703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 998.1908203125,
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
          "id": "896a10bb9c6c70d6928c19d04f4bd4168b289cd8",
          "message": "Fix flaky write_with_sse_kms_key_id_ok test (#1140)\n\nFixes the flakiness of write_with_sse_kms_key_id_ok test, which was\ncaused by not properly unmounting and dropping child.\n\nThis is not a breaking change; no changelog entry required (as this just\nfixes a test).\n\n\nBefore this change, this test fails in ~10 out of 100 runs, after this\nchange it fails 0 times out of 100 runs.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-26T14:37:17Z",
          "tree_id": "0d9a1126b207277215874e303deb01a097575a2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896a10bb9c6c70d6928c19d04f4bd4168b289cd8"
        },
        "date": 1732639851125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5202.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4601.7388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5738.2798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.82626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.81484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.101171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.7810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.59091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.778125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.41962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6147.27890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.41279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5111.23798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.34287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1851.60185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.02490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1839.995703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1473.02001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.428125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1554.0974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.3236328125,
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
          "id": "654d86027265fafc87c5064cfe3a521faf0f11d4",
          "message": "Fix flaky out_of_order_write test (#1170)\n\nThe `out_of_order_write` tests failed to account that in incremental\nupload mode the previously written content of a file could be already\nuploaded when a subsequent `write` fails (as expected in the test). In\nthis case, the upload would occasionally be triggered by a `flush` call\nas a consequence of the test runner process being forked.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-27T14:25:07Z",
          "tree_id": "522ada25736c28165de1b678dc8aabe80745bc1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/654d86027265fafc87c5064cfe3a521faf0f11d4"
        },
        "date": 1732725479638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5208.51748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4617.59853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5758.07177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.67880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.59033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 134.1125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.80947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.89912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.69931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5790.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.51865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5095.53037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.26240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2045.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1487.55576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1252.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.76474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1761.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1079.27353515625,
            "unit": "MiB/s"
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
        "date": 1732837210868,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5225.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4614.46728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5854.02470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.68720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.90966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.4908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6039.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5161.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 521.08671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1804.03681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.80341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1805.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1307.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.40791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1837.42548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.5208984375,
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
          "id": "54b57c47df1fe38296267495f3820260a6b72775",
          "message": "Merge AppendUploader into Uploader (#1172)\n\nInternal refactor to merge the `AppendUploader` for incremental uploads\ninto the existing `Uploader`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-29T15:02:02Z",
          "tree_id": "948984450c148893795a5b131a77a36e4cff8d4c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54b57c47df1fe38296267495f3820260a6b72775"
        },
        "date": 1732900606060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5252.25341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4631.53984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5787.8732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.0923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.34677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.00439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.48837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.54130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.20498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6109.02978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.19541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5066.8078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.7994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2010.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.22041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1561.71552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1305.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.8501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1659.2720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.660546875,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733139169028,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5191.487109375001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4582.145703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5767.098339843749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.77421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.183984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 127.91533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.0232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.69990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.8380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6310.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5137.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.83173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.00947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1495.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1306.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1746.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.642578125,
            "unit": "MiB/s"
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
        "date": 1733141748139,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5169.01259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4633.894140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5804.187695312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.6361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.08271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.51162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.7990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5903.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5096.20400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.08427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2070.5296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.08720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1550.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.347265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1174.63017578125,
            "unit": "MiB/s"
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
        "date": 1733148726171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5118.868359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4687.14521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5849.759375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.83876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.03564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.8197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.075,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.84755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.5431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5943.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.05361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5140.3537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.7931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2095.68544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.6046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1760.655859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1502.379296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.12294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1846.8052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1000.7951171875,
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
          "distinct": false,
          "id": "353a74782af91d0ee48424519d434e16bfb2bda9",
          "message": "Update hashbrown 0.15.0 to 0.15.2 (#1184)\n\nUpdate hashbrown 0.15.0 to 0.15.2 to fix\nhttps://rustsec.org/advisories/RUSTSEC-2024-0402\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:24:04Z",
          "tree_id": "89193b05da07694243d0c4aba0de26d085076c2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/353a74782af91d0ee48424519d434e16bfb2bda9"
        },
        "date": 1733333752461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5167.20380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4562.55986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5781.041796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.60068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.86279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.12333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.9798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.44599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.55966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5935.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.75771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5113.5671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.71953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1969.82783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.86376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1666.53759765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.89521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.205859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1801.9880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.918359375,
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733335370452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5186.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4617.7103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5803.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.173046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.30078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 126.2494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.74765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.90673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.44716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6147.6509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.7443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5143.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 510.5970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1801.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.0515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1522.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1311.12626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.70166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1846.84970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.070703125,
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
          "id": "7a675cd70380f27849458663f617035784bd7fe9",
          "message": "Update get_object_attributes test to account for default checksum (#1185)\n\nThe [improved support for object integrity\nchecks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums)\nthat is being rolled out in Amazon S3 means that GetObjectAttributes\nreturns a `CRC-64NVME` object checksum even when no checksum was\nspecified when the object was uploaded.\n\nThis change removes the expectation of an empty checksum that was\ncausing a test failure in some regions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T10:54:40Z",
          "tree_id": "ca9e6a33aad4186a5bfe2dd78cc439c603c764cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7a675cd70380f27849458663f617035784bd7fe9"
        },
        "date": 1733404071949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5204.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4611.51396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5793.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.00302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.07568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.1953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 130.57880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.6732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.31572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.43544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5971.17041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.28720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5153.82978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.84951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1763.73974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.42880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1437.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1219.08251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.6736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1616.6548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1018.90009765625,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733405317639,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5243.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4644.360546874999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5782.878515625001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.9208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.3986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.885546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.153125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.44150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.6810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6128.68369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5183.6716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.52529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1828.31513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1429.446875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1298.3505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.942578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1727.5923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.80439453125,
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
          "id": "522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db",
          "message": "Optimise shared cache for single read use cases (#1163)\n\nUse an optional BytesMut to avoid copying data on the first write. \n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-06T10:43:24Z",
          "tree_id": "5d9ba45ba6cee2c55f8b4dcce95deeb0283cc7bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db"
        },
        "date": 1733489715229,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5163.89541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4599.47412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5836.58466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.905078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.5111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 126.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.93466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.32431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.6693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6297.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5168.62783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 509.94306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1876.859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.08671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1474.82958984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.70224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1610.587109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.33076171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "936f4c31934bd87f7085e9462ad18611dd857aa6",
          "message": "Add errno to fuse_error macro (#1189)\n\nAdded errno to fuse_error macro\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-06T16:46:48Z",
          "tree_id": "f342dd3d76e806d6b44311523d611c02b17736b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/936f4c31934bd87f7085e9462ad18611dd857aa6"
        },
        "date": 1733511610535,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5170.6515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4606.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5798.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.42431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.09130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 132.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.8646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.41982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.11435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6028.096875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.34892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5161.23544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.792578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2123.9103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.16201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1491.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1288.35068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.75478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1484.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1040.2642578125,
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
          "id": "5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a",
          "message": "Update cargo dependencies and allow-list Unicode-3.0 license (#1193)\n\nRun `cargo update`. In particular, update crate `idna` from version\n`0.5.0` to `1.0.3`, in order to address\n[RUSTSEC-2024-0421](https://rustsec.org/advisories/RUSTSEC-2024-0421).\n\nAlso add \"Unicode-3.0\" to the list of allowed licenses in deny.toml.\nRequired by the new dependency:\n```\nicu_normalizer v1.5.0\n└── idna_adapter v1.2.0\n    └── idna v1.0.3\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T10:21:41Z",
          "tree_id": "5a514b796dae0cf82b75b70d8c6f9dbf2601f511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a"
        },
        "date": 1733834304108,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5222.723828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4685.47568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5782.194726562499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.42060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.62490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 131.86015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.64287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.27548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.38857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.5365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6085.733984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.01826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5181.86181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.53359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1778.97841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.3203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1464.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.31123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1552.29306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.5822265625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}