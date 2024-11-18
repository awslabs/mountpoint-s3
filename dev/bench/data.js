window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "89e13a1f8dc6656de17da919f5900df192964ac8",
          "message": "Add `Headers.get_as_optional_string` and `get_as_string` (#1114)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactors `Headers` to have two new public methods:\n`get_as_optional_string` and `get_as_string`.\n\nRefactor `head_object` and `put_object` to use new header methods rather\nthan custom implementations\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nChanges log format slightly by making \"Header string was not valid\" text\npart of HeadersError.\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-07T15:11:54Z",
          "tree_id": "8240ed2a73cace705b9d2857dd98fb9a50f8c883",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89e13a1f8dc6656de17da919f5900df192964ac8"
        },
        "date": 1730999361355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.01591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.1705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.706640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.66962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.86328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5995.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2138.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.01435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1944.5873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.10185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1544.7689453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1459.26875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1682.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1050.736328125,
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
          "id": "9d48a7207dc0feec9d2176e6e86f40350b0ddf84",
          "message": "Add GetObject support for object metadata (#1065)\n\n## Description of change\n\n<!-- Please describe your contribution here. What and why? -->\n\nAdds support for fetching user defined object metadata in GetObject\ncalls.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\nNo\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, for mountpoint-s3-client.\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-07T15:28:42Z",
          "tree_id": "86102dca7576a85c9e8f02354ce72d9c66efead3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d48a7207dc0feec9d2176e6e86f40350b0ddf84"
        },
        "date": 1731000358611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.56787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.90166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.5357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.59052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.98564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5988.59619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2163.834375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 103.4109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1759.75517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.8326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1395.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1233.20693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.06552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.2125,
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
          "id": "e3540671baac9d34d280e6815f3d58778dac7eed",
          "message": "Ensure that the file system in tests is unmounted before removing the temp dir (#1116)\n\n## Description of change\n\nEnsure that the file system in integration tests is unmounted before\nremoving the temporary directory. The introduction of `TestSession` in\n#1096 inadvertently changed the order in which the temporary directory\nand the FUSE session are dropped. Previously it was hidden in the\ndeclaration order. This change makes it explicit in `drop`.\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-07T17:03:39Z",
          "tree_id": "e43376caad9c90efa6772986f7d033c45ce6ea68",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e3540671baac9d34d280e6815f3d58778dac7eed"
        },
        "date": 1731006002591,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.299609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.10234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5720.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.15654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2080.5470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.92998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.03173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1380.12158203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1385.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.61337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1581.02275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.9974609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@hagemeier.ch",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfb9a4183a3fe35c34effd2adf7a3232d2717092",
          "message": "Add debug print for inode number in mknod (#1111)\n\n## Description of change\n\n`mknod` now prints the newly created inode number. This can help with\ntracing the lifetime of an inode between FUSE requests.\n\n## Does this change impact existing behavior?\n\nNo, small debug log addition only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: Christian Hagemeier <>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-08T13:52:45Z",
          "tree_id": "a7f83fab59b361993e6e7e7cce0adc4510a6daa8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bfb9a4183a3fe35c34effd2adf7a3232d2717092"
        },
        "date": 1731081035340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.637109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.00361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 5.12353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.797265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.72578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.28056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.5833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2119.063671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.5369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1716.596484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.3185546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.85791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1741.81708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.16015625,
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
          "id": "c4ec299af6f2dd4076f5942fec086fad49143c8a",
          "message": "Fix ANSI escape codes being included in log files on macOS (#1115)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nBefore this change, log files written on macOS would include ANSI escape\ncodes (#1050). It's unclear why this is not reproducible on Linux.\n\nThis change reorders the logging layers such that the console layer\n(with ANSI) is evaluated last, and so the mutations to add ANSI escapes\nis not applied when writing log files. This issue appears related:\nhttps://github.com/tokio-rs/tracing/issues/658.\n\nRelevant issues: #1050 \n\n## Does this change impact existing behavior?\n\nThis fixes log files written on macOS (which is an unsupported\nplatform).\n\n## Does this change need a changelog entry in any of the crates?\n\nThis is a minor bug fix on an unsupported platform, so no changelog\nentry needed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-08T14:23:37Z",
          "tree_id": "40f87fdb33e428eb9082b185ca050405fbcffb59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c4ec299af6f2dd4076f5942fec086fad49143c8a"
        },
        "date": 1731082746208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.29013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 6.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6124.64208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.4373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2191.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 103.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1856.60244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1530.52099609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1273.25,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.68671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1740.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.271875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d0188555c07e3d75b0b7495d03a2520713d7bf1",
          "message": "Use separate endpoint URLs for benchmark CI (#1112)\n\n## Description of change\n\nThis allows integration test workflows and benchmark workflows to run\nagainst different endpoint URLs.\n\n## Does this change impact existing behavior?\n\nNo, only CI change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-08T16:24:29Z",
          "tree_id": "0add5a30ae8c656eb5143033dc7f888143a432b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d0188555c07e3d75b0b7495d03a2520713d7bf1"
        },
        "date": 1731090425513,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.08603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.37587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.20712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.35458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.61845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.20986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.31123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5627.98916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.47548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2096.96044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.87470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1957.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.2125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1369.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1254.293359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1436.15859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.61689453125,
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
          "id": "b644b7e58d06c37427fb9cb5ea5453614806f5e3",
          "message": "Refactor `ObjectClient.get_object` to use an `GetObjectParams` parameter (#1121)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactor `ObjectClient.get_object` to use an `&GetObjectParams`\nparameter.\n\nMigrates the two existing parameters, `range` and `if_match` to\n`GetObjectParams` and changes all call sites.\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nYes. Breaking change in mountpoint-s3-client. \n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-11T00:02:13Z",
          "tree_id": "475a0f75b91d3155a61eb67dd3c7160b92e275d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b644b7e58d06c37427fb9cb5ea5453614806f5e3"
        },
        "date": 1731290372277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.54033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.996875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.97958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.40166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5851.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.49365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2124.7775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.15439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.36123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.77255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1374.6326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1194.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.593359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1592.197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.2798828125,
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
          "id": "ef011228e62945645a312012d5e39392f2d75e70",
          "message": "Enable metric emission in benchmark runs (#1120)\n\n## Description of change\n\nWe opted to disable debug logging in #1104 as this may impact\nperformance, however it was not known that the memory usage monitoring\nwas dependent on metrics being emitted implicitly due to `--debug`. This\nchange restores metrics in logs to fix the peak memory usage\nbenchmarking.\n\nRelevant issues: #1104\n\n## Does this change impact existing behavior?\n\nNo change to Mountpoint.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-11T15:14:53Z",
          "tree_id": "97c865f3407f6be22c87a7bb112b0d8618b93eba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef011228e62945645a312012d5e39392f2d75e70"
        },
        "date": 1731345095015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.7001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.7943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5932.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.26162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2167.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 102.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1983.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.72822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1428.62373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 988.34912109375,
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
          "id": "e544f8f6c3d8b3eb7d7ef77a30afad44e9bc0ab0",
          "message": "Add support for getting object checksums in GetObject (#1123)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\n- Adds new method `get_object_checksum` to `get_object` to retrieve the\nwhole object checksum.\n- Adds new parameter `checksum_mode` to `GetObjectParams` to configure\nif we want to request checksums from S3.\n- If checksums aren't requested, `get_object_checksum` returns an error.\n- Refactor `S3CrtClient` to store a cell of the object headers rather\nthan metadata.\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: <!-- Please add issue numbers. -->\n\n## Does this change impact existing behavior?\n\nNo\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nYes\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-11T15:27:43Z",
          "tree_id": "94e98dac006159667d8dc0d4b62f44ca8c001033",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e544f8f6c3d8b3eb7d7ef77a30afad44e9bc0ab0"
        },
        "date": 1731345918745,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.85400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 24.03076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.88564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.8462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 6.5650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6007.29775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.104296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2114.374609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 105.741015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1796.10869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1593.17822265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1252.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.66201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1736.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.1216796875,
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
          "id": "822712cf8d11227e1572ce4196ab1cc858f8d90f",
          "message": "Avoid joining the fuse background thread when dropping test sessions (#1124)\n\n## Description of change\n\nThe change #1116 fixed the order in which the file system was unmounted\nand the temporary mount directory was removed. In order to unmount, we\nadded a call to `join()` on the FUSE session, which also waits for its\nbackground thread to join and can occasionally fail with a\n`ECONNABORTED` (ConnectionAborted, \"Software caused connection abort\")\nerror.\nThis change addresses the issue by only dropping the FUSE session,\nwithout waiting for the thread to terminate.\n\n## Does this change impact existing behavior?\n\nNo. Only affects tests.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo. Only affects tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-11T18:06:23Z",
          "tree_id": "fd1c0cef4022ce67bed2f7da65541170a65d7fa3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/822712cf8d11227e1572ce4196ab1cc858f8d90f"
        },
        "date": 1731355361778,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.5072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.173046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.93447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.7423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.12255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5716.7650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.14052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2114.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.39833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.8767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1394.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1336.45947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1401.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.3966796875,
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
          "id": "f8ca2ba4eb6cbc2009ca318ab4342b95ab7c3f9e",
          "message": "Update vendored fuser to daad5673 (#1129)\n\n## Description of change\n\nThis change updates the vendored fuser version. The changes include an\namended README to include information on how to maintain the fork, as\nwell as rebasing our patches on top of the upstream fuser repository.\n\nThe main changes we're interested in here is to eliminate many of the\nbuild warnings that are currently showing up in pull requests.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo change in behavior of any crate.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo change log needed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-13T13:15:53Z",
          "tree_id": "63be6bd94b20cf8230dfb36fad6ef365abbc7e87",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f8ca2ba4eb6cbc2009ca318ab4342b95ab7c3f9e"
        },
        "date": 1731510769593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.93291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.46611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.4845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.196875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.45947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.40947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6004.00419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.48505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2062.18984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1835.53095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1433.48525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1390.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.52548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1562.05869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.8201171875,
            "unit": "MiB/s"
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
          "id": "1c6f819c9365e01e5ba1dda5ec585129c17ca0e6",
          "message": "Lay out files using fio in the benchmark. (#1108)\n\n## Description of change\n\nThis makes the benchmarks more self-contained, creating the state that\nthey need to run rather than relying on pre-created state (potentially\nwith different/unknown mount options and/or object properties).\n\nIt does change behaviour a little: previously the multi-thread tests\nwould use the same object whereas now each thread uses its own object --\narguably this is a more useful test but results in higher S3 usage.\n\nAlso note that the cache benchmark is unchanged in this commit, because\nit makes assumptions about the filename used by the tests.\n\nRemoving the assumption that each test will operate on a single file\nprepares us for future mixed read/write tests, and allows different fio\njobs to be run in parallel safely.\n\n## Does this change impact existing behavior?\n\nYes, see above: previously the multi-thread tests would use the same\nobject whereas now each thread uses its own object -- arguably this is a\nmore useful test but results in higher S3 usage.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>\nSigned-off-by: Andy Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-13T13:38:42Z",
          "tree_id": "b4310376c893070907103204412e34cee107007e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c6f819c9365e01e5ba1dda5ec585129c17ca0e6"
        },
        "date": 1731512129507,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.13369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.182421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.95556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.6162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.139453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 8.65478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5456.03359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.4998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4495.5740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 223.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1433.191796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.773828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1222.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.99521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.129296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1804.45205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.27216796875,
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
          "id": "9206ed4847bbf2574dc7650483e2126b89a14d10",
          "message": "Bypass the shared cache for large objects (#1117)\n\n## Description of change\n\nThis change makes `get_block` and `put_block` for objects larger than\n`1MiB` be a no-op in the shared cache.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it is under the feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, in the following PRs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-13T13:56:48Z",
          "tree_id": "2954eb36742819cb93403083daa8fbb8e3507b28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9206ed4847bbf2574dc7650483e2126b89a14d10"
        },
        "date": 1731513293180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.086328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.68095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.9546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.45654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.1626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.213671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5154.573046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.15302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4393.50712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 219.95927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1296.5529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 43.79921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.51396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1156.7388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.5828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1431.31025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1137.8970703125,
            "unit": "MiB/s"
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
        "date": 1731590691513,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4718.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4017.39599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5047.099707031251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.18369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.95947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.31142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.452734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.04140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.11044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.5759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5200.5048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4516.16455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 223.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1502.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1190.4001953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1222.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.21572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1773.69990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.5390625,
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
          "id": "4af19445a4e2d2d9ea134751aef92c4cf53dfd4d",
          "message": "Add an integration test for the shared cache (#1071)\n\n## Description of change\n\nAdd an integration test for the shared cache. It uses\n`S3_EXPRESS_ONE_ZONE_BUCKET_NAME` as a cache bucket and `S3_BUCKET_NAME`\nas a regular bucket.\n\nRelevant issues: No\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-14T14:56:59Z",
          "tree_id": "3134e0e3fd4484916e9f9549e9e43f3731a1ba37",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4af19445a4e2d2d9ea134751aef92c4cf53dfd4d"
        },
        "date": 1731604278818,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4837.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3983.2518554687504,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5025.76318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.12314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.97890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.12119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.18447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.44423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.4763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5324.95751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.166796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4475.069140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 203.5650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1397.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.34599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1379.59228515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1042.02451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.5896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1828.14609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.0677734375,
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
          "id": "625d7dbb9b9b0ed4f072cfad48ef859522f3075b",
          "message": "Verify object metadata in Express cache (#1125)\n\n## Description of change\n\n- Verify S3 Express cache objects have valid object metadata which\nmatches the keys\n- Verifies the CRC32C of the object content post-download from S3\n  - If checksum is missing, return `BlockChecksumMissing`.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nChanges S3 Express cache to require object metadata and CRC32C to be\npresent. Old caches will not be used.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-14T15:49:49Z",
          "tree_id": "ed8468dd3fab76e53de1d182aebd2d30d80d48c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/625d7dbb9b9b0ed4f072cfad48ef859522f3075b"
        },
        "date": 1731607487790,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4735.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4155.825000000001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5178.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 3.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.74326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.784375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.1400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.05205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.082421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.99306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 8.49033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5125.4552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.09326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4379.11181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 193.439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1271.223828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1166.3556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1128.2826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.28671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1506.62177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.0818359375,
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
          "distinct": false,
          "id": "3738860dcdd8be73b222fdebd21677f7ad4070f9",
          "message": "Add a test for an invalid cache block (#1139)\n\n## Description of change\n\nJust adds a test that if a block in the shared cache is invalid, it is\nnot served to the client application.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-15T17:20:55Z",
          "tree_id": "17db2c6fd7dd7ce63582c3b0141ba7b6e4e29323",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3738860dcdd8be73b222fdebd21677f7ad4070f9"
        },
        "date": 1731700956113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4812.6419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4190.3234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5378.555273437501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.28642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 3.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.79072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.0578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.8765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4935.4734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4661.19033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 223.14619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1381.8794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 41.953515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1341.03759765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1214.75205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.18671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1639.0466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.6583984375,
            "unit": "MiB/s"
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
        "date": 1731940195364,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4867.0416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4335.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5453.176171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.42119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.2505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.01474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.2203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5628.3265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4649.23330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.827734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1705.63134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1085.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.65634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1429.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1010.70361328125,
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
          "id": "1e30bff37aa35be2e54e06a0bc92f7a684414bc8",
          "message": "Update user-agent on express cache usage (#1122)\n\n## Description of change\n\nAdd `mp-cache-express` to the user agent when caching in express is\nenabled.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-18T12:27:52Z",
          "tree_id": "aac263066f2f280609c1413e05ad01a64b2ec469",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e30bff37aa35be2e54e06a0bc92f7a684414bc8"
        },
        "date": 1731940891845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4860.13125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4280.56376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5485.388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.12431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.33447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.8619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.30732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5646.99052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.46884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4899.7888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1636.6052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1350.5083984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1159.132421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.08525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1452.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.8783203125,
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
          "id": "378a56c2efbdbc423d745bbcf7cf3018d770dc7c",
          "message": "Validate that shared cache bucket is usable (#1141)\n\n## Description of change\n\n- Validates the shared cache bucket is write-able\n- Validates the shared cache bucket supports the `EXPRESS_ONEZONE`\nstorage class\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, the shared cache bucket is now validated that it supports the\n`EXPRESS_ONEZONE` storage class\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-18T16:04:15Z",
          "tree_id": "f3f7e68465c924b7f18f84e29f68d921bd948dd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/378a56c2efbdbc423d745bbcf7cf3018d770dc7c"
        },
        "date": 1731953941199,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4882.5017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4239.6029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5322.79736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 4.7888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.68916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.15810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.22109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.18251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5384.76376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.6380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4501.5337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.656640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1402.10556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1307.96337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1262.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1730.86103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.2671875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1731953941813,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}