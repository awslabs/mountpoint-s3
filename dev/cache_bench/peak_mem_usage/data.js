window.BENCHMARK_DATA = {
  "lastUpdate": 1727189531722,
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
        "date": 1727189531506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3293.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 323.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3498.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 336.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3420.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 244.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3460.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 193.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43998.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 331.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3756.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 354.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 33210.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 183.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 38876.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 19303.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.95703125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}