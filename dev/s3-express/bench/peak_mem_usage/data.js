window.BENCHMARK_DATA = {
  "lastUpdate": 1728052206335,
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
        "date": 1727777151938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 140.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 172.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37436.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 50886.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 485.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10271.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11999.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13693.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 223.28515625,
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
        "date": 1727804385256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 136.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 385.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 426.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34430.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 46228.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 504.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9593.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14086.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14537.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 234.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 136.921875,
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
        "date": 1727809259534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 138.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 190.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 444.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37393.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 45129.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 490.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11742.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13357.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14250.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 240.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 135.3203125,
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
      }
    ]
  }
}