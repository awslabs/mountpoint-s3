window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
        "date": 1732197032593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4829.9388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4317.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5338.35478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.66689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.04150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.23662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.27177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.64638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.101171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.528515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.4599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5555.59013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.91513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4607.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.60751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1440.884375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.69892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1203.844140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.398828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.3314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1454.186328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1081.465234375,
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
          "id": "ff191c1159e7d32b9fdeb2b0f0ca84628958c60a",
          "message": "Fix warnings for test struct variant not used (#1151)\n\nThis addresses the only build warning we have in Mountpoint's own\ncrates. The remaining build warnings come from the fuser forked crate,\nwhich we plan to address through an upstream contribution.\n\n### Does this change impact existing behavior?\n\nNo, avoids import of unused code in a test only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-21T15:05:50Z",
          "tree_id": "b622a43ba2266970019ee419fe25ee45d32db6f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff191c1159e7d32b9fdeb2b0f0ca84628958c60a"
        },
        "date": 1732209586296,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4817.7205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4224.161914062501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5149.7951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.17099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.46572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.6001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.9798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.38984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.78310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.46162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5274.15087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.80263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4534.055078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.2427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1512.39228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.11748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1235.86416015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1162.47998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.2857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1511.20986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.78369140625,
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
        "date": 1732211904421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4789.45390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4274.74794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5504.0841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.785546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.77099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.421484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.51396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.1150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5746.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.930078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4786.62724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1539.47841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.4720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1253.39951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1167.652734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.07421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1588.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.25693359375,
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
          "id": "2337bf97ebcd5a016590732232c40f3ecd0728d2",
          "message": "Fix compilation error on macOS/arm (#1156)\n\nAdd a cast in the new `statfs` test: `libc::fsfilcnt_t` is not `u64` on\nall platforms.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T09:12:28Z",
          "tree_id": "68865d2183ede13e86586bb99ce19978c1ff8093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2337bf97ebcd5a016590732232c40f3ecd0728d2"
        },
        "date": 1732274796821,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4855.4328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4347.128125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5532.933203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.7521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.376171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.09482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.577734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.76943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.23525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.28583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5808.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.5677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4879.33486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.180859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1697.4818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.55087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1340.46162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1274.04765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 64.10205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1587.52353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1063.2298828125,
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
          "id": "ea5c63738a7cf59434b6e4dc7c3a3d54de663d6e",
          "message": "Fix build on macOS CI runners (#1158)\n\nIn order to work around a homebrew issue with pkg-config on github\nrunners (see https://github.com/actions/runner-images/issues/10984),\ntemporarily run a command to uninstall `pkg-config@0.29.2`.\n\n### Does this change impact existing behavior?\n\nNo. Workflow change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T09:24:07Z",
          "tree_id": "6aba7e44177506e395ec9a9d51a40d5c2de1f559",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea5c63738a7cf59434b6e4dc7c3a3d54de663d6e"
        },
        "date": 1732275384578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4953.90439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4419.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5786.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.88115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.28466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.4984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.46015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.6990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.591015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5687.10419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.19716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4784.9412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1789.68916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.2474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1433.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.97919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.59892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1539.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.6623046875,
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
          "id": "4bb64e1d90dc24919222d5ac02bbf2f8d4e3825b",
          "message": "Update vendored fuser to bc31e4d2 (#1159)\n\nThis change pulls in the current state of our fuser fork, recently\nrebased on the latest commits upstream. Most importantly, we want to\ntackle build warnings which should be resolved by\nhttps://github.com/cberner/fuser/pull/315.\n\n### Does this change impact existing behavior?\n\nNo, build warning fixes only.\n\n### Does this change need a changelog entry?\n\nNo, no API or behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-22T10:25:11Z",
          "tree_id": "771eef70d5bb240a786b7dfb591f6eb48d3b84e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4bb64e1d90dc24919222d5ac02bbf2f8d4e3825b"
        },
        "date": 1732279183502,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4889.5982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4321.42119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5552.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.68935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.06171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.22685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5826.13193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.5357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4922.97138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1778.50224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.91513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1385.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1255.54091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.06201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1823.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.03994140625,
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
          "id": "47e1d56e8899806b5c6f217cee291a8f9c57c4a9",
          "message": "Refactor MemoryLimiter to specify tracked 'area' when reserving memory (#1161)\n\nThe memory limiter currently tracks the amount of memory reserved for\nprefetching. We plan to extend this as part of supporting appends in S3\nExpress One Zone (#1160).\n\nThis change (originally authored by @monthonk) refactors the memory\nlimiter API to allow specifying the \"area\" we'd like to reserve in, for\nthe purpose of metrics for now.\n\n### Does this change impact existing behavior?\n\nNo change to existing behavior.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-22T12:59:03Z",
          "tree_id": "3ea920b54b9b8a47eefad798421f49cd86a90af3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47e1d56e8899806b5c6f217cee291a8f9c57c4a9"
        },
        "date": 1732288363795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4932.950390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4367.119921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5503.481542968751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.51318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.178515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.06484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.4625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.69072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.44443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5925.85361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.55361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4854.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.1,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1771.46767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.067578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1270.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1265.264453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1823.958203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1065.9751953125,
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
          "id": "458ffdcd17717d7af944c2d7af8384c4f7b2d111",
          "message": "Improve support for additional checksum algorithms in mountpoint-s3-client (#1157)\n\nAllows to specify any of the supported checksum algorithms when\nuploading objects.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nYes, adding an entry to the `mountpoint-s3-client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T14:13:13Z",
          "tree_id": "87dbdf991dd2ef2df65ebcbee18f08b30c36b845",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/458ffdcd17717d7af944c2d7af8384c4f7b2d111"
        },
        "date": 1732292816544,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4818.010449218749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4278.6115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5377.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.9224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.44775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.134375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5684.6173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4889.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.91044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1744.465625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.7482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1347.23125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.44541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.975,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1872.44853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.09208984375,
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
          "id": "61dc41779154633ea8c6e15e07ed9e75348870bb",
          "message": "Introduce incremental upload mode and support for append (#1165)\n\nIntroduce a new option for Mountpoint to upload files incrementally and\nsupport appending to existing files. The new option can be enabled by\nsetting the `--incremental-upload` flag at mount time and is available\nwhen mounting directory buckets in S3 Express One Zone.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1160.\n\n### Does this change impact existing behavior?\n\nNo changes under default settings.\n\n### Does this change need a changelog entry?\n\nYes, added entry to the `mountpoint-s3` changelog, under \"New Features\".\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T12:39:32Z",
          "tree_id": "b1a5ead0ea75de63b7dd8fe5209eea4e57412a09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61dc41779154633ea8c6e15e07ed9e75348870bb"
        },
        "date": 1732546587475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4761.34755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4414.50625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5530.56025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.87783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.44873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.83759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5703.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.90263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4867.58671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1825.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.71181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1524.080859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1242.3470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.56142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1707.6642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.96435546875,
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
        "date": 1732548712260,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4906.3521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4306.3390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5463.433984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.52412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.606640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.004296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.48798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.68837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5759.92734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4864.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1804.13935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.5478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.35263671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1235.18115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.54345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1433.163671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.736328125,
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
        "date": 1732563292671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4775.28818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4331.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5396.86494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.344140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.9138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.055078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.85263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.38427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.00322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5557.26455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.3607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4815.59609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.8423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1614.7771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.37353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.335546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1172.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1593.67548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.66748046875,
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
        "date": 1732626941704,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4883.140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4335.741992187501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5462.030957031249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.40830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.52626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.6755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.1380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.49501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.7560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5680.15615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.65185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4815.673046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.5771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1406.87900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 64.1072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1430.31220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.64296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1458.457421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1041.11240234375,
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
        "date": 1732627897763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4889.76298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4261.3244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5508.680859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.0267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.75693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.96533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.4857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.3619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.47275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5059.9068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.07109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4825.0466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.95341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1789.85810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.723828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1379.44658203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1220.84892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.39482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1630.35634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1002.3076171875,
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
        "date": 1732638795151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4792.40263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4230.85009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5490.90693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.30908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.42333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.79345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.11064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.268359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.50517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5550.992578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.475390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4803.95615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1666.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1433.4943359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.79765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1537.21455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1023.94345703125,
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
        "date": 1732639924568,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4857.18125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4345.24599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5519.89599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.69599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.9466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.23486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.805859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.3767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.723046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.47587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5694.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 258.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4936.60234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.61650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1701.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1339.840234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1201.87275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1715.51611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1013.09326171875,
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
        "date": 1732725582996,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4967.41689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4428.381640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5632.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.803515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.90595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.1453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.1400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.15498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.87001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.74306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5670.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.953515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4945.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.70888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1705.86943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.664453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1548.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1169.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1709.57216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.72216796875,
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
        "date": 1732837217290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4945.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4426.9669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5595.44853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.09833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.01337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.10986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.95029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.124609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5875.9205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 260.82900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4825.70390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 259.92158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1842.49990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 64.32919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.25341796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1185.38642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.3056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1590.31083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 998.74677734375,
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
        "date": 1732900652994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4900.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4424.6779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5704.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.4810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.64609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.4224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5964.56982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5026.88447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.3984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1796.28037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.3244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1699.04541015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1471.15830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.03203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1471.15517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1094.6662109375,
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
        "date": 1733139110848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4907.8880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4332.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5672.07939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.18349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.80703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.6712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.8470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5929.6732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 258.740625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4983.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1998.34990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 64.2673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1441.32744140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1229.08134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1636.58095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1141.24541015625,
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
        "date": 1733141794962,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4944.81787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4586.55712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5617.8279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.87861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.0787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.9634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.988671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.50927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5894.04638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.40302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4963.937109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.0087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1981.00986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.60107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1436.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1384.1216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.40966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1473.47275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1007.98134765625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1733141795561,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}