window.BENCHMARK_DATA = {
  "lastUpdate": 1727865417142,
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
        "date": 1727351167215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3264.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 312.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3315.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 321.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3756.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 250.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3341.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 203.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 46520.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 337.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 12133.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 37862.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 201.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 32888.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 18253.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 205.984375,
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
      }
    ]
  }
}