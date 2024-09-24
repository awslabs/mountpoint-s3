window.BENCHMARK_DATA = {
  "lastUpdate": 1727196697101,
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
        "date": 1727189244511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 139.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 388.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 436.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 314.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37825.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 48097.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 482.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11437.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12464.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12762,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 253.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 239.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 156.40234375,
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
        "date": 1727196696886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 143.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36464.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44262.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 485.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11675.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12719.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15513.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 181.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 141.01171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}