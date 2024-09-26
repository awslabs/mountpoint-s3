window.BENCHMARK_DATA = {
  "lastUpdate": 1727367684669,
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
        "date": 1727204636853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 141.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 169.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 424.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40849.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37785.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 486.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11102.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12644.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13851.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 229.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 147.01171875,
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
        "date": 1727287645746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 139.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 385.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 438.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38698.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44723.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 488.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12168.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11140.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13261.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 210.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 141.76171875,
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
        "date": 1727350880695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 140.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 426.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38141.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47137.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 495.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14228.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13044.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15341.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 235.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 144.76171875,
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
        "date": 1727367684634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 140.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 433.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33993.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 49446.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 494.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11209.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13309.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14476.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 235.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 156.01171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}