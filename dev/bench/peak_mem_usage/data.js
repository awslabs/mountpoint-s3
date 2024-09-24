window.BENCHMARK_DATA = {
  "lastUpdate": 1727196685412,
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
      }
    ]
  }
}