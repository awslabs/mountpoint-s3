window.BENCHMARK_DATA = {
  "lastUpdate": 1727958875727,
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
          "id": "5d5e0ac6ada23cb7075996e27be812681107b9b2",
          "message": "Add memory usage check to the CI (#1028)\n\n* Check resource utilization\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-24T12:46:21Z",
          "tree_id": "9469171f6d722d4ed6ad22f21c8f3825202c29ba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d5e0ac6ada23cb7075996e27be812681107b9b2"
        },
        "date": 1727189247392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 125.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 379.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 121.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 390.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 312.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35652.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 441.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49655.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 517.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7680.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 270.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9918.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11898.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 676.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 447.76171875,
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
          "id": "ed4735d71af0432491a361912da747ccaf39a21b",
          "message": "Add new 'mock' feature for 'mock-mount-s3' binary (#1030)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-24T14:52:05Z",
          "tree_id": "7e4a503beeb71640c42ae14d2533df831830337a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed4735d71af0432491a361912da747ccaf39a21b"
        },
        "date": 1727196685195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 115.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 111.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39140.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 421.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 52108.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 539.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10190.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9917.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12603.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 273.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 694.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 373.51171875,
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
          "id": "f92bf6c41e8b75f7e51770dc69afcc8332e33569",
          "message": "Add support for concurrent downloads to prefetch_benchmark example (#1022)\n\n* Fix prefetch_benchmark example\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add support for concurrent downloads to prefetch_benchmark example\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use CRT runtime\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-24T17:05:39Z",
          "tree_id": "f06430ab3fac7981589aacd6abaabcb9473e3d2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f92bf6c41e8b75f7e51770dc69afcc8332e33569"
        },
        "date": 1727204670967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 119.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 378.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 125.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 391.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36898.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 429.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47666.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 520.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9528.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10259.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13122.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 391.8984375,
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
      }
    ]
  }
}