window.BENCHMARK_DATA = {
  "lastUpdate": 1729607183313,
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
        "date": 1727865109438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 154.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 409.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 443.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39770.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35663.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 508.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11784.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15202.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11732.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 245.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 161.76171875,
            "unit": "MiB"
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
        "date": 1727873173282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 153.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 446.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34490.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36058.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 493.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10241.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13706.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8868.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 231.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 134.74609375,
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
          "id": "8c144755df4693218e694ad77b86aadd94eee33a",
          "message": "Add random 6-character suffix to log file names (#1041)\n\n* Add PID to log file names if log file already exists\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update log filenames to always include some random string following the timestamp\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename logging_config fn to make_logging_config\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move make_logging_config back to method of CliArgs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-03T10:36:59Z",
          "tree_id": "1ee8fb9471da0c08704765e07b7d52ad3f28bd89",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c144755df4693218e694ad77b86aadd94eee33a"
        },
        "date": 1727958912020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 152.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 204.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 437.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40309.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42433.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11610.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12345.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12725.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 251.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 154.3515625,
            "unit": "MiB"
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
        "date": 1728052206299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 150.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 413.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 441.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38437.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34729.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13251.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10262.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9388.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 258.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 161.63671875,
            "unit": "MiB"
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
        "date": 1728058033268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 205.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 437.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34181.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34802.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 502.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13159.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13140.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11795.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 226.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 143.73046875,
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
          "id": "5abbce51cb47b4db9176992308cf037c2729e7be",
          "message": "Tidy up the fs module (#1051)\n\n* Refactor fs into submodules\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Reorder types in fs module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-07T08:47:24Z",
          "tree_id": "60b95595d6b1f9df7d227e1a603d4eddc3be50b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5abbce51cb47b4db9176992308cf037c2729e7be"
        },
        "date": 1728298052721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 145.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 183.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 447.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39690.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37971.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 512.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11555.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10344.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11001.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 246.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 145.8671875,
            "unit": "MiB"
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
        "date": 1728588513295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33697.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39929.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 505.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12246.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13432.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9478.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 246.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 161.85546875,
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
          "id": "9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb",
          "message": "Add support for single PutObject in mountpoint-s3-client (#1046)\n\n* Reintroduce the CRT InputStream as an option for the Message body\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up comments and tests on InputStream\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments to PutObjectTrailingChecksums and S3Operation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce separate params type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-11T21:40:18Z",
          "tree_id": "36ba1fef659d9a9b638854ce10fc9e95e08ab5f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb"
        },
        "date": 1728689995431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 438.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 335.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32032.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41012.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 496.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13093.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12217.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12193.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 246.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 159.92578125,
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
          "id": "534918e96337dee222b158df9d4bd92a05d791b9",
          "message": "Add a type-safe wrapper for open flags (#1054)\n\n* Introduce OpenFlags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix linux build\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Support attributes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore example code\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address access mode flags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-14T17:21:36Z",
          "tree_id": "0056110fae025f51fe2b596bbd0cb666f13cc696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/534918e96337dee222b158df9d4bd92a05d791b9"
        },
        "date": 1728933560431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 152.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 437.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37959.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34473.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11492.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11815.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13075.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 252.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 168.6015625,
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
          "id": "5954f539c9e07e565ee1519e6f73e64dc42eea77",
          "message": "Add support for custom headers in PUT requests (#1059)\n\n* Add custom headers to put_object_single\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add custom headers to put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T10:20:36Z",
          "tree_id": "ae843188149e0b169bf57b86b7767b5098459a8a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5954f539c9e07e565ee1519e6f73e64dc42eea77"
        },
        "date": 1728994859671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 223.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36285.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35315.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11831.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11750.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8869.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 197.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 160.3203125,
            "unit": "MiB"
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
        "date": 1729005344088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 144.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 196.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33543.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32937.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13618.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11618.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10505.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 188.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 143.81640625,
            "unit": "MiB"
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
        "date": 1729010703324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 146.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 253.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 431.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 335.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42329.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33817.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11876.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13304.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12420.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 229.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 153.60546875,
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
          "id": "e98a5c2271e2370e2380e25b055ff4f437e923df",
          "message": "Return the new object ETag in PutObjectResult (#1057)\n\n* Return the ETag in PutObjectResult\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of response headers\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move ETag to a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T15:53:03Z",
          "tree_id": "e4cc93f8fa298728674031afda3192564852e862",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e98a5c2271e2370e2380e25b055ff4f437e923df"
        },
        "date": 1729014776439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39432.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31107.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 494.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11286.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12387.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9573.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 249.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 151.5,
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
          "id": "6a8a483ad5e54cf321fe62d10925189daec18075",
          "message": "Add support for writing object metadata with PutObject (#1062)\n\n* Add support for writing object metadata with PutObject\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make changes from code review\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Fix merge conflicts\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-16T09:59:04Z",
          "tree_id": "dc8021087652f81bb6bf3697c52ab6794d647fd7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a8a483ad5e54cf321fe62d10925189daec18075"
        },
        "date": 1729079922118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 158.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 230.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37253.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34129.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 504.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12629.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12553.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11891.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 187.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 143.94140625,
            "unit": "MiB"
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
        "date": 1729099281570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 145.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 208.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 439.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38124.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33235.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 509.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13337.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12862.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13443.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 234.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 150.3984375,
            "unit": "MiB"
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
        "date": 1729101809263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 200.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37282.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30802.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 507.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13378.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10143.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10889.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 209.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 161.0859375,
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
          "id": "d1b662b7692e60b46e63a74ec1e63acc158a892e",
          "message": "Add entries for new PUT features to the client changelog  (#1067)\n\n* Add entries for new PUT features to the client changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove subsection\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-16T16:37:38Z",
          "tree_id": "3d13d596b3210b5047dbcc049b87ca1a6a07ead5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1b662b7692e60b46e63a74ec1e63acc158a892e"
        },
        "date": 1729103837504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 148.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 431.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35300.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 407.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36661.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 501.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11696.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13940.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14275.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 217.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 156.3671875,
            "unit": "MiB"
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
        "date": 1729181787216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 151.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 451.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37272.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36370.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 518.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12493.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10635.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10723.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 201.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.30859375,
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
          "id": "7d43629e78ec3a3709a0d4bebae74cac66440fe6",
          "message": "Release new crate versions (#1070)\n\n* Release new crate versions\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for `mountpoint-s3-crt`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-17T15:47:19Z",
          "tree_id": "7ddd775a9582cfb8d0ffa3271cdedb2325ffaf43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d43629e78ec3a3709a0d4bebae74cac66440fe6"
        },
        "date": 1729187111582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 164.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 436.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37419.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40584.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 503.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12424.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11722.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11835.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 229.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 149.93359375,
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
          "id": "39c58a112576e5c31863291f322fc43ab5689baa",
          "message": "Pin Rust to 1.81.0 (#1073)\n\n* Pin Rust to 1.81.0\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Revert GitHub action changes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Use `actions-rust-lang/setup-rust-toolchain@v1` to install Rust\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Disable default RUSTFLAGS\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Add `rust-src` to components in `rust-toolchain.toml`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-22T12:27:14Z",
          "tree_id": "ac6d416b1111ddc104d31ca905fe71e47aa9047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c58a112576e5c31863291f322fc43ab5689baa"
        },
        "date": 1729607183274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 155.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 429.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37589.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40058.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11560.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12457.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11796.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 239.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.14453125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}