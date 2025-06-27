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
          "distinct": true,
          "id": "8c4ce5abafd546bff3f01a0159ae9561a364abaa",
          "message": "Package fstab file (#1442)\n\nDraft PR because I want to remove the fstab feature outside this PR\n\nAdds `mount.mount-s3` symlink to our rpm and deb installers. This file\nis placed in `/usr/sbin` in the host when installed.\n\n### Does this change impact existing behavior?\n\nYes, a new `mount.mount-s3` file is added during installation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:05:35Z",
          "tree_id": "4ef3452cd65154566194a327cc71965dfea73b0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c4ce5abafd546bff3f01a0159ae9561a364abaa"
        },
        "date": 1748611192805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4987.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4488.321093750001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5607.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.57978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.120703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.793359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.29404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.6046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.569921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5900.38359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.77470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5092.43603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.1994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2028.03984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1441.30732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1323.0912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.68759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1739.8025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.92939453125,
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
          "id": "fa7b9d711a69128826a7ff026fc5fdf4c4e51e61",
          "message": "Remove fstab feature flag (#1447)\n\nRemoves fstab file from cargo.toml - previous commit removed from CI as\nwell as code usages. This is just cleaning up.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:23:44Z",
          "tree_id": "f41202e3376f4adaa6bd338639929816b164aab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa7b9d711a69128826a7ff026fc5fdf4c4e51e61"
        },
        "date": 1748612553713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4983.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4591.0775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5603.45146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.369921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.5171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.08583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.18095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.80205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.7037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5857.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4970.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.96611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1825.8828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.40498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.25361328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1333.81884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.648828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1761.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1031.37685546875,
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
          "id": "5f962cbdf5c3a5beafb61cebb7549b84db1a1acd",
          "message": "Add documentation for fstab feature (#1441)\n\nAdds documentation for new fstab feature\n\n### Does this change impact existing behavior?\n\nNo\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:53:57Z",
          "tree_id": "72bc0427a52496d37124452a1b6bd474a52d2619",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5f962cbdf5c3a5beafb61cebb7549b84db1a1acd"
        },
        "date": 1748614178389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5090.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4479.17431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5573.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.72607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.569921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.52783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.27109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.25224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.86240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5904.16708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.81572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5020.94599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.98935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1802.252734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.36259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.1765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1270.5552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1697.64541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1042.901171875,
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
        "date": 1748615329234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4913.08525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4423.1583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5609.541406249999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.9537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.418359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.8943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.41875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.48203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.16884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.72158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6085.43505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.9681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4987.36796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.75546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1847.2505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.74716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1597.81533203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1306.21591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1740.86650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1076.66240234375,
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
          "id": "ca60ca2153664d92d6817a7de07f5bbac4522fbf",
          "message": "Fix changelog for v1.18.0 (#1449)\n\nFixes changelog for v1.18.0 release\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChanged\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T13:33:24Z",
          "tree_id": "8f1d5153ae3d609f1acd010ba43ca2d93e8d69f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca60ca2153664d92d6817a7de07f5bbac4522fbf"
        },
        "date": 1748620104089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4985.071875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4336.126660156249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5563.09169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.9865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.29150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.32109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.06455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.58447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5943.69814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.5548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4921.35966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1952.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.93828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1603.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1415.728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.52275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1416.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1138.07900390625,
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
        "date": 1748624588285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4974.5109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4467.10146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5624.7552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.4259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.58896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.5953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.09619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.50185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5991.0759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.29697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4683.6609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1800.71201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.88876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1432.66357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1289.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.56630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1476.98408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1112.2900390625,
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
        "date": 1748624686481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4910.12705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4512.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5638.004003906251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.50810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.637890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.571484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.45830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.33251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.67978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.53759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.39228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5973.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.29443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4920.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.65869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1626.7884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.26943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.6416015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1419.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.851171875,
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
          "id": "3fef44e2590d952b828e099803b5334ec909f53b",
          "message": "Fix example for using fstab in user data (#1450)\n\nThe previous example for using fstab with user data failed to install\nMountpoint occasionally on AL2023 hosts, and appears to be impacted by\nthis bug: https://github.com/amazonlinux/amazon-linux-2023/issues/397 &\nhttps://repost.aws/questions/QU_tj7NQl6ReKoG53zzEqYOw/amazon-linux-2023-issue-with-installing-packages-with-cloud-init.\n\nUpdating the example user data script to retry installing Mountpoint if\nit fails.\n\nI tested this by creating 6 AL2023 instances and saw they all started up\nand had Mountpoint available after swapping out the s3 bucket in the\nexample with my s3 bucket\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T15:21:56Z",
          "tree_id": "cea02b98052d7556b88a0cb52122e804903e6234",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fef44e2590d952b828e099803b5334ec909f53b"
        },
        "date": 1748626467342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5029.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4494.2697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5267.50888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.0189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.26572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.23935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.89404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.00234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.54873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5909.1986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.57236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4797.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.27265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1988.99228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.83974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1506.06181640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1332.98251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1615.81201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1070.57919921875,
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
        "date": 1748873949708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5006.29580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4532.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5600.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.59150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.53583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.30419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6017.3427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.13818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4950.6724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.19892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1925.64501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.05625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1721.8421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.87705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.99931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1521.1458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.55458984375,
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
        "date": 1748963670821,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4976.53369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4526.50908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5631.16923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.09951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.682421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.198046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.47958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5774.99345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.3822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4943.96787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1782.46767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1442.648828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1451.31484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.3875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1466.29619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.0984375,
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
        "date": 1749134805327,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4917.15341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4359.39052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5606.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.74765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.54814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.74228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.921484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.21083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6030.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.73193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4958.36298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.76845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1990.440625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.97919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1601.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1331.94521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.77626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.953515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.982421875,
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
        "date": 1749492412016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4894.508984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4441.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5566.97666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.71064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.6203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.92353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.42529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5749.58603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.52578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4939.4181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.4259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1656.83154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1435.4125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.39765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1476.08642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.00576171875,
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
        "date": 1749559160023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4958.04951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4521.9318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5596.586816406249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.88310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.9626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.2794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.10830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.94833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.88564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.20166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6033.4783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.73330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4955.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.30595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1936.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1610.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1340.31923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.41572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1671.6595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 978.9884765625,
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
        "date": 1749744600318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4844.42587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4315.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5531.70556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.60263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.49794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.69580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.66240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.83701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.59453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5762.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4661.69345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1888.1392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.5947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1620.690234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1214.71005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1786.77373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.71748046875,
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
        "date": 1749747847667,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4846.96064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4369.31787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5628.33701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.00341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.81962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.98720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.84638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.846484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.93359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5885.75732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.54580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4973.0037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.66923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1742.015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.9490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1442.5099609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1314.473046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.8541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1640.4177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.3158203125,
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
        "date": 1749831951679,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4927.78583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4415.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5458.63388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.93642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.74072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.85078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.33095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.86708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.08896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.48642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5846.75263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.3189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4936.7111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.1716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1737.36318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.5080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.4482421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1338.72822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.3052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1427.12041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.8333984375,
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
          "id": "1ee3d8f1f17f4918e16db386d7e993c1c8018200",
          "message": "Revert \"Update CRT submodules to latest releases (#1458)\" (#1466)\n\nThis reverts commit f138efcaa33169b005cdbf5a0d11c10d89db292e.\n\nAs part of the investigation on the benchmark failures in the CI, e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15625094824/job/44017689830,\nwe are reverting to the previous CRT releases.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, reverted.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-13T15:55:45Z",
          "tree_id": "8c67ecf11d7edc82d957c5524f7ea40fc4b1dbb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ee3d8f1f17f4918e16db386d7e993c1c8018200"
        },
        "date": 1749838386783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4925.61923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4453.4091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5520.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.31337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.86767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.459765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.59150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.32939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.268359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.13271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.78095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5824.869921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.80966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4927.269921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1970.5533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1411.94072265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1300.33349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.70703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.9923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1083.25625,
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
          "id": "ed14db3dfd12a28650399536ee978848e712eddf",
          "message": "Introduce file rename support for directory buckets in S3 Express One Zone (#1468)\n\nIntroduces support in Mountpoint for renaming files, using the\n[RenameObject\nAPI](https://aws.amazon.com/about-aws/whats-new/2025/06/amazon-s3-express-one-zone-atomic-renaming-objects-api/),\nwhich is supported on directory buckets in S3 Express One Zone.\n\nFile rename is enabled automatically when mounting a directory bucket in\nS3 Express One Zone. In order to replace an existing object through\nrename, the user must provide the `--allow-overwrite` flag at mount\ntime. More details on Mountpoint's support for rename can be found in\nthe semantics documentation `doc/SEMANTICS.md`.\n\n### Does this change impact existing behavior?\n\nYes, this change will enable rename object when a bucket with support\nfor the new API is mounted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries for the crates are updated. Versions are increased.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-18T22:57:29Z",
          "tree_id": "cf15574e84db9acaf0d68c76da854f9f4bd3e4ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed14db3dfd12a28650399536ee978848e712eddf"
        },
        "date": 1750297448087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4825.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4530.91015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5619.3494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.391796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.03759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.90966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.72841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.797265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5914.8265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.8626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4947.07158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.57626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1782.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.5150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1388.39755859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1356.429296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1601.5125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.20263671875,
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
        "date": 1750323556960,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5026.54384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4452.82705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5650.986425781251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.3884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.88037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.55537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.22919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.699609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6034.7361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.800390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4686.73125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.2375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1918.5181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.7705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1465.0080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1305.16142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.76240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1735.77294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.77255859375,
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
          "id": "41aeca132bc6ba8c21a8d2cb82ddab676211507f",
          "message": "Update changelogs to prepare for crate release (#1470)\n\nUpdates the changelogs so that crates can be updated prior to the\nrelease of MP v1.19.0\n\n### Does this change impact existing behavior?\n\nDoes not impact behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the crate update itself does not need a changelog entries. Version\nchanges were already done in #1468\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-19T07:43:55Z",
          "tree_id": "aa8e0d92d10f6c992a0742bc3484ca2780a038f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41aeca132bc6ba8c21a8d2cb82ddab676211507f"
        },
        "date": 1750327151284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4951.6224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4551.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5497.856347656249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.42919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.68447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.215625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.21357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.34560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5975.2228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.63056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5044.249609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.24150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1786.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.71435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1482.49755859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1264.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1463.96064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.04716796875,
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
        "date": 1750444988237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4946.22109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4433.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5577.1306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.83125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.18818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.848046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.20576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.60302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5797.2552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4943.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.49755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1978.67861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.0767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1420.4845703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1259.83515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.71396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1777.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.35048828125,
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
        "date": 1750756797241,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4871.3224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4473.00830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5638.86435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.73017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.71298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.54443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5987.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.00556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5015.44599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1988.1107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1521.21826171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1300.6955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.62216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.24208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.05830078125,
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
        "date": 1750776242319,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4896.253613281249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4423.981152343749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5503.632226562499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.58076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.79423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.30712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5896.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.7591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4914.39345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.851953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1589.2423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1474.46962890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1260.85263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.6765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1444.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1006.39169921875,
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
        "date": 1750844782706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4987.155859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4476.41962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5703.895703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.63876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.8642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.43349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.836328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.14482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.71298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.4322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6003.354296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.49921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5019.97197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1964.103125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1667.79248046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1162.58818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1520.91630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.96640625,
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
        "date": 1750869162208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4882.1353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4354.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5586.76708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.22509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.64755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.86953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5713.16982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.77529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4838.180859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.69228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1782.80517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.48720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1367.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1275.47197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.1421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1702.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1121.97744140625,
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
        "date": 1750926330979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4934.2779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4473.66845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5627.98974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.83828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.7740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.28408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.91201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.315234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5915.80927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.7564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4933.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.30947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1936.22451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.61943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1526.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1371.82685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.7234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1465.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1023.9775390625,
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
        "date": 1751014791651,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4971.456640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4499.470410156249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5602.4734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.17490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.73212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.110546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.10732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.7509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5850.820703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.9853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4965.774609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.6251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1690.28896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1397.20888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1276.497265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.68466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1786.2140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1150.87236328125,
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
        "date": 1751024648645,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4933.5162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4413.3265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5517.166113281251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.3576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.746875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.82685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.80205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6082.2521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.57509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5022.62177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.9138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1895.59931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.05068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1545.21142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1329.88603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.67685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.72548828125,
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
        "date": 1751030541657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4906.4392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4445.581738281249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5494.9373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.84296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.401171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.42734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.00791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5836.3111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4878.17900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.75595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1663.6095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.90341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1419.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1362.709375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1789.72685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1103.5193359375,
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
        "date": 1751037384852,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4918.655468749999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4542.61298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5492.768945312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.03515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.85078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.90712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.14501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.171484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.43935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5769.16923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.39287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4888.67509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1794.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.25693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1613.5552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.66533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1581.45390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 984.23271484375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1751037385818,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}