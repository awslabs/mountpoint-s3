window.BENCHMARK_DATA = {
  "lastUpdate": 1729607181769,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "fda51030b360e1f63f7cab24a2ae2798a8d80410",
          "message": "Adjust read window based on used memory (#1013)\n\n* Mem limiter prototype\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Clean up development logging\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Scale up atomically, scale down after data was consumed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Remove Client from MemoryLimiter, document this structure\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Simplify the logic and include client metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Correct client mem usage stats\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Put the cli argument behind a feature flag\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix scaling logic and address comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-10-02T08:34:40Z",
          "tree_id": "cf541368e17bada06e3d3397b340a61301bebba2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fda51030b360e1f63f7cab24a2ae2798a8d80410"
        },
        "date": 1727865107309,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.0560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.206640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.15712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.6822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.23671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.02412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.65478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6026.73701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 513.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2479.7642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1746.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1469.24716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1362.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.88095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1812.4142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1111.79619140625,
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
          "id": "b749a3ed8a92dcebd43759f42fd555584cb04e7e",
          "message": "Tidy up the prefetcher logging (#1048)\n\nWe have changed some log level in #1013. We probably want to push some\nof them down to trace instead of debug.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-02T10:48:33Z",
          "tree_id": "b633f7a8b5e1a539fe2d613c7d09cfbf168bdd04",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b749a3ed8a92dcebd43759f42fd555584cb04e7e"
        },
        "date": 1727873170954,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.10185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.67666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.46533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.1759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.65849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5886.11845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.76630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2205.58544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 259.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.04794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.85537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1346.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.63798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1475.38134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.91298828125,
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
          "id": "8c144755df4693218e694ad77b86aadd94eee33a",
          "message": "Add random 6-character suffix to log file names (#1041)\n\n* Add PID to log file names if log file already exists\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update log filenames to always include some random string following the timestamp\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename logging_config fn to make_logging_config\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move make_logging_config back to method of CliArgs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-03T10:36:59Z",
          "tree_id": "1ee8fb9471da0c08704765e07b7d52ad3f28bd89",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c144755df4693218e694ad77b86aadd94eee33a"
        },
        "date": 1727958909760,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.100390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.53583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.8951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.24384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.09638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5932.46943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.2943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2180.126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 258.81201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1873.53115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.7599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1448.29833984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1226.6541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 129.04580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1905.8927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1050.02958984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fa3a8f1cd06f6fb48a36137f05e9d936b951f6a",
          "message": "Update CRT submodules to latest releases (#1027)\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-04T12:33:12Z",
          "tree_id": "d8fcc77fb4d2f91dda2481013d14462d16a28b9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fa3a8f1cd06f6fb48a36137f05e9d936b951f6a"
        },
        "date": 1728052204496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.882421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.78857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.1693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.98974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.08837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5721.60859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.30546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2185.82685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.32060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1701.76025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.24501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1602.8861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1421.61611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.07890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1938.5603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1068.32685546875,
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
          "id": "2b36e671971fba99b2dd8ea5bd6b5413f11f7a45",
          "message": "Update CRT submodules to latest releases (#1053)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-04T14:08:10Z",
          "tree_id": "29023196567c0a071afebd985f977ec62fd1ffdc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b36e671971fba99b2dd8ea5bd6b5413f11f7a45"
        },
        "date": 1728058031288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.0921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.07470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.53779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.12763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.12294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.82060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.688671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5937.05478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.41533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2196.24638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.8599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1662.83173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.41689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1473.54873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1285.3626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.9494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1324.6994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 971.490625,
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
          "id": "5abbce51cb47b4db9176992308cf037c2729e7be",
          "message": "Tidy up the fs module (#1051)\n\n* Refactor fs into submodules\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Reorder types in fs module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-07T08:47:24Z",
          "tree_id": "60b95595d6b1f9df7d227e1a603d4eddc3be50b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5abbce51cb47b4db9176992308cf037c2729e7be"
        },
        "date": 1728298051079,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.6365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.02919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.79794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.52333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.3552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6022.23154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.64052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2278.923046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.466015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1736.77578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1496.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1298.7564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.241796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1641.07666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.50927734375,
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
          "id": "0415b5c9e9e0be906ce17446834f2aadc2655b79",
          "message": "Update documentation related to the prefetcher (#1049)\n\n* Update documentation related to the prefetcher\n\nUpdate changelog to include changes in the prefetcher and document the\nunstable configuration to set maximum prefetch window size.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Change wording\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Apply PR suggestion\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-10-10T17:28:26Z",
          "tree_id": "958c3f335cc3f766fe9bcb55350473a7d9b75f1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0415b5c9e9e0be906ce17446834f2aadc2655b79"
        },
        "date": 1728588510853,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.159765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.90048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 89.94453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 165.55673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.14482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.73876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.7390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5974.6935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 511.59365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2199.957421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.4861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2118.15888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.3099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1486.7400390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1388.901171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.26416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1705.79208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.12333984375,
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
          "id": "9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb",
          "message": "Add support for single PutObject in mountpoint-s3-client (#1046)\n\n* Reintroduce the CRT InputStream as an option for the Message body\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up comments and tests on InputStream\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments to PutObjectTrailingChecksums and S3Operation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce separate params type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-11T21:40:18Z",
          "tree_id": "36ba1fef659d9a9b638854ce10fc9e95e08ab5f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb"
        },
        "date": 1728689993252,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.76875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.35283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.46767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.3798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.82880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.35380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.00654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5970.5171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.5552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2195.5826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.94248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1890.26064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1443.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1325.83837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.0296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1591.8,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1142.29130859375,
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
          "id": "534918e96337dee222b158df9d4bd92a05d791b9",
          "message": "Add a type-safe wrapper for open flags (#1054)\n\n* Introduce OpenFlags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix linux build\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Support attributes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore example code\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address access mode flags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-14T17:21:36Z",
          "tree_id": "0056110fae025f51fe2b596bbd0cb666f13cc696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/534918e96337dee222b158df9d4bd92a05d791b9"
        },
        "date": 1728933558052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.8365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.52421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.86552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.9759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.63984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.551953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.99892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6088.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.270703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2155.646875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1834.6583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.561328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1462.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1347.69326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.33974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1906.38154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.66533203125,
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
          "id": "5954f539c9e07e565ee1519e6f73e64dc42eea77",
          "message": "Add support for custom headers in PUT requests (#1059)\n\n* Add custom headers to put_object_single\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add custom headers to put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T10:20:36Z",
          "tree_id": "ae843188149e0b169bf57b86b7767b5098459a8a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5954f539c9e07e565ee1519e6f73e64dc42eea77"
        },
        "date": 1728994857390,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.041796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.91640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.13251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.45634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.116015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5938.840234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.048046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2246.042578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.96669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.48125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.01806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1712.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.809375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.31123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1440.559765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1129.197265625,
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
          "distinct": false,
          "id": "2b0161600400c7ab7ccb1d6811abb9774facef5d",
          "message": "Release v1.10.0 (#1060)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-15T13:16:36Z",
          "tree_id": "f50831bf5cefbec38e30e8b5ffabe04b56bc2e30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b0161600400c7ab7ccb1d6811abb9774facef5d"
        },
        "date": 1729005342073,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.45078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.18154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 164.0291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.46845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.28857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.3759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.1265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5884.33251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 510.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2197.4748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.46826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1714.703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.49345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1491.3748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1335.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.03388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1372.98427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.32177734375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6acbd206f246d2f89c68711951c9ecd1b70e0c16",
          "message": "Update benchmark CI configuration (#1063)\n\n* Update benchmark CI configuration\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Enable comments for throughput benchmarks\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-15T14:45:19Z",
          "tree_id": "7d169ae610d77b9a2e68103920abb7b5ea8754e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6acbd206f246d2f89c68711951c9ecd1b70e0c16"
        },
        "date": 1729010700133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.50888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.0751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.96103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.87109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.08525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5983.7484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 510.56259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2246.00380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1861.70751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.75498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1443.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1312.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.45029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1355.31298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 946.55126953125,
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
          "id": "e98a5c2271e2370e2380e25b055ff4f437e923df",
          "message": "Return the new object ETag in PutObjectResult (#1057)\n\n* Return the ETag in PutObjectResult\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of response headers\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move ETag to a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T15:53:03Z",
          "tree_id": "e4cc93f8fa298728674031afda3192564852e862",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e98a5c2271e2370e2380e25b055ff4f437e923df"
        },
        "date": 1729014774146,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.3259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.07919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 164.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.11171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.90859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.02802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5858.1283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.4642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2207.2169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1831.3109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.24013671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1248.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1744.225,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.0056640625,
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
          "id": "6a8a483ad5e54cf321fe62d10925189daec18075",
          "message": "Add support for writing object metadata with PutObject (#1062)\n\n* Add support for writing object metadata with PutObject\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make changes from code review\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Fix merge conflicts\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-16T09:59:04Z",
          "tree_id": "dc8021087652f81bb6bf3697c52ab6794d647fd7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a8a483ad5e54cf321fe62d10925189daec18075"
        },
        "date": 1729079919195,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.9623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.5115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.26240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.4560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.61767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.10322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.7453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.59521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2235.10234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.25009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.97216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.1505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1478.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.39208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.91328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1395.8103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 940.4658203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e411e02a42a6931ed701bf0582cde7c5a09752a4",
          "message": "Update CRT submodules to latest releases (#1061)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated mountpoint-s3-client changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T15:21:34Z",
          "tree_id": "b26b63c19e5ae32eaf2c058aac881197197f11d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e411e02a42a6931ed701bf0582cde7c5a09752a4"
        },
        "date": 1729099279232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.41298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.40263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.3734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.5232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.65947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5935.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.32333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2234.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.4861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1762.16572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.18466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1442.973046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1319.5642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.4375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1562.1224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1002.01865234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "de6c1bc20781b947595f97f6f076dee5c29f13b2",
          "message": "Copy object operation (#1052)\n\n* Copy operation\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Rebased from main\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressed some comments\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressing commentds\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T16:05:39Z",
          "tree_id": "c99cda568f5b8457f46bf6ff36f713fe7d6bafd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6c1bc20781b947595f97f6f076dee5c29f13b2"
        },
        "date": 1729101806959,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.53037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.8861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.0208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.33427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.86064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5667.35615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 510.43427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2210.0845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.00849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2113.7982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.7611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1653.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1396.04873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.75478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1462.90009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 988.4208984375,
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
          "id": "d1b662b7692e60b46e63a74ec1e63acc158a892e",
          "message": "Add entries for new PUT features to the client changelog  (#1067)\n\n* Add entries for new PUT features to the client changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove subsection\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-16T16:37:38Z",
          "tree_id": "3d13d596b3210b5047dbcc049b87ca1a6a07ead5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1b662b7692e60b46e63a74ec1e63acc158a892e"
        },
        "date": 1729103835578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.41435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.01591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.10166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 163.61962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.8578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.545703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.84501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.6384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6167.11298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 508.78759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2394.18955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.3423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2131.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1432.852734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1466.9333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.07490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1414.1681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.4361328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unexge@gmail.com",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "587df3b1988441acf3cf86983aa096f7b50d151f",
          "message": "Update CRT submodules to latest releases (#1069)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update non-existent network interface initialization test\n\nCRT was returning error during first operation before if it provided\nwith a non-existent network interface name. But with\nhttps://github.com/awslabs/aws-c-s3/pull/456, it started failing\nduring the client creation phase. Our tests were written for the\nprevious behaviour and was expecting client creation to succeed even\nwith an invalid network interface. The test is updated to expect\nerrors during client creation.\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG\n\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Burak <unexge@gmail.com>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak <unexge@gmail.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-17T14:16:47Z",
          "tree_id": "094a67417e5b700769c6dbc2b2b1f4f90ffe5b7e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/587df3b1988441acf3cf86983aa096f7b50d151f"
        },
        "date": 1729181784854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.23798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.938671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.2671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.08857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.0802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.51357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.4232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5918.96640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.56748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2178.65986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.92275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1692.54228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.4314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1540.825,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1319.698828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.6623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1471.70478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.51123046875,
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
          "id": "7d43629e78ec3a3709a0d4bebae74cac66440fe6",
          "message": "Release new crate versions (#1070)\n\n* Release new crate versions\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for `mountpoint-s3-crt`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-17T15:47:19Z",
          "tree_id": "7ddd775a9582cfb8d0ffa3271cdedb2325ffaf43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d43629e78ec3a3709a0d4bebae74cac66440fe6"
        },
        "date": 1729187109083,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.4927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.36796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.37509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5949.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.8181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2268.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1600.86689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.29189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1646.9810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1436.92373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.15634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1517.46337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.45859375,
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
          "id": "39c58a112576e5c31863291f322fc43ab5689baa",
          "message": "Pin Rust to 1.81.0 (#1073)\n\n* Pin Rust to 1.81.0\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Revert GitHub action changes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Use `actions-rust-lang/setup-rust-toolchain@v1` to install Rust\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Disable default RUSTFLAGS\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Add `rust-src` to components in `rust-toolchain.toml`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-22T12:27:14Z",
          "tree_id": "ac6d416b1111ddc104d31ca905fe71e47aa9047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c58a112576e5c31863291f322fc43ab5689baa"
        },
        "date": 1729607181214,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.94052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.60810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.30693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.16337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.5876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.2265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.6626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.8916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5824.13349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.1546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2200.50234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.78291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1804.7111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.3029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1660.80419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1260.6265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1382.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.86357421875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}