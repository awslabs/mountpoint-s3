window.BENCHMARK_DATA = {
  "lastUpdate": 1719832727234,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0bebe885ce4be9fa17461eda870057b639a7e60",
          "message": "Initialize the CRT eagerly in tests (#900)\n\nWe think the lazy initialization might be the cause of some of our\r\nissues, because it happens on an ephemeral thread. Let's try\r\ninitializing it at load time.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-06-04T16:03:34-05:00",
          "tree_id": "aedd2c8efe8ab87a73675e110b36c3109d79c677",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b0bebe885ce4be9fa17461eda870057b639a7e60"
        },
        "date": 1717609750468,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.76494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.42958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.4744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.06318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.39150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5458.38828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 468.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 141.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 198.72587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2040.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 115.49814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1407.17080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1212.7916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 116.398828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1426.92041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.10634765625,
            "unit": "MiB/s"
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
          "id": "42007f7b5eb0483364cc02cbb5c62f709b5d62f3",
          "message": "Release v1.7.0 (#885)\n\n* Release v1.7.0\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update mountpoint-s3 changelog\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-06T08:12:17Z",
          "tree_id": "a40b569e9fad610659f95c091a2fa1a12051267b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/42007f7b5eb0483364cc02cbb5c62f709b5d62f3"
        },
        "date": 1717688051654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 135.38134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.4115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.8666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.01708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.6306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.91103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5490.92080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 464.59111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 151.67978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.4544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2026.1412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 115.63134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1247.83818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.1416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1522.0453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.51953125,
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
          "id": "90ea28806378796bdf64c737df40ba9b82d5c6e3",
          "message": "Skip scheduled test runs outside of upstream repository (#903)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T09:41:01Z",
          "tree_id": "5266ed1cc2e4fd2d30da057cffafc1c690121c71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90ea28806378796bdf64c737df40ba9b82d5c6e3"
        },
        "date": 1718019507279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.842578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.51875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.29677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.65673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.83818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.89931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.23955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5481.750390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 476.19404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 147.8345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1930.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.38203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1472.41435546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1390.12568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.407421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1830.991796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.42421875,
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
          "id": "cbc8ec8d3886da07430f583d0121d028b5dfd020",
          "message": "Update integration test schedule from hourly to daily at 06:45Z (#905)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T10:40:02Z",
          "tree_id": "b0bc74cfd8abca7ffdd78752655c02d6a08a56d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cbc8ec8d3886da07430f583d0121d028b5dfd020"
        },
        "date": 1718023046921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.644921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.42822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.1955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.06787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.981640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.30751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.11796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5548.94560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 467.948046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 154.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1866.20966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.46015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1509.300390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.05849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.7162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1580.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1125.2833984375,
            "unit": "MiB/s"
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
          "id": "650269904f617f96879f7ee7d93f8bca4e5096e5",
          "message": "Support backpressure for GetObject request (#889)\n\n* Support backpressure for GetObject request\n\nThe CRT has flow-control window feature in the read path (https://github.com/awslabs/aws-c-s3/pull/213)\nto let users control how fast they want to download data. This change\nexposes the backpressure read mechanism in the `get_object` interface.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-11T15:27:54Z",
          "tree_id": "a75778e4c5aba8ae8bf944e5ad9887160f4855e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/650269904f617f96879f7ee7d93f8bca4e5096e5"
        },
        "date": 1718126827374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.089453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.40419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.36357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.90263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.96396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.66806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5527.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 480.6369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 128.65361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 205.9078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1920.25439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 118.68447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1481.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1253.47314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.14052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1664.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1045.4208984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19faf760f3de5dc631aa68594564d926e9a667d3",
          "message": "Restrict `--sse-kms-key-id` to Key ARN only (#908)\n\n* Restrict --sse-kms-key-id to Key ARN only\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix inexistent key test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove Key ID from the doc, fix tested log message\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix format\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-12T13:24:51Z",
          "tree_id": "db0b9700e1691e1efffbf8e6915a1dbb43350d8f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19faf760f3de5dc631aa68594564d926e9a667d3"
        },
        "date": 1718205659263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 96.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 134.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.01962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.0353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 22.933203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.09287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5573.12568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 464.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 157.18486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1895.59453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 106.618359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1435.66748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.60576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 116.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1937.7599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.042578125,
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
          "id": "e62951e87a9cc7f19ffe23f1637d531ca8ea8cab",
          "message": "Add additional logging around mount timeout failures (#910)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-13T10:12:48Z",
          "tree_id": "5eba9ca1b6f75e289e266b3c6c465e7ef91fa587",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e62951e87a9cc7f19ffe23f1637d531ca8ea8cab"
        },
        "date": 1718280620781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.204296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.409765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.9744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.048046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.51162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.135546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.924609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5607.4533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 471.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 151.4845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 196.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1805.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 109.0720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1609.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1246.68720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 115.46630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1421.49755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1103.7939453125,
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
          "id": "657cc787ae838c606525a87d3ff8e7b8926ad0ac",
          "message": "Fix clippy error (#911)\n\nClippy was reporting this error:\n```\nerror: this expression always evaluates to false\n  --> mountpoint-s3/src/build_info.rs:24:44\n   |\n24 |         const UNOFFICIAL_SUFFIX: &str = if COMMIT_HASH_STR.is_empty() {\n   |                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#const_is_empty\n   = note: `-D clippy::const-is-empty` implied by `-D clippy::all`\n```\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-13T16:33:43Z",
          "tree_id": "cb55b11bca02b560660ce481e50e5c9cb830e645",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/657cc787ae838c606525a87d3ff8e7b8926ad0ac"
        },
        "date": 1718362219863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.9578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.90791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.89208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.45029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.22119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.29111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5590.83369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 477.22119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 137.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.8861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1898.49794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 111.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1619.67294921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1260.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 116.92705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1946.59150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.91552734375,
            "unit": "MiB/s"
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
          "id": "7155555a365cd2b8e4b330c2b16cff3d1b56cce8",
          "message": "Release v1.7.1 (#912)\n\n* Release v1.7.1\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-14T08:55:26Z",
          "tree_id": "d8b44fa654789f6fb2ab667f0775f9f2796c8100",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7155555a365cd2b8e4b330c2b16cff3d1b56cce8"
        },
        "date": 1718362297383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.6037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.0619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.24775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.20283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.714453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.2875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.38369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5500.6677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 483.359765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 143.71142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1917.730078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 112.108984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1504.15400390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1212.5021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 116.92919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1617.53212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.70390625,
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
          "id": "5795b38fe73ecafc76b682bc7ba44168568623f0",
          "message": "Add guidance on KMS permissions when using SSE-KMS (#913)\n\n* Add guidance on KMS permissions when using SSE-KMS\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix missing permission for object upload, add link to docs for more info\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-14T12:03:38Z",
          "tree_id": "7facd9a6adbcaa6166c6561bc50b8909f5977d6c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5795b38fe73ecafc76b682bc7ba44168568623f0"
        },
        "date": 1718373641350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 95.626171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 133.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.03212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 164.803515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.04658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 32.95771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.1291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.38486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5541.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 468.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.5173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 198.40869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1915.2732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 109.32197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1305.69951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1942.95517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1074.800390625,
            "unit": "MiB/s"
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
          "id": "78df1aeda22f7cdf9a34920596f863cfd4727282",
          "message": "Fix the backpressure test (#916)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-17T15:59:24Z",
          "tree_id": "b2e76b42513144048a25da6e79848f8d1d150aed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78df1aeda22f7cdf9a34920596f863cfd4727282"
        },
        "date": 1718647046184,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.61953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.77470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.76962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.62216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.11044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.18134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5552.35302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 475.1197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 148.738671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.979296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1822.862109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 114.63310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.331640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.58681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1529.74716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.266015625,
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
          "id": "e299e2b71b3e5a2882b2d16035df6875476b3588",
          "message": "Fix an issue where mountpoint-s3-client could interpret a HTTP 206 Partial success response as an error (#917)\n\nWe are removing a workaround in mountpoint-s3-client that reduced the number of requests to S3 and is no longer needed. When introduced in #285, the workaround used a default CRT meta-request instead of an auto-ranged-get for small requests, which avoided a redundant HeadObject request that the CRT performed on every auto-ranged-get. Since then, the CRT has been updated to avoid the extra requests when a range is specified, so we can always use auto-ranged-get.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-06-17T18:32:41Z",
          "tree_id": "cb9b94acd16984d684e6374d36e6b4db602f87c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e299e2b71b3e5a2882b2d16035df6875476b3588"
        },
        "date": 1718656247076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.4697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.464453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 174.5548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.3169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.9919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.9740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.81376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5586.10400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.76494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 144.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 210.7515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1647.896875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.3158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.62685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.7658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.19453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1870.96123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.876953125,
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
          "id": "d3b632d1b98dd32f37ab7ba0633c825933ececb9",
          "message": "Release v1.7.2 (#918)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-17T19:11:24Z",
          "tree_id": "8e4df354984977ea97c50a2386c3c6f737fadbc2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3b632d1b98dd32f37ab7ba0633c825933ececb9"
        },
        "date": 1718658514308,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.4701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.7853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.29169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.6216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.40205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.84560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.1216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5517.09892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 488.63056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.86484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.0572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1868.33935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 112.989453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1684.73837890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1255.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 118.13701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1650.33701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.92568359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01381ae6ed1562f413769354f82bb371de80cff",
          "message": "Provide `ErrorMetadata` to `crate::fuse` layer with errors from the client (#882)\n\n* Provide ErrorMetadata with S3RequestError::Forbidden (up to fuse.rs on lookup)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* rename EMPTY_ERROR_METADATA, add InodeError::client_error constructor\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Provide error_code, bucket and key with InodeError::ClientError\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Allow detecting throttled on lookup()\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a test for the throttle error on lookup\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a test for the forbidden/404 on lookup\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* CI fixes\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Propogate error message from S3 for frobidden and http_status for unhandled error\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor err! macro\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove logging, disable forbidden test for express, move policy helper to mod.rs\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move error_code, bucket and key out from the client crate\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Return RequestCanceled on AWS_ERROR_S3_CANCELED\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* simplify client_error constructor, rename metadata fields, flatten error parser calls\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* allow constructing metadata on the flight in ProvideErrorMetadata\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Delete big comment, flatten or_else chain, provide context in readdir\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove box from forbidden\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a comment explaining error parsing logic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-19T12:53:22Z",
          "tree_id": "2bb3cf214ef4c7ccc42ff08218328109968c49c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f01381ae6ed1562f413769354f82bb371de80cff"
        },
        "date": 1718808851198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.4419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.81318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.8765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.8576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.602734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5542.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 480.1400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 160.05302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 207.6654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1731.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 111.008203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1516.24912109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1376.30869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.3419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1780.5529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 955.93388671875,
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
          "id": "2dcb7cb8a3f6702ba552408b926613399ae94196",
          "message": "Use MaybeUninit when getting thread ID from CRT request metrics (#922)\n\n* Use MaybeUninit when getting thread ID from CRT request metrics\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Drop null pointer check since we know the pointer is always non-null (even if the memory may not be initialized)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T15:21:29Z",
          "tree_id": "623d50483288af987dbff1f44eddf3b5d41ab4be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2dcb7cb8a3f6702ba552408b926613399ae94196"
        },
        "date": 1719335944826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.85146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.86826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.97705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.2794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.494921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5601.6373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 473.61708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 157.2263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 212.53974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2041.973828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.79443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1553.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1270.80166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.60400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1958.80888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.37021484375,
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
          "id": "115cc6fa7954ee89fb3890e3bdbcc8ae01130680",
          "message": "Add troubleshooting entry on uploads larger than 78GiB (#921)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T16:17:48Z",
          "tree_id": "f88e27bbb84947b8bcc8b1256875d8b979d97760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/115cc6fa7954ee89fb3890e3bdbcc8ae01130680"
        },
        "date": 1719339130865,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.67412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.08642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.62412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.722265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.38046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.24892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.54853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.2189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5582.3072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.5931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 158.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 214.36015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1878.1994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 114.335546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1455.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.8736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.19853515625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4569a4b0c09369657c46950d6b8d9ae2dbd38b02",
          "message": "Bump docker/build-push-action from 5 to 6 (#920)\n\nBumps [docker/build-push-action](https://github.com/docker/build-push-action) from 5 to 6.\n- [Release notes](https://github.com/docker/build-push-action/releases)\n- [Commits](https://github.com/docker/build-push-action/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: docker/build-push-action\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-25T16:56:48Z",
          "tree_id": "ef31ea4885526c9a8bf6cc569ccd57c1bd867640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4569a4b0c09369657c46950d6b8d9ae2dbd38b02"
        },
        "date": 1719341642380,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.6021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.91904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.3703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.50869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.9380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.56298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.55849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5586.178125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 476.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 132.2845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.055859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1913.14228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1478.459375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.8716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 121.01298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1561.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.8123046875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37d980986555df887f7cb6cccdf2d442c92fbb4f",
          "message": "Release new crate versions (#923)\n\n* updates dependencies\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* addresses review feedback\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates change log\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T12:28:40Z",
          "tree_id": "38086a7371fc2d97b57119473a411eb1195600b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/37d980986555df887f7cb6cccdf2d442c92fbb4f"
        },
        "date": 1719411957208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.71044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.5474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.27626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5582.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 487.0822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.884375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 205.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1813.21826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1410.092578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1334.8734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 118.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1883.734765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.9025390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc8d3094f1a43df420470204d78c52670cd5f7d1",
          "message": "include test files in cargo (#924)\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T16:14:41Z",
          "tree_id": "e1302c0b125475220680150b56554cf761acca9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc8d3094f1a43df420470204d78c52670cd5f7d1"
        },
        "date": 1719425526647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.99912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.4080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.161328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.555078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5603.87529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 479.144140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 132.40830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1849.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1589.07978515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1368.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1858.54189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.87744140625,
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
          "id": "08aa2b828627418549109ba081e8daaa46db7fda",
          "message": "Add link to CSI driver LOGGING.md to Mountpoint LOGGING.md (#925)\n\nWe added a new logging document in the CSI Driver project, which helps support locating the logs on the underlying host. This isn't visible from the Mountpoint repository including troubleshooting guides, so let's link it from MP's logging documentation.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-01T09:21:08Z",
          "tree_id": "cf95c57e4798e0f14f29999f3b1082ece07616a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/08aa2b828627418549109ba081e8daaa46db7fda"
        },
        "date": 1719832726773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.58271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 176.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.52060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.6390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5562.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.9705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 140.61884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2045.39716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 117.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.9240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.14111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1417.10009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1057.32666015625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}