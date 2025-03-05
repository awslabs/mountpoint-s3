window.BENCHMARK_DATA = {
  "lastUpdate": 1741181247848,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "19b706dfc2b51d031d05602a328d4120ce72115b",
          "message": "Add experimental config to write Mountpoint PID to file (#1261)\n\nWhen investigating performance, we wanted to automate the collection of\nprofiler captures using a tool like `perf`. To do this, we needed the\nprocess ID of Mountpoint. By writing out the PID to a file, scripts\ncould automatically record profiles for the lifetime of Mountpoint by\nproviding its PID to `perf`.\n\nThis change adds the ability to write Mountpoint's PID to a file under\nan experimental/unstable environment variable. Since its unclear if we\nwant to expose this properly such as providing a CLI argument, we are\ntaking the unstable environment variable approach to make clear this\nconfiguration may change or be removed in future.\n\n### Does this change impact existing behavior?\n\nThis change adds a new experimental feature to write Mountpoint's PID to\na file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSince this is adding an experimental feature, no changelog entry is\nrequired. No minor version patch is required, as this is not a stable\nfeature addition.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:50:57Z",
          "tree_id": "3e105b172d88ae034d0e91a237a2d0c712cfccca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19b706dfc2b51d031d05602a328d4120ce72115b"
        },
        "date": 1739292627307,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.987109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1993.99140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.416796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.17548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.988671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.679296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.48525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3645.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4011.8345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1160.81435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1171.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1323.8921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1423.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1316.01904296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.726171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1163.74501953125,
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
          "id": "981a3e11b23baa3247c968f6819698dfc5326cd5",
          "message": "Increase version to 1.15 and update CHANGELOG after adding new metadata TTL flag (#1265)\n\nThe change in #1246 requires a minor version increase and a new entry in\nthe changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-11T14:53:46Z",
          "tree_id": "a5999ea7bd7aaec4350279abf77568d7b14dc396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/981a3e11b23baa3247c968f6819698dfc5326cd5"
        },
        "date": 1739292982934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.7876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1973.097265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 758.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1448.35146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.55302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.6955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.2375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3634.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3977.02158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1184.4572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1149.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1321.26630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 901.5513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 986.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1109.1021484375,
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
        "date": 1739471454698,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.56279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1975.5970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 780.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.1208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.7416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3353.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3942.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1180.5109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.271875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.99853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1445.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1074.7654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1024.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1114.6740234375,
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
        "date": 1739553638093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1267.35771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1989.347265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.109765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.90087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.6716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 555.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.4048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3601.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4051.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.86103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1044.141015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 978.42373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1023.01396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1060.64853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1087.0232421875,
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
        "date": 1739840217863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.8931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1924.324609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.12509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.15341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.68662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.12744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3590.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4082.35087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.41455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 835.24921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1041.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.587109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1019.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1440.29140625,
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
        "date": 1739985603137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1296.416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1961.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 775.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.61884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 435.9291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.68603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 334.97919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3600.50244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4173.52841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1242.73935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1208.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 935.89990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 989.19736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1251.9255859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1102.31162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 972.27216796875,
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
        "date": 1739986484625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.7078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1963.07744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.13349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.87138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.12666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 453.06015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 304.5041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3595.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4039.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1184.85263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1144.59697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1249.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 957.3509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1413.4974609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1057.92275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1135.44111328125,
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
        "date": 1740129267848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1956.46728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 775.658984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.1302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.50439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.26572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 308.7515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3689.16416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4064.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1172.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1156.7509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 920.13466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 973.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1133.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1031.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 983.97958984375,
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
        "date": 1740405830053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.4044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1947.52705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.56689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.35947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.51455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 377.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3559.89423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.17958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.39189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1202.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 764.547265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 856.64677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1305.855859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.00009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 957.2009765625,
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
        "date": 1740409867000,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.10361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1967.28662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.285546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1446.87236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.10849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 390.03408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.3390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3607.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4082.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1197.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1151.973828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 908.87158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1408.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1033.916796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.55361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 981.6126953125,
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
        "date": 1740513911644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1998.3962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1460.63515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.05498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 503.6458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 213.48662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.19736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3544.75810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4076.36240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1143.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1378.43115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 903.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1070.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1061.2828125,
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
        "date": 1740573617964,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.133984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1985.34716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.7458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1453.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.9810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 496.18544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 318.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3565.34990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3970.18984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1150.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.6369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.6234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1141.0447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1101.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 964.48486328125,
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
        "date": 1740576393199,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.0833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1939.382421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.93349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 393.19404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.40126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.69794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3628.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4083.42255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1218.86328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1143.44814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 859.8849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1206.39150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 974.95751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1098.1802734375,
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
        "date": 1740586433042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2010.56416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.7849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1454.7935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.4396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 463.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.63857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3584.55068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3991.27255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1172.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1171.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 847.53623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 850.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1037.87490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1084.29052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 903.65546875,
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
        "date": 1740588429047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1257.30791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1963.81064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.147265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.75078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 466.36806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.6205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.5431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3496.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4063.99384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1220.25537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1137.66669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 760.89990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1084.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1034.49912109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1004.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1067.32333984375,
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
        "date": 1740653547889,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1257.755078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.04521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.85693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.04521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.86865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 394.4939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.096484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 301.3021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3686.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4100.79111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1219.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1185.28935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1430.44853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 906.39755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1333.62431640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.823828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.11982421875,
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
        "date": 1740699011257,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.97841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.93173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 776.275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1450.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.6583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.0880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.9986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 236.7150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3575.2037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4101.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1192.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1158.26591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 753.596875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 839.1982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1092.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1088.187109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 982.7275390625,
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
        "date": 1741087391595,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.80556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.12392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1434.71669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 462.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.10830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3759.08740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3990.4263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1206.5900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.729296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1430.54267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 879.1025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1056.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1071.05400390625,
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
          "id": "3d56190ef82ce45002287f0e8f160c84120393ec",
          "message": "Rename Mountpoint's fuser fork (#1295)\n\n### Overview\nWe renamed our fuser fork and reset its version info as we're staring to\npublish it to crates.io.\nIn this PR we\n* revert the submodule approach for consuming the fork's crate\n* move the code from `vendor/fuser` to `mountpoint-s3-fuser` folder\n* consume the renamed and synched FUSER Fork  from `fuser/fork`\n* update dependency\n* change `vendor/fuser` to `mountpoint-s3-fuser` in aux scripts and\ndocumentation\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior it only affects the\nproject's structure.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nIt does not require neither version change not change log entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-04T09:27:06Z",
          "tree_id": "759c407fe58982ea916eb18c2b45410396467382",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d56190ef82ce45002287f0e8f160c84120393ec"
        },
        "date": 1741087587705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.8052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1956.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.16953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1430.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.65859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.0125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 300.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3489.53564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4047.603125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1162.803515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1300.30771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1480.11767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1231.9021484375,
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
        "date": 1741181247133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1267.49619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1994.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.0080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1461.005078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.79765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 441.3748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.4962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 307.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3657.45439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.69130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.97421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1149.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 918.81591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1122.0580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1150.662890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 965.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.93349609375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}