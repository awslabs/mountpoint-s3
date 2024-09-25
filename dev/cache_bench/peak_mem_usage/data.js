window.BENCHMARK_DATA = {
  "lastUpdate": 1727280972140,
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
        "date": 1727196937001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3374.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3476.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 328.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3246.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 252.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3384.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 183.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 52730.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 332.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 10352.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 345.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 34828.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 200.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 31738.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 20956.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 205.83984375,
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
        "date": 1727204883068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3217.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3335.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 325.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3317.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 238.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3206.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 182.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 44935.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 11794.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 351.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 35950.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 206.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 32133.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 18613.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.6875,
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
        "date": 1727280972104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3293.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3198.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 327.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3215.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 249.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3309.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 196.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 50357.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 6709.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 32804.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 198.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 38039.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 22510.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 202.640625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}