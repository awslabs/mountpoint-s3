window.BENCHMARK_DATA = {
  "lastUpdate": 1673911932401,
  "repoUrl": "https://github.com/awslabs/s3-file-connector",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "47974768+monthonk@users.noreply.github.com",
            "name": "monthonk",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b720e9a5da0980977714c977128b2cef67313c81",
          "message": "Replace criterion with fio benchmark (#23)\n\n* Use fio for benchmark\r\n\r\n* Remove criterion\r\n\r\n* Add some improvements to the bench script",
          "timestamp": "2022-12-01T16:56:56-06:00",
          "tree_id": "ed82da297c29d7603ce772f9173d7b9c03610756",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b720e9a5da0980977714c977128b2cef67313c81"
        },
        "date": 1669936481554,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 20.376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.60546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 865.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6738.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.7392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 902.4365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2025.015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 22.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.498046875,
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
          "id": "b671df4a0d8552804b45aca1af37eda7df44e024",
          "message": "Run smaller random read tests under Shuttle (#28)\n\nThese are sometimes spuriously failing due to OOM or running for too\r\nmany steps.",
          "timestamp": "2022-12-03T09:30:07-08:00",
          "tree_id": "b2b0681df009e680af6a1b72dbd4737ac52bb009",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b671df4a0d8552804b45aca1af37eda7df44e024"
        },
        "date": 1670089673429,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.48828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1302.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 11.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7038.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 180.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 15.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1291.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.9345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2086.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.5244140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47974768+monthonk@users.noreply.github.com",
            "name": "monthonk",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a7916c0d2c712533e0554708a1028c178cca754",
          "message": "Poll and expose S3 client metrics (#25)\n\n* Bind CRT client metrics\r\n\r\n* Poll and expose S3 client metrics\r\n\r\n* Fix clippy error\r\n\r\n* Refactor client metrics\r\n\r\n* Expose CRT atomics APIs and use them to read client stats\r\n\r\n* Placate Clippy, which doesn't understand newlines\r\n\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2022-12-07T08:03:25+13:00",
          "tree_id": "68fe8b54445db13934497b1c580dcae782275658",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1a7916c0d2c712533e0554708a1028c178cca754"
        },
        "date": 1670354480251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 830.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6466.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 146.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 911.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 21.779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2330.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.33984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47974768+monthonk@users.noreply.github.com",
            "name": "monthonk",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a7916c0d2c712533e0554708a1028c178cca754",
          "message": "Poll and expose S3 client metrics (#25)\n\n* Bind CRT client metrics\r\n\r\n* Poll and expose S3 client metrics\r\n\r\n* Fix clippy error\r\n\r\n* Refactor client metrics\r\n\r\n* Expose CRT atomics APIs and use them to read client stats\r\n\r\n* Placate Clippy, which doesn't understand newlines\r\n\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2022-12-07T08:03:25+13:00",
          "tree_id": "68fe8b54445db13934497b1c580dcae782275658",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1a7916c0d2c712533e0554708a1028c178cca754"
        },
        "date": 1670431126950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1015.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6704.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 159.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1086.9794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1973.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.5263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.8662109375,
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
          "id": "ca7c88c35c23d06119e898bd748839786c9b5764",
          "message": "Use cmake3 if it exists (#31)\n\nOn AL2, `yum install cmake` gets you a 2.x version of cmake, but the CRT\r\nrequires a 3.x version. AL2 has a 3.x version as a separate `cmake3`\r\npackage and binary. If those exist, use them as the CMAKE so that users\r\ndon't have to configure this manually.",
          "timestamp": "2022-12-14T09:56:20-08:00",
          "tree_id": "7cfd8177fe6cf501ff6e4e8984a38996ead36566",
          "url": "https://github.com/awslabs/s3-file-connector/commit/ca7c88c35c23d06119e898bd748839786c9b5764"
        },
        "date": 1671064014037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.17578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.4189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 3.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 2.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 815.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6788.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.6357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1088.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2370.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.9970703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jorajeev@amazon.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "85f9a60ea72b150590643ffc76f16e3ed1233389",
          "message": "Add support for injecting failures in head, list and get requests to clients (#26)\n\n* Added wrapper client for injecting failures\r\n\r\n* Added failing test\r\n\r\n* Pass errors through prefetching pipeline\r\n\r\nPart of the fix for #10.\r\n\r\n* Added support for injecting failures while reading from a GET stream\r\n\r\n* Properly handle errors reported while reading from a get stream.\r\n\r\nCompletes the fix for #10.\r\n\r\nCo-authored-by: James Bornholt <bornholt@cs.utexas.edu>",
          "timestamp": "2022-12-20T12:55:18+11:00",
          "tree_id": "2ca413f7b127914acec5fab53bd13c9e0ba3cbb1",
          "url": "https://github.com/awslabs/s3-file-connector/commit/85f9a60ea72b150590643ffc76f16e3ed1233389"
        },
        "date": 1671502324518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.0537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.3798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1010.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.27734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6509.390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.3583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 836.2412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2426.728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.4716796875,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "d9c35cef2f2f6ae7008e7a0824e0131864f6265f",
          "message": "Bump tokio from 1.21.2 to 1.23.1\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.21.2 to 1.23.1.\n- [Release notes](https://github.com/tokio-rs/tokio/releases)\n- [Commits](https://github.com/tokio-rs/tokio/compare/tokio-1.21.2...tokio-1.23.1)\n\n---\nupdated-dependencies:\n- dependency-name: tokio\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-06T18:59:36-06:00",
          "tree_id": "13d410cf52599cf957b536e371bde0e35ccaee2f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/d9c35cef2f2f6ae7008e7a0824e0131864f6265f"
        },
        "date": 1673054181857,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.4091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 977.8916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6657.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 153.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1133.984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1939.376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.494140625,
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
          "id": "4b020b0477e4d9f862ad598edf94599cdcf0812d",
          "message": "Fix Clippy 1.66 lints (#40)\n\n* Fix Clippy 1.66 lints\r\n\r\n* Move default allocator to Default trait",
          "timestamp": "2023-01-12T12:31:25-06:00",
          "tree_id": "fdcacd912bc7e413529ffc7fc2b1b656969aab1f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4b020b0477e4d9f862ad598edf94599cdcf0812d"
        },
        "date": 1673549311604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 25.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.1103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.1796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 911.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6644.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 14.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1020.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1957.6259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.140625,
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
          "id": "9043ca32c79cc8800c49bde838c66a0194cb84e2",
          "message": "Add clippy version info to CI output (#42)",
          "timestamp": "2023-01-13T11:44:48Z",
          "tree_id": "4dfc24836b6cba71b6dbcc592a104317d750b254",
          "url": "https://github.com/awslabs/s3-file-connector/commit/9043ca32c79cc8800c49bde838c66a0194cb84e2"
        },
        "date": 1673612389123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.32421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.9208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 864.7626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6637.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 170.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1283.798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1918.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.9814453125,
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
            "email": "47974768+monthonk@users.noreply.github.com",
            "name": "monthonk",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "2e0a1b53809d2a0eaf245e034bdf88ccc90e1ed6",
          "message": "Don't commit benchmark results for PRs\n\nThe GitHub Pages page for benchmarks stores a linear history of benchmarks. We don't want to include pull requests in that list, since they might run many times.",
          "timestamp": "2023-01-16T09:46:28Z",
          "tree_id": "79a754b0c4c6dbfa29c91aa1e46c71b0c1abd1d9",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2e0a1b53809d2a0eaf245e034bdf88ccc90e1ed6"
        },
        "date": 1673863386993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.0068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 934.7763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6171.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 185.2763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 13.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1011.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1984.21875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.8203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.388671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47974768+monthonk@users.noreply.github.com",
            "name": "monthonk",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bf9e0da0146d01d783cc88a02b83df621d31c1a",
          "message": "Use real uid/gid/permission masks and make them configurable (#33)",
          "timestamp": "2023-01-16T11:47:41-06:00",
          "tree_id": "9a07022533a2d4505d0a2d545bcaa3d9552ba832",
          "url": "https://github.com/awslabs/s3-file-connector/commit/6bf9e0da0146d01d783cc88a02b83df621d31c1a"
        },
        "date": 1673892276680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.0576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 908.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6852.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1095.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2325.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.1025390625,
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
          "id": "58b896a9956642037dafcaffdd410a6fe555bcb0",
          "message": "First pass at file system semantics docs (#38)\n\n* First pass at file system semantics docs\r\n\r\n* Tweaks\r\n\r\n* More tweaks",
          "timestamp": "2023-01-16T09:51:00-08:00",
          "tree_id": "1f8f07a7a2a652d89c8d6e66b6ad02cbf2a6b811",
          "url": "https://github.com/awslabs/s3-file-connector/commit/58b896a9956642037dafcaffdd410a6fe555bcb0"
        },
        "date": 1673892474251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.7490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 3.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1171.1025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6990.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 172.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1292.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.1953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2367.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.029296875,
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
          "id": "f8d397fbae36d08843e008b08324ae01aea9905e",
          "message": "Make StorageClass optional in ListObjectsV2 result (#51)\n\nIt's already optional in the `ObjectInfo`, but we should behave nicely\r\nif it's not present.",
          "timestamp": "2023-01-16T15:15:22-08:00",
          "tree_id": "81935b7b92c2b31fcb436ae5cca9c5cecba87a4e",
          "url": "https://github.com/awslabs/s3-file-connector/commit/f8d397fbae36d08843e008b08324ae01aea9905e"
        },
        "date": 1673911931582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 3.904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 984.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6731.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 187.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1258.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 25.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2424.7265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.2646484375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}