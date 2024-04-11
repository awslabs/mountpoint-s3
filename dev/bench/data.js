window.BENCHMARK_DATA = {
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
          "id": "4ac1fcf995a9fac76fdd9fea7cfc086eb82fa7ca",
          "message": "Workflow updates for AL2023 (#814)\n\n* Update workflows to latest versions\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Remove cargo cache\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Replace actions-rs/toolchain\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix a syntax thing for the cache workflow\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Don't publish benchmark results from non-`main` branches\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-13T16:02:04Z",
          "tree_id": "fdc43fabc0f2bf9d62f4b10305ba441d673e9ae1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ac1fcf995a9fac76fdd9fea7cfc086eb82fa7ca"
        },
        "date": 1710352541910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.378515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.751171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.228125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5087.32119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 63.02294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.878515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1528.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.92119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1320.80615234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1207.06572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.791796875,
            "unit": "MiB/s"
          }
        ]
      },
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
          "id": "5a219733940d7f9dd9cfa4aeabe4ddb94606f290",
          "message": "Fix a compiler warning (#817)\n\nWe forgot to re-export ChecksumAlgorithm in the public API.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-15T17:46:14Z",
          "tree_id": "fadf4e68b28f854fbe0bcdf079d9e8a3040860a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a219733940d7f9dd9cfa4aeabe4ddb94606f290"
        },
        "date": 1710531587300,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.5890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.61455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.52685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.05146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.05712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.29970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5210.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.31953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 54.57861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1642.4078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.9900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 963.05537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1139.3421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.81044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1034.555078125,
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
          "id": "b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29",
          "message": "Fix failing CI jobs (#824)\n\n* Fix clippy errors\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update cargo about in packaging image\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-25T12:02:19Z",
          "tree_id": "287ebbdd68c77528b99a81c6ed8fb0ea3a40c82e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29"
        },
        "date": 1711375161891,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.137109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 51.0533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.36865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.49091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.99765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.86611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.0998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5223.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.37421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 68.641796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1740.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.8962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.5669921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.284765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.19453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1550.76455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.509375,
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
          "id": "e3ccca6e3eefa257aed1c41100a4c1f04eb06a9d",
          "message": "Add s3.client.total_bytes metric (#823)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-27T16:47:50Z",
          "tree_id": "646d75c10349a0ebea56db43b1128be306026252",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e3ccca6e3eefa257aed1c41100a4c1f04eb06a9d"
        },
        "date": 1711564910130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.53173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.40458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5254.14736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.22138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1574.34921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.17666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1216.1875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1147.54833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.3021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1370.42421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 938.5302734375,
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
          "id": "b20ca62e69b61aca1f3841245d7bf618e0fdaa61",
          "message": "Add AES256 SSE type (#827)\n\n* Add AES256 sse type\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move CLI flag validation\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix error message, add comment, fix validate_sse_args style\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-28T02:09:56Z",
          "tree_id": "79a3920012ad5610b8b6bae3c47e4c9ea2a1ace9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b20ca62e69b61aca1f3841245d7bf618e0fdaa61"
        },
        "date": 1711598758222,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.97060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.90400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5188.8029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.55654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.541796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.2263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1536.27314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1199.83583984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1110.14287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1349.354296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.61669921875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "127fb714e3b279291dacc6f59e9c6291fbf5a611",
          "message": "Adding support for rewinddir by restarting readdir if offset is zero. (#825)\n\n* Adding support for `rewinddir` by restarting readdir if offset is zero.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding mention to rewinddir to semantics doc.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Replace rewind method with a new ReaddirHandle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding a rewind_offset fn.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding more tests.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Creating a fn for creating a default handle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Fix clippy and format.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Rename to readdir_handle. Move to single lock.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-28T15:58:38Z",
          "tree_id": "c5e05cd7cc52294e272b755ea9e527ec0d606640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/127fb714e3b279291dacc6f59e9c6291fbf5a611"
        },
        "date": 1711648585974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.81806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.90419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.97275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.64599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.8919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5251.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.26513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 56.30322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1495.3263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.17880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1328.3822265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1050.36513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.64658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1393.10537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.032421875,
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
          "id": "84827e7b07a1c5f8eca0d9508c71bbb9263099af",
          "message": "Expose memory consumption metrics (#820)\n\n* Add memory consumption metrics for the prefetcher\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Add buffer pool usage metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Report mountpoint total memory usage\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-30T03:42:01Z",
          "tree_id": "75d59e4b9095c5c00d3f8f5671ab60ceda722981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84827e7b07a1c5f8eca0d9508c71bbb9263099af"
        },
        "date": 1711776952167,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.4201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.58271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.755078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.6009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.32021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.91865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5218.24638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.49599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1641.03203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1353.24345703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1255.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1464.1048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1034.6376953125,
            "unit": "MiB/s"
          }
        ]
      },
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
          "distinct": false,
          "id": "a187420bff60d97efe133754233bd370b6243c5a",
          "message": "Increase default max retries and expose environment variable to override (#830)\n\n* Increase default max retries and expose environment variable to override\n\nWe were using the SDK's default retry configuration (actually, slightly\nwrong -- it's supposed to be 3 total attempts, but we configured 3\n*retries*, so 4 attempts). This isn't a good default for file systems,\nas it works out to only retrying for about 2 seconds before giving up,\nand applications are rarely equipped to gracefully handle transient\nerrors.\n\nThis change increases the default to 10 total attempts, which takes\nabout a minute on average. This is in the same ballpark as NFS's\ndefaults (3 attempts, 60 seconds linear backoff), though still a little\nmore aggressive. There's probably scope to go even further (20?), but\nthis is a reasonable step for now.\n\nTo allow customers to further tweak this, the S3CrtClient now respects\nthe `AWS_MAX_ATTEMPTS` environment variable, and its value overrides the\ndefaults. This is only a partial solution, as SDKs are supposed to also\nrespect the `max_attempts` config file setting, but we don't have any of\nthe infrastructure for that today (similar issue as #389).\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Surprised Clippy doesn't yell about this\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-02T19:05:22Z",
          "tree_id": "b51d26a75fe15c3580cc4a51198d8381b8ff2b43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a187420bff60d97efe133754233bd370b6243c5a"
        },
        "date": 1712091672700,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.34560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.12802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.4857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.186328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.30771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.74951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5205.9470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.7439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 62.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.91923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1563.9650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.612890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1262.47333984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1132.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.8865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1339.91083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.9359375,
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
          "id": "a34b682afbaec424bf90ab76adc456665c839b25",
          "message": "Update h2 dependency (#835)\n\nAddress vulnerability found by cargo deny:\n    = ID: RUSTSEC-2024-0332\n    = Advisory: https://rustsec.org/advisories/RUSTSEC-2024-0332\n    = An attacker can send a flood of CONTINUATION frames, causing `h2` to process them indefinitely.\n      This results in an increase in CPU usage.\n\n      Tokio task budget helps prevent this from a complete denial-of-service, as the server can still\n      respond to legitimate requests, albeit with increased latency.\n\n      More details at \"https://seanmonstar.com/blog/hyper-http2-continuation-flood/.\n\n      Patches available for 0.4.x and 0.3.x versions.\n    = Solution: Upgrade to ^0.3.26 OR >=0.4.4 (try `cargo update -p h2`)\n    = h2 v0.3.24\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-04T15:59:07Z",
          "tree_id": "73f9f47dea1feb4c2d8c58a73b1139f9d9d5793c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a34b682afbaec424bf90ab76adc456665c839b25"
        },
        "date": 1712253922262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.6783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.70703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.3064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.37744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.16708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.61357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5302.516796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.7806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.32802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.64130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1700.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.722265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1218.3580078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1207.7115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.78134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1663.44931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1031.0068359375,
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
          "id": "759f3efd16f01453f8c6f4ae98f6dc641528a418",
          "message": "Update CRT submodules to latest releases (#822)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-04T19:02:22Z",
          "tree_id": "63be9409ceb65eda7ce0cf64f013ac38201a9bd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/759f3efd16f01453f8c6f4ae98f6dc641528a418"
        },
        "date": 1712264124201,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.68203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.7466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.88798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.65205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.812109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.90751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5069.00126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.42919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 60.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1660.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.7228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.7197265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1266.68193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.6486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1323.7935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1034.59111328125,
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
          "id": "cecd7e829fad24cdb52707a96260ca3c60a14845",
          "message": "Update CRT submodules to latest releases (#838)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-09T07:58:03Z",
          "tree_id": "7244ca953854c34512447bf25af063459d5c3cd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cecd7e829fad24cdb52707a96260ca3c60a14845"
        },
        "date": 1712657765230,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 31.6470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 53.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 22.17001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 65.01513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 13.12119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.634375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 13.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5286.59208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.4685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 84.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 87.27490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1681.48115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.9251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1436.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.90146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1352.3734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 953.3271484375,
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
          "id": "2f2884b7c10387a677c5f16abcc3f4ac5fe862f8",
          "message": "Add new troubleshooting section for 'slower throughput than expected' (#834)\n\n* Add new troubleshooting section for 'slower performance than expected'\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on cp copying in serial\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-04-09T23:19:39Z",
          "tree_id": "c2abbc0c1cc8095a1f30065c5245da968a3360d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2f2884b7c10387a677c5f16abcc3f4ac5fe862f8"
        },
        "date": 1712711538013,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.15126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 51.75947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.6384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 65.69873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.3875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.776953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.8841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5367.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.96845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.10888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 82.8439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1530.41708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.47177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1204.30380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.7634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.9306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1358.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.12705078125,
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
          "id": "cf5fc24cf824bdd9f70058cc0f9c534aca2dd992",
          "message": "Remove the sse_kms feature flag from the CI (#840)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-10T08:37:10Z",
          "tree_id": "2e2e75b91b9ddca9ce35f0c79da52631226e62c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf5fc24cf824bdd9f70058cc0f9c534aca2dd992"
        },
        "date": 1712745211292,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.70517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.9060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 63.35234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 13.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.0794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.94482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5192.450390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.6197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 76.10498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 85.14072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1650.89833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.30234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1265.51865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1175.39150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.2892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1512.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.71220703125,
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
          "id": "8af2fb239872a8b1e501be7edd951840014b472b",
          "message": "Update SSE documentation and remove the feature flag (#839)\n\n* Update documentation, remove the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove the sse_kms feature flag from the CI\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\n\n* Remove the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-04-10T10:52:59Z",
          "tree_id": "16acd71b059b4f4c68a4c1927045f016420a8d1d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8af2fb239872a8b1e501be7edd951840014b472b"
        },
        "date": 1712753274574,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 51.0423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.35537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 62.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.1529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.95546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.40576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.87470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5348.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 86.00419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 83.47109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1750.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.08369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1332.797265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1341.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.5552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1387.476953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 932.09111328125,
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
          "id": "2767c856d96984a523aad6a92f0f322e461ccdaf",
          "message": "Adopt new async write API for PutObject requests (#832)\n\n* Add failing test for concurrent put_objects\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add failing test for multiple files open for write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Adopt async write API to feed data into a PutObject request\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Wait for CreateMultiPartUpload\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* FutureVoid wrapper\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure a MetaRequestWrite holds exclusive access to the meta-request until completion\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename on_telemetry callback (in mountpoint-s3-client)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename callbacks on_request_finish/on_meta_request_finish\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use RequestMetric::error()\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T14:06:53Z",
          "tree_id": "9fe356ae5937e9d7ebe2ea077ac8085470ac5f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2767c856d96984a523aad6a92f0f322e461ccdaf"
        },
        "date": 1712764963389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.2583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.47724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.626171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 61.54150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.2146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.01064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5242.3962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 82.92802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 76.4861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1692.8189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.50068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1352.5111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.44169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.7751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1139.0865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 826.6310546875,
            "unit": "MiB/s"
          }
        ]
      },
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
          "id": "4cd3cd57557ed6c825a6108735a312a85dcf2221",
          "message": "Remove fuse_tests from asan (#844)\n\nThey frequently trigger a deadlock inside ASan's allocator. We're really\r\nusing ASan to test the CRT bindings anyway, so the S3 tests are really\r\nwhat matter most.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-10T15:01:38-05:00",
          "tree_id": "50df3f85bdda712eb393abe4ed237640cccc3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4cd3cd57557ed6c825a6108735a312a85dcf2221"
        },
        "date": 1712785504913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.4705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.0490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 59.40302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.11708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.01806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.175390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.92822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5273.5978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.6662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 82.380078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 84.52314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1463.184375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1257.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1154.26875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.31416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1164.51123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 776.7916015625,
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
          "id": "9803ca56d6185e38d10c7590b5c6f08cac18da51",
          "message": "Publish new crate versions (#843)\n\n* Publish new crate versions\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Increment mountpoint-s3-crt* to v0.7.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T22:28:41Z",
          "tree_id": "a116d4cebe7db19caf421e92ef1106cd05fa9a1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9803ca56d6185e38d10c7590b5c6f08cac18da51"
        },
        "date": 1712795206275,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.9494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.71328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 61.79677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.7478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.3849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.94150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5089.5478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 86.83330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 83.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.16005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1319.88544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1124.41689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.3087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1143.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 862.3107421875,
            "unit": "MiB/s"
          }
        ]
      },
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
          "id": "1496c13f2078b9b5803d833161139b5600c0ace9",
          "message": " First pass at randomized testing for POSIX semantics (#842)\n\n* Don't use AutoUnmount in FUSE integration tests\n\nIt's the wrong thing to do: the FUSE session is unmounted automatically\nwhen the BackgroundSession drops. AutoUnmount is for the case when the\nmounting process might not unmount on its own, but we always do. Using\nthe option spawns a new thread and leaks a socket until the end of the\nprocess, which means our test processes can run out of open file\ndescriptors if they run many FUSE sessions.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* First pass at randomized testing for POSIX semantics\n\nThe idea is to randomly run real system calls against both a real file\nsystem (a temporary directory on the OS disk) and Mountpoint. We expect\nMountpoint to allow fewer behaviors than a real POSIX file system (e.g.\ncan't read and write the same file handle), so we need some logic for\nallowing a limited set of divergences between the two systems.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-11T02:03:59Z",
          "tree_id": "7f275c15f402814085f71198bbad49d9f4b02a13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1496c13f2078b9b5803d833161139b5600c0ace9"
        },
        "date": 1712808011723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.6126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.93017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.336328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 60.30234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 13.152734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.41162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.68427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5171.3064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.79052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 84.66474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 80.9939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1584.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.08837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1255.62763671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1316.85517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.0333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1072.037890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 835.7712890625,
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
          "id": "29cf8daf8f87aa216e5064c4b1a5fdd46009c164",
          "message": "Improve cancellation test for PutObject write (#845)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-11T11:07:27Z",
          "tree_id": "54dff8c2afb3a209cd9879da719589500a6cbd19",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29cf8daf8f87aa216e5064c4b1a5fdd46009c164"
        },
        "date": 1712840495958,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.11630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 52.05810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.84072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 65.359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.53134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 13.371875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.8884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.6037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5137.156640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 75.011328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 82.84921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1431.68017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1265.1408203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1230.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.8318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1242.52646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 812.634765625,
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
          "id": "f0c61a4911f0f5431c88f160a6d165d37c02f945",
          "message": "Update documentation on sse-kms (#847)\n\n* Update documentation on sse-kms\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update the changelog\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update the links\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* v1.6.0 (April 11, 2024)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Unreleased for now\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-11T13:57:35Z",
          "tree_id": "399c7a5cf09b9010b3d93dc0a124e999d272be2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0c61a4911f0f5431c88f160a6d165d37c02f945"
        },
        "date": 1712850860161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.7369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.61142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 60.88486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.112890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.597265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.3697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5193.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.768359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 78.61630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1519.61875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.648046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1311.7517578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1174.371484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1157.1505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 821.76171875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1712850860651,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}