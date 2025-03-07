window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "981a3e11b23baa3247c968f6819698dfc5326cd5",
          "message": "Increase version to 1.15 and update CHANGELOG after adding new metadata TTL flag (#1265)\n\nThe change in #1246 requires a minor version increase and a new entry in\nthe changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-11T14:53:46Z",
          "tree_id": "a5999ea7bd7aaec4350279abf77568d7b14dc396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/981a3e11b23baa3247c968f6819698dfc5326cd5"
        },
        "date": 1739293800401,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4857.85498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4418.46416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5615.381738281249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.75478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.79521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.71728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.53173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5734.29453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.153515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5022.26865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.51591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1846.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.53525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1467.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1271.67509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.56953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1489.0765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.68173828125,
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
          "id": "ed6f34bf117fcb0eab77920ba9f77201b42670b9",
          "message": "Add debug logging to FUSE flush to make upload completion clearer (#1247)\n\nIn some edge cases, Mountpoint will not be able to complete the MPU\nbefore the file is closed. For instance, we will not complete uploads\nwhere no bytes have been written since it can be common for applications\nto fork and result in file descriptor being closed before writing\nbegins.\n\nIf an application relies on close completing before another system\nqueries S3, it could lead to a race condition where the object is not\nyet in S3.\n\nWhile this is an edge case, this change adds debug logging which can\nhelp identify when this behavior occurs.\n\n### Does this change impact existing behavior?\n\nLogging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-13T16:26:23Z",
          "tree_id": "32b3f4d8ea6c36c585de17761e64cc893f7f35e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed6f34bf117fcb0eab77920ba9f77201b42670b9"
        },
        "date": 1739472280637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4901.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4206.3068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5092.901953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.36982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.92978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.19208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.83896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.38486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.999609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.53876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5647.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4863.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.91826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1710.3533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.59677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1593.7,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1316.003515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1522.139453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.85517578125,
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
          "id": "49c55bb73315bf3b0dca5326d6632cdf6453207e",
          "message": "Update caching documentation (#1267)\n\nUpdated the caching documentation to specify how the metadata cache\ninteracts with the data cache options.\n\nCloses #1263.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-02-14T15:20:08Z",
          "tree_id": "1fcff08e5c24399a87a6d8d7c97c7ac9b5622d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49c55bb73315bf3b0dca5326d6632cdf6453207e"
        },
        "date": 1739554496802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4954.3357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4362.00751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5576.83935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.5162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.34404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.089453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.34072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5675.0005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.16142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4872.4962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.65986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1804.9197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.19541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1001.44775390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1331.0787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1849.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.43173828125,
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
          "id": "d70f9195740f616eca0e4a739b83aa34065e3261",
          "message": "Enforce sse on writes to the xz cache (#1257)\n\nWith this PR, flags `--sse` and `--sse-kms-key-id` will also apply to\nobject uploads to the xz cache.\n\n### Does this change impact existing behavior?\n\nYes, bumped the version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-17T22:57:28Z",
          "tree_id": "180c78283657fbca46ba80d09c29b0976dd709a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d70f9195740f616eca0e4a739b83aa34065e3261"
        },
        "date": 1739841126612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4924.80966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4371.384375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5542.5716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.462109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.58759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.7408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.90224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.22587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.35087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.8728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5858.09189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.9978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4993.20234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.61962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1843.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1414.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.79951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1631.02197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1027.73173828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454e1fab291e1d020fe1a1917799f7a7f8d2cac7",
          "message": "chore(clippy): remove exclusions for false positive rules (#1271)\n\n### Overview\nWe removed exclusions for false positive Clippy rules as they were fixed\nand this workaround is no longer needed.\n\n### Does this change impact existing behavior?\nNo, this is a small boilerplate change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nChange log and version changes are not needed.\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:19:10Z",
          "tree_id": "ec72709f8a00be840dacf4c142a5db7ef9c0428e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/454e1fab291e1d020fe1a1917799f7a7f8d2cac7"
        },
        "date": 1739986465787,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4990.81259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4438.7955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5442.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.921484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.88330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.52138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.82353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.021875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5631.72470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.7224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4830.44150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.0890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.81875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.41220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1399.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1258.266796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1555.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.93037109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2a50bbdf765b1a5652e6b9a5e89919feaf212be",
          "message": "Fuser fork submodule (#1269)\n\n### Overview\nTo be prepared for further refactoring we want to ease the supporting\neffort for the FUSER fork we're using.\nAs a first step we want to embed it as a git submodule which will be\nusing the existing `fuser/fork` branch as a remote.\nThis will allow us to keep the current sync flow with the original FUSER\n[repo](https://github.com/cberner/fuser) but skip the manual sync step\nin our `main` branch.\n\nWe will be able to update the fork by running `git submodule update\n--remote mountpoint-s3-fuser` which is more idiomatic. So we still be\nable to test changes locally w/o publishing the fork.\n\n*NB* We will need to commit the changes (dirty indices) after\nsubmodule's update.\n\n### Does this change impact existing behavior?\n\nThis change is completely internal and does not impact customer-facing\nbehavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis change does not require version or changelog changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:34:36Z",
          "tree_id": "56231be5cdb9a08a04d49dbf5c17de883229d997",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2a50bbdf765b1a5652e6b9a5e89919feaf212be"
        },
        "date": 1739987356414,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4983.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4321.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5578.46962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.18662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.53505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.856640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.29501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5844.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4911.1158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.29033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1798.388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.30107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1458.8021484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1350.76845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.15361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1648.29228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1023.22646484375,
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
          "id": "bacb676bf7303208dc39cf8e91aff56b5ccc89d2",
          "message": "Add initial version of benchmark experiment runner (#1266)\n\nIn order to investigate performance in Mountpoint, we want to be able to\nvary different parameters. In fact, it can be very useful to vary these\nparameters together to see how performance (such as sequential read\nthroughput) changes as we vary two parameters together.\n\nThis change introduces a new benchmark running script which uses the\nPython framework Hydra to enumerate combinations of parameters, and then\nexecute some function with each combination. The script manages the\nlifecycle of the `mount-s3` file system and collecting data into an\noutput folder.\n\nThe change currently does not reuse the FIO definitions used by our\nregression benchmarks. In the mid-term, these should be reconciled.\n\nThis pull request (PR) supersedes a previous PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/986.\n\n### Does this change impact existing behavior?\n\nNo, this adds a new benchmark runner and benchmark definitions. This\ndoes not impact the Mountpoint file system.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint file system or crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-21T07:13:35Z",
          "tree_id": "f41549c9170abd8427c12f5c7a56563584dfa834",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bacb676bf7303208dc39cf8e91aff56b5ccc89d2"
        },
        "date": 1740130081670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4754.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4182.12451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5370.27568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.71728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.0884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.56220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.19169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.31865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.31201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5424.90634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4722.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.0673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1699.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.40654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.11953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1657.03486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1099.58828125,
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
          "id": "ea00e0dfffafa35e6ef2339a299c235fa1356d62",
          "message": "Add ETag to complete upload debug log (#1282)\n\nSmall change to add etag to debug logs when an MPU completes.\n\nWe already have size and object key, so this is the only missing\ninformation.\n\n### Does this change impact existing behavior?\n\nAdds etag to debug logs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T12:03:10Z",
          "tree_id": "bb4aeac896bbb845482469de8e7b1df4846647bb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea00e0dfffafa35e6ef2339a299c235fa1356d62"
        },
        "date": 1740406697056,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5232.508203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4451.793359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5675.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.32412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.16318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.16171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.7029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5820.92021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.035546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4941.9193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.98330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1738.4263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.41240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1243.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1331.1697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.68955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1550.54287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.12138671875,
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
          "id": "a5147a158407b8ed26a8953eabd218d3d79cfcc1",
          "message": "Add EC2 instance ID to benchmark output metadata (#1281)\n\nWe want to include the instance type in the metadata for a given\nbenchmark run.\n\nThis change adds a check into IMDS to query this data and add the EC2\ninstance type if available.\n\n### Does this change impact existing behavior?\n\nIt adds a new field to the benchmark output metadata file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no change to Mountpoint itself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T13:10:39Z",
          "tree_id": "e59b936e6f9b45b485f1e843ece5451832ba5e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a5147a158407b8ed26a8953eabd218d3d79cfcc1"
        },
        "date": 1740410726071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4962.20068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4431.3296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5611.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.1828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.49619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.09580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5828.4861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.35185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4998.144921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.0140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1724.95546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.85498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1430.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1246.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.4705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1658.8185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.6154296875,
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
          "id": "0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa",
          "message": "Add ability to specify multiple network interfaces to benchmark script (#1285)\n\nTo investigate multiple network card performance, we want to run\nexperiments with and without multiple network cards. This change adds\nthe ability to run the benchmark experiment runner and specify both\nnetwork interfaces and the maximum network throughput parameter.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, new feature on benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no Mountpoint change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-25T18:02:35Z",
          "tree_id": "557d94cef6ae02f5344dc7298cb3b32037fa250f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa"
        },
        "date": 1740514763331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4832.25166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4192.141796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5409.729785156251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.7302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.81826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.6755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.398046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.09580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.18916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5519.752734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4835.80244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.17978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1507.528515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.12578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1416.54052734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1213.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1423.28369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.34169921875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "191584906+sahityadg@users.noreply.github.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe",
          "message": "Add FUSE background and congestion threshold config to benchmark script (#1286)\n\nTo investigate Mountpoint performance, we want to run experiments with\ndifferent FUSE max background and congestion threshold settings.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-02-26T10:38:53Z",
          "tree_id": "5b46086209bed0903ee2eb52308aa3a1ef8c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe"
        },
        "date": 1740574510137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4946.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4467.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5670.59404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.18876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.49521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.7609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.25224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.15185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.12626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.84580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5854.67626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4827.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1650.56962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.1783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1577.0724609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1359.566796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.1970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1452.3935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 953.32890625,
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
          "id": "59ccecfd3b7edf540504bb524f1ef7e7afae7ecc",
          "message": "Build and validate SLES package (#1278)\n\nBuild a separate package for SUSE Linux Enterprise Server (SLES), where\n`libfuse.so.2` is delivered by `libfuse2` rpm package (as compared to\n`fuse-libs` for AL2).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMay be? Added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-26T11:23:36Z",
          "tree_id": "427e5dc432f730ffa7fb9590d0d6635dba92c1ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59ccecfd3b7edf540504bb524f1ef7e7afae7ecc"
        },
        "date": 1740577459103,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4957.98701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4508.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5673.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.8201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.4552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.6294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5790.25380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 3934.6158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1924.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.7279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1538.86494140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1181.06416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.92626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1669.41298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1068.05478515625,
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
          "id": "241d1195588ffed40c3fe508eede2befd80ce27f",
          "message": "Remove function pointer comparison in EventLoopGroup initialization (#1287)\n\nTrying to run `clippy` with Rust 1.85 fails with the following error:\n```\nerror: function pointer comparisons do not produce meaningful results since their addresses are not guaranteed to be unique\n  --> mountpoint-s3-crt/src/common/ref_count.rs:30:13\n   |\n30 |     assert!(callback.shutdown_callback_fn == Some(shutdown_callback));\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = note: the address of the same function can vary between different codegen units\n   = note: furthermore, different functions could have the same address after being merged together\n   = note: for more information visit <https://doc.rust-lang.org/nightly/core/ptr/fn.fn_addr_eq.html>\n   = note: `-D unpredictable-function-pointer-comparisons` implied by `-D warnings`\n   = help: to override `-D warnings` add `#[allow(unpredictable_function_pointer_comparisons)]`\n```\n\nThis change reworks the affected code by inlining the shutdown callback\nfunctions into `EventLoopGroup::new_default` (the only caller), which\nmakes the assertion redundant.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-26T14:12:12Z",
          "tree_id": "eabe649b5d5eb0ad848fb82651238fdcf5c6b2f8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/241d1195588ffed40c3fe508eede2befd80ce27f"
        },
        "date": 1740587362896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4901.28857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4445.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5639.53837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.94453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.6619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.1798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.74912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.116015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5846.56123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.705859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4981.29794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.91416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1654.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.39384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.82412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.7029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.3609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1471.59541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.94365234375,
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
          "id": "6560d0848a2de4d6a7b2dd132d5f802ac02f1281",
          "message": "Update Rust toolchain to 1.85 (#1288)\n\nUpdate Rust toolchain to 1.85\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-26T14:46:46Z",
          "tree_id": "d2c6e697cb878cd635c9786298a1885308cd0416",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6560d0848a2de4d6a7b2dd132d5f802ac02f1281"
        },
        "date": 1740589316556,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4925.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4406.9779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5454.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.05341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.02724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.340625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5772.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4964.31259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.57041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1760.179296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.38173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1417.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1259.5369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.06787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1396.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1068.3818359375,
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
          "id": "9b05724af7d9299e50ed7eb7a35a54f92c960297",
          "message": "Release v1.15.0 (#1291)\n\nUpdate changelog for any missing changes, and prepare for v1.15.0\nrelease.\n\nWhen complete, this release will close:\n- https://github.com/awslabs/mountpoint-s3/issues/1207\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog reviewed and updated, version change already correct.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-27T08:51:28Z",
          "tree_id": "5f698674028444e48d67b012950468047bf7b52e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9b05724af7d9299e50ed7eb7a35a54f92c960297"
        },
        "date": 1740654407566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4972.05625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4472.31865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5582.592871093751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.4318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.40185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.488671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.85771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.05791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.74921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5942.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.10263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4987.40283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.44365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1741.92568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.07041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1487.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1259.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.88369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1542.62939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.720703125,
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
          "id": "0c51de8dbd7f57d1a368ddcf522d09c7d89ecd34",
          "message": "Increment mountpoint-s3 version number for future release (#1292)\n\nUpdate the version number to what the next expected version is (patch\nminimum).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-27T21:31:07Z",
          "tree_id": "3082ba5b0dea71cbb13267988ca5297ed1c7d23a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c51de8dbd7f57d1a368ddcf522d09c7d89ecd34"
        },
        "date": 1740699912446,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5067.509570312501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4393.6662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5624.533105468749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.51767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.390234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.4869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.21953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.4185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5929.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.93408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5012.653125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.0484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.11455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1470.769921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1297.58681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.93681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1099.75078125,
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
          "distinct": false,
          "id": "79deea48d50e6e1dd29a37a4bdf73b98f9eb97d0",
          "message": "Install active toolchain by default with `rustup` in `package/Dockerfile` (#1299)\n\nStarting with v1.28, `rustup` will not install active toolchain\nautomatically:\nhttps://blog.rust-lang.org/2025/03/02/Rustup-1.28.0.html#whats-new-in-rustup-1280.\nThis PR updates `package/Dockerfile` to install active toolchain\nautomatically if it's not installed.\n\nThis should fix our recent CI failures in packaging step:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13633623152/job/38107451366\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-04T09:23:50Z",
          "tree_id": "519892fb68a6953f7ef5f4023d750544e9954b46",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79deea48d50e6e1dd29a37a4bdf73b98f9eb97d0"
        },
        "date": 1741088292591,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4912.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4466.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5649.02294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.4439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.5615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.42568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.57490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.00537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.645703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5957.652734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.84580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5047.7751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.778125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1967.5578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.1208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1386.7107421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.6736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.628125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1664.29052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 988.7984375,
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
          "id": "ba70ef2d64a456c1739733fc4e14b7d6c84dd1ae",
          "message": "Fix benchmark script column names for sweeped params (#1280)\n\nIf the column names are not defined in the Hydra script, they will be\nprefixed by `+`. In order to keep things simple on the analysis side,\nwe'll name the columns with placeholder values which will be replaced\nwhen running the script with multiple experiments.\n\n### Does this change impact existing behavior?\n\nIt changes output of the benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no changelog entry or version change as no change to Mountpoint\nitself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-05T11:26:43Z",
          "tree_id": "0935df6eff19d6c2a420ac938995a8c991e2b781",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba70ef2d64a456c1739733fc4e14b7d6c84dd1ae"
        },
        "date": 1741182110190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4980.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4441.87822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5668.766015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.75966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.30390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.444921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.19892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.80810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.81474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.58916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5808.91064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4968.07890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.96435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1834.840234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.8947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1568.18935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1368.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.50908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1577.1974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1031.357421875,
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
          "id": "d4dc7569154cb2e42b4568f9975339ce9e405936",
          "message": "Remove prefix from inodes (#1303)\n\nWhen Mountpoint is configured with the `--prefix` flag, all S3 requests\ncontain the specified prefix as part of the key. Currently, the prefix\nis duplicated in each `Inode` entry in the `full_key` field. This change\nremove the unnecessary duplication by only storing the partial `key` and\nreconstructing the `full_key` by adding the prefix before performing any\nS3 request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n`mountpoint-s3` changelog entry. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-06T14:53:44Z",
          "tree_id": "603a5be7a26d27aed6daaa7b3ffd896a922b70e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4dc7569154cb2e42b4568f9975339ce9e405936"
        },
        "date": 1741280935998,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4945.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4390.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5552.83203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.896875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.430859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.11767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.99326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.915625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.65107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5812.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.73564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4826.59658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.74306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1606.0853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.416796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1409.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.304296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.23544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1765.033984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.9810546875,
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
          "id": "6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5",
          "message": "Update Cargo dependencies (#1306)\n\nUpdate Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo change in behavior.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-07T12:55:38Z",
          "tree_id": "9b393ea325557646752e984e5ad4e12ac77860fc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5"
        },
        "date": 1741360211267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4957.20498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4463.8474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5634.35927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.3044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.3873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.1654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.63916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.301171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5860.405078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.15126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5047.0494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1753.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1576.493359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1188.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1021.60380859375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1741360211964,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}