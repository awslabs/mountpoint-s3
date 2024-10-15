window.BENCHMARK_DATA = {
  "lastUpdate": 1729014721539,
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
          "distinct": false,
          "id": "a23665d1cdc982e74f5ba9f579930a85f2d7215f",
          "message": "Fix resource utilization check in the CI (#1033)\n\nOur CI workflows work by checking out the code from branch `gh-pages` to\nretrieve benchmark results from previous commits and compare them to values\nin the current run. However, the resource utilization check was done\nafter the benchmark result check which already has pulled in the branch\n`gh-pages` resulting in errors because the branch already exists. This\nchange fixes that.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-25T14:13:53Z",
          "tree_id": "1ebd4a233fc844aba04bdb98fac7cb539b994461",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a23665d1cdc982e74f5ba9f579930a85f2d7215f"
        },
        "date": 1727280691315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 120.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 376.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 126.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33996.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 53562.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 527.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9815.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10287.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11585.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 655.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 428.890625,
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
          "id": "7e279a3cb11028f9892a5c16cd2b760723f5e339",
          "message": "Add clarification on behavior tenet for ownership/permissions (#1031)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T09:42:07Z",
          "tree_id": "d258d475dc481d2ef6d5dcd457f55e01d98d68e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e279a3cb11028f9892a5c16cd2b760723f5e339"
        },
        "date": 1727350884271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 122.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 114.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 396.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39364.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 421.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 50230.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 518.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10076.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12607.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12803.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 740.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.01171875,
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
          "id": "6cda3049e6b0d627748c16977c97c6e4f6241645",
          "message": "Allow PR checks to be run against any base branch (#1034)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T14:15:11Z",
          "tree_id": "46907ea02078b4486e23d70ff4cb9afec650ee5e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cda3049e6b0d627748c16977c97c6e4f6241645"
        },
        "date": 1727367670009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 119.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 376.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 122.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 398.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40855.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 428.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 51718.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 531.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9550.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9393.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9520.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 863.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 456.76171875,
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
        "date": 1727378510967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 127.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 379.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 129.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39951.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 452.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49834.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 522.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10432.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 270.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9823.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12959.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 822.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 464.1640625,
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
        "date": 1727777113703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 122.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 383.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 130.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36432.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 432.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 51625.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 530.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11279.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 274.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9547.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12177.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 678.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 437.26171875,
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
        "date": 1727804371277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 113.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 373.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 117.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 398.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36980.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 432.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 55222.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 543.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9137.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11549.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11453.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 707.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 473.546875,
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
        "date": 1727809246539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 129.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 380.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 123,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 387.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41880.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 422.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 52421.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 542.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9269.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9525.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11227.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 726.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 447.01171875,
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
        "date": 1727865164912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 127.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 388.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 132.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 319.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39663.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 451.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 50067.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 535.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9965.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 281.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9227.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12103.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 286.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 756.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 438.0859375,
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
        "date": 1727873178388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 137.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 138.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37629.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 431.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43653.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 541.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9110.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 274.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12903.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10202.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 272.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 735.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.24609375,
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
        "date": 1727958875691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 133.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 380.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 124.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39721.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 421.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43978.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 553.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10858.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 278.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10361.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13131.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 749.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.25,
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
        "date": 1728052230693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 127.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 137.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36620.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 428.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 51487.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 553.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9930.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11243.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12042.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 600.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.85546875,
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
        "date": 1728058048954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 133.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 139.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35449.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 451.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47124.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 542.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11220.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11642.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12329.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 274.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 732.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.04296875,
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
        "date": 1728297982454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 135.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 378.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 128.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 397.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41225.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 414.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47145.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 540.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9189.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9915.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12742.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 282.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 506.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 398.1015625,
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
        "date": 1728410660235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 121.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 127.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34602.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 438.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 50179.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 519.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9534.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 270.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11148.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8680.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 274.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 620.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 414.5859375,
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
        "date": 1728588477454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 128.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 123.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 397.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36456.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 434.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43419.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 539.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9724.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 290.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8955.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13016.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 273.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 683.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 452.27734375,
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
        "date": 1728689949678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 136.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 381.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 141.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39460.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 445.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 43946.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 549.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11465.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 280.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10743,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11324.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 632.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 374.953125,
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
        "date": 1728933545538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 137.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 378.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 127.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36420.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 424.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 51610.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 541.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11174.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 284.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11454.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14230.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 382.984375,
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
        "date": 1728994786899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 135.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 376.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 138.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43131.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 440.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47470.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 540.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11698.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 282.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10749.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13209.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 278.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 730.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 407.08203125,
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
        "date": 1729005369381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 135.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 382.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 139.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37690.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 425.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49600,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 539.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9323.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 275.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10858.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11568.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 276.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 748.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.3828125,
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
        "date": 1729014721501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 123.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 382.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 132.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 319.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35085.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 459.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49496.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 541.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10599.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11072.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12920.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 275.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 648.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 421.87109375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}