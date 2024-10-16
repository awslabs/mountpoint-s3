window.BENCHMARK_DATA = {
  "lastUpdate": 1729080147240,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "6cda3049e6b0d627748c16977c97c6e4f6241645",
          "message": "Allow PR checks to be run against any base branch (#1034)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T14:15:11Z",
          "tree_id": "46907ea02078b4486e23d70ff4cb9afec650ee5e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cda3049e6b0d627748c16977c97c6e4f6241645"
        },
        "date": 1727367979798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3193.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3414.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3346.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 251.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3271.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 183.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 55544.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 331.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 14219.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 362.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 21873.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 26285.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 28022.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 203.2890625,
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
          "id": "0b7d0aed9c034a9e8d501cd7816ced3a7e07b587",
          "message": "Initial implementation of a shared cache on S3 Express (#1032)\n\n* Make cache block size user configurable (default 1024 KiB)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Require Clone on ObjectClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement initial draft of shared cache in Express\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Encode cache version and block size into keys\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Decouple DataCacheError from io::Error\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve error handling\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add unit test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Allow sharing the cache when mounting with different prefixes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix flow-control window\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-26T17:20:21Z",
          "tree_id": "e2b577fe57ac429d8c8791faa962bd549b18f128",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b7d0aed9c034a9e8d501cd7816ced3a7e07b587"
        },
        "date": 1727378815550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3418.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 322.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3255.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 329.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3215.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 251.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3362.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 192.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 54694.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 14227.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 352.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 38390.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 39105.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 29733.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 202.22265625,
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
          "id": "359b8bfb9f9ef508b51f4f8e89c8940a40552bde",
          "message": "Update O_SYNC/O_DSYNC open flag check to occur ahead of lookup (#1042)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-01T08:01:01Z",
          "tree_id": "ad42f90f993231b2483bc08b4d68c608082b191f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/359b8bfb9f9ef508b51f4f8e89c8940a40552bde"
        },
        "date": 1727777477276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3183.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 316.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3368.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 322.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3483.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3211.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 194.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 49834.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 4705.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 350.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 24649.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 196.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 39466.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 18426.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 202.578125,
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
          "id": "4e99e79bc292d2d0e473cff8a328181a89b381be",
          "message": "Improve error handling and reporting when removing cache blocks (#1043)\n\n* Improve error handling when removing cache blocks\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Clean up ObjectId Debug implementation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-01T15:37:26Z",
          "tree_id": "b5826caade944bf077a09ba73062c315d00a344f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e99e79bc292d2d0e473cff8a328181a89b381be"
        },
        "date": 1727804679676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3309.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 315.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3308.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3276.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 253.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3392.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 192.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 48233.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 337.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 19146.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 348.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3588.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 195,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 40850.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 23117.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 200.03515625,
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
          "id": "e95560b7a1720a7c3bdf51daf670d217ee79e11b",
          "message": "Remove clone of current span in record_name fn (#1045)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-01T17:01:59Z",
          "tree_id": "b3aedbf9dc1c6160f286c5e2dc3a4fc3bea04994",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e95560b7a1720a7c3bdf51daf670d217ee79e11b"
        },
        "date": 1727809524169,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3504.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 322.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3260.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 322.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3305.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 253.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3654.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 181.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 47792.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 334.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 18668.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 356.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 23907.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 198.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 25584.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 21861.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.6171875,
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
          "id": "fda51030b360e1f63f7cab24a2ae2798a8d80410",
          "message": "Adjust read window based on used memory (#1013)\n\n* Mem limiter prototype\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Clean up development logging\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Scale up atomically, scale down after data was consumed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Remove Client from MemoryLimiter, document this structure\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Simplify the logic and include client metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Correct client mem usage stats\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Put the cli argument behind a feature flag\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix scaling logic and address comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-10-02T08:34:40Z",
          "tree_id": "cf541368e17bada06e3d3397b340a61301bebba2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fda51030b360e1f63f7cab24a2ae2798a8d80410"
        },
        "date": 1727865417106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3501.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 336.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3433.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3448.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 189.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 14163.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3646.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 364.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3631.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 203.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3688.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3308.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.85546875,
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
        "date": 1727873359661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3545.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3652.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 342.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3594.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 249.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3568.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25554.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3390.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 357.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3712.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3639.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3300.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.2265625,
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
        "date": 1727959084018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3362.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3345.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 342.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3379.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3218.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 187.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19562.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3552.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3768.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3509.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3413.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.85546875,
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
        "date": 1728052462172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3423.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 316.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3264.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3200.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 245.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3317.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 195,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23116.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3649.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3550.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3533.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3244.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 201.2109375,
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
        "date": 1728058280360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3410.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3374.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 338.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3277.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3280.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 200.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13815.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3711.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3557.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3427.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3411.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 203.34375,
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
        "date": 1728298391319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3386.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3277.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 340.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3447.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3268.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 187.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31126.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3539.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 362.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3604.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3627.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 16064.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 220.30859375,
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
          "id": "548c0deab18b9d1795d39fa51ad4484847497fd1",
          "message": "Add tests for fstat during writing covering breaking cases (#1044)\n\n* Add tests for fstat during writing covering breaking cases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-08T16:07:09Z",
          "tree_id": "53ff847bf2d3f4816394751d41b74907d0622fb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/548c0deab18b9d1795d39fa51ad4484847497fd1"
        },
        "date": 1728410995641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3337.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3348.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 334.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3324.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 243.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 188.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17651.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3647.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 354.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3614.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3570.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3278.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.48046875,
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
        "date": 1728588745631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3311.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3229.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 335.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3305.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3312.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 198.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4402.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3582.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3691.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3489.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3317.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 199.984375,
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
        "date": 1728690104518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3251.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3330.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3425.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3307.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 190.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30896.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3560.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3551.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 199.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3506.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11689.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 220.7578125,
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
        "date": 1728933722619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3441.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3230.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3333,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 252.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3236.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 200.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21334.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3600.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 359.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3637.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3548.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3441.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.7734375,
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
        "date": 1728995040050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3285.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3351.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 331.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3217.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 248.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3434.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 183.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30007.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3626.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3608.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 191.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3594.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8497.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.28125,
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
        "date": 1729005605035,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3301.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3238.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 335.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3257.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3270.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 187.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17279.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3472.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 359.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3520.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3511.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10716.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.1875,
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
        "date": 1729010954871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3452.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 321.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3211.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3305.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3389.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 189.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13816.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3475.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3677.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 198.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3450.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3385,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 201.5703125,
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
        "date": 1729014915659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3602.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3515.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3442.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3334.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30981.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3443.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3477.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3590.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3278.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.0859375,
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
        "date": 1729080147202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3307.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3374.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 338.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3299.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3347.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 198.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29470.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3715.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3536.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13974.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3279.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.6328125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}