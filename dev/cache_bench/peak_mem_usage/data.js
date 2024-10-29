window.BENCHMARK_DATA = {
  "lastUpdate": 1730222045087,
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
          "id": "e98a5c2271e2370e2380e25b055ff4f437e923df",
          "message": "Return the new object ETag in PutObjectResult (#1057)\n\n* Return the ETag in PutObjectResult\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of response headers\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move ETag to a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T15:53:03Z",
          "tree_id": "e4cc93f8fa298728674031afda3192564852e862",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e98a5c2271e2370e2380e25b055ff4f437e923df"
        },
        "date": 1729014915659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3602.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3515.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3442.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3334.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30981.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3443.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3477.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3590.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3278.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.0859375,
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
        "date": 1729080147202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3307.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3374.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 338.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3299.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3347.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 198.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29470.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3715.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3536.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13974.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3279.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.6328125,
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
        "date": 1729099530492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3273.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3452.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3485.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3474.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 183.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15351.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3632.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 364.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3514.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3439.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3613.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.40234375,
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
        "date": 1729101972521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3102.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3333.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 339.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3574.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3666.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 195.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29942.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3783.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3566.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 198.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3769.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3661.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.421875,
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
        "date": 1729104007324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2824.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3478.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3252.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 249.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3341.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 179.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35893.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3656.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3255.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3663.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3262.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.859375,
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
        "date": 1729181941015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3312.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3294.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 339.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3240.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3342.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35861.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3458.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 364.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3502.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3501.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 15425.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.33984375,
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
        "date": 1729187324140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3227.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3519.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 342.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3330.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3347.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 188.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15655.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3474.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 356.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3692.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 202.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3516.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3343.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 203.109375,
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
        "date": 1729607390860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3295.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3475.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3289.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3117.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18490.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3471.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3565.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3582.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 16993.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 198.078125,
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
        "date": 1729681522975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3280.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3405.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3323.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3494.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40520.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3370.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 358.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3732.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3404.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3611.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.6796875,
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
        "date": 1729684343397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3618.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3678.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 338.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3722.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 251.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3689.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 200.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33982.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3740.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 361.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3656.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3657.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3257.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.65625,
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
        "date": 1729689670789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3288.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3307.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3339.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 248.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3246.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22877.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3578.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3559.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 205.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10271.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3422.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 205.08984375,
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
        "date": 1729764236324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3089.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3126.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3426.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 255.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3298.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31398.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3430.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3580.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3596.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3371.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.2890625,
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
        "date": 1729796127593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3295.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3409.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3414.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3361.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23349.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3565.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12073.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3781.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3411.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.7890625,
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
        "date": 1730130995768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3334.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3291.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 339.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3352.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3214.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 192.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19968.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3755.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3262.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3510.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3185.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.1953125,
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
        "date": 1730145793630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3407.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3334.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3328.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3405.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24998.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3640.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3662.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3709.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3320.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.76171875,
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
          "id": "ed999df7c9622236a477294ea50b85adacdc942f",
          "message": "Fix ESTALE after upload (#1085)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-10-29T10:27:15Z",
          "tree_id": "83e427e24588f049e71124fde3ea15c4b801d077",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed999df7c9622236a477294ea50b85adacdc942f"
        },
        "date": 1730204849797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3127.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3327.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3295.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3283.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24425.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3471.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3312.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3711.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3211.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.66796875,
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
          "id": "3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa",
          "message": "Remove unused dependencies (#1087)\n\n* Remove unused dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Restore whitespace in Cargo.toml for mountpoint-s3-* crate dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T10:29:55Z",
          "tree_id": "9cfbfd42a4e4c19113377f1623b014c49767c009",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa"
        },
        "date": 1730204993251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3426,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3295.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 337.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3489.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 255.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3409.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17605.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3479.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3701.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3629.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3262.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.55078125,
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
          "id": "726220684057f40c7bf89b6cf78a42cb9a0fdc1d",
          "message": "Address CRT documentation warnings, add deny statements for bare_urls and broken_intra_doc_links (#1091)\n\n## Description of change\n\nSince updating our GitHub Actions configuration, we now have a number of\nwarnings directly surfaced in our PRs.\n\nThis change takes a quick stab at eliminating some low-hanging fruit. It\nalso will now fail the build if these issues are reintroduced when\nmaking changes to the CRT crate.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo behavior changes. Docs and build process only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, no behavior or API changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T14:07:23Z",
          "tree_id": "29a38b0973516c75be794e6c152bc648a937f1b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726220684057f40c7bf89b6cf78a42cb9a0fdc1d"
        },
        "date": 1730218070830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3090.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3455.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3349.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3424.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 209.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23428.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3438.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3630.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3648.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3449.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 201.609375,
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
          "id": "db33036c56cc83435fbe1ff89020d03b9ed41ff9",
          "message": "Update PR template to reflect how PR metadata is used in PR merges (#1090)\n\n## Description of change\n\nWe have updated pull request settings to use the description of the PR\nin the commit message rather than the list of individual commits in the\npull request.\n\nThis change explains the importance of the title and description in how\nthey are used to create the squash commit. We want to encourage PR\nauthors to be aware of this and keep the metadata up-to-date.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, PR template change only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, there are no code changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T14:23:56Z",
          "tree_id": "2174748aa3a91efab3a856a519c1001c810d3448",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/db33036c56cc83435fbe1ff89020d03b9ed41ff9"
        },
        "date": 1730218956373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3239.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3212.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 336.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3541.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3404.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32616.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3633.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3634.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3655.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3121.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.2265625,
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
          "id": "856c31de291e9ed012a36aeca7e689252f216c47",
          "message": "Add checksum algorithm to ListObjectsV2 response (#1086)\n\n## Description of change\n\nFor a consumer of the S3 client, we need to return the checksum\nalgorithm used with objects.\n\nThis change exposes the checksum algorithm that is sometimes returned as\npart of a ListObjectsV2 request. This functionality is not opt-in, and\nwill now simply be exposed to be used by consumers of Mountpoint S3\nclient where supported.\n\nThis change also updates `ChecksumAlgorithm` to have a new `Unknown`\nvariant. This is a common pattern in AWS SDKs. This will allow clients\nto recognize where an unknown algorithm is returned (should the S3\nservice start supporting additional algorithms), and avoid either\nreturning `None` (if optional) or panicking when the error may be\nrecoverable.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, it changes the `ObjectInfo` and `ChecksumAlgorithm` structs.\nSpecifically, they are now marked `non_exhaustive` meaning that new\nfields could be added in the future (as has been done in this PR).\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, relevant change logs for breaking change (`non_exhaustive`) as well\nas new feature (exposing checksum algorithm) have been added to\n`mountpoint-s3-client`'s changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T15:13:32Z",
          "tree_id": "1ec1c5b3f53de9d8622a353a8be26edfef2cf5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/856c31de291e9ed012a36aeca7e689252f216c47"
        },
        "date": 1730222045046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3498.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3548.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3688.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3524.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24457.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3284.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3476.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3709.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3310.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.453125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}