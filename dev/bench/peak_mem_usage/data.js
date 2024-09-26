window.BENCHMARK_DATA = {
  "lastUpdate": 1727350884305,
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
      }
    ]
  }
}