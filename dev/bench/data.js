window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
        "date": 1729010700079,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.79384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.38916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.49013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.61162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5899.6263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.00439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2063.58486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.239453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1734.66767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.61083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1160.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.96044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.7298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.98798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.776953125,
            "unit": "MiB/s"
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
        "date": 1729014719851,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.2783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.86181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.081640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.63857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.99111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5721.78603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.58759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2044.15595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 96.0345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1565.915234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.22197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1373.35341796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1258.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 920.1099609375,
            "unit": "MiB/s"
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
        "date": 1729079883661,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.78984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.85380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.75,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.446484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.54677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5776.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2112.73359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 94.05458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1749.44052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.29697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1218.43525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1211.0873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.04912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1450.223046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.12255859375,
            "unit": "MiB/s"
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
        "date": 1729099303357,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.17626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.15263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.30537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.45283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.050390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.9671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5755.29072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.59658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1994.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.12587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1577.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.86240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1191.62841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.469921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1339.9201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 940.453515625,
            "unit": "MiB/s"
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
        "date": 1729101778371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.6564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.75615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.95576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5649.97353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.63984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2105.06865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.33828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1711.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.42978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1365.20380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1446.219921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1345.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 917.598046875,
            "unit": "MiB/s"
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
        "date": 1729103828010,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.039453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.034765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.75634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.463671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.30166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.67109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5792.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2116.11396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.9794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1711.8603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.2548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1552.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1177.88662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.84677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1567.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.60078125,
            "unit": "MiB/s"
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
        "date": 1729181795351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.769921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.61376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.73310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.91953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.215234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.42080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5789.79990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2129.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 102.17275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1774.32041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.05068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1351.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.1275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1328.801953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.3765625,
            "unit": "MiB/s"
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
        "date": 1729187074621,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.48125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.91748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.6470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.80869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.69345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.2681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.14169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5811.1771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.89111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2067.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1658.239453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.40966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1179.95869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1325.36123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 918.00078125,
            "unit": "MiB/s"
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
        "date": 1729607237826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.61611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.74677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.78271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.30419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.53388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.53779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5372.78525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.95859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2097.0123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.746484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1877.45986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.84384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1415.8060546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.34140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1682.0203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1073.42607421875,
            "unit": "MiB/s"
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
        "date": 1729681324570,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.223828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.31240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.114453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.634375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.11962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5124.274609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2072.0966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.64814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1534.96455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.4498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1301.270703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1141.63515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.8998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1409.444140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.60263671875,
            "unit": "MiB/s"
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
        "date": 1729684152995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.4435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.3576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.81259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.29921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.67412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.61923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5700.57568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.7658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2100.08583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1571.56455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1342.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.94462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.652734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1657.04267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.04033203125,
            "unit": "MiB/s"
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
        "date": 1729689489694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.9263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.58720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.16376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.74931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.72314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5696.1048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2142.27744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.17197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1636.30390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.8435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1228.6146484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1349.2181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1681.13408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.41259765625,
            "unit": "MiB/s"
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
        "date": 1729763938900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.2052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.32958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.528125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.59482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.59619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.570703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5708.58701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.285546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2100.6966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 94.72490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1824.51982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.230078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1381.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.74560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1317.6271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 936.01845703125,
            "unit": "MiB/s"
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
        "date": 1729795986456,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.49541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.726171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.98759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.257421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5692.1896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.7552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2057.6763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.48115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1556.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1304.740625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1282.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1595.99296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.5072265625,
            "unit": "MiB/s"
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
        "date": 1730130805854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.14755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.0123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.08486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5857.0900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.42783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2120.960546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.50810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1435.22587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.25654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1291.0025390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1165.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.2546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1674.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.86015625,
            "unit": "MiB/s"
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
        "date": 1730145503975,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.962109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.3845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.29013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.37275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.76826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.58291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.24697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5705.707421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.19140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2136.17607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 89.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1596.834375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.47353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1230.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1304.89892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.66083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1551.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 937.08427734375,
            "unit": "MiB/s"
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
        "date": 1730204712349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.022265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.29287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.24013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.956640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.77939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5769.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2116.5173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.08388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1866.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1319.7693359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1255.20615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.127734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1341.801953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.37373046875,
            "unit": "MiB/s"
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
        "date": 1730204817525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.81494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.65458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 27.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.45791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.43115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.51015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5698.58486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2102.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.31103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1883.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1417.04951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.58916015625,
            "unit": "MiB/s"
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
        "date": 1730217884231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.3625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.170703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.58447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.64931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.53369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.82109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.1482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5894.94150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2155.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.9828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1591.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.40126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1252.0265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1215.0552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.805078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1678.9279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.98447265625,
            "unit": "MiB/s"
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
        "date": 1730218820316,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.28935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.5560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.6908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.78701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.426171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.85732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.1603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5751.23115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.52529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2222.9080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1731.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.6828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1340.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1319.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.1763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1579.79443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 929.36953125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1730218820876,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}