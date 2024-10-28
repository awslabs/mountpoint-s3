window.BENCHMARK_DATA = {
  "lastUpdate": 1730145552816,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
        "date": 1728689995431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 438.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 335.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32032.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41012.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 496.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13093.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12217.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12193.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 246.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 159.92578125,
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
        "date": 1728933560431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 152.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 437.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37959.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34473.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11492.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11815.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13075.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 252.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 168.6015625,
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
        "date": 1728994859671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 223.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36285.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35315.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11831.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11750.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8869.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 197.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 160.3203125,
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
        "date": 1729005344088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 144.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 196.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33543.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32937.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13618.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11618.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10505.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 188.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 143.81640625,
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
          "distinct": false,
          "id": "6acbd206f246d2f89c68711951c9ecd1b70e0c16",
          "message": "Update benchmark CI configuration (#1063)\n\n* Update benchmark CI configuration\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Enable comments for throughput benchmarks\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-15T14:45:19Z",
          "tree_id": "7d169ae610d77b9a2e68103920abb7b5ea8754e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6acbd206f246d2f89c68711951c9ecd1b70e0c16"
        },
        "date": 1729010703324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 146.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 253.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 431.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 335.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42329.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33817.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11876.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13304.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12420.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 229.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 153.60546875,
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
        "date": 1729014776439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39432.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31107.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 494.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11286.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12387.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9573.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 249.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 151.5,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a8a483ad5e54cf321fe62d10925189daec18075",
          "message": "Add support for writing object metadata with PutObject (#1062)\n\n* Add support for writing object metadata with PutObject\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make changes from code review\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Fix merge conflicts\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-16T09:59:04Z",
          "tree_id": "dc8021087652f81bb6bf3697c52ab6794d647fd7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a8a483ad5e54cf321fe62d10925189daec18075"
        },
        "date": 1729079922118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 158.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 230.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37253.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34129.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 504.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12629.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12553.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11891.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 187.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 143.94140625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e411e02a42a6931ed701bf0582cde7c5a09752a4",
          "message": "Update CRT submodules to latest releases (#1061)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated mountpoint-s3-client changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T15:21:34Z",
          "tree_id": "b26b63c19e5ae32eaf2c058aac881197197f11d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e411e02a42a6931ed701bf0582cde7c5a09752a4"
        },
        "date": 1729099281570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 145.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 208.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 439.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38124.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33235.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 509.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13337.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12862.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13443.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 234.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 150.3984375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "de6c1bc20781b947595f97f6f076dee5c29f13b2",
          "message": "Copy object operation (#1052)\n\n* Copy operation\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Rebased from main\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressed some comments\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressing commentds\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T16:05:39Z",
          "tree_id": "c99cda568f5b8457f46bf6ff36f713fe7d6bafd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6c1bc20781b947595f97f6f076dee5c29f13b2"
        },
        "date": 1729101809263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 200.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37282.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30802.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 507.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13378.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10143.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10889.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 209.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 161.0859375,
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
          "id": "d1b662b7692e60b46e63a74ec1e63acc158a892e",
          "message": "Add entries for new PUT features to the client changelog  (#1067)\n\n* Add entries for new PUT features to the client changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove subsection\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-16T16:37:38Z",
          "tree_id": "3d13d596b3210b5047dbcc049b87ca1a6a07ead5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1b662b7692e60b46e63a74ec1e63acc158a892e"
        },
        "date": 1729103837504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 148.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 431.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35300.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 407.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36661.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 501.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11696.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13940.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14275.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 217.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 156.3671875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unexge@gmail.com",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "587df3b1988441acf3cf86983aa096f7b50d151f",
          "message": "Update CRT submodules to latest releases (#1069)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update non-existent network interface initialization test\n\nCRT was returning error during first operation before if it provided\nwith a non-existent network interface name. But with\nhttps://github.com/awslabs/aws-c-s3/pull/456, it started failing\nduring the client creation phase. Our tests were written for the\nprevious behaviour and was expecting client creation to succeed even\nwith an invalid network interface. The test is updated to expect\nerrors during client creation.\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG\n\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Burak <unexge@gmail.com>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak <unexge@gmail.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-17T14:16:47Z",
          "tree_id": "094a67417e5b700769c6dbc2b2b1f4f90ffe5b7e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/587df3b1988441acf3cf86983aa096f7b50d151f"
        },
        "date": 1729181787216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 151.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 451.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37272.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36370.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 518.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12493.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10635.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10723.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 201.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.30859375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d43629e78ec3a3709a0d4bebae74cac66440fe6",
          "message": "Release new crate versions (#1070)\n\n* Release new crate versions\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for `mountpoint-s3-crt`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-17T15:47:19Z",
          "tree_id": "7ddd775a9582cfb8d0ffa3271cdedb2325ffaf43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d43629e78ec3a3709a0d4bebae74cac66440fe6"
        },
        "date": 1729187111582,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 153.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 164.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 436.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37419.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40584.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 503.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12424.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11722.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11835.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 229.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 149.93359375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39c58a112576e5c31863291f322fc43ab5689baa",
          "message": "Pin Rust to 1.81.0 (#1073)\n\n* Pin Rust to 1.81.0\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Revert GitHub action changes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Use `actions-rust-lang/setup-rust-toolchain@v1` to install Rust\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Disable default RUSTFLAGS\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Add `rust-src` to components in `rust-toolchain.toml`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-22T12:27:14Z",
          "tree_id": "ac6d416b1111ddc104d31ca905fe71e47aa9047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c58a112576e5c31863291f322fc43ab5689baa"
        },
        "date": 1729607183274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 155.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 429.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37589.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40058.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11560.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12457.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11796.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 239.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.14453125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6d3488b7a5b9802fba3d16949f6471aa29f6996a",
          "message": "Suggest a workaround to random write errors in our troubleshooting guide (#1074)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-23T09:04:13Z",
          "tree_id": "981b50223c175f374d6dfa03af2e9c601b126c59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d3488b7a5b9802fba3d16949f6471aa29f6996a"
        },
        "date": 1729681247768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 146.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 436.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 319.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38512.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40267.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 500.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11875.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11111.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11926.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 188.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 141.375,
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
          "id": "286d348bd80e6d99dbad404e8bf193e765b0617b",
          "message": "Add failure hook for put_object_single (#1077)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-23T09:52:44Z",
          "tree_id": "c1901844e21f0d07aa1054cbf880b77b9a5c85f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/286d348bd80e6d99dbad404e8bf193e765b0617b"
        },
        "date": 1729684142649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 232.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39768.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36650.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 494.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11808.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13863.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11876.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 253.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.73046875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc",
          "message": "Bump to stable Rust (1.82) (#1075)\n\n* Use `stable` Rust channel\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Pass `+whole-archive` linker flag for `aws-c-common` in debug build\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Replace deprecated PanicInfo type alias\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n(cherry picked from commit bbaead293880eaa84cc12f0136b8c50de368afd4)\n\n* Always pass `+whole-archive` modifier for `aws-c-common`\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-10-23T11:20:48Z",
          "tree_id": "0e4dd1480fbe470006167e4082bc362a70f272cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc"
        },
        "date": 1729689464612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 142.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 215.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 440.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37715.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33699.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 509.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13674.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14268.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9958.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 191.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 146.08203125,
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
          "id": "4dc8e7db1754e543977eeb32ee6670824d29dd44",
          "message": "Remove use of ObjectInfo in S3 client HeadObject response (#1058)\n\n* Remove use of ObjectInfo in S3 client HeadObject response\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Change HeadObjectResult etag field from String to ETag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-24T08:02:29Z",
          "tree_id": "a811bc5dd139884d431dc5351357eec29eac1307",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dc8e7db1754e543977eeb32ee6670824d29dd44"
        },
        "date": 1729763992525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 147.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 442.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 332.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38509.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35865.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 506.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13400.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12892.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11236.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 251.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 144.62109375,
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
          "id": "e72d7ac4fd9ab3f37b9c30048320032a2a9808a7",
          "message": "Upgrade dependencies (#1081)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-24T16:55:46Z",
          "tree_id": "ccf2e2057d3c2557a6b11f927acdbe08af351456",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e72d7ac4fd9ab3f37b9c30048320032a2a9808a7"
        },
        "date": 1729795957172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 149.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 206.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 447.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31925.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36952.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 503.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12886.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12796.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9559.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 214.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 151.68359375,
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
          "id": "8f2770b32389f415626c249e46282b9995b428e7",
          "message": "Add ability to request checksum in an S3 HeadObject request (#1083)\n\n* Add option to retrieve additional checksums with HeadObject\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry and comment\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove import condition for s3express_tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-28T13:55:13Z",
          "tree_id": "3e7e43ffee37c0d772a529c2798e112f107cddd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f2770b32389f415626c249e46282b9995b428e7"
        },
        "date": 1730130776029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 151.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39638.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40468.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 499.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12837.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11934.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11397.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 232.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 152.1015625,
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
          "id": "05a50dade864bb06e767ea4d6e6473ed4c51dc06",
          "message": "Add additional checksum algorithms in mountpoint-s3-crt crate (#1082)\n\n* Add support for SHA1\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove implementation of std::hash::Hasher for checksum types\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add benchmark for SHA1 checksum\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix Rustdoc, length checks for c_int\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRC64, SHA256\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry for adding bindings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add PR links for change log entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove mountpoint-s3-client changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update SHA1 tests to be consistent with SHA256 tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add ByteBuf wrapper for aws_byte_buf\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRT IO lib init call on benchmark lib load\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-28T18:00:34Z",
          "tree_id": "9286818519bfd4e848ad59fea260216ee5f45e9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05a50dade864bb06e767ea4d6e6473ed4c51dc06"
        },
        "date": 1730145552777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 156.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 159.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 431.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41022.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35379.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 497.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12744.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13627.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15195.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 247.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 150.82421875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}